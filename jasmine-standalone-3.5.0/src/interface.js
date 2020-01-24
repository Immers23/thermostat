$(document).ready(function() {

  var thermostat = new Thermostat();
  // updateTemperature();


  $('#temperature-up').on('click', function(){
    thermostat.up();
    // updateTemperature();
    $('#temperature-display').text(thermostat.temperature);
  });


});
