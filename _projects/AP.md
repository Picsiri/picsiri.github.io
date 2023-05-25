---
layout: project
title: AP-Class
subtitle: 2017-
description: Back then it was more like a challenge than a hobby.
img: assets/img/drone/quad.jpg
time_code: 20170000
level: productive
volume: medium
---

I got into flying when I got a cheap <a href="https://www.emag.hu/jjrc-h31-vizallo-kvadkopter-feher-jjrc-h31-white/pd/D7S9G6BBM/">supermarket drone</a>. I flew it so mutch that its cheap plastic gears wore out. This hobby was still very new and the 450mm quad frame design was popular. I ordered the parts from china and one by one everything arrived.

<div class="row align-items-center">
    <div class="col-6">
        {% include figure.html path="assets/img/drone/quad.jpg" title="My first quadcopter" class="img-fluid rounded z-depth-1" data-lightbox="AP-first" %}
    </div>
    <div class="col-6">
        {% include figure.html path="assets/img/drone/pixhawk.jpg" title="Pixhawk Flight Controller" class="img-fluid rounded z-depth-1" data-lightbox="AP-first" %}
    </div>
</div>
<div class="row align-items-center">
    <div class="col-1">
        {% include figure.html path="assets/img/drone/parts-1.jpg" title="" class="img-fluid rounded z-depth-1" data-lightbox="AP-first" %}
    </div>
    <div class="col-1">
        {% include figure.html path="assets/img/drone/parts-2.jpg" title="" class="img-fluid rounded z-depth-1" data-lightbox="AP-first" %}
    </div>
    <div class="col-1">
        {% include figure.html path="assets/img/drone/parts-3.jpg" title="" class="img-fluid rounded z-depth-1" data-lightbox="AP-first" %}
    </div>
    <div class="col-1">
        {% include figure.html path="assets/img/drone/parts-4.jpg" title="" class="img-fluid rounded z-depth-1" data-lightbox="AP-first" %}
    </div>
    <div class="col-1">
        {% include figure.html path="assets/img/drone/parts-5.jpg" title="" class="img-fluid rounded z-depth-1" data-lightbox="AP-first" %}
    </div>
    <div class="col-2">
        {% include figure.html path="assets/img/drone/pixhawk-pack.jpg" title="" class="img-fluid rounded z-depth-1" data-lightbox="AP-first" %}
    </div>
    <div class="col-1">
        {% include figure.html path="assets/img/drone/parts-6.jpg" title="" class="img-fluid rounded z-depth-1" data-lightbox="AP-first" %}
    </div>
    <div class="col-1">
        {% include figure.html path="assets/img/drone/parts-7.jpg" title="" class="img-fluid rounded z-depth-1" data-lightbox="AP-first" %}
    </div>
    <div class="col-1">
        {% include figure.html path="assets/img/drone/parts-8.jpg" title="" class="img-fluid rounded z-depth-1" data-lightbox="AP-first" %}
    </div>
    <div class="col-1">
        {% include figure.html path="assets/img/drone/parts-9.jpg" title="" class="img-fluid rounded z-depth-1" data-lightbox="AP-first" %}
    </div>
    <div class="col-1">
        {% include figure.html path="assets/img/drone/parts-10.jpg" title="" class="img-fluid rounded z-depth-1" data-lightbox="AP-first" %}
    </div>
</div>
<div class="caption">
    Title image, my first quadcopter built around a <a href="https://pixhawk.org/">Pixhawk FC</a> and some of the parts at arrival.
</div>

Had many problems after the initial assembly and had to change some parts. As I had a 3D printer I could customize it exactly how I wanted. After a while I learned that the flight controller has a huge amount of inner logic and that it can be transmitted over the air and that there is a PC program that can display this data. I bought a telemetry transmitter set and learned how to use <a href="https://ardupilot.org/planner/">Mission Planner</a>.

<div class="row align-items-center">
    <div class="col-6">
        {% include figure.html path="assets/img/drone/telemetry.jpg" title="434MHz Telemetry set" class="img-fluid rounded z-depth-1" data-lightbox="AP-second" %}
    </div>
    <div class="col-6">
        {% include figure.html path="assets/img/drone/mission.jpg" title="Flying autonomously" class="img-fluid rounded z-depth-1" data-lightbox="AP-second" %}
    </div>
</div>
<div class="caption">
    434MHz Telemetry set and thanks to that, flying autonomously.
</div>

Later <a href="{{ '/projects/FPV/' | relative_url}}">I built my second drone</a>, a 5" freestyle quadcopter and upgraded the 450mm quadcopter into a 550mm hexacopter to be able to <a href="{{ '/projects/mapping/' | relative_url}}">use it for mapping</a>.

<div class="row align-items-center">
    <div class="col-6">
        {% include figure.html path="assets/img/drone/wall-mount.jpg" title="My two quadcopters on a wall-mount" class="img-fluid rounded z-depth-1" data-lightbox="AP-third" %}
    </div>
    <div class="col-6">
        {% include figure.html path="assets/img/drone/hexa.jpg" title="My hexacopter build from my quadcopter" class="img-fluid rounded z-depth-1" data-lightbox="AP-third" %}
    </div>
</div>
<div class="caption">
    My two quadcopters on a wall-mount and my hexacopter build from my quadcopter.
</div>

With the upgraded carry capacity I could start to experiment with the gimbal that I had since the beginning. At this point I had plans to use this big one for aerial photography which meant that a gimbal was a must have. Took me some time and a lot of digging into the depths of Mission Planner to get the FC to move the gimbal automatically.

<div class="row align-items-center">
    <div class="col-6">
        {% include figure.html path="https://www.youtube.com/embed/QSnZH75l7jI" title="Gimbal tests" class="embed-responsive embed-responsive-16by9 img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6">
        {% include figure.html path="https://www.youtube.com/embed/2RHuxcKNy2o" title="Gimbal tests" class="embed-responsive embed-responsive-16by9 img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row align-items-center">
    <div class="col-1"></div>
    <div class="col-4">
        {% include figure.html path="assets/img/printer/print-camera.jpg" title="Single camera setup's camera" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-2"></div>
    <div class="col-4">
        {% include figure.html path="assets/img/drone/camera-combo.jpg" title="Dual camera setup's cameras" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-1"></div>
</div>
<div class="caption">
    Gimbal tests and cameras used for the gimbal.
</div>

Not every test was a success and had crased my bigger drones a few times as well. One of them was incomprehensible to me as it happened during an autonomous mission. After returning the black box data and doing some <a href="https://www.ntsb.gov/Pages/home.aspx">NTSB</a> level aviation accident investigation, I found that the cause was that I probably misclicked when setting up the mission waypoints and set one of them to have an absolute altitude instead of an altitude above ground. Luckily this caused a rather soft yet unexpected landing.

<div class="row align-items-center">
    <div class="col-10 mx-auto">
        {% include figure.html path="https://www.youtube.com/embed/XPs8EGfkBzc" title="Crash log" class="embed-responsive embed-responsive-16by9 img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Crash investigation's result.
</div>