---
layout: default
title: Portals
---
# {{ page.title }}

Here we list and describe all SBDI portals and tools which can be used to explore, download, and analyze biodiversity data. Our core tools and data access functionality is based on Living Atlases technology, but we also provide several specialized tools which are also linked to below.

<div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
{% for portal in site.data.portals %}
  <article class="shadow-md cursor-pointer hover:bg-slate-100" onclick="location.href='{{ portal.link }}';">
    {% if portal.image %}
      <img src="/uploads/portals/{{ portal.image }}" class="h-48 {% if portal.image-full-width %}w-full{% else %}m-auto{% endif %}" alt="">
    {% endif %}
    <div class="px-4 py-2">
      <h3><a href="{{ portal.link }}" class="no-underline">{{ portal.name }}</a></h3>
      <p class="mb-1 text-slate-600">{{ portal.description }}</p>
    </div>
  </article>
{% endfor %}
</div>

<br>
<br>
> Sources:
> - [https://biodiversitydata.se/explore-analyze/data-and-tools/sbdi-tools/](https://biodiversitydata.se/explore-analyze/data-and-tools/sbdi-tools/)
> - [https://tools.biodiversitydata.se/](https://tools.biodiversitydata.se/)

> - Unsure about the division between internal/external
> - Detail pages for each item probably not necessary
> - The Bioatlas need some sort of index page
