(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'张凌圣',
        ab:'',
        name1:'张凌圣',
        phone:'13003802381',
        phone1:'13003802381',
        createTime:'2017-9-28 15:30:00',
        email:'805769602@qq.com',
        hylx:'111'
      });
    });
  }])
})();
