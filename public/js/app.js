(function() {
  'use strict';

  define(function(require) {
    // Loading lodash object
    var _ = require('lodash');

    // Merging data objects
    var objectA = require('json!data/breakfast.json');
    var objectB = require('json!data/lunch.json');
    var objectC = _.merge({}, objectA, objectB);

    // Options arrays
    var menuArray = [];

    // DOM variables
    var dataTable;

    _.forEach(objectC.menu, function(food, optionKey) {
        menuArray.push(food);
        console.log(menuArray);
        addRow(food.platillo, food.tipo, food.price)
    });

    // Get the table element from tbody
    dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];

    // Removing the first row
    deleteFirstRow();

    // Functions
    function addRow(platillo, tipo, price) {
      // Cloning a new row from the first row.
      var newRow = dataTable.rows[0].cloneNode(true);

      // Assigning the name and the price in each column
      newRow.cells[0].innerHTML = platillo;
      newRow.cells[1].innerHTML = tipo;
      newRow.cells[2].innerHTML = price;

      // Appending new row
      dataTable.appendChild(newRow);
    }

    // This function is to remove the first row of the table
    function deleteFirstRow() {
      dataTable.deleteRow(0);
    }

    // This funciton is to show or hide the prices depends on hide-text class.
    function switchPrices() {
      var priceElements = document.getElementsByClassName('price');

      for (var i = 0; i <= priceElements.length - 1; i++) {
        if (priceElements[i].classList.contains('hide-text')) {
            priceElements[i].classList.remove('hide-text');
        } else {
          priceElements[i].classList.add('hide-text');
        }
      }
    }

  });
})();
