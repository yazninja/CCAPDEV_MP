$(document).ready(function(){
    $('.cal').click(function(){
        location.assign("calendar.html");
        console.log("calendar");
    });
    $('.home').click(function(){
        location.assign("dashboard.html");
        console.log("dashboard");
    });
    $('.add').click(function(){
        location.assign("add.html");
        console.log("add");
    });
    $('.remove').click(function(){
        location.assign("remove.html");
        console.log("remove");
    });
    $('.signout').click(function(){
        location.assign("index.html");
        console.log("signout");
    });
    $('.register').click(function(){
        location.assign("reg_page.html");
        console.log("register");
    });
    $('.conv').click(function(){
        location.assign("converter.html");
        console.log("conv");
    });
    $('.side-menu li').mouseenter(function(){
        $(this).find('img')[0].src = $(this).find('img')[0].src.replace(/white/, 'green');
    });
    $('.side-menu li').mouseleave(function(){
        $(this).find('img')[0].src = $(this).find('img')[0].src.replace(/green/, 'white');
        $('.side-menu li.active').find('img')[0].src = $('.side-menu li.active').find('img')[0].src.replace(/white/, 'green');
    });
    $('.side-menu li.active').find('img')[0].src = $('.side-menu li.active').find('img')[0].src.replace(/white/, 'green');

});