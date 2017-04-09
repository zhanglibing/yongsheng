$(function(){
    $('.nav li').on('click',function(){
        $('.nav li').removeClass('active')
        $(this).addClass('active');
    })

    $('.main2-wrapper ul li').bind({
        mouseover:function(){
            $(this).addClass('active');
            $(this).find('a').addClass('active')
        },
        mouseout:function(){
            $(this).removeClass('active');
            $(this).find('a').removeClass('active');
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