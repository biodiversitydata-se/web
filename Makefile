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
	node _script/fetch-counts.js
	curl -sS --max-time 60 --retry 1 "https://records.biodiversitydata.se/ws/occurrences/search.json?pageSize=0&q=*:*&facets=species_group&flimit=200" --output _data/species_group-counts.json

_clean-deps:
	rm Gemfile.lock package-lock.json

bump-deps: _clean-deps rebuild
	docker cp web-web-1:/node/package-lock.json .

news:
	@_script/create-news.sh

event:
	@_script/create-event.sh
