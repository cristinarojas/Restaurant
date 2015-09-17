(function() {
  'use strict';

  define(function(require) {
    // Loading lodash object
    var _ = require('lodash');

    // Merging data objects
    var objectA = require('json!data/breakfast.json');
    var objectB = require('json!data/lunch.json');
    var objectC = _.merge({}, objectA, objectB);

    // Getting default prices (base price, inspect price & delivery price)
    var basePrice = objectC.base_price;
    var inspectPrepPrice = objectC.inspect_prep_price;
    var personalDeliveryPrice = objectC.personal_delivery_price;
    var currencyCode = objectC.currency_code;
    var totalPrice = 0;

    // Options arrays
    var optionsArray = [];
    var optionsSortedByHighestPrice = [];

    // DOM variables
    var dataTable;
    var buttonShow;

    // Get options with non-zero values OR is_default = true AND no_ui is undefined
    _.forEach(objectC.options, function(option, optionKey) {
      if (option.price > 0 || option.is_default === true && typeof option.no_ui === 'undefined') {
        // Getting only options with names
        if (typeof option.name !== 'undefined') {
          optionsArray.push(option);
        }
      }
    });

    // Sorting options by highest price (descending)
    optionsSortedByHighestPrice = optionsArray.sort(function(a, b) {
      return b.price - a.price
    });

    // Get the table element from tbody
    dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];

    // Display Options in the dataTable
    _.forEach(optionsSortedByHighestPrice, function(option) {
      addRow(option.name, (option.price > 0) ? currencyCode + option.price : '-');

      // Adding each price to totalPrice variable
      totalPrice += option.price;
    });

    // Adding the default prices (base price, inspect price & delivery price)
    totalPrice += basePrice;
    totalPrice += inspectPrepPrice;
    totalPrice += personalDeliveryPrice;

    // Adding last 2 rows for Total Price & Show Pricing
    addRow('Total Price', currencyCode + totalPrice);
    addRow('Show Pricing', '<button id="show">OFF</button>', 'show');

    // Removing the first row
    deleteFirstRow();

    /**
     * Events
     */
    buttonShow = document.getElementById('show');

    // When the user click on ON/OFF button...
    buttonShow.addEventListener('click', function() {
      buttonShow.innerHTML = 'ON';

      if (document.getElementsByClassName('price')[0].classList.contains('hide-text')) {
        buttonShow.innerHTML = 'OFF';
      }

      switchPrices();
    }, false);

    /**
     * Functions
     */
    function addRow(name, price, className) {
      // Cloning a new row from the first row.
      var newRow = dataTable.rows[0].cloneNode(true);

      // Assigning the name and the price in each column
      newRow.cells[0].innerHTML = name;
      newRow.cells[1].innerHTML = price;

      // This is to add the show class just for the button
      if (className) {
        newRow.cells[1].className = className;
      }

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
