¿Qué sucedió al usar async y await?
Con async/await, el código parece más síncrono y legible. Las funciones asincrónicas se ejecutan de manera secuencial y la palabra clave await pausa la ejecución hasta que la promesa se resuelve o se rechaza. Esto hace que el código sea más similar a un estilo de programación síncrona, facilitando la comprensión.

¿Qué sucedió al usar el método then()?
Al utilizar el método then(), se encadenan las llamadas a las funciones que devuelven promesas. Cada then espera a que la promesa anterior se resuelva antes de ejecutarse. Esto también permite manejar los errores utilizando catch al final de la cadena.

¿Qué diferencias encontraste entre async, await y el método then()?
async/await proporciona una sintaxis más limpia y legible, haciendo que el código se parezca a un estilo de programación síncrona.
El método then() es útil cuando se trabaja con promesas, pero su estilo es más parecido a un enfoque funcional y puede ser menos intuitivo en comparación con async/await.
async/await facilita el manejo de errores utilizando bloques try/catch, mientras que con then() se utiliza catch al final de la cadena.
En términos de rendimiento, no hay una gran diferencia entre ambas formas de trabajar con promesas. La elección entre async/await y then() a menudo depende del estilo de codificación preferido y la legibilidad del código.