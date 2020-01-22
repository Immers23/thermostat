function Thermostat(){
  this.defaultTemp = 20;

}
Thermostat.prototype.temp = function(){
  return this.defaultTemp;
};
Thermostat.prototype.up = function(){
  return this.defaultTemp+=1;
};
Thermostat.prototype.down = function(){
  return this.defaultTemp-=1;
};
