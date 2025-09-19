---
layout: default
title: Event participation
permalink: /:path/:basename/
---
# {{ page.title }}

SBDI takes part in national and international events to exchange knowledge, spark collaboration, and inspire progress in biodiversity and ecosystem research.

## Upcoming events
<div>
{% include functions/fetch-events.html event_type="upcoming" %}
{% assign events_0 = events | where: "organize", false %}
{% for event in events_0 %}
  {% include event-list-item.html event=event %}
{% else %}
  - No upcoming events -
{% endfor %}
</div>

## Past events
<div>
{% include functions/fetch-events.html event_type="past" %}
{% assign events_0 = events | where: "organize", false %}
{% for event in events_0 %}
  {% include event-list-item-past.html event=event %}
{% else %}
  - No past events -
{% endfor %}
</div>
