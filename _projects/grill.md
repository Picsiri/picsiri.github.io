---
layout: project
title: Pellet Grill
subtitle: 2022.05.
description: Replacing the control board on a pellet grill.
img: assets/img/grill/pellets.jpg
time_code: 20220500
level: work
volume: small
---

An acquaintance of mine had a <a href="https://en.wikipedia.org/wiki/Pellet_grill">pellet grill</a> he has bought in the USA. As the electric grit runs on 110V there, it would not work in Hungary. He asked me to replace the electronics with 220V compatible parts.

<div class="row align-items-center">
    <div class="col-6 text-center d-flex">
        <div class="mx-auto">
            {% include figure.html path="assets/img/grill/controller.jpg" title="Original control intergace" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="col-6">
        {% include figure.html path="assets/img/grill/final-house.jpg" title="Final look if my desing" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The control board looked like the one on the left (image from <a href="https://en.wikipedia.org/wiki/Pellet_grill#:~:text=A%20Multi%2DPosition%20Controller">Wikipedia</a>) and the final design with housing (right).
</div>

Uppon inspecting I found that it was a simple desing other than it used high-voltage AC of witch I had no experience with. The replacement of the motors was simple but the control circuit was a bit tricky. I inspected the original control board and took inspiration from it when designing the new one.

I prototyped quickly a perf-board circuit with a simple 3D printed box and after successful testing went to make a proper PCB and a decent housing for it.

<div class="row align-items-center">
    <div class="col-6">
        {% include figure.html path="assets/img/grill/proto.jpg" title="Proto circuit" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6">
        {% include figure.html path="assets/img/grill/grill-pcb.mp4" title="Final look of my desing" class="video-fluid" controls="true" %}
    </div>
</div>
<div class="caption">
    The proto circuit (left) and the first proper PCB (right).
</div>

Of course the AC has some requirements that I didn't think about even after a few years working with digital circuits. The first PCB blew up at the moment I connected it to mains. After I figured out the problem I made a new PCB, tested it and it, and still found some minor issues. Fortunately they could be fixed with some external wiring. After testing it and making sure it works I installed it in the grill.

<div class="row align-items-center">
    <div class="col-6 mx-auto">
        {% include figure.html path="assets/img/grill/final.jpg" title="Final PCB fixed up" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The final PCB with the fixes and the housing in the background.
</div>
<div class="row align-items-center">
    <div class="col-12 mx-auto">
        {% include figure.html path="assets/img/grill/testing.jpg" title="Testing final electronics" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Testing if the electronics can start the fire as intended.
</div>

Client said that it is being used regularly and it works as intended.