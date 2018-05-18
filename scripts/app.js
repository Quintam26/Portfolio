var projectContainer = document.getElementById('page3');

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
    var htmlData = '';
    for(i = 0; i < data.length; i++ ){
        htmlData += data[i].title + data[i].imageURL + data[i].body; 
    }
    projectContainer.insertAdjacentHTML('beforeend', htmlData);
}