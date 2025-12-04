---
layout: default
title: Other important events
permalink: /:path/:basename/
---
# {{ page.title }}

SBDI takes part in national and international events to exchange knowledge, spark collaboration, and inspire progress in biodiversity and ecosystem research.

<article>
  <h2>Upcoming events</h2>
  {% include functions/fetch-events.html event_type="upcoming" %}
  {% assign events_0 = events | where: "organize", false %}
  {% for event in events_0 %}
    {% include event-list-item.html event=event %}
  {% else %}
    <span>- No upcoming events -</span>
  {% endfor %}
</article>

<article>
  <h2>Past events</h2>
  {% include functions/fetch-events.html event_type="past" %}
  {% assign events_0 = events | where: "organize", false %}
  {% for event in events_0 %}
    {% include event-list-item-past.html event=event %}
  {% else %}
    <span>- No past events -</span>
  {% endfor %}
</article>
