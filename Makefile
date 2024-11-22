.PHONY: setup clean install configs keys migrate

ARTISAN=./artisan
COMPOSER=composer
NPM=npm

default: setup

clean:
	@echo "Cleaning modules..."
	@rm -rf ./vendor

install:
	@echo "Installing modules..."
	@$(COMPOSER) install -o --apcu-autoloader --no-dev
	@$(NPM) i --no-dev

migrate:
	@echo "Migrating DB..."
	@$(ARTISAN) migrate

configs:
	@echo "Copying configs..."
	@cp .env.example .env

keys:
	@$(ARTISAN) key:generate

setup:
	@echo "Project setup..."
	@make clean
	@make install
	@make configs
	@make keys
	@make migrate
