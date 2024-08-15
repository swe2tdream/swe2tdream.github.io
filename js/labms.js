const cookies = document.cookie.split(";");
for (cookie of cookies) {
	const parts = cookie.split("=");
	if (parts[1] != "2802") {
		window.location.href = "../../learn.html"
	}
}
