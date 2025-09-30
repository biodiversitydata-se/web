---
layout: default
title: About
---
# {{ page.title }}

**The Swedish Biodiversity Data Infrastructure (SBDI)** is a national e-infrastructure that empowers research and innovation in biodiversity and ecosystems. By providing open access to high-quality data and powerful analysis tools, SBDI creates new opportunities for interdisciplinary research and discovery.

Serving as the **Swedish node of the Global Biodiversity Information Facility (GBIF)**, SBDI enables scientists, policymakers, and other stakeholders to address the biodiversity crisis with reliable data and innovative digital solutions.

<div class="mt-4 mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
{% for partner in site.data.partners %}
  <a href="{{ partner.link }}" title="{{ partner.title }}">
    <img src="/uploads/partners/{{ partner.image }}" alt="Logotype {{ partner.title }}">
  </a>
{% endfor %}
  <a href="https://www.gbif.se" title="GBIF Sweden">
    <img src="/uploads/partners/gbif.svg" alt="Logotype GBIF Sweden">
  </a>
</div>

## More information
- [Strategic plan for 2025-2030](/uploads/Strategic-plan-for-SBDI-2025-2030_FINAL.pdf)
- [Organizational and Technical overview](/uploads/SBDI-Organizational-and-Technical-Overview.pdf)
- [Equality plan](/uploads/Equality-Plan_SBDI_ENG.pdf)
- [FAIR and Open](https://fairsharing.org/)
