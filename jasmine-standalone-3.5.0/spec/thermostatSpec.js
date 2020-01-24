describe('Thermostat', function() {

beforeEach(function() {
  thermostat = new Thermostat
});

  var thermostat;

    describe('when initializing thermostat has a default value', function() {
      it('thermostat has a start temp of 20 degrees', function() {
        expect(thermostat.temp()).toEqual(thermostat.DEFAULT_TEMP);
      });

      it('can reset the temp to 20 degrees', function(){
        thermostat.up()
        thermostat.reset()
        expect(thermostat.temperature).toEqual (20)
      });

      it('has a max temp of 25 degress', function(){
        thermostat.temperature = 25
        expect(function(){thermostat.up()}).toThrow('temp cannot go above max degrees');
      });

      it('has a max temp of 32 degress when power saving is off', function(){
        thermostat.switchPowerSavingModeOff();
        thermostat.temperature = 32
        expect(function(){thermostat.up()}).toThrow('temp cannot go above max degrees');
      });

      it('can switch PSM back on', function() {
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.powerSaving).toBe(false);
        thermostat.switchPowerSavingModeOn();
        expect(thermostat.powerSaving).toBe(true);
      });


      it('has a mimimum temp of 10 degrees', function(){
      thermostat.temperature = 10
      expect(function(){thermostat.down()}).toThrow("minimum temp reached");
      })

      it('says medium usage when temp less than 25 and above 18', function(){
        thermostat.temperature = 20;
        expect(thermostat.status()).toEqual('medium');
      });
      it('says medium usage when temp less than 25 and above 18', function(){
        thermostat.temperature = 26;
        expect(thermostat.status()).toEqual('high');
      });
      it('says medium usage when temp less than 25 and above 18', function(){
        thermostat.temperature = 17;
        expect(thermostat.status()).toEqual('low');
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

    describe('power saving mode is on my default', function(){
      it('will have an attribute of power saving mode on', function(){
        expect(thermostat.powerSaving).toEqual(true);
      });
    });
  });
});
