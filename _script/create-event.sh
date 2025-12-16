#!/bin/bash

echo -e "\n== Creating a new event page\n"

read -p "Enter start time (format YYYY-MM-DD or YYYY-MM-DD HH:MM, press ENTER for today's date): "
STARTTIME=${REPLY:-`date +%Y-%m-%d`}
read -p "Enter end time (format YYYY-MM-DD or YYYY-MM-DD HH:MM, press ENTER for no end time): " ENDTIME
read -p "Enter event location, eg city and/or country (press ENTER for no location): " LOCATION
read -p "Enter title: "
TITLE=${REPLY:-Event title}
read -p "Enter image filename (press ENTER for default image): "
IMAGE=${REPLY:-SBDI-rgb.svg}
read -p "Is SBDI organizing this event? (yes/no, press ENTER for no): "
ORGANIZE0=${REPLY:-no}
case "${ORGANIZE0,,}" in
  yes|y|true)
    ORGANIZE="true"
    ;;
  *)
    ORGANIZE="false"
    ;;
esac

CONTENT="---\ntitle: \"$TITLE\"\norganize: $ORGANIZE\nstart_time: $STARTTIME\nend_time: $ENDTIME\nlocation: $LOCATION\nimage: $IMAGE\ndescription: \"Short intro text\"\n---\n\nMain text"

FILETITLE=${TITLE//\\/-}
FILETITLE=${FILETITLE//\//-}
FILETITLE=${FILETITLE//\*/-}
FILETITLE=${FILETITLE//\:/-}
FILETITLE=${FILETITLE//\!/-}
FILETITLE=${FILETITLE//\?/-}
DATE=${STARTTIME:0:10}
FILENAME="_events/$DATE-$FILETITLE.md"

mkdir -p _events
echo -e $CONTENT > "$FILENAME"

echo -e "\nEvent page created: $FILENAME\n"

code --reuse-window "$FILENAME"
