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

Project.fetchAll = function() {
  if(localStorage.rawData){
    var parsed = JSON.parse(localStorage.rawData);
    Project.loadAll(parsed);
    
  } else {
    $.ajax({
    dataType: 'json',
    url: '../data/projectsdata.json',
    data: 'data',
    success: function(data) {
    localStorage.setItem("rawData", JSON.stringify(data));
    Project.loadAll(data);

      }
    });
  };
}
module.Project = Project;
})(window);