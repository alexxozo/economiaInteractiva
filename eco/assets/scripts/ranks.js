$(document).ready(function(){

  var utilizatori = [];

  const tabel = $('#tabel');

  $.getJSON("../users", function(users) {
    users.forEach(function(user) {
      var obj = {nume:user.nume, procentaj:user.procentaj};
      utilizatori.push(obj);
    });

    utilizatori.sort((a,b) => a.procentaj < b.procentaj ? 1 : -1);

    utilizatori.forEach(function(user){
      var index = utilizatori.indexOf(user) + 1;
      tabel.append(`<tr><td class="rank">${index}</td><td class="team">${user.nume}</td><td class="points">${user.procentaj}%</td></tr><tr>`);
    });

  });



});
