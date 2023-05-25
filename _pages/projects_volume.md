---
layout: page
permalink: /projects/volume/
title: Projects
subtitle: by volume
description: It is a somewhat arbitrary distinction, but the general rule is; the more time I spent and the more complex the project was, the higher the volume.
nav: false
display_categories: [great, medium, small]
horizontal: false
---

<!-- pages/projects_volume.md -->
<div class="projects">
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
    <h2 class="category">{{ category }}</h2>
    {%- assign categorized_projects = site.projects | where: "volume", category -%}
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
