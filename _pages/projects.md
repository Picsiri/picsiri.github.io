---
layout: page
permalink: /projects/
title: Projects
subtitle: by time started
description: The list of projects I've worked on.
nav: false
horizontal: true
---

<!-- pages/projects.md -->
<div class="projects">
  <!-- Display projects without categories -->
  {%- assign sorted_projects = site.projects | sort: "time_code" | reverse -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-1">
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
</div>