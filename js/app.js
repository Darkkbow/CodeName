$(document).foundation();

var carousel;

$(document).ready(function () {
    carousel = $(".test");
    carousel.itemslide(
      {
        disable_scroll:true,
        start:0,
        parent_width :true
      }
    );
});
