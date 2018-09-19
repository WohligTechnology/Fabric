// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var myApp = angular.module('starter', ['ionic', 'starter.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login-signup/login.html',
        controller: 'LoginCtrl'
      })
      .state('otp', {
        url: '/otp',
        templateUrl: 'templates/login-signup/otp.html',
        controller: 'OtpCtrl'
      })

      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/login-signup/signup.html',
        controller: 'SignupCtrl'
      })

      .state('add-information', {
        url: '/add-information',
        templateUrl: 'templates/login-signup/add-information.html',
        controller: 'AddInformationCtrl'
      })

      .state('subscription', {
        url: '/subscription',
        templateUrl: 'templates/login-signup/subscription.html',
        controller: 'SubscriptionCtrl'
      })
      .state('buyer-seller', {
        url: '/buyer-seller',
        templateUrl: 'templates/login-signup/seller-buyer-select.html',
        controller: 'SellerBuyerCtrl'
      })
      .state('select-seller', {
        url: '/select-seller',
        templateUrl: 'templates/login-signup/select-seller.html',
        controller: 'SelectSellerCtrl'
      })

      .state('category', {
        url: '/category',
        templateUrl: 'templates/category/category.html',
        controller: 'CategoryCtrl'
      })
      .state('inner-category', {
        url: '/inner-category',
        templateUrl: 'templates/category/inner-category.html',
        controller: 'InnerCategoryCtrl'
      })
      .state('accessory', {
        url: '/accessory',
        templateUrl: 'templates/accessories/accessory.html',
        controller: 'AccessoryCtrl'
      })
      .state('product-detail', {
        url: '/product-detail',
        templateUrl: 'templates/product-detail/product-detail.html',
        controller: 'ProductDetailCtrl'
      })

      .state('tab.myshop', {
        url: '/myshop',
        views: {
          'tab-myshop': {
            templateUrl: 'templates/myshop/myshop.html',
            controller: 'MyShopCtrl'
          }
        }
      })

      .state('tab.inner-shop', {
        url: '/inner-shop',
        views: {
          'tab-myshop': {
            templateUrl: 'templates/myshop/inner-shop.html',
            controller: 'InnerShopCtrl'
          }
        }
      })
      .state('add-new-product', {
        url: '/add-new-product',
        templateUrl: 'templates/add-new-product/add-new-product.html',
        controller: 'AddNewProductCtrl'
      })
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })



      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });
