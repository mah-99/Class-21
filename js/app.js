$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
    $("input").focus(function(){
        $(this).css("background-color", "yellow");
    });
      $("input").blur(function(){
        $(this).css("background-color", "green");
    });
    $('#btn').on('click',function(){
        $('#element').toggle(1000);
    })
    $("#button-1").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(4000);
    });
    $("#button-2").click(function(){
        $("#div4").fadeOut();
        $("#div5").fadeOut("slow");
        $("#div6").fadeOut(4000);
    });
    $("#button-3").click(function(){
        $("#div7").fadeToggle();
        $("#div8").fadeToggle("slow");
        $("#div9").fadeToggle(4000);
    });
    $("#button-4").click(function(){
        $("#div10").fadeTo("slow", 0.15);
        $("#div11").fadeTo("slow", 0.4);
        $("#div12").fadeTo("slow", 0.7);
    });
    $("#flip-1").click(function(){
        $("#panel-1").slideDown("slow");
    });
    $("#flip-2").click(function(){
        $("#panel-2").slideUp("slow");
    });
    $("#flip-3").click(function(){
        $("#panel-3").slideToggle("slow");
    });
    $("#button-5").click(function(){
        var div = $("section");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
    $("#flip-4").click(function(){
        $("#panel-4").slideDown(4000);
    });
      $("#stop").click(function(){
        $("#panel-4").stop();
    });
    $("#button-6").click(function(){
        $("#p1").css("color", "orange")
        .slideUp(2000)
        .slideDown(2000);
    });
    $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
    });
      $("#btn2").click(function(){
        alert("HTML: " + $("#test").html());
    });
    $("#button-7").click(function(){
        alert("Value: " + $("#test").val());
    });
    $("#btn5").click(function(){
        $("img").before("<b>Add Text Before</b>");
    });
      $("#btn6").click(function(){
        $("img").after("<i>Add Text After</i>");
    });
    $("#button-8").click(function(){
        $("#div2").remove();
    });
})
