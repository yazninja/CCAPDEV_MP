$(document).ready(function(){
    console.log('url' + location);
    $('.cal').click(function(){
        location.assign("/calendar");
        console.log("calendar");
    });
    $('.home').click(function(){
        location.assign("/dashboard");
        console.log("dashboard");
    });
    $('.add').click(function(){
        location.assign("/add");
        console.log("add");
    });
    $('.remove').click(function(){
        location.assign("/edit");
        console.log("edit");
    });
    $('.signout').click(function(){
        location.assign("/logout");
        console.log("signout");
    });
    $('.register').click(function(){
        location.assign("/reg-page");
        console.log("register");
    });
    $('.login').click(function () {
        location.assign("/login-page");
        console.log("login");
    });
    $('.conv').click(function(){
        location.assign("/converter");
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
``
});