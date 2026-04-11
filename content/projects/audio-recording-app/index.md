
---
title: "Audio Recording App"
description: "A prototype audio recording application"
date: 2026-04-06T15:01:41+02:00
draft: true
thumbnail: "thumbnail-url"

---

## Thought chain


### 3:10 pm

I am going to build an Audio Recording application. I've not built anything like this before. Let's see how it goes.

The idea for the initial prototype is to create a simple browser based react app which implements basic audio recording functionality, with pause, resume and stop controls. Once the recording is done, the user should be able to download that recording file.

### 15:15 

I am going through the MDN documentation of the APIs which can be used to do this. There are two APIs that can be considered, first one is the MediaStream Recording API and the other one is Web Audio API. 

Meanwhile I'll fire off Google's Stitch application, for creating the design of this app. 

### 15:24

There can be a need for iterating over the input devices like computer microphone or headset etc. and selecting one of them. 

**Note to future self**: Handle the scenario if the audio recording stops for whatever reason. The app should immediately notify the user visually and through a alarm like notification.

### 15:48

**Note to future self**: There can be a feature to select and switch between patients, so that each recording automatically  gets associated with a patient.

### 19:54

Took quite a long break. It's time to get back in action! Focus mode on!!!!

So far my reading has suggested that I should use the `MediaStream Recording API` for actual recording part and the `Web Audio API` for rendering the waveform.

### 20:21

Starting off with the actual "coding" part. Let the hacking begin!






