$(document).ready(function ()
{
    var ticketId;
    var note;

    $('#commentDialog').dialog({
        'buttons': {
            'Save': {
                id: 'commentSave',
                text: 'Save',
                click: function() {
                    //Save to DB with Web API
                }
            },
            'Edit': {
                id: 'commentEdit',
                text: 'Edit',
                click: function ()
                {
                    $('textarea#commentTextArea').removeAttr("disabled");
                    $('#commentEdit').hide();
                    $('#commentSave').show();
                }
            },
            'Cancel': {
                text: 'Cancel',
                click: function ()
                {
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

    $('[id^=CommentButton]').click(function (e)
    {
        ticketId = this.id.replace("CommentButton", "");
        e.preventDefault();
        $("#commentDialog").dialog("open");
    });

});