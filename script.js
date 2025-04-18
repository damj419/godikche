// a 태그 튕김 제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// 부드러운 스크롤
$(function () {

    'use strict';
 
    // Lenis 부드러운 스크롤 초기화
    const lenis = new Lenis({
       duration: 1.4 // 스크롤 지속 시간 설정 (초 단위)
    })
 
    // Lenis 스크롤 이벤트 리스너 등록
    lenis.on('scroll', (e) => {
       console.log(e) // 스크롤 이벤트 발생 시 로그 출력
    })
 
    // requestAnimationFrame을 사용하여 애니메이션 업데이트
    function raf(time) {
       lenis.raf(time)
       requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
 
    document.addEventListener('keydown', function(e) {
       if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          e.preventDefault();
       }
    });
 });

//스크롤애니메이션(scrolla.js)
$(function() {
    $('.animate').scrolla({
       mobile: true, //모바일버전시 활성화
       once: false //스크롤시 딱 한번만 하고싶을땐 true
    });    
  }); 
  
  
  //글자애니메이션  Splitting 데모사이트 그대로 작성 따라하기
  $(function(){
    Splitting();
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

$(document).ready(function() {
  $('#click').click(function(e) {
    e.preventDefault();

    var targetOffset = $('#visual2').offset().top;

    $('html, body').animate({ scrollTop: targetOffset }, 1000, function() {
      $('#visual1').hide();
      $('#visual2').nextAll().show();
    });
  });
});


// about 
$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'.about',
            start :'40% top',
            end:' bottom bottom',
            scrub: 3,
            // markers:true
        }
    })
    .fromTo('.about .word .wordList li:nth-child(1) .tit', {color:'#cdcdcd'}, {color:'#777', ease:'none', duration: '.5'},.5)
    .fromTo('.about .word .wordList li:nth-child(2) .tit', {color:'#cdcdcd'}, {color:'#777', ease:'none', duration: '1'},1)
    .fromTo('.about .word .wordList li:nth-child(3) .tit', {color:'#cdcdcd'}, {color:'#777', ease:'none', duration: '1.5'},2)
});


// 갤러리 ul
$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'.gallery .imgList',
            start :'20% center',
            end:'bottom bottom',
            scrub: 3,
            // markers:true
        }
    })
    .to('.gallery li:nth-child(1)', {y: '180px', ease:'none', duration: '1'}, .2)
    .to('.gallery li:nth-child(2)', {y: '100px', ease:'none', duration: '1' }, .3)
    .to('.gallery li:nth-child(3)', {y: '100px', ease:'none', duration: '1'}, .35)
    .to('.gallery li:nth-child(4)', {y: '180px', ease:'none', duration: '1'}, .5)
    .to('.gallery li:nth-child(5)', {y: '100px', ease:'none', duration: '1'}, .6)
    .to('.gallery li:nth-child(6)', {y: '100px', ease:'none', duration: '1'}, .65)
    .to('.gallery li:nth-child(7)', {y: '180px', ease:'none', duration: '1'}, .8)
});

// videowrap
$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'.daily',
            start: '20% 60%',
            end:'bottom bottom',
            scrub:1,
            // markers:true
        }
    })
    .fromTo('.videoWrap video', {
        'clip-path': 'inset(60% 60% 60% 60% round 30%)'
    }, {
        'clip-path': 'inset(0% 0% 0% 0% round 0%)',
        ease: 'none',
        duration: 10
    }, 0)
});


// about me
gsap.to('.describing .list', {
    scrollTrigger: {
        trigger: '.describing', // 스크롤 트리거 요소
        start: 'top center',    // 시작 지점 (위치 조절 가능)
        end: 'bottom center',   // 끝 지점 (위치 조절 가능)
        scrub: true,
        // markers:true
    },
    borderRadius: '1000px 1000px 0 0', // 변경할 border-radius 값
    duration: 1                     // 애니메이션 지속 시간
});



gsap.to('.life .bg', {
    scrollTrigger: {
        trigger: '.life', // 스크롤 트리거 요소
        start: 'top bottom',    // 시작 지점 (위치 조절 가능)
        end: 'bottom center',   // 끝 지점 (위치 조절 가능)
        scrub: true,
        // markers:true
    },
    borderRadius: '1000px 1000px 0 0', // 변경할 border-radius 값
    duration: 1                     // 애니메이션 지속 시간
});




// clone cording
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.clone').forEach((section , i) => {

        ScrollTrigger.create({
            trigger: section,
            start:'top top',
            pin: true,
            pinSpacing: false,
            // markers:true,
            
        })
    })
    ScrollTrigger.create({
        snap: 1 / (section.length - 1)
    })
});


 /* ncs horizon scroll  */
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    '(min-width: 1025px)': function () {
        let list = gsap
            .utils
            .toArray('.ncs .list li');

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
    }
});

const svg1 = document.getElementById('svgAni1');
const svg2 = document.getElementById('svgAni2');
const svg3 = document.getElementById('svgAni3');
const contact = document.querySelector('.contact');

window.addEventListener('scroll', () => {
  const triggerY = contact.offsetTop - window.innerHeight + 100;
  const currentY = window.scrollY;

  if (currentY >= triggerY) {
    svg1.style.strokeDashoffset = '0';
    svg2.style.strokeDashoffset = '0';
    svg3.style.strokeDashoffset = '0';
  } else {
    svg1.style.strokeDashoffset = '1203';
    svg2.style.strokeDashoffset = '126';
    svg3.style.strokeDashoffset = '62';
  }
});


gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".who");
const wrapper = container.querySelector(".list");

gsap.to(wrapper, {
  x: () => -(wrapper.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: container,
    start: "top top",
    end: () => "+=" + (wrapper.scrollWidth - window.innerWidth),
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
});
