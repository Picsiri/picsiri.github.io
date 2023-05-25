---
layout: project
title: RF Synthesizer
subtitle: At Sagax<br>2020-2021
description: A component for the tuner project.
img: assets/img/sagax/synth-first.jpg
time_code: 20200600
level: work
volume: great
---

This project came after I got comfortable with <a href="https://www.altium.com/altium-designer">Altium Designer</a> and <a href="https://en.wikipedia.org/wiki/Radio-frequency_engineering">RF</a> terminology. I was tasked with the developement of a tuner component, in specific the digital circuitry and overall layout of a synthesizer.

Requirements were to be as small as possible, controllable and powerable by USB and to be able to generate a signal up to 1GHz.

<div class="row align-items-center">
    <div class="col-10 mx-auto">
        {% include figure.html path="assets/img/sagax/synth-first.jpg" title="First version of the synthesizer" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Title image, first version of the synthesizer fresh from the oven.
</div>

The first version contained a single RF IC on the panel. With this project I learned how different digital and analog circuits are. How digital circuits affect and often make analog ones unusable because of the harmonics they generate. I had an analog expert colleague who helped me with the analog part of the project, mainly with the layout and the RF component selection of the analog circuitry.

As the IC and its usage isn't mainstream, this project brought the first time for me to write the software library for an IC from the datasheet. Up to this point I always found an arduino library to solve my problems.

<div class="row align-items-center">
    <div class="col-10 mx-auto">
        {% include figure.html path="assets/img/sagax/tuning.gif" title="Signal from the synthesizer" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Signal from the synthesizer.
</div>

The first version had problems. The generated signal was not clean when USB controll was active. The harmonics from the USB communication were clearly visible on the output signal. Adding more filter components did not help, final solution was to separate the supply for the digital and analog part. As the application they were used in required multiple units, this could be solved with multiple partially populated boards. They were tested and used in the field many times.

Later an application required 4 synthesizers to be used in parallel. Based on the experience from the single channel version we started to develop this more complex one. This one however had to reach much higher frequencies. FR4 was fine before but this one required a proper substance as this had to go up to around 6Ghz. Additional requirement was here to make the outputs synchronized to a reference and subsequently to each other. Phase offset control between the channels was also required.

<div class="row align-items-center">
    <div class="col-10 mx-auto">
        {% include figure.html path="assets/img/sagax/synth-second.jpg" title="4CH synthesizer's PCB" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Two pieces of the 4CH synthesizer's PCB in the manufacturer's packaging.
</div>

Thanks to the many revisions and earlier mistakes made with the 1 channel one, this one had no critical problems after the first revision. As we werent anticipating that no second revision will be needed, the metal casing was not yet manufactured. I printed a case with my 3D printer and used it for testing.

<div class="row align-items-center">
    <div class="col-10 mx-auto">
        {% include figure.html path="assets/img/sagax/wave.mp4" title="First succesfull startup of the tuner" class="video-fluid" controls="true" %}
    </div>
</div>
<div class="caption">
    First succesfull startup of the tuner with only one channel populated.
</div>

Although phase offset control would have been a nice feature to implement in software, I never completed it as I left the company around this time.