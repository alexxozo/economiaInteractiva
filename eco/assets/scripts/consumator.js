/*-----------SLIDER---------*/
$('#checkbox').change(function(){
  setInterval(function () {
      moveRight();
  }, 3000);
});

var slideCount = $('#slider ul li').length;
var slideWidth = $('#slider ul li').width();
var slideHeight = $('#slider ul li').height();
var sliderUlWidth = slideCount * slideWidth;

$('#slider').css({ width: slideWidth, height: slideHeight });

$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

$('#slider ul li:last-child').prependTo('#slider ul');

function moveLeft() {
    $('#slider ul').animate({
        left: + slideWidth
    }, 200, function () {
        $('#slider ul li:last-child').prependTo('#slider ul');
        $('#slider ul').css('left', '');
    });
};

function moveRight() {
    $('#slider ul').animate({
        left: - slideWidth
    }, 200, function () {
        $('#slider ul li:first-child').appendTo('#slider ul');
        $('#slider ul').css('left', '');
    });
};

$('a.control_prev').click(function () {
    moveLeft();
});

$('a.control_next').click(function () {
    moveRight();
});

/*--------IMAGESCLICK-----------*/

$("#slide1 > .bottom > .action").click(function() {
  $(".action").removeClass("selected");
  $(this).addClass("selected");
  $(this).removeClass("highlight");

  var index = $(this).attr("value");
  $(".infoText[value='1']").text(listaTexte[index]);
});

$("#slide4 > .bottom > .action").click(function() {
  $(".action").removeClass("selected");
  $(this).addClass("selected");
  $(this).removeClass("highlight");

  var index = $(this).attr("value");
  $(".infoText[value='4']").text(listaTexte[index]);
});

/*----------SLIDE1--------------*/

$("#play").click(function() {
  $("img[value='carte']").css({ "bottom": "200px", "left": "840px", "opacity": "0"});
  $("img[value='bani']").css({ "bottom": "200px", "left": "350px", "opacity": "0"});

  $("img[value='bani']").animate({opacity: "+=1"}, 2000);
  $("img[value='bani']").animate({left: "+=500"}, 2000);
  $("img[value='bani']").animate({opacity: "-=1"}, 2000);

  $("img[value='carte']").delay(6000).animate({opacity: "+=1"}, 2000);
  $("img[value='carte']").animate({left: "-=500"}, 2000);


  $('.infoText[value="1"]').delay(10000).queue(function(n) {
    $(this).text("Mihai a platit 10 lei pentru manual, astfel si-a satisfacut nevoia. Apasa pe butonul din dreapta pentru a continua!");
  });

});

/*-----------SLIDE2----------*/

 $(".definitie[value='consum']").one("mouseover", function(){
   $(this).removeClass("highlight");
   $(this).animate({height: "+=400"}, 1000);
 });

 $(".definitie[value='consumator']").one("mouseover", function(){
   $(this).removeClass("highlight");
   $(this).animate({height: "+=400"}, 1000);
 });

 $(".definitie[value='utilitate-economica']").one("click", function(){
   $(this).removeClass("highlight");
   $(this).animate({height: "+=150"}, 1000);
 });

 $(".definitie[value='utilitate-economica-individuala']").one("click", function(){
   $(this).removeClass("highlight");
   $(this).animate({height: "+=150"}, 1000);
 });

 $(".definitie[value='utilitate']").one("click", function(){
   $(this).removeClass("highlight");
   $(this).animate({width: "+=1150"}, 1000);
 });

$(".definitie[value='utilitate-totala']").one("click", function(){
   $(this).removeClass("highlight");
   $(this).animate({width: "+=980"}, 1000);
   $(this).animate({height: "+=40"}, 1000);
 });

 $(".definitie[value='utilitate-marginala']").one("click", function(){
    $(this).removeClass("highlight");
    $(this).animate({width: "+=850"}, 1000);
    $(this).animate({height: "+=40"}, 1000);
  });



/*---------POP-UP--------*/

  $('.pop-up').hide();
  $('.pop-up').fadeIn(1000);

      $('.close-button').click(function (e) {

      $('.pop-up').fadeOut(700);
      $('.overlay').removeClass('blur-in');
      $('.overlay').addClass('blur-out');
      e.stopPropagation();

    });



/*------DRAGDROP------*/

var raspunsuri = 0;
$("#done").hide();



/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(event.dx * event.dx +
                     event.dy * event.dy)|0) + 'px');
    }
  });

  function dragMoveListener (event) {
  var target = event.target,
      // keep the dragged position in the data-x/data-y attributes
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform =
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '#yes-drop',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;


    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    draggableElement.textContent = 'Dragged in';
  },
  ondragleave: function (event) {

    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
    event.relatedTarget.textContent = 'Dragged out';
  },
  ondrop: function (event) {
    event.relatedTarget.textContent = 'Dropped';
    if(event.relatedTarget.title == event.target.title) {
      event.relatedTarget.classList.remove("draggable");
      event.target.classList.add("correct");
      raspunsuri++;
      if(raspunsuri == 6) $("#done").show();
    }
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});





/*------CHARTS----*/

var data = {
  labels:['Gogoasa 1', 'Gogoasa 2','Gogoasa 3','Gogoasa 4','Gogoasa 5','Gogoasa 6'],
  series: [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
  ]
};

var options = {
  seriesBarDistance: 40,
  width: 700,
  height: 450,
  low: 0,
  high: 30,
  showArea: true,
  showPoint: true,
  axisY: {
    type: Chartist.FixedScaleAxis,
    ticks: [0, 5, 10, 15, 20, 25, 30],
    low: 0
  }
};

var chart = new Chartist.Bar(".ct-chart[value='chart-utilitate']", data, options);

new Chartist.Bar(".ct-chart[value='mere']",{
  labels:['Mar 1', 'Mar 2', 'Mar 3'],
  series: [
    [10,18,24],
    [10,8,6]
  ]
 },{
  seriesBarDistance: 40,
  width: 500,
  height: 300,
  low: 0,
  high: 30,
  showArea: true,
  showPoint: true,
  axisY: {
    type: Chartist.FixedScaleAxis,
    ticks: [0, 5, 10, 15, 20, 25, 30],
    low: 0
  }
});

new Chartist.Bar(".ct-chart[value='pere']",{
  labels:['Para 1', 'Para 2', 'Para 3'],
  series: [
    [8,15,21],
    [8,7,6]
  ]
 },{
  seriesBarDistance: 40,
  width: 500,
  height: 300,
  low: 0,
  high: 30,
  showArea: true,
  showPoint: true,
  axisY: {
    type: Chartist.FixedScaleAxis,
    ticks: [0, 5, 10, 15, 20, 25, 30],
    low: 0
  }
});

new Chartist.Bar(".ct-chart[value='mere-test']",{
  labels:['Mar 1', 'Mar 2', 'Mar 3'],
  series: [
    [10,15,20],
    [10,5,5]
  ]
 },{
  seriesBarDistance: 40,
  width: 500,
  height: 300,
  low: 0,
  high: 30,
  showArea: true,
  showPoint: true,
  axisY: {
    type: Chartist.FixedScaleAxis,
    ticks: [0, 5, 10, 15, 20, 25, 30],
    low: 0
  }
});

new Chartist.Bar(".ct-chart[value='pere-test']",{
  labels:['Para 1', 'Para 2', 'Para 3'],
  series: [
    [10,20,25],
    [10,10,5]
  ]
 },{
  seriesBarDistance: 40,
  width: 500,
  height: 300,
  low: 0,
  high: 30,
  showArea: true,
  showPoint: true,
  axisY: {
    type: Chartist.FixedScaleAxis,
    ticks: [0, 5, 10, 15, 20, 25, 30],
    low: 0
  }
});

chart.on('draw', function(data) {
  if(data.type === 'bar')
    data.element.attr({
      style: 'stroke-width: 30px;'
    });
});


  var gogosi = 0, u_totala = [10,18,24,28,30,30], u_marginala = [10, 8, 6, 4, 2, 0];

  $('.gogoasa-over').hide();

  $('img[value="gogoasa"]').click(function(){
    $(this).hide();

    data.series[0][gogosi] = u_totala[gogosi];
    data.series[1][gogosi] = u_marginala[gogosi];
    chart.update(data);

    gogosi++;

    if(gogosi == 3) $('img[value="mihai_gogosi"]').attr('src', '../assets/img/mihai2.png');

    if(gogosi==6)  {
      $('img[value="mihai_gogosi"]').attr('src', '../assets/img/mihai3.png');
      $('.gogoasa-over')
        .css('opacity', 0)
        .slideDown('slow')
        .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
   );
    }
  });

  $('.button-program').click(function(){
    $('.infoText[value="8"]').css("font-size", "2.8em");
    $('.infoText[value="8"]').html("1.Cumparam 1kg de mere deoarece raportul UTILITATE MARGINALA / PRET este mai mare. <br> 2.Acum cumparam 1 kg de mere si 1 kg de pere deoarece raporturile sunt egale.");
  });

  //------SLIDE9---------//

  var bani = 30, mere = 0, pere = 0;

  $('.felicitari').hide();
  $('.gresit').hide()

  $("img[value='mar']").click(function() {
    $(this).removeClass("highlight");
    $(this).animate({width: "+=3"});
    $(this).animate({width: "-=3"});

    if(bani - 10 >= 0) {
        mere++;bani-=10;
        $('h1[value="mere"]').text(mere.toString() + ' x ' + ' Mere');
        $('h1[value="bani"]').text("Venit: " + bani.toString() + " lei");
        if(bani == 0) $('h1[value="bani"]').css("color", "red");
    }

  });

  $("img[value='para']").click(function() {
    $(this).removeClass("highlight");
    $(this).animate({width: "+=3"});
    $(this).animate({width: "-=3"});

    if(bani - 10 >= 0) {
        pere++;bani-=10;
        $('h1[value="pere"]').text(pere.toString() + ' x ' + ' Pere');
        $('h1[value="bani"]').text("Venit: " + bani.toString() + " lei");
        if(bani == 0) $('h1[value="bani"]').css("color", "red");
    }
  });

  $(".button-verificare").click(function() {
    if(bani == 0){
      if(mere == 1 && pere == 2) {
        $('.gresit').hide();
        $('.felicitari').show();
      }else {
        $('.gresit').show();
        bani=30;
        mere=0;
        pere=0;
        $('h1[value="bani"]').text("Venit: " + bani.toString() + " lei");
        $('h1[value="bani"]').css("color", "#707070");
        $('h1[value="pere"]').text(pere.toString() + ' x ' + ' Pere');
        $('h1[value="mere"]').text(mere.toString() + ' x ' + ' Mere');
      }
    }
  });


  //----RATE-----//
  var voted = false;

  $('.definitie[value="anunt-test"]').hide();

$('.check').click(function(){
  if(!voted)reset();
});

$('.up').click(function(){
  $(this).addClass('scaleDown');
  $('.down').addClass('scaleDown');
  $('.check').addClass('ok');
  voted = true;

  $('.definitie[value="anunt-test"]')
    .css('opacity', 0)
    .slideDown('slow')
    .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
    );

  $.ajax({
    url: '/lectii/consumator/like/1',
    method: 'post'
  });

});

$('.down').click(function(){
  $(this).addClass('scaleDown');
  $('.up').addClass('scaleDown');
  $('.check').addClass('ok');
  voted = true;

  $('.definitie[value="anunt-test"]')
    .css('opacity', 0)
    .slideDown('slow')
    .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
    );

    $.ajax({
      url: '/lectii/consumator/dislike/1',
      method: 'post'
    });
});

function reset(){
    $('.scaleDown').removeClass('scaleDown');
    $('.check').removeClass('ok');
    voted = false;

}
