var scrollbarPos = 0;
window.addEventListener('scroll', function()
	{
		console.log("scrollbarPos: " + scrollbarPos);
		var scrollAmount = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if(scrollAmount > 300)
		{
			document.getElementById("someID").style.opacity = -scrollAmount / 300 + 2;
		}
		if(scrollAmount < 300)
		{
			document.getElementById("someID").style.opacity = 1;
		}
	}
);

scrollbarPos = window.pageYOffset;

var img = document.querySelectorAll('scrn');
//var img3 = document.getElementById('scrn3');
var overlay = document.getElementById('overlay');
var overlayimg = document.getElementById('overlayimg');
var leftcontent = document.getElementById('leftcontent');
var rightcontent = document.getElementById('rightcontent');

var leftheight = leftcontent.offsetHeight;
var rightheight = rightcontent.offsetHeight;

console.log({leftheight, rightheight});
console.log("translateY(" + leftheight + ")");
leftheight = leftheight + 20;
rightcontent.style.transform = 'translateY(' + -leftheight  + 'px)';


//if( scrollbarPos < 0.3)
//{
//	document.getElementById("someID")style.opacity = 1.0;
//}


function enlargeImage(img)
{
	overlay.style.display = "block";
	overlayimg.src = img.src;
	overlayimg.style.display = "block";
}




//img3.onclick = function()
//{
//	//Turn on overlay
//	overlay.style.display = "block";
//	overlayimg.src = img3.src;
//	overlayimg.style.display = "block";
//	// Make image bigger
//};

overlay.onclick = function()
{
	overlay.style.display = "none";
	overlayimg.style.display = "none";
	overlayimg.src = "";

}

overlayimg.onclick = function()
{
	overlay.style.display = "none";
	overlayimg.style.display = "none";
	overlayimg.src = "";
}

