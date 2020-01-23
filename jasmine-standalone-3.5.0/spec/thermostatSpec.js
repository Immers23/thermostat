describe('Thermostat', function() {

beforeEach(function() {
  thermostat = new Thermostat
});

  var thermostat;

    describe('when initializing thermostat has a default value', function() {
      it('thermostat has a start temp of 20 degrees', function() {
        expect(thermostat.temp()).toEqual(thermostat.DEFAULT_TEMP);
      });

      it('has a max temp of 25 degress', function(){
        for (var i = 0; i < 5; i++) {
          thermostat.up();
        };
        expect(function(){thermostat.up()}).toThrow("max temp reached");
      });


      it('has a mimimum temp of 10 degrees', function(){
        for (var i = 0; i < 10; i++) {
          thermostat.down();
        };
      expect(function(){thermostat.down()}).toThrow("minimum temp reached");
    });

    describe('you can increase and decrease the temp', function() {
      it('can increase the temp with an up function', function() {
        thermostat.up();
        expect(thermostat.temperature).toEqual(21);
      });


      it('can decrese the temp with an down function', function() {
        thermostat.down();
        expect(thermostat.temperature).toEqual(19);
      });
    });
  });
});
