$(document).ready(function(){
    console.log('hola mundo!!')

    //Mover y cambiar el tamaño del elemento por la pagina
    $(".elemento").draggable().resizable()

    // $(".lista-seleccionable").selectable()
        
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("la lista cambió")
        }
    })

    //Drop
    $('#elemento-movido').draggable()
    $('#area').droppable({
        drop: function(){
            console.log("se solto dentro")
        }
    })

    $('#mostrar').click(function(){
        $(".caja-efectos").toggle("puff", 2000)
    })

    //Tooltips
    $(document).tooltip()

    $("#lanzame").click(function(){
        $("#popup").dialog()
    })

    //Calendario
    $("#calendario").datepicker()

    //Tabs

    $("#pestanas").tabs()
})