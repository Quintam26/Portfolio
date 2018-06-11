'use strict';

(function(module){
const projectController = {};
    
projectController.show = function() {
    $('#page1, #page2, #page4').hide();
    $('#page3,#page3 ul').show();    
    repos.requestRepos(repoView.index); 
}
    
module.projectController = projectController;
})(window);