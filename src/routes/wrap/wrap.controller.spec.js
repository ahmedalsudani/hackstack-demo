describe('Controller: wrap', function() {
  var controller, $rootScope;


  beforeEach(module('hackstack demo app'));
    beforeEach(inject(function (_$controller_,_$rootScope_) {

        $controller = _$controller_;
        $rootScope = _$rootScope_;


    controller = $controller('wrap', {
      });
  }));

  it('should get initialized', function() {
    expect(controller).not.toEqual(undefined);
  });

});