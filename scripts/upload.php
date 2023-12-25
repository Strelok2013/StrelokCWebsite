<!--<html>
<p>SUS</p>
</html>-->


<?php

// This could be some sort of page that's blank and just processes the submitted form.
// Then it should redirect back to the original blog_create page???
//
// if($_SERVER["REQUEST_METHOD"] !== "POST")
// {
//     exit("POST request method required");
// }
//
// if(empty($_FILES))
// {
//     exit('$_FILES is empty - file_uploads may not be enabled in php.ini');
// }
//
// $directory = "../uploads/";
//
// if(file_exists($directory))
// {
//     print_r("Found the directory");
// }
// else
// {
//     print_r("Did not find the directory");
// }
//
// $filename = $_FILES["image"]["name"];
// $destination = "../uploads/" . $filename;
$blog_pages_dir = "../blog_pages/";
$test_dir = "page3";
// $blog_page_count = scandir(blog_pages_dir);
//
//
// if( ! move_uploaded_file($_FILES["image"]["tmp_name"], $destination))
// {
//     exit("Can't move uploaded file");
// }

if(is_dir($blog_pages_dir . $test_dir))
{
    echo "Dir does exist\n";
}
else
{
    echo "Dir does not exist\n";
}

// if(!@mkdir($test_dir))
// {
    // $error = error_get_last();
    // echo $error['message'];
// }


function makeDir()
{
    if(mkdir($test_dir, 770))
    {
        echo $blog_pages_dir . "page2";
        echo "Fungled it\n";
    }
    else
    {
        throw new Exception("Sumthin' happen'd");
        echo "Bungled it\n";
    }
}

echo $_FILES['Carina-Christmas-Dragon']['name'];
// var dir_contents = scandir($blog_pages_dir);

// echo dir_contents.count;

// print_r($_FILES);

?>
