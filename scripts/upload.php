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
    // exit('$_FILES is empty - file_uploads may not be enabled in php.ini');
// }

$directory = "../uploads/";
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

$dirContents = scandir("../images/blog_images/");
var_dump($dirContents);

$pageCount = count($dirContents) - 2;
var_dump($pageCount);
// if(!@mkdir($test_dir))
// {
    // $error = error_get_last();
    // echo $error['message'];
// }



var_dump($_FILES);

echo '../images/blog_images/page' . $pageCount + 1 . '/';
$uploadDir = '../images/blog_images/page' . $pageCount + 1 . '/';


if(mkdir($uploadDir))
{
    echo "Created directory in : /images/blog_images/";
    chmod($uploadDir, 0770);
}
else
{
    echo "Bungled it";
}

$uploadFile = '';


foreach($_FILES['img_in']['tmp_name'] as $index=>$value)
{
    $uploadFile = $uploadDir . basename($_FILES['img_in']['name'][$index]);
    move_uploaded_file($value, $uploadFile);
    chmod($uploadFile, 0770);
    echo $value;
    echo $uploadFile;
}

//chown($uploadDir . "Carina-Christmas-Dragon.jpg", 1000);
// var dir_contents = scandir($blog_pages_dir);

// echo dir_contents.count;

// print_r($_FILES);

?>
