(function () {
"use strict";

angular.module('public')
.controller('MenuMyInfoController', MenuMyInfoController);

MenuMyInfoController.$inject = ['SignupService'];

function MenuMyInfoController(SignupService){
    var reg = this;

    reg.user = SignupService.user;
    reg.isRegistered = SignupService.registered;
}

}
)();
