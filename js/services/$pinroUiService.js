angular.module('starter').factory('$pinroUiService', function ($state, $ionicPopup, $ionicLoading) {

    return {
      showAlert: function (message, type) {
      if(type==='success'){   
          var alertTitle = '<i class="ion-checkmark-circled balanced"></i>';
          var template = {
        text: 'Close',
        type: 'button-balanced custom-button'
      }
      }else if(type === 'error'){
          var alertTitle = '<i class="ion-close-circled assertive"></i>';
          var template = {
       text: 'Close',
        type: 'button-assertive custom-button'
      }
      }else{
          var alertTitle = '<i class="ion-information-circled default"></i>';
          var template = {
        text: 'Close',
        type: 'button-default custom-button'
      }
      }
        $ionicPopup.alert({
          title: alertTitle,
          template:  message,
          buttons: [
              template
          ]
        });

      },

      showConfirm: function(stateName, message){
         // A confirm dialog
 
   var confirmPopup = $ionicPopup.confirm({
     title: '<i class="ion-android-lock dark"></i>',
     template: message,
     buttons: [
      { text: 'Cancel',
        type: 'button-default' },
      {
        text: '<b>Ok</b>',
        type: 'button-dark',
        onTap: function(e) {
          return true;
        }
      }]
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
       if(stateName){
         
         $state.go(stateName);
       }
     } else {
       console.log('You are not sure');
     }
   });
  

 
      },

      showLoading: function(){
        
       $ionicLoading.show({
      template: '<ion-spinner icon="spiral" style="background-image: url(img/cod.png);"></ion-spinner>'
    });
      },

      hideLoading: function(){
        $ionicLoading.hide();
      },

    //go back
    goBack: function () {

      window.history.go(-1);

    }
    


    }


  });
