const preguntas_lenguaje_css = [




// ==================== BÁSICO - Encontrar errores visuales ====================

{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug CSS 1", diff: "easy",
q: "HTML:\n<div class=\"caja\">Texto</div>\n\nCSS:\n.caja {\n    color: red;\n    colour: blue;\n}\n\nError: El texto se ve rojo, no azul. Por que?",
opts: ["colour no es propiedad valida en CSS", "color tiene prioridad", "ambas", "ninguna"],
ans: 2, exp: "colour no existe en CSS, la propiedad correcta es color"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug CSS 2", diff: "easy",
q: "HTML:\n<div class=\"caja\">Texto</div>\n\nCSS:\n.caja {\n    background-color: blue;\n    background-colour: red;\n}\n\nError: El fondo se ve azul, no rojo. Por que?",
opts: ["background-colour no es valido", "background-color tiene prioridad", "ambas", "ninguna"],
ans: 0, exp: "background-colour no existe, la propiedad correcta es background-color"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug CSS 3", diff: "easy",
q: "HTML:\n<div class=\"caja\">Texto</div>\n\nCSS:\n.caja {\n    font-size: 16px;\n    font-size: 20px;\n}\n\nError: El texto se ve de 20px, no 16px. Por que?",
opts: ["la ultima declaracion prevalece", "font-size solo acepta un valor", "ambas", "ninguna"],
ans: 0, exp: "CSS aplica la ultima regla que coincide"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug CSS 4", diff: "easy",
q: "HTML:\n<p class=\"texto\">Hola</p>\n\nCSS:\n.texto {\n    font-weight: bold;\n}\np {\n    font-weight: normal;\n}\n\nError: El texto se ve normal, no bold. Por que?",
opts: ["la etiqueta p tiene mas especificidad", "clase vs etiqueta", "la clase pierde", "ambas"],
ans: 1, exp: "la especificidad de clase (0,1,0) es mayor que etiqueta (0,0,1)"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug CSS 5", diff: "easy",
q: "HTML:\n<div id=\"unico\" class=\"caja\">Texto</div>\n\nCSS:\n#unico {\n    color: red;\n}\n.caja {\n    color: blue;\n}\ndiv {\n    color: green;\n}\n\nError: El texto se ve rojo. Por que no azul o verde?",
opts: ["id tiene mas especificidad que clase", "clase mas que id", "etiqueta mas que todos", "orden alfabetico"],
ans: 0, exp: "ID (1,0,0) > Clase (0,1,0) > Etiqueta (0,0,1)"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug CSS 6", diff: "easy",
q: "HTML:\n<div class=\"padre\">\n    <div class=\"hijo\">Texto</div>\n</div>\n\nCSS:\n.padre .hijo {\n    color: red;\n}\n.hijo {\n    color: blue;\n}\n\nError: El texto se ve rojo, no azul. Por que?",
opts: [".padre .hijo tiene mas especificidad", ".hijo solo tiene una clase", "ambas", "ninguna"],
ans: 0, exp: ".padre .hijo (0,2,0) > .hijo (0,1,0)"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug CSS 7", diff: "easy",
q: "HTML:\n<div style=\"color: purple;\" class=\"caja\">Texto</div>\n\nCSS:\n.caja {\n    color: red !important;\n}\n\nError: El texto se ve rojo, no purple. Por que el estilo inline no funciona?",
opts: ["!important anula inline", "inline no funciona", "clase tiene prioridad", "ambas"],
ans: 0, exp: "!important tiene la maxima especificidad"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug CSS 8", diff: "easy",
q: "HTML:\n<div class=\"caja\">Texto</div>\n\nCSS:\n.caja {\n    width: 50%;\n    background: red;\n}\n\nError: El div ocupa el 50% de que? Se ve pequeno. Por que?",
opts: ["50% del contenedor padre", "50% de la pantalla", "50% del texto", "50% del div"],
ans: 0, exp: "porcentajes son relativos al contenedor padre"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug CSS 9", diff: "easy",
q: "HTML:\n<div class=\"caja\">Texto muy largo sin espacios</div>\n\nCSS:\n.caja {\n    width: 100px;\n    background: red;\n}\n\nError: El texto se desborda del div. Por que no se ajusta?",
opts: ["falta overflow-wrap o word-break", "width es muy pequena", "texto sin espacios", "todas"],
ans: 3, exp: "texto largo sin espacios no se rompe automaticamente"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug CSS 10", diff: "easy",
q: "HTML:\n<div class=\"caja\">Texto</div>\n\nCSS:\n.caja {\n    margin: 10px;\n    padding: 20px;\n    background: red;\n}\n\nError: El espacio interno (padding) es rojo, el externo (margin) es transparente. Por que?",
opts: ["margin es transparente por defecto", "padding es parte del elemento", "background solo aplica a padding y contenido", "todas"],
ans: 3, exp: "background cubre content + padding, no margin"
},

// ==================== BÁSICO - Completar propiedades ====================

{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar CSS 1", diff: "easy",
q: "Completa para hacer el texto rojo:\n.texto {\n    ___: red;\n}",
opts: ["color", "background-color", "font-color", "text-color"],
ans: 0, exp: "color define el color del texto"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar CSS 2", diff: "easy",
q: "Completa para fondo azul:\n.caja {\n    ___: blue;\n}",
opts: ["background-color", "bg-color", "background", "ambas son validas"],
ans: 3, exp: "background-color y background son validas"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar CSS 3", diff: "easy",
q: "Completa para borde negro de 1px solido:\n.caja {\n    ___: 1px solid black;\n}",
opts: ["border", "borde", "outline", "stroke"],
ans: 0, exp: "border es la propiedad correcta"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar CSS 4", diff: "easy",
q: "Completa para texto centrado:\n.texto {\n    ___: center;\n}",
opts: ["text-align", "align-text", "text-align: center", "justify"],
ans: 2, exp: "text-align: center centra texto horizontalmente"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar CSS 5", diff: "easy",
q: "Completa para fuente de 20px:\n.texto {\n    ___: 20px;\n}",
opts: ["font-size", "size", "text-size", "font"],
ans: 0, exp: "font-size define el tamano de la fuente"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar CSS 6", diff: "easy",
q: "Completa para texto en negrita:\n.texto {\n    ___: bold;\n}",
opts: ["font-weight", "weight", "bold", "font-style"],
ans: 0, exp: "font-weight: bold hace negrita"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar CSS 7", diff: "easy",
q: "Completa para ancho de 100px:\n.caja {\n    ___: 100px;\n}",
opts: ["width", "ancho", "size", "w"],
ans: 0, exp: "width define el ancho del elemento"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar CSS 8", diff: "easy",
q: "Completa para alto de 50px:\n.caja {\n    ___: 50px;\n}",
opts: ["height", "alto", "size", "h"],
ans: 0, exp: "height define el alto del elemento"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar CSS 9", diff: "easy",
q: "Completa para margen exterior de 10px:\n.caja {\n    ___: 10px;\n}",
opts: ["margin", "padding", "border", "spacing"],
ans: 0, exp: "margin es espacio externo"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Completar CSS 10", diff: "easy",
q: "Completa para padding interior de 10px:\n.caja {\n    ___: 10px;\n}",
opts: ["padding", "margin", "border", "spacing"],
ans: 0, exp: "padding es espacio interno"
},

// ==================== BÁSICO - Analizar layout ====================

{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar CSS 1", diff: "easy",
q: "Que hace este CSS?\ndiv {\n    display: none;\n}",
opts: ["oculta el div y no ocupa espacio", "oculta pero ocupa espacio", "lo hace invisible", "lo elimina"],
ans: 0, exp: "display: none elimina el elemento del flujo"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar CSS 2", diff: "easy",
q: "Que hace este CSS?\ndiv {\n    visibility: hidden;\n}",
opts: ["oculta pero ocupa espacio", "oculta y no ocupa espacio", "lo hace transparente", "lo elimina"],
ans: 0, exp: "visibility: hidden oculta pero mantiene el espacio"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar CSS 3", diff: "easy",
q: "Que hace este CSS?\ndiv {\n    opacity: 0.5;\n}",
opts: ["50% transparente", "50% opaco", "invisible", "gris"],
ans: 0, exp: "opacity: 0.5 es 50% transparente"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar CSS 4", diff: "easy",
q: "Que hace este CSS?\ndiv {\n    display: inline-block;\n}",
opts: ["se comporta como inline pero acepta width/height", "es bloque puro", "es inline puro", "es flex"],
ans: 0, exp: "inline-block mezcla inline y bloque"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar CSS 5", diff: "easy",
q: "Que hace este CSS?\ndiv {\n    position: absolute;\n    top: 0;\n    left: 0;\n}",
opts: ["lo posiciona en esquina superior izquierda", "lo centra", "lo esconde", "lo desplaza"],
ans: 0, exp: "absolute con top:0 left:0 lo lleva a esquina"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar CSS 6", diff: "easy",
q: "Que hace este CSS?\ndiv {\n    display: flex;\n    justify-content: center;\n}",
opts: ["centra hijos horizontalmente", "centra hijos verticalmente", "centra el div", "nada"],
ans: 0, exp: "justify-content: center centra en eje principal (horizontal)"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar CSS 7", diff: "easy",
q: "Que hace este CSS?\ndiv {\n    display: flex;\n    align-items: center;\n}",
opts: ["centra hijos verticalmente", "centra hijos horizontalmente", "centra el div", "nada"],
ans: 0, exp: "align-items: center centra en eje cruzado (vertical)"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar CSS 8", diff: "easy",
q: "Que hace este CSS?\ndiv {\n    margin: 0 auto;\n}",
opts: ["centra horizontalmente si tiene width", "centra verticalmente", "centra todo", "nada"],
ans: 0, exp: "margin: 0 auto centra bloques con width definido"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar CSS 9", diff: "easy",
q: "Que hace este CSS?\ndiv {\n    float: left;\n}",
opts: ["elemento flota a la izquierda", "elemento flota a la derecha", "elemento centrado", "elemento fijo"],
ans: 0, exp: "float: left mueve el elemento a la izquierda"
},
{
profe: true, intermedio: false, avanzado: false, experto: false, unit: "Analizar CSS 10", diff: "easy",
q: "Que hace este CSS?\ndiv {\n    clear: both;\n}",
opts: ["limpia floats izquierdo y derecho", "limpia solo izquierdo", "limpia solo derecho", "nada"],
ans: 0, exp: "clear: both detiene el flujo de floats"

},

// ==================== INTERMEDIO - Encontrar errores de layout ====================

{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter CSS 1", diff: "medium",
q: "HTML:\n<div class=\"padre\">\n    <div class=\"hijo\">Hijo</div>\n</div>\n\nCSS:\n.padre {\n    height: 200px;\n    background: gray;\n}\n.hijo {\n    height: 100%;\n    background: red;\n}\n\nError: El hijo no ocupa el 100% del padre. Por que?",
opts: ["el padre necesita position relative", "el padre necesita height definido", "ya tiene height", "hijo necesita position absolute"],
ans: 0, exp: "para height:100% el padre debe tener height definido, pero si el padre no tiene position relative, el hijo no hereda bien el alto"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter CSS 2", diff: "medium",
q: "HTML:\n<div class=\"container\">\n    <div class=\"item\">Item 1</div>\n    <div class=\"item\">Item 2</div>\n</div>\n\nCSS:\n.container {\n    display: flex;\n    gap: 20px;\n}\n.item {\n    width: 100px;\n}\n\nError: gap no funciona en navegadores viejos. Por que?",
opts: ["gap es moderno, no soportado en IE", "gap solo en grid", "gap no es para flex", "falta margin"],
ans: 0, exp: "gap en flex es relativamente nuevo, IE no lo soporta"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter CSS 3", diff: "medium",
q: "HTML:\n<div class=\"padre\">\n    <div class=\"hijo\">Hijo</div>\n</div>\n\nCSS:\n.padre {\n    position: relative;\n}\n.hijo {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n}\n\nError: El hijo no esta centrado exactamente. Por que?",
opts: ["falta transform: translate(-50%, -50%)", "top y left centran esquina, no centro", "ambas", "ninguna"],
ans: 2, exp: "top:50% left:50% centra la esquina superior izquierda, no el centro del elemento"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter CSS 4", diff: "medium",
q: "HTML:\n<div class=\"parent\">\n    <div class=\"child\">Child</div>\n</div>\n\nCSS:\n.parent {\n    display: flex;\n    justify-content: space-between;\n}\n.child {\n    margin-left: auto;\n}\n\nError: El hijo no se va a la derecha. Por que?",
opts: ["space-between y margin auto no combinan bien", "falta width al child", "parent necesita width", "margin auto no funciona"],
ans: 0, exp: "justify-content: space-between distribuye espacio, margin-left:auto no funciona igual"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter CSS 5", diff: "medium",
q: "HTML:\n<div class=\"container\">\n    <div class=\"box\">Box 1</div>\n    <div class=\"box\">Box 2</div>\n</div>\n\nCSS:\n.container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\nError: Los boxes no ocupan el mismo ancho. Por que?",
opts: ["necesitan width:100%", "1fr funciona bien", "el contenido desborda", "fr no es soportado"],
ans: 2, exp: "1fr funciona, pero si el contenido es muy largo, puede desbordar"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter CSS 6", diff: "medium",
q: "HTML:\n<div class=\"padre\">\n    <div class=\"hijo\">Texto</div>\n</div>\n\nCSS:\n.padre {\n    width: 300px;\n    background: gray;\n}\n.hijo {\n    width: 100%;\n    padding: 20px;\n    background: red;\n}\n\nError: El hijo se desborda del padre. Por que?",
opts: ["padding se suma al width", "box-sizing por defecto es content-box", "ambas", "ninguna"],
ans: 2, exp: "por defecto width solo aplica al contenido, padding y border se suman"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter CSS 7", diff: "medium",
q: "HTML:\n<div class=\"texto\">Linea muy larga sin espacios</div>\n\nCSS:\n.texto {\n    width: 100px;\n    white-space: nowrap;\n}\n\nError: El texto se desborda. Como se arregla?",
opts: ["overflow: hidden", "text-overflow: ellipsis", "ambas", "cambiar white-space"],
ans: 3, exp: "white-space: nowrap evita salto de linea, se desborda"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter CSS 8", diff: "medium",
q: "HTML:\n<div class=\"padre\">\n    <div class=\"hijo\">Hijo</div>\n</div>\n\nCSS:\n.padre {\n    height: 200px;\n    background: gray;\n}\n.hijo {\n    height: 100%;\n    background: red;\n    margin-top: 20px;\n}\n\nError: El hijo se desborda. Por que?",
opts: ["margin se suma al height", "height:100% mas margin excede", "ambas", "ninguna"],
ans: 2, exp: "height:100% mas margin-top excede el 100%"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter CSS 9", diff: "medium",
q: "HTML:\n<div class=\"container\">\n    <div class=\"item\">Item</div>\n</div>\n\nCSS:\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 300px;\n}\n.item {\n    flex-grow: 1;\n}\n\nError: El item no crece. Por que?",
opts: ["flex-grow funciona bien", "necesita height auto", "funciona, revisar", "padre necesita align-items"],
ans: 0, exp: "flex-grow:1 deberia funcionar, revisar si hay otros estilos"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug Inter CSS 10", diff: "medium",
q: "HTML:\n<div class=\"padre\">\n    <div class=\"hijo\">Hijo</div>\n</div>\n\nCSS:\n.padre {\n    display: grid;\n    place-items: center;\n    height: 200px;\n}\n\nError: El hijo no se centra. Por que?",
opts: ["place-items funciona", "necesita grid-template-columns", "place-items centra en grid", "funciona bien"],
ans: 1, exp: "place-items funciona, pero grid necesita columnas definidas o auto"

},

// ==================== INTERMEDIO - Completar layouts ====================

{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter CSS 1", diff: "medium",
q: "Completa para centrar vertical y horizontalmente con flex:\n.container {\n    display: flex;\n    justify-content: center;\n    ___: center;\n}",
opts: ["align-items", "align-content", "vertical-align", "text-align"],
ans: 0, exp: "align-items: center centra verticalmente en flex"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter CSS 2", diff: "medium",
q: "Completa grid de 3 columnas iguales:\n.container {\n    display: grid;\n    grid-template-columns: ___ ___ ___;\n}",
opts: ["1fr 1fr 1fr", "auto auto auto", "repeat(3, 1fr)", "todas son validas"],
ans: 3, exp: "1fr, auto, repeat(3,1fr) funcionan"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter CSS 3", diff: "medium",
q: "Completa para que el item ocupe 2 columnas:\n.item {\n    grid-column: span ___;\n}",
opts: ["2", "1", "3", "auto"],
ans: 0, exp: "grid-column: span 2 ocupa 2 columnas"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter CSS 4", diff: "medium",
q: "Completa para centrar con absolute:\n.hijo {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(___, ___);\n}",
opts: ["-50%, -50%", "50%, 50%", "-100%, -100%", "100%, 100%"],
ans: 0, exp: "translate(-50%, -50%) centra el elemento"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter CSS 5", diff: "medium",
q: "Completa para que padding no aumente el width:\n* {\n    box-sizing: ___;\n}",
opts: ["border-box", "content-box", "padding-box", "margin-box"],
ans: 0, exp: "border-box hace que padding y border se incluyan en width"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter CSS 6", diff: "medium",
q: "Completa para texto con puntos suspensivos:\n.texto {\n    width: 100px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ___;\n}",
opts: ["ellipsis", "clip", "dots", "none"],
ans: 0, exp: "text-overflow: ellipsis muestra ..."
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter CSS 7", diff: "medium",
q: "Completa para que dos elementos se vayan a los extremos con flex:\n.container {\n    display: flex;\n    justify-content: ___;\n}",
opts: ["space-between", "space-around", "space-evenly", "center"],
ans: 0, exp: "space-between pone el primero a la izquierda y ultimo a la derecha"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter CSS 8", diff: "medium",
q: "Completa media query para pantallas menores a 768px:\n@media (max-width: ___px) {\n    .container {\n        flex-direction: column;\n    }\n}",
opts: ["768", "1024", "480", "1200"],
ans: 0, exp: "max-width: 768px para tablets y celulares"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter CSS 9", diff: "medium",
q: "Completa animacion:\n@keyframes slide {\n    from { transform: translateX(0); }\n    to { transform: translateX(___px); }\n}",
opts: ["100", "0", "-100", "50"],
ans: 0, exp: "to define la posicion final"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Completar Inter CSS 10", diff: "medium",
q: "Completa para sombra:\n.caja {\n    box-shadow: 5px 5px 10px ___;\n}",
opts: ["rgba(0,0,0,0.5)", "black", "gray", "todas"],
ans: 3, exp: "cualquier color es valido para sombra"
},

// ==================== INTERMEDIO - Analizar layouts complejos ====================

{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter CSS 1", diff: "medium",
q: "Que hace este CSS?\n.container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}",
opts: ["columnas responsivas que se ajustan", "columnas fijas", "una columna", "error"],
ans: 0, exp: "auto-fit + minmax crea columnas responsivas"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter CSS 2", diff: "medium",
q: "Que hace este CSS?\ndiv {\n    transition: all 0.3s ease;\n}",
opts: ["anima cambios de propiedades", "solo anima color", "solo anima tamaño", "nada"],
ans: 0, exp: "transition anima cambios en 0.3s con easing"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter CSS 3", diff: "medium",
q: "Que hace este CSS?\ndiv {\n    position: sticky;\n    top: 0;\n}",
opts: ["se pega al tope al hacer scroll", "siempre fijo", "absoluto", "relativo"],
ans: 0, exp: "sticky se comporta como relative hasta que llega al tope"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter CSS 4", diff: "medium",
q: "Que hace este CSS?\n.container {\n    display: flex;\n    flex-wrap: wrap;\n}",
opts: ["los elementos se envuelven", "no se envuelven", "se superponen", "se ordenan"],
ans: 0, exp: "flex-wrap: wrap permite que elementos pasen a siguiente linea"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter CSS 5", diff: "medium",
q: "Que hace este CSS?\ndiv {\n    z-index: 10;\n    position: relative;\n}",
opts: ["apila sobre elementos con menor z-index", "no funciona sin position", "ambas", "ninguna"],
ans: 2, exp: "z-index solo funciona con position diferente a static"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter CSS 6", diff: "medium",
q: "Que hace este CSS?\ndiv {\n    object-fit: cover;\n}",
opts: ["imagen cubre sin deformar", "imagen se estira", "imagen se repite", "imagen se centra"],
ans: 0, exp: "object-fit: cover mantiene aspect ratio y cubre todo"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter CSS 7", diff: "medium",
q: "Que hace este CSS?\ndiv {\n    pointer-events: none;\n}",
opts: ["ignora eventos de mouse", "bloquea clicks", "ambas", "ninguna"],
ans: 2, exp: "pointer-events: none hace que el elemento ignore interacciones"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter CSS 8", diff: "medium",
q: "Que hace este CSS?\ndiv {\n    backdrop-filter: blur(5px);\n}",
opts: ["difumina lo que esta detras", "difumina el div", "sombra", "nada"],
ans: 0, exp: "backdrop-filter afecta al fondo detras del elemento"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter CSS 9", diff: "medium",
q: "Que hace este CSS?\ndiv {\n    clip-path: circle(50%);\n}",
opts: ["recorta el elemento en circulo", "redondea bordes", "sombra circular", "nada"],
ans: 0, exp: "clip-path recorta el elemento con la forma especificada"
},
{
profe: false, intermedio: true, avanzado: false, experto: false, unit: "Analizar Inter CSS 10", diff: "medium",
q: "Que hace este CSS?\n:root {\n    --color-principal: blue;\n}\ndiv {\n    color: var(--color-principal);\n}",
opts: ["usa variable CSS", "color azul", "ambas", "ninguna"],
ans: 2, exp: "custom properties (variables CSS) permiten reutilizar valores"
},

// ==================== AVANZADO - Debug complejo ====================

{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz CSS 1", diff: "hard",
q: "HTML:\n<div class=\"parent\">\n    <div class=\"child\">Child</div>\n</div>\n\nCSS:\n.parent {\n    display: grid;\n    grid-template-columns: 1fr auto 1fr;\n}\n.child {\n    grid-column: 2 / 3;\n}\n\nError: El child no se centra. Por que?",
opts: ["auto no centra", "necesita margin auto", "funciona bien", "grid-column esta mal"],
ans: 0, exp: "auto toma el ancho del contenido, no centra automaticamente"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz CSS 2", diff: "hard",
q: "HTML:\n<div class=\"container\">\n    <div class=\"item\">Item</div>\n</div>\n\nCSS:\n.container {\n    display: flex;\n    height: 300px;\n}\n.item {\n    margin: auto;\n}\n\nError: El item no se centra. Por que?",
opts: ["margin: auto centra en flex", "funciona bien", "necesita align-items", "necesita justify-content"],
ans: 1, exp: "margin: auto centra perfectamente en flex"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz CSS 3", diff: "hard",
q: "HTML:\n<div class=\"padre\">\n    <div class=\"hijo\">Hijo</div>\n</div>\n\nCSS:\n.padre {\n    width: 500px;\n    height: 300px;\n    background: gray;\n}\n.hijo {\n    width: 50%;\n    height: 50%;\n    background: red;\n    transform: translate(50%, 50%);\n}\n\nError: El hijo no se centra. Por que?",
opts: ["translate mueve 50% de su propio tamaño", "necesita -50%", "ambas", "ninguna"],
ans: 2, exp: "transform: translate(50%,50%) mueve el 50% de su propio ancho/alto"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz CSS 4", diff: "hard",
q: "HTML:\n<div class=\"container\">\n    <div class=\"item\">Texto largo que desborda</div>\n</div>\n\nCSS:\n.container {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr);\n}\n.item {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\nError: El texto no tiene ellipsis. Por que?",
opts: ["minmax(0,1fr) permite desborde", "falta width", "ellipsis funciona", "grid no soporta"],
ans: 0, exp: "minmax(0,1fr) evita que el contenido desborde, permite ellipsis"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz CSS 5", diff: "hard",
q: "HTML:\n<div class=\"parent\">\n    <div class=\"child\">Child</div>\n</div>\n\nCSS:\n.parent {\n    position: relative;\n    width: 300px;\n    height: 200px;\n}\n.child {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    transform: scale(0.8);\n}\n\nError: El hijo no respeta width:100% al escalar. Por que?",
opts: ["transform escala despues de layout", "width 100% es del padre original", "ambas", "ninguna"],
ans: 2, exp: "transform escala visualmente, no afecta layout"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz CSS 6", diff: "hard",
q: "HTML:\n<div class=\"wrapper\">\n    <div class=\"sidebar\">Sidebar</div>\n    <div class=\"content\">Content</div>\n</div>\n\nCSS:\n.wrapper {\n    display: grid;\n    grid-template-columns: 250px 1fr;\n}\n.sidebar {\n    position: sticky;\n    top: 0;\n    align-self: start;\n}\n\nError: El sidebar no se queda sticky. Por que?",
opts: ["sticky no funciona en grid hijos", "necesita height", "sticky funciona", "necesita overflow"],
ans: 0, exp: "sticky en grid puede no funcionar correctamente, depende del navegador"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz CSS 7", diff: "hard",
q: "HTML:\n<div class=\"container\">\n    <div class=\"box\">Box</div>\n</div>\n\nCSS:\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n.box {\n    flex: 1;\n    overflow-y: auto;\n}\n\nError: El scroll no aparece aunque el contenido exceda. Por que?",
opts: ["flex:1 y overflow combinan mal", "necesita min-height:0", "ambas", "ninguna"],
ans: 2, exp: "flex items necesitan min-height:0 para overflow funcionar"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz CSS 8", diff: "hard",
q: "HTML:\n<div class=\"padre\">\n    <div class=\"hijo\">Hijo</div>\n</div>\n\nCSS:\n.padre {\n    display: grid;\n    place-items: center;\n    height: 100vh;\n}\n.hijo {\n    width: 100%;\n    max-width: 500px;\n}\n\nError: El hijo no se centra en pantallas pequenas. Por que?",
opts: ["place-items centra", "width:100% ocupa todo", "max-width limita", "funciona bien"],
ans: 3, exp: "place-items centra, width:100% + max-width funciona"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz CSS 9", diff: "hard",
q: "HTML:\n<div class=\"parent\">\n    <div class=\"child\">Child</div>\n</div>\n\nCSS:\n.parent {\n    display: flex;\n    gap: 20px;\n    flex-wrap: wrap;\n}\n.child {\n    width: calc(33.333% - 20px);\n}\n\nError: El calculo de width no es exacto. Por que?",
opts: ["gap y calc combinados", "necesita box-sizing", "ambas", "ninguna"],
ans: 2, exp: "gap afecta el espacio entre items, el calc debe considerar el gap correctamente"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Debug Avanz CSS 10", diff: "hard",
q: "HTML:\n<div class=\"container\">\n    <div class=\"item\">Item</div>\n</div>\n\nCSS:\n.container {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.item {\n    grid-column: span 2;\n}\n\nError: El item ocupa 2 columnas pero el contenido desborda. Por que?",
opts: ["minmax(0,1fr) permite desborde", "span 2 funciona", "ambas", "ninguna"],
ans: 0, exp: "minmax(0,1fr) evita desborde si el contenido no es muy largo"

},

// ==================== AVANZADO - Completar (10) ====================

{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz CSS 1", diff: "hard",
q: "Completa para grid responsiva con minimo 200px:\n.container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(___, 1fr));\n}",
opts: ["200px", "100%", "auto", "min-content"],
ans: 0, exp: "minmax(200px, 1fr) garantiza minimo 200px"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz CSS 2", diff: "hard",
q: "Completa para centrar con absolute:\n.hijo {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: ___;\n}",
opts: ["auto", "0", "10px", "20px"],
ans: 0, exp: "margin: auto centra absolute con top/left/right/bottom 0"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz CSS 3", diff: "hard",
q: "Completa para que el texto se corte en lineas:\n.texto {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: ___;\n}",
opts: ["hidden", "visible", "auto", "scroll"],
ans: 0, exp: "overflow: hidden necesario para line-clamp"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz CSS 4", diff: "hard",
q: "Completa container queries:\n@container (min-width: ___px) {\n    .card {\n        display: flex;\n    }\n}",
opts: ["500", "100", "1000", "50"],
ans: 0, exp: "container query responde al tamanio del contenedor, no viewport"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz CSS 5", diff: "hard",
q: "Completa has selector:\n.parent:has(___ .child) {\n    background: red;\n}",
opts: [">", "+", "~", " "],
ans: 0, exp: ":has(> .child) selecciona padre que tiene hijo directo"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz CSS 6", diff: "hard",
q: "Completa scroll snap:\n.container {\n    scroll-snap-type: x ___;\n}\n.item {\n    scroll-snap-align: start;\n}",
opts: ["mandatory", "proximity", "both", "none"],
ans: 0, exp: "scroll-snap-type: x mandatory fuerza el snap"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz CSS 7", diff: "hard",
q: "Completa para vista de 3D:\n.caja {\n    transform-style: preserve-3d;\n    transform: rotateY(___deg);\n}",
opts: ["45", "0", "90", "180"],
ans: 0, exp: "rotateY rota en eje Y"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz CSS 8", diff: "hard",
q: "Completa animacion con delay negativo:\n.elemento {\n    animation: slide 1s ___ -0.5s;\n}",
opts: ["ease", "linear", "ease-in", "ease-out"],
ans: 0, exp: "delay negativo empieza la animacion en medio"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz CSS 9", diff: "hard",
q: "Completa subgrid:\n.padre {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n}\n.hijo {\n    display: grid;\n    grid-template-columns: subgrid;\n    grid-column: span ___;\n}",
opts: ["2", "1", "3", "4"],
ans: 0, exp: "subgrid hereda columnas del padre"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Completar Avanz CSS 10", diff: "hard",
q: "Completa para modo oscuro:\n@media (prefers-color-scheme: ___) {\n    body {\n        background: black;\n        color: white;\n    }\n}",
opts: ["dark", "light", "no-preference", "ambas"],
ans: 0, exp: "prefers-color-scheme: dark detecta tema oscuro del sistema"
},

// ==================== AVANZADO - Analizar (10) ====================

{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz CSS 1", diff: "hard",
q: "Que hace este CSS?\n.container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n}",
opts: ["crea columnas que se llenan con minimo 200px", "columnas fijas", "una columna", "error"],
ans: 0, exp: "auto-fill vs auto-fit: auto-fill crea columnas aunque esten vacias"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz CSS 2", diff: "hard",
q: "Que hace este CSS?\ndiv {\n    aspect-ratio: 16 / 9;\n    width: 100%;\n}",
opts: ["mantiene proporcion 16:9", "ancho 100% alto automatico", "ambas", "ninguna"],
ans: 2, exp: "aspect-ratio mantiene proporcion 16:9"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz CSS 3", diff: "hard",
q: "Que hace este CSS?\n.parent {\n    filter: blur(5px);\n}\n.child {\n    filter: none;\n}",
opts: ["el hijo tambien se ve borroso", "el hijo no se ve borroso", "error", "ambos se ven"],
ans: 0, exp: "filter se hereda y no se puede anular en hijos"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz CSS 4", diff: "hard",
q: "Que hace este CSS?\ndiv {\n    will-change: transform;\n}",
opts: ["optimiza para animaciones", "cambia el transform", "lo hace mas lento", "nada"],
ans: 0, exp: "will-change avisa al navegador que la propiedad cambiara"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz CSS 5", diff: "hard",
q: "Que hace este CSS?\n.container {\n    contain: layout paint;\n}",
opts: ["aisla layout y paint", "mejora rendimiento", "ambas", "ninguna"],
ans: 2, exp: "contain aísla el elemento para mejorar rendimiento"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz CSS 6", diff: "hard",
q: "Que hace este CSS?\ndiv {\n    mix-blend-mode: multiply;\n}",
opts: ["mezcla colores con fondo", "transparencia", "sombra", "filtro"],
ans: 0, exp: "mix-blend-mode define como se mezcla con elementos detras"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz CSS 7", diff: "hard",
q: "Que hace este CSS?\ndiv {\n    scroll-behavior: smooth;\n}",
opts: ["scroll suave", "scroll instantaneo", "sin scroll", "nada"],
ans: 0, exp: "scroll-behavior: smooth anima el desplazamiento"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz CSS 8", diff: "hard",
q: "Que hace este CSS?\n:focus-visible {\n    outline: 2px solid blue;\n}",
opts: ["outline solo cuando focus por teclado", "outline siempre", "outline nunca", "solo mouse"],
ans: 0, exp: ":focus-visible diferencia focus por teclado vs mouse"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz CSS 9", diff: "hard",
q: "Que hace este CSS?\ndiv {\n    view-transition-name: card;\n}",
opts: ["anima transiciones entre vistas", "nombre para view transition", "ambas", "ninguna"],
ans: 2, exp: "View Transitions API permite animar entre estados"
},
{
profe: false, intermedio: false, avanzado: true, experto: false, unit: "Analizar Avanz CSS 10", diff: "hard",
q: "Que hace este CSS?\n@layer base, components, utilities;\n@layer base {\n    body { margin: 0; }\n}",
opts: ["define capas de especificidad", "ordena CSS", "ambas", "ninguna"],
ans: 2, exp: "@layer permite controlar orden de cascada por capas"

},

{
    profe: true, intermedio: false, avanzado: false, experto: false, unit: "Centrado con Flex", diff: "easy",
    q: "Ejercicio: Tienes un div contenedor gris de 400x400px y un cuadrado rojo de 100x100px.\n\nDebes escribir el CSS para centrar el cuadrado rojo PERFECTAMENTE (horizontal y verticalmente) dentro del contenedor gris, usando Flexbox.\n\nHTML:\n<div class='contenedor'>\n  <div class='cuadrado'></div>\n</div>\n\nEscribe solo las propiedades CSS necesarias para .contenedor:",
    opts: ["display: flex; justify-content: center; align-items: center;", "display: flex; text-align: center; vertical-align: middle;", "position: relative; left: 50%; top: 50%;", "margin: auto;"],
    ans: 0, exp: "Flexbox con justify-content y align-items centra en ambos ejes"
},

{
    profe: true, intermedio: false, avanzado: false, experto: false, unit: "Centrado con Grid", diff: "easy",
    q: "Ejercicio: Mismo contenedor gris de 400x400px y cuadrado rojo de 100x100px.\n\nDebes centrar el cuadrado usando CSS Grid (NO Flexbox).\n\nHTML:\n<div class='contenedor'>\n  <div class='cuadrado'></div>\n</div>\n\nEscribe las propiedades CSS para .contenedor:",
    opts: ["display: grid; place-items: center;", "display: grid; justify-content: center; align-content: center;", "display: grid; text-align: center;", "display: grid; margin: auto;"],
    ans: 0, exp: "place-items: center es la forma más corta con Grid"
},

{
    profe: true, intermedio: false, avanzado: false, experto: false, unit: "Centrado con Position", diff: "medium",
    q: "Ejercicio: Mismo contenedor gris de 400x400px y cuadrado rojo de 100x100px.\n\nCentra el cuadrado usando position: absolute (el contenedor debe ser position: relative).\n\nHTML:\n<div class='contenedor'>\n  <div class='cuadrado'></div>\n</div>\n\nEscribe CSS para .contenedor y .cuadrado:",
    opts: [".contenedor{position:relative;} .cuadrado{position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);}", ".contenedor{position:relative;} .cuadrado{position:absolute; margin:auto; top:0;left:0;bottom:0;right:0;}", "ambas funcionan", "ninguna funciona"],
    ans: 2, exp: "Ambos métodos centran con absolute: translate o margin:auto con 0 en todos lados"
},

// ==================== PRÁCTICO: Flexbox direcciones ====================

{
    profe: true, intermedio: false, avanzado: false, experto: false, unit: "Flex dirección fila", diff: "easy",
    q: "Ejercicio: Tienes 3 cajas azules dentro de un contenedor gris.\n\nQuieres que se alineen HORIZONTALMENTE en una fila, con espacio igual entre ellas.\n\nHTML:\n<div class='contenedor'>\n  <div class='caja'>1</div>\n  <div class='caja'>2</div>\n  <div class='caja'>3</div>\n</div>\n\nEscribe CSS para .contenedor:",
    opts: ["display: flex; flex-direction: row; justify-content: space-between;", "display: flex; flex-direction: column; gap: 10px;", "display: block; text-align: center;", "display: grid; grid-template-columns: 1fr 1fr 1fr;"],
    ans: 0, exp: "flex-direction: row (por defecto) y space-between distribuye espacio"
},

{
    profe: true, intermedio: false, avanzado: false, experto: false, unit: "Flex dirección columna", diff: "easy",
    q: "Ejercicio: Mismas 3 cajas azules.\n\nAhora quieres que se alineen VERTICALMENTE en columna, una debajo de otra, con 20px de separación.\n\nEscribe CSS para .contenedor:",
    opts: ["display: flex; flex-direction: column; gap: 20px;", "display: flex; flex-direction: row; gap: 20px;", "display: block; margin-bottom: 20px;", "display: grid; gap: 20px;"],
    ans: 0, exp: "flex-direction: column + gap separa verticalmente"
},

{
    profe: false, intermedio: true, avanzado: false, experto: false, unit: "Wrap en Flex", diff: "medium",
    q: "Ejercicio: Contenedor gris de 300px de ancho. Tienes 5 cajas azules de 120px de ancho cada una.\n\nQuieres que cuando no quepan en una fila, pasen a la siguiente línea (wrap), y que haya 10px de espacio entre ellas.\n\nHTML:\n<div class='contenedor'>\n  <div class='caja'>1</div>\n  <div class='caja'>2</div>\n  <div class='caja'>3</div>\n  <div class='caja'>4</div>\n  <div class='caja'>5</div>\n</div>\n\nEscribe CSS para .contenedor y .caja:",
    opts: [".contenedor{display:flex; flex-wrap:wrap; gap:10px;} .caja{width:120px;}", ".contenedor{display:flex; flex-wrap:nowrap;} .caja{width:120px;}", ".contenedor{display:block;} .caja{display:inline-block; width:120px; margin:10px;}", "ninguna"],
    ans: 0, exp: "flex-wrap:wrap permite salto de línea, gap separa"
},

// ==================== PRÁCTICO: Grid layouts ====================

{
    profe: false, intermedio: true, avanzado: false, experto: false, unit: "Grid 3 columnas", diff: "medium",
    q: "Ejercicio: Tienes 6 tarjetas dentro de un contenedor.\n\nCrea un grid con EXACTAMENTE 3 columnas del mismo ancho.\n\nHTML:\n<div class='grid'>\n  <div>1</div><div>2</div><div>3</div>\n  <div>4</div><div>5</div><div>6</div>\n</div>\n\nEscribe CSS para .grid:",
    opts: ["display: grid; grid-template-columns: 1fr 1fr 1fr;", "display: grid; grid-template-columns: repeat(3, 1fr);", "display: grid; grid-template-columns: auto auto auto;", "todas funcionan"],
    ans: 3, exp: "Las tres formas crean 3 columnas iguales"
},

{
    profe: false, intermedio: true, avanzado: false, experto: false, unit: "Grid con área específica", diff: "medium",
    q: "Ejercicio: Quieres crear un layout clásico:\n- Header arriba (toda la anchura)\n- Sidebar izquierdo (200px)\n- Contenido principal (resto)\n- Footer abajo (toda la anchura)\n\nHTML:\n<div class='layout'>\n  <header>Header</header>\n  <aside>Sidebar</aside>\n  <main>Content</main>\n  <footer>Footer</footer>\n</div>\n\nEscribe CSS para .layout usando grid-template-areas:",
    opts: [".layout{display:grid; grid-template-areas:'header header' 'sidebar main' 'footer footer'; grid-template-columns:200px 1fr;}", ".layout{display:grid; grid-template-areas:'header' 'sidebar' 'main' 'footer';}", ".layout{display:flex; flex-direction:column;}", "ninguna"],
    ans: 0, exp: "grid-template-areas define regiones con nombres"
},

{
    profe: false, intermedio: false, avanzado: true, experto: false, unit: "Grid responsiva", diff: "hard",
    q: "Ejercicio: Quieres un grid de tarjetas que sea:\n- 1 columna en móviles (<600px)\n- 2 columnas en tablets (600px-900px)\n- 4 columnas en desktop (>900px)\n\nUsa CSS nativo (NO JavaScript) para lograrlo.\n\nEscribe la media query o la propiedad que lo resuelve:",
    opts: ["display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));", "@media queries separadas con diferentes grid-template-columns", "ambas funcionan", "ninguna"],
    ans: 2, exp: "auto-fit con minmax resuelve responsivo sin media queries, o media queries dan más control"
},

// ==================== PRÁCTICO: Debugging visual ====================

{
    profe: true, intermedio: false, avanzado: false, experto: false, unit: "Debug: texto desbordado", diff: "easy",
    q: "HTML y CSS actual:\n<div class='caja'>TextoMuyLargoSinEspaciosQueDesborda</div>\n.caja{width:100px; background:red;}\n\nPROBLEMA: El texto se sale de la caja roja.\n\n¿Qué propiedad CSS agregas para que el texto se corte con '...' al final?",
    opts: ["overflow:hidden; text-overflow:ellipsis; white-space:nowrap;", "word-break:break-all;", "overflow-wrap:break-word;", "text-wrap:wrap;"],
    ans: 0, exp: "Las 3 propiedades juntas crean el efecto de '...'"
},

{
    profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug: margin colapsado", diff: "medium",
    q: "HTML:\n<div class='padre'>\n  <div class='hijo'>Hijo</div>\n</div>\n\nCSS:\n.padre{background:gray; margin-top:20px;}\n.hijo{background:red; margin-top:30px;}\n\nPROBLEMA: El margen superior del hijo (30px) se 'fusiona' con el del padre (20px), resultando en 30px, no 50px.\n\n¿Qué propiedad CSS en .padre evita que los márgenes colapsen?",
    opts: ["overflow: auto;", "display: flex;", "padding-top: 1px;", "todas funcionan"],
    ans: 3, exp: "Cualquier cosa que cree un nuevo contexto de formato (overflow, flex, padding, border) evita colapso"
},

{
    profe: false, intermedio: true, avanzado: false, experto: false, unit: "Debug: inline-block gap", diff: "medium",
    q: "HTML:\n<div class='padre'>\n  <span class='hijo'>A</span>\n  <span class='hijo'>B</span>\n  <span class='hijo'>C</span>\n</div>\n\nCSS:\n.hijo{display:inline-block; width:100px; background:red;}\n\nPROBLEMA: Hay un espacio extra entre los elementos (como si tuvieran margin).\n\n¿Por qué ocurre y cómo lo solucionas?",
    opts: ["es por los saltos de línea en HTML, solución: font-size:0 en padre", "es por default margin, solución: margin:0", "es por padding, solución: padding:0", "no se puede solucionar"],
    ans: 0, exp: "Los whitespaces en HTML se muestran como espacios con inline-block"
},

// ==================== PRÁCTICO: Posicionamiento ====================

{
    profe: false, intermedio: true, avanzado: false, experto: false, unit: "Sticky header", diff: "medium",
    q: "Ejercicio: Tienes un header y mucho contenido debajo.\n\nQuieres que el header se quede pegado arriba cuando el usuario hace scroll, PERO que no sea fijo siempre (solo se pega al llegar arriba).\n\nHTML:\n<header>Header</header>\n<main>Mucho contenido...</main>\n\nEscribe el CSS para header:",
    opts: ["position: sticky; top: 0;", "position: fixed; top: 0;", "position: absolute; top: 0;", "position: relative; top: 0;"],
    ans: 0, exp: "sticky se comporta como relative hasta que el scroll lo hace 'pegarse'"
},

{
    profe: false, intermedio: false, avanzado: true, experto: false, unit: "Z-index stacking", diff: "hard",
    q: "HTML:\n<div class='rojo'>Rojo</div>\n<div class='azul'>Azul</div>\n\nCSS:\n.rojo{background:red; width:100px; height:100px; position:absolute; top:20px; left:20px;}\n.azul{background:blue; width:100px; height:100px; position:absolute; top:40px; left:40px;}\n\nPROBLEMA: El azul está ENCIMA del rojo (por orden en HTML).\n\nQuieres que el rojo esté ENCIMA del azul. ¿Qué propiedad agregas y a qué elemento?",
    opts: [".rojo{z-index: 2;}", ".azul{z-index: -1;}", ".rojo{z-index: 1;} .azul{z-index: 0;}", "todas funcionan"],
    ans: 3, exp: "Cualquier valor de z-index mayor en .rojo que en .azul funciona"
},

// ==================== BÁSICO ====================

{
case: "Centrar un cuadrado rojo de 100x100px dentro de un contenedor gris de 400x400px usando Flexbox",
opts: [
"display: flex; justify-content: center; align-items: center;",
"display: flex; text-align: center; vertical-align: middle;",
"position: relative; left: 50%; top: 50%;",
"margin: auto;"
],
ans: 0,
exp: "justify-content:center centra horizontal, align-items:center centra vertical"
},

{
case: "Hacer que 3 cajas azules se alineen horizontalmente con espacio igual entre ellas",
opts: [
"display: flex; justify-content: space-between;",
"display: flex; justify-content: space-around;",
"display: flex; justify-content: center;",
"display: block; text-align: center;"
],
ans: 0,
exp: "space-between pone la primera al inicio, la última al final y espacio igual entre"
},

{
case: "Hacer que 3 cajas azules se alineen verticalmente una debajo de otra con 20px de separación",
opts: [
"display: flex; flex-direction: column; gap: 20px;",
"display: flex; flex-direction: row; gap: 20px;",
"display: block; margin-bottom: 20px;",
"display: grid; gap: 20px;"
],
ans: 0,
exp: "flex-direction:column apila verticalmente, gap separa"
},

{
case: "5 cajas de 120px dentro de un contenedor de 300px. Que pasen a la siguiente línea y tengan 10px de separación",
opts: [
"display: flex; flex-wrap: wrap; gap: 10px;",
"display: flex; flex-wrap: nowrap; gap: 10px;",
"display: block; float: left; margin: 10px;",
"display: grid; grid-template-columns: repeat(3,1fr); gap: 10px;"
],
ans: 0,
exp: "flex-wrap:wrap permite salto de línea, gap separa"
},

{
case: "Crear un grid con EXACTAMENTE 3 columnas del mismo ancho",
opts: [
"display: grid; grid-template-columns: repeat(3, 1fr);",
"display: grid; grid-template-columns: 1fr 1fr 1fr;",
"display: grid; grid-template-columns: auto auto auto;",
"todas funcionan"
],
ans: 3,
exp: "repeat(3,1fr) y 1fr 1fr 1fr son equivalentes"
},

{
case: "Texto muy largo sin espacios dentro de una caja de 100px. Cortarlo con '...' al final",
opts: [
"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",
"word-break: break-all;",
"overflow-wrap: break-word;",
"text-wrap: wrap;"
],
ans: 0,
exp: "las 3 propiedades juntas crean el efecto de puntos suspensivos"
},

{
case: "Header que se pega arriba al hacer scroll (pero no es fijo todo el tiempo)",
opts: [
"position: sticky; top: 0;",
"position: fixed; top: 0;",
"position: absolute; top: 0;",
"position: relative; top: 0;"
],
ans: 0,
exp: "sticky se comporta como relative hasta que el scroll lo pega"
},

{
case: "Un cuadrado rojo de 100px centrado usando position absolute (el padre debe ser relative)",
opts: [
"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);",
"position: absolute; margin: auto; top: 0; left: 0; bottom: 0; right: 0;",
"position: absolute; text-align: center; vertical-align: middle;",
"ninguna funciona"
],
ans: 2,
exp: "ambos métodos centran absolute: translate o margin:auto con 0 en todos lados"
},

{
case: "Layout con header arriba, sidebar izquierdo 200px, contenido principal, footer abajo usando grid-template-areas",
opts: [
"grid-template-areas: 'header header' 'sidebar main' 'footer footer'; grid-template-columns: 200px 1fr;",
"grid-template-areas: 'header' 'sidebar' 'main' 'footer';",
"display: flex; flex-direction: column;",
"ninguna"
],
ans: 0,
exp: "grid-template-areas define regiones con nombres"
},

{
case: "Grid responsivo: 1 columna en móvil, 2 en tablet, 4 en desktop (usando solo CSS)",
opts: [
"grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));",
"@media (max-width:600px){grid-template-columns:1fr} @media(max-width:900px){grid-template-columns:1fr 1fr} @media(min-width:901px){grid-template-columns:1fr 1fr 1fr 1fr}",
"ambas funcionan",
"ninguna"
],
ans: 2,
exp: "auto-fit con minmax resuelve responsivo sin media queries"
},

// ==================== INTERMEDIO ====================

{
case: "3 cajas. La primera debe medir 100px, la segunda el doble de la primera, la tercera el triple",
opts: [
"grid-template-columns: 100px 2fr 3fr;",
"grid-template-columns: 1fr 2fr 3fr;",
"grid-template-columns: 100px 200px 300px;",
"grid-template-columns: auto 2fr 3fr;"
],
ans: 0,
exp: "1fr es una fracción, 2fr es el doble de espacio que 1fr"
},

{
case: "Dos divs. Que el segundo se empuje hacia la derecha usando margin-left: auto en flex",
opts: [
".contenedor{display:flex;} .segundo{margin-left: auto;}",
".contenedor{display:flex; justify-content: space-between;}",
".contenedor{display:flex;} .segundo{float: right;}",
".contenedor{display:block;} .segundo{position:absolute; right:0;}"
],
ans: 0,
exp: "margin-left:auto en flex empuja el elemento a la derecha"
},

{
case: "Imagen dentro de un contenedor cuadrado. La imagen debe cubrir todo sin deformarse",
opts: [
"object-fit: cover; width: 100%; height: 100%;",
"object-fit: contain; width: 100%; height: 100%;",
"object-fit: fill; width: 100%; height: 100%;",
"object-fit: none;"
],
ans: 0,
exp: "cover mantiene proporción y cubre todo, puede recortar bordes"
},

{
case: "Dos elementos. El de la izquierda tiene ancho fijo 200px, el de la derecha ocupa el resto usando flex",
opts: [
".contenedor{display:flex;} .izquierda{width:200px;} .derecha{flex:1;}",
".contenedor{display:flex;} .izquierda{width:200px;} .derecha{width:100%;}",
".contenedor{display:grid; grid-template-columns:200px 1fr;}",
"ambas funcionan"
],
ans: 3,
exp: "flex:1 o grid 1fr, ambas soluciones funcionan"
},

{
case: "Tooltip que aparece al hacer hover sobre un botón. El tooltip debe estar absolute respecto al botón",
opts: [
".boton{position:relative;} .tooltip{position:absolute; bottom:100%; left:0; display:none;} .boton:hover .tooltip{display:block;}",
".tooltip{position:fixed; bottom:100%;}",
".boton{position:absolute;} .tooltip{position:relative;}",
".boton{float:left;} .tooltip{clear:both;}"
],
ans: 0,
exp: "padre relative, hijo absolute posicionado relativo al padre"
},

{
case: "Evitar que los márgenes de un hijo colapsen con los del padre",
opts: [
".padre{overflow: auto;}",
".padre{display: flex;}",
".padre{padding-top: 1px;}",
"todas funcionan"
],
ans: 3,
exp: "cualquier cosa que cree nuevo contexto de formato evita el colapso"
},

{
case: "Hacer que un div mantenga proporción 16:9 (ancho 100%, alto automático)",
opts: [
"aspect-ratio: 16 / 9;",
"padding-bottom: 56.25%; position: relative;",
"height: 0; padding-bottom: 56.25%;",
"ambas funcionan"
],
ans: 3,
exp: "aspect-ratio es moderno, padding-bottom es el método clásico"
},

{
case: "Barra de navegación que se oculta al hacer scroll hacia abajo y vuelve al hacer scroll hacia arriba (solo CSS, sin JS)",
opts: [
"position: sticky; top: 0;",
"position: sticky; top: -100px; transition: top 0.3s;",
"no se puede sin JS",
"position: fixed; transform: translateY(-100%);"
],
ans: 2,
exp: "CSS puro no puede detectar dirección del scroll, se necesita JS"
},

{
case: "Contenedor con desborde horizontal que permite scroll, pero que NO muestre la barra de scroll (se vea limpio)",
opts: [
"overflow-x: auto; scrollbar-width: none; -ms-overflow-style: none;",
"overflow-x: hidden;",
"overflow-x: scroll; visibility: hidden;",
"no se puede"
],
ans: 0,
exp: "scrollbar-width:none oculta scroll en Firefox, -ms-overflow-style en IE/Edge"
},

{
case: "Fondo semitransparente detrás de un modal (overlay). El modal debe estar centrado",
opts: [
".overlay{position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center;}",
".overlay{position:absolute; background:gray;} .modal{position:relative; margin:auto;}",
".overlay{position:static; text-align:center;}",
"ninguna"
],
ans: 0,
exp: "fixed cubre toda pantalla, flex centra el modal"
},

// ==================== AVANZADO ====================

{
case: "Efecto de vidrio (glassmorphism): fondo borroso detrás, tarjeta semitransparente con blur",
opts: [
"backdrop-filter: blur(10px); background: rgba(255,255,255,0.2);",
"filter: blur(10px);",
"opacity: 0.5;",
"background: white; opacity: 0.5;"
],
ans: 0,
exp: "backdrop-filter difumina lo que está detrás, filter difumina el elemento"
},

{
case: "Grid donde la PRIMERA fila tenga 100px de alto, y el resto se repartan el espacio restante automáticamente",
opts: [
"grid-template-rows: 100px repeat(auto-fill, 1fr);",
"grid-template-rows: 100px 1fr 1fr;",
"grid-template-rows: 100px auto;",
"grid-template-rows: 100px minmax(0, 1fr);"
],
ans: 3,
exp: "minmax(0,1fr) permite que las filas adicionales se repartan el espacio"
},

{
case: "Elemento que rota 45 grados al hacer hover, CON transición suave de 0.3 segundos",
opts: [
".elemento{transition: transform 0.3s;} .elemento:hover{transform: rotate(45deg);}",
".elemento{animation: rotate 0.3s;} .elemento:hover{rotate:45deg;}",
".elemento:hover{transition: transform 0.3s; transform: rotate(45deg);}",
".elemento{transform: rotate(45deg); transition: all 0.3s;}"
],
ans: 0,
exp: "transition en el estado normal, transform en hover"
},

{
case: "Tarjeta que al hacer hover tiene una sombra que se expande suavemente y el fondo cambia de color",
opts: [
".tarjeta{transition: box-shadow 0.3s, background 0.3s;} .tarjeta:hover{box-shadow:0 10px 20px rgba(0,0,0,0.2); background:#f0f0f0;}",
".tarjeta:hover{box-shadow:0 10px 20px black; background:gray; transition:0.3s;}",
".tarjeta{transition: all 0.3s;} .tarjeta:hover{box-shadow:0 10px 20px gray; background:#eee;}",
"todas funcionan"
],
ans: 3,
exp: "las tres opciones funcionan, la primera es más específica"
},

{
case: "Menú desplegable que aparece desde abajo hacia arriba con animación (solo CSS, sin JS)",
opts: [
".submenu{transform: scaleY(0); transform-origin: top; transition: transform 0.3s;} .menu:hover .submenu{transform: scaleY(1);}",
".submenu{display:none;} .menu:hover .submenu{display:block; animation:slideUp 0.3s;}",
".submenu{height:0; overflow:hidden; transition:height 0.3s;} .menu:hover .submenu{height:200px;}",
"todas funcionan"
],
ans: 3,
exp: "tres formas diferentes de hacer dropdown animado"
},

{
case: "Layout con contenedor principal que tiene sidebar fijo a la izquierda (no se mueve al hacer scroll) y contenido que SCROLLEA normalmente",
opts: [
".contenedor{display:flex;} .sidebar{position:sticky; top:0; align-self:flex-start;} .contenido{flex:1;}",
".sidebar{position:fixed; left:0;} .contenido{margin-left:250px;}",
".sidebar{float:left; position:sticky;}",
".contenedor{display:grid; grid-template-columns:auto 1fr;} .sidebar{position:sticky; top:0;}"
],
ans: 3,
exp: "sticky dentro de grid o flex funciona para sidebar que scrollea con contenido"
},

{
case: "Elemento que se desvanece (fade in) cuando entra en el viewport al hacer scroll, SIN JavaScript",
opts: [
"@keyframes fadeIn{from{opacity:0}to{opacity:1}} .elemento{animation:fadeIn 1s both; animation-timeline: view();}",
".elemento{opacity:0; transition:opacity 1s;} body:has(.elemento:in-viewport) .elemento{opacity:1;}",
"no se puede sin JS",
".elemento{view-transition-name: fade;}"
],
ans: 2,
exp: "scroll-timeline y view() son experimentales, la mayoría de navegadores requieren JS"
},

{
case: "Botón con efecto de onda (ripple) al hacer click, solo CSS (sin JS)",
opts: [
".boton{position:relative; overflow:hidden;} .boton:active::after{content:''; position:absolute; border-radius:50%; transform:scale(0); animation:ripple 0.4s; background:rgba(255,255,255,0.5);}",
".boton{transition:box-shadow 0.1s;} .boton:active{box-shadow:0 0 0 10px rgba(0,0,0,0.1);}",
".boton:active{transform:scale(0.95);}",
"no se puede sin JS"
],
ans: 0,
exp: "pseudo-elemento ::after con animación en :active crea el efecto ripple"
},

{
case: "Grid donde las filas tienen alto AUTOMÁTICO basado en su contenido, pero las celdas vacías no colapsan a 0",
opts: [
"grid-auto-rows: minmax(auto, auto);",
"grid-auto-rows: 1fr;",
"grid-auto-rows: auto;",
"grid-template-rows: repeat(auto-fill, auto);"
],
ans: 2,
exp: "grid-auto-rows: auto da altura al contenido, celdas vacías mantienen altura mínima"
},

{
case: "Efecto de paralaje: fondo que se mueve más lento que el contenido al hacer scroll",
opts: [
".fondo{background-attachment: fixed; background-position: center; background-size: cover;}",
".fondo{transform: translateZ(-1px) scale(2);} .contenedor{perspective: 1px; overflow-y: auto;}",
"ambas funcionan",
"ninguna"
],
ans: 2,
exp: "background-attachment:fixed es clásico, transform 3D es método moderno"
},

 // ==================== CSS - SELECTORES ====================
    {
        unit: "CSS",
        diff: "easy",
        case: "Tienes UN SOLO boton de enviar en tu pagina y quieres darle un estilo especifico.",
        q: "¿Qué selector CSS se usa para un elemento con ID unico?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Código</th><th>¿Qué falta?</th></tr></thead>
        <tbody>
        <tr><td><input type="text" size="6" placeholder="???">enviar { background: green; }</td><td>#</td></tr>
        </tbody>
        </table>
        `,
        opts: ["#", ".", "*", "@"],
        ans: 0,
        exp: "# se usa para seleccionar por ID (unico)"
    },

    // ==================== CSS - SELECTORES DE CLASE ====================
    {
        unit: "CSS",
        diff: "easy",
        case: "Tienes varios botones en tu pagina que deben tener el mismo estilo.",
        q: "¿Qué selector CSS se usa para elementos con la misma clase?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Código</th><th>¿Qué falta?</th></tr></thead>
        <tbody>
        <tr><td><input type="text" size="6" placeholder="???">boton { background: blue; }</td><td>.</td></tr>
        </tbody>
        </table>
        `,
        opts: [".", "#", "*", "@"],
        ans: 0,
        exp: ". se usa para seleccionar por clase"
    },

    // ==================== CSS - MARGEN vs PADDING ====================
    {
        unit: "CSS",
        diff: "medium",
        case: "Quieres separar dos cajas entre si, SIN afectar el contenido interno.",
        q: "¿Qué propiedad crea espacio FUERA del borde de un elemento?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Propiedad</th><th>Ubicacion</th><th>¿Qué falta?</th></tr></thead>
        <tbody>
        <tr><td><input type="text" size="8" placeholder="???"></td><td>Fuera del borde</td><td>margin</td></tr>
        <tr><td>padding</td><td>Dentro del borde</td><td><input type="text" size="8" placeholder="???"></td></tr>
        </tbody>
        </table>
        `,
        opts: ["margin", "margin", "border", "spacing"],
        ans: 0,
        exp: "margin es el espacio FUERA del borde, padding es DENTRO"
    },

    // ==================== CSS - DISPLAY ====================
    {
        unit: "CSS",
        diff: "medium",
        case: "Tienes varios enlaces que quieres que se vean UNO AL LADO DEL OTRO en la misma linea.",
        q: "¿Qué valor de display hace que los elementos se comporten como inline pero permitiendo width y height?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Código</th><th>Comportamiento</th><th>¿Qué falta?</th></tr></thead>
        <tbody>
        <tr><td>display: <input type="text" size="10" placeholder="???"></td><td>Mismo ancho que su contenido, permite width/height</td><td>inline-block</td></tr>
        </tbody>
        </table>
        `,
        opts: ["inline-block", "block", "inline", "flex"],
        ans: 0,
        exp: "inline-block permite width/height pero se comporta como inline"
    },

    // ==================== CSS - POSITION ====================
    {
        unit: "CSS",
        diff: "hard",
        case: "Quieres que una barra de navegacion se quede FIJA en la parte superior al hacer scroll.",
        q: "¿Qué valor de position fija un elemento en la pantalla aunque se haga scroll?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Código</th><th>Comportamiento</th><th>¿Qué falta?</th></tr></thead>
        <tbody>
        <tr><td>position: <input type="text" size="6" placeholder="???"></td><td>Fijo en pantalla, no se mueve con scroll</td><td>fixed</td></tr>
        </tbody>
        </table>
        `,
        opts: ["fixed", "absolute", "relative", "sticky"],
        ans: 0,
        exp: "fixed fija el elemento en la pantalla aunque se haga scroll"
    },

    // ==================== CSS - Z-INDEX ====================
    {
        unit: "CSS",
        diff: "hard",
        case: "Dos elementos se superponen. Quieres que el menu quede POR ENCIMA de todo.",
        q: "¿Qué propiedad controla el orden de superposicion de elementos?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Código</th><th>Que hace</th><th>¿Qué falta?</th></tr></thead>
        <tbody>
        <tr><td><input type="text" size="8" placeholder="???">: 100;</td><td>Numero mas alto = mas arriba</td><td>z-index</td></tr>
        </tbody>
        </table>
        `,
        opts: ["z-index", "layer", "stack", "order"],
        ans: 0,
        exp: "z-index controla la superposicion (mayor numero = mas arriba)"
    }


];

export default preguntas_lenguaje_css;


