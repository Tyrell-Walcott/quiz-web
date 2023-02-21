angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapitlw-env.eba-tjfrpzjk.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);