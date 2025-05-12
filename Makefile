run:
	docker compose up --detach

restart:
	docker compose restart

rebuild:
	docker compose down
	docker build --no-cache --file dev.Dockerfile --tag biodiversitydata-se/website-dev .
	docker compose up --detach
