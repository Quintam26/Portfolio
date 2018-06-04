'use strict';

(function(module){
    const repoView = {};

    const ui = function() {
        let $about = $('#page3');
        $about.find('ul').empty();
        $about.show().siblings().hide();
    };

    const render = function(repo){
        var templateScript = $('#repo-template').text();
        var template = Handlebars.compile(templateScript);
        return template(repo);
    };

    repoView.index = function() {
        ui();
        $('#page3 ul').append(
            repos.with('name').map(render)
        );
    };

    module.repoView = repoView;
})(window);