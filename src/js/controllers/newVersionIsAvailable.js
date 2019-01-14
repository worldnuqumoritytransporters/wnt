'use strict';

angular.module('copayApp.controllers').controller('newVersionIsAvailable', function($scope, $modalInstance, go, newVersion, isMobile){

  $scope.version = newVersion.version;

  $scope.openDownloadLink = function(){
    var link = '';
    if (navigator && navigator.app) {
      link = 'https://play.google.com/store/apps/details?id=org.wnt.wallet';
	  if (newVersion.version.match('t$'))
		  link += '.testnet';
    }
    else if(navigator && isMobile.iOS()){
	    link = 'https://itunes.apple.com/us/app/wnt/id1147137332';
    }
    else {
      link = 'https://github.com/wnt/wnt/releases/tag/v' + newVersion.version;
    }
    go.openExternalLink(link);
    $modalInstance.close('closed result');
  };

  $scope.later = function(){
    $modalInstance.close('closed result');
  };
});
