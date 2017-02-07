// JavaScript Document
$('.ddw').val(0);
$('.ddw2').val(0);
setTimeout(function(){
$('.num').eq(0).find('p').stop().animate({'top':'50%'},500)
	},500);
	
$(function(){
$('.num_box').mousewheel(function(event, delta) {
	var aaaa=$('.ddw2').val();
	if (aaaa == 1){
		return;	
	}
	qpgd(delta);
});
});
function qpgd(a){
	var z =$('.ddw').val();
    b = parseInt(z);
	c = $('.num').length;
if(a<0){
	if(-b==c-1){
		return;
	}
	b-=1;
	$('.ddw2').val(1);
	}else if(a>0){
		if(-b==0){
			return;
	}
	b+=1;
	$('.ddw2').val(1);
	}
if(-b==0){
// $('.num').eq(0).find('.zhong1').removeClass('zhong');
// $('.num').eq(0).find('.shang1').removeClass('shang');
// $('.num').eq(0).find('.xia1').removeClass('xia');
// $('.num').eq(0).find('.pic1').removeClass('pic');
// $('.num').eq(0).find('.upa1').removeClass('upa');
// $('.num').eq(0).find('.centrea1').removeClass('centrea');
// $('.num').eq(0).find('.belowa1').removeClass('belowa');
setTimeout(function(){
// $('.num').eq(0).find('.zhong1').addClass('zhong');
// $('.num').eq(0).find('.shang1').addClass('shang');
// $('.num').eq(0).find('.xia1').addClass('xia');
// $('.num').eq(0).find('.pic1').addClass('pic');
// $('.num').eq(0).find('.upa1').addClass('upa');
// $('.num').eq(0).find('.centrea1').addClass('centrea');
// $('.num').eq(0).find('.belowa1').addClass('belowa');
},1600);
	}else if(-b==1){
$('.num').eq(1).find('.zhong1').removeClass('zhong');
$('.num').eq(1).find('.shang1').removeClass('shang');
$('.num').eq(1).find('.xia1').removeClass('xia');
$('.num').eq(1).find('.pic1').removeClass('pic');
$('.num').eq(1).find('.upa1').removeClass('upa');
$('.num').eq(1).find('.centrea1').removeClass('centrea');
$('.num').eq(1).find('.belowa1').removeClass('belowa');
setTimeout(function(){
$('.num').eq(1).find('.zhong1').addClass('zhong');
$('.num').eq(1).find('.shang1').addClass('shang');
$('.num').eq(1).find('.xia1').addClass('xia');
$('.num').eq(1).find('.pic1').addClass('pic');
$('.num').eq(1).find('.upa1').addClass('upa');
$('.num').eq(1).find('.centrea1').addClass('centrea');
$('.num').eq(1).find('.belowa1').addClass('belowa');
	},1600);
		}else if(-b==2){

$('.num').eq(2).find('.e11').removeClass('e1');
$('.num').eq(2).find('.e22').removeClass('e2');
$('.num').eq(2).find('.e33').removeClass('e3');
$('.num').eq(2).find('.ee').removeClass('e');
$('.num').eq(2).find('.f1').removeClass('f');
$('.num').eq(2).find('.g1').removeClass('g');
$('.num').eq(2).find('.ac').removeClass('a');
$('.num').eq(2).find('.bc').removeClass('b');
$('.num').eq(2).find('.cc').removeClass('c');
$('.num').eq(2).find('.dc').removeClass('d');
$('.num').eq(2).find('.hh').removeClass('h');
setTimeout(function(){
$('.num').eq(2).find('.e11').addClass('e1');
$('.num').eq(2).find('.e22').addClass('e2');
$('.num').eq(2).find('.e33').addClass('e3');
$('.num').eq(2).find('.ee').addClass('e');
$('.num').eq(2).find('.f1').addClass('f');
$('.num').eq(2).find('.g1').addClass('g');
$('.num').eq(2).find('.ac').addClass('a');
$('.num').eq(2).find('.bc').addClass('b');
$('.num').eq(2).find('.cc').addClass('c');
$('.num').eq(2).find('.dc').addClass('d');
$('.num').eq(2).find('.hh').addClass('h');
	},1600);
		}else if(-b==3){
$('.num').eq(2).find('p').animate({'top':'0'},500);
$('.num').eq(4).find('p').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(3).find('p').animate({'top':'50%'},500);
	},1600);
		}
		else if(-b==4){
$('.num').eq(3).find('p').animate({'top':'0'},500);
$('.num').eq(5).find('p').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(4).find('p').animate({'top':'50%'},500);
	},1600);
		}
		else if(-b==5){
$('.num').eq(4).find('p').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(5).find('p').animate({'top':'50%'},500);
	},1600);
		}	
		
$('.ddw').val(b);
$('.fixed_r li').eq(-b).addClass('on').siblings('li').removeClass('on');
var single_hh = $(window).height();
click_hh =-single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
setTimeout(function(){
	$('.ddw2').val(0);
	},1400);
}
	$('.fixed_r li').eq(0).addClass('on');
	$('.fixed_r li').click(function(){
		var b = $(this).index();
		$(this).addClass('on').siblings('li').removeClass('on');
		$('.ddw').val(-b);


/*---------------------*/
if(b==0){
$('.num').eq(1).find('p').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(0).find('p').animate({'top':'50%'},500);
	},1600);
	}else if(b==1){
$('.num').eq(0).find('p').animate({'top':'0'},500);
$('.num').eq(2).find('p').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(1).find('p').animate({'top':'50%'},500);
	},1600);
		}else if(b==2){
$('.num').eq(1).find('p').animate({'top':'0'},500);
$('.num').eq(3).find('p').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(2).find('p').animate({'top':'50%'},500);
	},1600);
		}else if(b==3){
$('.num').eq(2).find('p').animate({'top':'0'},500);
$('.num').eq(4).find('p').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(3).find('p').animate({'top':'50%'},500);
	},1600);
		}
		else if(b==4){
$('.num').eq(3).find('p').animate({'top':'0'},500);
$('.num').eq(5).find('p').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(4).find('p').animate({'top':'50%'},500);
	},1600);
		}
		else if(-b==5){
$('.num').eq(4).find('p').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(5).find('p').animate({'top':'50%'},500);
	},1600);
		}	
/*---------------------*/

var single_hh = $(window).height();
click_hh =single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
		})
function quanp(){
var single_hh = $(window).height();
var single_ww = $(window).width();
$('.num').height(single_hh);
$('.num li').width(single_ww);
}
quanp();
$(window).resize(function(){
	if (typeof indexSlides != 'undefined' && indexSlides.reformat) 
		indexSlides.reformat();
		quanp();
});