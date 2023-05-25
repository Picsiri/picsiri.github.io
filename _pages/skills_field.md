---
layout: page
permalink: /skills/field/
title: Skills
subtitle: by field of profession
description: An ordered set of my skills categorized by field of profession. As you are going lower in the list, the categiries are getting more distant from my engineering core competencies. Inside each category, the skills are ordered by strength of knowledge.
nav: false
horizontal: false
---

<div id="skillCheckboxes">
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

<!-- pages/skill_field.md -->
<div class="skills">
  <!-- Display categorized skills -->
  {%- for category in site.field_categories %}
    <h2 class="category">{{ category }}</h2>
    {%- assign categorized_skills = site.skills | where: "field", category -%}
    <!-- Generate cards for each skill -->
    <div class="grid">
      {% for strength_category in site.strength_categories %}
        {%- for skill in categorized_skills -%}
          {% if skill.strength == strength_category %}
            {% include skills_field.html %}
          {% endif %}
        {%- endfor %}
      {% endfor %}
    </div>
  {% endfor %}
</div>
