<?php

if($_SERVER["REQUEST_METHOD"] !== "POST")
{
    exit("POST request method required");
}

if(empty($_FILES))
{
    exit('$_FILES is empty - file_uploads may not be enabled in php.ini');
}

$directory = "../uploads/";

if(file_exists($directory))
{
    print_r("Found the directory");
}
else
{
    print_r("Did not find the directory");
}

$filename = $_FILES["image"]["name"];
$destination = "../uploads/" . $filename;

if( ! move_uploaded_file($_FILES["image"]["tmp_name"], $destination))
{
    exit("Can't move uploaded file");
}

print_r($_FILES);

?>
