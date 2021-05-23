$(function () {
  // $(".table-cover .under-btn").click(console.log(i));

  $(".table-cover .under-btn").click(function () {
    var d = $(this).next(".none").css("display");

    if (d == "none") {
      $(this).next(".none").css("display", "table");
      $(this).html("내용 감추기");
    } else if (d == "table") {
      $(this).next(".none").css("display", "none");
      $(this).html("내용보기");
    }
  });
});
