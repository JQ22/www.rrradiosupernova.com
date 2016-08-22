require('vendor')

function requireAll(requireContext){
    return requireContext.keys().map(requireContext);
}

//load in order
require('foundation-sites/js/foundation.core.js');

// Load all foundation util files
var foundation_util_req = require.context("foundation-sites/js/", true, /^\.\/.*util.*\.js$/);
requireAll(foundation_util_req);

//load rest
var foundation_components_req = require.context("foundation-sites/js", true, /^(.(?!(core|util)))*\.js$/);
requireAll(foundation_components_req);

// OR load each seperately

/*
require('bower_components/foundation-sites/js/foundation.core.js');

//utils
require('bower_components/foundation-sites/js/foundation.util.box.js')
require('bower_components/foundation-sites/js/foundation.util.keyboard.js')
require('bower_components/foundation-sites/js/foundation.util.mediaQuery.js')
require('bower_components/foundation-sites/js/foundation.util.motion.js')
require('bower_components/foundation-sites/js/foundation.util.nest.js')
require('bower_components/foundation-sites/js/foundation.util.timerAndImageLoader.js')
require('bower_components/foundation-sites/js/foundation.util.touch.js')
require('bower_components/foundation-sites/js/foundation.util.triggers.js')

// Paths to individual JS components defined below
require('bower_components/foundation-sites/js/foundation.abide.js')
require('bower_components/foundation-sites/js/foundation.accordion.js')
require('bower_components/foundation-sites/js/foundation.accordionMenu.js')
require('bower_components/foundation-sites/js/foundation.drilldown.js')
require('bower_components/foundation-sites/js/foundation.dropdown.js')
require('bower_components/foundation-sites/js/foundation.dropdownMenu.js')
require('bower_components/foundation-sites/js/foundation.equalizer.js')
require('bower_components/foundation-sites/js/foundation.interchange.js')
require('bower_components/foundation-sites/js/foundation.magellan.js')
require('bower_components/foundation-sites/js/foundation.offcanvas.js')
require('bower_components/foundation-sites/js/foundation.orbit.js')
require('bower_components/foundation-sites/js/foundation.responsiveMenu.js')
require('bower_components/foundation-sites/js/foundation.responsiveToggle.js')
require('bower_components/foundation-sites/js/foundation.reveal.js')
require('bower_components/foundation-sites/js/foundation.slider.js')
require('bower_components/foundation-sites/js/foundation.sticky.js')
require('bower_components/foundation-sites/js/foundation.tabs.js')
require('bower_components/foundation-sites/js/foundation.toggler.js')
require('bower_components/foundation-sites/js/foundation.tooltip.js')*/

$(document).foundation();