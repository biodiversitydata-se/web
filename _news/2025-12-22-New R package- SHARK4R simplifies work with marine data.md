---
title: "New R package: SHARK4R simplifies work with marine data"
date: 2025-12-22
image: 2025-12-22_SHARK4R.png
---

A new R package is now available on The Comprehensive R Archive Network (CRAN). SHARK4R provides researchers and environmental analysts with a tool for retrieving, quality assuring, and processing marine environmental data directly in R. The package includes client functions that connect users to several key databases, including SHARK, Dyntaxa, WoRMS, AlgaeBase, IOC-UNESCO taxonomic lists and toxin databases, as well as the Nordic Microalgae website.

SHARK is the platform for data access from the Swedish Marine Archive (Svenskt HavsARKiv). It stores biological, physical, and chemical data from Swedish marine environmental monitoring. On behalf of the Swedish Agency for Marine and Water Management, SMHI is the national data host for oceanography and marine biology and is also recognized by UNESCO as a National Oceanographic Data Center within the IODE program. Data can be downloaded via a [web interface](https://shark.smhi.se/en/) or directly through the API, which SHARK4R uses to retrieve data and integrate them into analysis workflows.

In addition to data collection, the package offers automatic quality control of physical, chemical, and biological parameters. The package is developed by SMHI within the framework of the Swedish Biodiversity Data Infrastructure (SBDI) and is adapted to the SHARK format, which facilitates automation of data flows and provides a more consistent basis for analyses.

SHARK4R is available at [CRAN](https://cran.r-project.org/package=SHARK4R), and documentation, including getting started guides, is available on [GitHub](https://sharksmhi.github.io/SHARK4R/).
