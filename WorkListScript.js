// a 태그 튕김 제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


// menu open
$(function(){
    $('.menuOpen .openBox').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuOpen .menuWrap').removeClass('on');
    });
});

// splitting
$(function () {
    Splitting();
});

//header영역 스크롤 방향 이벤트
$(function () {
    var prevScrollTop = 0;
    document.addEventListener('scroll', function () {
        var nowScrollTop = $(window).scrollTop()

        if (nowScrollTop > prevScrollTop) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    })
});

// 04 scrolla js
$(function () {
    $('.animate').scrolla({moblie: true, once: false});
});

// svg 길이
$(function () {
    $('.svgAni')
        .find('#svgAni02')
        .each(function (i, path) {
            var length = path.getTotalLength();
            // alert(length);
        })
})

/*  each() 메서드는 object와 배열 모두 사용할 수 있는 반복함수, lenght 속성을 갖는 배열과 유사배열객체들의 index를 기
 * 준으로 첫번째 매개변수로 배열이나 객체를 받고, 두번째 매개 변수로 콜백함수 값을 인자로 받음.  
 */

// 06 con01 gsap 애니메이션
$(function(){
    gsap
        .timeline({
            scrollTrigger: {
                trigger: '.con01',
                start: 'top 80%',
                end: 'bottom bottom',
                scrub: 1,
                // markers:true
            }
        })
        .to('.wrap', {
            backgroundColor: '#fff',
            color: '#000',
            ease: 'none',
            duration: 5
        }, 0)
        .to('.svgAni path', {
            stroke: '#000',
            ease: 'none',
            duration: 5
        }, 0)
        .to('.scroll', {
            oppacity: '0',
            ease: 'none',
            duration: 5
        }, 0)
        .fromTo('.videoWrap video', {
            'clip-path': 'inset(60% 60% 60% 60% round 30%)'
        }, {
            'clip-path': 'inset(0% 0% 0% 0% round 0%)',
            ease: 'none',
            duration: 10
        }, 0)

    /* 07 con02 gspa animation*/
    // .con02 .title animation
    gsap
        .timeline({
            scrollTrigger: {
                trigger: '.con02',
                start: '0% 100%',
                end: '0% 20%',
                scrub: 1,
                // markers:true
            }
        })
       .fromTo('.con02 .title .a', { x: '-100%'}, { x: '0%', ease: 'none', duration:5}, 0) 
       .fromTo('.con02 .title .b', { x: '100%'}, { x: '0%', ease: 'none', duration:5}, 0)

    // 08 workList 배경색 변화
    gsap
        .timeline({
            scrollTrigger: {
                trigger: '.workList',
                start: '0% 100%',
                end: '0% 100%',
                scrub: 1,
                // markers:true
            }
        })
        /* 배경 검정-> 흰색 변화 */
        .to('.wrap', {
            backgroundColor: '#000',
            color: '#fff',
            ease: 'none',
            duration: 5
        }, 0)
        .to('.con02 .title', {
            position: 'fixed',
            left: '0',
            top: '0',
            width: '100%',
            ease: 'none',
            duration: 5
        }, 0)

    // .title 이 position:fixed가 되면서, 위치값을 상실하게 되면서 .workList가 바로 top 0%에 위치하게 되어 애니가
    // 부자연스러움. => margin-top 부여

    .fromTo('.workList', {
        margin: '0 auto'}, {
        margin: '100vh auto 0',
        position: 'relative',
        zIndex: '10',
        duration: 1}, 0)

    /* workList => margin-top > 자연스러운 애니메이션 생성 */
        gsap.timeline({
          scrollTrigger: {
            trigger : '.workList',
            start : '100% 100%',
            end : '100% 0%',
            scrub : 1,
            // markers : true
          }
        })
.to('.con02 .title .a', { x: '-100%' }, { x: '0%', ease: 'none', duration: 5 }, 0) 
.to('.con02 .title .b', { x: '100%' }, { x: '0%', ease: 'none', duration: 5 }, 0)
});

//simplyScroll
$(function () {
    $(".con03 .list").simplyScroll(
        {speed: 4, pauseOnHover: false, pauseOnTouch: false}
    );
});


 /* ncs horizon scroll  */
 gsap.registerPlugin(ScrollTrigger);

 let list = gsap.utils.toArray('.ncs .list li')

 let scrollTween = gsap.to(list, {
  xPercent: -100 * (list.length - 1),
    ease: 'none',
    scrollTrigger: {
    trigger: '.ncs',
    pin: true,
    scrub: 1,
    start: 'center center',
    end: '200%',
      // markers: true
 }
});

















