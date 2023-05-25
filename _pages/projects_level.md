---
layout: page
permalink: /projects/level/
title: Projects
subtitle: by professional level
description: Work projects are the ones I did for my job or for a client. Productive projects are the ones I did for myself but it had major benefits for me or my work. Fun projects are the ones I did as recreation.
nav: false
display_categories: [work, productive, fun]
horizontal: false
---

<!-- pages/projects_level.md -->
<div class="projects">
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
    <h2 class="category">{{ category }}</h2>
    {%- assign categorized_projects = site.projects | where: "level", category -%}
    {%- assign sorted_projects = categorized_projects | sort: "time_code" | reverse %}
    <!-- Generate cards for each project -->
    {% if page.horizontal -%}
    <div class="container">
      <div class="row row-cols-2">
      {%- for project in sorted_projects -%}
        {% include projects_horizontal.html %}
      {%- endfor %}
      </div>
    </div>
    {%- else -%}
    <div class="grid">
      {%- for project in sorted_projects -%}
        {% include projects.html %}
      {%- endfor %}
    </div>
    {%- endif -%}
  {% endfor %}
</div>