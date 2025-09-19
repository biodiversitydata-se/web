---
layout: default
title: Event organization
---
# {{ page.title }}

SBDI organizes conferences and events that foster knowledge sharing, collaboration, and innovation in biodiversity and ecosystem research. These gatherings bring together scientists, policymakers, and stakeholders to advance understanding and drive action on biodiversity challenges.

## Upcoming events
<div>
{% include functions/fetch-events.html event_type="upcoming" %}
{% assign events_0 = events | where: "organize", true %}
{% for event in events_0 %}
  {% include event-list-item.html event=event %}
{% else %}
  - No upcoming events -
{% endfor %}
</div>

## Past events
<div>
{% include functions/fetch-events.html event_type="past" %}
{% assign events_0 = events | where: "organize", true %}
{% for event in events_0 %}
  {% include event-list-item-past.html event=event %}
{% else %}
  - No past events -
{% endfor %}
</div>