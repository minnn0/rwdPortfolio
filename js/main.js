(function() {
    var sc = 0; // 스크롤값 초기화

    // 부드러운 스크롤
    $("html").easeScroll();

    // Home 타이핑 애니메이션
    var content = 'Welcome to my portfolio :)'
    var txt = document.querySelector('.typing_txt')
    var idx = 0;
    
    var typing = setInterval(function() {
        txt.textContent += content[idx++];
        if(idx === content.length) {
            clearInterval(typing);
        }
    }, 250)

    // header scroll 
    var gnbLi = $('.gnb li');
    var header = $('#header');
    var posArr = [];
    var gnbIdx = 0;

    // 섹션 위치값
    $(window).resize(function() {
        $('section').each(function(i) {
            posArr[i] = $(this).offset().top;
        });
    }).trigger('resize');

    // gnb li 클릭 시 섹션 이동
    gnbLi.on('click', function(e) {
        e.preventDefault();

        gnbIdx = $(this).index();

        $(this).eq(gnbIdx).addClass('on').siblings().removeClass('on');
        $('html, body').animate({
            scrollTop: posArr[gnbIdx] + 50
        }, 400);
    });

    // 해당 섹션마다 header, .gnb li 스타일 변경
    $(window).on('scroll', function() {
        sc = $(this).scrollTop();

        if(sc >= posArr[1]) {
            header.addClass('on');
        } else {
            header.removeClass('on');
        }

        for(var i=0; i<3; i++) {
            if(sc >= posArr[i]) {
                gnbLi.eq(i).addClass('on').siblings().removeClass('on');
            }
        }
    }).trigger('scroll');

})();