'use strict';

var projects = [];

function Project (rawDataObj) {
     this.imageURL = rawDataObj.imageURL;
     this.title = rawDataObj.title;
     this.body = rawDataObj.body;
  }
  
  Project.prototype.toHtml = function() {
    var $newProject = $('#portfolio.smooth').clone();
    $newProject.removeClass('smooth');
    $newProject.find('#portfolio img').attr('src', this.imageURL);
    $newProject.find('#portfolio h2').html(this.title);
    $newProject.find('#portfolio p').html(this.body);
    return $newProject;
  };

  rawData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });
  
  projects.forEach(function(project) {
    $('#portfolio').append(project.toHtml());
  });
  
  