---
layout: project
title: LED Board
subtitle: 2015-
description: Saw it on the internet, wanted to make one myself.
img: assets/img/ledboard/black-white.jpg
time_code: 20150900
level: fun
volume: small
---

I was looking for a solution to brighten up my room. I wanted something that was unique, nice, power efficient, customizable and could DIY. I found a video on YouTube that gave me the idea to make my own LED board room light. Because of my novice skills, I had to be rather modest with my requirements with the first version, but over the years I upgraded it to tick all the boxes. The first version only contained white LED strips and could only be dimmed.

<div class="row align-items-center">
    <div class="col-11 mx-auto">
        {% include figure.html path="assets/img/ledboard/black-white.jpg" title="LED board with white lights" class="img-fluid rounded z-depth-1" data-lightbox="led-first" %}
    </div>
</div>
<div class="row align-items-center">
    <div class="col-1"></div>
    <div class="col-3">
        {% include figure.html path="assets/img/ledboard/build-1.jpg" title="Build progress" class="img-fluid rounded z-depth-1" data-lightbox="led-first" %}
    </div>
    <div class="col-3 mx-auto">
        {% include figure.html path="assets/img/ledboard/build-2.jpg" title="Build progress" class="img-fluid rounded z-depth-1" data-lightbox="led-first" %}
    </div>
    <div class="col-3">
        {% include figure.html path="assets/img/ledboard/build-3.jpg" title="Build progress" class="img-fluid rounded z-depth-1" data-lightbox="led-first" %}
    </div>
    <div class="col-1"></div>
</div>
<div class="caption">
    Title image, first version of the LED board with white lights on and some images of the build process.
</div>

I've met and started using <a href="https://cdn-shop.adafruit.com/datasheets/WS2812B.pdf">WS2812B LED</a> ICs. These are 5V supplied serial latch ICs which means they can be stringed and each of them can be addressed individually with only one digital line. Most importantly they can be bought in strip form as well.

A more complex control interface was also required, a simple potentiometer was not enough anymore. At first I started to develop my own website based UI on an <a href="https://www.espressif.com/en/products/socs/esp32">ESP32</a>. After implementing many features and effects, I realized that there might be people who already done this and found the <a href="https://kno.wled.ge/">WLED project</a>. This was the first time I learned about opensource projects.

<div class="row align-items-center">
    <div class="col-11 mx-auto">
        {% include figure.html path="https://www.youtube.com/embed/fDK2Q-LB-Do" title="" class="embed-responsive embed-responsive-16by9 img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row align-items-center">
    <div class="col-3">
        {% include figure.html path="assets/img/ledboard/build-10.jpg" title="Build progress" class="img-fluid rounded z-depth-1" data-lightbox="led-second" %}
    </div>
    <div class="col-3">
        {% include figure.html path="assets/img/ledboard/build-11.jpg" title="Build progress" class="img-fluid rounded z-depth-1" data-lightbox="led-second" %}
    </div>
    <div class="col-3">
        {% include figure.html path="assets/img/ledboard/build-12.jpg" title="Build progress" class="img-fluid rounded z-depth-1" data-lightbox="led-second" %}
    </div>
    <div class="col-3">
        {% include figure.html path="assets/img/ledboard/rainbow.jpg" title="Board after RGB upgrade" class="img-fluid rounded z-depth-1" data-lightbox="led-second" %}
    </div>
</div>
<div class="caption">
    First upgrade, WS2812B LED strips and WLED control interface.
</div>

Last upgrade I made on it was to change the logo's backlight to a proper high density PCB based LED strip. The old janky one was falling apart and the LEDs were not evenly distributed. Intensity was also too low and the logo was too dimm. At the time I was deeply into PCB desing and manufacturing so I could solve this without much overhead.

<div class="row align-items-center">
    <div class="col-11 mx-auto">
        {% include figure.html path="https://www.youtube.com/embed/2gDj_Vy58X8" title="" class="embed-responsive embed-responsive-16by9 img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row align-items-center">
    <div class="col-3">
        {% include figure.html path="assets/img/ledboard/build-20.jpg" title="Build progress" class="img-fluid rounded z-depth-1" data-lightbox="led-third" %}
    </div>
    <div class="col-3">
        {% include figure.html path="assets/img/ledboard/build-21.jpg" title="Build progress" class="img-fluid rounded z-depth-1" data-lightbox="led-third" %}
    </div>
    <div class="col-3">
        {% include figure.html path="assets/img/ledboard/build-22.jpg" title="Build progress" class="img-fluid rounded z-depth-1" data-lightbox="led-third" %}
    </div>
    <div class="col-3">
        {% include figure.html path="assets/img/ledboard/build-23.jpg" title="Build progress" class="img-fluid rounded z-depth-1" data-lightbox="led-third" %}
    </div>
</div>
<div class="caption">
    Last upgrade, high density PCB based LED strip for the logo.
</div>

Later I built a set of boards like this one for my brother.

<div class="row align-items-center">
    <div class="col-4">
        {% include figure.html path="assets/img/ledboard/bros-progress.jpg" title="" class="img-fluid rounded z-depth-1" data-lightbox="led-fourth" %}
    </div>
    <div class="col-8">
        {% include figure.html path="assets/img/ledboard/bros-done.mp4" class="video-fluid" controls="true" %}
    </div>
</div>
<div class="caption">
    LED boards being built for my brother and installed in his room.
</div>