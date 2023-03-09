    // categories resize START
    $(function () {
        var pressed = false;
        var start = undefined;
        var startX, startWidth;

        $("#resize-categories").mousedown(function (e) {
            start = $(this);
            pressed = true;
            startX = e.pageX;
            startWidth = $(this).width();
        });
        
        $(document).mousemove(function (e) {
            if (pressed) {
                $(start).width(startWidth + (e.pageX - startX));
            }
        });

        $(document).mouseup(function () {
            if (pressed) {
                pressed = false;
            }
        });
    });
    // categories resize END