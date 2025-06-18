import datetime
import json
import os
import re
from urllib.parse import urlparse

from bs4 import BeautifulSoup
import requests

URLS_FILE = '_script/migrate-from-wp/source-events.txt'
EVENTS_DIR = '_events'
IMAGE_DIR = 'uploads/events'
URL_MAPPING_FILE = '_script/migrate-from-wp/url-mapping-events.txt'

# Helper function
def slugify(value):
    value = value.lower()
    value = re.sub(r'[^\w\s-]', '-', value)
    value = re.sub(r'[\s_-]+', '-', value)
    value = re.sub(r'^-+|-+$', '', value)
    return value

url_mappings = []
events_count = 0
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
        start_time = datetime.datetime.fromisoformat(yoast_json['@graph'][5]["startDate"]).strftime('%Y-%m-%d %H:%M')
        start_time = start_time.replace(' 00:00', '')
        end_time = datetime.datetime.fromisoformat(yoast_json['@graph'][5]["endDate"]).strftime('%Y-%m-%d %H:%M')
        end_time = end_time.replace(' 23:59', '')
        if end_time == start_time:
            end_time = ''
        image_url = yoast_json['@graph'][0]["thumbnailUrl"] if yoast_json['@graph'][0].get("thumbnailUrl") else None
        image_name = f'{start_time[:10]}_{os.path.basename(image_url)}' if image_url else ''

        # Download image if available
        if image_url:
            image_response = requests.get(image_url)
            image_response.raise_for_status()
            image_path = os.path.join(IMAGE_DIR, f'{image_name}')
            with open(image_path, 'wb') as img_f:
                img_f.write(image_response.content)
            image_count += 1

        # Extract tribe-events-content which contains the main content of the event
        page_body = soup.find(class_='tribe-events-content')
        if page_body:
            page_body = page_body.decode_contents()
        else:
            print(f'No tribe-events-content found for {url}')
            continue

        # Save events page    
        output = f"""---
title: "{title}"
start_time: {start_time}
end_time: {end_time}
image: {image_name}
---
{page_body}
"""

        filename = os.path.join(EVENTS_DIR, f'{start_time[:10]}-{title.replace('/', '-')}.html')
        with open(filename, 'w', encoding='utf-8') as out_f:
            out_f.write(output)
        events_count += 1
        
        # Add URL mapping
        url_mappings.append(f'{urlparse(url).path};/events/{start_time[:4]}/{start_time[5:7]}/{slugify(title)}/\n')

    except Exception as e:
        print(f'Error processing {url}: {e}')

# Save URL mappings
with open(URL_MAPPING_FILE, 'w', encoding='utf-8') as out_f:
    out_f.writelines(url_mappings)

print(f'Done. Tried {len(urls)} url:s - saved {events_count} events and {image_count} images')
