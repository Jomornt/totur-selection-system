/*----------------------------------- 首页轮播----------------------------------*/
jQuery(function($){
    $('#home').slideBox({
        duration : 0.3,//滚动持续时间，单位：秒
        easing : 'linear',//swing,linear//滚动特效
        delay : 2,//滚动延迟时间，单位：秒
        hideClickBar : false,//不自动隐藏点选按键
        clickBarRadius : 10
    });
});
//获取信息
function getInfo(){
    $.getJSON("php/getInfo.php", function(json){
        $("#info-get tbody").empty();
        if(json.info.length>0){
            $.each(json.info, function(){//每行
                var id="<td>"+this['id']+"</td>";
                var title = "<td>"+this['title']+"</td>";
                var time = "<td>"+this['time']+"</td>";
                var more = "<td><a href='#' data-toggle='modal' data-target='#moreInfo'>详情</a></td>";
                var info = "<tr>" +id+title+time +more+"</tr>";
                $("#info-get tbody").append(info);
            });
            $('td a').on('click', function(event) {
                var id = $(this).parent().parent().find('td').eq(0).html();
                $.each(json.info, function(){//每行
                    if(this['id'] == id){
                        $("#moreInfo h4").html(this['title']);
                        $("#moreInfo .modal-body").html(this['info']);
                    }
                });
            });
        }else{
            $("#info-get tbody").append("'<h1>暂时没有新通知</h1>'");
        }
    });
}
$(document).ready(function() {

/*----------------------------------- 密码修改----------------------------------*/
    $("#pw-change-icon").on('click',function(event) {
        event.preventDefault();
        //每次点击清空
        $("#oldPW").val();
        $("#newPW1").val();
        $("#newPW2").val();
    });
	var canChangePW = false;
    $("#newPW1").blur(function(){  
        var newPW1=$("#newPW1").val();
        var newPW2=$("#newPW2").val();
        if(newPW1.length<6||newPW1.length>18){
            $("#word-newPW1").html("");                               
            $("#word-newPW1").html("密码长度不符合");  
            $("#word-newPW1").css("color","red");
            canChangePW = false;   
        }else {
            $("#word-newPW1").html("");                               
            $("#word-newPW1").html("通过");  
            $("#word-newPW1").css("color","green");
            canChangePW = true;   
        }
        if(newPW1 != newPW2){
            $("#word-newPW2").html("");                               
            $("#word-newPW2").html("两次密码不同");  
            $("#word-newPW2").css("color","red");
            canChangePW = false;   
        }else {
            $("#word-newPW2").html("");                               
            $("#word-newPW2").html("通过");  
            $("#word-newPW2").css("color","green");
            canChangePW = true;   
        } 
    });
    $("#newPW2").blur(function(){ 
        var newPW1=$("#newPW1").val(); 
        var newPW2=$("#newPW2").val();
        if(newPW1 != newPW2){
            $("#word-newPW2").html("");                               
            $("#word-newPW2").html("两次密码不同");  
            $("#word-newPW2").css("color","red");
            canChangePW = false;   
        }else {
            $("#word-newPW2").html("");                               
            $("#word-newPW2").html("通过");  
            $("#word-newPW2").css("color","green");
            canChangePW = true;   
        }
        if(newPW2 == ""||newPW2==null)
            $("#word-newPW2").html("");   

    });
    $("#subPW").click(function(event) {
        var newPW = $("#newPW1").val();
        var oldPW = $("#oldPW").val();
        if(canChangePW){
            $.ajax({ 
            type:"POST",
            url:"php/changePW.php",  
            data:{newPW:newPW,
            	oldPW:oldPW},                   
            success:function(data){
                if(data.trim() == 1){ 
                    alert("密码修改成功！请重新登陆！");
                    window.location.href="index.html"; 
                }else{    
                    alert("原密码错误！");   
                } 
            }
        });
        }else{
            alert("请确保新密码正确！");
        }
    });
    $()
    //得到行对象  
    function getRowObj(obj)  
    {  
        var i = 0;  
        while(obj.tagName.toLowerCase() != "tr"){  
            obj = obj.parentNode;  
            if(obj.tagName.toLowerCase() == "table")
                return null;  
        }  
        return obj;  
    }  
    //删除行  
    function delRow(obj){  
        var tr = this.getRowObj(obj);  
        if(tr != null){  
            tr.parentNode.removeChild(tr);  
        }else{  
            throw new Error("the given object is not contained by the table");  
        }  
    }
});

