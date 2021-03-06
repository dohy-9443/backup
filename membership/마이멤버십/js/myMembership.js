var memberInfo = {
  person1: {
    point: 4200,
  },
  person2: {
    point: 7002,
  },
  person3: {
    point: 10200,
  },
  person4: {
    point: 17500,
  },
  person5: {
    point: 28000,
  },
};

var tier = {
  bronze: {
    img: "./tier/bronze_1.png",
  },
  silver: {
    img: "./tier/silver_1[1].png",
  },
  gold: {
    img: "./tier/gold_1[1].png",
  },
  platinum: {
    img: "./tier/platinum_1[1].png",
  },
  diamond: {
    img: "./tier/diamond_1[1].png",
  },
};

$(function () {
  var point = memberInfo["person5"]["point"];

  if (point <= 5000) {
    $(".member-tier img").attr("src", tier["bronze"]["img"]);
    $(".progress-bar").attr("style", "width: calc(1/50*" + point + "%)");
    $(".progress-bar").html((1 / 50) * +point + "%");
    $(".pro-text ul .min").html("0" + " p");
    $(".pro-text ul .max").html("5000" + " p");
    $(".info-foot span").html(point);
    $(".minus span").html(5001 - point);
  } else if (point <= 10000) {
    $(".member-tier img").attr("src", tier["silver"]["img"]);
    $(".progress-bar").attr(
      "style",
      "width: calc(1/50*" + (point - 5000) + "%)"
    );
    $(".progress-bar").html((1 / 50) * +(point - 5000) + "%");
    $(".pro-text ul .min").html("5001" + " p");
    $(".pro-text ul .max").html("10000" + " p");
    $(".info-foot span").html(point);
    $(".minus span").html(10001 - point);
  } else if (point <= 15000) {
    $(".member-tier img").attr("src", tier["gold"]["img"]);
    $(".progress-bar").attr(
      "style",
      "width: calc(1/50*" + (point - 10000) + "%)"
    );
    $(".progress-bar").html((1 / 50) * +(point - 10000) + "%");
    $(".pro-text ul .min").html("10001" + " p");
    $(".pro-text ul .max").html("15000" + " p");
    $(".info-foot span").html(point);
    $(".minus span").html(15001 - point);
  } else if (point <= 20000) {
    $(".member-tier img").attr("src", tier["platinum"]["img"]);
    $(".progress-bar").attr(
      "style",
      "width: calc(1/50*" + (point - 15000) + "%)"
    );
    $(".progress-bar").html((1 / 50) * +(point - 15000) + "%");
    $(".pro-text ul .min").html("15001" + " p");
    $(".pro-text ul .max").html("20000" + " p");
    $(".info-foot span").html(point);
    $(".minus span").html(20001 - point);
  } else if (point > 20000) {
    $(".member-tier img").attr("src", tier["diamond"]["img"]);
    $(".progress-bar").attr(
      "style",
      "width: calc(1/50*" + (point - 20000) + "%)"
    );
    $(".progress-bar").html((1 / 50) * +(point - 20000) + "%");
    $(".pro-text ul .min").html("20001" + " p");
    $(".pro-text ul .max").html("???" + " p");
    $(".info-foot span").html(point);
    $(".minus").html("?????? ???????????????.");
    $(".minus span").css("display", "none");
  }

  $(".nav > ul > li > a").click(function () {
    var d = $(this).next("ul").css("display");

    if (d == "none") {
      $(".nav>ul>li>ul").stop().slideUp();
      $(this).next("ul").stop().slideDown();
    } else {
      $(this).next("ul").stop().slideUp();
    }

    return false;
  });
});
