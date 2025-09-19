---
layout: default
title: Consortium partners
permalink: /:path/:basename/
---
# {{ page.title }}

The SBDI Consortium consists of eleven partner organizations. Below we list the SBDI Consortium partners and describe their responsibilities, contributions and skills.

{% for partner in site.data.partners %}
  <article class="clear-both overflow-auto">
    <header>
      <h2>{{ partner.title }}{% if partner.abbreviation %} ({{ partner.abbreviation }}){% endif %}</h2>
    </header>
    <img class="w-30 h-30 lg:w-36 lg:h-36 mr-4 lg:mr-6 float-left" src="/uploads/partners/{{ partner.image }}" alt="Logotype {{ partner.title }}" aria-hidden="true">
    <p>{{ partner.description }}</p>
  </article>
{% endfor %}

<br>
> Sources:
> - [https://biodiversitydata.se/about-us/who-we-are/sbdi-consortium-partners/](https://biodiversitydata.se/about-us/who-we-are/sbdi-consortium-partners/)
