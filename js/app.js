// declarar un array con valor false indicnado q estan libres
// ocupado=true//
var airlineSeats = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
// contador de asientos nos ayudan a rastrear los numeros de asientos
var busySeats = 0;
var paintSeats = function(array) {
  var conteinerSeats = document.getElementById('seats');
  for (var i = 0; i < array.length; i++) {
    var seat = document.createElement('div');
    seat.className = 'seats';
    // primera fila del asiento 1 al 4
    if (i < 4) {
      seat.style.background = 'purple';
    } else {
      seat.style.background = 'yellow';
    }
    conteinerSeats.appendChild(seat);
  }
};
var reserve = function() {
  var btn = document.getElementById('btn');
  btn.addEventListener('click', chooseZone);
};
var chooseZone = function() {
  var choice = prompt(
    'En que zona quieres reservar \n 1. Primera Clase \n 2. Económica \n \n Por favor ingresa el numero de tu preferencia');
  if (choice == 1) {
    checkFirstClassZone();
  } else if (choice == 2) {
    checkEconomicClassZone();
  } else {
    alert('Por Favor ingresa un número valido');
  }
};
var checkFirstClassZone = function() {
  var zone = 'Primera Clase';
  for (var index = 0; index < 4; index ++) {
    if (airlineSeats[index] == false) {
      airlineSeats[index] = true;
      reservesite(index);
      paintTicket(index, zone);
      busySeats++;
      // se rompe el ciclo del for al reservar
      break;
    } else if (index === 3 && airlineSeats[index] == true) {
      reasignEconomicZone(zone);
    }
  }
};

var checkEconomicClassZone = function() {
  var zone = 'Economica';
  for (var index = 4; index < 10; index ++) {
    if (airlineSeats[index] == false) {
      airlineSeats[index] = true;
      reservesite(index);
      paintTicket(index, zone);
      busySeats++;
      // se rompe el ciclo del for al reservar
      break;
    } else if (index === 9 && airlineSeats[index] == true) {
      reasignFirstZone(zone);
    }
  }
};
var reservesite = function(indexToPoint) {
  var seat = document.getElementsByClassName('seats');
  seat[indexToPoint].textContent = 'Ocupado';
};
var reasignEconomicZone = function(zone) {
  if (busySeats == 10) {
    noSeats();
    nextFlight();
  } else {
    var reasign = confirm('Ya no quedan asientos disponibles en ' + zone + ' :(  \n  Quieres reservar en Zona Económica');
    if (reasign == true) {
      checkEconomicClassZone();
    } else {
      nextFlight();
    }
  }
};
var reasignFirstZone = function(zone) {
  if (busySeats == 10) {
    noSeats();
    nextFlight();
  } else {
    var reasign = confirm('Ya no quedan asientos disponibles en ' + zone + ' :(  \n  Quieres reservar en Primera Clase');
    if (reasign == true) {
      checkFirstClassZone();
    } else {
      nextFlight();
    }
  }
};
var paintTicket = function(index, zone) {
  var conteinerTickets = document.getElementById('tickets');
  var ticket = document.createElement('div');
  ticket.className = 'seats';
  var title = document.createElement('p');
  var reservedSeating = document.createElement('p');
  var zoneClass = document.createElement('p');
  title.textContent = 'PASE DE ABORDAR';
  reservedSeating.textContent = 'No. de asiento: ' + (index + 1);
  zoneClass.textContent = zone;
  ticket.appendChild(title);
  ticket.appendChild(reservedSeating);
  ticket.appendChild(zoneClass);
  conteinerTickets.appendChild(ticket);
};
var nextFlight = function() {
  alert('Nuestro proximo vuelo sale en 3 horas!');
};
var noSeats = function() {
  alert('Lo Sentimos :( \n Ya no queden asientos disponibles en este avion.');
};

paintSeats(airlineSeats);
reserve();
