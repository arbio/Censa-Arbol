compile:
	riot --config lib/riot.config.js --ext tag.html .
watch:
	riot -w --colors --config lib/riot.config.js --ext tag.html .
