(function() {
	'use strict';
	angular
		.module('angularOwlCarouselDirective', ['angular-owl-carousel-directive'])
		.controller('MainController', MainController);
	/** @ngInject */
	function MainController($interval) {
		var vm = this,
			i = 1;
		vm.owlItems = [];
		vm.owlOptions = {
			items: 1,
			nav: true,
			navText: [
				"<i class='fa fa-angle-left'></i>",
				"<i class='fa fa-angle-right'></i>"
			]
		};
		$interval(function() {
			vm.owlItems.push('item ' + i++);
		}, 5e3)
	}
})();
