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

Project.loadAll = function(rawData) {
  rawData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });
}

Project.fetchAll = function() {
  if(localStorage.rawData) {
  var parsedData = JSON.parse(localStorage.rawData);
  console.log(localStorage.rawData);
Project.loadAll(parsedData);
  console.log(localStorage.rawData);
  pageView.initPage();
  } else {
    $.ajax({
      dataType: 'json',
      url:'../scripts/data.json',
      data: "data",
      success: function (rawData) {
      localStorage.setItem("data", JSON.stringify(rawData));
      }
    });
    pageView.initPage();
     };
}
  
