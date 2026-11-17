// Base de Datos con Django (ORM, modelos, migraciones, consultas)
// Campos: unit, diff, q, opts, ans (índice de la correcta), exp, extra (HTML opcional con comparaciones)

const P = (unit, diff, q, opts, ans, exp, extra = '') => ({
  profe: false, unit, diff, q, opts, ans, exp, extra,
});

const TABLA = (filas) => `<table style='width:100%;border-collapse:collapse;margin-top:8px'>${filas.map((f, i) =>
  '<tr>' + f.map(c => i === 0
    ? `<th style='border:1px solid #888;padding:4px;text-align:left'>${c}</th>`
    : `<td style='border:1px solid #888;padding:4px'>${c}</td>`).join('') + '</tr>').join('')}</table>`;

const preguntas_django_bd = [
    // ==================== AGREGADAS DESDE DOCUMENTO DE ESTUDIO (112 preguntas) ====================
    {
        "profe": false,
        "unit": "Django - Preguntas confirmadas",
        "diff": "easy",
        "q": "¿Qué es CSRF y cómo lo mitiga Django?",
        "opts": [
            "Es una herramienta que copia la base de datos en otro servidor.",
            "Es un ataque que cifra las contraseñas de los usuarios antes de guardarlas.",
            "CSRF significa Cross-Site Request Forgery o falsificación de petición entre sitios. Es un ataque en el que un sitio malicioso intenta que un usuario que ya inició sesión realice una acción sin su consentimiento. Django lo previene mediante un token CSRF que comprueba que las solicitudes provengan de una fuente autorizada. Ejemplo: si un usuario inició sesión en un sitio bancario, una página maliciosa podría intentar enviar una solicitud para transferir dinero; la protección CSRF ayuda a impedir esa solicitud no autorizada.",
            "Es un mecanismo que limita el número de solicitudes que puede enviar un usuario."
        ],
        "ans": 2,
        "exp": "CSRF significa Cross-Site Request Forgery o falsificación de petición entre sitios. Es un ataque en el que un sitio malicioso intenta que un usuario que ya inició sesión realice una acción sin su consentimiento. Django lo previene mediante un token CSRF que comprueba que las solicitudes provengan de una fuente autorizada. Ejemplo: si un usuario inició sesión en un sitio bancario, una página maliciosa podría intentar enviar una solicitud para transferir dinero; la protección CSRF ayuda a impedir esa solicitud no autorizada.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es Django?",
        "opts": [
            "Es un servidor de bases de datos que almacena las tablas de la aplicación.",
            "Es un editor de código que permite escribir plantillas HTML.",
            "Es un lenguaje de programación independiente que se ejecuta sin Python.",
            "Es un framework de desarrollo web escrito en Python que permite crear aplicaciones web utilizando una estructura organizada y herramientas incorporadas."
        ],
        "ans": 3,
        "exp": "Es un framework de desarrollo web escrito en Python que permite crear aplicaciones web utilizando una estructura organizada y herramientas incorporadas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un framework?",
        "opts": [
            "Es un servidor que recibe las solicitudes del navegador.",
            "Es un lenguaje de programación que reemplaza a Python en proyectos web.",
            "Es una estructura de trabajo que proporciona herramientas, componentes y reglas para facilitar el desarrollo de aplicaciones.",
            "Es una base de datos que guarda las configuraciones del proyecto."
        ],
        "ans": 2,
        "exp": "Es una estructura de trabajo que proporciona herramientas, componentes y reglas para facilitar el desarrollo de aplicaciones.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un proyecto en Django?",
        "opts": [
            "Es un módulo que contiene una única funcionalidad específica, como los reportes.",
            "Es una plantilla que muestra la información al usuario final.",
            "Es un archivo que almacena las migraciones de la base de datos.",
            "Es la estructura general de una aplicación web. Contiene la configuración principal y las aplicaciones que forman parte del sistema."
        ],
        "ans": 3,
        "exp": "Es la estructura general de una aplicación web. Contiene la configuración principal y las aplicaciones que forman parte del sistema.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una aplicación en Django?",
        "opts": [
            "Es un archivo HTML que se muestra al usuario en el navegador.",
            "Es un servidor que ejecuta el proyecto de forma independiente.",
            "Es un módulo que contiene una funcionalidad específica del proyecto, como usuarios, productos o reportes.",
            "Es la configuración general del sistema, con las bases de datos y la seguridad."
        ],
        "ans": 2,
        "exp": "Es un módulo que contiene una funcionalidad específica del proyecto, como usuarios, productos o reportes.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un modelo (Model)?",
        "opts": [
            "Es el archivo HTML que muestra los datos en el navegador.",
            "Es la dirección que el usuario escribe para acceder a la aplicación.",
            "Es la parte que procesa la solicitud y decide qué respuesta devolver.",
            "Es la parte que define la estructura de los datos y cómo se almacenan en la base de datos."
        ],
        "ans": 3,
        "exp": "Es la parte que define la estructura de los datos y cómo se almacenan en la base de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una vista (View)?",
        "opts": [
            "Es la parte que recibe una solicitud, procesa la información y devuelve una respuesta.",
            "Es el archivo de configuración donde se guardan las rutas del proyecto.",
            "Es el archivo que define la estructura de las tablas de la base de datos.",
            "Es la interfaz gráfica que muestra el panel de administración de Django."
        ],
        "ans": 0,
        "exp": "Es la parte que recibe una solicitud, procesa la información y devuelve una respuesta.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una plantilla (Template)?",
        "opts": [
            "Es la parte que define la estructura de los datos en la base de datos.",
            "Es la función que recibe la solicitud y procesa la información.",
            "Es un archivo que define cómo se presenta la información al usuario, generalmente mediante HTML.",
            "Es la configuración que indica qué aplicaciones están instaladas."
        ],
        "ans": 2,
        "exp": "Es un archivo que define cómo se presenta la información al usuario, generalmente mediante HTML.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una URL en Django?",
        "opts": [
            "Es el archivo que guarda los datos de sesión del usuario.",
            "Es el código que se ejecuta cuando se produce un error en el servidor.",
            "Es la dirección que permite acceder a una ruta específica de la aplicación. Django utiliza esa ruta para determinar qué vista debe ejecutarse.",
            "Es el modelo que define las tablas y sus columnas en la base de datos."
        ],
        "ans": 2,
        "exp": "Es la dirección que permite acceder a una ruta específica de la aplicación. Django utiliza esa ruta para determinar qué vista debe ejecutarse.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es ORM?",
        "opts": [
            "Es un servidor web que gestiona las solicitudes entrantes.",
            "Es una función que valida los datos enviados por el usuario en un formulario.",
            "Es un archivo que registra los cambios realizados en las plantillas HTML.",
            "Significa Object-Relational Mapping. Permite trabajar con la base de datos utilizando objetos y clases de Python, sin tener que escribir todas las consultas SQL directamente."
        ],
        "ans": 3,
        "exp": "Significa Object-Relational Mapping. Permite trabajar con la base de datos utilizando objetos y clases de Python, sin tener que escribir todas las consultas SQL directamente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una migración?",
        "opts": [
            "Es una vista que procesa las solicitudes de los usuarios.",
            "Es un modelo que define las relaciones entre tablas de la base de datos.",
            "Es un archivo que registra cambios en la estructura de los modelos para poder aplicarlos a la base de datos.",
            "Es un archivo HTML que presenta los datos en pantalla."
        ],
        "ans": 2,
        "exp": "Es un archivo que registra cambios en la estructura de los modelos para poder aplicarlos a la base de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es el administrador de Django?",
        "opts": [
            "Es una interfaz administrativa incorporada que permite gestionar los registros de la base de datos.",
            "Es un servidor que administra las conexiones de la base de datos.",
            "Es el usuario que tiene permisos para modificar el código fuente del proyecto.",
            "Es una aplicación externa que se instala para crear plantillas."
        ],
        "ans": 0,
        "exp": "Es una interfaz administrativa incorporada que permite gestionar los registros de la base de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una sesión?",
        "opts": [
            "Es una consulta que se ejecuta automáticamente cada vez que se inicia el servidor.",
            "Es un mecanismo que permite conservar información de un usuario entre distintas solicitudes, por ejemplo, mantener su inicio de sesión.",
            "Es un archivo que guarda la configuración de seguridad del proyecto.",
            "Es una plantilla que muestra el historial de navegación del usuario."
        ],
        "ans": 1,
        "exp": "Es un mecanismo que permite conservar información de un usuario entre distintas solicitudes, por ejemplo, mantener su inicio de sesión.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una cookie?",
        "opts": [
            "Es un archivo del servidor que guarda la configuración de la base de datos.",
            "Es una vista que devuelve información en formato JSON.",
            "Es un pequeño dato que el navegador almacena y envía al servidor en solicitudes posteriores. Puede utilizarse para mantener sesiones y otras preferencias.",
            "Es un modelo que almacena las credenciales del usuario en la base de datos."
        ],
        "ans": 2,
        "exp": "Es un pequeño dato que el navegador almacena y envía al servidor en solicitudes posteriores. Puede utilizarse para mantener sesiones y otras preferencias.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es el middleware?",
        "opts": [
            "Es un modelo que define la estructura de los datos de la aplicación.",
            "Es una plantilla que se utiliza para mostrar mensajes de error.",
            "Es el archivo donde se definen las rutas del proyecto.",
            "Es un componente que procesa solicitudes y respuestas durante su recorrido por Django. Puede realizar tareas como verificar sesiones, autenticación o protección de seguridad."
        ],
        "ans": 3,
        "exp": "Es un componente que procesa solicitudes y respuestas durante su recorrido por Django. Puede realizar tareas como verificar sesiones, autenticación o protección de seguridad.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es el archivo settings.py?",
        "opts": [
            "Es el archivo donde se configura el proyecto: aplicaciones instaladas, base de datos, seguridad, idioma, zona horaria y otros parámetros.",
            "Es el archivo que registra los cambios de los modelos en la base de datos.",
            "Es el archivo donde se definen las rutas que dirigen las solicitudes a las vistas.",
            "Es el archivo que contiene las plantillas HTML de la aplicación."
        ],
        "ans": 0,
        "exp": "Es el archivo donde se configura el proyecto: aplicaciones instaladas, base de datos, seguridad, idioma, zona horaria y otros parámetros.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es el archivo urls.py?",
        "opts": [
            "Es el archivo donde se definen los modelos de la aplicación.",
            "Es el archivo que contiene el código del servidor de desarrollo.",
            "Es el archivo donde se definen las rutas que utiliza Django para dirigir las solicitudes hacia las vistas correspondientes.",
            "Es el archivo donde se configuran las bases de datos y la zona horaria."
        ],
        "ans": 2,
        "exp": "Es el archivo donde se definen las rutas que utiliza Django para dirigir las solicitudes hacia las vistas correspondientes.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es manage.py?",
        "opts": [
            "Es el archivo que contiene las rutas de acceso a las vistas.",
            "Es un modelo que define la configuración de los usuarios del sistema.",
            "Es una plantilla que se utiliza para mostrar el panel de administración.",
            "Es un archivo que permite ejecutar comandos administrativos del proyecto Django, como iniciar el servidor y realizar migraciones."
        ],
        "ans": 3,
        "exp": "Es un archivo que permite ejecutar comandos administrativos del proyecto Django, como iniciar el servidor y realizar migraciones.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un superusuario?",
        "opts": [
            "Es un usuario que solo puede consultar los datos sin modificarlos.",
            "Es un usuario que tiene permisos administrativos completos para acceder y gestionar el panel de administración de Django.",
            "Es un usuario que solo puede acceder a páginas públicas.",
            "Es el usuario que crea las plantillas HTML del proyecto."
        ],
        "ans": 1,
        "exp": "Es un usuario que tiene permisos administrativos completos para acceder y gestionar el panel de administración de Django.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es la autenticación?",
        "opts": [
            "Es el proceso que redirige al usuario a otra página del sitio.",
            "Es el proceso que guarda los datos de un formulario en la base de datos.",
            "Es el proceso de comprobar la identidad de un usuario, por ejemplo, mediante un nombre de usuario y una contraseña.",
            "Es el proceso que determina qué acciones puede realizar un usuario."
        ],
        "ans": 2,
        "exp": "Es el proceso de comprobar la identidad de un usuario, por ejemplo, mediante un nombre de usuario y una contraseña.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es la autorización?",
        "opts": [
            "Es el proceso de determinar qué acciones puede realizar un usuario según sus permisos.",
            "Es el proceso de comprobar la identidad del usuario con su contraseña.",
            "Es el proceso que cierra la sesión del usuario después de un tiempo.",
            "Es el proceso que cifra las contraseñas antes de guardarlas."
        ],
        "ans": 0,
        "exp": "Es el proceso de determinar qué acciones puede realizar un usuario según sus permisos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una respuesta HTTP?",
        "opts": [
            "Es la información que el servidor devuelve al navegador después de recibir y procesar una solicitud.",
            "Es el mensaje que envía el navegador para solicitar una página.",
            "Es el archivo HTML que se guarda en la carpeta de plantillas.",
            "Es el modelo que almacena las respuestas de los formularios."
        ],
        "ans": 0,
        "exp": "Es la información que el servidor devuelve al navegador después de recibir y procesar una solicitud.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es una solicitud HTTP?",
        "opts": [
            "Es el archivo de configuración donde se definen los métodos permitidos.",
            "Es la plantilla que se muestra cuando una página no existe.",
            "Es la respuesta que el servidor devuelve después de procesar la información.",
            "Es un mensaje que envía el navegador o un cliente al servidor para solicitar información o realizar una acción."
        ],
        "ans": 3,
        "exp": "Es un mensaje que envía el navegador o un cliente al servidor para solicitar información o realizar una acción.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es el método GET?",
        "opts": [
            "Es un método HTTP que solo se utiliza en aplicaciones móviles.",
            "Es un método HTTP utilizado para enviar información y crear registros en el servidor.",
            "Es un método HTTP utilizado principalmente para solicitar información al servidor.",
            "Es un método HTTP utilizado para eliminar recursos de la base de datos."
        ],
        "ans": 2,
        "exp": "Es un método HTTP utilizado principalmente para solicitar información al servidor.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es el método POST?",
        "opts": [
            "Es un método HTTP utilizado para solicitar información sin enviar datos.",
            "Es un método HTTP utilizado para enviar información al servidor, por ejemplo, los datos de un formulario.",
            "Es un método HTTP que solo permite consultar la configuración del servidor.",
            "Es un método HTTP utilizado para mostrar las plantillas en el navegador."
        ],
        "ans": 1,
        "exp": "Es un método HTTP utilizado para enviar información al servidor, por ejemplo, los datos de un formulario.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es render()?",
        "opts": [
            "Es una función de Django que permite cargar una plantilla HTML, enviarle datos y devolverla como respuesta.",
            "Es una función que redirige al usuario a otra dirección del sitio.",
            "Es una clase que devuelve una respuesta de error al navegador.",
            "Es un decorador que exige que el usuario haya iniciado sesión."
        ],
        "ans": 0,
        "exp": "Es una función de Django que permite cargar una plantilla HTML, enviarle datos y devolverla como respuesta.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es redirect()?",
        "opts": [
            "Es una clase que guarda los datos de la base de datos en memoria.",
            "Es una función que permite redirigir al usuario hacia otra dirección o vista.",
            "Es un decorador que valida los datos enviados mediante POST.",
            "Es una función que carga una plantilla HTML y la devuelve como respuesta."
        ],
        "ans": 1,
        "exp": "Es una función que permite redirigir al usuario hacia otra dirección o vista.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es HttpResponse?",
        "opts": [
            "Es un decorador que restringe el acceso a las vistas.",
            "Es una función que carga plantillas HTML con datos del contexto.",
            "Es un modelo que almacena las respuestas de los usuarios.",
            "Es una clase de Django que permite devolver una respuesta HTTP al cliente."
        ],
        "ans": 3,
        "exp": "Es una clase de Django que permite devolver una respuesta HTTP al cliente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es QuerySet?",
        "opts": [
            "Es un conjunto de resultados obtenido al consultar registros mediante el ORM de Django.",
            "Es una plantilla que muestra una lista de formularios.",
            "Es un archivo de migración que se genera al crear un modelo.",
            "Es la configuración que define las bases de datos del proyecto."
        ],
        "ans": 0,
        "exp": "Es un conjunto de resultados obtenido al consultar registros mediante el ORM de Django.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es un formulario en Django?",
        "opts": [
            "Es un archivo de configuración que define el idioma del sitio.",
            "Es un mecanismo para recibir y validar datos ingresados por el usuario.",
            "Es una vista que muestra los datos de la base sin permitir modificarlos.",
            "Es una tabla de la base de datos que guarda los datos ingresados."
        ],
        "ans": 1,
        "exp": "Es un mecanismo para recibir y validar datos ingresados por el usuario.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es la validación de datos?",
        "opts": [
            "Es el proceso de guardar los datos en la base sin comprobarlos.",
            "Es el proceso que elimina los registros que no cumplen las condiciones.",
            "Es el proceso de comprobar que la información ingresada cumple las condiciones establecidas antes de utilizarla o guardarla.",
            "Es el proceso que cifra los datos antes de enviarlos al servidor."
        ],
        "ans": 2,
        "exp": "Es el proceso de comprobar que la información ingresada cumple las condiciones establecidas antes de utilizarla o guardarla.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Definiciones",
        "diff": "easy",
        "q": "¿Qué es DEBUG en Django?",
        "opts": [
            "Es una configuración que activa información detallada de errores durante el desarrollo. En producción debe estar desactivada para no exponer información interna.",
            "Es una configuración que oculta todos los errores al usuario en cualquier momento.",
            "Es un modo que permite crear usuarios administradores sin contraseña.",
            "Es una herramienta que elimina las migraciones pendientes del proyecto."
        ],
        "ans": 0,
        "exp": "Es una configuración que activa información detallada de errores durante el desarrollo. En producción debe estar desactivada para no exponer información interna.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre un proyecto y una aplicación en Django?",
        "opts": [
            "El proyecto es un módulo con una funcionalidad específica, y la aplicación contiene la configuración general.",
            "Son lo mismo; ambos términos describen un módulo que contiene la configuración.",
            "El proyecto solo existe en producción, y la aplicación solo en desarrollo.",
            "El proyecto contiene la configuración general del sistema; una aplicación es un módulo que desarrolla una funcionalidad específica dentro de ese proyecto."
        ],
        "ans": 3,
        "exp": "El proyecto contiene la configuración general del sistema; una aplicación es un módulo que desarrolla una funcionalidad específica dentro de ese proyecto.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre un modelo y una vista?",
        "opts": [
            "El modelo procesa las solicitudes y decide la respuesta, y la vista define los datos.",
            "El modelo define y gestiona los datos; la vista procesa las solicitudes y determina qué respuesta entregar.",
            "Son lo mismo; ambos definen la estructura de los datos de la aplicación.",
            "El modelo muestra la información en HTML, y la vista administra la base de datos."
        ],
        "ans": 1,
        "exp": "El modelo define y gestiona los datos; la vista procesa las solicitudes y determina qué respuesta entregar.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre una vista y una plantilla?",
        "opts": [
            "La plantilla define las tablas de la base de datos, y la vista muestra los datos.",
            "La vista procesa la solicitud y prepara los datos; la plantilla presenta esos datos mediante HTML.",
            "La vista muestra la información en HTML, y la plantilla procesa la solicitud.",
            "Son lo mismo; ambas procesan la solicitud y presentan la información."
        ],
        "ans": 1,
        "exp": "La vista procesa la solicitud y prepara los datos; la plantilla presenta esos datos mediante HTML.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre GET y POST?",
        "opts": [
            "GET envía información para procesarla, y POST solicita información sin enviar datos.",
            "GET solicita información; POST envía información al servidor para procesarla.",
            "GET solo se usa para eliminar recursos, y POST para mostrar plantillas.",
            "Ambos métodos envían datos al servidor de la misma forma."
        ],
        "ans": 1,
        "exp": "GET solicita información; POST envía información al servidor para procesarla.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre autenticación y autorización?",
        "opts": [
            "Son sinónimos que se aplican con el mismo mecanismo en Django.",
            "La autenticación determina qué acciones puede realizar, y la autorización verifica la identidad.",
            "La autenticación comprueba quién es el usuario; la autorización determina qué puede hacer.",
            "La autorización se realiza antes del inicio de sesión, y la autenticación después."
        ],
        "ans": 2,
        "exp": "La autenticación comprueba quién es el usuario; la autorización determina qué puede hacer.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre render() y redirect()?",
        "opts": [
            "render() devuelve una plantilla como respuesta; redirect() envía al usuario a otra dirección.",
            "render() solo funciona con datos JSON, y redirect() solo con HTML.",
            "render() redirige al usuario, y redirect() devuelve una plantilla como respuesta.",
            "Ambas funciones devuelven exactamente la misma respuesta al navegador."
        ],
        "ans": 0,
        "exp": "render() devuelve una plantilla como respuesta; redirect() envía al usuario a otra dirección.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre una cookie y una sesión?",
        "opts": [
            "La sesión se almacena en el navegador, y la cookie se guarda en el servidor.",
            "La cookie se almacena en el navegador; la sesión mantiene información asociada al usuario en el servidor, normalmente identificada mediante una cookie.",
            "Son lo mismo; ambas guardan los datos del usuario en el servidor.",
            "La cookie solo puede guardar contraseñas, mientras que la sesión guarda plantillas."
        ],
        "ans": 1,
        "exp": "La cookie se almacena en el navegador; la sesión mantiene información asociada al usuario en el servidor, normalmente identificada mediante una cookie.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre SQL y ORM?",
        "opts": [
            "El ORM solo puede usarse sin base de datos, y SQL solo en Django.",
            "SQL es un lenguaje de programación de Python, y el ORM es un lenguaje de consulta.",
            "Son sinónimos que describen la misma forma de consultar la base de datos.",
            "SQL permite consultar y modificar directamente una base de datos mediante instrucciones; ORM permite realizar esas operaciones utilizando objetos y métodos del lenguaje de programación."
        ],
        "ans": 3,
        "exp": "SQL permite consultar y modificar directamente una base de datos mediante instrucciones; ORM permite realizar esas operaciones utilizando objetos y métodos del lenguaje de programación.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre makemigrations y migrate?",
        "opts": [
            "Ambos comandos generan archivos de migración con los mismos cambios.",
            "migrate elimina los modelos del proyecto, y makemigrations los crea.",
            "makemigrations aplica los cambios a la base de datos, y migrate genera los archivos.",
            "makemigrations genera los archivos que registran los cambios realizados en los modelos; migrate aplica esos cambios a la base de datos."
        ],
        "ans": 3,
        "exp": "makemigrations genera los archivos que registran los cambios realizados en los modelos; migrate aplica esos cambios a la base de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre settings.py y urls.py?",
        "opts": [
            "urls.py guarda las contraseñas de la base de datos, y settings.py las vistas.",
            "Son lo mismo; ambos archivos definen la configuración general del sistema.",
            "settings.py contiene la configuración del proyecto; urls.py define las rutas de acceso.",
            "settings.py define las rutas de acceso, y urls.py contiene la configuración del proyecto."
        ],
        "ans": 2,
        "exp": "settings.py contiene la configuración del proyecto; urls.py define las rutas de acceso.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre ForeignKey y OneToOneField?",
        "opts": [
            "ForeignKey establece una relación uno a uno, y OneToOneField establece una relación de muchos a uno.",
            "ForeignKey establece una relación en la que un registro puede estar relacionado con varios registros de otra tabla; OneToOneField establece una relación de uno a uno.",
            "OneToOneField permite varias relaciones entre registros, y ForeignKey solo una.",
            "Son lo mismo; ambos relacionan dos modelos de la misma forma."
        ],
        "ans": 1,
        "exp": "ForeignKey establece una relación en la que un registro puede estar relacionado con varios registros de otra tabla; OneToOneField establece una relación de uno a uno.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Comparaciones",
        "diff": "medium",
        "q": "¿Qué diferencia existe entre ForeignKey y ManyToManyField?",
        "opts": [
            "Son lo mismo; cambia únicamente el nombre del campo en el modelo.",
            "ManyToManyField solo puede usarse en modelos sin claves primarias.",
            "ForeignKey permite relacionar varios registros con varios de otra tabla, y ManyToManyField solo uno.",
            "ForeignKey representa una relación de muchos a uno; ManyToManyField permite que varios registros se relacionen con varios registros de otra tabla."
        ],
        "ans": 3,
        "exp": "ForeignKey representa una relación de muchos a uno; ManyToManyField permite que varios registros se relacionen con varios registros de otra tabla.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo se crea un proyecto Django?",
        "opts": [
            "django-admin createproject nombre_proyecto",
            "Se utiliza el comando: django-admin startproject nombre_proyecto",
            "python manage.py newproject nombre_proyecto",
            "python manage.py startapp nombre_proyecto"
        ],
        "ans": 1,
        "exp": "Se utiliza el comando: django-admin startproject nombre_proyecto",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo se crea una aplicación dentro de un proyecto?",
        "opts": [
            "django-admin createapp nombre_app",
            "Se utiliza: python manage.py startapp nombre_app",
            "python manage.py newapp nombre_app",
            "python manage.py startproject nombre_app"
        ],
        "ans": 1,
        "exp": "Se utiliza: python manage.py startapp nombre_app",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo se inicia el servidor de desarrollo?",
        "opts": [
            "Se utiliza: python manage.py runserver",
            "python manage.py startserver",
            "python manage.py serve",
            "python manage.py run"
        ],
        "ans": 0,
        "exp": "Se utiliza: python manage.py runserver",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo se generan las migraciones?",
        "opts": [
            "python manage.py migrate",
            "python manage.py makemigration",
            "python manage.py createmigrations",
            "Se utiliza: python manage.py makemigrations"
        ],
        "ans": 3,
        "exp": "Se utiliza: python manage.py makemigrations",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo se aplican las migraciones?",
        "opts": [
            "python manage.py migrate_database",
            "Se utiliza: python manage.py migrate",
            "python manage.py makemigrations",
            "python manage.py apply"
        ],
        "ans": 1,
        "exp": "Se utiliza: python manage.py migrate",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo se crea un superusuario?",
        "opts": [
            "python manage.py adduser --admin",
            "python manage.py createadmin",
            "python manage.py superuser",
            "Se utiliza: python manage.py createsuperuser"
        ],
        "ans": 3,
        "exp": "Se utiliza: python manage.py createsuperuser",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo se registra un modelo en el administrador de Django?",
        "opts": [
            "Se define una vista en urls.py que muestra el modelo en el panel de administración.",
            "Se importa el modelo en models.py y se registra con admin.register().",
            "Se importa el modelo en admin.py y se registra utilizando admin.site.register() o un decorador de registro.",
            "Se copia el modelo dentro del archivo settings.py para mostrarlo en el panel."
        ],
        "ans": 2,
        "exp": "Se importa el modelo en admin.py y se registra utilizando admin.site.register() o un decorador de registro.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo se obtiene un registro de una tabla mediante el ORM?",
        "opts": [
            "Usuario.objects.select(1) devuelve el usuario con identificador 1.",
            "Usuario.objects.all(id=1) devuelve la lista completa de usuarios.",
            "Usuario.objects.find(1) devuelve el registro, pero solo en MySQL.",
            "Se puede utilizar el método get(). Este ejemplo busca el usuario cuyo identificador es 1."
        ],
        "ans": 3,
        "exp": "Se puede utilizar el método get(). Este ejemplo busca el usuario cuyo identificador es 1.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">usuario = Usuario.objects.get(id=1)</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo se obtienen varios registros mediante el ORM?",
        "opts": [
            "usuarios = Usuario.objects.first()",
            "usuarios = Usuario.objects.get()",
            "Se utiliza all(). Devuelve un conjunto de registros del modelo Usuario.",
            "usuarios = Usuario.all()"
        ],
        "ans": 2,
        "exp": "Se utiliza all(). Devuelve un conjunto de registros del modelo Usuario.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">usuarios = Usuario.objects.all()</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo se filtran registros mediante el ORM?",
        "opts": [
            "usuarios = Usuario.objects.all(activo=True)",
            "usuarios = Usuario.objects.get(activo=True)",
            "usuarios = Usuario.objects.filter(activo=False)",
            "Se utiliza filter(). Devuelve los usuarios cuyo campo activo tiene el valor verdadero."
        ],
        "ans": 3,
        "exp": "Se utiliza filter(). Devuelve los usuarios cuyo campo activo tiene el valor verdadero.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">usuarios = Usuario.objects.filter(activo=True)</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo se guarda un registro en Django?",
        "opts": [
            "usuario = Usuario.objects.insert(nombre='Ana')",
            "usuario = Usuario(nombre='Ana').create()",
            "Se crea una instancia del modelo y se utiliza save().",
            "usuario = Usuario.save(nombre='Ana')"
        ],
        "ans": 2,
        "exp": "Se crea una instancia del modelo y se utiliza save().",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">usuario = Usuario(nombre=\"Ana\")\nusuario.save()</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo se envían datos desde una vista hacia una plantilla?",
        "opts": [
            "return redirect(request, 'inicio.html', datos)",
            "return HttpResponse(datos, 'inicio.html')",
            "return render(request, datos, 'inicio.html')",
            "Se utiliza un diccionario de contexto con render()."
        ],
        "ans": 3,
        "exp": "Se utiliza un diccionario de contexto con render().",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">def inicio(request):\n    datos = {\"nombre\": \"Ana\"}\n    return render(request, \"inicio.html\", datos)</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo se obtiene información enviada mediante POST?",
        "opts": [
            "nombre = request.POST['nombre'].value",
            "Se utiliza request.POST.",
            "nombre = request.method.get('nombre')",
            "nombre = request.GET.get('nombre')"
        ],
        "ans": 1,
        "exp": "Se utiliza request.POST.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">nombre = request.POST.get(\"nombre\")</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo se obtiene información enviada mediante GET?",
        "opts": [
            "nombre = request.session.get('nombre')",
            "nombre = request.user.get('nombre')",
            "nombre = request.body.get('nombre')",
            "Se utiliza request.GET."
        ],
        "ans": 3,
        "exp": "Se utiliza request.GET.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">nombre = request.GET.get(\"nombre\")</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Cómo se comprueba si una solicitud utiliza POST?",
        "opts": [
            "if request.POST == True:",
            "if request.get == 'POST':",
            "Se puede comprobar mediante una comparación con request.method.",
            "if request.method = 'POST':"
        ],
        "ans": 2,
        "exp": "Se puede comprobar mediante una comparación con request.method.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">if request.method == \"POST\":\n    # Procesar los datos</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Para qué sirve el archivo admin.py?",
        "opts": [
            "Define el idioma y la zona horaria del panel de administración.",
            "Almacena las credenciales de los superusuarios del proyecto.",
            "Contiene la lista de migraciones que se aplican al iniciar el servidor.",
            "Permite registrar y configurar los modelos que estarán disponibles en el panel administrativo."
        ],
        "ans": 3,
        "exp": "Permite registrar y configurar los modelos que estarán disponibles en el panel administrativo.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Ejemplos y aplicaciones",
        "diff": "medium",
        "q": "¿Para qué sirve apps.py?",
        "opts": [
            "Guarda la conexión a la base de datos del proyecto.",
            "Define los modelos de datos que se guardan en la base.",
            "Contiene la configuración de una aplicación Django, como su nombre y otros parámetros.",
            "Contiene las rutas de las vistas que la aplicación utiliza."
        ],
        "ans": 2,
        "exp": "Contiene la configuración de una aplicación Django, como su nombre y otros parámetros.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué patrón arquitectónico utiliza Django?",
        "opts": [
            "Utiliza el patrón MTV: Modelo, Template y Validador.",
            "Utiliza el patrón de tres capas: Cliente, Servidor y Base de datos.",
            "Utiliza el patrón MVT: Modelo, Vista y Plantilla. Organiza los datos, el procesamiento de solicitudes y la presentación de la información.",
            "Utiliza el patrón MVC: Modelo, Vista y Controlador, igual que Ruby on Rails."
        ],
        "ans": 2,
        "exp": "Utiliza el patrón MVT: Modelo, Vista y Plantilla. Organiza los datos, el procesamiento de solicitudes y la presentación de la información.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué significa MVT?",
        "opts": [
            "Modelo: presenta la información. Vista: administra los datos. Plantilla: procesa la solicitud.",
            "Modelo: muestra el HTML. Vista: define las rutas. Plantilla: cifra la conexión.",
            "Modelo: administra los datos. Vista: procesa la solicitud y prepara la respuesta. Plantilla: presenta la información al usuario.",
            "Modelo: procesa la solicitud. Vista: guarda los datos. Plantilla: valida el formulario."
        ],
        "ans": 2,
        "exp": "Modelo: administra los datos. Vista: procesa la solicitud y prepara la respuesta. Plantilla: presenta la información al usuario.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué ocurre cuando un usuario ingresa a una dirección de Django?",
        "opts": [
            "Django envía la solicitud al navegador para que la procese en el cliente.",
            "Django recibe la solicitud, busca la ruta correspondiente, ejecuta la vista asociada, procesa los datos necesarios y devuelve una respuesta.",
            "Django guarda la solicitud en la base de datos antes de procesarla.",
            "Django muestra directamente el archivo HTML sin buscar ninguna ruta."
        ],
        "ans": 1,
        "exp": "Django recibe la solicitud, busca la ruta correspondiente, ejecuta la vista asociada, procesa los datos necesarios y devuelve una respuesta.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué es una migración pendiente?",
        "opts": [
            "Es un modelo que todavía no tiene vistas asociadas.",
            "Es una plantilla que no se ha guardado en la carpeta del proyecto.",
            "Es una migración que se elimina automáticamente después de aplicarse.",
            "Es un cambio definido en los archivos de migración que todavía no se ha aplicado a la base de datos."
        ],
        "ans": 3,
        "exp": "Es un cambio definido en los archivos de migración que todavía no se ha aplicado a la base de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué ocurre si modificamos un modelo y no ejecutamos las migraciones?",
        "opts": [
            "La base de datos se actualiza automáticamente aunque no se ejecuten las migraciones.",
            "Django elimina el modelo del proyecto para evitar errores de estructura.",
            "No ocurre nada, porque Django siempre sincroniza el modelo con la base.",
            "El código del modelo y la estructura de la base de datos pueden quedar desactualizados entre sí. Esto puede provocar errores al consultar o guardar información."
        ],
        "ans": 3,
        "exp": "El código del modelo y la estructura de la base de datos pueden quedar desactualizados entre sí. Esto puede provocar errores al consultar o guardar información.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué es una clave primaria en un modelo Django?",
        "opts": [
            "Es un archivo que guarda las migraciones de cada aplicación.",
            "Es un campo que relaciona el modelo con una plantilla HTML.",
            "Es un campo que identifica de manera única cada registro de una tabla. Django puede crearla automáticamente si no se define otra.",
            "Es una URL que identifica de forma única cada vista del proyecto."
        ],
        "ans": 2,
        "exp": "Es un campo que identifica de manera única cada registro de una tabla. Django puede crearla automáticamente si no se define otra.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué es una clave foránea en Django?",
        "opts": [
            "Es una vista que muestra los registros de dos modelos al mismo tiempo.",
            "Es un campo que define la configuración de la base de datos principal.",
            "Es una URL que apunta a otra aplicación del mismo proyecto.",
            "Es un campo que establece una relación entre registros de dos modelos, normalmente utilizando ForeignKey."
        ],
        "ans": 3,
        "exp": "Es un campo que establece una relación entre registros de dos modelos, normalmente utilizando ForeignKey.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué es el archivo models.py?",
        "opts": [
            "Es el archivo donde se configuran las rutas de acceso de la aplicación.",
            "Es el archivo donde normalmente se definen los modelos que representan las entidades y estructuras de datos de una aplicación.",
            "Es el archivo que define el idioma y la zona horaria del proyecto.",
            "Es el archivo que guarda las plantillas HTML que usa la aplicación."
        ],
        "ans": 1,
        "exp": "Es el archivo donde normalmente se definen los modelos que representan las entidades y estructuras de datos de una aplicación.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué es el archivo views.py?",
        "opts": [
            "Es el archivo que contiene la configuración del panel de administración.",
            "Es el archivo donde normalmente se escriben las funciones o clases que procesan las solicitudes y generan respuestas.",
            "Es el archivo donde se guardan las migraciones del proyecto.",
            "Es el archivo donde se define la estructura de las tablas de la base de datos."
        ],
        "ans": 1,
        "exp": "Es el archivo donde normalmente se escriben las funciones o clases que procesan las solicitudes y generan respuestas.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué es el sistema de autenticación de Django?",
        "opts": [
            "Es un servidor independiente que cifra las conexiones con la base de datos.",
            "Es un conjunto de herramientas incorporadas que permite gestionar usuarios, contraseñas, inicio de sesión, cierre de sesión y permisos.",
            "Es una plantilla que muestra el formulario de inicio de sesión por defecto.",
            "Es un middleware que solo registra los errores del servidor."
        ],
        "ans": 1,
        "exp": "Es un conjunto de herramientas incorporadas que permite gestionar usuarios, contraseñas, inicio de sesión, cierre de sesión y permisos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Por qué no se deben almacenar contraseñas como texto plano?",
        "opts": [
            "Porque las contraseñas en texto plano ocupan demasiado espacio en la base.",
            "Porque si alguien accede a la base de datos podría leer directamente las contraseñas. Django utiliza mecanismos de hash para almacenarlas de forma más segura.",
            "Porque Django exige que las contraseñas se guarden en archivos separados.",
            "Porque el navegador no puede mostrar contraseñas con más de ocho caracteres."
        ],
        "ans": 1,
        "exp": "Porque si alguien accede a la base de datos podría leer directamente las contraseñas. Django utiliza mecanismos de hash para almacenarlas de forma más segura.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué es un token CSRF?",
        "opts": [
            "Es un valor utilizado para comprobar que una solicitud que modifica información fue generada desde un formulario o contexto autorizado del sitio.",
            "Es un modelo que almacena las solicitudes realizadas por el usuario.",
            "Es una cookie que guarda la configuración del idioma del sitio.",
            "Es una contraseña temporal que el usuario ingresa al iniciar sesión."
        ],
        "ans": 0,
        "exp": "Es un valor utilizado para comprobar que una solicitud que modifica información fue generada desde un formulario o contexto autorizado del sitio.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿En qué solicitudes se utiliza normalmente la protección CSRF?",
        "opts": [
            "Principalmente en solicitudes GET, porque consultan datos sensibles.",
            "En todas las solicitudes, incluyendo las de lectura de páginas.",
            "Principalmente en solicitudes que modifican información, como POST, PUT, PATCH y DELETE. No se exige de la misma manera para solicitudes GET.",
            "Solo en solicitudes DELETE, porque son las únicas que modifican datos."
        ],
        "ans": 2,
        "exp": "Principalmente en solicitudes que modifican información, como POST, PUT, PATCH y DELETE. No se exige de la misma manera para solicitudes GET.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué sucede si falta el token CSRF en una solicitud protegida?",
        "opts": [
            "Django acepta la solicitud y la procesa sin ninguna verificación adicional.",
            "Django elimina el modelo asociado al formulario para evitar errores.",
            "Django redirige automáticamente al usuario a la página de inicio de sesión.",
            "Django puede rechazar la solicitud y devolver un error de verificación CSRF."
        ],
        "ans": 3,
        "exp": "Django puede rechazar la solicitud y devolver un error de verificación CSRF.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué es csrf_token en una plantilla?",
        "opts": [
            "Es una vista que muestra la lista de tokens del sistema.",
            "Es una función de Python que cifra el contenido del formulario.",
            "Es una etiqueta de plantilla que inserta el token CSRF dentro de un formulario para que Django pueda validar la solicitud.",
            "Es un decorador que aplica el token a todas las vistas automáticamente."
        ],
        "ans": 2,
        "exp": "Es una etiqueta de plantilla que inserta el token CSRF dentro de un formulario para que Django pueda validar la solicitud.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué función cumple INSTALLED_APPS?",
        "opts": [
            "Es una configuración que define los modelos de la base de datos del proyecto.",
            "Es una configuración de settings.py que indica qué aplicaciones están habilitadas dentro del proyecto.",
            "Es una lista de rutas que el servidor ejecuta al iniciar.",
            "Es una variable que guarda el nombre de usuario del administrador."
        ],
        "ans": 1,
        "exp": "Es una configuración de settings.py que indica qué aplicaciones están habilitadas dentro del proyecto.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué función cumple DATABASES?",
        "opts": [
            "Es una lista de las aplicaciones instaladas dentro del proyecto.",
            "Es una configuración que define la conexión y los parámetros de la base de datos utilizada por Django.",
            "Es una configuración que define las plantillas que se usan en el sitio.",
            "Es un archivo que guarda las migraciones de la base de datos."
        ],
        "ans": 1,
        "exp": "Es una configuración que define la conexión y los parámetros de la base de datos utilizada por Django.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué función cumple ALLOWED_HOSTS?",
        "opts": [
            "Define los modelos que se muestran en el panel de administración.",
            "Define las aplicaciones que pueden ejecutar migraciones en el servidor.",
            "Define los nombres de dominio o direcciones de host que pueden utilizarse para acceder al proyecto cuando se ejecuta con determinadas configuraciones de seguridad.",
            "Define los usuarios que pueden iniciar sesión en el panel de administración."
        ],
        "ans": 2,
        "exp": "Define los nombres de dominio o direcciones de host que pueden utilizarse para acceder al proyecto cuando se ejecuta con determinadas configuraciones de seguridad.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué es el panel /admin/?",
        "opts": [
            "Es una vista que muestra únicamente las plantillas de la aplicación.",
            "Es un archivo que contiene la configuración de la base de datos.",
            "Es la dirección que normalmente utiliza Django para acceder a su interfaz administrativa, siempre que esté habilitada y configurada.",
            "Es una ruta que solo se puede usar en producción y nunca en desarrollo."
        ],
        "ans": 2,
        "exp": "Es la dirección que normalmente utiliza Django para acceder a su interfaz administrativa, siempre que esté habilitada y configurada.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué es un decorador en una vista de Django?",
        "opts": [
            "Es un modelo que se ejecuta antes de cada solicitud del navegador.",
            "Es una plantilla que aplica estilos CSS a la vista del usuario.",
            "Es una función que modifica o controla el comportamiento de otra función. Por ejemplo, @login_required exige que el usuario haya iniciado sesión para acceder a una vista.",
            "Es una clase que reemplaza la vista original con otra versión más rápida."
        ],
        "ans": 2,
        "exp": "Es una función que modifica o controla el comportamiento de otra función. Por ejemplo, @login_required exige que el usuario haya iniciado sesión para acceder a una vista.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué es login_required?",
        "opts": [
            "Es un decorador que muestra el formulario de registro a todos los usuarios.",
            "Es un decorador que restringe el acceso a una vista a usuarios que hayan iniciado sesión.",
            "Es una plantilla que muestra los errores de inicio de sesión.",
            "Es una función que cifra la contraseña del usuario antes de guardarla."
        ],
        "ans": 1,
        "exp": "Es un decorador que restringe el acceso a una vista a usuarios que hayan iniciado sesión.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué es un error 404?",
        "opts": [
            "Es un código HTTP que indica que el recurso solicitado no fue encontrado.",
            "Es un código HTTP que indica que el servidor no tiene memoria disponible.",
            "Es un código HTTP que indica que la solicitud fue procesada correctamente.",
            "Es un código HTTP que indica que el usuario debe iniciar sesión."
        ],
        "ans": 0,
        "exp": "Es un código HTTP que indica que el recurso solicitado no fue encontrado.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué es un error 500?",
        "opts": [
            "Es un código HTTP que indica que el usuario no tiene permisos suficientes.",
            "Es un código HTTP que indica que el usuario debe iniciar sesión para continuar.",
            "Es un código HTTP que indica que ocurrió un error interno en el servidor al procesar la solicitud.",
            "Es un código HTTP que indica que la solicitud fue redirigida a otra página."
        ],
        "ans": 2,
        "exp": "Es un código HTTP que indica que ocurrió un error interno en el servidor al procesar la solicitud.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Profundización",
        "diff": "hard",
        "q": "¿Qué es el entorno virtual de Python y por qué se utiliza con Django?",
        "opts": [
            "Es un entorno independiente que permite instalar y administrar las bibliotecas de un proyecto sin mezclarlas con las de otros proyectos.",
            "Es un servidor que ejecuta las aplicaciones Django en paralelo.",
            "Es un archivo de configuración que activa el modo DEBUG del proyecto.",
            "Es una base de datos que guarda las bibliotecas del proyecto en la nube."
        ],
        "ans": 0,
        "exp": "Es un entorno independiente que permite instalar y administrar las bibliotecas de un proyecto sin mezclarlas con las de otros proyectos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Preguntas capciosas",
        "diff": "medium",
        "q": "¿Django es un lenguaje de programación?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Django es un framework desarrollado con Python. Python es el lenguaje de programación.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Preguntas capciosas",
        "diff": "medium",
        "q": "¿Django crea automáticamente toda la aplicación?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Proporciona herramientas y estructuras, pero el desarrollador debe programar las funcionalidades que necesita.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Preguntas capciosas",
        "diff": "medium",
        "q": "¿Una aplicación Django puede funcionar sin una base de datos?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 0,
        "exp": "Sí, dependiendo de su funcionalidad. Sin embargo, si necesita almacenar información permanentemente, requiere algún mecanismo de almacenamiento.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Preguntas capciosas",
        "diff": "medium",
        "q": "¿makemigrations modifica directamente la base de datos?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Genera archivos de migración. Los cambios se aplican a la base de datos cuando se ejecuta migrate.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Preguntas capciosas",
        "diff": "medium",
        "q": "¿migrate crea los modelos de Python?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Aplica a la base de datos las operaciones definidas en los archivos de migración.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Preguntas capciosas",
        "diff": "medium",
        "q": "¿Una vista siempre debe devolver una plantilla HTML?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. También puede devolver respuestas HTTP, datos JSON o realizar redirecciones.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Preguntas capciosas",
        "diff": "medium",
        "q": "¿GET y POST son lenguajes de programación?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Son métodos del protocolo HTTP que indican el tipo de operación que se solicita al servidor.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Preguntas capciosas",
        "diff": "medium",
        "q": "¿El ORM elimina completamente la necesidad de conocer SQL?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Facilita el trabajo con bases de datos, pero conocer SQL sigue siendo importante para comprender consultas y operaciones.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Preguntas capciosas",
        "diff": "medium",
        "q": "¿Desactivar CSRF hace que una aplicación sea más segura?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Desactivar esa protección elimina una medida de seguridad y puede dejar la aplicación expuesta a ataques CSRF.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Preguntas capciosas",
        "diff": "medium",
        "q": "¿Un usuario autenticado tiene automáticamente permisos para realizar todas las acciones?",
        "opts": [
            "Sí",
            "No"
        ],
        "ans": 1,
        "exp": "No. Estar autenticado significa que el sistema conoce su identidad. Sus permisos determinan qué acciones puede realizar.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace este código?",
        "opts": [
            "Inicia el servidor de desarrollo de Django para poder probar la aplicación localmente.",
            "Elimina el servidor de desarrollo y limpia la carpeta del proyecto.",
            "Aplica las migraciones pendientes sin iniciar el servidor.",
            "Crea una base de datos nueva con las tablas del proyecto."
        ],
        "ans": 0,
        "exp": "Inicia el servidor de desarrollo de Django para poder probar la aplicación localmente.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">python manage.py runserver</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace este código?",
        "opts": [
            "Define una vista que muestra el nombre del producto en la plantilla.",
            "Define un modelo llamado Producto con un campo de texto llamado nombre, que admite hasta 100 caracteres.",
            "Define una clase llamada Producto que guarda un número entero llamado nombre.",
            "Crea una tabla en el navegador con un campo de texto de 100 filas."
        ],
        "ans": 1,
        "exp": "Define un modelo llamado Producto con un campo de texto llamado nombre, que admite hasta 100 caracteres.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">class Producto(models.Model):\n    nombre = models.CharField(max_length=100)</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace este código?",
        "opts": [
            "Crea un nuevo producto con todos sus campos vacíos.",
            "Obtiene todos los registros del modelo Producto.",
            "Obtiene solamente el primer producto registrado en la base.",
            "Elimina todos los registros del modelo Producto de la base de datos."
        ],
        "ans": 1,
        "exp": "Obtiene todos los registros del modelo Producto.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">Producto.objects.all()</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace este código?",
        "opts": [
            "Crea un producto llamado Libro si no existe en la base.",
            "Elimina los productos cuyo nombre sea exactamente Libro.",
            "Busca los productos cuyo nombre contenga la palabra Libro en cualquier posición.",
            "Busca los productos cuyo nombre sea exactamente \"Libro\"."
        ],
        "ans": 3,
        "exp": "Busca los productos cuyo nombre sea exactamente \"Libro\".",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">Producto.objects.filter(nombre=\"Libro\")</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace este código?",
        "opts": [
            "Muestra la configuración de inicio del servidor en la consola.",
            "Redirige al usuario a la plantilla inicio.html sin enviar datos.",
            "Crea un archivo HTML llamado inicio.html en la carpeta del proyecto.",
            "Carga la plantilla inicio.html y la devuelve como respuesta."
        ],
        "ans": 3,
        "exp": "Carga la plantilla inicio.html y la devuelve como respuesta.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">return render(request, \"inicio.html\")</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace este código?",
        "opts": [
            "Redirige a la página principal si la solicitud utiliza el método GET.",
            "Guarda el nombre en la base de datos sin verificar el método de la solicitud.",
            "Elimina el valor del campo nombre cuando la solicitud utiliza POST.",
            "Comprueba si la solicitud utiliza POST y obtiene el valor enviado en el campo nombre."
        ],
        "ans": 3,
        "exp": "Comprueba si la solicitud utiliza POST y obtiene el valor enviado en el campo nombre.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">if request.method == \"POST\":\n    nombre = request.POST.get(\"nombre\")</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace este código?",
        "opts": [
            "Elimina la ruta inicio/ del archivo urls.py para evitar conflictos.",
            "Define una ruta llamada inicio que ejecuta la vista inicio cuando se accede a esa dirección.",
            "Redirige cualquier dirección del sitio hacia la vista inicio.",
            "Crea una vista llamada inicio que devuelve la lista de rutas del proyecto."
        ],
        "ans": 1,
        "exp": "Define una ruta llamada inicio que ejecuta la vista inicio cuando se accede a esa dirección.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">from django.urls import path\n\nurlpatterns = [\n    path(\"inicio/\", views.inicio, name=\"inicio\"),\n]</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace este código?",
        "opts": [
            "Crea un formulario de registro para que los usuarios se inscriban.",
            "Registra el modelo Producto para que pueda administrarse desde el panel de Django.",
            "Elimina el modelo Producto del panel de administración.",
            "Importa el modelo Producto en el archivo settings.py del proyecto."
        ],
        "ans": 1,
        "exp": "Registra el modelo Producto para que pueda administrarse desde el panel de Django.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">from django.contrib import admin\nfrom .models import Producto\n\nadmin.site.register(Producto)</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace este código?",
        "opts": [
            "Cifra la vista para que solo los administradores puedan ver su contenido.",
            "Redirige a todos los usuarios a la página de registro al iniciar la aplicación.",
            "Elimina la sesión del usuario después de cada solicitud que realiza.",
            "Protege la vista para que solamente puedan acceder usuarios que hayan iniciado sesión."
        ],
        "ans": 3,
        "exp": "Protege la vista para que solamente puedan acceder usuarios que hayan iniciado sesión.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">from django.contrib.auth.decorators import login_required\n\n@login_required\ndef inicio(request):\n    ...</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Identificación de código",
        "diff": "medium",
        "q": "¿Qué hace este código?",
        "opts": [
            "Crea un formulario que envía datos mediante POST e incluye el token CSRF para la protección de la solicitud.",
            "Crea un formulario que envía los datos mediante GET y no incluye protección.",
            "Crea una tabla HTML que muestra los datos guardados en la base.",
            "Crea un botón que redirige a otra página sin enviar datos al servidor."
        ],
        "ans": 0,
        "exp": "Crea un formulario que envía datos mediante POST e incluye el token CSRF para la protección de la solicitud.",
        "extra": "<div class=\"extra-content\"><div style=\"background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;white-space:pre-wrap;\">&lt;form method=\"POST\"&gt;\n    {% csrf_token %}\n    &lt;input type=\"text\" name=\"nombre\"&gt;\n    &lt;button type=\"submit\"&gt;Guardar&lt;/button&gt;\n&lt;/form&gt;</div></div>"
    },

    {
        "profe": false,
        "unit": "Django - Aplicación y razonamiento",
        "diff": "hard",
        "q": "Si necesitas agregar un campo nuevo a un modelo, ¿qué pasos debes realizar?",
        "opts": [
            "Eliminar la base de datos, modificar el modelo y crear la base nuevamente.",
            "Ejecutar migrate y luego modificar el modelo para registrar el nuevo campo.",
            "Modificar el modelo, ejecutar makemigrations para generar la migración y después ejecutar migrate para aplicar el cambio a la base de datos.",
            "Modificar directamente la tabla en la base de datos sin usar Django."
        ],
        "ans": 2,
        "exp": "Modificar el modelo, ejecutar makemigrations para generar la migración y después ejecutar migrate para aplicar el cambio a la base de datos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Aplicación y razonamiento",
        "diff": "hard",
        "q": "Si un usuario no puede acceder a una página porque no ha iniciado sesión, ¿qué mecanismo puedes utilizar?",
        "opts": [
            "El decorador @csrf_exempt, que permite el acceso sin iniciar sesión.",
            "Una plantilla que muestra un mensaje de error a los usuarios no autenticados.",
            "El decorador login_required, que restringe el acceso a usuarios autenticados.",
            "Un middleware que cifra la contraseña del usuario antes de guardarla."
        ],
        "ans": 2,
        "exp": "El decorador login_required, que restringe el acceso a usuarios autenticados.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Aplicación y razonamiento",
        "diff": "hard",
        "q": "Si necesitas mostrar los productos registrados en una página web, ¿qué componentes de Django utilizarías?",
        "opts": [
            "Solo un modelo, porque el modelo muestra los datos en el navegador.",
            "Solo una vista, porque la vista puede consultar la base y mostrar los productos.",
            "Solo una plantilla, porque la plantilla consulta directamente la base de datos.",
            "Un modelo para obtener los productos, una vista para procesar la información, una ruta para acceder a la vista y una plantilla para mostrarlos."
        ],
        "ans": 3,
        "exp": "Un modelo para obtener los productos, una vista para procesar la información, una ruta para acceder a la vista y una plantilla para mostrarlos.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Aplicación y razonamiento",
        "diff": "hard",
        "q": "Si un formulario envía datos mediante POST y Django devuelve un error CSRF, ¿qué revisarías?",
        "opts": [
            "Que el archivo settings.py tenga activada la variable DEBUG.",
            "Que el formulario incluya {% csrf_token %} y que la protección CSRF esté correctamente configurada.",
            "Que el navegador tenga desactivadas las cookies de la sesión.",
            "Que el formulario use el método GET en lugar de POST."
        ],
        "ans": 1,
        "exp": "Que el formulario incluya {% csrf_token %} y que la protección CSRF esté correctamente configurada.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Aplicación y razonamiento",
        "diff": "hard",
        "q": "Si una página devuelve un error 404, ¿qué revisarías?",
        "opts": [
            "La dirección ingresada y las rutas definidas en urls.py, para comprobar que exista una ruta que corresponda a esa dirección.",
            "Que el servidor de base de datos esté apagado.",
            "Que las migraciones no se hayan aplicado correctamente.",
            "Que el modelo tenga errores de sintaxis en sus campos."
        ],
        "ans": 0,
        "exp": "La dirección ingresada y las rutas definidas en urls.py, para comprobar que exista una ruta que corresponda a esa dirección.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Aplicación y razonamiento",
        "diff": "hard",
        "q": "Si los datos de un modelo no aparecen en la base de datos, ¿qué revisarías?",
        "opts": [
            "Que el servidor de desarrollo use un puerto distinto al 8000.",
            "Que el archivo urls.py tenga una ruta duplicada con otro nombre.",
            "Que el modelo esté correctamente definido, que se hayan aplicado las migraciones y que el código esté guardando los registros correctamente.",
            "Que el navegador tenga la memoria caché llena."
        ],
        "ans": 2,
        "exp": "Que el modelo esté correctamente definido, que se hayan aplicado las migraciones y que el código esté guardando los registros correctamente.",
        "extra": ""
    },

    {
        "profe": false,
        "unit": "Django - Aplicación y razonamiento",
        "diff": "hard",
        "q": "Si necesitas restringir una operación para que solamente la realice un administrador, ¿qué debes utilizar?",
        "opts": [
            "Una plantilla que muestra el panel solo si el usuario tiene rol de administrador.",
            "Un decorador de caché que guarda la respuesta de la vista.",
            "Un modelo que almacena la lista de administradores del sistema.",
            "Un mecanismo de autenticación y autorización, comprobando que el usuario tenga los permisos necesarios para realizar esa operación."
        ],
        "ans": 3,
        "exp": "Un mecanismo de autenticación y autorización, comprobando que el usuario tenga los permisos necesarios para realizar esa operación.",
        "extra": ""
    },


  // ===== MODELOS =====
  P('Django - Modelos', 'easy',
    '¿Qué clase base deben heredar los modelos de Django?',
    ['forms.Model', 'models.Model', 'db.Table', 'admin.Entity'],
    1,
    'DEFINICIÓN: un modelo es una clase de Python que hereda de models.Model y que Django convierte en una tabla de la base de datos.'),

  P('Django - Modelos', 'medium',
    '¿Qué atributo de Meta define el orden por defecto de los registros?',
    ['order', 'ordering', 'sort_by', 'default_order'],
    1,
    'Ejemplo: class Meta: ordering = ["-fecha"] ordena de la fecha más reciente a la más antigua.'),

  P('Django - Modelos', 'medium',
    '¿Cuál es la diferencia entre null=True y blank=True?',
    ['null afecta a los formularios; blank afecta a la base de datos',
     'null afecta a la base de datos (permite NULL); blank afecta a la validación (permite dejar el campo vacío en formularios)',
     'Son sinónimos y hacen lo mismo',
     'blank=True obliga a llenar el campo'],
    1,
    'Para campos de texto Django recomienda evitar null=True y usar solo blank=True, para no tener dos formas de "vacío".',
    TABLA([
      ['Opción', 'Qué controla', 'Dónde se aplica'],
      ['null=True', 'Permite el valor NULL', 'Base de datos'],
      ['blank=True', 'Permite campo vacío', 'Validación de formularios y admin'],
    ])),

  P('Django - Modelos', 'medium',
    '¿Qué campo guarda la fecha de creación automáticamente una sola vez?',
    ['auto_now', 'auto_now_add', 'created_at=now', 'DateField(default=True)'],
    1,
    'auto_now guarda la fecha en CADA save(); auto_now_add solo la guarda al CREAR el registro.'),

  P('Django - Modelos', 'easy',
    '¿Qué método define cómo se muestra un objeto del modelo (por ejemplo, en el panel admin)?',
    ['__init__', '__str__', '__save__', '__meta__'],
    1,
    '__str__ devuelve una representación en texto del objeto. Sin él, el admin muestra algo como "Libro object (1)".'),

  P('Django - Modelos', 'medium',
    '¿Para qué sirve db_index=True en un campo?',
    ['Hace el campo obligatorio',
     'Lo convierte en clave primaria',
     'Crea un índice en la base de datos para acelerar búsquedas sobre ese campo',
     'Elimina el campo de la base'],
    2,
    'Los índices aceleran las consultas por ese campo a cambio de ocupar espacio y ralentizar un poco las escrituras.'),

  P('Django - Modelos', 'medium',
    'En el panel de administración, ¿qué se debe hacer para que aparezca un modelo?',
    ['Escribir una migración de tipo admin',
     'Crear una vista llamada admin',
     'Registrarlo en admin.py con admin.site.register o con una clase ModelAdmin',
     'Cambiar DEBUG a False'],
    2,
    'El admin de Django solo muestra los modelos que se registran explícitamente en admin.py.'),

  // ===== RELACIONES =====
  P('Django - Relaciones', 'easy',
    '¿Qué campo se usa para una relación uno a muchos?',
    ['ManyToManyField', 'ForeignKey', 'OneToOneField', 'CharField'],
    1,
    'Ejemplo: muchos Libros pertenecen a un solo Autor. La ForeignKey va en el lado "muchos".'),

  P('Django - Relaciones', 'medium',
    '¿Qué campo se usa para una relación muchos a muchos?',
    ['ForeignKey', 'ManyToManyField', 'CharField con lista', 'JSONField obligatorio'],
    1,
    'Ejemplo: un Estudiante puede tomar varios Cursos y un Curso tiene varios Estudiantes. Django crea una tabla intermedia automáticamente.'),

  P('Django - Relaciones', 'hard',
    '¿Cuál es la diferencia entre ForeignKey, OneToOneField y ManyToManyField?',
    ['ForeignKey es 1 a muchos; OneToOneField es 1 a 1; ManyToManyField es muchos a muchos',
     'OneToOneField es muchos a muchos; ForeignKey es 1 a 1',
     'Son lo mismo con distinto nombre',
     'ForeignKey no crea ninguna columna en la base de datos'],
    0,
    'Cada campo define la cardinalidad de la relación entre dos modelos.',
    TABLA([
      ['Campo', 'Cardinalidad', 'Ejemplo'],
      ['ForeignKey', 'N a 1 (muchos a uno)', 'Muchos Libros, un Autor'],
      ['OneToOneField', '1 a 1', 'Un Usuario, un Perfil'],
      ['ManyToManyField', 'N a N', 'Estudiantes y Cursos'],
    ])),

  P('Django - Relaciones', 'medium',
    '¿Para qué sirve related_name en un ForeignKey?',
    ['Cambia el nombre de la tabla en la base de datos',
     'Define el nombre para acceder a los objetos relacionados desde el modelo padre',
     'Crea un alias de la clase',
     'Ordena los registros relacionados'],
    1,
    'Con related_name="libros" puedes hacer autor.libros.all() en lugar del nombre por defecto libro_set.'),

  P('Django - Relaciones', 'medium',
    'Con on_delete=models.CASCADE, ¿qué ocurre al borrar el registro padre?',
    ['Se impide el borrado siempre',
     'Se borran también los registros hijos relacionados',
     'Los hijos quedan con su clave en NULL automáticamente',
     'Solo se borra el padre y los hijos no cambian'],
    1,
    'Si borras un Autor con CASCADE, se borran todos sus Libros. Úsalo solo cuando el hijo no tiene sentido sin el padre.'),

  P('Django - Relaciones', 'hard',
    '¿Cuál es la diferencia entre on_delete=PROTECT y on_delete=CASCADE?',
    ['PROTECT impide borrar el padre si tiene hijos; CASCADE borra también los hijos',
     'CASCADE impide el borrado; PROTECT borra los hijos',
     'Ambos hacen exactamente lo mismo',
     'PROTECT solo funciona con ManyToManyField'],
    0,
    'Elegir on_delete es una decisión de integridad de datos.',
    TABLA([
      ['Opción', 'Qué pasa con los hijos al borrar el padre'],
      ['CASCADE', 'Se borran'],
      ['PROTECT', 'Se impide borrar el padre (ProtectedError)'],
      ['SET_NULL', 'Quedan con NULL (requiere null=True)'],
      ['SET_DEFAULT', 'Toman un valor por defecto'],
    ])),

  // ===== QUERYSETS =====
  P('Django - QuerySets', 'medium',
    '¿Qué devuelve Modelo.objects.filter(...)?',
    ['Un objeto único, o error si no existe',
     'Un QuerySet, que puede estar vacío',
     'Una lista de Python siempre',
     'Una conexión directa a la base de datos'],
    1,
    'filter() siempre devuelve un QuerySet, aunque no encuentre nada. get() es el que devuelve un objeto único.'),

  P('Django - QuerySets', 'medium',
    '¿Cuál es la diferencia entre get() y filter()?',
    ['get() devuelve un único objeto y lanza error si no existe o si hay varios; filter() devuelve un QuerySet con 0, 1 o muchos resultados',
     'filter() lanza error si no encuentra nada; get() devuelve una lista',
     'Son iguales salvo por el nombre',
     'get() solo funciona con consultas de texto'],
    0,
    'Errores típicos: Modelo.DoesNotExist (get sin resultados) y Modelo.MultipleObjectsReturned (get con varios).',
    TABLA([
      ['Método', 'Devuelve', 'Si no hay resultados', 'Si hay varios'],
      ['get()', 'Un objeto', 'Error DoesNotExist', 'Error MultipleObjectsReturned'],
      ['filter()', 'QuerySet', 'QuerySet vacío', 'QuerySet con todos'],
    ])),

  P('Django - QuerySets', 'hard',
    '¿Qué significa que los QuerySets sean "perezosos" (lazy)?',
    ['La consulta no se ejecuta en la base hasta que se necesitan los resultados (al iterar, evaluar o usar len)',
     'Se ejecutan en paralelo siempre',
     'Se guardan en disco automáticamente',
     'No pueden encadenarse con otros filtros'],
    0,
    'Puedes encadenar filter().exclude().order_by() sin tocar la base; la consulta real se ejecuta solo cuando la usas.'),

  P('Django - QuerySets', 'medium',
    '¿Qué hace el objeto Q() en Django?',
    ['Crea claves primarias',
     'Combina condiciones complejas con OR (|) y AND (&) dentro de una consulta',
     'Genera migraciones',
     'Define formularios'],
    1,
    'Ejemplo: Libro.objects.filter(Q(titulo__icontains="django") | Q(autor__nombre="Ana")).'),

  P('Django - QuerySets', 'medium',
    '¿Qué hace F("precio") en una consulta?',
    ['Formatea el precio como moneda',
     'Crea un campo nuevo llamado precio',
     'Hace referencia al valor del campo precio de la misma fila para operar directamente en la base',
     'Filtra solo los precios vacíos'],
    2,
    'Ejemplo: Producto.objects.update(precio=F("precio") * 1.1) aplica un aumento en una sola consulta, sin traer los datos a Python.'),

  P('Django - QuerySets', 'medium',
    '¿Cuál es la diferencia entre annotate() y aggregate()?',
    ['aggregate devuelve un diccionario con un resumen global; annotate agrega un valor calculado a cada objeto del QuerySet',
     'annotate devuelve un solo valor global; aggregate calcula por cada objeto',
     'Son lo mismo',
     'Solo aggregate permite usar Sum'],
    0,
    'aggregate() responde "¿cuál es el total?". annotate() responde "¿cuál es el total de cada uno?".',
    TABLA([
      ['Método', 'Resultado', 'Ejemplo'],
      ['aggregate()', 'Un diccionario con un valor', 'Total de ventas del mes'],
      ['annotate()', 'Un QuerySet con un campo extra por objeto', 'Número de libros de cada autor'],
    ])),

  P('Django - QuerySets', 'medium',
    '¿Cuál es la diferencia entre instancia.save() y QuerySet.update()?',
    ['update() es solo para crear registros nuevos',
     'save() no escribe en la base de datos',
     'save() guarda una instancia y ejecuta las señales y validaciones del modelo; update() modifica varios registros directamente en la base sin llamar a save()',
     'Son idénticos en todos los casos'],
    2,
    'update() es más rápido para cambios masivos, pero no dispara señales (signals) ni el método save() personalizado.'),

  P('Django - QuerySets', 'medium',
    '¿Qué devuelve get_or_create()?',
    ['Solo un booleano',
     'Una tupla (objeto, creado), donde "creado" indica si se insertó un nuevo registro',
     'Siempre lanza error si el registro ya existe',
     'Una lista con todos los objetos del modelo'],
    1,
    'Ejemplo: obj, creado = Pais.objects.get_or_create(nombre="Chile"). Si creado es True, el registro es nuevo.'),

  P('Django - QuerySets', 'hard',
    '¿Por qué usar bulk_create() en lugar de create() dentro de un ciclo?',
    ['Reduce la cantidad de consultas a la base al insertar varios registros en lote',
     'Evita usar la base de datos',
     'Crea solo tablas nuevas',
     'Sustituye a las migraciones'],
    0,
    'Crear 1000 registros con create() en un for hace 1000 INSERT. bulk_create() los agrupa en pocas consultas.'),

  P('Django - QuerySets', 'hard',
    '¿Qué es el problema N+1 en Django?',
    ['Tener N+1 migraciones pendientes',
     'Hacer una consulta para la lista principal y una consulta adicional por cada elemento al acceder a sus relaciones',
     'Crear un modelo con N+1 campos',
     'Un error al usar más de una aplicación'],
    1,
    'Solución: select_related() o prefetch_related() para traer las relaciones en menos consultas.'),

  P('Django - QuerySets', 'hard',
    '¿Cuál es la diferencia entre select_related() y prefetch_related()?',
    ['select_related hace un JOIN en una sola consulta (ForeignKey y OneToOne); prefetch_related hace consultas separadas y une los resultados en Python (ManyToMany y relaciones inversas)',
     'prefetch_related hace JOIN; select_related consulta por separado siempre',
     'Ambos sirven solo para ManyToManyField',
     'Son lo mismo y se pueden cambiar sin efecto'],
    0,
    'Ambos reducen consultas (evitan el N+1), pero se usan en relaciones distintas.',
    TABLA([
      ['Método', 'Estrategia', 'Relaciones típicas'],
      ['select_related()', 'JOIN en una sola consulta', 'ForeignKey, OneToOneField'],
      ['prefetch_related()', 'Consultas separadas + unión en Python', 'ManyToManyField, relaciones inversas'],
    ])),

  // ===== MIGRACIONES Y CONFIGURACIÓN =====
  P('Django - Migraciones', 'easy',
    '¿Qué comando crea los archivos de migración a partir de los cambios en models.py?',
    ['python manage.py migrate',
     'python manage.py makemigrations',
     'python manage.py runserver',
     'python manage.py createsuperuser'],
    1,
    'Flujo: 1) cambias models.py, 2) makemigrations crea el archivo, 3) migrate aplica el cambio a la base.'),

  P('Django - Migraciones', 'medium',
    '¿Cuál es la diferencia entre makemigrations y migrate?',
    ['makemigrations aplica cambios a la base; migrate crea archivos de migración',
     'makemigrations crea los archivos de migración a partir de los modelos; migrate aplica esos cambios a la base de datos',
     'Son sinónimos',
     'migrate solo funciona con SQLite'],
    1,
    'makemigrations = "planificar el cambio" (genera código). migrate = "ejecutar el cambio" (modifica la base).'),

  P('Django - Configuración', 'easy',
    '¿Qué motor de base de datos usa Django por defecto en un proyecto nuevo?',
    ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB'],
    2,
    'SQLite viene configurado en settings.py (DATABASES) y no requiere instalar un servidor. Para producción se suele cambiar a PostgreSQL o MySQL.'),

  P('Django - Configuración', 'hard',
    '¿Qué garantiza transaction.atomic en Django?',
    ['Que varias operaciones se completen todas juntas o se deshagan todas si una falla',
     'Que la base de datos se respalde cada hora',
     'Que los modelos se migren sin errores',
     'Que las consultas se ejecuten en paralelo'],
    0,
    'Propiedad de atomicidad (ACID): útil, por ejemplo, para descontar stock y crear una orden como una sola operación.'),

    P('Django - Vistas y URLs', 'easy', '¿Qué es una vista (view) en Django?',
        ['Una función o clase que recibe una petición y devuelve una respuesta', 'Una tabla de la base de datos', 'Un tipo de migración', 'Un archivo CSS'], 0,
        'La vista es el "controlador" del flujo: obtiene datos del modelo y decide qué plantilla o JSON devolver.'),
      P('Django - Vistas y URLs', 'medium', '¿Cuál es la diferencia entre FBV (vista basada en función) y CBV (basada en clase)?',
        ['FBV es una función; CBV es una clase que reutiliza comportamiento por herencia y métodos como get() y post()', 'CBV es solo para JSON', 'FBV no puede usar formularios', 'Son idénticas en todo'], 0,
        'Las CBV reducen código repetido (ListView, DetailView, CreateView), a cambio de ser más difíciles de seguir al principio.',
        TABLA([['Aspecto', 'FBV', 'CBV'], ['Forma', 'Función', 'Clase'], ['Reutilización', 'Manual', 'Herencia y mixins'], ['Ejemplo', 'def inicio(request)', 'class Inicio(ListView)']])),
      P('Django - Vistas y URLs', 'medium', '¿Qué función genera una URL a partir del nombre de la ruta en Django?',
        ['reverse()', 'redirect_all()', 'url_name()', 'build_url()'], 0,
        'Con reverse("detalle", args=[5]) obtienes la URL sin escribirla a mano. Es lo que usa la etiqueta {% url %} de las plantillas.'),
      P('Django - Vistas y URLs', 'medium', '¿Para qué sirve path() en urls.py?',
        ['Definir una ruta con un patrón legible y convertidores como <int:id>', 'Crear una base de datos', 'Definir un modelo', 'Cambiar el idioma del sitio'], 0,
        'Convertidores comunes: <int:>, <str:>, <slug:>. re_path() se usa para expresiones regulares.'),
      P('Django - Plantillas', 'easy', '¿Qué sistema de plantillas usa Django por defecto?',
        ['Django Template Language (DTL)', 'Handlebars', 'ERB', 'Blade'], 0,
        'Usa {{ variable }} para mostrar datos y {% etiqueta %} para lógica.'),
      P('Django - Plantillas', 'medium', '¿Qué es un context processor?',
        ['Una función que agrega variables automáticamente a todas las plantillas', 'Un procesador de imágenes', 'Un tipo de QuerySet', 'Un middleware de seguridad'], 0,
        'Ejemplo: request.user queda disponible en todas las plantillas gracias al context processor de autenticación.'),
      P('Django - Plantillas', 'medium', '¿Para qué sirve collectstatic?',
        ['Reunir los archivos estáticos en una carpeta para producción', 'Borrar la base de datos', 'Crear un superusuario', 'Ejecutar pruebas'], 0,
        'En desarrollo, Django sirve los estáticos automáticamente; en producción hay que recopilarlos para que un servidor web los entregue.'),
      P('Django - Middleware y configuración', 'medium', '¿Cuál es la función de un middleware en Django?',
        ['Procesar peticiones y respuestas de forma global (sesiones, seguridad, autenticación)', 'Crear modelos', 'Ejecutar migraciones', 'Renderizar solo imágenes'], 0,
        'Se configura en la lista MIDDLEWARE de settings.py, y el orden importa.'),
      P('Django - Middleware y configuración', 'medium', '¿En qué archivo se configuran DATABASES, INSTALLED_APPS y MIDDLEWARE?',
        ['settings.py', 'urls.py', 'manage.py', 'wsgi.py'], 0,
        'urls.py define rutas; manage.py es la herramienta de comandos; wsgi.py conecta con el servidor.'),
      P('Django - Middleware y configuración', 'medium', '¿Qué comando ejecuta las pruebas de un proyecto Django?',
        ['python manage.py test', 'python manage.py check', 'python manage.py shell', 'python manage.py testserver'], 0,
        'check valida la configuración; shell abre una consola interactiva con el ORM.'),
    
      P('Django - Formularios y API', 'medium', '¿Qué ventaja tiene ModelForm?',
        ['Genera el formulario a partir de un modelo y valida según sus campos', 'Crea tablas en la base automáticamente', 'Solo funciona con JSON', 'Reemplaza a las vistas'], 0,
        'Reduce código repetido: los campos, etiquetas y validaciones salen del modelo.'),
      P('Django - Formularios y API', 'medium', 'En Django REST Framework, ¿qué cumple un Serializer?',
        ['Convierte modelos a JSON y valida los datos de entrada', 'Crea la base de datos', 'Maneja sesiones de usuario', 'Compila plantillas'], 0,
        'Un ModelSerializer convierte instancias a diccionarios serializables y valida en sentido inverso.'),
      P('Django - Formularios y API', 'medium', '¿Cuál es la diferencia entre ViewSet y APIView en DRF?',
        ['ViewSet agrupa acciones CRUD para un recurso; APIView define manualmente métodos como get() y post()', 'APIView solo sirve para autenticación', 'Son lo mismo con distinto nombre', 'ViewSet no puede usar serializers'], 0,
        'Con ModelViewSet obtienes list, create, retrieve, update y destroy en pocas líneas.'),
    
      P('Django - Autenticación y usuarios', 'medium', '¿Qué modelo de usuario trae Django por defecto?',
        ['auth.User', 'user.Account', 'models.Person', 'admin.Login'], 0,
        'Está en django.contrib.auth y se puede extender o reemplazar.'),
      P('Django - Autenticación y usuarios', 'hard', '¿Por qué se recomienda un modelo de usuario personalizado al iniciar un proyecto?',
        ['Permite cambiar campos del usuario después sin problemas de migraciones', 'Porque el modelo por defecto no se puede usar', 'Porque Django lo exige', 'Para evitar la autenticación'], 0,
        'Cambiar AUTH_USER_MODEL cuando el proyecto ya tiene migraciones es muy complicado; por eso se define al principio.'),
    
      P('Django - Modelos avanzados', 'medium', '¿Qué hace abstract = True en la clase Meta de un modelo?',
        ['Crea un modelo base que no genera tabla propia y cuyos hijos heredan sus campos', 'Hace la tabla temporal', 'Elimina la clave primaria', 'Convierte el modelo en vista SQL'], 0,
        'Útil para compartir campos como created_at y updated_at entre varios modelos.'),
      P('Django - Modelos avanzados', 'hard', '¿Qué diferencia hay entre herencia multi-tabla y un modelo proxy?',
        ['Multi-tabla crea una tabla por modelo hijo con relación; proxy no crea tabla nueva y solo cambia el comportamiento', 'Son iguales', 'Proxy crea dos bases de datos', 'Multi-tabla no usa ForeignKey'], 0,
        'Multi-tabla agrega datos (campos nuevos en otra tabla). Proxy solo cambia métodos, orden o el Manager sobre la misma tabla.',
        TABLA([['Tipo', 'Crea tabla nueva', 'Uso'], ['abstract', 'No', 'Compartir campos'], ['Multi-tabla', 'Sí, con relación', 'Agregar datos específicos'], ['Proxy', 'No', 'Cambiar comportamiento']])),
      P('Django - Modelos avanzados', 'medium', '¿Para qué sirve un Manager personalizado?',
        ['Encapsular consultas reutilizables sobre un modelo', 'Gestionar archivos del servidor', 'Cambiar la versión de Python', 'Renderizar plantillas'], 0,
        'Ejemplo: Libro.disponibles.all() donde disponibles es un Manager con su filtro.'),
      P('Django - Modelos avanzados', 'medium', '¿Qué hace un signal (señal) como post_save?',
        ['Ejecuta una acción automáticamente después de guardar un objeto', 'Borra el objeto', 'Crea un índice en la base', 'Cifra la contraseña del usuario'], 0,
        'Las señales desacoplan código: por ejemplo, crear un perfil al crear un usuario.'),
      P('Django - Modelos avanzados', 'hard', '¿Para qué sirve select_for_update()?',
        ['Bloquear filas durante una transacción para evitar actualizaciones concurrentes conflictivas', 'Ordenar resultados', 'Crear índices', 'Exportar a Excel'], 0,
        'Se usa dentro de transaction.atomic(). Es útil para evitar que dos usuarios compren el último producto a la vez.'),
      P('Django - Admin', 'medium', '¿Qué atributo de ModelAdmin define las columnas que se muestran en la lista del admin?',
        ['list_display', 'show_fields', 'columns', 'table_view'], 0,
        'Otros atributos útiles: list_filter (filtros laterales) y search_fields (buscador).'),
      P('Django - Pruebas y rendimiento', 'hard', '¿Qué problema evita usar prefetch_related en una lista con relaciones ManyToMany?',
        ['El problema N+1 de consultas', 'Errores de migración', 'Fallas de sesión', 'Conflictos de nombres de app'], 0,
        'Con prefetch se hace una consulta extra por relación en lugar de una por cada objeto de la lista.'),
        
];

export default preguntas_django_bd;
