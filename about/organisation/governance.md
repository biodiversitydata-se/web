---
layout: default
title: Governance
permalink: /:path/:basename/
---
# {{ page.title }}

## Steering committee
SBDI is governed by an independent Steering Committee (SC) composed of seven representatives with wide experience from research and research infrastructure in Sweden and abroad.

{% for item in site.data.organisation["steering_committee"] %}
  - *{{ item.name }}*, {{ item.affiliation }}
{% endfor %}

## Scientific committee
The SBDI SC is supported by a Scientific Committee (SciC). The SciC consists of internationally renowned representatives from the biodiversity informatics and user communities.

{% for item in site.data.organisation["scientific_committee"] %}
  - *{{ item.name }}*, {{ item.affiliation }}
{% endfor %}

## Stakeholder assembly
Additionally, representatives from the heads of all partner organizations in the SBDI consortium congregate for an annual Stakeholder assembly, pointing out directions to the SC and handling common matters related to the overarching administration of the SBDI consortium.

<br>
> Sources:
> - [https://biodiversitydata.se/about-us/who-we-are/sbdi-governance/](https://biodiversitydata.se/about-us/who-we-are/sbdi-governance/)
