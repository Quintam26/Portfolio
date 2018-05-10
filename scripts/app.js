'use strict';

var projects = [];

function Project (rawDataObj) {
     this.imageURL = rawDataObj.imageURL;
     this.title = rawDataObj.title;
     this.body = rawDataObj.body;
  }
  
Project.prototype.toHtml = function() {
    var templateFiller = Handlebars.compile( $( '#article-template' ).html() );
    var filledTemplate = templateFiller( this );
    return filledTemplate;
};

  rawData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });
  
  projects.forEach(function(project) {
    $('#page3 .row').append(project.toHtml());
  });
  
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', '');
  