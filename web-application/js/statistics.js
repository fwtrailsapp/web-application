$(document).ready(fuction()
{
    var account;

    $.ajax({
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        url: "http://23.97.29.252/capstone/datarelay.svc/trails/api/1/statistics/Account",  //method Name 
        dataType: 'json',
    })
})