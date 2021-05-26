var URL = 'https://jqysmxyuae.execute-api.us-west-2.amazonaws.com/prod/contact';
var headers = {
    "x-api-key": "5rFOe98uBt56evfNRDuyfpPXGv1KUWl21CPbTx81",
    "Content-Type":"application/json"
};
var requiredFields = ['email', 'msg'];
var resetSubmit = $('#contact-form').children(':submit').html();

$('#contact-form').submit(function (event) {
    event.preventDefault();
    if (!validForm(this)) return;
    fbSending();
    var data = {
        name: $('#name').val(),
        phone: $('#phone').val(),
        email: $('#email').val(),
        msg: $('#msg').val()
    };
    $.ajax({
        type: 'POST',
        crossDomain: true,
        url: URL,
        headers: headers,
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data, status, res) {
            console.log(data);
            console.log(status);
            console.log(res);
            fbSent();
        },
        error: function (res, status, e) {
            console.log(res);
            console.log(status);
            console.log(e);
        }
    });
});

$(".mdl-textfield__input").blur(function (){
    validField(this);
});

function checkRequired(field) {
    if ($.inArray(field.id, requiredFields) > -1) {
        return true;
    }
    return false;
}

function fbSending() {
    // Update text of object, set to disabled, and add spinner.
    // <div class="mdl-spinner mdl-js-spinner is-active"></div>
    var button = $('#contact-form').children(':submit');
    button.disabled = true;
    button.html('<i class="fa fa-envelope"></i> SENDING');
};

function fbSent() {
    // Provide feedback that the message was sent in a snackbar, and reset.
    var form = $('#contact-form');
    var button = form.children(':submit');
    var snack = document.querySelector('#snack');
    form[0].reset();
    button.disabled = false;
    button.html(resetSubmit);
    var snackData = {
        message: 'Your message was successfully sent.',
        timeout: 3600
    };
    snack.MaterialSnackbar.showSnackbar(snackData);
};

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function mdlMarkRequired(field) {
    $(field).prop('required', true);
    $(field).parent().addClass('is-invalid');
}

function validField(field) {
    if (checkRequired(field)) {
        if (!field.value) {
            mdlMarkRequired(field);
            return false;
        }
    }
    return true;
}

function validForm(form) {
    var isValid = true;
    $.each($(form).find(':input'), function (_, field) {
        isValid = validField(field) && isValid ? true : false;
    });
    return isValid;
}
