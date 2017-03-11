$(document).ready(function () {
    var ticketId;
    var imgRes;
    var imgName;

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    $('[id^=Image]').click(function (e) {
        e.preventDefault();
        ticketId = this.id.replace("Image", "");

        // Call Web API
        $.ajax({
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            url: "http://23.97.29.252/capstone/datarelay.svc/trails/api/1/retrieve/image",  //method Name 
            data: { id: ticketId },
            dataType: 'json',
            complete: function (res) {
                if (res.responseJSON || res.responseJSON.length !== 0) {
                    imgRes = res.responseJSON;
                    imgRes = imgRes.split('\\');
                    imgName = imgRes.pop();
                } else {
                    imgName = "noImg.jpg";
                }

                console.log("Image get result: " + imgName);
                modal.style.display = "block";
                debugger;
                modalImg.src = "http://23.97.29.252/webapp/images/" + imgName;
                captionText.innerHTML = this.alt;
            }
        });


    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

});