---
layout: default
title: Executive Office
permalink: /:path/:basename/
---
# {{ page.title }}

The SBDI Executive Office (ExO) manages the daily business of SBDI and coordinates the work in different work groups.

<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
{% for item in site.data.organisation["executive_office"] %}
  <article class="max-w-3xs">
    <img src="/uploads/people/{{ item.image }}" class="h-56" alt="Picture of {{ item.name }}">
    <h2 class="text-xl mt-4">{{ item.name }}</h2>
    <div class="italic text-lg">{{ item.title }}</div>
    <div class="mt-3">{% include icons/envelope.html %}<a href="mailto:{{ item.email }}">{{ item.email }}</a></div>
    {% if item.phone %}
      <div class="mt-1">{% include icons/phone.html %}<a href="tel:{{ item.phone }}">{{ item.phone }}</a></div>
    {% endif %}
    <div class="mt-4 flex">
      {{ item.affiliation }}
      <img src="/uploads/partners/{{ item.affiliation_image }}" class="{{ item.affiliation_image_class | default: "h-20"}}" alt="Logotype of {{ item.affiliation }}" aria-hidden="true">
    </div>
  </article>
{% endfor %}
</div>
