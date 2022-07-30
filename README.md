BACKGROUND

A school project for my thesis around the possibilities/difficulties of integrating user-developed solutions into DAWs (Digital Audio Workstations).
I studied into eleven of the most common DAWs, ten of them on the surface through regular research and one of them - Ableton Live - more thoroughly 
by developing this application. (If anyone is interested in my thesis report I can send it - although it's in swedish...)

I've used Ableton for live keyboards the past years, and only got so far with ClyphX Pro + TouchOSC. This idea of creating a fully customized front end for my
needs has been with my for a few years, so I decided to take this opportunity to make a first simple version of it.

EXTENDING ABLETON LIVE

To use and understand this project, you need to be somewhat familiar with Ableton Live and its MIDI Remote Scripts features. Since development of your own scripts
isn't officially supported by Ableton (but not prohibited), it can be somewhat tricky to find information (but not harder than spending some extra time at your
favourite search engine). The short version is to create an arbitrarily named folder in Ableton's MIDI Remote Scripts directory, then place the contents of the 
"cyow-back-end" folder into it, along with the "build" folder that is the result of building the React front end. When starting Ableton, the created folder should
appear in the Control Surface list of the MIDI tab in Preferences.

CHOICES / FUTURE

One of my goals with the project was to learn Python better, so I chose to stuff all back end functionality into the MIDI Remote Script. This goal also helped me to
not shy away from writing all the WSGI server/application code from scratch, when I found that the Python interpreter that's built into Live doesn't contain the full 
Python standard module library (and importing modules at runtime proved to be a greater challenge than I could handle at the time), thereby preventing me from using
ready made frameworks. This blog series helped me tremendously through writing the WSGI stuff: https://mleue.com/posts/lets-build-our-own-fastapi/

I wanted to use React with Redux and RTK Query for the front end, since I started learning that shortly before this project and wanted the practice.

My vision of a complete and stable remote application for Ableton Live, focused on keyboards and backing tracks for live use and tailored for my use cases, is still
something I want to achieve. I knew early on that I wanted the front end to reflect changes done on my laptop, which I intended to implement with Websockets in a
coming version. After researching the subject, I realized that this was something I didn't want to learn to write from scratch in Python at the moment. Therefore, I'm
changing the architecture of the application to use the other resource that helped me a great deal in this project - AbletonJS: https://github.com/leolabs/ableton-js

The web server will going forward be a separate Node application, which can talk Websockets with the front end and let AbletonJS take care of the communication with
Ableton Live and the MIDI Remote Scripts. Since this will change the application quite a bit, I decided to leave this repository as it is and continue my development
in a new repo. That way this repo can stand as a functioning example for others wanting to go this way of a no-framework WSGI server/application.
