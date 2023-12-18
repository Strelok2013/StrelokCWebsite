var add_line_btn = document.getElementById("blog_add_line");
var blog_textarea = document.getElementById("blog_raw");
var blog_form = document.getElementById("blog_space");
var textarea_selection;
var textarea_selection_start;
var textarea_selection_end;
console.log(document);


var textarea
//function add_line_btn.onclick()
//{
//    print("Button pressed, adding line...");
//    blog_textarea.value += "-----";
//}




blog_form.addEventListener("change", function(e)
{
    var inputElement;
    if(e.target && e.target.nodeName == "INPUT")
    {
        inputElement = e.target;
        console.log(e.target.value);
        // Get the file name n such so that it's ready for upload

        create_preview(inputElement.files[0], inputElement);
        //inputElement.remove();
    }
}
)

function create_preview(file, inputElem)
{
    console.log("File is: " + file.name);
    imgElement = document.createElement("IMG");
    imgElement.src = URL.createObjectURL(file);
    imgElement.setAttribute("class", "preview_img");
    // This can be used to get the parent element --> imgElement.parentElement;
    console.log(inputElem);
    blog_form.replaceChild(imgElement, inputElem);
    // Getting width and height of the image can be done by querying it from the <img> element created here, if needed.
}

function send_img_to_server()
{
    const xmlhttp = new XMLHttpRequest();
    //xmlhttp.

}

blog_form.addEventListener("click", function(e)
{
    // Event delegate for the button part of the image upload.
    if(e.target && e.target.nodeName == "BUTTON")
    {
        console.log("Submit button was pressed");
    }
}
)

function add_line()
{
    var elem = document.createElement("hr");
    blog_form.appendChild(elem);
}

function create_Test_Link()
{
    var link = document.createElement('a');
    link.setAttribute('download', '');
    link.href = make_link_to_file("asdasdasdasd");
    link,innerHTML = "Test Link";
    blog_form.appendChild(link);

    var event = new MouseEvent('click');
    link.dispatchEvent(event);
}


function make_link_to_file(text)
{
    var data = new Blob([text], {type: 'text/html'});

    var textFile = window.URL.createObjectURL(data);

    return textFile;
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

//document.addEventListener("click", get_text_area_selection);

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
    //Create contents
    var inputField = document.createElement("INPUT");
    inputField.setAttribute("type", "file");
    inputField.id = "img_in";
    blog_form.appendChild(inputField);
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

function add_img_from_srv()
{
    image_from_server = document.createElement("IMG");
    image_from_server.src = "uploads/Strelok2.png";
    blog_form.appendChild(image_from_server);
}
