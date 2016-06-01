var debug = true


function init(){
  document.body.addEventListener('touchmove', function(event) {
    event.preventDefault();
  });

  $(".link-refresh").on("click",function(){
    getPosition()
  })


  // called 1 time on load
  centerElements()
  adjustSlick()
  // called on every resize
  $(window).resize(function() {
    centerElements()
    adjustSlick()
  });

  // ADJUST SLICK
  function adjustSlick(){
    var slick_slide_height = window.innerHeight-180;
    //console.log(slick_slide_height)
    $(".slick-slide").css({
      "height": slick_slide_height+"px"
    })
  }

  // SHAKE EVENT
  var myShakeEvent = new Shake({
      threshold: 15, // optional shake strength threshold
      timeout: 1000 // optional, determines the frequency of event generation
  });
  myShakeEvent.start();
  window.addEventListener('shake', reactToShakeEvent, false);
}


//function to call when shake occurs
function reactToShakeEvent () {
  getPosition()
}


function showSection(section_id) {
  $("#app section").hide()
  $("#app section#"+section_id).show()

  $("body").attr("class","section-"+section_id)
  centerElements()
}



function info() {
  showSection("info")
}

function getPosition() {
  showSection("loading")
  showLoadingMessage("getting position...")
  if(debug){ // if debug use fake location
    getWeather(45.559394399999995,10.2037211)
  } else {
    navigator.geolocation.getCurrentPosition(function(position) {
      getWeather(position.coords.latitude,position.coords.longitude)
    });
  }
}


function getWeather(latitude,longitude) {
  showLoadingMessage("getting weather...")
  $.simpleWeather({
    location: latitude+","+longitude,
    woeid: '',
    unit: 'c',
    success: function(weather) {
      renderWeather(weather, latitude, longitude)
    },
    error: function(error) {
      alert("error: "+error)
    }
  });

}


function renderWeather(weather, latitude, longitude) {
  //console.log(weather)

  // SLIDESHOW

  $('.slideshow').slick({
    //setting-name: setting-value
    //adaptiveHeight: true,
    dots: true
  });

  var my_code = getOurWeatherCode(weather.code)
  var my_string = getOurWeatherString(my_code)
  //alert(my_string)
  $("#weather .image").addClass("weather-"+my_code)
  $("#weather .string").text(my_string)
  $("#weather .humidity").text(weather.humidity+"%")
  $("#weather .wind").text(weather.wind.speed+" m/s, "+weather.wind.direction)
  $("#weather .temp .high").text(weather.high+"°")
  $("#weather .temp .low").text(weather.low+"°")

  var icon_class = getOurWeatherIconClass(my_code);
  $("#weather .icon i").addClass(icon_class)

  showSection("home")

  // forecast
  $("#forecast").html("") // empty #forecast ul
  for(var i in weather.forecast) {
    var forecast = weather.forecast[i]
    var forecast_my_code = getOurWeatherCode(forecast.code)
    var forecast_my_string = getOurWeatherString(my_code)

    var html_forecast ='<li class="weather-'+forecast_my_code+'">'
    html_forecast += '<div>'+forecast_my_string+'</div>'
    html_forecast += '<div class="temp"><div class="high">'+forecast.high+'</div><div class="low">'+forecast.low+'</div></div>'
    html_forecast += '</li>'

    $("#forecast").prepend(html_forecast)
    //console.log(forecast)
  }

  var suggestions = {
    "1": {
      "accessories": 1,
      "top": 1,
      "backpack": 2
    },
    "2": {
      "accessories": 1,
      "top": 3,
      "backpack": 2
    },
    "3": {
      "accessories": 1,
      "top": 3,
      "backpack": 2
    },
    "4": {
      "accessories": 2,
      "top": 2,
      "backpack": 1
    },
    "5": {
      "accessories": 2,
      "top": 2,
      "backpack": 1
    },
    "6": {
      "accessories": 3,
      "top": 2,
      "backpack": 1
    },
    "7": {
      "accessories": 3,
      "top": 3,
      "backpack": 2
    },
    "8": {
      "accessories": 2,
      "top": 2,
      "backpack": 1
    },
    "9": {
      "accessories": 3,
      "top": 2,
      "backpack": 1
    },
    "10": {
      "accessories": 2,
      "top": 2,
      "backpack": 1
    },
    "11": {
      "accessories": 2,
      "top": 4,
      "backpack": 1
    }
  }

  var suggestion = suggestions[my_code]
  // adjust base in temperature
  var avg_temp = (parseInt(weather.high)+parseInt(weather.low))/2
  if(avg_temp > -50) suggestion.top = 2
  if(avg_temp > 10) suggestion.top = 3
  if(avg_temp > 20) suggestion.top = 1
  if(my_code == "8" || my_code == "10" || my_code == "11") suggestion.top = 4

  $("#wear .option").hide()
  $("#wear #accessories .option"+suggestion.accessories).show()
  $("#wear #top .option"+suggestion.top).show()
  $("#wear #backpack .option"+suggestion.backpack).show()


  /*
  var geocoder = new GClientGeocoder();
  var point = new GLatLng(37.4419, -122.1419)
  geocoder.getLocations(point, function(addresses) {
    if(addresses.Status.code != 200) {
      alert("reverse geocoder failed to find an address for " + latlng.toUrlValue());
    }
    else {
      address = addresses.Placemark[0];
      console.log(addresses)
    }
  });
  */
  /*
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: longitude},
    zoom: 15
  });
  */

}


function showLoadingMessage(message){
  $("#loading-message").text(message)
}


function getOurWeatherCode(its_code){
  /*
  1	sunny
  2	clear day
  3	clear night
  4	cloudy day
  5	cloudy night
  6	foggy
  7	windy
  8	rainy
  9	cold
  10	snow
  11	tunderstorm
  */

  var our_codes = {
  "0": "11",
  "1": "11",
  "2": "11",
  "3": "11",
  "4": "11",
  "5": "10",
  "6": "8",
  "7": "10",
  "8": "8",
  "9": "8",
  "10": "8",
  "11": "8",
  "12": "8",
  "13": "10",
  "14": "10",
  "15": "10",
  "16": "10",
  "17": "11",
  "18": "10",
  "19": "7",
  "20": "6",
  "21": "6",
  "22": "6",
  "23": "7",
  "24": "7",
  "25": "9",
  "26": "4",
  "27": "5",
  "28": "4",
  "29": "5",
  "30": "4",
  "31": "3",
  "32": "1",
  "33": "3",
  "34": "2",
  "35": "8",
  "36": "1",
  "37": "11",
  "38": "11",
  "39": "11",
  "40": "8",
  "41": "10",
  "42": "10",
  "43": "10",
  "44": "4",
  "45": "11",
  "46": "10",
  "47": "10",
  "3200": "0"
  }
  return our_codes[its_code]
}

function getOurWeatherString(our_code) {
    var our_strings = {
      "1": "sunny",
      "2": "clear day",
      "3": "clear night",
      "4": "cloudy day",
      "5": "cloudy night",
      "6": "foggy",
      "7": "windy",
      "8": "rainy",
      "9": "cold",
      "10": "snow",
      "11": "tunderstorm"
    }
    return our_strings[our_code]
}


function centerElements(){
  $(".centered-holder").each(function(index, element){
    var x =  $(this).width()/2-$(this).find(".centered").width()/2
    var y =  $(this).height()/2-$(this).find(".centered").height()/2
    if(y<0) y=0
    $(this).find(".centered").css({
      left: x+"px",
      top: y+"px"
    })
  })
}


//assegnare immagine ai codici
//var cloud = '<i class="wi wi-day-cloudy"></i>'
// cos'è questa variabile sopra? a cosa servirebbe?

function getOurWeatherIconClass(our_code) { // qui mancava our_code come paramtro in ingresso
    var our_classes = {
      "1": "wi-day-sunny",
      "2": "wi-day-sunny",
      "3": "wi-day-sunny",
      "4": "wi-day-sunny",
      "5": "wi-day-sunny",
      "6": "wi-day-sunny",
      "7": "wi-day-sunny",
      "8": "wi-day-sunny",
      "9": "wi-day-sunny",
      "10": "wi-day-sunny",
      "11": "wi-day-sunny"
    }
    var our_class = "wi "+our_classes[our_code]
    //alert(our_class)
    return our_class
}

/*
NOTE MOLINARI
$('.image').getImage()
non puoi chiamare la tua funzione GetImage direttamente su jQuery
non sapete ancora "aggiungere" funzioni o comandi direttamente su
jquery, quindi la devi chiamare, semplicemente con
getImage()

ho rinominato la funzione da getImage a getOurWeatherIconClass
ho lasciato a tutti i codici "wi-day-sunny" sistemalo tu con i nomi corretti leggendo qui
https://erikflowers.github.io/weather-icons/

altra cosa, la devi chiamare nel momento/punto giusto, la
metto dentro la funzione renderWeather(), cercala qui sopra

in index.php hai incluso due volte i due css, sia .min che normali
non serve; tra l'altro hai scritto weather-icons.mins.css
mentre invece è weather-icons.min.css
quindi le icone non le avresti mai viste :-)

hai incluso erroneamente i fonts delle weather icons in /public/css/fonts
per nostra sfortuna (non piace neanche a me come scelta) i fonts
 nel css di weather icons se li aspetta in ../font, quindi li
ho spostati in /public/font

ps: mi permetto di fare minuscola l'iniziale, se vuoi sapere perchè
alla prossima lezione ve lo spiego :-)

ho messo questo nel .css
#weather .icon i {
  font-size: 4em;
}

*/
