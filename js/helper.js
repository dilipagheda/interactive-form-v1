/*
This file is created to contain all helper functions, objects and constants which can be used in
app.js.
The purpose is to break down app.js so that it is more managable.
*/
//javascript object to hold error messages
const errors = {
    nameCanNotBeEmpty: "Please enter a name!",
    emailBadFormat: "Email should be corretly formatted",
    emailCanNotBeEmpty: "Please enter an email address",
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

//javascript object to hold all related methods for field validations
const validator = {
    validateCheckBox: () => {
        //User must select at least one checkbox under the "Register for Activities" section of the form.
        if (getCheckedCheckBoxesCount() === 0) {
            $('.activities legend').after(getErrorSpan(errors.checkBoxMustBeSelected));
            return false;
        }
        return true;
    },
    validateCreditCardNumber: () => {
        let creditCardNumber = $('#cc-num').val();
        let isCreditCardANumber = checkIfNumber(creditCardNumber);
        let CClength = creditCardNumber.length;
        let result = true;
        if (CClength === 0) {
            $('#credit-card').after(getErrorSpan(errors.creditCardCanNotBeEmpty));
            $('#cc-num').addClass('validation-failed');
            result = false;
        }
        if (CClength > 0 && !isCreditCardANumber) {
            $('#credit-card').after(getErrorSpan(errors.creditCardMustBeDigitsOnly));
            $('#cc-num').addClass('validation-failed');
            result = false;
        }
        if (CClength > 0 && isCreditCardANumber) {
            if (!(CClength >= 13 && CClength <= 16)) {
                $('#credit-card').after(getErrorSpan(errors.creditCardMustBeBetween13To16));
                $('#cc-num').addClass('validation-failed');
                result = false;
            }
        }
        return result;
    },
    validateZipCode: () => {
        let zip = $('#zip').val();
        let isZipANumber = checkIfNumber(zip);
        let Ziplength = zip.length;
        let result = true;
        if (Ziplength === 0) {
            $('#credit-card').after(getErrorSpan(errors.zipCanNotBeEmpty));
            $('#zip').addClass('validation-failed');
            result = false;
        }
        if (Ziplength > 0 && !isZipANumber) {
            $('#credit-card').after(getErrorSpan(errors.zipMustBeDigitsOnly));
            $('#zip').addClass('validation-failed');
            result = false;
        }
        if (Ziplength > 0 && isZipANumber && Ziplength !== 5) {
            $('#credit-card').after(getErrorSpan(errors.zipMustBe5Digits));
            $('#zip').addClass('validation-failed');
            result = false;
        }
        return result;
    },
    validateCVV: () => {
        let cvv = $('#cvv').val();
        let isCVVANumber = checkIfNumber(cvv);
        let CVVlength = cvv.length;
        let result = true;
        if (CVVlength === 0) {
            $('#credit-card').after(getErrorSpan(errors.cvvCanNotBeEmpty));
            $('#cvv').addClass('validation-failed');
            result = false;
        }

        if (CVVlength > 0 && !isCVVANumber) {
            $('#credit-card').after(getErrorSpan(errors.cvvMustBeDigitsOnly));
            $('#cvv').addClass('validation-failed');
            result = false;
        }
        if (CVVlength > 0 && isCVVANumber && CVVlength !== 3) {
            $('#credit-card').after(getErrorSpan(errors.cvvMustBe3Digits));
            $('#cvv').addClass('validation-failed');
            result = false;
        }
        return result;
    },
    //Function to validate name field
    validateNameField: () => {
        let name = $('#name').val();
        // name field can not be blank
        if (name.length === 0) {
            $('#name').addClass('validation-failed');
            $("label[for='name']").after(getErrorSpan(errors.nameCanNotBeEmpty));
            return false;
        }
        return true;
    },
    //Function to validate email field
    validateEmailField: () => {
        let mail = $('#mail').val();
        let result = true;
        //email should not be empty
        if (mail.length === 0) {
            $('#mail').addClass('validation-failed');
            $("label[for='mail']").after(getErrorSpan(errors.emailCanNotBeEmpty));
            result = false;
        }
        //email should be correctly formatted
        if (mail.length > 0) {
            let result = checkEmail(mail);
            if (!result) {
                $('#mail').addClass('validation-failed');
                $("label[for='mail']").after(getErrorSpan(errors.emailBadFormat));
                result = false;
            }
        }
        return result;
    },

    //function to check email address is correct or not.
    checkEmail: (email) => {
        let pattern = /\w+@\w+\.\w{3}\b/g;
        let result = pattern.test(email);
        return result;
    },

    //function to check if passed argument only consists of digits
    checkIfNumber: (param) => {
        if (param.length === 0) {
            return false;
        }
        let pattern = /^\d+$/g;
        let result = pattern.test(param);
        return result;
    }
}