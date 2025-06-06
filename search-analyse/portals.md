---
layout: default
title: Portals
permalink: /:path/:basename/
---
# {{ page.title }}

Here we list and describe all SBDI portals and tools which can be used to explore, download, and analyze biodiversity data. Our core tools and data access functionality is based on Living Atlases technology, but we also provide several specialized tools which are also linked to below.

<div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
{% for portals in site.data.portals %}
  <article class="shadow-md cursor-pointer hover:bg-slate-100" onclick="location.href='{{ portals.link }}';">
    <img src="/uploads/portals/{{ portals.image }}" class="h-48 {% if portals.image-full-width %}w-full{% else %}m-auto{% endif %}" alt="">
    <div class="px-4 py-2">
      <h3><a href="{{ portals.link }}" class="no-underline">{{ portals.name }}</a></h3>
      <p class="mb-1 text-slate-600">{{ portals.description }}</p>
    </div>
  </article>
{% endfor %}
</div>
