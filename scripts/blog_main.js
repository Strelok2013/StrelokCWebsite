
document.onloa

async function get_pages()
{
    const response = await fetch("blog_pages/blog_pg_1.html");
    console.log(response);
    const file = await response.text();
    console.log(file);

    var html = document.createElement('html');
    html.innerHTML = file;

    console.log(html);
}

get_pages();
