$(function(){

    // Slider
    var galeria = $('.galeria')

    galeria.bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    // Posts
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado: ' + moment().format("D MMMM YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat mattis purus eu sagittis. Donec molestie, nulla et mattis tempor, dolor libero scelerisque orci, eu fringilla risus mi quis enim. Donec dolor orci, placerat eu metus nec, semper ullamcorper neque. Pellentesque varius vel arcu in egestas. Sed a vehicula nisl. Sed ut urna vel tortor tristique faucibus. Nulla vestibulum egestas diam, vitae porta tortor. Vestibulum tempus dui auctor lacus varius, eget tempus massa sodales. Vivamus pharetra, nibh eget commodo suscipit, nisl sapien euismod nulla, eget vehicula ligula quam non velit. Morbi eu justo rhoncus, auctor tortor ac, lobortis lorem. Phasellus ultrices tellus mauris, eget semper tortor congue vel. Pellentesque et dolor vel nunc semper porta vitae eget arcu. Nullam vitae interdum nulla. Nulla iaculis condimentum odio eu aliquet. Pellentesque blandit malesuada orci vitae feugiat.'
        },
        {
            title: 'Prueba de titulo 2',
            date: moment().format("Do MMMM YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat mattis purus eu sagittis. Donec molestie, nulla et mattis tempor, dolor libero scelerisque orci, eu fringilla risus mi quis enim. Donec dolor orci, placerat eu metus nec, semper ullamcorper neque. Pellentesque varius vel arcu in egestas. Sed a vehicula nisl. Sed ut urna vel tortor tristique faucibus. Nulla vestibulum egestas diam, vitae porta tortor. Vestibulum tempus dui auctor lacus varius, eget tempus massa sodales. Vivamus pharetra, nibh eget commodo suscipit, nisl sapien euismod nulla, eget vehicula ligula quam non velit. Morbi eu justo rhoncus, auctor tortor ac, lobortis lorem. Phasellus ultrices tellus mauris, eget semper tortor congue vel. Pellentesque et dolor vel nunc semper porta vitae eget arcu. Nullam vitae interdum nulla. Nulla iaculis condimentum odio eu aliquet. Pellentesque blandit malesuada orci vitae feugiat.'
        },
        {
            title: 'Prueba de titulo 3',
            date: moment().format("Do MMMM YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat mattis purus eu sagittis. Donec molestie, nulla et mattis tempor, dolor libero scelerisque orci, eu fringilla risus mi quis enim. Donec dolor orci, placerat eu metus nec, semper ullamcorper neque. Pellentesque varius vel arcu in egestas. Sed a vehicula nisl. Sed ut urna vel tortor tristique faucibus. Nulla vestibulum egestas diam, vitae porta tortor. Vestibulum tempus dui auctor lacus varius, eget tempus massa sodales. Vivamus pharetra, nibh eget commodo suscipit, nisl sapien euismod nulla, eget vehicula ligula quam non velit. Morbi eu justo rhoncus, auctor tortor ac, lobortis lorem. Phasellus ultrices tellus mauris, eget semper tortor congue vel. Pellentesque et dolor vel nunc semper porta vitae eget arcu. Nullam vitae interdum nulla. Nulla iaculis condimentum odio eu aliquet. Pellentesque blandit malesuada orci vitae feugiat.'
        },
        {
            title: 'Prueba de titulo 4',
            date: moment().format("Do MMMM YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat mattis purus eu sagittis. Donec molestie, nulla et mattis tempor, dolor libero scelerisque orci, eu fringilla risus mi quis enim. Donec dolor orci, placerat eu metus nec, semper ullamcorper neque. Pellentesque varius vel arcu in egestas. Sed a vehicula nisl. Sed ut urna vel tortor tristique faucibus. Nulla vestibulum egestas diam, vitae porta tortor. Vestibulum tempus dui auctor lacus varius, eget tempus massa sodales. Vivamus pharetra, nibh eget commodo suscipit, nisl sapien euismod nulla, eget vehicula ligula quam non velit. Morbi eu justo rhoncus, auctor tortor ac, lobortis lorem. Phasellus ultrices tellus mauris, eget semper tortor congue vel. Pellentesque et dolor vel nunc semper porta vitae eget arcu. Nullam vitae interdum nulla. Nulla iaculis condimentum odio eu aliquet. Pellentesque blandit malesuada orci vitae feugiat.'
        }
    ]

    posts.forEach((item,index) => {
        var post = '<article class="post"><h2>'+ item.title + '</h2><span class="date">' + item.date + '</span><p>' + item.content + '</p><a href="#" class="button-more">Leer mas</a></article>'
        $('#posts').append(post);
    })

    // Selector de tema
    var theme = $('#theme')

    $('#to-green').click(function(){
        theme.attr('href', 'css/green.css')
        galeria.goToSlide(0)
    })
    $('#to-red').click(function(){
        theme.attr('href', 'css/red.css')
        galeria.goToSlide(1)
    })
    $('#to-blue').click(function(){
        theme.attr('href', 'css/blue.css')
        galeria.goToSlide(2)
    })

    // Scroll arriba de la web

    $('.subir').click(function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        },500)
        return false
    })

    // Login falso

    $('#login form').submit(function(){
        var form_name = $('#form_name').val()

        localStorage.setItem('form_name', form_name)
    })

    var form_name = localStorage.getItem('form_name')

    if (form_name != null && form_name != "undefined"){
        var about_parafo = $('#about p')
        about_parafo.html("<br><strong>Bienvenido, " + form_name +' </strong>')
        about_parafo.append('<br><a href="#" id="logout">Cerrar sesion</a>')
        $('#login').hide()
    }

    $("#logout").click(function(){
        localStorage.clear()
        location.reload()
    })

})