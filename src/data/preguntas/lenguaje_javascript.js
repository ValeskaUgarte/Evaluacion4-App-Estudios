const preguntas_lenguaje_javascript = [



    // ==================== BÁSICO (preguntas 1-100) ====================

    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Variables", diff: "easy",
        q: "¿Cuál es la diferencia entre 'let' y 'var'?",
        opts: ["let tiene alcance de bloque, var tiene alcance de función", "let se usa solo para números", "var no se puede reasignar", "let es más lento"],
        ans: 0, exp: "let respeta bloques {}, var no."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Variables", diff: "easy",
        q: "¿Qué palabra clave se usa para declarar una constante?",
        opts: ["let", "var", "const", "constant"],
        ans: 2, exp: "const declara valores que no se pueden reasignar."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Tipos", diff: "easy",
        q: "¿Qué devuelve typeof null?",
        opts: ["'null'", "'undefined'", "'object'", "'number'"],
        ans: 2, exp: "Error histórico de JS: typeof null === 'object'."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Tipos", diff: "easy",
        q: "¿Qué devuelve typeof []?",
        opts: ["'array'", "'object'", "'list'", "'undefined'"],
        ans: 1, exp: "Los arrays son objetos en JS."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Tipos", diff: "easy",
        q: "¿Cuál de estos es un tipo primitivo?",
        opts: ["Object", "Array", "Symbol", "Function"],
        ans: 2, exp: "Symbol es primitivo, los demás son objetos."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Operadores", diff: "easy",
        q: "¿Qué devuelve '5' + 3?",
        opts: ["8", "53", "error", "undefined"],
        ans: 1, exp: "El operador + convierte número a string."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Operadores", diff: "easy",
        q: "¿Qué devuelve '10' - 5?",
        opts: ["5", "105", "NaN", "error"],
        ans: 0, exp: "- convierte strings a números."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Operadores", diff: "easy",
        q: "¿Qué devuelve 5 === '5'?",
        opts: ["true", "false", "undefined", "error"],
        ans: 1, exp: "=== compara valor y tipo."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Operadores", diff: "easy",
        q: "¿Qué devuelve 5 == '5'?",
        opts: ["true", "false", "undefined", "error"],
        ans: 0, exp: "== convierte tipos antes de comparar."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Operadores", diff: "easy",
        q: "¿Qué devuelve !true?",
        opts: ["true", "false", "undefined", "null"],
        ans: 1, exp: "El operador ! niega el valor booleano."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Funciones", diff: "easy",
        q: "¿Cómo se define una función?",
        opts: ["def miFuncion() {}", "function miFuncion() {}", "func miFuncion() {}", "create miFuncion() {}"],
        ans: 1, exp: "Palabra clave 'function'."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Funciones", diff: "easy",
        q: "¿Qué palabra se usa para devolver un valor?",
        opts: ["return", "exit", "yield", "send"],
        ans: 0, exp: "return devuelve valor y termina la función."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Funciones", diff: "easy",
        q: "¿Qué es una función anónima?",
        opts: ["Función sin nombre", "Función que no retorna nada", "Función vacía", "Función con parámetros"],
        ans: 0, exp: "No tiene identificador."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Cómo accedes al primer elemento de un array arr?",
        opts: ["arr[0]", "arr[1]", "arr.first()", "arr[0]()"],
        ans: 0, exp: "Los índices empiezan en 0."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué método agrega un elemento al final?",
        opts: ["push()", "pop()", "shift()", "unshift()"],
        ans: 0, exp: "push() añade al final."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué método elimina el último elemento?",
        opts: ["push()", "pop()", "shift()", "unshift()"],
        ans: 1, exp: "pop() elimina el último."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué propiedad da la longitud de un array?",
        opts: ["length", "size", "count", "len"],
        ans: 0, exp: "array.length devuelve número de elementos."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Objetos", diff: "easy",
        q: "¿Cómo accedes a propiedad 'nombre' de objeto persona?",
        opts: ["persona.nombre", "persona['nombre']", "ambas", "persona->nombre"],
        ans: 2, exp: "Notación punto o corchetes."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Objetos", diff: "easy",
        q: "¿Cómo creas un objeto vacío?",
        opts: ["{}", "[]", "new()", "Object.create()"],
        ans: 0, exp: "{} es la forma literal."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Bucles", diff: "easy",
        q: "¿Cuál bucle ejecuta al menos una vez?",
        opts: ["for", "while", "do...while", "forEach"],
        ans: 2, exp: "do...while ejecuta primero, evalúa después."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Bucles", diff: "easy",
        q: "¿Qué hace 'break' en un bucle?",
        opts: ["Termina el bucle", "Salta una iteración", "Reinicia el bucle", "No hace nada"],
        ans: 0, exp: "break sale del bucle inmediatamente."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Bucles", diff: "easy",
        q: "¿Qué hace 'continue'?",
        opts: ["Termina el bucle", "Salta a la siguiente iteración", "Reinicia el bucle", "No hace nada"],
        ans: 1, exp: "continue omite el resto de la iteración actual."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué hace 'else if'?",
        opts: ["Condición adicional", "Termina el if", "Solo para números", "Bucle"],
        ans: 0, exp: "Permite múltiples condiciones."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué operador es '&&'?",
        opts: ["OR", "AND", "NOT", "XOR"],
        ans: 1, exp: "AND lógico."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué operador es '||'?",
        opts: ["OR", "AND", "NOT", "XOR"],
        ans: 0, exp: "OR lógico."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Strings", diff: "easy",
        q: "¿Cómo obtienes la longitud de un string?",
        opts: ["length()", "size()", "length", "len"],
        ans: 2, exp: "string.length es propiedad."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Strings", diff: "easy",
        q: "¿Qué método convierte string a mayúsculas?",
        opts: ["toUpperCase()", "toLowerCase()", "toUpper()", "toCaps()"],
        ans: 0, exp: "toUpperCase() devuelve el string en mayúsculas."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Numbers", diff: "easy",
        q: "¿Qué es NaN?",
        opts: ["Not a Number", "Null a Number", "Number a Null", "No es null"],
        ans: 0, exp: "Representa 'Not a Number'."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Numbers", diff: "easy",
        q: "¿Cómo verificas si algo es NaN?",
        opts: ["isNaN()", "isNotNumber()", "typeof NaN", "NaN.check()"],
        ans: 0, exp: "isNaN() comprueba si es Not a Number."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Console", diff: "easy",
        q: "¿Qué método de consola imprime un mensaje?",
        opts: ["console.print()", "console.log()", "console.echo()", "console.write()"],
        ans: 1, exp: "console.log() es el más común."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Console", diff: "easy",
        q: "¿Qué método muestra un error en rojo?",
        opts: ["console.log()", "console.error()", "console.warn()", "console.info()"],
        ans: 1, exp: "console.error() muestra en rojo."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Template Strings", diff: "easy",
        q: "¿Qué delimitador usan los template strings?",
        opts: ["Comillas simples", "Comillas dobles", "Acentos graves (`)", "Corchetes"],
        ans: 2, exp: "Template strings usan backticks."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Template Strings", diff: "easy",
        q: "¿Qué sintaxis inserta variable en template string?",
        opts: ["${var}", "$var", "{var}", "[var]"],
        ans: 0, exp: "${variable} es la sintaxis correcta."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Scope", diff: "easy",
        q: "¿Qué es scope global?",
        opts: ["Variable accesible desde cualquier parte", "Variable dentro de función", "Variable dentro de bloque", "Variable temporal"],
        ans: 0, exp: "Las globales están en window/globalThis."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Hoisting", diff: "easy",
        q: "¿Qué hace hoisting con 'var'?",
        opts: ["Eleva declaración pero no asignación", "Eleva todo", "No eleva nada", "Solo eleva funciones"],
        ans: 0, exp: "var se eleva con valor undefined."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Funciones", diff: "easy",
        q: "¿Qué son los parámetros por defecto?",
        opts: ["function fn(x=5) {}", "function fn(x:5) {}", "function fn(x default 5) {}", "function fn(=5 x) {}"],
        ans: 0, exp: "ES6 permite valores por defecto."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Operadores", diff: "easy",
        q: "¿Qué devuelve 10 % 3?",
        opts: ["3", "1", "0", "3.33"],
        ans: 1, exp: "% es módulo, resto de división."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Operadores", diff: "easy",
        q: "¿Qué hace ++x?",
        opts: ["Incrementa después de usar", "Incrementa antes de usar", "Decrementa", "No hace nada"],
        ans: 1, exp: "Prefijo: incrementa, luego usa."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Operadores", diff: "easy",
        q: "¿Qué hace x++?",
        opts: ["Incrementa después de usar", "Incrementa antes de usar", "Decrementa", "No hace nada"],
        ans: 0, exp: "Sufijo: usa, luego incrementa."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Comparación", diff: "easy",
        q: "¿Qué devuelve 0 == false?",
        opts: ["true", "false", "undefined", "error"],
        ans: 0, exp: "0 es falsy, false es falsy, igualdad abstracta true."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Comparación", diff: "easy",
        q: "¿Qué devuelve 0 === false?",
        opts: ["true", "false", "undefined", "error"],
        ans: 1, exp: "0 es number, false es boolean, tipos distintos."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Null/Undefined", diff: "easy",
        q: "¿Diferencia entre null y undefined?",
        opts: ["null es asignado, undefined es no definido", "Son iguales", "null es número", "undefined es objeto"],
        ans: 0, exp: "undefined por defecto, null intencional."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Type coercion", diff: "easy",
        q: "¿Qué devuelve Boolean('false')?",
        opts: ["false", "true", "undefined", "error"],
        ans: 1, exp: "Cualquier string no vacío es truthy."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Type coercion", diff: "easy",
        q: "¿Qué devuelve Boolean('')?",
        opts: ["true", "false", "undefined", "null"],
        ans: 1, exp: "String vacío es falsy."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Type coercion", diff: "easy",
        q: "¿Qué devuelve Boolean(0)?",
        opts: ["true", "false", "undefined", "null"],
        ans: 1, exp: "0 es falsy."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Type coercion", diff: "easy",
        q: "¿Qué devuelve Boolean(1)?",
        opts: ["true", "false", "undefined", "null"],
        ans: 0, exp: "1 es truthy."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué método convierte array a string con separador?",
        opts: ["join()", "split()", "concat()", "slice()"],
        ans: 0, exp: "join(separador) une elementos."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Strings", diff: "easy",
        q: "¿Qué método convierte string en array?",
        opts: ["join()", "split()", "concat()", "slice()"],
        ans: 1, exp: "split(separador) divide string en array."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Math", diff: "easy",
        q: "¿Qué método redondea hacia arriba?",
        opts: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"],
        ans: 1, exp: "ceil() = techo."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Math", diff: "easy",
        q: "¿Qué método redondea hacia abajo?",
        opts: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"],
        ans: 0, exp: "floor() = suelo."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Math", diff: "easy",
        q: "¿Qué método redondea al entero más cercano?",
        opts: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"],
        ans: 2, exp: "round() redondea estándar."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Math", diff: "easy",
        q: "¿Qué método genera número aleatorio?",
        opts: ["Math.random()", "Math.rand()", "Math.randomize()", "Math.aleatorio()"],
        ans: 0, exp: "random() entre 0 y 1."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Date", diff: "easy",
        q: "¿Cómo crear fecha actual?",
        opts: ["new Date()", "Date.now()", "ambas", "Date.create()"],
        ans: 2, exp: "new Date() objeto, Date.now() timestamp."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Event Loop", diff: "easy",
        q: "¿setTimeout es nativo de JS?",
        opts: ["Sí", "No, es del navegador", "Solo Node", "Es de CSS"],
        ans: 1, exp: "setTimeout es API del entorno (Web/Node)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Event Loop", diff: "easy",
        q: "¿setTimeout(cb, 0) ejecuta cb inmediatamente?",
        opts: ["Sí", "No, se va a cola de tareas", "Solo en Node", "Depende"],
        ans: 1, exp: "Se ejecuta después del código síncrono."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Promises", diff: "easy",
        q: "¿Qué método crea una Promise resuelta?",
        opts: ["Promise.resolve()", "Promise.reject()", "new Promise()", "Promise.all()"],
        ans: 0, exp: "Promise.resolve() devuelve promesa resuelta."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Promises", diff: "easy",
        q: "¿Qué método crea una Promise rechazada?",
        opts: ["Promise.resolve()", "Promise.reject()", "new Promise()", "Promise.all()"],
        ans: 1, exp: "Promise.reject() devuelve promesa rechazada."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "JSON", diff: "easy",
        q: "¿Qué método convierte objeto a JSON string?",
        opts: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.encode()"],
        ans: 1, exp: "stringify() serializa."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "JSON", diff: "easy",
        q: "¿Qué método convierte JSON string a objeto?",
        opts: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.decode()"],
        ans: 0, exp: "parse() deserializa."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Operadores", diff: "easy",
        q: "¿Qué hace el operador typeof?",
        opts: ["Devuelve tipo de dato", "Devuelve tamaño", "Devuelve nombre", "Devuelve dirección"],
        ans: 0, exp: "typeof devuelve string con el tipo."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Operadores", diff: "easy",
        q: "¿Qué devuelve typeof function(){}?",
        opts: ["'function'", "'object'", "'undefined'", "'array'"],
        ans: 0, exp: "typeof función devuelve 'function'."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Operadores", diff: "easy",
        q: "¿Qué devuelve typeof Symbol()?",
        opts: ["'symbol'", "'object'", "'function'", "'string'"],
        ans: 0, exp: "Symbol es tipo primitivo."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Operadores", diff: "easy",
        q: "¿Qué devuelve 2 ** 3?",
        opts: ["6", "8", "9", "5"],
        ans: 1, exp: "** es exponenciación: 2³ = 8."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Operadores", diff: "easy",
        q: "¿Qué hace ?? (nullish coalescing)?",
        opts: ["Devuelve derecha si izquierda null/undefined", "OR lógico", "AND lógico", "Asignación"],
        ans: 0, exp: "?? solo para null/undefined, no para falsy."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Operadores", diff: "easy",
        q: "¿Qué hace ?. (optional chaining)?",
        opts: ["Accede seguro si existe", "Condicional ternario", "Asignación", "Comparación"],
        ans: 0, exp: "Si izquierdo es null/undefined, devuelve undefined."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué método elimina el primer elemento?",
        opts: ["pop()", "shift()", "unshift()", "splice()"],
        ans: 1, exp: "shift() elimina y devuelve primer elemento."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué método agrega al principio?",
        opts: ["push()", "shift()", "unshift()", "splice()"],
        ans: 2, exp: "unshift() agrega al inicio."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué método extrae una porción sin modificar original?",
        opts: ["splice()", "slice()", "split()", "concat()"],
        ans: 1, exp: "slice(start, end) copia superficial."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué método modifica array eliminando/agregando?",
        opts: ["splice()", "slice()", "split()", "concat()"],
        ans: 0, exp: "splice() modifica el array original."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué método combina arrays?",
        opts: ["join()", "concat()", "merge()", "combine()"],
        ans: 1, exp: "concat() une arrays sin modificar originales."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué método itera y ejecuta función por cada elemento?",
        opts: ["map()", "forEach()", "filter()", "reduce()"],
        ans: 1, exp: "forEach() ejecuta función, no retorna array nuevo."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué método crea nuevo array transformado?",
        opts: ["map()", "forEach()", "filter()", "reduce()"],
        ans: 0, exp: "map() retorna nuevo array de igual longitud."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué método filtra elementos?",
        opts: ["map()", "forEach()", "filter()", "reduce()"],
        ans: 2, exp: "filter() retorna array con elementos que cumplen condición."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué método reduce array a un valor?",
        opts: ["map()", "forEach()", "filter()", "reduce()"],
        ans: 3, exp: "reduce(acumulador, valorActual) -> valor único."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué método busca índice de un elemento?",
        opts: ["indexOf()", "findIndex()", "ambos", "search()"],
        ans: 2, exp: "indexOf por valor, findIndex por función."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué método verifica si al menos uno cumple condición?",
        opts: ["every()", "some()", "includes()", "find()"],
        ans: 1, exp: "some() true si alguno cumple."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Arrays", diff: "easy",
        q: "¿Qué método verifica si todos cumplen condición?",
        opts: ["every()", "some()", "includes()", "find()"],
        ans: 0, exp: "every() true si todos cumplen."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Objetos", diff: "easy",
        q: "¿Cómo obtener las claves de un objeto?",
        opts: ["Object.keys()", "Object.values()", "Object.entries()", "Object.get()"],
        ans: 0, exp: "Object.keys(obj) devuelve array de claves."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Objetos", diff: "easy",
        q: "¿Cómo obtener los valores de un objeto?",
        opts: ["Object.keys()", "Object.values()", "Object.entries()", "Object.get()"],
        ans: 1, exp: "Object.values(obj) devuelve array de valores."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Objetos", diff: "easy",
        q: "¿Cómo obtener pares [clave, valor]?",
        opts: ["Object.keys()", "Object.values()", "Object.entries()", "Object.pairs()"],
        ans: 2, exp: "Object.entries() útil para iterar."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Objetos", diff: "easy",
        q: "¿Cómo copiar propiedades entre objetos?",
        opts: ["Object.assign()", "Object.copy()", "Object.clone()", "Object.merge()"],
        ans: 0, exp: "Object.assign(target, ...sources)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Funciones flecha", diff: "easy",
        q: "¿Qué palabra reemplaza 'function' en arrow functions?",
        opts: ["=>", "->", "=>", "arrow"],
        ans: 0, exp: "() => {} es sintaxis."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Funciones flecha", diff: "easy",
        q: "¿Las arrow functions tienen su propio 'this'?",
        opts: ["Sí", "No, heredan del contexto padre", "Solo en modo estricto", "Depende"],
        ans: 1, exp: "No tienen this propio."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Destructuring", diff: "easy",
        q: "¿Qué hace const {a, b} = obj?",
        opts: ["Destructuring de objeto", "Destructuring de array", "Crea objeto", "Copia array"],
        ans: 0, exp: "Extrae propiedades a y b."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Destructuring", diff: "easy",
        q: "¿Qué hace const [a, b] = arr?",
        opts: ["Destructuring de objeto", "Destructuring de array", "Crea objeto", "Copia array"],
        ans: 1, exp: "Extrae primeros elementos en a y b."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Spread", diff: "easy",
        q: "¿Qué hace ... en [...arr]?",
        opts: ["Spread", "Rest", "Destructuring", "Concatenación"],
        ans: 0, exp: "Spread expande elementos."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Rest", diff: "easy",
        q: "¿Qué hace ... en function(...args)?",
        opts: ["Spread", "Rest", "Destructuring", "Concatenación"],
        ans: 1, exp: "Rest agrupa argumentos en array."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Clases", diff: "easy",
        q: "¿Qué palabra clave define una clase?",
        opts: ["class", "Class", "clase", "prototype"],
        ans: 0, exp: "class Nombre {}"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Clases", diff: "easy",
        q: "¿Qué método se llama al instanciar?",
        opts: ["init()", "constructor()", "create()", "new()"],
        ans: 1, exp: "constructor() es el inicializador."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Clases", diff: "easy",
        q: "¿Qué palabra clave hereda de otra clase?",
        opts: ["extends", "inherits", "super", "implements"],
        ans: 0, exp: "class Hija extends Madre"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Módulos", diff: "easy",
        q: "¿Qué palabra exporta un módulo?",
        opts: ["export", "exports", "module.exports", "todas"],
        ans: 3, exp: "ES6: export, CommonJS: module.exports."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Módulos", diff: "easy",
        q: "¿Qué palabra importa un módulo?",
        opts: ["import", "require", "ambas", "include"],
        ans: 2, exp: "ES6: import, CommonJS: require."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Try/Catch", diff: "easy",
        q: "¿Qué bloque captura errores?",
        opts: ["try", "catch", "finally", "throw"],
        ans: 1, exp: "catch(error) ejecuta si hay error."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Try/Catch", diff: "easy",
        q: "¿Qué palabra lanza un error manual?",
        opts: ["try", "catch", "finally", "throw"],
        ans: 3, exp: "throw new Error('mensaje')"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "This", diff: "easy",
        q: "En el navegador, ¿qué es 'this' global?",
        opts: ["window", "global", "this", "self"],
        ans: 0, exp: "En navegador, globalThis = window."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Strict mode", diff: "easy",
        q: "¿Qué hace 'use strict'?",
        opts: ["Activa modo estricto", "Desactiva errores", "Optimiza código", "Silencia warnings"],
        ans: 0, exp: "Previene malas prácticas."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Set", diff: "easy",
        q: "¿Qué hace new Set()?",
        opts: ["Elimina duplicados", "Ordena elementos", "Filtra elementos", "Convierte a objeto"],
        ans: 0, exp: "Set almacena valores únicos."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Map", diff: "easy",
        q: "Diferencia entre Map y objeto",
        opts: ["Map acepta cualquier clave", "Objeto solo strings/symbols", "ambas", "Map es más lento"],
        ans: 2, exp: "Map mantiene orden y claves flexibles."
    },

    // ==================== INTERMEDIO (preguntas 101-200) ====================

    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Closures", diff: "medium",
        q: "¿Qué es un closure?",
        opts: ["Función que recuerda su scope externo", "Función dentro de función", "Variable global", "Bloque de código"],
        ans: 0, exp: "Closure: función + entorno léxico."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Closures", diff: "medium",
        q: "¿Qué imprime este código? for(var i=0;i<3;i++){ setTimeout(()=>console.log(i), 0); }",
        opts: ["0,1,2", "3,3,3", "undefined", "error"],
        ans: 1, exp: "var tiene scope global, al final i=3."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Closures", diff: "medium",
        q: "¿Cómo arreglar el problema anterior con var?",
        opts: ["Usar let", "IIFE", "ambas", "ninguna"],
        ans: 2, exp: "let o IIFE capturan valor correcto."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Prototype", diff: "medium",
        q: "¿Qué es prototype en JS?",
        opts: ["Mecanismo de herencia", "Función constructora", "Objeto vacío", "Tipo de dato"],
        ans: 0, exp: "JS usa herencia prototípica."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Prototype", diff: "medium",
        q: "¿Cómo agregas método a todas las instancias?",
        opts: ["Constructor.prototype.metodo", "this.metodo", "instancia.metodo", "clase.metodo"],
        ans: 0, exp: "Se agrega al prototipo del constructor."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Prototype chain", diff: "medium",
        q: "¿Qué hace Object.create(proto)?",
        opts: ["Crea objeto con prototipo dado", "Clona objeto", "Fusiona objetos", "Copia superficial"],
        ans: 0, exp: "Nuevo objeto con proto como prototipo."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "This binding", diff: "medium",
        q: "¿Qué imprime? const obj = {fn: () => { console.log(this); }}; obj.fn();",
        opts: ["obj", "window/global", "undefined", "null"],
        ans: 1, exp: "Arrow functions toman this del contexto padre (global)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "This binding", diff: "medium",
        q: "¿Qué métodos cambian explícitamente 'this'?",
        opts: ["call(), apply(), bind()", "map(), filter()", "then(), catch()", "setTimeout()"],
        ans: 0, exp: "call/apply ejecutan, bind devuelve función."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "This binding", diff: "medium",
        q: "Diferencia entre call y apply",
        opts: ["call: argumentos separados, apply: array", "apply: separados, call: array", "iguales", "call es más rápido"],
        ans: 0, exp: "call(this, arg1, arg2), apply(this, [args])."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Event Loop", diff: "medium",
        q: "¿Qué ejecuta primero? setTimeout(()=>console.log('A'),0); Promise.resolve().then(()=>console.log('B'));",
        opts: ["A luego B", "B luego A", "simultáneo", "error"],
        ans: 1, exp: "Microtasks (Promise) antes que macrotasks (setTimeout)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Event Loop", diff: "medium",
        q: "¿Qué son microtasks?",
        opts: ["Promises, MutationObserver", "setTimeout, setInterval", "I/O", "Eventos DOM"],
        ans: 0, exp: "Microtasks tienen prioridad sobre macrotasks."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Promises", diff: "medium",
        q: "¿Qué método espera todas las promesas?",
        opts: ["Promise.all()", "Promise.race()", "Promise.any()", "Promise.allSettled()"],
        ans: 0, exp: "all() falla si una falla."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Promises", diff: "medium",
        q: "¿Qué método da la primera resuelta?",
        opts: ["Promise.all()", "Promise.race()", "Promise.any()", "Promise.allSettled()"],
        ans: 1, exp: "race() da la primera en resolverse o rechazarse."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Promises", diff: "medium",
        q: "¿Qué método da primera exitosa?",
        opts: ["Promise.all()", "Promise.race()", "Promise.any()", "Promise.allSettled()"],
        ans: 2, exp: "any() ignora rechazos, espera primera resuelta."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Promises", diff: "medium",
        q: "¿Qué método espera todas sin importar éxito/fracaso?",
        opts: ["Promise.all()", "Promise.race()", "Promise.any()", "Promise.allSettled()"],
        ans: 3, exp: "allSettled() retorna estados de todas."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Async/Await", diff: "medium",
        q: "¿Qué palabra pausa async function?",
        opts: ["await", "wait", "pause", "yield"],
        ans: 0, exp: "await espera resolución de Promise."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Async/Await", diff: "medium",
        q: "¿Cómo capturas error en async/await?",
        opts: ["try/catch", ".catch()", "ambas", "ninguna"],
        ans: 2, exp: "try/catch o encadenar .catch()."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Hoisting", diff: "medium",
        q: "¿Qué imprime? console.log(a); let a = 5;",
        opts: ["5", "undefined", "ReferenceError", "null"],
        ans: 2, exp: "let está en TDZ (Temporal Dead Zone)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Hoisting", diff: "medium",
        q: "¿Qué imprime? console.log(a); var a = 5;",
        opts: ["5", "undefined", "ReferenceError", "null"],
        ans: 1, exp: "var se eleva con undefined."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Currying", diff: "medium",
        q: "¿Qué es currying?",
        opts: ["Transformar f(a,b,c) en f(a)(b)(c)", "Llamar función recursiva", "Composición de funciones", "Memoización"],
        ans: 0, exp: "Currying descompone argumentos múltiples en cadena."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Composición", diff: "medium",
        q: "¿Qué hace compose(f, g)(x)?",
        opts: ["f(g(x))", "g(f(x))", "f(x) + g(x)", "f(x) * g(x)"],
        ans: 0, exp: "Composición: aplica g luego f."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Memoization", diff: "medium",
        q: "¿Qué es memoization?",
        opts: ["Cachear resultados de función", "Recursividad", "Closures", "Promesas"],
        ans: 0, exp: "Almacena resultados para optimizar llamadas repetidas."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debounce", diff: "medium",
        q: "¿Qué hace debounce?",
        opts: ["Retrasa ejecución hasta que pase tiempo sin llamadas", "Ejecuta inmediato", "Limita frecuencia", "Acumula llamadas"],
        ans: 0, exp: "Útil para búsquedas en tiempo real."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Throttle", diff: "medium",
        q: "¿Qué hace throttle?",
        opts: ["Ejecuta máximo cada N ms", "Retrasa ejecución", "Cancela llamadas", "Acumula parámetros"],
        ans: 0, exp: "Controla frecuencia de ejecución."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Deep copy", diff: "medium",
        q: "¿Cómo hacer deep copy de objeto?",
        opts: ["structuredClone()", "JSON.parse(JSON.stringify())", "ambas", "Object.assign()"],
        ans: 2, exp: "structuredClone() es moderna, JSON tiene limitaciones (funciones, undefined)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Shallow copy", diff: "medium",
        q: "¿Qué es shallow copy?",
        opts: ["Copia solo primer nivel", "Copia todo", "Referencia original", "Copia funciones"],
        ans: 0, exp: "Objetos anidados siguen siendo referencia."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Garbage collection", diff: "medium",
        q: "¿Algoritmo de GC en JS?",
        opts: ["Mark-and-sweep", "Reference counting", "ambos", "Copying"],
        ans: 0, exp: "Mark-and-sweep es estándar moderno."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Memory leaks", diff: "medium",
        q: "¿Qué causa memory leak?",
        opts: ["Variables globales no limpiadas", "Event listeners sin remover", "ambas", "Uso de const"],
        ans: 2, exp: "Referencias no liberadas."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Design Patterns", diff: "medium",
        q: "¿Patrón Singleton?",
        opts: ["Una única instancia", "Múltiples instancias", "Fábrica", "Observador"],
        ans: 0, exp: "Ejemplo: módulos en JS."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Design Patterns", diff: "medium",
        q: "¿Patrón Module?",
        opts: ["Encapsula código con IIFE o ES6 modules", "Crea objetos", "Hereda", "Itera"],
        ans: 0, exp: "Module pattern da privacidad."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Design Patterns", diff: "medium",
        q: "¿Patrón Observer?",
        opts: ["Sujeto notifica a observadores", "Uno a uno", "Cadena de responsabilidad", "Estrategia"],
        ans: 0, exp: "EventEmitter, RxJS."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Proxy", diff: "medium",
        q: "¿Qué hace new Proxy(target, handler)?",
        opts: ["Intercepta operaciones del objeto", "Clona objeto", "Congela objeto", "Sella objeto"],
        ans: 0, exp: "Proxy permite trampas (get, set, etc.)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Reflect", diff: "medium",
        q: "¿Qué hace Reflect?",
        opts: ["API para operaciones de objeto", "Similar a Object", "ambas", "Solo metadatos"],
        ans: 2, exp: "Reflect tiene métodos como Reflect.get()."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Symbol", diff: "medium",
        q: "¿Propiedad de Symbol.iterator?",
        opts: ["Define iterador personalizado", "Define constructor", "Define toString", "Define valor"],
        ans: 0, exp: "for...of usa Symbol.iterator."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Generators", diff: "medium",
        q: "¿Qué función usa function*?",
        opts: ["Generator", "Arrow function", "Async function", "Constructor"],
        ans: 0, exp: "Generators producen secuencias con yield."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Generators", diff: "medium",
        q: "¿Qué palabra pausa generator?",
        opts: ["yield", "await", "return", "break"],
        ans: 0, exp: "yield pausa y devuelve valor."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "RegExp", diff: "medium",
        q: "¿Qué flag de regex ignora mayúsculas?",
        opts: ["i", "g", "m", "s"],
        ans: 0, exp: "i = case-insensitive."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "RegExp", diff: "medium",
        q: "¿Qué flag busca todas las coincidencias?",
        opts: ["i", "g", "m", "s"],
        ans: 1, exp: "g = global."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Web Workers", diff: "medium",
        q: "¿Qué hacen los Web Workers?",
        opts: ["Ejecutar código en hilo paralelo", "Manipular DOM", "Hacer fetch", "Guardar datos"],
        ans: 0, exp: "No bloquean UI."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Service Workers", diff: "medium",
        q: "¿Para qué sirven Service Workers?",
        opts: ["Cache y PWA", "Cálculos pesados", "Animaciones", "Eventos DOM"],
        ans: 0, exp: "Interceptan requests, permiten offline."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "IndexedDB", diff: "medium",
        q: "¿Qué es IndexedDB?",
        opts: ["Base de datos NoSQL cliente", "Storage síncrono", "Cookies", "SessionStorage"],
        ans: 0, exp: "Almacenamiento asíncrono de gran tamaño."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Fetch API", diff: "medium",
        q: "¿Qué método HTTP usa fetch por defecto?",
        opts: ["GET", "POST", "PUT", "DELETE"],
        ans: 0, exp: "fetch(url) es GET."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Fetch API", diff: "medium",
        q: "¿Cómo hacer POST con fetch?",
        opts: ["method: 'POST' en options", "fetch.post()", "fetchPost()", "postFetch()"],
        ans: 0, exp: "{ method: 'POST', body: data }"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "CORS", diff: "medium",
        q: "¿Qué es CORS?",
        opts: ["Mecanismo seguridad cross-origin", "Protocolo HTTP", "Tipo de cookie", "Formato JSON"],
        ans: 0, exp: "Cross-Origin Resource Sharing."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Cookies vs Storage", diff: "medium",
        q: "¿Límite de localStorage?",
        opts: ["~5-10MB", "4KB", "1MB", "100MB"],
        ans: 0, exp: "Depende del navegador."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Session vs Local", diff: "medium",
        q: "Diferencia sessionStorage y localStorage",
        opts: ["sessionStorage expira al cerrar pestaña", "localStorage expira", "iguales", "sessionStorage es global"],
        ans: 0, exp: "sessionStorage es por sesión de pestaña."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Event Delegation", diff: "medium",
        q: "¿Qué es event delegation?",
        opts: ["Padre maneja eventos de hijos", "Hijo maneja evento de padre", "Eventos globales", "stopPropagation"],
        ans: 0, exp: "Útil para elementos dinámicos."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Event Bubbling", diff: "medium",
        q: "¿Qué hace stopPropagation?",
        opts: ["Detiene burbujeo", "Previene acción default", "Ambos", "Ninguno"],
        ans: 0, exp: "stopPropagation() evita que evento suba."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Event Default", diff: "medium",
        q: "¿Qué hace preventDefault?",
        opts: ["Previene comportamiento por defecto", "Detiene burbujeo", "Ambos", "Ninguno"],
        ans: 0, exp: "Ejemplo: evitar envío de formulario."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Intersection Observer", diff: "medium",
        q: "¿Para qué sirve Intersection Observer?",
        opts: ["Detectar visibilidad de elemento", "Observar cambios tamaño", "Observar atributos", "Detectar clicks"],
        ans: 0, exp: "Lazy loading, infinito scroll."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Mutation Observer", diff: "medium",
        q: "¿Qué detecta Mutation Observer?",
        opts: ["Cambios en DOM", "Eventos de mouse", "Fetch requests", "Console logs"],
        ans: 0, exp: "Monitorea adiciones, eliminaciones, atributos."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Resize Observer", diff: "medium",
        q: "¿Qué detecta Resize Observer?",
        opts: ["Cambios de tamaño de elemento", "Cambios de scroll", "Cambios de color", "Cambios de texto"],
        ans: 0, exp: "Útil para layouts responsivos."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "WeakMap", diff: "medium",
        q: "Diferencia entre Map y WeakMap",
        opts: ["WeakMap solo objetos como clave y no evita GC", "WeakMap más rápido", "Map solo strings", "Son iguales"],
        ans: 0, exp: "WeakMap permite garbage collection de claves."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "WeakSet", diff: "medium",
        q: "¿Qué guarda WeakSet?",
        opts: ["Objetos débilmente referenciados", "Valores primitivos", "Funciones", "Strings"],
        ans: 0, exp: "No previene garbage collection."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Typed Arrays", diff: "medium",
        q: "¿Qué es Uint8Array?",
        opts: ["Array de enteros 8-bit sin signo", "Array de strings", "Array de floats", "Array de objetos"],
        ans: 0, exp: "Para datos binarios."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "ArrayBuffer", diff: "medium",
        q: "¿Qué es ArrayBuffer?",
        opts: ["Buffer binario raw", "Array normal", "Objeto con métodos", "Typed array"],
        ans: 0, exp: "Base para TypedArrays y DataView."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "DataView", diff: "medium",
        q: "¿Para qué sirve DataView?",
        opts: ["Leer/escribir múltiples tipos en buffer", "Ver datos", "Copiar datos", "Eliminar datos"],
        ans: 0, exp: "Control de endianness."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Blob", diff: "medium",
        q: "¿Qué es Blob?",
        opts: ["Datos binarios grandes", "Función", "Objeto", "Array"],
        ans: 0, exp: "File, imágenes, etc."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "File API", diff: "medium",
        q: "¿Cómo leer archivo en cliente?",
        opts: ["FileReader", "Blob.read()", "File.read()", "ReadStream"],
        ans: 0, exp: "FileReader asíncrono."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "FormData", diff: "medium",
        q: "¿Para qué sirve FormData?",
        opts: ["Construir formularios para fetch", "Validar formularios", "Estilar formularios", "Animaciones"],
        ans: 0, exp: "Envía archivos fácilmente."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "URL API", diff: "medium",
        q: "¿Qué hace new URL()?",
        opts: ["Parsear y manipular URLs", "Fetch URL", "Codificar URL", "Decodificar URL"],
        ans: 0, exp: "Propiedades: href, hostname, searchParams."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "URLSearchParams", diff: "medium",
        q: "¿Qué hace URLSearchParams?",
        opts: ["Manipular query strings", "Manipular path", "Manipular hash", "Manipular protocolo"],
        ans: 0, exp: "get(), set(), append()."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "History API", diff: "medium",
        q: "¿Qué método cambia URL sin recargar?",
        opts: ["pushState()", "replaceState()", "ambos", "go()"],
        ans: 2, exp: "pushState agrega, replaceState reemplaza."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "SPA routing", diff: "medium",
        q: "¿Qué API se usa para SPA routing?",
        opts: ["History API", "Fetch API", "Storage API", "Canvas API"],
        ans: 0, exp: "pushState + popstate event."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Custom Events", diff: "medium",
        q: "¿Cómo crear evento personalizado?",
        opts: ["new CustomEvent()", "new Event()", "ambos", "createEvent()"],
        ans: 2, exp: "CustomEvent lleva detail, Event es básico."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Dispatch Event", diff: "medium",
        q: "¿Qué método dispara evento?",
        opts: ["dispatchEvent()", "trigger()", "fire()", "emit()"],
        ans: 0, exp: "element.dispatchEvent(event)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Shadow DOM", diff: "medium",
        q: "¿Qué encapsula Shadow DOM?",
        opts: ["Estilos y marcado", "JavaScript", "Fetch", "Routing"],
        ans: 0, exp: "Componentes aislados."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Web Components", diff: "medium",
        q: "¿Tecnologías base de Web Components?",
        opts: ["Custom Elements, Shadow DOM, HTML Templates", "React, Vue, Angular", "jQuery, Bootstrap", "Node.js"],
        ans: 0, exp: "Nativas del navegador."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Custom Elements", diff: "medium",
        q: "¿Cómo definir elemento personalizado?",
        opts: ["customElements.define()", "registerElement()", "createElement()", "defineElement()"],
        ans: 0, exp: "class MiElem extends HTMLElement"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "HTML Templates", diff: "medium",
        q: "¿Qué etiqueta HTML define template?",
        opts: ["<template>", "<slot>", "<shadow>", "<component>"],
        ans: 0, exp: "<template> contenido inerte."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Slots", diff: "medium",
        q: "¿Qué hace <slot>?",
        opts: ["Placeholder para contenido proyectado", "Renderizar lista", "Estilos dinámicos", "Eventos"],
        ans: 0, exp: "En Shadow DOM."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Performance API", diff: "medium",
        q: "¿Cómo medir tiempo de ejecución?",
        opts: ["performance.now()", "Date.now()", "ambos", "console.time()"],
        ans: 2, exp: "performance.now() más preciso (microsegundos)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "requestAnimationFrame", diff: "medium",
        q: "¿Para qué sirve requestAnimationFrame?",
        opts: ["Animaciones suaves", "setTimeout mejorado", "Fetch datos", "Eventos"],
        ans: 0, exp: "Sincronizado con repintado del navegador."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "requestIdleCallback", diff: "medium",
        q: "¿Cuándo ejecuta requestIdleCallback?",
        opts: ["Cuando navegador está inactivo", "Inmediatamente", "Cada 1 segundo", "Al cargar página"],
        ans: 0, exp: "Tareas no críticas."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "WebSockets", diff: "medium",
        q: "¿Qué protocolo usan WebSockets?",
        opts: ["ws:// o wss://", "http://", "ftp://", "file://"],
        ans: 0, exp: "Conexión bidireccional persistente."
    },
    {
        profe: false, intermedio: true, avanzado: false, expos: false, unit: "SSE", diff: "medium",
        q: "¿Qué son Server-Sent Events?",
        opts: ["Streaming unidireccional servidor -> cliente", "Bidireccional", "Cliente -> servidor", "HTTP/2"],
        ans: 0, exp: "EventSource API."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Async Iteration", diff: "medium",
        q: "¿Cómo iterar fuentes asíncronas?",
        opts: ["for await...of", "for...of", "for...in", "while"],
        ans: 0, exp: "Con Symbol.asyncIterator."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Top-level await", diff: "medium",
        q: "¿Dónde se permite top-level await?",
        opts: ["Módulos ES6", "Scripts normales", "Funciones", "Clases"],
        ans: 0, exp: "En módulos, no en scripts clásicos."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Dynamic import", diff: "medium",
        q: "¿Qué devuelve import()?",
        opts: ["Promise con módulo", "Síncrono", "undefined", "Error"],
        ans: 0, exp: "Carga bajo demanda."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Intl API", diff: "medium",
        q: "¿Qué hace Intl.DateTimeFormat?",
        opts: ["Formato fechas localizado", "Formato números", "Formato monedas", "Comparar strings"],
        ans: 0, exp: "new Intl.DateTimeFormat('es').format(date)"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Intl API", diff: "medium",
        q: "¿Qué hace Intl.NumberFormat?",
        opts: ["Formato números localizado", "Formato fechas", "Formato monedas", "Comparar strings"],
        ans: 2, exp: "Moneda, porcentajes, etc."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "BigInt", diff: "medium",
        q: "¿Cómo declarar BigInt?",
        opts: ["123n", "BigInt(123)", "ambos", "new BigInt(123)"],
        ans: 2, exp: "Para números > 2^53 - 1."
    },

    // ==================== AVANZADO (preguntas 201-300) ====================

    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Event Loop Avanzado", diff: "hard",
        q: "Orden de ejecución: setTimeout, Promise, async/await, requestAnimationFrame",
        opts: ["Microtasks > rAF > macrotasks", "rAF > microtasks > macrotasks", "macrotasks > microtasks > rAF", "rAF > macrotasks > microtasks"],
        ans: 0, exp: "Microtasks (Promise) son prioritarias, rAF antes de pintar, macrotasks (setTimeout) al final."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Event Loop Avanzado", diff: "hard",
        q: "¿Qué fase del event loop de Node.js ejecuta timers?",
        opts: ["timers", "poll", "check", "close"],
        ans: 0, exp: "setTimeout/setInterval se ejecutan en fase timers."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Event Loop Node.js", diff: "hard",
        q: "¿Qué fase ejecuta setImmediate?",
        opts: ["check", "timers", "poll", "idle"],
        ans: 0, exp: "setImmediate en fase check."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Event Loop Node.js", diff: "hard",
        q: "¿Qué fase ejecuta I/O callbacks?",
        opts: ["poll", "timers", "check", "pending"],
        ans: 0, exp: "poll fase para I/O."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Memory Management", diff: "hard",
        q: "¿Qué genera memory leak en closures?",
        opts: ["Capturar variables grandes en closure persistente", "Usar let", "Usar const", "Funciones flecha"],
        ans: 0, exp: "El closure retiene referencia aunque ya no se necesite."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "V8 Internals", diff: "hard",
        q: "¿Qué hace el compilador TurboFan?",
        opts: ["Optimiza código caliente", "Interpreta bytecode", "Parsea JS", "Garbage collector"],
        ans: 0, exp: "Ignition (intérprete) + TurboFan (optimizador JIT)."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Hidden classes", diff: "hard",
        q: "¿Por qué V8 usa hidden classes?",
        opts: ["Optimizar acceso a propiedades", "Type checking", "Seguridad", "Debugging"],
        ans: 0, exp: "Mismo shape = misma hidden class = acceso rápido."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Inline caching", diff: "hard",
        q: "¿Qué es inline caching?",
        opts: ["Cachear resultado de búsqueda de propiedad", "Cachear HTTP", "Cachear DOM", "Cachear módulos"],
        ans: 0, exp: "Optimiza accesos repetidos a misma propiedad."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Prototype Pollution", diff: "hard",
        q: "¿Qué es prototype pollution?",
        opts: ["Modificar Object.prototype", "Crear prototipos", "Herencia", "Clonar objetos"],
        ans: 0, exp: "Vulnerabilidad en merge recursivo."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Proxy Trampas", diff: "hard",
        q: "¿Trampa de Proxy para funciones?",
        opts: ["apply", "construct", "ambas", "get"],
        ans: 2, exp: "apply para llamadas, construct para new."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Reflect API", diff: "hard",
        q: "Ventaja de Reflect sobre Object",
        opts: ["Devuelve boolean en lugar de lanzar error", "Más rápido", "Más verboso", "Obsoleto"],
        ans: 0, exp: "Reflect.defineProperty devuelve true/false."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "WeakRef", diff: "hard",
        q: "¿Qué hace new WeakRef(obj)?",
        opts: ["Referencia débil que no evita GC", "Referencia fuerte", "Copia objeto", "Congela objeto"],
        ans: 0, exp: "Útil para caching sin memory leaks."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "FinalizationRegistry", diff: "hard",
        q: "¿Para qué sirve FinalizationRegistry?",
        opts: ["Callback cuando objeto es GC", "Finalizar promesas", "Cerrar conexiones", "Limpiar timers"],
        ans: 0, exp: "Limpieza de recursos externos."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Atomics", diff: "hard",
        q: "¿Qué hace Atomics en SharedArrayBuffer?",
        opts: ["Operaciones atómicas para threads", "Matemáticas", "Strings", "Arrays"],
        ans: 0, exp: "Evita condiciones de carrera."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "SharedArrayBuffer", diff: "hard",
        q: "¿Qué permite SharedArrayBuffer?",
        opts: ["Memoria compartida entre workers", "Memoria privada", "Memoria de solo lectura", "Memoria cifrada"],
        ans: 0, exp: "Requiere COOP/COEP headers."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "WebAssembly", diff: "hard",
        q: "¿Qué lenguaje compila a WebAssembly?",
        opts: ["C/C++, Rust, Go", "Solo JavaScript", "Python", "Ruby"],
        ans: 0, exp: "Wasm ejecuta cerca de nativo."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "WebAssembly", diff: "hard",
        q: "¿Cómo cargar WebAssembly en JS?",
        opts: ["WebAssembly.instantiate()", "Wasm.load()", "compileWasm()", "new Wasm()"],
        ans: 0, exp: "Con .wasm binary."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Streams API", diff: "hard",
        q: "¿Qué son ReadableStream?",
        opts: ["Flujo de datos chunk por chunk", "Stream de audio", "Stream de video", "Stream de archivos"],
        ans: 0, exp: "Procesamiento progresivo."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Streams API", diff: "hard",
        q: "¿Qué hace pipeThrough()?",
        opts: ["Encadena transform streams", "Enviar a writable", "Leer datos", "Cancelar stream"],
        ans: 0, exp: "TransformStream en medio."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Backpressure", diff: "hard",
        q: "¿Qué es backpressure en streams?",
        opts: ["Mecanismo cuando lector lento que escritor", "Alta presión", "Baja presión", "Error"],
        ans: 0, exp: "Evita sobrecargar memoria."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Async Generators", diff: "hard",
        q: "¿Cómo definir async generator?",
        opts: ["async function*() {}", "function* async() {}", "async function() {}", "generator async() {}"],
        ans: 0, exp: "Combina async y generator."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Async Generators", diff: "hard",
        q: "¿Qué devuelve yield en async generator?",
        opts: ["Promise", "Valor directo", "Función", "Objeto"],
        ans: 0, exp: "Se resuelve con await."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Decorators", diff: "hard",
        q: "¿Qué son decorators (stage 3)?",
        opts: ["Modificar clases/métodos", "Loops", "Condicionales", "Variables"],
        ans: 0, exp: "@log, @readonly, etc."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Decorators", diff: "hard",
        q: "¿Sintaxis actual de decorators?",
        opts: ["@decorator", "#decorator", "$decorator", "%decorator"],
        ans: 0, exp: "Anteponer @ al nombre."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Private fields", diff: "hard",
        q: "¿Cómo declarar campo privado en clase?",
        opts: ["#nombre", "_nombre", "private nombre", "-nombre"],
        ans: 0, exp: "Hard private, no accesible desde fuera."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Private methods", diff: "hard",
        q: "¿Sintaxis de método privado?",
        opts: ["#metodo() {}", "private metodo() {}", "_metodo() {}", "metodo privado() {}"],
        ans: 0, exp: "Misma sintaxis #."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Static initialization blocks", diff: "hard",
        q: "¿Qué hace static {} en clase?",
        opts: ["Inicialización estática compleja", "Método estático", "Propiedad estática", "Constructor"],
        ans: 0, exp: "Ejecuta una vez al definir clase."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Ergonomic brand checks", diff: "hard",
        q: "¿Cómo verificar campo privado?",
        opts: ["#privado in obj", "obj.#privado", "hasPrivate(obj)", "privado in obj"],
        ans: 0, exp: "Nuevo en ES2022."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Temporal API", diff: "hard",
        q: "¿Qué reemplazará Temporal?",
        opts: ["Date obsoleto", "Math", "JSON", "Promise"],
        ans: 0, exp: "API moderna de fechas (stage 3)."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Temporal API", diff: "hard",
        q: "¿Temporal.Now.instant() devuelve?",
        opts: ["Timestamp exacto", "Fecha local", "String", "Array"],
        ans: 0, exp: "Precisión nanosegundo."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Record & Tuple", diff: "hard",
        q: "¿Qué son Record y Tuple (stage 2)?",
        opts: ["Inmutables profundos", "Mutables", "Clases", "Funciones"],
        ans: 0, exp: "#{a:1} y #[1,2,3]"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Pattern Matching", diff: "hard",
        q: "¿Propuesta de pattern matching?",
        opts: ["match (valor) { when patrón -> resultado }", "switch mejorado", "if anidado", "ternario"],
        ans: 0, exp: "Similar a Rust/Scala."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Pipeline operator", diff: "hard",
        q: "¿Qué hace |> (pipeline)?",
        opts: ["Pasar resultado a función", "OR", "AND", "Asignación"],
        ans: 0, exp: "value |> fn1 |> fn2"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Bind operator", diff: "hard",
        q: "¿Qué hace :: (bind operator)?",
        opts: ["Bind this y método", "Prototype", "Herencia", "Clonación"],
        ans: 0, exp: "obj::method"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Realms API", diff: "hard",
        q: "¿Qué aisla Realm?",
        opts: ["Entorno JS separado (global, intrinsics)", "DOM", "CSS", "HTML"],
        ans: 0, exp: "Para evaluar código seguro."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Compression Streams", diff: "hard",
        q: "¿Qué API comprime datos en navegador?",
        opts: ["CompressionStream", "Zip API", "Gzip", "Tar"],
        ans: 0, exp: "DecompressionStream también."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Scheduling APIs", diff: "hard",
        q: "¿Qué hace scheduler.yield()?",
        opts: ["Cede el hilo principal", "Ejecuta inmediato", "Prioridad alta", "Cancela tarea"],
        ans: 0, exp: "Evita bloquear UI."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "View Transitions", diff: "hard",
        q: "¿Qué permite View Transitions API?",
        opts: ["Animaciones entre estados DOM", "Transiciones CSS", "Fetch", "Storage"],
        ans: 0, exp: "SPA smooth transitions."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Trusted Types", diff: "hard",
        q: "¿Qué previenen Trusted Types?",
        opts: ["XSS basado en DOM", "CSRF", "SQL injection", "Clickjacking"],
        ans: 0, exp: "Sanitización obligatoria."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "CSP", diff: "hard",
        q: "¿Qué header es Content-Security-Policy?",
        opts: ["CSP", "CORS", "COOP", "COEP"],
        ans: 0, exp: "Previene XSS e inyecciones."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "COOP/COEP", diff: "hard",
        q: "¿Para qué se necesitan COOP/COEP?",
        opts: ["SharedArrayBuffer y espectro", "CORS", "Cookies", "Cache"],
        ans: 0, exp: "Cross-Origin-Opener-Policy / Embedder-Policy."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Permissions API", diff: "hard",
        q: "¿Qué hace navigator.permissions.query()?",
        opts: ["Consultar estado de permisos", "Solicitar permisos", "Revocar permisos", "Listar permisos"],
        ans: 0, exp: "Geolocation, notifications, etc."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Reporting API", diff: "hard",
        q: "¿Para qué sirve Reporting API?",
        opts: ["Reportar violaciones CSP, deprecaciones", "Logs cliente", "Métricas", "Errores"],
        ans: 0, exp: "Report-To header."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Barcode Detection", diff: "hard",
        q: "¿Qué API lee códigos de barras?",
        opts: ["BarcodeDetector", "QRReader", "Scanner API", "CodeReader"],
        ans: 0, exp: "Navegadores modernos."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Face Detection", diff: "hard",
        q: "¿Qué API detecta rostros?",
        opts: ["FaceDetector", "FaceAPI", "Vision API", "ML API"],
        ans: 0, exp: "Experimental."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Text Recognition", diff: "hard",
        q: "¿Qué API reconoce texto en imágenes?",
        opts: ["TextDetector", "OCR API", "Read API", "TextRecognition"],
        ans: 0, exp: "Chrome solo."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Idle Detection", diff: "hard",
        q: "¿Qué detecta IdleDetector?",
        opts: ["Usuario inactivo", "Red inactiva", "CPU inactiva", "Memoria inactiva"],
        ans: 0, exp: "Requiere permisos."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Wake Lock", diff: "hard",
        q: "¿Qué evita WakeLock?",
        opts: ["Pantalla apagada", "Suspender sistema", "Cerrar pestaña", "Sleep CPU"],
        ans: 0, exp: "Para reproducción de video."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Screen Orientation", diff: "hard",
        q: "¿Qué API detecta orientación?",
        opts: ["screen.orientation", "window.orientation", "ambas", "orientation API"],
        ans: 0, exp: "screen.orientation.type y lock()."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Fullscreen API", diff: "hard",
        q: "¿Qué método entra en pantalla completa?",
        opts: ["requestFullscreen()", "enterFullscreen()", "fullscreen()", "goFull()"],
        ans: 0, exp: "Elemento.requestFullscreen()."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Clipboard API", diff: "hard",
        q: "¿Qué método escribe texto al portapapeles?",
        opts: ["navigator.clipboard.writeText()", "copy()", "setClipboard()", "writeClipboard()"],
        ans: 0, exp: "Requiere Permissions API."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Clipboard API", diff: "hard",
        q: "¿Qué método lee imagen del portapapeles?",
        opts: ["navigator.clipboard.read()", "readText()", "getImage()", "paste()"],
        ans: 0, exp: "read() para blob."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Contact Picker", diff: "hard",
        q: "¿Qué API accede a contactos?",
        opts: ["navigator.contacts", "Contact API", "AddressBook", "People API"],
        ans: 0, exp: "Requiere gesto usuario."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "File System Access", diff: "hard",
        q: "¿Qué API accede a archivos locales?",
        opts: ["showOpenFilePicker()", "File API", "FileReader", "Blob"],
        ans: 0, exp: "Nueva API moderna."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "File System Access", diff: "hard",
        q: "¿Qué método guarda archivo?",
        opts: ["showSaveFilePicker()", "saveAs()", "download()", "writeFile()"],
        ans: 0, exp: "Retorna FileSystemFileHandle."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Badging API", diff: "hard",
        q: "¿Qué hace navigator.setAppBadge()?",
        opts: ["Muestra contador en icono app", "Notificación", "Alarma", "Recordatorio"],
        ans: 0, exp: "Instalable PWA."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "EyeDropper", diff: "hard",
        q: "¿Qué permite EyeDropper API?",
        opts: ["Seleccionar color de pantalla", "Detectar ojos", "Lupa", "Zoom"],
        ans: 0, exp: "new EyeDropper().open()"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Launch Handler", diff: "hard",
        q: "¿Qué API maneja lanzamiento de PWA?",
        opts: ["launchQueue", "LaunchHandler", "AppLauncher", "Startup"],
        ans: 0, exp: "Para apps instaladas."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Window Controls Overlay", diff: "hard",
        q: "¿Qué permite Window Controls Overlay?",
        opts: ["Dibujar en zona botones ventana PWA", "Maximizar", "Minimizar", "Cerrar"],
        ans: 0, exp: "Experiencia nativa."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Compute Pressure", diff: "hard",
        q: "¿Qué indica Compute Pressure API?",
        opts: ["Estrés CPU", "Memoria", "Red", "Batería"],
        ans: 0, exp: "Ajustar carga de trabajo."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Speculation Rules", diff: "hard",
        q: "¿Qué hacen Speculation Rules?",
        opts: ["Prerender predictivo", "Prefetch", "Preconnect", "DNS"],
        ans: 0, exp: "<script type='speculationrules'>"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Sanitizer API", diff: "hard",
        q: "¿Qué hace Sanitizer API?",
        opts: ["Limpia HTML de XSS", "Limpia CSS", "Limpia JS", "Limpia JSON"],
        ans: 0, exp: "new Sanitizer().sanitize(html)"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "JSON.parse source", diff: "hard",
        q: "¿Qué mejora JSON.parse con source?",
        opts: ["Mantiene números grandes exactos", "Más rápido", "Menos memoria", "Soporte fechas"],
        ans: 0, exp: "Propuesta stage 3."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "ShadowRealm", diff: "hard",
        q: "¿Qué diferencia ShadowRealm de Realm?",
        opts: ["Sin acceso a global del anfitrión", "Con acceso", "Mismo", "Obsoleto"],
        ans: 0, exp: "Aislar evaluación código."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Array Grouping", diff: "hard",
        q: "¿Qué hace Object.groupBy()?",
        opts: ["Agrupa array por clave", "Filtra", "Map", "Reduce"],
        ans: 0, exp: "Nuevo método ES2024."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Map.groupBy", diff: "hard",
        q: "Diferencia Map.groupBy y Object.groupBy",
        opts: ["Map.groupBy devuelve Map", "Object devuelve objeto", "ambas", "ninguna"],
        ans: 2, exp: "Según necesidad."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Promise.withResolvers", diff: "hard",
        q: "¿Qué hace Promise.withResolvers()?",
        opts: ["Devuelve {promise, resolve, reject}", "Crea promesa", "Resuelve promesa", "Rechaza promesa"],
        ans: 0, exp: "Patrón deferred."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Set methods", diff: "hard",
        q: "¿Qué método de Set hace unión?",
        opts: ["union()", "intersection()", "difference()", "symmetricDifference()"],
        ans: 0, exp: "Nuevo en ES2025."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Set methods", diff: "hard",
        q: "¿Qué método de Set hace intersección?",
        opts: ["intersection()", "union()", "difference()", "isSubsetOf()"],
        ans: 0, exp: "new Set([1,2]).intersection([2,3])"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Regex v flag", diff: "hard",
        q: "¿Qué permite flag 'v' en regex?",
        opts: ["Unicode sets y propiedades", "Verbose", "Version", "Validación"],
        ans: 0, exp: "\\p{Emoji} etc."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Well-formed JSON", diff: "hard",
        q: "¿Qué hace JSON.isWellFormed()?",
        opts: ["Verifica string no contiene sustitutos solitarios", "Valida JSON", "Formatea JSON", "Minifica JSON"],
        ans: 0, exp: "Prevenir errores."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Resizable ArrayBuffer", diff: "hard",
        q: "¿Cómo crear ArrayBuffer redimensionable?",
        opts: ["new ArrayBuffer(size, {maxByteLength})", "resize()", "ambas", "grow()"],
        ans: 2, exp: "MaxByteLength y método resize()."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Transferable streams", diff: "hard",
        q: "¿Qué significa transferible en streams?",
        opts: ["Mover entre threads", "Copiar", "Compartir", "Clonar"],
        ans: 0, exp: "postMessage con streams."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "WebTransport", diff: "hard",
        q: "¿Qué protocolo usa WebTransport?",
        opts: ["QUIC", "TCP", "UDP", "HTTP/2"],
        ans: 0, exp: "Alternativa a WebSockets."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "WebCodecs", diff: "hard",
        q: "¿Qué hace WebCodecs?",
        opts: ["Codificar/decodificar video/audio bajo nivel", "Streams", "Canvas", "WebGL"],
        ans: 0, exp: "VideoEncoder, AudioDecoder."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "WebGPU", diff: "hard",
        q: "¿Qué reemplazará WebGPU?",
        opts: ["WebGL", "Canvas", "SVG", "CSS"],
        ans: 0, exp: "Acceso moderno a GPU."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Web Neural Network", diff: "hard",
        q: "¿Qué API ejecuta modelos ML en navegador?",
        opts: ["WebNN", "TensorFlow.js", "WebML", "ONNX"],
        ans: 0, exp: "Web Neural Network API."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "WebXR", diff: "hard",
        q: "¿Qué hace WebXR?",
        opts: ["Realidad virtual y aumentada", "3D", "Animaciones", "Juegos 2D"],
        ans: 0, exp: "Dispositivos VR/AR."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "WebHID", diff: "hard",
        q: "¿Qué API accede a dispositivos HID?",
        opts: ["WebHID", "USB", "Bluetooth", "Serial"],
        ans: 0, exp: "Teclados, ratones, gamepads."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "WebUSB", diff: "hard",
        q: "¿Qué riesgo tiene WebUSB?",
        opts: ["Seguridad", "Rendimiento", "Compatibilidad", "Estándar"],
        ans: 0, exp: "Acceso a dispositivos USB."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "WebSerial", diff: "hard",
        q: "¿Para qué sirve WebSerial?",
        opts: ["Comunicación con puerto serie", "USB", "Bluetooth", "Red"],
        ans: 0, exp: "Arduino, impresoras."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Web Bluetooth", diff: "hard",
        q: "¿Qué API conecta con dispositivos Bluetooth?",
        opts: ["navigator.bluetooth", "Bluetooth API", "WebBT", "BLE"],
        ans: 0, exp: "Requiere usuario gesto."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Web MIDI", diff: "hard",
        q: "¿Qué permite Web MIDI?",
        opts: ["Controlar instrumentos musicales", "Audio", "Video", "Juegos"],
        ans: 0, exp: "Sintetizadores, controladores."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "WebLocks", diff: "hard",
        q: "¿Qué evita WebLocks?",
        opts: ["Condiciones de carrera entre tabs/workers", "Deadlocks", "Memory leaks", "XSS"],
        ans: 0, exp: "navigator.locks.request()"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Web Share Target", diff: "hard",
        q: "¿Qué permite Web Share Target?",
        opts: ["Recibir archivos compartidos en PWA", "Compartir", "Notificar", "Sincronizar"],
        ans: 0, exp: "Manifest.json share_target."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Payment Request", diff: "hard",
        q: "¿Qué API simplifica pagos?",
        opts: ["Payment Request API", "Checkout API", "Pay API", "Purchase API"],
        ans: 0, exp: "Navegador maneja métodos pago."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Credential Management", diff: "hard",
        q: "¿Qué API maneja credenciales?",
        opts: ["navigator.credentials", "Password API", "Auth API", "Login API"],
        ans: 0, exp: "get(), store(), preventSilentAccess()."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "WebAuthn", diff: "hard",
        q: "¿Qué permite WebAuthn?",
        opts: ["Autenticación biométrica sin contraseña", "Contraseñas", "2FA SMS", "Email"],
        ans: 0, exp: "Passkeys, YubiKey."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Federated Credential", diff: "hard",
        q: "¿Qué es Federated Credential Management (FedCM)?",
        opts: ["Login con proveedores identidad privacidad", "OAuth", "OpenID", "SAML"],
        ans: 0, exp: "Alternativa a cookies third-party."
    },

    // ==================== BÁSICO - Encontrar errores ====================
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug - Variables", diff: "easy",
        q: `Código:
let nombre = "Juan";
console.log(Nombre);

Error: "ReferenceError: Nombre is not defined"
¿Por qué ocurre?`,
        opts: ["JS es case-sensitive", "Falta declarar variable", "console.log está mal", "Usar comillas dobles"],
        ans: 0, exp: "Las variables son case-sensitive: nombre ≠ Nombre"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug - Tipos", diff: "easy",
        q: `Código:
let x = "5";
let y = 2;
console.log(x + y);

Salida: "52"
¿Por qué no es 7?`,
        opts: ["+ concatena string con número", "Falta parseInt", "Error de sintaxis", "Usar - en lugar de +"],
        ans: 0, exp: "El operador + con string convierte número a string y concatena."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug - Funciones", diff: "easy",
        q: `Código:
function sumar(a, b) {
    return a + b;
}
console.log(sumar(5));

Salida: NaN
¿Por qué?`,
        opts: ["Falta segundo argumento (undefined)", "Función mal definida", "console.log error", "Falta return"],
        ans: 0, exp: "sumar(5, undefined) = 5 + undefined = NaN"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug - Arrays", diff: "easy",
        q: `Código:
let arr = [1, 2, 3];
console.log(arr[3]);

Salida: undefined
¿Por qué no hay error?`,
        opts: ["JS no da error, devuelve undefined", "Índice 3 existe", "Error de sintaxis", "Array vacío"],
        ans: 0, exp: "Acceder a índice inexistente en array devuelve undefined, no error."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug - Objetos", diff: "easy",
        q: `Código:
let persona = { nombre: "Ana", edad: 25 };
console.log(persona.nombre);

Salida: "Ana"
console.log(persona["edad"]);

Salida: 25
¿Ambas formas son válidas?`,
        opts: ["Sí", "No, solo punto", "No, solo corchetes", "Depende del navegador"],
        ans: 0, exp: "Ambas notaciones son válidas para acceder a propiedades."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug - Bucles", diff: "easy",
        q: `Código:
for(let i = 0; i < 5; i++) {
    console.log(i);
}
// Salida esperada: 0,1,2,3,4
// El usuario escribe: for(let i = 0; i <= 5; i++)
¿Qué imprime?`,
        opts: ["0,1,2,3,4,5", "0,1,2,3,4", "1,2,3,4,5", "Error"],
        ans: 0, exp: "<= 5 incluye el 5, imprime 6 números"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug - Condicionales", diff: "easy",
        q: `Código:
let edad = "18";
if(edad === 18) {
    console.log("Mayor");
} else {
    console.log("Menor");
}
Salida: "Menor"
¿Por qué?`,
        opts: ["=== compara tipo, '18' es string, 18 es number", "Falta parseInt", "Usar ==", "Edad es número"],
        ans: 0, exp: "== compararía true, === compara tipo y valor"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug - Scope", diff: "easy",
        q: `Código:
if(true) {
    var x = 10;
    let y = 20;
}
console.log(x);
console.log(y);

Error: "ReferenceError: y is not defined"
¿Por qué?`,
        opts: ["let tiene scope de bloque, var no", "y no existe", "console.log error", "Falta declarar y"],
        ans: 0, exp: "let y const son block-scope, var es function-scope"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug - Funciones", diff: "easy",
        q: `Código:
const miFunc = function() {
    console.log("Hola");
};
miFunc();

Salida: "Hola"
miFunc();

Salida: "Hola"
¿Por qué funciona aunque es const?`,
        opts: ["const evita reasignar, no redefinir contenido", "const es solo para números", "Error", "Funciona por hoisting"],
        ans: 0, exp: "const impide reasignar la variable, pero el contenido de la función es mutable"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug - Strings", diff: "easy",
        q: `Código:
let texto = "JavaScript";
console.log(texto.length);
console.log(texto[0]);

Salida: 10, "J"
texto[0] = "X";
console.log(texto[0]);

Salida: "J"
¿Por qué no cambió a "X"?`,
        opts: ["Strings son inmutables", "Error de sintaxis", "Falta método replace", "Índice incorrecto"],
        ans: 0, exp: "Los strings en JS son inmutables, no se pueden modificar por índice"
    },

    // ==================== BÁSICO - Completar código ====================
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar - Variables", diff: "easy",
        q: `Completa el código para declarar una constante PI con valor 3.1416:
___ PI = 3.1416;`,
        opts: ["const", "let", "var", "constant"],
        ans: 0, exp: "const para valores que no cambian"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar - Funciones", diff: "easy",
        q: `Completa la función que suma dos números:
function sumar(a, b) {
    ___ a + b;
}`,
        opts: ["return", "console.log", "print", "echo"],
        ans: 0, exp: "return devuelve el valor de la función"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar - Arrays", diff: "easy",
        q: `Completa para agregar "Mango" al final del array:
let frutas = ["Manzana", "Pera"];
frutas.___("Mango");`,
        opts: ["push", "pop", "shift", "unshift"],
        ans: 0, exp: "push() agrega al final del array"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar - Arrays", diff: "easy",
        q: `Completa para eliminar el último elemento:
let frutas = ["Manzana", "Pera", "Mango"];
frutas.___();`,
        opts: ["pop", "push", "shift", "unshift"],
        ans: 0, exp: "pop() elimina el último elemento"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar - Condicionales", diff: "easy",
        q: `Completa el condicional para verificar si edad es mayor o igual a 18:
let edad = 20;
___(edad >= 18) {
    console.log("Mayor de edad");
} ___ {
    console.log("Menor de edad");
}`,
        opts: ["if / else", "for / else", "while / else", "switch / default"],
        ans: 0, exp: "if-else para ejecución condicional"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar - Bucles", diff: "easy",
        q: `Completa el bucle para imprimir números del 0 al 4:
for(let i = 0; i ___ 5; i++) {
    console.log(i);
}`,
        opts: ["<", "<=", ">", "==="],
        ans: 0, exp: "i < 5 da 0,1,2,3,4"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar - Objetos", diff: "easy",
        q: `Completa para acceder a la propiedad nombre del objeto:
let persona = { nombre: "Carlos", edad: 30 };
console.log(persona.___);`,
        opts: ["nombre", "edad", "Carlos", "30"],
        ans: 0, exp: "notación punto para acceder a propiedades"
    },


    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar - Tipos", diff: "easy",
        q: `Completa para convertir "123" a número:
let texto = "123";
let numero = ___Number(texto);`,
        opts: ["parseInt", "Number", "String", "Boolean"],
        ans: 1, exp: "Number() convierte string a número"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar - Funciones flecha", diff: "easy",
        q: `Completa la arrow function que multiplica por 2:
let duplicar = (x) ___ x * 2;`,
        opts: ["=>", "->", "=", "return"],
        ans: 0, exp: "=> es la sintaxis de arrow function"
    },

    // ==================== BÁSICO - Analizar qué hace ====================
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar - Operadores", diff: "easy",
        q: `¿Qué hace este código?
let a = 10;
let b = 3;
console.log(a % b);

Entrada: a=10, b=3
Salida esperada: 1`,
        opts: ["Módulo (resto de división)", "División", "Multiplicación", "Potencia"],
        ans: 0, exp: "% devuelve el resto de la división: 10 ÷ 3 = 3 resto 1"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar - Condicionales", diff: "easy",
        q: `¿Qué imprime?
let x = 5;
if(x > 10) {
    console.log("Mayor");
} else if(x > 3) {
    console.log("Medio");
} else {
    console.log("Menor");
}`,
        opts: ["Medio", "Mayor", "Menor", "Ninguna"],
        ans: 0, exp: "5 > 3 es true, ejecuta else if"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar - Bucles", diff: "easy",
        q: `¿Cuántas veces se ejecuta?
let i = 0;
while(i < 3) {
    console.log(i);
    i++;
}`,
        opts: ["3 veces (0,1,2)", "2 veces", "4 veces", "bucle infinito"],
        ans: 0, exp: "i=0,1,2 → 3 iteraciones, i=3 sale"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar - Arrays", diff: "easy",
        q: `¿Qué devuelve?
let arr = [1, 2, 3, 4, 5];
console.log(arr.length);`,
        opts: ["5", "4", "6", "undefined"],
        ans: 0, exp: "length propiedad del array, número de elementos"
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar - Strings", diff: "easy",
        q: `¿Qué devuelve?
let saludo = "Hola Mundo";
console.log(saludo.toUpperCase());`,
        opts: ["HOLA MUNDO", "hola mundo", "Hola Mundo", "HOLA mundo"],
        ans: 0, exp: "toUpperCase() convierte todo a mayúsculas"
    },

    // ==================== INTERMEDIO - Encontrar errores (con traceback) ====================
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug - Scope", diff: "medium",
        q: `Código:
function crearContador() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const contador = crearContador();
console.log(contador());
console.log(contador());
console.log(count);

Traceback:
ReferenceError: count is not defined
    at <anonymous>:12:13

¿Por qué?`,
        opts: ["count no está en scope global, solo dentro del closure", "Falta declarar count", "contador no es función", "Error de sintaxis"],
        ans: 0, exp: "count es variable privada del closure, inaccesible fuera"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug - This", diff: "medium",
        q: `Código:
const persona = {
    nombre: "Ana",
    saludar: function() {
        setTimeout(function() {
            console.log("Hola " + this.nombre);
        }, 1000);
    }
};
persona.saludar();

Salida: "Hola undefined"
¿Por qué?`,
        opts: ["this dentro de setTimeout es global, no persona", "nombre no existe", "setTimeout es asíncrono", "Falta bind"],
        ans: 0, exp: "setTimeout usa su propio this (window/global), no el del objeto"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug - This solución", diff: "medium",
        q: `Código CORREGIDO:
const persona = {
    nombre: "Ana",
    saludar: function() {
        setTimeout(() => {
            console.log("Hola " + this.nombre);
        }, 1000);
    }
};
persona.saludar();

¿Por qué ahora sí funciona?`,
        opts: ["Arrow function no tiene su propio this, hereda del padre", "setTimeout más rápido", "nombre global", "Uso de bind"],
        ans: 0, exp: "Arrow function toma this del contexto léxico (persona)"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug - Asincronía", diff: "medium",
        q: `Código:
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");

Salida:
1
3
2

¿Por qué "2" sale al final aunque el delay es 0?`,
        opts: ["setTimeout va a cola de tareas (macrotask)", "setTimeout no funciona", "console.log es más rápido", "Error de sintaxis"],
        ans: 0, exp: "setTimeout aunque sea 0, se ejecuta después del código síncrono"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug - Promises", diff: "medium",
        q: `Código:
Promise.resolve("Hola")
    .then(resultado => {
        console.log(resultado);
        throw new Error("Error intencional");
    })
    .catch(error => {
        console.log("Capturado:", error.message);
    })
    .then(() => {
        console.log("Continúa");
    });

Salida:
Hola
Capturado: Error intencional
Continúa

¿Por qué continúa después del catch?`,
        opts: ["catch recupera y sigue cadena", "throw no funciona", "Promise no rechazada", "Error de sintaxis"],
        ans: 0, exp: "catch devuelve una nueva Promise que continúa la cadena"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug - Closures", diff: "medium",
        q: `Código:
for(var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
Salida: 3,3,3

for(let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
Salida: 0,1,2

¿Por qué?`,
        opts: ["let crea un nuevo binding por iteración, var usa el mismo", "let es más rápido", "setTimeout cambia", "console.log diferente"],
        ans: 0, exp: "let en for crea un scope por iteración, captura el valor correcto"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug - Objetos", diff: "medium",
        q: `Código:
const obj1 = { a: 1, b: 2 };
const obj2 = obj1;
obj2.a = 99;
console.log(obj1.a);

Salida: 99
¿Por qué obj1 también cambió?`,
        opts: ["Los objetos se asignan por referencia", "obj2 copia automática", "Error de JS", "a es global"],
        ans: 0, exp: "obj2 apunta al mismo objeto que obj1, modificarlo afecta ambos"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug - Spread", diff: "medium",
        q: `Código:
const original = { a: 1, b: { c: 2 } };
const copia = { ...original };
copia.b.c = 99;
console.log(original.b.c);

Salida: 99
¿Por qué original también cambió?`,
        opts: ["spread hace shallow copy (copia superficial)", "spread no funciona", "objetos anidados son referencia", "error"],
        ans: 2, exp: "Shallow copy: propiedades anidadas siguen siendo referencia"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug - JSON", diff: "medium",
        q: `Código:
const obj = {
    nombre: "Juan",
    saludar: function() { return "Hola"; }
};
const json = JSON.stringify(obj);
console.log(json);

Salida: {"nombre":"Juan"}
¿Por qué falta el método saludar?`,
        opts: ["JSON.stringify ignora funciones", "error de sintaxis", "función no es string", "falta toString"],
        ans: 0, exp: "JSON solo soporta tipos de datos primitivos, no funciones"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug - Reduce", diff: "medium",
        q: `Código:
const numeros = [1, 2, 3];
const suma = numeros.reduce((acc, curr) => acc + curr);
console.log(suma);

Salida: 6
// El usuario escribe:
const suma2 = numeros.reduce((acc, curr) => acc + curr, 10);
console.log(suma2);

Salida: 16
¿Qué hace el segundo argumento 10?`,
        opts: ["Valor inicial del acumulador", "Valor máximo", "Valor mínimo", "Índice inicial"],
        ans: 0, exp: "El segundo argumento de reduce es el valor inicial del acumulador"
    },

    // ==================== INTERMEDIO - Completar código ====================
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar - Closures", diff: "medium",
        q: `Completa la función contador que incrementa en 1 cada vez que se llama:
function crearContador() {
    let contador = 0;
    return function() {
        contador___;
        return contador;
    }
}`,
        opts: ["++", "--", "+=", "-="],
        ans: 0, exp: "++ incrementa en 1"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar - Promises", diff: "medium",
        q: `Completa para esperar 1 segundo y luego resolver:
function esperar(ms) {
    return new Promise((resolve) => {
        setTimeout(___, ms);
    });
}`,
        opts: ["resolve", "reject", "callback", "then"],
        ans: 0, exp: "setTimeout llama a resolve después de ms milisegundos"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar - Async/Await", diff: "medium",
        q: `Completa la función async que espera la promesa:
async function obtenerDatos() {
    const respuesta = ___ fetch("https://api.example.com");
    const datos = await respuesta.json();
    return datos;
}`,
        opts: ["await", "return", "new", "Promise"],
        ans: 0, exp: "await espera la resolución de fetch"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar - Map", diff: "medium",
        q: `Completa para duplicar cada número:
const numeros = [1, 2, 3, 4];
const duplicados = numeros.___(n => n * 2);`,
        opts: ["map", "filter", "reduce", "forEach"],
        ans: 0, exp: "map transforma cada elemento y devuelve nuevo array"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar - Filter", diff: "medium",
        q: `Completa para filtrar números pares:
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.___(n => n % 2 === 0);`,
        opts: ["filter", "map", "reduce", "find"],
        ans: 0, exp: "filter devuelve elementos que cumplen condición"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar - Reduce", diff: "medium",
        q: `Completa para sumar todos los números:
const numeros = [5, 10, 15];
const suma = numeros.___((acc, curr) => acc + curr, 0);`,
        opts: ["reduce", "map", "filter", "forEach"],
        ans: 0, exp: "reduce acumula valores"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar - Find", diff: "medium",
        q: `Completa para encontrar el primer número mayor a 10:
const numeros = [5, 12, 8, 15];
const encontrado = numeros.___(n => n > 10);`,
        opts: ["find", "filter", "some", "every"],
        ans: 0, exp: "find devuelve el primer elemento que cumple condición"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar - Some", diff: "medium",
        q: `Completa para verificar si algún número es negativo:
const numeros = [1, 2, -3, 4];
const hayNegativo = numeros.___(n => n < 0);`,
        opts: ["some", "every", "find", "includes"],
        ans: 0, exp: "some devuelve true si al menos uno cumple condición"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar - Every", diff: "medium",
        q: `Completa para verificar si todos los números son positivos:
const numeros = [1, 2, 3, 4];
const todosPositivos = numeros.___(n => n > 0);`,
        opts: ["every", "some", "find", "filter"],
        ans: 0, exp: "every devuelve true si todos cumplen condición"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar - Sort", diff: "medium",
        q: `Completa para ordenar números de forma ascendente:
const numeros = [3, 1, 4, 1, 5];
numeros.___((a, b) => a - b);`,
        opts: ["sort", "reverse", "order", "arrange"],
        ans: 0, exp: "sort con función comparadora a - b ordena ascendente"
    },

    // ==================== INTERMEDIO - Analizar qué hace ====================
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar - Closures", diff: "medium",
        q: `¿Qué imprime?
function crearSumador(x) {
    return function(y) {
        return x + y;
    }
}
const suma5 = crearSumador(5);
console.log(suma5(3));
console.log(suma5(10));`,
        opts: ["8 y 15", "5 y 3", "3 y 10", "error"],
        ans: 0, exp: "closure recuerda x=5, suma5(3)=8, suma5(10)=15"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar - Promises", diff: "medium",
        q: `¿En qué orden se imprimen?
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");`,
        opts: ["A, D, C, B", "A, B, C, D", "A, C, B, D", "A, D, B, C"],
        ans: 0, exp: "Microtasks (Promise) van antes que macrotasks (setTimeout)"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar - This", diff: "medium",
        q: `¿Qué imprime?
const obj = {
    nombre: "Objeto",
    regular: function() { console.log(this.nombre); },
    flecha: () => { console.log(this.nombre); }
};
obj.regular();
obj.flecha();`,
        opts: ["Objeto, undefined", "undefined, Objeto", "Objeto, Objeto", "undefined, undefined"],
        ans: 0, exp: "regular tiene su propio this (obj), flecha hereda this global"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar - Spread", diff: "medium",
        q: `¿Qué imprime?
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinado = [...arr1, ...arr2];
console.log(combinado);`,
        opts: ["[1,2,3,4,5,6]", "[[1,2,3],[4,5,6]]", "[1,2,3,4,5,6,7]", "error"],
        ans: 0, exp: "spread expande elementos y concatena arrays"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar - Destructuring", diff: "medium",
        q: `¿Qué imprime?
const persona = { nombre: "Luis", edad: 25, ciudad: "Madrid" };
const { nombre, edad } = persona;
console.log(nombre, edad);`,
        opts: ["Luis 25", "Luis Madrid", "25 Madrid", "undefined undefined"],
        ans: 0, exp: "destructuring extrae propiedades nombre y edad"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar - Rest", diff: "medium",
        q: `¿Qué imprime?
const [primero, segundo, ...resto] = [10, 20, 30, 40, 50];
console.log(resto);`,
        opts: ["[30,40,50]", "[10,20]", "30", "error"],
        ans: 0, exp: "rest operator agrupa el resto de elementos en un array"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar - Nullish coalescing", diff: "medium",
        q: `¿Qué imprime?
console.log(0 ?? "default");
console.log(null ?? "default");
console.log(undefined ?? "default");`,
        opts: ["0, default, default", "default, default, default", "0, 0, default", "error"],
        ans: 0, exp: "?? solo usa default si es null o undefined, 0 no es null/undefined"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar - Optional chaining", diff: "medium",
        q: `¿Qué imprime?
const usuario = { perfil: { nombre: "Ana" } };
console.log(usuario.perfil?.nombre);
console.log(usuario.direccion?.calle);`,
        opts: ["Ana, undefined", "Ana, error", "undefined, undefined", "error, error"],
        ans: 0, exp: "optional chaining (?.) evita error si propiedad no existe, devuelve undefined"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar - Set", diff: "medium",
        q: `¿Qué imprime?
const numeros = [1, 2, 2, 3, 3, 3, 4];
const unicos = [...new Set(numeros)];
console.log(unicos);`,
        opts: ["[1,2,3,4]", "[1,2,2,3,3,3,4]", "Set(4)", "error"],
        ans: 0, exp: "Set elimina duplicados, spread convierte a array"
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar - Short circuit", diff: "medium",
        q: `¿Qué imprime?
const nombre = "";
const saludo = nombre || "Invitado";
console.log(saludo);`,
        opts: ["Invitado", "", "undefined", "null"],
        ans: 0, exp: "|| devuelve el primer valor truthy, es falsy, devuelve 'Invitado'",
    },

    // ==================== AVANZADO - Encontrar errores (con traceback) ====================
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Event Loop", diff: "hard",
        q: `Código:
async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}
async function async2() {
    console.log("async2");
}
console.log("script start");
setTimeout(() => console.log("setTimeout"), 0);
async1();
new Promise((resolve) => {
    console.log("promise1");
    resolve();
}).then(() => console.log("promise2"));
console.log("script end");

¿Por qué el orden es:
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout

Y no otro orden?`,
        opts: ["await hace que async1 end sea microtask", "setTimeout es macrotask", "todo lo anterior", "ninguna"],
        ans: 2, exp: "await pone el resto de async1 en microtask queue, promise2 también microtask, setTimeout macrotask"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Memory leak", diff: "hard",
        q: `Código con memory leak:
let elementos = [];
function agregarElemento() {
    const grande = new Array(1000000).fill("*");
    elementos.push(grande);
}
setInterval(agregarElemento, 1000);

Traceback: (sin error visible, pero memoria crece infinitamente)
¿Por qué hay memory leak?`,
        opts: ["Array 'elementos' retiene referencia, nunca se limpia", "setInterval es el problema", "Array.fill es pesado", "falta clearInterval"],
        ans: 0, exp: "elementos acumula arrays gigantes, nunca se liberan, memory leak progresivo"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Closure leak", diff: "hard",
        q: `Código:
function outer() {
    let datosGigantes = new Array(1000000).fill("X");
    return function inner() {
        console.log("Hola");
    }
}
const fn = outer();
// datosGigantes ya no se necesita, pero...

Traceback: (memoria no libera datosGigantes)
¿Por qué?`,
        opts: ["closure retiene todo el scope, incluyendo datosGigantes", "inner usa datosGigantes", "GC no funciona", "array muy grande"],
        ans: 0, exp: "El closure retiene todo el ámbito léxico, aunque inner no use datosGigantes"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Prototype pollution", diff: "hard",
        q: `Código vulnerable:
function merge(target, source) {
    for(let key in source) {
        target[key] = source[key];
    }
    return target;
}
const obj = {};
const malicious = JSON.parse('{"__proto__": {"isAdmin": true}}');
merge(obj, malicious);
console.log({}.isAdmin);

Salida: true
¿Qué vulnerabilidad es?`,
        opts: ["Prototype pollution", "XSS", "SQL injection", "CSRF"],
        ans: 0, exp: "Al copiar __proto__ se contamina Object.prototype, afecta a todos los objetos"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Race condition", diff: "hard",
        q: `Código:
let saldo = 100;
async function retirar(monto) {
    if(saldo >= monto) {
        await new Promise(r => setTimeout(r, 100));
        saldo -= monto;
    }
}
Promise.all([retirar(80), retirar(80)]).then(() => console.log(saldo));

Salida: 20 (a veces -60)
¿Por qué?`,
        opts: ["Race condition: ambas leen saldo=100 antes de actualizar", "setTimeout causa error", "Promise.all falla", "saldo es global"],
        ans: 0, exp: "Ambas funciones leen saldo=100, entran al if, luego restan ambas: 100-80-80 = -60"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Floating point", diff: "hard",
        q: `Código:
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

Salida:
0.30000000000000004
false

¿Por qué?`,
        opts: ["Precisión de punto flotante IEEE 754", "error de JS", "redondeo", "uso de enteros"],
        ans: 0, exp: "Los números en JS siguen IEEE 754, 0.1+0.2 no es exactamente 0.3 por precisión binaria"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Temporal Dead Zone", diff: "hard",
        q: `Código:
console.log(a);
let a = 5;

Traceback:
ReferenceError: Cannot access 'a' before initialization

¿Por qué no imprime undefined como con var?`,
        opts: ["TDZ (Temporal Dead Zone) para let/const", "var es diferente", "hoisting no existe", "error de sintaxis"],
        ans: 0, exp: "let y const están en TDZ desde inicio del bloque hasta su declaración"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Circular reference", diff: "hard",
        q: `Código:
const obj = {};
obj.self = obj;
JSON.stringify(obj);

Traceback:
TypeError: Converting circular structure to JSON

¿Por qué?`,
        opts: ["JSON.stringify no soporta referencias circulares", "obj es vacío", "self no es propiedad", "circular es válido"],
        ans: 0, exp: "JSON.stringify lanza error con objetos circulares"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Maximum call stack", diff: "hard",
        q: `Código:
function factorial(n) {
    return n * factorial(n - 1);
}
factorial(5);

Traceback:
RangeError: Maximum call stack size exceeded

¿Por qué?`,
        opts: ["Falta caso base (n <= 1)", "recursión infinita", "factorial mal definido", "n es negativo"],
        ans: 0, exp: "No hay condición de salida, recursión infinita, stack overflow"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Async error", diff: "hard",
        q: `Código:
try {
    setTimeout(() => {
        throw new Error("Error en timeout");
    }, 100);
} catch(e) {
    console.log("Capturado:", e.message);
}

Traceback:
Uncaught Error: Error en timeout
(no se captura)

¿Por qué el catch no funciona?`,
        opts: ["try-catch solo captura errores síncronos", "setTimeout es asíncrono", "ambas", "error no es throw"],
        ans: 2, exp: "El error ocurre en callback asíncrono, ya salió del try-catch"
    },

    // ==================== AVANZADO - Completar código ====================
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Recursión", diff: "hard",
        q: `Completa la recursión para calcular factorial:
function factorial(n) {
    if(n ___ 1) return 1;
    return n * factorial(n - 1);
}`,
        opts: ["<=", ">=", "===", "!=="],
        ans: 0, exp: "n <= 1 es caso base para 0! y 1!"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Memoization", diff: "hard",
        q: `Completa la función memoizada:
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if(cache[key] ___ undefined) return cache[key];
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}`,
        opts: ["!==", "===", "==", "!=="],
        ans: 0, exp: "if(cache[key] !== undefined) verifica si ya está en caché"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Debounce", diff: "hard",
        q: `Completa debounce:
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(___);
        timer = setTimeout(() => fn(...args), delay);
    }
}`,
        opts: ["timer", "delay", "fn", "args"],
        ans: 0, exp: "clearTimeout(timer) limpia el timeout anterior"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Throttle", diff: "hard",
        q: `Completa throttle:
function throttle(fn, limit) {
    let waiting = false;
    return function(...args) {
        if(___ waiting) return;
        waiting = true;
        fn(...args);
        setTimeout(() => { waiting = false; }, limit);
    }
}`,
        opts: ["!", "!!", "waiting", "!waiting"],
        ans: 0, exp: "if(!waiting) ejecuta si no está en periodo de espera"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Deep clone", diff: "hard",
        q: `Completa deep clone recursivo:
function deepClone(obj) {
    if(obj === null || typeof obj !== "object") return obj;
    if(Array.isArray(obj)) return obj.map(___);
    const cloned = {};
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}`,
        opts: ["item => deepClone(item)", "item => item", "deepClone", "clone"],
        ans: 0, exp: "mapear recursivamente para clonar arrays anidados"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Pipe", diff: "hard",
        q: `Completa la función pipe (composición de funciones):
function pipe(...fns) {
    return function(x) {
        return fns.reduce((acc, fn) => ___, x);
    }
}`,
        opts: ["fn(acc)", "acc(fn)", "fn, acc", "acc, fn"],
        ans: 0, exp: "reduce aplica cada función al acumulador: fn(acc)"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Promise race", diff: "hard",
        q: `Completa Promise.race manual:
function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(p => {
            p.then(resolve).___(reject);
        });
    });
}`,
        opts: ["catch", "then", "finally", "reject"],
        ans: 0, exp: ".catch(reject) maneja el primer rechazo"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Promise all", diff: "hard",
        q: `Completa Promise.all manual:
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
        promises.forEach((p, i) => {
            p.then(result => {
                results[i] = result;
                completed++;
                if(completed ___ promises.length) resolve(results);
            }).catch(reject);
        });
    });
}`,
        opts: ["===", "!==", ">", "<"],
        ans: 0, exp: "cuando completed === promises.length, todas resolvieron"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Curry", diff: "hard",
        q: `Completa curry:
function curry(fn) {
    return function curried(...args) {
        if(args.length ___ fn.length) {
            return fn(...args);
        }
        return function(...more) {
            return curried(...args, ...more);
        }
    }
}`,
        opts: [">=", "<=", "===", "!=="],
        ans: 0, exp: "cuando argumentos >= aridad, ejecuta función"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Singleton", diff: "hard",
        q: `Completa Singleton:
const Singleton = (function() {
    let instance;
    function createInstance() {
        return { data: "único" };
    }
    return {
        getInstance: function() {
            if(___ instance) instance = createInstance();
            return instance;
        }
    };
})();`,
        opts: ["!", "!!", "instance", "!instance"],
        ans: 0, exp: "if(!instance) crea instancia solo la primera vez"
    },

    // ==================== AVANZADO - Analizar qué hace ====================
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Event Loop complejo", diff: "hard",
        q: `¿Qué imprime?
(async () => {
    console.log(1);
    await null;
    console.log(2);
})();
Promise.resolve().then(() => console.log(3));
console.log(4);`,
        opts: ["1,4,3,2", "1,4,2,3", "1,2,3,4", "4,3,2,1"],
        ans: 0, exp: "await null pone el resto en microtask, promise.then también microtask, orden: síncrono, luego microtasks"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Generator", diff: "hard",
        q: `¿Qué imprime?
function* generador() {
    yield 1;
    yield 2;
    return 3;
}
const gen = generador();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());`,
        opts: ["{value:1,done:false}, {value:2,done:false}, {value:3,done:true}", "{1},{2},{3}", "1,2,3", "error"],
        ans: 0, exp: "next() devuelve {value, done}, return finaliza con done:true"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Proxy", diff: "hard",
        q: `¿Qué imprime?
const target = { mensaje: "Hola" };
const handler = {
    get: function(obj, prop) {
        if(prop === "mensaje") return "Interceptado";
        return obj[prop];
    }
};
const proxy = new Proxy(target, handler);
console.log(proxy.mensaje);
console.log(proxy.otro);`,
        opts: ["Interceptado, undefined", "Hola, undefined", "Interceptado, Hola", "error"],
        ans: 0, exp: "Proxy intercepta get, modifica 'mensaje' pero no 'otro'"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Reflect", diff: "hard",
        q: `¿Qué hace?
const obj = { a: 1 };
Reflect.set(obj, "b", 2);
console.log(obj);`,
        opts: ["{a:1,b:2}", "{a:1}", "error", "undefined"],
        ans: 0, exp: "Reflect.set agrega propiedad b con valor 2"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - WeakMap", diff: "hard",
        q: `¿Qué permite WeakMap que Map no?
const wm = new WeakMap();
let obj = {};
wm.set(obj, "valor");
obj = null;
// después de GC, la entrada desaparece

¿Ventaja?`,
        opts: ["Previene memory leaks (claves débiles)", "Más rápido", "Claves primitivas", "Iterable"],
        ans: 0, exp: "WeakMap no evita GC, cuando la clave se recolecta, la entrada se elimina automáticamente"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Symbol", diff: "hard",
        q: `¿Qué imprime?
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2);
const obj = { [sym1]: 123 };
console.log(obj[sym1]);
console.log(Object.keys(obj));`,
        opts: ["false, 123, []", "true, 123, [sym1]", "false, 123, [id]", "true, 123, []"],
        ans: 0, exp: "Symbols son únicos aunque mismo desc, no son enumerables en Object.keys"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Iterator", diff: "hard",
        q: `¿Qué hace?
const iterable = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};
console.log([...iterable]);`,
        opts: ["[1,2,3]", "[1,2,3,4]", "error", "undefined"],
        ans: 0, exp: "Define iterador personalizado, spread usa el iterador"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Async generator", diff: "hard",
        q: `¿Qué imprime?
async function* asyncGen() {
    yield 1;
    yield 2;
}
(async () => {
    for await (const num of asyncGen()) {
        console.log(num);
    }
})();`,
        opts: ["1,2", "Promise {1}, Promise {2}", "error", "undefined"],
        ans: 0, exp: "for await...of itera async generators, imprime 1 y 2"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Private fields", diff: "hard",
        q: `¿Qué imprime?
class Persona {
    #nombre = "Secreto";
    getNombre() {
        return this.#nombre;
    }
}
const p = new Persona();
console.log(p.getNombre());
console.log(p.#nombre);`,
        opts: ["Secreto, SyntaxError", "Secreto, undefined", "undefined, error", "error, error"],
        ans: 0, exp: "campo privado #nombre accesible desde método, no desde fuera"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Top-level await", diff: "hard",
        q: `¿En qué módulo esto es válido?
const datos = await fetch("https://api.example.com");
console.log(datos);

¿Dónde funciona?`,
        opts: ["Solo en módulos ES6 (type='module')", "en cualquier script", "solo en Node.js", "solo en navegador"],
        ans: 0, exp: "Top-level await solo en módulos, no en scripts clásicos"
    },

    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Microtask order", diff: "hard",
        q: "Codigo:\nlet resolveP;\nconst p = new Promise(r => { resolveP = r; });\np.then(() => console.log('A'));\nresolveP();\nconsole.log('B');\nPromise.resolve().then(() => console.log('C'));\nconsole.log('D');\n\nSalida: B, D, A, C\nPor que A sale antes que C?",
        opts: ["A se encolo antes que C", "resolve() ejecuta then inmediatamente", "orden FIFO de microtasks", "Todas las anteriores"],
        ans: 3,
        exp: "resolve() encola A, luego Promise.resolve().then() encola C, microtasks son FIFO"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Promise constructor", diff: "hard",
        q: "Codigo:\nconst p = new Promise((resolve, reject) => {\n    console.log('1');\n    resolve();\n    console.log('2');\n});\np.then(() => console.log('3'));\nconsole.log('4');\n\nSalida: 1,2,4,3\nPor que el then no ejecuta inmediatamente?",
        opts: ["resolve() solo programa el then, no ejecuta", "el constructor es sincrono, then es microtask", "console.log bloquea", "Todas"],
        ans: 1,
        exp: "resolve() marca promesa cumplida pero then se encola como microtask"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Async await double microtask", diff: "hard",
        q: "Codigo:\nasync function test() {\n    console.log('1');\n    await Promise.resolve();\n    console.log('2');\n    await Promise.resolve();\n    console.log('3');\n}\ntest();\nconsole.log('4');\nPromise.resolve().then(() => console.log('5'));\n\nSalida: 1,4,2,5,3\nPor que 5 sale antes que 3?",
        opts: ["cada await crea dos microtasks", "primer await encola continuacion, luego 5 se encola", "ambas", "ninguna"],
        ans: 2,
        exp: "primer await encola el resto de la funcion, luego el Promise.resolve().then() encola 5, luego el segundo await encola 3"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Promise chaining", diff: "hard",
        q: "Codigo:\nPromise.reject('Error')\n    .catch(e => { console.log(e); return 'OK'; })\n    .then(r => console.log(r));\nPromise.resolve('Directo')\n    .then(r => console.log(r));\n\nSalida: Error, OK, Directo\nPor que Directo sale despues de OK?",
        opts: ["catch devuelve promesa resuelta, then se encola", "Directo se encola despues", "el orden de encadenamiento importa", "todas"],
        ans: 3,
        exp: "catch convierte rechazo en resolucion, las microtasks se encolan en orden de ejecucion"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Async IIFE order", diff: "hard",
        q: "Codigo:\n(async () => {\n    console.log('A');\n    await null;\n    console.log('B');\n})();\n(async () => {\n    console.log('C');\n    await null;\n    console.log('D');\n})();\nconsole.log('E');\n\nSalida: A, C, E, B, D\nPor que B y D salen intercaladas?",
        opts: ["ambas await null encolan microtasks", "se ejecutan en orden FIFO", "E es sincrono", "todas"],
        ans: 3,
        exp: "las dos IIFE ejecutan parte sincrona, luego encolan B y D en orden"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Unhandled rejection", diff: "hard",
        q: "Codigo:\nasync function danger() {\n    throw new Error('Fatal');\n}\ndanger();\nconsole.log('Continua');\n\nTraceback: UnhandledPromiseRejectionWarning: Error: Fatal\n(no se captura)\nPor que no se captura aunque es async?",
        opts: ["falta await o .catch()", "async function sin await lanza promesa rechazada sin manejar", "ambas", "console.log lo bloquea"],
        ans: 2,
        exp: "danger() devuelve promesa rechazada, sin await ni catch, es unhandled rejection"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Try catch async", diff: "hard",
        q: "Codigo:\ntry {\n    (async () => { throw new Error('Inside'); })();\n} catch(e) {\n    console.log('Caught:', e.message);\n}\nconsole.log('End');\n\nTraceback: UnhandledPromiseRejectionWarning: Error: Inside\nPor que no entra al catch?",
        opts: ["try-catch no captura errores en promesas sin await", "la IIFE async devuelve promesa, el error ocurre despues", "ambas", "ninguna"],
        ans: 2,
        exp: "el error ocurre asincronamente, ya salio del bloque try-catch"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Nested promises", diff: "hard",
        q: "Codigo:\nPromise.resolve()\n    .then(() => {\n        console.log('1');\n        Promise.resolve().then(() => console.log('2'));\n    })\n    .then(() => console.log('3'));\nconsole.log('4');\n\nSalida: 4, 1, 2, 3\nPor que 3 sale despues de 2?",
        opts: ["el then interior encola 2 antes que el then exterior termine", "microtasks anidadas se priorizan", "ambas", "ninguna"],
        ans: 2,
        exp: "al ejecutar el then exterior, el then interior se encola inmediatamente y se ejecuta antes del then exterior siguiente"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Process nextTick vs Promise", diff: "hard",
        q: "Codigo (Node.js):\nprocess.nextTick(() => console.log('A'));\nPromise.resolve().then(() => console.log('B'));\nconsole.log('C');\n\nSalida: C, A, B\nPor que A sale antes que B en Node.js?",
        opts: ["Node.js: nextTick antes que microtasks", "navegador: microtasks antes", "ambas", "ninguna"],
        ans: 2,
        exp: "Node.js tiene nextTick (prioridad 1) y microtasks (prioridad 2)"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - SetImmediate vs setTimeout", diff: "hard",
        q: "Codigo (Node.js):\nsetImmediate(() => console.log('A'));\nsetTimeout(() => console.log('B'), 0);\nconsole.log('C');\n\nSalida: C, (A o B depende)\nPor que el orden A/B es indeterminado?",
        opts: ["setImmediate y setTimeout(0) compiten en misma fase", "depende de CPU", "siempre A antes", "siempre B antes"],
        ans: 0,
        exp: "en Node.js, ambos se ejecutan en fases diferentes pero el orden depende de cuando entra el event loop"
    },

    // ==================== AVANZADO - Memory leaks ====================
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Memory leak array", diff: "hard",
        q: "Codigo con memory leak:\nconst cache = [];\nfunction addData(data) {\n    cache.push(data);\n}\nsetInterval(() => addData(new Array(1000).fill('*')), 10);\n\nPor que hay memory leak?",
        opts: ["cache nunca se limpia", "setInterval infinito", "no hay limite de tamaño", "todas"],
        ans: 3,
        exp: "acumulacion sin limite + setInterval infinito = memory leak seguro"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Detached DOM", diff: "hard",
        q: "Codigo:\nlet div = document.createElement('div');\ndocument.body.appendChild(div);\ndiv.addEventListener('click', () => console.log('click'));\ndiv.remove();\n\nPor que hay memory leak aunque se elimino del DOM?",
        opts: ["el event listener mantiene referencia", "div.remove() no libera memoria", "closure retiene div", "todas"],
        ans: 3,
        exp: "el event listener crea closure que retiene div aunque no este en DOM"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Closure memory", diff: "hard",
        q: "Codigo:\nfunction createHandler() {\n    const hugeData = new Array(1000000).fill('X');\n    return function() {\n        console.log('click');\n    };\n}\nconst handler = createHandler();\nbutton.addEventListener('click', handler);\n\nPor que hugeData sigue en memoria?",
        opts: ["closure retiene todo el scope", "hugeData esta en el closure", "GC no puede liberarla", "todas"],
        ans: 3,
        exp: "la funcion retornada forma closure con todo el ambito, incluyendo hugeData"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - SetInterval leak", diff: "hard",
        q: "Codigo:\nfunction start() {\n    let counter = 0;\n    const id = setInterval(() => {\n        counter++;\n        if(counter === 100) clearInterval(id);\n    }, 1000);\n}\nstart();\n// Si start se llama muchas veces...\nQue problema hay?",
        opts: ["multiples intervals activos", "counter se reinicia", "no hay problema", "solo el primero funciona"],
        ans: 0,
        exp: "cada llamada a start crea un nuevo interval, acumulando timers activos"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Large object reference", diff: "hard",
        q: "Codigo:\nlet bigObject = { data: new Array(1000000).fill(1) };\nfunction process() {\n    const local = bigObject;\n    // hace algo con local\n}\nprocess();\nbigObject = null;\n\nbigObject se libera inmediatamente?",
        opts: ["no, process() retiene referencia local", "si, se libera", "depende del GC", "error"],
        ans: 0,
        exp: "local dentro de process aun referencia el objeto hasta que la funcion termina"
    },

    // ==================== AVANZADO - Completar código ====================
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Promise queue", diff: "hard",
        q: "Completa una cola de promesas:\nclass PromiseQueue {\n    constructor() {\n        this.queue = [];\n        this.processing = false;\n    }\n    add(promiseFactory) {\n        return new Promise((resolve, reject) => {\n            this.queue.push({ promiseFactory, resolve, reject });\n            this.___();\n        });\n    }\n    async process() {\n        if(this.processing || this.queue.length === 0) return;\n        this.processing = true;\n        while(this.queue.length) {\n            const { promiseFactory, resolve, reject } = this.queue.shift();\n            try {\n                const result = await promiseFactory();\n                resolve(result);\n            } catch(e) {\n                reject(e);\n            }\n        }\n        this.processing = false;\n    }\n}",
        opts: ["process", "run", "start", "execute"],
        ans: 0,
        exp: "process() inicia el procesamiento de la cola"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Retry backoff", diff: "hard",
        q: "Completa retry con backoff exponencial:\nasync function retry(fn, maxAttempts = 3, delay = 1000) {\n    for(let i = 1; i <= maxAttempts; i++) {\n        try {\n            return await fn();\n        } catch(error) {\n            if(i === maxAttempts) throw error;\n            await new Promise(r => setTimeout(r, delay * Math.pow(2, i ___ 1)));\n        }\n    }\n}",
        opts: ["-", "+", "*", "/"],
        ans: 0,
        exp: "delay * 2^(i-1) para backoff exponencial: 1000, 2000, 4000"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Throttle leading trailing", diff: "hard",
        q: "Completa throttle con opciones:\nfunction throttle(fn, limit, options = { leading: true, trailing: false }) {\n    let waiting = false;\n    let lastArgs = null;\n    return function(...args) {\n        if(!waiting) {\n            if(options.leading) fn(...args);\n            waiting = true;\n            setTimeout(() => {\n                waiting = false;\n                if(options.trailing && lastArgs) {\n                    fn(...lastArgs);\n                    lastArgs = null;\n                }\n            }, limit);\n        } else {\n            lastArgs = ___;\n        }\n    }\n}",
        opts: ["args", "...args", "arguments", "lastArgs"],
        ans: 0,
        exp: "guardar los ultimos argumentos para trailing edge"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Observable", diff: "hard",
        q: "Completa Observable:\nclass Observable {\n    constructor() {\n        this.observers = [];\n    }\n    subscribe(fn) {\n        this.observers.push(fn);\n        return {\n            unsubscribe: () => {\n                const index = this.observers.indexOf(fn);\n                if(index > -1) this.observers.___(index, 1);\n            }\n        };\n    }\n    notify(data) {\n        this.observers.forEach(fn => fn(data));\n    }\n}",
        opts: ["splice", "slice", "pop", "shift"],
        ans: 0,
        exp: "splice elimina el observer por indice"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - LRU Cache", diff: "hard",
        q: "Completa LRU Cache usando Map:\nclass LRUCache {\n    constructor(capacity) {\n        this.capacity = capacity;\n        this.cache = new Map();\n    }\n    get(key) {\n        if(!this.cache.has(key)) return -1;\n        const value = this.cache.get(key);\n        this.cache.delete(key);\n        this.cache.___(key, value);\n        return value;\n    }\n    put(key, value) {\n        if(this.cache.has(key)) this.cache.delete(key);\n        this.cache.set(key, value);\n        if(this.cache.size > this.capacity) {\n            const firstKey = this.cache.keys().next().value;\n            this.cache.delete(firstKey);\n        }\n    }\n}",
        opts: ["set", "add", "push", "put"],
        ans: 0,
        exp: "set para reinsertar al final (mas reciente)"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Deep freeze", diff: "hard",
        q: "Completa deep freeze recursivo:\nfunction deepFreeze(obj) {\n    Object.freeze(obj);\n    Object.keys(obj).forEach(key => {\n        if(obj[key] !== null && typeof obj[key] === 'object' && !Object.isFrozen(obj[key])) {\n            deepFreeze(___);\n        }\n    });\n    return obj;\n}",
        opts: ["obj[key]", "obj", "key", "this"],
        ans: 0,
        exp: "llamada recursiva con la propiedad anidada"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Compose", diff: "hard",
        q: "Completa compose (derecha a izquierda):\nconst compose = (...fns) => x => fns.reduceRight((acc, fn) => ___, x);",
        opts: ["fn(acc)", "acc(fn)", "fn, acc", "acc, fn"],
        ans: 0,
        exp: "compose(f,g)(x) = f(g(x))"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Pipe async", diff: "hard",
        q: "Completa pipe asincrono:\nasync function pipeAsync(...fns) {\n    return async function(input) {\n        let result = input;\n        for(const fn of fns) {\n            result = await ___(result);\n        }\n        return result;\n    }\n}",
        opts: ["fn(result)", "result(fn)", "fn, result", "result, fn"],
        ans: 0,
        exp: "aplica cada funcion asincrona secuencialmente"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Semaphore", diff: "hard",
        q: "Completa semaforo:\nclass Semaphore {\n    constructor(maxConcurrent) {\n        this.max = maxConcurrent;\n        this.current = 0;\n        this.queue = [];\n    }\n    async acquire() {\n        if(this.current < this.max) {\n            this.current++;\n            return;\n        }\n        return new Promise(resolve => {\n            this.queue.push(___);\n        });\n    }\n    release() {\n        if(this.queue.length > 0) {\n            const next = this.queue.shift();\n            next();\n        } else {\n            this.current--;\n        }\n    }\n}",
        opts: ["resolve", "reject", "this.resolve", "() => {}"],
        ans: 0,
        exp: "almacenar resolve para llamarlo cuando se libere"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Rate limiter", diff: "hard",
        q: "Completa rate limiter:\nclass RateLimiter {\n    constructor(maxRequests, windowMs) {\n        this.max = maxRequests;\n        this.window = windowMs;\n        this.requests = [];\n    }\n    async check() {\n        const now = Date.now();\n        this.requests = this.requests.filter(t => now - t < this.window);\n        if(this.requests.length >= this.max) {\n            const oldest = this.requests[0];\n            const waitTime = this.window - (now - oldest);\n            await new Promise(r => setTimeout(r, waitTime));\n            return this.___();\n        }\n        this.requests.push(now);\n        return true;\n    }\n}",
        opts: ["check()", "this.check()", "recursive", "wait"],
        ans: 0,
        exp: "llamada recursiva despues de esperar"
    },

    // ==================== AVANZADO - Analizar qué hace ====================
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Promise.any", diff: "hard",
        q: "Que imprime?\nconst p1 = Promise.reject('Error1');\nconst p2 = Promise.reject('Error2');\nconst p3 = Promise.resolve('Exito');\nPromise.any([p1, p2, p3])\n    .then(console.log)\n    .catch(console.log);",
        opts: ["Exito", "AggregateError", "Error1", "undefined"],
        ans: 0,
        exp: "Promise.any devuelve la primera promesa resuelta, ignora rechazos"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Promise.allSettled", diff: "hard",
        q: "Que imprime?\nconst promises = [\n    Promise.resolve(1),\n    Promise.reject('Error'),\n    Promise.resolve(3)\n];\nPromise.allSettled(promises)\n    .then(results => console.log(results.map(r => r.status)));",
        opts: ["['fulfilled','rejected','fulfilled']", "['fulfilled','fulfilled','fulfilled']", "['rejected','rejected','rejected']", "error"],
        ans: 0,
        exp: "allSettled espera todas, devuelve estado de cada una"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Promise.race", diff: "hard",
        q: "Que imprime?\nconst p1 = new Promise((_, reject) => setTimeout(() => reject('Error'), 100));\nconst p2 = new Promise(resolve => setTimeout(() => resolve('OK'), 200));\nPromise.race([p1, p2])\n    .then(console.log)\n    .catch(console.log);",
        opts: ["Error", "OK", "undefined", "ambos"],
        ans: 0,
        exp: "race toma la primera que se resuelve o rechaza, p1 rechaza primero"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Async reduce", diff: "hard",
        q: "Que imprime?\nconst numbers = [1, 2, 3];\nasync function asyncDouble(x) {\n    return x * 2;\n}\nconst result = await numbers.reduce(async (acc, curr) => {\n    const accVal = await acc;\n    return accVal + (await asyncDouble(curr));\n}, Promise.resolve(0));\nconsole.log(result);",
        opts: ["12", "6", "Promise", "error"],
        ans: 0,
        exp: "reduce con promesas ejecuta secuencialmente, suma 2+4+6=12"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Generator delegacion", diff: "hard",
        q: "Que imprime?\nfunction* gen1() {\n    yield 1;\n    yield* gen2();\n    yield 4;\n}\nfunction* gen2() {\n    yield 2;\n    yield 3;\n}\nconst g = gen1();\nconsole.log([...g]);",
        opts: ["[1,2,3,4]", "[1,gen2,4]", "[1,2,3]", "[1,4]"],
        ans: 0,
        exp: "yield* delega a otro generator, expande sus valores"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Async generator throw", diff: "hard",
        q: "Que imprime?\nasync function* gen() {\n    try {\n        yield 1;\n        yield 2;\n    } catch(e) {\n        console.log('Caught:', e);\n    }\n}\nconst g = gen();\nconst p1 = g.next();\nconst p2 = g.throw('Error!');\nPromise.all([p1, p2]).then(console.log);",
        opts: ["Caught: Error!, {value:1,done:false}, {value:undefined,done:true}", "Error sin catch", "1,2", "undefined"],
        ans: 0,
        exp: "throw() inyecta error al generator, se captura dentro"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Proxy revocable", diff: "hard",
        q: "Que imprime?\nconst target = { name: 'Juan' };\nconst { proxy, revoke } = Proxy.revocable(target, {});\nconsole.log(proxy.name);\nrevoke();\nconsole.log(proxy.name);",
        opts: ["Juan, TypeError", "Juan, undefined", "undefined, undefined", "error, error"],
        ans: 0,
        exp: "revoke() desactiva el proxy, cualquier operacion lanza TypeError"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Reflect.construct", diff: "hard",
        q: "Que imprime?\nclass Persona {\n    constructor(nombre) {\n        this.nombre = nombre;\n    }\n}\nconst obj = Reflect.construct(Persona, ['Ana'], Object);\nconsole.log(obj instanceof Persona);\nconsole.log(obj.nombre);",
        opts: ["false, Ana", "true, Ana", "true, undefined", "error"],
        ans: 0,
        exp: "Reflect.construct con tercer argumento cambia el prototipo, no es instancia de Persona"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - WeakRef", diff: "hard",
        q: "Que hace?\nlet obj = { data: 'importante' };\nconst registry = new FinalizationRegistry((heldValue) => {\n    console.log('Limpiando:', heldValue);\n});\nconst weakRef = new WeakRef(obj);\nregistry.register(obj, 'mi objeto');\nobj = null;\n// despues de GC...",
        opts: ["callback se ejecuta cuando obj es recolectado", "no pasa nada", "error", "weakRef mantiene vivo"],
        ans: 0,
        exp: "FinalizationRegistry notifica cuando objeto es recolectado"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar - Symbol.for", diff: "hard",
        q: "Que imprime?\nconst sym1 = Symbol.for('id');\nconst sym2 = Symbol.for('id');\nconsole.log(sym1 === sym2);\nconst sym3 = Symbol('id');\nconsole.log(sym1 === sym3);",
        opts: ["true, false", "true, true", "false, false", "false, true"],
        ans: 0,
        exp: "Symbol.for usa registro global, Symbol siempre crea nuevo unico"
    },

    // ==================== AVANZADO - Errores sutiles ====================
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Object.is vs ===", diff: "hard",
        q: "Que imprime?\nconsole.log(NaN === NaN);\nconsole.log(Object.is(NaN, NaN));\nconsole.log(-0 === +0);\nconsole.log(Object.is(-0, +0));",
        opts: ["false, true, true, false", "true, true, true, true", "false, false, false, false", "true, false, true, false"],
        ans: 0,
        exp: "Object.is implementa SameValue, diferencia -0 y +0, trata NaN igual"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - parseInt octal", diff: "hard",
        q: "Que imprime?\nconsole.log(parseInt('08'));\nconsole.log(parseInt('09'));\nconsole.log(parseInt('10', 8));",
        opts: ["8, 9, 8", "0, 0, 8", "8, 9, 10", "0, 0, 10"],
        ans: 0,
        exp: "parseInt moderno asume base 10, el octal antiguo daba 0"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Function length", diff: "hard",
        q: "Que imprime?\nfunction test(a, b, c = 3) {}\nfunction test2(a, b, ...rest) {}\nconsole.log(test.length);\nconsole.log(test2.length);",
        opts: ["2, 2", "3, 3", "2, 3", "3, 2"],
        ans: 0,
        exp: "length cuenta solo parametros antes del primero con default o rest"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug - Arguments object", diff: "hard",
        q: "Que imprime?\nfunction test(a, b) {\n    arguments[0] = 99;\n    console.log(a);\n    a = 100;\n    console.log(arguments[0]);\n}\ntest(1, 2);\n\nEn modo estricto seria igual?",
        opts: ["99, 100 | no", "1, 2 | si", "99, 100 | si", "1, 2 | no"],
        ans: 0,
        exp: "en modo estricto, arguments es copia, no hay sincronizacion"
    },

    // ==================== AVANZADO - Completar algoritmos ====================
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Flatten deep", diff: "hard",
        q: "Completa flatten profundo:\nfunction flattenDeep(arr, depth = Infinity) {\n    return arr.reduce((acc, val) => {\n        if(Array.isArray(val) && depth > 0) {\n            return acc.concat(flattenDeep(val, depth ___ 1));\n        }\n        return acc.concat(val);\n    }, []);\n}",
        opts: ["-", "+", "*", "/"],
        ans: 0,
        exp: "decrementar depth en cada nivel"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Chunk", diff: "hard",
        q: "Completa chunk:\nfunction chunk(arr, size) {\n    const result = [];\n    for(let i = 0; i < arr.length; i += size) {\n        result.push(arr.slice(i, i ___ size));\n    }\n    return result;\n}",
        opts: ["+", "-", "*", "/"],
        ans: 0,
        exp: "slice(i, i+size) toma 'size' elementos"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Unique by key", diff: "hard",
        q: "Completa uniqueBy:\nfunction uniqueBy(arr, key) {\n    const seen = new Set();\n    return arr.filter(item => {\n        const val = typeof key === 'function' ? key(item) : item[key];\n        if(seen.has(val)) return false;\n        seen.___(val);\n        return true;\n    });\n}",
        opts: ["add", "set", "push", "put"],
        ans: 0,
        exp: "Set.add() para registrar valores vistos"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Group by", diff: "hard",
        q: "Completa groupBy:\nfunction groupBy(arr, key) {\n    return arr.reduce((acc, item) => {\n        const groupKey = typeof key === 'function' ? key(item) : item[key];\n        if(!acc[groupKey]) acc[groupKey] = [];\n        acc[groupKey].___(item);\n        return acc;\n    }, {});\n}",
        opts: ["push", "pop", "shift", "unshift"],
        ans: 0,
        exp: "push agrega elemento al grupo"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Intersection", diff: "hard",
        q: "Completa interseccion:\nfunction intersection(arr1, arr2) {\n    const set2 = new Set(arr2);\n    return arr1.filter(item => set2.___(item));\n}",
        opts: ["has", "contains", "includes", "hasOwn"],
        ans: 0,
        exp: "Set.has() verifica pertenencia"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Difference", diff: "hard",
        q: "Completa diferencia:\nfunction difference(arr1, arr2) {\n    const set2 = new Set(arr2);\n    return arr1.filter(item => !set2.___(item));\n}",
        opts: ["has", "contains", "includes", "hasOwn"],
        ans: 0,
        exp: "Set.has() para filtrar elementos que NO estan en arr2"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Zip", diff: "hard",
        q: "Completa zip:\nfunction zip(...arrays) {\n    const maxLength = Math.max(...arrays.map(arr => arr.length));\n    return Array.from({ length: maxLength }, (_, i) => arrays.map(arr => arr[___]));\n}",
        opts: ["i", "0", "arr", "length"],
        ans: 0,
        exp: "i es el indice, toma el elemento i de cada array"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Unzip", diff: "hard",
        q: "Completa unzip:\nfunction unzip(paired) {\n    return paired.reduce((acc, [first, second]) => {\n        acc[0].push(first);\n        acc[1].push(second);\n        return acc;\n    }, [[], []]);\n}",
        opts: ["[[], []]", "{0:[],1:[]}", "new Array(2)", "new Map()"],
        ans: 0,
        exp: "inicializar dos arrays vacios"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Pick", diff: "hard",
        q: "Completa pick:\nfunction pick(obj, keys) {\n    return keys.reduce((acc, key) => {\n        if(key in obj) acc[key] = obj[key];\n        return acc;\n    }, ___);\n}",
        opts: "{}",
        opts_array: ["{}", "[]", "new Object()", "Object.create(null)"],
        ans: 0,
        exp: "objeto vacio como acumulador inicial"
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar - Omit", diff: "hard",
        q: "Completa omit:\nfunction omit(obj, keys) {\n    const keysSet = new Set(keys);\n    return Object.keys(obj).reduce((acc, key) => {\n        if(!keysSet.has(key)) acc[key] = obj[key];\n        return acc;\n    }, ___);\n}",
        opts: "{}",
        opts_array: ["{}", "[]", "new Object()", "Object.create(null)"],
        ans: 0,
        exp: "objeto vacio como acumulador inicial"
    },

    {
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug 1", diff: "easy",
q: "Codigo:\nlet x = 5;\nconsole.log(x);\n\nError: ReferenceError: x is not defined\nCual es el error?",
opts: ["x no esta definida", "console.log esta mal", "falta el punto y coma", "x es mayuscula"],
ans: 0, exp: "La variable x no fue declarada antes de usarla"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug 2", diff: "easy",
q: "Codigo:\nlet nombre = 'Juan';\nconsole.log(Nombre);\n\nError: ReferenceError: Nombre is not defined\nPor que?",
opts: ["JavaScript es case-sensitive", "falta declarar Nombre", "console.log esta mal", "usar comillas dobles"],
ans: 0, exp: "nombre y Nombre son variables diferentes por la mayuscula"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug 3", diff: "easy",
q: "Codigo:\nlet a = '5';\nlet b = 2;\nconsole.log(a + b);\n\nSalida: '52'\nPor que no es 7?",
opts: ["+ concatena string con numero", "falta parseInt", "error de sintaxis", "usar - en lugar de +"],
ans: 0, exp: "El operador + con string convierte numero a string y concatena"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug 4", diff: "easy",
q: "Codigo:\nfunction sumar(a, b) {\n    return a + b;\n}\nconsole.log(sumar(5));\n\nSalida: NaN\nPor que?",
opts: ["falta segundo argumento undefined", "funcion mal definida", "console.log error", "falta return"],
ans: 0, exp: "sumar(5, undefined) = 5 + undefined = NaN"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug 5", diff: "easy",
q: "Codigo:\nlet arr = [1, 2, 3];\nconsole.log(arr[3]);\n\nSalida: undefined\nPor que no hay error?",
opts: ["JS no da error devuelve undefined", "indice 3 existe", "error de sintaxis", "array vacio"],
ans: 0, exp: "Acceder a indice inexistente en array devuelve undefined"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug 6", diff: "easy",
q: "Codigo:\nlet edad = '18';\nif(edad === 18) {\n    console.log('Mayor');\n} else {\n    console.log('Menor');\n}\n\nSalida: Menor\nPor que?",
opts: ["=== compara tipo string vs number", "falta parseInt", "usar ==", "edad es numero"],
ans: 0, exp: "=== compara valor y tipo, '18' es string, 18 es number"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug 7", diff: "easy",
q: "Codigo:\nif(true) {\n    var x = 10;\n    let y = 20;\n}\nconsole.log(x);\nconsole.log(y);\n\nError: y is not defined\nPor que?",
opts: ["let tiene scope de bloque var no", "y no existe", "console.log error", "falta declarar y"],
ans: 0, exp: "let y const son block-scope, var es function-scope"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug 8", diff: "easy",
q: "Codigo:\nlet texto = 'JavaScript';\ntexto[0] = 'X';\nconsole.log(texto[0]);\n\nSalida: 'J'\nPor que no cambio a 'X'?",
opts: ["strings son inmutables", "error de sintaxis", "falta metodo replace", "indice incorrecto"],
ans: 0, exp: "Los strings en JS son inmutables"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug 9", diff: "easy",
q: "Codigo:\nconst PI = 3.14;\nPI = 3.1416;\nconsole.log(PI);\n\nError: Assignment to constant variable\nPor que?",
opts: ["const no se puede reasignar", "PI ya existe", "error de sintaxis", "usar let"],
ans: 0, exp: "const declara constantes que no pueden reasignarse"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug 10", diff: "easy",
q: "Codigo:\nlet arr = [1, 2, 3];\nconsole.log(typeof arr);\n\nSalida: 'object'\nPor que no dice 'array'?",
opts: ["arrays son objetos en JS", "error de typeof", "deberia decir array", "es un bug"],
ans: 0, exp: "typeof array devuelve 'object' porque los arrays son objetos"
},

// ==================== BÁSICO - Completar (10) ====================

{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar 1", diff: "easy",
q: "Completa para declarar constante:\n___ PI = 3.1416;",
opts: ["const", "let", "var", "constant"],
ans: 0, exp: "const para valores que no cambian"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar 2", diff: "easy",
q: "Completa la funcion:\nfunction sumar(a, b) {\n    ___ a + b;\n}",
opts: ["return", "console.log", "print", "echo"],
ans: 0, exp: "return devuelve el valor"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar 3", diff: "easy",
q: "Completa para agregar al final:\nlet frutas = ['Manzana', 'Pera'];\nfrutas.___('Mango');",
opts: ["push", "pop", "shift", "unshift"],
ans: 0, exp: "push agrega al final"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar 4", diff: "easy",
q: "Completa para eliminar el ultimo:\nlet frutas = ['Manzana', 'Pera', 'Mango'];\nfrutas.___();",
opts: ["pop", "push", "shift", "unshift"],
ans: 0, exp: "pop elimina el ultimo"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar 5", diff: "easy",
q: "Completa el condicional:\nlet edad = 20;\n___(edad >= 18) {\n    console.log('Mayor');\n} ___ {\n    console.log('Menor');\n}",
opts: ["if / else", "for / else", "while / else", "switch / default"],
ans: 0, exp: "if-else para ejecucion condicional"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar 6", diff: "easy",
q: "Completa el bucle:\nfor(let i = 0; i ___ 5; i++) {\n    console.log(i);\n}",
opts: ["<", "<=", ">", "==="],
ans: 0, exp: "i < 5 da 0,1,2,3,4"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar 7", diff: "easy",
q: "Completa para acceder a propiedad:\nlet persona = { nombre: 'Carlos', edad: 30 };\nconsole.log(persona.___);",
opts: ["nombre", "edad", "Carlos", "30"],
ans: 0, exp: "notacion punto para acceder a propiedades"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar 8", diff: "easy",
q: "Completa template string:\nlet nombre = 'Luis';\nconsole.log(`Hola ___`);",
opts: ["${nombre}", "$nombre", "{nombre}", "[nombre]"],
ans: 0, exp: "${variable} para interpolacion"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar 9", diff: "easy",
q: "Completa conversion a numero:\nlet texto = '123';\nlet numero = ___Number(texto);",
opts: ["parseInt", "Number", "String", "Boolean"],
ans: 1, exp: "Number() convierte string a numero"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar 10", diff: "easy",
q: "Completa arrow function:\nlet duplicar = (x) ___ x * 2;",
opts: ["=>", "->", "=", "return"],
ans: 0, exp: "=> es la sintaxis de arrow function"
},

// ==================== BÁSICO - Analizar (10) ====================

{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar 1", diff: "easy",
q: "Que imprime?\nlet a = 10;\nlet b = 3;\nconsole.log(a % b);",
opts: ["1", "3", "3.33", "0"],
ans: 0, exp: "% es modulo, resto de division: 10 / 3 = 3 resto 1"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar 2", diff: "easy",
q: "Que imprime?\nlet x = 5;\nif(x > 10) {\n    console.log('Mayor');\n} else if(x > 3) {\n    console.log('Medio');\n} else {\n    console.log('Menor');\n}",
opts: ["Medio", "Mayor", "Menor", "Ninguna"],
ans: 0, exp: "5 > 3 es true, ejecuta else if"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar 3", diff: "easy",
q: "Cuantas veces se ejecuta?\nlet i = 0;\nwhile(i < 3) {\n    console.log(i);\n    i++;\n}",
opts: ["3 veces (0,1,2)", "2 veces", "4 veces", "bucle infinito"],
ans: 0, exp: "i=0,1,2 son 3 iteraciones, i=3 sale"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar 4", diff: "easy",
q: "Que devuelve?\nlet arr = [1, 2, 3, 4, 5];\nconsole.log(arr.length);",
opts: ["5", "4", "6", "undefined"],
ans: 0, exp: "length propiedad del array"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar 5", diff: "easy",
q: "Que devuelve?\nlet saludo = 'Hola Mundo';\nconsole.log(saludo.toUpperCase());",
opts: ["HOLA MUNDO", "hola mundo", "Hola Mundo", "HOLA mundo"],
ans: 0, exp: "toUpperCase() convierte a mayusculas"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar 6", diff: "easy",
q: "Que imprime?\nlet a = 5;\nlet b = '5';\nconsole.log(a == b);\nconsole.log(a === b);",
opts: ["true, false", "false, true", "true, true", "false, false"],
ans: 0, exp: "== compara valor, === compara valor y tipo"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar 7", diff: "easy",
q: "Que imprime?\nlet x = 10;\nx += 5;\nconsole.log(x);",
opts: ["15", "105", "10", "5"],
ans: 0, exp: "x += 5 es x = x + 5"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar 8", diff: "easy",
q: "Que imprime?\nlet contador = 0;\nconsole.log(contador++);\nconsole.log(++contador);",
opts: ["0, 2", "0, 1", "1, 2", "1, 1"],
ans: 0, exp: "contador++ devuelve 0 luego incrementa a 1, luego ++contador incrementa a 2 y devuelve 2"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar 9", diff: "easy",
q: "Que imprime?\nconsole.log(typeof null);\nconsole.log(typeof undefined);",
opts: ["object, undefined", "null, undefined", "object, object", "undefined, undefined"],
ans: 0, exp: "typeof null es 'object' (error historico), typeof undefined es 'undefined'"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar 10", diff: "easy",
q: "Que imprime?\nlet arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr);",
opts: ["[1,2,3,4]", "[4,1,2,3]", "[1,2,3]", "[1,2,3,4,5]"],
ans: 0, exp: "push agrega elemento al final"
},

// ==================== INTERMEDIO (100 preguntas) - Muestras ====================

{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter 1", diff: "medium",
q: "Codigo:\nfor(var i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 0);\n}\n\nSalida: 3,3,3\nPor que no es 0,1,2?",
opts: ["var tiene scope global, i=3 al final", "setTimeout no funciona", "error de sintaxis", "console.log esta mal"],
ans: 0, exp: "var en for no crea scope por iteracion, todas comparten el mismo i"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter 2", diff: "medium",
q: "Codigo:\nconst persona = {\n    nombre: 'Ana',\n    saludar: function() {\n        setTimeout(function() {\n            console.log('Hola ' + this.nombre);\n        }, 100);\n    }\n};\npersona.saludar();\n\nSalida: Hola undefined\nPor que?",
opts: ["this dentro de setTimeout es global", "nombre no existe", "setTimeout es asincrono", "falta bind"],
ans: 0, exp: "setTimeout usa su propio this (window), no el del objeto"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter 3", diff: "medium",
q: "Codigo:\nconsole.log('1');\nsetTimeout(() => console.log('2'), 0);\nconsole.log('3');\n\nSalida: 1,3,2\nPor que 2 sale al final?",
opts: ["setTimeout va a cola de tareas", "setTimeout no funciona", "console.log es mas rapido", "error"],
ans: 0, exp: "setTimeout aunque sea 0, se ejecuta despues del codigo sincrono"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter 4", diff: "medium",
q: "Codigo:\nconst obj1 = { a: 1, b: 2 };\nconst obj2 = obj1;\nobj2.a = 99;\nconsole.log(obj1.a);\n\nSalida: 99\nPor que obj1 tambien cambio?",
opts: ["objetos se asignan por referencia", "obj2 copia automatica", "error", "a es global"],
ans: 0, exp: "obj2 apunta al mismo objeto que obj1"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter 5", diff: "medium",
q: "Codigo:\nconst original = { a: 1, b: { c: 2 } };\nconst copia = { ...original };\ncopia.b.c = 99;\nconsole.log(original.b.c);\n\nSalida: 99\nPor que original cambio?",
opts: ["spread hace shallow copy", "objetos anidados son referencia", "ambas", "ninguna"],
ans: 2, exp: "shallow copy: propiedades anidadas siguen siendo referencia"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter 6", diff: "medium",
q: "Codigo:\nconst obj = {\n    nombre: 'Juan',\n    saludar: function() { return 'Hola'; }\n};\nconst json = JSON.stringify(obj);\nconsole.log(json);\n\nSalida: {\"nombre\":\"Juan\"}\nPor que falta el metodo?",
opts: ["JSON.stringify ignora funciones", "error", "funcion no es string", "falta toString"],
ans: 0, exp: "JSON solo soporta tipos primitivos, no funciones"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter 7", diff: "medium",
q: "Codigo:\nlet a = [1, 2, 3];\nlet b = a;\nb.push(4);\nconsole.log(a);\n\nSalida: [1,2,3,4]\nPor que a tambien cambio?",
opts: ["arrays son objetos por referencia", "b copia a", "push modifica original", "todas"],
ans: 3, exp: "a y b apuntan al mismo array"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter 8", diff: "medium",
q: "Codigo:\nfunction test() {\n    console.log(this);\n}\ntest();\n\nEn navegador salida: window\nEn Node.js salida: global\nPor que?",
opts: ["this en funcion normal es el objeto global", "test es global", "ambas", "ninguna"],
ans: 0, exp: "this en funcion normal no estricta es el objeto global (window/global)"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter 9", diff: "medium",
q: "Codigo:\n'use strict';\nfunction test() {\n    console.log(this);\n}\ntest();\n\nSalida: undefined\nPor que?",
opts: ["modo estricto this es undefined", "test no tiene this", "error", "ambas"],
ans: 0, exp: "en modo estricto, this en funcion normal es undefined"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter 10", diff: "medium",
q: "Codigo:\nconst fn = () => {\n    console.log(this);\n};\nfn();\n\nSalida: window/global\nPor que?",
opts: ["arrow function hereda this del padre", "no tiene this propio", "ambas", "ninguna"],
ans: 2, exp: "arrow functions no tienen su propio this, heredan del contexto lexico"
},

// ==================== INTERMEDIO - Completar (10) ====================

{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter 1", diff: "medium",
q: "Completa el closure:\nfunction crearContador() {\n    let contador = 0;\n    return function() {\n        contador___;\n        return contador;\n    }\n}",
opts: ["++", "--", "+=", "-="],
ans: 0, exp: "++ incrementa en 1"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter 2", diff: "medium",
q: "Completa la promesa:\nfunction esperar(ms) {\n    return new Promise((resolve) => {\n        setTimeout(___, ms);\n    });\n}",
opts: ["resolve", "reject", "callback", "then"],
ans: 0, exp: "setTimeout llama a resolve despues de ms"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter 3", diff: "medium",
q: "Completa async await:\nasync function obtenerDatos() {\n    const respuesta = ___ fetch('https://api.example.com');\n    const datos = await respuesta.json();\n    return datos;\n}",
opts: ["await", "return", "new", "Promise"],
ans: 0, exp: "await espera la resolucion de fetch"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter 4", diff: "medium",
q: "Completa map:\nconst numeros = [1, 2, 3, 4];\nconst duplicados = numeros.___(n => n * 2);",
opts: ["map", "filter", "reduce", "forEach"],
ans: 0, exp: "map transforma cada elemento"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter 5", diff: "medium",
q: "Completa filter:\nconst numeros = [1, 2, 3, 4, 5, 6];\nconst pares = numeros.___(n => n % 2 === 0);",
opts: ["filter", "map", "reduce", "find"],
ans: 0, exp: "filter devuelve elementos que cumplen condicion"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter 6", diff: "medium",
q: "Completa reduce:\nconst numeros = [5, 10, 15];\nconst suma = numeros.___((acc, curr) => acc + curr, 0);",
opts: ["reduce", "map", "filter", "forEach"],
ans: 0, exp: "reduce acumula valores"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter 7", diff: "medium",
q: "Completa find:\nconst numeros = [5, 12, 8, 15];\nconst encontrado = numeros.___(n => n > 10);",
opts: ["find", "filter", "some", "every"],
ans: 0, exp: "find devuelve el primer elemento que cumple condicion"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter 8", diff: "medium",
q: "Completa some:\nconst numeros = [1, 2, -3, 4];\nconst hayNegativo = numeros.___(n => n < 0);",
opts: ["some", "every", "find", "includes"],
ans: 0, exp: "some devuelve true si al menos uno cumple"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter 9", diff: "medium",
q: "Completa every:\nconst numeros = [1, 2, 3, 4];\nconst todosPositivos = numeros.___(n => n > 0);",
opts: ["every", "some", "find", "filter"],
ans: 0, exp: "every devuelve true si todos cumplen"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter 10", diff: "medium",
q: "Completa sort:\nconst numeros = [3, 1, 4, 1, 5];\nnumeros.___((a, b) => a - b);",
opts: ["sort", "reverse", "order", "arrange"],
ans: 0, exp: "sort con funcion comparadora a - b ordena ascendente"
},

// ==================== INTERMEDIO - Analizar (10) ====================

{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter 1", diff: "medium",
q: "Que imprime?\nfunction crearSumador(x) {\n    return function(y) {\n        return x + y;\n    }\n}\nconst suma5 = crearSumador(5);\nconsole.log(suma5(3));\nconsole.log(suma5(10));",
opts: ["8 y 15", "5 y 3", "3 y 10", "error"],
ans: 0, exp: "closure recuerda x=5"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter 2", diff: "medium",
q: "En que orden se imprimen?\nconsole.log('A');\nsetTimeout(() => console.log('B'), 0);\nPromise.resolve().then(() => console.log('C'));\nconsole.log('D');",
opts: ["A, D, C, B", "A, B, C, D", "A, C, B, D", "A, D, B, C"],
ans: 0, exp: "microtasks (Promise) antes que macrotasks (setTimeout)"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter 3", diff: "medium",
q: "Que imprime?\nconst obj = {\n    nombre: 'Objeto',\n    regular: function() { console.log(this.nombre); },\n    flecha: () => { console.log(this.nombre); }\n};\nobj.regular();\nobj.flecha();",
opts: ["Objeto, undefined", "undefined, Objeto", "Objeto, Objeto", "undefined, undefined"],
ans: 0, exp: "regular tiene this propio, flecha hereda this global"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter 4", diff: "medium",
q: "Que imprime?\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combinado = [...arr1, ...arr2];\nconsole.log(combinado);",
opts: ["[1,2,3,4,5,6]", "[[1,2,3],[4,5,6]]", "[1,2,3,4,5,6,7]", "error"],
ans: 0, exp: "spread expande elementos y concatena"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter 5", diff: "medium",
q: "Que imprime?\nconst persona = { nombre: 'Luis', edad: 25, ciudad: 'Madrid' };\nconst { nombre, edad } = persona;\nconsole.log(nombre, edad);",
opts: ["Luis 25", "Luis Madrid", "25 Madrid", "undefined undefined"],
ans: 0, exp: "destructuring extrae propiedades"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter 6", diff: "medium",
q: "Que imprime?\nconst [primero, segundo, ...resto] = [10, 20, 30, 40, 50];\nconsole.log(resto);",
opts: ["[30,40,50]", "[10,20]", "30", "error"],
ans: 0, exp: "rest operator agrupa el resto"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter 7", diff: "medium",
q: "Que imprime?\nconsole.log(0 ?? 'default');\nconsole.log(null ?? 'default');\nconsole.log(undefined ?? 'default');",
opts: ["0, default, default", "default, default, default", "0, 0, default", "error"],
ans: 0, exp: "?? solo usa default si es null o undefined"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter 8", diff: "medium",
q: "Que imprime?\nconst usuario = { perfil: { nombre: 'Ana' } };\nconsole.log(usuario.perfil?.nombre);\nconsole.log(usuario.direccion?.calle);",
opts: ["Ana, undefined", "Ana, error", "undefined, undefined", "error, error"],
ans: 0, exp: "optional chaining evita error, devuelve undefined"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter 9", diff: "medium",
q: "Que imprime?\nconst numeros = [1, 2, 2, 3, 3, 3, 4];\nconst unicos = [...new Set(numeros)];\nconsole.log(unicos);",
opts: ["[1,2,3,4]", "[1,2,2,3,3,3,4]", "Set(4)", "error"],
ans: 0, exp: "Set elimina duplicados, spread convierte a array"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter 10", diff: "medium",
q: "Que imprime?\nconst nombre = '';\nconst saludo = nombre || 'Invitado';\nconsole.log(saludo);",
opts: ["Invitado", "", "undefined", "null"],
ans: 0, exp: "|| devuelve el primer valor truthy, '' es falsy"

},

// ==================== AVANZADO (100 preguntas) - Muestras ====================

{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz 1", diff: "hard",
q: "Codigo:\nlet resolveP;\nconst p = new Promise(r => { resolveP = r; });\np.then(() => console.log('A'));\nresolveP();\nconsole.log('B');\nPromise.resolve().then(() => console.log('C'));\nconsole.log('D');\n\nSalida: B, D, A, C\nPor que A sale antes que C?",
opts: ["A se encolo antes que C", "resolve ejecuta then inmediato", "orden FIFO microtasks", "todas"],
ans: 3, exp: "resolve encola A, luego Promise.resolve().then() encola C, microtasks FIFO"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz 2", diff: "hard",
q: "Codigo:\nasync function test() {\n    console.log('1');\n    await Promise.resolve();\n    console.log('2');\n    await Promise.resolve();\n    console.log('3');\n}\ntest();\nconsole.log('4');\nPromise.resolve().then(() => console.log('5'));\n\nSalida: 1,4,2,5,3\nPor que 5 sale antes que 3?",
opts: ["cada await crea microtasks", "primer await encola continuacion, luego 5", "ambas", "ninguna"],
ans: 2, exp: "primer await encola el resto, luego Promise.resolve().then() encola 5"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz 3", diff: "hard",
q: "Codigo:\nPromise.reject('Error')\n    .catch(e => { console.log(e); return 'OK'; })\n    .then(r => console.log(r));\nPromise.resolve('Directo')\n    .then(r => console.log(r));\n\nSalida: Error, OK, Directo\nPor que Directo sale despues de OK?",
opts: ["catch devuelve promesa resuelta", "Directo se encola despues", "el orden importa", "todas"],
ans: 3, exp: "catch convierte rechazo en resolucion, se encolan en orden"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz 4", diff: "hard",
q: "Codigo:\nasync function danger() {\n    throw new Error('Fatal');\n}\ndanger();\nconsole.log('Continua');\n\nError: UnhandledPromiseRejection\nPor que no se captura?",
opts: ["falta await o catch", "async devuelve promesa rechazada", "ambas", "console.log bloquea"],
ans: 2, exp: "danger() devuelve promesa rechazada sin manejar"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz 5", diff: "hard",
q: "Codigo:\ntry {\n    (async () => { throw new Error('Inside'); })();\n} catch(e) {\n    console.log('Caught:', e.message);\n}\n\nError: UnhandledPromiseRejection\nPor que no entra al catch?",
opts: ["try-catch no captura errores en promesas sin await", "error ocurre despues", "ambas", "ninguna"],
ans: 2, exp: "error ocurre asincronamente, ya salio del try-catch"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz 6", diff: "hard",
q: "Codigo:\nPromise.resolve()\n    .then(() => {\n        console.log('1');\n        Promise.resolve().then(() => console.log('2'));\n    })\n    .then(() => console.log('3'));\nconsole.log('4');\n\nSalida: 4, 1, 2, 3\nPor que 3 sale despues de 2?",
opts: ["then interior encola 2 antes que then exterior termine", "microtasks anidadas priorizan", "ambas", "ninguna"],
ans: 2, exp: "al ejecutar then exterior, el then interior se encola inmediatamente"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz 7", diff: "hard",
q: "Codigo con memory leak:\nconst cache = [];\nsetInterval(() => cache.push(new Array(1000).fill('*')), 10);\n\nPor que hay memory leak?",
opts: ["cache nunca se limpia", "setInterval infinito", "no hay limite", "todas"],
ans: 3, exp: "acumulacion sin limite + setInterval infinito"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz 8", diff: "hard",
q: "Codigo:\nlet div = document.createElement('div');\ndiv.addEventListener('click', () => console.log('click'));\ndiv.remove();\n\nPor que hay memory leak?",
opts: ["event listener mantiene referencia", "remove no libera", "closure retiene div", "todas"],
ans: 3, exp: "el event listener crea closure que retiene div"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz 9", diff: "hard",
q: "Codigo:\nfunction createHandler() {\n    const hugeData = new Array(1000000).fill('X');\n    return function() { console.log('click'); };\n}\nconst handler = createHandler();\n\nPor que hugeData sigue en memoria?",
opts: ["closure retiene todo el scope", "hugeData esta en closure", "GC no puede liberarla", "todas"],
ans: 3, exp: "la funcion retornada forma closure con todo el ambito"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz 10", diff: "hard",
q: "Codigo:\nlet bigObject = { data: new Array(1000000).fill(1) };\nfunction process() {\n    const local = bigObject;\n}\nprocess();\nbigObject = null;\n\nbigObject se libera?",
opts: ["no, local aun referencia", "si", "depende del GC", "error"],
ans: 0, exp: "local dentro de process aun referencia el objeto"
},

// ==================== AVANZADO - Completar (10) ====================

{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz 1", diff: "hard",
q: "Completa retry con backoff:\nasync function retry(fn, maxAttempts = 3, delay = 1000) {\n    for(let i = 1; i <= maxAttempts; i++) {\n        try {\n            return await fn();\n        } catch(error) {\n            if(i === maxAttempts) throw error;\n            await new Promise(r => setTimeout(r, delay * Math.pow(2, i ___ 1)));\n        }\n    }\n}",
opts: ["-", "+", "*", "/"],
ans: 0, exp: "delay * 2^(i-1) para backoff exponencial"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz 2", diff: "hard",
q: "Completa throttle:\nfunction throttle(fn, limit) {\n    let waiting = false;\n    return function(...args) {\n        if(___ waiting) return;\n        waiting = true;\n        fn(...args);\n        setTimeout(() => { waiting = false; }, limit);\n    }\n}",
opts: ["!", "!!", "waiting", "!waiting"],
ans: 0, exp: "if(!waiting) ejecuta si no esta en espera"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz 3", diff: "hard",
q: "Completa LRU Cache:\nget(key) {\n    if(!this.cache.has(key)) return -1;\n    const value = this.cache.get(key);\n    this.cache.delete(key);\n    this.cache.___(key, value);\n    return value;\n}",
opts: ["set", "add", "push", "put"],
ans: 0, exp: "set para reinsertar al final (mas reciente)"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz 4", diff: "hard",
q: "Completa deep freeze:\nfunction deepFreeze(obj) {\n    Object.freeze(obj);\n    Object.keys(obj).forEach(key => {\n        if(obj[key] !== null && typeof obj[key] === 'object' && !Object.isFrozen(obj[key])) {\n            deepFreeze(___);\n        }\n    });\n    return obj;\n}",
opts: ["obj[key]", "obj", "key", "this"],
ans: 0, exp: "llamada recursiva con la propiedad anidada"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz 5", diff: "hard",
q: "Completa compose:\nconst compose = (...fns) => x => fns.reduceRight((acc, fn) => ___, x);",
opts: ["fn(acc)", "acc(fn)", "fn, acc", "acc, fn"],
ans: 0, exp: "compose(f,g)(x) = f(g(x))"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz 6", diff: "hard",
q: "Completa semaforo:\nreturn new Promise(resolve => {\n    this.queue.push(___);\n});",
opts: ["resolve", "reject", "this.resolve", "() => {}"],
ans: 0, exp: "almacenar resolve para llamarlo cuando se libere"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz 7", diff: "hard",
q: "Completa rate limiter:\nif(this.requests.length >= this.max) {\n    const oldest = this.requests[0];\n    const waitTime = this.window - (now - oldest);\n    await new Promise(r => setTimeout(r, waitTime));\n    return this.___();\n}",
opts: ["check", "this.check", "recursive", "wait"],
ans: 0, exp: "llamada recursiva despues de esperar"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz 8", diff: "hard",
q: "Completa flatten deep:\nif(Array.isArray(val) && depth > 0) {\n    return acc.concat(flattenDeep(val, depth ___ 1));\n}",
opts: ["-", "+", "*", "/"],
ans: 0, exp: "decrementar depth en cada nivel"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz 9", diff: "hard",
q: "Completa uniqueBy:\nif(seen.has(val)) return false;\nseen.___(val);\nreturn true;",
opts: ["add", "set", "push", "put"],
ans: 0, exp: "Set.add() para registrar valores vistos"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz 10", diff: "hard",
q: "Completa zip:\nreturn Array.from({ length: maxLength }, (_, i) => arrays.map(arr => arr[___]));",
opts: ["i", "0", "arr", "length"],
ans: 0, exp: "i es el indice, toma el elemento i de cada array"
},

// ==================== AVANZADO - Analizar (10) ====================

{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz 1", diff: "hard",
q: "Que imprime?\nconst p1 = Promise.reject('Error1');\nconst p2 = Promise.reject('Error2');\nconst p3 = Promise.resolve('Exito');\nPromise.any([p1, p2, p3])\n    .then(console.log)\n    .catch(console.log);",
opts: ["Exito", "AggregateError", "Error1", "undefined"],
ans: 0, exp: "Promise.any devuelve la primera promesa resuelta"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz 2", diff: "hard",
q: "Que imprime?\nconst promises = [\n    Promise.resolve(1),\n    Promise.reject('Error'),\n    Promise.resolve(3)\n];\nPromise.allSettled(promises)\n    .then(results => console.log(results.map(r => r.status)));",
opts: ["['fulfilled','rejected','fulfilled']", "['fulfilled','fulfilled','fulfilled']", "['rejected','rejected','rejected']", "error"],
ans: 0, exp: "allSettled devuelve estado de cada una"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz 3", diff: "hard",
q: "Que imprime?\nconst p1 = new Promise((_, reject) => setTimeout(() => reject('Error'), 100));\nconst p2 = new Promise(resolve => setTimeout(() => resolve('OK'), 200));\nPromise.race([p1, p2])\n    .then(console.log)\n    .catch(console.log);",
opts: ["Error", "OK", "undefined", "ambos"],
ans: 0, exp: "race toma la primera que se resuelve o rechaza"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz 4", diff: "hard",
q: "Que imprime?\nfunction* gen1() {\n    yield 1;\n    yield* gen2();\n    yield 4;\n}\nfunction* gen2() {\n    yield 2;\n    yield 3;\n}\nconst g = gen1();\nconsole.log([...g]);",
opts: ["[1,2,3,4]", "[1,gen2,4]", "[1,2,3]", "[1,4]"],
ans: 0, exp: "yield* delega a otro generator"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz 5", diff: "hard",
q: "Que imprime?\nconst target = { name: 'Juan' };\nconst { proxy, revoke } = Proxy.revocable(target, {});\nconsole.log(proxy.name);\nrevoke();\nconsole.log(proxy.name);",
opts: ["Juan, TypeError", "Juan, undefined", "undefined, undefined", "error, error"],
ans: 0, exp: "revoke() desactiva el proxy, lanza TypeError"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz 6", diff: "hard",
q: "Que imprime?\nclass Persona {\n    constructor(nombre) {\n        this.nombre = nombre;\n    }\n}\nconst obj = Reflect.construct(Persona, ['Ana'], Object);\nconsole.log(obj instanceof Persona);\nconsole.log(obj.nombre);",
opts: ["false, Ana", "true, Ana", "true, undefined", "error"],
ans: 0, exp: "Reflect.construct con tercer argumento cambia el prototipo"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz 7", diff: "hard",
q: "Que imprime?\nconst sym1 = Symbol.for('id');\nconst sym2 = Symbol.for('id');\nconsole.log(sym1 === sym2);\nconst sym3 = Symbol('id');\nconsole.log(sym1 === sym3);",
opts: ["true, false", "true, true", "false, false", "false, true"],
ans: 0, exp: "Symbol.for usa registro global, Symbol siempre crea nuevo"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz 8", diff: "hard",
q: "Que imprime?\nconsole.log(NaN === NaN);\nconsole.log(Object.is(NaN, NaN));\nconsole.log(-0 === +0);\nconsole.log(Object.is(-0, +0));",
opts: ["false, true, true, false", "true, true, true, true", "false, false, false, false", "true, false, true, false"],
ans: 0, exp: "Object.is diferencia -0 y +0, trata NaN igual"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz 9", diff: "hard",
q: "Que imprime?\nfunction test(a, b, c = 3) {}\nfunction test2(a, b, ...rest) {}\nconsole.log(test.length);\nconsole.log(test2.length);",
opts: ["2, 2", "3, 3", "2, 3", "3, 2"],
ans: 0, exp: "length cuenta solo parametros antes del primero con default o rest"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz 10", diff: "hard",
q: "Que imprime?\nfunction test(a, b) {\n    arguments[0] = 99;\n    console.log(a);\n    a = 100;\n    console.log(arguments[0]);\n}\ntest(1, 2);",
opts: ["99, 100", "1, 2", "99, 99", "100, 100"],
ans: 0, exp: "arguments refleja cambios en parametros (en modo no estricto)"
},




// ==================== JS - VARIABLES ====================
    {
        unit: "JavaScript",
        diff: "easy",
        case: "Necesitas declarar una variable que NO va a cambiar su valor en todo el programa.",
        q: "¿Qué palabra clave se usa para declarar una constante en JavaScript?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Código</th><th>Significado</th><th>¿Qué falta?</th></tr></thead>
        <tbody>
        <tr><td><input type="text" size="6" placeholder="???"> PI = 3.1416;</td><td>No se puede reasignar</td><td>const</td></tr>
        </tbody>
        </table>
        `,
        opts: ["const", "let", "var", "final"],
        ans: 0,
        exp: "const declara constantes que no pueden reasignarse"
    },

    // ==================== JS - TIPOS DE DATOS ====================
    {
        unit: "JavaScript",
        diff: "easy",
        case: "Tienes una variable que no tiene valor asignado aun.",
        q: "¿Qué valor tiene una variable declarada con let sin inicializar?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Código</th><th>Valor</th><th>¿Qué falta?</th></tr></thead>
        <tbody>
        <tr><td>let x;<br>console.log(x);</td><td><input type="text" size="6" placeholder="???"></td><td>undefined</td></tr>
        </tbody>
        </table>
        `,
        opts: ["undefined", "null", "NaN", "0"],
        ans: 0,
        exp: "Las variables declaradas sin valor son undefined"
    },

    // ==================== JS - FUNCIONES ====================
    {
        unit: "JavaScript",
        diff: "medium",
        case: "Tienes una funcion simple que solo devuelve el doble de un numero.",
        q: "¿Qué sintaxis de funcion es mas concisa para funciones simples de una linea?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Código</th><th>Que es</th><th>¿Qué falta?</th></tr></thead>
        <tbody>
        <tr><td>const duplicar = (x) => x * 2;</td><td><input type="text" size="12" placeholder="???"></td><td>Arrow function</td></tr>
        </tbody>
        </table>
        `,
        opts: ["Arrow function", "Function expression", "Function declaration", "Anonymous function"],
        ans: 0,
        exp: "Arrow function (=>) es concisa para funciones simples"
    },

    // ==================== JS - ARRAYS ====================
    {
        unit: "JavaScript",
        diff: "medium",
        case: "Tienes un array de numeros y quieres crear un NUEVO array con el doble de cada numero.",
        q: "¿Qué metodo de array crea un nuevo array transformando cada elemento?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Código</th><th>Resultado</th><th>¿Qué falta?</th></tr></thead>
        <tbody>
        <tr><td>[1,2,3].<input type="text" size="8" placeholder="???">(x => x * 2)</td><td>[2,4,6]</td><td>map</td></tr>
        </tbody>
        </table>
        `,
        opts: ["map", "filter", "reduce", "forEach"],
        ans: 0,
        exp: "map() crea un nuevo array transformando cada elemento"
    },

    // ==================== JS - FILTER ====================
    {
        unit: "JavaScript",
        diff: "medium",
        case: "Tienes un array de numeros y quieres obtener SOLO los numeros pares.",
        q: "¿Qué metodo de array filtra elementos segun una condicion?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Código</th><th>Resultado</th><th>¿Qué falta?</th></tr></thead>
        <tbody>
        <tr><td>[1,2,3,4].<input type="text" size="8" placeholder="???">(x => x % 2 === 0)</td><td>[2,4]</td><td>filter</td></tr>
        </tbody>
        </table>
        `,
        opts: ["filter", "map", "reduce", "find"],
        ans: 0,
        exp: "filter() devuelve un array con los elementos que cumplen la condicion"
    },

    // ==================== JS - TEMPLATE STRINGS ====================
    // {
    //     unit: "JavaScript",
    //     diff: "medium",
    //     case: "Tienes variables nombre y edad. Quieres crear un string 'Hola me llamo Juan y tengo 25 años'.",
    //     q: "¿Qué caracter se usa para template strings que permite interpolar variables?",
    //     extra: `
    //     <table class="subnet-table">
    //     <thead><tr><th>Código</th><th>Que hace</th><th>¿Qué falta?</th></tr></thead>
    //     <tbody>
    //     <tr><td>`Hola me llamo ${nombre} y tengo ${edad} años`</td><td>Las comillas son <input type="text" size="4" placeholder="???"></td><td>``</td></tr>
    //     </tbody>
    //     </table>
    //     `,
    //     opts: ["`", "'", '"', "´"],
    //     ans: 0,
    //     exp: "Template strings usan backticks (`) y ${} para variables"
    // },

    // ==================== JS - DESESTRUCTURACION ====================
    {
        unit: "JavaScript",
        diff: "hard",
        case: "Tienes un objeto persona = { nombre: 'Ana', edad: 25, ciudad: 'Madrid' }. Quieres extraer nombre y edad en variables separadas.",
        q: "¿Qué sintaxis de JavaScript extrae propiedades de un objeto en variables?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Código</th><th>Que es</th><th>¿Qué falta?</th></tr></thead>
        <tbody>
        <tr><td>const { nombre, edad } = persona;</td><td><input type="text" size="14" placeholder="???"></td><td>Destructuring</td></tr>
        </tbody>
        </table>
        `,
        opts: ["Destructuring", "Spread", "Rest", "Assignment"],
        ans: 0,
        exp: "Destructuring extrae propiedades de objetos o arrays"
    },

    // ==================== JS - SPREAD OPERATOR ====================
    {
        unit: "JavaScript",
        diff: "hard",
        case: "Tienes un array original [1,2,3] y quieres crear una copia para no modificar el original.",
        q: "¿Qué operador copia un array o objeto correctamente?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Código</th><th>Resultado</th><th>¿Qué falta?</th></tr></thead>
        <tbody>
        <tr><td>const copia = [<input type="text" size="4" placeholder="???">original];</td><td>Copia independiente</td><td>...</td></tr>
        </tbody>
        </table>
        `,
        opts: ["...", "..", "***", "&&&"],
        ans: 0,
        exp: "Spread operator (...) copia arrays y objetos"
    },
    {
        unit: "JavaScript",
        diff: "hard",
        case: "Tienes un array de objetos 'productos' con precio y stock. Necesitas obtener un nuevo array que SOLO contenga los nombres de los productos que cuestan más de $500.",
        q: "¿Qué combinación de métodos de orden superior (Higher-Order Functions) es la más eficiente?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Paso</th><th>Método a usar</th><th>Propósito</th></tr>
        </thead>
        <tbody>
        <tr><td>1. Filtrar precio</td><td>.<input type="text" size="10" placeholder="???">(p => p.precio > 500)</td><td>Descarta productos baratos</td></tr>
        <tr><td>2. Extraer nombre</td><td>.<input type="text" size="10" placeholder="???">(p => p.nombre)</td><td>Crea array de strings</td></tr>
        </tbody>
        </table>
        `,
        opts: ["filter() y luego map()", "map() y luego filter()", "forEach() y push()", "find() y map()"],
        ans: 0,
        exp: "El orden importa: .filter() reduce el tamaño del array original y .map() transforma los elementos restantes. Hacerlo al revés procesaría datos que luego vas a descartar."
    },

    // ==================== JAVASCRIPT - ASINCRONÍA (PROMISES) ====================
    {
        unit: "JavaScript",
        diff: "hard",
        case: "Estás consumiendo una API de clima. Quieres pausar la ejecución del código hasta que los datos lleguen para evitar que la variable sea 'undefined'.",
        q: "¿Qué palabras clave se utilizan para manejar promesas de forma síncrona visualmente?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Ubicación</th><th>Palabra Clave</th></tr>
        </thead>
        <tbody>
        <tr><td>Prefijo de la función</td><td><input type="text" size="8" placeholder="???"> function getData()</td></tr>
        <tr><td>Antes de la llamada fetch</td><td>const res = <input type="text" size="8" placeholder="???"> fetch(url)</td></tr>
        </tbody>
        </table>
        `,
        opts: ["async / await", "try / catch", "then / catch", "promise / resolve"],
        ans: 0,
        exp: "Async/Await es 'azúcar sintáctica' sobre las Promesas. Permite leer código asíncrono como si fuera secuencial, facilitando el mantenimiento."
    },
    // ==================== JAVASCRIPT - DESESTRUCTURACIÓN ====================
    {
        unit: "JavaScript",
        diff: "medium",
        case: "Recibes un objeto 'config' con 20 propiedades. Solo necesitas usar 'apiKey' y 'endpoint' dentro de tu función.",
        q: "¿Cuál es la forma más limpia de extraer estas variables en ES6?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Técnica</th><th>Sintaxis</th></tr>
        </thead>
        <tbody>
        <tr><td>Destructuring</td><td>const { <input type="text" size="15" placeholder="???"> } = config;</td></tr>
        </tbody>
        </table>
        `,
        opts: ["{ apiKey, endpoint }", "[ apiKey, endpoint ]", "( apiKey, endpoint )", "extract(apiKey, endpoint)"],
        ans: 0,
        exp: "La desestructuración de objetos permite crear variables locales con el mismo nombre que las propiedades del objeto, evitando escribir 'config.propiedad' repetidamente."
    },
    {
        unit: "JavaScript",
        diff: "hard",
        case: "Tienes un bucle que debe realizar 5 llamadas a una base de datos. Si usas 'forEach', las llamadas se disparan en paralelo y no esperas a que terminen. Necesitas que se ejecuten una tras otra (secuencial).",
        q: "¿Qué estructura de control permite usar 'await' correctamente para pausar cada iteración?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Estructura</th><th>¿Permite await secuencial?</th></tr></thead>
        <tbody>
        <tr><td>array.forEach(async () => ...)</td><td>No (dispara y olvida)</td></tr>
        <tr><td>for (<input type="text" size="10" placeholder="???"> item of array)</td><td>Sí (pausa el bucle)</td></tr>
        </tbody>
        </table>
        `,
        opts: ["for...of", "forEach", "map", "while(true)"],
        ans: 0,
        exp: "El bucle 'for...of' respeta el contexto asíncrono, permitiendo que cada iteración espere a que la promesa se resuelva antes de pasar a la siguiente."
    },

    // ==================== JS - DESTRUCTURING Y SPREAD ====================
    {
        unit: "JavaScript",
        diff: "medium",
        case: "Quieres clonar un objeto 'usuario' y cambiarle solo la propiedad 'edad', sin modificar el objeto original (inmutabilidad).",
        q: "¿Cuál es la sintaxis más eficiente usando el operador Spread (...) ?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Acción</th><th>Código</th></tr></thead>
        <tbody>
        <tr><td>Clonar y actualizar</td><td>const nuevo = { <input type="text" size="12" placeholder="???">, edad: 30 };</td></tr>
        </tbody>
        </table>
        `,
        opts: ["...usuario", "usuario", "Object.assign(usuario)", "copy(usuario)"],
        ans: 0,
        exp: "El operador Spread '...' expande las propiedades del objeto original en uno nuevo. Al poner 'edad: 30' después, sobrescribimos solo esa propiedad."
    }
    





];

export default preguntas_lenguaje_javascript;