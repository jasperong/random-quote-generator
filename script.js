var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857"
];

var currentQuote = '',
    currentAuthor = '';

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function getQuote() {
  var successCallback = function(response) {
    var res = JSON.parse(response);
    currentQuote = res.quote;
    currentAuthor = res.author;

    $('.quote-text').animate({
      opacity: 0,
    }, 500, function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $('#text').text(res.quote);
    });

    $('.quote-author').animate({
      opacity: 0,
    }, 500, function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $('#author').html(res.author);
    });

    var color = colors[Math.floor(Math.random() * colors.length)];

    $('body').animate({
      backgroundColor: color,
      color: color
    }, 1000);

    $('.button').animate({
      backgroundColor: color
    }, 1000);
  }

  $.ajax({
    headers: {
      "X-Mashape-Key": "CEyPIWnvp2mshzF7Qr39tgt2nvskp1q4dTOjsnDQC94hfK7oYf",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    success: successCallback
  });
}

$(document).ready(function() {
  getQuote();
  $('#new-quote').on('click', getQuote);
});
