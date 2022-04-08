
function textToUpper()
{
    let lastname = $("form #lastname").val();

    $("form #lastname").val(lastname.toUpperCase());
}

function textToCapitalize()
{
    let firstname = $("form #firstname").val();
    let new_firstname = firstname.toLowerCase().replace(/\b[a-z]/g, function(txtVal) {
        return txtVal.toUpperCase();
    });

    $("form #firstname").val(new_firstname);
}

function dateValidation(date)
{
    let date_regex = /^(0?[1-9]|[12][0-9]|3[0-1])[/., -](0?[1-9]|1[0-2])[/., -](19|20)?\d{2}$/;
    if (date.match(date_regex) !== null) {
        return true;
    } else {
        return false;
    }
}

function timeValidation(time)
{
    let time_regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (time.match(time_regex) !== null) {
        return true;
    } else {
        return false;
    }
}

function showSweetAlert() {

    let date = $("form #date").val();
    let time = $("form #hour").val();
    let interEvent = $('form select[name="interEvent"]').val()
    let eventName = $("form #eventName").val();
    let nbParticipants = $("form #nbParticipants").val();
    let description = $("form #description").val();
    let firstname = $("form #firstname").val();
    let lastname = $("form #lastname").val();
    let direction = $('form select[name="direction"]').val();
    let lounge = $("form input[name='lounge']:checked").val();

    if (date !== '' && dateValidation(date) === true) {
        $('#invalid-date').hide();
    } else {
        $('#invalid-date').show();
    }

    if (time !== '' && timeValidation(time) === true) {
        $('#invalid-time').hide();
    } else {
        $('#invalid-time').show();
    }

    if (lounge === '') {
        $('#required-lounge').show();
    }
    if (interEvent.length === 0) {
        $('#required-interEvent').show();
    }
    if (eventName === '') {
        $('#required-eventName').show();
    }
    if (nbParticipants === '') {
        $('#required-nbParticipants').show();
    }
    if (description === '') {
        $('#required-description').show();
    }
    if (firstname === '') {
        $('#required-firstname').show();
    }
    if (lastname === '') {
        $('#required-lastname').show();
    }
    if (direction === '') {
        $('#required-direction').show();
    }

    if (date !== '' && time !=='' && interEvent.length !== 0 && lounge !== ''
        && eventName !== '' && nbParticipants !== '' && description !== ''
        && firstname !== '' && lastname !== '' && direction !== '') {

        $.ajax({
            url: "form_validation.php",
            type: "POST",
            data: {
                date: date,
                time: time,
                lounge: lounge,
                interEvent: interEvent,
                eventName: eventName,
                nbParticipants: nbParticipants,
                description: description,
                firstname: firstname,
                lastname: lastname,
                direction: direction
            },
            success: function (response) {
                $('#required-lounge').hide();
                $('#required-interEvent').hide();
                $('#required-eventName').hide();
                $('#required-nbParticipants').hide();
                $('#required-description').hide();
                $('#required-firstname').hide();
                $('#required-lastname').hide();
                $('#required-direction').hide();

                console.log(
                    'Time : ' +  time
                    , 'Date : ' + date
                    , 'Evènement : ' + eventName
                    , '\nNombre de participants : ' + nbParticipants
                    , '\nDescription : ' + description
                    , '\nNom : ' + firstname
                    , '\nPrénom : ' + lastname
                    , '\nDirection : ' + direction
                    , '\nLoung : ' + lounge
                    , '\nEvènement interne : ');

                if(interEvent.length !== 0) {
                    interEvent.forEach(function (item) {
                        console.log('- ' + item);
                    });
                }

                Swal.fire(
                    'Form validated',
                    '',
                    'success'
                );
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });

    }

}