// Programación Orientada a Objetos (POO)
// Campos: unit (tema), diff (easy|medium|hard), q (pregunta), opts (alternativas),
// ans (índice de la correcta, empieza en 0), exp (explicación), extra (HTML opcional con tablas de comparación)

const P = (unit, diff, q, opts, ans, exp, extra = '') => ({
  profe: false, unit, diff, q, opts, ans, exp, extra,
});

const TABLA = (filas) => `<table style='width:100%;border-collapse:collapse;margin-top:8px'>${filas.map((f, i) =>
  '<tr>' + f.map(c => i === 0
    ? `<th style='border:1px solid #888;padding:4px;text-align:left'>${c}</th>`
    : `<td style='border:1px solid #888;padding:4px'>${c}</td>`).join('') + '</tr>').join('')}</table>`;

const preguntas_poo = [
    // ==================== AGREGADAS DESDE DOCUMENTO DE ESTUDIO (85 preguntas) ====================
    {
        "profe": false,
        "unit": "POO - Preguntas confirmadas",
        "diff": "easy",
        "q": "¿Qué es un decorador?",
        "opts": [
            "Una clase que hereda de otra y redefine sus métodos para cambiar su comportamiento.",
            "Un decorador es una función que recibe otra función y permite agregarle funcionalidades sin modificar directamente su código original. Permite ampliar el comportamiento de una función, por ejemplo, agregando validaciones, mensajes o control de acceso.",
            "Un bloque de código que se ejecuta solamente al cerrar el programa.",
            "Un atributo privado que guarda el valor de una función al ejecutarse."
        ],
        "ans": 1,
        "exp": "Un decorador es una función que recibe otra función y permite agregarle funcionalidades sin modificar directamente su código original. Permite ampliar el comportamiento de una función, por ejemplo, agregando validaciones, mensajes o control de acceso.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">def mi_decorador(funcion):\n    def envoltura():\n        print('Antes de ejecutar')\n        funcion()\n        print('Después de ejecutar')\n    return envoltura\n\n@mi_decorador\ndef saludar():\n    print('Hola')\n\nsaludar()\n# Resultado: Antes de ejecutar / Hola / Después de ejecutar</div></div>"
    },

    {
        "profe": false,
        "unit": "POO - Preguntas confirmadas",
        "diff": "easy",
        "q": "¿Qué diferencia existe entre una clase y un objeto?",
        "opts": [
            "Son lo mismo: ambos términos describen una función que devuelve un valor.",
            "La clase guarda los datos de un elemento específico, y el objeto solo define sus métodos.",
            "Un objeto es una plantilla que define atributos y métodos, y la clase es la copia concreta creada a partir de ella.",
            "Una clase es una estructura o plantilla que define atributos y métodos. Un objeto es una instancia creada a partir de esa clase. La clase establece cómo serán los elementos que se creen; el objeto es el elemento concreto que se genera utilizando esa estructura."
        ],
        "ans": 3,
        "exp": "Una clase es una estructura o plantilla que define atributos y métodos. Un objeto es una instancia creada a partir de esa clase. La clase establece cómo serán los elementos que se creen; el objeto es el elemento concreto que se genera utilizando esa estructura.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">class Persona:\n    def __init__(self, nombre):\n        self.nombre = nombre\n\npersona1 = Persona('Ana')\npersona2 = Persona('Pedro')</div></div>"
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es la Programación Orientada a Objetos?",
        "opts": [
            "Es un lenguaje de programación diseñado exclusivamente para bases de datos relacionales.",
            "Es una técnica para ejecutar varias tareas al mismo tiempo sin usar hilos.",
            "Es un sistema que organiza el código en un único archivo, sin funciones ni variables.",
            "Es un paradigma de programación que organiza el código mediante clases y objetos, permitiendo representar elementos con atributos y comportamientos."
        ],
        "ans": 3,
        "exp": "Es un paradigma de programación que organiza el código mediante clases y objetos, permitiendo representar elementos con atributos y comportamientos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una clase?",
        "opts": [
            "Un archivo ejecutable que se inicia desde la terminal.",
            "Un tipo de dato primitivo como int o boolean.",
            "Una instancia concreta guardada en memoria con valores asignados.",
            "Es una estructura o plantilla que define los atributos y métodos que tendrán los objetos creados a partir de ella."
        ],
        "ans": 3,
        "exp": "Es una estructura o plantilla que define los atributos y métodos que tendrán los objetos creados a partir de ella.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un objeto?",
        "opts": [
            "Un nombre reservado del lenguaje que no puede modificarse.",
            "Es una instancia de una clase que contiene sus propios datos y puede ejecutar los métodos definidos en ella.",
            "Una función global que se ejecuta automáticamente al iniciar el programa.",
            "Una estructura que solo define los métodos, sin almacenar datos."
        ],
        "ans": 1,
        "exp": "Es una instancia de una clase que contiene sus propios datos y puede ejecutar los métodos definidos en ella.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un atributo?",
        "opts": [
            "Una clase que hereda de otra clase padre.",
            "Un método especial que se ejecuta al crear un objeto.",
            "Es una variable que pertenece a una clase o a un objeto y que almacena información sobre sus características. Ejemplo: nombre, edad, dirección o precio.",
            "Una función definida dentro de una clase que realiza una acción."
        ],
        "ans": 2,
        "exp": "Es una variable que pertenece a una clase o a un objeto y que almacena información sobre sus características. Ejemplo: nombre, edad, dirección o precio.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un método?",
        "opts": [
            "Una clase que contiene únicamente datos y no tiene comportamiento.",
            "Un valor constante que no puede cambiar durante la ejecución.",
            "Es una función definida dentro de una clase que representa una acción o comportamiento que pueden realizar sus objetos. Ejemplo: caminar(), calcularPrecio() o iniciarSesion().",
            "Una variable que almacena características del objeto, como su color."
        ],
        "ans": 2,
        "exp": "Es una función definida dentro de una clase que representa una acción o comportamiento que pueden realizar sus objetos. Ejemplo: caminar(), calcularPrecio() o iniciarSesion().",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un constructor?",
        "opts": [
            "Es un método especial que se ejecuta cuando se crea un objeto y permite inicializar sus atributos. En Python se utiliza __init__().",
            "Un método que se ejecuta al eliminar un objeto de la memoria.",
            "Una función que copia una clase existente en un nuevo archivo.",
            "Un atributo que almacena el nombre de la clase padre."
        ],
        "ans": 0,
        "exp": "Es un método especial que se ejecuta cuando se crea un objeto y permite inicializar sus atributos. En Python se utiliza __init__().",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es el método __init__()?",
        "opts": [
            "Una función que convierte el objeto en una cadena de texto.",
            "Un método que se llama manualmente para imprimir los atributos de la clase.",
            "Es un método especial de Python que se ejecuta automáticamente al crear una instancia y permite asignar los valores iniciales de sus atributos.",
            "Un método que destruye el objeto y libera su memoria."
        ],
        "ans": 2,
        "exp": "Es un método especial de Python que se ejecuta automáticamente al crear una instancia y permite asignar los valores iniciales de sus atributos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es self?",
        "opts": [
            "El nombre de la clase padre desde la que se hereda.",
            "Es una referencia al objeto actual. Permite acceder a sus atributos y métodos desde dentro de la clase.",
            "Un atributo estático compartido por todas las clases.",
            "Una variable global que guarda la lista de todos los objetos creados."
        ],
        "ans": 1,
        "exp": "Es una referencia al objeto actual. Permite acceder a sus atributos y métodos desde dentro de la clase.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una instancia?",
        "opts": [
            "Una variable que solo existe dentro de una función.",
            "La clase original de la que se heredan atributos y métodos.",
            "Un método que se declara sin parámetros dentro de una clase.",
            "Es un objeto concreto creado a partir de una clase."
        ],
        "ans": 3,
        "exp": "Es un objeto concreto creado a partir de una clase.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es la encapsulación?",
        "opts": [
            "Crear varias versiones de un mismo método con distintos parámetros.",
            "Es un principio de POO que consiste en agrupar los datos y métodos dentro de una clase y controlar el acceso a sus atributos y comportamientos.",
            "Ocultar el código fuente compilándolo en un archivo binario.",
            "Permitir que una clase use métodos de varias clases padres a la vez."
        ],
        "ans": 1,
        "exp": "Es un principio de POO que consiste en agrupar los datos y métodos dentro de una clase y controlar el acceso a sus atributos y comportamientos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es la herencia?",
        "opts": [
            "Copiar manualmente el código de una clase en otra para reutilizarlo.",
            "Es un mecanismo que permite que una clase herede atributos y métodos de otra clase, facilitando la reutilización del código.",
            "Permitir que un objeto cambie de clase durante la ejecución.",
            "Agrupar varias clases en un único módulo del programa."
        ],
        "ans": 1,
        "exp": "Es un mecanismo que permite que una clase herede atributos y métodos de otra clase, facilitando la reutilización del código.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es el polimorfismo?",
        "opts": [
            "Tener varias clases con nombres distintos que cumplen la misma función.",
            "Crear un objeto que contiene dentro otros objetos.",
            "Es la capacidad de utilizar una misma interfaz o método con diferentes comportamientos, dependiendo del objeto que lo implemente.",
            "Ejecutar un método sin definirlo en ninguna clase."
        ],
        "ans": 2,
        "exp": "Es la capacidad de utilizar una misma interfaz o método con diferentes comportamientos, dependiendo del objeto que lo implemente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es la abstracción?",
        "opts": [
            "Escribir código sin comentarios ni nombres descriptivos.",
            "Ocultar los datos de una clase para que nadie pueda leerlos.",
            "Dividir un programa en archivos separados según su tamaño.",
            "Es un principio que consiste en representar las características esenciales de un elemento, ocultando los detalles internos que no son necesarios para utilizarlo."
        ],
        "ans": 3,
        "exp": "Es un principio que consiste en representar las características esenciales de un elemento, ocultando los detalles internos que no son necesarios para utilizarlo.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es la reutilización de código?",
        "opts": [
            "Copiar el mismo código en cada módulo para que sea independiente.",
            "Eliminar todas las funciones repetidas del programa sin reemplazarlas.",
            "Es la posibilidad de aprovechar código existente en diferentes partes de un programa, evitando escribir nuevamente las mismas instrucciones.",
            "Borrar el código antiguo cada vez que se crea una nueva versión."
        ],
        "ans": 2,
        "exp": "Es la posibilidad de aprovechar código existente en diferentes partes de un programa, evitando escribir nuevamente las mismas instrucciones.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es la sobreescritura de métodos (overriding)?",
        "opts": [
            "Es cuando una clase hija redefine un método heredado de su clase padre para darle un comportamiento diferente.",
            "Llamar a un método de la clase padre sin redefinirlo.",
            "Crear una clase que no tiene padre y no hereda nada.",
            "Definir dos métodos con el mismo nombre y distintos parámetros en la misma clase."
        ],
        "ans": 0,
        "exp": "Es cuando una clase hija redefine un método heredado de su clase padre para darle un comportamiento diferente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una clase padre?",
        "opts": [
            "Es una clase que no puede tener métodos ni atributos propios.",
            "Es la clase que hereda atributos y métodos de otra clase, también llamada subclase.",
            "Es el objeto principal que contiene todas las instancias del programa.",
            "Es la clase de la cual otras clases heredan atributos y métodos. También se conoce como superclase."
        ],
        "ans": 3,
        "exp": "Es la clase de la cual otras clases heredan atributos y métodos. También se conoce como superclase.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una clase hija?",
        "opts": [
            "Es un objeto creado automáticamente al ejecutar el programa.",
            "Es una clase que hereda atributos y métodos de otra clase. También se conoce como subclase.",
            "Es una clase que no puede heredar ningún atributo ni método.",
            "Es la clase de la cual otras clases heredan atributos y métodos, también llamada superclase."
        ],
        "ans": 1,
        "exp": "Es una clase que hereda atributos y métodos de otra clase. También se conoce como subclase.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre una clase y una instancia?",
        "opts": [
            "La clase es la estructura que define cómo serán los objetos. La instancia es el objeto concreto creado a partir de esa estructura.",
            "Son sinónimos que describen el mismo elemento en memoria.",
            "La clase guarda valores y la instancia define los métodos.",
            "La clase es un objeto concreto y la instancia es solo una plantilla sin datos."
        ],
        "ans": 0,
        "exp": "La clase es la estructura que define cómo serán los objetos. La instancia es el objeto concreto creado a partir de esa estructura.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre un atributo y un método?",
        "opts": [
            "Un atributo almacena información o características de un objeto, mientras que un método define las acciones o comportamientos que puede realizar.",
            "Son iguales porque ambos almacenan información del objeto.",
            "Un atributo define acciones que el objeto puede realizar, y un método guarda sus datos.",
            "Un atributo es una función y un método es una variable global."
        ],
        "ans": 0,
        "exp": "Un atributo almacena información o características de un objeto, mientras que un método define las acciones o comportamientos que puede realizar.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre una función y un método?",
        "opts": [
            "Una función solo puede tener parámetros, y un método nunca los tiene.",
            "Un método es un bloque independiente, y una función siempre está dentro de una clase.",
            "No hay diferencia: ambos solo existen dentro de una clase.",
            "Una función es un bloque de código independiente que realiza una tarea. Un método es una función que está definida dentro de una clase y está asociada a ella o a sus objetos."
        ],
        "ans": 3,
        "exp": "Una función es un bloque de código independiente que realiza una tarea. Un método es una función que está definida dentro de una clase y está asociada a ella o a sus objetos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre __init__() y un método normal?",
        "opts": [
            "__init__() es un método especial que se ejecuta al crear un objeto para inicializarlo. Un método normal se ejecuta cuando es invocado.",
            "Un método normal inicializa los atributos del objeto al crearse.",
            "__init__() no puede recibir parámetros, a diferencia de los métodos normales.",
            "__init__() se ejecuta solamente cuando el objeto se elimina de la memoria."
        ],
        "ans": 0,
        "exp": "__init__() es un método especial que se ejecuta al crear un objeto para inicializarlo. Un método normal se ejecuta cuando es invocado.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre herencia y polimorfismo?",
        "opts": [
            "Son lo mismo: ambos permiten que una clase reutilice el código de otra.",
            "La herencia permite reutilizar atributos y métodos de otra clase. El polimorfismo permite que diferentes objetos respondan de distintas maneras ante una misma operación o método.",
            "La herencia impide que los objetos respondan de forma distinta a un mismo método.",
            "El polimorfismo copia atributos de una clase padre, y la herencia cambia los métodos."
        ],
        "ans": 1,
        "exp": "La herencia permite reutilizar atributos y métodos de otra clase. El polimorfismo permite que diferentes objetos respondan de distintas maneras ante una misma operación o método.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre encapsulación y abstracción?",
        "opts": [
            "La encapsulación organiza y controla el acceso a los datos y métodos. La abstracción oculta los detalles internos y muestra solamente lo necesario para utilizar un elemento.",
            "La encapsulación solo se aplica a funciones, y la abstracción solo a variables.",
            "La abstracción agrupa datos y métodos, y la encapsulación oculta detalles de implementación.",
            "Son sinónimos: ambos ocultan completamente los datos del programa."
        ],
        "ans": 0,
        "exp": "La encapsulación organiza y controla el acceso a los datos y métodos. La abstracción oculta los detalles internos y muestra solamente lo necesario para utilizar un elemento.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre una clase padre y una clase hija?",
        "opts": [
            "La clase padre no puede tener métodos, y la hija sí.",
            "Son lo mismo; solo cambia el nombre según el lenguaje.",
            "La clase padre contiene los elementos que pueden heredarse. La clase hija recibe esos elementos y puede agregar o modificar sus propios atributos y métodos.",
            "La clase hija contiene los elementos que se heredan, y la padre los recibe."
        ],
        "ans": 2,
        "exp": "La clase padre contiene los elementos que pueden heredarse. La clase hija recibe esos elementos y puede agregar o modificar sus propios atributos y métodos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre un atributo de clase y un atributo de instancia?",
        "opts": [
            "El atributo de clase pertenece a cada objeto, y el de instancia se comparte.",
            "El atributo de clase solo puede modificarse desde fuera del programa.",
            "Un atributo de clase pertenece a la clase y puede ser compartido por sus instancias. Un atributo de instancia pertenece a cada objeto y puede tener valores diferentes.",
            "Ambos siempre tienen el mismo valor en todos los objetos."
        ],
        "ans": 2,
        "exp": "Un atributo de clase pertenece a la clase y puede ser compartido por sus instancias. Un atributo de instancia pertenece a cada objeto y puede tener valores diferentes.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre sobreescritura y sobrecarga de métodos?",
        "opts": [
            "La sobreescritura crea varios métodos con el mismo nombre en la misma clase.",
            "La sobreescritura redefine un método heredado en una clase hija. La sobrecarga consiste en utilizar un mismo nombre de operación con diferentes parámetros. En Python, la sobrecarga tradicional no funciona igual que en Java; existen otras formas de conseguir comportamientos similares.",
            "La sobrecarga redefine un método heredado en una clase hija.",
            "Son iguales porque ambas dependen de la herencia."
        ],
        "ans": 1,
        "exp": "La sobreescritura redefine un método heredado en una clase hija. La sobrecarga consiste en utilizar un mismo nombre de operación con diferentes parámetros. En Python, la sobrecarga tradicional no funciona igual que en Java; existen otras formas de conseguir comportamientos similares.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre programación estructurada y programación orientada a objetos?",
        "opts": [
            "La programación estructurada organiza el programa mediante funciones y procedimientos. La programación orientada a objetos organiza el código mediante clases y objetos que agrupan datos y comportamientos.",
            "La programación estructurada agrupa datos y comportamientos en clases.",
            "La POO no utiliza funciones ni procedimientos en ningún caso.",
            "Ambas organizan el código exactamente de la misma manera."
        ],
        "ans": 0,
        "exp": "La programación estructurada organiza el programa mediante funciones y procedimientos. La programación orientada a objetos organiza el código mediante clases y objetos que agrupan datos y comportamientos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre un método de instancia y un método estático?",
        "opts": [
            "Un método de instancia no puede acceder a los atributos del objeto.",
            "No hay diferencia: ambos reciben self automáticamente.",
            "Un método de instancia trabaja con un objeto específico y normalmente utiliza self. Un método estático no necesita recibir una instancia ni acceder directamente a sus atributos.",
            "El método estático siempre recibe una instancia como primer parámetro."
        ],
        "ans": 2,
        "exp": "Un método de instancia trabaja con un objeto específico y normalmente utiliza self. Un método estático no necesita recibir una instancia ni acceder directamente a sus atributos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas representar un automóvil en un programa, ¿cómo utilizarías POO?",
        "opts": [
            "Crearía variables sueltas: marca, modelo y velocidad, sin agruparlas.",
            "Crearía una función llamada automovil() que guarda todos los datos en una lista global.",
            "Crearía una clase Motor con el método encender() y sin atributos.",
            "Crearía una clase llamada Automovil, con atributos como marca, modelo y velocidad, y métodos como acelerar(), frenar() y encender()."
        ],
        "ans": 3,
        "exp": "Crearía una clase llamada Automovil, con atributos como marca, modelo y velocidad, y métodos como acelerar(), frenar() y encender().",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo crearías dos objetos diferentes a partir de una misma clase?",
        "opts": [
            "Crearía dos clases distintas con los mismos atributos y sin valores.",
            "Crearía una sola instancia y cambiaría su valor para simular dos objetos.",
            "Definiría una clase y posteriormente crearía dos instancias asignándoles valores diferentes a sus atributos.",
            "Copiaría la clase dos veces con nombres diferentes."
        ],
        "ans": 2,
        "exp": "Definiría una clase y posteriormente crearía dos instancias asignándoles valores diferentes a sus atributos.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">class Automovil:\n    def __init__(self, marca):\n        self.marca = marca\n\nauto1 = Automovil('Toyota')\nauto2 = Automovil('Ford')</div></div>"
    },

    {
        "profe": false,
        "unit": "POO - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si tienes una clase Persona y necesitas crear una clase Estudiante, ¿qué principio de POO utilizarías?",
        "opts": [
            "Utilizaría la abstracción, porque elimina los métodos de Persona.",
            "Utilizaría la herencia, porque Estudiante puede heredar los atributos y métodos de Persona y agregar características propias.",
            "Utilizaría la encapsulación, porque oculta los atributos de Persona.",
            "Utilizaría el polimorfismo, porque Estudiante cambia el nombre de Persona."
        ],
        "ans": 1,
        "exp": "Utilizaría la herencia, porque Estudiante puede heredar los atributos y métodos de Persona y agregar características propias.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo aplicarías la encapsulación en un sistema bancario?",
        "opts": [
            "Dejaría el saldo como atributo público para que cualquier parte del programa lo modifique.",
            "Eliminaría la clase Cuenta y guardaría el saldo en una variable global.",
            "Controlaría el acceso al saldo de una cuenta bancaria, evitando que cualquier parte del programa pueda modificarlo directamente sin pasar por las operaciones autorizadas.",
            "Haría que el saldo sea una constante que no puede cambiar nunca."
        ],
        "ans": 2,
        "exp": "Controlaría el acceso al saldo de una cuenta bancaria, evitando que cualquier parte del programa pueda modificarlo directamente sin pasar por las operaciones autorizadas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo aplicarías el polimorfismo en un sistema de pagos?",
        "opts": [
            "Eliminaría los métodos y usaría solamente funciones sueltas.",
            "Crearía métodos con nombres distintos en cada clase, sin una interfaz común.",
            "Crearía una sola clase Pago con condicionales para cada tipo de pago.",
            "Podría tener diferentes clases de pago, como Tarjeta y Transferencia, que implementen un método llamado procesar_pago(), pero cada una ejecutaría el proceso de manera diferente."
        ],
        "ans": 3,
        "exp": "Podría tener diferentes clases de pago, como Tarjeta y Transferencia, que implementen un método llamado procesar_pago(), pero cada una ejecutaría el proceso de manera diferente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si tienes diferentes tipos de animales y todos pueden emitir sonidos, ¿cómo aplicarías el polimorfismo?",
        "opts": [
            "Crearía una clase para cada animal, sin método común, usando nombres diferentes.",
            "Crearía un atributo sonido en cada animal, sin usar métodos.",
            "Crearía el método emitir_sonido() solo en la clase Animal y no en las hijas.",
            "Crearía una clase Animal con un método emitir_sonido(). Después, cada clase hija implementaría ese método según el sonido correspondiente."
        ],
        "ans": 3,
        "exp": "Crearía una clase Animal con un método emitir_sonido(). Después, cada clase hija implementaría ese método según el sonido correspondiente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Para qué utilizarías un constructor al crear un objeto?",
        "opts": [
            "Para convertir la clase en un módulo independiente del programa.",
            "Para asignar el nombre del archivo donde se guarda el objeto.",
            "Para eliminar los atributos del objeto después de utilizarlos.",
            "Para inicializar sus atributos y establecer los valores necesarios desde el momento de su creación."
        ],
        "ans": 3,
        "exp": "Para inicializar sus atributos y establecer los valores necesarios desde el momento de su creación.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Qué sucede si creas varios objetos de una misma clase?",
        "opts": [
            "Todos los objetos comparten obligatoriamente los mismos valores en sus atributos.",
            "Se crean distintas instancias que comparten la estructura definida por la clase, pero pueden tener diferentes valores en sus atributos.",
            "Se produce un error, porque una clase solo puede crear un objeto.",
            "Se crea solo un objeto, y los demás reemplazan al primero."
        ],
        "ans": 1,
        "exp": "Se crean distintas instancias que comparten la estructura definida por la clase, pero pueden tener diferentes valores en sus atributos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo reutilizarías código mediante herencia?",
        "opts": [
            "Copiando el código de la clase padre dentro de cada clase hija.",
            "Creando una clase hija sin atributos ni métodos heredados.",
            "Crearía una clase padre con atributos y métodos comunes. Después, otras clases heredarían esos elementos sin tener que escribirlos nuevamente.",
            "Eliminando la clase padre y creando todas las clases por separado."
        ],
        "ans": 2,
        "exp": "Crearía una clase padre con atributos y métodos comunes. Después, otras clases heredarían esos elementos sin tener que escribirlos nuevamente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿En qué situación utilizarías un decorador?",
        "opts": [
            "Cuando se necesita guardar un dato en una variable global.",
            "Por ejemplo, en un sistema de inicio de sesión, podría utilizar un decorador para comprobar si un usuario tiene autorización antes de permitirle ejecutar una función.",
            "En un sistema que necesita cambiar el color de un botón en pantalla.",
            "Cuando una función debe ejecutarse solamente una vez al iniciar el programa."
        ],
        "ans": 1,
        "exp": "Por ejemplo, en un sistema de inicio de sesión, podría utilizar un decorador para comprobar si un usuario tiene autorización antes de permitirle ejecutar una función.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Identificar conceptos en código",
        "diff": "medium",
        "q": "Observa el siguiente código. ¿Qué representa cada elemento?",
        "opts": [
            "Producto: clase. __init__: constructor. self: referencia al objeto actual. nombre y precio: atributos. mostrar_producto(): método. producto1: objeto o instancia. \"Notebook\" y 500000: valores de los atributos nombre y precio.",
            "Producto es un atributo; __init__ es el objeto y self es la función.",
            "Producto es una instancia; producto1 es la clase del programa.",
            "Producto es un método; __init__ es la clase y self es el atributo."
        ],
        "ans": 0,
        "exp": "Producto: clase. __init__: constructor. self: referencia al objeto actual. nombre y precio: atributos. mostrar_producto(): método. producto1: objeto o instancia. \"Notebook\" y 500000: valores de los atributos nombre y precio.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">class Producto:\n    def __init__(self, nombre, precio):\n        self.nombre = nombre\n        self.precio = precio\n    def mostrar_producto(self):\n        print(self.nombre, self.precio)\n\nproducto1 = Producto('Notebook', 500000)</div></div>"
    },

    {
        "profe": false,
        "unit": "POO - Identificar conceptos en código",
        "diff": "medium",
        "q": "¿Qué sucede cuando se ejecuta producto1.mostrar_producto()?",
        "opts": [
            "Se elimina el atributo nombre del objeto producto1.",
            "Se redefine el constructor de la clase Producto.",
            "Se invoca el método mostrar_producto() del objeto producto1, que muestra su nombre y precio.",
            "Se crea un nuevo objeto llamado producto1 en memoria."
        ],
        "ans": 2,
        "exp": "Se invoca el método mostrar_producto() del objeto producto1, que muestra su nombre y precio.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Identificar conceptos en código",
        "diff": "medium",
        "q": "¿Qué sucede si creamos otro objeto llamado producto2?",
        "opts": [
            "Se produce un error, porque no se puede crear más de un objeto de una clase.",
            "Se sobrescribe el objeto producto1 con los valores de producto2.",
            "Se crea una nueva clase llamada Producto2 con los mismos atributos.",
            "Se crea otra instancia de Producto, independiente de producto1, con sus propios valores de atributos."
        ],
        "ans": 3,
        "exp": "Se crea otra instancia de Producto, independiente de producto1, con sus propios valores de atributos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Identificar conceptos en código",
        "diff": "medium",
        "q": "Observa el código. ¿Qué principio de POO se está utilizando?",
        "opts": [
            "Se utiliza herencia porque Perro hereda de Animal, y sobreescritura porque redefine el método emitir_sonido(). También permite aplicar polimorfismo.",
            "Se utiliza abstracción, porque Animal no tiene métodos.",
            "Se utiliza encapsulación, porque Perro oculta el método de Animal.",
            "Se utiliza composición, porque Perro contiene un objeto Animal."
        ],
        "ans": 0,
        "exp": "Se utiliza herencia porque Perro hereda de Animal, y sobreescritura porque redefine el método emitir_sonido(). También permite aplicar polimorfismo.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">class Animal:\n    def emitir_sonido(self):\n        print('Sonido de animal')\n\nclass Perro(Animal):\n    def emitir_sonido(self):\n        print('Guau')</div></div>"
    },

    {
        "profe": false,
        "unit": "POO - Identificar conceptos en código",
        "diff": "medium",
        "q": "¿Qué significa el siguiente código?",
        "opts": [
            "Significa que se elimina el atributo nombre de la clase Estudiante.",
            "Significa que se define una clase Estudiante con un constructor que recibe un nombre y lo almacena en el atributo de instancia nombre.",
            "Significa que se crea una variable global llamada nombre con el valor Estudiante.",
            "Significa que se crea una función llamada Estudiante que recibe un nombre."
        ],
        "ans": 1,
        "exp": "Significa que se define una clase Estudiante con un constructor que recibe un nombre y lo almacena en el atributo de instancia nombre.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">class Estudiante:\n    def __init__(self, nombre):\n        self.nombre = nombre</div></div>"
    },

    {
        "profe": false,
        "unit": "POO - Profundización: conceptos",
        "diff": "hard",
        "q": "¿Por qué se dice que una clase es una plantilla y no un objeto?",
        "opts": [
            "Porque un objeto define su estructura, mientras que la clase guarda sus valores.",
            "Porque una clase solo puede contener métodos y nunca atributos.",
            "Porque una clase siempre es una instancia que se crea automáticamente en memoria.",
            "Porque una clase define las características y comportamientos que tendrán los objetos, pero no representa por sí misma una instancia concreta."
        ],
        "ans": 3,
        "exp": "Porque una clase define las características y comportamientos que tendrán los objetos, pero no representa por sí misma una instancia concreta.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: conceptos",
        "diff": "hard",
        "q": "¿Un objeto puede existir sin tener atributos?",
        "opts": [
            "No, porque Python no permite crear objetos sin atributos ni métodos.",
            "Sí. Se puede crear un objeto de una clase que no tenga atributos propios definidos. Sin embargo, sigue siendo una instancia de esa clase.",
            "No. Todo objeto debe tener al menos un atributo para poder existir.",
            "Sí, pero deja de ser una instancia de la clase."
        ],
        "ans": 1,
        "exp": "Sí. Se puede crear un objeto de una clase que no tenga atributos propios definidos. Sin embargo, sigue siendo una instancia de esa clase.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: conceptos",
        "diff": "hard",
        "q": "¿Todos los objetos de una misma clase tienen los mismos atributos?",
        "opts": [
            "No, porque los atributos solo existen en la clase y nunca en los objetos.",
            "No, cada objeto debe tener una estructura distinta aunque pertenezca a la misma clase.",
            "Tienen la misma estructura definida por la clase, pero pueden almacenar valores diferentes en sus atributos.",
            "Sí, y además comparten exactamente el mismo valor en cada atributo."
        ],
        "ans": 2,
        "exp": "Tienen la misma estructura definida por la clase, pero pueden almacenar valores diferentes en sus atributos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: conceptos",
        "diff": "hard",
        "q": "¿Qué sucede cuando se modifica un atributo de un objeto?",
        "opts": [
            "No ocurre nada hasta que se ejecuta el constructor nuevamente.",
            "Se elimina el objeto y se crea uno nuevo con el valor modificado.",
            "Se modifica el valor de ese atributo en ese objeto. Los demás objetos no se ven afectados, salvo que se trate de un atributo compartido de clase.",
            "Se modifican los valores de todos los objetos de la clase al mismo tiempo."
        ],
        "ans": 2,
        "exp": "Se modifica el valor de ese atributo en ese objeto. Los demás objetos no se ven afectados, salvo que se trate de un atributo compartido de clase.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: conceptos",
        "diff": "hard",
        "q": "¿Qué sucede si no se define un constructor en una clase Python?",
        "opts": [
            "Los atributos se vuelven privados automáticamente.",
            "Python genera un error y no permite crear objetos de esa clase.",
            "Python permite crear objetos utilizando el constructor heredado de su clase padre, que normalmente es object, siempre que no existan argumentos adicionales que requieran inicialización.",
            "Python exige definir __init__() obligatoriamente, o la clase no se ejecuta."
        ],
        "ans": 2,
        "exp": "Python permite crear objetos utilizando el constructor heredado de su clase padre, que normalmente es object, siempre que no existan argumentos adicionales que requieran inicialización.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: conceptos",
        "diff": "hard",
        "q": "¿Para qué sirve inicializar los atributos de un objeto?",
        "opts": [
            "Para establecer sus valores iniciales y permitir que el objeto tenga la información necesaria para funcionar correctamente.",
            "Para eliminar valores anteriores antes de guardar el objeto en la base de datos.",
            "Para evitar que el objeto pueda ser usado por otras clases del programa.",
            "Para convertir el objeto en un archivo de texto."
        ],
        "ans": 0,
        "exp": "Para establecer sus valores iniciales y permitir que el objeto tenga la información necesaria para funcionar correctamente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: conceptos",
        "diff": "hard",
        "q": "¿Qué significa que un objeto tenga estado y comportamiento?",
        "opts": [
            "El estado es el nombre de la clase y el comportamiento es su constructor.",
            "El estado corresponde a los métodos y el comportamiento a los atributos.",
            "El estado corresponde a los valores almacenados en sus atributos y el comportamiento corresponde a las acciones que puede realizar mediante sus métodos.",
            "El estado es la memoria RAM usada y el comportamiento el tiempo de ejecución."
        ],
        "ans": 2,
        "exp": "El estado corresponde a los valores almacenados en sus atributos y el comportamiento corresponde a las acciones que puede realizar mediante sus métodos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: encapsulación y herencia",
        "diff": "hard",
        "q": "¿Por qué es importante la encapsulación?",
        "opts": [
            "Porque permite controlar cómo se accede y modifica la información de un objeto, evitando modificaciones incorrectas y manteniendo la integridad de los datos.",
            "Porque permite que todos los atributos sean modificados desde cualquier parte del programa.",
            "Porque elimina la necesidad de definir métodos dentro de las clases.",
            "Porque hace más rápida la ejecución del programa en cualquier caso."
        ],
        "ans": 0,
        "exp": "Porque permite controlar cómo se accede y modifica la información de un objeto, evitando modificaciones incorrectas y manteniendo la integridad de los datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: encapsulación y herencia",
        "diff": "hard",
        "q": "¿Python tiene atributos privados?",
        "opts": [
            "Python utiliza convenciones de acceso. Un atributo con doble guion bajo, como __saldo, activa un mecanismo llamado name mangling, que dificulta el acceso directo, pero no proporciona privacidad absoluta.",
            "No, Python no permite ninguna convención de acceso en sus atributos.",
            "Sí, Python impide acceder a cualquier atributo desde fuera de la clase.",
            "Sí, al escribir la palabra private antes del nombre del atributo."
        ],
        "ans": 0,
        "exp": "Python utiliza convenciones de acceso. Un atributo con doble guion bajo, como __saldo, activa un mecanismo llamado name mangling, que dificulta el acceso directo, pero no proporciona privacidad absoluta.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: encapsulación y herencia",
        "diff": "hard",
        "q": "¿Qué es un getter y un setter?",
        "opts": [
            "Son dos constructores que se ejecutan en orden al crear un objeto.",
            "Son palabras reservadas que eliminan atributos del objeto.",
            "Un getter permite consultar el valor de un atributo y un setter permite modificarlo de manera controlada.",
            "Son funciones que copian la clase padre en la clase hija."
        ],
        "ans": 2,
        "exp": "Un getter permite consultar el valor de un atributo y un setter permite modificarlo de manera controlada.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: encapsulación y herencia",
        "diff": "hard",
        "q": "¿Qué ventaja tiene la herencia?",
        "opts": [
            "Permite reutilizar código, evitar duplicaciones y organizar clases que comparten características.",
            "Evita que una clase pueda crear objetos.",
            "Hace que el programa use menos memoria al eliminar clases.",
            "Permite que las clases no tengan que definir atributos ni métodos."
        ],
        "ans": 0,
        "exp": "Permite reutilizar código, evitar duplicaciones y organizar clases que comparten características.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: encapsulación y herencia",
        "diff": "hard",
        "q": "¿Una clase hija puede agregar métodos propios?",
        "opts": [
            "No, una clase hija no puede tener métodos que no existan en el padre.",
            "Sí. Puede heredar los métodos de su clase padre y agregar nuevos métodos y atributos según sus necesidades.",
            "No, porque solo puede modificar atributos heredados.",
            "Sí, pero solo si la clase padre está vacía."
        ],
        "ans": 1,
        "exp": "Sí. Puede heredar los métodos de su clase padre y agregar nuevos métodos y atributos según sus necesidades.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: encapsulación y herencia",
        "diff": "hard",
        "q": "¿Una clase hija puede modificar el comportamiento de la clase padre?",
        "opts": [
            "Sí. Puede sobrescribir los métodos heredados para implementar un comportamiento diferente.",
            "No, porque los métodos heredados son inmutables en Python.",
            "No, una clase hija siempre debe ejecutar exactamente los mismos métodos del padre.",
            "Sí, pero solo si elimina la clase padre del programa."
        ],
        "ans": 0,
        "exp": "Sí. Puede sobrescribir los métodos heredados para implementar un comportamiento diferente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: encapsulación y herencia",
        "diff": "hard",
        "q": "¿Para qué sirve la función super()?",
        "opts": [
            "Permite eliminar la clase padre de la memoria.",
            "Permite acceder a métodos de la clase padre, por ejemplo, para ejecutar su constructor desde la clase hija.",
            "Permite convertir una clase hija en una clase independiente.",
            "Permite crear un objeto sin ejecutar su constructor."
        ],
        "ans": 1,
        "exp": "Permite acceder a métodos de la clase padre, por ejemplo, para ejecutar su constructor desde la clase hija.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: encapsulación y herencia",
        "diff": "hard",
        "q": "¿Qué sucede si una clase hija sobrescribe un método de su clase padre?",
        "opts": [
            "Se produce un error y el programa se detiene.",
            "Se ejecuta siempre la versión del padre, sin importar el objeto.",
            "Cuando se invoca ese método desde un objeto de la clase hija, se ejecuta la versión redefinida, salvo que se invoque explícitamente la implementación del padre.",
            "Se ejecutan ambas versiones de forma automática y en paralelo."
        ],
        "ans": 2,
        "exp": "Cuando se invoca ese método desde un objeto de la clase hija, se ejecuta la versión redefinida, salvo que se invoque explícitamente la implementación del padre.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: encapsulación y herencia",
        "diff": "hard",
        "q": "¿Por qué el polimorfismo facilita el desarrollo de software?",
        "opts": [
            "Porque elimina la necesidad de usar clases en el programa.",
            "Porque permite trabajar con diferentes tipos de objetos utilizando una misma interfaz, sin necesitar escribir un código completamente diferente para cada uno.",
            "Porque obliga a escribir un código diferente para cada tipo de objeto.",
            "Porque permite ejecutar el programa sin compilarlo."
        ],
        "ans": 1,
        "exp": "Porque permite trabajar con diferentes tipos de objetos utilizando una misma interfaz, sin necesitar escribir un código completamente diferente para cada uno.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: encapsulación y herencia",
        "diff": "hard",
        "q": "¿Es necesario que dos clases tengan una relación de herencia para utilizar polimorfismo en Python?",
        "opts": [
            "No. Python permite polimorfismo mediante el comportamiento de los objetos, siempre que implementen los métodos que necesita el código que los utiliza.",
            "No, porque Python no permite llamar a métodos de objetos distintos.",
            "No, en Python el polimorfismo solo funciona con herencia directa.",
            "Sí, pero solo si las clases pertenecen al mismo archivo."
        ],
        "ans": 0,
        "exp": "No. Python permite polimorfismo mediante el comportamiento de los objetos, siempre que implementen los métodos que necesita el código que los utiliza.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: encapsulación y herencia",
        "diff": "hard",
        "q": "¿Por qué se utiliza la abstracción?",
        "opts": [
            "Para simplificar la utilización de un sistema, mostrando las operaciones importantes y ocultando los detalles internos de implementación.",
            "Para obligar al programador a escribir todo el código en un único archivo.",
            "Para eliminar las funciones del sistema y dejar solo las variables.",
            "Para aumentar la cantidad de detalles internos que el usuario debe conocer."
        ],
        "ans": 0,
        "exp": "Para simplificar la utilización de un sistema, mostrando las operaciones importantes y ocultando los detalles internos de implementación.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: encapsulación y herencia",
        "diff": "hard",
        "q": "¿Cuál es la diferencia entre ocultar información y ocultar complejidad?",
        "opts": [
            "Ocultar información corresponde a controlar el acceso a los datos internos. Ocultar complejidad significa mostrar solamente lo necesario para utilizar un sistema sin conocer todos sus detalles internos.",
            "Son lo mismo: ambos significan eliminar los datos del sistema.",
            "Ocultar información solo se aplica a funciones, y ocultar complejidad a clases.",
            "Ocultar complejidad controla el acceso a los datos internos, y ocultar información muestra todo."
        ],
        "ans": 0,
        "exp": "Ocultar información corresponde a controlar el acceso a los datos internos. Ocultar complejidad significa mostrar solamente lo necesario para utilizar un sistema sin conocer todos sus detalles internos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: comparaciones",
        "diff": "hard",
        "q": "¿Qué diferencia existe entre herencia simple y herencia múltiple?",
        "opts": [
            "La herencia simple ocurre cuando una clase hereda de una sola clase padre. La herencia múltiple ocurre cuando una clase hereda de dos o más clases.",
            "Son lo mismo; solo cambia el número de objetos creados.",
            "La herencia múltiple no existe en Python.",
            "La herencia simple hereda de dos clases, y la múltiple de una sola."
        ],
        "ans": 0,
        "exp": "La herencia simple ocurre cuando una clase hereda de una sola clase padre. La herencia múltiple ocurre cuando una clase hereda de dos o más clases.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: comparaciones",
        "diff": "hard",
        "q": "¿Qué diferencia existe entre un método de instancia y un método de clase?",
        "opts": [
            "El método de clase usa self, y el de instancia usa cls.",
            "Un método de instancia trabaja con un objeto específico mediante self. Un método de clase trabaja con la clase mediante cls y se declara utilizando @classmethod.",
            "El método de instancia se declara con @classmethod.",
            "Ambos reciben el mismo parámetro y solo cambia el nombre."
        ],
        "ans": 1,
        "exp": "Un método de instancia trabaja con un objeto específico mediante self. Un método de clase trabaja con la clase mediante cls y se declara utilizando @classmethod.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: comparaciones",
        "diff": "hard",
        "q": "¿Qué diferencia existe entre un método estático y un método de clase?",
        "opts": [
            "Ambos reciben self como primer parámetro.",
            "El método de clase no recibe ningún parámetro automáticamente.",
            "El método estático no recibe automáticamente ni la instancia ni la clase. El método de clase recibe automáticamente la clase mediante cls.",
            "El método estático recibe automáticamente cls como primer parámetro."
        ],
        "ans": 2,
        "exp": "El método estático no recibe automáticamente ni la instancia ni la clase. El método de clase recibe automáticamente la clase mediante cls.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: comparaciones",
        "diff": "hard",
        "q": "¿Qué diferencia existe entre self y cls?",
        "opts": [
            "Son sinónimos que siempre tienen el mismo valor.",
            "self representa la instancia actual, mientras que cls representa la clase actual.",
            "self solo se usa en funciones y cls solo en variables globales.",
            "self representa la clase actual y cls la instancia actual."
        ],
        "ans": 1,
        "exp": "self representa la instancia actual, mientras que cls representa la clase actual.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: comparaciones",
        "diff": "hard",
        "q": "¿Qué diferencia existe entre composición y herencia?",
        "opts": [
            "Son lo mismo; solo cambia la sintaxis en Python.",
            "La herencia representa «tiene un» y la composición «es un».",
            "La herencia representa una relación de tipo «es un». La composición representa una relación de tipo «tiene un», donde un objeto contiene o utiliza otros objetos.",
            "La composición impide reutilizar el código de otra clase."
        ],
        "ans": 2,
        "exp": "La herencia representa una relación de tipo «es un». La composición representa una relación de tipo «tiene un», donde un objeto contiene o utiliza otros objetos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: comparaciones",
        "diff": "hard",
        "q": "¿Qué diferencia existe entre asociación y composición?",
        "opts": [
            "La composición es una relación débil y la asociación es una relación fuerte.",
            "Ambas significan que un objeto contiene exactamente a los demás.",
            "La asociación representa una relación entre objetos que interactúan. La composición es una relación más estrecha en la que un objeto está formado por otros componentes.",
            "La asociación solo existe entre clases del mismo archivo."
        ],
        "ans": 2,
        "exp": "La asociación representa una relación entre objetos que interactúan. La composición es una relación más estrecha en la que un objeto está formado por otros componentes.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: comparaciones",
        "diff": "hard",
        "q": "¿Qué diferencia existe entre un atributo de clase y uno de instancia?",
        "opts": [
            "El atributo de clase solo existe si se crea un objeto.",
            "Ambos siempre tienen el mismo valor en todos los objetos.",
            "El atributo de clase se comparte entre las instancias, mientras que el atributo de instancia pertenece a cada objeto individual.",
            "El atributo de instancia se comparte entre todas las instancias de la clase."
        ],
        "ans": 2,
        "exp": "El atributo de clase se comparte entre las instancias, mientras que el atributo de instancia pertenece a cada objeto individual.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: comparaciones",
        "diff": "hard",
        "q": "¿Qué diferencia existe entre == e is en Python?",
        "opts": [
            "Son equivalentes; ambos comparan la dirección de memoria.",
            "== verifica si ambos nombres apuntan al mismo objeto en memoria.",
            "== compara si dos objetos tienen valores equivalentes. is comprueba si ambos nombres hacen referencia al mismo objeto en memoria.",
            "is compara solamente los tipos de datos de los objetos."
        ],
        "ans": 2,
        "exp": "== compara si dos objetos tienen valores equivalentes. is comprueba si ambos nombres hacen referencia al mismo objeto en memoria.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: código",
        "diff": "hard",
        "q": "¿Qué hace el siguiente código?",
        "opts": [
            "Crea una lista de personas y la imprime completa.",
            "Crea una clase Persona, inicializa el atributo nombre y crea una instancia llamada persona. Finalmente, muestra el valor Ana.",
            "Crea una función llamada Persona que muestra el texto Ana.",
            "Crea una clase Persona sin atributos y muestra el número 0."
        ],
        "ans": 1,
        "exp": "Crea una clase Persona, inicializa el atributo nombre y crea una instancia llamada persona. Finalmente, muestra el valor Ana.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">class Persona:\n    def __init__(self, nombre):\n        self.nombre = nombre\n\npersona = Persona('Ana')\nprint(persona.nombre)</div></div>"
    },

    {
        "profe": false,
        "unit": "POO - Profundización: código",
        "diff": "hard",
        "q": "¿Qué sucede si no colocamos self en un método de instancia?",
        "opts": [
            "Python lo acepta sin problemas y guarda la instancia automáticamente en memoria.",
            "La clase deja de existir al ejecutarse el programa.",
            "Python no podrá recibir automáticamente la instancia como primer argumento de ese método de la forma habitual, lo que puede provocar un error al invocarlo desde un objeto.",
            "El método se convierte en una variable global automáticamente."
        ],
        "ans": 2,
        "exp": "Python no podrá recibir automáticamente la instancia como primer argumento de ese método de la forma habitual, lo que puede provocar un error al invocarlo desde un objeto.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: código",
        "diff": "hard",
        "q": "¿Qué hace super().__init__()?",
        "opts": [
            "Ejecuta el constructor de la clase padre para inicializar los atributos que corresponden a esa clase.",
            "Crea un nuevo objeto de la clase padre cada vez que se ejecuta.",
            "Elimina el constructor de la clase hija y lo reemplaza por el del padre.",
            "Destruye la instancia actual para liberar memoria."
        ],
        "ans": 0,
        "exp": "Ejecuta el constructor de la clase padre para inicializar los atributos que corresponden a esa clase.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: código",
        "diff": "hard",
        "q": "¿Qué sucede en este ejemplo?",
        "opts": [
            "No se imprime nada, porque la clase Gato no tiene métodos propios.",
            "El resultado es Gato, porque la clase hija siempre muestra su nombre.",
            "Se produce un error, porque Gato debe redefinir sonido() obligatoriamente.",
            "Gato hereda de Animal y, como no sobrescribe el método sonido(), utiliza el método heredado. El resultado es Sonido."
        ],
        "ans": 3,
        "exp": "Gato hereda de Animal y, como no sobrescribe el método sonido(), utiliza el método heredado. El resultado es Sonido.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">class Animal:\n    def sonido(self):\n        print('Sonido')\n\nclass Gato(Animal):\n    pass\n\ngato = Gato()\ngato.sonido()</div></div>"
    },

    {
        "profe": false,
        "unit": "POO - Profundización: código",
        "diff": "hard",
        "q": "¿Qué sucede si dos objetos utilizan el mismo método, pero tienen diferentes implementaciones?",
        "opts": [
            "Solo se ejecuta el método de la clase padre para ambos objetos.",
            "Cada objeto ejecuta el comportamiento que corresponde a su propia clase. Esto es un ejemplo de polimorfismo.",
            "Ambos objetos producen el mismo resultado sin importar su clase.",
            "Se produce un error porque no pueden compartir un nombre de método."
        ],
        "ans": 1,
        "exp": "Cada objeto ejecuta el comportamiento que corresponde a su propia clase. Esto es un ejemplo de polimorfismo.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: código",
        "diff": "hard",
        "q": "¿Qué hace el decorador @staticmethod?",
        "opts": [
            "Convierte el método en un atributo que se guarda en la base de datos.",
            "Obliga a que el método se ejecute solamente al crear un objeto.",
            "Indica que un método pertenece a la clase, pero no necesita recibir automáticamente una instancia ni la clase para ejecutarse.",
            "Permite que el método modifique la clase padre automáticamente."
        ],
        "ans": 2,
        "exp": "Indica que un método pertenece a la clase, pero no necesita recibir automáticamente una instancia ni la clase para ejecutarse.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: código",
        "diff": "hard",
        "q": "¿Qué hace el decorador @property?",
        "opts": [
            "Permite ejecutar el método solamente desde la clase padre.",
            "Convierte el método en una clase independiente del programa.",
            "Permite acceder a un método como si fuera un atributo, facilitando el control y la consulta de determinados valores.",
            "Elimina el método y lo reemplaza por una variable global."
        ],
        "ans": 2,
        "exp": "Permite acceder a un método como si fuera un atributo, facilitando el control y la consulta de determinados valores.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: aplicaciones",
        "diff": "hard",
        "q": "Si necesitas controlar el saldo de una cuenta bancaria, ¿qué principio aplicarías?",
        "opts": [
            "Herencia, porque la cuenta hereda el saldo de un banco.",
            "Aplicaría encapsulación para controlar las modificaciones del saldo mediante métodos que validen las operaciones.",
            "Polimorfismo, porque cada cuenta puede tener un saldo distinto.",
            "Abstracción, porque el saldo se oculta totalmente del programa."
        ],
        "ans": 1,
        "exp": "Aplicaría encapsulación para controlar las modificaciones del saldo mediante métodos que validen las operaciones.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: aplicaciones",
        "diff": "hard",
        "q": "Si desarrollas un sistema de biblioteca, ¿qué clases podrías crear?",
        "opts": [
            "Una clase Libro y una clase Autor, sin Usuario ni Préstamo.",
            "Podría crear las clases Libro, Usuario, Biblioteca y Préstamo, cada una con sus propios atributos y métodos.",
            "Una sola clase Biblioteca con todos los datos guardados en listas.",
            "Solo funciones sueltas, sin clases, porque el sistema es pequeño."
        ],
        "ans": 1,
        "exp": "Podría crear las clases Libro, Usuario, Biblioteca y Préstamo, cada una con sus propios atributos y métodos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: aplicaciones",
        "diff": "hard",
        "q": "Si tienes distintos tipos de usuarios en un sistema, ¿cómo utilizarías la herencia?",
        "opts": [
            "Usaría la composición, porque los usuarios no comparten atributos.",
            "Crearía una clase Usuario como padre y clases hijas como Administrador y Cliente, que hereden los atributos comunes y tengan funcionalidades específicas.",
            "Crearía una clase para cada usuario, sin herencia, para evitar dependencias.",
            "Crearía una sola clase Usuario sin funcionalidades específicas."
        ],
        "ans": 1,
        "exp": "Crearía una clase Usuario como padre y clases hijas como Administrador y Cliente, que hereden los atributos comunes y tengan funcionalidades específicas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: aplicaciones",
        "diff": "hard",
        "q": "Si diferentes medios de transporte tienen un método llamado mover(), ¿qué principio podrías aplicar?",
        "opts": [
            "Polimorfismo, porque cada medio de transporte puede implementar el movimiento de una manera diferente.",
            "Herencia simple, porque todos los medios de transporte deben tener la misma implementación de mover().",
            "Abstracción, porque mover() elimina los detalles de cada transporte.",
            "Encapsulación, porque cada transporte oculta su velocidad."
        ],
        "ans": 0,
        "exp": "Polimorfismo, porque cada medio de transporte puede implementar el movimiento de una manera diferente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: aplicaciones",
        "diff": "hard",
        "q": "Si necesitas agregar una validación a muchas funciones sin modificar cada una, ¿qué utilizarías?",
        "opts": [
            "Encapsulación, porque la validación oculta las funciones dentro de una clase.",
            "Un decorador, porque permite incorporar una funcionalidad adicional a diferentes funciones sin modificar directamente su código original.",
            "Herencia, porque cada función hereda la validación de una clase padre.",
            "Sobrecarga, porque cada función puede tener la validación con un nombre distinto."
        ],
        "ans": 1,
        "exp": "Un decorador, porque permite incorporar una funcionalidad adicional a diferentes funciones sin modificar directamente su código original.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "POO - Profundización: aplicaciones",
        "diff": "hard",
        "q": "Si una clase necesita utilizar las funcionalidades de otra sin heredar de ella, ¿qué podrías utilizar?",
        "opts": [
            "Polimorfismo, porque ambas clases deben tener el mismo método.",
            "Encapsulación, porque se ocultan los atributos de la otra clase.",
            "Composición, creando un objeto de la otra clase como atributo o utilizándolo dentro de sus métodos.",
            "Herencia, porque la clase debe heredar de la otra para usar sus funciones."
        ],
        "ans": 2,
        "exp": "Composición, creando un objeto de la otra clase como atributo o utilizándolo dentro de sus métodos.",
        "extra": ""
    },


  // ===== CONCEPTOS BÁSICOS =====
  P('POO - Conceptos básicos', 'easy',
    '¿Qué es una clase en Programación Orientada a Objetos?',
    ['Una instancia concreta guardada en memoria',
     'Una plantilla que define los atributos y métodos de los objetos',
     'Un tipo de dato primitivo como int o boolean',
     'Un archivo ejecutable del sistema'],
    1,
    'DEFINICIÓN: una clase es el molde que describe qué datos (atributos) y qué comportamiento (métodos) tendrá cada objeto creado a partir de ella.'),

  P('POO - Conceptos básicos', 'easy',
    '¿Cuál es la diferencia principal entre clase y objeto?',
    ['El objeto es la plantilla y la clase es la instancia',
     'La clase es la plantilla y el objeto es una instancia creada a partir de ella',
     'Son sinónimos en cualquier lenguaje',
     'La clase solo existe en Java y el objeto solo en Python'],
    1,
    'La clase es la definición (plantilla). El objeto es una instancia concreta de esa clase, con sus propios valores.',
    TABLA([
      ['Aspecto', 'Clase', 'Objeto'],
      ['Qué es', 'Plantilla / molde', 'Instancia concreta'],
      ['Existe', 'En el código fuente', 'En memoria, al ejecutar el programa'],
      ['Cantidad', 'Una definición', 'Puede haber muchos objetos de una clase'],
      ['Ejemplo', 'class Persona', 'ana = Persona("Ana")'],
    ])),

  P('POO - Conceptos básicos', 'medium',
    '¿Cuáles son los cuatro pilares de la POO?',
    ['Clases, objetos, métodos y atributos',
     'Compilación, enlace, ejecución y depuración',
     'Encapsulamiento, herencia, polimorfismo y abstracción',
     'Herencia, sobrecarga, copia y destrucción'],
    2,
    'Los cuatro pilares son encapsulamiento, herencia, polimorfismo y abstracción. Clases, objetos, métodos y atributos son los elementos básicos, no los pilares.'),

  P('POO - Pilares', 'easy',
    '¿Qué es el encapsulamiento?',
    ['Heredar atributos de una clase padre',
     'Ocultar el estado interno del objeto y controlar su acceso mediante métodos',
     'Dar varias formas a un mismo método',
     'Crear objetos sin usar un constructor'],
    1,
    'DEFINICIÓN: agrupar datos y comportamiento dentro del objeto y ocultar los atributos (por ejemplo, con private), exponiendo solo lo necesario mediante métodos o propiedades.'),

  P('POO - Pilares', 'easy',
    '¿Qué permite la herencia?',
    ['Que una clase hija reutilice y extienda atributos y métodos de una clase padre',
     'Que un objeto pertenezca a varias clases a la vez',
     'Ocultar detalles de implementación al usuario',
     'Escribir métodos sin cuerpo'],
    0,
    'DEFINICIÓN: la clase hija (subclase) hereda los miembros de la clase padre (superclase) y puede añadir o redefinir comportamiento. Relación "es un".'),

  P('POO - Pilares', 'medium',
    '¿Qué significa polimorfismo?',
    ['Que una clase tenga muchos atributos',
     'Que un mismo mensaje o método produzca comportamientos distintos según el tipo real del objeto que lo recibe',
     'Que una variable cambie de tipo durante la ejecución en todos los lenguajes',
     'Que un objeto se destruya varias veces'],
    1,
    'Ejemplo: animal.hablar() imprime "Guau" si el objeto es un Perro y "Miau" si es un Gato, aunque la llamada sea la misma.'),

  P('POO - Pilares', 'medium',
    '¿Qué es la abstracción?',
    ['Eliminar métodos que no se usan',
     'Convertir cualquier objeto a texto',
     'Mostrar solo lo esencial del objeto y ocultar los detalles de implementación',
     'Copiar un objeto a otra posición de memoria'],
    2,
    'DEFINICIÓN: modelar solo las características relevantes para el problema. Quien usa la clase sabe qué hace, no cómo lo hace por dentro.'),

  // ===== RELACIONES ENTRE CLASES =====
  P('POO - Relaciones entre clases', 'medium',
    '¿Cuál es la diferencia entre sobrecarga (overloading) y sobreescritura (overriding)?',
    ['Son lo mismo, solo cambia el nombre',
     'Sobrecarga: mismo nombre con distinta lista de parámetros en la misma clase. Sobreescritura: una subclase redefine un método heredado con la misma firma',
     'La sobreescritura ocurre dentro de una misma clase y la sobrecarga entre clases hermanas',
     'La sobrecarga solo existe en Python'],
    1,
    'La sobrecarga es un caso de polimorfismo estático (se decide al compilar). La sobreescritura es polimorfismo dinámico (se decide al ejecutar).',
    TABLA([
      ['Aspecto', 'Sobrecarga', 'Sobreescritura'],
      ['Dónde ocurre', 'En la misma clase', 'Entre clase padre e hija'],
      ['Firma', 'Parámetros distintos', 'Misma firma (nombre y parámetros)'],
      ['Cuándo se resuelve', 'En compilación', 'En ejecución'],
    ])),

  P('POO - Relaciones entre clases', 'medium',
    'En la relación "Coche tiene un Motor", ¿qué tipo de relación es?',
    ['Herencia (es-un)',
     'Composición o agregación (tiene-un)',
     'Polimorfismo por sobreescritura',
     'Encapsulamiento puro'],
    1,
    'Coche es-un Vehículo sería herencia. Coche tiene-un Motor es una relación de composición o agregación (has-a), no de herencia.'),

  P('POO - Relaciones entre clases', 'hard',
    '¿Cuál es la diferencia entre composición y agregación?',
    ['En composición las partes dependen del todo y se destruyen con él; en agregación las partes pueden existir por separado',
     'En agregación las partes siempre mueren junto con el todo',
     'Son equivalentes en todos los casos',
     'La composición solo se usa entre clases abstractas'],
    0,
    'Ambas son relaciones "tiene-un". La diferencia está en el ciclo de vida de las partes.',
    TABLA([
      ['Relación', 'Dependencia de vida', 'Ejemplo'],
      ['Composición', 'Fuerte: si muere el todo, mueren las partes', 'Casa y Habitación'],
      ['Agregación', 'Débil: las partes sobreviven', 'Departamento y Profesores'],
      ['Asociación', 'Independiente, solo se conocen', 'Estudiante y Curso'],
    ])),

  P('POO - Relaciones entre clases', 'medium',
    '¿Qué es el acoplamiento y la cohesión en un buen diseño?',
    ['Alto acoplamiento y baja cohesión son lo ideal',
     'Bajo acoplamiento significa que las clases dependen poco unas de otras; alta cohesión significa que cada clase tiene una responsabilidad bien enfocada',
     'Son sinónimos que miden el tamaño de una clase',
     'Ambos deben ser máximos para reutilizar código'],
    1,
    'Se busca alta cohesión y bajo acoplamiento: cambios en una clase deberían afectar lo menos posible a las demás.'),

  // ===== CLASES Y MIEMBROS =====
  P('POO - Clases y miembros', 'medium',
    '¿Para qué sirve el constructor de una clase?',
    ['Destruir el objeto cuando termina el programa',
     'Inicializar el objeto en el momento en que se crea',
     'Declarar la clase como abstracta',
     'Importar otras clases'],
    1,
    'El constructor se ejecuta al crear el objeto con new (Java) o al llamar a la clase (Python) y deja los atributos con valores iniciales.'),

  P('POO - Clases y miembros', 'medium',
    '¿Qué caracteriza a un atributo static (de clase) frente a uno de instancia?',
    ['Es compartido por todas las instancias de la clase',
     'Solo puede usarse dentro de los constructores',
     'Se borra cada vez que se crea un objeto',
     'Solo puede almacenar texto'],
    0,
    'Un atributo static pertenece a la clase: existe una sola copia. Un atributo de instancia tiene una copia por cada objeto.'),

  P('POO - Clases y miembros', 'medium',
    '¿Cuándo conviene usar un método estático?',
    ['Cuando necesita acceder a los datos de una instancia concreta',
     'Cuando la lógica no depende del estado de un objeto específico',
     'Siempre que quieras heredar el método',
     'Solo para crear nuevos objetos'],
    1,
    'Ejemplo: Math.max(a, b) no necesita ningún objeto. Un método estático no recibe this/self.'),

  P('POO - Clases y miembros', 'medium',
    '¿Qué ventaja tienen los getters y setters frente a dejar los atributos públicos?',
    ['Hacen el programa más rápido siempre',
     'Eliminan la necesidad de usar clases',
     'Permiten validar y controlar cómo cambia el estado interno del objeto',
     'Obligan a usar herencia'],
    2,
    'Un setter puede rechazar valores inválidos (por ejemplo, una edad negativa) sin que quien usa la clase lo sepa ni lo pueda evitar.'),

  P('POO - Clases y miembros', 'hard',
    '¿Qué es una clase final en Java?',
    ['Una clase que se ejecuta al final del programa',
     'Una clase que no puede ser heredada por otras clases',
     'Una clase sin atributos',
     'Una clase que solo tiene métodos estáticos'],
    1,
    'Declarar final en la clase impide que se extienda. Es útil cuando la implementación no debe modificarse (por ejemplo, String).'),

  // ===== CLASES ABSTRACTAS E INTERFACES =====
  P('POO - Abstracción e interfaces', 'medium',
    '¿Qué es una clase abstracta?',
    ['Una clase que no puede tener atributos',
     'Una clase que no puede instanciarse directamente y que puede tener métodos abstractos y también concretos',
     'Una clase que solo tiene métodos estáticos',
     'Una clase que se ejecuta en segundo plano'],
    1,
    'Sirve como base común para las subclases. Obliga a las hijas a implementar los métodos abstractos.'),

  P('POO - Abstracción e interfaces', 'hard',
    '¿Cuál es la diferencia entre una clase abstracta y una interfaz?',
    ['La interfaz puede tener atributos de instancia con estado; la clase abstracta no',
     'La clase abstracta puede tener estado y métodos concretos; la interfaz define un contrato de comportamiento',
     'Una clase puede extender varias clases abstractas en Java',
     'Son lo mismo en Java y en Python'],
    1,
    'En Java una clase solo puede extender a UNA clase, pero puede implementar VARIAS interfaces.',
    TABLA([
      ['Característica', 'Clase abstracta', 'Interfaz'],
      ['Atributos con estado', 'Sí', 'No (solo constantes)'],
      ['Métodos concretos', 'Sí', 'Sí con default (Java 8+)'],
      ['Herencia', 'Una sola (extends)', 'Varias (implements)'],
      ['Se puede instanciar', 'No', 'No'],
    ])),

  P('POO - Abstracción e interfaces', 'medium',
    '¿Puede una clase abstracta tener constructor?',
    ['No, nunca',
     'Solo si es pública',
     'Sí, aunque no puede instanciarse directamente; el constructor lo usan sus subclases',
     'Solo en Python'],
    2,
    'El constructor de la clase abstracta se ejecuta al crear la subclase (mediante super() en Java o Python).'),

  P('POO - Abstracción e interfaces', 'hard',
    '¿Qué establece el principio de sustitución de Liskov?',
    ['Toda clase debe ser abstracta',
     'Las subclases no pueden sobrescribir métodos',
     'Un objeto de una subclase debe poder usarse en lugar de su clase padre sin romper el programa',
     'Una clase solo puede tener un padre y ningún hijo'],
    2,
    'Es la "L" de SOLID. Si una subclase cambia el comportamiento esperado del padre, el diseño de herencia está mal planteado.'),

  P('POO - Abstracción e interfaces', 'medium',
    '¿Qué establece el principio de responsabilidad única (SRP)?',
    ['Una clase debe tener una sola razón para cambiar',
     'Una clase solo puede tener un método',
     'Solo puede existir una instancia de cada clase',
     'Cada clase debe heredar de una única clase base'],
    0,
    'Es la "S" de SOLID. Cada clase debe encargarse de una única responsabilidad bien definida.'),

  // ===== POLIMORFISMO EN TIEMPO DE EJECUCIÓN =====
  P('POO - Polimorfismo', 'medium',
    '¿Cuándo se decide qué versión de un método sobreescrito se ejecuta?',
    ['En tiempo de compilación, siempre',
     'En tiempo de ejecución, según el tipo real del objeto',
     'Solo al cerrar el programa',
     'Nunca, no es polimorfismo'],
    1,
    'Se llama enlace dinámico (dynamic dispatch): la JVM o el intérprete busca la implementación según el tipo real del objeto, no según el tipo de la variable.'),

  P('POO - Polimorfismo', 'hard',
    '¿Qué es el duck typing (tipado de pato) en Python?',
    ['Un objeto es válido si tiene los métodos que se necesitan, sin importar su clase',
     'Un tipo de herencia múltiple exclusivo de Python',
     'Una forma de ocultar atributos',
     'Una técnica para copiar objetos profundamente'],
    0,
    'Frase clave: "si camina como pato y hace cuac como pato, es un pato". Python no verifica la clase, sino que el objeto responda a los métodos.'),

  // ===== LENGUAJES =====
  P('POO - Java', 'medium',
    '¿Cuál es la diferencia entre extends e implements en Java?',
    ['extends cumple un contrato de interfaz; implements hereda de una clase',
     'extends hereda de una sola clase; implements cumple el contrato de una o varias interfaces',
     'Son equivalentes y pueden usarse indistintamente',
     'extends solo sirve para declarar constantes'],
    1,
    'Una clase puede extender a una sola clase, pero implementar muchas interfaces.'),

  P('POO - Java', 'hard',
    '¿Por qué Java no permite herencia múltiple entre clases?',
    ['Porque Java no tiene objetos',
     'Porque todas sus clases son final',
     'Para evitar ambigüedades, como el problema del diamante; para lograr algo similar se usan interfaces',
     'Porque solo admite métodos estáticos'],
    2,
    'Problema del diamante: si dos padres tienen un método con el mismo nombre, no está claro cuál heredar. Por eso se usan interfaces.'),

  P('POO - Java', 'easy',
    'En Java, ¿qué palabra clave se usa para referirse al objeto actual?',
    ['self', 'this', 'me', 'current'],
    1,
    'this es la referencia a la instancia actual. En Python el equivalente es self, que debe escribirse explícitamente como primer parámetro.'),

  P('POO - Java', 'medium',
    'En Java, ¿quién libera la memoria de los objetos que ya no tienen referencias?',
    ['El programador, con delete',
     'El constructor',
     'El recolector de basura (Garbage Collector)',
     'La clase abstracta'],
    2,
    'A diferencia de C++, donde se usa delete, Java libera automáticamente los objetos sin referencias mediante el Garbage Collector.'),

  P('POO - Python', 'medium',
    '¿Qué representa self en un método de instancia de Python?',
    ['La clase padre',
     'Una variable global',
     'La referencia al objeto sobre el que se llama el método',
     'El módulo actual'],
    2,
    'self no es una palabra reservada: es el nombre por convención del primer parámetro, y recibe automáticamente el objeto.'),

  P('POO - Python', 'easy',
    '¿Cómo se declara la herencia de una clase Hija a partir de Padre en Python?',
    ['class Hija extends Padre:',
     'class Hija(Padre):',
     'class Hija : Padre {',
     'herencia Hija from Padre'],
    1,
    'En Python la herencia se indica entre paréntesis en la definición de la clase. Si la hija define __init__, usa super() para llamar al del padre.'),

  P('POO - Python', 'hard',
    '¿Qué diferencia hay entre copia superficial (shallow copy) y copia profunda (deep copy)?',
    ['La superficial crea copias de todos los objetos internos; la profunda solo copia las referencias',
     'Son iguales, solo cambia el nombre de la función',
     'La superficial copia el objeto principal, pero los objetos anidados siguen compartidos; la profunda duplica también los anidados',
     'La profunda no copia los atributos primitivos'],
    2,
    'En Python: copy.copy() es superficial y copy.deepcopy() es profunda. Modificar una lista anidada en una copia superficial afecta al original.'),
P('POO - Java (constructores)', 'medium', '¿Se puede sobrecargar un método cambiando solo su tipo de retorno?',
    ['Sí, siempre', 'No: la firma debe diferir en la lista de parámetros', 'Solo en Python', 'Solo si el método es static'], 1,
    'La firma del método es nombre + tipos de parámetros. El tipo de retorno no forma parte de la firma para sobrecarga.'),
  P('POO - Java (constructores)', 'medium', '¿Qué hace super() dentro de un constructor de Java?',
    ['Llama al constructor de la clase padre', 'Crea un objeto nuevo', 'Llama a un método estático', 'Destruye el objeto'], 0,
    'super(...) debe ser la primera instrucción del constructor de la subclase.'),
  P('POO - Java (constructores)', 'medium', '¿Qué hace this(...) dentro de un constructor de Java?',
    ['Llama a otro constructor de la misma clase', 'Llama al constructor del padre', 'Devuelve el objeto creado', 'Borra los atributos'], 0,
    'Permite encadenar constructores para no repetir código de inicialización.'),
  P('POO - Java (igualdad)', 'hard', '¿Cuál es la diferencia entre == y equals() para objetos en Java?',
    ['== compara referencias (si son el mismo objeto); equals() compara contenido si la clase lo redefine', 'equals compara direcciones de memoria', 'Son idénticos siempre', '== solo sirve para números'], 0,
    'Dos Strings con el mismo texto dan false con == pero true con equals().',
    TABLA([['Operador', 'Compara', 'Ejemplo'], ['==', 'Referencias (direcciones)', 'a == b'], ['equals()', 'Contenido, si está redefinido', 'a.equals(b)']])),
  P('POO - Java (igualdad)', 'medium', 'Si dos objetos son iguales según equals(), ¿qué debe cumplirse con hashCode()?',
    ['Deben devolver el mismo hashCode', 'Deben devolver valores distintos', 'hashCode no importa', 'Ambos deben devolver 0'], 0,
    'Regla del contrato Java: objetos iguales deben tener el mismo hashCode (por eso se redefinen juntos).'),
  P('POO - Java (igualdad)', 'medium', '¿Para qué se suele sobrescribir toString() en Java?',
    ['Para dar una representación en texto legible del objeto', 'Para convertir el objeto en número', 'Para eliminarlo de memoria', 'Para copiarlo'], 0,
    'Sin redefinirlo se imprime algo como Persona@1b6d3586.'),
  P('POO - Java (inmutabilidad)', 'medium', '¿Por qué String es inmutable en Java?',
    ['Porque una vez creado no puede cambiar su contenido; cada modificación crea un nuevo objeto', 'Porque no tiene atributos', 'Porque no puede usarse en métodos', 'Porque es una interfaz'], 0,
    'La inmutabilidad hace seguro compartir Strings y permite usarlos como claves de HashMap.'),
  P('POO - Java (clases internas)', 'medium', '¿Qué es una clase anidada estática en Java?',
    ['Una clase dentro de otra que no requiere una instancia de la clase externa', 'Una clase que no puede tener métodos', 'Una clase exclusiva de Android', 'Una interfaz genérica'], 0,
    'Se crea con new ClaseExterna.ClaseAnidada(); una clase interna no estática sí necesita una instancia externa.'),

  P('POO - Patrones de diseño', 'hard', '¿Qué garantiza el patrón Singleton?',
    ['Que exista una única instancia de la clase, con un punto de acceso global', 'Que existan muchas instancias iguales', 'Que la clase sea heredada obligatoriamente', 'Que no tenga constructor'], 0,
    'Ejemplos típicos: una conexión a base de datos o un gestor de configuración.'),
  P('POO - Patrones de diseño', 'hard', '¿Cuál es la diferencia entre Factory y Builder?',
    ['Factory crea objetos de distintos tipos según un parámetro; Builder construye un objeto complejo paso a paso', 'Son lo mismo', 'Builder crea clases en tiempo de ejecución', 'Factory solo sirve para strings'], 0,
    'Factory decide QUÉ objeto crear. Builder decide CÓMO armar uno complejo.',
    TABLA([['Patrón', 'Propósito', 'Ejemplo'], ['Factory', 'Elegir qué clase instanciar', 'Crear un Pago tipo Tarjeta o PayPal'], ['Builder', 'Construir paso a paso', 'Construir una Pizza con varios ingredientes']])),
  P('POO - Patrones de diseño', 'hard', '¿Qué problema resuelve el patrón Observer?',
    ['Notificar automáticamente a varios objetos cuando cambia el estado de otro', 'Compartir un único objeto en memoria', 'Ordenar listas', 'Acceder a bases de datos'], 0,
    'Ejemplo: suscriptores que reciben una alerta cuando cambia el precio de un producto.'),
  P('POO - Patrones de diseño', 'hard', '¿Qué permite el patrón Strategy?',
    ['Cambiar un algoritmo en tiempo de ejecución encapsulándolo en clases intercambiables', 'Crear objetos sin constructor', 'Heredar de varias clases', 'Ocultar métodos'], 0,
    'Ejemplo: calcular un envío con estrategias intercambiables (terrestre, aéreo) sin tocar la clase de pedidos.'),

  P('POO - Python', 'medium', '¿Qué define el orden de resolución de métodos (MRO) en Python?',
    ['El orden en que Python busca un método en la jerarquía con herencia múltiple', 'El orden en que se importan módulos', 'El orden alfabético de métodos', 'La memoria asignada a un objeto'], 0,
    'Puedes verlo con Clase.mro().'),
  P('POO - Python', 'medium', '¿Para qué sirve el decorador @property en Python?',
    ['Para acceder a un método como si fuera un atributo, con lógica de lectura controlada', 'Para declarar una constante global', 'Para heredar automáticamente', 'Para eliminar un atributo'], 0,
    'Permite validar o calcular valores sin cambiar la forma de usar el objeto (obj.area en vez de obj.area()).'),
  P('POO - Python', 'medium', '¿Cuál es la diferencia entre @classmethod y @staticmethod?',
    ['classmethod recibe la clase (cls) como primer parámetro; staticmethod no recibe ni la clase ni la instancia', 'staticmethod recibe self; classmethod no recibe nada', 'Son iguales', 'classmethod solo funciona fuera de clases'], 0,
    'classmethod suele usarse como constructor alternativo (por ejemplo, desde_texto).',
    TABLA([['Decorador', 'Primer parámetro', 'Uso típico'], ['(normal)', 'self (instancia)', 'Lógica del objeto'], ['@classmethod', 'cls (la clase)', 'Constructores alternativos'], ['@staticmethod', 'Ninguno', 'Utilidades relacionadas']])),
  P('POO - Python', 'medium', '¿Qué devuelve el método __repr__ en Python?',
    ['Una representación técnica del objeto, útil para depurar', 'Repite el objeto en pantalla N veces', 'Elimina el objeto de memoria', 'Crea una copia del objeto'], 0,
    'print usa __str__ (si existe) y __repr__ si no. Se recomienda que __repr__ sea legible para desarrolladores.'),

  P('POO - Principios de diseño', 'medium', '¿Por qué se recomienda preferir composición sobre herencia?',
    ['Reduce el acoplamiento y permite cambiar comportamientos sin atar a una jerarquía rígida', 'Porque la herencia no existe en POO', 'Porque la composición siempre es más rápida', 'Porque la herencia solo funciona con interfaces'], 0,
    'Regla práctica: usa herencia para relaciones es-un estables; usa composición cuando el comportamiento puede cambiar.'),
  P('POO - Principios de diseño', 'medium', '¿Qué establece el principio Abierto/Cerrado (OCP) de SOLID?',
    ['Las entidades deben estar abiertas a extensión pero cerradas a modificación', 'Las clases no pueden extenderse', 'Todas las clases deben ser abstractas', 'Hay que modificar el código existente para agregar funciones'], 0,
    'Para agregar comportamiento nuevo se extiende (herencia o interfaces) sin tocar el código que ya funciona.'),
  P('POO - Principios de diseño', 'hard', '¿Qué dice el principio de inversión de dependencias (DIP) de SOLID?',
    ['Depender de abstracciones (interfaces), no de implementaciones concretas', 'Invertir el orden de las clases', 'Los módulos de alto nivel deben depender de los de bajo nivel', 'No usar interfaces'], 0,
    'Un servicio de alto nivel recibe una interfaz de repositorio, no una clase concreta de base de datos.'),
  P('POO - UML', 'hard', '¿Qué diferencia hay entre asociación y dependencia en UML?',
    ['La asociación es una relación estructural duradera; la dependencia indica un uso temporal, como un parámetro de método', 'Son iguales', 'La dependencia es permanente', 'La asociación solo existe entre interfaces'], 0,
    'Asociación: la clase tiene una referencia a otra. Dependencia: una clase usa a otra en un método, sin guardarla como atributo.'),

  ];

export default preguntas_poo;
