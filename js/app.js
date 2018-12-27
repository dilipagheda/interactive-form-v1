

//Set focus on the first text field
//When the page first loads, the first text field should be in focus by default.
$('#name').focus();

//Validate fields as user is typing in real time
$('#name').on('keyup', function () {
    $("label[for='name']+.error-message").remove();
    removeValidationFailedClass();
    validator.validateNameField();
});
$('#mail').on('keyup', function () {
    $("label[for='mail']+.error-message").remove();
    removeValidationFailedClass();
    validator.validateEmailField();
});
$('#cc-num').on('keyup', function () {
    $("#credit-card ~ .error-message").remove();
    removeValidationFailedClass();
    validator.validateCreditCardNumber();
});
$('#zip').on('keyup', function () {
    $("#credit-card ~ .error-message").remove();
    removeValidationFailedClass();
    validator.validateZipCode();
});
$('#cvv').on('keyup', function () {
    $("#credit-card ~ .error-message").remove();
    removeValidationFailedClass();
    validator.validateCVV();
});

//”Job Role” section
//hide other job role field initially through javascript
$('#other-title').hide();
$('#title').on('change', function () {
    let value = $(this).val();
    if (value === 'other') {
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    }
});

//hide color dropdown initially
$('#color').parent().hide();

//”T-Shirt Info” section
$('#design').on('change', function () {
    //display design dropdown now
    $('#color').parent().show();

    let selectedValue = $(this).val();
    if (selectedValue === 'js puns') {
        $('#color').parent().show();
        $("#color option[selected]").removeAttr('selected');

        $("#color option[value='tomato']").hide();
        $("#color option[value='steelblue']").hide();
        $("#color option[value='dimgrey']").hide();

        $("#color option[value='cornflowerblue']").show();
        $("#color option[value='darkslategrey']").show();
        $("#color option[value='gold']").show();

        $("#color option[value='cornflowerblue']").attr('selected', true);

    } else if (selectedValue === 'heart js') {
        $('#color').parent().show();
        $("#color option[selected]").removeAttr('selected');

        $("#color option[value='tomato']").show();
        $("#color option[value='steelblue']").show();
        $("#color option[value='dimgrey']").show();

        $("#color option[value='cornflowerblue']").hide();
        $("#color option[value='darkslategrey']").hide();
        $("#color option[value='gold']").hide();

        $("#color option[value='tomato']").attr('selected', true);
    }else if (selectedValue === 'no-selection'){
        //remove selection from color dropdown
        $("#color option[selected]").removeAttr('selected');
        //hide color dropdown now
        $('#color').parent().hide();
    }
});

/**
 As a user selects activities, a running total should display below the list of checkboxes. 
 For example, if the user selects "Main Conference", then Total: $200 should appear. 
 If they add 1 workshop, the total should change to Total: $300.
 */
let total = 0;
$('.activities').append("<span id='total'></span>");
$('#total').text(`Total:$${total}`);

//”Register for Activities” section
$('input:checkbox').change(function () {
    $('.error-message').remove();
    if ($(this).is(':checked')) {
        switch ($(this).prop('name')) {
            case 'all':
                total += 200;
                break;
            case 'js-frameworks':
                $("input[type='checkbox'][name='express']").attr('disabled', true);
                $("input[type='checkbox'][name='build-tools']").attr('disabled', true);
                $("input[type='checkbox'][name='express']").parent().css('color', 'grey');
                $("input[type='checkbox'][name='build-tools']").parent().css('color', 'grey');
                total += 100;
                break;
            case 'js-libs':
                $("input[type='checkbox'][name='node']").attr('disabled', true);
                $("input[type='checkbox'][name='npm']").attr('disabled', true);
                $("input[type='checkbox'][name='node']").parent().css('color', 'grey');
                $("input[type='checkbox'][name='npm']").parent().css('color', 'grey');
                total += 100;
                break;
            case 'express':
                $("input[type='checkbox'][name='js-frameworks']").attr('disabled', true);
                $("input[type='checkbox'][name='build-tools']").attr('disabled', true);
                $("input[type='checkbox'][name='js-frameworks']").parent().css('color', 'grey');
                $("input[type='checkbox'][name='build-tools']").parent().css('color', 'grey');
                total += 100;
                break;
            case 'node':
                $("input[type='checkbox'][name='js-libs']").attr('disabled', true);
                $("input[type='checkbox'][name='npm']").attr('disabled', true);
                $("input[type='checkbox'][name='js-libs']").parent().css('color', 'grey');
                $("input[type='checkbox'][name='npm']").parent().css('color', 'grey');
                total += 100;
                break;
            case 'build-tools':
                $("input[type='checkbox'][name='express']").attr('disabled', true);
                $("input[type='checkbox'][name='js-frameworks']").attr('disabled', true);
                $("input[type='checkbox'][name='express']").parent().css('color', 'grey');
                $("input[type='checkbox'][name='js-frameworks']").parent().css('color', 'grey');
                total += 100;
                break;
            case 'npm':
                $("input[type='checkbox'][name='js-libs']").attr('disabled', true);
                $("input[type='checkbox'][name='node']").attr('disabled', true);
                $("input[type='checkbox'][name='js-libs']").parent().css('color', 'grey');
                $("input[type='checkbox'][name='node']").parent().css('color', 'grey');
                total += 100;
                break;
        }
    } else {
        switch ($(this).prop('name')) {
            case 'all':
                total -= 200;
                break;
            case 'js-frameworks':
                $("input[type='checkbox'][name='express']").removeAttr('disabled');
                $("input[type='checkbox'][name='build-tools']").removeAttr('disabled');
                $("input[type='checkbox'][name='express']").parent().css('color', '#000');
                $("input[type='checkbox'][name='build-tools']").parent().css('color', '#000');
                total -= 100;
                break;
            case 'js-libs':
                $("input[type='checkbox'][name='node']").removeAttr('disabled');
                $("input[type='checkbox'][name='npm']").removeAttr('disabled');
                $("input[type='checkbox'][name='node']").parent().css('color', '#000');
                $("input[type='checkbox'][name='npm']").parent().css('color', '#000');
                total -= 100;
                break;
            case 'express':
                $("input[type='checkbox'][name='js-frameworks']").removeAttr('disabled');
                $("input[type='checkbox'][name='build-tools']").removeAttr('disabled');
                $("input[type='checkbox'][name='js-frameworks']").parent().css('color', '#000');
                $("input[type='checkbox'][name='build-tools']").parent().css('color', '#000');
                total -= 100;
                break;
            case 'node':
                $("input[type='checkbox'][name='js-libs']").removeAttr('disabled');
                $("input[type='checkbox'][name='npm']").removeAttr('disabled');
                $("input[type='checkbox'][name='js-libs']").parent().css('color', '#000');
                $("input[type='checkbox'][name='npm']").parent().css('color', '#000');
                total -= 100;
                break;
            case 'build-tools':
                $("input[type='checkbox'][name='express']").removeAttr('disabled');
                $("input[type='checkbox'][name='js-frameworks']").removeAttr('disabled');
                $("input[type='checkbox'][name='express']").parent().css('color', '#000');
                $("input[type='checkbox'][name='js-frameworks']").parent().css('color', '#000');
                total -= 100;
                break;
            case 'npm':
                $("input[type='checkbox'][name='node']").removeAttr('disabled');
                $("input[type='checkbox'][name='js-libs']").removeAttr('disabled');
                $("input[type='checkbox'][name='node']").parent().css('color', '#000');
                $("input[type='checkbox'][name='js-libs']").parent().css('color', '#000');
                total -= 100;
                break;
        }
    }
    $('#total').text(`Total:$${total}`);
});

/*
"Payment Info" section
*/

//Select credit card payment method by default on page load
$('#payment').val('credit card');
updatePaymentSection('credit card');

$('#payment').on('change', function () {
    $('.error-message').remove();
    let selectedValue = $(this).val();
    updatePaymentSection(selectedValue);
});

//Function to update payment section based on payment method selection
function updatePaymentSection(selectedValue) {
    switch (selectedValue) {
        case 'credit card':
            $('#paypal').hide();
            $('#bitcoin').hide();
            $('#credit-card').show();
            break;
        case 'paypal':
            $('#credit-card').hide();
            $('#bitcoin').hide();
            $('#paypal').show();
            break;
        case 'bitcoin':
            $('#paypal').hide();
            $('#bitcoin').show();
            $('#credit-card').hide();
            break;
    }
}

/*
Form validation
*/
$("button[type='submit']").on('click', function (e) {
    let result=true;
    
    //remove all error spans and .validation-failed classes first
    $('.error-message').remove();
    removeValidationFailedClass();

    result &= validator.validateNameField();
    result &= validator.validateEmailField(); 
    result &= validator.validateCheckBox();
    //Validate credit card
    if ($('#payment').val() === 'credit card') {
        result &= validator.validateCVV();
        result &= validator.validateZipCode();
        result &= validator.validateCreditCardNumber();
    }
    if(!result){
        e.preventDefault();
    }
});

//Function to remove validation-failed class from all places
function removeValidationFailedClass() {
    $('#cc-num').removeClass('validation-failed');
    $('#zip').removeClass('validation-failed');
    $('#cvv').removeClass('validation-failed');
    $('#name').removeClass('validation-failed');
    $('#mail').removeClass('validation-failed');
}



//When an input field gets focus again, clear previous errors
$('#name').focus(function () {
    $('#name').removeClass('validation-failed');
    $("label[for='name']+.error-message").remove();
    $('#name').val("");
});
$('#mail').focus(function () {
    $('#mail').removeClass('validation-failed');
    $("label[for='mail']+.error-message").remove();
    $('#mail').val("");
    $('#mail+span').remove();

});

//function that returns an error message wrapped in span element
function getErrorSpan(errorMessage) {
    return `<span class='error-message'>${errorMessage}</span>`;
}

//function to check email address is correct or not.
function checkEmail(email) {
    let pattern = /\w+@\w+\.\w{3}\b/g;
    let result = pattern.test(email);
    return result;
}

//function to check if passed argument only consists of digits
function checkIfNumber(param) {
    if (param.length === 0) {
        return false;
    }
    let pattern = /^\d+$/g;
    let result = pattern.test(param);
    return result;
}

//function to get total number of checked checkboxes
function getCheckedCheckBoxesCount() {
    let checkBoxes = $(".activities  input[type='checkbox']");
    let checkedCheckBoxes = checkBoxes.filter(':checked');
    return checkedCheckBoxes.length;
}