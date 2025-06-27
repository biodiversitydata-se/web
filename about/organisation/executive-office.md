---
layout: default
title: Executive office
permalink: /:path/:basename/
---
# {{ page.title }}

The SBDI Executive Office (ExO) manages the daily business of SBDI and coordinates the work in different work groups.

The ExO consists of the SBDI Director, the deputy Director, the Project Coordinator and two Consortium representatives. The Consortium representatives are elected among the SBDI partners on a two year basis. The elected partner representatives are also tasked to lead the SBDI Coordination group, where all partner organizations are represented.

SBDI Executive Office currently consists of:
{% for item in site.data.organisation["executive_office"] %}
  - *{{ item.name }}*, {{ item.title }}, {{ item.affiliation }}
{% endfor %}

<br>
> Sources:
> - [https://biodiversitydata.se/about-us/who-we-are/sbdi-executive-office/](https://biodiversitydata.se/about-us/who-we-are/sbdi-executive-office/)
