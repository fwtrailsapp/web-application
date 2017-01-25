$(document).ready(function ()
{

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

    $('#CloseButton1').click(function (e)
    {
        debugger;
        e.preventDefault();
        $("#closeDialog").dialog("open");
    });

});