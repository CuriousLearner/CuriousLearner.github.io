// Main Angular app module

var app = angular.module('app', ['ngRoute', 'ngAnimate']);

// Theme Toggle Functionality
function toggleTheme() {
  const body = document.body;
  const isDarkMode = body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  updateThemeIcon(isDarkMode);
}

function updateThemeIcon(isDarkMode) {
  const icon = document.querySelector('.theme-toggle i');
  if (icon) {
    icon.className = isDarkMode ? 'zmdi zmdi-brightness-7 zmdi-hc-2x' : 'zmdi zmdi-brightness-6 zmdi-hc-2x';
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
    updateThemeIcon(true);
  }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initTheme);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/work', {
      templateUrl: '../views/work.html',
      controller: 'WorkController'
    }).
    when('/about', {
      templateUrl: '../views/about.html',
      controller: 'AboutController'
    }).
    when('/skills', {
      templateUrl: '../views/skills.html',
      controller: 'SkillsController'
    }).
    when('/talks', {
      templateUrl: '../views/talks.html',
      controller: 'TalksController'
    }).
    when('/projects', {
      templateUrl: '../views/projects.html',
      controller: 'ProjectsController'
    }).
    when('/contact', {
      templateUrl: '../views/contact.html',
      controller: 'ContactController'
    }).
    when('/recommendations', {
      templateUrl: '../views/recommendations.html',
      controller: 'RecommendationsController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);

$(document).ready(function() {
  $('.move-to-top').addClass('hide');
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
    $(window).scroll(function() {
      if($(window).scrollTop() + $(window).height() > $(document).height() - 600) {
        $('.move-to-top').removeClass('hide');
      }
      else {
        $('.move-to-top').addClass('hide');
      }
    });
  });
});
