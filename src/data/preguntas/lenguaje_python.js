const preguntas_lenguaje_python = [


// ============================================================
// PYTHON 1 - VARIABLES, SENTENCIAS IF, BUCLES
// ============================================================


    // Variables y entrada de datos
    {
        "profe": false,
        "unit": "Python 1 - Variables y Entrada",
        "diff": "easy",
        "q": "¿Qué función se usa para obtener entrada del usuario en Python?",
        "opts": [
            "input()",
            "print()",
            "int()",
            "float()"
        ],
        "ans": 0,
        "exp": "input() permite obtener entrada del usuario desde el teclado. print() muestra información, int() y float() convierten tipos de datos."
    },
    {
        "profe": false,
        "unit": "Python 1 - Variables y Entrada",
        "diff": "easy",
        "q": "¿Qué función convierte un valor a número entero?",
        "opts": [
            "int()",
            "float()",
            "str()",
            "input()"
        ],
        "ans": 0,
        "exp": "int() convierte un valor a número entero. float() convierte a decimal, str() a texto y input() obtiene entrada del usuario."
    },
    {
        "profe": false,
        "unit": "Python 1 - Variables y Entrada",
        "diff": "easy",
        "q": "¿Cómo se almacena la entrada del usuario en una variable?",
        "opts": [
            "nombre = input('¿Cuál es tu nombre?')",
            "input('¿Cuál es tu nombre?') = nombre",
            "nombre == input('¿Cuál es tu nombre?')",
            "input(nombre) = '¿Cuál es tu nombre?'"
        ],
        "ans": 0,
        "exp": "La sintaxis correcta es: variable = input('mensaje'), que almacena lo que el usuario escribe en la variable."
    },
    {
        "profe": false,
        "unit": "Python 1 - Variables y Entrada",
        "diff": "easy",
        "q": "¿Cómo se muestra un mensaje en pantalla en Python?",
        "opts": [
            "print('Hola Mundo')",
            "output('Hola Mundo')",
            "display('Hola Mundo')",
            "show('Hola Mundo')"
        ],
        "ans": 0,
        "exp": "print() es la función estándar en Python para mostrar información en pantalla."
    },
    {
        "profe": false,
        "unit": "Python 1 - Variables y Entrada",
        "diff": "medium",
        "q": "¿Qué hace el código: nombre = input('Nombre: '); print('Hola', nombre)?",
        "opts": [
            "Pide el nombre y muestra un saludo",
            "Solo muestra un saludo",
            "Solo pide el nombre",
            "Da un error"
        ],
        "ans": 0,
        "exp": "Primero pide el nombre con input(), lo guarda en 'nombre', y luego muestra 'Hola' seguido del nombre."
    },

    // Sentencias If
    {
        "profe": false,
        "unit": "Python 1 - Sentencias If",
        "diff": "easy",
        "q": "¿Qué palabra clave inicia una condición en Python?",
        "opts": [
            "if",
            "elif",
            "else",
            "when"
        ],
        "ans": 0,
        "exp": "if inicia una condición. elif es para condiciones adicionales y else para el caso contrario."
    },
    {
        "profe": false,
        "unit": "Python 1 - Sentencias If",
        "diff": "easy",
        "q": "¿Qué palabra clave se usa para el caso por defecto en una condición?",
        "opts": [
            "else",
            "elif",
            "if",
            "default"
        ],
        "ans": 0,
        "exp": "else se ejecuta cuando ninguna condición anterior (if/elif) se cumple."
    },
    {
        "profe": false,
        "unit": "Python 1 - Sentencias If",
        "diff": "medium",
        "q": "¿Qué operador verifica si un valor es mayor o igual que otro?",
        "opts": [
            ">=",
            "<=",
            "==",
            "!="
        ],
        "ans": 0,
        "exp": ">= verifica mayor o igual. <= menor o igual, == igual, != diferente."
    },
    {
        "profe": false,
        "unit": "Python 1 - Sentencias If",
        "diff": "medium",
        "q": "¿Qué operador lógico verifica que dos condiciones sean verdaderas?",
        "opts": [
            "and",
            "or",
            "not",
            "both"
        ],
        "ans": 0,
        "exp": "and requiere que ambas condiciones sean verdaderas. or requiere al menos una, not invierte el valor."
    },
    {
        "profe": false,
        "unit": "Python 1 - Sentencias If",
        "diff": "hard",
        "q": "¿Qué muestra? x = 10; if x > 5: print('A'); if x > 15: print('B'); else: print('C')",
        "opts": [
            "A y C",
            "A y B",
            "Solo A",
            "A, B y C"
        ],
        "ans": 0,
        "exp": "Primera condición (x>5) verdadera → 'A'. Segunda (x>15) falsa → else imprime 'C'."
    },

    // Bucles
    {
        "profe": false,
        "unit": "Python 1 - Bucles For",
        "diff": "easy",
        "q": "¿Qué palabra clave inicia un bucle for?",
        "opts": [
            "for",
            "while",
            "loop",
            "repeat"
        ],
        "ans": 0,
        "exp": "for inicia un bucle for. while es para bucles condicionales."
    },
    {
        "profe": false,
        "unit": "Python 1 - Bucles For",
        "diff": "easy",
        "q": "¿Qué hace: for i in range(5): print(i)?",
        "opts": [
            "Imprime 0,1,2,3,4",
            "Imprime 1,2,3,4,5",
            "Imprime 0 al 5",
            "Da error"
        ],
        "ans": 0,
        "exp": "range(5) genera 0,1,2,3,4. El bucle imprime cada número."
    },
    {
        "profe": false,
        "unit": "Python 1 - Bucles For",
        "diff": "medium",
        "q": "¿Cuántas veces se ejecuta: for i in range(3, 8): print(i)?",
        "opts": [
            "5",
            "6",
            "4",
            "7"
        ],
        "ans": 0,
        "exp": "range(3,8) genera 3,4,5,6,7 → 5 números."
    },
    {
        "profe": false,
        "unit": "Python 1 - Bucles For",
        "diff": "medium",
        "q": "¿Qué palabra clave detiene un bucle antes de tiempo?",
        "opts": [
            "break",
            "continue",
            "stop",
            "exit"
        ],
        "ans": 0,
        "exp": "break termina el bucle inmediatamente. continue salta a la siguiente iteración."
    },

    // Funciones de String
    {
        "profe": false,
        "unit": "Python 1 - Funciones de String",
        "diff": "medium",
        "q": "¿Qué función elimina espacios al inicio y final de un texto?",
        "opts": [
            ".strip()",
            ".lower()",
            ".upper()",
            ".replace()"
        ],
        "ans": 0,
        "exp": ".strip() elimina espacios al inicio y final. .lower() minúsculas, .upper() mayúsculas, .replace() reemplaza."
    },
    {
        "profe": false,
        "unit": "Python 1 - Funciones de String",
        "diff": "medium",
        "q": "¿Qué función convierte un texto a minúsculas?",
        "opts": [
            ".lower()",
            ".upper()",
            ".strip()",
            ".capitalize()"
        ],
        "ans": 0,
        "exp": ".lower() convierte a minúsculas. .upper() a mayúsculas, .strip() elimina espacios."
    },

    // Statistics Calculator
    {
        "profe": false,
        "unit": "Python 1 - Statistics Calculator",
        "diff": "hard",
        "q": "En Statistics Calculator, ¿qué valor inicial tienen max y min?",
        "opts": [
            "None",
            "0",
            "null",
            "undefined"
        ],
        "ans": 0,
        "exp": "max y min se inicializan con None para detectar el primer valor."
    },

    // PYTHON 1 - GRÁFICOS CON TURTLE

    {
        "profe": false,
        "unit": "Python - Turtle Gráficos",
        "diff": "easy",
        "q": "¿Qué módulo se usa para dibujar con tortuga en Python?",
        "opts": [
            "turtle",
            "graphics",
            "tkinter",
            "pygame"
        ],
        "ans": 0,
        "exp": "turtle es el módulo estándar de Python para dibujar con una tortuga."
    },
    {
        "profe": false,
        "unit": "Python - Turtle Gráficos",
        "diff": "easy",
        "q": "¿Qué comando mueve la tortuga hacia adelante?",
        "opts": [
            "turtle.forward(distancia)",
            "turtle.backward(distancia)",
            "turtle.goto(x, y)",
            "turtle.circle(radio)"
        ],
        "ans": 0,
        "exp": "forward() mueve la tortuga hacia adelante. backward() hacia atrás, goto() a una posición."
    },
    {
        "profe": false,
        "unit": "Python - Turtle Gráficos",
        "diff": "easy",
        "q": "¿Qué comando gira la tortuga a la derecha?",
        "opts": [
            "turtle.right(ángulo)",
            "turtle.left(ángulo)",
            "turtle.goto(x, y)",
            "turtle.setheading(ángulo)"
        ],
        "ans": 0,
        "exp": "right() gira a la derecha. left() gira a la izquierda."
    },
    {
        "profe": false,
        "unit": "Python - Turtle Gráficos",
        "diff": "medium",
        "q": "¿Qué comando cambia el color del lápiz?",
        "opts": [
            "turtle.color(color)",
            "turtle.pencolor(color)",
            "turtle.fillcolor(color)",
            "Todas las anteriores"
        ],
        "ans": 3,
        "exp": "color() cambia lápiz y relleno. pencolor() solo lápiz, fillcolor() solo relleno."
    },
    {
        "profe": false,
        "unit": "Python - Turtle Gráficos",
        "diff": "medium",
        "q": "¿Qué comando dibuja un círculo?",
        "opts": [
            "turtle.circle(radio)",
            "turtle.forward(radio)",
            "turtle.circle(radio, ángulo)",
            "turtle.goto(radio)"
        ],
        "ans": 0,
        "exp": "circle(radio) dibuja un círculo completo con el radio especificado."
    },
    {
        "profe": false,
        "unit": "Python - Turtle Gráficos",
        "diff": "hard",
        "q": "¿Qué hace: tia.begin_fill(); tia.circle(50); tia.end_fill()?",
        "opts": [
            "Dibuja un círculo relleno",
            "Dibuja un círculo vacío",
            "Dibuja un cuadrado relleno",
            "Dibuja un círculo con borde diferente"
        ],
        "ans": 0,
        "exp": "begin_fill() y end_fill() rodean el dibujo para rellenarlo con el color actual."
    },

// PYTHON 2 - MATRICES Y FUNCIONES
    {
        "profe": false,
        "unit": "Python 2 - Funciones",
        "diff": "easy",
        "q": "¿Qué palabra clave define una función en Python?",
        "opts": [
            "def",
            "function",
            "define",
            "func"
        ],
        "ans": 0,
        "exp": "def es la palabra clave para definir funciones. Ej: def mi_funcion():"
    },
    {
        "profe": false,
        "unit": "Python 2 - Funciones",
        "diff": "easy",
        "q": "¿Qué palabra clave retorna un valor de una función?",
        "opts": [
            "return",
            "ret",
            "output",
            "result"
        ],
        "ans": 0,
        "exp": "return devuelve un valor de la función. Si no se usa, la función retorna None."
    },
    {
        "profe": false,
        "unit": "Python 2 - Funciones",
        "diff": "medium",
        "q": "¿Qué hace: def sumar(a, b): return a + b?",
        "opts": [
            "Define una función que suma dos números",
            "Define una función que resta",
            "Define una función que multiplica",
            "Define una función que divide"
        ],
        "ans": 0,
        "exp": "La función sumar recibe a y b, y devuelve su suma con el operador +."
    },
    {
        "profe": false,
        "unit": "Python 2 - Funciones",
        "diff": "hard",
        "q": "¿Qué es una función recursiva?",
        "opts": [
            "Una función que se llama a sí misma",
            "Una función que llama a otra función",
            "Una función que no retorna",
            "Una función que es llamada por el sistema"
        ],
        "ans": 0,
        "exp": "Una función recursiva es aquella que se llama a sí misma para resolver un problema dividido en subproblemas."
    },

// PYTHON 3 - GUI Y OOP

    {
        "profe": false,
        "unit": "Python 3 - Programación Orientada a Objetos",
        "diff": "medium",
        "q": "¿Qué palabra clave define una clase en Python?",
        "opts": [
            "class",
            "def",
            "object",
            "new"
        ],
        "ans": 0,
        "exp": "class es la palabra clave para definir una clase. Ej: class MiClase:"
    },
    {
        "profe": false,
        "unit": "Python 3 - Programación Orientada a Objetos",
        "diff": "hard",
        "q": "¿Qué método se ejecuta al crear una instancia de una clase?",
        "opts": [
            "__init__",
            "__str__",
            "__new__",
            "__call__"
        ],
        "ans": 0,
        "exp": "__init__ es el constructor de la clase y se ejecuta al crear una instancia."
    },
    {
        "profe": false,
        "unit": "Python 3 - Programación Orientada a Objetos",
        "diff": "hard",
        "q": "¿Qué método define cómo se representa un objeto como string?",
        "opts": [
            "__str__",
            "__init__",
            "__repr__",
            "__call__"
        ],
        "ans": 0,
        "exp": "__str__ define la representación en string del objeto, usada por print()."
    }

]

export default preguntas_lenguaje_python;