'use strict';

(function(module){
const projectController = {};
    
projectController.home = function() {
    $('.tab-content').hide();
    Project.fectchAll(pageView.initIndexPage);
    $('#page3').show();    
}
    
module.projectController = projectController;
})(window);