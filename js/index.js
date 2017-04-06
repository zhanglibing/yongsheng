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
})