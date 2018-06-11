'use strict';

(function(module){
const homeController = {};

homeController.show = function() {
    $('#page1, #page2, #page3, #page4').show();
    $('#page3 ul').hide();   
}

module.homeController = homeController;
})(window);