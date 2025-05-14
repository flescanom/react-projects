## Enunciado

Crea una aplicación para buscar películas

API a usar: - https://www.omdbapi.com/
Consigue la API Key en la propia página web registrando tu email.

Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar: Se crea un form con un input y un boton.

✅ Lista las películas y muestra el título, año y poster: Se crea un main con un map de un arreglo de peliculas.

✅ Que el formulario funcione

✅ Haz que las películas se muestren en un grid responsive.

✅ Hacer el fetching de datos a la API: Se crea un custom hook llamado useMovies

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas:
    Se logra controlar haciendo uso del useRef y guardando la busqueda anterior. Se compara en cada busqueda nueva para saber si es igual o diferente
    Tambien se usa useCallback, se engloba toda la funcion de getMovies para guardar la referencia de la funcion y no volver a llamarla todo el tiempo.

✅ Haz que la búsqueda se haga automáticamente al escribir:
    Al tener un input controlado y chequear cada uno de los valores que se van ingresando se puede hacer,
    tambien se debe poder recibir un parametro en el getMovies para ir haceindo el llamando con los valores 
    que se van ingresando. 

✅ Evita que se haga la búsqueda continuamente al escribir (debounce): 
    Se usa un debounce que implementa por debajo un timer y llama a la funcion con el tiempo definido. 
    Se uso la dependencia just-debounce-it