$(function(){
    $('.nav li').on('click',function(){
        $('.nav li').removeClass('active')
        $(this).addClass('active');
    })
    var audio = $("audio").get(0);
    $('.nav-content .right .img').on('click',function(){
        $(this).toggleClass('active');
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }

    })

    $('.main2-wrapper .link li').bind({
        mouseover:function(){
            var index=$(this).index();
            $(this).addClass('active');
            $(this).find('a').addClass('active');
            $('.xinxi img').addClass("active");
            $('.xinxi li').eq(index).addClass('active');
        },
        mouseout:function(){
            $(this).removeClass('active');
            $(this).find('a').removeClass('active');
            $('.xinxi img').removeClass("active");
            $('.xinxi ul li').removeClass("active");
        }
    })

    $('.head ul li').on('click',function(e){
        e.preventDefault();
        $('.project li').attr('data',$(this).attr('data'));
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
    var arr=['app','web','other'];
    $('.project li').on('click',function(){
       var index=$(this).index();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var imgUrl='images/'+$(this).attr('data')+'-'+arr[index]+'.png';
        $('.result li img').attr('src',imgUrl);
    })
})