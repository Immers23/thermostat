describe('Thermostat', function() {

  var thermostat;

    describe('when initializing thermostat has a default value', function() {
      it('thermostat has a start temp of 20 degrees', function() {

        thermostat = new Thermostat();
        expect(thermostat.temp()).toEqual(20);
      });

    });
    describe('you can increase and decrease the temp', function() {
      it('can increase the temp with an up function', function() {

        thermostat = new Thermostat();
        thermostat.up();
        expect(thermostat.temp()).toEqual(21);
      });
    });
  });
