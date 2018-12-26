//json object to hold error messages
const errors = {
    nameCanNotBeEmpty: "Please enter a name!",
    emailBadFormat: "Email should be corretly formatted",
    checkBoxMustBeSelected: "Atleast one checkbox should be selected",
    creditCardCanNotBeEmpty: "Please enter a credit card number!",
    creditCardMustBeDigitsOnly: "Credit card number must be digits only",
    creditCardMustBeBetween13To16: "Credit card number must be between 13 and 16 digits",
    zipCanNotBeEmpty: "Zip code can not be empty",
    cvvCanNotBeEmpty: "CVV can not be empty",
    zipMustBeDigitsOnly: "Zip code must be digits only",
    zipMustBe5Digits: "Zip code must be exactly 5 digits",
    cvvMustBeDigitsOnly: "CVV must be digits only",
    cvvMustBe3Digits: "CVV code must be exactly 3 digits"
};

//Set focus on the first text field
//When the page first loads, the first text field should be in focus by default.
$('#name').focus();

//Validate name field as user is typing in real time
$('#name').on('keyup',function(){
    // $('.error-message').remove();
    $("label[for='name']+.error-message").remove();
    removeValidationFailedClass();
    validateNameField();
});
$('#mail').on('keyup',function(){
    // $('.error-message').remove();
    $("label[for='mail']+.error-message").remove();
    removeValidationFailedClass();
    validateEmailField();
});

//”Job Role” section
//hide other job role field initially through javascript
$('#other-title').hide();
$('#title').on('change', function () {
    let value = $(this).val();
    if(value === 'other'){
        $('#other-title').show();
    }else{
        $('#other-title').hide();
    }
});

//hide color dropdown initially
$('#color').parent().hide();

//”T-Shirt Info” section
$('#design').on('change', function () {
    //display design dropdown now
    $('#color').parent().show();

    console.log($(this).val());
    let selectedValue = $(this).val();
    if (selectedValue === 'js puns') {
        $("#color option[selected]").removeAttr('selected');

        $("#color option[value='tomato']").hide();
        $("#color option[value='steelblue']").hide();
        $("#color option[value='dimgrey']").hide();

        $("#color option[value='cornflowerblue']").show();
        $("#color option[value='darkslategrey']").show();
        $("#color option[value='gold']").show();

        $("#color option[value='cornflowerblue']").attr('selected', true);

    } else if (selectedValue === 'heart js') {
        $("#color option[selected]").removeAttr('selected');

        $("#color option[value='tomato']").show();
        $("#color option[value='steelblue']").show();
        $("#color option[value='dimgrey']").show();

        $("#color option[value='cornflowerblue']").hide();
        $("#color option[value='darkslategrey']").hide();
        $("#color option[value='gold']").hide();

        $("#color option[value='tomato']").attr('selected', true);
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
        console.log($(this).prop('name'));
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

$('#payment').on('change',function(){
    $('.error-message').remove();
    let selectedValue = $(this).val();
    console.log(selectedValue);
    switch(selectedValue){
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
});

/*
Form validation
*/
$("button[type='submit']").on('click',function(e){
    console.log("submit");
    e.preventDefault();
    //remove all error spans
    $('.error-message').remove();
    removeValidationFailedClass();
    validateNameField();
    validateEmailField();
    //User must select at least one checkbox under the "Register for Activities" section of the form.
    if(getCheckedCheckBoxesCount()===0){
            $('.activities legend').after(getErrorSpan(errors.checkBoxMustBeSelected));

    }   

    //Validate credit card
    let creditCardNumber = $('#cc-num').val();
    let zip = $('#zip').val();
    let cvv = $('#cvv').val();
    let isCreditCardANumber = checkIfNumber(creditCardNumber);
    let isZipANumber = checkIfNumber(zip);
    let isCVVANumber = checkIfNumber(cvv);

    if($('#payment').val()==='credit card'){
        let CClength = creditCardNumber.length;
        let Ziplength = zip.length;
        let CVVlength = cvv.length;

        if(CVVlength===0){
            $('#credit-card').after(getErrorSpan(errors.cvvCanNotBeEmpty));
            $('#cvv').addClass('validation-failed');
        }

        if(CVVlength>0 && !isCVVANumber){
            $('#credit-card').after(getErrorSpan(errors.cvvMustBeDigitsOnly));
            $('#cvv').addClass('validation-failed');
        }
        if(CVVlength>0 && isCVVANumber && CVVlength!==3){
                $('#credit-card').after(getErrorSpan(errors.cvvMustBe3Digits));
                $('#cvv').addClass('validation-failed');
        }

        if(Ziplength===0){
            $('#credit-card').after(getErrorSpan(errors.zipCanNotBeEmpty));
            $('#zip').addClass('validation-failed');
        }

        if(Ziplength>0 && !isZipANumber){
            $('#credit-card').after(getErrorSpan(errors.zipMustBeDigitsOnly));
            $('#zip').addClass('validation-failed');
        }
        if(Ziplength>0 && isZipANumber && Ziplength!==5){
                $('#credit-card').after(getErrorSpan(errors.zipMustBe5Digits));
                $('#zip').addClass('validation-failed');
        }

        if(CClength===0){
            $('#credit-card').after(getErrorSpan(errors.creditCardCanNotBeEmpty));
            $('#cc-num').addClass('validation-failed');
        }
        if(CClength>0 && !isCreditCardANumber){
            $('#credit-card').after(getErrorSpan(errors.creditCardMustBeDigitsOnly));
            $('#cc-num').addClass('validation-failed');
        }
        if(CClength>0 && isCreditCardANumber){
            if(!(CClength>=13 && CClength<=16)){
                $('#credit-card').after(getErrorSpan(errors.creditCardMustBeBetween13To16));
                $('#cc-num').addClass('validation-failed');
            }
        }


    }
});

//Function to remove validation-failed class from all places
function removeValidationFailedClass(){
    $('#cc-num').removeClass('validation-failed');
    $('#zip').removeClass('validation-failed');
    $('#cvv').removeClass('validation-failed');
    $('#name').removeClass('validation-failed');
    $('#mail').removeClass('validation-failed');


}

//Function to validate name field
function validateNameField(){
    let name = $('#name').val();
    // name field can not be blank
    if(name.length===0){
        $('#name').addClass('validation-failed');
        $("label[for='name']").after(getErrorSpan(errors.nameCanNotBeEmpty));
    }
}

//Function to validate email field
function validateEmailField(){
    let mail = $('#mail').val();
    //email should be correctly formatted
    if(mail.length > 0){
        let result = checkEmail(mail);
        console.log(result);
        if(!result){
            $('#mail').addClass('validation-failed');
            $("label[for='mail']").after(getErrorSpan(errors.emailBadFormat));
        }
    }
}

//When an input field gets focus again, clear previous errors
$('#name').focus(function(){
    $('#name').removeClass('validation-failed');
    $("label[for='name']+.error-message").remove();
    $('#name').val("");
});
$('#mail').focus(function(){
    $('#mail').removeClass('validation-failed');
    $("label[for='mail']+.error-message").remove();
    $('#mail').val("");
    $('#mail+span').remove();

});

//function that returns an error message wrapped in span element
function getErrorSpan(errorMessage){
    return `<span class='error-message'>${errorMessage}</span>`;
}

//function to check email address is correct or not.
function checkEmail(email) {
    let pattern = /\w+@\w+\.\w{3}\b/g;
    let result = pattern.test(email);
    return result;
}

//function to check if passed argument only consists of digits
function checkIfNumber(param){
    if(param.length===0){
        return false;
    }
    let pattern = /^\d+$/g;
    let result = pattern.test(param);
    return result;
}

//function to get total number of checked checkboxes
function getCheckedCheckBoxesCount(){
    let checkBoxes = $(".activities  input[type='checkbox']");
    console.log('total checkboxes:'+checkBoxes.length);

    let checkedCheckBoxes = checkBoxes.filter(':checked');
    console.log("checked:"+checkedCheckBoxes.length);
    return checkedCheckBoxes.length;
}