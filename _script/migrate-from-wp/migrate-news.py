import json
import os
import re
from urllib.parse import urlparse

from bs4 import BeautifulSoup
import requests

URLS_FILE = '_script/migrate-from-wp/source-news.txt'
NEWS_DIR = '_news'
IMAGE_DIR = 'uploads/news'
URL_MAPPING_FILE = '_script/migrate-from-wp/url-mapping-news.txt'

# Helper function
def slugify(value):
    value = value.lower()
    value = re.sub(r'[^\w\s-]', '-', value)
    value = re.sub(r'[\s_-]+', '-', value)
    value = re.sub(r'^-+|-+$', '', value)
    return value

url_mappings = []
news_count = 0
image_count = 0

# Read URLs from file
with open(URLS_FILE, 'r') as f:
    urls = [line.strip() for line in f if line.strip()]

for url in urls:
    try:
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')

        # Extract yoast-schema-graph which contains metadata in json
        yoast_elem = soup.find(class_='yoast-schema-graph')
        if yoast_elem:
            yoast_json = json.loads(yoast_elem.string or yoast_elem.text)
        else:
            print(f'No yoast-schema-graph found for {url}')
            continue

        title = yoast_json['@graph'][0]["name"].replace(' - Swedish Biodiversity Data Infrastructure', '')
        publish_date = yoast_json['@graph'][0]["datePublished"][:10]
        image_url = yoast_json['@graph'][0]["thumbnailUrl"] if yoast_json['@graph'][0].get("thumbnailUrl") else None
        image_name = f'{publish_date}_{os.path.basename(image_url)}' if image_url else ''

        # Download image if available
        if image_url:
            image_response = requests.get(image_url)
            image_response.raise_for_status()
            image_path = os.path.join(IMAGE_DIR, f'{image_name}')
            with open(image_path, 'wb') as img_f:
                img_f.write(image_response.content)
            image_count += 1

        # Extract entry-content which contains the main content of the news
        page_body = soup.find(class_='entry-content')
        if page_body:
            page_body = page_body.decode_contents()
        else:
            print(f'No entry-content found for {url}')
            continue

        # Save news page    
        output = f"""---
title: "{title}"
date: {publish_date}
image: {image_name}
---
{page_body}
"""

        filename = os.path.join(NEWS_DIR, f'{publish_date}-{title.replace('/', '-')}.html')
        with open(filename, 'w', encoding='utf-8') as out_f:
            out_f.write(output)
        news_count += 1
        
        # Add URL mapping
        url_mappings.append(f'{urlparse(url).path};/news/{publish_date[:4]}/{slugify(title)}/\n')

    except Exception as e:
        print(f'Error processing {url}: {e}')

# Save URL mappings
with open(URL_MAPPING_FILE, 'w', encoding='utf-8') as out_f:
    out_f.writelines(url_mappings)

print(f'Done. Tried {len(urls)} url:s - saved {news_count} news and {image_count} images')
