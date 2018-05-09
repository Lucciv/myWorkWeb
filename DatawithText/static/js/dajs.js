//轮播
$('#d_tab29').DB_rotateRollingBanner({
	key:"c37080",            
	moveSpeed:200,           
	autoRollingTime:1000      
})

//小轮播
jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
jQuery(".txtScroll-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"top",autoPlay:true,vis:5});
//切换  动态新闻  文艺评论
function setTab03Syn ( i )
{
	selectTab03Syn(i);
}

function selectTab03Syn ( i )
{
	switch(i){
		case 1:
		document.getElementById("news_more").style.display="block";
		document.getElementById("comment_more").style.display="none";
		document.getElementById("news").style.display="block";
		document.getElementById("comment").style.display="none";
		document.getElementById("font1").style.color="#ffffff";
		document.getElementById("font2").style.color="#a0a0a0";
		$("#span1").css("background","url(images/index_21.png) no-repeat");
		$("#span2").css("background","url(images/index_21_2.png) no-repeat");
		break;
		case 2:
		document.getElementById("news_more").style.display="none";
		document.getElementById("comment_more").style.display="block";
		document.getElementById("news").style.display="none";
		document.getElementById("comment").style.display="block";
		document.getElementById("font1").style.color="#a0a0a0";
		document.getElementById("font2").style.color="#ffffff";
		$("#span2").css("background","url(images/index_21.png) no-repeat");
		$("#span1").css("background","url(images/index_21_2.png) no-repeat");
		break;
	}
}

//组织机构  鼠标经过效果
function organ(m,n,obj){
	for(var i=1;i<=n;i++){
		$(".org_"+i).hide();
	}
	$(".org_"+m).show();
	$(obj).find("b").addClass("undis2");
	$(obj).addClass("on");
	$(obj).siblings().removeClass("on");
	$(obj).siblings().find("b").removeClass("undis2");
}
//新闻服务中心  右侧鼠标经过效果
function link_bg_change(obj){
	$(obj).find("b").removeClass("b1").addClass("b2");
	$(obj).addClass("on");
	$(obj).siblings().removeClass("on");
	$(obj).siblings().find("b").addClass("b1").removeClass("b2");
}

function cursor_num(m,n,obj){
//alert(1111)
	for(var i=1;i<=n;i++){
		$(".cursor_"+i).hide();
	}
	$(".cursor_"+m).show();
}

function cursor_num2(m,n,obj){
//alert(1111)
	for(var i=1;i<=n;i++){
		$(".cursor_"+i).hide();
	}
}
 
//首页月份选择
function month_choice(m){
	if(m==1){
		$(".August").show();
		$(".september").hide();
	}else if(m==2){
		$(".August").hide();
		$(".september").show();
	}
}

//首页  鼠标经过，出现演出信息效果,n=1代表是8月,n=2代表9月
function per_msg(m,obj,n){
	if(n==1){
		var len1=$(".August li").length;
		for(i=1;i<=len1;i++){
			$(".August li .msg").hide();
		}
	}else if(n==2){
		var len2=$(".september li").length;
//		alert(len2);
		for(i=1;i<=len2;i++){
			$(".september li .msg").hide();
		}
	}
	var index=$(obj).parent().index()+1;
	
	$(".msg_"+m).show();
}

function per_msg2(m,obj,n){
	var index=$(obj).parent().index()+1;
	$(".msg_"+m).hide();
}

//日历
function img_tab(m,n){
	for(var i=1;i<=n;i++){
		$(".img_0"+i).hide();
	}
	$(".img_0"+m).css("display","block");
}
$("#month_select").click(function(){	$(".select_month_box").slideDown();})$(".select_month_box li").click(function(){	var text=$(this).text();	$("#month_select").html(text);	$(this).parent().parent().slideUp();	var index=$(this).index()+1;	var len=$(".select_month_box li").length;	for(var i=1;i<=len;i++){		$(".table_con_0"+i).hide();	}	$(".table_con_0"+index).show();})
function con_mouseover(m,n,zong){	for(var j=8;j<=9;j++){		for(var i=1;i<=zong;i++){			$(".con_four_"+j+"_"+i).hide();		}	}		$(".con_four_"+n+"_"+m).show();}






