'use strict';

(function(module){
const aboutController = {};

aboutController.show = function() {
    $('#page1, #page3, #page4').hide();
    $('#page2').show(); 
    repos.requestRepos(repoView.index);  
}

module.aboutController = aboutController;
})(window);