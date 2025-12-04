---
layout: default
title: Our events
---
# {{ page.title }}

SBDI organizes conferences and events that foster knowledge sharing, collaboration, and innovation in biodiversity and ecosystem research. These gatherings bring together scientists, policymakers, and stakeholders to advance understanding and drive action on biodiversity challenges.

<article>
  <h2>Upcoming events</h2>
  {% include functions/fetch-events.html event_type="upcoming" %}
  {% assign events_0 = events | where: "organize", true %}
  {% for event in events_0 %}
    {% include event-list-item.html event=event %}
  {% else %}
    <span>- No upcoming events -</span>
  {% endfor %}
</article>

<article>
  <h2>Past events</h2>
  {% include functions/fetch-events.html event_type="past" %}
  {% assign events_0 = events | where: "organize", true %}
  {% for event in events_0 %}
    {% include event-list-item-past.html event=event %}
  {% else %}
    <span>- No past events -</span>
  {% endfor %}
</article>
