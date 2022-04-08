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
        console.log('Date : ', date);
    } else {
        $('#invalid-date').show();
    }

    if (time !== '' && timeValidation(time) === true) {
        $('#invalid-time').hide();
        console.log('Time : ', time);
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

    if (date !== '' && time !=='' && lounge !== '' && eventName !== ''
        && nbParticipants !== '' && description !== '' && firstname !== ''
        && lastname !== '' && direction !== '') {
        $('#required-lounge').hide();
        $('#required-interEvent').hide();
        $('#required-eventName').hide();
        $('#required-nbParticipants').hide();
        $('#required-description').hide();
        $('#required-firstname').hide();
        $('#required-lastname').hide();
        $('#required-direction').hide();

        if(interEvent.length !== 0) {
            console.log('Evènement interne : ');
            interEvent.forEach(function (item) {
                console.log('\n- ' + item);
            });
        }

        console.log('Evènement : ' + eventName
            , '\nNombre de participants : ' + nbParticipants
            , '\nDescription : ' + description
            , '\nNom : ' + firstname
            , '\nPrénom : ' + lastname
            , '\nDirection : ' + direction
            , '\nLoung : ' + lounge);

        Swal.fire(
            'Form validated',
            '',
            'success'
        );
    }

}