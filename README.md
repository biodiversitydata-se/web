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

## Dependencies and versions
The Ruby and Node versions used are specified in [build.yml](.github/workflows/build.yml) for production and in [dev.Dockerfile](dev.Dockerfile) for development.

To bump the dependecies in [Gemfile](Gemfile) and [package.json](package.json) run:
```
make bump-deps
```
