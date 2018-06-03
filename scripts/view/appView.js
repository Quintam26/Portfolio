'use strict';

(function(module) {

var pageView = {};

pageView.initIndexPage = function() {
    Project.all.forEach(function(project) {
    $('#page3 .row').append(project.toHtml());
    });
}

Project.fetchAll(pageView.initIndexPage);
module.pageView = pageView;
})(window);