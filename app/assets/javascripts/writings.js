
$(document).ready(function(){
    console.log("hello")

    
    $("a#writing_link").click(function(e) {
        console.log("dong")
        e.preventDefault();
        e.stopPropagation();

        var $link = $(this)

        $.ajax({
            url: $link.attr("href"),
            method: $link.attr("method"),
            success: function(response){
                $("#writing_title p").html(response.title);
                $("#writing_content p").html(response.content);
                $("#image").attr({"id": "writing_image", "src": response.image});

                if($("#writing_image").length){
                    console.log("ding")
                    $("#writing_image").attr("src", response.image)
                }
            }
        });

    });


});