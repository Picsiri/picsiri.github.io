---
layout: project
title: Thesis Work
subtitle: At University<br>2019
description: Evolved from a semester project to a thesis work.
img: assets/img/thesis/grab-crop.jpg
time_code: 20190000
level: work
volume: great
---

My thesis work was based on a semester subject. In this class, we had to develop a small <a href="https://en.wikipedia.org/wiki/Automated_guided_vehicle">AGV (Automated Guided Vehicle)</a> that could navigate and interact with the enviroment. The students were divided into two groups and each got one of the tasks. We got two <a href="https://www.waveshare.com/wiki/AlphaBot2-Pi">AlphaBot2</a>s as a platform to build uppon.

<div class="row align-items-center">
    <div class="col-10 mx-auto">
        {% include figure.html path="assets/img/thesis/project-platforms.jpg" title="The AlphaBots provided as platforms for the project" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The <a href="https://www.waveshare.com/wiki/AlphaBot2-Pi">AlphaBot2</a>s provided as platforms for the project.
</div>

The enviroment was a small simulated factory with elements that one would find in a typical modern, highly automated factory. Our groups task was to solve the navigation. The markings seen as black and white strips were there to aid the old AGV units in navigation and were undesired. The new navigation system had to be able to navigate without visible anchor points on the desk.

<div class="row align-items-center">
    <div class="col-12">
        {% include figure.html path="assets/img/thesis/field-pano.jpg" title="The smart factory desk" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The <a href="https://www.sztaki.hu/innovacio/projektek/smartfactory">smart factory</a> desk.
</div>

I decided to go with optical position tracking and bought two mouses to use their electronics. We needed two because they are only able to detect two linear movements and no rotation. At first we designed a simple carriage that had two axis of rotation for each sensor.

Test however showed that the sensors were very sensitive to the distance between the ground and the optics, therefore the rotations alone were too rigid to provide contact with the ground at all times. We implemented a springed suspension to allow movement in the vertical axis.

This mostly solved the problem and we could track the position of the unit. The problems remaining were that narrow but relatively high obstacles still caused enough disturbance to make the sensors skip a step and they accumulated error too that rendered them unfeasible for absolute positioning. As this was only a semester project, we run out of time at this stage but still got the best grade.

<div class="row align-items-center">
    <div class="col-6">
        {% include figure.html path="assets/img/thesis/proto-off.jpg" title="Prototype unit disassembled" class="img-fluid rounded z-depth-1" data-lightbox="thesis-proto" %}
    </div>
    <div class="col-6">
        {% include figure.html path="assets/img/thesis/proto-on.jpg" title="Prototype unit assembled" class="img-fluid rounded z-depth-1" data-lightbox="thesis-proto" %}
    </div>
</div>
<div class="row align-items-center">
    <div class="col-3">
        {% include figure.html path="assets/img/thesis/proto-corner.jpg" title="Springed prototype back view" class="img-fluid rounded z-depth-1" data-lightbox="thesis-proto" %}
    </div>
    <div class="col-3">
        {% include figure.html path="assets/img/thesis/proto-top.jpg" title="Springed prototype side view" class="img-fluid rounded z-depth-1" data-lightbox="thesis-proto" %}
    </div>
    <div class="col-3">
        {% include figure.html path="assets/img/thesis/proto-side.jpg" title="Springed prototype side view" class="img-fluid rounded z-depth-1" data-lightbox="thesis-proto" %}
    </div>
    <div class="col-3">
        {% include figure.html path="assets/img/thesis/proto-back.jpg" title="Springed prototype side view" class="img-fluid rounded z-depth-1" data-lightbox="thesis-proto" %}
    </div>
</div>
<div class="caption">
    Prototype unit in different views and iterations.
</div>

As I enjoyed this project I asked if I could continue it as my thesis work and hopefully complete it with making a robot that could solve all the problems. Everyone agreed and I kept workin on in trough the summer and the last semester. There were many constraints with the AlphaBot2s and I decided to replace them with one made from scratch. This one incorporated the grabber arm as well.

The drive method stayed the same with two driven wheels but from encoded DC motors I switched to stepper motors for a more precise movement. The electronics were soldered on a prototyping board and the main <a href="https://en.wikipedia.org/wiki/Microcontroller">MCU</a> was an <a href="https://en.wikipedia.org/wiki/ESP32">ESP32</a>. I also switched from dismantled mouse parts to <a href="https://www.tindie.com/products/jkicklighter/adns-9800-laser-motion-sensor/">ready made sensors</a> hoping to negate the error accumulation problem.

The tests showed that these sensors were still too sensitive to the distance. I found <a href="https://www.openimpulse.com/blog/products-page/product-category/adns-3080-optical-flow-sensor-module/">another sensor</a> that was able to measure displacement without requiring a precise distance from the surface. This upgrade can be seen on the last two pictures below.

<div class="row align-items-center">
    <div class="col-6">
        {% include figure.html path="assets/img/thesis/V2-model.jpg" title="V2 CAD model" class="img-fluid rounded z-depth-1" data-lightbox="thesis-V2" %}
    </div>
    <div class="col-6">
        {% include figure.html path="assets/img/thesis/V2-side.jpg" title="V2 side view" class="img-fluid rounded z-depth-1" data-lightbox="thesis-V2" %}
    </div>
</div>
<div class="row align-items-center">
    <div class="col-2">
        {% include figure.html path="assets/img/thesis/V2-back.jpg" title="V2 back view" class="img-fluid rounded z-depth-1" data-lightbox="thesis-V2" %}
    </div>
    <div class="col-2">
        {% include figure.html path="assets/img/thesis/V2-front.jpg" title="V2 front view" class="img-fluid rounded z-depth-1" data-lightbox="thesis-V2" %}
    </div>
    <div class="col-2">
        {% include figure.html path="assets/img/thesis/V2-lame.jpg" title="V2 without sensors" class="img-fluid rounded z-depth-1" data-lightbox="thesis-V2" %}
    </div>
    <div class="col-2">
        {% include figure.html path="assets/img/thesis/V2-top.jpg" title="V2 top view" class="img-fluid rounded z-depth-1" data-lightbox="thesis-V2" %}
    </div>
    <div class="col-2">
        {% include figure.html path="assets/img/thesis/V2-cams.jpg" title="ADNS-3080 cameras on 3D printed mount" class="img-fluid rounded z-depth-1" data-lightbox="thesis-V2" %}
    </div>
    <div class="col-2">
        {% include figure.html path="assets/img/thesis/V2-done.jpg" title="V2 modified with ADNS-3080" class="img-fluid rounded z-depth-1" data-lightbox="thesis-V2" %}
    </div>
</div>
<div class="caption">
    V2 CAD model and different views and iterations.
</div>

<div class="row align-items-center">
    <div class="col-10 mx-auto">
        {% include figure.html path="assets/img/thesis/V3.jpg" title="V3 is V2 but with a proper PCB and reshaped body" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    As the amount of electronics grew, making a PCB became inevitable. V3 is V2 but with a proper PCB and reshaped body.
</div>

As the platform was closing its final shape, I started testing the grabber arm. It needed to be 3D printable so I iterated a lot on the CAD model to be booth functionable and manufacturable.

<div class="row align-items-center">
    <div class="col-3">
        {% include figure.html path="assets/img/thesis/action-grip.mp4" title="Gripper testing" class="video-fluid" controls="true" %}
    </div>
    <div class="col-9">
        {% include figure.html path="assets/img/thesis/action-arm.mp4" title="Complete arm testing" class="video-fluid" controls="true" %}
    </div>
</div>
<div class="row align-items-center">
    <div class="col-3"></div>
    <div class="col-3">
        {% include figure.html path="assets/img/thesis/grip-model.jpg" title="Gripper in CAD model" class="img-fluid rounded z-depth-1" data-lightbox="thesis-grip" %}
    </div>
    <div class="col-3">
        {% include figure.html path="assets/img/thesis/grip-sliced.jpg" title="Gripper in slicer" class="img-fluid rounded z-depth-1" data-lightbox="thesis-grip" %}
    </div>
    <div class="col-3"></div>
</div>
<div class="caption">
    Testing the gripper and the arm as a whole and the gripper arranged in a slicer for a supportless print.
</div>

For the last step, I made one more iteration on the PCB as I wanted to add a few little features and because there were some mistakes on the first one. This also gave the unit an memorable shape. This also bought the first opportunity for me to use PCB and 3D CAD softwares simultaneously to shape the body to the PCB and vice versa. The result is V4.

<div class="row align-items-center">
    <div class="col-10 mx-auto">
        {% include figure.html path="assets/img/thesis/generations.jpg" title="Three generations of AGVs next to each other" class="img-fluid rounded z-depth-1" data-lightbox="thesis-V4" %}
    </div>
</div>
<div class="row align-items-center">
    <div class="col-3"></div>
    <div class="col-3">
        {% include figure.html path="assets/img/thesis/V4-3D.jpg" title="3D render of the V4's PCB" class="img-fluid rounded z-depth-1" data-lightbox="thesis-V4" %}
    </div>
    <div class="col-3">
        {% include figure.html path="assets/img/thesis/V4-layout.jpg" title="Layout of the v4's PCB" class="img-fluid rounded z-depth-1" data-lightbox="thesis-V4" %}
    </div>
    <div class="col-3"></div>
</div>
<div class="caption">
    Three generations of AGVs next to each other.
</div>

<div class="row align-items-center">
    <div class="col-8 mx-auto">
        {% include figure.html path="assets/img/thesis/grab.gif" title="V4 in action grabbing a workpiece" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Title image, V4 in action grabbing a workpiece.
</div>

Although the original plan for the thesis project was to write a sophisticated software as well, the time for the project run out. I got best grade for my thesis work and praises from my consultant. You can read it in full <a href="{{ 'assets/pdf/thesis.pdf' | relative_url}}">here</a> (it is in Hungarian).