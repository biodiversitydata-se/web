---
layout: default
title: Portals and tools
---
# {{ page.title }}

Here we list and describe all SBDI portals and tools which can be used to explore, download, and analyze biodiversity data. Our core tools and data access functionality is based on Living Atlases technology, but we also provide several specialized tools which are also linked to below.

You can filter the list by selecting one or more tags:
<div class="mb-4 space-x-1">
  {% for tag in site.data.portal-tags %}
    <button data-filter="{{ tag | downcase }}" class="px-3 py-1 mb-2 rounded-full bg-gray-200 text-gray-700 cursor-pointer">{{ tag }}</button>
  {% endfor %}
</div>

<div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
{% for portal in site.data.portals %}
  {% assign portal_tags = portal.tags | join: "," | downcase %}
  <article class="shadow-md cursor-pointer hover:bg-slate-100 rounded-lg" onclick="location.href='{{ portal.link }}';" data-tags="{{ portal_tags }}">
    {% if portal.image %}
      <img src="/uploads/portals/{{ portal.image }}" class="h-48 {% if portal.image-full-width %}w-full rounded-t-lg{% else %}m-auto{% endif %}" alt="">
    {% endif %}
    <div class="px-4 py-2">
      <h3><a href="{{ portal.link }}" class="no-underline">{{ portal.name }}</a></h3>
      <div class="tool-description mb-1 text-slate-700">{{ portal.description }}</div>
    </div>
  </article>
{% endfor %}
</div>

<br>
<br>
> Sources:
> - [https://biodiversitydata.se/explore-analyze/data-and-tools/sbdi-tools/](https://biodiversitydata.se/explore-analyze/data-and-tools/sbdi-tools/)
> - [https://tools.biodiversitydata.se/](https://tools.biodiversitydata.se/)

<script defer>
  document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll("[data-filter]");
    const articles = document.querySelectorAll("[data-tags]");

    let activeFilters = new Set();

    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const tag = btn.dataset.filter;

        if (activeFilters.has(tag)) {
          activeFilters.delete(tag);
          btn.classList.remove("bg-blue-600", "text-white");
          btn.classList.add("bg-gray-200", "text-gray-700");
        } else {
          activeFilters.add(tag);
          btn.classList.add("bg-blue-600", "text-white");
          btn.classList.remove("bg-gray-200", "text-gray-700");
        }

        articles.forEach(article => {
          const tags = article.dataset.tags.split(",");
          // check if all activeFilters are included
          const visible = [...activeFilters].every(f => tags.includes(f));
          article.style.display = visible || activeFilters.size === 0 ? "" : "none";
        });
      });
    });
  });
</script>