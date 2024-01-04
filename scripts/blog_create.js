var add_line_btn = document.getElementById("blog_add_line");
var blog_textarea = document.getElementById("blog_raw");
var blog_form = document.getElementById("blog_form");
var blog_space = document.getElementById("blog_space");
var blog_submit_btn = document.getElementById("blog_submit");
var textarea_selection;
var textarea_selection_start;
var textarea_selection_end;
//console.log(document);


var textarea
//function add_line_btn.onclick()
//{
//    print("Button pressed, adding line...");
//    blog_textarea.value += "-----";
//}




blog_space.addEventListener("change", function(e)
{
    var inputElement;
    if(e.target && e.target.nodeName == "INPUT")
    {
        inputElement = e.target;
        console.log(e.target.value);
        fileIn = inputElement.files[0];
        // Get the file name n such so that it's ready for upload
    if(fileIn.name == inputElement.parentElement.lastChild.id)
    {
        console.log("Same file used");
    }
    else
    {
        console.log("Different file used")
        // Check for existing image;
        if(inputElement.parentElement.lastChild.tagName == "IMG")
        {
            // Replace existing image
            inputElement.parentElement.lastChild.src = URL.createObjectURL(fileIn);
            inputElement.parentElement.lastChild.id  = fileIn.name;
        }
        else
        {
            // Create Image preview
            create_preview(fileIn, inputElement);
        }
    }
        //inputElement.remove();
    }
}
)

function create_preview(file, inputElem)
{
    console.log("File is: " + file.name);
    // if(file.name == )
    imgElement = document.createElement("IMG");
    imgElement.src = URL.createObjectURL(file);
    imgElement.setAttribute("class", "preview_img");
    imgElement.id = file.name;
    // This can be used to get the parent element --> imgElement.parentElement;
    console.log(inputElem);
    //blog_space.insertBefore(imgElement, inputElem);
    inputElem.parentElement.appendChild(imgElement);
    // v.replaceChild(imgElement, inputElem);
    // Getting width and height of the image can be done by querying it from the <img> element created here, if needed.
}

function send_img_to_server()
{
    const xmlhttp = new XMLHttpRequest();
    //xmlhttp.

}

blog_space.addEventListener("click", function(e)
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
    blog_space.appendChild(elem);
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

async function logData()
{
    const response = await fetch("data.json");
    const dataIn = await response.json();
    return response.json();
}

async function postJSON(data) {
  try {
    const response = await fetch('test.json');
    console.log(response);
    console.log(response.body);
    console.log(response.json());
    console.log(response.errors);
    console.log(response.message);
  } catch (error) {
    console.error("Error:", error);
  }
}


// JSON.parse('{"numberOfPages": 1}');

// JSON.parse("[1,2,3,4]");
// JSON.parse('{"Gocks-Sucked": 1}');
//postJSON(data);


function create_html_document()
{
    // First off, we get everything inside the blog_form
    // There are two divs: blog_intro and blog_space
    // Grab everthing in blog_intro and toss it into <main> as part of a div of the same name
    // Then grab everything in blog_space and toss it into <main>, no need to put it into a container
    // Then generate a html document from that and get it saved

    // A really naive way of doing this is to create a string to act as data and then send that into a blob

    var blog_intro = document.getElementById("blog_intro");

    var numPages = logData();

    var blog_content = ["<!DOCTYPE html>\n"]; // Start off with this...


    var nodeList = blog_intro.childNodes;

    var blog_intro_raw = "<div class =\"intro_block\">\n";

    for(node of nodeList)
    {
        switch (node.tagName)
        {
            case "P":
                console.log("P Element");
                break;
            case "H1":
                console.log("H1 Element");
                break;
            case "INPUT":

                break;
        }
        if(node.tagName == "P")
        {
            console.log(node.innerHTML);
            var openTag = "<p>\n";
            var content = node.innerHTML + "\n";
            var closeTag = "</p>\n";
            blog_intro_raw += openTag + content + closeTag;
        }
    }
    blog_intro_raw += "</div>\n";
    blog_content[0] += blog_intro_raw;
    blog_content[0] += "<hr>\n";
    // if (tagName == HR)
    // {
        // var openTag = "<hr>";
        // blog_content += openTag;
    // }
//
    // //if (tagName == P)
    // {
        // Possible to grab the OuterHTML and use that???
        // var openTag = "<p>";
        // var content = node.value;
        // var closeTag = "</p>";
    // }

    // Thumbnail image needs some special sauce to make it cool and work functionally...

    blog_content[0] += "</html>"; // ...End with this
    // var page_blob = new Blob(blog_content, {type: "text/html"});
    // console.log(page_blob);

    // Going to need to implement JSON stuff in this script so that I can keep track of how many pages there are.
    // Of course I could've used SQL or something but nah.
    // console.log(blog_content[0]);

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


function add_heading()
{
    const heading_3 = document.createElement("H1");
    heading_3.innerText = "Heading 3";
    heading_3.contentEditable = true;
    blog_space.appendChild(heading_3);
}

function add_paragraph()
{
    paragraph = document.createElement("p");
    paragraph.innerText = "paragraph";
    paragraph.contentEditable = true;
    blog_space.appendChild(paragraph);
}




function add_image()
{
    // Some sort of thing where I build a special image upload container??
    console.log("Adding input element...");
    //Create contents
    var imgContainer = document.createElement("DIV");

    var inputField = document.createElement("INPUT");
    inputField.setAttribute("type", "file");
    inputField.name = "img_in[]";
    imgContainer.appendChild(inputField);
    blog_space.appendChild(imgContainer);
}


function add_textarea()
{
    const textarea = document.createElement("textarea");
    blog_space.appendChild(textarea);
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
