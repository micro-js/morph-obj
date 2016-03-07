#
# Vars
#

BIN = ./node_modules/.bin

#
# Tasks
#

node_modules: package.json
	@npm install

test: node_modules
	@${BIN}/tape test/*

validate: node_modules
	@standard

init:
	@git init
	@git add .
	@git commit -am "FIRST"
	@hub create micro-js/morph-obj -d "Morph an object so that it looks like another object"
	@travis enable
	@git push -u origin master

.PHONY: test validate init
