var input = document.querySelector('input');

input.oninput = function() {
	if (input.value === "0111") {
		document.cookie = "id=0111; max-age=86400"
		window.location.href = "learn/labms/profile.html";
	}
}
