myApp.controller('MyShopCtrl', function ($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/modal/sort-product-modal.html', {
    scope: $scope,
    animation: 'slide-left-right'
  }).then(function (modal) {
    $scope.sortProductModal = modal;
  });
  $scope.openSortProductModal = function () {
    $scope.sortProductModal.show();
  };

  $scope.closeSortProductModal = function () {
    $scope.sortProductModal.hide();
  };
})
