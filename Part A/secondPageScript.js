// Second Page JavaScript
$(document).ready(function() {
    // Get the username from sessionStorage and display it in the appropriate element
    var username = sessionStorage.getItem('username');
    $('#username').text(username);
  
    // Add event listeners to the math operation buttons
    $('#add').click(calculate('+'));
    $('#subtract').click(calculate('-'));
    $('#multiply').click(calculate('*'));
    $('#divide').click(calculate('/'));
  
    // Validate number input fields
    $('#num1').on('input', validateNumber);
    $('#num2').on('input', validateNumber);
  });
  
  // Validation function for number input fields
  function validateNumber() {
    // Get the input value and remove any non-numeric characters
    var value = $(this).val().replace(/[^0-9.-]/g, '');
  
    // Update the input field with the cleaned value
    $(this).val(value);
  
    // Display an error message if the cleaned value is not a number
    var errorField = '#' + $(this).attr('id') + '-error';
    if (isNaN(value)) {
      $(errorField).text('Please enter a valid number.');
    } else {
      $(errorField).text('');
    }
  }
  
  // Calculation function using arrow function
  const calculate = operator => () => {
    // Get the input values
    var num1 = parseFloat($('#num1').val());
    var num2 = parseFloat($('#num2').val());
  
    // Check if input values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      $('#result').val('');
      alert('Please enter valid numbers for both inputs.');
      return;
    }
  
    // Calculate the result based on the operator
    var result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }
  
    // Update the result field with the calculated value
    $('#result').val(result);
  }
  