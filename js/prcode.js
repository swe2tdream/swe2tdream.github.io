var input = document.querySelector('input');

input.oninput = function() {
	if (input.value === "2802") {
		document.cookie = "id=2802; max-age=86400"
		window.location.href = "learn/labms/profile.html";
	}
}
