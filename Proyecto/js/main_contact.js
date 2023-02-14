$(function(){

    // Selector de tema
    var theme = $('#theme')

    $('#to-green').click(function(){
        theme.attr('href', 'css/green.css')
    })
    $('#to-red').click(function(){
        theme.attr('href', 'css/red.css')
    })
    $('#to-blue').click(function(){
        theme.attr('href', 'css/blue.css')
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

    // Validacion
    $('form input[name="date"]').datepicker({
        dateFormat: "dd-mm-yy"
    })
    $.validate({
        lang: 'es'
    })
})