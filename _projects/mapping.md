---
layout: project
title: Mapping with drones
subtitle: 2021.01.
description: Testing my possibilities with drone mapping.
img: assets/img/drone/licence.jpg
time_code: 20210100
level: fun
volume: great
---

Thanks to my boss at Sagax, I got to participate in a drone piloting <a href="https://www.dronakademia.hu/monitoring/">course</a>. The <a href="https://www.dronakademia.hu/">organisation</a>'s main profile is the distribution of aggricultural drones and also provides services related to that, like mapping and aggricultural surveys. On the course I learned a bit about the legal aspects, the usage of drones in agriculture and a lot about mapping with them.

<div class="row align-items-center">
    <div class="col-8 mx-auto">
        {% include figure.html path="assets/img/drone/licence.jpg" title="My licence on my hexa frame" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Title image, my licence on my F550 hexacopter frame.
</div>

I decided to finally upgrade my quadcopter to a hexacopter as I found the carry capacity of the quadcopter lacking for mapping. I needed more battery for a longer flight to be able to cover a greater area but the quadcopter was barely manouverable with two battery packs.

<div class="row align-items-center">
    <div class="col-3">
        {% include figure.html path="assets/img/drone/quad.jpg" title="My quadcopter" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6">
        {% include figure.html path="assets/img/drone/donor-post.jpg" title="My Instagram post about the upgrade" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-3">
        {% include figure.html path="assets/img/drone/hexa.jpg" title="The complete hexacopter" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    My quadcopter before the upgrade (left), my Instagram post about the upgrade (center) and the complete hexacopter (right).
</div>

I also bough an affordable <a href="https://en.wikipedia.org/wiki/Normalized_difference_vegetation_index">NDVI camera</a> set. I also had a gimbal from earlier but I had to upgrade that as well to be able to carry the dual camera setup. The arms had to be extended and a custom case to be made. I made a 3D printable design that has the setup's center of gravity to be on the axis of the 3 motors.

<div class="row align-items-center">
    <div class="col-6">
        {% include figure.html path="assets/img/drone/camera-combo.jpg" title="The NDVI camera set" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6">
        {% include figure.html path="assets/img/drone/camera-mount.jpg" title="CAD model of the upgraded gimbal" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The NDVI camera set (left) and CAD model of the upgraded gimbal (right).
</div>

I found a quiet ufrequented area near were I was living and went on many practice rounds there. I tested the camera setup, the settings, piloting and multiple mapping softwares in paralell. One of the most successful result of theese tests was a complete map overlay image of that area.

<div class="row">
    <div class="col-10 mx-auto">
        {% include figure.html path="https://www.youtube.com/embed/km4_1KNs75c" title="Map making" class="embed-responsive embed-responsive-16by9 img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row align-items-center">
    <div class="col-4">
        {% include figure.html path="assets/img/drone/mapping.jpg" title="Map overlay with unoriented, unmerged images" class="img-fluid rounded z-depth-1" data-lightbox="mapping-me" %}
    </div>
    <div class="col-4">
        {% include figure.html path="assets/img/drone/mapping-top.jpg" title="Map overlay after processing" class="img-fluid rounded z-depth-1" data-lightbox="mapping-me" %}
    </div>
    <div class="col-4">
        {% include figure.html path="assets/img/drone/me-top.jpg" title="Me and my car" class="img-fluid rounded z-depth-1" data-lightbox="mapping-me" %}
    </div>
</div>
<div class="caption">
    Results of the mapping practice runs.
</div>

I also made maps using the near infrared camera's images. The coloring should indicate the health of the plants. Although it seemed all right because of some artifacts I learned about on the course, for example tree's shadows should show up green which you can see on the left side, I was not qualidied to tell if a plant is healthy or not.

<div class="row align-items-center">
    <div class="col-6">
        {% include figure.html path="assets/img/drone/NDVI.jpg" title="NDVI image of the area" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6">
        {% include figure.html path="assets/img/drone/NDVI-overlay.jpg" title="NDVI image overlayed on google satellite image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    NDVI image of the area (left) and NDVI image overlayed on google satellite image (right).
</div>

To find out exactly how accurate the camera is I looked for a farmer with a field that I could use for practicing. For the first round I decided to go for a simple mapping of a field. It went well and could generate it. I went back later to make images for an NDVI map, but crashed my drone into a tall tree. (Wanted to make high resolution images and drew a mission with a lower altitude than before. The problem was that I estimated the height of the trees wrong.)

<div class="row align-items-center">
    <div class="col-6">
        {% include figure.html path="assets/img/drone/field-test.jpg" title="Overlay of the satellite image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6">
        {% include figure.html path="assets/img/drone/field-tree.jpg" title="Drone crashing into a tree" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overlay of the field on the satellite image (left) and an image captured when my drone crashed into a tree (right).
</div>

I had to repair the drone. Luckily the damage was moderate and I could fix it with some spare parts. The problem was that while this was going on I found a new workplace and had no time nor incentive to continue the project.