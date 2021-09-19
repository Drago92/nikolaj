
//------------------JQUERY SCRIPT------------------------
$(document).ready(function() {
    $('.carousel').carousel({
        interval: 4000
    });
    $(".masthead .button .btn-primary").mouseenter(function (){
        $(this).animate({width:"400px"},200, function() {
            $(".arrow").fadeIn("fast");
        });
    }).mouseleave(function (){
        $(".arrow").hide();
        $(this).animate({width:"317px"},200);
    });
});
$(".carousel-control-prev").click(function (){
    $(".carousel").carousel('prev');
});
$(".carousel-control-next").click(function (){
    $(".carousel").carousel('next');
});

$("#submit").click(function() {
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();
    let betreff = $("#betreff").val();
    let address = $("#strasse").val() + " " + $("#hsnr").val() + ", " + $("#plz").val() + " " + $("#ort").val();
    $("#returnmessage").empty(); // To empty previous error/success message.
    $("#errname").empty(); // To empty previous error/success message.
    $("#errmail").empty(); // To empty previous error/success message.
    $("#name").removeClass("err");
    $("#email").removeClass("err");
// Checking for blank fields.
    if (name == '') {
        $("#name").addClass("err");
        $("#errname").append("Bitte geben Sie einen Namen an.");
    } else if(email == '') {
        $("#email").addClass("err");
        $("#errmail").append("Bitte geben Sie eine Email Adresse an.");
    }else{
// Returns successful data submission message when the entered information is stored in database.
        $.post("scripts/contact_form.php", {
            name: name,
            email: email,
            message: message,
            address: address,
            betreff: betreff,
            emailTo: 'k.broja@web.de'
        }, function(data) {
            $("#returnmessage").append(data); // Append returned message to message paragraph.
            if (data == "Vielen Dank für Ihre Anfrage. Wir werden sie bald kontaktieren.") {
                $("#form")[0].reset(); // To reset form fields on success.
            }
        });
        if($("#checkbox").is(':checked')) {
            $.post("scripts/contact_form.php", {
                name: name,
                email: email,
                message: message,
                emailTo: email,
                address: address,
                betreff: email
            }, function(data) {
            });
        }
    }
});
//------------------VANILLAJS SCRIPT------------------------

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
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

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

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