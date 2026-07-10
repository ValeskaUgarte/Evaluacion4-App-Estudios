const preguntas_backend = [


// ============================================================
// BLOQUE: BACKEND - JAVA, PYTHON, NODE.JS, PHP, C#, ETC.
// ============================================================



    // ==================== JAVA - BÁSICO ====================
    {
        "profe": false,
        "unit": "Java - Sintaxis Básica",
        "diff": "easy",
        "q": "¿Cuál es la palabra clave para definir una clase en Java?",
        "opts": [
            "class",
            "Class",
            "public",
            "interface"
        ],
        "ans": 0,
        "exp": "La palabra clave 'class' se usa para definir una clase en Java. 'public' es un modificador de acceso. 'interface' se usa para interfaces."
    },
    {
        "profe": false,
        "unit": "Java - Tipos de Datos",
        "diff": "easy",
        "q": "¿Cuál de los siguientes NO es un tipo de dato primitivo en Java?",
        "opts": [
            "String",
            "int",
            "boolean",
            "char"
        ],
        "ans": 0,
        "exp": "String es una clase (no primitivo). int, boolean, char, byte, short, long, float, double son primitivos."
    },
    {
        "profe": false,
        "unit": "Java - Estructuras de Control",
        "diff": "medium",
        "q": "¿Cuál es la salida del siguiente código? int x = 5; if(x > 3) System.out.println('A'); else if(x > 7) System.out.println('B'); else System.out.println('C');",
        "opts": [
            "A",
            "B",
            "C",
            "AC"
        ],
        "ans": 0,
        "exp": "x = 5, x > 3 es true, imprime 'A'. El else if no se evalúa porque la primera condición ya fue verdadera."
    },
    {
        "profe": false,
        "unit": "Java - Bucle For",
        "diff": "easy",
        "q": "¿Cuántas veces se ejecuta el siguiente bucle? for(int i=0; i<5; i++) { System.out.println('Hola'); }",
        "opts": [
            "5",
            "4",
            "6",
            "0"
        ],
        "ans": 0,
        "exp": "El bucle se ejecuta desde i=0 hasta i=4 (cuando i=5, la condición falla). Total: 5 veces."
    },
    {
        "profe": false,
        "unit": "Java - Arrays",
        "diff": "medium",
        "q": "¿Cuál es la forma correcta de declarar e inicializar un array de enteros con valores [1,2,3]?",
        "opts": [
            "int[] arr = {1, 2, 3};",
            "int arr[] = new int{1, 2, 3};",
            "int[] arr = new int[3]{1, 2, 3};",
            "int arr = {1, 2, 3};"
        ],
        "ans": 0,
        "exp": "La sintaxis correcta es: int[] arr = {1, 2, 3}; o int[] arr = new int[]{1, 2, 3};"
    },

    // ==================== JAVA - ORIENTADO A OBJETOS ====================
    {
        "profe": false,
        "unit": "Java - POO",
        "diff": "medium",
        "q": "¿Qué palabra clave se usa en Java para la herencia?",
        "opts": [
            "extends",
            "implements",
            "inherits",
            "super"
        ],
        "ans": 0,
        "exp": "extends se usa para herencia de clases. implements se usa para interfaces. super se usa para referirse a la clase padre."
    },
    {
        "profe": false,
        "unit": "Java - POO",
        "diff": "hard",
        "q": "¿Cuál de los siguientes NO es un principio de la Programación Orientada a Objetos?",
        "opts": [
            "Encapsulamiento",
            "Herencia",
            "Polimorfismo",
            "Persistencia"
        ],
        "ans": 3,
        "exp": "Los cuatro principios de la POO son: Encapsulamiento, Herencia, Polimorfismo y Abstracción. Persistencia no es un principio POO."
    },
    {
        "profe": false,
        "unit": "Java - POO",
        "diff": "hard",
        "q": "¿Qué es el polimorfismo en Java?",
        "opts": [
            "Capacidad de un objeto de tomar muchas formas",
            "Capacidad de ocultar datos",
            "Capacidad de heredar propiedades",
            "Capacidad de crear objetos"
        ],
        "ans": 0,
        "exp": "Polimorfismo permite que un objeto pueda comportarse como su clase padre o implementar múltiples interfaces. Ej: Animal a = new Perro();"
    },

    // ==================== JAVA - COLECCIONES ====================
    {
        "profe": false,
        "unit": "Java - Colecciones",
        "diff": "medium",
        "q": "¿Cuál es la diferencia entre ArrayList y LinkedList en Java?",
        "opts": [
            "ArrayList es más rápido para acceso aleatorio, LinkedList es mejor para inserciones/eliminaciones",
            "LinkedList es más rápido para acceso aleatorio",
            "No hay diferencia",
            "ArrayList no permite elementos duplicados"
        ],
        "ans": 0,
        "exp": "ArrayList usa un array interno → acceso O(1), inserciones O(n). LinkedList usa nodos → acceso O(n), inserciones O(1) en extremos."
    },
    {
        "profe": false,
        "unit": "Java - Colecciones",
        "diff": "hard",
        "q": "¿Qué clase de Java implementa una estructura de datos clave-valor?",
        "opts": [
            "HashMap",
            "ArrayList",
            "HashSet",
            "LinkedList"
        ],
        "ans": 0,
        "exp": "HashMap implementa Map (clave-valor). ArrayList y LinkedList son listas. HashSet es un conjunto (sin duplicados)."
    },
    {
        "profe": false,
        "unit": "Java - Colecciones",
        "diff": "medium",
        "q": "¿Qué diferencia hay entre Set y List en Java?",
        "opts": [
            "Set no permite elementos duplicados, List sí",
            "List no permite duplicados, Set sí",
            "Ambos permiten duplicados",
            "Ambos no permiten duplicados"
        ],
        "ans": 0,
        "exp": "Set (ej. HashSet) no permite duplicados. List (ej. ArrayList) permite duplicados y mantiene el orden de inserción."
    },

    // ==================== JAVA - EXCEPCIONES ====================
    {
        "profe": false,
        "unit": "Java - Manejo de Excepciones",
        "diff": "medium",
        "q": "¿Qué palabra clave se usa para lanzar una excepción explícitamente en Java?",
        "opts": [
            "throw",
            "throws",
            "try",
            "catch"
        ],
        "ans": 0,
        "exp": "throw se usa para lanzar una excepción manualmente. throws se usa en la firma del método para declarar excepciones."
    },
    {
        "profe": false,
        "unit": "Java - Excepciones",
        "diff": "hard",
        "q": "¿Cuál es la diferencia entre checked y unchecked exceptions en Java?",
        "opts": [
            "Checked se verifican en compilación, unchecked en tiempo de ejecución",
            "Unchecked se verifican en compilación, checked en tiempo de ejecución",
            "Ambos se verifican en compilación",
            "Ambos se verifican en tiempo de ejecución"
        ],
        "ans": 0,
        "exp": "Checked exceptions (ej. IOException) deben manejarse con try/catch o declararse con throws. Unchecked (ej. NullPointerException) son RuntimeExceptions y no requieren manejo forzoso."
    },

    // ==================== JAVA - LAMBDA ====================
    {
        "profe": false,
        "unit": "Java - Lambdas y Streams",
        "diff": "hard",
        "q": "¿Qué es una expresión lambda en Java?",
        "opts": [
            "Una función anónima que permite programación funcional",
            "Un tipo de clase interna",
            "Un modificador de acceso",
            "Un tipo de variable"
        ],
        "ans": 0,
        "exp": "Las lambdas (→) son funciones anónimas que permiten programación funcional en Java. Ej: (x, y) -> x + y"
    },
    {
        "profe": false,
        "unit": "Java - Lambdas",
        "diff": "hard",
        "q": "¿Cuál es el resultado de: List<Integer> nums = Arrays.asList(1,2,3,4); nums.stream().filter(n -> n % 2 == 0).count()?",
        "opts": [
            "2",
            "3",
            "4",
            "1"
        ],
        "ans": 0,
        "exp": "filter(n -> n % 2 == 0) filtra los pares: 2 y 4. count() cuenta los elementos filtrados → 2."
    },

    // ==================== SPRING BOOT ====================
    {
        "profe": false,
        "unit": "Spring Boot - Anotaciones",
        "diff": "easy",
        "q": "¿Qué anotación se usa para marcar una clase como un controlador REST en Spring Boot?",
        "opts": [
            "@RestController",
            "@Controller",
            "@RequestMapping",
            "@Component"
        ],
        "ans": 0,
        "exp": "@RestController es la combinación de @Controller + @ResponseBody. Se usa para APIs REST. @Controller es para MVC tradicional."
    },
    {
        "profe": false,
        "unit": "Spring Boot - Inyección",
        "diff": "medium",
        "q": "¿Qué anotación se usa para inyectar una dependencia en Spring Boot?",
        "opts": [
            "@Autowired",
            "@Inject",
            "@Resource",
            "Todas las anteriores"
        ],
        "ans": 3,
        "exp": "@Autowired (Spring), @Inject (Jakarta), @Resource (Java EE) son válidas para inyección de dependencias en Spring Boot."
    },
    {
        "profe": false,
        "unit": "Spring Boot - JPA",
        "diff": "hard",
        "q": "¿Qué anotación de JPA se usa para marcar una clase como entidad que se mapea a una tabla de base de datos?",
        "opts": [
            "@Entity",
            "@Table",
            "@Column",
            "@Id"
        ],
        "ans": 0,
        "exp": "@Entity marca una clase como entidad JPA. @Table define el nombre de la tabla. @Column define una columna. @Id marca la clave primaria."
    },

    // ==================== PYTHON - BÁSICO ====================
    {
        "profe": false,
        "unit": "Python - Sintaxis Básica",
        "diff": "easy",
        "q": "¿Cómo se define una función en Python?",
        "opts": [
            "def mi_funcion():",
            "function mi_funcion():",
            "def mi_funcion:",
            "function mi_funcion ="
        ],
        "ans": 0,
        "exp": "La palabra clave 'def' se usa para definir funciones. Ej: def saludar(): print('Hola')"
    },
    {
        "profe": false,
        "unit": "Python - Estructuras de Control",
        "diff": "easy",
        "q": "¿Cuál es la salida del siguiente código? x = 5; if x > 3: print('A'); elif x > 7: print('B'); else: print('C')",
        "opts": [
            "A",
            "B",
            "C",
            "Error"
        ],
        "ans": 0,
        "exp": "x = 5, la condición x > 3 es verdadera, imprime 'A'. Python usa elif en lugar de else if."
    },
    {
        "profe": false,
        "unit": "Python - Listas",
        "diff": "easy",
        "q": "¿Cómo se accede al último elemento de una lista en Python?",
        "opts": [
            "lista[-1]",
            "lista[ultimo]",
            "lista[len(lista)]",
            "lista[0]"
        ],
        "ans": 0,
        "exp": "Los índices negativos en Python acceden desde el final. lista[-1] es el último, lista[-2] el penúltimo, etc."
    },
    {
        "profe": false,
        "unit": "Python - Diccionarios",
        "diff": "medium",
        "q": "¿Qué método se usa para obtener el valor de una clave en un diccionario sin lanzar error si la clave no existe?",
        "opts": [
            "get()",
            "pop()",
            "items()",
            "keys()"
        ],
        "ans": 0,
        "exp": "dict.get('clave', default) retorna default si la clave no existe. pop() elimina la clave. items() retorna pares clave-valor."
    },

    // ==================== PYTHON - ORIENTADO A OBJETOS ====================
    {
        "profe": false,
        "unit": "Python - POO",
        "diff": "medium",
        "q": "¿Cómo se define una clase en Python?",
        "opts": [
            "class MiClase:",
            "class MiClase():",
            "class MiClase {}",
            "Class MiClase:"
        ],
        "ans": 0,
        "exp": "La sintaxis correcta es 'class MiClase:' (con 'C' mayúscula por convención, pero no es obligatorio)."
    },
    {
        "profe": false,
        "unit": "Python - POO",
        "diff": "hard",
        "q": "¿Qué método de Python se usa como constructor de una clase?",
        "opts": [
            "__init__",
            "constructor",
            "__new__",
            "init"
        ],
        "ans": 0,
        "exp": "__init__ es el método constructor en Python. Se ejecuta cuando se crea una instancia. __new__ es el método de creación real."
    },
    {
        "profe": false,
        "unit": "Python - Herencia",
        "diff": "medium",
        "q": "¿Cómo se indica que una clase hereda de otra en Python?",
        "opts": [
            "class Hijo(Padre):",
            "class Hijo extends Padre:",
            "class Hijo: Padre",
            "inherit(Hijo, Padre)"
        ],
        "ans": 0,
        "exp": "La herencia se indica con paréntesis: class Hijo(Padre):. Python soporta herencia múltiple: class Hijo(Padre1, Padre2):"
    },

    // ==================== PYTHON - FUNCIONES ====================
    {
        "profe": false,
        "unit": "Python - Funciones",
        "diff": "easy",
        "q": "¿Qué palabra clave se usa para retornar un valor de una función en Python?",
        "opts": [
            "return",
            "ret",
            "return",
            "output"
        ],
        "ans": 0,
        "exp": "La palabra clave 'return' se usa para retornar un valor. Si no se usa, la función retorna None."
    },
    {
        "profe": false,
        "unit": "Python - Funciones",
        "diff": "hard",
        "q": "¿Qué son los 'args' y 'kwargs' en Python?",
        "opts": [
            "*args es para argumentos posicionales variables, **kwargs es para argumentos con nombre",
            "*args es para argumentos con nombre, **kwargs es para argumentos posicionales",
            "Son lo mismo",
            "No se usan en Python"
        ],
        "ans": 0,
        "exp": "*args captura argumentos posicionales en una tupla. **kwargs captura argumentos con nombre en un diccionario."
    },

    // ==================== PYTHON - MANEJO DE ARCHIVOS ====================
    {
        "profe": false,
        "unit": "Python - Archivos",
        "diff": "medium",
        "q": "¿Qué función se usa para abrir un archivo en Python?",
        "opts": [
            "open()",
            "file()",
            "read()",
            "open_file()"
        ],
        "ans": 0,
        "exp": "open('archivo.txt', 'r') abre un archivo. 'r' lectura, 'w' escritura, 'a' append, 'rb' binario."
    },
    {
        "profe": false,
        "unit": "Python - Context Managers",
        "diff": "hard",
        "q": "¿Qué palabra clave se usa para manejar recursos como archivos de forma segura en Python?",
        "opts": [
            "with",
            "using",
            "try",
            "async"
        ],
        "ans": 0,
        "exp": "with open('archivo.txt') as f: garantiza que el archivo se cierre automáticamente al salir del bloque."
    },

    // ==================== FLASK - PYTHON ====================
    {
        "profe": false,
        "unit": "Flask - Rutas",
        "diff": "easy",
        "q": "¿Qué decorador se usa en Flask para definir una ruta?",
        "opts": [
            "@app.route()",
            "@app.get()",
            "@app.post()",
            "@route()"
        ],
        "ans": 0,
        "exp": "@app.route('/') es el decorador principal para definir rutas en Flask. @app.get y @app.post son atajos para métodos específicos."
    },
    {
        "profe": false,
        "unit": "Flask - Variables",
        "diff": "medium",
        "q": "¿Cómo se recibe un parámetro de URL en Flask?",
        "opts": [
            "@app.route('/user/<name>') def user(name):",
            "@app.route('/user/{name}') def user(name):",
            "@app.route('/user/[name]') def user(name):",
            "@app.route('/user/name') def user():"
        ],
        "ans": 0,
        "exp": "La sintaxis correcta es <nombre_variable>. Ej: @app.route('/post/<int:id>') def post(id):"
    },

    // ==================== NODE.JS - BÁSICO ====================
    {
        "profe": false,
        "unit": "Node.js - Módulos",
        "diff": "easy",
        "q": "¿Qué palabra clave se usa para importar un módulo en Node.js (CommonJS)?",
        "opts": [
            "require()",
            "import",
            "include",
            "use"
        ],
        "ans": 0,
        "exp": "require('modulo') es la forma CommonJS. import es para ES Modules (con 'type': 'module' en package.json)."
    },
    {
        "profe": false,
        "unit": "Node.js - Módulos",
        "diff": "easy",
        "q": "¿Qué palabra clave se usa para exportar un módulo en Node.js (CommonJS)?",
        "opts": [
            "module.exports",
            "export",
            "exports",
            "module.export"
        ],
        "ans": 0,
        "exp": "module.exports = valor o exports.miFuncion = funcion. module.exports es el objeto que se retorna al hacer require()."
    },

    // ==================== NODE.JS - EXPRESS ====================
    {
        "profe": false,
        "unit": "Express - Rutas",
        "diff": "easy",
        "q": "¿Cómo se define una ruta GET en Express.js?",
        "opts": [
            "app.get('/ruta', (req, res) => {})",
            "app.route('/ruta', (req, res) => {})",
            "app.post('/ruta', (req, res) => {})",
            "app.use('/ruta', (req, res) => {})"
        ],
        "ans": 0,
        "exp": "app.get() para GET, app.post() para POST, app.put() para PUT, app.delete() para DELETE. app.use() es para middleware."
    },
    {
        "profe": false,
        "unit": "Express - Middleware",
        "diff": "hard",
        "q": "¿Qué función se usa para pasar al siguiente middleware en Express?",
        "opts": [
            "next()",
            "next",
            "continue()",
            "pass()"
        ],
        "ans": 0,
        "exp": "next() es la función callback que se pasa a los middleware. Llamarla continúa con la cadena de middleware."
    },
    {
        "profe": false,
        "unit": "Express - Body Parser",
        "diff": "medium",
        "q": "¿Qué middleware se usa para parsear JSON en Express?",
        "opts": [
            "express.json()",
            "body-parser.json()",
            "express.urlencoded()",
            "app.use(JSON)"
        ],
        "ans": 0,
        "exp": "express.json() está incluido en Express desde v4.16. Para versiones anteriores se usaba body-parser. express.urlencoded() es para formularios."
    },

    // ==================== NODE.JS - ASINCRONÍA ====================
    {
        "profe": false,
        "unit": "Node.js - Asincronía",
        "diff": "hard",
        "q": "¿Qué es el Event Loop en Node.js?",
        "opts": [
            "Un mecanismo que maneja operaciones asíncronas y callbacks",
            "Una función que se ejecuta en paralelo",
            "Un tipo de bucle for",
            "Una variable global"
        ],
        "ans": 0,
        "exp": "El Event Loop es el corazón de Node.js. Permite que Node.js maneje operaciones asíncronas sin bloquear el hilo principal (single-threaded)."
    },

    // ==================== PHP - BÁSICO ====================
    {
        "profe": false,
        "unit": "PHP - Sintaxis Básica",
        "diff": "easy",
        "q": "¿Qué símbolo se usa para las variables en PHP?",
        "opts": [
            "$",
            "@",
            "#",
            "&"
        ],
        "ans": 0,
        "exp": "Las variables en PHP comienzan con $. Ej: $nombre = 'Juan';"
    },
    {
        "profe": false,
        "unit": "PHP - Sintaxis",
        "diff": "easy",
        "q": "¿Cómo se imprime algo en PHP?",
        "opts": [
            "echo o print",
            "console.log()",
            "System.out.println()",
            "print()"
        ],
        "ans": 0,
        "exp": "echo y print son las funciones para imprimir. Ej: echo 'Hola Mundo';"
    },
    {
        "profe": false,
        "unit": "PHP - Arrays",
        "diff": "medium",
        "q": "¿Cómo se define un array asociativo en PHP?",
        "opts": [
            "$arr = ['clave' => 'valor'];",
            "$arr = ['clave', 'valor'];",
            "$arr = array('clave', 'valor');",
            "$arr = {'clave': 'valor'};"
        ],
        "ans": 0,
        "exp": "Los arrays asociativos usan => entre clave y valor. Ej: $persona = ['nombre' => 'Ana', 'edad' => 25];"
    },

    // ==================== PHP - ORIENTADO A OBJETOS ====================
    {
        "profe": false,
        "unit": "PHP - POO",
        "diff": "medium",
        "q": "¿Qué palabra clave se usa para definir una clase en PHP?",
        "opts": [
            "class",
            "Class",
            "public",
            "object"
        ],
        "ans": 0,
        "exp": "class define una clase. Ej: class Persona { }"
    },
    {
        "profe": false,
        "unit": "PHP - POO",
        "diff": "hard",
        "q": "¿Qué palabra clave se usa para referirse a la instancia actual en PHP?",
        "opts": [
            "$this",
            "self",
            "parent",
            "this"
        ],
        "ans": 0,
        "exp": "$this se refiere al objeto actual. self se usa para miembros estáticos. parent se usa para la clase padre."
    },

    // ==================== PHP - LARAVEL ====================
    {
        "profe": false,
        "unit": "Laravel - ORM Eloquent",
        "diff": "hard",
        "q": "¿Qué es Eloquent en Laravel?",
        "opts": [
            "Un ORM (Object-Relational Mapping) para bases de datos",
            "Un motor de plantillas",
            "Un sistema de autenticación",
            "Un paquete de testing"
        ],
        "ans": 0,
        "exp": "Eloquent es el ORM de Laravel que permite interactuar con la base de datos usando modelos. Cada modelo se mapea a una tabla."
    },
    {
        "profe": false,
        "unit": "Laravel - Rutas",
        "diff": "medium",
        "q": "¿Qué archivo se usa para definir rutas en Laravel?",
        "opts": [
            "routes/web.php",
            "routes.php",
            "app/routes.php",
            "config/routes.php"
        ],
        "ans": 0,
        "exp": "routes/web.php para rutas web, routes/api.php para APIs. Laravel 8+ usa Route::get() con closures o controladores."
    },

    // ==================== C# - BÁSICO ====================
    {
        "profe": false,
        "unit": "C# - Sintaxis Básica",
        "diff": "easy",
        "q": "¿Cómo se define una clase en C#?",
        "opts": [
            "class MiClase { }",
            "public class MiClase { }",
            "class MiClase(): { }",
            "def class MiClase:"
        ],
        "ans": 0,
        "exp": "La sintaxis es class MiClase { }. public es opcional. No se usan dos puntos como en Python."
    },
    {
        "profe": false,
        "unit": "C# - Tipos de Datos",
        "diff": "easy",
        "q": "¿Cuál es el tipo de dato para números enteros en C#?",
        "opts": [
            "int",
            "Integer",
            "number",
            "Int32"
        ],
        "ans": 0,
        "exp": "int es el alias de Int32 en C#. Otros tipos: long (Int64), float, double, decimal."
    },
    {
        "profe": false,
        "unit": "C# - Estructuras",
        "diff": "medium",
        "q": "¿Qué palabra clave se usa para la herencia en C#?",
        "opts": [
            ":",
            "extends",
            "inherits",
            "implements"
        ],
        "ans": 0,
        "exp": "C# usa dos puntos ':' para herencia. Ej: class Perro : Animal { }"
    },

    // ==================== C# - ASP.NET ====================
    {
        "profe": false,
        "unit": "ASP.NET - Web API",
        "diff": "hard",
        "q": "¿Qué atributo se usa para definir un controlador API en ASP.NET Core?",
        "opts": [
            "[ApiController]",
            "[Controller]",
            "[Route]",
            "[HttpGet]"
        ],
        "ans": 0,
        "exp": "[ApiController] marca un controlador como API (habilita validación automática, binding, etc.). [Route] define la ruta base. [HttpGet] define un método GET."
    },
    {
        "profe": false,
        "unit": "ASP.NET - Entity Framework",
        "diff": "hard",
        "q": "¿Qué es Entity Framework en ASP.NET?",
        "opts": [
            "Un ORM para trabajar con bases de datos en .NET",
            "Un motor de plantillas",
            "Un sistema de autenticación",
            "Un framework de testing"
        ],
        "ans": 0,
        "exp": "Entity Framework (EF) es el ORM de Microsoft. Permite mapear clases a tablas y hacer consultas con LINQ."
    },

    // ==================== GOLANG - BÁSICO ====================
    {
        "profe": false,
        "unit": "Go - Sintaxis Básica",
        "diff": "medium",
        "q": "¿Cómo se define una variable en Go?",
        "opts": [
            "var nombre string",
            "let nombre string",
            "nombre := string",
            "string nombre"
        ],
        "ans": 0,
        "exp": "Go usa var nombre tipo o nombre := valor (inferencia de tipo). Ej: var nombre string = 'Juan' o nombre := 'Juan'"
    },
    {
        "profe": false,
        "unit": "Go - Funciones",
        "diff": "hard",
        "q": "¿Cómo se declara una función que retorna múltiples valores en Go?",
        "opts": [
            "func miFuncion() (int, error)",
            "func miFuncion() int, error",
            "def miFuncion() (int, error)",
            "function miFuncion() (int, error)"
        ],
        "ans": 0,
        "exp": "Go soporta múltiples retornos. Ej: func dividir(a, b int) (int, error) { if b == 0 { return 0, errors.New('...') } return a/b, nil }"
    },

    // ==================== RUST - BÁSICO ====================
    {
        "profe": false,
        "unit": "Rust - Sintaxis Básica",
        "diff": "hard",
        "q": "¿Qué palabra clave se usa para declarar una variable inmutable en Rust?",
        "opts": [
            "let",
            "const",
            "var",
            "mut"
        ],
        "ans": 0,
        "exp": "let declara variables inmutables por defecto. let mut declara mutables. const es para constantes en tiempo de compilación."
    },
    {
        "profe": false,
        "unit": "Rust - Ownership",
        "diff": "hard",
        "q": "¿Qué es el 'ownership' en Rust?",
        "opts": [
            "Un sistema que garantiza memoria segura sin garbage collector",
            "Un tipo de variable",
            "Un sistema de herencia",
            "Una función de la librería estándar"
        ],
        "ans": 0,
        "exp": "El ownership de Rust es un sistema de reglas que el compilador verifica para garantizar seguridad de memoria sin necesidad de GC. Cada valor tiene un 'dueño'."
    },

    // ==================== BASE DE DATOS - SQL ====================
    {
        "profe": false,
        "unit": "SQL - Consultas Básicas",
        "diff": "easy",
        "q": "¿Qué comando SQL se usa para seleccionar datos?",
        "opts": [
            "SELECT",
            "GET",
            "FETCH",
            "READ"
        ],
        "ans": 0,
        "exp": "SELECT es el comando principal para consultar datos. Ej: SELECT * FROM tabla WHERE condicion"
    },
    {
        "profe": false,
        "unit": "SQL - Joins",
        "diff": "medium",
        "q": "¿Qué tipo de JOIN devuelve solo los registros que coinciden en ambas tablas?",
        "opts": [
            "INNER JOIN",
            "LEFT JOIN",
            "RIGHT JOIN",
            "FULL OUTER JOIN"
        ],
        "ans": 0,
        "exp": "INNER JOIN devuelve solo registros que coinciden en ambas tablas. LEFT JOIN devuelve todos los de la izquierda + coincidencias."
    },
    {
        "profe": false,
        "unit": "SQL - Agrupación",
        "diff": "hard",
        "q": "¿Qué cláusula se usa para filtrar después de GROUP BY?",
        "opts": [
            "HAVING",
            "WHERE",
            "FILTER",
            "CONDITION"
        ],
        "ans": 0,
        "exp": "HAVING se usa para filtrar resultados de GROUP BY (agregaciones). WHERE filtra antes de agrupar. Ej: GROUP BY depto HAVING COUNT(*) > 5"
    },
    {
        "profe": false,
        "unit": "SQL - Subconsultas",
        "diff": "hard",
        "q": "¿Qué es una subconsulta correlacionada en SQL?",
        "opts": [
            "Una subconsulta que referencia la tabla de la consulta externa",
            "Una subconsulta que no referencia la externa",
            "Una subconsulta que usa JOIN",
            "Una subconsulta con UNION"
        ],
        "ans": 0,
        "exp": "Una subconsulta correlacionada depende de la consulta externa. Se ejecuta por cada fila de la consulta principal."
    },

    // ==================== BASE DE DATOS - NOSQL ====================
    {
        "profe": false,
        "unit": "MongoDB - Consultas",
        "diff": "medium",
        "q": "¿Qué operador de MongoDB se usa para comparar mayor que?",
        "opts": [
            "$gt",
            "$gte",
            "$lt",
            "$lte"
        ],
        "ans": 0,
        "exp": "$gt = greater than (>), $gte = greater than or equal (>=), $lt = less than (<), $lte = less than or equal (<=)."
    },
    {
        "profe": false,
        "unit": "MongoDB - Agregación",
        "diff": "hard",
        "q": "¿Qué etapa de agregación se usa para agrupar documentos en MongoDB?",
        "opts": [
            "$group",
            "$match",
            "$project",
            "$sort"
        ],
        "ans": 0,
        "exp": "$group agrupa documentos. $match filtra. $project selecciona campos. $sort ordena."
    },

    // ==================== API REST ====================
    {
        "profe": false,
        "unit": "API REST - Principios",
        "diff": "easy",
        "q": "¿Qué significa REST?",
        "opts": [
            "Representational State Transfer",
            "Remote State Transfer",
            "Representational System Transfer",
            "Remote System Transfer"
        ],
        "ans": 0,
        "exp": "REST = Representational State Transfer. Es un estilo arquitectónico para APIs. Se basa en recursos, HTTP verbs y stateless."
    },
    {
        "profe": false,
        "unit": "API REST - Métodos",
        "diff": "easy",
        "q": "¿Qué método HTTP se usa para crear un recurso en una API REST?",
        "opts": [
            "POST",
            "GET",
            "PUT",
            "DELETE"
        ],
        "ans": 0,
        "exp": "POST crea recursos. GET obtiene. PUT actualiza (o crea si no existe). DELETE elimina."
    },
    {
        "profe": false,
        "unit": "API REST - Status Codes",
        "diff": "medium",
        "q": "¿Qué código HTTP significa 'Created'?",
        "opts": [
            "201",
            "200",
            "202",
            "204"
        ],
        "ans": 0,
        "exp": "201 Created se usa para POST exitoso. 200 OK para GET/PUT. 202 Accepted para procesamiento asíncrono. 204 No Content para DELETE exitoso."
    },

    // ==================== AUTENTICACIÓN Y SEGURIDAD ====================
    {
        "profe": false,
        "unit": "JWT - Autenticación",
        "diff": "hard",
        "q": "¿Qué significa JWT?",
        "opts": [
            "JSON Web Token",
            "JavaScript Web Token",
            "Java Web Token",
            "JSON Web Transport"
        ],
        "ans": 0,
        "exp": "JWT = JSON Web Token. Es un estándar para autenticación stateless. Contiene header, payload y signature."
    },
    {
        "profe": false,
        "unit": "OAuth2 - Autenticación",
        "diff": "hard",
        "q": "¿Qué es OAuth2?",
        "opts": [
            "Un framework de autorización que permite acceso delegado",
            "Un tipo de token JWT",
            "Un método de encriptación",
            "Un protocolo de bases de datos"
        ],
        "ans": 0,
        "exp": "OAuth2 es un framework de autorización que permite a aplicaciones de terceros acceder a recursos con permiso del usuario. No es un protocolo de autenticación, es de autorización."
    },

    // ==================== ARQUITECTURA Y PATRONES ====================
    {
        "profe": false,
        "unit": "Arquitectura - MVC",
        "diff": "medium",
        "q": "¿Qué significa MVC en desarrollo backend?",
        "opts": [
            "Model-View-Controller",
            "Model-View-Component",
            "Module-View-Controller",
            "Model-View-Code"
        ],
        "ans": 0,
        "exp": "MVC es un patrón arquitectónico: Model (datos), View (presentación), Controller (lógica). Se usa en Spring, Django, ASP.NET, etc."
    },
    {
        "profe": false,
        "unit": "Arquitectura - Microservicios",
        "diff": "hard",
        "q": "¿Qué caracteriza a una arquitectura de microservicios?",
        "opts": [
            "Servicios pequeños, independientes y desplegables por separado",
            "Un único bloque monolítico",
            "Servicios que comparten la misma base de datos",
            "Todos los servicios se comunican sincrónicamente"
        ],
        "ans": 0,
        "exp": "Los microservicios son servicios pequeños, independientes, cada uno con su propia base de datos, desplegables separadamente y comunicándose asíncronamente."
    },

    // ==================== DOCKER - BACKEND ====================
    {
        "profe": false,
        "unit": "Docker - Contenedores",
        "diff": "medium",
        "q": "¿Qué comando se usa para ejecutar un contenedor Docker?",
        "opts": [
            "docker run",
            "docker start",
            "docker build",
            "docker exec"
        ],
        "ans": 0,
        "exp": "docker run crea y ejecuta un contenedor. docker start inicia un contenedor detenido. docker build construye una imagen. docker exec ejecuta comandos en un contenedor en ejecución."
    },

    // ==================== CACHE Y RENDIMIENTO ====================
    {
        "profe": false,
        "unit": "Redis - Caching",
        "diff": "hard",
        "q": "¿Qué es Redis y para qué se usa en backend?",
        "opts": [
            "Una base de datos en memoria, usada para cache y colas",
            "Una base de datos relacional",
            "Un framework de testing",
            "Un sistema de logs"
        ],
        "ans": 0,
        "exp": "Redis es un almacén de estructura de datos en memoria. Se usa para cache, colas de mensajes, sesiones, rate limiting, etc."
    },

    // ==================== MENSAJERÍA ====================
    {
        "profe": false,
        "unit": "RabbitMQ - Mensajería",
        "diff": "hard",
        "q": "¿Qué patrón de mensajería usa RabbitMQ?",
        "opts": [
            "AMQP (Advanced Message Queuing Protocol)",
            "MQTT",
            "WebSockets",
            "gRPC"
        ],
        "ans": 0,
        "exp": "RabbitMQ implementa AMQP, un protocolo para colas de mensajes. Permite comunicación asíncrona entre servicios."
    },

    // ==================== LOGGING Y MONITOREO ====================
    {
        "profe": false,
        "unit": "Logging - Monitoreo",
        "diff": "medium",
        "q": "¿Qué es ELK Stack en backend?",
        "opts": [
            "Elasticsearch, Logstash, Kibana para logging centralizado",
            "Un framework para APIs",
            "Una base de datos NoSQL",
            "Un sistema de autenticación"
        ],
        "ans": 0,
        "exp": "ELK Stack: Elasticsearch (búsqueda/almacenamiento), Logstash (procesamiento), Kibana (visualización). Se usa para centralizar y analizar logs."
    },

    // ==================== GRAFQL ====================
    {
        "profe": false,
        "unit": "GraphQL - APIs",
        "diff": "hard",
        "q": "¿Cuál es la principal ventaja de GraphQL sobre REST?",
        "opts": [
            "El cliente puede solicitar exactamente los campos que necesita",
            "Es más rápido que REST",
            "Usa SQL nativo",
            "No requiere autenticación"
        ],
        "ans": 0,
        "exp": "GraphQL permite al cliente especificar exactamente qué datos necesita (sin overfetching/underfetching). REST devuelve todo lo definido en el endpoint."
    }

]

export default preguntas_backend;