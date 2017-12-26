var mdSend = document.querySelector(".modal-send-us")
var btnSend = document.querySelector(".contacts .btn-send-us")
var clSend = mdSend.querySelector(".modal-close")
var fcsSend = mdSend.querySelector("input[type=text]:nth-of-type(1)")
var frmSend = mdSend.querySelector("form")
var nameSend = mdSend.querySelector("input[name=name]")
var emailSend = mdSend.querySelector("input[name=email]")
var textSend = mdSend.querySelector("textarea")


var mdMap = document.querySelector(".modal-map")
var btnMap = document.querySelector(".contacts .contacts-img")
var clMap = mdMap.querySelector(".modal-close")

btnSend.addEventListener("click", function(evn) {
	evn.preventDefault()
	mdSend.classList.add("modal-open")
	fcsSend.focus();
})

clSend.addEventListener("click", function(evn) {
	evn.preventDefault()
	mdSend.classList.remove("modal-open")
	mdSend.classList.remove("modal-error")
})

frmSend.addEventListener('submit', function(evn) {
	if(!nameSend.value || !emailSend.value || !textSend.value)
	{
		evn.preventDefault()
		mdSend.classList.add("modal-error")
	}
})

btnMap.addEventListener("click", function(evn) {
	evn.preventDefault();
	mdMap.classList.add("modal-open")
})

clMap.addEventListener("click", function(evn) {
	evn.preventDefault();
	mdMap.classList.remove("modal-open")
})
