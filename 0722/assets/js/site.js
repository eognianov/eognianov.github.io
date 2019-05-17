$notifications = $('.toast__close i').on('click', function (event) {
    // cookie
    event.stopPropagation();
    $notification = $(this.parentNode.parentNode);
    console.log($notification.siblings().filter(".hidden").length);
    console.log($notification.siblings().length);
    if ($notification.siblings().filter(".hidden").length===$notification.siblings().length) {
        $('#toast__container').hide();
    }
    
    // if ($notification.siblings()===0) {
    //     $('#toast__container').hide();
    // }
    $notification.addClass("hidden");
});
