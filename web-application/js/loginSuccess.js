debugger;
alert("JS Loaded");
$('.loginSubmit').click(function ()
{
    alert("onSubmit");
    if ($('.password').val() == "hello")
    {
        alert("hi");
        window.location.href = "http://stackoverflow.com";
    }
});

