src_folder := www

.PHONY: serve
serve: build
	@ionic serve --nobrowser --labs

.PHONY: build
build:
	@echo 'Executing browserify...'
	@browserify $(src_folder)/js/app.js -o $(src_folder)/bundle.js

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
