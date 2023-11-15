var add_line_btn = document.getElementById("blog_add_line");
var blog_textarea = document.getElementById("blog_raw");

console.log(document);

console.log(blog_textarea);

//function add_line_btn.onclick()
//{
//    print("Button pressed, adding line...");
//    blog_textarea.value += "-----";
//}

function add_line_to_textarea()
{
    console.log("Pressed da button, adding line (hopefully)");
    blog_textarea.value += "-----";
}
