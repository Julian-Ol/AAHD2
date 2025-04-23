let actividades = [];
document.addEventListener("DOMContentLoaded", () => {
    const btnAgregar = document.querySelector("button");
    btnAgregar.addEventListener("click", agregarActividad);
});

function agregarActividad(){
    const inputNuevaActividad = document.getElementById("nuevaActividad");
    const nuevaActividad = inputNuevaActividad.value;

    if(nuevaActividad){
        actividades.push(nuevaActividad);
        inputNuevaActividad.value = "";
        mostraractividades();
    }
}

function mostraractividades(){
    const listaActividades = document.getElementById("listaActividades");
    listaActividades.innerHTML = "";

    actividades.forEach((tarea, Lista) => {
        const li = document.createElement("li");
        li.textContent = `${Lista + 1}. ${tarea}`;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", () => eliminaractividad(Lista));

        li.appendChild(btnEliminar);
        listaActividades.appendChild(li);
    });
}

function eliminaractividad(Lista){
    if(Lista >= 0 && Lista < actividades.length){
        actividades.splice(Lista, 1);
        mostraractividades();
    }
}