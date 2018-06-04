'use strict';

(function(module){
const projectController = {};
    
projectController.show = function() {
    $('#page1, #page2, #page4').hide();
    Project.fetchAll();
    $('#page3').show();    
    repos.requestRepos(repoView.index); 
}
    
module.projectController = projectController;
})(window);