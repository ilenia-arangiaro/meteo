<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Meteo</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

        <link href='https://fonts.googleapis.com/css?family=Quicksand:400,700' rel='stylesheet' type='text/css'>

        <!-- font-awesome -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

        <!-- CSS -->
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/slick.css">
        <link rel="stylesheet" href="css/slick-theme.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/weather-icons-wind.min.css">
        <link rel="stylesheet" href="css/weather-icons.min.css">


        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <div id="app" class="container-fluid">

          <!-- loading -->
          <section id="loading">
            <div id="loading-image"></div>
            <div class="row">
              <div class="col-sm-12">
                <div id="loading-message"></div>

              </div>
            </div>
          </section>


          <!-- home -->
          <section id="home">


            <div class="row">
              <div id="logo" class="col-md-8 col-md-offset-4"> 
                <div>
                  <img src="img/logo.png"></div>
              </div>
              <div class="col-sm-12 centered-holder">



                <div class="slideshow">
                  <!-- WEATHER  -->
                  <div id="weather">
                      <div class="row">
                        <div class="col-xs-12 icon"><i></i></div>
                      </div>


                      <li><div class="string"></div></li>
                      <li><div class="humidity"></div></li>
                      <li><div class="wind"></div></li>
                      <li><div class="temp">
                        <div class="high"></div>
                        <div class="low"></div>
                      </div></li>

                  </div>


                  <!-- WEAR -->
                  <div id="wear" class="row">
                    <div id="accessories" class="col col-md-4">
                      <div class="option option1">glasses</div>
                      <div class="option option2">umbrella</div>
                      <div class="option option3">cap</div>
                    </div>
                    <div id="top" class="col col-md-4">
                      <div class="option option1">t-shisrt</div>
                      <div class="option option2">jacket</div>
                      <div class="option option3">divght jacket</div>
                      <div class="option option4">k-way</div>
                    </div>
                    <div id="backpack" class="col col-md-4">
                      <div class="option option1">water-proof</div>
                      <div class="option option2">breathable</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <!-- info -->
          <section id="info">
            <div class="row">
              <div class="col-sm-12 centered-holder">
                <div class="centered">
                  <p>This is the info section</p>
                </div>
              </div>
            </div>
          </section>

          <!-- footer -->


          <footer>
            <p> il meteo di oggi </p>
          </footer>
        </div>



        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
        <script src="js/purl.js"></script>
        <script src="js/plugins.js"></script>

        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

        <script src="js/shake.js"></script>
        <script src="js/jquery.simpleWeather.js"></script>
        <script src="js/slick.min.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='https://www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script>

        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIRqmuU3qE-9IQ3KbTENdnCNXKzI0rqYQ"
        async defer></script>

        <!-- SCRIPT INIT -->
        <script>

          $(document).ready(function(){
            init()
            showSection("loading")
            getPosition()

          })
        </script>
    </body>
</html>
