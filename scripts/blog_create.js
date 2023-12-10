var add_line_btn = document.getElementById("blog_add_line");
var blog_textarea = document.getElementById("blog_raw");
var blog_form = document.getElementById("blog_space");
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
        textarea_array.splice(textarea_selection_end + 1, 0, "**");
        blog_textarea.value = textarea_array.join("");
        blog_textarea.selectionStart = textarea_selection_start + 2;
        blog_textarea.selectionEnd = textarea_selection_end + 2;
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

function process_file_drop()
{

}

function add_heading()
{
    const heading_3 = document.createElement("H1");
    heading_3.innerText = "Heading 3";
    heading_3.contentEditable = true;
    blog_form.appendChild(heading_3);
}

function add_paragraph()
{
    paragraph = document.createElement("p");
    paragraph.innerText = "paragraph";
    paragraph.contentEditable = true;
    blog_form.appendChild(paragraph);
}

function add_image()
{
    // Some sort of thing where I build a special image upload container??
    console.log("Adding input element...");
    // Create container
    var img = document.createElement("DIV");
    img.setAttribute("class", "img_upload");
    //Create contents
    var inputField = document.createElement("INPUT");
    inputField.setAttribute("type", "file");
    var submitButton = document.createElement("BUTTON");
    submitButton.innerText = "Submit";
    submitButton.setAttribute("type", "button");
    submitButton.addEventListener("click", confirm_image(inputField.value));
    img.appendChild(inputField);
    img.appendChild(submitButton);
    blog_form.appendChild(img);
}

function confirm_image(fileName)
{
    // Might be needed
    var imgToCreate = document.createElement("IMG");
    // Source is acquired how??
    console.log("Value of input field: " + fileName);
}

function add_textarea()
{
    const textarea = document.createElement("textarea");
    blog_form.appendChild(textarea);
}

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

