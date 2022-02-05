$(document).ready(function () {
    $('.add_expense').hide();
    $('label[for=custom_category]').hide();
    $('.custom_category').hide();
    $(".iPresets").change(function () {
        let today = new Date().toISOString().substr(0, 10);
        $("label[for=sdate]").text("Start Date:");
        if ($('.iPresets').val() == "mSalary") {
            $(".repeat").val("3");
            $('.sDate').val(today);
            $('.eDate').fadeIn();
            $('label[for=edate]').fadeIn();
        }
        else if ($('.iPresets').val() == "aSalary") {
            $(".repeat").val("4");
            $('.sDate').val(today);
            $('.eDate').fadeIn();
            $('label[for=edate]').fadeIn();
        }
        else if ($('.iPresets').val() == "dSalary") {
            $(".repeat").val("0");
            $('.sDate').val(today);
            $('.eDate').fadeOut();
            $('label[for=edate]').fadeOut();
            $("label[for=sdate]").text("Date:");
        }
    });
    $('.repeat').change(function () {
        $('.iPresets').val("custom");
        if ($('.repeat').val() == "0") {
            $('.eDate').fadeOut();
            $('.lbl_sDate').text("Date");
        }
        else {
            $('.eDate').fadeIn();
            $('.lbl_sDate').text("Start Date");
        }
    });
    $('.erepeat').change(function () {
        $('.ePresets').val("custom");
        if ($('.erepeat').val() == "0") {
            $('.eeDate').fadeOut();
            $('.elbl_sDate').text("Date");
        }
        else {
            $('.eeDate').fadeIn();
            $('.elbl_sDate').text("Start Date");
        }
    });
    $('.ePresets').change(function () {
        let today = new Date().toISOString().substr(0, 10);
        $("label[for=sdate]").text("Start Date:");
        if ($('.ePresets').val() == "mExpense") {
            $(".repeat").val("3");
            $('.sDate').val(today);
            $('.eDate').fadeIn();
            $('label[for=edate]').fadeIn();
        }
        else if ($('.ePresets').val() == "aExpense") {
            $(".repeat").val("4");
            $('.sDate').val(today);
            $('.eDate').fadeIn();
            $('label[for=edate]').fadeIn();
        }
        else if ($('.ePresets').val() == "dExpense") {
            $(".repeat").val("0");
            $('.sDate').val(today);
            $('.eDate').fadeOut();
            $('label[for=edate]').fadeOut();
            $("label[for=sdate]").text("Date:");
        }
    });
    $('.category').change(function () {
        if ($('.category').val() == "Other") {
            $('label[for=custom_category]').fadeIn();
            $('.custom_category').fadeIn();
        }
        else {
            $('label[for=custom_category]').fadeOut();
            $('.custom_category').fadeOut();
        }
    });
    $('.inc').click(function () {
        $('.inc').addClass('activetab');
        $('.exp').removeClass('activetab');
        $('.add_expense').hide();
        $('label[for=custom_category]').hide();
        $('.custom_category').hide();
        $('.add_income').show();
        
    });
    $('.exp').click(function () {
        $('.exp').addClass('activetab');
        $('.inc').removeClass('activetab');
        $('.add_income').hide();
        $('.add_expense').show();
        $('label[for=custom_category]').show();
        $('.custom_category').hide();
    });
    

});
