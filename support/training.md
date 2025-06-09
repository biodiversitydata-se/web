---
layout: default
title: Training
permalink: /:path/:basename/
---
# {{ page.title }}

<div>
{% for section in site.data.training %}
  <h2>{{ section.title }}</h2>
  {% for course in section.items %}
    <article class="mb-2">
      <p>
        <a class="font-medium" href="{{ course.link }}">{{ course.title }}</a>
      </p>
    </article>
  {% endfor %}
{% endfor %}
</div>

<br>
> Sources:
> - [https://docs.biodiversitydata.se/courses-and-training/online-courses/](https://docs.biodiversitydata.se/courses-and-training/online-courses/)
> - [https://docs.biodiversitydata.se/courses-and-training/phd-courses/](https://docs.biodiversitydata.se/courses-and-training/phd-courses/)
