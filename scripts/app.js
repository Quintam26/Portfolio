
var pageCounter = 0;

document.getElementById('button').addEventListener('click', function() {
    $.ajax({
    type: 'GET',
    url: 'json/data.json', 
    dataType: 'json',
    success: function(data) {
        renderHTML(data);
        }
    });
});

function renderHTML(data){
    var projectContainer = document.getElementById('portfolio').parentNode;
    var htmlData = '';
    htmlData += data[pageCounter].title + data[pageCounter].imageURL + data[pageCounter].body;
    pageCounter++; 
    projectContainer.insertAdjacentHTML('beforeend', htmlData);
    if(pageCounter >= data.length){
        button.classList.add('hide-me');
    };
}