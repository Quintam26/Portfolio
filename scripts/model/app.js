'use strict';

(function(module) {

function Project (rawDataObj) {
     this.imageURL = rawDataObj.imageURL;
     this.title = rawDataObj.title;
     this.body = rawDataObj.body;
  }

Project.all = [];

Project.prototype.toHtml = function() {
    var templateFiller = Handlebars.compile($('#article-template').text());
    return templateFiller(this);
};

Project.loadAll = function(rawData) {
  rawData.forEach(function(projectObject) {
    Project.all.push(new Project(projectObject));
  })
}

Project.fetchAll = callback => {
  $.get('/projects')
  .then(
    results => {
      Project.loadAll(results);
      callback();
    }
  )
};
module.Project = Project;
})(window);