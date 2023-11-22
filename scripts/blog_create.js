var add_line_btn = document.getElementById("blog_add_line");
var blog_textarea = document.getElementById("blog_raw");
var textarea_selection;
var textarea_selection_start;
var textarea_selection_end;
console.log(document);

console.log(blog_textarea.tagName);

var textarea
//function add_line_btn.onclick()
//{
//    print("Button pressed, adding line...");
//    blog_textarea.value += "-----";
//}

function add_line_to_textarea()
{
    console.log("Pressed da button, adding line (hopefully)");
    blog_textarea.value += "\n-----\n";
}

function strengthen_text()
{
    blog_textarea.focus();
    var textarea_array = blog_textarea.value.split("");
    console.log("Bold text button pressed");
    // Use Replace() method;
    if(textarea_selection == "")
    {
        blog_textarea.value += "**Strong Text**";
        console.log("Text area selection was empty");
    }
    else
    {
        console.log("Text area selection was not empty");
        textarea_array.splice(textarea_selection_start, 0, "**");
        textarea_array.splice(textarea_selection_end, 0, "**");
        blog_textarea.value = textarea_array.join("");
    }

}

function save_text_area_selection()
{
    text_area_selection = window.getSelection();
    console.log("Saved text: \n" +  text_area_selection);
}

document.addEventListener("click", get_text_area_selection);

/*while(true)
{
    if(text_area_selection_1 != text_area_selection_2)
    {
        new_text_selected = true;
    }

    if(new_text_selected)
    {
        text_area_selection_1 = text_area_selection_2;
        new_text_selected = false;
    }
    console.log("Current text selection: " + text_area_selection_1);
}*/

function get_text_area_selection()
{
    var start = blog_textarea.selectionStart;

    textarea_selection_start = blog_textarea.selectionStart;
    textarea_selection_end  = blog_textarea.selectionEnd;

    var end = blog_textarea.selectionEnd;

    textarea_selection = blog_textarea.value.substring(start, end);

    console.log("Text area selection: " + textarea_selection);
    console.log("Start: " + textarea_selection_start);
    console.log("End: " + textarea_selection_end);
}

