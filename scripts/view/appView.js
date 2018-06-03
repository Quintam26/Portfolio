'use strict';

var pageView = {};

pageView.initIndexPage = function() {
    Project.all.forEach(function(project) {
        $('#page3 .row').append(project.toHtml());
      });
    }