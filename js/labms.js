const cookies = document.cookie.split(";");
for (cookie of cookies) {
	const parts = cookie.split["="];
	if (parts != "0111") {
		window.location.href = "../../learn.html"
	}
}