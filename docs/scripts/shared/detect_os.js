let userAgent = window.navigator.userAgent;

if (userAgent.indexOf("Win") !== -1) {
	document.body.style.fontFamily = "Liberation Sans"
} else if (userAgent.indexOf("Linux") != -1) {
	document.body.style.fontFamily = "Manjari"
}