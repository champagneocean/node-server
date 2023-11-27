let listaTareas = [];

function agregarTarea(indicador, descripcion) {
  const nuevaTarea = {
    indicador: indicador,
    descripcion: descripcion,
    completada: false
  };

  listaTareas.push(nuevaTarea);
  console.log(`Tarea añadida: ${descripcion}`);
  mostrarListaTareas();
}

function eliminarTarea(indicador) {
  listaTareas = listaTareas.filter(tarea => tarea.indicador !== indicador);
  console.log(`Tarea eliminada: ${indicador}`);
  mostrarListaTareas();
}

function completarTarea(indicador) {
  const tarea = listaTareas.find(tarea => tarea.indicador === indicador);

  if (tarea) {
    tarea.completada = true;
    console.log(`Tarea marcada como completada: ${indicador}`);
    mostrarListaTareas();
  } else {
    console.log(`No se encontró la tarea con indicador ${indicador}`);
  }
}

function mostrarListaTareas() {
  console.log("Lista de tareas:");
  listaTareas.forEach(tarea => {
    const estado = tarea.completada ? "Completada" : "Pendiente";
    console.log(`- ${tarea.indicador}: ${tarea.descripcion} (${estado})`);
  });
  console.log("-----------------------");
}