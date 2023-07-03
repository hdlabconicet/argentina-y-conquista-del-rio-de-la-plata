const rhymeBtn = document.getElementById("show_rhyme")
const scansionBtn = document.getElementById("show_scansion")
const scandedStanzas = document.querySelector("div.scansion")
const rhymeStanzas = document.querySelector("div.rhyme")


function markRhyme(){
	let rhymes = document.querySelectorAll("span.rhyme")

	rhymeBtn.addEventListener("click", (evt)=> {
		rhymeStanzas.style.display = "block"
		scandedStanzas.style.display = "none"
		for (let rhyme of rhymes) {
			rhyme.classList.toggle("active_rhyme")
		}
})}

function showScansion(){
	scansionBtn.addEventListener("click", (evt)=> {
		scandedStanzas.style.display = "block"
		rhymeStanzas.style.display = "none"
})}


markRhyme()
showScansion()