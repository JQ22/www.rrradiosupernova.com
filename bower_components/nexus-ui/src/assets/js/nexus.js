require('vendor')
require('foundation')

function requireAll(requireContext){
    return requireContext.keys().map(requireContext);
}

//load in order
require('script!nexus_modules/nexus-core.js');

// Load all foundation util files
var nexus_util_req = require.context("nexus_modules", true, /^\.\/.*nexus-util.*\.js$/);
requireAll(nexus_util_req);

//load rest
var nexus_components_req = require.context("nexus_modules", true, /^(.(?!(nexus-core|nexus-util)))*\.js$/);
requireAll(nexus_components_req);


// OR load individually

/*


*/