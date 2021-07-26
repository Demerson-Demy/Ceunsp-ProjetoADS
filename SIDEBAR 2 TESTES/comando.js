/*botão serve para guardar e revelar navbar + animação da seta*/ 
$('.botao').click(function(){
    $(this).toggleClass("click");
    $('span').toggleClass("rotater");
    $('.sidebar').toggleClass("show");
});

/*da a funcionalidade de abrir e fechar a pasta masculina*/
$('.pasta-homem').click(function(){
    $('nav ul .moda-homem').toggleClass("show");
    $('nav ul .seta-homem').toggleClass("rotate");
});

/*da a funcionalidade de abrir e fechar a pasta feminina*/
$('.pasta-mulher').click(function(){
    $('nav ul .moda-mulher').toggleClass("show");
    $('nav ul .seta-mulher').toggleClass("rotate");
});

/*caso um item já esteja selecionado/ativado, ele será destivado quando um novo item for selecionado/ativado,*/
$('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");

});
