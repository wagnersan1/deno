function datosNoInserido() {
    if (!id) {
        // alert("Dados no fornecido")
       return $("#amigo").append(`<h2> Dados no fornecido </h2>`)
    }
}

function limpiar(tipoDeLimpeza){
    if (tipoDeLimpeza === "contenedor") {
       
            $(`#lista`).empty()
            $("#amigo").empty()
            $("#amigoDeletado").empty()
        
    } else if (tipoDeLimpeza === "input") {
        
        $("#input").val(" ")
        $("#inputDelete").val(" ")
    }
}
function mostraAmigo() {
    $.ajax({
        url: 'http://localhost:5000/amigos',
        type: 'get',
        success: (info) => {
        // console.log(info); //este metodo me consola la cuantidad de objeto en amigo.
            info.forEach(function(amigo) {//este metodo me desmostra los intes en su objeto
                // console.log(amigo); // printeando los objetos con su respecutivos intes
                let ul = document.getElementById('lista'); //asigui un valor a la ul
                let nuevoLi = document.createElement('li') // cria elemento list 'li' en nuevo 'Li'
                nuevoLi.innerHTML = `Id:${amigo.id}  Nombre:${ amigo.name }` //implementa en cada li un valor con su id
                ul.appendChild(nuevoLi) // cria una lista de objeto li
            })
            // info.forEach((amigo)=>$('#lista').append(`<li> ${amigo.name} tiene  ${amigo.age} años </li>`) ) //este metodo printa lo
        }

    })
}
function deleteAmigo(id) {
    $(`#lista`).empty()
    $("#amigoDeletado").empty()
    limpiar("input")
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: "delete",
        success: (info) => {
              limpiar("input")
            if (!mostraAmigo()) {
                $("#amigoDeletado").append(`<h2> Amigo ya deletado </h2>`)
            }
           
        }//,
        // error: (error) => {
        //     console.log(error)
        //     // limpiar("input")
            
        //     if (error) {
        //         $("#amigoDeletado").append(`<h2> Dados no fornecido </h2>`)
        //         // alert("El id del amigo busacado no existe")
        //         $("#amigoDeletado").empty()
        //      }
        // }
    })
}
function busacaDatos(id) {
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: "get",
        success: (info) => {
            console.log(info)
            $("#amigo").append(`<p> ${info.name}</p>`)
            $("#amigo").append(`<p> ${info.email}</p>`)
            limpiar("input")
            mostraAmigo()
           
            // $(`#lista`).empty()
                           
          
        },
        error : (error) => {
            if (error) {
                $("#amigo").append(`<h2> Datos no existe </h2>`)
                // alert("El id del amigo busacado no existe")
                limpiar("input")
            }
        }
    })   
}

// Mostra lista de amigos
$("#boton").click(() => {
    // console.log('Se hizo clic en Ver amigos');
    // Usando Ajax
    limpiar("contenedor");
    mostraAmigo();

})
//Busca Amigo
$(`#search`).click(() => {
    let id = $("#input").val()
    limpiar("contenedor")
    
    if (!id) {
        // alert("Dados no fornecido")
       return $("#amigo").append(`<h2> Dados no fornecido </h2>`)
    }
    busacaDatos(id)     
    
})
// Deleta Amigo
$('#delete').click(() => {
    let id = $("#inputDelete").val()
   if (!id) return alert("Dados no fornecido")
   deleteAmigo(id)
}) 

// Metodo Post

$("#enviarForm").click(() => {
    let name = $("#name").val()
    let age = $("#age").val()
    let email = $("#email").val()
    $.ajax({
        type: 'POST',
        url: 'http://localhost:5000/amigos',
        data : data
        success: (respuesta) => {
            name,age,email
        }
    })
  })

$.ajax({
    type: "POST",
    url: 'http://localhost:5000/amigos',
    dataType: {
        neme,
        age,
        email
    },
    success: () => {
     alert(age,email)               
   
    }
});