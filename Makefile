PHONY: prod

prod:
	NODE_ENV=development ./node_modules/.bin/gulp


dev:
	NODE_ENV=development ./node_modules/.bin/gulp watch
