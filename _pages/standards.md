---
layout: splash
permalink: /standards/
title: Standards
---
# Proxy App Quality Standards and Best Practices

{% include toc %}

This document describes the quality standards and best practices for ECP proxy
apps.  Proxies that comply with these standards will be more usable in
co-design engagements and will receive preferential treatment from the ECP
Proxy App team.  Standards and practices in this guide are designated as either
required or recommended.  Over time, we expect to increase the overall quality
of the proxy app suite by promoting some recommended practices to requirements.

## Design

**Recommended**: Follow DRY (Don't Repeat Yourself) practices and refactor code common or beneficial to multiple applications into library dependencies

## Code Distribution and Availability

**Required**: All proxy app source code must be publicly available.

**Required**: Provide a stable release tarball or a git tag or commit that points to a stable release.

**Recommended**: A source code repository (e.g. on github) is the preferred mechanism to distribute source code as it also provides an easy way of funneling changes from the proxy team or vendors back to the upstream developers.  Distributing code as a web link to a tarball is discouraged, but is acceptable.  Private git/svn repositories or email/forms to request source code are not acceptable.

**Recommended**:  Create a spackage to distribute your proxy through Spack. The Proxy App Team will assist with the creation of spackages.

**Recommended**: Proxy apps should be self-contained.  Proxy apps with large or complex library dependencies will be difficult or impossible to run on minimal testbed or simulator platforms that are typically used by vendors during early design phases.  If dependencies are necessary, creation of a spackage to distribute the proxy along with the required dependencies will greatly assist potential proxy users.  Note that Spack already ships many libraries, (e.g. lapack, kokkos),

## Build Systems

**Required**: Build system that exposes common flags and variables (e.g. CXX, CXXFLAGS, CC, CFLAGS, FC, FLAGS, LDFLAGS, etc.) for easy testing

**Required**: The proxy app should be able to be built on a standard linux distribution without need for modification of the standard FHS (Filesystem Hierarchy Standard).

**Required**: The proxy app should be able to be built and adjusted without deep changes to the build system (e.g. commenting and uncommenting lines in the makefile is fragile to automate).

**Required**: Provide mechanism (e.g. Searching PATH, LIBNAME_DIR, etc) to allow for passing of any library dependencies to the build system.

**Recommended**: Easy integration with Spack. This should be handled through above requirements.

## Three Expected Running Modes to be specified

**Required**: A quick test to verify correct compilation and, if applicable, track kernel performance. This should preferably have an execution time on the order of seconds but can be larger if necessary. See Verification of Correctness

**Recommended**: A running mode (weak and strong scaling) representing a current workload

**Recommended**: A running mode (weak and strong scaling) representing an exascale workload

## General Documentation

### General Description of Proxy Application

**Required**: A general description of what the proxy is and what sort of algorithms it comprises/computational science motifs it represents is required.

**Required**: Proxy apps should have documentation on the general scope of the proxy app and where it does and doesn't represent the parent application correctly.

### Intent and Limitations of Proxy Application with Respect to Parent

**Recommended**: If the developers have done any analysis on the proxy in terms of how it represents the parent application, that should be made available.

**Recommended**: Discuss aspects of the proxy apps that may look simple enough that some quick optimizations can be applied but SHOULD NOT be applied because they will not be feasible in real applications.

**Required**: Documentation should also mention what aspect of the parent application the proxy is a proxy for (e.g. computation, memory, communication, I/O, etc)

### Building and running/testing

**Required**: Documentation should cover the build process (including dependencies) and how to test the final executable (see Verification of Correctness)

**Required**: Documentation should cover all configuration options and command-line parameters a user is expected to use.

**Recommended**: Documentation should explain why the user might use each option, not just what they do

### Running mode documentation

**Required**: The running mode documentation should not only include input decks but should also include expected outputs for each of the input decks. See Verification of Correctness

**Recommended**: The documentation should discuss "minimum"/"maximum" reasonable problem sizes to prevent users running at extreme scaling points or running unrealistic cases

## Verification of Correctness

**Required**: Inclusion of automatable regression test that checks the final output against a known good reference

**Recommended**: Compare against reference within some acceptable threshold based upon the science being simulated

**Recommended**: Tests should cover most code paths provided by the proxy app. We will help with measuring code coverage numbers

### Reported Performance metrics/models

**Required**: The proxy app should include a figure of merit (FOM) that the vendors can use to compare performance under different conditions. This could be based on the science being simulated or what the proxy app is stressing (computational power, memory etc.). This should be representative of the performance of the parent application

**Recommended**: If applicable, include one or more timers around the most important code regions and have an option to output the execution time of those regions.

**Recommended**: If applicable, include a performance model based on the resource it is stressing

## ECP Proxy Applications Website Contributions

**Required**: Provide a description of the proxy app

**Recommended**: Contribute tags to facilitate indexing of proxy apps.
