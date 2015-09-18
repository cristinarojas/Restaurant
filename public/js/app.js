(function() {
  'use strict';

  define(function(require) {
    // Loading lodash object
    var _ = require('lodash');

    // Merging data objects
    var objectA = require('json!data/breakfast.json');
    var objectB = require('json!data/lunch.json');

    var theMenu  = objectA.menu.concat(objectB.menu);
    console.log(theMenu);

    var newContent = '';
    for(var i = 0; i < theMenu.length; i++) {
      newContent += '<p>' + 'Platillo: ' + theMenu[i].platillo + '</p>';
      newContent += '<p>' + 'Tipo: ' + theMenu[i].tipo + '</p>';
      newContent += '<p>' + 'Precio: ' + '$ ' + theMenu[i].price + '</p></br>';
    }

    document.getElementById('content').innerHTML = newContent;

  });
})();
