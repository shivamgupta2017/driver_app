angular.module('starter.services', [])
    .factory('StorageService', function ($localStorage) {

        $localStorage.things = $localStorage.things || [];
        $localStorage.things.userObj = $localStorage.things.userObj || {};

       // console.log()

        var _getAll = function () {
            console.log($localStorage.things);
            return $localStorage.things;
        };
        var _push = function (thing) {
            $localStorage.things.push(thing);
        }
        var _addUserObj = function (data) {
		//alert("ad user object " + JSON.stringify(data));
		localStorage.setItem('userObj', JSON.stringify(data));
           // $localStorage.things.userObj = $localStorage.things.userObj || {};
            //$localStorage.things.userObj = data;
		//alert("after"+JSON.stringify($localStorage.things.userObj));
        }
        var _getUserObj = function (data) {
		//alert(JSON.stringify($localStorage.things.userObj));
            console.log(JSON.stringify($localStorage.things.userObj));
           return $localStorage.things.userObj;
        }
        var _remove = function () {
            $localStorage.things = [];
            console.log('userObj removed')
        }
        return {
            getAll: _getAll,
            getUserObj: _getUserObj,
            add: _addUserObj,
            remove: _remove
        };
    })
.factory('AuthService', function() {

  var LOCAL_TOKEN_KEY = "userObj";
  var id = '';
  var email = '';
  var name = '';

  var isAuthenticated = false;
  var role = '';
  var authToken;

  function loadUserCredentials() {
    var user = window.localStorage.getItem(LOCAL_TOKEN_KEY);
    if (user) {
		//alert('loadusercredentials');
      		useCredentials(JSON.parse(user));
    }

  }

  var storeUserCredentials=function(user) {//login
        window.localStorage.setItem(LOCAL_TOKEN_KEY, JSON.stringify(user));
        useCredentials(user);
  }

  function useCredentials(user) {
	//alert('user credential'+JSON.stringify(user));
		
    id       = user.id;
   // username = user.username;
    email    = user.email;
    name     = user.first_name+' '+user.last_name;
    phone    = user.phone;

    isAuthenticated = true;
    authToken = JSON.stringify(user);
    //$http.defaults.headers.common['X-Auth-Token'] = JSON.stringify(user);
  }

  var destroyUserCredentials= function() {//logout
    authToken = undefined;

    id       = '';
    username = '';
    email    = '';
    name     = '';

    isAuthenticated = false;
    //$http.defaults.headers.common['X-Auth-Token'] = undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  }

  var isAuthorized = function(authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (isAuthenticated && authorizedRoles.indexOf(role) !== -1);
  };

  loadUserCredentials();
	
  return {
	destroyUserCredentials:destroyUserCredentials,
    storeUserCredentials:storeUserCredentials,
    isAuthorized: isAuthorized,
    isAuthenticated: function() {return isAuthenticated;},
    id: function() {return id;},
    name: function() {return name;},
    phone: function() {return phone;},
   // username: function() {return username;},
    email: function() {return email;},
    authToken: function() {return authToken;},
    role: function() {return role;}
  };
})    
    .factory('CartService', function ($localStorage) {

        $localStorage.cart = $localStorage.cart || [];

        var _getAll = function () {
            console.log($localStorage.cart);
            return $localStorage.cart;
        };
        var _push = function (thing) {
            	$localStorage.cart.push(thing);
	
		//alert('push'+JSON.stringify($localStorage.cart));
            console.log($localStorage.cart);
        }
        var _remove = function (thing) {
            $localStorage.cart.splice($localStorage.cart.indexOf(thing), 1);
            console.log('removed, current length'+ $localStorage.cart.length);
        }
        
        var _removeAll = function () {
            $localStorage.cart = [];
            console.log('all items removed');
        }
        return {
            getAll: _getAll,
            push: _push,
            remove: _remove,
            removeAll: _removeAll
        };
    })
    
    .factory('WishlistService', function ($localStorage) {

        $localStorage.wishlist = $localStorage.wishlist || [];

        var _getAll = function () {
            console.log($localStorage.wishlist);
            return $localStorage.wishlist;
        };
        var _push = function (thing) {
            $localStorage.wishlist.push(thing);
            console.log($localStorage.wishlist);
        }
        var _remove = function (thing) {
            $localStorage.wishlist.splice($localStorage.wishlist.indexOf(thing), 1);
            console.log('removed, current length'+ $localStorage.wishlist.length);
        }
        return {
            getAll: _getAll,
            push: _push,
            remove: _remove
        };
    })
    
    .factory('$dataService', ['$http', '$constants', function ($http, $constants) {
        var apiUrl = $constants.jsonApiUrl;
		
         
            header = {
                'Content-Type': "application/json"
            };

        return {

            $checkZip: function (data) {
                             return $http({ 
			     url:apiUrl+'check_zip',
			     method:'GET',
			     params: data

		});
            },

            $login: function (data) {
                return $http({ 
			     url:apiUrl+'driver_login',
			     method:'GET',
			     params: data

		});
            },
//new shivam gupta
            $signup: function (data) {
//             alert(apiUrl);
//
                return $http({ 
                 url:apiUrl+'customer_registration',
                 method:'GET',
                 params: data

        });
            },


     /*       $checkZip: function (data) {
			
                return $http.get('https://www.minbazaar.com/subs/admin/service/check_zip', {
                    //header: {'Content-Type': 'application/x-www-form-urlencoded','Content-Type': "application/json"},
                    params: data
                })
            },*/
            $getNonce: function () {
                return $http.post(apiUrl + '/get_nonce/?controller=user&method=register', {}, {
                    header: header
                })

            },

            /*$nsignup: function (data) {
			
                return $http.get(apiUrl + '/user/register/', {
                    header: header,
                    params: data
                })
            },*/

         /*   $login: function (data) {
                return $http.get(apiUrl + '/user/generate_auth_cookie/', {
                    header: header,
                    params: data
                })
            },*/

            $passwordReset: function (params) {
                console.log(params);
                return $http.get(apiUrl + '/user/retrieve_password/', {
                    header: header,
                    params: params
                })
            },

            $getPosts: function (params) {
                console.log(params);
                return $http.get(apiUrl + '/get_category_posts/', {
                    header: header,
                    params: params
                })
            }



        }
    }])
.factory('Language', function() {
	
  return {
    saveLang: function(x) {
	
      window.localStorage.setItem("lang", x);
    },
    getLang: function() {
      if(window.localStorage.getItem("lang"))
        return window.localStorage.getItem("lang");
      else
        return 'en';      
    }
  };
})
