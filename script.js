$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      100, 
      'linear'
    );

  });

  // contact form - mailto handler

  $('#contact-form').on('submit', function(e) {
    e.preventDefault();

    var subject = $('#subject').val().trim();
    var email   = $('#email').val().trim();
    var message = $('#message').val().trim();
    var status  = $('#form-status');

    if (!subject || !email || !message) {
      status.css('color', '#e74c3c').text('Please fill in all fields.');
      return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      status.css('color', '#e74c3c').text('Please enter a valid email address.');
      return;
    }

    var body = 'From: ' + email + '\n\n' + message;
    var mailtoLink = 'mailto:christocdas0@gmail.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body='    + encodeURIComponent(body);

    window.location.href = mailtoLink;

    status.css('color', 'var(--green)').text('Opening your email client...');
    $('#contact-form')[0].reset();
  });

});