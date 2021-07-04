//menu code
const mobileBtn = document.getElementById("mobile-cta");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("mobile-cta-exit");

mobileBtn.addEventListener("click", () => {
	nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
	nav.classList.remove("menu-btn");
});

//sticky
window.onscroll = function () {
	myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

//test github
//scroll
$(function () {
	$("nav .primary-nav li a").bind("click", function (event) {
		event.preventDefault();
		var $anchor = $(this);
		console.log($anchor.attr("href"));
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $($anchor.attr("href")).offset().top,
				},
				1000
			);
		event.preventDefault();
	});
});

//highlight current page
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
	let current = "Home";
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		// prettier-ignore
		if (pageYOffset >= sectionTop - (sectionHeight / 2)) {
			current = section.getAttribute("id");
		}
	});
	console.log(current);

	navLi.forEach((li) => {
		li.classList.remove("active");
		if (li.classList.contains(current)) {
			li.classList.add("active");
		}
	});
});
