(function() {
  'use strict';

  require.config({
    // Configuring paths of dependencies
    paths: {
      'lodash': '../bower_components/lodash/lodash.min',
      'text': '../bower_components/requirejs-text/text',
      'json': '../bower_components/requirejs-plugins/src/json'
    },

    // Exporting dependencies objects
    shim: {
      'lodash': {
        exports: '_'
      }
    }
  });

  // Running local scripts
  require([
    'device',
    'app'
  ]);
})();
