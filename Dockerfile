# This file is for building the production image

FROM nginx:1.28

ENV TZ=Europe/Stockholm

COPY _site /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
