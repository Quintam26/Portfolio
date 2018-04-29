'use strict';

function Project (projectsDataObj) {
     this.imageURL = projectsDataObj.imageURL;
     this.title = projectsDataObj.title;
     this.body = projectsDataObj.body;
  }
  
  Project.prototype.toHtml = function() {
    var $newProject = $('page3.smooth').clone();
    $newProject.find('#portfolio img').attr('src', this.imageURL);
    $newProject.find('#portfolio h2').html(this.title);
    $newProject.find('#portfolio p').html(this.body);
    return $newProject;
  };

  projectsData.forEach(function(projectObject) {
    projectsData.push(new Project(projectObject));
  });
  
  projects.forEach(function(project) {
    $('#page3').append(project.toHtml());
  });
  
  