// Ionic Starter App
//AIzaSyA9dQ2le_XofVAbsIAdX9rJg9m0q3ph7OM
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.rating','ionic-timepicker', ,'checklist-model','ionic-multi-date-picker', 'starter.controllers', 'starter.services', 'ngStorage', 'countrySelect', 'credit-cards', 'ngCardIO'])

.run(function($ionicPlatform,$ionicPopup,$state,$ionicHistory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    //alert('hello p :');
	
  navigator.geolocation.getCurrentPosition(function getCoor(response)
  {
    alert('shivam :'+JSON.stringify(response));

  }, function errorCoor(err)
  {
  //  alert('shivam err:'+JSON.stringify(err));
  }, {maximumAge:60000, timeout:5000, enableHighAccuracy:true})


  document.addEventListener("offline", onOffline, false);
	document.addEventListener("online", onOnline, false);
	function onOffline() {
		alert('offline');
		$state.go('app.network_connection');
	}
	function onOnline() {
		alert('online');
		//$state.go('app.network_connection');
 		$ionicHistory.goBack();
	}

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(false);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.run(function($rootScope, $ionicPlatform, $ionicHistory,$state, $ionicPopup){

  $ionicPlatform.registerBackButtonAction(function(e) {

      	e.preventDefault();

      	if($state.is('app.editorial')||$state.is('signin')) {
        	e.stopPropagation();
		 var c= confirm("Do You want to exit?");	
            	if(c==1)
              	  ionic.Platform.exitApp();
            	else
              	  return false;
		
      }
	else if($state.is('app.payment_step2')||$state.is('app.payment_step3')){
		return false;
	}
	else{
          	$ionicHistory.goBack();
	}
    },200);

 /* $ionicPlatform.registerBackButtonAction(function(e){
	//e.preventDefault();
    	if ($rootScope.backButtonPressedOnceToExit) {	
 		var c= confirm("Do You want to exit?");
    		if(c)
      			ionic.Platform.exitApp();
    		else
     			$rootScope.backButtonPressedOnceToExit = false;

    	}
    	else if ($ionicHistory.backView()) {
      		$ionicHistory.goBack();
    	}
    else {

      		$rootScope.backButtonPressedOnceToExit = true;
      		window.plugins.toast.showShortCenter(
        		"Press back button again to exit",function(a){ },function(b){}
      		);
      		setTimeout(function(){
        		$rootScope.backButtonPressedOnceToExit = false;
      		},2000);
    	}
    	e.preventDefault();
    	return false;
  },101);*/

})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.editorial', {
      url: '/editorial',
      views: {
        'menuContent': {
          templateUrl: 'templates/editorial.html',
          controller: 'MainCtrl'
        }
      }
    })
    .state('app.view_order', {
      url: '/view_order/:order_id/:type/:package_id',
      views: {
          'menuContent': {
          templateUrl: 'templates/package.html',
          controller: 'view_orderCtrl'
        }
      }
    })
    .state('app.mysubscriptions', {
      url: '/subscriptions',
      views: {
        'menuContent': {
          templateUrl: 'templates/my-subscriptions.html',
          controller: 'subscriptionsCtrl'
        }
      }
    })
    .state('app.singlesubscription', {
      url: '/singlesubscription/:product_id/:subscription_id/:unit_mapping_id',
      views: {
        'menuContent': {
          templateUrl: 'templates/single-subscription.html',
          controller: 'singleSubscriptionCtrl'
        }
      }
    })
    .state('app.nextdayselection', {
      url: '/nextdayselection/:package_id/:package_size_id/:subscription_id',
      views: {
        'menuContent': {
          templateUrl: 'templates/next-day-selection.html',
          controller: 'nextDaySelectionCtrl'
        }
      }
    })
    .state('app.category', {
      url: '/category/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/category.html',
          controller: 'categoryCtrl'
        }
      }
    })
    .state('app.step_1', {
      url: '/step_1/:id/:unit_id/:unit/:weight/:is_subs/:is_package/:size_id/:package_id',
      views: {
        'menuContent': {
          templateUrl: 'templates/step_1.html',
          controller: 'step_1Controller'
        }
      }
    })
    .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search-product.html',
          controller: 'SearchCtrl'
        }
      }
    })
    .state('app.confirmation', {
      url: '/confirmation/:selected_address_id',
      views: {
        'menuContent': {
          templateUrl: 'templates/confirmation.html',
          controller: 'confirmationCtrl'
        }
      }
    })
    .state('onboarding', {
      	url: '/onboarding',
	cache: false,
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })

    .state('signin', {
      url: '/signin',
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
    })

    .state('signup', {
      url: '/signup',
          templateUrl: 'templates/signup.html',
          controller: 'SignUpCtrl'
    })
    .state('feedback', {
      url: '/feedback',
          templateUrl: 'templates/feedback.html',
          controller: 'feedbackCtrl'
    })
    .state('forgot-password', {
      url: '/forgot-password',
          templateUrl: 'templates/forgot-password.html',
          controller: 'LoginCtrl'
    })
    .state('app.product-list', {
      url: '/product-list/:categoryId/:catagoryName',
      views: {
        'menuContent': {
          templateUrl: 'templates/product-list.html',
          controller: 'ProductListCtrl'
        }
      }
    })
    .state('app.network_connection', {
      url: '/network_connection',
      views: {
        'menuContent': {
          templateUrl: 'templates/network_connection.html',
          controller: 'noctrl'
        }
      }
    })

  .state('app.single', {
    url: '/single/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/single-product.html',
        controller: 'SingleProductCtrl'
      }
    }
  })
  .state('app.reviews', {
    url: '/reviews/:id/:pname/:cname/:imgurl',
    views: {
      'menuContent': {
        templateUrl: 'templates/product-reviews.html',
        controller: 'ProductReviewsCtrl'
      }
    }
  })
  .state('app.payment_step1', {
    url: '/payment_step1/',
    views: {
      'menuContent': {
        templateUrl: 'templates/payment_step1.html',
        controller: 'OrderCtrl'
      }
    }
  })

  .state('app.payment_step2', {
    url: '/payment_step2/:orderId/:amount/:method/:codCharges/:shippingCharges/:currency/:email/:name/:phone',
    views: {
      'menuContent': {
        templateUrl: 'templates/payment_step2.html',
        controller: 'PaymentCtrl'
      }
    }
  })

  .state('app.payment_step3', {
    url: '/payment_step3/:orderId/:transactionId/:payByCash/:amount/:status',
    views: {
      'menuContent': {
        templateUrl: 'templates/payment_step3.html',
        controller: 'OrderConfirmCtrl'
      }
    }
  })
  .state('app.zipcode', {
    url: '/zipcode/',
    views: {
      'menuContent': {
        templateUrl: 'templates/zipcode.html',
        controller: 'zipCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/app/editorial');
$ionicConfigProvider.backButton.previousTitleText(false).text('');
});


//ngMatch directive
(function () {
'use strict';
var directiveId = 'ngMatch';
angular.module('starter').directive(directiveId, ['$parse', function ($parse) {
 
var directive = {
link: link,
restrict: 'A',
require: '?ngModel'
};
return directive;
 
function link(scope, elem, attrs, ctrl) {
// if ngModel is not defined, we don't need to do anything
if (!ctrl) return;
if (!attrs[directiveId]) return;
 
var firstPassword = $parse(attrs[directiveId]);
 
var validator = function (value) {
var temp = firstPassword(scope),
v = value === temp;
ctrl.$setValidity('match', v);
return value;
}
 
ctrl.$parsers.unshift(validator);
ctrl.$formatters.push(validator);
attrs.$observe(directiveId, function () {
validator(ctrl.$viewValue);
});
 
}
}]);
})();
