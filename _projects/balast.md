---
layout: project
title: Balast circuit
subtitle: At EKC<br>2021.09 - 2021.12.
description: The development of a digital balast circuit for driving a light tube.
img: assets/img/balast/title.jpg
time_code: 20210900
level: work
volume: small
---

In this project I had to design a prototype <a href="https://en.wikipedia.org/wiki/Electrical_ballast">electronic balast</a> circuit.

I started from an <a href="https://www.infineon.com/dgdl/Infineon-ICB2FL03G-DS-v01_01-en.pdf?fileId=db3a304331c8f8560131d2858b290671">old IC</a> that promised to handle every part of the process. This IC also had a handy tool (no longer supported) that could generate the correct part values for the external components of the IC, values like indutance, capacitance and resistance.

I was not familiar with designing analog circuits, so I thought it would be a good start to generate the values using the tool and then try to recreate the simulation also provided by this tool in a separate simulation software. I used <a href="https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html">LT Spice</a> for this purpose.

As I managed to recreate the simulation, I started to layout the circuit on a PCB. I ordered costum made coils and chokes for testing and built the prototype but sadly never got around to test if I was able to simulate the real world behavior of the circuit correctly.