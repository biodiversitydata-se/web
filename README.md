![build workflow](https://github.com/biodiversitydata-se/web/actions/workflows/build.yml/badge.svg)

# biodiversitydata.se website
The new [biodiversitydata.se](https://new.biodiversitydata.se) website built with [Jekyll](https://jekyllrb.com/) and [tailwindcss](https://tailwindcss.com/).

## Development
The local dev environment runs in Docker using [dev.Dockerfile](dev.Dockerfile) and [docker-compose.yml](docker-compose.yml).

Build and run locally on http://localhost:4000:
```
make run
```

Rebuild the development docker image:
```
make rebuild
```

### Branching strategy
As described below the latest build is [automatically deployed](#deploying) to production. Therefore anything commited to the `main` branch must be production ready. If your work is not production ready use the `develop` branch or a feature branch.

## Production
The application is installed in production using the *web* role in [sbdi-install](https://github.com/biodiversitydata-se/sbdi-install/tree/main/ansible/roles/web).

### Building
Github Actions is used for building the production Docker image (using [Dockerfile](Dockerfile)). The [build workflow](.github/workflows/build.yml) is triggered when a push is made to the `main` branch. It will build the Docker image and push it to the [Github Container registry](https://github.com/orgs/biodiversitydata-se/packages).

### Deploying
The latest build image will automatically be deployed to production every 30 minutes. This is done by a cronjob in the Docker swarm that pulls the latest image (if there is one) and restarts the application (if there was a new image).

### Nightly builds
Some data for the site is fetched at build time from the Bioatlas (see [Pre render](#pre-render) for details). The site is therefore rebuilt and republished every night to stay accurate. This is done in two steps:

1. The [build workflow](.github/workflows/build.yml) runs on schedule and builds and pushes a new image.
2. The above mentioned cronjob in the Docker Swarm pulls the latest image and restarts the application.

### Running the production image locally
This is useful for testing the image.
```
make build-nginx
make run-nginx
```

## Pre render
Some content and data is fetched from the Bioatlas or generated automatically at build time, before the static site is rendered by Jekyll. This is done automatically in both the development and production build process. It can also be run manually with:
```
make pre-render
```
### News
The news index pages for different years are generated based on the actual years of the news pages in the _news folder.

### API calls
Some API calls are made to the Bioatlas and the responses are saved in the _data folder.

## Dependencies and versions
The Ruby and Node versions used are specified in [build.yml](.github/workflows/build.yml) for production and in [dev.Dockerfile](dev.Dockerfile) for development.

To bump the dependecies in [Gemfile](Gemfile) and [package.json](package.json) run:
```
make bump-deps
```
