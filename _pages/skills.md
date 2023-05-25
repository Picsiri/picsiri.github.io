---
layout: page
permalink: /skills/
title: Skills
subtitle: by time acquired or started
description: The skills I have acquired during my life sorted by time I have acquired the given skill or started learning it.
nav: false
---

<div id="skillCheckboxes" class="d-flex flex-column">
  <div class="row align-items-center">
    <div class="col-6">
      {%- for category in site.field_categories %}
        <label>
          <input type="checkbox"
          class="skillCheckbox"
          checked="true"
          id="check-{{ category }}"
          onclick="toggleCategoryDisplay('{{ category }}')">Show {{ category }}
        </label>
        <br>
      {% endfor %}
    </div>
    <div class="col-6">
      {%- for category in site.strength_categories %}
        <label>
          <input type="checkbox"
          class="skillCheckbox"
          checked="true"
          id="check-{{ category }}"
          onclick="toggleCategoryDisplay('{{ category }}')">Show {{ category }}
        </label>
        <br>
      {% endfor %}
    </div>
  </div>
</div>

<br>

<!-- pages/skills.md -->
<div class="skills">
  <!-- Display skills without categories -->
  {%- assign sorted_skills = site.skills | sort: "time_code" | reverse -%}
  <!-- Generate cards for each skill -->
  <div class="container">
    <div class="row row-cols-1">
    {%- for skill in sorted_skills -%}
      <div class="div-skill" categories="{{ skill.field }} {{ skill.strength }}">
        {% include skills_horizontal.html %}
      </div>
    {%- endfor %}
    </div>
  </div>
</div>
