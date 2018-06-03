'use strict';

(function(module){
    const repoView = {};

    const ui = function() {
        let $page2 = $('#page2');
        $page2.find('ul').empty();
        $page2.show().siblings().hide();
    };

    const render = function(repo){
        var templateScript = $('#repo-template').text();
        var template = Handlebars.compile(templateScript);
        return template(repo);
    }

    repoView.index = function() {
        ui();
        $('#page2 ul').append(
            repos.with('name').map(render)
        );
    };
    module.repoView = repoView;
});(window);