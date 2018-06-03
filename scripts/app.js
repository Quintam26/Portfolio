'use strict';

function Project (rawDataObj) {
     this.imageURL = rawDataObj.imageURL;
     this.title = rawDataObj.title;
     this.body = rawDataObj.body;
  }
Project.all = [];

Project.prototype.toHtml = function() {
    var templateFiller = Handlebars.compile( $('#article-template').text());
    return templateFiller(this);
};

Project.loadAll = function(rawData) {
  rawData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });
}
  
