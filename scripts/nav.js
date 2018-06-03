'use strict';
var pageView = {};

pageView.handleMainNav = function() {
$('.main-nav ul').on('click', '#home-tab', function(event) {
    $('#page2, #page3, #page4, #p3').fadeOut();
    $('#page1').fadeIn();
    });
    
$('.main-nav ul').on('click', '#about-tab', function(event) {
   $('#page1, #page3, #page4, #p3').fadeOut();
   $('#page2').fadeIn();
    });

$('.heading-group-h1 h2.name').on('click', function(event) {
    $('#page1, #page2, #page3, #page4').fadeIn();
    });
};

$(document).ready(function() {
    pageView.handleMainNav();
  });