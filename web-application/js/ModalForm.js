
$(document).ready(function () {

    $('#dialog').dialog({
        'buttons' : {
            'Cancel': {
                text: 'Cancel',
                click: function(){
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
        autoOpen: false
    });

    $('#btnCreateTicket').click(function (e) {
        e.preventDefault();
        $("#dialog").dialog("open");
    });

});