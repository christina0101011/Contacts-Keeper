 var app = angular.module( 'contactsApp', [ ] )
.controller('mainCTRL', function( $scope ){
  $scope.currentPersonId = -1;
  $scope.contactsKeeper = [
    {
      name: 'Christina',
      telephone: '0123456789',
      email: 'xkapiy@gmail.com'
    }
  ];
  $scope.addContact = function() {
    if ( $scope.name != '' ) {
      $scope.contactsKeeper.push({
        name: $scope.name,
        telephone: $scope.telephone,
        email: $scope.email
      });
      $scope.name = '';
      $scope.telephone = '';
      $scope.email = '';
    }
  }
  $scope.saveContact = function() {
    if( $scope.currentContactId > -1 ){
      var id = $scope.currentContactId;
      $scope.contactsKeeper[id].name = $scope.name; $scope.contactsKeeper[id].telephone = $scope.telephone;
      $scope.contactsKeeper[id].email = $scope.email;
      $scope.name = '';
      $scope.telephone = '';
      $scope.email = '';
      $scope.currentContactId = -1;
    }
  }
  $scope.editContact = function ( id ) {
    $scope.currentPersonId = id;
    $scope.name = $scope.contactsKeeper[id].name;
    $scope.telephone = $scope.contactsKeeper[id].telephone;
    $scope.email = $scope.contactsKeeper[id].email;
  }
  $scope.deleteContact = function( id ) {
    $scope.contactsKeeper.splice( id, 1 );
  }
})