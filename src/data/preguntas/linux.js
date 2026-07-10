const preguntas_linux = [

  // ========== PREGUNTAS DE INSTALACIÓN Y CONFIGURACIÓN ==========


  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear los usuarios Jimena, Clara y Valeria para la estructura de carpetas compartidas.",
    "q": "¿Qué comando se utiliza para crear un nuevo usuario en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# useradd Jimena\n[root@localhost ~]# id Jimena\nuid=1001(Jimena) gid=1001(Jimena) groups=1001(Jimena)\n[root@localhost ~]#</div>",
    "opts": [
      "useradd",
      "adduser",
      "newuser",
      "createuser"
    ],
    "ans": 0,
    "exp": "La simulación muestra la ejecución para generar una entrada en el archivo /etc/passwd y crear el entorno del usuario, verificando posteriormente su existencia con el comando id."
  },

  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear la estructura de carpetas: CarpetasCompartidas → AltaGerencia, Estrategias, Tacticas.",
    "q": "¿Qué comando se utiliza para crear un directorio llamado 'AltaGerencia' dentro de CarpetasCompartidas?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# cd CarpetasCompartidas\n[root@localhost CarpetasCompartidas]# command AltaGerencia\n[root@localhost CarpetasCompartidas]# ls -d AltaGerencia\nAltaGerencia\n[root@localhost CarpetasCompartidas]#</div>",
    "opts": [
      "mkdir",
      "create",
      "newdir",
      "dir"
    ],
    "ans": 0,
    "exp": "El proceso ilustra la creación de un nuevo nodo de tipo directorio en el sistema de archivos actual, validando su existencia mediante la bandera -d en el listado."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear los directorios AltaGerencia, Estrategias y Tacticas dentro de CarpetasCompartidas.",
    "q": "¿Cómo se crean varios directorios de una sola vez en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# command dir1 dir2 dir3\n[root@localhost ~]# ls -F | grep /\ndir1/ dir2/ dir3/\n[root@localhost ~]#</div>",
    "opts": [
      "mkdir dir1 dir2 dir3",
      "mkdir {dir1,dir2,dir3}",
      "mkdir dir1; mkdir dir2; mkdir dir3",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "La consola demuestra que existen múltiples sintaxis operativas en el shell para inicializar más de una entrada de directorio en una única instrucción."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide verificar los permisos de la estructura de carpetas creada.",
    "q": "¿Qué comando muestra los permisos, propietario, grupo y fecha de modificación de los directorios?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# command -l\ndrwxr-xr-x 2 root root 4096 Nov 16 10:00 dir1\n-rw-r--r-- 1 root root    0 Nov 16 10:01 file1\n[root@localhost ~]#</div>",
    "opts": [
      "ls",
      "ls -l",
      "ls -a",
      "dir"
    ],
    "ans": 1,
    "exp": "La salida muestra el formato extendido de metadatos, incluyendo los bits de modo, propietario, grupo, tamaño y marca de tiempo."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear archivos dentro de los directorios de la estructura.",
    "q": "¿Qué comando crea archivos vacíos en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# command archivo.txt\n[root@localhost ~]# ls -l archivo.txt\n-rw-r--r-- 1 root root 0 Nov 16 10:05 archivo.txt\n[root@localhost ~]#</div>",
    "opts": [
      "touch",
      "create",
      "new",
      "mkfile"
    ],
    "ans": 0,
    "exp": "El comando utilizado actualiza la marca de tiempo de acceso y modificación de un archivo; si este no existe, lo crea con un tamaño de cero bytes."
  },

  
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "Desde la terminal, se puede consultar información detallada sobre la versión del sistema operativo instalado.",
    "q": "¿Qué comando se utiliza para verificar la versión de Red Hat instalada?",
    "extra": `<div class="terminal-box" style="background:#1a1a1a;color:#00ff00;padding:15px;font-family:monospace;border-radius:5px;">
    [rromero@localhost ~]$ <input placeholder="Comando para ver versión" style="background:#333;color:#00ff00;border:1px solid #555;width:300px;">
    </div>`,
    "opts": [
      "uname -r",
      "version",
      "cat /etc/redhat-release",
      "system-info"
    ],
    "ans": 2,
    "exp": "El comando 'cat /etc/redhat-release' lee el archivo de configuración del sistema que contiene la información de la versión de Red Hat instalada."
  },

  // ========== PREGUNTAS DE COMANDOS BÁSICOS ==========
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "En la terminal de Linux, el prompt muestra información sobre el usuario y sus privilegios a través de símbolos específicos.",
    "q": "¿Qué diferencia al símbolo $ del símbolo # en la terminal de Linux?",
    "extra": `<div style="background:#1a1a1a;color:#00ff00;padding:15px;font-family:monospace;border-radius:5px;">
    [usuario@localhost ~]$<br>
    [root@localhost ~]#
    </div>`,
    "opts": [
      "$ indica usuario root y # indica usuario normal",
      "$ indica usuario normal y # indica usuario root o superusuario",
      "Ambos indican usuario root",
      "Ambos indican usuario normal"
    ],
    "ans": 1,
    "exp": "El símbolo $ se utiliza para indicar un usuario estándar, mientras que # denota que la sesión tiene privilegios de superusuario o administrador (root)."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'ls' permite listar archivos con diferentes niveles de detalle según las opciones que se le pasen.",
    "q": "¿Qué muestra el comando 'ls -l' al listar el contenido de un directorio?",
    "extra": `<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;'>
<div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal</div>
[root@localhost ~]# ls -l<br>
drwxr-xr-x. 2 root root 64 nov 16 15:39 Documentos<br>
-rw-r--r--. 1 root root 0 nov 16 16:00 nota.txt
</div>`,
    "opts": [
      "Solo los nombres de los archivos",
      "Permisos, propietario, grupo, tamaño y fecha de modificación",
      "Solo el tamaño de los archivos",
      "La fecha de creación de los archivos"
    ],
    "ans": 1,
    "exp": "El comando 'ls -l' (formato de lista larga) despliega una tabla con permisos, enlaces, usuario propietario, grupo, tamaño en bytes, fecha de última modificación y nombre del elemento."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'ls' puede listar el contenido de cualquier directorio del sistema especificando su ruta.",
    "q": "¿Qué muestra el comando 'ls /' en Linux?",
    "extra": `<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;'>
<div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal</div>
[root@localhost ~]# ls /<br>
bin boot dev etc home lib lib64 media mnt opt proc root run sbin srv sys tmp usr var
</div>`,
    "opts": [
      "Lista el contenido del directorio raíz del sistema",
      "Lista el contenido del directorio home",
      "Lista el contenido del directorio actual",
      "Muestra una lista de todos los usuarios del sistema"
    ],
    "ans": 0,
    "exp": "El carácter '/' representa el directorio raíz en sistemas Linux; al ejecutar 'ls /' listamos el contenido de dicho directorio jerárquico superior."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "Cuando se trabaja en la terminal, es importante saber en qué directorio nos encontramos para ejecutar comandos correctamente.",
    "q": "¿Qué función cumple el comando 'pwd' en Linux?",
    "extra": `<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;'>
<div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal</div>
[root@localhost ~]# pwd<br>
/root
</div>`,
    "opts": [
      "Lista los archivos del directorio",
      "Cambia de directorio",
      "Muestra la ruta del directorio de trabajo actual",
      "Crea un nuevo directorio"
    ],
    "ans": 2,
    "exp": "El comando 'pwd' proviene de 'Print Working Directory', y su función es imprimir en pantalla la ruta absoluta de la ubicación actual."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Para administrar un sistema Linux, es necesario crear cuentas de usuario para cada persona que vaya a utilizarlo.",
    "q": "¿Qué comando se utiliza para crear un nuevo usuario?",
    "extra": `<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;'>
<div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal</div>
[root@localhost ~]# <input placeholder="comando usuario" style="background:#333;color:#00ff00;border:1px solid #555;"> nombre_usuario
</div>`,
    "opts": [
      "adduser",
      "useradd",
      "createuser",
      "newuser"
    ],
    "ans": 1,
    "exp": "El comando 'useradd' es la herramienta estándar en sistemas basados en Red Hat para añadir una nueva cuenta de usuario al sistema."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "Después de crear un usuario, es necesario asignarle una contraseña para que pueda iniciar sesión.",
    "q": "¿Qué comando se utiliza para asignar una contraseña a un usuario existente?",
    "extra": `<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;'>
<div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal</div>
[root@localhost ~]# <input placeholder="comando" style="background:#333;color:#00ff00;border:1px solid #555;"> nombre_usuario
</div>`,
    "opts": [
      "passwd",
      "password",
      "changepwd",
      "setpass"
    ],
    "ans": 0,
    "exp": "El comando 'passwd' permite establecer o actualizar el token de autenticación (contraseña) del usuario especificado."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "Para organizar archivos en Linux, se utilizan directorios que se crean con un comando específico.",
    "q": "¿Qué comando se utiliza para crear un nuevo directorio?",
    "extra": `<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;'>
<div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal</div>
[root@localhost ~]# <input placeholder="comando" style="background:#333;color:#00ff00;border:1px solid #555;"> nombre_directorio
</div>`,
    "opts": [
      "create",
      "mkdir",
      "newdir",
      "dir"
    ],
    "ans": 1,
    "exp": "El comando 'mkdir' (make directory) es el comando fundamental para la creación de nuevos directorios en el sistema de archivos."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "Para ahorrar tiempo, es posible crear varios directorios con un solo comando.",
    "q": "¿Cómo se crean múltiples directorios de una sola vez con 'mkdir'?",
    "extra": `<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;'>
<div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal</div>
[root@localhost ~]# mkdir dir1 dir2 dir3
</div>`,
    "opts": [
      "mkdir dir1 dir2 dir3",
      "mkdir {dir1,dir2,dir3}",
      "mkdir dir1; mkdir dir2; mkdir dir3",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "Linux permite el uso de múltiples argumentos, expansión de llaves o encadenamiento de comandos mediante ';' para realizar acciones simultáneas."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'touch' es muy versátil y permite crear archivos vacíos de manera rápida.",
    "q": "¿Qué comando permite crear varios archivos de manera simultánea?",
    "extra": `<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;'>
<div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal</div>
[root@localhost ~]# touch {archivo1,archivo2,archivo3}.txt
</div>`,
    "opts": [
      "touch archivo1 archivo2 archivo3",
      "touch {archivo1,archivo2,archivo3}.txt",
      "touch archivo1; touch archivo2; touch archivo3",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "El comando 'touch' admite múltiples nombres de archivos, así como la expansión de llaves y el uso de separadores para crear varios archivos en un solo paso."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "En ocasiones es necesario eliminar directorios que contienen archivos, lo cual requiere opciones especiales.",
    "q": "¿Qué comando se utiliza para eliminar un directorio con todo su contenido?",
    "extra": `<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;'>
<div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal</div>
[root@localhost ~]# rm <input placeholder="opciones" style="background:#333;color:#00ff00;border:1px solid #555;"> directorio
</div>`,
    "opts": [
      "rm -r",
      "rm -rf",
      "rmdir",
      "del"
    ],
    "ans": 1,
    "exp": "La combinación '-rf' (recursivo y forzado) es necesaria para eliminar un directorio no vacío sin solicitar confirmación interactiva para cada archivo."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Linux permite utilizar patrones de búsqueda para listar archivos que cumplan ciertas condiciones.",
    "q": "¿Qué comando lista los archivos que comienzan con un carácter alfabético?",
    "extra": `<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;'>
<div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal</div>
[root@localhost ~]# ls [[:alpha:]]*
</div>`,
    "opts": [
      "ls [[:digit:]]*",
      "ls [[:alpha:]]*",
      "ls [[:alnum:]]*",
      "ls [[:space:]]*"
    ],
    "ans": 1,
    "exp": "El uso de corchetes con clases de caracteres como '[:alpha:]' permite filtrar el listado de archivos basándose en caracteres alfabéticos."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'cat' es uno de los comandos más utilizados para trabajar con archivos de texto.",
    "q": "¿Qué función cumple el comando 'cat' en Linux?",
    "extra": `<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;'>
<div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal</div>
[root@localhost ~]# cat archivo.txt
</div>`,
    "opts": [
      "Copiar archivos de un lugar a otro",
      "Concatenar archivos y mostrar su contenido en pantalla",
      "Eliminar archivos del sistema",
      "Mover archivos entre directorios"
    ],
    "ans": 1,
    "exp": "El comando 'cat' (concatenate) sirve principalmente para leer el contenido de archivos y enviarlo a la salida estándar."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'cp' tiene múltiples opciones que permiten copiar archivos preservando sus atributos.",
    "q": "¿Qué hace la opción '-a' del comando 'cp'?",
    "extra": `<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;'>
<div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal</div>
[root@localhost ~]# cp -a origen destino
</div>`,
    "opts": [
      "Copia solo el nombre del archivo",
      "Copia de forma recursiva preservando todos los atributos",
      "Elimina el archivo origen después de copiar",
      "Muestra ayuda sobre el comando cp"
    ],
    "ans": 1,
    "exp": "La opción '-a' (archive) es fundamental para preservar metadatos como permisos, propietarios y marcas de tiempo durante la copia."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'cp' tiene diferentes sintaxis dependiendo de si se copia a un archivo o a un directorio.",
    "q": "¿Cuál es la sintaxis correcta para copiar un archivo a un directorio en Linux?",
    "extra": `<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;'>
<div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal</div>
[root@localhost ~]# cp archivo.txt /ruta/directorio/
</div>`,
    "opts": [
      "cp origen destino",
      "cp origen directorio",
      "cp -r origen directorio",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "El comando 'cp' es flexible y acepta múltiples formas de especificar el destino, incluyendo la recursividad necesaria para directorios."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "En la salida de 'ls -l', el primer carácter de cada línea proporciona información sobre el tipo de elemento.",
    "q": "En la salida de 'ls -l', ¿qué representa la primera letra de cada línea como 'd' o '-'?",
    "extra": `<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;'>
[root@localhost ~]# ls -l<br>
<span style="color:yellow">d</span>rwxr-xr-x. 2 root...<br>
<span style="color:yellow">-</span>rw-r--r--. 1 root...
</div>`,
    "opts": [
      "El tamaño del archivo",
      "El propietario del archivo",
      "Si es un directorio (d) o un archivo regular (-)",
      "La fecha de modificación"
    ],
    "ans": 2,
    "exp": "El primer carácter indica el tipo de archivo: 'd' significa directorio, '-' indica un archivo regular y 'l' un enlace simbólico."
  },

  // ==========================================================================
  // ========== SECCIÓN: PREGUNTAS DE PERMISOS Y USUARIOS                    ==========
  // ========== (Incluye gestión de usuarios, grupos y estructuras de archivos) ==========
  // ==========================================================================

  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear los usuarios Jimena, Clara y Valeria para la estructura de carpetas compartidas.",
    "q": "¿Qué comando se utiliza para crear un nuevo usuario en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# useradd Jimena\n[root@localhost ~]# passwd Jimena\nCambiando la contraseña del usuario Jimena.\nNueva contraseña: \nVuelva a escribir la nueva contraseña: \npasswd: todos los tokens de autenticación se actualizaron exit\n[root@localhost ~]#</div>",
    "opts": [
      "useradd Jimena",
      "adduser Jimena",
      "newuser Jimena",
      "createuser Jimena"
    ],
    "ans": 0,
    "exp": "El comando 'useradd' seguido del nombre de usuario crea un nuevo usuario en el sistema."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear la estructura de carpetas: CarpetasCompartidas → AltaGerencia, Estrategias, Tacticas.",
    "q": "¿Qué comando se utiliza para crear un directorio llamado 'AltaGerencia' dentro de CarpetasCompartidas?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# cd /home/Jimena\n[root@localhost Jimena]# mkdir Carpetascompartidas\n[root@localhost Jimena]# cd Carpetascompartidas\n[root@localhost Carpetascompartidas]# mkdir AltaGerencia\n[root@localhost Carpetascompartidas]# ls\nAltaGerencia\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "mkdir AltaGerencia",
      "create AltaGerencia",
      "newdir AltaGerencia",
      "dir AltaGerencia"
    ],
    "ans": 0,
    "exp": "El comando 'mkdir' seguido del nombre del directorio crea un nuevo directorio en la ubicación actual."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear los directorios AltaGerencia, Estrategias y Tacticas dentro de CarpetasCompartidas.",
    "q": "¿Cómo se crean varios directorios de una sola vez en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# mkdir AltaGerencia Estrategias Tacticas\n[root@localhost Carpetascompartidas]# ls\nAltaGerencia  Estrategias  Tacticas\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "mkdir dir1 dir2 dir3",
      "mkdir {dir1,dir2,dir3}",
      "mkdir dir1; mkdir dir2; mkdir dir3",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "Se pueden crear múltiples directorios con 'mkdir dir1 dir2 dir3', con llaves o con punto y coma."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide verificar los permisos de la estructura de carpetas creada.",
    "q": "¿Qué comando muestra los permisos, propietario, grupo y fecha de modificación de los directorios?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# ls -l\ntotal 0\ndrwxr-xr-x. 2 root root 64 nov 16 15:39 AltaGerencia\ndrwxr-xr-x. 2 root root 46 nov 16 15:55 Estrategias\ndrwxr-xr-x. 2 root root 6 nov 16 15:21 Tacticas\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "ls",
      "ls -l",
      "ls -a",
      "dir"
    ],
    "ans": 1,
    "exp": "El comando 'ls -l' muestra permisos, propietario, grupo, tamaño y fecha de modificación."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear archivos dentro de los directorios de la estructura.",
    "q": "¿Qué comando crea archivos vacíos en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost AltaGerencia]# touch InformeRendimiento.txt ReporteSeguridad.txt\n[root@localhost AltaGerencia]# ls\nInformeRendimiento.txt ReporteSeguridad.txt\n[root@localhost AltaGerencia]#</div>",
    "opts": [
      "touch archivo.txt",
      "create archivo.txt",
      "new archivo.txt",
      "mkfile archivo.txt"
    ],
    "ans": 0,
    "exp": "El comando 'touch' seguido del nombre del archivo crea un archivo vacío."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide eliminar un directorio con todo su contenido y luego volverlo a crear.",
    "q": "¿Qué comando elimina un directorio con todo su contenido de forma forzada?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# rm -rf Tacticas\n[root@localhost Carpetascompartidas]# ls\nAltaGerencia Estrategias\n[root@localhost Carpetascompartidas]# mkdir Tacticas\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "rm -r directorio",
      "rm -rf directorio",
      "rmdir directorio",
      "del directorio"
    ],
    "ans": 1,
    "exp": "El comando 'rm -rf directorio' elimina el directorio y todo su contenido de forma recursiva y forzada."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El profesor pregunta sobre el símbolo del prompt en la terminal.",
    "q": "¿Qué diferencia al símbolo $ del símbolo # en la terminal de Linux?",
    "extra": "",
    "opts": [
      "$ es usuario normal, # es usuario root",
      "$ es usuario root, # es usuario normal",
      "Ambos son usuario root",
      "Ambos son usuario normal"
    ],
    "ans": 0,
    "exp": "El símbolo $ indica usuario normal, mientras que # indica usuario root o superusuario."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El profesor pide moverse entre directorios durante la prueba.",
    "q": "¿Qué comando se utiliza para cambiar de directorio en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# cd /home/Jimena\n[root@localhost Jimena]# pwd\n/home/Jimena\n[root@localhost Jimena]# cd Carpetascompartidas\n[root@localhost Carpetascompartidas]# pwd\n/home/Jimena/Carpetascompartidas\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "cd directorio",
      "move directorio",
      "chdir directorio",
      "goto directorio"
    ],
    "ans": 0,
    "exp": "El comando 'cd' (change directory) seguido del nombre del directorio cambia a ese directorio."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El profesor pide crear varios archivos a la vez en la prueba.",
    "q": "¿Cómo se crean varios archivos con nombres diferentes de manera simultánea?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# touch {2025,2026,Trazabilidad}.txt\n[root@localhost Carpetascompartidas]# ls\n2025.txt 2026.txt Trazabilidad.txt AltaGerencia Estrategias Tacticas\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "touch archivo1 archivo2 archivo3",
      "touch {archivo1,archivo2,archivo3}.txt",
      "touch archivo1; touch archivo2; touch archivo3",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "Se pueden crear múltiples archivos con 'touch arch1 arch2 arch3', con llaves o con punto y coma."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El profesor pregunta sobre los permisos mostrados en 'ls -l'.",
    "q": "En la salida de 'ls -l', ¿qué indica la primera letra 'd' en los permisos?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>drwxr-xr-x. 2 root root 64 nov 16 15:39 AltaGerencia\n-rw-r--r--. 1 root root 0 nov 16 16:00 archivo.txt\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "Es un archivo ejecutable",
      "Es un directorio",
      "Es un archivo de texto",
      "Es un enlace simbólico"
    ],
    "ans": 1,
    "exp": "La letra 'd' al inicio de los permisos indica que es un directorio. '-' indica archivo regular."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Después de crear la estructura de carpetas, el profesor pide asignar propietarios a cada carpeta según el organigrama.",
    "q": "¿Qué comando se utiliza para cambiar el propietario de un directorio en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# chown Jimena AltaGerencia\n[root@localhost Carpetascompartidas]# ls -l\ntotal 0\ndrwxr-xr-x. 2 Jimena root 64 nov 16 15:39 AltaGerencia\ndrwxr-xr-x. 2 root root 46 nov 16 15:55 Estrategias\ndrwxr-xr-x. 2 root root 6 nov 16 15:21 Tacticas\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "chown",
      "chmod",
      "chgrp",
      "chuser"
    ],
    "ans": 0,
    "exp": "El comando 'chown' (change owner) cambia el propietario de un archivo o directorio. Se usa 'chown usuario directorio'."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide asignar el grupo 'gerencia' a la carpeta AltaGerencia.",
    "q": "¿Qué comando se utiliza para cambiar el grupo propietario de un directorio?",
    "extra": "",
    "opts": [
      "chown",
      "chmod",
      "chgrp",
      "groupadd"
    ],
    "ans": 2,
    "exp": "El comando 'chgrp' (change group) cambia el grupo propietario de un archivo o directorio."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide que solo Jimena pueda acceder a su carpeta y el resto no.",
    "q": "¿Qué comando se utiliza para cambiar los permisos de un directorio en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# chmod 700 AltaGerencia\n[root@localhost Carpetascompartidas]# ls -l\ntotal 0\ndrwx------. 2 Jimena root 64 nov 16 15:39 AltaGerencia\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "chown",
      "chmod",
      "chgrp",
      "chperm"
    ],
    "ans": 1,
    "exp": "El comando 'chmod' (change mode) cambia los permisos de un archivo o directorio. 'chmod 700' da permisos solo al propietario."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide verificar que los permisos estén correctamente asignados.",
    "q": "¿Qué comando permite ver los permisos y propietarios de los directorios?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# ls -l\ntotal 0\ndrwx------. 2 Jimena root 64 nov 16 15:39 AltaGerencia\ndrwxr-x---. 2 Clara root 46 nov 16 15:55 Estrategias\ndrwxr-x---. 2 Valeria root 6 nov 16 15:21 Tacticas\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "ls",
      "ls -l",
      "ls -a",
      "dir"
    ],
    "ans": 1,
    "exp": "El comando 'ls -l' muestra los permisos, propietario, grupo, tamaño y fecha de modificación de cada archivo o directorio."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear un grupo nuevo para los usuarios de la empresa.",
    "q": "¿Qué comando se utiliza para crear un nuevo grupo en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# groupadd gerencia\n[root@localhost ~]# groupadd comunicacion\n[root@localhost ~]#</div>",
    "opts": [
      "addgroup",
      "groupadd",
      "creategroup",
      "newgroup"
    ],
    "ans": 1,
    "exp": "El comando 'groupadd' seguido del nombre del grupo crea un nuevo grupo en el sistema."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide agregar un usuario a un grupo específico.",
    "q": "¿Qué comando se utiliza para agregar un usuario a un grupo existente?",
    "extra": "",
    "opts": [
      "useradd -G grupo usuario",
      "adduser -G grupo usuario",
      "usermod -G grupo usuario",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "Se puede agregar un usuario a un grupo con 'useradd -G', 'adduser -G' o 'usermod -G'."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide que el usuario Clara pueda leer y ejecutar pero no escribir en su carpeta.",
    "q": "¿Qué permisos en notación simbólica permiten al propietario leer y ejecutar, pero no escribir?",
    "extra": "",
    "opts": [
      "r-x",
      "rwx",
      "r--",
      "--x"
    ],
    "ans": 0,
    "exp": "Los permisos 'r-x' significan lectura (r), sin escritura (-) y ejecución (x)."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide asignar permisos de lectura, escritura y ejecución solo al propietario.",
    "q": "¿Qué comando asigna permisos solo al propietario con 'chmod'?",
    "extra": "",
    "opts": [
      "chmod 700 directorio",
      "chmod 777 directorio",
      "chmod 755 directorio",
      "chmod 644 directorio"
    ],
    "ans": 0,
    "exp": "'chmod 700 directorio' da todos los permisos (rwx) solo al propietario y nada a grupo y otros."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide verificar en qué directorio está el usuario actualmente.",
    "q": "¿Qué comando muestra la ruta del directorio de trabajo actual?",
    "extra": "",
    "opts": [
      "pwd",
      "ls",
      "cd",
      "dir"
    ],
    "ans": 0,
    "exp": "El comando 'pwd' (print working directory) muestra la ruta completa del directorio donde está el usuario."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide salir del usuario root y volver al usuario normal.",
    "q": "¿Qué comando se utiliza para salir de la sesión de usuario root?",
    "extra": "",
    "opts": [
      "exit",
      "logout",
      "su - usuario",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "Se puede salir de la sesión root con 'exit', 'logout' o 'su - nombre_usuario'."
  },

  // ==========================================================================
  // ========== SECCIÓN: ESCENARIOS DE PRUEBA                                  ==========
  // ========== (Casos prácticos de simulación administrativa)                 ==========
  // ==========================================================================

  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "La empresa contrata a Johana como encargada de TI y a Carlos para Finanzas. Crea los usuarios y sus directorios.",
    "q": "¿Qué comandos se utilizan para crear un usuario y su directorio personal?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# useradd Johana\n[root@localhost ~]# passwd Johana\n[root@localhost ~]# useradd Carlos\n[root@localhost ~]# passwd Carlos\n[root@localhost ~]# ls /home\nJohana Carlos\n[root@localhost ~]#</div>",
    "opts": [
      "useradd Johana y useradd Carlos",
      "adduser Johana y adduser Carlos",
      "newuser Johana y newuser Carlos",
      "create Johana y create Carlos"
    ],
    "ans": 0,
    "exp": "El comando 'useradd' seguido del nombre crea el usuario y automáticamente su directorio personal en /home/nombre."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear los directorios TI, Finanzas y RecursosHumanos dentro del directorio /empresa.",
    "q": "¿Qué comando crea estos tres directorios de una sola vez?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# mkdir -p /empresa/{TI,Finanzas,RecursosHumanos}\n[root@localhost ~]# ls /empresa\nTI Finanzas RecursosHumanos\n[root@localhost ~]#</div>",
    "opts": [
      "mkdir /empresa/{TI,Finanzas,RecursosHumanos}",
      "mkdir TI Finanzas RecursosHumanos",
      "mkdir -p /empresa/TI /empresa/Finanzas /empresa/RecursosHumanos",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "Se puede usar mkdir con llaves, con -p para crear rutas completas, o uno por uno."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Johana es encargada de TI, Carlos de Finanzas y María de Recursos Humanos. Asígnales propietario a sus carpetas.",
    "q": "¿Qué comando asigna a Johana como propietaria de la carpeta TI?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# chown Johana /empresa/TI\n[root@localhost ~]# chown Carlos /empresa/Finanzas\n[root@localhost ~]# chown Maria /empresa/RecursosHumanos\n[root@localhost ~]# ls -l /empresa\nTI: Johana\nFinanzas: Carlos\nRecursosHumanos: Maria\n[root@localhost ~]#</div>",
    "opts": [
      "chown Johana /empresa/TI",
      "chmod Johana /empresa/TI",
      "chgrp Johana /empresa/TI",
      "owner Johana /empresa/TI"
    ],
    "ans": 0,
    "exp": "El comando 'chown' cambia el propietario de un directorio. Se usa 'chown usuario directorio'."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Carlos se va de vacaciones, debe darlo de baja temporal. Su compañera Ana asume Finanzas.",
    "q": "¿Qué comando elimina al usuario Carlos pero conserva sus archivos?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# userdel Carlos\n[root@localhost ~]# useradd Ana\n[root@localhost ~]# passwd Ana\n[root@localhost ~]# chown Ana /empresa/Finanzas\n[root@localhost ~]# ls /home\nJohana Ana Maria\n[root@localhost ~]#</div>",
    "opts": [
      "userdel Carlos",
      "userdel -r Carlos",
      "deluser Carlos",
      "remove Carlos"
    ],
    "ans": 0,
    "exp": "'userdel Carlos' elimina al usuario pero mantiene sus archivos. '-r' los elimina también."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Ana asume Finanzas mientras Carlos está de vacaciones. Cambia el propietario de la carpeta.",
    "q": "¿Qué comando asigna a Ana como propietaria de Finanzas?",
    "extra": "",
    "opts": [
      "chown Ana /empresa/Finanzas",
      "chmod Ana /empresa/Finanzas",
      "chgrp Ana /empresa/Finanzas",
      "move Ana /empresa/Finanzas"
    ],
    "ans": 0,
    "exp": "'chown Ana /empresa/Finanzas' cambia el propietario de Finanzas a Ana."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear un grupo 'finanzas' y meter a Carlos y Ana.",
    "q": "¿Qué comando crea el grupo 'finanzas' y agrega a Carlos y Ana?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# groupadd finanzas\n[root@localhost ~]# usermod -G finanzas Carlos\n[root@localhost ~]# usermod -G finanzas Ana\n[root@localhost ~]#</div>",
    "opts": [
      "groupadd finanzas; usermod -G finanzas Carlos; usermod -G finanzas Ana",
      "addgroup finanzas; adduser Carlos finanzas; adduser Ana finanzas",
      "creategroup finanzas; useradd Carlos finanzas; useradd Ana finanzas",
      "Todas las anteriores"
    ],
    "ans": 0,
    "exp": "Se crea el grupo con 'groupadd' y se agregan usuarios con 'usermod -G grupo usuario'."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El encargado de TI debe tener todos los permisos en su carpeta, los demás solo lectura.",
    "q": "¿Qué permisos debe tener Johana en /empresa/TI y el resto del grupo?",
    "extra": "",
    "opts": [
      "chmod 700 /empresa/TI",
      "chmod 750 /empresa/TI",
      "chmod 755 /empresa/TI",
      "chmod 770 /empresa/TI"
    ],
    "ans": 1,
    "exp": "750: propietario (7=rwx), grupo (5=r-x), otros (0=---). Johana hace todo, grupo solo lee y ejecuta, otros nada."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Ana termina su reemplazo en Finanzas y vuelve a su puesto en RecursosHumanos.",
    "q": "¿Qué comando cambia el propietario de Finanzas de vuelta a Carlos?",
    "extra": "",
    "opts": [
      "chown Carlos /empresa/Finanzas",
      "chmod Carlos /empresa/Finanzas",
      "chgrp Carlos /empresa/Finanzas",
      "move Carlos /empresa/Finanzas"
    ],
    "ans": 0,
    "exp": "'chown Carlos /empresa/Finanzas' devuelve la propiedad de Finanzas a Carlos."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide verificar que todos los usuarios, grupos y permisos estén correctos.",
    "q": "¿Qué comando muestra la estructura completa con propietarios y permisos?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# ls -l /empresa\ntotal 0\ndrwx------. 2 Johana finanzas 64 nov 16 15:39 TI\ndrwxr-x---. 2 Carlos finanzas 46 nov 16 15:55 Finanzas\ndrwx------. 2 Maria rrhh 6 nov 16 15:21 RecursosHumanos\n[root@localhost ~]#</div>",
    "opts": [
      "ls -l /empresa",
      "ls /empresa",
      "ls -a /empresa",
      "dir /empresa"
    ],
    "ans": 0,
    "exp": "'ls -l' muestra permisos, propietario, grupo, tamaño y fecha de modificación."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Resuelve el escenario completo: crea usuarios, grupos, directorios, asigna propietarios y permisos.",
    "q": "Ordena los comandos correctos para: crear usuario Johana, grupo ti, directorio TI, asignar propietario y permisos.",
    "extra": "",
    "opts": [
      "useradd Johana → groupadd ti → mkdir TI → chown Johana:ti TI → chmod 750 TI",
      "mkdir TI → useradd Johana → chown Johana TI → groupadd ti → chmod 750 TI",
      "groupadd ti → mkdir TI → useradd Johana → chmod 750 TI → chown Johana TI",
      "chmod 750 TI → useradd Johana → groupadd ti → mkdir TI → chown Johana TI"
    ],
    "ans": 0,
    "exp": "El orden correcto es: 1) crear usuario, 2) crear grupo, 3) crear directorio, 4) asignar propietario, 5) asignar permisos."
  },

  // ==========================================================================
  // ========== SECCIÓN: COMANDOS ADICIONALES Y UTILIDADES                     ==========
  // ========== (Comandos de sistema y navegación básica)                      ==========
  // ==========================================================================

  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "El comando sudo permite ejecutar comandos con privilegios de superusuario.",
    "q": "¿Qué significa la abreviatura 'sudo' y para qué sirve?",
    "extra": "",
    "opts": [
      "Significa 'superuser do' y permite actuar como superusuario o root",
      "Significa 'system update' y actualiza el sistema",
      "Significa 'save user data' y guarda archivos",
      "Significa 'simple user command' y ejecuta comandos básicos"
    ],
    "ans": 0,
    "exp": "sudo significa 'superuser do' y permite actuar como superusuario o usuario root mientras se ejecuta un comando específico, protegiendo el sistema de modificaciones accidentales."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "El comando clear se utiliza para limpiar la terminal.",
    "q": "¿Qué función cumple el comando 'clear' en Linux?",
    "extra": "",
    "opts": [
      "Elimina archivos del sistema",
      "Limpia la pantalla de la terminal borrando el texto",
      "Cierra la sesión del usuario",
      "Reinicia el sistema operativo"
    ],
    "ans": 1,
    "exp": "El comando clear se utiliza para limpiar los comandos en la terminal, borrando el texto de la pantalla o consola."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "El comando 'su -' permite cambiar al usuario root.",
    "q": "¿Qué comando se utiliza para cambiarse al usuario root en Linux?",
    "extra": "",
    "opts": [
      "sudo root",
      "su -",
      "login root",
      "useradd root"
    ],
    "ans": 1,
    "exp": "El comando 'su -' permite cambiarse al usuario root, solicitando la contraseña del mismo."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "El comando 'man' permite consultar el manual de otros comandos.",
    "q": "¿Qué comando se utiliza para ver el manual o ayuda de un comando en Linux?",
    "extra": "",
    "opts": [
      "help",
      "man",
      "info",
      "doc"
    ],
    "ans": 1,
    "exp": "El comando 'man' permite observar la funcionalidad y opciones de los comandos de Linux. Por ejemplo: 'man ls' muestra el manual del comando ls."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'cd' permite cambiar entre directorios.",
    "q": "¿Qué función cumple el comando 'cd' y cómo se utiliza?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# cd /\n[root@localhost /]# pwd\n/\n[root@localhost /]# cd /home\n[root@localhost home]# pwd\n/home\n[root@localhost home]#</div>",
    "opts": [
      "Crea un nuevo directorio",
      "Cambia al directorio raíz del sistema",
      "Cambia al directorio especificado como argumento",
      "Elimina el directorio actual"
    ],
    "ans": 2,
    "exp": "El comando 'cd' (change directory) se utiliza para cambiar al directorio especificado como argumento. 'cd /' te cambia al directorio raíz y 'cd ..' al directorio padre."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'cd ..' permite moverse al directorio padre.",
    "q": "¿Qué sucede cuando se ejecuta el comando 'cd ..'?",
    "extra": "",
    "opts": [
      "Cambia al directorio raíz",
      "Cambia al directorio padre del directorio actual",
      "Cambia al directorio home del usuario",
      "Crea un nuevo directorio"
    ],
    "ans": 1,
    "exp": "El comando 'cd ..' cambia al directorio padre (el directorio que contiene al directorio actual), permitiendo navegar hacia atrás en la estructura de carpetas."
  },






























  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'useradd' solo puede ser ejecutado por el usuario root o con privilegios sudo.",
    "q": "¿Quién puede ejecutar el comando 'useradd' en Linux?",
    "extra": "",
    "opts": [
      "Cualquier usuario del sistema",
      "Solo el usuario root o usuarios con privilegios sudo",
      "Solo el usuario que creó el sistema",
      "Todos los usuarios del grupo admin"
    ],
    "ans": 1,
    "exp": "El comando 'useradd' de Linux solo se puede utilizar desde usuarios que tengan permisos root o los privilegios del comando sudo."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'passwd' sin argumentos cambia la contraseña del usuario actual.",
    "q": "¿Qué sucede cuando un usuario ejecuta 'passwd' sin argumentos?",
    "extra": "",
    "opts": [
      "Cambia la contraseña del usuario root",
      "Cambia la contraseña del usuario actual",
      "Muestra la contraseña actual del usuario",
      "Elimina la contraseña del usuario"
    ],
    "ans": 1,
    "exp": "Cuando un usuario ejecuta 'passwd' sin argumentos, el comando cambia la contraseña del usuario actual que está logueado en el sistema."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "El comando 'touch' también se usa para actualizar la marca de tiempo de un archivo.",
    "q": "Además de crear archivos vacíos, ¿qué otra función tiene el comando 'touch'?",
    "extra": "",
    "opts": [
      "Eliminar archivos",
      "Actualizar la fecha y hora de modificación de un archivo existente",
      "Copiar archivos",
      "Mover archivos de ubicación"
    ],
    "ans": 1,
    "exp": "El comando 'touch' no solo crea archivos vacíos, sino que también actualiza la marca de tiempo (fecha y hora de modificación) de un archivo existente."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'rm' sin flags solo elimina archivos, no directorios.",
    "q": "¿Qué sucede cuando se ejecuta 'rm directorio' si 'directorio' es una carpeta?",
    "extra": "",
    "opts": [
      "Elimina el directorio y todo su contenido",
      "Muestra un error indicando que es un directorio",
      "Elimina solo los archivos dentro del directorio",
      "Renombra el directorio"
    ],
    "ans": 1,
    "exp": "El comando 'rm' sin flags solo elimina archivos. Si se intenta eliminar un directorio, muestra un error. Se debe usar 'rm -r' o 'rm -rf' para eliminar directorios."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'rmdir' elimina solo directorios vacíos.",
    "q": "¿Qué comando elimina un directorio solo si está vacío?",
    "extra": "",
    "opts": [
      "rm -r directorio",
      "rmdir directorio",
      "rm -rf directorio",
      "delete directorio"
    ],
    "ans": 1,
    "exp": "El comando 'rmdir' elimina un directorio solo si está vacío. Si contiene archivos, muestra un error."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'cp' con la opción '-r' permite copiar directorios completos.",
    "q": "¿Qué opción del comando 'cp' permite copiar un directorio con todo su contenido?",
    "extra": "",
    "opts": [
      "-a",
      "-r",
      "-f",
      "-i"
    ],
    "ans": 1,
    "exp": "La opción '-r' (recursive) del comando 'cp' permite copiar directorios completos con todo su contenido de forma recursiva."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'cp' con la opción '-i' solicita confirmación antes de sobrescribir.",
    "q": "¿Qué opción del comando 'cp' solicita confirmación antes de sobrescribir un archivo?",
    "extra": "",
    "opts": [
      "-f",
      "-i",
      "-v",
      "-u"
    ],
    "ans": 1,
    "exp": "La opción '-i' (interactive) del comando 'cp' solicita confirmación al usuario antes de sobrescribir un archivo existente."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Los patrones de búsqueda con ls permiten listar archivos que comienzan con caracteres numéricos.",
    "q": "¿Qué comando lista los archivos que comienzan con un carácter numérico en Linux?",
    "extra": "",
    "opts": [
      "ls [[:alpha:]]*",
      "ls [[:alnum:]]*",
      "ls [[:digit:]]*",
      "ls [[:punct:]]*"
    ],
    "ans": 2,
    "exp": "El comando 'ls [[:digit:]]*' lista los archivos que comienzan con un carácter numérico (dígitos del 0 al 9)."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'cat' con la opción '-n' muestra números de línea.",
    "q": "¿Qué opción del comando 'cat' muestra los números de línea en la salida?",
    "extra": "",
    "opts": [
      "-b",
      "-n",
      "-E",
      "-T"
    ],
    "ans": 1,
    "exp": "La opción '-n' (number) del comando 'cat' numera todas las líneas de salida, incluyendo las líneas vacías."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "El comando 'sudo' con la opción '-h' muestra ayuda sobre su uso.",
    "q": "¿Qué opción del comando 'sudo' muestra un mensaje de ayuda sobre su uso?",
    "extra": "",
    "opts": [
      "-a",
      "-h",
      "-v",
      "-l"
    ],
    "ans": 1,
    "exp": "La opción '-h' (help) del comando 'sudo' muestra un mensaje de ayuda con los usos y opciones disponibles del comando."
  },

  // ========== PREGUNTAS DE PRUEBA PRÁCTICA ==========

  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se requiere crear los usuarios Jimena, Clara y Valeria, asignando una contraseña a cada uno.",
    "q": "¿Qué secuencia de comandos completa correctamente la actividad?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# useradd Jimena\n[root@localhost ~]# passwd Jimena\nCambiando la contraseña del usuario Jimena.\nNueva contraseña: \nVuelva a escribir la nueva contraseña: \npasswd: todos los tokens de autenticación se actualizaron exitosamente.\n[root@localhost ~]# useradd Clara\n[root@localhost ~]# passwd Clara\nCambiando la contraseña del usuario Clara.\nNueva contraseña: \nVuelva a escribir la nueva contraseña: \npasswd: todos los tokens de autenticación se actualizaron exitosamente.\n[root@localhost ~]# useradd Valeria\n[root@localhost ~]# passwd Valeria\nCambiando la contraseña del usuario Valeria.\nNueva contraseña: \nVuelva a escribir la nueva contraseña: \npasswd: todos los tokens de autenticación se actualizaron exitosamente.\n[root@localhost ~]#</div>",
    "opts": [
      "useradd Jimena → passwd Jimena → useradd Clara → passwd Clara → useradd Valeria → passwd Valeria",
      "mkdir Jimena → mkdir Clara → mkdir Valeria",
      "touch Jimena → touch Clara → touch Valeria",
      "passwd Jimena → passwd Clara → passwd Valeria"
    ],
    "ans": 0,
    "exp": "Los usuarios se crean mediante useradd y posteriormente se asigna una contraseña mediante passwd."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se debe construir la estructura CarpetasCompartidas con los directorios AltaGerencia, Estrategias y Tacticas.",
    "q": "¿Qué conjunto de comandos realiza correctamente la creación de la estructura?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# mkdir CarpetasCompartidas\n[root@localhost ~]# cd CarpetasCompartidas\n[root@localhost CarpetasCompartidas]# mkdir AltaGerencia\n[root@localhost CarpetasCompartidas]# mkdir Estrategias\n[root@localhost CarpetasCompartidas]# mkdir Tacticas\n[root@localhost CarpetasCompartidas]# ls\nAltaGerencia Estrategias Tacticas\n[root@localhost CarpetasCompartidas]#</div>",
    "opts": [
      "mkdir CarpetasCompartidas → cd CarpetasCompartidas → mkdir AltaGerencia → mkdir Estrategias → mkdir Tacticas",
      "touch CarpetasCompartidas → touch AltaGerencia → touch Estrategias → touch Tacticas",
      "mkdir AltaGerencia → mkdir Estrategias → mkdir Tacticas",
      "cd CarpetasCompartidas → mkdir AltaGerencia → mkdir Estrategias"
    ],
    "ans": 0,
    "exp": "Primero debe crearse CarpetasCompartidas y luego ingresar a ella para crear los directorios internos."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Dentro del directorio AltaGerencia deben crearse los archivos InformeRendimiento y ReporteSeguridad.",
    "q": "¿Qué comando realiza correctamente la tarea?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost AltaGerencia]# touch InformeRendimiento ReporteSeguridad\n[root@localhost AltaGerencia]# ls\nInformeRendimiento ReporteSeguridad\n[root@localhost AltaGerencia]#</div>",
    "opts": [
      "touch InformeRendimiento ReporteSeguridad",
      "mkdir InformeRendimiento ReporteSeguridad",
      "useradd InformeRendimiento ReporteSeguridad",
      "passwd InformeRendimiento ReporteSeguridad"
    ],
    "ans": 0,
    "exp": "touch permite crear ambos archivos desde una única instrucción."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Ha iniciado sesión con un usuario normal y necesita continuar el ejercicio como administrador.",
    "q": "¿Qué secuencia permite cambiar correctamente al usuario root?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[usuario@localhost ~]$ su -\nPassword: ********\n[root@localhost ~]#</div>",
    "opts": [
      "su -",
      "sudo",
      "root",
      "cd /root"
    ],
    "ans": 0,
    "exp": "El comando su - permite cambiar al usuario root ingresando la contraseña correspondiente."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se debe crear la carpeta principal CarpetasCompartidas y posteriormente ingresar a ella.",
    "q": "¿Cuál es la secuencia correcta?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# mkdir CarpetasCompartidas\n[root@localhost ~]# cd CarpetasCompartidas\n[root@localhost CarpetasCompartidas]#</div>",
    "opts": [
      "mkdir CarpetasCompartidas → cd CarpetasCompartidas",
      "touch CarpetasCompartidas → cd CarpetasCompartidas",
      "mkdir CarpetasCompartidas → ls",
      "cd CarpetasCompartidas → mkdir CarpetasCompartidas"
    ],
    "ans": 0,
    "exp": "Primero debe crearse el directorio y luego ingresar a él mediante cd."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Ya se encuentra dentro de CarpetasCompartidas.",
    "q": "¿Qué conjunto de comandos crea correctamente la estructura solicitada?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost CarpetasCompartidas]# mkdir AltaGerencia\n[root@localhost CarpetasCompartidas]# mkdir Estrategias\n[root@localhost CarpetasCompartidas]# mkdir Tacticas\n[root@localhost CarpetasCompartidas]# ls\nAltaGerencia Estrategias Tacticas\n[root@localhost CarpetasCompartidas]#</div>",
    "opts": [
      "mkdir AltaGerencia → mkdir Estrategias → mkdir Tacticas",
      "touch AltaGerencia → touch Estrategias → touch Tacticas",
      "useradd AltaGerencia → useradd Estrategias → useradd Tacticas",
      "passwd AltaGerencia → passwd Estrategias → passwd Tacticas"
    ],
    "ans": 0,
    "exp": "Los directorios internos se crean utilizando mkdir."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se encuentra dentro del directorio AltaGerencia.",
    "q": "¿Qué comando crea los archivos InformeRendimiento y ReporteSeguridad?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost AltaGerencia]# touch InformeRendimiento ReporteSeguridad\n[root@localhost AltaGerencia]# ls\nInformeRendimiento ReporteSeguridad\n[root@localhost AltaGerencia]#</div>",
    "opts": [
      "touch InformeRendimiento ReporteSeguridad",
      "mkdir InformeRendimiento ReporteSeguridad",
      "useradd InformeRendimiento ReporteSeguridad",
      "passwd InformeRendimiento ReporteSeguridad"
    ],
    "ans": 0,
    "exp": "touch permite crear ambos archivos en una sola instrucción."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Dentro del directorio Estrategias deben crearse los archivos Mercadeo y NvosProd.",
    "q": "¿Qué comando corresponde?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Estrategias]# touch Mercadeo NvosProd\n[root@localhost Estrategias]# ls\nMercadeo NvosProd\n[root@localhost Estrategias]#</div>",
    "opts": [
      "touch Mercadeo NvosProd",
      "mkdir Mercadeo NvosProd",
      "useradd Mercadeo NvosProd",
      "ls Mercadeo NvosProd"
    ],
    "ans": 0,
    "exp": "Los archivos se crean mediante touch."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "El directorio Tacticas debe eliminarse completamente como demostración del comando rm.",
    "q": "¿Qué comando realiza correctamente la tarea?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost CarpetasCompartidas]# rm -r Tacticas\n[root@localhost CarpetasCompartidas]# ls\nAltaGerencia Estrategias\n[root@localhost CarpetasCompartidas]#</div>",
    "opts": [
      "rm -r Tacticas",
      "rm Tacticas",
      "delete Tacticas",
      "touch Tacticas"
    ],
    "ans": 0,
    "exp": "La opción -r permite eliminar directorios y su contenido."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Antes de crear archivos desea verificar en qué directorio se encuentra.",
    "q": "¿Qué comando debe ejecutar?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Estrategias]# pwd\n/home/Jimena/CarpetasCompartidas/Estrategias\n[root@localhost Estrategias]#</div>",
    "opts": [
      "pwd",
      "ls",
      "cd",
      "man"
    ],
    "ans": 0,
    "exp": "pwd muestra la ruta completa del directorio actual."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Desea visualizar permisos, propietario, tamaño y fecha de modificación de los archivos.",
    "q": "¿Qué comando debe utilizar?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost CarpetasCompartidas]# ls -l\ntotal 0\ndrwxr-xr-x. 2 root root 64 nov 16 15:39 AltaGerencia\ndrwxr-xr-x. 2 root root 46 nov 16 15:55 Estrategias\ndrwxr-xr-x. 2 root root 6 nov 16 15:21 Tacticas\n[root@localhost CarpetasCompartidas]#</div>",
    "opts": [
      "ls -l",
      "ls",
      "pwd",
      "cd"
    ],
    "ans": 0,
    "exp": "ls -l muestra información detallada de archivos y directorios."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Debe crear los usuarios Jimena, Clara y Valeria.",
    "q": "¿Cuál es el siguiente comando después de crear Jimena?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# useradd Jimena\n[root@localhost ~]# passwd Jimena\nCambiando la contraseña del usuario Jimena.\nNueva contraseña: \nVuelva a escribir la nueva contraseña: \npasswd: todos los tokens de autenticación se actualizaron exitosamente.\n[root@localhost ~]#</div>",
    "opts": [
      "passwd Jimena",
      "mkdir Jimena",
      "touch Jimena",
      "cd Jimena"
    ],
    "ans": 0,
    "exp": "Después de crear un usuario, el siguiente paso es asignarle una contraseña mediante passwd."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Jimena ya creó CarpetasCompartidas y necesita ingresar al directorio.",
    "q": "¿Qué comando debe ejecutar?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[jimena@localhost ~]$ ls\nCarpetasCompartidas\n[jimena@localhost ~]$ cd CarpetasCompartidas\n[jimena@localhost CarpetasCompartidas]$</div>",
    "opts": [
      "cd CarpetasCompartidas",
      "pwd CarpetasCompartidas",
      "ls CarpetasCompartidas",
      "mkdir CarpetasCompartidas"
    ],
    "ans": 0,
    "exp": "cd permite ingresar al directorio especificado."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Observe el siguiente prompt.",
    "q": "¿Qué indica el símbolo #?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]#</div>",
    "opts": [
      "Usuario normal",
      "Invitado",
      "Usuario root",
      "Grupo administrador"
    ],
    "ans": 2,
    "exp": "El símbolo # identifica al usuario root."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Olvidó cómo funciona el comando touch.",
    "q": "¿Qué comando le permite consultar la ayuda completa?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# man touch\ntouch - change file timestamps\n...\n[root@localhost ~]#</div>",
    "opts": [
      "man touch",
      "help touch",
      "touch -?",
      "sudo touch"
    ],
    "ans": 0,
    "exp": "man muestra el manual del comando."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Necesita crear simultáneamente los archivos Mercadeo.txt y NvosProd.txt.",
    "q": "¿Cuál es la mejor alternativa?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Estrategias]# touch {Mercadeo,NvosProd}.txt\n[root@localhost Estrategias]# ls\nMercadeo.txt NvosProd.txt\n[root@localhost Estrategias]#</div>",
    "opts": [
      "touch {Mercadeo,NvosProd}.txt",
      "mkdir {Mercadeo,NvosProd}.txt",
      "touch Mercadeo,NvosProd.txt",
      "ls {Mercadeo,NvosProd}.txt"
    ],
    "ans": 0,
    "exp": "El PPT muestra la creación múltiple utilizando llaves para ahorrar tiempo."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Acaba de crear los archivos InformeRendimiento y ReporteSeguridad.",
    "q": "¿Qué comando utilizaría para verificar que fueron creados?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost AltaGerencia]# ls\nInformeRendimiento ReporteSeguridad\n[root@localhost AltaGerencia]#</div>",
    "opts": [
      "ls",
      "pwd",
      "cd",
      "passwd"
    ],
    "ans": 0,
    "exp": "ls muestra el contenido del directorio actual."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Se encuentra dentro de Estrategias y necesita volver a CarpetasCompartidas.",
    "q": "¿Qué comando debe ejecutar?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Estrategias]# cd ..\n[root@localhost CarpetasCompartidas]#</div>",
    "opts": [
      "cd ..",
      "cd /",
      "cd root",
      "pwd"
    ],
    "ans": 0,
    "exp": "cd .. permite regresar al directorio padre."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Un estudiante intenta crear un directorio usando el siguiente comando.",
    "q": "¿Qué problema presenta?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# touch AltaGerencia\n[root@localhost ~]# ls\nAltaGerencia\n[root@localhost ~]#</div>",
    "opts": [
      "Crea un archivo, no un directorio",
      "No existe el comando touch",
      "El nombre es inválido",
      "Falta usar sudo"
    ],
    "ans": 0,
    "exp": "touch crea archivos. Para crear directorios debe utilizarse mkdir."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Una empresa necesita crear la siguiente estructura:",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>CarpetasCompartidas\n├── AltaGerencia\n├── Estrategias\n└── Tacticas\n[root@localhost ~]#</div>",
    "q": "¿Cuál es el primer directorio que debe crearse para construir correctamente la estructura?",
    "opts": [
      "AltaGerencia",
      "Estrategias",
      "CarpetasCompartidas",
      "Tacticas"
    ],
    "ans": 2,
    "exp": "Los directorios AltaGerencia, Estrategias y Tacticas dependen de CarpetasCompartidas, por lo que primero debe crearse el directorio principal."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Analice la siguiente situación. Un administrador necesita crear un directorio llamado Proyectos dentro de su directorio actual y luego verificar su creación.",
    "q": "¿Cuál es la secuencia correcta de comandos para realizar la tarea?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# mkdir Proyectos && ls\n[root@localhost ~]#</div>",
    "opts": [
      "mkdir Proyectos && ls",
      "touch Proyectos && pwd",
      "rm Proyectos && ls",
      "cd Proyectos && mkdir"
    ],
    "ans": 0,
    "exp": "El comando mkdir crea directorios. Después de crear el directorio, el comando ls permite verificar que existe dentro del directorio actual. Las demás opciones utilizan comandos incorrectos para la tarea solicitada."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "easy",
    "q": "¿Qué comando permite visualizar la ruta completa del directorio donde se encuentra actualmente el usuario?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# pwd\n/root\n[root@localhost ~]#</div>",
    "opts": [
      "ls",
      "pwd",
      "cd",
      "mkdir"
    ],
    "ans": 1,
    "exp": "El comando pwd (Print Working Directory) muestra la ruta absoluta del directorio actual. Es utilizado frecuentemente para conocer la ubicación exacta dentro del sistema de archivos."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "q": "¿Qué comando permite consultar el manual de uso del comando cp?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# man cp\nCP(1)                    User Commands                    CP(1)\n...\n[root@localhost ~]#</div>",
    "opts": [
      "help cp",
      "cp -help",
      "man cp",
      "sudo cp"
    ],
    "ans": 2,
    "exp": "El comando man muestra el manual de cualquier comando Linux. Por ejemplo, man cp despliega la documentación del comando cp."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "q": "¿Qué comando muestra la ruta completa del directorio actual?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# pwd\n/root\n[root@localhost ~]#</div>",
    "opts": [
      "ls",
      "pwd",
      "cd",
      "dir"
    ],
    "ans": 1,
    "exp": "pwd significa Print Working Directory y permite visualizar la ruta completa del directorio donde se encuentra el usuario."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Un administrador necesita crear un usuario llamado Clara y posteriormente asignarle una contraseña.",
    "q": "¿Cuál es la secuencia correcta de comandos?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# useradd Clara\n[root@localhost ~]# passwd Clara\nCambiando la contraseña del usuario Clara.\nNueva contraseña: \nVuelva a escribir la nueva contraseña: \npasswd: todos los tokens de autenticación se actualizaron exitosamente.\n[root@localhost ~]#</div>",
    "opts": [
      "useradd Clara → passwd Clara",
      "passwd Clara → useradd Clara",
      "mkdir Clara → passwd Clara",
      "touch Clara → passwd Clara"
    ],
    "ans": 0,
    "exp": "Primero se crea el usuario mediante useradd Clara. Luego se asigna una contraseña utilizando passwd Clara."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se ejecuta el siguiente comando:",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# ls -l\ntotal 0\ndrwxr-xr-x. 2 root root 64 nov 16 15:39 AltaGerencia\ndrwxr-xr-x. 2 root root 46 nov 16 15:55 Estrategias\ndrwxr-xr-x. 2 root root 6 nov 16 15:21 Tacticas\n[root@localhost ~]#</div>",
    "q": "¿Cuál de los siguientes datos NO es mostrado por ls -l?",
    "opts": [
      "Permisos",
      "Propietario",
      "Fecha de modificación",
      "Dirección IP"
    ],
    "ans": 3,
    "exp": "El comando ls -l muestra permisos, enlaces, propietario, grupo, tamaño, fecha de modificación y nombre del archivo. No muestra direcciones IP."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "q": "¿Qué comando permite cambiar desde el usuario actual al usuario root?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[usuario@localhost ~]$ su -\nPassword: ********\n[root@localhost ~]#</div>",
    "opts": [
      "sudo root",
      "su -",
      "root",
      "cd root"
    ],
    "ans": 1,
    "exp": "El comando su - permite cambiar al usuario root ingresando la contraseña correspondiente."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Existe un directorio llamado Tacticas que contiene varios archivos.",
    "q": "¿Qué comando permite eliminar el directorio junto con todo su contenido?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost CarpetasCompartidas]# rm -r Tacticas\n[root@localhost CarpetasCompartidas]# ls\nAltaGerencia Estrategias\n[root@localhost CarpetasCompartidas]#</div>",
    "opts": [
      "rm Tacticas",
      "rm -r Tacticas",
      "rmdir Tacticas",
      "del Tacticas"
    ],
    "ans": 1,
    "exp": "La opción -r permite eliminar directorios de forma recursiva, incluyendo todos los archivos y subdirectorios contenidos."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "q": "¿Qué símbolo identifica a un usuario con privilegios de administrador (root) en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]#</div>",
    "opts": [
      "$",
      "#",
      "@",
      "%"
    ],
    "ans": 1,
    "exp": "Linux identifica al usuario root mediante el símbolo #. Los usuarios normales utilizan el símbolo $ en la terminal."
  },

  // ========== PREGUNTAS DE COMANDOS AVANZADOS ==========

  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando muestra el contenido de un directorio?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# ls\nanaconda-ks.cfg\n[root@localhost ~]#</div>",
    "opts": [
      "ls",
      "cd",
      "pwd",
      "dir"
    ],
    "ans": 0,
    "exp": "El comando 'ls' (list) muestra el contenido del directorio actual.\nOpciones útiles:\n  ls -l  → lista detallada (permisos, tamaño, fecha)\n  ls -a  → muestra archivos ocultos\n  ls -la → combinación de ambas"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando muestra el directorio actual en el que te encuentras?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# cd /\n[root@localhost /]# pwd\n/\n[root@localhost /]# cd /home\n[root@localhost home]# pwd\n/home\n[root@localhost home]#</div>",
    "opts": [
      "cd",
      "mv",
      "ls",
      "chdir"
    ],
    "ans": 0,
    "exp": "El comando 'cd' (Change Directory) permite navegar entre directorios.\nEjemplos:\n  cd /home/usuario  → va a esa ruta absoluta\n  cd ..             → sube un nivel\n  cd ~              → va al directorio home\n  cd -              → vuelve al directorio anterior"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando crea un directorio nuevo?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# mkdir nueva_carpeta\n[root@localhost ~]# ls\nnueva_carpeta\n[root@localhost ~]#</div>",
    "opts": [
      "mkdir",
      "touch",
      "newdir",
      "create"
    ],
    "ans": 0,
    "exp": "El comando 'mkdir' (Make Directory) crea un nuevo directorio.\nEjemplos:\n  mkdir carpeta         → crea una carpeta\n  mkdir -p a/b/c        → crea directorios anidados\n  mkdir carpeta1 carpeta2 → crea múltiples directorios"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando elimina un archivo?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# rm archivo.txt\n[root@localhost ~]# ls\n[root@localhost ~]#</div>",
    "opts": [
      "rm",
      "del",
      "erase",
      "delete"
    ],
    "ans": 0,
    "exp": "El comando 'rm' (Remove) elimina archivos y directorios.\nEjemplos:\n  rm archivo.txt     → elimina un archivo\n  rm -r carpeta/     → elimina directorio y su contenido\n  rm -f archivo.txt  → fuerza la eliminación sin preguntar\n  rm -rf carpeta/    → elimina recursivo y forzado (¡peligroso!)"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando copia un archivo de una ubicación a otra?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# cp origen.txt destino.txt\n[root@localhost ~]# ls\norigen.txt destino.txt\n[root@localhost ~]#</div>",
    "opts": [
      "cp",
      "mv",
      "copy",
      "clone"
    ],
    "ans": 0,
    "exp": "El comando 'cp' (Copy) copia archivos o directorios.\nEjemplos:\n  cp archivo.txt copia.txt       → copia un archivo\n  cp archivo.txt /home/usuario/  → copia a otro directorio\n  cp -r carpeta/ destino/        → copia directorio completo"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando mueve o renombra un archivo?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# mv viejo.txt nuevo.txt\n[root@localhost ~]# ls\nnuevo.txt\n[root@localhost ~]#</div>",
    "opts": [
      "mv",
      "cp",
      "rename",
      "move"
    ],
    "ans": 0,
    "exp": "El comando 'mv' (Move) mueve o renombra archivos y directorios.\nEjemplos:\n  mv viejo.txt nuevo.txt         → renombra el archivo\n  mv archivo.txt /home/usuario/  → mueve a otro directorio\n  mv carpeta1/ carpeta2/         → mueve o renombra carpeta"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando muestra el contenido de un archivo de texto en la terminal?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# cat archivo.txt\nEste es el contenido del archivo\n[root@localhost ~]#</div>",
    "opts": [
      "cat",
      "read",
      "show",
      "print"
    ],
    "ans": 0,
    "exp": "El comando 'cat' (concatenate) muestra el contenido de archivos.\nEjemplos:\n  cat archivo.txt              → muestra el contenido\n  cat archivo1.txt archivo2.txt → concatena y muestra ambos\n  cat -n archivo.txt           → muestra con números de línea"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando crea un archivo vacío o actualiza su fecha de modificación?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# touch nuevo_archivo.txt\n[root@localhost ~]# ls\nnuevo_archivo.txt\n[root@localhost ~]#</div>",
    "opts": [
      "touch",
      "mkdir",
      "new",
      "create"
    ],
    "ans": 0,
    "exp": "El comando 'touch' crea un archivo vacío si no existe, o actualiza la fecha de acceso/modificación si ya existe.\nEjemplos:\n  touch archivo.txt            → crea archivo vacío\n  touch archivo1.txt archivo2.txt → crea múltiples archivos"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando busca texto dentro de archivos?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# grep \"error\" /var/log/syslog\n...\n[root@localhost ~]#</div>",
    "opts": [
      "grep",
      "find",
      "search",
      "locate"
    ],
    "ans": 0,
    "exp": "El comando 'grep' busca patrones de texto en archivos.\nEjemplos:\n  grep 'error' archivo.txt        → busca la palabra 'error'\n  grep -i 'error' archivo.txt    → sin distinguir mayúsculas\n  grep -r 'error' /var/log/      → búsqueda recursiva\n  grep -n 'error' archivo.txt    → muestra número de línea"
  },
  {
    "profe": false,
    "unit": "Linux - Permisos y Usuarios",
    "diff": "medium",
    "q": "¿Qué significan los permisos 'rwxr-xr--' en un archivo?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# ls -l\n-rwxr-xr--. 1 root root 0 nov 16 16:00 archivo.txt\n[root@localhost ~]#</div>",
    "opts": [
      "Propietario: lectura/escritura/ejecución | Grupo: lectura/ejecución | Otros: solo lectura",
      "Propietario: lectura/escritura | Grupo: lectura/escritura | Otros: ejecución",
      "Propietario: todos los permisos | Grupo: todos | Otros: ninguno",
      "Propietario: lectura/ejecución | Grupo: escritura | Otros: lectura/escritura"
    ],
    "ans": 0,
    "exp": "Los permisos en Linux se dividen en 3 grupos de 3 caracteres:\n  rwxr-xr--\n  ||||||||\n  rwx → Propietario: puede leer (r), escribir (w) y ejecutar (x)\n  r-x → Grupo: puede leer (r) y ejecutar (x), NO escribir (-)\n  r-- → Otros: solo puede leer (r), NO escribir ni ejecutar\n\nEquivalencia numérica:\n  r=4, w=2, x=1\n  rwx = 4+2+1 = 7\n  r-x = 4+0+1 = 5\n  r-- = 4+0+0 = 4\n  → chmod 754 archivo"
  },
  {
    "profe": false,
    "unit": "Linux - Permisos y Usuarios",
    "diff": "medium",
    "q": "¿Qué comando cambia los permisos de un archivo?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# chmod 755 archivo.txt\n[root@localhost ~]# ls -l\n-rwxr-xr-x. 1 root root 0 nov 16 16:00 archivo.txt\n[root@localhost ~]#</div>",
    "opts": [
      "chmod",
      "chown",
      "chgrp",
      "setperm"
    ],
    "ans": 0,
    "exp": "El comando 'chmod' (Change Mode) cambia los permisos de archivos.\n\nNotación numérica:\n  chmod 755 archivo → rwxr-xr-x\n  chmod 644 archivo → rw-r--r--\n  chmod 777 archivo → rwxrwxrwx (¡peligroso!)\n\nNotación simbólica:\n  chmod +x archivo  → agrega ejecución a todos\n  chmod u+w archivo → agrega escritura al propietario\n  chmod o-r archivo → quita lectura a otros"
  },
  {
    "profe": false,
    "unit": "Linux - Permisos y Usuarios",
    "diff": "medium",
    "q": "¿Qué valor numérico corresponde a los permisos 'rwxr--r--'?",
    "extra": "",
    "opts": [
      "744",
      "755",
      "644",
      "711"
    ],
    "ans": 0,
    "exp": "Cálculo de permisos numéricos:\n  r=4, w=2, x=1, -=0\n\n  Propietario: rwx = 4+2+1 = 7\n  Grupo:       r-- = 4+0+0 = 4\n  Otros:       r-- = 4+0+0 = 4\n\n  → chmod 744 archivo"
  },
  {
    "profe": false,
    "unit": "Linux - Sistema",
    "diff": "hard",
    "case": "En un servidor Ubuntu necesitas instalar nginx, asegurarte de que esté actualizado y luego verificar su versión.",
    "q": "¿Cuál es la secuencia correcta de comandos?",
    "extra": "",
    "opts": [
      "apt update → apt install nginx → nginx -v → systemctl status nginx",
      "apt upgrade → apt install nginx → nginx --version → service nginx status",
      "apt-get update → apt-get upgrade nginx → nginx -v → ps aux | grep nginx",
      "apt update && apt upgrade → install nginx → check nginx version"
    ],
    "ans": 0,
    "exp": "Secuencia correcta en Ubuntu/Debian:\n\n" +
      "  sudo apt update              → actualiza la lista de paquetes disponibles\n" +
      "  sudo apt install nginx       → instala nginx\n" +
      "  nginx -v                     → muestra la versión de nginx\n" +
      "  systemctl status nginx       → verifica el estado del servicio\n\n" +
      "Diferencia entre update y upgrade:\n" +
      "  apt update  → solo actualiza la lista de paquetes (no instala nada)\n" +
      "  apt upgrade → instala las actualizaciones disponibles\n\n" +
      "Otros comandos apt útiles:\n" +
      "  apt remove nginx             → desinstala nginx\n" +
      "  apt purge nginx              → desinstala + elimina configuración\n" +
      "  apt autoremove               → elimina dependencias no usadas\n" +
      "  apt search nginx             → busca paquetes\n" +
      "  apt show nginx               → información del paquete"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué hace la combinación de teclas Ctrl+C en la terminal?",
    "extra": "",
    "opts": [
      "Interrumpe/cancela el proceso en ejecución",
      "Copia el texto seleccionado",
      "Cierra la terminal",
      "Pausa el proceso temporalmente"
    ],
    "ans": 0,
    "exp": "Ctrl+C envía la señal SIGINT al proceso en primer plano, interrumpiéndolo.\n\n" +
      "Atajos útiles en terminal Linux:\n" +
      "  Ctrl+C → interrumpe el proceso actual\n" +
      "  Ctrl+Z → pausa el proceso (lo manda al background)\n" +
      "  Ctrl+D → cierra la sesión / envía EOF\n" +
      "  Ctrl+L → limpia la pantalla (igual que 'clear')\n" +
      "  Ctrl+A → va al inicio de la línea\n" +
      "  Ctrl+E → va al final de la línea\n" +
      "  Ctrl+R → búsqueda en historial de comandos\n" +
      "  Tab    → autocompletado\n" +
      "  ↑ ↓    → navegar historial de comandos"
  },
  {
    "profe": false,
    "unit": "Linux - Sistema",
    "diff": "easy",
    "q": "¿Qué comando muestra información sobre el sistema operativo Linux instalado?",
    "extra": "",
    "opts": ["uname -a", "sysinfo", "os-release", "hostinfo"],
    "ans": 0,
    "exp": "El comando 'uname' muestra información del sistema.\n\n" +
      "Opciones:\n" +
      "  uname -a → toda la información\n" +
      "  uname -r → versión del kernel\n" +
      "  uname -s → nombre del sistema operativo\n" +
      "  uname -m → arquitectura (x86_64, arm64, etc.)\n\n" +
      "Otros comandos de info del sistema:\n" +
      "  cat /etc/os-release   → distribución y versión\n" +
      "  lsb_release -a        → info de la distribución (Ubuntu/Debian)\n" +
      "  hostnamectl           → hostname y sistema\n" +
      "  uptime                → tiempo que lleva encendido el sistema"
  },
  {
    "profe": false,
    "unit": "Linux - Bash y Scripts",
    "diff": "medium",
    "q": "¿Qué comando muestra todas las variables de entorno del sistema?",
    "extra": "",
    "opts": [
      "env",
      "printenv",
      "set",
      "export"
    ],
    "ans": 0,
    "exp": "El comando 'env' muestra todas las variables de entorno.\n\n" +
      "Comandos relacionados:\n" +
      "  env              → muestra todas las variables de entorno\n" +
      "  printenv         → igual que env\n" +
      "  printenv PATH    → muestra solo la variable PATH\n" +
      "  echo $HOME       → muestra el valor de una variable específica\n" +
      "  set              → muestra variables + funciones del shell\n\n" +
      "Variables de entorno importantes:\n" +
      "  $PATH   → directorios donde se buscan los comandos\n" +
      "  $HOME   → directorio del usuario\n" +
      "  $USER   → nombre del usuario actual\n" +
      "  $SHELL  → shell por defecto\n" +
      "  $PWD    → directorio actual\n\n" +
      "Para crear/exportar una variable:\n" +
      "  export MI_VAR='valor'"
  },
  {
    "profe": false,
    "unit": "Linux - Sistema de Archivos",
    "diff": "medium",
    "q": "¿Qué diferencia hay entre un enlace simbólico (soft link) y un enlace duro (hard link)?",
    "extra": "",
    "opts": [
      "Soft link: apunta a la ruta (se rompe si se elimina el original) | Hard link: apunta al mismo inode (el archivo persiste)",
      "Soft link: copia el archivo | Hard link: apunta a la ruta original",
      "Soft link: solo para directorios | Hard link: solo para archivos de texto",
      "Son exactamente iguales, solo cambia el comando de creación"
    ],
    "ans": 0,
    "exp": "Diferencias entre tipos de enlace:\n\n" +
      "Enlace simbólico (soft link):\n" +
      "  ln -s original.txt enlace.txt\n" +
      "  → Apunta a la RUTA del archivo original\n" +
      "  → Si se elimina el original, el enlace se 'rompe' (dangling link)\n" +
      "  → Puede enlazar directorios\n" +
      "  → Puede cruzar sistemas de archivos distintos\n" +
      "  → ls -la muestra: enlace.txt -> original.txt\n\n" +
      "Enlace duro (hard link):\n" +
      "  ln original.txt enlace.txt\n" +
      "  → Apunta al mismo INODE (mismos datos en disco)\n" +
      "  → Si se elimina el original, el enlace sigue funcionando\n" +
      "  → No puede enlazar directorios\n" +
      "  → No puede cruzar sistemas de archivos\n" +
      "  → Ambos archivos son indistinguibles"
  },
  {
    "profe": false,
    "unit": "Linux - Bash y Scripts",
    "diff": "medium",
    "q": "¿Qué comando muestra el historial de comandos ejecutados en la terminal?",
    "extra": "",
    "opts": [
      "history",
      "log",
      "last",
      "recent"
    ],
    "ans": 0,
    "exp": "El comando 'history' muestra el historial de comandos.\n\n" +
      "Usos:\n" +
      "  history        → muestra todos los comandos\n" +
      "  history 20     → muestra los últimos 20\n" +
      "  history | grep ssh → busca comandos SSH en el historial\n\n" +
      "Atajos del historial:\n" +
      "  !!             → repite el último comando\n" +
      "  !500           → ejecuta el comando número 500\n" +
      "  !ssh           → ejecuta el último comando que empezó con 'ssh'\n" +
      "  Ctrl+R         → búsqueda inversa en el historial\n\n" +
      "El historial se guarda en:\n" +
      "  ~/.bash_history  → para bash\n" +
      "  ~/.zsh_history   → para zsh"
  },
  {
    "profe": false,
    "unit": "Linux - Sistema",
    "diff": "hard",
    "case": "El servidor tiene alta carga de CPU. Necesitas identificar qué proceso está consumiendo más recursos y luego terminarlo.",
    "q": "¿Cuál es la secuencia correcta de comandos?",
    "extra": "",
    "opts": [
      "top (ordenar con P) → anotar PID → kill -9 PID → ps aux | grep PID",
      "ps aux → kill proceso → top → verify",
      "htop → stop proceso → reboot → check",
      "cat /proc/cpu → find PID → terminate PID → check /var/log"
    ],
    "ans": 0,
    "exp": "Secuencia para identificar y terminar un proceso problemático:\n\n" +
      "1) top → presionar 'P' para ordenar por CPU\n" +
      "   o: ps aux --sort=-%cpu | head -10\n\n" +
      "2) Anotar el PID del proceso que más consume\n" +
      "   o: pgrep nombre_proceso\n\n" +
      "3) Terminar el proceso:\n" +
      "   kill PID        → intenta terminar con gracia (SIGTERM)\n" +
      "   kill -9 PID     → fuerza la terminación (SIGKILL)\n\n" +
      "4) Verificar que terminó:\n" +
      "   ps aux | grep PID\n" +
      "   o volver a top\n\n" +
      "Alternativa rápida:\n" +
      "   htop → seleccionar proceso → F9 → SIGKILL\n\n" +
      "Siempre intentar SIGTERM antes de SIGKILL,\n" +
      "ya que SIGTERM permite al proceso limpiar recursos."
  },
  {
    "profe": false,
    "unit": "Linux - Sistema",
    "diff": "hard",
    "case": "Necesitas ver los logs del servicio nginx de los últimos 30 minutos para diagnosticar un error.",
    "q": "¿Qué comando de journalctl usas?",
    "extra": "",
    "opts": [
      'journalctl -u nginx --since "30 minutes ago"',
      'journalctl nginx -t 30m',
      'journalctl --service=nginx --last=30',
      'cat /var/log/nginx/error.log | tail -30m'
    ],
    "ans": 0,
    "exp": "El comando correcto es:\n" +
      '  journalctl -u nginx --since "30 minutes ago"\n\n' +
      "Opciones útiles de journalctl:\n" +
      "  -u nginx              → filtra por servicio nginx\n" +
      '  --since "1 hour ago"  → desde hace 1 hora\n' +
      '  --since "2026-04-13"  → desde una fecha\n' +
      '  --until "2026-04-13 12:00" → hasta una hora\n' +
      "  -f                    → sigue en tiempo real\n" +
      "  -n 100                → últimas 100 líneas\n" +
      "  -p err                → solo errores\n" +
      "  -p warning            → advertencias y superior\n\n" +
      "Combinaciones útiles:\n" +
      '  journalctl -u nginx -f                    → logs nginx en tiempo real\n' +
      '  journalctl -u nginx -p err --since today  → errores de hoy\n' +
      "  journalctl --disk-usage                   → espacio usado por logs"
  },
  {
    "profe": false,
    "unit": "Linux - Redes",
    "diff": "hard",
    "case": "Necesitas copiar el directorio /var/www/html completo desde tu máquina local al servidor remoto 192.168.1.50, usuario deploy, puerto 22, en la ruta /var/backups/.",
    "q": "¿Cuál es el comando scp correcto?",
    "extra": "",
    "opts": [
      "scp -r /var/www/html deploy@192.168.1.50:/var/backups/",
      "scp /var/www/html deploy@192.168.1.50:/var/backups/",
      "scp -r deploy@192.168.1.50:/var/www/html /var/backups/",
      "rsync /var/www/html deploy@192.168.1.50:/var/backups/"
    ],
    "ans": 0,
    "exp": "El comando correcto es:\n" +
      "  scp -r /var/www/html deploy@192.168.1.50:/var/backups/\n\n" +
      "Desglose:\n" +
      "  scp       → Secure Copy (copia por SSH)\n" +
      "  -r        → recursivo (necesario para directorios)\n" +
      "  origen    → /var/www/html (local)\n" +
      "  destino   → deploy@192.168.1.50:/var/backups/\n\n" +
      "Otros ejemplos scp:\n" +
      "  scp archivo.txt user@host:/destino/          → copia archivo local a remoto\n" +
      "  scp user@host:/remoto/archivo.txt /local/    → copia remoto a local\n" +
      "  scp -P 2222 archivo.txt user@host:/destino/  → con puerto específico\n\n" +
      "Alternativa más eficiente para sincronización:\n" +
      "  rsync -avz /var/www/html deploy@192.168.1.50:/var/backups/"
  },
  {
    "profe": false,
    "unit": "Linux - Bash y Scripts",
    "diff": "hard",
    "case": "Escribe un script que verifique si el archivo /etc/nginx/nginx.conf existe. Si existe, muestra 'Configuración encontrada'. Si no, muestra 'Archivo no encontrado'.",
    "q": "¿Cuál es el script correcto?",
    "extra": "",
    "opts": [
      '#!/bin/bash\nif [ -f /etc/nginx/nginx.conf ]; then\n  echo "Configuración encontrada"\nelse\n  echo "Archivo no encontrado"\nfi',
      '#!/bin/bash\nif exists /etc/nginx/nginx.conf; then\n  echo "Configuración encontrada"\nfi',
      '#!/bin/bash\ncheck -f /etc/nginx/nginx.conf\necho "Configuración encontrada"',
      '#!/bin/bash\nif /etc/nginx/nginx.conf == true; then\n  echo "Configuración encontrada"\nfi'
    ],
    "ans": 0,
    "exp": "El script correcto:\n" +
      "  #!/bin/bash\n" +
      "  if [ -f /etc/nginx/nginx.conf ]; then\n" +
      '    echo "Configuración encontrada"\n' +
      "  else\n" +
      '    echo "Archivo no encontrado"\n' +
      "  fi\n\n" +
      "Operadores de archivos en bash:\n" +
      "  -f archivo  → verdadero si existe y es un archivo regular\n" +
      "  -d archivo  → verdadero si existe y es un directorio\n" +
      "  -e archivo  → verdadero si existe (cualquier tipo)\n" +
      "  -r archivo  → verdadero si tiene permiso de lectura\n" +
      "  -w archivo  → verdadero si tiene permiso de escritura\n" +
      "  -x archivo  → verdadero si tiene permiso de ejecución\n" +
      "  -s archivo  → verdadero si existe y no está vacío\n\n" +
      "Estructura if-else en bash:\n" +
      "  if [ condición ]; then\n" +
      "    comandos\n" +
      "  elif [ otra_condición ]; then\n" +
      "    otros_comandos\n" +
      "  else\n" +
      "    comandos_por_defecto\n" +
      "  fi"
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "easy",
    "case": "En la década de 1990, un estudiante finlandés desarrolló un núcleo de sistema operativo que se convertiría en uno de los proyectos de código abierto más importantes de la historia.",
    "q": "¿Cuál fue la principal motivación de Linus Torvalds para crear Linux?",
    "extra": "",
    "opts": [
      "Crear un sistema operativo de pago con soporte técnico profesional",
      "Desarrollar un sistema que compita directamente con Windows",
      "Crear un sistema operativo que se comporte como UNIX y ejecute programas GNU",
      "Reemplazar completamente el sistema Minix de Andrew Tanenbaum"
    ],
    "ans": 2,
    "exp": "Linus Torvalds, estudiante de la Universidad de Helsinki, se inspiró en Minix y planteó crear un sistema operativo que se comportara como UNIX y ejecutara programas GNU."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "easy",
    "case": "Linux se ha convertido en uno de los sistemas operativos más utilizados en servidores y dispositivos móviles, destacando por su modelo de distribución.",
    "q": "¿Cuáles son las dos características principales que diferencian a Linux de otros sistemas operativos?",
    "extra": "",
    "opts": [
      "Es gratuito y tiene soporte técnico 24/7",
      "Es libre (sin pago de licencias) y viene acompañado del código fuente",
      "Es más rápido y tiene mejor interfaz gráfica",
      "Es compatible con Windows y Mac"
    ],
    "ans": 1,
    "exp": "Linux es libre (no requiere pago de licencia) y viene acompañado del código fuente, permitiendo su estudio y modificación."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Al instalar Red Hat Enterprise Linux en una máquina virtual, es necesario asignar recursos adecuados para un rendimiento óptimo.",
    "q": "¿Cuáles son las especificaciones de hardware recomendadas para la máquina virtual en VirtualBox?",
    "extra": "",
    "opts": [
      "2 GB de RAM, 1 CPU, 20 GB de disco duro",
      "4 GB de RAM, 2 CPU, 30 GB de disco duro",
      "8 GB de RAM, 4 CPU, 50 GB de disco duro",
      "16 GB de RAM, 8 CPU, 100 GB de disco duro"
    ],
    "ans": 1,
    "exp": "Según los pasos de instalación, se deben configurar 4 GB de RAM, 2 CPU y un disco duro de 30 GB."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Durante el arranque desde el ISO de Red Hat Enterprise Linux 10.0, aparece un menú con varias opciones de instalación.",
    "q": "¿Qué opción se debe seleccionar al iniciar la instalación desde el ISO?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#00ff00;padding:15px;font-family:monospace;border-radius:5px;">
      <b>Red Hat Enterprise Linux 10.0</b><br><br>
      <span style="color:#ffff00;">▶ Install Red Hat Enterprise Linux 10.0</span><br>
      <span style="color:#ffff00;">▶ Test this media & install Red Hat Enterprise Linux 10.0</span><br>
      <span style="color:#ffff00;">▶ Rescue a Red Hat Enterprise Linux system</span><br>
      <span style="color:#ffff00;">▶ Run a memory test</span><br><br>
      Tab - switch between elements | Enter - select
      </div>
      `,
    "opts": [
      "Test this media & install Red Hat Enterprise Linux 10.0",
      "Install Red Hat Enterprise Linux 10.0",
      "Rescue a Red Hat Enterprise Linux system",
      "Run a memory test"
    ],
    "ans": 0,
    "exp": "Se debe seleccionar 'Test this media & install Red Hat Enterprise Linux 10.0' para iniciar el proceso de instalación con verificación del medio."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "easy",
    "case": "Durante la instalación de Red Hat, se debe configurar la localización del sistema para adaptarse a la región del usuario.",
    "q": "¿Qué configuraciones de idioma se deben seleccionar durante la instalación de Red Hat según los pasos?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#ffffff;padding:15px;font-family:monospace;border-radius:5px;">
      <b>📋 LOCALIZATION</b><br><br>
      <span style="color:#00ffff;">▼ Language</span>  <span style="color:#ffa500;">[ Español Chile ]</span><br>
      <span style="color:#00ffff;">▼ Keyboard</span>  <span style="color:#ffa500;">[ Castellano ]</span><br>
      <span style="color:#00ffff;">▼ Time & Date</span>  <span style="color:#ffa500;">[ America/Santiago ]</span><br><br>
      <span style="color:#888;">[Hecho]</span>
      </div>
      `,
    "opts": [
      "Inglés Estados Unidos y teclado en inglés",
      "Español Chile y teclado en castellano",
      "Español España y teclado en español",
      "Portugués Brasil y teclado en portugués"
    ],
    "ans": 1,
    "exp": "Se debe seleccionar el idioma Español Chile y el teclado en castellano como se muestra en la interfaz."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Durante la instalación de Red Hat, se deben configurar las cuentas de usuario para acceder al sistema después del arranque.",
    "q": "¿Qué pasos se deben seguir para la creación del usuario durante la instalación de Red Hat?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#ffffff;padding:15px;font-family:monospace;border-radius:5px;">
      <b>👤 USER SETTINGS</b><br><br>
      <span style="color:#00ffff;">▼ Root Password</span>  <span style="color:#ffa500;">[ ●●●●●●● ]</span><br>
      <span style="color:#00ffff;">▼ User Creation</span><br>
      &nbsp;&nbsp;Full name: <input placeholder="Nombre Apellido" style="background:#333;color:#fff;border:1px solid #555;"><br>
      &nbsp;&nbsp;Username: <input placeholder="usuario" style="background:#333;color:#fff;border:1px solid #555;"><br>
      &nbsp;&nbsp;Password: <input placeholder="●●●●●●●●" style="background:#333;color:#fff;border:1px solid #555;"><br>
      &nbsp;&nbsp;☑ <span style="color:#ffa500;">Make this user administrator</span><br><br>
      <span style="color:#888;">[Hecho]</span>
      </div>
      `,
    "opts": [
      "Crear solo la contraseña de root y omitir la creación del usuario",
      "Crear el usuario con su nombre y apellido y marcarlo como administrador",
      "Crear el usuario sin contraseña",
      "Crear el usuario solo después de finalizar la instalación"
    ],
    "ans": 1,
    "exp": "Se debe crear el usuario con nombre y apellido, y marcarlo como administrador con la opción 'Make this user administrator'."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "El instalador de Red Hat permite seleccionar qué paquetes y servicios se instalarán según el rol del servidor.",
    "q": "¿Qué opciones de software se deben marcar durante la instalación de Red Hat según los pasos?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#ffffff;padding:15px;font-family:monospace;border-radius:5px;">
      <b>📦 SOFTWARE SELECTION</b><br><br>
      <span style="color:#ffa500;">Base Environment:</span><br>
      ☑ <span style="color:#00ff00;">Server with GUI</span> - Servidor integrado y fácil de administrar con interfaz gráfica<br><br>
      <span style="color:#ffa500;">Additional software for selected environment:</span><br>
      ☑ <span style="color:#00ff00;">DNS Name Server</span><br>
      ☑ <span style="color:#00ff00;">FTP Server</span><br>
      ☑ <span style="color:#00ff00;">Mail Server</span><br>
      ☐ Web Server<br>
      ☐ Database Server<br><br>
      <span style="color:#888;">[Hecho]</span>
      </div>
      `,
    "opts": [
      "Servidor con GUI, Servidor de nombres DNS, Servidor FTP y Servidores de correo",
      "Solo Servidor con GUI y Servidor FTP",
      "Servidor con GUI, Servidor web y Servidor de base de datos",
      "Todas las opciones disponibles"
    ],
    "ans": 0,
    "exp": "Se deben seleccionar 'Server with GUI' como base environment, y como adicionales: DNS Name Server, FTP Server y Mail Server."
  },
  {
    "profe": false ,
    "unit": "Linux",
    "diff": "medium",
    "case": "Durante la instalación de Red Hat, aparece una opción relacionada con la captura de información del sistema en caso de fallos.",
    "q": "¿Qué es KDUMP y para qué sirve en la instalación de Red Hat?",
    "extra": "",
    "opts": [
      "Un sistema de copia de seguridad de archivos",
      "Un mecanismo de volcado de memoria de daños de kernel para troubleshooting",
      "Un sistema de monitoreo de red",
      "Un sistema de gestión de paquetes"
    ],
    "ans": 1,
    "exp": "KDUMP es un mecanismo que captura información del sistema en caso de fallo del kernel, sirviendo para troubleshooting posterior."
  },
  {
    "profe": false ,
    "unit": "Linux",
    "diff": "hard",
    "case": "La conectividad de red es esencial para que el sistema pueda recibir actualizaciones y comunicarse con otros equipos.",
    "q": "¿Cómo se configura la red durante la instalación de Red Hat?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#ffffff;padding:15px;font-family:monospace;border-radius:5px;">
      <b>🌐 NETWORK & HOSTNAME</b><br><br>
      Interface: <span style="color:#00ffff;">enp0s3</span><br>
      <span style="color:#ffa500;">Status:</span> <span style="color:#ff4444;">● Disconnected</span><br>
      <span style="color:#ffa500;">Hostname:</span> <input placeholder="localhost.localdomain" style="background:#333;color:#fff;border:1px solid #555;"><br><br>
      <span style="color:#ffa500;">IPv4 Settings:</span><br>
      Method: <select style="background:#333;color:#fff;border:1px solid #555;"><option>DHCP</option><option>Manual</option></select><br><br>
      <span style="color:#888;">[Configure] [Hecho]</span>
      </div>
      `,
    "opts": [
      "Las interfaces vienen habilitadas por defecto con IP estática",
      "Las interfaces aparecen deshabilitadas con DHCP por defecto, y se pueden configurar IPs estáticas pulsando Configurar",
      "Se debe configurar la red después de la instalación",
      "No se requiere configuración de red durante la instalación"
    ],
    "ans": 1,
    "exp": "Las interfaces aparecen deshabilitadas con DHCP. Para establecer IPs estáticas o modificar el Hostname, se debe pulsar 'Configure'."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Después de instalar Red Hat, es necesario autenticar el sistema para poder recibir actualizaciones y soporte oficial.",
    "q": "¿Qué comando se utiliza para registrar el sistema con Red Hat Subscription Manager?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#00ff00;padding:15px;font-family:monospace;border-radius:5px;">
      [root@localhost ~]# <input placeholder="Comando de registro" style="background:#333;color:#00ff00;border:1px solid #555;width:400px;"><br>
      <span style="color:#ffa500;">Enter username:</span> <input placeholder="correo@redhat.com" style="background:#333;color:#fff;border:1px solid #555;"><br>
      <span style="color:#ffa500;">Enter password:</span> <input placeholder="●●●●●●●●" style="background:#333;color:#fff;border:1px solid #555;"><br><br>
      <span style="color:#00ffff;">The system has been registered with ID: 12345678-90ab-cdef-1234-567890abcdef</span>
      </div>
      `,
    "opts": [
      "subscription-manager register --username usuario --password contraseña",
      "register --username usuario --password contraseña",
      "rhsm-register --username usuario --password contraseña",
      "redhat-register --username usuario --password contraseña"
    ],
    "ans": 0,
    "exp": "El comando correcto es 'subscription-manager register --username usuario --password contraseña' usando las credenciales de Red Hat."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "easy",
    "case": "Al iniciar sesión por primera vez en el sistema instalado, aparece una pantalla de bienvenida con varias opciones.",
    "q": "¿Cómo se procede al iniciar sesión en Red Hat Enterprise Linux por primera vez?",
    "extra": "",
    "opts": [
      "Se selecciona 'Empezar tour' y luego se registra el sistema",
      "Se pulsa 'No gracias' en la bienvenida y luego se registra el sistema para actualizaciones",
      "Se omite completamente el registro del sistema",
      "Se configura inmediatamente el escritorio"
    ],
    "ans": 1,
    "exp": "Se debe pulsar 'No gracias' en la pantalla de bienvenida y luego registrar el sistema para recibir actualizaciones."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "easy",
    "case": "Para identificar fácilmente la máquina virtual en VirtualBox, el nombre debe seguir un formato específico.",
    "q": "¿Qué formato debe seguir el nombre de la máquina virtual en VirtualBox?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#ffffff;padding:15px;font-family:monospace;border-radius:5px;">
      <b>💻 VirtualBox - Create Virtual Machine</b><br><br>
      <span style="color:#ffa500;">Name:</span> <input placeholder="RARSREDHAT" style="background:#333;color:#fff;border:1px solid #555;"><br>
      <span style="color:#ffa500;">Folder:</span> /home/user/VirtualBox VMs<br>
      <span style="color:#ffa500;">ISO Image:</span> rhel-10.0-x86_64-dvd.iso<br><br>
      <span style="color:#ffa500;">ⓘ El nombre debe ser la inicial del nombre y apellido seguidas de REDHAT</span>
      </div>
      `,
    "opts": [
      "REDHAT + números",
      "Iniciales de nombre y apellido + REDHAT",
      "SOLO REDHAT",
      "Nombre completo + REDHAT"
    ],
    "ans": 1,
    "exp": "El nombre debe ser la inicial del nombre y apellido seguidas de REDHAT. Ejemplo: RARSREDHAT (R=nombre, ARS=apellidos)."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Para sistemas que requieren cumplir con estándares de seguridad específicos, el instalador ofrece políticas predefinidas.",
    "q": "¿Para qué sirve la configuración de Security Policy en la instalación de Red Hat?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#ffffff;padding:15px;font-family:monospace;border-radius:5px;">
      <b>🔒 SECURITY POLICY</b><br><br>
      <span style="color:#ffa500;">Security Profile:</span><br>
      ☐ PCI-DSS (Payment Card Industry)<br>
      ☐ OSPP (Operating System Protection Profile)<br><br>
      <span style="color:#888;">⚠️ Si el sistema va a formar parte de un entorno PCI u OSPP,<br>aquí se puede habilitar una política de seguridad específica.</span><br><br>
      <span style="color:#888;">[Hecho]</span>
      </div>
      `,
    "opts": [
      "Para configurar el firewall del sistema",
      "Para habilitar una política de seguridad específica si el sistema forma parte de un entorno PCI u OSPP",
      "Para instalar antivirus",
      "Para configurar contraseñas complejas"
    ],
    "ans": 1,
    "exp": "La política de seguridad permite habilitar una política específica en caso de que el sistema forme parte de un entorno PCI u OSPP."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "easy",
    "case": "Después de completar la instalación y configuración inicial, es recomendable preservar el estado de la máquina.",
    "q": "¿Cuál es el último paso recomendado después de completar la instalación y registro del sistema?",
    "extra": "",
    "opts": [
      "Apagar la máquina inmediatamente",
      "Guardar la máquina virtual",
      "Eliminar los archivos de instalación",
      "Crear un punto de restauración"
    ],
    "ans": 1,
    "exp": "Después de completar la instalación y el registro, se debe guardar la máquina virtual para preservar el estado."
  },

];

export default preguntas_linux;