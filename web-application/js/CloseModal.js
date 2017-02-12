$(document).ready(function () {
    var ticketId;

    $('#closeDialog').dialog({
        'buttons': {
            'Close': {
                text: 'Close',
                click: function () {
                    // Call Web API
                    //$.ajax({
                    //    type: 'Post',
                    //    beforeSend: function (request) {
                    //        request.setRequestHeader("Trails-Api-Key", ab83920bdc826bdaf);
                    //    },
                    //    contentType: "application/json; charset=utf-8",
                    //    url: "http://23.97.29.252:50000/capstone/datarelay.svc/trails/api/1/ticket/close",  //method Name 
                    //    data: JSON.stringify({ id: ticketId }),
                    //    dataType: 'json',
                    //    success: alert("success"), // callback above
                    //    error: function (msg)
                    //    {
                    //        debugger;
                    //        alert("error: " + msg.status);
                    //    }
                    //});

                    $.post('http://23.97.29.252:50000/capstone/datarelay.svc/trails/api/1/ticket/close', { id: ticketId },
                        function (returnedData) {
                            console.log(returnedData);
                        });

                    $(this).dialog("close");

                }
            },
            'Cancel': {
                text: 'Cancel',
                click: function () {
                    $(this).dialog("close");
                }
            },
        },
        autoOpen: false,
        height: 150,
        width: 350,
        modal: true
    });

    $('[id^=CloseButton]').click(function (e) {
        ticketId = this.id.replace("CloseButton", "");
        document.getElementById("closeDialog").innerHTML = "Are you sure you want to close ticket #" + ticketId + "?";
        e.preventDefault();
        $("#closeDialog").dialog("open");
    });

});
