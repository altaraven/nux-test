.PHONY: setup clean install keys migrate

ARTISAN=./artisan
COMPOSER=composer
NPM=npm

default: setup

clean:
	@echo "Cleaning modules..."
	@rm -rf ./node_modules
	@rm -rf ./vendor

install:
	@echo "Installing modules..."
	@$(COMPOSER) install -o --apcu-autoloader
	@$(NPM) i

migrate:
	@echo "Migrating DB..."
	@$(ARTISAN) migrate

keys:
	@$(ARTISAN) key:generate

setup:
	@echo "Project setup..."
	@make clean
	@make install
	@make keys
	@make migrate
