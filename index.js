let r = document.querySelector("#h");

let a = document.querySelector("#a");
let aa = document.querySelector("#aa");
let aaa = document.querySelector("#aaa");

let line1 = document.querySelector("#line-one");
let line2 = document.querySelector("#line-two");
let line3 = document.querySelector("#line-th");

window.addEventListener("scroll", () => {
	if (1 < window.scrollY) {
		r.classList.add("h");
		r.classList.remove("hh");
	}
	if (window.scrollY < 1) {
		r.classList.remove("h");
		r.classList.add("hh");
	}
});