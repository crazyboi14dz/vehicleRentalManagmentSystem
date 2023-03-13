$(document).ready(function () {
    $.ajax({
        url: "footer.html",
        context: document.body,
    }).done(function (data) {
        $("#footer").html(data);
    });
    $.ajax({
        url: "header.html",
        context: document.body,
    }).done(function (data) {
        $("#header").html(data);
    });
});
