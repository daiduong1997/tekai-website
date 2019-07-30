var readMoreBlog = document.getElementById("read-more-blog");
readMoreBlog.style.display = "none"


function readMore(){

    var blogLorem = document.getElementById("blog-Lorem");
    var readMoreBlog = document.getElementById("read-more-blog");

    if (blogLorem.style.display === "none") {
        blogLorem.style.display = "inline";
        readMoreBlog.style.display = "none";
    } else {
        blogLorem.style.display = "none";
        readMoreBlog.style.display = "inline";
    }
}


$(document).ready(function(){

    $('#search-blog').click(function(){
        readMore()
    }) 

    $('#search-blog').on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $('#recent-posts div').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
    })

})