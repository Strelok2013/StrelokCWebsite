var add_line_btn = document.getElementById("blog_add_line");
var blog_textarea = document.getElementById("blog_raw");
var blog_form = document.getElementById("blog_form");
var blog_space = document.getElementById("blog_space");
var blog_submit_btn = document.getElementById("blog_submit");
var textarea_selection;
var textarea_selection_start;
var textarea_selection_end;
var numPages = 0;

//console.log(document);

logData();

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

var currentDate = `${day}/${month}/${year}`;
console.log(currentDate);

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
        fileIn = inputElement.files[0];
    }
    if(fileIn.name == inputElement.parentElement.firstChild.id)
    {
        // same file used
    }
    else
    {
        console.log(inputElement.parentElement.childNodes);
        if(inputElement.parentElement.childNodes[3].tagName == "IMG")
        {
            // We already have an image here, replace the src
            inputElement.parentElement.childNodes[3].src = URL.createObjectURL(fileIn);
            inputElement.parentElement.childNodes[3].id = fileIn.name;
        }
        else
        {
            // Create img element
            intro_img_preview = document.createElement("IMG");
            intro_img_preview.src = URL.createObjectURL(fileIn);
            intro_img_preview.setAttribute("class", "preview_img");
            intro_img_preview.id = fileIn.name;
            document.getElementById("blog_intro").insertBefore(intro_img_preview, inputElement);
        }
    }
}
)


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

function downLoadFile(fileName, contents)
{
    var link = document.createElement('a');
    link.setAttribute('download', fileName);
    link.href = make_link_to_file(contents);
    link,innerHTML = "Test Link";
    blog_form.appendChild(link);

    var event = new MouseEvent('click');
    link.dispatchEvent(event);
}


function make_link_to_file(contents)
{
    var textFile = window.URL.createObjectURL(contents);

    return textFile;
}

async function logData()
{
    const response = await fetch("data.json");
    const dataIn = await response.json();
    console.log(dataIn);
    numPages = dataIn;
    // console.log(JSON.parse(dataIn));
    // return dataIn;
    // console.log(dataIn);
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

// logData().then(json => console.log(json));
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
    // Alright I've been at this for a while but the code below prints out the correct number of pages after the create document button is pressed. So with this in mind it *should* be safe to use for the rest of the function assuming the page WAS refreshed. otherwise everything will go tits up and lead to the wrong images.
    console.log(numPages);
    console.log(numPages + 1);

    var nodeList = blog_intro.childNodes;



    var blog_content = ["<!DOCTYPE html>\n"]; // Start off with this...

    var something = nodeList[1].innerHTML;
    // Proces the <head> tag
    var head_raw = `<head>\n
        <meta charset=\"utf-8\">\n
        <title> StreloC - ${something}</title>\n
        <link rel=\"stylesheet\" href=\"../styles/blog_style.css\">\n
        <head>\n
    `;

    blog_content[0] += head_raw;

    blog_content[0] += "<body>\n";
    blog_content[0] += "<a class= \"blog_page_back_btn\" href=\"../blog_main.php\"> Back to Blog pages</a>\n";


    // Process the blog intro


    var page_heading = nodeList[1].innerHTML;

    blog_content[0] +=
    `
    <header>\n
        <h1>${page_heading}</h1>\n
    </header>\n
    `

    blog_content[0] += "<main>\n"

    // Getting the card info n shit.
    var card_info = "<div hidden id=\"card_info\">\n";
    var date_data = new Date();
    var date_written = `${date_data.getDate()}/${date_data.getMonth() + 1}/${date_data.getFullYear()}`;
    var card_info_text = document.getElementById("card_info").innerHTML;
    card_info +=
    `
        <p> ${card_info_text} </p>
        <p>Date Posted: ${date_written}</p>\n
        <img src="/images/blog_images/page${numPages + 1}/${nodeList[3].id}">
    `
    card_info += "</div> \n";

    blog_content[0] += card_info;

    // Getting the intro
    var blog_intro_raw = "<div class =\"intro_block\">\n";

    var openTag;
    var content;
    var closeTag;
    for(node of nodeList)
    {
        switch (node.tagName)
        {
            case "P":
                openTag = "<p>\n";
                content = node.innerHTML + "\n";
                closeTag = "</p>\n";
                blog_intro_raw += openTag + content + closeTag;
                break;
            case "IMG":
                // Special case here, instead of grabbing the input element we grab the image file and use that to create an image.
                content =
                `
                    <img src="../images/blog_images/page${numPages + 1}/${node.id}"> \n
                `;
                blog_intro_raw += content;
                break;
            default:
                break;
        }
    }
    blog_intro_raw += "</div>\n";
    blog_content[0] += blog_intro_raw;
    blog_content[0] += "<hr>\n";

    // Process the rest of the blog content
    nodeList = blog_space.childNodes;

    var div_nodeList;
    var div_imgSrc;

    for(node of nodeList)
    {
        switch (node.tagName)
        {
            case "P":
                openTag = "<p>\n";
                content = node.innerHTML + "\n";
                closeTag = "</p>\n"
                blog_content[0] += openTag + content + closeTag;
                break;
            case "H3":
                openTag = "<h3>";
                content = node.innerHTML;
                closeTag = "</h3>\n";
                blog_content[0] += openTag + content + closeTag;
                break;
            case "DIV":
                div_nodeList = node.childNodes;
                try // Test to see if there is an image attached
                {
                    div_imgSrc = ` ../images/blog_images/page${numPages + 1}/${div_nodeList[1].id}`;
                }
                catch // If no image then I dunno, make it an empty image lol
                {
                    div_imgSrc = "";
                }
                //Do some funky shit to turn the container and its contents into an img with src set
                content = `<img src="${div_imgSrc}">\n`
                blog_content[0] += content;
                break;
            case "HR":
                content = "<hr>\n";
                blog_content[0] += content;
                break;
            default:
                break;
        }
    }

    // Thumbnail image needs some special sauce to make it cool and work functionally...
    blog_content[0] += "</main>";
    blog_content[0] += "</body>";
    blog_content[0] += "</html>"; // ...End with this
    console.log(blog_content[0]);

    var page_blob = new Blob([blog_content], {type: 'text/html'});

    downLoadFile(`blog_pg_${numPages + 1}`, page_blob);

    //var page_blob = new Blob(blog_content, {type: "text/html"});
    //console.log(page_blob);

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
    const heading_3 = document.createElement("H3");
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
    imgContainer.setAttribute("class", "img_container");
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
