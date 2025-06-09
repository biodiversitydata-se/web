---
layout: default
title: Webinars
permalink: /:path/:basename/
---
# {{ page.title }}

<div>
{% for section in site.data.webinars %}
  <h2>{{ section.title }}</h2>
  {% for webinar in section.items %}
    <article class="mb-2">
      <p>
        <a class="font-medium" href="{{ webinar.link }}">{{ webinar.title }}</a>
        {% if webinar.duration %}
          <span class="font-medium">[{{ webinar.duration }}].</span>
        {% endif %}
        {{ webinar.description }}
      </p>
    </article>
  {% endfor %}
{% endfor %}
</div>

<br>
> Sources:
> - [https://docs.biodiversitydata.se/courses-and-training/webinars/](https://docs.biodiversitydata.se/courses-and-training/webinars/)
