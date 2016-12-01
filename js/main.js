$(document).ready(function(){
  var content = $(".main-content");
  var menu_li = $(".main-menu-list").children();
  var slided = false;
  $(".main-content-button_enter").on("click", function(){
      content.addClass("open");
      slided = true;i=0;
      menu_li.each(function(index){
        var e = $(this);
        setTimeout(function(){
          e.addClass("open-li");
        }, 250*index);
      });
  });
  $(".main-content-button_close").on("click", function(){
    content.removeClass("open");
    menu_li.removeClass("open-li");
  });
});
