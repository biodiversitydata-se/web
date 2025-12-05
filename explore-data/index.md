---
layout: default
title: Tools and data
---
# {{ page.title }}

Here we list and describe all SBDI tools and portals that can be used to explore, download, and analyze biodiversity data. Our core tools and data access functionality is based on Living Atlases technology, but we also provide several specialized tools which are also linked to below.

<section aria-label="Tag filter">
  <p>You can filter the list by selecting one or more tags:</p>
  <div class="mb-4 space-x-1 space-y-2" aria-label="Tags">
    {% for tag in site.data.portal-tags %}
      <button data-filter="{{ tag | downcase }}" class="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-nowrap cursor-pointer">{{ tag }}</button>
    {% endfor %}
  </div>
</section>

<div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
{% for portal in site.data.portals %}
  {% assign portal_tags = portal.tags | join: "," | downcase %}
  <article class="flex flex-col border border-slate-300 cursor-pointer hover:bg-slate-100 rounded-lg" onclick="location.href='{{ portal.link }}';" data-tags="{{ portal_tags }}">
    {% if portal.image %}
      <img src="/uploads/portals/{{ portal.image }}" class="h-48 w-full rounded-t-lg {{ portal.image-sizing | default: "object-contain" }}" alt="" aria-hidden="true">
    {% endif %}
    <div class="flex-grow mx-4 my-2">
      <h3><a href="{{ portal.link }}" class="no-underline">{{ portal.name }}</a></h3>
      <div class="tool-description mb-1 text-slate-700">{{ portal.description }}</div>
    </div>
    <footer class="mx-4 mb-4 sm:space-x-1 space-y-1 text-sm" aria-label="Tags">
      {% for tag in portal.tags %}
        <span class="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-nowrap cursor-pointer">{{ tag }}</span>
      {% endfor %}
    </footer>
  </article>
{% endfor %}
</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll("[data-filter]");
    const portals = document.querySelectorAll("[data-tags]");

    const getActiveFiltersFromHash = () => {
      const hash = window.location.hash.slice(1); // remove '#'
      const params = new URLSearchParams(hash);
      const tags = params.get("tags");
      return tags ? new Set(tags.split(",")) : new Set();
    }

    const updateHash = () => {
      const params = new URLSearchParams();
      if (activeFilters.size > 0) {
        params.set("tags", [...activeFilters].join(","));
      }
      window.location.hash = params.toString();
    }

    const applyFilters = () => {
      portals.forEach(portal => {
        const tags = portal.dataset.tags.split(",");
        const visible = [...activeFilters].every(f => tags.includes(f));
        portal.style.display = visible || activeFilters.size === 0 ? "" : "none";
      });

      filterButtons.forEach(btn => {
        const tag = btn.dataset.filter;
        if (activeFilters.has(tag)) {
          btn.classList.add("bg-blue-600", "text-white");
          btn.classList.remove("bg-gray-200", "text-gray-700");
        } else {
          btn.classList.remove("bg-blue-600", "text-white");
          btn.classList.add("bg-gray-200", "text-gray-700");
        }
      });
    }

    // Init
    let activeFilters = getActiveFiltersFromHash();
    applyFilters();

    // Update filters on button click
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const tag = btn.dataset.filter;
        if (activeFilters.has(tag)) {
          activeFilters.delete(tag);
        } else {
          activeFilters.add(tag);
        }
        updateHash();
        applyFilters();
      });
    });

    // Handle back/forward navigation (hash changes)
    window.addEventListener("hashchange", () => {
      activeFilters = getActiveFiltersFromHash();
      applyFilters();
    });
  });
</script>