function agregarTarea() {

//Obtenemos el valor del campo de la tarea
let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

//Validamos que el valor no sea vacío
if (nuevaTareaTexto === "") {
    alert ("Por favor, ingrese una tarea:");
    return;
}

//Creamos un elemento en la lista
let nuevaTarea = document.createElement("li");
nuevaTarea.textContent = nuevaTareaTexto + " ";

//Creamos botón Eliminar
let botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar";

botonEliminar.onclick = function() {nuevaTarea.remove();}

//Agregar botón de eliminar al elemento de la lista
nuevaTarea.appendChild(botonEliminar);

//Agregar el elemento/tarea a la lista//
document.getElementById("listaTareas").appendChild(nuevaTarea);

//Limpiar el input
document.getElementById("nuevaTarea").value = "";

}