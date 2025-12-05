---
layout: default
title: Tools and data
---
# {{ page.title }}

Here we list and describe all SBDI tools and portals that can be used to explore, download, and analyze biodiversity data. Our core tools and data access functionality is based on Living Atlases technology, but we also provide several specialized tools which are also linked to below.

<section aria-label="Tag filter">
  <p>You can filter the list by selecting one of the tags:</p>
  <div class="mb-4 space-x-1 space-y-2" aria-label="Tags">
    {% for tag in site.data.tool-tags %}
      <button data-filter="{{ tag | downcase }}" class="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-nowrap cursor-pointer">{{ tag }}</button>
    {% endfor %}
  </div>
</section>

<div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
{% for tool in site.data.tools %}
  {% assign tool_tags = tool.tags | join: "," | downcase %}
  <article class="flex flex-col border border-slate-300 cursor-pointer hover:bg-slate-100 rounded-lg" onclick="location.href='{{ tool.link }}';" data-tags="{{ tool_tags }}">
    {% if tool.image %}
      <img src="/uploads/tools/{{ tool.image }}" class="h-48 w-full rounded-t-lg {{ tool.image-class | default: "object-contain" }}" alt="" aria-hidden="true">
    {% endif %}
    <div class="flex-grow mx-4 my-2">
      <h3><a href="{{ tool.link }}" class="no-underline">{{ tool.name }}</a></h3>
      <div class="tool-description mb-1 text-slate-700">{{ tool.description }}</div>
    </div>
    <footer class="mx-4 mb-4 sm:space-x-1 space-y-1 text-sm" aria-label="Tags">
      {% for tag in tool.tags %}
        <span class="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-nowrap cursor-pointer">{{ tag }}</span>
      {% endfor %}
    </footer>
  </article>
{% endfor %}
</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll("[data-filter]");
    const tools = document.querySelectorAll("[data-tags]");

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
      tools.forEach(tool => {
        const tags = tool.dataset.tags.split(",");
        const visible = [...activeFilters].every(f => tags.includes(f));
        tool.style.display = visible || activeFilters.size === 0 ? "" : "none";
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
        const isActive = activeFilters.has(tag);
        activeFilters.clear();
        if (!isActive) {
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