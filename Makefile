.PHONY: serve
serve:
	@ionic serve --labs

.PHONY: run.ios
run.ios:
	@ionic run ios --device

.PHONY: run.android
run.android:
	@ionic run android --device
