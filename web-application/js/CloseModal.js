$(document).ready(function ()
{
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var ticketId;

    $('#closeDialog').dialog({
        'buttons': {
            'Close': {
                text: 'Close',
                click: function ()
                {
                    // Call Web API
                    $.ajax({
                        type: 'POST',
                        contentType: "application/json; charset=utf-8",
                        url: "http://23.97.29.252:50000/capstone/datarelay.svc/trails/api/1/ticket/close",  //method Name 
                        data: JSON.stringify({ id: ticketId }),
                        dataType: 'json',
                        complete: function ()
                        {
                            $("#closeDialog").dialog("close");
                            if (isChrome)
                            {
                                location.reload();
                            } else
                            {
                                window.location.href = window.location.href + '?refresh';
                            }
                        }
                    });
                    debugger;

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
        ticketId = this.id.replace("CloseButton", "");
        document.getElementById("closeDialog").innerHTML = "Are you sure you want to close ticket #" + ticketId + "?";
        e.preventDefault();
        $("#closeDialog").dialog("open");
    });

});
