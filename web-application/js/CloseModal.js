$(document).ready(function ()
{
    var ticketId;

    $('#closeDialog').dialog({
        'buttons': {
            'Close': {
                text: 'Close',
                click: function ()
                {
                    // Call Web API
                }
            },
            'Cancel': {
                text: 'Cancel',
                click: function ()
                {
                    $(this).dialog("close");
                }
            },
        },
        autoOpen: false,
        height: 150,
        width: 350,
        modal: true
    });

    $('[id^=CloseButton]').click(function (e)
    {
        debugger;
        ticketId = this.id.replace("CloseButton", "");
        document.getElementById("closeDialog").innerHTML = "Are you sure you want to close ticket #" + ticketId + "?";
        e.preventDefault();
        $("#closeDialog").dialog("open");
    });

});
