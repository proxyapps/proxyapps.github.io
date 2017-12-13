---
layout: splash
permalink: /add-a-proxy/
title: Add a proxy 
---

# Getting a proxy application added to this website

1. [Fork](https://help.github.com/articles/fork-a-repo/) the [github
repository](http://github.com/proxyapps/proxyapps.github.io) of the proxy apps
website.
2. Lets say your new proxy application is called "proxyapp". Based on the
apps.template.json file in the top level directory, create a new file
proxy-desc/proxyapp.json and fill in the details. Remove items that do not
apply. In principle, any valid json is fine, which can be
checked [here](https://jsonlint.com/). Newline characters are not allowed in
json files, but one can add multiple lines like this:
```json
[
  { 
    ...
    "longdesc" : ["line1",
                  "line2",
                  "line3"]
  }
]     
```
3. Based on the apps.template.md, create a new file _apps/proxyapp.md and fill
in the file name proxyapp.json in the file variable (please do not delete the
"/proxy-desc/" prefix).
4. Submit a pull request to the github repository of the proxy apps website.
To do so:

      i. Add the new files to the next commit   
      ```sh
      git add proxy-desc/proxyapp.json _apps/proxyapp.md
      ```
      ii. Commit the changes
      ```sh
      git commit -m "Added proxyapp"
      ```
      iii. Push the commit to your fork
      ```sh
      git push https://github.com/YOUR-USERNAME/proxyapps.github.io
      ```
      iv. [Open a pull request](https://help.github.com/articles/creating-a-pull-request/)

