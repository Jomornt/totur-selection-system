$(document).ready(function(){
    init();
    // 实现按钮的动画效果
    $("#tea-icon").on('click', function(event) {
        $("#tea-select").slideToggle();
        $("#per-select").slideUp(0.5);
    });
    $("#per-icon").on('click', function(event) {
        $("#per-select").slideToggle();
        $("#tea-select").slideUp(0.5);
    });
    // 初始化
    function init(){
        getPerMessage();
        getAllTeaMessage();
    }
    // 获取所有老师信息
    function getAllTeaMessage(){
       $.getJSON("php/stu.php", function(json){
            if(json.teachers.length>0){
                $("#all-tea-view tbody").empty();
                $.each(json.teachers, function(){//每行
                    var name="<td>"+this['name']+"</td>";
                    var id = "<td>"+this['id']+"</td>";
                    var position = "<td>"+this['position']+"</td>";
                    var direction = "<td>"+this['direction']+"</td>";
                    var phone = "<td>"+this['phone']+"</td>";
                    var more = "<td><a href='#' data-toggle='modal' data-target='#sureTea'>选择</a></td>";

                    var info = "<tr>" +id+name+position+direction+more + "</tr>";
                    $("#all-tea-view tbody").append(info);
                });
                $('td a').on('click', function(event) {
                    var sureID = $(this).parent().parent().find('td').eq(0).html();
                    var sureName = $(this).parent().parent().find('td').eq(1).html();
                    // 获取本条记录的名字和号码
                    $("#sureTea span").eq(0).html(" "+sureName +" ").css("font-style","italic");
                    $("#sureTea span").eq(1).html("("+sureID+") ").css("font-style","italic");
                });
                $('#sureTeaBtn').on('click', function(event) {
                    var tutorID = $("#sureTea span").eq(1).html();
                    $.ajax({ 
                        type:"POST",
                        url:"php/chooseTea.php",  
                        data:{tutorID:tutorID},                   
                        success:function(data){
                            if(data.trim() == 1){
                                alert("选择成功");
                                init();
                            }
                            else{
                                alert("你已选择导师！请勿重复操作！");
                            }
                        }
                    });
                });
            }
        });
    }
    // 获取老师信息
    function getMyTeaMessage(tutorId,state){
        $.getJSON("php/stu.php", function(json){
            if(state=="选定"){
                $.each(json.teachers, function(index){//每行   
                    if(tutorId == this['id']&&state=="选定"){   
                        $("#mytea-view dd").eq(0).html(this["id"]);
                        $("#mytea-view dd").eq(1).html(this["name"]);
                        $("#mytea-view dd").eq(2).html(this["sex"]);
                        $("#mytea-view dd").eq(3).html(this["position"]);
                        $("#mytea-view dd").eq(4).html(this["direction"]);
                        $("#mytea-view dd").eq(5).html(this["phone"]);
                        $("#bigPhoto-tea").attr('src',"image/" + this["pic"]);
                    }
                });
            }else{
                $("#mytea-view dl").empty();
                $("#mytea-view dl").append("<h1>呵！你还没有导师呐！<h1>");
                $("#bigPhoto-tea").attr('src',"case/guilian.jpg");
            }
        });
    }
    // 获取个人信息
    function getPerMessage(){
       $.getJSON("php/stu.php", function(json){
            if(json.students.length>0){
                $.each(json.students, function(index){//每行
                    $("#perMessage dd").eq(0).html(this["id"]);
                    $("#perMessage dd").eq(1).html(this["name"]);
                    $("#perMessage dd").eq(2).html(this["major"]);
                    $("#perMessage dd").eq(3).html(this["classId"]);
                    $("#perMessage dd").eq(4).html(this["phone"]);
                    $("#perMessage dd").eq(5).html(this["state"]);
                    $("#bigPhoto").attr('src',"image/" + this["pic"]);
                    $("#smallPhoto").attr('src',"image/" + this["pic"]);
                    $("#change-img").attr('src',"image/" + this["pic"]);
                    $("#nowPers").val(this["id"]);
                    getMyTeaMessage(this["tutorId"],this["state"]);
                    getInfo();
                });
            }
        });
    }
});