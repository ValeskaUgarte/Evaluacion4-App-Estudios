import { P, TABLA } from '../preguntas_helpers.js';
const preguntas_backend = [
    // ==================== AGREGADAS DESDE DOCUMENTO DE ESTUDIO (112 preguntas) ====================
    {
        "profe": false,
        "unit": "Backend - Preguntas confirmadas",
        "diff": "easy",
        "q": "¿Qué diferencia existe entre hacer una migración y ejecutar migrate?",
        "opts": [
            "migrate elimina las migraciones anteriores y crea una base de datos vacía.",
            "makemigrations aplica los cambios a la base de datos, y migrate genera los archivos de migración.",
            "makemigrations genera los archivos que registran los cambios realizados en los modelos de Django. migrate aplica esos cambios a la estructura de la base de datos. Si agregamos un campo nuevo a un modelo, primero generamos la migración y después la aplicamos.",
            "Ambos comandos hacen lo mismo; solo cambia la versión de Django utilizada."
        ],
        "ans": 2,
        "exp": "makemigrations genera los archivos que registran los cambios realizados en los modelos de Django. migrate aplica esos cambios a la estructura de la base de datos. Si agregamos un campo nuevo a un modelo, primero generamos la migración y después la aplicamos.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">python manage.py makemigrations\npython manage.py migrate</div></div>"
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es Backend?",
        "opts": [
            "Es un lenguaje de estilos que define la apariencia de las páginas web.",
            "Es una base de datos que se instala directamente en el computador del usuario.",
            "Es el programa que muestra la interfaz visual al usuario en el navegador.",
            "Es la parte de una aplicación que trabaja detrás de la interfaz de usuario. Se encarga de procesar solicitudes, ejecutar la lógica del sistema, comunicarse con la base de datos y devolver respuestas."
        ],
        "ans": 3,
        "exp": "Es la parte de una aplicación que trabaja detrás de la interfaz de usuario. Se encarga de procesar solicitudes, ejecutar la lógica del sistema, comunicarse con la base de datos y devolver respuestas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un servidor?",
        "opts": [
            "Es un tipo de cable de red utilizado para conectar equipos en una oficina.",
            "Es un programa que descarga archivos de internet al computador del usuario.",
            "Es un sistema que recibe solicitudes de clientes, las procesa y devuelve respuestas mediante una red.",
            "Es una aplicación instalada en el celular que muestra la interfaz al usuario."
        ],
        "ans": 2,
        "exp": "Es un sistema que recibe solicitudes de clientes, las procesa y devuelve respuestas mediante una red.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un cliente?",
        "opts": [
            "Es un sistema que siempre se encuentra en el computador del usuario final.",
            "Es un programa que ejecuta consultas SQL sin recibir ninguna solicitud.",
            "Es un componente que solo muestra la interfaz visual de una aplicación.",
            "Es una aplicación o dispositivo que realiza solicitudes a un servidor para obtener información o utilizar sus servicios."
        ],
        "ans": 3,
        "exp": "Es una aplicación o dispositivo que realiza solicitudes a un servidor para obtener información o utilizar sus servicios.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una solicitud HTTP?",
        "opts": [
            "Es una instrucción que el servidor ejecuta sin devolver ningún resultado.",
            "Es un archivo que guarda la configuración del navegador del usuario.",
            "Es un mensaje que un cliente envía a un servidor para solicitar información o realizar una operación.",
            "Es un mensaje que el servidor envía al cliente para iniciar la conexión de red."
        ],
        "ans": 2,
        "exp": "Es un mensaje que un cliente envía a un servidor para solicitar información o realizar una operación.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una respuesta HTTP?",
        "opts": [
            "Es un programa que cifra los datos antes de enviarlos por la red.",
            "Es una base de datos que almacena las respuestas del servidor.",
            "Es una aplicación que muestra información al usuario sin conectarse a ningún servidor.",
            "Es el mensaje que devuelve el servidor al cliente después de procesar una solicitud. Puede contener información, resultados o errores."
        ],
        "ans": 3,
        "exp": "Es el mensaje que devuelve el servidor al cliente después de procesar una solicitud. Puede contener información, resultados o errores.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una API?",
        "opts": [
            "Es una interfaz que permite que diferentes aplicaciones o componentes de software se comuniquen e intercambien información mediante reglas definidas.",
            "Es un formato de archivo utilizado para almacenar imágenes en el servidor.",
            "Es una aplicación que trabaja únicamente en el navegador y no se comunica con otros sistemas.",
            "Es un tipo de base de datos que guarda los datos en formato de texto plano."
        ],
        "ans": 0,
        "exp": "Es una interfaz que permite que diferentes aplicaciones o componentes de software se comuniquen e intercambien información mediante reglas definidas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una API REST?",
        "opts": [
            "Es una solicitud que el servidor envía al cliente para pedirle información adicional.",
            "Es un mensaje de error que aparece cuando la base de datos está apagada.",
            "Es una API que utiliza los principios de REST para permitir la comunicación entre sistemas, generalmente mediante solicitudes HTTP y recursos identificados por URL.",
            "Es un código de estado que indica que la conexión fue cerrada por el usuario."
        ],
        "ans": 2,
        "exp": "Es una API que utiliza los principios de REST para permitir la comunicación entre sistemas, generalmente mediante solicitudes HTTP y recursos identificados por URL.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un endpoint?",
        "opts": [
            "Es un servidor que almacena temporalmente las páginas web visitadas por el usuario.",
            "Es un lenguaje de programación utilizado para escribir los estilos de la página.",
            "Es una dirección específica de una API a través de la cual se puede acceder a un recurso o ejecutar una operación.",
            "Es una dirección específica que solo sirve para cargar archivos estáticos como imágenes."
        ],
        "ans": 2,
        "exp": "Es una dirección específica de una API a través de la cual se puede acceder a un recurso o ejecutar una operación.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una ruta o URL?",
        "opts": [
            "Es un código de estado que indica que el recurso fue movido permanentemente.",
            "Es un tipo de servidor que guarda los datos del usuario en su computador.",
            "Es una dirección que solo se usa para enviar correos electrónicos desde la aplicación.",
            "Es una dirección que identifica un recurso o punto de acceso dentro de una aplicación o servidor."
        ],
        "ans": 3,
        "exp": "Es una dirección que identifica un recurso o punto de acceso dentro de una aplicación o servidor.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una petición GET?",
        "opts": [
            "Es una solicitud HTTP utilizada para reemplazar todo el contenido de una página.",
            "Es una solicitud HTTP utilizada para eliminar registros de la base de datos.",
            "Es una solicitud HTTP utilizada principalmente para obtener información de un servidor.",
            "Es una operación que modifica solamente el encabezado de una respuesta HTTP."
        ],
        "ans": 2,
        "exp": "Es una solicitud HTTP utilizada principalmente para obtener información de un servidor.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una petición POST?",
        "opts": [
            "Es una solicitud HTTP utilizada habitualmente para enviar información al servidor, por ejemplo, para crear un registro.",
            "Es una solicitud HTTP utilizada para obtener información sin modificar el servidor.",
            "Es una solicitud HTTP utilizada para eliminar un recurso del servidor.",
            "Es una solicitud HTTP utilizada para cifrar la conexión entre cliente y servidor."
        ],
        "ans": 0,
        "exp": "Es una solicitud HTTP utilizada habitualmente para enviar información al servidor, por ejemplo, para crear un registro.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una petición PUT?",
        "opts": [
            "Es una solicitud HTTP utilizada para crear un nuevo recurso en el servidor.",
            "Es una solicitud HTTP utilizada para reemplazar completamente la representación de un recurso existente.",
            "Es una solicitud HTTP utilizada para modificar solamente una parte del recurso.",
            "Es una solicitud HTTP utilizada para cerrar la conexión con el servidor."
        ],
        "ans": 1,
        "exp": "Es una solicitud HTTP utilizada para reemplazar completamente la representación de un recurso existente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una petición PATCH?",
        "opts": [
            "Es una solicitud HTTP utilizada para reemplazar completamente la representación de un recurso.",
            "Es una solicitud HTTP utilizada para cifrar la conexión entre cliente y servidor.",
            "Es una solicitud HTTP utilizada para modificar parcialmente un recurso.",
            "Es una solicitud HTTP utilizada para obtener la lista completa de recursos."
        ],
        "ans": 2,
        "exp": "Es una solicitud HTTP utilizada para modificar parcialmente un recurso.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una petición DELETE?",
        "opts": [
            "Es una solicitud HTTP utilizada para obtener información sin modificar el servidor.",
            "Es una solicitud HTTP utilizada para crear un recurso nuevo con datos del formulario.",
            "Es una solicitud HTTP utilizada para actualizar parcialmente un recurso.",
            "Es una solicitud HTTP utilizada para eliminar un recurso."
        ],
        "ans": 3,
        "exp": "Es una solicitud HTTP utilizada para eliminar un recurso.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es JSON?",
        "opts": [
            "Es un formato de intercambio de datos que permite representar información mediante estructuras de pares clave-valor y listas.",
            "Es un formato de imagen que se utiliza para publicar fotografías en la web.",
            "Es un lenguaje de programación utilizado para diseñar bases de datos relacionales.",
            "Es un protocolo de comunicación que cifra los mensajes entre dos computadores."
        ],
        "ans": 0,
        "exp": "Es un formato de intercambio de datos que permite representar información mediante estructuras de pares clave-valor y listas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es la lógica de negocio?",
        "opts": [
            "Es un software que administra la conexión física entre el servidor y la red.",
            "Es el diseño visual de las pantallas que utiliza la empresa para sus clientes.",
            "Es el conjunto de reglas y procesos que determinan cómo debe funcionar una aplicación según sus objetivos.",
            "Es el conjunto de reglas de negocio aplicadas solamente por el usuario final en la interfaz."
        ],
        "ans": 2,
        "exp": "Es el conjunto de reglas y procesos que determinan cómo debe funcionar una aplicación según sus objetivos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un ORM?",
        "opts": [
            "Es un servidor web que sirve archivos estáticos como imágenes y hojas de estilo.",
            "Es una herramienta que escribe automáticamente la interfaz gráfica de la aplicación.",
            "Es un lenguaje de consulta que reemplaza a SQL en todas las bases de datos.",
            "Es una herramienta que permite trabajar con bases de datos relacionales utilizando objetos y clases del lenguaje de programación, sin tener que escribir manualmente todas las consultas SQL."
        ],
        "ans": 3,
        "exp": "Es una herramienta que permite trabajar con bases de datos relacionales utilizando objetos y clases del lenguaje de programación, sin tener que escribir manualmente todas las consultas SQL.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un modelo en el Backend?",
        "opts": [
            "Es una representación visual de la pantalla que el usuario utiliza en la aplicación.",
            "Es una representación de los datos que maneja una aplicación y que normalmente define cómo se almacenan en la base de datos.",
            "Es un conjunto de pruebas automáticas que verifican el diseño de la interfaz.",
            "Es un archivo de configuración que define el idioma y la zona horaria del sistema."
        ],
        "ans": 1,
        "exp": "Es una representación de los datos que maneja una aplicación y que normalmente define cómo se almacenan en la base de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un controlador?",
        "opts": [
            "Es una tabla de la base de datos que almacena las respuestas enviadas al servidor.",
            "Es un archivo que contiene solamente los estilos visuales de la aplicación.",
            "Es un componente que recibe o coordina las solicitudes, ejecuta las operaciones correspondientes y determina la respuesta que debe entregarse. Su responsabilidad concreta depende de la arquitectura utilizada.",
            "Es un componente que muestra los datos al usuario en la página web."
        ],
        "ans": 2,
        "exp": "Es un componente que recibe o coordina las solicitudes, ejecuta las operaciones correspondientes y determina la respuesta que debe entregarse. Su responsabilidad concreta depende de la arquitectura utilizada.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una vista en el contexto de Backend?",
        "opts": [
            "Es el componente que procesa una solicitud y devuelve una respuesta. En Django, una vista recibe un objeto request y retorna un objeto response.",
            "Es una cadena de texto que el navegador muestra en la barra de direcciones.",
            "Es un componente que solo se encarga de presentar la plantilla HTML al usuario.",
            "Es una función que valida los formularios antes de enviarlos desde el navegador."
        ],
        "ans": 0,
        "exp": "Es el componente que procesa una solicitud y devuelve una respuesta. En Django, una vista recibe un objeto request y retorna un objeto response.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una sesión?",
        "opts": [
            "Es un mecanismo que permite mantener información asociada a un usuario entre diferentes solicitudes HTTP.",
            "Es el espacio de almacenamiento del navegador donde se guardan las imágenes de la página.",
            "Es un archivo que contiene el código fuente del frontend de la aplicación.",
            "Es un sistema que bloquea el acceso a la aplicación desde direcciones IP desconocidas."
        ],
        "ans": 0,
        "exp": "Es un mecanismo que permite mantener información asociada a un usuario entre diferentes solicitudes HTTP.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un token?",
        "opts": [
            "Es el proceso de asignar permisos de lectura a los archivos del servidor.",
            "Es el proceso de cifrar todos los datos del usuario antes de guardarlos en la base.",
            "Es el proceso de comprobar que el servidor esté disponible antes de enviar una solicitud.",
            "Es una cadena de datos utilizada para representar información o acreditar determinados permisos, según el sistema de autenticación utilizado."
        ],
        "ans": 3,
        "exp": "Es una cadena de datos utilizada para representar información o acreditar determinados permisos, según el sistema de autenticación utilizado.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es autenticación?",
        "opts": [
            "Es el proceso de cerrar la sesión del usuario después de un tiempo de inactividad.",
            "Es el proceso de determinar qué acciones puede realizar un usuario sin verificar su identidad.",
            "Es el proceso mediante el cual un sistema verifica la identidad de un usuario.",
            "Es el proceso de guardar la contraseña del usuario en texto plano en la base de datos."
        ],
        "ans": 2,
        "exp": "Es el proceso mediante el cual un sistema verifica la identidad de un usuario.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es autorización?",
        "opts": [
            "Es un componente que se ejecuta solamente en el navegador del usuario y no interviene en el servidor.",
            "Es el proceso que determina qué acciones o recursos tiene permitido utilizar un usuario.",
            "Es un archivo que almacena las respuestas HTTP guardadas en caché del navegador.",
            "Es una función que copia automáticamente los datos de la base en la memoria RAM."
        ],
        "ans": 1,
        "exp": "Es el proceso que determina qué acciones o recursos tiene permitido utilizar un usuario.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un middleware?",
        "opts": [
            "Es un componente que interviene en el procesamiento de las solicitudes y respuestas, permitiendo ejecutar operaciones antes o después de llegar a la vista.",
            "Es una condición de error que nunca interrumpe la ejecución del programa.",
            "Es una instrucción que reinicia el servidor cada vez que se produce un error.",
            "Es una función que guarda el código fuente en un archivo separado."
        ],
        "ans": 0,
        "exp": "Es un componente que interviene en el procesamiento de las solicitudes y respuestas, permitiendo ejecutar operaciones antes o después de llegar a la vista.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una excepción?",
        "opts": [
            "Es una herramienta que elimina el código con errores antes de compilar el programa.",
            "Es un evento que interrumpe el flujo normal de ejecución de un programa debido a un error o situación excepcional.",
            "Es el proceso de registrar los datos del usuario en una base de datos externa.",
            "Es el proceso de ocultar los errores para que el usuario nunca los vea en pantalla."
        ],
        "ans": 1,
        "exp": "Es un evento que interrumpe el flujo normal de ejecución de un programa debido a un error o situación excepcional.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es el manejo de errores?",
        "opts": [
            "Es una copia completa del sistema operativo guardada en un servidor remoto.",
            "Es una carpeta del sistema operativo donde se guardan las variables de entorno del usuario.",
            "Es un programa que ejecuta todas las aplicaciones del computador en paralelo.",
            "Es el proceso de detectar, controlar y responder a los errores que pueden ocurrir durante la ejecución de una aplicación."
        ],
        "ans": 3,
        "exp": "Es el proceso de detectar, controlar y responder a los errores que pueden ocurrir durante la ejecución de una aplicación.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un entorno virtual en Python?",
        "opts": [
            "Es un entorno aislado que permite instalar y administrar dependencias de un proyecto sin afectar los demás proyectos del sistema.",
            "Es una variable global que almacena el estado de la aplicación en el navegador.",
            "Es un archivo que se descarga desde internet y se ejecuta automáticamente en el servidor.",
            "Es un programa que comprime los archivos del proyecto antes de subirlos al servidor."
        ],
        "ans": 0,
        "exp": "Es un entorno aislado que permite instalar y administrar dependencias de un proyecto sin afectar los demás proyectos del sistema.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una dependencia?",
        "opts": [
            "Backend es la parte visual de la aplicación, y Frontend guarda los datos en el servidor.",
            "Es una biblioteca, paquete o componente externo que necesita una aplicación para funcionar.",
            "Son lo mismo; solo cambia el nombre que se usa en cada empresa.",
            "Frontend es el componente que procesa la lógica y se comunica con la base de datos, y Backend es la interfaz."
        ],
        "ans": 1,
        "exp": "Es una biblioteca, paquete o componente externo que necesita una aplicación para funcionar.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre Backend y Frontend?",
        "opts": [
            "El cliente procesa la lógica y devuelve respuestas, y el servidor solo realiza solicitudes.",
            "El servidor siempre es un computador personal, y el cliente siempre es un servidor de base de datos.",
            "Frontend es la parte de una aplicación con la que interactúa directamente el usuario. Backend es la parte encargada de procesar la información, ejecutar la lógica y comunicarse con la base de datos.",
            "Son lo mismo; ambos pueden recibir y realizar solicitudes indistintamente."
        ],
        "ans": 2,
        "exp": "Frontend es la parte de una aplicación con la que interactúa directamente el usuario. Backend es la parte encargada de procesar la información, ejecutar la lógica y comunicarse con la base de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre cliente y servidor?",
        "opts": [
            "El cliente realiza solicitudes para obtener información o servicios. El servidor recibe esas solicitudes, las procesa y devuelve respuestas.",
            "POST se utiliza principalmente para consultar información, y GET para crear recursos.",
            "GET solo puede enviarse desde formularios, y POST solo desde la barra de direcciones.",
            "Ambos métodos modifican los datos del servidor sin ninguna diferencia."
        ],
        "ans": 0,
        "exp": "El cliente realiza solicitudes para obtener información o servicios. El servidor recibe esas solicitudes, las procesa y devuelve respuestas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre GET y POST?",
        "opts": [
            "PATCH reemplaza completamente un recurso, y PUT modifica solamente una parte.",
            "Son lo mismo; ambos reemplazan el recurso completo por el nuevo contenido.",
            "PUT solo se utiliza para eliminar recursos, y PATCH para consultar.",
            "GET se utiliza principalmente para consultar información. POST se utiliza habitualmente para enviar información y crear recursos."
        ],
        "ans": 3,
        "exp": "GET se utiliza principalmente para consultar información. POST se utiliza habitualmente para enviar información y crear recursos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre PUT y PATCH?",
        "opts": [
            "Una API REST es una interfaz que no utiliza HTTP, y una API es siempre REST.",
            "PUT reemplaza completamente un recurso. PATCH modifica solamente una parte de ese recurso.",
            "Son lo mismo: ambos términos describen la misma interfaz de comunicación.",
            "Una API solo existe en aplicaciones móviles, mientras que REST existe en la web."
        ],
        "ans": 1,
        "exp": "PUT reemplaza completamente un recurso. PATCH modifica solamente una parte de ese recurso.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre una API y una API REST?",
        "opts": [
            "La autorización se realiza antes de la autenticación y solo en sistemas sin contraseñas.",
            "Una API es una interfaz de comunicación entre componentes o aplicaciones. Una API REST es un tipo de API que sigue los principios arquitectónicos REST.",
            "La autenticación define qué puede hacer el usuario, y la autorización verifica su identidad.",
            "Son sinónimos que siempre se realizan con el mismo mecanismo."
        ],
        "ans": 1,
        "exp": "Una API es una interfaz de comunicación entre componentes o aplicaciones. Una API REST es un tipo de API que sigue los principios arquitectónicos REST.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre autenticación y autorización?",
        "opts": [
            "Una sesión se guarda en el navegador del usuario, y un token siempre se almacena en el servidor.",
            "Autenticación verifica quién es el usuario. Autorización determina qué puede hacer ese usuario dentro del sistema.",
            "El token no puede contener información del usuario, mientras que la sesión sí.",
            "Son lo mismo; ambos mantienen información del usuario de la misma forma."
        ],
        "ans": 1,
        "exp": "Autenticación verifica quién es el usuario. Autorización determina qué puede hacer ese usuario dentro del sistema.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre sesión y token?",
        "opts": [
            "Son lo mismo; ambos definen la forma en que se presentan los datos.",
            "El modelo procesa las solicitudes y decide la respuesta, y la vista define los datos de la aplicación.",
            "Una sesión normalmente mantiene información del usuario en el servidor y se identifica mediante una cookie u otro mecanismo. Un token contiene información o credenciales que el cliente presenta para acreditar su acceso, según el esquema utilizado.",
            "La vista administra la base de datos, y el modelo genera el HTML que ve el usuario."
        ],
        "ans": 2,
        "exp": "Una sesión normalmente mantiene información del usuario en el servidor y se identifica mediante una cookie u otro mecanismo. Un token contiene información o credenciales que el cliente presenta para acreditar su acceso, según el esquema utilizado.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre un modelo y una vista en Django?",
        "opts": [
            "El modelo define y representa los datos de la aplicación. La vista procesa las solicitudes y determina qué respuesta entregar.",
            "La ruta solo se usa en aplicaciones móviles, y el endpoint solo en la web.",
            "La ruta es una operación HTTP, y el endpoint es el patrón de URL que utiliza la aplicación.",
            "Son sinónimos que se refieren exactamente al mismo elemento."
        ],
        "ans": 0,
        "exp": "El modelo define y representa los datos de la aplicación. La vista procesa las solicitudes y determina qué respuesta entregar.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre una ruta y un endpoint?",
        "opts": [
            "HTTPS es un protocolo que no utiliza cifrado y HTTP sí lo utiliza.",
            "La ruta es el patrón de URL que utiliza la aplicación para dirigir una solicitud. El endpoint es el punto de acceso concreto de una API, asociado a una operación o recurso.",
            "Son lo mismo; HTTPS es solo un nombre comercial de HTTP.",
            "HTTP solo puede utilizarse en servidores locales, y HTTPS en internet."
        ],
        "ans": 1,
        "exp": "La ruta es el patrón de URL que utiliza la aplicación para dirigir una solicitud. El endpoint es el punto de acceso concreto de una API, asociado a una operación o recurso.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre HTTP y HTTPS?",
        "opts": [
            "El servidor de aplicaciones no puede recibir solicitudes HTTP en ningún caso.",
            "Un servidor web siempre ejecuta la lógica de negocio, y un servidor de aplicaciones solo sirve archivos.",
            "Ambos cumplen exactamente la misma función y no tienen diferencias.",
            "HTTP es un protocolo de comunicación web. HTTPS utiliza HTTP protegido mediante TLS, proporcionando cifrado y autenticación del servidor."
        ],
        "ans": 3,
        "exp": "HTTP es un protocolo de comunicación web. HTTPS utiliza HTTP protegido mediante TLS, proporcionando cifrado y autenticación del servidor.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre un servidor web y un servidor de aplicaciones?",
        "opts": [
            "Son lo mismo; ambos códigos indican que la solicitud no pudo procesarse.",
            "El error 400 aparece solo en bases de datos, y el 500 solo en el navegador.",
            "Los errores 400 indican fallas en el servidor, y los errores 500 indican problemas del cliente.",
            "Un servidor web recibe y gestiona solicitudes HTTP y puede servir archivos estáticos. Un servidor de aplicaciones ejecuta la lógica de la aplicación y procesa las solicitudes dinámicas. En algunos entornos, un mismo software puede cumplir ambas funciones."
        ],
        "ans": 3,
        "exp": "Un servidor web recibe y gestiona solicitudes HTTP y puede servir archivos estáticos. Un servidor de aplicaciones ejecuta la lógica de la aplicación y procesa las solicitudes dinámicas. En algunos entornos, un mismo software puede cumplir ambas funciones.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre un error 400 y un error 500?",
        "opts": [
            "Los microservicios no pueden comunicarse entre sí y deben usar una base de datos única.",
            "Son lo mismo; solo cambia el lenguaje de programación utilizado.",
            "Los errores 400 indican problemas en la solicitud del cliente. Los errores 500 indican problemas durante el procesamiento en el servidor.",
            "Una aplicación monolítica divide el sistema en servicios independientes, y los microservicios concentran todo."
        ],
        "ans": 2,
        "exp": "Los errores 400 indican problemas en la solicitud del cliente. Los errores 500 indican problemas durante el procesamiento en el servidor.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre una aplicación monolítica y una arquitectura de microservicios?",
        "opts": [
            "El código asíncrono espera a que termine cada operación, y el síncrono nunca espera.",
            "Una aplicación monolítica concentra sus componentes principales en una misma aplicación. Los microservicios dividen el sistema en servicios independientes que se comunican entre sí.",
            "El código síncrono solo funciona en el navegador, y el asíncrono solo en el servidor.",
            "Son lo mismo; ambos bloquean siempre el flujo del programa."
        ],
        "ans": 1,
        "exp": "Una aplicación monolítica concentra sus componentes principales en una misma aplicación. Los microservicios dividen el sistema en servicios independientes que se comunican entre sí.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre código síncrono y asíncrono?",
        "opts": [
            "Son sinónimos: ambos son lenguajes de programación para bases de datos.",
            "El ORM solo funciona con bases de datos no relacionales y SQL con las relacionales.",
            "SQL es un ORM que traduce objetos a consultas, y el ORM es un lenguaje de consulta.",
            "El código síncrono ejecuta operaciones siguiendo una secuencia y espera a que termine cada operación. El asíncrono permite gestionar operaciones pendientes sin bloquear necesariamente el flujo de ejecución."
        ],
        "ans": 3,
        "exp": "El código síncrono ejecuta operaciones siguiendo una secuencia y espera a que termine cada operación. El asíncrono permite gestionar operaciones pendientes sin bloquear necesariamente el flujo de ejecución.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre un ORM y SQL?",
        "opts": [
            "El Backend cifra la contraseña en el navegador antes de enviarla al servidor.",
            "SQL es un lenguaje para consultar y administrar bases de datos relacionales. Un ORM permite interactuar con la base de datos utilizando objetos y métodos del lenguaje de programación.",
            "El Backend crea automáticamente una cuenta nueva sin consultar la base de datos.",
            "El Backend solo muestra un formulario al usuario y no verifica los datos enviados."
        ],
        "ans": 1,
        "exp": "SQL es un lenguaje para consultar y administrar bases de datos relacionales. Un ORM permite interactuar con la base de datos utilizando objetos y métodos del lenguaje de programación.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si un usuario ingresa a una página y solicita iniciar sesión, ¿qué sucede en el Backend?",
        "opts": [
            "Utilizaría DELETE, porque el usuario se registra eliminando datos previos.",
            "El Backend recibe los datos enviados por el usuario, verifica sus credenciales, consulta la base de datos y determina si puede iniciar sesión. Si son correctas, establece el mecanismo de autenticación correspondiente y devuelve una respuesta.",
            "Utilizaría PUT, porque permite obtener información sin modificar el recurso.",
            "Utilizaría GET, porque permite crear un nuevo usuario en el servidor."
        ],
        "ans": 1,
        "exp": "El Backend recibe los datos enviados por el usuario, verifica sus credenciales, consulta la base de datos y determina si puede iniciar sesión. Si son correctas, establece el mecanismo de autenticación correspondiente y devuelve una respuesta.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas registrar un usuario nuevo, ¿qué método HTTP utilizarías?",
        "opts": [
            "Utilizaría POST, porque permite enviar información al servidor para crear un nuevo recurso.",
            "Utilizaría DELETE, porque elimina la información del usuario para consultarla.",
            "Utilizaría POST, porque solo permite consultar datos sin modificar el recurso.",
            "Utilizaría PUT, porque reemplaza el recurso completo sin consultar nada."
        ],
        "ans": 0,
        "exp": "Utilizaría POST, porque permite enviar información al servidor para crear un nuevo recurso.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas consultar los datos de un usuario, ¿qué método utilizarías?",
        "opts": [
            "Utilizaría PUT, porque reemplaza el usuario completo con el nuevo correo.",
            "Utilizaría DELETE, porque elimina el usuario antes de modificar el correo.",
            "Utilizaría GET, porque obtiene el correo sin modificar el recurso.",
            "Utilizaría GET, porque permite obtener información sin modificar el recurso."
        ],
        "ans": 3,
        "exp": "Utilizaría GET, porque permite obtener información sin modificar el recurso.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas modificar solamente el correo electrónico de un usuario, ¿qué método utilizarías?",
        "opts": [
            "Utilizaría PATCH, porque modifica parcialmente el producto antes de eliminarlo.",
            "Utilizaría PATCH, porque permite modificar parcialmente un recurso.",
            "Utilizaría GET, porque envía una solicitud para obtener el producto a eliminar.",
            "Utilizaría POST, porque crea un registro que reemplaza al producto."
        ],
        "ans": 1,
        "exp": "Utilizaría PATCH, porque permite modificar parcialmente un recurso.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas eliminar un producto, ¿qué método HTTP utilizarías?",
        "opts": [
            "El Frontend esperaría a que el usuario reinicie la aplicación para mostrar los productos.",
            "El Frontend consultaría directamente el archivo de la base de datos en el servidor.",
            "El Frontend ejecutaría consultas SQL en su propio navegador sin intervención del servidor.",
            "Utilizaría DELETE para solicitar la eliminación del recurso correspondiente."
        ],
        "ans": 3,
        "exp": "Utilizaría DELETE para solicitar la eliminación del recurso correspondiente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si el Frontend necesita consultar los productos almacenados en la base de datos, ¿cómo se comunicaría con el Backend?",
        "opts": [
            "El Backend cambiaría el rol del usuario para darle acceso a la sección.",
            "El Backend mostraría la sección administrativa sin verificar los permisos del usuario.",
            "El Frontend enviaría una solicitud HTTP a un endpoint de la API. El Backend procesaría la solicitud, consultaría la base de datos y devolvería los resultados, por ejemplo, en formato JSON.",
            "El Backend redirigiría al usuario a la página de inicio sin mostrar ningún mensaje."
        ],
        "ans": 2,
        "exp": "El Frontend enviaría una solicitud HTTP a un endpoint de la API. El Backend procesaría la solicitud, consultaría la base de datos y devolvería los resultados, por ejemplo, en formato JSON.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si un usuario intenta acceder a una sección administrativa sin permisos, ¿qué debería hacer el Backend?",
        "opts": [
            "El Backend devolvería siempre un error 500 sin indicar qué información falló.",
            "El Backend guardaría los datos incorrectos en la base sin validarlos.",
            "El Backend eliminaría el formulario y pediría al usuario que lo complete de nuevo.",
            "Debería comprobar sus permisos y rechazar el acceso si no está autorizado, devolviendo una respuesta adecuada, como HTTP 403."
        ],
        "ans": 3,
        "exp": "Debería comprobar sus permisos y rechazar el acceso si no está autorizado, devolviendo una respuesta adecuada, como HTTP 403.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si el servidor recibe información incorrecta desde un formulario, ¿qué debería hacer?",
        "opts": [
            "Puede utilizar solamente el Frontend, que se conecta directamente al disco duro.",
            "Puede utilizar un navegador web, porque la base de datos se consulta desde la interfaz.",
            "Debería validar los datos, detectar los errores y devolver una respuesta indicando qué información no cumple las condiciones requeridas.",
            "Puede utilizar solamente archivos de texto, sin ningún tipo de consulta."
        ],
        "ans": 2,
        "exp": "Debería validar los datos, detectar los errores y devolver una respuesta indicando qué información no cumple las condiciones requeridas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si una aplicación necesita comunicarse con una base de datos, ¿qué componente puede utilizar?",
        "opts": [
            "Eliminaría la tabla y la crearía de nuevo con la nueva columna incluida.",
            "Modificaría la base de datos directamente y luego actualizaría el modelo manualmente.",
            "Ejecutaría migrate sin modificar el modelo, porque Django detecta la columna.",
            "Puede utilizar un ORM o consultas SQL para comunicarse con la base de datos y ejecutar las operaciones necesarias."
        ],
        "ans": 3,
        "exp": "Puede utilizar un ORM o consultas SQL para comunicarse con la base de datos y ejecutar las operaciones necesarias.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas agregar una nueva columna a una tabla utilizando Django, ¿qué pasos seguirías?",
        "opts": [
            "Implementaría solamente autorización, sin verificar la identidad de los usuarios.",
            "Implementaría solamente autenticación, sin asignar roles ni permisos a los usuarios.",
            "Modificaría el modelo correspondiente, ejecutaría makemigrations para generar el archivo de migración y después migrate para aplicar el cambio en la base de datos.",
            "Eliminaría los usuarios que no tienen permisos para liberar espacio en la base."
        ],
        "ans": 2,
        "exp": "Modificaría el modelo correspondiente, ejecutaría makemigrations para generar el archivo de migración y después migrate para aplicar el cambio en la base de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si una aplicación debe permitir que diferentes usuarios accedan a diferentes funcionalidades, ¿qué implementarías?",
        "opts": [
            "HTTP 200, que indica que el servidor se encuentra apagado.",
            "HTTP 404, que indica que el recurso fue creado correctamente.",
            "HTTP 400, que indica que el usuario no tiene conexión a internet.",
            "Implementaría autenticación para identificar a los usuarios y autorización para controlar sus permisos según sus roles."
        ],
        "ans": 3,
        "exp": "Implementaría autenticación para identificar a los usuarios y autorización para controlar sus permisos según sus roles.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si el servidor deja de responder debido a un error interno, ¿qué código HTTP podría devolver?",
        "opts": [
            "Eliminaría el usuario después de iniciar sesión para evitar accesos indebidos.",
            "HTTP 500, que indica un error interno del servidor.",
            "Utilizaría únicamente el nombre del usuario en cada solicitud, sin ningún otro dato.",
            "Utilizaría una sesión de navegador sin conexión, guardada solo en el celular."
        ],
        "ans": 1,
        "exp": "HTTP 500, que indica un error interno del servidor.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas que una aplicación mantenga la sesión de un usuario después de iniciar sesión, ¿qué utilizarías?",
        "opts": [
            "Una aplicación web que no puede conectarse a internet ni enviar datos al servidor.",
            "Una base de datos local que solo puede consultarse desde el mismo computador.",
            "Un archivo de texto que se envía por correo electrónico a cada usuario.",
            "Utilizaría un mecanismo de sesiones o autenticación mediante tokens, según la arquitectura de la aplicación."
        ],
        "ans": 3,
        "exp": "Utilizaría un mecanismo de sesiones o autenticación mediante tokens, según la arquitectura de la aplicación.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas que una aplicación intercambie información entre Android y una página web, ¿qué podrías implementar?",
        "opts": [
            "En el Frontend, porque el navegador impide que el usuario envíe datos incompletos.",
            "En la base de datos, usando un trigger que elimina los registros incompletos.",
            "Una API REST que permita a ambas aplicaciones enviar y recibir información mediante solicitudes HTTP, utilizando normalmente JSON.",
            "La validación en el Frontend es suficiente, porque los datos viajan cifrados por la red."
        ],
        "ans": 2,
        "exp": "Una API REST que permita a ambas aplicaciones enviar y recibir información mediante solicitudes HTTP, utilizando normalmente JSON.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "Si necesitas evitar que un usuario envíe datos incompletos, ¿dónde realizarías las validaciones?",
        "opts": [
            "Significa que el servidor conserva automáticamente la información de cada solicitud para el usuario.",
            "Significa que el protocolo no puede transmitir datos sin una base de datos.",
            "Significa que el protocolo solo permite una solicitud por cada usuario conectado.",
            "En el Backend, porque el servidor debe validar los datos independientemente de las comprobaciones que realice el Frontend."
        ],
        "ans": 3,
        "exp": "En el Backend, porque el servidor debe validar los datos independientemente de las comprobaciones que realice el Frontend.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué significa que HTTP sea un protocolo sin estado?",
        "opts": [
            "Es un protocolo de seguridad que cifra las solicitudes entre el navegador y el servidor.",
            "Es un formato de base de datos que guarda los datos en archivos binarios.",
            "Significa que cada solicitud es independiente y el protocolo no conserva automáticamente la información de las solicitudes anteriores. Para mantener el estado del usuario se utilizan mecanismos como sesiones o tokens.",
            "Es un lenguaje de programación para diseñar aplicaciones móviles nativas."
        ],
        "ans": 2,
        "exp": "Significa que cada solicitud es independiente y el protocolo no conserva automáticamente la información de las solicitudes anteriores. Para mantener el estado del usuario se utilizan mecanismos como sesiones o tokens.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué es REST?",
        "opts": [
            "Dependencia del navegador, uso de cookies obligatorias y comunicación en tiempo real.",
            "Uso exclusivo de POST, cifrado obligatorio y servidores únicos por aplicación.",
            "Es un estilo arquitectónico para diseñar sistemas distribuidos que exponen recursos mediante interfaces uniformes y utilizan operaciones HTTP.",
            "Separación de funciones, interfaz pública, comunicación con estado y uso de bases relacionales."
        ],
        "ans": 2,
        "exp": "Es un estilo arquitectónico para diseñar sistemas distribuidos que exponen recursos mediante interfaces uniformes y utilizan operaciones HTTP.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Cuáles son los principios más conocidos de REST?",
        "opts": [
            "Es un formato de imagen utilizado para representar gráficos vectoriales en la web.",
            "Es un protocolo que cifra la conexión entre el cliente y el servidor.",
            "Separación entre cliente y servidor; comunicación sin estado (stateless); interfaz uniforme; recursos identificados mediante URL; uso de representaciones de recursos; sistema por capas; caché cuando corresponde.",
            "Es un lenguaje de consulta que reemplaza a SQL en las bases de datos relacionales."
        ],
        "ans": 2,
        "exp": "Separación entre cliente y servidor; comunicación sin estado (stateless); interfaz uniforme; recursos identificados mediante URL; uso de representaciones de recursos; sistema por capas; caché cuando corresponde.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué significa que una API devuelva información en formato JSON?",
        "opts": [
            "Es un texto que describe el error ocurrido en la base de datos.",
            "Significa que los datos se entregan en una estructura organizada de texto que puede ser interpretada por diferentes lenguajes y aplicaciones.",
            "Es un código que identifica el navegador utilizado por el usuario.",
            "Es un número que indica el tamaño del archivo que se envía por la red."
        ],
        "ans": 1,
        "exp": "Significa que los datos se entregan en una estructura organizada de texto que puede ser interpretada por diferentes lenguajes y aplicaciones.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué es un código de estado HTTP?",
        "opts": [
            "1xx: éxito. 2xx: información. 3xx: errores del cliente. 4xx: redirecciones. 5xx: errores del servidor.",
            "1xx: redirecciones. 2xx: errores. 3xx: éxito. 4xx: información. 5xx: errores del cliente.",
            "1xx: errores del servidor. 2xx: redirecciones. 3xx: éxito. 4xx: información. 5xx: errores del cliente.",
            "Es un número que indica el resultado de una solicitud realizada al servidor."
        ],
        "ans": 3,
        "exp": "Es un número que indica el resultado de una solicitud realizada al servidor.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Cuáles son las principales categorías de códigos HTTP?",
        "opts": [
            "Que el recurso fue eliminado correctamente del servidor.",
            "Que el servidor no puede procesar la solicitud por falta de memoria.",
            "Que la solicitud fue redirigida a otra dirección.",
            "1xx: información. 2xx: solicitudes exitosas. 3xx: redirecciones. 4xx: errores del cliente. 5xx: errores del servidor."
        ],
        "ans": 3,
        "exp": "1xx: información. 2xx: solicitudes exitosas. 3xx: redirecciones. 4xx: errores del cliente. 5xx: errores del servidor.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué significa HTTP 200?",
        "opts": [
            "Que la solicitud fue redirigida a una página de error.",
            "Que se eliminó un recurso correctamente.",
            "Que la solicitud fue procesada correctamente.",
            "Que el servidor está en mantenimiento y no responde."
        ],
        "ans": 2,
        "exp": "Que la solicitud fue procesada correctamente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué significa HTTP 201?",
        "opts": [
            "Que el servidor está procesando la solicitud y responderá más tarde.",
            "Que el usuario no tiene permisos para acceder al recurso solicitado.",
            "Que la solicitud se envió correctamente, pero no hay datos disponibles.",
            "Que se creó un recurso correctamente."
        ],
        "ans": 3,
        "exp": "Que se creó un recurso correctamente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué significa HTTP 400?",
        "opts": [
            "Que el servidor encontró un error interno al procesar la solicitud.",
            "Que el servidor no puede procesar la solicitud debido a un problema en los datos o en su estructura.",
            "Que la solicitud requiere autenticación para ser procesada.",
            "Que el recurso solicitado fue creado correctamente."
        ],
        "ans": 1,
        "exp": "Que el servidor no puede procesar la solicitud debido a un problema en los datos o en su estructura.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué significa HTTP 401?",
        "opts": [
            "Que el recurso fue movido a una nueva dirección.",
            "Que la solicitud requiere autenticación o que las credenciales presentadas no son válidas.",
            "Que el servidor no puede procesar la solicitud por un error interno.",
            "Que el servidor entiende la solicitud, pero el usuario no tiene permisos suficientes."
        ],
        "ans": 1,
        "exp": "Que la solicitud requiere autenticación o que las credenciales presentadas no son válidas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué significa HTTP 403?",
        "opts": [
            "Que el servidor entiende la solicitud, pero el recurso fue eliminado.",
            "Que el servidor entiende la solicitud, pero rechaza el acceso por falta de permisos.",
            "Que la solicitud fue procesada correctamente con redirección.",
            "Que el usuario debe iniciar sesión para acceder al recurso."
        ],
        "ans": 1,
        "exp": "Que el servidor entiende la solicitud, pero rechaza el acceso por falta de permisos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué significa HTTP 404?",
        "opts": [
            "Que el servidor entiende la solicitud, pero no tiene permisos.",
            "Que el recurso solicitado no fue encontrado.",
            "Que la solicitud fue procesada, aunque el recurso está vacío.",
            "Que el recurso solicitado existe, pero el servidor no lo puede procesar."
        ],
        "ans": 1,
        "exp": "Que el recurso solicitado no fue encontrado.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué significa HTTP 500?",
        "opts": [
            "Que ocurrió un error interno en el servidor.",
            "Que el usuario envió datos en un formato que el navegador no reconoce.",
            "Que la solicitud fue procesada correctamente con un nuevo recurso.",
            "Que el servidor fue apagado por el administrador durante la solicitud."
        ],
        "ans": 0,
        "exp": "Que ocurrió un error interno en el servidor.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué es la validación de datos en Backend?",
        "opts": [
            "Es la comprobación de que el navegador tenga activada la función de JavaScript.",
            "Es el cifrado de los datos antes de guardarlos en el servidor.",
            "Es el proceso de comprobar que la información recibida cumpla con los formatos, tipos, condiciones y reglas del sistema antes de procesarla o almacenarla.",
            "Es la asignación automática de permisos a los usuarios nuevos."
        ],
        "ans": 2,
        "exp": "Es el proceso de comprobar que la información recibida cumpla con los formatos, tipos, condiciones y reglas del sistema antes de procesarla o almacenarla.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Por qué no basta con validar los datos solamente en el Frontend?",
        "opts": [
            "Porque el navegador no puede enviar datos al servidor si el Frontend no valida los campos.",
            "Porque el Frontend siempre cifra los datos de forma incorrecta.",
            "Porque el Backend no puede recibir datos que no vengan de un formulario HTML.",
            "Porque las validaciones del Frontend pueden ser modificadas o evitadas. El Backend debe realizar sus propias comprobaciones para proteger la integridad de la información."
        ],
        "ans": 3,
        "exp": "Porque las validaciones del Frontend pueden ser modificadas o evitadas. El Backend debe realizar sus propias comprobaciones para proteger la integridad de la información.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué es una inyección SQL?",
        "opts": [
            "Es un ataque en el que se modifican los estilos CSS de la página.",
            "Es un error de diseño de la interfaz que impide mostrar correctamente los formularios.",
            "Es un tipo de ataque en el que un usuario introduce instrucciones SQL maliciosas en entradas que la aplicación incorpora incorrectamente a una consulta, pudiendo manipular las operaciones de la base de datos.",
            "Es un método para copiar la base de datos completa a un servidor externo."
        ],
        "ans": 2,
        "exp": "Es un tipo de ataque en el que un usuario introduce instrucciones SQL maliciosas en entradas que la aplicación incorpora incorrectamente a una consulta, pudiendo manipular las operaciones de la base de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Cómo se puede prevenir una inyección SQL?",
        "opts": [
            "Utilizando contraseñas largas, porque así la base de datos no puede ser consultada.",
            "Utilizando consultas parametrizadas u ORM, validando entradas y evitando construir consultas mediante concatenación directa de datos proporcionados por el usuario.",
            "Evitando guardar datos en la base, porque así no hay nada que consultar.",
            "Cambiando el nombre de las tablas cada cierto tiempo para despistar al atacante."
        ],
        "ans": 1,
        "exp": "Utilizando consultas parametrizadas u ORM, validando entradas y evitando construir consultas mediante concatenación directa de datos proporcionados por el usuario.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué es el hashing de contraseñas?",
        "opts": [
            "Es el proceso de guardar la contraseña dentro de un archivo de configuración sin cifrar.",
            "Es un proceso que transforma una contraseña en un valor hash mediante un algoritmo diseñado para almacenar credenciales de forma segura. Se deben utilizar algoritmos específicos para contraseñas, como Argon2 o bcrypt, con sus mecanismos de sal.",
            "Es la transformación de la contraseña en texto cifrado que se puede revertir fácilmente.",
            "Es el envío de la contraseña al navegador para que la muestre al usuario."
        ],
        "ans": 1,
        "exp": "Es un proceso que transforma una contraseña en un valor hash mediante un algoritmo diseñado para almacenar credenciales de forma segura. Se deben utilizar algoritmos específicos para contraseñas, como Argon2 o bcrypt, con sus mecanismos de sal.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué diferencia existe entre cifrado y hashing?",
        "opts": [
            "El cifrado es un proceso que no se puede revertir, mientras que el hashing sí.",
            "Es un método para convertir un texto en un formato más corto que se puede descifrar.",
            "El cifrado permite recuperar la información original mediante una clave de descifrado. El hashing es un proceso unidireccional que no está diseñado para recuperar el valor original.",
            "Son lo mismo: ambos transforman los datos con una clave que el servidor guarda."
        ],
        "ans": 2,
        "exp": "El cifrado permite recuperar la información original mediante una clave de descifrado. El hashing es un proceso unidireccional que no está diseñado para recuperar el valor original.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué es CORS?",
        "opts": [
            "Es un mecanismo que permite a cualquier sitio web acceder a los datos del usuario sin restricción.",
            "Es una cookie que guarda las preferencias del usuario en el servidor.",
            "Es un mecanismo de seguridad de los navegadores que controla cuándo una página web puede realizar solicitudes a recursos ubicados en otro origen.",
            "Es un protocolo de cifrado utilizado solamente en aplicaciones móviles."
        ],
        "ans": 2,
        "exp": "Es un mecanismo de seguridad de los navegadores que controla cuándo una página web puede realizar solicitudes a recursos ubicados en otro origen.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué es un log?",
        "opts": [
            "Es una variable que se utiliza para contar los usuarios conectados.",
            "Es un programa que cifra las solicitudes que llegan desde el navegador.",
            "Es un registro de eventos que permite conocer qué ocurrió durante la ejecución de una aplicación, facilitando la detección y análisis de errores.",
            "Es un archivo que guarda la configuración de la base de datos en el servidor."
        ],
        "ans": 2,
        "exp": "Es un registro de eventos que permite conocer qué ocurrió durante la ejecución de una aplicación, facilitando la detección y análisis de errores.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué es una variable de entorno?",
        "opts": [
            "Es una variable que se escribe directamente en el código fuente de la aplicación.",
            "Es una variable externa al código que permite configurar una aplicación, por ejemplo, almacenar la configuración de conexión a una base de datos.",
            "Es una función que cifra la base de datos antes de cada consulta.",
            "Es una cookie que el servidor guarda en el navegador del usuario."
        ],
        "ans": 1,
        "exp": "Es una variable externa al código que permite configurar una aplicación, por ejemplo, almacenar la configuración de conexión a una base de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Por qué no se deben guardar contraseñas directamente en el código?",
        "opts": [
            "Porque pueden quedar expuestas al compartir el código, subirlo a repositorios o permitir accesos no autorizados. Se deben utilizar mecanismos seguros de configuración y gestión de secretos.",
            "Porque el código fuente siempre se cifra automáticamente al subirlo a un repositorio.",
            "Porque el servidor no puede leer contraseñas almacenadas en el código.",
            "Porque las contraseñas en el código solo se pueden usar en el navegador."
        ],
        "ans": 0,
        "exp": "Porque pueden quedar expuestas al compartir el código, subirlo a repositorios o permitir accesos no autorizados. Se deben utilizar mecanismos seguros de configuración y gestión de secretos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué es la escalabilidad de una aplicación?",
        "opts": [
            "Es la velocidad con la que el navegador carga las imágenes de la página.",
            "Es la capacidad de una aplicación para cambiar de lenguaje de programación sin reescribir el código.",
            "Es la capacidad de una aplicación para soportar un aumento de usuarios, solicitudes o carga de trabajo sin perder su funcionamiento adecuado.",
            "Es el número de pantallas que puede mostrar una aplicación al mismo tiempo."
        ],
        "ans": 2,
        "exp": "Es la capacidad de una aplicación para soportar un aumento de usuarios, solicitudes o carga de trabajo sin perder su funcionamiento adecuado.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué es la paginación en una API?",
        "opts": [
            "Es un mecanismo que divide grandes conjuntos de resultados en páginas más pequeñas para evitar entregar demasiados registros en una sola respuesta.",
            "Es un mecanismo que bloquea el acceso a la API después de cierto número de solicitudes.",
            "Es una técnica que ordena los registros alfabéticamente antes de mostrarlos.",
            "Es una forma de cifrar los resultados para que no puedan ser leídos por otros usuarios."
        ],
        "ans": 0,
        "exp": "Es un mecanismo que divide grandes conjuntos de resultados en páginas más pequeñas para evitar entregar demasiados registros en una sola respuesta.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Profundización",
        "diff": "hard",
        "q": "¿Qué es la caché?",
        "opts": [
            "Es un mecanismo que almacena temporalmente información para acelerar futuras consultas y reducir el trabajo del servidor o de la base de datos.",
            "Es un registro de cada solicitud realizada por el usuario durante la sesión.",
            "Es un archivo de texto que se envía por correo electrónico al administrador.",
            "Es un método que impide que el navegador guarde información de la página visitada."
        ],
        "ans": 0,
        "exp": "Es un mecanismo que almacena temporalmente información para acelerar futuras consultas y reducir el trabajo del servidor o de la base de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿El Backend es lo mismo que la base de datos?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. El Backend contiene la lógica del servidor y puede comunicarse con una o varias bases de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿El Frontend puede comunicarse directamente con el Backend?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 0,
        "exp": "Sí. Normalmente lo hace mediante solicitudes HTTP a una API o rutas del servidor.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿Una API es necesariamente REST?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. REST es un estilo arquitectónico, pero existen otros tipos de API.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿GET debería modificar los datos del servidor?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No debería utilizarse para modificar recursos; su finalidad es consultar información.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿POST solamente sirve para iniciar sesión?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Puede utilizarse para crear recursos y realizar diferentes operaciones.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿PUT y PATCH son iguales?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. PUT reemplaza un recurso y PATCH modifica parcialmente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿El Backend confía en las validaciones del Frontend?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Debe validar nuevamente los datos recibidos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿Autenticación y autorización son lo mismo?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Una verifica identidad y la otra permisos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿HTTP y HTTPS son iguales?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. HTTPS agrega protección mediante TLS.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿Una sesión es lo mismo que una cookie?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Una sesión almacena información asociada al usuario; una cookie es un mecanismo del navegador que puede guardar el identificador de esa sesión.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿JSON es un lenguaje de programación?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Es un formato de intercambio de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿El ORM elimina completamente la necesidad de SQL?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Facilita el acceso a los datos, pero las consultas SQL siguen existiendo y pueden ser necesarias.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿Un error 404 significa que el servidor está apagado?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Significa que el recurso solicitado no fue encontrado.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿Un error 500 es responsabilidad necesariamente del usuario?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Indica un problema interno del servidor.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿El hashing permite recuperar la contraseña original?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. No está diseñado para revertir el proceso.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿Una API puede ser utilizada por una aplicación móvil?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 0,
        "exp": "Sí. Puede permitir la comunicación entre aplicaciones móviles y servidores.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿Un servidor debe tener siempre una base de datos?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Puede procesar solicitudes sin utilizar una base de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿Todos los endpoints utilizan POST?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Pueden utilizar diferentes métodos HTTP según la operación.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Preguntas capciosas",
        "diff": "medium",
        "q": "¿Un token garantiza automáticamente que el usuario tenga permisos?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Se debe verificar su validez y comprobar los permisos correspondientes.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Backend - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace este código?",
        "opts": [
            "Crea un nuevo usuario en la base de datos con los datos enviados por el cliente.",
            "Obtiene todos los usuarios mediante el ORM de Django y devuelve sus datos en formato JSON.",
            "Obtiene los usuarios en formato HTML y los muestra directamente en la página.",
            "Elimina todos los usuarios de la base de datos y devuelve una lista vacía."
        ],
        "ans": 1,
        "exp": "Obtiene todos los usuarios mediante el ORM de Django y devuelve sus datos en formato JSON.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">def obtener_usuarios(request):\n    usuarios = Usuario.objects.all()\n    return JsonResponse({\"usuarios\": list(usuarios.values())})</div></div>"
    },

    {
        "profe": false,
        "unit": "Backend - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace este código?",
        "opts": [
            "Busca un usuario existente y actualiza su nombre sin crear registros.",
            "Comprueba si la solicitud es POST, obtiene el nombre enviado y crea un registro en la base de datos.",
            "Elimina el usuario cuyo nombre fue enviado en la solicitud POST.",
            "Muestra un formulario vacío para que el usuario ingrese un nuevo nombre."
        ],
        "ans": 1,
        "exp": "Comprueba si la solicitud es POST, obtiene el nombre enviado y crea un registro en la base de datos.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">def crear_usuario(request):\n    if request.method == \"POST\":\n        nombre = request.POST.get(\"nombre\")\n        Usuario.objects.create(nombre=nombre)</div></div>"
    },

    {
        "profe": false,
        "unit": "Backend - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace esta instrucción?",
        "opts": [
            "Crea un nuevo usuario con el campo activo en True.",
            "Elimina los usuarios que tienen el campo activo en True.",
            "Consulta los usuarios cuyo campo activo tiene el valor False.",
            "Consulta los usuarios cuyo campo activo tiene el valor True."
        ],
        "ans": 3,
        "exp": "Consulta los usuarios cuyo campo activo tiene el valor True.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">usuarios = Usuario.objects.filter(activo=True)</div></div>"
    },

    {
        "profe": false,
        "unit": "Backend - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace esta instrucción?",
        "opts": [
            "Obtiene todos los usuarios y los filtra según el campo id.",
            "Crea un usuario nuevo con id 1 y lo guarda en la base de datos.",
            "Elimina el usuario con id 1 del sistema sin devolver ningún resultado.",
            "Busca un usuario cuyo identificador sea 1. Si no existe o hay más de una coincidencia, puede generar una excepción."
        ],
        "ans": 3,
        "exp": "Busca un usuario cuyo identificador sea 1. Si no existe o hay más de una coincidencia, puede generar una excepción.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">usuario = Usuario.objects.get(id=1)</div></div>"
    },

    {
        "profe": false,
        "unit": "Backend - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace este código?",
        "opts": [
            "Detiene el programa de forma permanente cuando intenta dividir por cero.",
            "Ejecuta la división y muestra el resultado de 10 entre 0 en pantalla.",
            "Evita la división por cero cambiando el divisor por el valor 1.",
            "Utiliza manejo de excepciones para controlar el error que se produce al intentar dividir por cero."
        ],
        "ans": 3,
        "exp": "Utiliza manejo de excepciones para controlar el error que se produce al intentar dividir por cero.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">try:\n    resultado = 10 / 0\nexcept ZeroDivisionError:\n    print(\"No se puede dividir por cero\")</div></div>"
    },

    {
        "profe": false,
        "unit": "Backend - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace este código?",
        "opts": [
            "Define una clase que hereda de JsonResponse y muestra el mensaje en la consola.",
            "Define una vista que devuelve una respuesta HTTP con información en formato JSON.",
            "Crea una URL que redirige automáticamente a otra página del sitio.",
            "Define una función que solicita datos al usuario mediante un formulario HTML."
        ],
        "ans": 1,
        "exp": "Define una vista que devuelve una respuesta HTTP con información en formato JSON.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">from django.http import JsonResponse\n\ndef respuesta(request):\n    return JsonResponse({\"mensaje\": \"Correcto\"})</div></div>"
    },

    {
        "profe": false,
        "unit": "Backend - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace esta ruta?",
        "opts": [
            "Asocia la vista lista_usuarios con la dirección usuarios/ dentro de una lista de rutas.",
            "Asocia la dirección usuarios/ con la vista lista_usuarios, para que Django sepa qué función ejecutar cuando recibe una solicitud que coincide con esa ruta.",
            "Crea una nueva vista llamada usuarios que devuelve la lista de rutas del sistema.",
            "Elimina la dirección usuarios/ del servidor para proteger la vista lista_usuarios."
        ],
        "ans": 1,
        "exp": "Asocia la dirección usuarios/ con la vista lista_usuarios, para que Django sepa qué función ejecutar cuando recibe una solicitud que coincide con esa ruta.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">path(\"usuarios/\", views.lista_usuarios)</div></div>"
    },



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
    },

    P('APIs - Códigos de estado', 'easy', '¿Qué código indica que un recurso fue creado correctamente?',
        ['200', '201', '204', '302'], 1,
        '201 Created se usa tras un POST exitoso. 200 OK es respuesta general correcta.'),
      P('APIs - Códigos de estado', 'medium', '¿Cuál es la diferencia entre 401 y 403?',
        ['401: no autenticado (falta o es inválido el login); 403: autenticado pero sin permiso', '401 es sin permiso; 403 es sin login', 'Son iguales', '403 es un error del servidor'], 0,
        'Pregunta clave: ¿quién eres? (401) frente a ¿puedes hacer esto? (403).',
        TABLA([['Código', 'Significado', 'Ejemplo'], ['401 Unauthorized', 'Falta autenticación', 'Token ausente o vencido'], ['403 Forbidden', 'Sin permisos', 'Usuario normal intenta borrar un admin']])),
      P('APIs - Códigos de estado', 'medium', '¿Cuándo se usa el código 204 No Content?',
        ['Cuando la petición fue exitosa pero la respuesta no tiene cuerpo (por ejemplo, tras un DELETE)', 'Cuando el recurso no existe', 'Cuando hay un error interno del servidor', 'Cuando se redirige al usuario'], 0,
        'Es común en DELETE y PUT cuando no se devuelve el recurso modificado.'),
      P('APIs - Métodos y diseño', 'medium', '¿Qué significa que un método HTTP sea idempotente?',
        ['Repetir la misma petición produce el mismo efecto en el servidor', 'Siempre devuelve error', 'No necesita autenticación', 'Crea un nuevo recurso cada vez'], 0,
        'Es importante ante reintentos de red: repetir un PUT no duplica datos, pero repetir un POST sí podría hacerlo.',
        TABLA([['Método', 'Idempotente', 'Seguro (no modifica)'], ['GET', 'Sí', 'Sí'], ['PUT', 'Sí', 'No'], ['DELETE', 'Sí', 'No'], ['POST', 'No', 'No']])),
      P('APIs - Métodos y diseño', 'medium', '¿Cuál es una buena práctica de versionado de API?',
        ['Incluir la versión en la URL o en las cabeceras, por ejemplo /api/v1/', 'No versionar nunca', 'Cambiar la versión en cada petición', 'Usar el nombre del desarrollador'], 0,
        'Versionar permite cambiar la API sin romper a los clientes que ya la usan.'),
      P('APIs - Métodos y diseño', 'hard', '¿Cuál es la diferencia principal entre REST y GraphQL?',
        ['REST usa varios endpoints con respuestas fijas; GraphQL usa un endpoint y el cliente pide solo los campos que necesita', 'GraphQL no usa HTTP', 'REST solo funciona con XML', 'Son idénticos'], 0,
        'GraphQL evita el overfetching (traer datos de más) y el underfetching (tener que hacer varias peticiones).',
        TABLA([['Aspecto', 'REST', 'GraphQL'], ['Endpoints', 'Varios (uno por recurso)', 'Uno'], ['Datos', 'Respuesta fija', 'El cliente elige los campos'], ['Caché HTTP', 'Sencilla', 'Más compleja']])),
      P('APIs - Seguridad', 'medium', '¿Cuál es la diferencia entre autenticación con sesiones y con JWT?',
        ['Sesiones guardan el estado en el servidor; JWT lleva la información firmada en el token y el servidor no necesita guardarla', 'JWT siempre se guarda en la base de datos', 'Son lo mismo', 'Las sesiones nunca usan cookies'], 0,
        'Los JWT son stateless (sin estado en el servidor), pero no se pueden revocar fácilmente antes de que expiren.'),
      P('APIs - Seguridad', 'medium', '¿Cómo deben guardarse las contraseñas en una base de datos?',
        ['En texto plano para poder recuperarlas', 'Con un hash lento y con sal, como bcrypt o Argon2', 'Con MD5 sin sal', 'Cifradas con una clave fija en el código'], 1,
        'Un hash no se puede revertir. La sal evita ataques con tablas precalculadas; los algoritmos lentos dificultan la fuerza bruta.'),
      P('APIs - Seguridad', 'hard', '¿Cuál es la forma correcta de evitar SQL Injection?',
        ['Concatenar la entrada del usuario directamente en la consulta', 'Usar consultas parametrizadas (prepared statements)', 'Ocultar el nombre de la base de datos', 'Ocultar los errores solo en el navegador'], 1,
        'Con parámetros, la entrada se trata como dato y nunca como parte del código SQL.'),
      P('APIs - Seguridad', 'medium', '¿Qué cabecera debe enviar el servidor para permitir peticiones desde otro dominio (CORS)?',
        ['Access-Control-Allow-Origin', 'Set-Cookie HttpOnly', 'Content-Length', 'Cache-Control: no-store'], 0,
        'Sin esta cabecera, el navegador bloquea la respuesta a la aplicación de otro origen.'),
    
      P('Arquitectura backend', 'medium', 'En MVC, ¿qué capa coordina la petición, usa el modelo y elige la vista?',
        ['Model', 'View', 'Controller', 'Router'], 2,
        'Model: datos y reglas. View: presentación. Controller: coordina la entrada y la respuesta.'),
      P('Arquitectura backend', 'medium', '¿Qué es un middleware?',
        ['Una función que se ejecuta entre la petición y la respuesta para procesar o validar', 'Una base de datos intermedia', 'Un tipo de cookie', 'Un servidor de correos'], 0,
        'Ejemplos: autenticación, registro de logs, validación de datos, manejo de CORS.'),
      P('Arquitectura backend', 'medium', '¿Cuál es una ventaja de los microservicios frente a un monolito?',
        ['Despliegue y escalado independiente de cada servicio', 'Son siempre más simples de depurar', 'No necesitan comunicación por red', 'Un solo despliegue para todo siempre'], 0,
        'A cambio, aparecen problemas de red, consistencia de datos y observabilidad.',
        TABLA([['Aspecto', 'Monolito', 'Microservicios'], ['Despliegue', 'Único', 'Independiente por servicio'], ['Escalado', 'Todo el sistema', 'Solo el servicio necesario'], ['Complejidad', 'Menor', 'Mayor']])),
      P('Arquitectura backend', 'medium', '¿Qué es la inyección de dependencias?',
        ['Pasar las dependencias a una clase desde afuera en lugar de crearlas dentro', 'Insertar código SQL en el cliente', 'Un tipo de herencia', 'Un método HTTP'], 0,
        'Facilita las pruebas (puedes inyectar un mock) y reduce el acoplamiento.'),
      P('Arquitectura backend', 'hard', '¿Qué es el escalado horizontal en un backend?',
        ['Agregar más instancias del servicio detrás de un balanceador de carga', 'Cambiar a una CPU más rápida', 'Eliminar la base de datos', 'Reducir el número de rutas'], 0,
        'Escalar horizontalmente requiere que el servicio sea stateless o que el estado esté fuera de la instancia (base de datos, caché).'),
      P('Arquitectura backend', 'medium', '¿Qué es una cola de mensajes (por ejemplo, RabbitMQ)?',
        ['Un mecanismo para desacoplar servicios y procesar tareas de forma asíncrona', 'Un lugar para guardar archivos grandes', 'Un reemplazo de la base de datos', 'Un motor de renderizado HTML'], 0,
        'Ejemplo: al registrar un pedido, se encola el envío de correo para que la respuesta sea inmediata.'),
      P('Arquitectura backend', 'medium', '¿Cuál es la diferencia entre un contenedor y una máquina virtual?',
        ['El contenedor comparte el kernel del sistema anfitrión; la VM incluye un sistema operativo completo', 'Son idénticos', 'La VM comparte el kernel; el contenedor no', 'Los contenedores solo funcionan en Windows'], 0,
        'Por eso los contenedores (Docker) arrancan más rápido y ocupan menos espacio.',
        TABLA([['Aspecto', 'Contenedor', 'Máquina virtual'], ['Sistema operativo', 'Comparte el del host', 'Propio completo'], ['Arranque', 'Segundos', 'Minutos'], ['Tamaño', 'Ligero', 'Pesado']])),
      P('Arquitectura backend', 'medium', '¿Qué es un ORM?',
        ['Herramienta que mapea objetos del código a tablas de la base de datos', 'Un lenguaje de programación', 'Un servidor web', 'Un tipo de caché'], 0,
        'Ejemplos: Django ORM, Hibernate (Java), Eloquent (Laravel), SQLAlchemy (Python).'),
      P('Arquitectura backend', 'medium', '¿Por qué usar transacciones al transferir dinero entre dos cuentas?',
        ['Para que ambas operaciones se completen o ninguna (atomicidad)', 'Para acelerar la base de datos', 'Para evitar usar índices', 'Para cifrar la conexión'], 0,
        'Si se descuenta de una cuenta y falla el abono a la otra, la transacción se revierte con ROLLBACK.'),
    
      P('Node.js y Python', 'medium', '¿Qué modelo usa Node.js para operaciones de entrada/salida?',
        ['Asíncrono y no bloqueante, con un event loop', 'Un hilo por petición obligatoriamente', 'Síncrono y bloqueante siempre', 'Solo ejecuta código en el navegador'], 0,
        'Node.js procesa muchas conexiones con pocos hilos, ideal para I/O intensivo; no es ideal para cálculos pesados de CPU.'),
      P('Node.js y Python', 'medium', '¿Cuál es la diferencia entre Promise.all y Promise.allSettled?',
        ['Promise.all falla si una promesa falla; allSettled espera a todas y devuelve el estado de cada una', 'allSettled rechaza al primer error; all espera todas', 'Son idénticas', 'all solo funciona con números'], 0,
        'Usa allSettled cuando quieres los resultados parciales aunque algunas fallen.'),
      P('Node.js y Python', 'medium', '¿Qué es el GIL en Python?',
        ['Un bloqueo global que permite que un solo hilo ejecute bytecode de Python a la vez', 'Un módulo para HTTP', 'Un tipo de lista', 'Un framework web'], 0,
        'Por eso, para paralelismo real de CPU en Python se usan procesos (multiprocessing) en vez de hilos.'),
      P('Node.js y Python', 'medium', '¿Qué comando crea el archivo package.json en un proyecto Node.js?',
        ['npm init', 'npm start', 'node run', 'npm build'], 0,
        'npm init es interactivo; npm init -y lo crea con valores por defecto.'),
    
      P('Caché y rendimiento', 'medium', '¿Qué es el patrón cache-aside?',
        ['La app consulta la caché primero y, si no está, va a la base y guarda el resultado', 'Una caché que siempre se borra al reiniciar', 'Copiar toda la base en memoria', 'Un tipo de índice SQL'], 0,
        'Es uno de los patrones más usados con Redis.'),
      P('Java y Spring', 'medium', '¿Qué anotación de Spring marca una clase como controlador REST?',
        ['@RestController', '@Entity', '@Repository', '@Bean'], 0,
        '@RestController combina @Controller y @ResponseBody, así cada método devuelve datos (JSON), no vistas.'),
      P('Operaciones', 'medium', '¿Para qué sirve un balanceador de carga?',
        ['Repartir las peticiones entre varias instancias del servicio', 'Comprimir archivos', 'Crear backups', 'Cifrar las contraseñas'], 0,
        'Mejora la disponibilidad: si una instancia cae, las demás siguen atendiendo.'),
        

]

export default preguntas_backend;