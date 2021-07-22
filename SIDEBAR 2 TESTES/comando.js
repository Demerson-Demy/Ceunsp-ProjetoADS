$('.botao').click(function(){
    $(this).toggleClass("click");
    $('span').toggleClass("rotater");
    $('.sidebar').toggleClass("show");
});

$('.pasta-homem').click(function(){
    $('nav ul .moda-homem').toggleClass("show");
    $('nav ul .seta-homem').toggleClass("rotate");
});

$('.pasta-mulher').click(function(){
    $('nav ul .moda-mulher').toggleClass("show");
    $('nav ul .seta-mulher').toggleClass("rotate");
});

$('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");

});
