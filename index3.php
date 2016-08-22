<?php
$page_title = "Rrradio Supernova";
?>

<!doctype html>
<html>
<head>
    <?php
    include "include/header.php";
    echo "<title>" . $page_title . "</title>";
    ?>
</head>


<body ng-app="app">
  <div class="receiver">
    <div class="swiper-container">
      <div class="swiper-wrapper">



        <!-- POETICUS MORDICUS -->
        <div class="swiper-slide clearfix" data-hash="poeticusmordicus">
          <div class="box-jardin" style="background-image: url('assets/img/cover/cover11.png')">


            <div plangular="https://soundcloud.com/supernovaeditions/radio-supernova-5-poeticus-mordicus-part-1" class="player" >
              <button ng-click="playPause()" class="play-button">
                <svg class="icon" data-icon="play" viewBox="0 0 32 32"><path d="M4 4 L28 16 L4 28 z "></path></svg>
              </button>
              <!-- <progress
                ng-click="seek($event)"
                ng-value="currentTime / duration || 0">
              </progress> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <script type="text/javascript">
  var app = angular.module('app', ['plangular'])
    .config(function(plangularConfigProvider){
      plangularConfigProvider.clientId = '7f0decc8decbcd4c4d74340857fb9d57';
    });
  </script>

</body>
