$(document).ready(function(){
    init();
    //发送通知
    function sendInfo(){
        var recipient = $("#recipient").val().toUpperCase();
        var info = $("#info").val();
        var title = $("#title").val();
        if(recipient == '' || info == ''){
            alert('信息不完整');
        }else if(recipient!='T'&&recipient!='S'){
            alert("接收方格式错误~请检查后重新填写。");
        }else {
            $.ajax({
                url: 'php/sendInfo.php',
                type: 'POST',
                data: {recipient:recipient,
                        info:info,
                        title:title},
                success:function(data){
                    if (data.trim() == 1) {
                        alert("发送成功");
                        $("#recipient").val('');
                        $("#info").val('');
                        $("#title").val('');
                    }
                }
            })
        }
        
    }
    //按钮动态效果
    $("#subInfo").on('click', function(event) {
        sendInfo();
    });
    $("#admin-tea-icon").on('click', function(event) {
        $("#admin-tea-select").slideToggle();
        $("#admin-stu-select").slideUp(0.5);
        $("#per-select").slideUp(0.5);

    });
    $("#admin-stu-icon").on('click', function(event) {
        $("#admin-stu-select").slideToggle();
        $("#admin-tea-select").slideUp(0.5);
        $("#per-select").slideUp(0.5);
    });
    $("#per-icon").on('click', function(event) {
        $("#per-select").slideToggle();
        $("#admin-tea-select").slideUp(0.5);
        $("#admin-stu-select").slideUp(0.5);
    });
    //初始化
    function init(){
        getAllTeaMessage();
        getAllStuMessage();
        getSureStuMessage();
        getUnsureStuMessage();
        getWaitStuMessage();
        getPerMessage();
        getWaitTeaMessage();
    }
    //获得所有老师信息
    function getAllTeaMessage(){
       $.getJSON("php/admin.php", function(json){
            if(json.teachers.length>0){
                $("#admin-tea-view tbody").empty();
                $.each(json.teachers, function(){
                    var name="<td>"+this['name']+"</td>";
                    var id = "<td>"+this['id']+"</td>";
                    var position = "<td>"+this['position']+"</td>";
                    var direction = "<td>"+this['direction']+"</td>";
                    var phone = "<td>"+this['phone']+"</td>";
                    var info = "<tr>" +id+name+position+direction+phone+"</tr>";
                    $("#admin-tea-view tbody").append(info);
                });
            }
        });
    }
    //等待确定的老师
    function getWaitTeaMessage(){
       $.getJSON("php/admin.php", function(json){
            if(json.students.length>0){
                $("#admin-tea-wait tbody").empty();
                $.each(json.students, function(){
                    if(this['state']=="待定"){                    
                        var name="<td>"+this['name']+"</td>";
                        var id1 = "<td>"+this['id']+"</td>";
                        var id2 = "<td>"+this['tutorId']+"</td>";
                        var info = "<tr>" +id1+name+id2+"</tr>";
                        $("#admin-tea-wait tbody").append(info);
                }
                });
            }
        });
    }
    //所有学生信息
    function getAllStuMessage(){
       $.getJSON("php/admin.php", function(json){
            if(json.students.length>0){
                $("#admin-stu-view tbody").empty();
                $.each(json.students, function(){
                    var name="<td>"+this['name']+"</td>";
                    var id = "<td>"+this['id']+"</td>";
                    var sex = "<td>"+this['sex']+"</td>";
                    var major = "<td>"+this['major']+"</td>";
                    var classId = "<td>"+this['classId']+"</td>";
                    var phone = "<td>"+this['phone']+"</td>";
                    var info = "<tr>" +id+name+sex+major+classId+phone+"</tr>";
                    $("#admin-stu-view tbody").append(info);
                });
            }
        });
    }
    //选定学生信息
    function getSureStuMessage(){
       $.getJSON("php/admin.php", function(json){
            if(json.students.length>0){
                $("#admin-stu-sure-view tbody").empty();
                $.each(json.students, function(){
                    if(this['state']=="选定"){
                        var name="<td>"+this['name']+"</td>";
                        var id = "<td>"+this['id']+"</td>";
                        var sex = "<td>"+this['sex']+"</td>";
                        var major = "<td>"+this['major']+"</td>";
                        var classId = "<td>"+this['classId']+"</td>";
                        var phone = "<td>"+this['phone']+"</td>";
                        var state = "<td>"+this['state']+"</td>";
                        var info = "<tr>" +id+name+sex+major+classId+phone+state+"</tr>";
                        $("#admin-stu-sure-view tbody").append(info);
                    }
                    
                });
            }
        });
    }
    //待定学生
    function getWaitStuMessage(){
       $.getJSON("php/admin.php", function(json){
            if(json.students.length>0){
                $("#admin-stu-wait-view tbody").empty();
                $.each(json.students, function(){
                    if(this['state']=="待定"){
                        var name="<td>"+this['name']+"</td>";
                        var id = "<td>"+this['id']+"</td>";
                        var sex = "<td>"+this['sex']+"</td>";
                        var state = "<td>"+this['state']+"</td>";
                        var classId = "<td>"+this['classId']+"</td>";
                        var phone = "<td>"+this['phone']+"</td>";
                        var info = "<tr>" +id+name+sex+state+classId+phone+state+"</tr>";
                        $("#admin-stu-wait-view tbody").append(info);
                    }
                    
                });
            }
        });
    }
    //未选学生
    function getUnsureStuMessage(){
       $.getJSON("php/admin.php", function(json){
            if(json.students.length>0){
                $("#admin-stu-view-unsure tbody").empty();
                $.each(json.students, function(){
                    if(this['state']=="未选"){
                        var name="<td>"+this['name']+"</td>";
                        var id = "<td>"+this['id']+"</td>";
                        var sex = "<td>"+this['sex']+"</td>";
                        var state = "<td>"+this['state']+"</td>";
                        var classId = "<td>"+this['classId']+"</td>";
                        var phone = "<td>"+this['phone']+"</td>";
                        var info = "<tr>" +id+name+sex+state+classId+phone+state+"</tr>";
                        $("#admin-stu-unsure-view tbody").append(info);
                    }
                    
                });
            }
        });
    }
    //个人信息
    function getPerMessage(){
       $.getJSON("php/admin.php", function(json){
            if(json.admins.length>0){
                $.each(json.admins, function(index){//每行
                    $("#perMessage dd").eq(0).html(this["id"]);
                    $("#perMessage dd").eq(1).html(this["name"]);
                    $("#bigPhoto").attr('src',"image/" + this["pic"]);
                    $("#smallPhoto").attr('src',"image/" + this["pic"]);
                    $("#change-img").attr('src',"image/" + this["pic"]);
                    $("#nowPers").val(this["id"]);
                });
            }
        });
    }
});