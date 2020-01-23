function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this.MINIMUM_TEMP = 10;
  this.MAXIMUM_TEMP = 25;
  this.temperature = this.DEFAULT_TEMP;


}
Thermostat.prototype.temp = function(){
  return this.temperature;
};
// Thermostat.prototype.up = function(){
//   this.temperature+=1;
// };
Thermostat.prototype.down = function(){
  if (this.temperature <= this.MINIMUM_TEMP){
    throw "minimum temp reached"
  } else {
    this.temperature-=1
    }
  }

Thermostat.prototype.up = function(){
  if (this.temperature >= this.MAXIMUM_TEMP){
    throw "max temp reached"
  } else {
    this.temperature+=1
  };
};
