'use strict';

(function(module){
const aboutController = {};

aboutController.show = function() {
    $('.tab-content').hide();
    $('#page2').show();    
}

module.aboutController = aboutController;
})(window);