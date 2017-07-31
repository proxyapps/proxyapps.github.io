---
permalink: /standards/
---


{% include toc %}

# Proxy App Quality Standards and Best Practices

This document describes the quality standards and best practices for ECP proxy
apps.  Proxies that comply with these standards will be more usable in
co-design engagements and will receive preferential treatment from the ECP
Proxy App team.  Standards and practices in this guide are designated as either
required or recommended.  Over time, we expect to increase the overall quality
of the proxy app suite by promoting some recommended practices to requirements.

## Code Distribution and Availability
**Required**: All proxy app source code must be publicly available.  

**Required**: Provide a stable release tarball or a git tag or commit that points
to a stable release.

**Recommended**: A source code repository (e.g. on github) is the preferred
mechanism to distribute source code as it also provides an easy way of
funneling changes from the proxy team or vendors back to the upstream
developers.  Distributing code as a web link to a tarball is discouraged, but
is acceptable.  Private git/svn repositories or email/forms to request source
code are not acceptable. 

**Recommended**: Create a spackage to distribute your proxy through Spack. The
Proxy App Team will assist with the creation of spackages.

**Recommended**: Proxy apps should be self-contained.  Proxy apps with large or
complex library dependencies will be difficult or impossible to run on minimal
testbed or simulator platforms that are typically used by vendors during early
design phases.  If dependencies are necessary, creation of a spackage to
distribute the proxy along with the required dependencies will greatly assist
potential proxy users.  Note that Spack already ships many libraries, (e.g.
lapack, kokkos), 

## Build Systems

In short, we require that the proxy app be downloadable/installable using the
Spack package manager (github.com/llnl/spack). However, we will help with the
initial spack package (spackage) when needed. Spack has very good support with
CMake for easy integration but anything with a functioning spackage is
acceptable. Spack supports makefiles, but the proxy apps should provide an easy
mechanism to set compiler and linker flags without having to do deep changes to
the build system (e.g. commenting and uncommenting lines in the makefile is
fragile to automate). In general the proxy app should be able to be built on a
standard linux distribution without need for modification of the standard FHS.

## Documentation

### General Description

A general description of what the proxy is, what sort of algorithms it
comprises/computational science motifs it represents is required.

### Intent of the proxy

Proxy apps should have documentation on the general scope of the proxy app and
where it does and doesn't represent the parent application correctly. It should
also mention whether it is a proxy for the computation, memory, communication,
I/O or something else in the parent application.

If the developers have done any analysis on the proxy in terms of how it
represents the parent application, that should either be made available or at
least pointed to by a url where it's available. In particular, this could
discuss aspects of the proxy apps that may look simple enough that some quick
optimizations can be applied but SHOULD NOT be applied because they will not be
feasible in real applications.

### Building and running/testing
Documentation should cover the build process (incl. dependencies) and how to
test the final executable (see verification section below). The documentation
should cover all configuration options and command-line parameters a user is
expected to use. It should explain why the user might use each option, not just
mechanically what it does.

At least three running modes should be documented:
1. A quick test (to verify correct compilation, and, if applicable, track
kernel performance). Preferably, this executes in only seconds, but can be
larger if necessary to make sure most of the time is spent in the interesting
parts (i.e. not spending most of the time reading configuration files and the
like).
2. A running mode (weak and strong scaling) representing a current workload.
3. A running mode (weak and strong scaling) representing an exascale workload.

This running mode documentation should not only include input decks, but should
also include expected outputs (i.e., output file) for each of the input decks. 

The documentation should also discuss the "minimum"/"maximum" reasonable
problem sizes to prevent users running at extremes scaling points or running
unrealistic cases.

Once the ECP proxy applications website is up and running, we would expect the
proxy app developers to contribute tags and a description for the proxy app. In
the future, we could also host the documentation for the proxy app on the
website via GitHub pages.

## Verification of Correctness

Inclusion of automatable regression tests that, bare minimum, check the final
output against a known good reference within some acceptable threshold based
upon the science being simulated. Test should cover most code paths provided by
the proxy app. We will help with measuring code coverage numbers.

## Performance metrics/models

The proxy app should include a figure of merit (FOM) that the vendors can use
to compare performance under different conditions. This could be based on the
science being simulated or what the proxy app is stressing (computational
power, memory etc.) It should also, if applicable, include one or more timers
around the most important code regions and have an option to output the
execution time of those regions.  It would be nice if the proxy app ships with
a performance model based on the resource it is stressing.

