import { P, TABLA } from '../preguntas_helpers.js';
const preguntas_bd_estructurados = [

    // ==================== SQL - PREGUNTAS CAPCIOSAS Y CÓDIGO (87-115) ====================
    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿NULL es igual a cero?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. NULL representa ausencia de valor y cero es un valor numérico."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿NULL es igual a una cadena vacía?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Una cadena vacía es un texto sin caracteres y NULL representa ausencia de valor."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿Una clave primaria puede repetirse?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Sus valores deben ser únicos."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿Una tabla puede tener varias claves foráneas?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 0,
        "exp": "Sí. Puede relacionarse con diferentes tablas."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿Una tabla puede tener más de una clave primaria?",
        "opts": [
            "Sí, puede tener varias claves primarias",
            "No. Tiene una sola restricción PRIMARY KEY, aunque puede estar formada por varias columnas"
        ],
        "ans": 1,
        "exp": "Tiene una sola restricción PRIMARY KEY, aunque puede estar formada por varias columnas."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿DELETE elimina la estructura de una tabla?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Elimina registros, no la estructura."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿TRUNCATE elimina la tabla?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Elimina sus registros, pero conserva su estructura."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿DROP elimina solamente los registros?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Elimina el objeto completo."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿INNER JOIN conserva los registros sin coincidencia?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Solamente devuelve las coincidencias."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿LEFT JOIN devuelve todos los registros de ambas tablas?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Conserva todos los registros de la tabla izquierda y las coincidencias de la derecha."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿Una clave foránea siempre debe ser única?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Puede repetirse para representar relaciones uno a muchos."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿Un índice siempre mejora el rendimiento?",
        "opts": [
            "Sí, siempre mejora el rendimiento",
            "No. Puede mejorar las consultas, pero agrega costos de almacenamiento y mantenimiento"
        ],
        "ans": 1,
        "exp": "No. Puede mejorar las consultas, pero agrega costos de almacenamiento y mantenimiento."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿Normalizar significa crear la mayor cantidad posible de tablas?",
        "opts": [
            "Sí, significa crear la mayor cantidad posible de tablas",
            "No. Significa organizar correctamente los datos según las reglas de normalización"
        ],
        "ans": 1,
        "exp": "No. Significa organizar correctamente los datos según las reglas de normalización."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿GROUP BY ordena los resultados?",
        "opts": [
            "Sí, GROUP BY ordena los resultados",
            "No necesariamente. Agrupa registros; para ordenar se utiliza ORDER BY"
        ],
        "ans": 1,
        "exp": "No necesariamente. Agrupa registros; para ordenar se utiliza ORDER BY."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿WHERE puede utilizarse para filtrar directamente resultados de COUNT(*)?",
        "opts": [
            "Sí, WHERE puede filtrar directamente el resultado de COUNT(*)",
            "No directamente sobre el resultado agregado; para filtrar grupos se utiliza HAVING"
        ],
        "ans": 1,
        "exp": "No directamente sobre el resultado agregado; para filtrar grupos se utiliza HAVING."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿Una clave primaria puede contener NULL?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿UNIQUE y PRIMARY KEY son lo mismo?",
        "opts": [
            "Sí, son exactamente lo mismo",
            "No. Ambas garantizan unicidad, pero PRIMARY KEY identifica los registros y no admite NULL"
        ],
        "ans": 1,
        "exp": "No. Ambas permiten garantizar unicidad, pero PRIMARY KEY identifica los registros y no admite NULL."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿Una vista siempre almacena físicamente los datos?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Una vista normal almacena la definición de la consulta, no una copia independiente de los resultados."
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas Capciosas",
        "diff": "medium",
        "q": "¿Una transacción puede contener varias instrucciones SQL?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 0,
        "exp": "Sí."
    },

    {
        "profe": false,
        "unit": "SQL - Identificación de Código",
        "diff": "easy",
        "q": "¿Qué hace esta consulta?",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">SELECT nombre, edad\nFROM estudiantes;</div></div>",
        "opts": [
            "Inserta un nuevo estudiante con los campos nombre y edad.",
            "Elimina las columnas nombre y edad de la tabla estudiantes.",
            "Selecciona las columnas nombre y edad de la tabla estudiantes.",
            "Cuenta los estudiantes agrupados por edad."
        ],
        "ans": 2,
        "exp": "Selecciona las columnas nombre y edad de la tabla estudiantes."
    },

    {
        "profe": false,
        "unit": "SQL - Identificación de Código",
        "diff": "easy",
        "q": "¿Qué hace esta consulta?",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">SELECT *\nFROM estudiantes\nWHERE edad &gt;= 18;</div></div>",
        "opts": [
            "Muestra solo los estudiantes menores de 18 años.",
            "Elimina los estudiantes cuya edad sea menor a 18.",
            "Muestra únicamente los estudiantes cuya edad sea exactamente 18.",
            "Muestra todos los estudiantes cuya edad sea igual o superior a 18 años."
        ],
        "ans": 3,
        "exp": "Muestra todos los estudiantes cuya edad sea igual o superior a 18 años."
    },

    {
        "profe": false,
        "unit": "SQL - Identificación de Código",
        "diff": "easy",
        "q": "¿Qué hace esta consulta?",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">SELECT COUNT(*)\nFROM estudiantes;</div></div>",
        "opts": [
            "Suma los valores de todas las columnas de estudiantes.",
            "Cuenta la cantidad de registros de la tabla estudiantes.",
            "Muestra únicamente la primera fila de la tabla estudiantes.",
            "Elimina todos los registros de la tabla estudiantes."
        ],
        "ans": 1,
        "exp": "Cuenta la cantidad de registros de la tabla estudiantes."
    },

    {
        "profe": false,
        "unit": "SQL - Identificación de Código",
        "diff": "medium",
        "q": "¿Qué hace esta consulta?",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">SELECT curso_id, COUNT(*)\nFROM estudiantes\nGROUP BY curso_id;</div></div>",
        "opts": [
            "Agrupa los estudiantes por curso y cuenta cuántos hay en cada grupo.",
            "Ordena los estudiantes alfabéticamente según curso_id.",
            "Elimina los estudiantes repetidos en cada curso.",
            "Muestra solo los estudiantes que no tienen curso asignado."
        ],
        "ans": 0,
        "exp": "Agrupa los estudiantes por curso y cuenta cuántos estudiantes hay en cada grupo."
    },

    {
        "profe": false,
        "unit": "SQL - Identificación de Código",
        "diff": "medium",
        "q": "¿Qué hace esta consulta?",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">SELECT *\nFROM productos\nWHERE precio BETWEEN 1000 AND 5000;</div></div>",
        "opts": [
            "Muestra los productos cuyo precio es menor a 1000 o mayor a 5000.",
            "Muestra solo los productos cuyo precio es exactamente 1000 o 5000.",
            "Muestra los productos cuyo precio se encuentra entre 1000 y 5000, incluyendo los extremos.",
            "Actualiza el precio de los productos entre 1000 y 5000."
        ],
        "ans": 2,
        "exp": "Muestra los productos cuyo precio se encuentra entre 1000 y 5000, incluyendo los extremos."
    },

    {
        "profe": false,
        "unit": "SQL - Identificación de Código",
        "diff": "medium",
        "q": "¿Qué hace esta consulta?",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">SELECT *\nFROM usuarios\nWHERE correo IS NULL;</div></div>",
        "opts": [
            "Busca los usuarios cuyo correo es una cadena vacía.",
            "Busca los usuarios cuyo correo es igual a cero.",
            "Elimina los usuarios que no tienen correo.",
            "Busca los usuarios cuyo correo tiene un valor NULL."
        ],
        "ans": 3,
        "exp": "Busca los usuarios cuyo correo tiene un valor NULL."
    },

    {
        "profe": false,
        "unit": "SQL - Identificación de Código",
        "diff": "medium",
        "q": "¿Qué hace esta consulta?",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">SELECT *\nFROM clientes\nLEFT JOIN pedidos\nON clientes.id = pedidos.cliente_id;</div></div>",
        "opts": [
            "Muestra todos los clientes y los pedidos coincidentes. Si un cliente no tiene pedidos, las columnas de pedidos aparecen con NULL.",
            "Muestra solo los clientes que tienen pedidos.",
            "Muestra solo los pedidos que no tienen un cliente asociado.",
            "Elimina de la consulta los clientes que no tienen pedidos."
        ],
        "ans": 0,
        "exp": "Muestra todos los clientes y los pedidos coincidentes. Si un cliente no tiene pedidos, las columnas correspondientes a pedidos aparecen con NULL."
    },

    {
        "profe": false,
        "unit": "SQL - Identificación de Código",
        "diff": "easy",
        "q": "¿Qué hace esta consulta?",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">UPDATE productos\nSET precio = 15000\nWHERE id = 3;</div></div>",
        "opts": [
            "Inserta un nuevo producto con id 3 y precio 15000.",
            "Modifica el precio del producto cuyo identificador es 3.",
            "Elimina el producto cuyo identificador es 3.",
            "Modifica el precio de todos los productos a 15000."
        ],
        "ans": 1,
        "exp": "Modifica el precio del producto cuyo identificador es 3."
    },

    {
        "profe": false,
        "unit": "SQL - Identificación de Código",
        "diff": "medium",
        "q": "¿Qué hace esta consulta?",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">DELETE FROM estudiantes;</div></div>",
        "opts": [
            "Elimina la tabla estudiantes completa, incluyendo su estructura.",
            "Elimina solamente el primer estudiante registrado.",
            "Elimina todos los registros de estudiantes, pero conserva la estructura de la tabla.",
            "Muestra todos los estudiantes sin modificar la tabla."
        ],
        "ans": 2,
        "exp": "Elimina todos los registros de estudiantes, pero conserva la estructura de la tabla."
    },

    {
        "profe": false,
        "unit": "SQL - Identificación de Código",
        "diff": "easy",
        "q": "¿Qué hace esta consulta?",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">SELECT nombre\nFROM estudiantes\nORDER BY nombre ASC;</div></div>",
        "opts": [
            "Muestra los nombres de los estudiantes en orden descendente.",
            "Muestra los nombres de los estudiantes ordenados alfabéticamente de forma ascendente.",
            "Agrupa los nombres repetidos en un solo registro.",
            "Filtra los estudiantes cuyo nombre sea ASC."
        ],
        "ans": 1,
        "exp": "Muestra los nombres de los estudiantes ordenados alfabéticamente de forma ascendente."
    },

    // ==================== AGREGADAS DESDE DOCUMENTO DE ESTUDIO (86 preguntas) ====================
    {
        "profe": false,
        "unit": "SQL - Preguntas confirmadas",
        "diff": "easy",
        "q": "¿Cuál es la diferencia entre NULL, cero y un String vacío?",
        "opts": [
            "NULL representa la ausencia de un valor o un dato desconocido. 0 es un valor numérico que representa cero. '' es una cadena de texto que no contiene caracteres. Importante: no conviene afirmar que NULL no ocupa memoria; su almacenamiento depende del motor y del tipo de columna.",
            "Son lo mismo: ambos representan una cadena de texto vacía y se almacenan igual.",
            "Un valor de cero que se guarda en la columna cuando la información no existe.",
            "NULL es un texto especial que el motor sustituye por cero al insertarlo."
        ],
        "ans": 0,
        "exp": "NULL representa la ausencia de un valor o un dato desconocido. 0 es un valor numérico que representa cero. '' es una cadena de texto que no contiene caracteres. Importante: no conviene afirmar que NULL no ocupa memoria; su almacenamiento depende del motor y del tipo de columna.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">INSERT INTO personas (nombre, edad, telefono) VALUES ('Ana', 0, NULL);\nINSERT INTO personas (nombre, edad, telefono) VALUES ('Pedro', 25, '');</div></div>"
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas confirmadas",
        "diff": "easy",
        "q": "¿Qué diferencia existe entre DELETE, TRUNCATE y DROP?",
        "opts": [
            "DROP solamente borra los registros; DELETE elimina la tabla completa.",
            "DELETE elimina registros de una tabla y permite utilizar condiciones mediante WHERE. TRUNCATE elimina todos los registros de una tabla de forma masiva. DROP elimina la tabla completa, incluyendo su estructura y sus datos.",
            "TRUNCATE elimina una fila específica; DELETE elimina todas las tablas.",
            "DELETE elimina la estructura de la tabla; TRUNCATE borra solamente los registros con condición."
        ],
        "ans": 1,
        "exp": "DELETE elimina registros de una tabla y permite utilizar condiciones mediante WHERE. TRUNCATE elimina todos los registros de una tabla de forma masiva. DROP elimina la tabla completa, incluyendo su estructura y sus datos.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">DELETE FROM usuarios WHERE id = 5;\nTRUNCATE TABLE usuarios;\nDROP TABLE usuarios;</div></div>"
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas confirmadas",
        "diff": "easy",
        "q": "¿Qué diferencia existe entre una tabla, un registro y un campo?",
        "opts": [
            "Una tabla organiza los datos de una entidad, un registro corresponde a una fila que representa un elemento y un campo corresponde a una columna que almacena una característica de ese elemento.",
            "Son sinónimos: los tres términos se refieren al mismo elemento de la tabla.",
            "Una tabla es una fila que representa un elemento; un registro es una columna con sus valores.",
            "Un campo es una tabla completa; un registro es una base de datos."
        ],
        "ans": 0,
        "exp": "Una tabla organiza los datos de una entidad, un registro corresponde a una fila que representa un elemento y un campo corresponde a una columna que almacena una característica de ese elemento.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas confirmadas",
        "diff": "easy",
        "q": "¿Qué cardinalidades existen entre tablas?",
        "opts": [
            "Las relaciones son únicamente de tipo 1:1, porque cada tabla tiene una sola clave.",
            "Las relaciones más comunes son uno a uno, uno a muchos y muchos a muchos. También existen relaciones opcionales como cero a uno o cero a muchos. Ejemplos: 1:1 persona y pasaporte; 1:N cliente y pedidos; N:M estudiantes y asignaturas.",
            "No existen cardinalidades; las tablas se relacionan automáticamente por su nombre.",
            "Solo existe una cardinalidad posible: uno a muchos, porque es la única forma de relacionar tablas."
        ],
        "ans": 1,
        "exp": "Las relaciones más comunes son uno a uno, uno a muchos y muchos a muchos. También existen relaciones opcionales como cero a uno o cero a muchos. Ejemplos: 1:1 persona y pasaporte; 1:N cliente y pedidos; N:M estudiantes y asignaturas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas confirmadas",
        "diff": "easy",
        "q": "¿Qué es la normalización?",
        "opts": [
            "Es un método para cifrar los datos antes de guardarlos en el servidor.",
            "Es la acción de copiar la misma información en varias tablas para acelerar consultas.",
            "Es un proceso que elimina todas las tablas de la base para empezar de cero.",
            "Es un proceso de organización de las tablas de una base de datos que busca reducir la redundancia, evitar inconsistencias y mejorar la integridad de los datos. Ejemplo: en vez de repetir los datos de un cliente en cada pedido, se crea una tabla Clientes y otra Pedidos, relacionadas mediante una clave."
        ],
        "ans": 3,
        "exp": "Es un proceso de organización de las tablas de una base de datos que busca reducir la redundancia, evitar inconsistencias y mejorar la integridad de los datos. Ejemplo: en vez de repetir los datos de un cliente en cada pedido, se crea una tabla Clientes y otra Pedidos, relacionadas mediante una clave.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Preguntas confirmadas",
        "diff": "easy",
        "q": "¿Qué diferencia existe entre INNER JOIN y LEFT JOIN?",
        "opts": [
            "LEFT JOIN devuelve solo los registros que no tienen coincidencia en la tabla derecha.",
            "INNER JOIN devuelve solamente los registros que tienen coincidencias entre ambas tablas. LEFT JOIN devuelve todos los registros de la tabla izquierda y los coincidentes de la derecha; cuando no existe coincidencia, devuelve NULL en las columnas de la derecha.",
            "INNER JOIN devuelve todos los registros de ambas tablas, con o sin coincidencias.",
            "Ambos devuelven exactamente los mismos registros, solo cambia el orden de las columnas."
        ],
        "ans": 1,
        "exp": "INNER JOIN devuelve solamente los registros que tienen coincidencias entre ambas tablas. LEFT JOIN devuelve todos los registros de la tabla izquierda y los coincidentes de la derecha; cuando no existe coincidencia, devuelve NULL en las columnas de la derecha.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">SELECT * FROM clientes INNER JOIN pedidos ON clientes.id = pedidos.cliente_id;\nSELECT * FROM clientes LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id;</div></div>"
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una base de datos?",
        "opts": [
            "Es un conjunto organizado de información que permite almacenar, consultar, modificar y administrar datos de manera estructurada.",
            "Un conjunto de servidores que ejecutan la lógica de un sitio web.",
            "Un lenguaje para escribir consultas en tiempo real sobre la red.",
            "Un programa que sirve únicamente para diseñar las pantallas e interfaces de usuario."
        ],
        "ans": 0,
        "exp": "Es un conjunto organizado de información que permite almacenar, consultar, modificar y administrar datos de manera estructurada.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un sistema gestor de bases de datos (SGBD)?",
        "opts": [
            "Un conjunto de datos organizados que se guarda en un único archivo de texto.",
            "Un servidor web que recibe solicitudes HTTP de los navegadores.",
            "Es un software que permite crear, administrar, consultar y modificar bases de datos. Ejemplos: MySQL, PostgreSQL, SQLite y SQL Server.",
            "Un lenguaje de programación utilizado para diseñar tablas y consultas."
        ],
        "ans": 2,
        "exp": "Es un software que permite crear, administrar, consultar y modificar bases de datos. Ejemplos: MySQL, PostgreSQL, SQLite y SQL Server.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es SQL?",
        "opts": [
            "Un sistema gestor de bases de datos desarrollado por Oracle.",
            "Un tipo de índice que acelera la búsqueda de textos largos.",
            "Un formato de texto para intercambiar datos entre aplicaciones.",
            "Es un lenguaje utilizado para administrar y consultar bases de datos relacionales. Permite crear estructuras, insertar, modificar, eliminar y consultar información."
        ],
        "ans": 3,
        "exp": "Es un lenguaje utilizado para administrar y consultar bases de datos relacionales. Permite crear estructuras, insertar, modificar, eliminar y consultar información.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una base de datos relacional?",
        "opts": [
            "Una base de datos que almacena únicamente documentos en formato JSON.",
            "Es una base de datos que organiza la información en tablas relacionadas entre sí mediante claves.",
            "Una base de datos que solo puede consultarse desde un servidor remoto.",
            "Una base de datos que guarda cada registro en un archivo independiente, sin relaciones."
        ],
        "ans": 1,
        "exp": "Es una base de datos que organiza la información en tablas relacionadas entre sí mediante claves.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una clave primaria (PRIMARY KEY)?",
        "opts": [
            "Una restricción que solo permite valores nulos en la columna.",
            "Es un campo o conjunto de campos que identifica de manera única cada registro de una tabla. No admite valores duplicados ni NULL.",
            "Un campo que puede repetirse siempre que los demás valores de la fila sean distintos.",
            "Un campo que relaciona la tabla con otra tabla mediante una referencia externa."
        ],
        "ans": 1,
        "exp": "Es un campo o conjunto de campos que identifica de manera única cada registro de una tabla. No admite valores duplicados ni NULL.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una clave foránea (FOREIGN KEY)?",
        "opts": [
            "Una restricción que impide que la columna tenga valores repetidos.",
            "Es un campo que establece una relación con la clave primaria o una clave candidata única de otra tabla, permitiendo mantener la integridad referencial.",
            "Un campo que identifica de manera única cada registro de la tabla actual.",
            "Un índice que acelera las búsquedas en la tabla de otra base de datos."
        ],
        "ans": 1,
        "exp": "Es un campo que establece una relación con la clave primaria o una clave candidata única de otra tabla, permitiendo mantener la integridad referencial.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un índice?",
        "opts": [
            "Es una estructura que permite acelerar las búsquedas y consultas de información en una tabla.",
            "Una copia completa de la tabla guardada en otra base de datos.",
            "Una regla que obliga a que todas las columnas tengan un valor.",
            "Una instrucción que elimina los registros duplicados de una tabla."
        ],
        "ans": 0,
        "exp": "Es una estructura que permite acelerar las búsquedas y consultas de información en una tabla.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una restricción (CONSTRAINT)?",
        "opts": [
            "Un tipo de dato que solo guarda números enteros.",
            "Es una regla que se aplica a una tabla o columna para controlar qué datos pueden almacenarse.",
            "Una consulta almacenada que se presenta como una tabla virtual.",
            "Un procedimiento que se ejecuta cada vez que se borra un registro."
        ],
        "ans": 1,
        "exp": "Es una regla que se aplica a una tabla o columna para controlar qué datos pueden almacenarse.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es NOT NULL?",
        "opts": [
            "Una regla que valida que el dato cumpla una condición lógica.",
            "Una restricción que asigna un valor predeterminado a la columna.",
            "Una restricción que impide que los valores de la columna se repitan.",
            "Es una restricción que impide almacenar valores NULL en una columna."
        ],
        "ans": 3,
        "exp": "Es una restricción que impide almacenar valores NULL en una columna.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es UNIQUE?",
        "opts": [
            "Una restricción que impide que la columna tenga valores vacíos.",
            "Una restricción que asigna automáticamente un valor cuando no se envía uno.",
            "Es una restricción que impide que se repitan los valores de una columna o combinación de columnas, según la definición de la restricción.",
            "Una regla que impide eliminar el registro si tiene relaciones."
        ],
        "ans": 2,
        "exp": "Es una restricción que impide que se repitan los valores de una columna o combinación de columnas, según la definición de la restricción.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es DEFAULT?",
        "opts": [
            "Una restricción que impide almacenar valores NULL en la columna.",
            "Una restricción que impide que los valores de la columna se repitan.",
            "Una consulta que devuelve el valor más frecuente de una tabla.",
            "Es una restricción que establece un valor predeterminado cuando no se proporciona uno al insertar un registro."
        ],
        "ans": 3,
        "exp": "Es una restricción que establece un valor predeterminado cuando no se proporciona uno al insertar un registro.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una vista (VIEW)?",
        "opts": [
            "Una tabla física que guarda una copia independiente de los datos.",
            "Un índice que acelera la búsqueda por texto dentro de una tabla.",
            "Es una consulta almacenada que se presenta como una tabla virtual. Permite consultar información sin tener que escribir nuevamente la consulta completa.",
            "Un procedimiento que se ejecuta automáticamente al insertar un registro."
        ],
        "ans": 2,
        "exp": "Es una consulta almacenada que se presenta como una tabla virtual. Permite consultar información sin tener que escribir nuevamente la consulta completa.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una transacción?",
        "opts": [
            "Es un conjunto de operaciones que se ejecutan como una unidad lógica de trabajo, buscando mantener la integridad de la base de datos.",
            "Un registro que se almacena en la tabla de auditoría de la base de datos.",
            "Una sola consulta SELECT que devuelve varias tablas al mismo tiempo.",
            "Una instrucción que crea una nueva tabla en la base de datos."
        ],
        "ans": 0,
        "exp": "Es un conjunto de operaciones que se ejecutan como una unidad lógica de trabajo, buscando mantener la integridad de la base de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un procedimiento almacenado?",
        "opts": [
            "Un índice que se guarda en un archivo separado del motor.",
            "Una clave foránea que se define en una tabla de referencia.",
            "Una vista que se actualiza cada vez que se consulta la tabla.",
            "Es un conjunto de instrucciones SQL guardadas en la base de datos que pueden ejecutarse cuando se necesitan."
        ],
        "ans": 3,
        "exp": "Es un conjunto de instrucciones SQL guardadas en la base de datos que pueden ejecutarse cuando se necesitan.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un trigger o disparador?",
        "opts": [
            "Una consulta que se ejecuta manualmente con el comando SELECT.",
            "Una tabla temporal que se elimina al cerrar la conexión.",
            "Es un mecanismo que ejecuta automáticamente instrucciones cuando ocurre un evento determinado en una tabla, como INSERT, UPDATE o DELETE.",
            "Una restricción que valida el tipo de dato de una columna."
        ],
        "ans": 2,
        "exp": "Es un mecanismo que ejecuta automáticamente instrucciones cuando ocurre un evento determinado en una tabla, como INSERT, UPDATE o DELETE.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es la integridad referencial?",
        "opts": [
            "Un método que copia la base de datos completa en otro servidor.",
            "Una regla que impide que un usuario se conecte a la base de datos.",
            "Es una regla que garantiza que las relaciones entre tablas sean válidas, evitando referencias a registros inexistentes.",
            "Una técnica para cifrar las contraseñas almacenadas en las tablas."
        ],
        "ans": 2,
        "exp": "Es una regla que garantiza que las relaciones entre tablas sean válidas, evitando referencias a registros inexistentes.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una consulta SQL?",
        "opts": [
            "Es una instrucción que permite solicitar, insertar, modificar o eliminar información de una base de datos, dependiendo del comando utilizado.",
            "Un registro que guarda el historial de conexiones al servidor.",
            "Un archivo que contiene el diseño de una tabla antes de crearla.",
            "Una vista que se genera automáticamente con cada nueva tabla."
        ],
        "ans": 0,
        "exp": "Es una instrucción que permite solicitar, insertar, modificar o eliminar información de una base de datos, dependiendo del comando utilizado.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un esquema de base de datos?",
        "opts": [
            "Un conjunto de registros guardados en una tabla específica.",
            "Un programa que ejecuta consultas SQL de forma automática.",
            "Es la definición de la estructura de una base de datos, incluyendo tablas, columnas, relaciones, restricciones y otros objetos.",
            "Un índice que organiza las columnas por orden alfabético."
        ],
        "ans": 2,
        "exp": "Es la definición de la estructura de una base de datos, incluyendo tablas, columnas, relaciones, restricciones y otros objetos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es la redundancia de datos?",
        "opts": [
            "La capacidad de consultar la misma tabla desde varios servidores.",
            "La organización de los datos en tablas relacionadas para evitar duplicados.",
            "Es la repetición innecesaria de información dentro de una base de datos.",
            "La eliminación de todas las claves foráneas de la base de datos."
        ],
        "ans": 2,
        "exp": "Es la repetición innecesaria de información dentro de una base de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una entidad?",
        "opts": [
            "Una consulta que combina dos tablas mediante un JOIN.",
            "Una restricción que impide la repetición de valores en una columna.",
            "Es un elemento del mundo real que se desea representar y almacenar en una base de datos, como un estudiante, producto o cliente.",
            "Una columna que almacena el identificador de otra tabla."
        ],
        "ans": 2,
        "exp": "Es un elemento del mundo real que se desea representar y almacenar en una base de datos, como un estudiante, producto o cliente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un modelo entidad-relación?",
        "opts": [
            "Un lenguaje que describe las consultas que se ejecutan en el servidor.",
            "Es una representación gráfica o conceptual de las entidades, sus atributos y las relaciones entre ellas.",
            "Un tipo de índice que se usa solamente en bases no relacionales.",
            "Un script que crea automáticamente las tablas de la base de datos."
        ],
        "ans": 1,
        "exp": "Es una representación gráfica o conceptual de las entidades, sus atributos y las relaciones entre ellas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre una clave primaria y una clave foránea?",
        "opts": [
            "La clave primaria identifica de manera única los registros de una tabla. La clave foránea permite relacionar una tabla con otra mediante una referencia.",
            "Son lo mismo; solo cambia la forma en que se escribe en SQL.",
            "La clave primaria solo puede existir en tablas que tienen una clave foránea.",
            "La clave foránea identifica de manera única cada registro, y la clave primaria relaciona tablas."
        ],
        "ans": 0,
        "exp": "La clave primaria identifica de manera única los registros de una tabla. La clave foránea permite relacionar una tabla con otra mediante una referencia.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre SQL y MySQL?",
        "opts": [
            "MySQL solo funciona con bases de datos no relacionales.",
            "Son sinónimos que se refieren al mismo software de bases de datos.",
            "SQL es un lenguaje para trabajar con bases de datos relacionales. MySQL es un sistema gestor de bases de datos que utiliza SQL.",
            "MySQL es un lenguaje de consulta, y SQL es un sistema gestor de bases de datos."
        ],
        "ans": 2,
        "exp": "SQL es un lenguaje para trabajar con bases de datos relacionales. MySQL es un sistema gestor de bases de datos que utiliza SQL.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre VARCHAR y CHAR?",
        "opts": [
            "CHAR utiliza una longitud fija para almacenar cadenas de texto. VARCHAR utiliza una longitud variable, según el contenido almacenado, dentro del límite definido.",
            "CHAR utiliza una longitud variable, y VARCHAR utiliza una longitud fija.",
            "Ambos ocupan siempre el mismo espacio, sin importar el contenido.",
            "VARCHAR solo puede almacenar números, y CHAR solo texto."
        ],
        "ans": 0,
        "exp": "CHAR utiliza una longitud fija para almacenar cadenas de texto. VARCHAR utiliza una longitud variable, según el contenido almacenado, dentro del límite definido.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre INT y DECIMAL?",
        "opts": [
            "INT permite definir precisión y escala, y DECIMAL no.",
            "DECIMAL almacena solo números enteros, e INT almacena valores con decimales.",
            "Ambos almacenan únicamente fechas con precisión de segundos.",
            "INT almacena números enteros. DECIMAL almacena números con decimales y permite definir precisión y escala."
        ],
        "ans": 3,
        "exp": "INT almacena números enteros. DECIMAL almacena números con decimales y permite definir precisión y escala.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre WHERE y HAVING?",
        "opts": [
            "Ambos filtran grupos después de aplicar GROUP BY.",
            "HAVING filtra registros antes de agrupar, y WHERE filtra los grupos después.",
            "WHERE solo puede usarse con funciones de agregación como SUM.",
            "WHERE filtra registros antes de agrupar los resultados. HAVING filtra los grupos después de aplicar GROUP BY."
        ],
        "ans": 3,
        "exp": "WHERE filtra registros antes de agrupar los resultados. HAVING filtra los grupos después de aplicar GROUP BY.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre ORDER BY y GROUP BY?",
        "opts": [
            "ORDER BY ordena los resultados de una consulta. GROUP BY agrupa registros que comparten determinados valores.",
            "Ambas cláusulas hacen exactamente lo mismo con distinto nombre.",
            "GROUP BY ordena los resultados, y ORDER BY agrupa registros similares.",
            "ORDER BY solo puede usarse en consultas que tienen JOIN."
        ],
        "ans": 0,
        "exp": "ORDER BY ordena los resultados de una consulta. GROUP BY agrupa registros que comparten determinados valores.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre INNER JOIN y RIGHT JOIN?",
        "opts": [
            "RIGHT JOIN devuelve solo las coincidencias, e INNER JOIN conserva la tabla derecha.",
            "INNER JOIN conserva todos los registros de la tabla izquierda aunque no tengan coincidencia.",
            "Ambos devuelven siempre todos los registros de las dos tablas.",
            "INNER JOIN devuelve únicamente las coincidencias entre ambas tablas. RIGHT JOIN conserva todos los registros de la tabla derecha y agrega las coincidencias de la izquierda."
        ],
        "ans": 3,
        "exp": "INNER JOIN devuelve únicamente las coincidencias entre ambas tablas. RIGHT JOIN conserva todos los registros de la tabla derecha y agrega las coincidencias de la izquierda.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre JOIN y UNION?",
        "opts": [
            "JOIN combina columnas de diferentes tablas mediante una relación. UNION combina los resultados de consultas compatibles, agregando filas.",
            "Son lo mismo; ambos combinan columnas de diferentes tablas.",
            "UNION une columnas de tablas relacionadas, y JOIN agrega filas de otra consulta.",
            "JOIN solo funciona con tablas que tienen la misma cantidad de filas."
        ],
        "ans": 0,
        "exp": "JOIN combina columnas de diferentes tablas mediante una relación. UNION combina los resultados de consultas compatibles, agregando filas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre COUNT, SUM y AVG?",
        "opts": [
            "COUNT cuenta registros o valores. SUM calcula la suma de valores numéricos. AVG calcula el promedio de valores numéricos.",
            "Las tres funciones devuelven siempre el número total de filas de la tabla.",
            "AVG cuenta registros, COUNT calcula la media y SUM devuelve el mínimo.",
            "SUM cuenta registros, COUNT calcula la suma y AVG devuelve el valor máximo."
        ],
        "ans": 0,
        "exp": "COUNT cuenta registros o valores. SUM calcula la suma de valores numéricos. AVG calcula el promedio de valores numéricos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre INSERT, UPDATE y DELETE?",
        "opts": [
            "UPDATE agrega registros, INSERT modifica y DELETE crea la tabla.",
            "Los tres comandos sirven para consultar datos sin modificarlos.",
            "DELETE agrega registros, UPDATE los elimina e INSERT modifica la estructura.",
            "INSERT agrega registros. UPDATE modifica registros existentes. DELETE elimina registros."
        ],
        "ans": 3,
        "exp": "INSERT agrega registros. UPDATE modifica registros existentes. DELETE elimina registros.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre DROP y ALTER?",
        "opts": [
            "ALTER elimina el objeto completo, y DROP modifica sus columnas.",
            "DROP agrega columnas nuevas a una tabla existente sin eliminar datos.",
            "DROP elimina un objeto de la base de datos. ALTER modifica la estructura de un objeto existente, como agregar o eliminar columnas.",
            "Ambos modifican solamente los registros de la tabla sin tocar su estructura."
        ],
        "ans": 2,
        "exp": "DROP elimina un objeto de la base de datos. ALTER modifica la estructura de un objeto existente, como agregar o eliminar columnas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre una base de datos relacional y una no relacional?",
        "opts": [
            "Las no relacionales siempre usan tablas con claves foráneas obligatorias.",
            "Las relacionales solo almacenan documentos, y las no relacionales usan SQL.",
            "Son lo mismo; la diferencia está solo en el nombre del motor.",
            "La relacional organiza la información en tablas con relaciones definidas. La no relacional puede utilizar estructuras como documentos, pares clave-valor, grafos o columnas."
        ],
        "ans": 3,
        "exp": "La relacional organiza la información en tablas con relaciones definidas. La no relacional puede utilizar estructuras como documentos, pares clave-valor, grafos o columnas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre una relación uno a muchos y muchos a muchos?",
        "opts": [
            "En uno a muchos, todos los registros de ambas tablas se relacionan entre sí.",
            "En uno a muchos, un registro de una tabla puede relacionarse con varios registros de otra. En muchos a muchos, varios registros de ambas tablas pueden relacionarse entre sí.",
            "Son lo mismo; solo cambia el número de columnas de cada tabla.",
            "En muchos a muchos, un registro solo puede relacionarse con otro registro."
        ],
        "ans": 1,
        "exp": "En uno a muchos, un registro de una tabla puede relacionarse con varios registros de otra. En muchos a muchos, varios registros de ambas tablas pueden relacionarse entre sí.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre DELETE y UPDATE?",
        "opts": [
            "UPDATE elimina registros, y DELETE modifica los valores existentes.",
            "Ambos eliminan la tabla completa cuando se usan sin WHERE.",
            "DELETE elimina registros de una tabla, mientras que UPDATE modifica los valores de registros existentes.",
            "DELETE crea nuevos registros, y UPDATE los reemplaza."
        ],
        "ans": 2,
        "exp": "DELETE elimina registros de una tabla, mientras que UPDATE modifica los valores de registros existentes.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre una tabla y una vista?",
        "opts": [
            "Son iguales porque ambas guardan una copia independiente de los registros.",
            "Una vista almacena todos los datos, y la tabla solo guarda la consulta.",
            "Una tabla almacena los datos. Una vista presenta información obtenida mediante una consulta, normalmente sin almacenar una copia independiente de los registros.",
            "La vista solo puede existir si la tabla tiene una clave primaria."
        ],
        "ans": 2,
        "exp": "Una tabla almacena los datos. Una vista presenta información obtenida mediante una consulta, normalmente sin almacenar una copia independiente de los registros.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre un índice y una clave primaria?",
        "opts": [
            "La clave primaria identifica de forma única los registros y establece una regla de integridad. Un índice facilita las búsquedas y puede existir sin ser una clave primaria.",
            "La clave primaria solo sirve para acelerar las búsquedas en la base.",
            "Un índice siempre identifica de forma única los registros de la tabla.",
            "Son lo mismo: ambos impiden que se repitan valores."
        ],
        "ans": 0,
        "exp": "La clave primaria identifica de forma única los registros y establece una regla de integridad. Un índice facilita las búsquedas y puede existir sin ser una clave primaria.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas almacenar estudiantes, cursos y profesores, ¿cómo organizarías la base de datos?",
        "opts": [
            "Crearía una única tabla llamada Datos, sin claves ni relaciones.",
            "Crearía tablas separadas para Estudiantes, Cursos y Profesores, y establecería relaciones entre ellas utilizando claves primarias y foráneas.",
            "Crearía una tabla por cada estudiante registrado en el sistema.",
            "Guardaría todos los datos en una sola tabla con columnas repetidas."
        ],
        "ans": 1,
        "exp": "Crearía tablas separadas para Estudiantes, Cursos y Profesores, y establecería relaciones entre ellas utilizando claves primarias y foráneas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas identificar de manera única a cada estudiante, ¿qué utilizarías?",
        "opts": [
            "Usaría el campo nombre, porque cada estudiante tiene un nombre distinto.",
            "Usaría la columna edad, porque es un valor numérico.",
            "Usaría una restricción DEFAULT con el valor del curso.",
            "Una clave primaria, por ejemplo, un campo id_estudiante con valores únicos."
        ],
        "ans": 3,
        "exp": "Una clave primaria, por ejemplo, un campo id_estudiante con valores únicos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si un cliente puede realizar muchos pedidos, ¿qué cardinalidad utilizarías?",
        "opts": [
            "Una relación muchos a muchos, porque cada pedido puede tener varios clientes.",
            "No necesita relación, porque los pedidos se guardan dentro del cliente.",
            "Una relación uno a uno, porque cada cliente solo puede tener un pedido.",
            "Una relación uno a muchos, porque un cliente puede tener varios pedidos, pero cada pedido pertenece a un cliente."
        ],
        "ans": 3,
        "exp": "Una relación uno a muchos, porque un cliente puede tener varios pedidos, pero cada pedido pertenece a un cliente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si varios estudiantes pueden inscribirse en varios cursos, ¿cómo representarías esa relación?",
        "opts": [
            "Una relación uno a uno entre Estudiantes y Cursos.",
            "Utilizaría una relación muchos a muchos mediante una tabla intermedia, por ejemplo, Inscripciones.",
            "Una relación uno a muchos con una clave foránea en la tabla Cursos.",
            "Una sola tabla que guarde cada curso dentro de cada estudiante."
        ],
        "ans": 1,
        "exp": "Utilizaría una relación muchos a muchos mediante una tabla intermedia, por ejemplo, Inscripciones.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas consultar todos los clientes que tienen pedidos, ¿qué JOIN utilizarías?",
        "opts": [
            "UNION, porque combina las filas de ambas tablas.",
            "RIGHT JOIN, porque necesito solamente los pedidos.",
            "Utilizaría INNER JOIN, porque solamente necesito los clientes que tienen coincidencias con la tabla de pedidos.",
            "LEFT JOIN, porque necesito todos los clientes aunque no tengan pedidos."
        ],
        "ans": 2,
        "exp": "Utilizaría INNER JOIN, porque solamente necesito los clientes que tienen coincidencias con la tabla de pedidos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas mostrar todos los clientes, incluso los que no tienen pedidos, ¿qué JOIN utilizarías?",
        "opts": [
            "UNION, porque combina automáticamente las dos tablas.",
            "Utilizaría LEFT JOIN, porque conserva todos los registros de la tabla clientes.",
            "CROSS JOIN, porque necesito combinar todas las combinaciones posibles.",
            "INNER JOIN, porque solo devuelve los clientes que tienen pedidos."
        ],
        "ans": 1,
        "exp": "Utilizaría LEFT JOIN, porque conserva todos los registros de la tabla clientes.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas buscar un estudiante por su nombre, ¿qué comando utilizarías?",
        "opts": [
            "DELETE con la cláusula ORDER BY sobre la columna nombre.",
            "SELECT con una condición HAVING sobre la columna nombre.",
            "UPDATE con una condición WHERE sobre la columna nombre.",
            "Utilizaría SELECT con una condición WHERE."
        ],
        "ans": 3,
        "exp": "Utilizaría SELECT con una condición WHERE.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">SELECT * FROM estudiantes WHERE nombre = 'Ana';</div></div>"
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas modificar el correo de un usuario, ¿qué comando utilizarías?",
        "opts": [
            "DELETE seguido de SELECT para revisar el correo.",
            "Utilizaría UPDATE con WHERE para identificar el registro que necesito modificar.",
            "INSERT con el nuevo correo, porque agrega un registro.",
            "SELECT con WHERE, porque modifica el valor del correo."
        ],
        "ans": 1,
        "exp": "Utilizaría UPDATE con WHERE para identificar el registro que necesito modificar.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">UPDATE usuarios SET correo = 'ana@email.com' WHERE id = 1;</div></div>"
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas eliminar un usuario específico, ¿qué comando utilizarías?",
        "opts": [
            "UPDATE usuarios SET activo = 0, porque lo elimina definitivamente.",
            "TRUNCATE con WHERE id = 1, porque elimina solo ese registro.",
            "DROP TABLE usuarios, porque elimina solo ese registro.",
            "Utilizaría DELETE con WHERE para eliminar solamente el registro correspondiente."
        ],
        "ans": 3,
        "exp": "Utilizaría DELETE con WHERE para eliminar solamente el registro correspondiente.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">DELETE FROM usuarios WHERE id = 1;</div></div>"
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas contar cuántos estudiantes existen en una tabla, ¿qué utilizarías?",
        "opts": [
            "SUM(*), porque suma todos los registros de la tabla.",
            "COUNT(nombre) FROM estudiantes, porque cuenta solo los nombres repetidos.",
            "LENGTH(estudiantes), porque mide el tamaño de la tabla.",
            "Utilizaría COUNT()."
        ],
        "ans": 3,
        "exp": "Utilizaría COUNT().",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">SELECT COUNT(*) FROM estudiantes;</div></div>"
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas obtener el promedio de las notas, ¿qué utilizarías?",
        "opts": [
            "COUNT(nota), porque calcula el promedio de las notas.",
            "SUM(nota), porque devuelve el promedio de las notas.",
            "MAX(nota), porque calcula el promedio de las notas.",
            "Utilizaría AVG()."
        ],
        "ans": 3,
        "exp": "Utilizaría AVG().",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">SELECT AVG(nota) FROM calificaciones;</div></div>"
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas mostrar los productos desde el más caro al más barato, ¿qué utilizarías?",
        "opts": [
            "Utilizaría ORDER BY con DESC.",
            "WHERE precio DESC, porque ordena los productos del más caro al más barato.",
            "ORDER BY precio ASC, porque muestra del más caro al más barato.",
            "GROUP BY precio, porque agrupa los productos por su precio."
        ],
        "ans": 0,
        "exp": "Utilizaría ORDER BY con DESC.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">SELECT * FROM productos ORDER BY precio DESC;</div></div>"
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas evitar que dos usuarios tengan el mismo correo, ¿qué utilizarías?",
        "opts": [
            "Una restricción UNIQUE sobre la columna correo.",
            "Una restricción NOT NULL sobre la columna correo.",
            "Una vista que filtra los correos repetidos.",
            "Una clave primaria sobre la columna correo."
        ],
        "ans": 0,
        "exp": "Una restricción UNIQUE sobre la columna correo.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas evitar que un pedido tenga un cliente inexistente, ¿qué utilizarías?",
        "opts": [
            "Una restricción NOT NULL sobre la columna cliente_id.",
            "Un índice que ordena los pedidos por cliente.",
            "Una restricción UNIQUE sobre la columna cliente_id.",
            "Una clave foránea que haga referencia a la clave primaria de la tabla clientes."
        ],
        "ans": 3,
        "exp": "Una clave foránea que haga referencia a la clave primaria de la tabla clientes.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas que una columna siempre tenga un valor, ¿qué utilizarías?",
        "opts": [
            "La restricción NOT NULL.",
            "La clave foránea.",
            "La restricción UNIQUE.",
            "La restricción DEFAULT."
        ],
        "ans": 0,
        "exp": "La restricción NOT NULL.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas almacenar una fecha de nacimiento, ¿qué tipo de dato utilizarías?",
        "opts": [
            "VARCHAR, porque permite guardar cualquier texto de fecha.",
            "TIMESTAMP con hora, porque siempre se necesita la hora de nacimiento.",
            "DATE, porque permite almacenar fechas sin necesidad de guardar una hora.",
            "INT, porque las fechas se guardan como números enteros."
        ],
        "ans": 2,
        "exp": "DATE, porque permite almacenar fechas sin necesidad de guardar una hora.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas almacenar el precio de un producto, ¿qué tipo de dato utilizarías?",
        "opts": [
            "DECIMAL, porque permite almacenar valores numéricos con decimales y precisión definida.",
            "CHAR, porque el precio se guarda como texto.",
            "DATE, porque el precio cambia con el tiempo.",
            "INT, porque el precio siempre es un número entero."
        ],
        "ans": 0,
        "exp": "DECIMAL, porque permite almacenar valores numéricos con decimales y precisión definida.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas evitar que se repitan los datos de los clientes en cada pedido, ¿qué aplicarías?",
        "opts": [
            "Normalización, separando la información de clientes y pedidos en tablas relacionadas.",
            "Desnormalización, porque se repiten los datos para acelerar las consultas.",
            "Índice, porque los datos repetidos se ordenan más rápido.",
            "Restricción UNIQUE, porque evita que los pedidos repitan datos del cliente."
        ],
        "ans": 0,
        "exp": "Normalización, separando la información de clientes y pedidos en tablas relacionadas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué son las formas normales?",
        "opts": [
            "Son reglas o criterios utilizados para organizar las tablas de una base de datos y reducir redundancias y anomalías.",
            "Son formatos de archivo para exportar bases de datos completas.",
            "Son tipos de datos que se utilizan para guardar fechas y horas.",
            "Son comandos que eliminan las tablas duplicadas de una base de datos."
        ],
        "ans": 0,
        "exp": "Son reglas o criterios utilizados para organizar las tablas de una base de datos y reducir redundancias y anomalías.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es la primera forma normal (1FN)?",
        "opts": [
            "Exige que todas las columnas sean de tipo texto.",
            "Establece que cada campo debe contener un valor atómico, es decir, no debe almacenar conjuntos de valores separados dentro de una misma celda.",
            "Exige que cada tabla tenga una vista asociada.",
            "Exige que cada tabla tenga al menos una clave foránea."
        ],
        "ans": 1,
        "exp": "Establece que cada campo debe contener un valor atómico, es decir, no debe almacenar conjuntos de valores separados dentro de una misma celda.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es la segunda forma normal (2FN)?",
        "opts": [
            "Exige que todas las tablas tengan la misma cantidad de columnas.",
            "Una tabla debe cumplir la primera forma normal y cada atributo que no forme parte de una clave debe depender completamente de toda la clave candidata, no solamente de una parte de ella.",
            "Exige que todas las columnas dependan de una vista de la base.",
            "Exige que cada tabla tenga un único registro por cada columna."
        ],
        "ans": 1,
        "exp": "Una tabla debe cumplir la primera forma normal y cada atributo que no forme parte de una clave debe depender completamente de toda la clave candidata, no solamente de una parte de ella.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es la tercera forma normal (3FN)?",
        "opts": [
            "Una tabla debe cumplir la segunda forma normal y evitar dependencias transitivas de atributos no clave respecto de las claves candidatas.",
            "Exige que cada columna contenga solamente valores numéricos.",
            "Exige que todas las dependencias sean transitivas entre columnas.",
            "Exige que las tablas no tengan claves primarias compuestas."
        ],
        "ans": 0,
        "exp": "Una tabla debe cumplir la segunda forma normal y evitar dependencias transitivas de atributos no clave respecto de las claves candidatas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué problemas pueden aparecer si no normalizamos una base de datos?",
        "opts": [
            "Hacen que las consultas siempre sean más rápidas.",
            "Impiden crear relaciones entre las tablas.",
            "Pueden aparecer datos duplicados, inconsistencias y anomalías al insertar, actualizar o eliminar información.",
            "Solo aumentan el tamaño de la base de datos, sin afectar la información."
        ],
        "ans": 2,
        "exp": "Pueden aparecer datos duplicados, inconsistencias y anomalías al insertar, actualizar o eliminar información.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es una anomalía de actualización?",
        "opts": [
            "Ocurre cuando se crea una vista sin consultas asociadas.",
            "Es un problema que ocurre cuando un mismo dato está repetido en varios registros y es necesario modificarlo en todos para mantener la información consistente.",
            "Ocurre cuando se elimina una tabla completa por error.",
            "Ocurre cuando una columna no admite valores NULL."
        ],
        "ans": 1,
        "exp": "Es un problema que ocurre cuando un mismo dato está repetido en varios registros y es necesario modificarlo en todos para mantener la información consistente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es una anomalía de inserción?",
        "opts": [
            "Ocurre cuando se modifica el valor de una clave primaria.",
            "Es un problema que impide o dificulta insertar información sin tener que agregar otros datos que todavía no existen o que no corresponden.",
            "Ocurre cuando una tabla no tiene índice asociado.",
            "Ocurre cuando una consulta devuelve más registros de los esperados."
        ],
        "ans": 1,
        "exp": "Es un problema que impide o dificulta insertar información sin tener que agregar otros datos que todavía no existen o que no corresponden.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es una anomalía de eliminación?",
        "opts": [
            "Es cuando al eliminar un registro se pierde accidentalmente otra información que también estaba almacenada en él.",
            "Ocurre cuando se borra una tabla que tiene índices asociados.",
            "Ocurre cuando se eliminan las claves foráneas de una tabla.",
            "Ocurre cuando se elimina un registro sin usar WHERE."
        ],
        "ans": 0,
        "exp": "Es cuando al eliminar un registro se pierde accidentalmente otra información que también estaba almacenada en él.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué son las propiedades ACID?",
        "opts": [
            "Son cuatro comandos que se utilizan para crear tablas nuevas.",
            "Son cuatro propiedades que buscan garantizar la confiabilidad de las transacciones: Atomicidad (todas las operaciones se realizan o ninguna); Consistencia (la transacción mantiene las reglas de integridad); Aislamiento (las transacciones concurrentes no deben interferir incorrectamente entre sí); Durabilidad (los cambios confirmados permanecen guardados incluso ante fallos).",
            "Son cuatro reglas que permiten guardar las consultas en memoria caché.",
            "Son cuatro tipos de índices que aceleran la búsqueda de datos."
        ],
        "ans": 1,
        "exp": "Son cuatro propiedades que buscan garantizar la confiabilidad de las transacciones: Atomicidad (todas las operaciones se realizan o ninguna); Consistencia (la transacción mantiene las reglas de integridad); Aislamiento (las transacciones concurrentes no deben interferir incorrectamente entre sí); Durabilidad (los cambios confirmados permanecen guardados incluso ante fallos).",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es COMMIT?",
        "opts": [
            "Es una instrucción que elimina la tabla después de confirmar los cambios.",
            "Es una instrucción que cancela todas las transacciones del servidor.",
            "Es una instrucción que crea una copia de seguridad de la base.",
            "Es una instrucción que confirma una transacción y guarda sus cambios."
        ],
        "ans": 3,
        "exp": "Es una instrucción que confirma una transacción y guarda sus cambios.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es ROLLBACK?",
        "opts": [
            "Es una instrucción que confirma y guarda permanentemente los cambios.",
            "Es una instrucción que elimina todas las vistas de la base.",
            "Es una instrucción que crea un índice para acelerar la consulta.",
            "Es una instrucción que revierte los cambios de una transacción que todavía no se han confirmado."
        ],
        "ans": 3,
        "exp": "Es una instrucción que revierte los cambios de una transacción que todavía no se han confirmado.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué sucede si una transacción falla antes de realizar COMMIT?",
        "opts": [
            "No se puede recuperar nada, porque los cambios ya se escribieron en disco.",
            "Se puede utilizar ROLLBACK para revertir las operaciones pendientes, según el motor y las características de la transacción.",
            "Los cambios se guardan automáticamente aunque la transacción falle.",
            "La tabla se elimina para proteger la integridad de los datos."
        ],
        "ans": 1,
        "exp": "Se puede utilizar ROLLBACK para revertir las operaciones pendientes, según el motor y las características de la transacción.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Para qué sirve un índice en una base de datos?",
        "opts": [
            "Sirve para cifrar los datos almacenados en las tablas.",
            "Sirve para acelerar las consultas y búsquedas, evitando que el motor tenga que revisar todos los registros en determinados casos.",
            "Sirve para guardar copias de las tablas en otro servidor.",
            "Sirve para eliminar registros duplicados de forma automática."
        ],
        "ans": 1,
        "exp": "Sirve para acelerar las consultas y búsquedas, evitando que el motor tenga que revisar todos los registros en determinados casos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Los índices tienen alguna desventaja?",
        "opts": [
            "No, los índices siempre mejoran todas las operaciones sin costo adicional.",
            "Sí, pero solo afectan a las consultas que usan SELECT *.",
            "Sí. Ocupan espacio adicional y pueden hacer más lentas algunas operaciones de inserción, actualización y eliminación porque también deben mantenerse actualizados.",
            "No, porque los índices no ocupan espacio en la base de datos."
        ],
        "ans": 2,
        "exp": "Sí. Ocupan espacio adicional y pueden hacer más lentas algunas operaciones de inserción, actualización y eliminación porque también deben mantenerse actualizados.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es la integridad de datos?",
        "opts": [
            "Es la garantía de que la información almacenada sea correcta, consistente y válida.",
            "Es la cantidad de registros que una tabla puede almacenar.",
            "Es la velocidad con la que se ejecutan las consultas SQL.",
            "Es el número de usuarios que pueden conectarse simultáneamente."
        ],
        "ans": 0,
        "exp": "Es la garantía de que la información almacenada sea correcta, consistente y válida.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es la integridad de entidad?",
        "opts": [
            "Es la regla que impide eliminar tablas que tienen vistas asociadas.",
            "Es el principio que garantiza que cada registro pueda identificarse de manera única, normalmente mediante una clave primaria.",
            "Es la regla que permite que una clave primaria tenga valores nulos.",
            "Es la regla que obliga a que las tablas tengan la misma cantidad de columnas."
        ],
        "ans": 1,
        "exp": "Es el principio que garantiza que cada registro pueda identificarse de manera única, normalmente mediante una clave primaria.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es la integridad referencial?",
        "opts": [
            "Garantiza que las referencias entre tablas correspondan a registros válidos.",
            "Garantiza que los datos se respalden automáticamente en otra tabla.",
            "Garantiza que cada registro tenga una clave primaria distinta de NULL.",
            "Garantiza que las consultas se ejecuten en menos de un segundo."
        ],
        "ans": 0,
        "exp": "Garantiza que las referencias entre tablas correspondan a registros válidos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué sucede si intentas insertar un registro con una clave foránea que no existe en la tabla relacionada?",
        "opts": [
            "La base de datos acepta el registro y lo guarda sin verificar la relación.",
            "La base de datos rechazará la operación si la restricción de clave foránea está activa y no se cumplen las reglas correspondientes.",
            "La base de datos crea automáticamente el registro faltante en la tabla relacionada.",
            "La base de datos cambia la clave foránea por NULL sin mostrar ningún error."
        ],
        "ans": 1,
        "exp": "La base de datos rechazará la operación si la restricción de clave foránea está activa y no se cumplen las reglas correspondientes.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es una subconsulta?",
        "opts": [
            "Es una consulta SQL que se encuentra dentro de otra consulta y cuyo resultado se utiliza para resolver una operación.",
            "Es una vista que se crea cada vez que se elimina un registro.",
            "Es una tabla temporal que se guarda al finalizar una transacción.",
            "Es un índice que se aplica solamente a las columnas de tipo texto."
        ],
        "ans": 0,
        "exp": "Es una consulta SQL que se encuentra dentro de otra consulta y cuyo resultado se utiliza para resolver una operación.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es una consulta correlacionada?",
        "opts": [
            "Es una subconsulta que depende de los valores de la consulta externa y puede ejecutarse para cada registro evaluado por ella.",
            "Es una consulta que solo puede usarse con la cláusula GROUP BY.",
            "Es una consulta que combina todas las tablas de una base de datos.",
            "Es una consulta que se ejecuta una sola vez, sin depender de ninguna otra."
        ],
        "ans": 0,
        "exp": "Es una subconsulta que depende de los valores de la consulta externa y puede ejecutarse para cada registro evaluado por ella.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es una consulta agregada?",
        "opts": [
            "Es una consulta que devuelve únicamente la estructura de la tabla.",
            "Es una consulta que copia todos los registros de una tabla a otra.",
            "Es una consulta que elimina los registros duplicados de una tabla.",
            "Es una consulta que utiliza funciones como COUNT, SUM, AVG, MIN o MAX para obtener resultados resumidos."
        ],
        "ans": 3,
        "exp": "Es una consulta que utiliza funciones como COUNT, SUM, AVG, MIN o MAX para obtener resultados resumidos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es una relación muchos a muchos y por qué necesita una tabla intermedia?",
        "opts": [
            "Es una relación donde varios registros de una tabla pueden relacionarse con varios de otra. La tabla intermedia permite representar esas asociaciones mediante claves foráneas.",
            "Es una relación que se representa con una vista en lugar de una tabla.",
            "Es una relación en la que un registro solo puede relacionarse con otro registro.",
            "Es una relación que no necesita claves foráneas para mantener las referencias."
        ],
        "ans": 0,
        "exp": "Es una relación donde varios registros de una tabla pueden relacionarse con varios de otra. La tabla intermedia permite representar esas asociaciones mediante claves foráneas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es un diagrama entidad-relación?",
        "opts": [
            "Es un script que ejecuta las consultas de la base de datos automáticamente.",
            "Es un documento que describe los permisos de los usuarios del sistema.",
            "Es un gráfico que muestra el rendimiento del servidor en tiempo real.",
            "Es una representación visual de las entidades de una base de datos, sus atributos y las relaciones que existen entre ellas."
        ],
        "ans": 3,
        "exp": "Es una representación visual de las entidades de una base de datos, sus atributos y las relaciones que existen entre ellas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es la concurrencia en una base de datos?",
        "opts": [
            "Es la capacidad de cifrar los datos de varias tablas al mismo tiempo.",
            "Es la capacidad de guardar copias de seguridad de la base en paralelo.",
            "Es la capacidad de permitir que diferentes usuarios o procesos trabajen con la base de datos al mismo tiempo.",
            "Es la cantidad de tablas que pueden ejecutarse en un mismo comando."
        ],
        "ans": 2,
        "exp": "Es la capacidad de permitir que diferentes usuarios o procesos trabajen con la base de datos al mismo tiempo.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "SQL - Profundización",
        "diff": "hard",
        "q": "¿Qué es un bloqueo (LOCK)?",
        "opts": [
            "Es un mecanismo que controla el acceso simultáneo a determinados datos para evitar conflictos durante las operaciones.",
            "Es una instrucción que elimina permanentemente una tabla de la base.",
            "Es una vista que muestra únicamente los registros bloqueados por el administrador.",
            "Es una restricción que impide que una columna tenga valores repetidos."
        ],
        "ans": 0,
        "exp": "Es un mecanismo que controla el acceso simultáneo a determinados datos para evitar conflictos durante las operaciones.",
        "extra": ""
    },



    // ==================== SQL - CONSULTAS BÁSICAS ====================
    {
        "profe": false,
        "unit": "SQL - Consultas Básicas",
        "diff": "medium",
        "q": "Dada la tabla 'empleados', escribe una consulta que muestre el nombre, apellido y salario de los empleados que ganan más de $50,000, ordenados por salario descendente.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: empleados</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">apellido</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">salario</span> DECIMAL(10,2),<br>
<span style="color:#9cdcfe;">departamento_id</span> INT
</div>
<textarea style="width:100%;height:80px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu consulta SQL aquí..."></textarea>
</div>`,
        "opts": [
            "SELECT nombre, apellido, salario FROM empleados WHERE salario > 50000 ORDER BY salario DESC;",
            "SELECT * FROM empleados WHERE salario > 50000;",
            "SELECT nombre, apellido, salario FROM empleados ORDER BY salario DESC WHERE salario > 50000;",
            "SELECT nombre, apellido, salario FROM empleados WHERE salario >= 50000 ORDER BY salario;"
        ],
        "ans": 0,
        "exp": "La consulta correcta debe: 1) Seleccionar solo los campos solicitados (nombre, apellido, salario), 2) Filtrar por salario > 50000, 3) Ordenar por salario descendente (DESC)."
    },

    // ==================== SQL - JOIN Y AGRUPACIÓN ====================
    {
        "profe": false,
        "unit": "SQL - Joins y Agrupación",
        "diff": "hard",
        "q": "Dadas las tablas 'empleados' y 'departamentos', escribe una consulta que muestre el nombre del departamento y el salario promedio de sus empleados, incluyendo solo departamentos con más de 3 empleados.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: empleados</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">apellido</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">salario</span> DECIMAL(10,2),<br>
<span style="color:#9cdcfe;">departamento_id</span> INT<br><br>
<strong style="color:#569cd6;">Tabla: departamentos</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(50)
</div>
<textarea style="width:100%;height:100px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu consulta SQL aquí..."></textarea>
</div>`,
        "opts": [
            "SELECT d.nombre, AVG(e.salario) FROM empleados e JOIN departamentos d ON e.departamento_id = d.id GROUP BY d.nombre HAVING COUNT(e.id) > 3;",
            "SELECT d.nombre, AVG(e.salario) FROM empleados e, departamentos d WHERE e.departamento_id = d.id GROUP BY d.nombre WHERE COUNT(e.id) > 3;",
            "SELECT d.nombre, AVG(e.salario) FROM empleados e JOIN departamentos d ON e.departamento_id = d.id WHERE COUNT(e.id) > 3 GROUP BY d.nombre;",
            "SELECT d.nombre, SUM(e.salario)/COUNT(e.id) FROM empleados e INNER JOIN departamentos d ON e.departamento_id = d.id HAVING COUNT(e.id) > 3;"
        ],
        "ans": 0,
        "exp": "Se necesita: 1) JOIN entre ambas tablas, 2) GROUP BY departamento, 3) HAVING para filtrar por COUNT > 3 (el WHERE no funciona con agregaciones)."
    },

    // ==================== SQL - SUBQUERIES ====================
    {
        "profe": false,
        "unit": "SQL - Subconsultas",
        "diff": "hard",
        "q": "Escribe una consulta que muestre los empleados que ganan más que el promedio de su propio departamento.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: empleados</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">apellido</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">salario</span> DECIMAL(10,2),<br>
<span style="color:#9cdcfe;">departamento_id</span> INT
</div>
<textarea style="width:100%;height:100px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu consulta SQL aquí..."></textarea>
</div>`,
        "opts": [
            "SELECT * FROM empleados e WHERE salario > (SELECT AVG(salario) FROM empleados WHERE departamento_id = e.departamento_id);",
            "SELECT * FROM empleados WHERE salario > (SELECT AVG(salario) FROM empleados);",
            "SELECT e.*, d.nombre FROM empleados e JOIN departamentos d ON e.departamento_id = d.id WHERE salario > (SELECT AVG(salario) FROM empleados);",
            "SELECT e.*, AVG(salario) FROM empleados e GROUP BY departamento_id HAVING salario > AVG(salario);"
        ],
        "ans": 0,
        "exp": "Esta es una subconsulta correlacionada. Para cada empleado (e), la subconsulta calcula el promedio de su departamento (WHERE departamento_id = e.departamento_id)."
    },

    // ==================== SQL - CREACIÓN DE TABLAS ====================
    {
        "profe": false,
        "unit": "SQL - DDL (Data Definition Language)",
        "diff": "medium",
        "q": "Crea la tabla 'productos' con los siguientes campos: id (clave primaria autoincrementable), nombre (VARCHAR 100, NOT NULL), precio (DECIMAL 10,2, NOT NULL), stock (INT, DEFAULT 0), y categoría (VARCHAR 50).",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Requisitos:</strong><br>
• id: INT, PRIMARY KEY, AUTO_INCREMENT<br>
• nombre: VARCHAR(100), NOT NULL<br>
• precio: DECIMAL(10,2), NOT NULL<br>
• stock: INT, DEFAULT 0<br>
• categoria: VARCHAR(50)
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu comando CREATE TABLE aquí..."></textarea>
</div>`,
        "opts": [
            "CREATE TABLE productos (id INT PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(100) NOT NULL, precio DECIMAL(10,2) NOT NULL, stock INT DEFAULT 0, categoria VARCHAR(50));",
            "CREATE TABLE productos (id INT PRIMARY KEY, nombre VARCHAR(100), precio DECIMAL(10,2), stock INT DEFAULT 0, categoria VARCHAR(50));",
            "CREATE TABLE productos (id AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(100) NOT NULL, precio DECIMAL(10,2) NOT NULL, stock INT, categoria VARCHAR(50));",
            "CREATE TABLE productos (id INT PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(100), precio DECIMAL(10,2), stock INT DEFAULT 0);"
        ],
        "ans": 0,
        "exp": "La sintaxis correcta en MySQL: CREATE TABLE nombre (campo tipo restricciones, ...). AUTO_INCREMENT va después del tipo INT en la definición de la columna."
    },

    // ==================== SQL - DIAGRAMA DE BASE DE DATOS ====================
    {
        "profe": false,
        "unit": "SQL - Modelado de Datos",
        "diff": "hard",
        "q": "Observa el diagrama ER y determina la consulta correcta para obtener: nombre del cliente, fecha de pedido y productos comprados (incluyendo cantidad y precio unitario).",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Diagrama ER</strong><br><br>
<span style="color:#9cdcfe;">clientes</span> (id, nombre, email)<br>
   │ 1<br>
   │<br>
   └──── <span style="color:#9cdcfe;">pedidos</span> (id, fecha, cliente_id)<br>
          │ 1<br>
          │<br>
          └──── <span style="color:#9cdcfe;">detalles_pedido</span> (pedido_id, producto_id, cantidad, precio_unitario)<br>
                 │<br>
                 └──── <span style="color:#9cdcfe;">productos</span> (id, nombre, precio)
</div>
<textarea style="width:100%;height:100px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu consulta SQL aquí..."></textarea>
</div>`,
        "opts": [
            "SELECT c.nombre, p.fecha, pr.nombre AS producto, dp.cantidad, dp.precio_unitario FROM clientes c JOIN pedidos p ON c.id = p.cliente_id JOIN detalles_pedido dp ON p.id = dp.pedido_id JOIN productos pr ON dp.producto_id = pr.id;",
            "SELECT c.nombre, p.fecha, pr.nombre, dp.cantidad FROM clientes c, pedidos p, detalles_pedido dp, productos pr WHERE c.id = p.cliente_id AND p.id = dp.pedido_id AND dp.producto_id = pr.id;",
            "SELECT c.nombre, p.fecha, pr.nombre, dp.cantidad, dp.precio_unitario FROM clientes c JOIN pedidos p ON c.id = p.cliente_id JOIN detalles_pedido dp ON p.id = dp.pedido_id JOIN productos pr ON dp.producto_id = pr.id ORDER BY p.fecha;",
            "Todas las anteriores son correctas."
        ],
        "ans": 3,
        "exp": "Las tres consultas devuelven el mismo resultado: La opción 0 usa JOINs explícitos, la opción 1 usa join implícito (válido pero menos claro), la opción 2 añade un ORDER BY. Las tres son sintácticamente correctas en SQL estándar."
    },

    // ==================== SQL - ELIMINACIÓN Y ACTUALIZACIÓN ====================
    {
        "profe": false,
        "unit": "SQL - DML (Data Manipulation Language)",
        "diff": "medium",
        "q": "Dada la tabla 'empleados', escribe un comando que: 1) Aumente en un 10% el salario de los empleados del departamento 'Ventas', y 2) Elimine a los empleados del departamento 'Recursos Humanos' que tengan más de 60 años.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: empleados</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">salario</span> DECIMAL(10,2),<br>
<span style="color:#9cdcfe;">departamento</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">edad</span> INT
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe los comandos SQL aquí..."></textarea>
</div>`,
        "opts": [
            "UPDATE empleados SET salario = salario * 1.10 WHERE departamento = 'Ventas'; DELETE FROM empleados WHERE departamento = 'Recursos Humanos' AND edad > 60;",
            "UPDATE empleados SET salario = salario + 10% WHERE departamento = 'Ventas'; DELETE FROM empleados WHERE departamento = 'Recursos Humanos' OR edad > 60;",
            "UPDATE empleados SET salario = (salario * 10 / 100) WHERE departamento = 'Ventas'; DELETE * FROM empleados WHERE departamento = 'Recursos Humanos' AND edad > 60;",
            "UPDATE empleados SET salario = salario * 0.10 WHERE departamento = 'Ventas'; DELETE empleados WHERE departamento = 'Recursos Humanos' AND edad >= 60;"
        ],
        "ans": 0,
        "exp": "Para aumentar en 10%: salario * 1.10. La condición debe ser AND (no OR) para eliminar solo los de RH con más de 60 años. La sintaxis correcta de DELETE no lleva *."
    },

    // ==================== SQL - FUNCIONES DE VENTANA ====================
    {
        "profe": false,
        "unit": "SQL - Funciones de Ventana",
        "diff": "hard",
        "q": "Escribe una consulta que muestre el nombre, salario, y el ranking (RANK) de cada empleado por salario dentro de su departamento.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: empleados</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">salario</span> DECIMAL(10,2),<br>
<span style="color:#9cdcfe;">departamento_id</span> INT
</div>
<textarea style="width:100%;height:100px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu consulta SQL aquí..."></textarea>
</div>`,
        "opts": [
            "SELECT nombre, salario, RANK() OVER (PARTITION BY departamento_id ORDER BY salario DESC) as ranking FROM empleados;",
            "SELECT nombre, salario, RANK() OVER (ORDER BY salario DESC) as ranking FROM empleados GROUP BY departamento_id;",
            "SELECT nombre, salario, ROW_NUMBER() OVER (PARTITION BY departamento_id ORDER BY salario) as ranking FROM empleados;",
            "SELECT nombre, salario, DENSE_RANK() OVER (PARTITION BY departamento_id ORDER BY salario DESC) as ranking FROM empleados;"
        ],
        "ans": 0,
        "exp": "RANK() OVER (PARTITION BY departamento_id ORDER BY salario DESC): PARTITION BY divide por departamento, ORDER BY DESC ordena de mayor a menor salario. RANK() asigna el mismo rango a salarios iguales."
    },

    // ==================== SQL - ÍNDICES Y RENDIMIENTO ====================
    {
        "profe": false,
        "unit": "SQL - Optimización e Índices",
        "diff": "medium",
        "q": "Dada una tabla 'ventas' con más de 10 millones de registros, ¿qué índice crearías para optimizar la consulta: SELECT * FROM ventas WHERE fecha BETWEEN '2025-01-01' AND '2025-12-31' AND cliente_id = 12345?",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: ventas</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">fecha</span> DATE,<br>
<span style="color:#9cdcfe;">cliente_id</span> INT,<br>
<span style="color:#9cdcfe;">monto</span> DECIMAL(10,2),<br>
<span style="color:#9cdcfe;">producto_id</span> INT
</div>
<textarea style="width:100%;height:80px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu comando CREATE INDEX aquí..."></textarea>
</div>`,
        "opts": [
            "CREATE INDEX idx_ventas_fecha_cliente ON ventas(fecha, cliente_id);",
            "CREATE INDEX idx_ventas_cliente ON ventas(cliente_id);",
            "CREATE INDEX idx_ventas_fecha ON ventas(fecha);",
            "CREATE INDEX idx_ventas_fecha_cliente_monto ON ventas(fecha, cliente_id, monto);"
        ],
        "ans": 0,
        "exp": "El índice compuesto (fecha, cliente_id) es el más eficiente porque cubre exactamente las dos condiciones WHERE. El orden importa: primero fecha por el BETWEEN, luego cliente_id. Incluir monto (opción 3) sería innecesario para esta consulta SELECT *."
    },

    // ==================== SQL - PROCEDIMIENTOS ALMACENADOS ====================
    {
        "profe": false,
        "unit": "SQL - Procedimientos Almacenados",
        "diff": "hard",
        "q": "Crea un procedimiento almacenado llamado 'actualizar_stock' que reciba producto_id y cantidad, y actualice el stock de la tabla 'productos'. El procedimiento debe prevenir que el stock quede negativo.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: productos</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(100),<br>
<span style="color:#9cdcfe;">stock</span> INT<br><br>
<strong style="color:#569cd6;">Requisitos:</strong><br>
• Validar que la cantidad no sea mayor al stock actual<br>
• Mostrar un mensaje de error si no hay stock suficiente
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu procedimiento almacenado aquí..."></textarea>
</div>`,
        "opts": [
            "CREATE PROCEDURE actualizar_stock(IN p_producto_id INT, IN p_cantidad INT) BEGIN DECLARE stock_actual INT; SELECT stock INTO stock_actual FROM productos WHERE id = p_producto_id; IF stock_actual >= p_cantidad THEN UPDATE productos SET stock = stock - p_cantidad WHERE id = p_producto_id; ELSE SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Stock insuficiente'; END IF; END;",
            "CREATE PROCEDURE actualizar_stock(p_producto_id INT, p_cantidad INT) BEGIN UPDATE productos SET stock = stock - p_cantidad WHERE id = p_producto_id; END;",
            "CREATE PROCEDURE actualizar_stock(IN p_producto_id INT, IN p_cantidad INT) BEGIN SELECT stock FROM productos WHERE id = p_producto_id; IF stock >= p_cantidad THEN UPDATE productos SET stock = stock - p_cantidad WHERE id = p_producto_id; END IF; END;",
            "PROCEDURE actualizar_stock(IN p_producto_id INT, IN p_cantidad INT) BEGIN IF (SELECT stock FROM productos WHERE id = p_producto_id) >= p_cantidad THEN UPDATE productos SET stock = stock - p_cantidad WHERE id = p_producto_id; END IF; END;"
        ],
        "ans": 0,
        "exp": "La opción correcta: 1) Declara variable stock_actual, 2) La asigna con SELECT INTO, 3) Valida con IF, 4) Usa SIGNAL SQLSTATE para lanzar error (buena práctica). Las otras opciones no validan stock suficiente."
    },

    // ==================== BASH - SCRIPTING ====================
    {
        "profe": false,
        "unit": "Bash - Scripting Avanzado",
        "diff": "hard",
        "q": "Escribe un script bash que recorra todos los archivos .log en el directorio actual, cuente las líneas que contienen la palabra 'ERROR', y muestre un resumen al final.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Requisitos del script:</strong><br>
• Recorrer todos los archivos .log del directorio actual<br>
• Contar líneas con la palabra "ERROR" (case sensitive)<br>
• Mostrar al final: "Total de errores: X en Y archivos"
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#00ff00;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu script bash aquí..."></textarea>
</div>`,
        "opts": [
            "for archivo in *.log; do total=$(grep -c 'ERROR' $archivo); if [ $total -gt 0 ]; then echo \"$archivo: $total errores\"; sum=$((sum+total)); count=$((count+1)); fi; done; echo \"Total de errores: $sum en $count archivos\";",
            "grep -c 'ERROR' *.log | awk '{sum+=$1; count++} END {print \"Total de errores: \" sum \" en \" count \" archivos\"}'",
            "find . -name '*.log' -exec grep -l 'ERROR' {} \\; | wc -l",
            "ls *.log | xargs grep 'ERROR' | wc -l"
        ],
        "ans": 0,
        "exp": "La opción 0 es un script completo: 1) Itera archivos .log, 2) Cuenta errores por archivo con grep -c, 3) Acumula totales, 4) Muestra el resumen. La opción 1 es un comando corto, no un script. La opción 2 solo cuenta archivos que tienen ERROR. La opción 3 solo cuenta líneas de error sin desglosar por archivo."
    },

    // ==================== BASH - PIPELINES Y LOGS ====================
    {
        "profe": false,
        "unit": "Bash - Pipelines y Análisis de Logs",
        "diff": "medium",
        "q": "Dado el siguiente pipeline, explica QUÉ HACE CADA PARTE y determina la salida esperada.",
        "extra": `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<div style="color:#aaa;">cat /var/log/nginx/access.log | awk '{print $1}' | sort | uniq -c | sort -rn | head -5</div>
</div>
<table class="subnet-table">
<thead><tr><th>Parte del comando</th><th>¿Qué hace?</th></tr></thead>
<tbody>
  <tr><td>cat /var/log/nginx/access.log</td><td><input placeholder="explica"></td></tr>
  <tr><td>awk '{print $1}'</td><td><input placeholder="explica"></td></tr>
  <tr><td>sort</td><td><input placeholder="explica"></td></tr>
  <tr><td>uniq -c</td><td><input placeholder="explica"></td></tr>
  <tr><td>sort -rn</td><td><input placeholder="explica"></td></tr>
  <tr><td>head -5</td><td><input placeholder="explica"></td></tr>
</tbody>
</table>
</div>`,
        "opts": [
            "Muestra las 5 IPs que más solicitudes han hecho al servidor Nginx.",
            "Muestra los 5 códigos de estado HTTP más comunes.",
            "Muestra las 5 URLs más solicitadas.",
            "Muestra las 5 IPs con más solicitudes y la cantidad de solicitudes de cada una."
        ],
        "ans": 0,
        "exp": "Este pipeline: 1) cat → lee el log de Nginx, 2) awk '{print $1}' → extrae el primer campo (generalmente la IP del cliente), 3) sort → ordena las IPs, 4) uniq -c → cuenta ocurrencias únicas, 5) sort -rn → ordena numéricamente de mayor a menor, 6) head -5 → muestra los 5 primeros. \n\n" +
             "Salida típica:\n" +
             "  1574 192.168.1.100\n" +
             "   832 10.0.0.55\n" +
             "   421 172.16.0.10\n" +
             "   398 192.168.1.101\n" +
             "   276 10.0.0.60\n\n" +
             "Esto es útil para detectar: 1) Posibles ataques DDoS, 2) Usuarios más activos, 3) Patrones de tráfico, 4) IPs a monitorear o bloquear."
    },

    // ==================== BASH - MONITOREO DE SISTEMA ====================
    {
        "profe": false,
        "unit": "Bash - Monitoreo de Sistema",
        "diff": "hard",
        "q": "Escribe un script que monitoree el uso de memoria y CPU cada 5 segundos, y si el uso de CPU supera el 80% o la memoria libre es menor a 500MB, envíe una alerta por consola.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Requisitos del script:</strong><br>
• Monitorear cada 5 segundos (loop infinito con sleep 5)<br>
• Si CPU > 80% → mensaje: "ALERTA: CPU al X%"<br>
• Si Memoria Libre < 500MB → mensaje: "ALERTA: Memoria baja (X MB libres)"<br>
• Mostrar timestamp en cada chequeo
</div>
<textarea style="width:100%;height:140px;font-family:monospace;background:#1e1e1e;color:#00ff00;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu script bash aquí..."></textarea>
</div>`,
        "opts": [
            "while true; do cpu=$(top -bn1 | grep 'Cpu(s)' | awk '{print $2}' | cut -d'%' -f1); mem=$(free -m | grep 'Mem:' | awk '{print $4}'); timestamp=$(date '+%Y-%m-%d %H:%M:%S'); echo \"$timestamp - CPU: $cpu% | Memoria libre: $mem MB\"; if (( $(echo \"$cpu > 80\" | bc -l) )); then echo \"⚠️ ALERTA: CPU al $cpu%\"; fi; if [ $mem -lt 500 ]; then echo \"⚠️ ALERTA: Memoria baja ($mem MB libres)\"; fi; sleep 5; done;",
            "watch -n 5 'top -bn1 | head -5; free -m | head -2'",
            "while true; do top -bn1 | head -5; free -m; sleep 5; done",
            "while sleep 5; do ps aux --sort=-%cpu | head -10; free -m; done"
        ],
        "ans": 0,
        "exp": "La opción correcta: 1) while true para loop infinito, 2) top -bn1 para una sola iteración de top, 3) grep y awk para extraer CPU, 4) free -m para memoria en MB, 5) date para timestamp, 6) comparaciones con if, 7) sleep 5 al final. El comando bc -l se usa para comparar flotantes (CPU > 80)."
    },

    // ==================== PYTHON - ANÁLISIS DE DATOS ====================
    {
        "profe": false,
        "unit": "Python - Pandas y Análisis de Datos",
        "diff": "hard",
        "q": "Dado un DataFrame con ventas mensuales, escribe código para: 1) Agrupar por producto, 2) Calcular ventas totales por producto, 3) Ordenar descendente, 4) Mostrar los 5 productos más vendidos.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">DataFrame: ventas</strong><br>
<span style="color:#9cdcfe;">producto</span> (str), <span style="color:#9cdcfe;">mes</span> (str), <span style="color:#9cdcfe;">ventas</span> (int)<br><br>
<strong style="color:#569cd6;">Ejemplo:</strong><br>
producto  | mes     | ventas<br>
---------|---------|--------<br>
"Laptop"  | "Enero" | 150<br>
"Mouse"   | "Enero" | 80<br>
"Laptop"  | "Febrero"| 200<br>
"Teclado" | "Enero" | 120
</div>
<textarea style="width:100%;height:100px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu código Python aquí..."></textarea>
</div>`,
        "opts": [
            "top_productos = ventas.groupby('producto')['ventas'].sum().sort_values(ascending=False).head(5)",
            "top_productos = ventas.groupby('producto').sum().sort_values(by='ventas', ascending=False)[:5]",
            "top_productos = ventas.pivot_table(index='producto', values='ventas', aggfunc='sum').sort_values('ventas', ascending=False).head()",
            "Todas las anteriores son correctas."
        ],
        "ans": 3,
        "exp": "Las tres opciones son sintácticamente correctas en Pandas: 1) groupby + sum + sort_values + head, 2) groupby + sum + sort_values con slicing, 3) pivot_table con aggfunc='sum'. Todas producen el mismo resultado: un Series/DataFrame con los productos y sus ventas totales ordenados de mayor a menor, mostrando solo los primeros 5."
    },

    // ==================== PYTHON - ETL ====================
    {
        "profe": false,
        "unit": "Python - ETL (Extract, Transform, Load)",
        "diff": "hard",
        "q": "Escribe un script Python que lea un archivo CSV de ventas, limpie los datos (elimine registros con campos vacíos y valores negativos), y cargue los datos limpios en una base de datos SQLite.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Archivo: ventas.csv</strong><br>
id,producto,cantidad,precio<br>
1,Teclado,5,20000<br>
2,Mouse,-3,-15000<br>
3,Monitor,8,250000<br>
4,,6,180000<br>
5,Teclado,0,0<br><br>
<strong style="color:#569cd6;">Tabla SQLite: ventas</strong><br>
id INT PRIMARY KEY, producto VARCHAR(50), cantidad INT, precio INT
</div>
<textarea style="width:100%;height:140px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu script Python aquí..."></textarea>
</div>`,
        "opts": [
            "import pandas as pd; import sqlite3; df = pd.read_csv('ventas.csv'); df_clean = df.dropna().query('cantidad > 0 and precio > 0'); conn = sqlite3.connect('ventas.db'); df_clean.to_sql('ventas', conn, if_exists='replace', index=False); conn.close();",
            "import csv; import sqlite3; conn = sqlite3.connect('ventas.db'); cursor = conn.cursor(); cursor.execute('CREATE TABLE IF NOT EXISTS ventas (id INT, producto VARCHAR(50), cantidad INT, precio INT)'); with open('ventas.csv', 'r') as f: reader = csv.DictReader(f); for row in reader: if row['producto'] and int(row['cantidad']) > 0 and int(row['precio']) > 0: cursor.execute('INSERT INTO ventas VALUES (?,?,?,?)', (row['id'], row['producto'], row['cantidad'], row['precio'])); conn.commit(); conn.close();",
            "import pandas as pd; df = pd.read_csv('ventas.csv'); df_clean = df[df['producto'].notna() & (df['cantidad'] > 0) & (df['precio'] > 0)]; df_clean.to_csv('ventas_clean.csv', index=False);",
            "Las opciones A y B son correctas (una usa Pandas, otra csv nativo)."
        ],
        "ans": 3,
        "exp": "La opción A (Pandas) es más concisa y eficiente para datasets grandes. La opción B (csv nativo) es más verbosa pero no requiere librerías externas. Ambas realizan: 1) Extracción desde CSV, 2) Limpieza (eliminar nulos y valores negativos), 3) Carga a SQLite. Ambas son válidas; la elección depende del contexto."
    },

    // ==================== JAVASCRIPT - MANIPULACIÓN DE ARRAYS ====================
    {
        "profe": false,
        "unit": "JavaScript - Arrays y Objetos",
        "diff": "medium",
        "q": "Dado el array de objetos 'usuarios', escribe una función que devuelva un array con los nombres de los usuarios mayores de edad (>= 18 años), ordenados alfabéticamente.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Array: usuarios</strong><br>
const usuarios = [<br>
  &nbsp;&nbsp;{ nombre: 'Ana', edad: 25 },<br>
  &nbsp;&nbsp;{ nombre: 'Luis', edad: 17 },<br>
  &nbsp;&nbsp;{ nombre: 'Carlos', edad: 30 },<br>
  &nbsp;&nbsp;{ nombre: 'Marta', edad: 16 },<br>
  &nbsp;&nbsp;{ nombre: 'Pedro', edad: 22 }<br>
];
</div>
<textarea style="width:100%;height:80px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu función JavaScript aquí..."></textarea>
</div>`,
        "opts": [
            "const mayores = usuarios.filter(u => u.edad >= 18).map(u => u.nombre).sort();",
            "const mayores = usuarios.sort((a,b) => a.nombre - b.nombre).filter(u => u.edad >= 18).map(u => u.nombre);",
            "const mayores = usuarios.map(u => u.nombre).filter(u => u.edad >= 18).sort();",
            "const mayores = usuarios.filter(u => u.edad > 18).map(u => u.nombre).sort();"
        ],
        "ans": 0,
        "exp": "El orden de operaciones es clave: 1) filter para mayores de edad (>= 18), 2) map para extraer nombres, 3) sort para ordenar alfabéticamente. La opción B falla porque sort compara objetos, no nombres. La opción C falla porque map pierde la información de edad. La opción D excluye a los de 18 años."
    },

    P('SQL - Comandos', 'easy',
    '¿Cuál es la diferencia entre DELETE y TRUNCATE?',
    ['DELETE es DML: puede usar WHERE y registra cada fila borrada; TRUNCATE vacía la tabla completa y no admite WHERE',
     'Son idénticos en todo',
     'TRUNCATE puede usar WHERE; DELETE no',
     'DELETE elimina la estructura de la tabla'],
    0,
    'Ambos quitan datos, pero DELETE es más lento y reversible dentro de una transacción; TRUNCATE es rápido y mantiene la estructura.',
    TABLA([
      ['Comando', 'Qué elimina', 'Tipo', 'Acepta WHERE'],
      ['DELETE', 'Filas (algunas o todas)', 'DML', 'Sí'],
      ['TRUNCATE', 'Todas las filas', 'DDL', 'No'],
      ['DROP', 'La tabla completa (estructura y datos)', 'DDL', 'No'],
    ])),

  P('SQL - Comandos', 'medium',
    '¿Cuál NO es un comando DML?',
    ['SELECT', 'INSERT', 'CREATE TABLE', 'UPDATE'],
    2,
    'DML = manipulación de datos (SELECT, INSERT, UPDATE, DELETE). CREATE TABLE es DDL (definición de estructura).'),

  P('SQL - Comandos', 'medium',
    '¿Qué sentencia confirma de forma permanente una transacción?',
    ['ROLLBACK', 'COMMIT', 'SAVEPOINT', 'LOCK'],
    1,
    'COMMIT guarda los cambios de la transacción; ROLLBACK los deshace.'),

  P('SQL - Consultas', 'medium',
    '¿Cuál es la diferencia entre WHERE y HAVING?',
    ['WHERE filtra filas antes de agrupar; HAVING filtra grupos después de GROUP BY',
     'HAVING filtra filas antes de agrupar; WHERE filtra grupos',
     'Son sinónimos',
     'HAVING solo funciona si no hay GROUP BY'],
    0,
    'Ejemplo: WHERE precio > 100 descarta filas; HAVING SUM(precio) > 1000 descarta grupos ya sumados.'),

  P('SQL - Consultas', 'medium',
    '¿Cuál es la diferencia entre UNION y UNION ALL?',
    ['UNION elimina duplicados; UNION ALL conserva todos los registros y es más rápido',
     'UNION ALL elimina duplicados; UNION los conserva',
     'UNION solo une tablas con distinto número de columnas',
     'Son idénticos en todos los casos'],
    0,
    'Como UNION debe comparar filas para quitar duplicados, es más costoso. Si sabes que no hay duplicados, usa UNION ALL.'),

  P('SQL - Consultas', 'medium',
    '¿Qué tipo de JOIN devuelve solo las filas que tienen coincidencia en ambas tablas?',
    ['LEFT JOIN', 'INNER JOIN', 'FULL OUTER JOIN', 'CROSS JOIN'],
    1,
    'INNER JOIN es la intersección. Los demás incluyen filas sin coincidencia.',
    TABLA([
      ['JOIN', 'Qué devuelve'],
      ['INNER', 'Solo filas con coincidencia en ambas tablas'],
      ['LEFT', 'Todas las de la izquierda, más coincidencias de la derecha (NULL si no hay)'],
      ['RIGHT', 'Todas las de la derecha, más coincidencias de la izquierda'],
      ['FULL OUTER', 'Todas las filas de ambas tablas'],
    ])),

  P('SQL - Consultas', 'medium',
    '¿Cuál es la diferencia entre EXISTS e IN en una subconsulta?',
    ['EXISTS evalúa si la subconsulta devuelve al menos una fila; IN compara el valor con la lista de resultados',
     'IN devuelve un booleano; EXISTS devuelve una lista',
     'Son equivalentes siempre, sin excepción',
     'EXISTS solo funciona con números'],
    0,
    'EXISTS suele ser más eficiente con subconsultas correlacionadas o grandes, porque se detiene al encontrar la primera coincidencia.'),

  P('SQL - Consultas', 'medium',
    '¿Cómo se verifica correctamente si un campo es NULL?',
    ['campo = NULL', 'campo IS NULL', 'campo == NULL', 'campo LIKE NULL'],
    1,
    'NULL representa "desconocido": cualquier comparación con = da resultado desconocido, por eso se usa IS NULL o IS NOT NULL.'),

  P('SQL - Consultas', 'medium',
    '¿Qué es una vista (VIEW) en SQL?',
    ['Una consulta guardada que se comporta como una tabla virtual',
     'Una copia física y permanente de una tabla',
     'Un índice clustered',
     'Un procedimiento que hace backup'],
    0,
    'La vista no guarda datos propios (en general): cada vez que se consulta, ejecuta la consulta que la define.'),

  P('SQL - Diseño', 'medium',
    '¿Qué exige la Primera Forma Normal (1FN)?',
    ['Que cada celda contenga un solo valor atómico y que cada fila sea identificable',
     'Que no existan dependencias transitivas',
     'Que todas las tablas tengan la misma cantidad de columnas',
     'Que no existan claves foráneas'],
    0,
    'Por ejemplo, una columna "telefonos" con "123, 456" viola la 1FN; debe separarse en filas o en otra tabla.'),

  P('SQL - Diseño', 'hard',
    '¿Qué busca eliminar la Tercera Forma Normal (3FN)?',
    ['Dependencias transitivas: atributos que dependen de otro atributo que no es clave',
     'Valores repetidos dentro de una misma celda',
     'Dependencias parciales de una clave compuesta',
     'Tablas sin nombre'],
    0,
    'Ejemplo: en Empleado(id, depto, ciudad_depto), la ciudad depende del depto y no de la clave; debe ir a una tabla Departamento.'),

  P('SQL - Diseño', 'medium',
    '¿Cuál es la diferencia entre PRIMARY KEY y UNIQUE?',
    ['PRIMARY KEY identifica cada fila de forma única y no admite NULL; UNIQUE evita duplicados, pero una tabla puede tener varias restricciones UNIQUE',
     'UNIQUE identifica la fila y PRIMARY KEY permite duplicados',
     'Son lo mismo y no tienen diferencias',
     'PRIMARY KEY puede repetir valores siempre que sean distintos tipos'],
    0,
    'Una tabla tiene una sola clave primaria, pero puede tener muchas restricciones UNIQUE.'),

  P('SQL - Diseño', 'medium',
    '¿Cuál es la diferencia entre un índice clustered y uno non-clustered?',
    ['El clustered ordena físicamente los datos (solo puede haber uno por tabla); el non-clustered es una estructura aparte que apunta a las filas',
     'El non-clustered ordena físicamente la tabla; el clustered es una estructura aparte',
     'Puede haber infinitos índices clustered por tabla',
     'Son lo mismo con distinto nombre'],
    0,
    'Como los datos solo pueden ordenarse de una forma física, la tabla solo puede tener un índice clustered.'),

  P('SQL - Tipos de datos', 'easy',
    '¿Cuál es la diferencia entre VARCHAR y CHAR?',
    ['VARCHAR ocupa solo lo necesario (longitud variable); CHAR reserva siempre la longitud fija definida',
     'CHAR es de longitud variable; VARCHAR es de longitud fija',
     'No hay diferencia',
     'CHAR solo puede guardar números'],
    0,
    'Ejemplo: CHAR(10) guarda "Ana" rellenando con espacios hasta 10; VARCHAR(10) guarda solo "Ana".'),

  P('SQL - Transacciones', 'hard',
    '¿Qué garantiza la propiedad de Aislamiento (Isolation) en ACID?',
    ['Que las transacciones concurrentes no interfieran de forma visible entre sí',
     'Que todas las operaciones se completen o ninguna',
     'Que los datos persistan tras una caída del servidor',
     'Que los datos cumplan todas las reglas de integridad definidas'],
    0,
    'ACID: Atomicidad (todo o nada), Consistencia (reglas válidas), Aislamiento (concurrencia controlada) y Durabilidad (persistencia).'),


    P('SQL - Programación en BD', 'medium', '¿Cuál es la diferencia entre un procedimiento almacenado y una función en SQL?',
        ['La función devuelve un valor y puede usarse dentro de consultas; el procedimiento puede no devolver valor y se invoca con CALL o EXEC', 'Son idénticos', 'La función no puede tener parámetros', 'El procedimiento solo lee datos'], 0,
        'Ambos guardan lógica en la base de datos.',
        TABLA([['Aspecto', 'Función', 'Procedimiento'], ['Devuelve valor', 'Sí, obligatorio', 'Opcional'], ['Uso', 'Dentro de SELECT', 'Con CALL / EXEC'], ['Puede modificar datos', 'Depende del motor (generalmente no)', 'Sí']])),
      P('SQL - Programación en BD', 'medium', '¿Qué es un trigger?',
        ['Código que se ejecuta automáticamente ante un evento (INSERT, UPDATE o DELETE) sobre una tabla', 'Un índice clustered', 'Una vista materializada', 'Un tipo de dato'], 0,
        'Ejemplo: registrar en una tabla de auditoría cada cambio de precio.'),
      P('SQL - Consultas avanzadas', 'medium', '¿Qué es una CTE (cláusula WITH)?',
        ['Una consulta temporal con nombre que existe solo durante la sentencia', 'Una tabla física permanente', 'Un índice', 'Un tipo de JOIN'], 0,
        'Mejora la legibilidad frente a subconsultas anidadas y permite recursión con WITH RECURSIVE.'),
      P('SQL - Consultas avanzadas', 'hard', '¿Cuál es la diferencia entre ROW_NUMBER, RANK y DENSE_RANK?',
        ['ROW_NUMBER numera sin repetir; RANK repite en empates y salta números; DENSE_RANK repite en empates sin saltar', 'Son idénticas', 'RANK no admite empates', 'DENSE_RANK siempre salta números'], 0,
        'Si dos filas empatan en el primer lugar: RANK da 1, 1, 3; DENSE_RANK da 1, 1, 2; ROW_NUMBER da 1, 2, 3.',
        TABLA([['Empate en 2 filas', 'ROW_NUMBER', 'RANK', 'DENSE_RANK'], ['Resultado', '1, 2, 3', '1, 1, 3', '1, 1, 2']])),
      P('SQL - Consultas avanzadas', 'medium', '¿Qué hace la cláusula CASE en SQL?',
        ['Aplica lógica condicional (si-entonces) dentro de una consulta', 'Crea tablas', 'Define claves primarias', 'Hace copias de seguridad'], 0,
        'Ejemplo: CASE WHEN edad >= 18 THEN "Adulto" ELSE "Menor" END.'),
      P('SQL - Consultas avanzadas', 'medium', '¿Qué devuelve COALESCE(NULL, \'A\', \'B\')?',
        ['NULL', "'A'", "'B'", "'AB'"], 1,
        'COALESCE devuelve el primer valor no nulo de la lista.'),
      P('SQL - Consultas básicas', 'medium', '¿Qué hace SELECT DISTINCT?',
        ['Elimina las filas duplicadas del resultado', 'Ordena alfabéticamente', 'Borra duplicados de la tabla', 'Cuenta las filas'], 0,
        'No modifica la tabla; solo afecta al resultado de la consulta.'),
      P('SQL - Consultas básicas', 'easy', 'En LIKE, ¿qué representa el símbolo %?',
        ['Cualquier cantidad de caracteres (incluso ninguno)', 'Exactamente un carácter', 'Un espacio en blanco', 'Un número'], 0,
        'LIKE "A%" encuentra "Ana", "Ale" y "A". Para exactamente un carácter se usa el guion bajo (_).'),
      P('SQL - Consultas básicas', 'medium', '¿Qué cláusula limita la cantidad de filas devueltas en MySQL o PostgreSQL?',
        ['LIMIT', 'TOP', 'MAX', 'CUT'], 0,
        'SQL Server usa TOP; el estándar moderno usa FETCH FIRST n ROWS ONLY.'),
    
      P('SQL - Restricciones', 'medium', '¿Qué hace ON DELETE CASCADE en una clave foránea?',
        ['Borra también las filas hijas al borrar la fila padre', 'Impide borrar la fila padre', 'Pone NULL en las filas hijas', 'No hace nada'], 0,
        'Es la opción de integridad referencial que borra en cadena.'),
      P('SQL - Restricciones', 'medium', '¿Para qué sirve una restricción CHECK?',
        ['Validar que los valores cumplan una condición, por ejemplo edad >= 0', 'Crear índices', 'Generar IDs automáticos', 'Ordenar la tabla'], 0,
        'Ejemplo: CHECK (precio > 0) impide guardar precios negativos.'),
      P('SQL - Permisos y transacciones', 'medium', '¿Qué comando otorga permisos a un usuario de la base de datos?',
        ['GRANT', 'REVOKE', 'COMMIT', 'CREATE'], 0,
        'GRANT otorga, REVOKE quita. Ambos son comandos DCL (control de datos).'),
      P('SQL - Permisos y transacciones', 'hard', '¿Qué nivel de aislamiento permite lecturas sucias (dirty reads)?',
        ['READ UNCOMMITTED', 'SERIALIZABLE', 'REPEATABLE READ', 'READ COMMITTED'], 0,
        'De menor a mayor aislamiento: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE.'),
      P('SQL - Permisos y transacciones', 'hard', '¿Qué es un deadlock (interbloqueo)?',
        ['Dos transacciones se bloquean esperándose mutuamente y ninguna avanza', 'Un error de sintaxis', 'Una copia de seguridad fallida', 'Un tipo de índice'], 0,
        'Los motores lo detectan y eligen una víctima que se revierte automáticamente.'),
    
      P('Diseño de bases de datos', 'medium', '¿Qué diferencia un RDBMS de un DBMS?',
        ['RDBMS es un DBMS basado en el modelo relacional con tablas y claves', 'Son lo mismo', 'DBMS es solo para archivos de texto', 'RDBMS no tiene consultas'], 0,
        'Todo RDBMS es un DBMS, pero no al revés (por ejemplo, una base de datos orientada a objetos o un sistema de archivos con índice).'),
      P('Diseño de bases de datos', 'medium', 'En la arquitectura ANSI de tres niveles, ¿qué nivel describe cómo se almacenan físicamente los datos?',
        ['Nivel interno', 'Nivel externo', 'Nivel conceptual', 'Nivel de aplicación'], 0,
        'Nivel externo: vistas de cada usuario. Conceptual: estructura lógica completa. Interno: almacenamiento físico.'),
      P('Diseño de bases de datos', 'medium', 'En un modelo entidad-relación, ¿cómo se representa una relación N:M al pasar a tablas?',
        ['Con una tabla intermedia que contiene las claves de ambas entidades', 'Con un campo extra en una sola tabla', 'Con una vista', 'No se puede representar'], 0,
        'Ejemplo: Estudiante y Curso se relacionan con la tabla Matricula(id_estudiante, id_curso).'),
      P('Diseño de bases de datos', 'hard', '¿Cuándo se desnormaliza intencionalmente una base de datos?',
        ['Para mejorar el rendimiento de lecturas, aceptando cierta redundancia', 'Para eliminar claves primarias', 'Para cumplir la 1FN', 'Nunca se hace'], 0,
        'Es común en data warehouses y reportes. Se hace con cuidado porque aumenta el riesgo de datos inconsistentes.'),
      P('Diseño de bases de datos', 'medium', '¿Cuál es la diferencia entre OLTP y OLAP?',
        ['OLTP maneja transacciones cotidianas con muchas escrituras pequeñas; OLAP analiza grandes volúmenes para reportes', 'OLAP es solo para escritura', 'Son iguales', 'OLTP es solo para backups'], 0,
        'Ejemplo: OLTP es la caja de una tienda; OLAP es el informe mensual de ventas por región.',
        TABLA([['Aspecto', 'OLTP', 'OLAP'], ['Operaciones', 'Muchas pequeñas', 'Pocas grandes (consultas)'], ['Modelo', 'Normalizado', 'Esquema estrella o copo de nieve'], ['Ejemplo', 'Sistema de ventas', 'Data warehouse']])),
      P('Diseño de bases de datos', 'medium', '¿Qué forma tiene un esquema estrella (star schema)?',
        ['Una tabla de hechos en el centro conectada a varias tablas de dimensiones', 'Todas las tablas conectadas en cadena', 'Una sola tabla gigante', 'Tablas sin claves'], 0,
        'La tabla de hechos guarda métricas (ventas, cantidad) y las dimensiones guardan contexto (tiempo, producto, cliente).'),
      P('Diseño de bases de datos', 'medium', 'En la arquitectura de bases de datos, ¿qué es una vista materializada?',
        ['Una vista cuyo resultado se guarda físicamente y se actualiza periódicamente', 'Una vista que nunca se puede consultar', 'Un índice de texto', 'Un trigger de auditoría'], 0,
        'Acelera consultas costosas, a cambio de datos que pueden estar un poco desactualizados.'),
      P('Diseño de bases de datos', 'easy', '¿Qué restricción impide que una columna tenga valores repetidos sin ser clave primaria?',
        ['UNIQUE', 'NOT NULL', 'DEFAULT', 'CHECK'], 0,
        'UNIQUE evita duplicados; NOT NULL evita vacíos; DEFAULT asigna un valor inicial; CHECK valida una condición.'),
      P('Diseño de bases de datos', 'medium', '¿Qué es la desnormalización?',
        ['Agregar redundancia a propósito para acelerar lecturas', 'Eliminar todas las tablas', 'Quitar las claves foráneas', 'Ordenar las filas'], 0,
        'Es el opuesto de normalizar: se acepta repetir datos para evitar JOIN costosos.'),
        
]

export default preguntas_bd_estructurados;