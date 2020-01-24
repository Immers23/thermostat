'use strict';

function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this.MINIMUM_TEMP = 10;
  this.MAXIMUM_TEMP_ON = 25;
  this.MAXIMUM_TEMP_OFF = 32;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSaving = true

};

Thermostat.prototype.temp = function(){
  return this.temperature;
};

Thermostat.prototype.down = function(){
  if (this.temperature <= this.MINIMUM_TEMP){
    throw "minimum temp reached"
  } else {
    this.temperature-=1
   };
 };

Thermostat.prototype.switchPowerSavingModeOff = function(){

   return this.powerSaving = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function(){

   return this.powerSaving = true;
};


Thermostat.prototype.up = function(){
  var maxTemp = this.powerSaving ? this.MAXIMUM_TEMP_ON : this.MAXIMUM_TEMP_OFF
  if (this.temperature >= maxTemp) throw 'temp cannot go above max degrees'

    this.temperature++

    };

Thermostat.prototype.reset = function(){
   this.temperature = 20
};

Thermostat.prototype.status = function() {
  if(this.temperature >18 && this.temperature <25) {
    return 'medium'
  } else if(this.temperature >25) {
    return 'high'
  } else {
    return 'low'
  }
};
