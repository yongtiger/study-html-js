
$(document).ready(function(){

	// 第一个li标签去掉边框
	$('#select_btn li:first').css('border','none');
	if ($('#zSlider').length) {
		zSlider();

		// img鼠标悬停使当前图片隐藏
		$('#h_sns').find('img').hover(function(){
			$(this).fadeTo(200,0.5);
		}, function(){
			$(this).fadeTo(100,1);
		});

	}


	function zSlider(ID, delay){
		var ID=ID?ID:'#zSlider';
		var delay=delay?delay:5000;

		// 找到图片的个数
		var currentEQ=0, picnum=$('#picshow_img li').size(), autoScrollFUN;
		

		// 找到第一个元素添加current标签，并显示图片和介绍
		$('#select_btn li').eq(currentEQ).addClass('current');
		$('#picshow_img li').eq(currentEQ).show();
		$('#picshow_tx li').eq(currentEQ).show();


		autoScrollFUN=setTimeout(autoScroll, delay);

		// 自动翻页
		function autoScroll(){
			clearTimeout(autoScrollFUN);
			currentEQ++;

			// 大于图片个数就返回0
			if (currentEQ>picnum-1) currentEQ=0;
			$('#select_btn li').removeClass('current');		// 删除li标签的class
			$('#picshow_img li').hide();	// 把li图片隐藏
			$('#picshow_tx li').hide().eq(currentEQ).slideDown(400);// 找到li第一个元素隐藏

			// 找到第一个元素添加current标签，并显示图片和介绍
			$('#select_btn li').eq(currentEQ).addClass('current');
			$('#picshow_img li').eq(currentEQ).show();


			autoScrollFUN = setTimeout(autoScroll, delay);
		}

		// 鼠标悬停清除自动翻页时间，移除鼠标添加自动翻页
		$('#picshow').hover(function(){
			clearTimeout(autoScrollFUN);
		}, function(){
			autoScrollFUN = setTimeout(autoScroll, delay);
		});



		// 鼠标悬停缩略图更换大图片
		$('#select_btn li').hover(function(){
			var picEQ=$('#select_btn li').index($(this));
			if (picEQ==currentEQ) return false;
			currentEQ = picEQ;
			$('#select_btn li').removeClass('current');
			$('#picshow_img li').hide();
			$('#picshow_tx li').hide().eq(currentEQ).slideDown(100);
			$('#select_btn li').eq(currentEQ).addClass('current');
			$('#picshow_img li').eq(currentEQ).show();
			return false;
		});
	};
})