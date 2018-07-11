$(document).ready(function(){
    init();
    //按钮动态效果
    $("#stu-icon").on('click', function(event) {
        $("#stu-select").slideToggle();
        $("#per-select").slideUp(0.5);
    });
    $("#per-icon").on('click', function(event) {
        $("#per-select").slideToggle();
        $("#stu-select").slideUp(0.5);
    });
    //确认学生选择的界面
    function getChooseMessage(){
       $.getJSON("php/tea.php", function(json){
        $("tbody").empty();
        $("tbody a").unbind();
            if(json.waitStu.length>0){
                $.each(json.waitStu, function(){//每行
                    var name="<td>"+this['name']+"</td>";
                    var id = "<td>"+this['id']+"</td>";
                    var sex = "<td>"+this['sex']+"</td>";
                    var major = "<td>"+this['major']+"</td>";
                    var classId = "<td>"+this['classId']+"</td>";
                    var phone = "<td>"+this['phone']+"</td>";
                    var more = "<td><a href='#' data-toggle='modal' data-target='#sureStu'>同意</a></td>";
                    var info = "<tr>" +id+name+sex+major+classId+more + "</tr>";
                    $("tbody").append(info);
                });
                $('td a').bind('click', function(event) {
                    var sureID = $(this).parent().parent().find('td').eq(0).html();
                    var sureName = $(this).parent().parent().find('td').eq(1).html();
                    $("#sureStu span").eq(0).html(" "+sureName +" ").css("font-style","italic");
                    $("#sureStu span").eq(1).html("("+sureID+") ").css("font-style","italic");
                    $('#sureStuBtn').on('click', function(event) {
                        var id = sureID;
                        $.ajax({ 
                            type:"POST",
                            url:"php/chooseStu.php",  
                            data:{id:id},                   
                            success:function(data){
                                if(data.trim() == 1){
                                    alert("成功结盟！！！");
                                    init();//刷新页面~O(∩_∩)O
                                }
                            }
                        });
                    });
                });

            }else{
                $("tbody").append("<p>呀！暂时没有新的选择通知~~<p>");
            }
        });
    }
    //我的学生的信息
    function getMyStuMessage(){
        $.getJSON("php/tea.php", function(json){
            $("#mystu-view").empty();
            if(json.students.length>0){
                $.each(json.students, function(index){//每行
                    $("#mystu-view").append(`
                            <fieldset>
                            <legend>`+this['name']+`</legend>
                            <div class="col-md-7">
                              <dl class="dl-horizontal">
                                <dt>学号：</dt>
                                <dd>`+this['name']+`</dd>
                                <dt>姓名：</dt>
                                <dd>`+this['id']+`</dd>
                                <dt>性别：</dt>
                                <dd>`+this['sex']+`</dd>
                                <dt>专业：</dt>
                                <dd>`+this['major']+`</dd>
                                <dt>班级：</dt>
                                <dd>`+this['classId']+`</dd>
                                <dt>联系电话：</dt>
                                <dd>`+this['phone']+`</dd>
                              </dl>
                            </div>
                            <div class="col-md-5">
                              <img src="image/`+this["pic"]+`" alt="学生照片" class="bigPhoto-stu">
                            </div>
                          </fieldset>
                          <hr>

                    `);

                });
            }else {
                
                $("#mystu-view").append("<h1>嗨呀！暂时还没有学生~~<h1>");
            }
        });
    }
    //个人信息
    function getPerMessage(){
       $.getJSON("php/tea.php", function(json){
            if(json.teacher.length>0){
                $.each(json.teacher, function(index){//每行
                    $("#perMessage dd").eq(0).html(this["id"]);
                    $("#perMessage dd").eq(1).html(this["name"]);
                    $("#perMessage dd").eq(2).html(this["sex"]);
                    $("#perMessage dd").eq(3).html(this["position"]);
                    $("#perMessage dd").eq(4).html(this["direction"]);
                    $("#perMessage dd").eq(5).html(this["phone"]);
                    $("#bigPhoto").attr('src',"image/" + this["pic"]);
                    $("#smallPhoto").attr('src',"image/" + this["pic"]);
                    $("#change-img").attr('src',"image/" + this["pic"]);
                    $("#nowPers").val(this["id"]);
                });
            }
        });
    }
    //初始化
    function init(){
        getChooseMessage();
        getMyStuMessage();
        getPerMessage();
        getInfo();
    }
});