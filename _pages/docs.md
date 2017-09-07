---
layout: splash
permalink: /docs/
title: Documentation
---


# How to's

{% include toc %}

### How to get a proxy application added to the website

1. Fork the [github repository](http://github.com/exascaleproject/proxy-apps)
of the proxy-apps website.
2. Lets say your new proxy application is called "proxyapp". Based on the
apps.template.json file in the top level directory, create a new file
apps-jsons/proxyapp.json and fill in the details.
3. Based on the apps.template.md, create a new file _apps/proxyapp.md and fill
in the file name proxyapp.json in the file variable (please do not delete the
"/proxy-apps/apps-jsons/" prefix).
4. Submit a pull request to the github repository of the proxy-apps website.

