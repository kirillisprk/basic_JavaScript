function showSnackbar(textMessage) {
    let snackbar = document.querySelector(".snackbar");
    snackbar.textContent = textMessage;
    snackbar.classList.add('show');
    setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
    }, 2000);
}