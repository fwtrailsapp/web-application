$(document).ready(function ()
{

    $('#commentDialog').dialog({
        'Cancel': {
            text: 'Cancel',
            click: function ()
            {
                $(this).dialog("close");
            }
        },
        autoOpen: false,
        height: 415,
        width: 350,
        modal: true
    });

    $('#CommentButton1').click(function (e)
    {
        e.preventDefault();
        $("#commentDialog").dialog("open");
    });

});