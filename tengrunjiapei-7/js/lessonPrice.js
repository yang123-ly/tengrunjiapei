$(function () {
    //ajax联调后台数据
    ajax(title,"http://www.qhdlink-student.top/student/coacha.php","json","username=tyw&userpwd=12345678&userclass=61&type=2","post");
    ajax(title2,"http://www.qhdlink-student.top/student/coacha.php","json","username=tyw&userpwd=12345678&userclass=61&type=2","post");
    td();
})
function ajax(fn,url,type,data,method){
    $.ajax({
        url: url,
        dataType: type,
        data: data,
        type: method,
        success: function (msg) {
            console.log(msg);
            //返回的数据对象
            fn(msg);
        }
    })
}
function title(msg){
    for (var i = 0; i < Object.keys(msg).length; i++) {
        if (i % 3 == 0) {
            var ul = "<ul></ul>";
            $("#contenter").append(ul);
            var li = "<li><div class=left><img src=http://www.qhdlink-student.top/" + msg[i].path_coach + "></div><div class=right><h4>"+msg[i].name_coach+"</h4><p>精英班/"+msg[i].dage_coach+"~"+msg[i].tage_coach+"</p><a href=#>详细了解>></a><button>网上报名</button></div></li>";
            $(".right_nav>div>ul:last-child").append(li);
        } else {
            var li = "<li><div class=left><img src=http://www.qhdlink-student.top/" + msg[i].path_coach + "></div><div class=right><h4>"+msg[i].name_coach+"</h4><p>精英班/"+msg[i].dage_coach+"~"+msg[i].tage_coach+"</p><a href=#>详细了解>></a><button>网上报名</button></div></li>";
            $(".right_nav>div>ul:last-child").append(li);
        }
    }
    $(".right_nav>div>ul:first-child").attr("id", "content");
    console.log($("#contenter>ul").length);
    for (var i = 1; i <= $("#contenter>ul").length; i++) {
        var a = "<span>" + i + "</span>";
        $("#num").append(a);
    }
    $("#num span:first-child").attr("class", "acolor");
    $("#num span").click(function () {
        console.log($(this).index());
        $(this).attr("class", "acolor").siblings("span").removeAttr("class");
        var index = $(this).index();
        $(".right_nav>div>ul").eq(index).attr("id", "content").siblings("ul").removeAttr("id");
        if ($("#num span:first-child").attr("class") || $("#num span:last-child").attr("class")) {
            if ($("#num span:first-child").attr("class")) {
                $(".paging>span:first-child").css("cursor", "no-drop").next("span").css("cursor", "no-drop");
                $(".paging>span:last-child").css("cursor", "pointer").prev("span").css("cursor", "pointer");
            } else {
                $(".paging>span:last-child").css("cursor", "no-drop").prev("span").css("cursor", "no-drop");
                $(".paging>span:first-child").css("cursor", "pointer").next("span").css("cursor", "pointer");
            }
        } else {
            $(".paging>span:last-child").css("cursor", "pointer").prev("span").css("cursor", "pointer");
            $(".paging>span:first-child").css("cursor", "pointer").next("span").css("cursor", "pointer");
        }
    })
}

function title2(msg){
    console.log(msg);
    for(var i=0;i<Object.keys(msg).length;i++){
        var li="<li><div class=left><img src=http://www.qhdlink-student.top/" + msg[i].path_coach + "></div><div class=right><h4>"+msg[i].name_coach+"</h4><p>精英班/"+msg[i].dage_coach+"~"+msg[i].tage_coach+"</p><a href=#>详细了解&gt;&gt;</a><button>网上报名</button></div></li>";
        $("#moblie_content").append(li);
    }
}

function td(){
    var canvas2=$(".tds");
    console.log(canvas2);
    for(var i=0;i<canvas2.length;i++){
        var ctx2=canvas2[i].getContext("2d");
        ctx2.beginPath();
        ctx2.moveTo(0,0);
        ctx2.lineTo(300,150);
        ctx2.closePath();
        ctx2.fillStyle="#f00";
        ctx2.lineCap="round";
        ctx2.fill();
        ctx2.stroke();
    }
     
}