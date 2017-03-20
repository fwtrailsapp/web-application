$(document).ready(function () {
    var ticketId;
    var note;

    $('#commentDialog').dialog({
        'buttons': {
            'Save': {
                id: 'commentSave',
                text: 'Save',
                click: function () {
                    //Save to DB with Web API
                    $.ajax({
                        type: 'POST',
                        contentType: "application/json; charset=utf-8",
                        url: "http://23.97.29.252/capstone/datarelay.svc/trails/api/1/set/note",  //method Name 
                        data: JSON.stringify({ id: ticketId, note: $("#commentTextArea").val() }),
                        dataType: 'json',
                    });

                    $('textarea#commentTextArea').attr("disabled", "disabled");
                    $('#commentEdit').show();
                    $('#commentSave').hide();
                }
            },
            'Edit': {
                id: 'commentEdit',
                text: 'Edit',
                click: function () {
                    $('textarea#commentTextArea').removeAttr("disabled");
                    $('#commentEdit').hide();
                    $('#commentSave').show();
                }
            },
            'Cancel': {
                text: 'Cancel',
                click: function () {
                    $('#commentEdit').show();
                    $('#commentSave').hide();
                    $(this).dialog("close");
                }
            }
        },
        autoOpen: false,
        height: 300,
        width: 350,
        modal: true
    });

    $('button#commentSave').hide();

    $('[id^=CommentButton]').click(function (e) {
        ticketId = this.id.replace("CommentButton", "");

        $.ajax({
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            url: "http://23.97.29.252/capstone/datarelay.svc/trails/api/1/retrieve/note?id=" + ticketId,  //method Name 
            dataType: 'json',
            complete: function (res) {
                $("#commentTextArea").val(res.responseJSON);
            }
        });

        e.preventDefault();
        $("#commentDialog").dialog("open");
    });

});