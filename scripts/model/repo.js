'use strict';

(function(module) {
    const repos = {};

repos.all = [];

repos.requestRepos = function(callback){
    $.ajax({
    dataType: "json",
    url: 'https://api.github.com/users/Quintam26/repos',
    data: 'data',
    success: function(data) {
        repos.all = data;
        callback();
        }
    });
};

repos.with = attr => repos.all.filter(repo => repo[attr]);

module.repos = repos;
})(window);