/**
 * 
 */

//알림 권한 요청
function getNotificationPermission() {
    // 브라우저 지원 여부 체크
    if (!("Notification" in window)) {
        alert("데스크톱 알림을 지원하지 않는 브라우저입니다.");
    }
    // 데스크탑 알림 권한 요청
    Notification.requestPermission(function (result) {
        // 권한 거절
        if(result == 'denied') {
            alert('알림을 차단하셨습니다.\n브라우저의 사이트 설정에서 변경하실 수 있습니다.');
            return false;
        }
    });
};

getNotificationPermission();

//setting timer
var time = 0;
var min = 0;
var sec = 0;
var flag = true;
var timer;

$('#start_btn').click(function(){
	if(flag) {
		time = 1499;
	}else{
		time = 299;
	}
	
	$(this).attr('disabled', true);
	
	if(flag) {
		$(this).text('Rest..');
		$(this).attr('class', 'btn btn-success btn-lg')
	}else {
		$(this).text('Start!');
		$(this).attr('class', 'btn btn-primary btn-lg')
	}
	
	timer = setInterval(function(){
		min = parseInt(time / 60);
		sec = parseInt(time % 60);
		
		if(min / 10 < 1){
			min = "0" + min;
		}
		if(sec / 10 < 1){
			sec = "0" + sec;
		}
		$('#timer').text(min + ":" + sec);
		
		time--;
		
		if(time < 0){
			$('#start_btn').attr('disabled', false);
			if(flag){
				clearInterval(timer);
				flag = false;
				$('#timer').text("05:00");
				new Notification("집중 끝!", {body:'집중하는 시간이 종료되었습니다.'});
			}else{
				clearInterval(timer);
				flag = true;
				$('#timer').text("25:00");
				new Notification("휴식 종료", {body:'휴식 시간이 종료되었습니다.'});
			}
			return;
		}
	}, 1000);
});


//과제 추가하기
var work_num = 0;

$('#add_work_btn').click(function(){
	var input_text = "";
	$('#work_ul').append(
			'<li class="list-group-item">' + 
				'<div class="input-group">' +
					'<span class="input-group-addon">' +
						'<input type="radio" name="work_radio" value="' + work_num + '">'+
					'</span>'+
					'<input type="text" id="work_text_' + work_num + '" class="form-control" placeholder="수행할 과제를 입력하세요">'+
					'<span class="input-group-btn">'+
						'<button id="work_complete_btn_' + work_num + '" class="btn btn-info" type="button">완료</button>'+
						'<button id="work_delete_btn_' + work_num + '" class="btn btn-danger" type="button">삭제</button>'+
					'</span>'+
				'</div>'+
			'</li>'
	);
	work_num++;
});


//과제 라디오버튼 선택 시 이벤트
$(document).on("click","input[name=work_radio]",function(){ 
	var clicked_num = $("input[name=work_radio]:checked").val();
	
	var work_text = $("#work_text_" + clicked_num).val();
	
	$("#selected_work").text(work_text);
});