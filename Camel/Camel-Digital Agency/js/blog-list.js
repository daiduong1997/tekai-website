
var readMoreBlog = document.getElementById("read-more-blog-lorem");
readMoreBlog.style.display = "none"

function readMore(att){
    var blogLorem = document.getElementById("blog-"+att);
    var readMoreBlog = document.getElementById("read-more-blog-"+ att);
    if (blogLorem.style.display === "none") {
        blogLorem.style.display = "inline";
        readMoreBlog.style.display = "none";
    } else {
        blogLorem.style.display = "none";
        readMoreBlog.style.display = "inline";
    }
}


$(document).ready(function(){

    $('#read-more-lorem').click(function(){
        readMore('lorem')
    }) 

    $('#search-blog').on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $('#recent-posts div').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
    })

})