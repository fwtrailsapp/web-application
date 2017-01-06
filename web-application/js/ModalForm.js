
$(document).ready(function () {

    $('#dialog').dialog({
        'buttons' : {
            'Cancel': {
                text: 'Cancel',
                click: function () {
                    debugger;
                    $('#createTitle').val("");
                    $('#createDesc').val("");
                    $(this).dialog("close");
                }
            },
            'Create': {
                text: 'Create',
                click: function () {
                    // Call Web API
                }
            }
        },
        autoOpen: false,
        height: 415,
        width: 350,
        modal: true
    });

    $('#btnCreateTicket').click(function (e) {
        e.preventDefault();
        $("#dialog").dialog("open");
    });

});