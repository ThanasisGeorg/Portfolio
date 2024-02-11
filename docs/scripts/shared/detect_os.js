function detectOS() {
	let userAgent = window.navigator.userAgent,
		platform = window.navigator.platform,
		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
		os = null;

	if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux';
	}

	return os;
}

let os = detectOS();

// if (os == 'Windows') {
//     $(body).css('font-family', '"Liberation Sans"')
// } else if (os == 'Linux') {
//     $(body).css('font-family', '"Manjari"')
// }
