run:
	docker compose up --detach

restart:
	docker compose restart

rebuild:
	docker compose down
	docker build --no-cache --file dev.Dockerfile --tag biodiversitydata-se/website-dev .
	docker compose up --detach

build-nginx:
	docker build --no-cache --tag biodiversitydata-se/website .

run-nginx:
	docker run --name biodiversitydata-se-website --detach --publish 80:80 biodiversitydata-se/website

pre-render:
	_script/create-news-year-pages.sh
	curl -sS --max-time 30 --retry 1 "https://collections.biodiversitydata.se/ws/institution/count" --output _data/institution-count.json
	curl -sS --max-time 30 --retry 1 "https://collections.biodiversitydata.se/ws/collection/count" --output _data/collection-count.json
	curl -sS --max-time 30 --retry 1 "https://collections.biodiversitydata.se/ws/dataResource/count" --output _data/dataset-count.json
	curl -sS --max-time 30 --retry 1 "https://images.biodiversitydata.se/ws/search?q=*:*&max=0" --output _data/image-count.json
	curl -sS --max-time 30 --retry 1 "https://records.biodiversitydata.se/ws/occurrences/search?q=*:*&facet=off&pageSize=0" --output _data/occurrence-count.json
	curl -sS --max-time 30 --retry 1 "https://records.biodiversitydata.se/ws/occurrences/search.json?pageSize=0&q=*:*&facets=species_group&flimit=200" --output _data/species_groups-count.json

_clean-deps:
	rm Gemfile.lock package-lock.json

bump-deps: _clean-deps rebuild
	docker cp web-web-1:/node/package-lock.json .
