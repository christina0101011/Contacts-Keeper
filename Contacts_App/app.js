 var app = angular.module( 'contactsApp', [ ] )
.controller('mainCTRL', function( $scope ){
  $scope.currentPersonId = -1;
  $scope.contactsKeeper = [
    {
      firstName: 'Christina',
      lastName: 'Kapiy',
      telephone: '0123456789',
      email: 'xkapiy@gmail.com'
    },
      {
      firstName: 'Mark',
      lastName: 'Ok',
      telephone: '0123456789',
      email: 'myspace@gmail.com'
    }
  ];
  $scope.addContact = function() {
    if ( $scope.firstName != '' ) {
      $scope.contactsKeeper.push({
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        telephone: $scope.telephone,
        email: $scope.email
      });
      $scope.firstName = '';
      $scope.lastName = '';
      $scope.telephone = '';
      $scope.email = '';
    }
  }
  $scope.saveContact = function() {
    if( $scope.currentContactId > -1 ){
      var id = $scope.currentContactId;
      $scope.contactsKeeper[id].firstName = $scope.firstName; 
      $scope.contactsKeeper[id].lastName = $scope.lastName; 
      $scope.contactsKeeper[id].telephone = $scope.telephone;
      $scope.contactsKeeper[id].email = $scope.email;
      $scope.firstName = '';
      $scope.lastName = '';
      $scope.telephone = '';
      $scope.email = '';
      $scope.currentContactId = -1;
    }
  }
  $scope.editContact = function ( id ) {
    $scope.currentPersonId = id;
    $scope.firstName = $scope.contactsKeeper[id].firstName;
    $scope.lastName =
    $scope.contactsKeeper[id].lastName;
    $scope.telephone = $scope.contactsKeeper[id].telephone;
    $scope.email = $scope.contactsKeeper[id].email;
  }
    $scope.deleteContact = function( id ) {
    $scope.contactsKeeper.splice( id, 1 );
  }
})