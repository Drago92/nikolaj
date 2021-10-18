
//------------------JQUERY SCRIPT------------------------
$(document).ready(function() {
    var breakpoint = 860;
    $('.carousel').carousel({
        interval: 4000
    });
    $(".masthead .button .btn-primary").mouseenter(function (){
        if ($(window).width() > breakpoint) {
            $(this).animate({width: "300px"}, 200, function () {
                $(".arrow").fadeIn("fast");
            });
        }
    }).mouseleave(function (){
        if ($(window).width() > breakpoint) {
            $(".arrow").hide();
            $(this).animate({width: "225px"}, 200);
        }
    });
    if ($(window).width() < breakpoint) {
        $('.js-slidein').removeClass('js-slidein');
    }

    // $(window).scroll(function () {
    //     $('.js-slidein.right').each(function (i) {
    //         var bottomObject = $(this).offset().top +300;
    //         var bottomWindow = $(window).scrollTop() + $(window).height();
    //         if (bottomWindow > bottomObject) {
    //             if(!$(this).hasClass('js-slidein-visible')) {
    //                 $(this).animate({right:'0px'},600)
    //                 $(this).addClass('js-slidein-visible');
    //             }
    //         }else{
    //             if($(this).hasClass('js-slidein-visible')) {
    //                 $(this).removeClass('js-slidein-visible');
    //                 $(this).animate({right:'-800px'},600)
    //             }
    //         }
    //     });
    // });
    // $("#body").scroll(function () {
    //     $('.js-slidein.left').each(function (i) {
    //         var bottomObject = $(this).offset().top +300;
    //         var bottomWindow = $('#body').scrollTop() + $('#body').height();
    //         if (bottomWindow > bottomObject) {
    //             if(!$(this).hasClass('js-slidein-visible')) {
    //                 $(this).animate({left:'0px'},600)
    //                 $(this).addClass('js-slidein-visible');
    //             }
    //         }else{
    //             if($(this).hasClass('js-slidein-visible')) {
    //                 $(this).removeClass('js-slidein-visible');
    //                 $(this).animate({left:'-800px'},600)
    //             }
    //         }
    //     });
    // });
    $(".carousel-control-prev").click(function (){
        $(".carousel").carousel('prev');
    });
    $(".carousel-control-next").click(function (){
        $(".carousel").carousel('next');
    });

    $("#submit").click(function() {
        let name = $("#name").val();
        let firma = $("#firma").val();
        let email = $("#email").val();
        let message = $("#message").val();
        let betreff = $("#betreff").val();
        let address = $("#strasse").val() + ", " + $("#plz").val();
        let kunde = ($("#checkgewerbe").prop('checked'))? "Gewerbekunde":"Privatkunde";
        $("#returnmessage").empty(); // To empty previous error/success message.
        $("#errname").empty(); // To empty previous error/success message.
        $("#errmail").empty(); // To empty previous error/success message.
        $("#errmessage").empty(); // To empty previous error/success message.
        $("#errfirma").empty(); // To empty previous error/success message.
        $("#name").removeClass("err");
        $("#email").removeClass("err");
        $("#message").removeClass("err");
        $("#firma").removeClass("err");
    // Checking for blank fields.
        if (name == '') {
            $("#name").addClass("err");
            $("#errname").append("Bitte geben Sie einen Namen an.");
        } else if(email == '') {
            $("#email").addClass("err");
            $("#errmail").append("Bitte geben Sie eine Email Adresse an.");
        }else if(message == '') {
            $("#message").addClass("err");
            $("#errmessage").append("Bitte geben Sie eine Nachricht an.");
        }else if(kunde == 'Gewerbekunde'&& firma=='') {
            $("#firma").addClass("err");
            $("#errfirma").append("Bitte geben Sie Ihre Firma an.");
        }else{
            // Returns successful data submission message when the entered information is stored in database.
            $.post("scripts/contact_form.php", {
                name: name,
                firma: firma,
                email: email,
                message: message,
                address: address,
                betreff: kunde + ': ' + betreff,
                emailTo: 'k.broja@web.de'
            }, function (data) {
                $("#returnmessage").append(data); // Append returned message to message paragraph.
                if (data == "Vielen Dank für Ihre Anfrage. Wir werden sie bald kontaktieren.") {
                    $("#form")[0].reset(); // To reset form fields on success.
                }
            });
        }
    });
    $("#checkgewerbe").click(function (){
        if($("#checkgewerbe").prop('checked')){
            $("#checkgewerbe").prop('checked', true);
            $("#checkprivat").prop('checked', false);
        }else {
            $("#checkgewerbe").prop('checked', false);
            $("#checkprivat").prop('checked', true);
        }
        $("#divFirma").toggleClass("d-none");
        $("#divName").toggleClass("col-sm-6");
    });
    $("#checkprivat").click(function (){
        if($("#checkprivat").prop('checked')){
            $("#checkgewerbe").prop('checked', false);
            $("#checkprivat").prop('checked', true);
        }else {
            $("#checkgewerbe").prop('checked', true);
            $("#checkprivat").prop('checked', false);
        }
        $("#divFirma").toggleClass("d-none");
        $("#divName").toggleClass("col-xxl-6");
    });

    $('#body').bind('scroll', function() {
        let elems = $('.scrollspy');
        elems.each(function(index){
            let elemTop 	= $(this).offset().top - 130;
            let elemBottom 	= elemTop + $(this).height();
            let id 		= $(this).attr('id');
            let navElem = $('a[href="#' + id + '"]');
            if(elemTop <= 0 && elemBottom > 0){
                navElem.addClass('active');
            }
            if(elemBottom<=0 ||elemTop >= 0){
                navElem.removeClass('active');
            }
        })
    });
    $(".form-outline select").on({
        "change": function() {
            $(this).blur();

        },
        'focus': function() {
            $(".form-outline.select").addClass("arrowUp");
        },
        "blur": function() {
            $(".form-outline.select").removeClass("arrowUp");
        },
        "keyup": function(e) {
            if (e.keyCode == 27)
            $(".form-outline.select").addClass("arrowUp");
        }
    });
});
//------------------VANILLAJS SCRIPT------------------------

window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});