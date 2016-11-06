(function () {
"use strict";

angular.module('public')
.controller('MenuSignupController', MenuSignupController);

MenuSignupController.$inject = ['MenuService', 'SignupService'];

function MenuSignupController(MenuService, SignupService){
    var reg = this;

    reg.getMenuItemInfo = function(ShortName) {
      reg.isInfoSaved = false;
      reg.isResponseError = false;

      MenuService.getMenuItemInfo(ShortName)
      .then(function (response){
        SignupService.user = reg.user;
        SignupService.user.menuitem = response;
        SignupService.user.menuitem.url = MenuService.getBaseApi() + "/images/" + SignupService.user.menuitem.short_name + ".jpg"
        SignupService.registered = true;
        reg.isInfoSaved = true;

      },
      function (response) {
        reg.isResponseError = true;
      });
    }
}

}
)();
