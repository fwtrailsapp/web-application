
$(document).ready(function () {

    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var timeOfDay = "AM";
    var currentDateTime;

    var isAM = true;

    if (date.getHours() >= 12) {
        hour -= 12;
        isAM = false;
    }

    if (date.getHours() == 0) {
        hour = 12;
        isAM = true; //just to be sure
    }

    if (!isAM) {
        timeOfDay = "PM";
    }

    currentDateTime = month + "/" + day + "/" + year + " " + hour + ":" + minute + ":" + second + " " + timeOfDay;

    $('#createTicketDialog').dialog({
        'buttons': {
            'Cancel': {
                text: 'Cancel',
                click: function () {
                    $('#createTitle').val("");
                    $('#createDesc').val("");
                    $(this).dialog("close");
                }
            },
            'Create': {
                text: 'Create',
                click: function () {
                    // Call Web API
                    $.ajax({
                        type: 'POST',
                        contentType: "application/json; charset=utf-8",
                        url: "http://23.97.29.252:50000/capstone/datarelay.svc/trails/api/1/ticket/create",  //method Name 
                        data: JSON.stringify({
                            type: $('#createType').val(),
                            description: $('#createDesc').val(),
                            active: 1,
                            imgLink: "",
                            latitude: 0,
                            longitude: 0,
                            title: $('#createTitle').val(),
                            date: currentDateTime,
                            username: "admin",
                            notes: "",
                            dateClosed: "NULL"
                        }),
                        dataType: 'json',
                    });

                    $(this).dialog("close");
                    location.reload();
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
        $("#createTicketDialog").dialog("open");
    });

});