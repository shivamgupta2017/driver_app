angular.module('starter')
.service("Maestro", ['$q', '$http', '$constants', 
        function ($q, $http, $constants) {
            var self = this;

            //Request Url and method
            var request = {
                url: $constants.restApiUrl,
        
                headers: {
                    "Content-Type": 'application/json'
                },
                params: {
                    'appId': $constants.appId,
                    'appSecret': $constants.appSecret
                
                }
            };

            

return {

/***********************************************************************************************************************************************/
            $getPackages : function () {	//get all packages
	    		return $http({ 
			     url:'https://www.minbazaar.com/subs/admin/service/get_packages',
			     method:'GET',
			});
                
            },
	       $get_today_orders : function () {
	    		return $http({ 
			     url:'https://www.minbazaar.com/subs/admin/driver_service/get_today_orders',
			     method:'GET',
	   	      	});
            },
            $delivery_service : function (data) {
                return $http({ 
                 url:'https://www.minbazaar.com/subs/admin/driver_service/delivery_service/on_route',
                 method:'GET',
                    params: data
                });
            },
            $get_product_package_details : function (data) { 
                var url;
             alert('data :'+JSON.stringify(data));
               
                if(data.type==='product')
                {   
                    url='subscription/product';
                }
                else 
                {
                    url='orders';
                }
            	 return $http({
			     url:'https://www.minbazaar.com/subs/admin/driver_service/get_today_orders_details/'+url+'/'+data.order_id,
			     method:'GET',
			     params: ''
			});
            },
            $update_order : function (data) { 
                var url;
                if(data.type==='package')
                {
                  alert('update order :'+JSON.stringify(data));
                }
                else if(data.type==='')
                {   
                    alert('data.type :'+JSON.stringify(data.type));

                    data.type='order';
                }
                 return $http({
                 url:'https://www.minbazaar.com/subs/admin/driver_service/delivery_service/delivery',
                 method:'GET',
                 params: data
            });
            },
            $getCategoryProducts : function (id) { //get categories products by category id          
             		return $http({ 
			     url:'https://www.minbazaar.com/subs/admin/service/get_products',
			     method:'GET',
			     params: {"cat_id":id}

			});
            },
            $getCustomerSubscriptions : function (id) { //get categories products by category id       
             		return $http({ 
			     url:'https://www.minbazaar.com/subs/admin/service/get_cust_subs',
			     method:'GET',
			     params: {"cust_id":id}

			});
            },
            $getCustomerAddresses : function (id) { //get categories products by category id       
			//alert('dffd');
             		return $http({ 
			     url:'https://www.minbazaar.com/subs/admin/service/get_customer_address',
			     method:'GET',
			     params: {"customer_id":id}

			});
            },
            $postAddresses : function (data) { //get categories products by category id       
			//alert('dffd');
             		return $http({ 
			     url:'https://www.minbazaar.com/subs/admin/service/post_address',
			     method:'GET',
			     params: data

			});
            },
            $add_new_subscription : function (data,action) { //get categories products by category id       
            //alert('dffd');
			return $http({ 
				url:'https://www.minbazaar.com/subs/admin/service/post_cust_subs'+action,
                 		method:'GET',
                 		params: data
            		});
	    },
            $create_order : function (data) { //create order     
			return $http({ 
				url:'https://www.minbazaar.com/subs/admin/service/create_order',
                 		method:'GET',
                 		params: data
            		});
	    },
            $getNextMenu : function (data) { //get categories products by category id       
			//alert('dffd');
             		return $http({ 
			     url:'https://www.minbazaar.com/subs/admin/service/get_next_day_selection',
			     method:'GET',
			     params: data

			});
            },
            $addExtraQty : function (data) { //get categories products by category id       
			//alert('dffd');
             		return $http({ 
			     url:'https://www.minbazaar.com/subs/admin/service/add_extra_quantity',
			     method:'GET',
			     params: data

			});
            },
            $getSingleSub : function (data) { //get categories products by category id       
			//alert('dffd');
             		return $http({ 
			     url:'https://www.minbazaar.com/subs/admin/service/get_single_subs_data',
			     method:'GET',
			     params: data

			});
            },

            $getSubscribePackages : function (data) { //get categories products by category id       
			         
             		return $http({ 
			     url:'https://www.minbazaar.com/subs/admin/service/get_subscribed_packages',
			     method:'GET',
			     params: {cust_id:data}

			});
            },
            $get_orders : function (data) {   
                return $http({ 
                 url:'https://www.minbazaar.com/subs/admin/service/get_orders',
                 method:'GET',
                 params: {"cust_id" : data}
                });
	  },
	   $get_price_cart : function (data) {   
                return $http({ 
                 url:'https://www.minbazaar.com/subs/admin/service/get_cart_price',
                 method:'GET',
                 params: data
                });
	},

/***********************************************************************************************************************************************/
            $getProducts : function () {
		//alert("service");
              return $http({ 
			     url:'https://www.minbazaar.com/subs/admin/application',
			     method:'GET',
			     param:{miz:'heeeeeee'}

		});
                
            },
            $getslider : function () {
            return $http({
 			 url: 'https://minbazaar.com/wp_minb_webservices/fetch_slider.php',
  			method: 'POST',
  			transformResponse: function (data) {
      				// Do whatever you want!
      				return data;
  			}
		});
                
            },
            $getSections : function () {
		var paramaters={"auth_key":'ck_bca5ee0c5f916c12896590606abab1c4cee4cc08'};
            return $http({
 			 url: 'https://minbazaar.com/wp_minb_webservices/home_promo_categories.php',
 
  			method: 'POST',
			params: paramaters,
  			transformResponse: function (data) {
      				// Do whatever you want!
      				return data;
  			}
		});
                
            },
            $getBanners : function () {
		var paramaters={"auth_key":'ck_bca5ee0c5f916c12896590606abab1c4cee4cc08'};
            return $http({
 			 url: 'https://minbazaar.com/wp_minb_webservices/home_banner_images.php',
  			method: 'POST',
			params: paramaters,
  			transformResponse: function (data) {
      				// Do whatever you want!
      				return data;
  			}
		});
                
            },
            $getReviews : function (product_id) {

                  var parameters = angular.copy(request.params);
                if(product_id){
                    parameters.product_id = product_id;
                }
              return $http.get( request.url + '/list-product-reviews.php', {
                    params: parameters,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    
                })
                
            },
            $filterProduct : function (parameters) {
              return $http.get( 'http://www.minbazaar.com/wp_minb_webservices/list_filter.php', {
                    params: parameters,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    
                })
                
            },
            $getNotification : function (parameters) {
              return $http.get( 'http://www.minbazaar.com/wp_minb_webservices/user_notification.php', {
                    params: parameters,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    
                })
                
            },
            $doActionNotification : function (parameters) {
              return $http.get( 'http://www.minbazaar.com/wp_minb_webservices/mark_user_notification.php', {
                    params: parameters,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    
                })
                
            },
            $getMsgs : function (parameters) {
              return $http.get( 'http://www.minbazaar.com/wp_minb_webservices/Msgs.php', {
                    params: parameters,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    
                })
                
            },
            $getPincode : function (parameters) {
              return $http.get( 'https://www.minbazaar.com/wp_minb_webservices/pin_matching.php', {
                    params: parameters,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    
                })
                
            },
            $setReviews : function (parameters) {
		//alert('maestro' + JSON.stringify(parameters));
            		return $http.get(
 			'https://www.minbazaar.com/wp_minb_webservices/add_review.php',{
			params: parameters,
			header:{'Content-Type': "application/json"},
			transformResponse: function (data) {
      				// Do whatever you want!
				//alert(data);
      				return data;
  			}
		});
            },
            $applyCoupon : function (parameters) {
		//alert('maestro' + JSON.stringify(parameters));
            		return $http.get(
 			'https://www.minbazaar.com/wp_minb_webservices/apply_coupon.php',{
			params: parameters,
			header:{'Content-Type': "application/json"},
			transformResponse: function (data) {
      				// Do whatever you want!
				//alert("transform reques"+JSON.stringify(data));
      				return data;
  			}
		});
            },
            //Service Function to get products by category
            $getProductsByCategory : function (categoryId,page,sortby) {
		
                var parameters = angular.copy(request.params);
                if(categoryId){
                    parameters.category = categoryId;
		    parameters.page=page;
		    parameters.search_product="";
                }
		if(sortby){
		    parameters.SortBy=sortby;
		}

              return $http.get( request.url + '/list-products.php', {
                    params: parameters,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    
                })
                
            },
            $getFilterProductsByCategory : function (categoryId,page,sortby,filter) {
		
                var parameters = angular.copy(request.params);
                if(categoryId){
                    parameters.category = categoryId;
		    parameters.page=page;
		    parameters.search_product="";
                }
		if(sortby){
		    parameters.SortBy=sortby;
		}
		if(filter)
		 parameters.filter_object=filter;
              return $http.get( request.url + '/filter-products.php', {
                    params: parameters,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    
                })
                
            },
            //Service Function to get products by category
 $getAllProducts : function (data) {
              return $http.get('https://www.minbazaar.com/subs/admin/service/search', {
                params: {search: data},
                headers: {
                        "Content-Type": 'application/json'
                    }
                })
},
            $getSelectedAddresses : function (address_id) { //get categories products by category id       
                    return $http({ 
                 url:'https://www.minbazaar.com/subs/admin/service/get_customer_address',
                 method:'GET',
                 params: {"address_id": address_id}

            });
            },
            
            //Service Function to get products by id
            $getProductsById : function (productId) {
              
                var productParams = request.params;
                productParams.productId = productId;

                return $http.get( request.url + '/single-product.php', {
                    params: productParams,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    
                })

            },
            //Service Function to get products by id
            $createOrder : function (orderData) {
                 return $http.post( request.url + '/create-order.php',orderData, {
                    params: request.params,
                    headers: {
                        "Content-Type": 'application/json'
                    }                 
                })
            },
            //Service Function to get products by id
            $getOrderById : function (orderId) {

                var orderParams = request.params;
                orderParams.orderId = orderId;

                return $http.get( request.url + '/get-order.php', {
                    params: orderParams,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    
                })
            },
            //Service Function to get order by customerid
            $getOrderByCustomer : function (customerId) {
                var orderParams = request.params;
                orderParams.customer = customerId;

                return $http.get( request.url + '/list-orders.php', {
                    params: orderParams,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    
                })
            },
            //Service Function to update order
            $updateOrder : function (orderData) {
               

                return $http.post( request.url + '/update-order.php',orderData, {
                    params: request.params,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    
                })
            },
            //get customer by Id
            $getCustomerById : function (userId) {

		console.log(request.params);
                var customerParams = angular.copy(request.params);
                customerParams.userId = userId;

		console.log("Hitting webserviceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
		console.log(request.url + '/get-customer.php');
		console.log(JSON.stringify(customerParams));
                return $http.post( request.url + '/get-customer.php',{}, {
                    params: customerParams,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    
                })
            },
            //update customer
            $updateCustomer : function (data) {

                var customerUpdateParams = angular.copy(request.params);
                customerUpdateParams.userId = data.id;

                return $http.post( request.url + '/update-customer.php', data, {
                    params: customerUpdateParams,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    
                })
            },
	       $generateOTP : function (optObj) {
                 

        

                return $http.post( 'https://www.minbazaar.com/wp-content/plugins/minbazaar_user_authentication/external/send_otp.php',optObj,{
		  // data: optObj,//'auth_key=ck_bca5ee0c5f916c12896590606abab1c4cee4cc08&mobile_no=9424081993',
                  //  params: optObj,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    

                    
                })
            },
	       $validateOTP : function (optObj) {
                 

                

                return $http.post( 'https://www.minbazaar.com/wp-content/plugins/minbazaar_user_authentication/external/send_otp.php',optObj,{
		  // data: optObj,//'auth_key=ck_bca5ee0c5f916c12896590606abab1c4cee4cc08&mobile_no=9424081993',
                  //  params: optObj,
                    headers: {
                        "Content-Type": 'application/json'
                    }
                    

                    
                })
            },

}




        }
    ])
