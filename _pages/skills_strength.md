---
layout: page
permalink: /skills/strength/
title: Skills
subtitle: by strength
description: Based on self-declaration as I am not a collector of certificates. The 'would' category includes skills I haven't had the opportunity to learn yet, but would like to.
nav: false
horizontal: false
---

<div id="skillCheckboxes">
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

<!-- pages/skill_strength.md -->
<div class="skills">
  <!-- Display categorized skills -->
  {%- for category in site.strength_categories %}
    <h2 class="category">{{ category }}</h2>
    {%- assign categorized_skills = site.skills | where: "strength", category -%}
    <!-- Generate cards for each skill -->
    <div class="grid">
      {% for field_category in site.field_categories %}
        {%- for skill in categorized_skills -%}
          {% if skill.field == field_category %}
            {% include skills_strength.html %}
          {% endif %}
        {%- endfor %}
      {% endfor %}
    </div>
  {% endfor %}
</div>
