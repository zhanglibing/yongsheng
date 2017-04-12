$(function(){

    var audio = $("audio").get(0);
    $('.nav-content .right .img').on('click',function(){
        $(this).toggleClass('active');
        if(audio.paused){
            audio.play();
            $('.music-box img').addClass('active');
        }else{
            audio.pause();
            $('.music-box img').removeClass('active');
        }

    })

    //楼层跳转

    // $('.floor').each(function(i,v){
    //     var h=$(this).offsetTop;
    //     floorArr.push(h);
    // })
    // $(window).on('scroll',function(){
    //     var stop=$(window).scrollTop;
    //     if()
    // })
    var floorArr=[];
    var floor=$('.floor');
    var link=$('.nav li');
    $(window).on('resize',function(){
        $(window).scroll();
    })
    floor.each(function(i,v){
        var h=$(this).offset().top;
        floorArr.push(h);
    })
    $(window).on('scroll',function(){
        var stop=$(window).scrollTop();
        $(floorArr).each(function(i,v){
            if(stop>=v-255){
                link.eq(i).addClass('active')
            }
            else if(stop<v+50){
                link.eq(i).removeClass('active')
            }
        });

    })
    link.on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('body').animate({scrollTop:floorArr[$(this).index()]},1000)
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
    var index=0;
    var arr=['app','web','other'];
    $('.head ul li').on('click',function(e){
        e.preventDefault();
        $('.project li').attr('data',$(this).attr('data'));
        $(this).addClass('active').siblings().removeClass('active');
        var imgUrl='images/'+$(this).attr('data')+'-'+arr[index]+'.jpg';
        $('.result li img').attr('src',imgUrl);
        return false;
    })
    $('.project li').on('click',function(){
        index=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');;
        var imgUrl='images/'+$(this).attr('data')+'-'+arr[index]+'.jpg';
        $('.result li img').attr('src',imgUrl);
        return false;
    })
})