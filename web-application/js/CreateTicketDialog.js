
$(document).ready(function ()
{

    $('#createTicketDialog').dialog({
        'buttons': {
            'Create': {
                text: 'Create',
                click: function ()
                {
                    // Call Web API
                }
            }
        },
        'Cancel': {
            text: 'Cancel',
            click: function ()
            {
                debugger;
                $('#createTitle').val("");
                $('#createDesc').val("");
                $(this).dialog("close");
            }
        },
        autoOpen: false,
        height: 415,
        width: 350,
        modal: true
    });

    $('#btnCreateTicket').click(function (e)
    {
        e.preventDefault();
        $("#createTicketDialog").dialog("open");
    });

});