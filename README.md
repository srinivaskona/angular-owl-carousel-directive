# Angular Owl Carousel Directive

Can be used with [ Owl Carousel 2](https://github.com/OwlCarousel2/OwlCarousel2)

Install:

Bower: `bower install angular-owl-carousel-directive --save`

Javascript:

    //define module
    angular.module('my-module', ['angular-owl-carousel-directive'])
    
    //controller
    angular.controller('MainController', MainController);
           	/** @ngInject */
           	function MainController() {
           		var vm = this;
           		vm.owlItems = ['item 1', 'item 2'];
           		vm.owlOptions = {
           			items: 1,
           			nav: true
           		};
           	}
           	
HTML:

    <div class="container" ng-controller="MainController as vm">
    	<owl-carousel owl-items="vm.owlItems" owl-options="vm.owlOptions">
    		<div class="item">{{ index }} - {{ item }}</div>
    	</owl-carousel>
    </div>
    
or 

    <div class="container" ng-controller="MainController as vm">
        <div owl-carousel owl-items="vm.owlItems" owl-options="vm.owlOptions">
            <div class="item">{{ index }} - {{ item }}</div>
        </div>
    </div>
    
Plugin [documentation](https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html)     
