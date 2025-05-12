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
Anything commited to the `main` branch should be production ready. If your work is not production ready use the `develop` branch or a feature branch.

## Production
The application is installed in production using the *web* role in [sbdi-install](https://github.com/biodiversitydata-se/sbdi-install/tree/main/ansible/roles/web).

### Building
Github Actions is used for building the production Docker image (using [Dockerfile](Dockerfile)). The [build workflow](.github/workflows/build.yml) is triggered when a push is made to the `main` branch. It will build the Docker image and push it to the [Github Container registry](https://github.com/orgs/biodiversitydata-se/packages).

### Running the production image locally
This is useful for testing the image.
```
make build-nginx
make run-nginx
```

## Dependencies and versions
The Ruby and Node versions used are specified in [build.yml](.github/workflows/build.yml) for production and in [dev.Dockerfile](dev.Dockerfile) for development.

To bump the dependecies in [Gemfile](Gemfile) and [package.json](package.json) run:
```
make bump-deps
```
