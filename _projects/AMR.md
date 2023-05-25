---
layout: project
title: Mini AMR
subtitle: At EKC<br>2022.01 - 2022.09.
description: The development of a demonstration and training robot.
img: assets/img/amr/render.jpg
time_code: 20220100
level: work
volume: great
---

The project was comissioned by <a href="https://www.sztaki.hu/">SZTAKI</a>. Their portfolio consists of among other things education, demonstration and research. They have a laboratory with a simulated modern factory plant. I also spent two semesters in this lab, one working on a semester project and one completing my <a href="{{ '/projects/thesis/' | relative_url}}">thesis work</a>.

In <a href="https://www.sztaki.hu/innovacio/projektek/smartfactory">this lab</a> there is a big table with robot arms, automated storages and most important for us, <a href="https://en.wikipedia.org/wiki/Automated_guided_vehicle">AGVs</a>. They required a replacement robot to the ones they had for years before. Those robots required a lot of maintenance and were less reliable than expected, required parts that were not in production anymore and their upgrades were difficult to implement because of their relatively closed architecture. 

Their function is to move simulated parts aka. workpieces from one spot to another. They should complete this task as independently as possible. High level implementation has no limit. One could say optimal solution would be an AI that know what it wants to do how and when. The new robot were to solve all the tasks the old ones did, while fixing their problems too.

<div class="row align-items-center">
    <div class="col-7">
        {% include figure.html path="assets/img/amr/robotino.png" title="Robotinos in smartfactory" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-5">
        {% include figure.html path="assets/img/amr/render.jpg" title="EKC developed AGV" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Old robots (left) (image from SmartFactory's <a href="https://www.sztaki.hu/innovacio/projektek/smartfactory">intrudoction site</a>), new robot (right).
</div>

My first task at this company was to design an print a basic body that solves one of the requirements, that is to be able to traverse uneven ground. I designed a partially independent suspension. The frond and back axes can rotate relative to each other.

<div class="row align-items-center">
    <div class="col-4">
        {% include figure.html path="assets/img/amr/base.jpg" title="Basic concept" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-8">
        {% include figure.html path="assets/img/amr/axes.jpg" title="Suspension in action" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    My first design (left) and the suspension working on a small obstacle (right).
</div>

My design was not the first in the company though and I inherited the electronics. This was an arduino UNO with a CNC shield. This shield is the red board on the image above. Later I expanded on this electronics and almost completely replaced it in a few steps.

Next task was to design an arm to be able to handle the workpieces. The arm had to be able to reach the pieces on different positions. To make it easier to design while keeping the most flexibility we decided on a 2 DoF design. I modeled an arm that is about the suitable size for this robot based on a <a href="https://grabcad.com/library/uarm-1'">design</a> found on <a href="https://grabcad.com">GrabCAD</a>. For the gripper I used the one that I designed in my <a href="">thesis project</a>.

<div class="row align-items-center">
    <div class="col-6">
        {% include figure.html path="assets/img/amr/arm-original.jpg" title="Original design that mine was based on" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6">
        {% include figure.html path="assets/img/amr/arm-base.jpg" title="Design made for this robot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <a href="https://grabcad.com/library/uarm-1'">Original model</a> (left) and my design (right).
</div>

The second iteration brought a great change. The body got a complete rework and the arm got mounted on the top. The electronics was upgraded and got its mounts inside the body. The arduino as main computer was replaced with a Raspberry Pi and the first lines of the firmwares were written. The arm was also upgraded, dimensions were changed, motors got mounted and a camera was added.

At this point as the scale began to grow and I got some help. The firmware on the Raspberry was written by a colleague and was based on <a href="http://wiki.ros.org/Documentation">ROS</a>. It was choosen as this colleague used it before and was familiar with it. The body got a visual touch up by a designer colleague.

<div class="row align-items-center">
    <div class="col-7">
        {% include figure.html path="assets/img/amr/second-electronics.jpg" title="Upgraded and mounted electronics" class="img-fluid rounded z-depth-1" data-lightbox="amr-inout" %}
    </div>
    <div class="col-5">
        {% include figure.html path="assets/img/amr/second-outside.jpg" title="V2 robot in its glory" class="img-fluid rounded z-depth-1" data-lightbox="amr-inout" %}
    </div>
</div>
<div class="caption">
    The inside of the robot (left) and the outside (right).
</div>

At this point the robot was able to move around and the arm was able to pick up and place workpieces, but it had to be remote controlled to do so. The coleague writing the ROS code made a terminal interface and the wheels and arm could be controlled with the keyboard. (Raspberry and computer on same wifi and SSH into the Raspberry) Here we noticed the limits of the controller IC of the CNC shield, an 8-bit ARM MCU. It could not handle the speed of the motors and began to show weird artifacts at moderate speeds. Because of this I began the complete redesign of the electronics. Only thing that was kept was the Raspberry Pi.

I designed a battery pack and made it to be quick-changable. It got a custom connector and a locking mechanism. The inside of the body was rearranged and the previously scattered electronic components all got integrated onto the PCB that got the name "MOBO" as in motherboard. While I was working on this, our designer made a new body shape. I modified this model to be able to fit the components and to be able to manufacture it. This version also  introduced a metal frame for more rigidity and to carry the handle.

<div class="row align-items-center">
    <div class="col-4">
        {% include figure.html path="assets/img/amr/board.jpg" title="MOBO in the new body" class="img-fluid rounded z-depth-1" data-lightbox="amr-first" %}
    </div>
    <div class="col-4">
        {% include figure.html path="assets/img/amr/inner.jpg" title="V3 assembly in CAD" class="img-fluid rounded z-depth-1" data-lightbox="amr-first" %}
    </div>
    <div class="col-4">
        {% include figure.html path="assets/img/amr/battery.jpg" title="The battery pack" class="img-fluid rounded z-depth-1" data-lightbox="amr-first" %}
    </div>
</div>
<div class="caption">
    The first version of the MOBO (left), version 3 robot (center) and the battery pack (right).
</div>

We needed to test the new panel and the robot's movement in a more ergonomic way, so I decided to make use of my <a href="https://en.wikipedia.org/wiki/DualShock#DualShock_4">DualShock 4</a> controllers. We found a <a href="http://wiki.ros.org/ds4_driver">library</a> that could be used to connect the controller to the Raspberry. Another colleague, also familiar with ROS wrote the code that I tested and fine tuned. This meant the maping of the buttons, scaling the analog inputs to the correct speed and such. Because of this I started learning about ROS too.

<div class="row align-items-center">
    <div class="col-10 mx-auto">
        {% include figure.html path="assets/img/amr/wheels.mp4" class="video-fluid" controls="true" %}
    </div>
</div>
<div class="caption">
    First successful test of the motors driven by the new electronics with the controller via Bluetooth.
</div>

There were many problems with the first MOBO as it was a fairly complex design and was rushed. There were another two iterations and many problems were mitigated and even some new features added. The project slowly shifted from a hardware project into a software one. There was a lot of debugging, testing and sometimes smoke. At the end ten units were build with my final design. Sadly I did not make any pictures of them.

<div class="row align-items-center">
    <div class="col-5">
        {% include figure.html path="assets/img/amr/assembly.jpeg" title="Cable management in the body" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-7">
        {% include figure.html path="assets/img/amr/with-model.jpg" title="The model and its product" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Cable management seen during assembly (left) and the CAD model behind the prototype (right).
</div>

I left the company before the official closure of the project because personal reasons. The project was taken over by other colleagues.

As I was working on this project for six months intensively, I could write a lot more about it, but I don't want to stretch this article too much.
