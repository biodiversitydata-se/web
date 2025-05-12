# This file is for building the local dev image

FROM ruby:3.4

WORKDIR /site

COPY Gemfile* /site
RUN gem update --system && gem cleanup
RUN bundle install

# Main app
EXPOSE 4000
# Livereload
EXPOSE 35729

VOLUME /site

ENTRYPOINT [ "sh", "/site/script/entrypoint.sh" ]
