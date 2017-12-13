---
layout: splash
permalink: /download/
title: Download
---

# Download the ECP Proxy Apps suite

1. We are using spack to distribute the proxy apps suite. First, clone the spack [github repository](https://github.com/LLNL/spack).
2. Add `spack/bin/spack` to your `PATH` and type:
```spack install --source ecp-proxy-apps
```
3. To find where the proxy apps were installed, type:
```spack cd ecp-proxy-apps
```

## Spack-related tips and tricks

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
