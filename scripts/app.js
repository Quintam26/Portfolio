'use strict';

var projects = [];

function Project (rawDataObj) {
     this.imageURL = rawDataObj.imageURL;
     this.title = rawDataObj.title;
     this.body = rawDataObj.body;
  }
  
  Project.prototype.toHtml = function() {
    var $newProject = $('.template').clone();
    $newProject.removeClass('template');
    $newProject.find('img').attr('src', this.imageURL);
    $newProject.find('h2').html(this.title);
    $newProject.find('p').html(this.body);
    return $newProject;
  };

  rawData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });
  
  projects.forEach(function(project) {
    $('#page3 .row').append(project.toHtml());
  });
  
  