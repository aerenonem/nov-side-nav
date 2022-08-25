
      
  var flagMobile;
  function checkMobile(){
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    console.log("mobile")
    openNavMobile()
    
  }else{
    console.log("desktop")
    openNavDesktop()
  }
    }
    
    function openNavDesktop() {
         document.getElementById("mySidenav").style.width = "700px";
        console.log("desktopOPEN")
      }
     
    

    function openNavMobile(){
      document.getElementById("mySidenav").style.width = "100%";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }

    
    
    

// SIDENAV HEADER BEGIN   
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    productContent = document.getElementsByClassName("allProductsPage");                                            
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.background = "";
    }
    document.getElementById(pageName).style.display = "block";
    document.getElementById('allproductpage').style.display = "none";
    document.getElementById('allArticlesPage').style.display = "none";
    elmnt.style.background = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

// SIDENAV HEADER END    


function openFullProductMenu(pageName){
  document.getElementById(pageName).style.display = "flex";
  document.getElementById('Recommendations').style.display = "none";
}

function closeFullProductMenu(pageName){
  document.getElementById(pageName).style.display = "none";
  document.getElementById('Recommendations').style.display = "block";
}

// SWIPER BEGIN
    

    //HTML LINE 54
    var swiperRecommended = new Swiper(".mySwiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    //HTML LINE 71  
    var swiperProduct = new Swiper(".productSwiper", {
      
      slidesPerView: 3,
      spaceBetween: 10,
      freeMode: true,
    });  

// SWIPER END

//BASKET PRODUCT INCREASE/DECREASE BUTTON

var buttonPlus  = $(".qty-btn-plus");
var buttonMinus = $(".qty-btn-minus");
var sum= [];

var incrementPlus = buttonPlus.click(function() {
  var $n = $(this)
  .parent(".qty-container")
  .find(".input-qty");
  $n.val(Number($n.val())+1 );
  sum.push($n.val())
});

var incrementMinus = buttonMinus.click(function() {
  var $n = $(this)
  .parent(".qty-container")
  .find(".input-qty");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount-1);
  }
  sum.pop($n.val())
});


// setInterval(function(){ 
//   console.log(sum);
// }, 1000);