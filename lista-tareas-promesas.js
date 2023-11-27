let listaTareas = [];

function agregarTarea(indicador, descripcion) {
  return new Promise((resolve) => {
    const nuevaTarea = {
      indicador: indicador,
      descripcion: descripcion,
      completada: false
    };
    listaTareas.push(nuevaTarea);
    resolve(`Tarea añadida: ${descripcion}`);
  });
}

function eliminarTarea(indicador) {
  return new Promise((resolve, reject) => {
    const tareaIndex = listaTareas.findIndex(tarea => tarea.indicador === indicador);
    if (tareaIndex !== -1) {
      listaTareas.splice(tareaIndex, 1);
      resolve(`Tarea eliminada: ${indicador}`);
    } else {
      reject(`No se encontró la tarea con indicador ${indicador}`);
    }
  });
}

function completarTarea(indicador) {
  return new Promise((resolve, reject) => {
    const tarea = listaTareas.find(tarea => tarea.indicador === indicador);
    if (tarea) {
      tarea.completada = true;
      resolve(`Tarea marcada como completada: ${indicador}`);
    } else {
      reject(`No se encontró la tarea con indicador ${indicador}`);
    }
  });
}

function mostrarListaTareas() {
  console.log("Lista de tareas:");
  listaTareas.forEach(tarea => {
    const estado = tarea.completada ? "Completada" : "Pendiente";
    console.log(`- ${tarea.indicador}: ${tarea.descripcion} (${estado})`);
  });
  console.log("-----------------------");
}
// Usando async/await
async function ejemploAsyncAwait() {
    try {
      await agregarTarea(1, "Hacer la compra");
      await agregarTarea(2, "Estudiar para el examen");
      await completarTarea(1);
      await eliminarTarea(2);
      mostrarListaTareas();
    } catch (error) {
      console.error(error);
    }
  }
  
  ejemploAsyncAwait();
  
  // Usando el método then()
  agregarTarea(3, "Llamar al médico")
    .then(mostrarListaTareas)
    .then(() => eliminarTarea(1))
    .then(mostrarListaTareas)
    .then(() => completarTarea(3))
    .then(mostrarListaTareas)
    .catch(error => console.error(error));