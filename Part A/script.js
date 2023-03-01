$(document).ready(function() {
    // On form submit
    $('form').submit(function(e) {
      e.preventDefault(); // Prevent form from submitting
      
      // Null checks
      if ($('#email').val() == '' || $('#username').val() == '' || $('#password').val() == '') {
        alert('Please fill out all fields.');
        return;
      }
      
      // Special characters check
      var regex = /^[a-zA-Z0-9]+$/;
      if (!regex.test($('#username').val())) {
        alert('Username should only contain alphanumeric characters.');
        return;
      }
      
      // Length check
      if ($('#password').val().length < 6) {
        alert('Password should be at least 6 characters long.');
        return;
      }
      
      // Email validation
      var email = $('#email').val();
      if (email.indexOf('@northeastern.edu', email.length - '@northeastern.edu'.length) === -1) {
        alert('Email should be a northeastern email address.');
        return;
      }
      
      // If all validations pass, redirect to second page
      window.location.href = 'secondPage.html';
      var username = $('#username').val()
        $(secondPage.html).$('#username').text(username);
    });
  });
  