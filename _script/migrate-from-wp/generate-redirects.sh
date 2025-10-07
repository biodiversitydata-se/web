#!/usr/bin/env bash

# Usage: ./generate-redirects.sh inputfile.txt

input_file="$1"

if [[ ! -f "$input_file" ]]; then
  echo "Error: File '$input_file' not found."
  exit 1
fi

while IFS=';' read -r path redirect; do
  # skip empty lines
  [[ -z "$path" || -z "$redirect" ]] && continue

  # trim whitespace (optional)
  path=$(echo "$path" | xargs)
  redirect=$(echo "$redirect" | xargs)

  cat <<EOF
location $path {
    return 301 https://biodiversitydata.se$redirect;
}
EOF

done < "$input_file"
