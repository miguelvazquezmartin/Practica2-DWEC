$(document).ready(function (){
    //Ejercicio 1

        //Cuerpo-tabla 
        console.log($('#cuerpo-tabla').val());

        //producto
        console.log($('#producto').val());

        //cantidad
        console.log($('#cantidad').val());

        //precio-unitario
        console.log($('#precio-unitario').val());

        //descuento
        console.log($('#descuento').val());

        //agregarLinea
        console.log($('#agregarLinea').val());
    
    //Ejercicio 2
    /*Se pide insertar valores en los inputs Producto, Cantidad, Precio unitario y Descuento y mostrarlos por consola, 
    utilizando una función que se ejecute cuando se pulse el botón Agregar.  */

    let producto = ($('#producto').val());
    let cantidad = ($('#cantidad').val());
    let precioUnitario = ($('#precio-unitario').val());
    let descuento = ($('#descuento').val());

    $("#agregarLinea").click (function (Event){
        console.log(producto, cantidad, precioUnitario, descuento);
        Event.preventDefault();
    });
    
    //Ejercicio 3
    /*Se pide que al pulsar el botón Agregar se añada una nueva línea al final de la tabla, de momento vacía o con valores 
    dados por defecto al crear la línea. En esta nueva línea, debes insertar un botón Borrar.  */

    //función agregar una fila a la tabla al pulsar botón agregar
    /*
    $("#agregarLinea").click (function (Event){

        let boton = '<a href="" id="borrar" class="btn btn-success">Borrar</a>';
        
        
        $("tbody").append("<tr><td>" + $("#producto").val("default") + "</td><td>" + $('#cantidad').val("default") + "</td><td>" + $('#precio-unitario').val("default") + "</td><td>" + $('#descuento').val("default") + "</td><td>" + boton + "</td></tr>");
    });
    */

    //Ejercicio 4
    /* Se pide que al pulsar el botón Agregar, se muestren en la tabla los valores introducidos en el input.  */
    
    $("#agregarLinea").click (function (Event){

        let boton = '<a href="" id="borrar" class="btn btn-success">Borrar</a>';
        
        $("tbody").append("<tr><td>" + $("#producto").val() + "</td><td>" + $('#cantidad').val() + 
        "</td><td>" + $('#precio-unitario').val() + "</td><td>" + $('#descuento').val() + "</td><td>" + boton + "</td></tr>");
    });
    //Ejercicio 5
    /*Se pide que al pulsar el botón Borrar, se elimine la fila insertada en el ejercicio 4 y se limpien los inputs. */

     //fución al pulsar botón, borra la fila en la que se encuentra dicho botón
    $(document).on('click', '#borrar', function (event) {
        event.preventDefault();
        $(this).closest('tr').remove();
    });
    
    //función limpiar todos los input después de agregar la fila
    $("#agregarLinea").click(function(){
        $('input[type="text"]').val('');
        $('input[type="number"]').val('')
    });

});