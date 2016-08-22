// npm dependencies
//"babel-core": "^6.4.5",
//"babel-loader": "^6.2.2",
//"webpack": "^1.12.13",
var path = require('path');
var webpack = require('webpack');

var vendorPath = "src/assets/js/vendor.js";
var foundationPath = 'src/assets/js/foundation.js';
var nexusPath = 'src/assets/js/nexus.js';

var PATHS = {
	//entry points do not follow the rules as modules, 
	//these must be defined relatively from config file
	nexus_requirements: [
		'./'+vendorPath, //explore so not imported again
		'./'+foundationPath,
		'./'+nexusPath,
	],
	app: [
	]
};

module.exports = {
	entry: {
		"nexus-ui" : PATHS.nexus_requirements, //chunks (files outputted)
	},
	output: {
		path: "dist/assets/js",
		publicPath: "dist/assets/js",
		filename: "[name].js", //seperate file per chunk by name
		sourceMapFileName: "[file].map"
	},
	watch: true,
	module: {
		loaders: [
          	{//transcompile es6 to es5
	            test: /\.js?$/,
	            loader: 'babel-loader',
	            include: /nexus_modules/,
	            query: {
			        presets: ['es2015']
			    }
        	},
			{//lint my js
				test: /\.js?$/,
				loader: 'eslint-loader',
				include: /nexus_modules/		
			},
        	{//load like normal libs (for global contexts) as regular scripts, prefered to be minified already
        		test: /\.js?$/,
        		loader: 'script-loader',
        		include: /(jquery|polyfill)/
        	}
        ],
        noParse: [//avoid parsing large dists that dont use imports/requires/define,
        	//new RegExp("vendor"),
        	//new RegExp("foundation")
        ]
	},
	resolve: {
		root: [//the requires start searching at root, absolute path
			path.resolve(__dirname)
		],
		modulesDirectories: [// after root, search these using relative path
			"web_modules", "node_modules", "bower_components", "src/assets/js"
		],
    	alias:{ //modules may depend on other modules but simple name, just 
    		'vendor' : vendorPath,
    		'foundation': foundationPath
    	},
    	extensions: ["",".js"]
    },
    plugins: [
    	//load these modules when another module complains these variables are not defined, as required
        new webpack.ProvidePlugin({
        	//jQuery: 'jquery',
        	//$: 'jquery',
        	//"window.jquery": 'jquery'
        	//Foundation: foundationPath,
            Nexus: nexusPath
        })
    ]
}