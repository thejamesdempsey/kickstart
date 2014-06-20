Kickstart
=========

My automated starting place for front-end builds.

###Install via command line(recommended):
	
	git clone --recursive git@github.com:thejamesdempsey/kickstart.git your-project-folder 
	cd your-project-folder
	
###Install via zip:

Firstly you need to download the kickstart zip and unpack it to a location of your choosing.

### Getting Started

Assuming you have previously installed both node.js, grunt and bower, run the following commands:

	npm install
	bower install

The following commands will allow you to automate the build process of the project:

	## Build the overall project:
	grunt

	## Build continuously:
	grunt -watch
	
	## Build only the stylesheets:
	grunt -styles
	
	## Build only the javascripts:
	grunt -scripts
 