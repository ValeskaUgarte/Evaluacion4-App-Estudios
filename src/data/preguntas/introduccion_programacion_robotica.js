const introduccion_programacion_robotica = [

  // TEMARIO PARA EXAMEN UNIDAD 1

  {
    "profe": true,
    "unit": "U1 - Arquitectura de hardware de sistemas computacionales",
    "diff": "easy",
    "temario": true,
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
    "unit": "U1 - Arquitectura de hardware de sistemas computacionales",
    "diff": "medium",
    "temario": true,
    "case": "Un usuario nota que su computador accede muy rápido a los datos que está usando en ese momento, pero al apagarla se pierde esa información.",
    "q": "¿Qué tipo de memoria es volátil y almacena temporalmente datos y programas activos?",
    "opts": [
      "PROM", 
      "Memoria caché", 
      "RAM (memoria de acceso aleatorio)", 
      "Disco duro (HDD)"
    ],
    "ans": 2,
    "exp": "La RAM es un tipo de memoria volátil utilizada para almacenar temporalmente datos y programas que están siendo usados activamente, permitiendo un acceso rápido a la CPU."
  },
  {
    "profe": true,
    "unit": "U1 - Arquitectura de hardware de sistemas computacionales",
    "diff": "hard",
    "temario": true,
    "case": "En un diagrama de arquitectura, el profesor señala tres líneas distintas que conectan la CPU con la memoria y pide identificar sus funciones.",
    "q": "¿Qué bus transporta las direcciones de memoria física para acceder a datos específicos almacenados?",
    "opts": [
      "Bus de datos", 
      "Bus de direcciones", 
      "Bus de control", 
      "Bus de expansión"
    ],
    "ans": 1,
    "exp": "El bus de direcciones transporta las direcciones de memoria física para acceder a datos específicos, mientras que el bus de datos transfiere la información y el de control gestiona las señales de coordinación."
  },
  {
    "profe": true,
    "unit": "U1 - Arquitectura de hardware de sistemas computacionales",
    "diff": "medium",
    "temario": true,
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
    "unit": "U1 - Arquitectura de hardware de sistemas computacionales",
    "diff": "easy",
    "temario": true,
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
    "unit": "U1 - Arquitectura de hardware de sistemas computacionales",
    "diff": "hard",
    "temario": true,
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
    "unit": "U1 - Arquitectura de hardware de sistemas computacionales",
    "diff": "medium",
    "temario": true,
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
    "unit": "U1 - Arquitectura de hardware de sistemas computacionales",
    "diff": "medium",
    "temario": true,
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
    "unit": "U1 - Arquitectura de hardware de sistemas computacionales",
    "diff": "easy",
    "temario": true,
    "case": "El profesor pide definir, según la RAE, el concepto que agrupa los componentes físicos de una computadora.",
    "q": "¿Cuál es la definición de 'hardware' según la RAE?",
    "opts": [
      "Conjunto de programas, instrucciones y reglas informáticas para ejecutar tareas",
      "Conjunto de los componentes físicos que constituyen la parte material de una computadora",
      "Dispositivo que almacena datos e informaciones",
      "Conexión física y funcional entre dos aparatos o sistemas"
    ],
    "ans": 1,
    "exp": "La RAE define 'hardware' como el conjunto de los componentes físicos que constituyen la parte material de una computadora, en contraposición al software."
  },
  {
    "profe": true,
    "unit": "U1 - Arquitectura de hardware de sistemas computacionales",
    "diff": "medium",
    "temario": true,
    "case": "El profesor pregunta por un componente que conecta físicamente dos dispositivos, permitiendo la comunicación entre ellos, como un cable HDMI entre un computador y un monitor.",
    "q": "¿Cómo se denomina, según la RAE, la conexión física y funcional entre dos aparatos, dispositivos o sistemas que permite la comunicación entre ellos?",
    "opts": ["Arquitectura", "Interfaz", "Memoria", "Sistema operativo"],
    "ans": 1,
    "exp": "La RAE define 'interfaz' como la conexión física y funcional entre dos aparatos, dispositivos o sistemas, que permite la comunicación entre ellos."
  },
  {
    "profe": true,
    "unit": "U1 - Clasificación de software",
    "diff": "easy",
    "temario": true,
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
    "unit": "U1 - Clasificación de software",
    "diff": "easy",
    "temario": true,
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
    "unit": "U1 - Clasificación de software",
    "diff": "medium",
    "temario": true,
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
    "unit": "U1 - Clasificación de software",
    "diff": "medium",
    "temario": true,
    "case": "Un usuario enciende su computador y este carga automáticamente el entorno que le permite administrar archivos, ejecutar programas y controlar el hardware.",
    "q": "Según la RAE, ¿qué es el 'sistema operativo'?",
    "opts": [
      "Conjunto de órdenes y programas que controlan los procesos básicos de una computadora y permiten el funcionamiento de otros programas",
      "Un dispositivo físico que almacena información",
      "Un lenguaje informal para diseñar algoritmos",
      "La conexión física entre dos dispositivos"
    ],
    "ans": 0,
    "exp": "La RAE define 'sistema operativo' como el conjunto de órdenes y programas que controlan los procesos básicos de una computadora y permiten el funcionamiento de otros programas."
  },

  {
    "profe": true,
    "unit": "U1 - Clasificación de software",
    "diff": "hard",
    "temario": true,
    "case": "Un usuario utiliza un navegador web, un procesador de texto y un reproductor multimedia para realizar sus tareas diarias en el computador.",
    "q": "¿A qué categoría de software corresponden programas orientados a que el usuario final realice tareas específicas, como un navegador o un procesador de texto?",
    "opts": [
      "Software de sistema", 
      "Software de aplicación", 
      "Software de desarrollo", 
      "Software de comunicaciones"
    ],
    "ans": 1,
    "exp": "El software de aplicación está orientado a que el usuario final realice tareas específicas, a diferencia del software de sistema, que administra los recursos del computador."
  },

  {
    "profe": true,
    "unit": "U1 - Clasificación de software",
    "diff": "medium",
    "temario": true,
    "case": "Un equipo de trabajo se conecta a videollamadas y comparte archivos entre sedes distintas de la empresa.",
    "q": "¿A qué tipo de software corresponden herramientas como Zoom, Microsoft Teams o Skype?",
    "opts": [
      "Software de comunicaciones", 
      "Software de bases de datos", 
      "Software de seguridad", 
      "Software de sistema"
    ],
    "ans": 0,
    "exp": "El software de comunicaciones permite la interacción y el intercambio de información entre dispositivos y usuarios, como en videollamadas y mensajería."
  },

  {
    "profe": true,
    "unit": "U1 - Clasificación de software, Examen de la unidad",
    "diff": "easy",
    "temario": true,
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
    "unit": "U1 - Clasificación de software, Examen de la unidad",
    "diff": "hard",
    "temario": true,
    "case": "Un usuario elimina por error un archivo importante y necesita un tipo de software especializado que le permita restaurarlo o mantener copias de seguridad automáticas.",
    "q": "¿A qué categoría general de software corresponden las herramientas orientadas a la gestión y protección de la información del sistema, como copias de seguridad y antivirus?",
    "opts": [
      "Software de aplicación", 
      "Software de seguridad", 
      "Software de comunicaciones", 
      "Software educativo"
    ],
    "ans": 1,
    "exp": "El software de seguridad protege los sistemas informáticos y los datos contra amenazas y pérdidas, incluyendo antivirus, cortafuegos y herramientas de respaldo."
  },

  {
    "profe": true,
    "unit": "U1 - Software de programación, Examen de la unidad",
    "diff": "medium",
    "temario": true,
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
    "unit": "U1 - Software de programación, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "Un desarrollador necesita un entorno donde pueda escribir, compilar, depurar y ejecutar su código de forma eficiente, todo en un mismo lugar.",
    "q": "¿Cuál es el propósito principal de las plataformas de programación integradas (IDE)?",
    "opts": [
          "Diseñar hardware para computadoras",
          "Escribir, compilar, depurar y ejecutar código de manera eficiente",
          "Mantener la seguridad de la red",
          "Administrar bases de datos empresariales"
        ],    "ans": 1,
    "exp": "Las IDE son herramientas diseñadas para facilitar el desarrollo de software, proporcionando un entorno integrado para escribir, compilar, depurar y ejecutar código eficientemente."
  },

  {
    "profe": true,
    "unit": "U1 - Software de programación, Examen de la unidad",
    "diff": "hard",
    "temario": true,
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
    "unit": "U1 - Software de programación, Examen de la unidad",
    "diff": "medium",
    "temario": true,
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
    "unit": "U1 - Software de programación, Examen de la unidad",
    "diff": "easy",
    "temario": true,
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
    "unit": "U1 - Software de programación, Examen de la unidad",
    "diff": "hard",
    "temario": true,
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
    "unit": "U1 - Software de programación, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "El profesor pregunta por un término que no tiene definición oficial en la RAE pero sí uso técnico consolidado en programación.",
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
    "unit": "U1 - Orígenes y desarrollo de los robots, Examen de la unidad",
    "diff": "easy",
    "temario": true,
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
    "unit": "U1 - Orígenes y desarrollo de los robots, Examen de la unidad",
    "diff": "easy",
    "temario": true,
    "case": "El profesor muestra una imagen de un brazo mecánico programable en una fábrica y pide su definición formal.",
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
    "unit": "U1 - Orígenes y desarrollo de los robots, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "El profesor pide explicar cómo ha cambiado la robótica desde sus primeros dispositivos hasta la actualidad.",
    "q": "Según la evolución histórica de la robótica revisada en la unidad, ¿cómo ha sido este desarrollo?",
    "opts": [
      "Se ha mantenido sin cambios desde el siglo XX",
      "Desde los primeros autómatas hasta los robots autónomos actuales, la robótica ha evolucionado significativamente",
      "Solo ha evolucionado en el ámbito militar",
      "Comenzó recién en el año 2000 con la inteligencia artificial"
    ],
    "ans": 1,
    "exp": "Desde los primeros autómatas hasta los robots autónomos actuales, la robótica ha evolucionado significativamente, ampliando sus aplicaciones a diversas industrias."
  },

  {
    "profe": true,
    "unit": "U1 - Orígenes y desarrollo de los robots, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "El profesor explica por qué el estudio de la robótica es relevante en la formación tecnológica actual.",
    "q": "¿Cuál es una de las razones por las que la robótica aplicada es importante en la educación tecnológica moderna?",
    "opts": [
      "Porque reemplaza completamente la necesidad de programar",
      "Porque proporciona habilidades para desarrollar soluciones innovadoras y automatizadas, mejorando la eficiencia en diversas industrias",
      "Porque solo se aplica en el área de la robótica militar",
      "Porque elimina la necesidad de estudiar hardware"
    ],
    "ans": 1,
    "exp": "La robótica aplicada proporciona a estudiantes y profesionales las habilidades necesarias para desarrollar soluciones innovadoras y automatizadas, mejorando la eficiencia y productividad en diversas industrias."
  },

  {
    "profe": true,
    "unit": "U1 - Orígenes y desarrollo de los robots, Examen de la unidad",
    "diff": "hard",
    "temario": true,
    "case": "Un estudiante investiga bibliografía sobre robótica para su ensayo de la unidad y encuentra distintos autores citados en clase.",
    "q": "¿Cuál de los siguientes autores corresponde a la bibliografía de referencia sobre 'Introducción a la robótica' utilizada en la unidad?",
    "opts": [
      "Karel Čapek",
      "Isaac Asimov",
      "Álvarez Caro, I.",
      "Alan Turing"
    ],
    "ans": 2,
    "exp": "Álvarez Caro, I. (2017) es el autor de 'Introducción a la robótica', citado en la bibliografía de la unidad, publicado por la editorial Dextra."
  },

  {
    "profe": true,
    "unit": "U1 - Morfología de robots, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "Un robot es utilizado por un especialista en desactivación de explosivos, quien lo controla en todo momento a distancia.",
    "opts": [
      "Robot autónomo",
      "Robot semi autónomo",
      "Robot teleoperado",
      "Robot colaborativo (cobot)"
    ],
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
    "unit": "U1 - Morfología de robots, Examen de la unidad",
    "diff": "hard",
    "temario": true,
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
    "unit": "U1 - Morfología de robots, Examen de la unidad",
    "diff": "easy",
    "temario": true,
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
    "unit": "U1 - Morfología de robots, Examen de la unidad",
    "diff": "hard",
    "temario": true,
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
    "unit": "U1 - Morfología de robots, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "diff": "medium",
    "case": "El profesor muestra un robot diseñado con dos piernas, dos brazos y una cabeza, capaz de imitar los movimientos de una persona.",
    "q": "¿Qué es un robot humanoide?",
    "opts": [
      "Un tipo de inteligencia artificial aplicada en el marketing",
      "Un robot diseñado para imitar la apariencia y los movimientos del cuerpo humano",
      "Una herramienta de edición de documentos",
      "Un programa de software para analizar datos financieros"
    ],
    "ans": 1,
    "exp": "Un robot humanoide es un robot diseñado para imitar la apariencia y los movimientos del cuerpo humano, a menudo utilizado en investigaciones y aplicaciones que requieren interacción humana."
  },

  {
    "profe": true,
    "unit": "U1 - Morfología de robots, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "El profesor pide comprender por qué se estudia la morfología de los robots antes de programarlos.",
    "q": "¿Para qué ayuda comprender la morfología y el diseño físico de los robots?",
    "opts": [
      "Para reemplazar el estudio de la programación",
      "Para entender sus capacidades y aplicaciones en diferentes sectores",
      "Únicamente para calcular su precio de fabricación",
      "Para diseñar exclusivamente videojuegos"
    ],
    "ans": 1,
    "exp": "Comprender la morfología y el diseño físico de los robots ayuda a entender sus capacidades y aplicaciones en diferentes sectores e industrias."
  },

  {
    "profe": true,
    "unit": "U1 - Software de simulación, Examen de la unidad",
    "diff": "medium",
    "temario": true,
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
    "unit": "U1 - Software de simulación, Examen de la unidad",
    "diff": "hard",
    "temario": true,
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
    "unit": "U1 - Software de simulación, Examen de la unidad",
    "diff": "easy",
    "temario": true,
    "case": "Un profesor busca una herramienta de simulación orientada específicamente a la enseñanza e investigación en robótica.",
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
    "unit": "U1 - Software de simulación, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "El profesor explica por qué se recomienda simular un robot antes de construirlo físicamente.",
    "q": "¿Cuál es el principal beneficio de probar y optimizar diseños de robots en un software de simulación antes de su implementación real?",
    "opts": [
      "Aumenta el peso final del robot",
      "Minimiza riesgos y reduce costos antes de la implementación real",
      "Elimina por completo la necesidad de programar el robot",
      "Solo sirve para fines estéticos del diseño"
    ],
    "ans": 1,
    "exp": "El software de simulación permite probar y optimizar diseños de robots en entornos virtuales, minimizando riesgos y reduciendo costos antes de la implementación real."
  },

  {
    "profe": true,
    "unit": "U1 - Software de simulación, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "Un desarrollador utiliza un software de simulación que le permite recrear un entorno 3D realista para evaluar cómo se desplaza un robot móvil.",
    "q": "¿Qué tipo de entornos son los que herramientas como Gazebo y V-REP permiten recrear para evaluar el rendimiento de los robots?",
    "opts": [
      "Entornos de texto plano",
      "Entornos 3D realistas",
      "Hojas de cálculo",
      "Bases de datos relacionales"
    ],
    "ans": 1,
    "exp": "Herramientas como Gazebo y V-REP son ampliamente utilizadas para simular entornos 3D realistas y evaluar el rendimiento de los robots antes de su implementación física."
  },

  {
    "profe": true,
    "unit": "U1 - Software de simulación, Examen de la unidad",
    "diff": "hard",
    "temario": true,
    "case": "El profesor explica que la simulación no solo prueba el diseño mecánico del robot, sino también su capacidad de tomar decisiones por sí mismo.",
    "q": "Además de probar diseños físicos, ¿qué aspecto se subraya como importante en la mejora de la autonomía y funcionalidad de los robots mediante simulación?",
    "opts": [
      "El uso de hojas de cálculo",
      "La importancia de la inteligencia artificial",
      "El diseño gráfico del robot únicamente",
      "El costo de fabricación en metal"
    ],
    "ans": 1,
    "exp": "La simulación de software permite probar y optimizar diseños robóticos, subrayando la importancia de la inteligencia artificial en la mejora de la autonomía y funcionalidad de los robots."
  },

   // TEMARIO PARA EXAMEN UNIDAD 2

   {
    "profe": true,
    "unit": "U2 - Operadores aritméticos y lógicos y tipos de datos numéricos, alfanuméricos, especiales y operandos, Examen de la unidad",
    "diff": "easy",
    "temario": true,
    "case": "Un estudiante necesita sumar dos valores ingresados por el usuario en su primer programa Python.",
    "q": "¿Qué operador aritmético se utiliza en Python para realizar una suma?",
    "opts": [
      "+",
      "&",
      "suma()",
      "add"
    ],
    "ans": 0,
    "exp": "El operador + se utiliza para sumar dos números en Python, por ejemplo 5 + 3 da como resultado 8."
  },

  {
    "profe": true,
    "unit": "U2 - Operadores aritméticos y lógicos y tipos de datos numéricos, alfanuméricos, especiales y operandos, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "Un programador necesita saber cuántas cajas completas de 3 unidades se pueden armar con 7 unidades, descartando el resto.",
    "q": "¿Qué operador de Python realiza la división descartando la parte decimal del resultado?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Python 3.12 Shell</div>>>> 7 // 3\n2</div>",
    "opts": [
      "/",
      "//",
      "%",
      "**"
    ],
    "ans": 1,
    "exp": "El operador de división entera (//) realiza la división descartando la parte decimal del resultado; por ejemplo, 7 // 3 da 2."
  },
  
  {
    "profe": true,
    "unit": "U2 - Operadores aritméticos y lógicos y tipos de datos numéricos, alfanuméricos, especiales y operandos, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "El profesor pide calcular el resto de dividir 7 entre 3 para verificar si un número es par o impar.",
    "q": "¿Qué operador matemático devuelve el resto (residuo) de una división entera?",
    "opts": [
      "//",
      "%",
      "/",
      "*"
    ],
    "ans": 1,
    "exp": "El operador módulo (%) devuelve el resto de la división entre dos números; por ejemplo, 7 % 3 da 1."
  },

  {
    "profe": true,
    "unit": "U2 - Operadores aritméticos y lógicos y tipos de datos numéricos, alfanuméricos, especiales y operandos, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "diff": "hard",
    "case": "Un desarrollador escribe una condición para verificar que un número x esté dentro del intervalo [a, b], por lo que necesita que ambas comparaciones sean verdaderas al mismo tiempo.",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Python 3.12 Shell</div>a, b = -4, 3\nx = 1\nesta = (x >= a) and (x <= b)\nprint(esta)</div>",
    "q": "¿Qué operador lógico se debe usar para que la expresión devuelva True solo cuando ambas condiciones sean verdaderas?",
    "opts": [
      "or",
      "not",
      "and",
      "=="
    ],
    "ans": 2,
    "exp": "El operador and evalúa dos expresiones y devuelve True solamente si ambas son verdaderas, que es lo necesario para comprobar que x está dentro de un intervalo."
  },
  
  {
    "profe": true,
    "unit": "U2 - Operadores aritméticos y lógicos y tipos de datos numéricos, alfanuméricos, especiales y operandos, Examen de la unidad",
    "diff": "easy",
    "temario": true,
    "case": "Un estudiante quiere invertir el resultado de una expresión booleana en su programa.",
    "q": "¿Qué operador lógico invierte el valor de una expresión booleana (de True a False y viceversa)?",
    "opts": [
      "and",
      "or",
      "not",
      "xor"
    ],
    "ans": 2,
    "exp": "El operador not invierte el valor lógico de una expresión: not True da False y not False da True."
  },

  {
    "profe": true,
    "unit": "U2 - Operadores aritméticos y lógicos y tipos de datos numéricos, alfanuméricos, especiales y operandos, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "Un programador declara una variable con el valor -23 sin decimales para contar elementos en un bucle.",
    "q": "¿A qué tipo de dato numérico corresponde un valor como -23, sin decimales?",
    "opts": [
      "float", 
      "complex", 
      "int", 
      "bool"
    ],
    "ans": 2,
    "exp": "Los enteros (int) representan números sin decimales, positivos o negativos, como 5, -23 o 1000, y se usan para contar y realizar operaciones matemáticas básicas."
  },

  {
    "profe": true,
    "unit": "U2 - Operadores aritméticos y lógicos y tipos de datos numéricos, alfanuméricos, especiales y operandos, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "Un ingeniero necesita representar un valor con parte real e imaginaria para un cálculo científico.",
    "q": "¿Qué tipo de dato numérico de Python incluye una parte real y una imaginaria, como 3 + 2j?",
    "opts": [
      "int", 
      "float", 
      "complex", 
      "str"
    ],
    "ans": 2,
    "exp": "Los números complejos (complex) incluyen una parte real y una imaginaria, y se usan en aplicaciones científicas y de ingeniería."
  },

  {
    "profe": true,
    "unit": "U2 - Operadores aritméticos y lógicos y tipos de datos numéricos, alfanuméricos, especiales y operandos, Examen de la unidad",
    "diff": "easy",
    "temario": true,
    "diff": "easy",
    "case": "Un programa debe almacenar el texto 'Hola Mundo' para luego mostrarlo por pantalla.",
    "q": "¿A qué tipo de dato alfanumérico corresponde el texto 'Hola Mundo'?",
    "opts": [
      "int", 
      "bool", 
      "str", 
      "float"
    ],
    "ans": 2,
    "exp": "Las cadenas de texto (str) representan secuencias de caracteres como palabras o frases, y son esenciales para manipular texto y generar salidas legibles."
  },

  {
    "profe": true,
    "unit": "U2 - Operadores aritméticos y lógicos y tipos de datos numéricos, alfanuméricos, especiales y operandos, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "Un programa necesita decidir si continuar ejecutando cierto bloque de código según si una condición se cumplió o no.",
    "q": "¿Qué tipo de dato especial de Python solo puede tomar los valores True o False?",
    "opts": [
      "str",
      "int", 
      "bool", 
      "complex"
    ],
    "ans": 2,
    "exp": "Los booleanos (bool) representan valores de verdad (True o False) y son fundamentales en la lógica de control de flujo del programa."
  },

  {
    "profe": true,
    "unit": "U2 - Operadores aritméticos y lógicos y tipos de datos numéricos, alfanuméricos, especiales y operandos, Examen de la unidad",
    "diff": "hard",
    "temario": true,
    "case": "Un estudiante declara dos variables llamadas 'valor', 'Valor' y 'VALOR' en el mismo programa y se confunde al ejecutar el código.",
    "q": "¿Por qué 'valor', 'Valor' y 'VALOR' son consideradas variables distintas en Python?",
    "opts": [
      "Porque Python no permite nombres repetidos en mayúsculas",
      "Porque Python distingue entre mayúsculas y minúsculas (es case-sensitive)",
      "Porque cada una debe tener un tipo de dato diferente",
      "Porque Python las convierte automáticamente a minúsculas"
    ],
    "ans": 1,
    "exp": "En Python hay distinción entre mayúsculas y minúsculas, por lo que 'valor', 'Valor' y 'VALOR' son nombres de variables distintos."
  },

  {
    "profe": true,
    "unit": "U2 - Operadores aritméticos y lógicos y tipos de datos numéricos, alfanuméricos, especiales y operandos, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "Un estudiante intenta nombrar una variable como 'print' para guardar un resultado, pero Python le arroja un error.",
    "q": "¿Por qué no es válido usar 'print' como nombre de variable en Python?",
    "opts": [
      "Porque los nombres de variable no pueden tener más de 5 letras",
      "Porque 'print' es una palabra reservada del lenguaje",
      "Porque las variables deben comenzar con mayúscula",
      "Porque 'print' ya está definida como tipo de dato"
    ],
    "ans": 1,
    "exp": "Existe un conjunto de palabras reservadas de Python (como 'print', 'if', 'for', etc.) que no se pueden utilizar como nombres de variable."
  },

  {
    "profe": true,
    "unit": "U2 - Operadores aritméticos y lógicos y tipos de datos numéricos, alfanuméricos, especiales y operandos, Examen de la unidad",
    "diff": "easy",
    "temario": true,
    "case": "Un desarrollador quiere unir dos cadenas de texto, una a continuación de la otra, para formar un saludo completo.",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Python 3.12 Shell</div>saludo = \"Hola \" + \"mundo\"\nprint(saludo)\nHola mundo</div>",
    "q": "¿Qué operador de cadena se utiliza para concatenar (unir) dos cadenas de texto?",
    "opts": [
      "*)",
      "+",
      "%",
      "//"
    ],
    "ans": 1,
    "exp": "El operador + aplicado a cadenas realiza la concatenación, uniendo una cadena a continuación de la otra."
  },

  {
    "profe": true,
    "unit": "U2 - Operadores aritméticos y lógicos y tipos de datos numéricos, alfanuméricos, especiales y operandos, Examen de la unidad",
    "diff": "hard",
    "temario": true,
    "case": "Un estudiante escribe risa = 5 * 'ja' y no entiende qué resultado imprimirá el programa.",
    "q": "¿Qué produce la multiplicación de una cadena por un número entero en Python, como en 5 * 'ja'?",
    "opts": [
      "Un error de tipo de dato",
      "Un número, resultado de multiplicar el largo de la cadena por 5",
      "Una nueva cadena, resultante de repetir la cadena original tantas veces como indica el número",
      "Se ignora el operador y solo se imprime 'ja'"
    ],
    "ans": 2,
    "exp": "La multiplicación de una cadena por un número forma una nueva cadena, repitiendo la cadena original tantas veces como indica el número; 5 * 'ja' da 'jajajajaja'."
  },

  {
    "profe": true,
    "unit": "U2 - Operadores aritméticos y lógicos y tipos de datos numéricos, alfanuméricos, especiales y operandos, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "En una expresión matemática con varios operadores combinados, el profesor pregunta cuál se ejecuta primero.",
    "q": "Según el orden de precedencia de operadores en Python, ¿qué grupo de operadores tiene mayor precedencia?",
    "opts": [
      "OR, AND, NOT",
      "Operadores de comparación (==, !=, <, >)",
      "Exponente (**)",
      "Suma y resta (+, -)"
    ],
    "ans": 2,
    "exp": "El operador de exponenciación (**) tiene la mayor precedencia, seguido de la multiplicación/división, luego suma/resta, comparación, not, and y finalmente or."
  },

  {
    "profe": true,
    "unit": "U2 - Operadores aritméticos y lógicos y tipos de datos numéricos, alfanuméricos, especiales y operandos, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "Un estudiante quiere alterar el orden natural en que se ejecutan los operadores dentro de una expresión matemática.",
    "q": "¿Qué símbolo se debe utilizar para alterar la precedencia de los operadores en una expresión?",
    "opts": [
      "Corchetes []",
      "Llaves {}",
      "Paréntesis ()",
      "Comillas \"\""
    ],
    "ans": 2,
    "exp": "Si se quiere alterar la precedencia natural de los operadores, se pueden utilizar los paréntesis para forzar que una operación se ejecute primero."
  },
  
  {
    "profe": true,
    "unit": "U2 - Estructura y bloques para un diagrama de flujo, Examen de la unidad",
    "diff": "easy",
    "temario": true,
    "case": "Un estudiante está diseñando el diagrama de flujo de un algoritmo y necesita marcar el punto donde comienza el proceso.",
    "q": "¿Qué figura geométrica se utiliza en un diagrama de flujo (DFD) para representar el inicio y el fin de un algoritmo?",
    "opts": [
      "Rectángulo",
      "Óvalo",
      "Rombo",
      "Flecha"
    ],
    "ans": 1,
    "exp": "Los diagramas de flujo utilizan óvalos para indicar el inicio y el fin del algoritmo, siguiendo la simbología estandarizada de los DFD."
  },
  
  {
    "profe": true,
    "unit": "U2 - Estructura y bloques para un diagrama de flujo, Examen de la unidad",
    "diff": "easy",
    "temario": true,
    "case": "En un diagrama de flujo, el algoritmo debe evaluar si un valor es mayor que otro antes de continuar.",
    "q": "¿Qué figura geométrica se utiliza en un DFD para representar una decisión o condición?",
    "opts": [
      "Óvalo",
      "Rectángulo",
      "Rombo",
      "Paralelogramo"
    ],
    "ans": 2,
    "exp": "Los rombos se utilizan en los diagramas de flujo para representar decisiones o condiciones, de las cuales surgen distintos caminos según sea Sí o No."
  },

  {
    "profe": true,
    "unit": "U2 - Estructura y bloques para un diagrama de flujo, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "diff": "medium",
    "case": "El profesor pide diseñar un DFD que calcule el área de un trapecio a partir de dos bases y una altura ingresadas por el usuario.",
    "q": "En este DFD, ¿qué figura debe usarse para representar el paso donde se le pide al usuario que ingrese la base B?",
    "opts": [
      "Rectángulo (proceso)",
      "Figura de entrada de datos",
      "Rombo (decisión)",
      "Óvalo (inicio/fin)"
    ],
    "ans": 1,
    "exp": "Los pasos como 'Ingresar B', 'Ingresar b' o 'ingresar h' corresponden a la figura de entrada de datos, distinta del rectángulo de proceso usado para cálculos."
  },
  
  {
    "profe": true,
    "unit": "U2 - Estructura y bloques para un diagrama de flujo, Examen de la unidad",
    "diff": "medium",
    "temario": true,
    "case": "Un DFD realiza un cálculo matemático, como (B*b)/2 * h, y guarda el resultado antes de mostrarlo en pantalla.",
    "q": "¿Qué figura de un diagrama de flujo se utiliza para representar un proceso o cálculo dentro del algoritmo?",
    "opts": [
      "Rombo",
      "Rectángulo",
      "Óvalo",
      "Círculo"
    ],
    "ans": 1,
    "exp": "Los rectángulos se utilizan en los DFD para representar procesos o acciones, como cálculos matemáticos dentro del algoritmo."
  },
  
  {
    "profe": true,
    "unit": "U2 - Estructura y bloques para un diagrama de flujo, Examen de la unidad",
    "diff": "hard",
    "temario": true,
    "case": "Se diseña un DFD que recibe dos valores y siempre debe imprimir la división del mayor entre el menor, sin importar el orden de ingreso.",
    "q": "¿Qué elemento del diagrama de flujo permite que el algoritmo tome un camino distinto dependiendo de si Valor 1 es mayor que Valor 2?",
    "opts": [
      "Un rectángulo de proceso",
      "Una flecha de dirección",
      "Un rombo de condición con ramas Sí/No",
      "Un óvalo de inicio"
    ],
    "ans": 2,
    "exp": "El rombo de condición, con sus ramas de Sí y No, es el elemento que permite bifurcar el flujo del algoritmo según se cumpla o no una comparación, como Valor 1 > Valor 2."
  },

  {
    "profe": true,
    "unit": "U2 - Estructura y bloques para un diagrama de flujo, Examen de la unidad",
    "diff": "easy",
    "temario": true,
    "case": "El profesor explica por qué se prefiere usar diagramas de flujo antes de programar directamente.",
    "q": "¿Cuál es la principal utilidad de los diagramas de flujo en el diseño de algoritmos?",
    "opts": [
      "Reemplazar completamente la necesidad de programar",
      "Permitir ver la estructura lógica del algoritmo de forma visualmente intuitiva",
      "Ejecutar directamente el código en la computadora",
      "Traducir automáticamente el algoritmo a lenguaje Python"
    ],
    "ans": 1,
    "exp": "Los diagramas de flujo son representaciones gráficas que permiten a los desarrolladores ver la estructura lógica de un algoritmo de manera visualmente intuitiva, antes de programarlo."
  },

  {
    "profe": true,
    "unit": "U2 - Metodología para el diseño de algoritmos, Examen de la unidad, Examen Final",
    "diff": "easy",
    "temario": true,
    "case": "Antes de escribir cualquier línea de código, el profesor insiste en que el estudiante entienda bien cuál es el problema que debe resolver.",
    "q": "Según la metodología para el diseño de algoritmos, ¿cuál es el primer paso a seguir?",
    "opts": [
      "La implementación del plan en un lenguaje de programación",
      "La verificación de la solución",
      "La definición del problema",
      "El desarrollo de un plan"
    ],
    "ans": 2,
    "exp": "La metodología para diseñar algoritmos comienza con la definición del problema, seguida del desarrollo de un plan, su implementación y la verificación de la solución."
  },

  {
    "profe": true,
    "unit": "U2 - Metodología para el diseño de algoritmos, Examen de la unidad, Examen Final",
    "diff": "medium",
    "temario": true,
    "case": "Un estudiante ya definió el problema y ahora diseña los pasos generales que seguirá su algoritmo antes de programarlo.",
    "q": "¿A qué etapa de la metodología de diseño de algoritmos corresponde diseñar el pseudocódigo o el diagrama de flujo de la solución?",
    "opts": [
      "Definición del problema",
      "Desarrollo de un plan",
      "Verificación de la solución",
      "Implementación en un lenguaje de programación"
    ],
    "ans": 1,
    "exp": "El desarrollo de un plan (como pseudocódigo o diagrama de flujo) es la etapa donde se estructura la solución antes de traducirla a un lenguaje de programación específico."
  },

  {
    "profe": true,
    "unit": "U2 - Metodología para el diseño de algoritmos, Examen de la unidad, Examen Final",
    "diff": "medium",
    "temario": true,
    "case": "Un estudiante ya programó su solución en Python y ahora prueba distintos casos para asegurarse de que el resultado sea correcto.",
    "q": "¿A qué etapa de la metodología de diseño de algoritmos corresponde probar el programa con distintos casos para confirmar que funciona correctamente?",
    "opts": [
      "Definición del problema",
      "Desarrollo de un plan",
      "Verificación de la solución",
      "Ninguna, esta etapa no existe en la metodología"
    ],
    "ans": 2,
    "exp": "La verificación de la solución es la etapa final de la metodología, donde se comprueba que el algoritmo implementado resuelve correctamente el problema definido."
  },

  {
    "profe": true,
    "unit": "U2 - Metodología para el diseño de algoritmos, Examen de la unidad, Examen Final",
    "diff": "hard",
    "temario": true,
    "case": "El profesor pregunta por qué se recomienda diseñar un algoritmo antes de escribir directamente el código en Python.",
    "q": "¿Cuál es la principal ventaja de seguir una metodología estructurada (definición, plan, implementación, verificación) antes de programar?",
    "opts": [
      "Permite resolver el problema de manera estructurada y reduce errores en la implementación",
      "Hace que el programa se ejecute más rápido en la computadora",
      "Elimina por completo la necesidad de comentarios en el código",
      "Convierte automáticamente el algoritmo en un ejecutable"
    ],
    "ans": 0,
    "exp": "Seguir la metodología completa permite resolver problemas de manera estructurada y ordenada, lo que reduce errores y facilita la implementación y verificación del algoritmo."
  },

  {
    "profe": true,
    "unit": "U2 - Estructura de los programas en Python, Examen de la unidad, Examen Final",
    "diff": "easy",
    "temario": true,
    "case": "Un estudiante nuevo en Python quiere abrir la consola donde puede escribir código directamente para probar su primer programa.",
    "q": "¿Cómo se denomina la consola de Python en la que se puede escribir código directamente y ver la salida al instante?",
    "opts": [
      "El compilador",
      "La Shell",
      "El servidor",
      "El repositorio"
    ],
    "ans": 1,
    "exp": "Al abrir el IDLE de Python se abre una ventana denominada 'Shell', que es una consola donde se puede escribir directamente código en Python e interpretar su salida."
  },
  
  {
    "profe": true,
    "unit": "U2 - Estructura de los programas en Python, Examen de la unidad, Examen Final",
    "diff": "medium",
    "temario": true,
    "case": "Un desarrollador quiere guardar su primer programa 'Hola Mundo' como un archivo permanente en su computador, en lugar de escribirlo directamente en la consola.",
    "q": "¿Qué extensión de archivo se utiliza para guardar un programa escrito en Python?",
    "opts": [
      ".txt",
      ".py",
      ".exe",
      ".doc"
    ],
    "ans": 1,
    "exp": "Los programas en Python se guardan en archivos con extensión .py, lo cual es la forma recomendada de escribir un programa, en lugar de hacerlo solo en la consola."
  },

  {
    "profe": true,
    "unit": "U2 - Estructura de los programas en Python, Examen de la unidad, Examen Final",
    "diff": "easy",
    "temario": true,
    "case": "Un estudiante escribe su archivo hola_mundo.py en el editor de texto del IDLE y quiere ver el resultado en pantalla.",
    "q": "¿Qué tecla se presiona en el editor de Python (IDLE) para ejecutar el programa y ver su resultado en la consola?",
    "opts": [
      "F1", 
      "F5", 
      "Ctrl+S", 
      "Ctrl+C"
    ],
    "ans": 1,
    "exp": "Al presionar la tecla F5 en el editor de IDLE, el intérprete de Python ejecuta el programa y muestra el resultado en la consola."
  },

  {
    "profe": true,
    "unit": "U2 - Estructura de los programas en Python, Examen de la unidad, Examen Final",
    "diff": "medium",
    "temario": true,
    "case": "Un programador deja notas dentro del código para recordar qué hace cada parte del programa, sin afectar su ejecución.",
    "q": "¿Qué símbolo se utiliza en Python para comentar una sola línea de código?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>hola_mundo.py</div>#mi primer saludo\nprint(\"Hola Mundo\")</div>",
    "opts": [
      "//", 
      "#", 
      "/*", 
      "--"
    ],
    "ans": 1,
    "exp": "Para comentar una línea en Python se escribe al inicio de esta el símbolo # (almohadilla); el intérprete ignora todo lo que sigue en esa línea."
  },

  {
    "profe": true,
    "unit": "U2 - Estructura de los programas en Python, Examen de la unidad, Examen Final",
    "diff": "hard",
    "temario": true,
    "case": "Un estudiante necesita dejar un comentario de varias líneas explicando el propósito de un bloque completo de su programa.",
    "q": "¿Cómo se comenta un bloque de varias líneas de código en Python?",
    "opts": [
      "Colocando # al inicio de cada línea del bloque",
      "Usando /* al inicio y */ al final del bloque",
      "Comenzando y terminando el bloque con triple comilla simple o doble",
      "Python no permite comentar bloques de código"
    ],
    "ans": 2,
    "exp": "Para comentar un bloque de líneas se debe comenzar con triple comilla simple (''') o doble (\"\"\") y terminar el bloque con los mismos símbolos."
  },

  {
    "profe": true,
    "unit": "U2 - Estructura de los programas en Python, Examen de la unidad, Examen Final",
    "diff": "medium",
    "temario": true,
    "case": "Un estudiante define una variable con un valor numérico sin especificar en ningún momento si es texto o número.",
    "q": "¿Cómo se denomina la característica de Python que permite crear una variable sin declarar explícitamente su tipo de dato?",
    "opts": [
      "Tipificado estático", 
      "Tipificado dinámico", 
      "Compilación anticipada", 
      "Sintaxis implícita"
    ],
    "ans": 1,
    "exp": "El tipificado dinámico es una característica propia de Python que permite que una variable se cree automáticamente y adopte un tipo de contenido, sin declaración explícita previa."
  },

  {
    "profe": true,
    "unit": "U2 - Estructura de los programas en Python, Examen de la unidad, Examen Final",
    "diff": "medium",
    "temario": true,
    "case": "Un equipo de desarrollo quiere asegurarse de que su código sea comprensible para otros programadores que lo revisen en el futuro.",
    "q": "Según las buenas prácticas de programación en Python, ¿qué se recomienda hacer para facilitar la comprensión y mantenimiento del código?",
    "opts": [
      "Usar nombres de variables aleatorios",
      "Comentar y documentar el código adecuadamente",
      "Escribir todo el código en una sola línea",
      "Evitar el uso de funciones"
    ],
    "ans": 1,
    "exp": "Comentar y documentar el código adecuadamente es una buena práctica esencial que facilita su comprensión y mantenimiento, tanto para uno mismo como para otros programadores."
  },
  
  {
    "profe": true,
    "unit": "U2 - Estructura de los programas en Python, Examen de la unidad, Examen Final",
    "diff": "hard",
    "temario": true,
    "case": "Durante la ejecución de un programa, puede ocurrir que el usuario ingrese un valor no numérico donde se esperaba un número, provocando un error.",
    "q": "¿Qué conjunto de sentencias de Python se utiliza para el manejo de excepciones y así gestionar errores de forma robusta?",
    "opts": [
      "if, elif, else",
      "for, while, break",
      "try, except, finally",
      "def, return, pass"
    ],
    "ans": 2,
    "exp": "El manejo de excepciones se implementa con las sentencias try, except y finally, permitiendo gestionar errores de forma robusta sin que el programa se detenga abruptamente."
  },
  
  {
    "profe": true,
    "unit": "U2 - Estructura de los programas en Python, Examen de la unidad, Examen Final",
    "diff": "medium",
    "temario": true,
    "case": "Un equipo de desarrollo colabora en el mismo proyecto Python y necesita llevar un registro ordenado de todos los cambios realizados en el código.",
    "q": "¿Qué herramienta se recomienda para el control de versiones en un proyecto de programación?",
    "opts": [
      "PowerPoint",
      "Excel",
      "Git",
      "Paint"
    ],
    "ans": 2,
    "exp": "Git es la herramienta recomendada para el control de versiones, ya que permite gestionar cambios en el código y colaborar con otros desarrolladores."
  },
  
  {
    "profe": true,
    "unit": "U2 - Estructura de los programas en Python, Examen de la unidad, Examen Final",
    "diff": "easy",
    "temario": true,
    "case": "Un profesor pide definir un bloque de código que reciba un nombre y salude a esa persona, para poder reutilizarlo varias veces.",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>saludo.py</div>def saludo(nombre):\n    print(f\"Hola, {nombre}\")\n\nsaludo(\"Mundo\")</div>",
    "q": "¿Qué palabra clave se utiliza en Python para definir una función?",
    "opts": [
      "function",
      "create",
      "def",
      "func"
    ],
    "ans": 2,
    "exp": "Las funciones en Python se definen utilizando la palabra clave def, seguida del nombre de la función y paréntesis que pueden contener parámetros."
  },

  {
    "profe": true,
    "unit": "U2 - Sentencias condicionales (if, else, elif) e iterativas (while, for), Examen de la unidad, Examen Final",
    "diff": "easy",
    "temario": true,
    "case": "Un programa debe felicitar al usuario solamente si su nota es mayor o igual a 3.95, y no hacer nada en caso contrario.",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>nota.py</div>nota = float(input(\"ingrese su nota: \"))\nif nota >= 3.95:\n    print(f\"Felicitaciones! Ud. ha aprobado con nota {nota}\")</div>",
    "q": "¿Qué sentencia condicional evalúa una condición y ejecuta un bloque de código solo si esta es verdadera?",
    "opts": [
      "while", 
      "if", 
      "for", 
      "def"
    ],
    "ans": 1,
    "exp": "La sentencia if evalúa una condición y, si es verdadera, ejecuta el bloque de código correspondiente; si es falsa, el programa continúa su flujo sin ejecutar ese bloque."
  },
  
  {
    "profe": true,
    "unit": "U2 - Sentencias condicionales (if, else, elif) e iterativas (while, for), Examen de la unidad, Examen Final",
    "diff": "medium",
    "temario": true,
    "case": "Un programa debe mostrar un mensaje si el número es par, y otro mensaje distinto si es impar; siempre debe mostrar uno de los dos.",
    "q": "¿Qué sentencia se utiliza para ejecutar un bloque de código cuando la condición del if es falsa?",
    "opts": ["elif", "else", "break", "continue"],
    "ans": 1,
    "exp": "La sentencia else se utiliza al final de una serie de condicionales para capturar cualquier caso que no haya sido cubierto por las condiciones anteriores, es decir, cuando la condición es falsa."
  },
  {
    "profe": true,
    "unit": "U2 - Sentencias condicionales (if, else, elif) e iterativas (while, for), Examen de la unidad, Examen Final",
    "diff": "medium",
    "temario": true,
    "case": "Un programa debe calcular el área de un triángulo, cuadrado o rectángulo dependiendo de la figura elegida por el usuario entre tres opciones distintas.",
    "q": "¿Qué sentencia se utiliza en Python para evaluar condiciones adicionales cuando la condición del if inicial no se cumplió?",
    "opts": ["else", "elif", "while", "for"],
    "ans": 1,
    "exp": "La sentencia elif (abreviatura de 'else if') se usa después de un if inicial para evaluar condiciones adicionales, permitiendo manejar más de dos alternativas."
  },
  {
    "profe": true,
    "unit": "U2 - Sentencias condicionales (if, else, elif) e iterativas (while, for), Examen de la unidad, Examen Final",
    "diff": "medium",
    "temario": true,
    "case": "Un programa debe mostrar un mensaje si el número es par, y otro mensaje distinto si es impar; siempre debe mostrar uno de los dos.",
    "diff": "hard",
    "case": "En una cadena de condiciones if-elif-else, la primera condición evaluada resulta ser verdadera.",
    "q": "En una sentencia if-elif-else, cuando la primera condición evaluada es verdadera, ¿qué ocurre con el resto de las condiciones?",
    "opts": [
      "Se evalúan todas de todas formas, pero no se ejecutan",
      "El resto de las condiciones no son evaluadas, solo se ejecuta el bloque de la primera condición verdadera",
      "Se ejecutan todos los bloques de todas las condiciones que sean verdaderas",
      "El programa termina con un error"
    ],
    "ans": 1,
    "exp": "Siempre solo una alternativa será ejecutada. Tan pronto alguna de las condiciones sea verdadera, el resto de las condiciones no son evaluadas."
  },
  {
    "profe": true,
    "unit": "U2 - Sentencias condicionales (if, else, elif) e iterativas (while, for), Examen de la unidad, Examen Final",
    "diff": "easy",
    "temario": true,  
    "case": "Un programa debe repetir un bloque de código mientras el usuario no ingrese el número 0.",
    "q": "¿Qué sentencia de repetición ejecuta un bloque de código mientras una condición especificada sea verdadera?",
    "opts": ["for", "while", "if", "elif"],
    "ans": 1,
    "exp": "El bucle while ejecuta un bloque de código mientras una condición sea verdadera, y es más adecuado cuando no se conoce de antemano el número de iteraciones."
  },
  {
    "profe": true,
    "unit": "U2 - Sentencias condicionales (if, else, elif) e iterativas (while, for), Examen de la unidad, Examen Final",
    "diff": "medium",
    "temario": true,
    "case": "Un programa debe imprimir el cubo de los números del 0 al 10, un número conocido y fijo de iteraciones.",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>cubos.py</div>for i in range(11):\n    cubo = i ** 3\n    print(f\"El cubo de {i} es {cubo}\")</div>",
    "q": "¿Qué bucle es más adecuado usar cuando se conoce de antemano el número exacto de iteraciones que se necesitan?",
    "opts": ["while", "for", "if", "elif"],
    "ans": 1,
    "exp": "El bucle for se utiliza para iterar sobre una secuencia de elementos y es útil cuando se conoce de antemano el número de iteraciones que se necesitan."
  },
  {
    "profe": true,
    "unit": "U2 - Sentencias condicionales (if, else, elif) e iterativas (while, for), Examen de la unidad, Examen Final",
    "diff": "hard",
    "temario": true,
    "case": "Un estudiante escribe range(11,4) esperando obtener una secuencia de números decrecientes, pero el resultado no es el esperado.",
    "q": "¿Qué valores entrega range(11,4) en Python?",
    "opts": [
      "11,10,9,8,7,6,5",
      "11,4",
      "Ningún valor, porque el incremento por defecto es positivo y el inicial es mayor que el final",
      "4,5,6,7,8,9,10,11"
    ],
    "ans": 2,
    "exp": "range(11,4) no entrega ningún valor, ya que si se omite el incremento se asume que es +1, y con un valor inicial mayor que el final no se genera ninguna secuencia; para lograr el orden decreciente se debe usar range(11,4,-1)."
  },
  {
    "profe": true,
    "unit": "U2 - Sentencias condicionales (if, else, elif) e iterativas (while, for), Examen de la unidad, Examen Final",
    "diff": "medium",
    "temario": true,
    "case": "Un programa busca el primer divisor de un número para determinar si es primo, y una vez encontrado ya no necesita seguir revisando los demás.",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>primo.py</div>for d in range(2,n):\n    if n % d == 0:\n        es_primo = False\n        break</div>",
    "q": "¿Qué sentencia permite salir de un ciclo de forma anticipada, en medio de una iteración?",
    "opts": ["continue", "break", "pass", "return"],
    "ans": 1,
    "exp": "La sentencia break se utiliza para salir de un ciclo en medio de una iteración; siempre aparece dentro de un if, ya que de otro modo el ciclo terminaría en la primera iteración."
  },
  {
    "profe": true,
    "unit": "U2 - Sentencias condicionales (if, else, elif) e iterativas (while, for), Examen de la unidad, Examen Final",
    "diff": "hard",
    "temario": true,
    "case": "Un programa calcula el cuadrado y cubo de los números del 1 al 20, pero debe saltarse (sin calcular) los que son múltiplos de 4, sin terminar el ciclo completo.",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>saltar.py</div>for num in range(1,21):\n    if num % 4 == 0:\n        continue\n    a2 = num ** 2</div>",
    "q": "¿Qué sentencia permite saltar a la siguiente iteración de un ciclo sin terminar de ejecutar la iteración actual?",
    "opts": ["break", "continue", "elif", "pass"],
    "ans": 1,
    "exp": "La sentencia continue se utiliza para saltar a la siguiente iteración sin que termine de ejecutarse la iteración en curso, a diferencia de break que termina el ciclo completo."
  },
  {
    "profe": true,
    "unit": "U2 - Sentencias condicionales (if, else, elif) e iterativas (while, for), Examen de la unidad, Examen Final",
    "diff": "medium",
    "temario": true,
    "case": "El profesor pregunta qué diferencia fundamental existe entre las sentencias condicionales e iterativas de Python.",
    "q": "¿Cuál es la diferencia principal entre las sentencias condicionales (if, elif, else) y las iterativas (while, for)?",
    "opts": [
      "No existe ninguna diferencia, son sinónimos",
      "Las condicionales ejecutan un bloque según se cumpla o no una condición; las iterativas repiten un bloque de código varias veces",
      "Las condicionales solo funcionan con números y las iterativas solo con texto",
      "Las iterativas ejecutan el código una sola vez, igual que las condicionales"
    ],
    "ans": 1,
    "exp": "Las sentencias condicionales permiten tomar decisiones ejecutando código según se cumplan o no ciertas condiciones, mientras que las iterativas permiten repetir un bloque de código varias veces."
  },
  {
    "profe": true,
    "unit": "U2 - Cadenas y listas, Examen de la unidad, Examen Final",
    "diff": "easy",
    "temario": true,
    "case": "Un programa necesita guardar el nombre de un usuario ingresado por teclado como una secuencia de caracteres.",
    "q": "¿Cómo se denomina en programación a una secuencia de caracteres utilizada para representar texto?",
    "opts": ["Lista", "Cadena (string)", "Diccionario", "Booleano"],
    "ans": 1,
    "exp": "Las cadenas (string) son secuencias de caracteres utilizadas para representar texto en los programas, y pueden manipularse con operaciones como concatenación."
  },
  {
    "profe": true,
    "unit": "U2 - Cadenas y listas, Examen de la unidad, Examen Final",
    "diff": "medium",
    "temario": true,
    "case": "Un programa necesita guardar varios nombres de estudiantes en una sola variable, permitiendo agregar o eliminar elementos más adelante.",
    "q": "¿Qué estructura de datos de Python es una colección ordenada y mutable de elementos, que permite agregar, eliminar y acceder a elementos por índice?",
    "opts": ["Cadena (str)", "Lista", "Booleano", "Entero"],
    "ans": 1,
    "exp": "Las listas son colecciones ordenadas y mutables de elementos en Python, que pueden contener datos de diferentes tipos y permiten operaciones como adición, eliminación y acceso por índice."
  },
  {
    "profe": true,
    "unit": "U2 - Cadenas y listas, Examen de la unidad, Examen Final",
    "diff": "medium",
    "temario": true,
    "case": "Un estudiante declara la variable texto = 'Hola mundo' y quiere comparar si es exactamente igual a 'Hola Mundo' con mayúscula inicial en la segunda palabra.",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Python 3.12 Shell</div>>>> texto = \"Hola mundo\"\n>>> print(texto == \"Hola Mundo\")\nFalse</div>",
    "q": "¿Por qué la comparación texto == 'Hola Mundo' devuelve False si texto vale 'Hola mundo'?",
    "opts": [
      "Porque las cadenas nunca pueden compararse con ==",
      "Porque Python compara cadenas de forma sensible a mayúsculas y minúsculas",
      "Porque falta convertir el texto a número antes de comparar",
      "Porque el operador == solo funciona con listas"
    ],
    "ans": 1,
    "exp": "Los operadores de comparación en cadenas son sensibles a mayúsculas y minúsculas, por lo que 'Hola mundo' y 'Hola Mundo' se consideran cadenas distintas y la comparación da False."
  },
  {
    "profe": true,
    "unit": "U2 - Cadenas y listas, Examen de la unidad, Examen Final",
    "diff": "hard",
    "temario": true,
    "case": "Un estudiante quiere indicar una cadena de texto en su programa y no está seguro de qué símbolos puede usar para delimitarla.",
    "q": "¿De qué formas se puede indicar una cadena (string) en Python?",
    "opts": [
      "Solo con comillas dobles",
      "Solo con comillas simples",
      "Mediante comillas simples o dobles indistintamente",
      "Solo con corchetes []"
    ],
    "ans": 2,
    "exp": "Una cadena puede ser indicada mediante comillas simples ('...') o comillas dobles (\"...\"), ambas formas son válidas en Python."
  },

  //TEMARIO EXAMEN UNIDAD 3

   {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Estas medidas protegen tanto al robot como a los operadores humanos, asegurando que el sistema pueda manejar situaciones imprevistas de manera segura.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "easy",
    "temario": true,
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
    "exp": "Una buena documentación facilita futuras modificaciones y el mantenimiento del sistema robótico, asegurando que cualquier desarrollador pueda entender y trabajar con el código.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Es crucial validar el robot tanto en simulaciones como en el entorno real de trabajo para ajustar y optimizar su operación.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "easy",
    "temario": true,
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
    "exp": "Estas cinco categorías estructuran el desarrollo de sistemas robotizados de forma integral, desde la planificación hasta el mantenimiento a largo plazo.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Python se recomienda por permitir un desarrollo rápido, siendo una de las opciones adecuadas para programar sistemas robotizados.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "hard",
    "temario": true,
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
    "exp": "PEP 8 es la convención de estilo mencionada para mantener un código Python consistente y legible.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Git es el sistema de control de versiones mencionado para gestionar cambios y colaboraciones en el código.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Las pruebas unitarias verifican cada módulo, las simulaciones prueban en entorno controlado y las pruebas reales validan el sistema en condiciones reales.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "hard",
    "temario": true,
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
    "exp": "Realizar refactorizaciones periódicas permite mejorar la eficiencia y claridad del código a lo largo del tiempo.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Buenas_prácticas_de_programación_de_un_sistema_robotizado.docx",
    "diff": "easy",
    "temario": true,
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
    "exp": "La seguridad del software protege el código de vulnerabilidades, mientras que la seguridad operacional asegura que el robot opere de forma segura para humanos y entorno.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "easy",
    "temario": true,
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
    "exp": "El primer paso crucial es definir claramente la tarea del robot, lo que asegura que la programación se adapte a las necesidades específicas del sector profesional.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Utilizar simuladores robóticos compatibles con Python para probar el comportamiento del robot en un entorno virtual antes de implementarlo físicamente es fundamental para reducir riesgos y costos.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Para proteger al robot y a los operadores humanos, se deben implementar bloques de manejo de excepciones y medidas de seguridad como paradas de emergencia.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "hard",
    "temario": true,
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
    "exp": "El proceso comienza definiendo la tarea, luego se selecciona el entorno de desarrollo (IDE), se programan sensores y actuadores y finalmente se implementan los algoritmos de control y navegación.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "easy",
    "temario": true,
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
    "exp": "Se debe elegir un entorno de desarrollo integrado (IDE) adecuado para facilitar la escritura y depuración del código.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Los sensores se programan para que el robot pueda percibir su entorno y recoger datos esenciales para su operación.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Los algoritmos de navegación autónoma permiten a los robots móviles moverse y operar en su entorno evitando obstáculos y completando las tareas asignadas.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "easy",
    "temario": true,
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
    "exp": "Se debe mantener el software del robot actualizado con las últimas mejoras y parches de seguridad, fomentando la mejora continua.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "hard",
    "temario": true,
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
    "exp": "La guía plantea ocho pasos secuenciales que abarcan desde la definición de la tarea hasta la actualización y mejora continua del sistema robótico.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Guía_de_recomendaciones_para_la_programación_de_robots.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "El robot debe gestionar errores de manera robusta utilizando bloques de manejo de excepciones, complementados con medidas de seguridad como paradas de emergencia.",
    "topic": "Buenas prácticas en programación"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "easy",
    "temario": true,
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
    "exp": "Los sensores de proximidad permiten a los robots detectar objetos cercanos sin necesidad de contacto físico, esencial para evitar colisiones y mejorar la precisión.",
    "topic": "Características y componentes de un robot"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Los robots pueden realizar tareas arriesgadas en entornos peligrosos, reduciendo la exposición del personal a situaciones potencialmente dañinas.",
    "topic": "Ámbitos de aplicación de los robots"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "easy",
    "temario": true,
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
    "exp": "La mejora de la precisión y velocidad de producción es un beneficio clave de los robots en la manufactura, ayudando a reducir errores y costos operativos.",
    "topic": "Ámbitos de aplicación de los robots"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Los robots médicos asisten en cirugías, diagnósticos y cuidados, proporcionando precisión y mejorando los resultados de los tratamientos.",
    "topic": "Características y componentes de un robot"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Los robots autónomos, como los vehículos autónomos, están transformando el transporte y la logística al operar sin intervención humana.",
    "topic": "Ámbitos de aplicación de los robots"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "hard",
    "temario": true,
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
    "exp": "Un sistema robotizado está compuesto por actuadores, sensores, controladores, software y estructura mecánica, cada uno cumpliendo una función esencial.",
    "topic": "Características y componentes de un robot"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Los sensores de fuerza y torque miden la fuerza y el torque aplicados por el robot, siendo cruciales para tareas de ensamblaje y manipulación precisa.",
    "topic": "Características y componentes de un robot"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "hard",
    "temario": true,
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
    "exp": "Los servomotores ofrecen control preciso de posición, velocidad y aceleración, siendo esenciales para tareas que requieren alta precisión.",
    "topic": "Características y componentes de un robot"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Los PLC (controladores lógicos programables) se utilizan en entornos industriales para controlar maquinaria y procesos.",
    "topic": "Características y componentes de un robot"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Los sistemas de energía solar son adecuados para robots que operan en exteriores y requieren autonomía prolongada.",
    "topic": "Características y componentes de un robot"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "easy",
    "temario": true,
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
    "exp": "Wi-Fi y Bluetooth se utilizan para comunicaciones inalámbricas en corto y mediano alcance entre robots y sistemas de control.",
    "topic": "Características y componentes de un robot"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "En logística, los robots mejoran la gestión de almacenes y la eficiencia de las entregas.",
    "topic": "Ámbitos de aplicación de los robots"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Robots_y_componentes_para_sistema_robotizado_en_contextos_profesionales.docx",
    "diff": "hard",
    "temario": true,
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
    "exp": "Los cilindros hidráulicos son parte de los actuadores, no de la interfaz de usuario, que incluye pantallas táctiles, paneles de control y software.",
    "topic": "Características y componentes de un robot"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Síntesis_de_la_unidad_3.docx",
    "diff": "easy",
    "temario": true,
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
    "exp": "La documentación detallada es una buena práctica esencial en la programación de robots, ya que facilita el mantenimiento y asegura un funcionamiento óptimo y seguro.",
    "topic": "Características y componentes de un robot"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Síntesis_de_la_unidad_3.docx",
    "diff": "easy",
    "temario": true,
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
    "exp": "Los robots son ampliamente utilizados en la manufactura para automatizar procesos y mejorar la precisión y la productividad.",
    "topic": "Ámbitos de aplicación de los robots"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Síntesis_de_la_unidad_3.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Los sensores son cruciales para que un robot perciba su entorno y recoja datos esenciales para su funcionamiento.",
    "topic": "Características y componentes de un robot"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Síntesis_de_la_unidad_3.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Las tres ideas fuerza son: características y componentes de un robot, ámbitos de aplicación de los robots, y buenas prácticas en programación.",
    "topic": "Características y componentes de un robot"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Síntesis_de_la_unidad_3.docx",
    "diff": "hard",
    "temario": true,
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
    "exp": "La robótica impacta principalmente en manufactura, servicios, medicina y agricultura, automatizando tareas y mejorando la eficiencia en cada sector.",
    "topic": "Ámbitos de aplicación de los robots"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Síntesis_de_la_unidad_3.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Un robot está compuesto por sensores, actuadores y controladores, que le permiten interactuar con su entorno y ejecutar tareas específicas con precisión y eficiencia.",
    "topic": "Características y componentes de un robot"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "easy",
    "temario": true,
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
    "exp": "El comando en pseudocódigo para mover al robot hacia adelante es \"INICIO MOVER_ADELANTE FIN\".",
    "topic": "Programación de un robot simple mediante software"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "La estructura de control utilizada es \"INICIO SI (OBSTACULO_ADELANTE) ENTONCES DETENER GIRAR_DERECHA FIN_SI FIN\", una estructura condicional (IF).",
    "topic": "Programación de un robot simple mediante software"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "El pseudocódigo correcto es \"INICIO MOVER_ADELANTE ESPERAR(5) DETENER FIN\".",
    "topic": "Programación de un robot simple mediante software"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "easy",
    "temario": true,
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
    "exp": "Cuando se desea detener el movimiento de un robot se debe usar el comando DETENER dentro de la estructura INICIO...FIN.",
    "topic": "Programación de un robot simple mediante software"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "hard",
    "temario": true,
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
    "exp": "El bucle MIENTRAS permite que, mientras el robot no encuentre un obstáculo adelante, continúe realizando la acción de moverse hacia adelante.",
    "topic": "Programación de un robot simple mediante software"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "hard",
    "temario": true,
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
    "exp": "Cuando se detecta un obstáculo, el robot ejecuta: DETENER, GIRAR_DERECHA, MOVER_ADELANTE y ESPERAR(2), antes de continuar con el bucle hasta llegar a la meta.",
    "topic": "Programación de un robot simple mediante software"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "medium",
    "temario": true,
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
    "exp": "Usar estructuras de control permite que el robot pueda tomar decisiones basado en lo que percibe del medio a través de los sensores.",
    "topic": "Programación de un robot simple mediante software"
  },
  {
    "profe": true,
    "unit": "U-3 - Fundamentos y aplicaciones de robótica, Examen de la unidad, Examen Final",
    "file": "Tareas_simples_de_un_robot_en_el_ámbito_profesional.docx",
    "diff": "easy",
    "temario": true,
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
    "exp": "La implementación de robots en tareas simples optimiza los procesos operativos y aporta beneficios significativos en términos de seguridad, eficiencia y calidad.",
    "topic": "Programación de un robot simple mediante software"
  },





  //CONTENIDO MATERIAL DE ESTUDIO RECURSOS DIGITAL DEL AMBIENTE DE APRENDIZAJE
    //UNIDAD 1
  
  
  

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
    "id": "u2-f1-07",
    "profe": true,
    "unit": "Unidad 2 - Fundamentos de programación en lenguaje Python",
    "archivo": "Fundamentos de programación en lenguaje Python",
    "diff": "medium",
    "case": "Necesitas comentar varias líneas de código de una sola vez.",
    "q": "¿Qué se utiliza en Python para comentar un bloque de varias líneas de código?",
    "opts": [
      "Doble almohadilla (##)",
      "Triple comilla simple o doble ('''  o \"\"\")",
      "Corchetes []",
      "Paréntesis ()"
    ],
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
    "opts": [
      "valor_1",
      "_temporal",
      "2valor",
      "valorDos"
    ],
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
    "opts": [
      "Sí, Python ignora mayúsculas y minúsculas",
      "No, Python distingue entre mayúsculas y minúsculas, por lo que son 3 variables distintas",
      "Solo son iguales si tienen el mismo valor asignado",
      "Depende de la versión de Python"
    ],
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
    "opts": [
      "2.3e6",
      "2300000.0",
      "23000000",
      "Error de sintaxis"
    ],
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