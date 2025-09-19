---
layout: default
title: Webinars
permalink: /:path/:basename/
---
# {{ page.title }}

Here you find a library of past webinars and workshop recordings. You can also browse the [SBDI YouTube channel](https://www.youtube.com/channel/UCaq-l_Tl3XXZm4v8EFuKbvw) for more movies and webinars.

<div>
{% for section in site.data.webinars %}
  <h2>{{ section.title }}</h2>
  {% for webinar in section.items %}
    <article class="mb-2">
      <header>
        <h3>
          <a href="{{ webinar.link }}">{{ webinar.title }}</a>
          {% if webinar.duration %}<span>[{{ webinar.duration }}]</span>{% endif %}
        </h3>
      </header>
      <p>
        {{ webinar.description }}
      </p>
    </article>
  {% endfor %}
{% endfor %}
</div>
