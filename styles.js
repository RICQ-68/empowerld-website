let slideIndex=0;

function showslides() {
	let i;
	let slides = document.getElementByClassName('mySlides');
	for(i=0;<slides.length; i++){
		slides[i].style.display="none";
	}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
setTimeout(showSlides,2000);
