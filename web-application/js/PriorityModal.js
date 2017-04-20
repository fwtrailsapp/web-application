$(document).ready(function ()
{
    var ticketId;

    $('#priorityDialog').dialog({
        'buttons': {
            'Confirm': {
                text: 'Confirm',
                click: function ()
                {
                    // Call Web API
                    $.ajax({
                        type: 'POST',
                        contentType: "application/json; charset=utf-8",
                        url: "",  //method Name 
                        data: JSON.stringify({ id: ticketId }),
                        dataType: 'json',
                        complete: function ()
                        {
                            debugger;
                            $('#ticket' + ticketId).css("border")
                            $('#PriorityIcon' + ticketId).css("visibility", "visible");
                            $("#priorityDialog").dialog("close");

                        }
                    });

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
        height: 165,
        width: 350,
        modal: true
    });

    $('[id^=Priority]').click(function (e)
    {
        ticketId = this.id.replace("Priority", "");
        document.getElementById("priorityDialog").innerHTML = "Are you sure you want to mark ticket #" + ticketId + " as high priority?";
        e.preventDefault();
        $("#priorityDialog").dialog("open");
    });

});