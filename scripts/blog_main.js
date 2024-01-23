const urlParams = new URLSearchParams(window.location.search);
const page_number = parseInt(urlParams.get("page-nr"))

// console.log(urlParams);

// console.log(page_number);


let page_links;



async_resolve();



async function async_resolve()
{
    result = await document.querySelectorAll('.pagination_numbers > a');
    console.log(result);
    page_links = result;
    console.log(page_links[page_number])

    for(const e of page_links)
    {
        if(e.innerHTML == page_number)
        {
            console.log(e.innerHTML + " " + page_number);
            e.classList.add("active");
        }
    }
}


// console.log(page_links[page_number].classList);
