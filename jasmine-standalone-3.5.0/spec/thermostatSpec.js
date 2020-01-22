describe('Thermostat', function() {

  var thermostat;

    describe('when initializing thermostat has a default value', function() {
      it('thermostat has a start temp of 20 degrees', function() {

        thermostat = new Thermostat();
        expect(thermostat.temp()).toEqual(20);
      });
    });
  });
