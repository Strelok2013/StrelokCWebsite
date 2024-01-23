<?php
$pages_dir = "blog_pages/";

// Here we get the contents of the directory
$dir_contents = scandir("blog_pages/");

$card_title;
$card_thumbnail;
$card_desc;
$card_dateWritten;

$page_index = 0;
$entries = count($dir_contents) - 2;


$start = 0;

$page = 0;

$pagination_offset_limit = 2;

$num_cards = 5;


// What is needed: An array that's sorted by the file

$files_by_date = array();


for ($i = 2; $i < count($dir_contents); $i++)
{
    $files_by_date[] = array('time_created' => filemtime($pages_dir . $dir_contents[$i]), 'file_name' => $dir_contents[$i]);
}

usort($files_by_date, 'sort_by_newest');

function sort_by_newest($a, $b)
{

    return $a['time_created'] < $b['time_created'] ?  1 : -1;
    return 0;
    // if($a['time_created'] > $b['time_created'])
    // {
    //
    // }
    // else
    // {
    //
    // }
    // return 0;
}




$num_pages = ceil($entries / $num_cards);

$remainder = $entries % $num_cards;



if(isset($_GET['page-nr']))
{
    $page = $_GET['page-nr'] - 1;
    $start = $page * $num_cards;
}



// Pagination works by taking a small portion of a larger set of data an displaying it.
// We need a starting point and an offset to define the portion that is visible.
// From the visible portion I need to grab the thumbnail, Title, Description and date created

$page_contents = new DOMDocument();

$innerHTML = "";

$page_contents->loadHTMLFile($pages_dir . $dir_contents[2]);

// This grabs the title of the blog page
$header = $page_contents->getElementsByTagName("h1"); // Title of the card (in element form)


$innerHTML = "";

$innerHTML .= $header[0]->nodeValue; // Title of the card


$info_block = $page_contents->getElementById("card_info");
$intro_block = $page_contents->getElementById("intro_block");

?>

 <!DOCTYPE html>
<html lang="en-US">

  <head>
    <meta charset="utf-8">
    <title>StrelokC - Blogs</title>
    <link href="styles/blog_style.css" rel="stylesheet"/>
    <script src="scripts/blog_main.js" defer></script>
  </head>

  <body>

      <div class="navbar">
        <div class="dropdown">
        <div class = "dropbtn">Projects</div>
		<div class = "dropdown-content">
		<a href ="Project page.html">Trial of Time</a>
		<a href ="Project page2.html">Stuffed</a>
		<a href ="Project page3.html">Parry King</a>
		</div>
	</div>
	<a class="homepgbtn" href="index.html">Home</a>
	<a href ="blog_main.php" class="homepgbtn">Blog</a>
	<a href ="blog_main_dev.php">To Nuclear test site</a>
	<!--<a class="homepgbtn" href = "#">Dev Blog</a> -->
      </div>
    <header>
    <h1>Blogs Page</h1>
    </header>
    <main>
    <div class="card_container">
     <!--
    This container needs to be dynamically updated and also have a page function where the user can click buttons that will change the list to the next few blog posts.

    5 rows sounds sane I think?
    Implementing something called pagination...
    -->
<?php
$cards_to_draw = 0;

if($page == $num_pages - 1)
{
  // We're on the last page
  $cards_to_draw = $remainder;
}
else
{
  // We're not on the last page
  $cards_to_draw = $num_cards;
}


for($i = 0; $i < $cards_to_draw; $i++)
{
    $page_contents->loadHTMLFile($pages_dir . $files_by_date[$i]['file_name']);

    $header = $page_contents->getElementsByTagName("header");

    $card_title = $header[0]->nodeValue;

    $info_block = $page_contents->getElementById("card_info");

    $intro_block = $page_contents->getElementById("intro_block");

    $card_thumbnail = $info_block->childNodes[5]->attributes[0]->nodeValue;

    $card_desc = $info_block->childNodes[1]->nodeValue;

    $card_dateWritten = $info_block->childNodes[3]->nodeValue;
?>
<div class="card">
  <a href="<?php echo $pages_dir . $files_by_date[$i]['file_name'] ?>">
  <h3><?php echo $card_title ?> </h3>
  <img src="<?php echo $card_thumbnail ?>">
  </a>
  <p class="card_desc">
    <?php echo $card_desc ?>
  </p>
  <p>
    <?php echo $card_dateWritten ?>
  </p>
</div>
<?php
  }
?>

      <!--<div class="card">
        <a href="blog_pages/blog_pg_1.html">
          <h3>The new direction</h3>
          <img src="images/blog_images/page1/cover_1.jpg">
        </a>
        <p class="card_desc">
          A somewhat radical change to the website and what's next.
        </p>
        <p>Date posted: 15/11/2023 </p>
      </div>-->
    </div>
    <div class= "pagination">
    <!--
    'Previous' button.
    -->
    <?php
    if($page != 0)
    { ?>
    <a href="?page-nr=<?php echo $page + 1 - 1 ?>">Previous</a>

    <?php } ?>
    <div class="pagination_numbers">
    <a href="?page-nr=1">1</a>
    <?php
    // Some kind of logic that checks to see which page the use is on
    // Use $pagination_offset_limit
    ?>

    <?php
    if($page <= $pagination_offset_limit)
    {
        // If we're near the start
       for ($i = 1; $i < $pagination_offset_limit + 1; $i++)
    {
    ?>
    <a href="?page-nr=<?php echo $i + 1 ?>" ><?php echo $i + 1 ?> </a>
    <?php
    }
    echo "...";
    }
    elseif($page + 1 >= $num_pages - $pagination_offset_limit)
    {
        echo "...";
        // If we're near the end
       for($i = $pagination_offset_limit; $i > 0; $i--)
       { ?>
          <a href="?page-nr=<?php echo $num_pages - $i?>"><?php echo $num_pages - $i ?> <?php $num_pages - $i?></a>
       <?php }
    }
    else
    {
      // We're somewhere in the middle?
      echo "...";
      for($i = 0; $i < $pagination_offset_limit + 1; $i++)
      { ?>
        <a href="?page-nr=<?php echo $page + $i ?>"><?php echo $page + $i; ?></a>
      <?php }
      echo "...";
    } ?>
    <a href="?page-nr=<?php echo $num_pages ?>"><?php echo $num_pages?></a>
    </div>
    <!--
    'Next' button
    -->
    <?php if($page + 1 < $num_pages)
      { ?>
      <a href="?page-nr= <?php echo $page + 2?>">Next</a>
    <?php } ?>
    <!--<div class="pagination_jump">
    <p>Jump to:</p>
    <input type="text"> </input>
    <button>Ok</button>
    </div>-->
    </div>
    </main>

    <footer></footer>
  </body>
</html>


