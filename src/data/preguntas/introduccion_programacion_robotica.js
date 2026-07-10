const introduccion_programacion_robotica = [

    //UNIDAD 1
 {
    "profe": true,
    "unit": "Glosario",
    "diff": "easy",
    "case": "En clases, el profesor pide definir con la RAE el término base de la programación.",
    "q": "Según la RAE, ¿qué es un 'algoritmo'?",
    "opts": [
      "Un conjunto ordenado y finito de operaciones que permite hallar la solución de un problema",
      "Un dispositivo que almacena datos e informaciones",
      "Un lenguaje informal para diseñar programas",
      "Un conjunto de componentes físicos de una computadora"
    ],
    "ans": 0,
    "exp": "La RAE define 'algoritmo' como el conjunto ordenado y finito de operaciones que permite hallar la solución de un problema, base de toda programación."
  },
  {
    "profe": true,
    "unit": "Glosario",
    "diff": "easy",
    "case": "Un estudiante confunde los conceptos de hardware y software al inicio del curso.",
    "q": "¿Cuál es la definición correcta de 'software' según la RAE?",
    "opts": [
      "Conjunto de los componentes físicos que constituyen la parte material de una computadora",
      "Conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora",
      "Conexión física y funcional entre dos aparatos, dispositivos o sistemas",
      "Dispositivo que almacena datos e informaciones"
    ],
    "ans": 1,
    "exp": "El software es el conjunto de programas, instrucciones y reglas informáticas que permiten ejecutar tareas en una computadora, a diferencia del hardware que es la parte física."
  },
  {
    "profe": true,
    "unit": "Glosario",
    "diff": "medium",
    "case": "El profesor pregunta por un término que no tiene definición oficial en la RAE pero sí uso técnico consolidado.",
    "q": "¿Cómo se entiende el 'pseudocódigo' en el contexto de la informática, dado que la RAE no lo define específicamente?",
    "opts": [
      "Como un lenguaje informal para diseñar algoritmos",
      "Como un dispositivo físico de almacenamiento",
      "Como el conjunto de órdenes que controla los procesos básicos de una computadora",
      "Como la conexión entre dos sistemas"
    ],
    "ans": 0,
    "exp": "Aunque la RAE no tiene una entrada específica, en informática el pseudocódigo se entiende como un lenguaje informal para diseñar algoritmos."
  },
  {
    "profe": true,
    "unit": "Glosario",
    "diff": "medium",
    "case": "Un compañero corrige un error en su primer script y te pregunta cómo se llama ese proceso.",
    "q": "En programación, ¿qué se entiende por 'depurar'?",
    "opts": [
      "Instalar nuevo software en el sistema",
      "El proceso de identificar y corregir errores",
      "Configurar los componentes físicos de una computadora",
      "Ejecutar un programa por primera vez"
    ],
    "ans": 1,
    "exp": "Depurar, en programación, es el proceso de identificar y corregir errores en el código, aunque la RAE no tiene una definición específica para este uso."
  },
  {
    "profe": true,
    "unit": "Glosario",
    "diff": "easy",
    "case": "El profesor muestra una imagen de un brazo mecánico programable en una fábrica.",
    "q": "¿Cuál es la definición de 'robot' según la RAE?",
    "opts": [
      "Máquina o ingenio electrónico programable, capaz de manipular objetos y realizar operaciones antes reservadas solo a personas",
      "Conjunto de programas y reglas informáticas",
      "Dispositivo que almacena datos e informaciones",
      "Conjunto de órdenes que controlan los procesos básicos de una computadora"
    ],
    "ans": 0,
    "exp": "La RAE define robot como una máquina o ingenio electrónico programable capaz de manipular objetos y realizar operaciones antes reservadas solo a personas."
  },
  {
    "profe": true,
    "unit": "Arquitectura de Hardware",
    "diff": "easy",
    "case": "Al armar un computador, el técnico explica qué componente ejecuta las instrucciones de los programas.",
    "q": "¿Cuál es el componente considerado el 'cerebro' del ordenador?",
    "opts": [
      "La memoria RAM",
      "El disco duro",
      "La CPU (unidad central de procesamiento)",
      "La placa base"
    ],
    "ans": 2,
    "exp": "La CPU es el componente principal responsable de interpretar y ejecutar la mayoría de las instrucciones de los programas, por lo que se considera el 'cerebro' del ordenador."
  },
  {
    "profe": true,
    "unit": "Arquitectura de Hardware",
    "diff": "medium",
    "case": "Un usuario nota que su computador accede muy rápido a los datos que está usando en ese momento, pero al apagarla se pierde esa información.",
    "q": "¿Qué tipo de memoria es volátil y almacena datos y programas que están en uso actualmente?",
    "opts": [
      "PROM",
      "Memoria caché",
      "RAM (memoria de acceso aleatorio)",
      "Disco duro (HDD)"
    ],
    "ans": 2,
    "exp": "La RAM es un tipo de memoria volátil utilizada para almacenar datos y programas que están siendo usados activamente por el sistema."
  },
  {
    "profe": true,
    "unit": "Arquitectura de Hardware",
    "diff": "hard",
    "case": "En un diagrama de arquitectura, el profesor señala tres líneas distintas que conectan la CPU con la memoria y pide identificar sus funciones.",
    "q": "¿Qué bus transporta las direcciones de memoria física para acceder a datos específicos almacenados?",
    "opts": [
      "Bus de datos",
      "Bus de direcciones",
      "Bus de control",
      "Bus de expansión"
    ],
    "ans": 1,
    "exp": "El bus de direcciones transporta las direcciones de memoria física para acceder y buscar datos específicos, mientras que el bus de datos transfiere la información y el de control gestiona las señales de coordinación."
  },
  {
    "profe": true,
    "unit": "Arquitectura de Hardware",
    "diff": "medium",
    "case": "Al revisar los componentes internos de la CPU, el profesor menciona una unidad encargada de las operaciones matemáticas y lógicas.",
    "q": "¿Qué componente interno de la CPU maneja las operaciones matemáticas y lógicas?",
    "opts": [
      "La unidad de control (CU)",
      "La unidad aritmético-lógica (ALU)",
      "La memoria caché",
      "El bus de control"
    ],
    "ans": 1,
    "exp": "La ALU (unidad aritmético-lógica) es el componente interno de la CPU que maneja las operaciones matemáticas y lógicas, mientras que la CU dirige la secuencia de operaciones."
  },
  {
    "profe": true,
    "unit": "Arquitectura de Hardware",
    "diff": "easy",
    "case": "Un estudiante conecta un teclado, un mouse y un monitor a su nuevo computador.",
    "q": "¿Cuál de los siguientes es un dispositivo de salida?",
    "opts": [
      "Teclado",
      "Mouse",
      "Monitor",
      "Escáner"
    ],
    "ans": 2,
    "exp": "El monitor es un dispositivo de salida porque presenta información al usuario; el teclado, mouse y escáner son dispositivos de entrada."
  },
  {
    "profe": true,
    "unit": "Arquitectura de Hardware",
    "diff": "hard",
    "case": "Una empresa está diseñando un centro de datos y necesita garantizar la continuidad del servicio ante fallas de hardware.",
    "q": "¿Qué característica de la arquitectura de hardware en servidores permite mantener la continuidad del servicio mediante componentes duplicados?",
    "opts": [
      "Virtualización",
      "Redundancia con configuraciones RAID",
      "Memoria caché",
      "Bus de datos"
    ],
    "ans": 1,
    "exp": "La redundancia, con componentes duplicados y configuraciones RAID, garantiza la continuidad del servicio y la disponibilidad constante de los datos en servidores y centros de datos."
  },
  {
    "profe": true,
    "unit": "Arquitectura de Hardware",
    "diff": "medium",
    "case": "Un dispositivo IoT (Internet de las Cosas) debe conectarse de forma inalámbrica con otros sensores del hogar.",
    "q": "¿Qué tecnologías de conexión inalámbrica se mencionan como usadas en dispositivos IoT?",
    "opts": [
      "Wifi, bluetooth y Zigbee",
      "USB, HDMI y VGA",
      "SATA, PCIe y RAID",
      "Ethernet, fibra óptica y coaxial"
    ],
    "ans": 0,
    "exp": "Los dispositivos IoT emplean microcontroladores con capacidades de comunicación integradas que permiten la conexión inalámbrica a través de wifi, bluetooth y Zigbee."
  },
  {
    "profe": true,
    "unit": "Arquitectura de Hardware",
    "diff": "medium",
    "case": "Un diseñador gráfico se queja de que su computador se congela al renderizar video en alta resolución.",
    "q": "Para tareas de diseño gráfico y multimedia, ¿qué componentes se recomienda priorizar según la optimización de hardware según el uso?",
    "opts": [
      "CPU y GPU de alto rendimiento y mucha RAM",
      "Solo una CPU eficiente y almacenamiento moderado",
      "Únicamente una fuente de poder de alta potencia",
      "Solo memoria caché ampliada"
    ],
    "ans": 0,
    "exp": "Para diseño gráfico y multimedia se requieren CPU y GPU de alto rendimiento junto con abundante RAM para manejar software de edición y renderización eficientemente."
  },
  {
    "profe": true,
    "unit": "Robot y Simulación",
    "diff": "easy",
    "case": "En una obra de teatro checa de 1920 aparece por primera vez una palabra que hoy usamos a diario en tecnología.",
    "q": "¿Quién acuñó el término 'robot' y en qué obra?",
    "opts": [
      "Isaac Asimov en 'Yo, Robot'",
      "Karel Čapek en 'R.U.R.' (1920)",
      "Alan Turing en su ensayo sobre máquinas",
      "Leonardo da Vinci en sus bocetos"
    ],
    "ans": 1,
    "exp": "El término 'robot' fue acuñado por el escritor checo Karel Čapek en su obra de teatro 'R.U.R.' (Robots Universales Rossum) en 1920."
  },
  {
    "profe": true,
    "unit": "Robot y Simulación",
    "diff": "medium",
    "case": "Un robot es utilizado por un especialista en desactivación de explosivos, quien lo controla en todo momento a distancia.",
    "q": "Según su grado de autonomía, ¿cómo se clasifica este tipo de robot?",
    "opts": [
      "Robot autónomo",
      "Robot semi autónomo",
      "Robot teleoperado",
      "Robot colaborativo (cobot)"
    ],
    "ans": 2,
    "exp": "Los robots teleoperados son controlados a distancia por un operador humano, como en operaciones de desactivación de explosivos o entornos peligrosos."
  },
  {
    "profe": true,
    "unit": "Robot y Simulación",
    "diff": "hard",
    "case": "En una línea de ensamblaje, un robot trabaja codo a codo junto a operarios humanos, asistiéndolos en tareas que requieren destreza.",
    "q": "¿Qué tipo de robot manipulador describe mejor este escenario?",
    "opts": [
      "Brazo robótico articulado tradicional",
      "Robot colaborativo (cobot)",
      "Robot doméstico",
      "Dron"
    ],
    "ans": 1,
    "exp": "Los robots colaborativos (cobots) están diseñados específicamente para trabajar junto a humanos, asistiendo en tareas que requieren destreza y flexibilidad."
  },
  {
    "profe": true,
    "unit": "Robot y Simulación",
    "diff": "medium",
    "case": "Un equipo de ingeniería quiere probar el comportamiento de un robot humanoide antes de construir el prototipo físico, para reducir costos y riesgos.",
    "q": "¿Qué tipo de herramienta les permite crear entornos virtuales para simular el comportamiento de robots antes de implementarlos en el mundo real?",
    "opts": [
      "Software de simulación (por ejemplo, Gazebo)",
      "Sistema operativo embebido",
      "Bus de direcciones",
      "Software de comunicaciones"
    ],
    "ans": 0,
    "exp": "El software de simulación, como Gazebo, permite crear entornos virtuales para simular el comportamiento y rendimiento de robots antes de implementarlos en el mundo real, reduciendo costos y riesgos."
  },
  {
    "profe": true,
    "unit": "Robot y Simulación",
    "diff": "hard",
    "case": "Un investigador necesita un simulador que ofrezca gran flexibilidad para manipuladores y robots móviles, con una interfaz de programación que integre algoritmos de control.",
    "q": "¿Qué plataforma de simulación de robótica, también conocida como Virtual Robot Experimentation Platform, corresponde a esta descripción?",
    "opts": [
      "Webots",
      "Gazebo",
      "V-REP (CoppeliaSim)",
      "PSeInt"
    ],
    "ans": 2,
    "exp": "V-REP (CoppeliaSim), o Virtual Robot Experimentation Platform, ofrece gran flexibilidad en la simulación de manipuladores y robots móviles, con una interfaz de programación que permite integrar algoritmos de control."
  },
  {
    "profe": true,
    "unit": "Robot y Simulación",
    "diff": "easy",
    "case": "Un profesor busca una herramienta de simulación orientada específicamente a la enseñanza de robótica.",
    "q": "¿Qué software de simulación es utilizado principalmente para la simulación de robots educativos y de investigación?",
    "opts": [
      "Gazebo",
      "Webots",
      "V-REP",
      "PSeInt"
    ],
    "ans": 1,
    "exp": "Webots es utilizado para la simulación de robots educativos y de investigación, facilitando el desarrollo de algoritmos de navegación y control."
  },
  {
    "profe": true,
    "unit": "Robot y Simulación",
    "diff": "medium",
    "case": "Un dron es utilizado para tomar fotografías aéreas de un evento y también para entregar paquetes en zonas urbanas.",
    "q": "Según su morfología, ¿en qué categoría se clasifica un dron?",
    "opts": [
      "Robot humanoide",
      "Robot con ruedas",
      "Robot aéreo",
      "Robot con patas"
    ],
    "ans": 2,
    "exp": "Los drones son robots aéreos utilizados en fotografía, vigilancia y entrega de paquetes, dentro de la clasificación por morfología de los robots móviles."
  },
  {
    "profe": true,
    "unit": "Robot y Simulación",
    "diff": "hard",
    "case": "Un robot de exploración submarina realiza tareas preprogramadas sin que ningún operador intervenga directamente durante la misión.",
    "q": "¿Cómo se clasifica este robot según su capacidad de autonomía?",
    "opts": [
      "Robot teleoperado",
      "Robot autónomo",
      "Robot semi autónomo",
      "Robot industrial manipulador"
    ],
    "ans": 1,
    "exp": "Los robots autónomos son capaces de realizar tareas preprogramadas sin intervención humana directa, como en exploración submarina o líneas de ensamblaje industrial."
  },
  {
    "profe": true,
    "unit": "IDE y Pseudocódigo",
    "diff": "easy",
    "case": "El profesor pregunta cuál de las siguientes opciones NO corresponde a un tipo de software, sino a un componente físico.",
    "q": "De las siguientes opciones, ¿cuál NO es un tipo de software?",
    "opts": [
      "Sistema operativo",
      "Navegador web",
      "Placa base",
      "Software de seguridad"
    ],
    "ans": 2,
    "exp": "La placa base es un componente de hardware, no de software; los sistemas operativos, navegadores y software de seguridad sí son tipos de software."
  },
  {
    "profe": true,
    "unit": "IDE y Pseudocódigo",
    "diff": "medium",
    "case": "Antes de escribir el código real de un programa, un estudiante diseña en lenguaje natural los pasos que debe seguir el algoritmo.",
    "q": "¿Qué función cumple el pseudocódigo en el desarrollo de software?",
    "opts": [
      "Codificar directamente en un lenguaje de programación específico",
      "Automatizar tareas administrativas del sistema operativo",
      "Planificar y organizar la lógica del programa antes de escribir el código real",
      "Compilar y ejecutar el programa final"
    ],
    "ans": 2,
    "exp": "El pseudocódigo permite a los programadores diseñar y organizar la lógica del programa de manera estructurada antes de la implementación real del código."
  },
  {
    "profe": true,
    "unit": "IDE y Pseudocódigo",
    "diff": "medium",
    "case": "Un desarrollador necesita un entorno donde pueda escribir, compilar, depurar y ejecutar su código de forma eficiente, todo en un mismo lugar.",
    "q": "¿Cuál es el propósito principal de las plataformas de programación integradas (IDE)?",
    "opts": [
      "Diseñar hardware para computadoras",
      "Escribir, compilar, depurar y ejecutar código de manera eficiente",
      "Mantener la seguridad de la red",
      "Administrar bases de datos empresariales"
    ],
    "ans": 1,
    "exp": "Las IDE son herramientas diseñadas para facilitar el desarrollo de software, proporcionando un entorno integrado para escribir, compilar, depurar y ejecutar código eficientemente."
  },
  {
    "profe": true,
    "unit": "IDE y Pseudocódigo",
    "diff": "hard",
    "case": "Un profesor recomienda una herramienta gratuita, pensada especialmente para estudiantes que están comenzando a programar, cuya sintaxis es similar al lenguaje natural.",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>PSeInt - Editor de pseudocódigo</div>Proceso EjemploSaludo\n    Escribir \"Hola, mundo\";\nFinProceso</div>",
    "q": "¿Qué herramienta IDE gratuita, orientada a la enseñanza, permite escribir, ejecutar y depurar pseudocódigo como el del ejemplo?",
    "opts": [
      "Visual Studio",
      "PSeInt",
      "Eclipse",
      "Sublime Text"
    ],
    "ans": 1,
    "exp": "PSeInt (Pseudocode Interpreter) es una herramienta gratuita diseñada específicamente para estudiantes de programación, con sintaxis similar al lenguaje natural y funciones de depuración."
  },
  {
    "profe": true,
    "unit": "IDE y Pseudocódigo",
    "diff": "medium",
    "case": "Una empresa necesita un programa capaz de administrar grandes volúmenes de datos, permitiendo su almacenamiento, acceso y manipulación eficiente.",
    "q": "¿A qué tipo de software corresponden ejemplos como Oracle Database, MySQL y Microsoft SQL Server?",
    "opts": [
      "Software de sistema",
      "Software de bases de datos",
      "Software de comunicaciones",
      "Software de desarrollo"
    ],
    "ans": 1,
    "exp": "El software de bases de datos administra grandes volúmenes de datos permitiendo su almacenamiento, acceso y manipulación eficiente; ejemplos son Oracle Database, MySQL y Microsoft SQL Server."
  },
  {
    "profe": true,
    "unit": "IDE y Pseudocódigo",
    "diff": "easy",
    "case": "Un usuario instala Windows Firewall para proteger su computador de accesos no autorizados.",
    "q": "¿A qué tipo de software pertenece un cortafuegos como Windows Firewall?",
    "opts": [
      "Software de aplicación",
      "Software de seguridad",
      "Software de sistema",
      "Software de comunicaciones"
    ],
    "ans": 1,
    "exp": "El software de seguridad protege los sistemas informáticos y los datos contra amenazas; incluye antivirus, cortafuegos y software de cifrado de datos."
  },
  {
    "profe": true,
    "unit": "IDE y Pseudocódigo",
    "diff": "hard",
    "case": "Dos programadores en distintas ciudades necesitan trabajar simultáneamente en el mismo proyecto de pseudocódigo dentro de un IDE.",
    "q": "¿Qué característica de las IDE permite este tipo de trabajo simultáneo entre varios programadores?",
    "opts": [
      "Depuración simplificada",
      "Gestión de proyectos",
      "Soporte para colaboración en tiempo real",
      "Integración de herramientas externas"
    ],
    "ans": 2,
    "exp": "Algunos IDEs ofrecen funcionalidades de colaboración en tiempo real, permitiendo a varios programadores trabajar simultáneamente en el mismo proyecto, lo cual es beneficioso para el trabajo en equipo."
  },
  {
    "profe": true,
    "unit": "Curación de Contenidos",
    "diff": "easy",
    "case": "El profesor explica el primer paso del proceso de curación de contenidos antes de comenzar a redactar cualquier entrada del blog.",
    "q": "¿Cuál es el primer paso del proceso de curación de contenidos efectiva?",
    "opts": [
      "Crear y personalizar",
      "Compartir",
      "Buscar (identificar la temática)",
      "Organizar"
    ],
    "ans": 2,
    "exp": "El proceso comienza con 'Busca', que consiste en identificar la temática y elegir las fuentes, buscadores y sitios pertinentes, confiables y de calidad."
  },
  {
    "profe": true,
    "unit": "Curación de Contenidos",
    "diff": "medium",
    "case": "Un estudiante encontró un artículo interesante, pero antes de compartirlo se pregunta si la fuente es seria y si el sitio tiene calidad informativa.",
    "q": "¿A qué criterio de selección de contenido corresponde evaluar si la información proviene de un sitio confiable y de calidad informativa?",
    "opts": [
      "Relevante",
      "Creíble",
      "Diversa",
      "Única"
    ],
    "ans": 1,
    "exp": "El criterio 'Creíble' evalúa si la información fue revisada desde un sitio o publicación confiable y de alta calidad informativa."
  },
  {
    "profe": true,
    "unit": "Curación de Contenidos",
    "diff": "hard",
    "case": "Un alumno copia un artículo completo y lo pega directamente en su blog del curso sin agregar comentarios propios.",
    "q": "Según la metodología del curso, ¿por qué esta acción es incorrecta?",
    "opts": [
      "Porque no se debe usar Word para redactar antes de publicar",
      "Porque la curación de contenidos no es un ejercicio de 'copiar y pegar', se debe agregar valor, opinión y respetar la propiedad intelectual",
      "Porque solo se permite compartir contenido en video",
      "Porque el blog no permite insertar texto"
    ],
    "ans": 1,
    "exp": "La actividad enfatiza que no es un ejercicio de 'copiar y pegar': se debe aportar contexto, valor y opinión propia, además de respetar siempre la propiedad intelectual y derecho de autor."
  },
  {
    "profe": true,
    "unit": "Curación de Contenidos",
    "diff": "medium",
    "case": "Un estudiante quiere compartir un video de YouTube directamente en el Ambiente de Aprendizaje AAI de INACAP.",
    "q": "Según las normas de la actividad, ¿qué está estrictamente prohibido hacer en el blog del AAI?",
    "opts": [
      "Compartir links de interés",
      "Insertar imágenes propias",
      "Subir videos, sean de YouTube, Twitter o cualquier otra aplicación",
      "Editar el texto de la publicación"
    ],
    "ans": 2,
    "exp": "Está estrictamente prohibido subir videos al Ambiente de Aprendizaje AAI; solo se puede compartir el link del video junto con una imagen que identifique la temática."
  },
  {
    "profe": true,
    "unit": "Curación de Contenidos",
    "diff": "medium",
    "case": "Un estudiante ya redactó su resumen de curación de contenidos y quiere saber cuál es la extensión recomendada por entrada de blog.",
    "q": "¿Cuál es la extensión aproximada recomendada para el resumen de cada entrada del blog de curación de contenidos?",
    "opts": [
      "50 a 100 palabras",
      "200 a 250 palabras",
      "500 a 600 palabras",
      "1000 palabras o más"
    ],
    "ans": 1,
    "exp": "Se recomienda que el relato o resumen de cada entrada del blog tenga aproximadamente entre 200 y 250 palabras."
  },
  {
    "profe": true,
    "unit": "Curación de Contenidos",
    "diff": "hard",
    "case": "Al finalizar la unidad, el profesor entrega un documento para que cada estudiante revise y valore su propio desempeño en la actividad de curación de contenidos.",
    "q": "¿Cómo se llama el instrumento que el profesor comparte al final de cada unidad para este propósito?",
    "opts": [
      "Pauta de Coevaluación",
      "Pauta de Autoevaluación",
      "Rúbrica de Heteroevaluación",
      "Informe de Retroalimentación Grupal"
    ],
    "ans": 1,
    "exp": "Al finalizar cada unidad se comparte una Pauta de Autoevaluación para que el estudiante reconozca y valore su propio trabajo de curación de contenidos."
  },
  {
    "profe": true,
    "unit": "Curación de Contenidos",
    "diff": "easy",
    "case": "Un curador de contenidos necesita mantenerse al tanto de nuevas publicaciones sobre robótica sin revisar manualmente cada sitio web.",
    "q": "¿Cuál de las siguientes es una herramienta mencionada para facilitar la búsqueda y curación de contenidos?",
    "opts": [
      "PSeInt",
      "Alertas de Google",
      "Gazebo",
      "V-REP"
    ],
    "ans": 1,
    "exp": "Alertas de Google es una de las herramientas mencionadas (junto a Feedly, Scoop.it, Flipboard y Pinterest) para facilitar la búsqueda y selección de información."
  },

  //UNIDAD 2
  
   {
    "id": "u2-f1-01",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "easy",
    "case": "Estás diseñando el diagrama de flujo de un algoritmo antes de programarlo.",
    "q": "¿Qué símbolo (figura) se utiliza en un Diagrama de Flujo de Datos (DFD) para representar el Inicio y el Fin del algoritmo?",
    "opts": ["Rombo", "Óvalo", "Rectángulo", "Flecha"],
    "ans": 1,
    "exp": "Los óvalos se utilizan para indicar el inicio y el fin de un algoritmo en un DFD."
  },
  {
    "id": "u2-f1-02",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "easy",
    "case": "El profesor pide identificar la simbología correcta de los DFD.",
    "q": "¿Qué símbolo se utiliza para representar procesos o acciones dentro de un DFD?",
    "opts": ["Óvalo", "Rombo", "Rectángulo", "Círculo"],
    "ans": 2,
    "exp": "Los rectángulos representan procesos o acciones dentro del diagrama de flujo."
  },
  {
    "id": "u2-f1-03",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "medium",
    "case": "Un DFD necesita evaluar si un valor cumple una condición para bifurcar el flujo.",
    "q": "¿Qué figura se utiliza en un DFD para representar una decisión o condición?",
    "opts": ["Rectángulo", "Rombo", "Óvalo", "Paralelogramo"],
    "ans": 1,
    "exp": "Los rombos se usan para representar decisiones, ya que de ellos salen normalmente dos caminos (Sí/No)."
  },
  {
    "id": "u2-f1-04",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "medium",
    "case": "Antes de escribir código, necesitas abrir el entorno de trabajo de Python en Windows.",
    "q": "¿Cómo se llama la consola/terminal de Python que se abre al ejecutar el IDLE y que permite escribir código directamente?",
    "opts": ["Terminal", "Shell", "Prompt", "Editor"],
    "ans": 1,
    "exp": "Al abrir el IDLE se despliega la 'Shell' de Python, una consola donde se puede escribir e interpretar código línea a línea."
  },
  {
    "id": "u2-f1-05",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "easy",
    "case": "Vas a guardar tu primer programa en un archivo para poder ejecutarlo con F5.",
    "q": "¿Cuál es la extensión de archivo correcta para guardar un programa de Python?",
    "opts": [".pt", ".py", ".pyt", ".pty"],
    "ans": 1,
    "exp": "Los archivos de Python se guardan con extensión .py."
  },
  {
    "id": "u2-f1-06",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "medium",
    "case": "Quieres dejar una nota para ti mismo dentro del código sin que afecte la ejecución.",
    "q": "¿Qué símbolo se utiliza en Python para comentar una sola línea de código?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Python</div>#mi primer saludo\nprint(\"Hola Mundo\")</div>",
    "opts": ["//", "#", "$", "--"],
    "ans": 1,
    "exp": "El símbolo # (almohadilla, gato o hashtag) se usa al inicio de una línea para comentarla en Python."
  },
  {
    "id": "u2-f1-07",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "medium",
    "case": "Necesitas comentar varias líneas de código de una sola vez.",
    "q": "¿Qué se utiliza en Python para comentar un bloque de varias líneas de código?",
    "opts": ["Doble almohadilla (##)", "Triple comilla simple o doble ('''  o \"\"\")", "Corchetes []", "Paréntesis ()"],
    "ans": 1,
    "exp": "Para comentar bloques de código se usan tres comillas simples o tres comillas dobles al inicio y al final del bloque."
  },
  {
    "id": "u2-f1-08",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "hard",
    "case": "Estás nombrando variables en un programa y quieres evitar errores de sintaxis.",
    "q": "Según las reglas de Python, ¿cuál de los siguientes NO es un nombre de variable válido?",
    "opts": ["valor_1", "_temporal", "2valor", "valorDos"],
    "ans": 2,
    "exp": "El nombre de una variable no puede comenzar con un número; puede contenerlo, pero no comenzar por él. '2valor' es inválido."
  },
  {
    "id": "u2-f1-09",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "medium",
    "case": "Un compañero afirma que 'valor', 'Valor' y 'VALOR' son la misma variable en Python.",
    "q": "¿Es correcta esta afirmación?",
    "opts": ["Sí, Python ignora mayúsculas y minúsculas", "No, Python distingue entre mayúsculas y minúsculas, por lo que son 3 variables distintas", "Solo son iguales si tienen el mismo valor asignado", "Depende de la versión de Python"],
    "ans": 1,
    "exp": "Python es sensible a mayúsculas y minúsculas (case-sensitive), por lo tanto 'valor', 'Valor' y 'VALOR' son variables distintas."
  },
  {
    "id": "u2-f1-10",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "hard",
    "case": "Se ejecuta el siguiente código en la Shell de Python.",
    "q": "¿Cuál será el resultado impreso por pantalla?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Python</div>valor_3 = 2.3e6\nprint(valor_3)</div>",
    "opts": ["2.3e6", "2300000.0", "23000000", "Error de sintaxis"],
    "ans": 1,
    "exp": "2.3e6 es notación científica y equivale a 2.3 x 10^6 = 2300000.0, que Python interpreta como un dato float."
  },
  {
    "id": "u2-f1-11",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "medium",
    "case": "Necesitas calcular cuántas veces cabe un número dentro de otro, descartando decimales.",
    "q": "¿Qué operador matemático de Python realiza la división descartando la parte decimal del resultado?",
    "opts": ["/", "//", "%", "**"],
    "ans": 1,
    "exp": "El operador de división entera (//) realiza la división y descarta la parte decimal del resultado."
  },
  {
    "id": "u2-f1-12",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "medium",
    "case": "Necesitas saber si un número es par o impar usando el resto de una división.",
    "q": "¿Qué operador matemático en Python entrega el resto (residuo) de una división entera?",
    "opts": ["//", "%", "/", "**"],
    "ans": 1,
    "exp": "El operador módulo (%) es la operación complementaria a la división entera, y entrega el resto de dividir dos números."
  },
  {
    "id": "u2-f1-13",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "hard",
    "case": "Se ejecuta el siguiente fragmento de código en Python.",
    "q": "¿Cuál es el resultado de ejecutar estas líneas?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Python</div>valor_1 = 12\nvalor_2 = 5\nprint(valor_1 // valor_2)\nprint(valor_1 % valor_2)</div>",
    "opts": ["2 y 2", "2.4 y 2", "12 y 5", "2 y 0"],
    "ans": 0,
    "exp": "12 // 5 = 2 (división entera, descarta el decimal) y 12 % 5 = 2 (resto de la división). Ambos resultados son 2."
  },
  {
    "id": "u2-f1-14",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "medium",
    "case": "Quieres comparar si dos valores son distintos entre sí en una condición.",
    "q": "¿Qué operador de comparación en Python representa 'desigualdad'?",
    "opts": ["==", "!=", "<>", "~="],
    "ans": 1,
    "exp": "El operador != se utiliza para comprobar desigualdad entre dos valores en Python."
  },
  {
    "id": "u2-f1-15",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "hard",
    "case": "Se ejecuta el siguiente código con operadores de cadena.",
    "q": "¿Qué imprimirá este código?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Python</div>saludo = \"Hola \" + \"mundo\"\nrisa = 3 * \"ja\"\nprint(saludo)\nprint(risa)</div>",
    "opts": ["Hola mundo / jajaja", "Error, no se puede sumar texto", "HolamundoHolamundoHolamundo / ja", "Hola  mundo / ja3"],
    "ans": 0,
    "exp": "El operador + concatena cadenas ('Hola mundo') y el operador * repite la cadena 'ja' tres veces ('jajaja')."
  },
  {
    "id": "u2-f1-16",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "hard",
    "case": "Necesitas evaluar si un número x está dentro de un intervalo [a,b] usando operadores lógicos.",
    "q": "¿Qué operador lógico en Python devuelve True solamente si AMBAS expresiones evaluadas son verdaderas?",
    "opts": ["or", "not", "and", "xor"],
    "ans": 2,
    "exp": "El operador 'and' evalúa dos expresiones y devuelve True únicamente si ambas son verdaderas."
  },
  {
    "id": "u2-f1-17",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "hard",
    "case": "Se combinan varios operadores en una misma expresión y se debe determinar el orden de ejecución.",
    "q": "Según el orden de precedencia de operadores en Python visto en la unidad, ¿cuál de los siguientes se ejecuta PRIMERO en una expresión combinada?",
    "opts": ["or", "and", "**  (exponente)", "== (igualdad)"],
    "ans": 2,
    "exp": "La precedencia de mayor a menor es: **, luego */ %, luego + -, luego comparaciones, luego not, and y finalmente or. El exponente (**) tiene la mayor precedencia."
  },
  {
    "id": "u2-f1-18",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "medium",
    "case": "Quieres alterar el orden natural de precedencia en una expresión matemática.",
    "q": "¿Qué elemento se utiliza en Python para alterar el orden de precedencia de una expresión?",
    "opts": ["Corchetes []", "Llaves {}", "Paréntesis ()", "Comillas \" \""],
    "ans": 2,
    "exp": "Los paréntesis permiten forzar que una operación se ejecute antes que otra, alterando el orden natural de precedencia."
  },
  {
    "id": "u2-f1-19",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "easy",
    "case": "Quieres ejecutar un bloque de código solo si se cumple una condición, y en caso contrario, seguir el flujo normal.",
    "q": "¿Qué sentencia se usa cuando solo se necesita ejecutar un bloque de código si la condición es verdadera (sin bloque alternativo)?",
    "opts": ["if-elif-else", "while", "if", "for"],
    "ans": 2,
    "exp": "La sentencia if ejecuta un bloque de instrucciones solo si se cumple la condición; si es falsa, el programa simplemente continúa."
  },
  {
    "id": "u2-f1-20",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "medium",
    "case": "Un programa debe imprimir un mensaje distinto dependiendo de si un número es par o impar.",
    "q": "¿Qué estructura de control es la más adecuada para este caso, donde solo existen dos alternativas posibles?",
    "opts": ["if simple", "if-else", "while", "for con rango"],
    "ans": 1,
    "exp": "La sentencia if-else decide qué bloque ejecutar dependiendo de si la condición es verdadera o falsa, ideal para dos alternativas excluyentes."
  },
  {
    "id": "u2-f1-21",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "hard",
    "case": "Un programa debe elegir entre tres o más alternativas posibles (por ejemplo triángulo, cuadrado o rectángulo).",
    "q": "¿Qué estructura permite evaluar varias condiciones en orden, ejecutando solo el primer bloque cuya condición sea verdadera?",
    "opts": ["if-elif-else", "while anidado", "for-else", "break-continue"],
    "ans": 0,
    "exp": "La sentencia if-elif-else evalúa condiciones en orden; la primera verdadera ejecuta su bloque y las siguientes condiciones no se evalúan."
  },
  {
    "id": "u2-f1-22",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "medium",
    "case": "No se conoce de antemano cuántas veces se repetirá un ciclo, ya que depende de una condición dinámica durante la ejecución.",
    "q": "¿Qué estructura de repetición es más adecuada en este caso?",
    "opts": ["for con rango", "while", "if-elif-else", "break"],
    "ans": 1,
    "exp": "El ciclo while es más adecuado cuando el número de iteraciones no se conoce de antemano y depende de una condición evaluada en cada iteración."
  },
  {
    "id": "u2-f1-23",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "hard",
    "case": "Se ejecuta el siguiente ciclo for en Python.",
    "q": "¿Qué valores tomará la variable de control 'i' en este ciclo?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Python</div>for i in range(3, 13, 2):\n    print(i)</div>",
    "opts": ["3,4,5,6,7,8,9,10,11,12", "3,5,7,9,11", "3,5,7,9,11,13", "3,6,9,12"],
    "ans": 1,
    "exp": "range(3,13,2) comienza en 3, aumenta de 2 en 2, y termina antes de llegar a 13 (valor final excluido): 3,5,7,9,11."
  },
  {
    "id": "u2-f1-24",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "hard",
    "case": "Se ejecuta range(11,4) en un ciclo for.",
    "q": "¿Cuántos valores generará este rango?",
    "opts": ["Del 11 al 4 descendente", "Del 4 al 11", "Ningún valor", "Un error de ejecución"],
    "ans": 2,
    "exp": "range(11,4) no genera ningún valor, ya que por defecto el incremento es +1 y el valor inicial (11) es mayor que el final (4); se necesitaría un incremento negativo como en range(11,4,-1)."
  },
  {
    "id": "u2-f1-25",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "medium",
    "case": "Estás buscando un divisor de un número dentro de un ciclo for y, apenas lo encuentras, ya no necesitas seguir revisando.",
    "q": "¿Qué sentencia permite terminar de forma anticipada un ciclo (while o for) apenas se cumple una condición?",
    "opts": ["continue", "pass", "break", "return"],
    "ans": 2,
    "exp": "La sentencia break termina de forma prematura el ciclo, sin esperar a que la condición natural del ciclo finalice."
  },
  {
    "id": "u2-f1-26",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "medium",
    "case": "Quieres omitir ciertos números (por ejemplo, los múltiplos de 4) sin terminar el ciclo completo.",
    "q": "¿Qué sentencia permite saltar directamente a la siguiente iteración de un ciclo, sin ejecutar el resto del bloque actual?",
    "opts": ["break", "continue", "else", "exit"],
    "ans": 1,
    "exp": "La sentencia continue salta a la siguiente iteración sin terminar de ejecutar el bloque de código actual."
  },
  {
    "id": "u2-f1-27",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "hard",
    "case": "El profesor pregunta por una buena práctica al usar la sentencia break.",
    "q": "¿Por qué la sentencia break siempre debe aparecer dentro de una sentencia if dentro de un ciclo?",
    "opts": ["Porque Python lo exige por sintaxis obligatoria", "Porque de lo contrario el ciclo terminaría siempre en la primera iteración", "Porque así se optimiza la memoria", "No es necesario, es solo una convención estética"],
    "ans": 1,
    "exp": "Si break no estuviera condicionado por un if, el ciclo se rompería siempre en la primera vuelta, sin permitir ninguna repetición útil."
  },

  //UNIDAD 3

   {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre las medidas de seguridad en programación de robots.",
    "q": "¿Cuál es una medida importante para la seguridad en la programación de sistemas robotizados?",
    "extra": "",
    "opts": [
      "Ignorar la seguridad y centrarse solo en la funcionalidad",
      "No gestionar errores ni utilizar manejo de excepciones",
      "Implementar medidas de seguridad como paradas de emergencia",
      "Evitar las pruebas del sistema"
    ],
    "ans": 2,
    "exp": "Estas medidas protegen tanto al robot como a los operadores humanos, asegurando que el sistema pueda manejar situaciones imprevistas de manera segura."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "easy",
    "case": "El profesor pregunta sobre las buenas prácticas fundamentales.",
    "q": "¿Cuál es una buena práctica fundamental en la programación de sistemas robotizados?",
    "extra": "",
    "opts": [
      "Evitar el uso de control de versiones",
      "Ignorar el manejo de excepciones y errores",
      "Documentar detalladamente el código y los procesos de programación",
      "Escribir el código sin comentarios para ahorrar tiempo"
    ],
    "ans": 2,
    "exp": "Una buena documentación facilita futuras modificaciones y el mantenimiento del sistema robótico, asegurando que cualquier desarrollador pueda entender y trabajar con el código."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre el aseguramiento de la calidad del código.",
    "q": "¿Qué práctica es esencial para asegurar la calidad del código en un sistema robotizado?",
    "extra": "",
    "opts": [
      "Solo probar el código en simuladores sin hacerlo en el entorno real",
      "Omitir la validación del robot después de la implementación",
      "Realizar pruebas exhaustivas del código bajo todas las condiciones previstas",
      "Publicar el código sin revisión"
    ],
    "ans": 2,
    "exp": "Es crucial validar el robot tanto en simulaciones como en el entorno real de trabajo para ajustar y optimizar su operación."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "easy",
    "case": "El profesor pregunta sobre las cinco categorías de buenas prácticas.",
    "q": "Según el recurso, ¿cuáles son los cinco conceptos clave a considerar en las buenas prácticas de programación de un sistema robotizado?",
    "extra": "",
    "opts": [
      "Diseño gráfico, marketing, ventas, logística y finanzas",
      "Especificaciones de software, escritura de código, pruebas y validación, mantenimiento y actualización, y seguridad",
      "Hardware, electricidad, mecánica, química y física",
      "Redes, bases de datos, servidores, nube y ciberseguridad"
    ],
    "ans": 1,
    "exp": "Estas cinco categorías estructuran el desarrollo de sistemas robotizados de forma integral, desde la planificación hasta el mantenimiento a largo plazo."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre el lenguaje de programación recomendado.",
    "q": "¿Qué lenguaje de programación se menciona como adecuado por su rapidez en el desarrollo de sistemas robotizados?",
    "extra": "",
    "opts": [
      "Java",
      "Python",
      "C++",
      "COBOL"
    ],
    "ans": 1,
    "exp": "Python se recomienda por permitir un desarrollo rápido, siendo una de las opciones adecuadas para programar sistemas robotizados."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "hard",
    "case": "El profesor pregunta sobre las convenciones de estilo de codificación.",
    "q": "¿Qué convención se menciona para adoptar un estilo consistente de codificación en Python?",
    "extra": "<div style='background:`#1a1a1a`;color:`#00ff00`;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:`#2d2d2d`;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Estilo de codificación</div># PEP 8: convención de estilo\ndef mover_adelante():\n    # nombres en minúscula, guiones bajos\n    pass</div>",
    "opts": [
      "ISO 9001",
      "PEP 8",
      "RFC 2119",
      "UML 2.0"
    ],
    "ans": 1,
    "exp": "PEP 8 es la convención de estilo mencionada para mantener un código Python consistente y legible."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre el control de versiones.",
    "q": "¿Qué herramienta se menciona para gestionar cambios y colaboraciones en el código durante el mantenimiento del sistema?",
    "extra": "",
    "opts": [
      "Git",
      "Excel",
      "PowerPoint",
      "AutoCAD"
    ],
    "ans": 0,
    "exp": "Git es el sistema de control de versiones mencionado para gestionar cambios y colaboraciones en el código."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre las pruebas y validación.",
    "q": "¿Cuáles son los tres tipos de pruebas mencionados en la etapa de pruebas y validación?",
    "extra": "",
    "opts": [
      "Pruebas unitarias, simulaciones y pruebas reales",
      "Pruebas de humo, de regresión y de carga",
      "Pruebas alfa, beta y gamma",
      "Pruebas de caja negra, blanca y gris"
    ],
    "ans": 0,
    "exp": "Las pruebas unitarias verifican cada módulo, las simulaciones prueban en entorno controlado y las pruebas reales validan el sistema en condiciones reales."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "hard",
    "case": "El profesor pregunta sobre el mantenimiento del código.",
    "q": "¿Qué práctica de mantenimiento busca mejorar la eficiencia y claridad del código mediante revisiones periódicas?",
    "extra": "",
    "opts": [
      "La escalabilidad",
      "La refactorización",
      "La documentación inicial",
      "La compilación"
    ],
    "ans": 1,
    "exp": "Realizar refactorizaciones periódicas permite mejorar la eficiencia y claridad del código a lo largo del tiempo."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "easy",
    "case": "El profesor pregunta sobre los dos tipos de seguridad mencionados.",
    "q": "¿Qué dos tipos de seguridad se abordan en las buenas prácticas de programación de un sistema robotizado?",
    "extra": "",
    "opts": [
      "Seguridad física y seguridad financiera",
      "Seguridad del software y seguridad operacional",
      "Seguridad laboral y seguridad ambiental",
      "Seguridad de red y seguridad de datos"
    ],
    "ans": 1,
    "exp": "La seguridad del software protege el código de vulnerabilidades, mientras que la seguridad operacional asegura que el robot opere de forma segura para humanos y entorno."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "easy",
    "case": "El profesor pregunta sobre el primer paso al programar un robot.",
    "q": "¿Cuál es el primer paso crucial para programar un robot en Python?",
    "extra": "",
    "opts": [
      "Programar los sensores y actuadores",
      "Definir claramente la tarea del robot, especificando objetivos, requisitos técnicos y condiciones del entorno",
      "Seleccionar el entorno de desarrollo",
      "Realizar pruebas exhaustivas del código"
    ],
    "ans": 1,
    "exp": "El primer paso crucial es definir claramente la tarea del robot, lo que asegura que la programación se adapte a las necesidades específicas del sector profesional."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre la reducción de riesgos y costos antes de la implementación física.",
    "q": "¿Qué debe hacerse antes de implementar el robot físicamente para reducir riesgos y costos?",
    "extra": "",
    "opts": [
      "Implementar algoritmos de control y navegación",
      "Probar el comportamiento del robot en un entorno virtual utilizando simuladores robóticos compatibles con Python",
      "Realizar pruebas exhaustivas del código únicamente",
      "Actualizar el software del robot"
    ],
    "ans": 1,
    "exp": "Utilizar simuladores robóticos compatibles con Python para probar el comportamiento del robot en un entorno virtual antes de implementarlo físicamente es fundamental para reducir riesgos y costos."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre las medidas de protección para robot y operadores.",
    "q": "¿Qué medidas deben implementarse para proteger al robot y a los operadores humanos?",
    "extra": "",
    "opts": [
      "Algoritmos de control eficientes",
      "Bloques de manejo de excepciones y medidas de seguridad como paradas de emergencia",
      "Actualización del software del robot",
      "Documentación del código"
    ],
    "ans": 1,
    "exp": "Para proteger al robot y a los operadores humanos, se deben implementar bloques de manejo de excepciones y medidas de seguridad como paradas de emergencia."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "hard",
    "case": "El profesor pregunta sobre los ocho pasos de la guía de recomendaciones.",
    "q": "Según la guía, ¿cuál es el orden correcto de los primeros cuatro pasos para programar un robot?",
    "extra": "",
    "opts": [
      "Selección del entorno, definición de la tarea, pruebas, documentación",
      "Definición de la tarea, selección del entorno de desarrollo, programación de sensores y actuadores, implementación de algoritmos de control y navegación",
      "Programación de sensores, definición de la tarea, seguridad, pruebas",
      "Documentación, mantenimiento, actualización, mejora continua"
    ],
    "ans": 1,
    "exp": "El proceso comienza definiendo la tarea, luego se selecciona el entorno de desarrollo (IDE), se programan sensores y actuadores y finalmente se implementan los algoritmos de control y navegación."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "easy",
    "case": "El profesor pregunta sobre la elección del entorno de desarrollo.",
    "q": "¿Qué se debe elegir para facilitar la escritura y depuración del código al programar un robot?",
    "extra": "",
    "opts": [
      "Un entorno de desarrollo integrado (IDE) adecuado",
      "Un procesador más rápido",
      "Una batería de mayor capacidad",
      "Una pantalla táctil"
    ],
    "ans": 0,
    "exp": "Se debe elegir un entorno de desarrollo integrado (IDE) adecuado para facilitar la escritura y depuración del código."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre la programación de sensores y actuadores.",
    "q": "¿Qué función cumplen los sensores según la guía de recomendaciones para la programación de un robot?",
    "extra": "",
    "opts": [
      "Convertir energía eléctrica en movimiento",
      "Permitir que el robot perciba su entorno y recoja datos esenciales para su operación",
      "Almacenar el código fuente del robot",
      "Enviar comandos a otros robots"
    ],
    "ans": 1,
    "exp": "Los sensores se programan para que el robot pueda percibir su entorno y recoger datos esenciales para su operación."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre los algoritmos de navegación autónoma.",
    "q": "¿Para qué se utilizan los algoritmos de navegación autónoma en robots móviles?",
    "extra": "",
    "opts": [
      "Para reducir el consumo de batería únicamente",
      "Para moverse y operar en su entorno, evitando obstáculos y completando las tareas asignadas",
      "Para generar documentación automática",
      "Para comunicarse por Bluetooth"
    ],
    "ans": 1,
    "exp": "Los algoritmos de navegación autónoma permiten a los robots móviles moverse y operar en su entorno evitando obstáculos y completando las tareas asignadas."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "easy",
    "case": "El profesor pregunta sobre la actualización continua del sistema.",
    "q": "¿Qué se debe mantener actualizado con las últimas mejoras y parches de seguridad, según el último paso de la guía?",
    "extra": "",
    "opts": [
      "El manual impreso del robot",
      "El software del robot",
      "La estructura mecánica",
      "El embalaje del robot"
    ],
    "ans": 1,
    "exp": "Se debe mantener el software del robot actualizado con las últimas mejoras y parches de seguridad, fomentando la mejora continua."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "hard",
    "case": "El profesor pregunta sobre el ciclo completo de recomendaciones.",
    "q": "¿Cuáles son los ocho pasos completos que propone la guía de recomendaciones para la programación de un robot?",
    "extra": "",
    "opts": [
      "Definición de tarea, selección de entorno, programación de sensores y actuadores, algoritmos de control y navegación, manejo de excepciones y seguridad, pruebas y validación, documentación y mantenimiento, actualización y mejora continua",
      "Compra, instalación, configuración, prueba, entrega, soporte, garantía, reciclaje",
      "Diseño, marketing, producción, ventas, distribución, postventa, análisis, cierre",
      "Sensores, actuadores, controladores, software, estructura, alimentación, interfaz, comunicación"
    ],
    "ans": 0,
    "exp": "La guía plantea ocho pasos secuenciales que abarcan desde la definición de la tarea hasta la actualización y mejora continua del sistema robótico."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre el manejo de excepciones.",
    "q": "¿Con qué mecanismo debe gestionar el robot los errores de manera robusta según la guía?",
    "extra": "",
    "opts": [
      "Bloques de manejo de excepciones",
      "Reinicio manual constante",
      "Ignorando los errores menores",
      "Apagado total del sistema"
    ],
    "ans": 0,
    "exp": "El robot debe gestionar errores de manera robusta utilizando bloques de manejo de excepciones, complementados con medidas de seguridad como paradas de emergencia."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "easy",
    "case": "El profesor pregunta sobre los sensores de proximidad.",
    "q": "¿Qué tipo de sensores permite a los robots detectar la presencia de objetos cercanos sin contacto físico?",
    "extra": "",
    "opts": [
      "Sensores de temperatura",
      "Sensores de proximidad",
      "Sensores de visión",
      "Sensores de fuerza y torque"
    ],
    "ans": 1,
    "exp": "Los sensores de proximidad permiten a los robots detectar objetos cercanos sin necesidad de contacto físico, esencial para evitar colisiones y mejorar la precisión."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre la seguridad en entornos peligrosos.",
    "q": "¿Cómo contribuyen los robots a la seguridad en entornos peligrosos?",
    "extra": "",
    "opts": [
      "Incrementando los riesgos para el personal",
      "Realizando tareas arriesgadas y reduciendo la exposición del personal",
      "Aumentando la necesidad de supervisión humana",
      "Eliminando la necesidad de sensores"
    ],
    "ans": 1,
    "exp": "Los robots pueden realizar tareas arriesgadas en entornos peligrosos, reduciendo la exposición del personal a situaciones potencialmente dañinas."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "easy",
    "case": "El profesor pregunta sobre los beneficios en la manufactura.",
    "q": "¿Cuál es uno de los principales beneficios de los robots en la manufactura?",
    "extra": "",
    "opts": [
      "Aumento del trabajo manual",
      "Mejora de la precisión y velocidad de producción",
      "Reducción del uso de sensores",
      "Eliminación total del personal humano"
    ],
    "ans": 1,
    "exp": "La mejora de la precisión y velocidad de producción es un beneficio clave de los robots en la manufactura, ayudando a reducir errores y costos operativos."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre los tipos de robots.",
    "q": "¿Qué tipo de robot asiste en cirugías, diagnósticos y cuidados de pacientes?",
    "extra": "",
    "opts": [
      "Robots industriales",
      "Robots de servicio",
      "Robots médicos",
      "Robots autónomos"
    ],
    "ans": 2,
    "exp": "Los robots médicos asisten en cirugías, diagnósticos y cuidados, proporcionando precisión y mejorando los resultados de los tratamientos."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre los robots que operan sin intervención humana.",
    "q": "¿Qué tipo de robot, como los vehículos autónomos, opera sin intervención humana transformando el transporte y la logística?",
    "extra": "",
    "opts": [
      "Robots industriales",
      "Robots de servicio",
      "Robots médicos",
      "Robots autónomos"
    ],
    "ans": 3,
    "exp": "Los robots autónomos, como los vehículos autónomos, están transformando el transporte y la logística al operar sin intervención humana."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "hard",
    "case": "El profesor pregunta sobre los cinco componentes clave de un sistema robotizado.",
    "q": "¿Cuáles son los cinco elementos clave que componen un sistema robotizado?",
    "extra": "",
    "opts": [
      "Pantalla, teclado, mouse, altavoz y micrófono",
      "Actuadores, sensores, controladores, software y estructura mecánica",
      "Motor, batería, cable, chasis y carcasa",
      "Wi-Fi, Bluetooth, USB, HDMI y Ethernet"
    ],
    "ans": 1,
    "exp": "Un sistema robotizado está compuesto por actuadores, sensores, controladores, software y estructura mecánica, cada uno cumpliendo una función esencial."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre los sensores de fuerza y torque.",
    "q": "¿Para qué tipo de tareas son cruciales los sensores de fuerza y torque?",
    "extra": "",
    "opts": [
      "Para tareas de ensamblaje y manipulación precisa",
      "Para medir la temperatura ambiental",
      "Para detectar redes Wi-Fi",
      "Para almacenar energía"
    ],
    "ans": 0,
    "exp": "Los sensores de fuerza y torque miden la fuerza y el torque aplicados por el robot, siendo cruciales para tareas de ensamblaje y manipulación precisa."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "hard",
    "case": "El profesor pregunta sobre los actuadores de control preciso.",
    "q": "¿Qué tipo de actuador ofrece control preciso de posición, velocidad y aceleración?",
    "extra": "",
    "opts": [
      "Cilindros hidráulicos",
      "Motores eléctricos genéricos",
      "Servomotores",
      "Sensores de visión"
    ],
    "ans": 2,
    "exp": "Los servomotores ofrecen control preciso de posición, velocidad y aceleración, siendo esenciales para tareas que requieren alta precisión."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre los controladores.",
    "q": "¿Qué tipo de controlador se utiliza comúnmente en entornos industriales para controlar maquinaria y procesos?",
    "extra": "",
    "opts": [
      "Microcontroladores",
      "PLC (controladores lógicos programables)",
      "Computadoras integradas",
      "Pantallas táctiles"
    ],
    "ans": 1,
    "exp": "Los PLC (controladores lógicos programables) se utilizan en entornos industriales para controlar maquinaria y procesos."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre los sistemas de alimentación.",
    "q": "¿Qué sistema de alimentación es más adecuado para robots que operan en exteriores y requieren autonomía prolongada?",
    "extra": "",
    "opts": [
      "Conexión directa a la red eléctrica",
      "Baterías de baja capacidad",
      "Sistemas de energía solar",
      "Cables de extensión"
    ],
    "ans": 2,
    "exp": "Los sistemas de energía solar son adecuados para robots que operan en exteriores y requieren autonomía prolongada."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "easy",
    "case": "El profesor pregunta sobre la comunicación inalámbrica de corto alcance.",
    "q": "¿Qué tecnologías se mencionan para comunicaciones inalámbricas de corto y mediano alcance entre robots?",
    "extra": "",
    "opts": [
      "Ethernet industrial y Profinet",
      "Wi-Fi y Bluetooth",
      "Fibra óptica",
      "Cable coaxial"
    ],
    "ans": 1,
    "exp": "Wi-Fi y Bluetooth se utilizan para comunicaciones inalámbricas en corto y mediano alcance entre robots y sistemas de control."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre los beneficios en logística.",
    "q": "¿Qué beneficio aportan los robots en el ámbito de la logística?",
    "extra": "",
    "opts": [
      "Optimización de la gestión de almacenes y entregas",
      "Aumento de la precisión en procedimientos quirúrgicos",
      "Mejora en el monitoreo de cultivos",
      "Reducción de sensores de visión"
    ],
    "ans": 0,
    "exp": "En logística, los robots mejoran la gestión de almacenes y la eficiencia de las entregas."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "hard",
    "case": "El profesor pregunta sobre la interfaz de usuario de los robots.",
    "q": "¿Cuál de las siguientes NO forma parte de la interfaz de usuario de un sistema robotizado?",
    "extra": "",
    "opts": [
      "Pantallas táctiles",
      "Paneles de control",
      "Software de computadora",
      "Cilindros hidráulicos"
    ],
    "ans": 3,
    "exp": "Los cilindros hidráulicos son parte de los actuadores, no de la interfaz de usuario, que incluye pantallas táctiles, paneles de control y software."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Síntesis_de_la_unidad_3.docx",
    "diff": "easy",
    "case": "El profesor pregunta sobre la práctica esencial de programación.",
    "q": "¿Qué práctica es crucial en la programación de robots para asegurar su funcionamiento óptimo y seguro?",
    "extra": "",
    "opts": [
      "Documentación detallada",
      "Interfaz gráfica de usuario",
      "Diseño ergonómico",
      "Uso de hardware avanzado"
    ],
    "ans": 0,
    "exp": "La documentación detallada es una buena práctica esencial en la programación de robots, ya que facilita el mantenimiento y asegura un funcionamiento óptimo y seguro."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Síntesis_de_la_unidad_3.docx",
    "diff": "easy",
    "case": "El profesor pregunta sobre los ámbitos de aplicación de los robots.",
    "q": "¿En qué ámbito se utilizan comúnmente los robots para mejorar la precisión y aumentar la productividad?",
    "extra": "",
    "opts": [
      "Entretenimiento",
      "Manufactura",
      "Publicidad",
      "Educación"
    ],
    "ans": 1,
    "exp": "Los robots son ampliamente utilizados en la manufactura para automatizar procesos y mejorar la precisión y la productividad."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Síntesis_de_la_unidad_3.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre el componente que permite percibir el entorno.",
    "q": "¿Cuál es el componente esencial de un robot que le permite percibir su entorno?",
    "extra": "",
    "opts": [
      "Controladores",
      "Sensores",
      "Motores",
      "Actuadores"
    ],
    "ans": 1,
    "exp": "Los sensores son cruciales para que un robot perciba su entorno y recoja datos esenciales para su funcionamiento."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Síntesis_de_la_unidad_3.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre las tres ideas fuerza de la unidad.",
    "q": "Según la síntesis de la unidad, ¿cuáles son las tres ideas fuerza principales de la asignatura?",
    "extra": "",
    "opts": [
      "Hardware, software y redes",
      "Características y componentes de un robot, ámbitos de aplicación de los robots, y buenas prácticas en programación",
      "Historia, presente y futuro de la robótica",
      "Costos, beneficios y riesgos"
    ],
    "ans": 1,
    "exp": "Las tres ideas fuerza son: características y componentes de un robot, ámbitos de aplicación de los robots, y buenas prácticas en programación."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Síntesis_de_la_unidad_3.docx",
    "diff": "hard",
    "case": "El profesor pregunta por los sectores donde la robótica genera impacto.",
    "q": "Según la síntesis, ¿en qué cuatro sectores principales se destaca el impacto de la robótica?",
    "extra": "",
    "opts": [
      "Manufactura, servicios, medicina y agricultura",
      "Turismo, banca, moda y arte",
      "Educación, deporte, música y cine",
      "Minería, pesca, construcción y transporte"
    ],
    "ans": 0,
    "exp": "La robótica impacta principalmente en manufactura, servicios, medicina y agricultura, automatizando tareas y mejorando la eficiencia en cada sector."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Síntesis_de_la_unidad_3.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre los tres componentes esenciales de un robot.",
    "q": "Según la síntesis, ¿qué tres componentes esenciales le permiten a un robot interactuar con su entorno y ejecutar tareas?",
    "extra": "",
    "opts": [
      "Pantalla, teclado y batería",
      "Sensores, actuadores y controladores",
      "Cámara, micrófono y altavoz",
      "Chasis, ruedas y motor"
    ],
    "ans": 1,
    "exp": "Un robot está compuesto por sensores, actuadores y controladores, que le permiten interactuar con su entorno y ejecutar tareas específicas con precisión y eficiencia."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "easy",
    "case": "El profesor pregunta sobre el comando de movimiento hacia adelante.",
    "q": "¿Cuál es el comando en pseudocódigo para mover al robot hacia adelante?",
    "extra": "<div style='background:`#1a1a1a`;color:`#00ff00`;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:`#2d2d2d`;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Pseudocódigo</div>INICIO\n MOVER_ADELANTE\nFIN</div>",
    "opts": [
      "INICIO MOVER_ADELANTE FIN",
      "INICIO DETENER FIN",
      "INICIO GIRAR_DERECHA FIN",
      "INICIO ESPERAR(5) FIN"
    ],
    "ans": 0,
    "exp": "El comando en pseudocódigo para mover al robot hacia adelante es \"INICIO MOVER_ADELANTE FIN\"."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre la estructura condicional ante un obstáculo.",
    "q": "¿Cuál es la estructura de control que se utiliza para que el robot gire a la derecha si detecta un obstáculo?",
    "extra": "<div style='background:`#1a1a1a`;color:`#00ff00`;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:`#2d2d2d`;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Pseudocódigo - Condicional</div>INICIO\n SI (OBSTACULO_ADELANTE) ENTONCES\n  DETENER\n  GIRAR_DERECHA\n FIN_SI\nFIN</div>",
    "opts": [
      "INICIO ESPERAR(5) FIN",
      "INICIO MIENTRAS (NO OBSTACULO_ADELANTE) MOVER_ADELANTE FIN_MIENTRAS FIN",
      "INICIO SI (OBSTACULO_ADELANTE) ENTONCES DETENER GIRAR_DERECHA FIN_SI FIN",
      "INICIO GIRAR_DERECHA FIN"
    ],
    "ans": 2,
    "exp": "La estructura de control utilizada es \"INICIO SI (OBSTACULO_ADELANTE) ENTONCES DETENER GIRAR_DERECHA FIN_SI FIN\", una estructura condicional (IF)."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre el pseudocódigo de una tarea sencilla.",
    "q": "¿Cuál es el pseudocódigo correcto para hacer que el robot se mueva hacia adelante por 5 segundos y luego se detenga?",
    "extra": "<div style='background:`#1a1a1a`;color:`#00ff00`;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:`#2d2d2d`;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Pseudocódigo</div>INICIO\n MOVER_ADELANTE\n ESPERAR(5)\n DETENER\nFIN</div>",
    "opts": [
      "INICIO MOVER_ADELANTE ESPERAR(5) DETENER FIN",
      "INICIO SI (OBSTACULO_ADELANTE) ENTONCES DETENER FIN_SI FIN",
      "INICIO MIENTRAS (NO OBSTACULO_ADELANTE) MOVER_ADELANTE FIN_MIENTRAS FIN",
      "INICIO GIRAR_DERECHA ESPERAR(5) FIN"
    ],
    "ans": 0,
    "exp": "El pseudocódigo correcto es \"INICIO MOVER_ADELANTE ESPERAR(5) DETENER FIN\"."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "easy",
    "case": "El profesor pregunta sobre el comando de detención.",
    "q": "¿Qué instrucción en pseudocódigo se usa cuando se desea detener el movimiento de un robot?",
    "extra": "<div style='background:`#1a1a1a`;color:`#00ff00`;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:`#2d2d2d`;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Pseudocódigo</div>INICIO\n DETENER\nFIN</div>",
    "opts": [
      "MOVER_ADELANTE",
      "GIRAR_DERECHA",
      "DETENER",
      "ESPERAR"
    ],
    "ans": 2,
    "exp": "Cuando se desea detener el movimiento de un robot se debe usar el comando DETENER dentro de la estructura INICIO...FIN."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "hard",
    "case": "El profesor pregunta sobre la estructura de bucle WHILE.",
    "q": "¿Qué permite hacer la estructura de control MIENTRAS (bucle WHILE) en el ejemplo del robot que avanza hasta encontrar un obstáculo?",
    "extra": "<div style='background:`#1a1a1a`;color:`#00ff00`;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:`#2d2d2d`;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Pseudocódigo - Bucle</div>INICIO\n MIENTRAS (NO OBSTACULO_ADELANTE)\n  MOVER_ADELANTE\n FIN_MIENTRAS\n DETENER\nFIN</div>",
    "opts": [
      "Detener el robot inmediatamente sin condiciones",
      "Repetir la acción MOVER_ADELANTE mientras no se detecte un obstáculo adelante",
      "Girar a la derecha de forma indefinida",
      "Apagar los sensores del robot"
    ],
    "ans": 1,
    "exp": "El bucle MIENTRAS permite que, mientras el robot no encuentre un obstáculo adelante, continúe realizando la acción de moverse hacia adelante."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "hard",
    "case": "El profesor pregunta sobre el pseudocódigo de navegación con obstáculos.",
    "q": "En el ejemplo de navegación compleja con obstáculos, ¿qué hace el robot cuando SI (OBSTACULO_ADELANTE) se cumple dentro del bucle MIENTRAS (NO LLEGAR_META)?",
    "extra": "<div style='background:`#1a1a1a`;color:`#00ff00`;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:`#2d2d2d`;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Pseudocódigo - Navegación compleja</div>INICIO\n MIENTRAS (NO LLEGAR_META)\n  SI (OBSTACULO_ADELANTE) ENTONCES\n   DETENER\n   GIRAR_DERECHA\n   MOVER_ADELANTE\n   ESPERAR(2)\n  FIN_SI\n  MOVER_ADELANTE\n FIN_MIENTRAS\n DETENER\nFIN</div>",
    "opts": [
      "Continúa avanzando sin detenerse",
      "Se detiene, gira a la derecha, avanza y espera 2 segundos antes de continuar",
      "Apaga todos los sensores",
      "Termina el programa inmediatamente"
    ],
    "ans": 1,
    "exp": "Cuando se detecta un obstáculo, el robot ejecuta: DETENER, GIRAR_DERECHA, MOVER_ADELANTE y ESPERAR(2), antes de continuar con el bucle hasta llegar a la meta."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "medium",
    "case": "El profesor pregunta sobre el propósito de las estructuras de control condicionales.",
    "q": "¿Para qué permiten usar estructuras de control como el condicional (IF) en la programación de tareas de un robot?",
    "extra": "",
    "opts": [
      "Para que el robot pueda tomar decisiones basadas en lo que percibe del medio a través de los sensores",
      "Para aumentar la velocidad de procesamiento del hardware",
      "Para reducir el consumo eléctrico del robot",
      "Para eliminar la necesidad de sensores"
    ],
    "ans": 0,
    "exp": "Usar estructuras de control permite que el robot pueda tomar decisiones basado en lo que percibe del medio a través de los sensores."
  },
  {
    "profe": true,
    "unit": "Unidad 3 - Fundamentos y aplicaciones de robótica",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "easy",
    "case": "El profesor pregunta sobre los beneficios de las tareas simples en el ámbito profesional.",
    "q": "¿Qué beneficios aporta la implementación de robots en tareas simples dentro del ámbito profesional?",
    "extra": "",
    "opts": [
      "Solo reduce costos, sin otros beneficios",
      "Optimiza los procesos operativos y aporta beneficios en seguridad, eficiencia y calidad",
      "Elimina la necesidad de programación",
      "Aumenta exclusivamente la carga de trabajo humano"
    ],
    "ans": 1,
    "exp": "La implementación de robots en tareas simples optimiza los procesos operativos y aporta beneficios significativos en términos de seguridad, eficiencia y calidad."
  }
]

export default introduccion_programacion_robotica;