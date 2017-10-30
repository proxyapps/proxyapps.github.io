---
layout: splash
permalink: /docs/
title: Documentation
---


{% include toc %}

## How to download the ECP Proxy Apps suite via Spack

1. Clone the Spack [github repository](https://github.com/LLNL/spack).
2. Add `spack/bin/spack` to your `PATH` and type:
```spack install --source ecp-proxy-apps
```
3. To find where the proxy apps were installed, type:
```spack cd ecp-proxy-apps
```

### Other tips and tricks

If you want to assist spack in finding compilers, [read this](http://spack.readthedocs.io/en/latest/getting_started.html#spack-compiler-find).

If you want to use a system installed MPI and prevent spack from building it,
[read this](http://spack.readthedocs.io/en/latest/build_settings.html#external-packages).
A sample `~/.spack/packages.yaml` file is below:
```yaml
packages:
  all:
    providers:
      mpi: [mvapich2]
  mvapich2:
    paths:
      mvapich2@system: <path to mvapich2>
    version: [system]
    buildable: False
```

If you do not want a long hash in the installed proxy apps' directories, [read
this](http://spack.readthedocs.io/en/latest/config_yaml.html#install-hash-length-and-install-path-scheme).
A sample `~/.spack/config.yaml` file is below:
```yaml
config:
    install_path_scheme: '${ARCHITECTURE}/${COMPILERNAME}-${COMPILERVER}/${PACKAGE}-${VERSION}'
```

## How to get a proxy application added to the website

1. [Fork](https://help.github.com/articles/fork-a-repo/) the [github
repository](http://github.com/exascaleproject/proxy-apps) of the proxy-apps
website.
2. Lets say your new proxy application is called "proxyapp". Based on the
apps.template.json file in the top level directory, create a new file
apps-jsons/proxyapp.json and fill in the details.
3. Based on the apps.template.md, create a new file _apps/proxyapp.md and fill
in the file name proxyapp.json in the file variable (please do not delete the
"/proxy-apps/apps-jsons/" prefix).
4. Submit a pull request to the github repository of the proxy-apps website.

