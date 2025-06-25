---
layout: default
title: Training
permalink: /:path/:basename/
---
# {{ page.title }}

## Online courses
Below you find an overview of our educational online modules in Biodiversity Informatics. Many of these modules are thematically linked and can be used to stepwise build up your expertise in a certain topic. 

<div>
{% for course in site.courses %}
  <article class="mt-6 pb-4 border-b-4 border-slate-200 last:border-0">
    <header>
      <h3><a href="{{ course.url }}">{{ course.title }}</a></h3>
    </header>
    <p class="mt-2">
      {% include preamble.html page=course %}
    </p>
    <footer>
      <a href="{{ course.url }}" title="{{ course.title }}" class="link-icon text-lg">Read more</a>
    </footer>
  </article>
{% endfor %}
</div>

<br>
> Sources:
> - [https://docs.biodiversitydata.se/courses-and-training/online-courses/](https://docs.biodiversitydata.se/courses-and-training/online-courses/)
