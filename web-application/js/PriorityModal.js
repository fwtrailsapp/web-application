$(document).ready(function ()
{
    debugger;
    var ticketId;

    $('#priorityDialog').dialog({
        'buttons': {
            'Confirm': {
                text: 'Confirm',
                click: function ()
                {
                    debugger;
                    //ticketId = this.id.replace("Priority", "");

                    // Call Web API
                    $.ajax({
                        type: 'POST',
                        contentType: "application/json; charset=utf-8",
                        url: "http://23.97.29.252:50000/capstone/datarelay.svc/trails/API/1/set/priority",  //method Name 
                        data: JSON.stringify({ id: ticketId }),
                        dataType: 'json',
                        complete: function ()
                        {
                            debugger;
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