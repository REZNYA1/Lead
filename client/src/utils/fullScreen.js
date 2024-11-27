export function isFullscreen() {
	return (
		document.fullscreenElement || // Standard
		document.webkitFullscreenElement || // Safari
		document.mozFullScreenElement || // Firefox
		document.msFullscreenElement // IE/Edge
	);
}

export function goFullscreen() {
	const element = document.documentElement;
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen();
	}
}

export function fullScreen() {
	goFullscreen();
	navigator.keyboard.lock();
}

export function exitFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	}
	navigator.keyboard.unlock();
}