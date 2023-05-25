---
layout: project
title: RF MUX-DEMUX
subtitle: At Sagax<br>2019 - 2020
description: Major component in a big RF system.
img: assets/img/sagax/MUX-DEMUX.jpg
time_code: 20190500
level: work
volume: great
---

Although most parts of this project are NDA-d, I can elaborate without being too specific.

<div class="row align-items-center">
    <div class="col-10 mx-auto text-center">
        {% include figure.html path="assets/img/sagax/MUX-DEMUX.jpg" title="Generic MUX-DEMUX arrangement" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Exact configuration of the MUX-DEMUX can't be disclosed, this is just an illustration.
</div>

The company <a href="https://sagaxcommunications.com/">Sagax Communications</a> has a main portfolio around <a href="https://en.wikipedia.org/wiki/Software-defined_radio">SDR</a> equipment. They develop and maintain specialized hardwares for signal processing and also softwares for user interface. They are also providing <a href="https://en.wikipedia.org/wiki/Radio-frequency_engineering">RF</a> hardware for signal conditioning. Switching, splitting, amplifying, filtering and more.

This application I was working on was a part of a bigger RF system. It consisted of signal sources and signal sinks in the form of radios. The signals had to be channeled to the radios in a flexible way. This task required a complex MUX-DEMUX matrix. The inside of the matrix consisted of hundreds of <a href="https://en.wikipedia.org/wiki/RF_connector">connectors</a>. Although the main concept and architecture of the matrix was already designed when I joined the project, I helped fine tuning the design to the costumers requirements.

One of my tasks was to document the positions and pairs of all these ports. I did this in <a href="../skills/autocad.html">AutoCAD</a>. The final drawing was a custom length A1 print while the texts were the size of a normal A4 printed text. It was huge. As it would have been impossible to manually name every port, I used excel to generate the names of all the ports, exported that to CSV and imported that into AutoCAD.

The matrix had to be controlled and I got the opportunity to make the controller circuits. The RF design was made by a colleague but he was not familiar with digital control circuits. Following his design's requirements, I prototyped and tested the controllers and then integrated it into the system.