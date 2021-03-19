---
date: 2021-03-19T14:25:34+05:30
description: "A tool to create css image filters."
title: "CSS Filter Generator"
draft: false
---

Project website: https://pranjaldubey.com/css-filter-generator/

This project is based off Barrett Sonntag's codepen.

The problem I faced when using Barrett's version was that I had to try multiple times (sometimes 10-20 times) to get a filter value with loss <= 1. So I created a version where the computation logic keeps spitting filter values till the time it hits a loss of less than equal to 1.

In addition to that I placed all the computation logic inside a web worker so that it doesn't put strain on the main thread.

You can checkout the source code [here](https://github.com/pranjalworm/css-filter-generator/).