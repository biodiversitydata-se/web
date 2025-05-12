run:
	docker compose up --detach

restart:
	docker compose restart

rebuild:
	docker compose down
	docker build --no-cache --file dev.Dockerfile --tag biodiversitydata-se/website-dev .
	docker compose up --detach

_clean-deps:
	rm Gemfile.lock package-lock.json

bump-deps: _clean-deps rebuild
	docker cp web-web-1:/node/package-lock.json .
