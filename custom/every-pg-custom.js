/*==================================================
        [ Search Button ]
        ==================================================*/
jQuery("#pq-seacrh-btn").on("click", function () {
  jQuery(".pq-search-form").slideToggle();
  jQuery(".pq-search-form").toggleClass("pq-form-show");
  if (jQuery(".pq-search-form").hasClass("pq-form-show")) {
    jQuery(this).html('<i class="fas fa-times"></i>');
  } else {
    jQuery(this).html('<i class="fas fa-search"></i>');
  }
});
/*==================================================
          [ Back To Top ]
          ==================================================*/
jQuery("#back-to-top").fadeOut();
jQuery(window).on("scroll", function () {
  if (jQuery(this).scrollTop() > 250) {
    jQuery("#back-to-top").fadeIn(1400);
  } else {
    jQuery("#back-to-top").fadeOut(400);
  }
});
jQuery("#top").on("click", function () {
  jQuery("top").tooltip("hide");
  jQuery("body,html").animate(
    {
      scrollTop: 0,
    },
    800
  );
  return false;
});
/*==================================================
          [ Navbar menu 'active' ]
          ==================================================*/

// $(".menu-item").click(function () {
//   $('.menu-item').removeClass('current-menu-item')
//   $(this).closest('.menu-item').addClass('current-menu-item')
// })

/*==================================================
          [ toggle of (signIn)/(signUp) ]
          ==================================================*/
var toggleLogin = document.querySelector("#login");
var toggleRegister = document.querySelector("#register");
var toggleActive = document.querySelector("#toggle-btn-active");

function register() {
  toggleLogin.style.left="-400px";
  toggleRegister.style.left="50px";
    toggleActive.style.left="110px"
}
function login() {
    toggleLogin.style.left="50px";
    toggleRegister.style.left="450px";
    toggleActive.style.left="0px"
}

