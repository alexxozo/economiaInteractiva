  $('.show-list').click(function(){
	   $('.wrapper').addClass('list-mode');
  });

  $('.hide-list').click(function(){
	   $('.wrapper').removeClass('list-mode');
  });

  $.getJSON('/lectii', function(lectii) {

    lectii.forEach(function(lectie) {
      var src = "../assets/img/" + lectie.poza + ".png";
      var href = '"' + lectie.titlu + ".html" + '"';

      var titlu = lectie.titlu;
      titlu = titlu.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
      });

      var item = "<div class='box'>";

      if(lectie.poza === 'producer') item += "<img style='width:86px;' src='" + src +"'>";
      else item += "<img src='" + src +"'>";

      item += "<a href=" + href + "style='position:absolute;left:140px;top:30px;'>" + titlu + "ul" + "</a>"


      item += "<div class='likes'>";

      item += "<div style='width:50%;float:left;height:80%;'>"
      item += "<p style='font-size:30px;color:white;float:left;margin-top:2px;'>" + lectie.likes + " <span style='font-size:1em;' class='fa fa-thumbs-up' aria-hidden='true'></span></p>";
      item += "</div>";

      item += "<div style='width:50%;float:left;height:80%;'>"
      item += "<p style='font-size:30px;color:white;float:left;margin-top:2px;'>" + lectie.dislikes + " <span style='font-size:1em;' class='fa fa-thumbs-down' aria-hidden='true'></span></p>";
      item += "</div>";

      item += "</div>";

      item += "</div>";

      $("#lista").append(item);

      //$("#lista").append("<div class='box'></div>");


    });
  });
