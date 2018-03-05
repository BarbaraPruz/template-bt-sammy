// navHTML just because no SSI or PHP
const navHTML= '<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-black"> \
  <a class="navbar-brand" href="#"><img src="images\\earth.jpg"></a> \
  <button class="navbar-toggler" id="toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation"> \
    <span class="navbar-toggler-icon"></span> \
  </button> \
  <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault"> \
  <ul class="navbar-nav"> \
  <li class="nav-item"> \
    <a id="home" class="nav-link" href="#/">Home<span class="sr-only">(current)</span></a> \
  </li> \
  <li class="nav-item dropdown"> \
    <a class="nav-link dropdown-toggle" href="#/continents" id="continentsDropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Continents</a> \
    <div class="dropdown-menu" aria-labelledby="continentsDropDown"> \
      <a class="dropdown-item" href="#/continents/africa">Africa</a> \
      <a class="dropdown-item" href="#/continents/antartica">Antartica</a> \
      <a class="dropdown-item" href="#/continents/asia">Asia</a> \
      <a class="dropdown-item" href="#/continents/australia">Australia</a> \
      <a class="dropdown-item" href="#/continents/europe">Europe</a> \
      <a class="dropdown-item" href="#/continents/northAmerica">North America</a> \
      <a class="dropdown-item" href="#/continents/southAmerica">South America</a>  \
    </div> \
  </li> \
  <li class="nav-item dropdown"> \
    <a class="nav-link dropdown-toggle" href="oceans.html" id="oceansDropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Oceans</a> \
    <div class="dropdown-menu" aria-labelledby="oceansDropDown"> \
      <a class="dropdown-item" href="#/oceans?atlantic">Atlantic</a> \
      <a class="dropdown-item" href="#/oceans?arctic">Arctic</a> \
      <a class="dropdown-item" href="#/oceans?indian">Indian</a> \
      <a class="dropdown-item" href="#/oceans?pacific">Pacific</a> \
      <a class="dropdown-item" href="#/oceans?southern">Southern</a> \
    </div> \
  </li>  \
<li class="nav-item dropdown"> \
  <a class="nav-link dropdown-toggle" href="wonders.html" id="wondersDropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Wonders</a> \
  <div class="dropdown-menu" aria-labelledby="wondersDropDown"> \
    <a class="dropdown-item" href="wonders.html#aurora">Aurora</a> \
    <a class="dropdown-item" href="wonders.html#grandCanyon">Grand Canyon</a> \
    <a class="dropdown-item" href="wonders.html#greatBarrierReef">Great Barrier Reef</a> \
    <a class="dropdown-item" href="wonders.html#harborRio">Harbor of Rio de Janiero</a> \
    <a class="dropdown-item" href="wonders.html#mountEverest">Mount Everest</a> \
    <a class="dropdown-item" href="wonders.html#paricutin">Par&iacute;cutin Volcano</a> \
    <a class="dropdown-item" href="wonders.html#victoriaFalls">Victoria Falls</a>  \
  </div> \
</li> \
      <li class="nav-item"> \
        <a class="nav-link" href="#/about">About</a> \
      </li> \
      <li class="nav-item"> \
        <a class="nav-link" href="#">Contact</a> \
      </li> \
          </ul> \
        </div> \
</nav>';
      

$(document).ready(function() {

  $('#topNav').html(navHTML); // only because no SSI or PHP  

  // hide code added for 2 reasons: hide problem on small screens
  // and with Sammy, dropdowns aren't getting collapsed after selection
  $(".nav-link").click(function(ev){ 
    $('.navbar-collapse').collapse('hide');  
    $('.dropdown-menu').collapse('hide');    
  });
  $(".dropdown-item").click(function(ev){ 
    $('.navbar-collapse').collapse('hide');  
    $('.dropdown-menu').collapse('hide');    
  });  

  // with sammy, the dropdowns never seem to lose the "show" when
  // the next nav item is selected.  Also, the style for the
  // navbar drop downs vs. regular navlinks looks a little different
  // (light gray vs white).  Manually setting resolves both problems.
  $(".nav-item > a").on("click", function(){
    $(".nav-item").removeClass("active");    
    $(".dropdown").removeClass("show");              
    $(this).parent().addClass("active");
  });           
});
