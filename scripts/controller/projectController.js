'use strict';

(function(module){
const projectController = {};
    
projectController.home = function() {
    $('.tab-content').hide();
    Project.fetchAll();
    $('#page3').show();    
}
    
module.projectController = projectController;
})(window);