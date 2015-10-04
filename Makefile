source_folder := www
source_js_folder := $(source_folder)/js

.PHONY: serve
serve: build
	@ionic serve --nobrowser --labs

.PHONY: build
build: lint
	@echo 'Executing browserify...'
	@browserify $(source_js_folder)/app.js -o $(source_folder)/bundle.js

.PHONY: lint
lint:
	@jshint $(source_js_folder) --reporter 'node_modules/jshint-stylish'

.PHONY: run.ios.device
run.ios.device: build
	@ionic run ios --device

.PHONY: run.android.device
run.android.device: build
	@ionic run android --device

.PHONY: run.ios
run.ios: build
	@ionic run ios

.PHONY: run.android
run.android: build
	@ionic run android
