const preguntas_hardware_software = [


// IT ESSENTIALS - CAPÍTULO 1

    // Cuestionario del capítulo 1
    {
        "profe": true,
        "unit": "Capítulo 1 - Introducción al hardware",
        "diff": "easy",
        "q": "¿Qué es un byte?",
        "opts": [
            "Un bloque de ocho bits almacenados como un 0 o un 1 en el chip de memoria",
            "Un chip de memoria no volátil",
            "Un tipo de memoria de acceso aleatorio",
            "Un dispositivo de almacenamiento óptico"
        ],
        "ans": 0,
        "exp": "Un byte es un bloque de ocho bits almacenados como un 0 o un 1 en el chip de memoria."
    },
    {
        "profe": true,
        "unit": "Capítulo 1 - Introducción al hardware",
        "diff": "easy",
        "q": "¿Qué tipo de memoria es volátil?",
        "opts": [
            "RAM",
            "ROM",
            "DRAM",
            "SRAM"
        ],
        "ans": 0,
        "exp": "La RAM (memoria de acceso aleatorio) es volátil, lo que significa que los contenidos se borran cuando el equipo se apaga."
    },
    {
        "profe": true,
        "unit": "Capítulo 1 - Introducción al hardware",
        "diff": "easy",
        "q": "¿Qué componente se considera el 'cerebro' del equipo?",
        "opts": [
            "Placa base",
            "CPU",
            "RAM",
            "Fuente de alimentación"
        ],
        "ans": 1,
        "exp": "La unidad de procesamiento central (CPU) se considera el cerebro del equipo, responsable de interpretar y ejecutar los comandos."
    },
    {
        "profe": true,
        "unit": "Capítulo 1 - Introducción al hardware",
        "diff": "medium",
        "q": "¿Qué tipo de memoria es no volátil?",
        "opts": [
            "RAM",
            "ROM",
            "DRAM",
            "SDRAM"
        ],
        "ans": 1,
        "exp": "La ROM (memoria de solo lectura) es no volátil, lo que significa que los contenidos no se borran cuando el equipo se apaga."
    },
    {
        "profe": true,
        "unit": "Capítulo 1 - Introducción al hardware",
        "diff": "medium",
        "q": "¿Cuál de los siguientes NO es un componente de la placa base?",
        "opts": [
            "CPU",
            "RAM",
            "Ranuras de expansión",
            "Fuente de alimentación"
        ],
        "ans": 3,
        "exp": "La fuente de alimentación no es un componente de la placa base; es un componente separado que proporciona energía a la placa base y otros componentes."
    },
    {
        "profe": true,
        "unit": "Capítulo 1 - Introducción al hardware",
        "diff": "medium",
        "q": "¿Qué factor de forma de placa base es el más común en la actualidad?",
        "opts": [
            "AT",
            "ATX",
            "Micro-ATX",
            "ITX"
        ],
        "ans": 1,
        "exp": "ATX (Tecnología avanzada extendida) es el factor de forma más común de las placas base en la actualidad."
    },
    {
        "profe": true,
        "unit": "Capítulo 1 - Introducción al hardware",
        "diff": "hard",
        "q": "¿Cuál es la diferencia principal entre la arquitectura PGA y LGA?",
        "opts": [
            "PGA tiene pines en el socket, LGA tiene pines en el procesador",
            "PGA tiene pines en el procesador, LGA tiene pines en el socket",
            "PGA es para procesadores Intel, LGA para AMD",
            "PGA es para procesadores AMD, LGA para Intel"
        ],
        "ans": 1,
        "exp": "En la arquitectura PGA (matriz de pines en cuadrícula), los pines se encuentran en la parte inferior del paquete de procesadores. En la arquitectura LGA (interfaz de conexión a nivel físico), los pines se encuentran en el socket y no en el procesador."
    },
    {
        "profe": true,
        "unit": "Capítulo 1 - Introducción al hardware",
        "diff": "easy",
        "q": "¿Qué es la ESD?",
        "opts": [
            "Un tipo de fuente de alimentación",
            "Descarga electrostática que puede dañar componentes",
            "Un sistema operativo",
            "Un tipo de memoria"
        ],
        "ans": 1,
        "exp": "ESD (descarga electrostática) puede ocurrir cuando hay una acumulación de una carga eléctrica en una superficie que entra en contacto con otra cargada de diferente manera, y puede provocar daños a los equipos de computación."
    },
    {
        "profe": true,
        "unit": "Capítulo 1 - Introducción al hardware",
        "diff": "medium",
        "q": "¿Qué dispositivo de almacenamiento no tiene partes móviles?",
        "opts": [
            "HDD",
            "SSD",
            "Unidad de cinta",
            "Unidad óptica"
        ],
        "ans": 1,
        "exp": "Las unidades de estado sólido (SSD) no poseen piezas móviles, no hacen ruido, proporcionan un mayor ahorro de energía y producen menos calor que las HDD."
    },
    {
        "profe": true,
        "unit": "Capítulo 1 - Introducción al hardware",
        "diff": "hard",
        "q": "¿Qué tecnología permite que las SSD se conecten directamente al bus PCIe?",
        "opts": [
            "SATA",
            "NVMe",
            "mSATA",
            "IDE"
        ],
        "ans": 1,
        "exp": "La especificación NVMe (memoria no volátil exprés) se desarrolló específicamente para permitir que los equipos aprovechen mejor la ventaja de las funciones de las SSD al proporcionar una interfaz estándar entre las SSD, el bus PCIe y los sistemas operativos."
    },
    {
        "profe": true,
        "unit": "Capítulo 1 - Introducción al hardware",
        "diff": "easy",
        "q": "¿Qué tipo de dispositivo de salida crea copias impresas de archivos?",
        "opts": [
            "Monitor",
            "Impresora",
            "Altavoz",
            "Proyector"
        ],
        "ans": 1,
        "exp": "Las impresoras son dispositivos de salida que crean copias impresas de archivos de equipo."
    },
    {
        "profe": true,
        "unit": "Capítulo 1 - Introducción al hardware",
        "diff": "easy",
        "q": "¿Qué es la Realidad Virtual (VR)?",
        "opts": [
            "Superposición de imágenes en el mundo real",
            "Creación de un entorno tridimensional simulado",
            "Un tipo de impresora",
            "Un dispositivo de almacenamiento"
        ],
        "ans": 1,
        "exp": "La Realidad Virtual (VR) utiliza la tecnología informática para crear un entorno tridimensional simulado. El usuario se siente sumergido en este 'mundo virtual'."
    },
    {
        "profe": true,
        "unit": "Capítulo 1 - Introducción al hardware",
        "diff": "medium",
        "q": "¿Qué voltajes comunes proporciona una fuente de alimentación?",
        "opts": [
            "1.5V, 3V, 6V",
            "3.3V, 5V, 12V",
            "5V, 10V, 15V",
            "6V, 9V, 12V"
        ],
        "ans": 1,
        "exp": "Los voltajes más comunes suministrados por una fuente de alimentación son de 3.3 voltios, 5 voltios y 12 voltios."
    },
    {
        "profe": true,
        "unit": "Capítulo 1 - Introducción al hardware",
        "diff": "hard",
        "q": "¿Qué tipo de unidad combina una HDD magnética con memoria flash integrada?",
        "opts": [
            "SSD",
            "NVMe",
            "SSHD",
            "SATA"
        ],
        "ans": 2,
        "exp": "Las unidades híbridas de estado sólido (SSHD) son unidades intermedias entre una HDD magnética y una SSD. Combinan una HDD magnética con memoria flash integrada que sirve como caché no volátil."
    },


// IT ESSENTIALS - CAPÍTULO 2


    // Cuestionario del capítulo 2
    {
        "profe": true,
        "unit": "Capítulo 2 - Armado de la PC",
        "diff": "easy",
        "q": "¿Qué factores influyen en la selección de un gabinete para PC?",
        "opts": [
            "Solo el tamaño de la placa base",
            "El factor de forma de la placa base y la fuente de alimentación",
            "El color del gabinete",
            "La marca del procesador"
        ],
        "ans": 1,
        "exp": "El factor de forma de la placa base debe coincidir con el tipo correcto de gabinete y la fuente de alimentación del equipo."
    },
    {
        "profe": true,
        "unit": "Capítulo 2 - Armado de la PC",
        "diff": "easy",
        "q": "¿Qué voltajes proporciona una fuente de alimentación?",
        "opts": [
            "1.5V, 3V, 6V",
            "3.3V, 5V, 12V",
            "5V, 10V, 15V",
            "6V, 9V, 12V"
        ],
        "ans": 1,
        "exp": "Las fuentes de alimentación suelen proporcionar voltajes de 3,3 V, 5 V y 12 V y se miden en vataje."
    },
    {
        "profe": true,
        "unit": "Capítulo 2 - Armado de la PC",
        "diff": "easy",
        "q": "¿Qué factor de forma de placa base requiere un gabinete y una fuente de alimentación compatibles?",
        "opts": [
            "ATX",
            "Mini-ITX",
            "Micro-ATX",
            "Todas las anteriores"
        ],
        "ans": 3,
        "exp": "Todos los factores de forma de placa base requieren un gabinete y una fuente de alimentación compatibles con sus especificaciones."
    },
    {
        "profe": true,
        "unit": "Capítulo 2 - Armado de la PC",
        "diff": "medium",
        "q": "¿Cuál de los siguientes NO es un factor a considerar al seleccionar un gabinete?",
        "opts": [
            "Durabilidad",
            "Facilidad de reparación",
            "Espacio para expansión",
            "Velocidad del procesador"
        ],
        "ans": 3,
        "exp": "La velocidad del procesador no es un factor que afecte la selección de un gabinete. La durabilidad, facilidad de reparación y espacio para expansión sí son factores importantes."
    },
    {
        "profe": true,
        "unit": "Capítulo 2 - Armado de la PC",
        "diff": "medium",
        "q": "¿Qué es un riel en una fuente de alimentación?",
        "opts": [
            "Un cable de alimentación",
            "La placa de circuito impreso a la que se conectan los cables",
            "Un conector de la placa base",
            "Un tipo de ventilador"
        ],
        "ans": 1,
        "exp": "Un riel es la placa de circuito impreso (PCB), incluida dentro de la fuente de alimentación, a la que se conectan los cables externos."
    },
    {
        "profe": true,
        "unit": "Capítulo 2 - Armado de la PC",
        "diff": "hard",
        "q": "¿Qué tipo de fuente de alimentación se diseñó originalmente para servidores de red?",
        "opts": [
            "AT",
            "ATX",
            "ATX de 12V",
            "EPS de 12V"
        ],
        "ans": 3,
        "exp": "La fuente de alimentación EPS de 12 V se diseñó originalmente para servidores de red, pero en la actualidad se utiliza comúnmente en modelos de escritorio de alta gama."
    },
    {
        "profe": true,
        "unit": "Capítulo 2 - Armado de la PC",
        "diff": "easy",
        "q": "¿Cuál es el propósito de instalar ventiladores de gabinete?",
        "opts": [
            "Reducir el ruido",
            "Introducir aire frío y expulsar el calor",
            "Aumentar la velocidad del procesador",
            "Mejorar la conexión a internet"
        ],
        "ans": 1,
        "exp": "Se deben instalar ventiladores de gabinete para introducir aire frío en el gabinete de la PC y expulsar el calor."
    },
    {
        "profe": true,
        "unit": "Capítulo 2 - Armado de la PC",
        "diff": "medium",
        "q": "¿Cuál es el factor de forma más común para discos duros internos en PCs de escritorio?",
        "opts": [
            "1.8 pulgadas",
            "2.5 pulgadas",
            "3.5 pulgadas",
            "5.25 pulgadas"
        ],
        "ans": 2,
        "exp": "La mayoría de las HDD internas está disponible en el factor de forma de 3,5 pulgadas (8,9 cm) para PCs de escritorio."
    },
    {
        "profe": true,
        "unit": "Capítulo 2 - Armado de la PC",
        "diff": "hard",
        "q": "¿Qué tipo de cable de panel frontal se conecta a la placa base para el botón de encendido?",
        "opts": [
            "Cable SATA",
            "Cable IDE",
            "Cable del panel frontal",
            "Cable USB"
        ],
        "ans": 2,
        "exp": "Los cables del panel frontal, que incluyen el botón de encendido, deben conectarse al conector común del panel del sistema en una placa base."
    },
    {
        "profe": true,
        "unit": "Capítulo 2 - Armado de la PC",
        "diff": "easy",
        "q": "¿Qué tipo de puerto se usa comúnmente para conectar unidades ópticas?",
        "opts": [
            "USB",
            "SATA",
            "IDE",
            "eSATA"
        ],
        "ans": 1,
        "exp": "Las unidades ópticas, al igual que los discos duros, generalmente se conectan mediante interfaces SATA en equipos modernos."
    },

    // IT ESSENTIALS - CAPÍTULO 3



    // Cuestionario del capítulo 3
    {
        "profe": true,
        "unit": "Capítulo 3 - Hardware de equipo Avanzado",
        "diff": "easy",
        "q": "¿Qué realiza el POST durante el arranque del equipo?",
        "opts": [
            "Carga el sistema operativo",
            "Verifica los componentes principales del hardware",
            "Configura el BIOS",
            "Inicia los servicios de red"
        ],
        "ans": 1,
        "exp": "POST (prueba automática de encendido) realiza una verificación de hardware en los componentes principales del equipo durante el arranque."
    },
    {
        "profe": true,
        "unit": "Capítulo 3 - Hardware de equipo Avanzado",
        "diff": "easy",
        "q": "¿Qué chip almacena la configuración del BIOS?",
        "opts": [
            "BIOS",
            "CMOS",
            "CPU",
            "RAM"
        ],
        "ans": 1,
        "exp": "El fabricante de la placa base guarda la configuración de BIOS de la placa base en un chip de memoria CMOS."
    },
    {
        "profe": true,
        "unit": "Capítulo 3 - Hardware de equipo Avanzado",
        "diff": "medium",
        "q": "¿Qué tecnología reemplazó al BIOS tradicional?",
        "opts": [
            "CMOS",
            "UEFI",
            "POST",
            "RAID"
        ],
        "ans": 1,
        "exp": "UEFI (interfaz de firmware unificada extensible) es la tecnología que reemplazó al BIOS tradicional, proporcionando características adicionales y abordando problemas de seguridad."
    },
    {
        "profe": true,
        "unit": "Capítulo 3 - Hardware de equipo Avanzado",
        "diff": "medium",
        "q": "¿Qué función de seguridad de UEFI garantiza que el equipo arranque solo un sistema operativo confiable?",
        "opts": [
            "TPM",
            "BitLocker",
            "Arranque seguro",
            "Contraseña de supervisor"
        ],
        "ans": 2,
        "exp": "El Arranque seguro es un estándar de seguridad de UEFI que garantiza que un equipo arranque solo un sistema operativo que haya sido confiado por el fabricante de la placa base."
    },
    {
        "profe": true,
        "unit": "Capítulo 3 - Hardware de equipo Avanzado",
        "diff": "hard",
        "q": "¿Qué es el TPM (Módulo de plataforma segura)?",
        "opts": [
            "Un tipo de memoria",
            "Un chip diseñado para asegurar el hardware mediante el almacenamiento de claves de cifrado",
            "Un sistema operativo",
            "Un tipo de procesador"
        ],
        "ans": 1,
        "exp": "TPM es un chip diseñado para asegurar el hardware mediante el almacenamiento de las claves de cifrado, los certificados digitales, las contraseñas y los datos."
    },
    {
        "profe": true,
        "unit": "Capítulo 3 - Hardware de equipo Avanzado",
        "diff": "easy",
        "q": "¿Qué ley describe la relación entre voltaje, corriente y resistencia?",
        "opts": [
            "Ley de Newton",
            "Ley de Ohm",
            "Ley de Faraday",
            "Ley de Coulomb"
        ],
        "ans": 1,
        "exp": "La ley de Ohm expresa cómo el voltaje es igual a la corriente multiplicada por la resistencia: V = IR."
    },
    {
        "profe": true,
        "unit": "Capítulo 3 - Hardware de equipo Avanzado",
        "diff": "easy",
        "q": "¿Qué dispositivo protege contra los picos de voltaje?",
        "opts": [
            "UPS",
            "Protector de sobrevoltaje",
            "SPS",
            "Fuente de alimentación"
        ],
        "ans": 1,
        "exp": "Un protector de sobrevoltaje ayuda a proteger contra los daños ocasionados por sobrevoltaje y picos de voltaje."
    },
    {
        "profe": true,
        "unit": "Capítulo 3 - Hardware de equipo Avanzado",
        "diff": "medium",
        "q": "¿Cuál es la diferencia principal entre una UPS y una SPS?",
        "opts": [
            "La UPS es más barata",
            "La UPS proporciona energía constante, la SPS tiene una batería de respaldo",
            "La SPS es más confiable",
            "No hay diferencia"
        ],
        "ans": 1,
        "exp": "La UPS proporciona un nivel constante de energía eléctrica, mientras que la SPS utiliza una batería de reserva que suministra energía cuando se produce una caída del voltaje de entrada."
    },
    {
        "profe": true,
        "unit": "Capítulo 3 - Hardware de equipo Avanzado",
        "diff": "hard",
        "q": "¿Qué tipo de procesador tiene varios núcleos en un solo chip?",
        "opts": [
            "RISC",
            "CISC",
            "Multinúcleo",
            "Hyper-Threading"
        ],
        "ans": 2,
        "exp": "Los procesadores multinúcleo poseen dos o más procesadores en el mismo circuito integrado, lo que permite ejecutar instrucciones más rápidamente."
    },
    {
        "profe": true,
        "unit": "Capítulo 3 - Hardware de equipo Avanzado",
        "diff": "medium",
        "q": "¿Qué nivel de RAID proporciona duplicación de datos?",
        "opts": [
            "RAID 0",
            "RAID 1",
            "RAID 5",
            "RAID 10"
        ],
        "ans": 1,
        "exp": "RAID 1 utiliza duplicación, almacenando datos duplicados en una o más unidades para proporcionar redundancia."
    },
    {
        "profe": true,
        "unit": "Capítulo 3 - Hardware de equipo Avanzado",
        "diff": "hard",
        "q": "¿Qué nivel de RAID combina segmentación y duplicación?",
        "opts": [
            "RAID 0",
            "RAID 1",
            "RAID 5",
            "RAID 10"
        ],
        "ans": 3,
        "exp": "RAID 10 combina las funcionalidades de RAID 1 (duplicación) y RAID 0 (segmentación), proporcionando tanto rendimiento como redundancia."
    },
    {
        "profe": true,
        "unit": "Capítulo 3 - Hardware de equipo Avanzado",
        "diff": "easy",
        "q": "¿Qué tipo de memoria RAM se utiliza comúnmente en equipos portátiles?",
        "opts": [
            "DIMM",
            "SODIMM",
            "RIMM",
            "SIMM"
        ],
        "ans": 1,
        "exp": "La mayoría de los equipos portátiles usan un módulo de memoria más pequeño, llamado SODIMM (Small Outline DIMM)."
    },
    {
        "profe": true,
        "unit": "Capítulo 3 - Hardware de equipo Avanzado",
        "diff": "medium",
        "q": "¿Qué método de eliminación de datos es irreversible y destruye físicamente el medio?",
        "opts": [
            "Borrado de archivos",
            "Formateo rápido",
            "Desmagnetización",
            "Sobrescritura"
        ],
        "ans": 2,
        "exp": "La desmagnetización es un método irreversible que destruye los datos en medios magnéticos, haciéndolos irrecuperables."
    },


// IT ESSENTIALS - CAPÍTULO 4

    // Cuestionario del capítulo 4
    {
        "profe": true,
        "unit": "Capítulo 4 - Mantenimiento preventivo y resolución de problemas",
        "diff": "easy",
        "q": "¿Cuál es un beneficio del mantenimiento preventivo?",
        "opts": [
            "Aumenta la velocidad del procesador",
            "Reduce las fallas de hardware y software",
            "Elimina la necesidad de copias de respaldo",
            "Mejora la conexión a internet"
        ],
        "ans": 1,
        "exp": "El mantenimiento preventivo reduce los problemas potenciales de hardware y software, el tiempo de inactividad del equipo, los costos de reparación y la cantidad de fallas de los equipos."
    },
    {
        "profe": true,
        "unit": "Capítulo 4 - Mantenimiento preventivo y resolución de problemas",
        "diff": "easy",
        "q": "¿Qué herramienta se recomienda para limpiar el polvo del interior de una PC?",
        "opts": [
            "Un paño húmedo",
            "Aspiradora doméstica",
            "Aire comprimido",
            "Líquido limpiador"
        ],
        "ans": 2,
        "exp": "Para limpiar el polvo del interior de una PC se recomienda una combinación de aire comprimido, una aspiradora ESD de bajo flujo de aire y un paño pequeño que no deje pelusa."
    },
    {
        "profe": true,
        "unit": "Capítulo 4 - Mantenimiento preventivo y resolución de problemas",
        "diff": "medium",
        "q": "¿Cuál de los siguientes es un paso del proceso de resolución de problemas?",
        "opts": [
            "Instalar software nuevo",
            "Identificar el problema",
            "Formatear el disco duro",
            "Actualizar el BIOS"
        ],
        "ans": 1,
        "exp": "El primer paso del proceso de resolución de problemas consiste en identificar el problema. Los pasos incluyen: identificar, establecer teoría, probar teoría, plan de acción, verificar y documentar."
    },
    {
        "profe": true,
        "unit": "Capítulo 4 - Mantenimiento preventivo y resolución de problemas",
        "diff": "easy",
        "q": "¿Qué es una pregunta abierta?",
        "opts": [
            "Una pregunta que requiere un sí o no como respuesta",
            "Una pregunta que permite al cliente explicar el problema con sus propias palabras",
            "Una pregunta sobre el modelo del equipo",
            "Una pregunta sobre la versión del sistema operativo"
        ],
        "ans": 1,
        "exp": "Las preguntas abiertas permiten a los clientes explicar los detalles del problema con sus propias palabras y obtener información general."
    },
    {
        "profe": true,
        "unit": "Capítulo 4 - Mantenimiento preventivo y resolución de problemas",
        "diff": "medium",
        "q": "¿Qué utilidad de Windows muestra todos los dispositivos configurados y los errores con iconos especiales?",
        "opts": [
            "Visor de eventos",
            "Administrador de tareas",
            "Administrador de dispositivos",
            "Administrador de discos"
        ],
        "ans": 2,
        "exp": "El Administrador de dispositivos muestra todos los dispositivos configurados en un equipo. Los dispositivos que no funcionan correctamente se marcan con un icono de error."
    },
    {
        "profe": true,
        "unit": "Capítulo 4 - Mantenimiento preventivo y resolución de problemas",
        "diff": "hard",
        "q": "¿Qué indica un triángulo amarillo con un signo de exclamación en el Administrador de dispositivos?",
        "opts": [
            "El dispositivo está deshabilitado",
            "El dispositivo tiene un estado de problema",
            "El dispositivo no está instalado",
            "El dispositivo funciona correctamente"
        ],
        "ans": 1,
        "exp": "Un triángulo amarillo con un signo de exclamación indica que el dispositivo tiene un estado de problema. Una X roja significa que el dispositivo está deshabilitado o eliminado."
    },
    {
        "profe": true,
        "unit": "Capítulo 4 - Mantenimiento preventivo y resolución de problemas",
        "diff": "easy",
        "q": "¿Cuál es el último paso del proceso de resolución de problemas?",
        "opts": [
            "Identificar el problema",
            "Establecer una teoría de causas probables",
            "Documentar los hallazgos y resultados",
            "Implementar la solución"
        ],
        "ans": 2,
        "exp": "El último paso del proceso de resolución de problemas es documentar los hallazgos, acciones y resultados. Esto incluye registrar la descripción del problema, los pasos para resolverlo y los componentes utilizados."
    },
    {
        "profe": true,
        "unit": "Capítulo 4 - Mantenimiento preventivo y resolución de problemas",
        "diff": "medium",
        "q": "¿Qué debe hacer un técnico si no puede determinar la causa exacta del problema?",
        "opts": [
            "Reiniciar el equipo",
            "Elevar el problema a un técnico con más experiencia",
            "Formatear el disco duro",
            "Ignorar el problema"
        ],
        "ans": 1,
        "exp": "Si no puede determinar la causa exacta del problema después de probar todas las teorías, establezca una nueva teoría de causa probable o eleve el problema a un técnico con más experiencia."
    },
    {
        "profe": true,
        "unit": "Capítulo 4 - Mantenimiento preventivo y resolución de problemas",
        "diff": "easy",
        "q": "¿Qué herramienta de Windows muestra las aplicaciones y procesos en ejecución?",
        "opts": [
            "Visor de eventos",
            "Administrador de tareas",
            "Administrador de dispositivos",
            "Explorador de archivos"
        ],
        "ans": 1,
        "exp": "El Administrador de tareas muestra las aplicaciones y los procesos de fondo que están en ejecución. Permite cerrar aplicaciones que dejaron de responder y monitorear el rendimiento."
    },
    {
        "profe": true,
        "unit": "Capítulo 4 - Mantenimiento preventivo y resolución de problemas",
        "diff": "medium",
        "q": "¿Qué es un diario de reparaciones y por qué es importante?",
        "opts": [
            "Un registro de todos los programas instalados",
            "Un registro de problemas, soluciones y cambios realizados en una PC",
            "Una lista de contraseñas de usuarios",
            "Un inventario de hardware"
        ],
        "ans": 1,
        "exp": "Un diario de reparaciones incluye la descripción del problema, las posibles soluciones intentadas y los pasos seguidos para solucionarlo. Es valioso para futuras situaciones similares."
    },


// IT ESSENTIALS - CAPÍTULO 5

    // Cuestionario del capítulo 5
    {
        "profe": true,
        "unit": "Capítulo 5 - Conceptos de redes",
        "diff": "easy",
        "q": "¿Qué dispositivo de red conecta varios dispositivos a una red y utiliza direcciones MAC para reenviar tráfico?",
        "opts": [
            "Router",
            "Switch",
            "Concentrador",
            "Módem"
        ],
        "ans": 1,
        "exp": "Un switch conecta varios dispositivos a una red y toma decisiones de reenvío sobre la base de la dirección MAC de destino incluida en la trama."
    },
    {
        "profe": true,
        "unit": "Capítulo 5 - Conceptos de redes",
        "diff": "easy",
        "q": "¿Qué capa del modelo TCP/IP es responsable del rastreo de conexiones de red?",
        "opts": [
            "Aplicación",
            "Transporte",
            "Internet",
            "Acceso a la red"
        ],
        "ans": 1,
        "exp": "La capa de transporte del modelo TCP/IP es responsable de realizar el rastreo de todas las conexiones de red entre el dispositivo de un usuario y destinos múltiples."
    },
    {
        "profe": true,
        "unit": "Capítulo 5 - Conceptos de redes",
        "diff": "medium",
        "q": "¿Qué protocolo de la capa de transporte proporciona entrega de máximo esfuerzo sin acuse de recibo?",
        "opts": [
            "TCP",
            "UDP",
            "IP",
            "ICMP"
        ],
        "ans": 1,
        "exp": "UDP es un protocolo de la capa de transporte muy simple que no proporciona ninguna confiabilidad. Se lo conoce como un protocolo de entrega de máximo esfuerzo."
    },
    {
        "profe": true,
        "unit": "Capítulo 5 - Conceptos de redes",
        "diff": "easy",
        "q": "¿Qué dispositivo convierte señales digitales en analógicas y viceversa?",
        "opts": [
            "Switch",
            "Router",
            "Módem",
            "Concentrador"
        ],
        "ans": 2,
        "exp": "Un módem convierte señales digitales en señales analógicas y viceversa para permitir la comunicación a través de líneas telefónicas o de cable."
    },
    {
        "profe": true,
        "unit": "Capítulo 5 - Conceptos de redes",
        "diff": "medium",
        "q": "¿Qué número de puerto utiliza el protocolo DHCP?",
        "opts": [
            "53",
            "67",
            "80",
            "443"
        ],
        "ans": 1,
        "exp": "DHCP utiliza el número de puerto 67 para el servidor y 68 para el cliente. El puerto 53 es para DNS, 80 para HTTP y 443 para HTTPS."
    },
    {
        "profe": true,
        "unit": "Capítulo 5 - Conceptos de redes",
        "diff": "easy",
        "q": "¿Qué tipo de red conecta varias redes geográficamente dispersas?",
        "opts": [
            "LAN",
            "WAN",
            "PAN",
            "VLAN"
        ],
        "ans": 1,
        "exp": "Una WAN (red de área amplia) conecta varias redes que se encuentran geográficamente separadas, abarcando grandes áreas."
    },
    {
        "profe": true,
        "unit": "Capítulo 5 - Conceptos de redes",
        "diff": "medium",
        "q": "¿Qué tecnología inalámbrica se usa para conectar dispositivos a una PAN?",
        "opts": [
            "Wi-Fi",
            "Bluetooth",
            "NFC",
            "ZigBee"
        ],
        "ans": 1,
        "exp": "Bluetooth es la tecnología más utilizada para conectar dispositivos a una PAN (red de área personal)."
    },
    {
        "profe": true,
        "unit": "Capítulo 5 - Conceptos de redes",
        "diff": "hard",
        "q": "¿Qué estándar IEEE opera a 2.4 GHz y a 5 GHz?",
        "opts": [
            "802.11a",
            "802.11b",
            "802.11g",
            "802.11n"
        ],
        "ans": 3,
        "exp": "802.11n opera en ambas frecuencias, 2.4 GHz y 5 GHz, y proporciona compatibilidad con versiones anteriores."
    },
    {
        "profe": true,
        "unit": "Capítulo 5 - Conceptos de redes",
        "diff": "easy",
        "q": "¿Qué protocolo traduce nombres de dominio a direcciones IP?",
        "opts": [
            "DHCP",
            "DNS",
            "FTP",
            "HTTP"
        ],
        "ans": 1,
        "exp": "DNS (Sistema de nombres de dominio) es el método que utilizan las PC para traducir los nombres de dominio en direcciones IP."
    },
    {
        "profe": true,
        "unit": "Capítulo 5 - Conceptos de redes",
        "diff": "medium",
        "q": "¿Qué tipo de servidor almacena páginas web de acceso frecuente en la red interna?",
        "opts": [
            "Servidor web",
            "Servidor proxy",
            "Servidor DHCP",
            "Servidor DNS"
        ],
        "ans": 1,
        "exp": "Un servidor proxy almacena páginas web de acceso frecuente en la red interna, actuando como caché para mejorar el rendimiento."
    },
    {
        "profe": true,
        "unit": "Capítulo 5 - Conceptos de redes",
        "diff": "easy",
        "q": "¿Qué tipo de cableado es inmune a la interferencia electromagnética?",
        "opts": [
            "UTP",
            "STP",
            "Fibra óptica",
            "Coaxial"
        ],
        "ans": 2,
        "exp": "El cable de fibra óptica utiliza luz para transmitir señales, por lo que no se ve afectado por la EMI ni la RFI."
    },
    {
        "profe": true,
        "unit": "Capítulo 5 - Conceptos de redes",
        "diff": "medium",
        "q": "¿Qué dispositivo de seguridad monitorea pasivamente el tráfico de red?",
        "opts": [
            "Firewall",
            "IDS",
            "IPS",
            "UTM"
        ],
        "ans": 1,
        "exp": "Un IDS (Sistema de detección de intrusión) monitorea de forma pasiva el tráfico en la red, copiando el flujo de tráfico para su análisis."
    },
    {
        "profe": true,
        "unit": "Capítulo 5 - Conceptos de redes",
        "diff": "hard",
        "q": "¿Qué tecnología inalámbrica utiliza las frecuencias de 125 a 960 MHz para identificar elementos?",
        "opts": [
            "Bluetooth",
            "NFC",
            "RFID",
            "Z-Wave"
        ],
        "ans": 2,
        "exp": "RFID (identificación por radiofrecuencia) utiliza las frecuencias dentro del rango de 125 a 960 MHz para identificar de manera exclusiva los elementos."
    },
    {
        "profe": true,
        "unit": "Capítulo 5 - Conceptos de redes",
        "diff": "easy",
        "q": "¿Qué conector se utiliza para un módem de acceso telefónico?",
        "opts": [
            "RJ-45",
            "RJ-11",
            "USB",
            "VGA"
        ],
        "ans": 1,
        "exp": "El conector RJ-11 se utiliza para conectar un módem analógico a un enchufe de línea telefónica, a diferencia del RJ-45 que se usa para Ethernet."
    },


// IT ESSENTIALS - CAPÍTULO 6

    // Cuestionario del capítulo 6
    {
        "profe": true,
        "unit": "Capítulo 6 - Redes aplicadas",
        "diff": "easy",
        "q": "¿Qué tipo de dirección permanece en el dispositivo sin importar a qué red se conecta?",
        "opts": [
            "Dirección IP",
            "Dirección MAC",
            "Dirección de red",
            "Dirección de host"
        ],
        "ans": 1,
        "exp": "La dirección MAC es codificada por el fabricante en la NIC y permanece en el dispositivo sin importar a qué red se conecta."
    },
    {
        "profe": true,
        "unit": "Capítulo 6 - Redes aplicadas",
        "diff": "easy",
        "q": "¿Qué comando muestra la configuración de red en Windows?",
        "opts": [
            "ifconfig",
            "ipconfig",
            "netstat",
            "ping"
        ],
        "ans": 1,
        "exp": "El comando ipconfig muestra la información básica de configuración IP en Windows, incluida la dirección IP, la máscara de subred y la puerta de enlace predeterminada."
    },
    {
        "profe": true,
        "unit": "Capítulo 6 - Redes aplicadas",
        "diff": "medium",
        "q": "¿Qué protocolo asigna automáticamente direcciones IP en una red?",
        "opts": [
            "DNS",
            "DHCP",
            "FTP",
            "HTTP"
        ],
        "ans": 1,
        "exp": "DHCP es el servicio utilizado para asignar automáticamente la información de direcciones IP a los hosts, simplificando el proceso de asignación."
    },
    {
        "profe": true,
        "unit": "Capítulo 6 - Redes aplicadas",
        "diff": "easy",
        "q": "¿Qué rango de direcciones IP utiliza APIPA?",
        "opts": [
            "192.168.0.0 - 192.168.255.255",
            "169.254.0.0 - 169.254.255.255",
            "10.0.0.0 - 10.255.255.255",
            "172.16.0.0 - 172.31.255.255"
        ],
        "ans": 1,
        "exp": "APIPA (Dirección IP privada automática) asigna direcciones en el rango de 169.254.0.0 a 169.254.255.255 cuando no hay un servidor DHCP disponible."
    },
    {
        "profe": true,
        "unit": "Capítulo 6 - Redes aplicadas",
        "diff": "medium",
        "q": "¿Qué técnica se utiliza para convertir direcciones IPv4 privadas en direcciones públicas enrutables?",
        "opts": [
            "DHCP",
            "DNS",
            "NAT",
            "APIPA"
        ],
        "ans": 2,
        "exp": "NAT (Traducción de direcciones de red) convierte las direcciones IPv4 privadas en direcciones IPv4 enrutables en Internet."
    },
    {
        "profe": true,
        "unit": "Capítulo 6 - Redes aplicadas",
        "diff": "hard",
        "q": "¿Qué función del firewall permite que ciertos puertos se abran para aplicaciones específicas?",
        "opts": [
            "DMZ",
            "Reenvío a puerto asignado",
            "Filtrado de direcciones MAC",
            "UPnP"
        ],
        "ans": 1,
        "exp": "El reenvío a puerto asignado es un método basado en reglas que permite dirigir el tráfico entre dispositivos de redes separadas, abriendo puertos específicos para aplicaciones."
    },
    {
        "profe": true,
        "unit": "Capítulo 6 - Redes aplicadas",
        "diff": "easy",
        "q": "¿Qué método de seguridad inalámbrica es el más seguro actualmente?",
        "opts": [
            "WEP",
            "WPA",
            "WPA2",
            "Abrir"
        ],
        "ans": 2,
        "exp": "WPA2 (Wi-Fi Protected Access 2) es actualmente el método de seguridad inalámbrica más seguro, utilizando cifrado AES."
    },
    {
        "profe": true,
        "unit": "Capítulo 6 - Redes aplicadas",
        "diff": "medium",
        "q": "¿Qué es una dirección IPv6 de enlace local?",
        "opts": [
            "Una dirección que permite la comunicación en toda Internet",
            "Una dirección que permite la comunicación solo en la red local",
            "Una dirección asignada por DHCP",
            "Una dirección pública"
        ],
        "ans": 1,
        "exp": "Una dirección IPv6 de enlace local permite que un dispositivo se comunique con otros dispositivos con IPv6 habilitada en la misma red y solo en esa red. Se encuentra en el rango de fe80:: a febf::."
    },
    {
        "profe": true,
        "unit": "Capítulo 6 - Redes aplicadas",
        "diff": "hard",
        "q": "¿Qué es el filtrado de direcciones MAC en un router inalámbrico?",
        "opts": [
            "Especifica qué direcciones IP tienen acceso",
            "Especifica qué direcciones MAC de dispositivos tienen acceso",
            "Filtra el tráfico por puerto",
            "Bloquea todos los dispositivos"
        ],
        "ans": 1,
        "exp": "El filtrado de direcciones MAC especifica exactamente qué direcciones MAC de dispositivos tienen permitido, o han sido bloqueadas para, enviar datos a su red."
    },
    {
        "profe": true,
        "unit": "Capítulo 6 - Redes aplicadas",
        "diff": "easy",
        "q": "¿Qué comando prueba la conectividad básica entre dispositivos?",
        "opts": [
            "tracert",
            "ping",
            "nslookup",
            "ipconfig"
        ],
        "ans": 1,
        "exp": "El comando ping prueba la conectividad básica entre los dispositivos mediante el uso de mensajes de solicitud y respuesta de eco de ICMP."
    },
    {
        "profe": true,
        "unit": "Capítulo 6 - Redes aplicadas",
        "diff": "easy",
        "q": "¿Qué dispositivo permite que los dispositivos Wi-Fi se conecten a una red?",
        "opts": [
            "Switch",
            "Router",
            "Punto de acceso inalámbrico",
            "Concentrador"
        ],
        "ans": 2,
        "exp": "Un punto de acceso inalámbrico (AP) proporciona acceso a la red a dispositivos inalámbricos, como equipos portátiles y tabletas, utilizando ondas de radio."
    },

// IT ESSENTIALS - CAPÍTULO 7

    // Cuestionario del capítulo 7
    {
        "profe": true,
        "unit": "Capítulo 7 - Equipos portátiles y otros dispositivos móviles",
        "diff": "easy",
        "q": "¿Qué tipo de dispositivos ejecutan sistemas operativos especiales diseñados para dispositivos móviles?",
        "opts": [
            "PC de escritorio",
            "Equipos portátiles",
            "Teléfonos inteligentes",
            "Servidores"
        ],
        "ans": 2,
        "exp": "Los teléfonos inteligentes ejecutan sistemas operativos especiales diseñados para dispositivos móviles, como Google Android y el iOS de Apple."
    },
    {
        "profe": true,
        "unit": "Capítulo 7 - Equipos portátiles y otros dispositivos móviles",
        "diff": "easy",
        "q": "¿Qué tipo de dispositivo se usa para monitorear la frecuencia cardíaca y los pasos dados?",
        "opts": [
            "Reloj inteligente",
            "Seguidor de estado físico",
            "Tableta",
            "Lector electrónico"
        ],
        "ans": 1,
        "exp": "Los seguidores de estado físico son dispositivos que monitorean el cuerpo, como la estado físico, el sueño y el ejercicio, incluyendo la frecuencia cardíaca y la cantidad de pasos dados."
    },
    {
        "profe": true,
        "unit": "Capítulo 7 - Equipos portátiles y otros dispositivos móviles",
        "diff": "medium",
        "q": "¿Qué tipo de memoria RAM se usa comúnmente en equipos portátiles?",
        "opts": [
            "DIMM",
            "SODIMM",
            "RIMM",
            "SIMM"
        ],
        "ans": 1,
        "exp": "La mayoría de los equipos portátiles usan un módulo de memoria más pequeño, llamado SODIMM (Small Outline DIMM)."
    },
    {
        "profe": true,
        "unit": "Capítulo 7 - Equipos portátiles y otros dispositivos móviles",
        "diff": "easy",
        "q": "¿Qué tecla se usa comúnmente para activar funciones secundarias en un teclado de portátil?",
        "opts": [
            "Ctrl",
            "Alt",
            "Fn",
            "Shift"
        ],
        "ans": 2,
        "exp": "La tecla Función (Fn) se usa para activar una segunda función en una tecla de doble propósito en los teclados de los equipos portátiles."
    },
    {
        "profe": true,
        "unit": "Capítulo 7 - Equipos portátiles y otros dispositivos móviles",
        "diff": "medium",
        "q": "¿Qué tecnología móvil permite la comunicación con otros dispositivos cuando están cerca?",
        "opts": [
            "Bluetooth",
            "NFC",
            "IR",
            "Todas las anteriores"
        ],
        "ans": 3,
        "exp": "Bluetooth, NFC (comunicación de campo cercano) e IR (infrarrojo) son tecnologías que permiten la comunicación con otros dispositivos cuando están cerca."
    },
    {
        "profe": true,
        "unit": "Capítulo 7 - Equipos portátiles y otros dispositivos móviles",
        "diff": "hard",
        "q": "¿Qué es el anclaje a red en un teléfono inteligente?",
        "opts": [
            "Conectar el teléfono a una red Wi-Fi",
            "Utilizar el teléfono como un módem para conectar otros dispositivos",
            "Cargar el teléfono",
            "Actualizar el sistema operativo"
        ],
        "ans": 1,
        "exp": "El anclaje a red utiliza el teléfono celular como un módem para otro dispositivo, como una tableta o un equipo portátil, mediante USB o Bluetooth."
    },
    {
        "profe": true,
        "unit": "Capítulo 7 - Equipos portátiles y otros dispositivos móviles",
        "diff": "easy",
        "q": "¿Qué función del modo avión en un dispositivo móvil?",
        "opts": [
            "Aumenta la velocidad de descarga",
            "Apaga todas las radios inalámbricas",
            "Activa el GPS",
            "Mejora la calidad de la cámara"
        ],
        "ans": 1,
        "exp": "El Modo avión apaga todos los datos móviles, así como las radios Wi-Fi y Bluetooth, lo que resulta útil al viajar en avión o en lugares donde el acceso a datos está prohibido."
    },
    {
        "profe": true,
        "unit": "Capítulo 7 - Equipos portátiles y otros dispositivos móviles",
        "diff": "easy",
        "q": "¿Qué se debe hacer antes de limpiar un equipo portátil?",
        "opts": [
            "Desconectar todas las fuentes de energía y quitar la batería",
            "Encender el equipo",
            "Conectar todos los periféricos",
            "Actualizar el sistema operativo"
        ],
        "ans": 0,
        "exp": "Antes de limpiar un equipo portátil, desconecte todas las fuentes de energía y quite la batería para evitar daños por descargas eléctricas."
    },
    {
        "profe": true,
        "unit": "Capítulo 7 - Equipos portátiles y otros dispositivos móviles",
        "diff": "medium",
        "q": "¿Qué tipo de pantalla se usa comúnmente en equipos portátiles?",
        "opts": [
            "CRT",
            "LCD o LED",
            "Plasma",
            "OLED"
        ],
        "ans": 1,
        "exp": "Los equipos portátiles utilizan pantallas LCD o LED integradas en la tapa del gabinete, que son ligeras y de bajo consumo."
    },
    {
        "profe": true,
        "unit": "Capítulo 7 - Equipos portátiles y otros dispositivos móviles",
        "diff": "hard",
        "q": "¿Qué es una CRU (unidad que puede reemplazar el usuario)?",
        "opts": [
            "Un componente que solo puede ser reemplazado por el fabricante",
            "Un componente que puede ser reemplazado por el cliente",
            "Un tipo de procesador",
            "Un tipo de memoria"
        ],
        "ans": 1,
        "exp": "Las CRU (unidades que puede reemplazar el usuario) son componentes como la batería y la RAM que pueden ser reemplazados por el cliente. Las FRU (unidades de reemplazo de campo) requieren un técnico especializado."
    },

// IT ESSENTIALS - CAPÍTULO 8

    // Cuestionario del capítulo 8
    {
        "profe": true,
        "unit": "Capítulo 8 - Impresoras",
        "diff": "easy",
        "q": "¿Qué tipo de impresora utiliza un tambor de imágenes para crear la impresión?",
        "opts": [
            "Inyección de tinta",
            "Láser",
            "Térmica",
            "Matriz de puntos"
        ],
        "ans": 1,
        "exp": "Las impresoras láser utilizan un tambor de imágenes para crear la imagen en el papel, utilizando un rayo láser y tóner."
    },
    {
        "profe": true,
        "unit": "Capítulo 8 - Impresoras",
        "diff": "easy",
        "q": "¿Qué tipo de impresora utiliza cabezales de impresión que golpean una cinta de tinta?",
        "opts": [
            "Inyección de tinta",
            "Láser",
            "Térmica",
            "De impacto"
        ],
        "ans": 3,
        "exp": "Las impresoras de impacto tienen cabezales de impresión que golpean una cinta de tinta, lo que provoca que los caracteres se impriman en el papel. Son ejemplos las impresoras de matriz de puntos."
    },
    {
        "profe": true,
        "unit": "Capítulo 8 - Impresoras",
        "diff": "medium",
        "q": "¿Qué proceso de la impresora láser crea la imagen latente en el tambor?",
        "opts": [
            "Carga",
            "Exposición",
            "Revelado",
            "Transferencia"
        ],
        "ans": 1,
        "exp": "La exposición es el proceso en la impresión láser donde el rayo láser crea la imagen latente en el tambor, descargando las áreas que recibirán tóner."
    },
    {
        "profe": true,
        "unit": "Capítulo 8 - Impresoras",
        "diff": "easy",
        "q": "¿Qué tipo de papel se utiliza en las impresoras térmicas?",
        "opts": [
            "Papel fotográfico",
            "Papel térmico con tratamiento químico",
            "Papel carbónico",
            "Papel de alta calidad"
        ],
        "ans": 1,
        "exp": "Las impresoras térmicas utilizan papel térmico que tiene un tratamiento químico y se vuelve negro cuando se calienta, sin necesidad de tinta ni tóner."
    },
    {
        "profe": true,
        "unit": "Capítulo 8 - Impresoras",
        "diff": "hard",
        "q": "¿Cuál es la secuencia correcta del proceso de impresión láser?",
        "opts": [
            "Carga, Exposición, Revelado, Transferencia, Fusión, Limpieza",
            "Exposición, Carga, Revelado, Transferencia, Fusión, Limpieza",
            "Carga, Revelado, Exposición, Transferencia, Fusión, Limpieza",
            "Carga, Exposición, Transferencia, Revelado, Fusión, Limpieza"
        ],
        "ans": 0,
        "exp": "La secuencia correcta del proceso de impresión láser es: Carga, Exposición, Revelado, Transferencia, Fusión y Limpieza. Cada paso es esencial para producir una impresión de calidad."
    },
    {
        "profe": true,
        "unit": "Capítulo 8 - Impresoras",
        "diff": "easy",
        "q": "¿Qué componente de la impresora láser requiere reemplazo cuando produce impresiones de baja calidad?",
        "opts": [
            "El papel",
            "El cartucho de tóner",
            "El cable USB",
            "El monitor"
        ],
        "ans": 1,
        "exp": "El cartucho de tóner debe reemplazarse cuando la impresora láser produce impresiones de baja calidad, ya que el tóner se agota o se deteriora."
    },
    {
        "profe": true,
        "unit": "Capítulo 8 - Impresoras",
        "diff": "medium",
        "q": "¿Qué es la velocidad de una impresora y cómo se mide?",
        "opts": [
            "Se mide en PPP y determina la calidad",
            "Se mide en PPM y determina la velocidad de impresión",
            "Se mide en GB y determina el almacenamiento",
            "Se mide en MHz y determina el rendimiento"
        ],
        "ans": 1,
        "exp": "La velocidad de la impresora se mide en páginas por minuto (PPM). La calidad se mide en puntos por pulgada (PPP)."
    },
    {
        "profe": true,
        "unit": "Capítulo 8 - Impresoras",
        "diff": "easy",
        "q": "¿Qué protocolo permite la impresión desde cualquier lugar con acceso a Internet?",
        "opts": [
            "Impresión local",
            "Impresión en la nube",
            "Impresión virtual",
            "Impresión de red"
        ],
        "ans": 1,
        "exp": "La impresión en la nube envía un trabajo de impresión a una impresora remota desde cualquier lugar con acceso a Internet, como Google Cloud Print."
    },
    {
        "profe": true,
        "unit": "Capítulo 8 - Impresoras",
        "diff": "hard",
        "q": "¿Qué técnica de impresión virtual guarda el trabajo en un archivo PDF?",
        "opts": [
            "Imprimir a un archivo .prn",
            "Imprimir a PDF",
            "Imprimir a XPS",
            "Imprimir a una imagen"
        ],
        "ans": 1,
        "exp": "Imprimir a PDF es una técnica de impresión virtual que guarda el trabajo en un archivo PDF, que es un estándar abierto lanzado por Adobe."
    },
    {
        "profe": true,
        "unit": "Capítulo 8 - Impresoras",
        "diff": "easy",
        "q": "¿Qué herramienta se usa para limpiar el elemento de calentamiento de una impresora térmica?",
        "opts": [
            "Agua",
            "Alcohol isopropílico",
            "Aire comprimido",
            "Detergente"
        ],
        "ans": 1,
        "exp": "Para limpiar el elemento de calentamiento de una impresora térmica, se recomienda humedecer un hisopo con alcohol isopropílico, ya que ayuda a eliminar los residuos."
    },



// IT ESSENTIALS - CAPÍTULO 9

    // Cuestionario del capítulo 9
    {
        "profe": true,
        "unit": "Capítulo 9 - Virtualización y computación en la nube",
        "diff": "easy",
        "q": "¿Qué es la virtualización?",
        "opts": [
            "Una tecnología que permite que un solo equipo aloje varios equipos virtuales",
            "Un sistema operativo",
            "Un tipo de memoria",
            "Una tecnología de red"
        ],
        "ans": 0,
        "exp": "La virtualización permite que un solo equipo aloje varios equipos virtuales independientes que comparten el hardware del equipo host."
    },
    {
        "profe": true,
        "unit": "Capítulo 9 - Virtualización y computación en la nube",
        "diff": "easy",
        "q": "¿Qué es el hipervisor?",
        "opts": [
            "Un sistema operativo",
            "Un software que administra máquinas virtuales",
            "Un tipo de procesador",
            "Un dispositivo de red"
        ],
        "ans": 1,
        "exp": "El hipervisor es el software que se utiliza en el equipo host para crear y administrar las máquinas virtuales, asignando recursos físicos del sistema."
    },
    {
        "profe": true,
        "unit": "Capítulo 9 - Virtualización y computación en la nube",
        "diff": "medium",
        "q": "¿Cuál es la diferencia entre virtualización y computación en la nube?",
        "opts": [
            "Son lo mismo",
            "La virtualización separa el hardware del sistema, la computación en la nube entrega servicios a través de Internet",
            "La computación en la nube requiere virtualización",
            "No hay diferencia"
        ],
        "ans": 1,
        "exp": "La virtualización separa el hardware del sistema operativo, mientras que la computación en la nube entrega servicios a través de Internet. La virtualización es la base que admite la computación en la nube."
    },
    {
        "profe": true,
        "unit": "Capítulo 9 - Virtualización y computación en la nube",
        "diff": "easy",
        "q": "¿Qué modelo de servicio en la nube proporciona acceso a sistemas operativos y herramientas de desarrollo?",
        "opts": [
            "SaaS",
            "PaaS",
            "IaaS",
            "ITaaS"
        ],
        "ans": 1,
        "exp": "PaaS (Plataforma como servicio) proporciona acceso a sistemas operativos, herramientas de desarrollo, lenguajes de programación y bibliotecas para desarrollar, probar y distribuir aplicaciones."
    },
    {
        "profe": true,
        "unit": "Capítulo 9 - Virtualización y computación en la nube",
        "diff": "hard",
        "q": "¿Qué tipo de hipervisor se ejecuta directamente en el hardware del host?",
        "opts": [
            "Hipervisor tipo 1 (nativo)",
            "Hipervisor tipo 2 (alojado)",
            "Hyper-V",
            "VirtualBox"
        ],
        "ans": 0,
        "exp": "El hipervisor tipo 1 (nativo) se ejecuta directamente en el hardware de un host y administra la asignación de los recursos del sistema a los sistemas operativos virtuales."
    },
    {
        "profe": true,
        "unit": "Capítulo 9 - Virtualización y computación en la nube",
        "diff": "easy",
        "q": "¿Qué modelo de servicio en la nube proporciona acceso a aplicaciones como correo electrónico y calendario?",
        "opts": [
            "SaaS",
            "PaaS",
            "IaaS",
            "ITaaS"
        ],
        "ans": 0,
        "exp": "SaaS (Software como servicio) proporciona acceso a servicios como el correo electrónico, el calendario y las herramientas de oficina a través de Internet en base a una suscripción."
    },
    {
        "profe": true,
        "unit": "Capítulo 9 - Virtualización y computación en la nube",
        "diff": "medium",
        "q": "¿Qué modelo de servicio en la nube proporciona acceso a equipos de red, almacenamiento e infraestructura?",
        "opts": [
            "SaaS",
            "PaaS",
            "IaaS",
            "ITaaS"
        ],
        "ans": 2,
        "exp": "IaaS (Infraestructura como servicio) proporciona a las organizaciones acceso a equipos de red, servicios de red virtualizados, almacenamiento y infraestructura de red de apoyo."
    },
    {
        "profe": true,
        "unit": "Capítulo 9 - Virtualización y computación en la nube",
        "diff": "hard",
        "q": "¿Cuál de los siguientes NO es una ventaja de la virtualización sobre los servidores tradicionales?",
        "opts": [
            "Mejor uso de recursos",
            "Menos espacio requerido",
            "Mayor tiempo de actividad",
            "Mayor costo de hardware"
        ],
        "ans": 3,
        "exp": "La virtualización reduce los costos de hardware, no los aumenta. Las ventajas incluyen mejor uso de recursos, menos espacio requerido, reducción de costos y mayor tiempo de actividad."
    },
    {
        "profe": true,
        "unit": "Capítulo 9 - Virtualización y computación en la nube",
        "diff": "easy",
        "q": "¿Qué es una máquina virtual (VM)?",
        "opts": [
            "Un tipo de hardware",
            "Un sistema operativo que se ejecuta en un entorno virtualizado",
            "Un dispositivo de red",
            "Un tipo de memoria"
        ],
        "ans": 1,
        "exp": "Una máquina virtual (VM) es un sistema operativo que se ejecuta en un entorno virtualizado, compartiendo los recursos del equipo host con otras VM."
    },
    {
        "profe": true,
        "unit": "Capítulo 9 - Virtualización y computación en la nube",
        "diff": "medium",
        "q": "¿Qué es el sistema operativo host en virtualización?",
        "opts": [
            "El sistema operativo que se ejecuta en la máquina virtual",
            "El sistema operativo del equipo físico que administra las VM",
            "El sistema operativo de la nube",
            "Un tipo de hipervisor"
        ],
        "ans": 1,
        "exp": "El sistema operativo host es el sistema operativo del equipo físico (host). Los usuarios pueden utilizar un emulador de virtualización en el SO host para crear y administrar las VM."
    },


// IT ESSENTIALS - CAPÍTULO 10


    // Cuestionario del capítulo 10
    {
        "profe": true,
        "unit": "Capítulo 10 - Instalación de Windows",
        "diff": "easy",
        "q": "¿Cuál es el sistema de archivos predeterminado en Windows 7?",
        "opts": [
            "FAT32",
            "NTFS",
            "exFAT",
            "CDFS"
        ],
        "ans": 1,
        "exp": "Windows 7 utiliza NTFS como sistema de archivos predeterminado durante una nueva instalación."
    },
    {
        "profe": true,
        "unit": "Capítulo 10 - Instalación de Windows",
        "diff": "easy",
        "q": "¿Cuántos tipos de cuentas de usuario predeterminados proporciona Windows 10?",
        "opts": [
            "1",
            "2",
            "3",
            "4"
        ],
        "ans": 1,
        "exp": "Windows 10 ofrece dos tipos de cuenta: administrador y usuario estándar."
    },
    {
        "profe": true,
        "unit": "Capítulo 10 - Instalación de Windows",
        "diff": "easy",
        "q": "¿Qué es la multitarea en un sistema operativo?",
        "opts": [
            "Capacidad de admitir dos o más CPU",
            "Capacidad de operar varias aplicaciones de forma simultánea",
            "Capacidad de dividir un programa en partes más pequeñas",
            "Capacidad de admitir dos o más usuarios"
        ],
        "ans": 1,
        "exp": "Multitarea describe un sistema operativo de computadora que es capaz de operar varias aplicaciones de forma simultánea."
    },
    {
        "profe": true,
        "unit": "Capítulo 10 - Instalación de Windows",
        "diff": "medium",
        "q": "¿Qué tecla se utiliza durante el proceso de arranque para elegir iniciar Windows en modo seguro?",
        "opts": [
            "F2",
            "F8",
            "F12",
            "Esc"
        ],
        "ans": 1,
        "exp": "Si se presiona la tecla F8 durante el proceso de inicio, se abre el menú opciones de arranque avanzadas de Windows, que permite seleccionar el modo seguro."
    },
    {
        "profe": true,
        "unit": "Capítulo 10 - Instalación de Windows",
        "diff": "medium",
        "q": "¿Qué es el registro de arranque maestro (MBR)?",
        "opts": [
            "Un sistema de archivos",
            "Un programa ejecutable que permite elegir entre varios sistemas operativos",
            "Un tipo de partición",
            "Una utilidad de Windows"
        ],
        "ans": 1,
        "exp": "El MBR toma los primeros 512 bytes en el disco y contiene el cargador de arranque, un programa ejecutable que permite al usuario elegir entre varios sistemas operativos."
    },
    {
        "profe": true,
        "unit": "Capítulo 10 - Instalación de Windows",
        "diff": "hard",
        "q": "¿Qué operación en Windows 10 se limita exclusivamente a los usuarios con privilegios de administrador?",
        "opts": [
            "Ejecutar aplicaciones",
            "Instalar programas de software",
            "Cambiar la hora del sistema",
            "Crear documentos"
        ],
        "ans": 1,
        "exp": "La instalación de programas de software requiere privilegios de administrador en Windows 10, a diferencia de ejecutar aplicaciones o crear documentos."
    },
    {
        "profe": true,
        "unit": "Capítulo 10 - Instalación de Windows",
        "diff": "easy",
        "q": "¿Qué es el multiprocesamiento en un sistema operativo?",
        "opts": [
            "Capacidad de operar varias aplicaciones de forma simultánea",
            "Capacidad de admitir dos o más CPU",
            "Capacidad de dividir un programa en partes más pequeñas",
            "Capacidad de admitir dos o más usuarios"
        ],
        "ans": 1,
        "exp": "Multiprocesamiento describe un sistema operativo que puede admitir dos o más CPU."
    },
    {
        "profe": true,
        "unit": "Capítulo 10 - Instalación de Windows",
        "diff": "easy",
        "q": "¿Qué sistema de archivos se utiliza para acceder a archivos en una red?",
        "opts": [
            "FAT32",
            "NTFS",
            "NFS",
            "CDFS"
        ],
        "ans": 2,
        "exp": "NFS (sistema de archivos de red) es un sistema de archivos con base en la red que permite el acceso al archivo en la red."
    },
    {
        "profe": true,
        "unit": "Capítulo 10 - Instalación de Windows",
        "diff": "medium",
        "q": "¿Qué utilidad de línea de comandos desarrolló Microsoft para transferir archivos y configuraciones a una nueva edición de Windows durante la actualización?",
        "opts": [
            "PCmover Express",
            "Herramienta de migración de estado de usuario",
            "Asistente de actualización",
            "Sysprep"
        ],
        "ans": 1,
        "exp": "La Herramienta de migración de estado de usuario permite transferir archivos y configuraciones a una nueva edición del SO de Windows durante la actualización a Windows 10."
    },
    {
        "profe": true,
        "unit": "Capítulo 10 - Instalación de Windows",
        "diff": "easy",
        "q": "¿Cuál es el formato de partición que se suele utilizar en equipos con firmware UEFI?",
        "opts": [
            "MBR",
            "GPT",
            "FAT",
            "NTFS"
        ],
        "ans": 1,
        "exp": "GPT (tabla de particiones GUID) se suele utilizar en los equipos con el firmware UEFI, a diferencia del MBR que se usa con BIOS tradicional."
    },
    {
        "profe": true,
        "unit": "Capítulo 10 - Instalación de Windows",
        "diff": "hard",
        "q": "¿Qué archivo de programa carga el administrador de arranque en un proceso de arranque de Windows?",
        "opts": [
            "winlogon.exe",
            "winload.exe",
            "ntoskrnl.exe",
            "bootmgr.exe"
        ],
        "ans": 1,
        "exp": "El MBR identifica el Registro de arranque del volumen (VBR), que carga el administrador de arranque, y para Windows es bootmgr.exe, que luego carga winload.exe."
    },
    {
        "profe": true,
        "unit": "Capítulo 10 - Instalación de Windows",
        "diff": "medium",
        "q": "¿Qué es el subprocesamiento múltiple en un sistema operativo?",
        "opts": [
            "Capacidad de operar varias aplicaciones de forma simultánea",
            "Capacidad de admitir dos o más CPU",
            "Capacidad de dividir un programa en partes más pequeñas que se cargan según sea necesario",
            "Capacidad de admitir dos o más usuarios"
        ],
        "ans": 2,
        "exp": "El subprocesamiento múltiple permite que se ejecuten distintas partes de un programa de forma simultánea, dividiendo el programa en partes más pequeñas que se cargan tal como el sistema operativo lo necesite."
    },

    // IT ESSENTIALS - CAPÍTULO 11

    // Cuestionario del capítulo 11
    {
        "profe": true,
        "unit": "Capítulo 11 - Configuración de Windows",
        "diff": "easy",
        "q": "¿Qué utilidad de Windows se utiliza para configurar la política de seguridad local?",
        "opts": [
            "msconfig",
            "secpol.msc",
            "regedit",
            "diskmgmt.msc"
        ],
        "ans": 1,
        "exp": "La política de seguridad local se puede configurar con secpol.msc o desde el Panel de control > Herramientas administrativas > Política de seguridad local."
    },
    {
        "profe": true,
        "unit": "Capítulo 11 - Configuración de Windows",
        "diff": "easy",
        "q": "¿Qué comando se utiliza para ver la información de configuración de red en Windows?",
        "opts": [
            "ifconfig",
            "ipconfig",
            "netstat",
            "ping"
        ],
        "ans": 1,
        "exp": "El comando ipconfig muestra la información básica de configuración IP, incluida la dirección IP, la máscara de subred y la puerta de enlace predeterminada."
    },
    {
        "profe": true,
        "unit": "Capítulo 11 - Configuración de Windows",
        "diff": "easy",
        "q": "¿Qué herramienta de Windows permite ver y administrar todos los servicios en el equipo?",
        "opts": [
            "Administrador de tareas",
            "Administrador de dispositivos",
            "Servicios (services.msc)",
            "Visor de eventos"
        ],
        "ans": 2,
        "exp": "La consola de Servicios (services.msc) permite administrar todos los servicios en su equipo y en los equipos remotos."
    },
    {
        "profe": true,
        "unit": "Capítulo 11 - Configuración de Windows",
        "diff": "easy",
        "q": "¿Qué es un dominio en Windows?",
        "opts": [
            "Un grupo de equipos en la misma red local",
            "Un grupo de equipos y dispositivos con un conjunto común de reglas administradas por un controlador de dominio",
            "Un tipo de grupo en el hogar",
            "Una red pública"
        ],
        "ans": 1,
        "exp": "Un dominio es un grupo de equipos y dispositivos electrónicos con un conjunto común de reglas y procedimientos administrados como una unidad por un controlador de dominio."
    },
    {
        "profe": true,
        "unit": "Capítulo 11 - Configuración de Windows",
        "diff": "easy",
        "q": "¿Qué característica de Windows 10 permite el uso compartido de archivos con dispositivos cercanos mediante Wi-Fi o Bluetooth?",
        "opts": [
            "Grupo en el hogar",
            "Nearby Sharing (Uso compartido en proximidad)",
            "Redes de área local",
            "OneDrive"
        ],
        "ans": 1,
        "exp": "Nearby Sharing es una característica de Windows 10 que permite compartir contenido con un dispositivo cercano mediante Wi-Fi o Bluetooth."
    },
    {
        "profe": true,
        "unit": "Capítulo 11 - Configuración de Windows",
        "diff": "medium",
        "q": "¿Qué herramienta de Windows se utiliza para programar tareas automatizadas?",
        "opts": [
            "Administrador de tareas",
            "Programador de tareas",
            "Visor de eventos",
            "Administrador de dispositivos"
        ],
        "ans": 1,
        "exp": "El Programador de tareas es una herramienta que permite automatizar tareas en Windows, programando la ejecución de scripts o programas en momentos específicos."
    },
    {
        "profe": true,
        "unit": "Capítulo 11 - Configuración de Windows",
        "diff": "medium",
        "q": "¿Qué comando de Windows se usa para probar la conectividad de red rastreando la ruta hasta el destino?",
        "opts": [
            "ping",
            "tracert",
            "nslookup",
            "ipconfig"
        ],
        "ans": 1,
        "exp": "El comando tracert rastrea la ruta que siguen los paquetes desde su equipo hasta el host de destino, mostrando dónde se detienen los paquetes."
    },
    {
        "profe": true,
        "unit": "Capítulo 11 - Configuración de Windows",
        "diff": "hard",
        "q": "¿Qué es el registro de Windows?",
        "opts": [
            "Un archivo de texto con la configuración del sistema",
            "Una base de datos que contiene la configuración de Windows y las aplicaciones",
            "Un registro de eventos del sistema",
            "Un tipo de sistema de archivos"
        ],
        "ans": 1,
        "exp": "El Registro de Windows es una base de datos que contiene la configuración de Windows y de las aplicaciones que utilizan el Registro. Es una organización jerárquica de claves y subclaves."
    },
    {
        "profe": true,
        "unit": "Capítulo 11 - Configuración de Windows",
        "diff": "easy",
        "q": "¿Qué herramienta de Windows se utiliza para ver la información del sistema?",
        "opts": [
            "msconfig",
            "msinfo32",
            "regedit",
            "dxdiag"
        ],
        "ans": 1,
        "exp": "msinfo32 (Información del sistema) es una herramienta que recopila y muestra información sobre PC locales y remotas, incluyendo hardware, controladores y configuraciones."
    },
    {
        "profe": true,
        "unit": "Capítulo 11 - Configuración de Windows",
        "diff": "medium",
        "q": "¿Qué característica de Windows permite el acceso remoto a una PC?",
        "opts": [
            "Asistencia remota",
            "Escritorio remoto",
            "Ambas",
            "Ninguna"
        ],
        "ans": 2,
        "exp": "Windows ofrece tanto Asistencia remota (para ayudar a otros usuarios) como Escritorio remoto (para acceder a su propia PC desde otra ubicación) para el acceso remoto."
    },
    {
        "profe": true,
        "unit": "Capítulo 11 - Configuración de Windows",
        "diff": "hard",
        "q": "¿Qué comando de Windows se usa para administrar discos, particiones y volúmenes desde la línea de comandos?",
        "opts": [
            "diskpart",
            "diskmgmt.msc",
            "format",
            "chkdsk"
        ],
        "ans": 0,
        "exp": "diskpart es una utilidad de línea de comandos para administrar discos, particiones, volúmenes y unidades virtuales en Windows."
    },

// IT ESSENTIALS - CAPÍTULO 12

    // Cuestionario del capítulo 12
    {
        "profe": true,
        "unit": "Capítulo 12 - Sistemas operativos móviles, Linux y OSX",
        "diff": "easy",
        "q": "¿Cuáles son los dos sistemas operativos móviles más utilizados?",
        "opts": [
            "Windows y Linux",
            "Android y iOS",
            "macOS y Linux",
            "Chrome OS y Android"
        ],
        "ans": 1,
        "exp": "Los dos sistemas operativos móviles más utilizados son Android (código abierto) y iOS (exclusivo de Apple)."
    },
    {
        "profe": true,
        "unit": "Capítulo 12 - Sistemas operativos móviles, Linux y OSX",
        "diff": "easy",
        "q": "¿Qué característica de seguridad móvil permite usar la huella digital para desbloquear un dispositivo?",
        "opts": [
            "Bloqueo de pantalla",
            "Autenticación biométrica",
            "Bloqueo remoto",
            "Borrado remoto"
        ],
        "ans": 1,
        "exp": "La autenticación biométrica incluye el uso de huellas digitales, reconocimiento facial o escaneo de retina para desbloquear un dispositivo móvil."
    },
    {
        "profe": true,
        "unit": "Capítulo 12 - Sistemas operativos móviles, Linux y OSX",
        "diff": "medium",
        "q": "¿Qué aplicación de localización se usa en dispositivos iOS para encontrar un dispositivo perdido?",
        "opts": [
            "Android Device Manager",
            "Find My iPhone (Buscar mi iPhone)",
            "Google Sync",
            "OneDrive"
        ],
        "ans": 1,
        "exp": "Find My iPhone (Buscar mi iPhone) es la aplicación de localización de Apple que permite rastrear, bloquear o borrar un dispositivo iOS perdido o robado."
    },
    {
        "profe": true,
        "unit": "Capítulo 12 - Sistemas operativos móviles, Linux y OSX",
        "diff": "easy",
        "q": "¿Qué es el rooting en dispositivos Android?",
        "opts": [
            "Instalar aplicaciones desde Google Play",
            "Obtener acceso privilegiado o de nivel de raíz para modificar el sistema",
            "Actualizar el sistema operativo",
            "Restaurar la configuración de fábrica"
        ],
        "ans": 1,
        "exp": "El rooting es el proceso de obtener acceso privilegiado o de nivel de raíz en dispositivos Android para modificar código o instalar software no diseñado para el dispositivo."
    },
    {
        "profe": true,
        "unit": "Capítulo 12 - Sistemas operativos móviles, Linux y OSX",
        "diff": "hard",
        "q": "¿Qué sistema de archivos utilizan los dispositivos macOS?",
        "opts": [
            "NTFS",
            "FAT32",
            "HFS y APFS",
            "ext4"
        ],
        "ans": 2,
        "exp": "macOS admite HFS (sistema de archivos jerárquico) y APFS (sistema de archivos Apple), que es el más reciente y utilizado en las versiones modernas de macOS."
    },
    {
        "profe": true,
        "unit": "Capítulo 12 - Sistemas operativos móviles, Linux y OSX",
        "diff": "easy",
        "q": "¿Qué herramienta de copia de respaldo se incluye en macOS?",
        "opts": [
            "Copias de seguridad de Windows",
            "Time Machine",
            "Déjà Dup",
            "Clonezilla"
        ],
        "ans": 1,
        "exp": "macOS incluye una herramienta de copia de respaldo llamada Time Machine, que realiza copias de seguridad incrementales periódicas en una unidad externa."
    },
    {
        "profe": true,
        "unit": "Capítulo 12 - Sistemas operativos móviles, Linux y OSX",
        "diff": "medium",
        "q": "¿Qué es el jailbreaking en dispositivos iOS?",
        "opts": [
            "Instalar aplicaciones desde la App Store",
            "Eliminar las restricciones del fabricante para ejecutar código arbitrario",
            "Actualizar el sistema operativo",
            "Restaurar la configuración de fábrica"
        ],
        "ans": 1,
        "exp": "El jailbreaking es el proceso de eliminar las restricciones del fabricante en dispositivos iOS para poder ejecutar código de usuario arbitrario y otorgar acceso total al sistema de archivos."
    },
    {
        "profe": true,
        "unit": "Capítulo 12 - Sistemas operativos móviles, Linux y OSX",
        "diff": "hard",
        "q": "¿Qué es una sandbox en sistemas operativos móviles?",
        "opts": [
            "Un tipo de firewall",
            "Un entorno aislado que mantiene el código separado de otros recursos",
            "Una herramienta de copia de respaldo",
            "Un sistema de archivos"
        ],
        "ans": 1,
        "exp": "Una sandbox es una ubicación del SO que mantiene el código aislado de otros recursos o códigos, lo que dificulta que los programas malintencionados infecten un dispositivo móvil."
    },
    {
        "profe": true,
        "unit": "Capítulo 12 - Sistemas operativos móviles, Linux y OSX",
        "diff": "easy",
        "q": "¿Qué característica permite a un usuario de iOS sincronizar datos sin conectar el dispositivo a una PC?",
        "opts": [
            "iTunes",
            "iCloud",
            "OneDrive",
            "Google Sync"
        ],
        "ans": 1,
        "exp": "iCloud permite a los usuarios de iOS sincronizar y realizar copias de respaldo de sus datos directamente desde el dispositivo, sin necesidad de conectarse a iTunes."
    },
    {
        "profe": true,
        "unit": "Capítulo 12 - Sistemas operativos móviles, Linux y OSX",
        "diff": "medium",
        "q": "¿Qué comando se usa en Linux para mostrar el contenido de un directorio?",
        "opts": [
            "dir",
            "ls",
            "cd",
            "pwd"
        ],
        "ans": 1,
        "exp": "El comando 'ls' se utiliza en Linux para listar el contenido de un directorio. 'dir' es el equivalente en Windows, 'cd' cambia de directorio y 'pwd' muestra el directorio actual."
    },
    {
        "profe": true,
        "unit": "Capítulo 12 - Sistemas operativos móviles, Linux y OSX",
        "diff": "medium",
        "q": "¿Qué método de autenticación permite a los usuarios iniciar sesión una vez para acceder a todos los recursos del sistema?",
        "opts": [
            "Autenticación de clave pública",
            "SSO (inicio de sesión único)",
            "Kerberos",
            "Autenticación basada en host"
        ],
        "ans": 1,
        "exp": "SSO (inicio de sesión único) permite a los usuarios iniciar sesión una vez para acceder a todos los recursos del sistema, sin necesidad de autenticarse cada vez."
    },

// IT ESSENTIALS - CAPÍTULO 13

    // Cuestionario del capítulo 13
    {
        "profe": true,
        "unit": "Capítulo 13 - Seguridad",
        "diff": "easy",
        "q": "¿Qué es el malware?",
        "opts": [
            "Un tipo de hardware",
            "Software malicioso desarrollado para cometer actos malintencionados",
            "Un sistema operativo",
            "Un tipo de red"
        ],
        "ans": 1,
        "exp": "El malware es software desarrollado por delincuentes cibernéticos para cometer actos maliciosos y se instala en un equipo sin el conocimiento del usuario."
    },
    {
        "profe": true,
        "unit": "Capítulo 13 - Seguridad",
        "diff": "easy",
        "q": "¿Qué tipo de malware se propaga mediante acción humana, como abrir un adjunto de correo?",
        "opts": [
            "Troyano",
            "Virus",
            "Gusano",
            "Ransomware"
        ],
        "ans": 1,
        "exp": "Los virus requieren una acción humana para propagarse, como abrir un adjunto de correo electrónico, un archivo de una unidad USB o descargar un archivo."
    },
    {
        "profe": true,
        "unit": "Capítulo 13 - Seguridad",
        "diff": "medium",
        "q": "¿Qué técnica de ingeniería social se utiliza para engañar a las personas mediante llamadas telefónicas fingiendo ser una autoridad?",
        "opts": [
            "Phishing",
            "Pretexting",
            "Carnada",
            "Inspección de basura"
        ],
        "ans": 1,
        "exp": "El pretexting es una técnica de ingeniería social donde el atacante finge ser una autoridad o alguien de confianza para obtener información del usuario por teléfono o en persona."
    },
    {
        "profe": true,
        "unit": "Capítulo 13 - Seguridad",
        "diff": "easy",
        "q": "¿Qué política de seguridad establece los requisitos mínimos para las contraseñas?",
        "opts": [
            "Política de auditoría",
            "Política de contraseñas",
            "Política de uso aceptable",
            "Política de acceso remoto"
        ],
        "ans": 1,
        "exp": "La política de contraseñas es parte de la política de seguridad y establece los requisitos mínimos para las contraseñas, como longitud, complejidad y caducidad."
    },
    {
        "profe": true,
        "unit": "Capítulo 13 - Seguridad",
        "diff": "medium",
        "q": "¿Qué es una zona perimetral (DMZ) en una red?",
        "opts": [
            "Un área donde se almacenan las copias de seguridad",
            "Una red que proporciona servicios a una red no confiable, protegiendo la red interna",
            "Un tipo de firewall",
            "Un segmento de red para usuarios"
        ],
        "ans": 1,
        "exp": "Una DMZ es una red que proporciona servicios a una red no confiable. Los servidores de correo electrónico, web o FTP se colocan dentro de la DMZ para proteger la red interna."
    },
    {
        "profe": true,
        "unit": "Capítulo 13 - Seguridad",
        "diff": "easy",
        "q": "¿Qué es la ingeniería social?",
        "opts": [
            "Un tipo de malware",
            "Una técnica para manipular a las personas para que revelen información confidencial",
            "Un sistema operativo",
            "Un protocolo de red"
        ],
        "ans": 1,
        "exp": "La ingeniería social es un ataque de acceso que intenta manipular a las personas para que realicen acciones o divulguen información confidencial, aprovechando las debilidades humanas."
    },
    {
        "profe": true,
        "unit": "Capítulo 13 - Seguridad",
        "diff": "hard",
        "q": "¿Qué método de cifrado de Windows se usa para cifrar unidades de disco completas?",
        "opts": [
            "EFS",
            "BitLocker",
            "BitLocker To Go",
            "Cifrado de archivos"
        ],
        "ans": 1,
        "exp": "BitLocker es la función de Windows que permite cifrar unidades de disco completas, protegiendo todos los datos en el volumen."
    },
    {
        "profe": true,
        "unit": "Capítulo 13 - Seguridad",
        "diff": "medium",
        "q": "¿Qué tipo de ataque de red intenta adivinar una contraseña probando todas las combinaciones de caracteres?",
        "opts": [
            "Ataque de diccionario",
            "Ataque de fuerza bruta",
            "Tabla arcoíris",
            "Spoofing"
        ],
        "ans": 1,
        "exp": "Un ataque de fuerza bruta intenta adivinar la contraseña probando todas las combinaciones de caracteres posibles, mientras que el ataque de diccionario prueba palabras de un diccionario."
    },
    {
        "profe": true,
        "unit": "Capítulo 13 - Seguridad",
        "diff": "easy",
        "q": "¿Qué programa antimalware viene incluido con Windows 10?",
        "opts": [
            "Norton",
            "McAfee",
            "Windows Defender",
            "Kaspersky"
        ],
        "ans": 2,
        "exp": "Windows Defender es el programa antimalware incluido con Windows 10, que proporciona protección contra virus, spyware y otro malware."
    },
    {
        "profe": true,
        "unit": "Capítulo 13 - Seguridad",
        "diff": "hard",
        "q": "¿Qué es el principio de privilegios mínimos en seguridad informática?",
        "opts": [
            "Todos los usuarios deben tener acceso completo a todos los recursos",
            "Los usuarios deben tener acceso solo a los recursos que necesitan para realizar su trabajo",
            "Los administradores deben tener los mismos permisos que los usuarios normales",
            "No se deben configurar permisos"
        ],
        "ans": 1,
        "exp": "El principio de privilegios mínimos establece que los usuarios deben tener acceso solo a los recursos que necesitan para realizar su trabajo, limitando así el acceso no autorizado."
    },
    {
        "profe": true,
        "unit": "Capítulo 13 - Seguridad",
        "diff": "medium",
        "q": "¿Qué es un ataque de día cero?",
        "opts": [
            "Un ataque que ocurre exactamente a la medianoche",
            "Un ataque que aprovecha una vulnerabilidad desconocida antes de que el proveedor pueda solucionarla",
            "Un ataque que dura cero segundos",
            "Un ataque de ingeniería social"
        ],
        "ans": 1,
        "exp": "Un ataque de día cero ocurre el día en que el proveedor descubre una vulnerabilidad desconocida, antes de que se pueda implementar un parche."
    },

// IT ESSENTIALS - CAPÍTULO 14

    // Cuestionario del capítulo 14
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "easy",
        "q": "¿Cuál es el primer paso para resolver un problema de PC según el proceso de resolución de problemas?",
        "opts": [
            "Establecer una teoría de causas probables",
            "Identificar el problema",
            "Implementar la solución",
            "Documentar los hallazgos"
        ],
        "ans": 1,
        "exp": "El primer paso del proceso de resolución de problemas consiste en identificar el problema, reuniendo la mayor cantidad posible de información del cliente y el equipo."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "easy",
        "q": "¿Qué tipo de pregunta permite al cliente explicar el problema con sus propias palabras?",
        "opts": [
            "Pregunta cerrada",
            "Pregunta abierta",
            "Pregunta directa",
            "Pregunta de opción múltiple"
        ],
        "ans": 1,
        "exp": "Las preguntas abiertas permiten a los clientes explicar los detalles del problema con sus propias palabras, proporcionando información general sobre la situación."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "medium",
        "q": "¿Qué debe hacer un técnico si un cliente está enfadado?",
        "opts": [
            "Discutir con el cliente",
            "Dejar que el cliente se desahogue sin interrumpirlo y luego solidarizarse",
            "Transferir la llamada inmediatamente",
            "Ignorar las quejas del cliente"
        ],
        "ans": 1,
                "exp": "Cuando un cliente está enfadado, el técnico debe dejar que el cliente le cuente el problema sin interrumpirlo, solidarizarse con él y discúlpese por la demora o la molestia. Es importante reorientar la conversación hacia cómo resolver el problema sin discutir ni ponerse a la defensiva."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "medium",
        "q": "¿Qué tipo de cliente suele ser difícil de manejar porque cree saber más que el técnico?",
        "opts": [
            "Cliente locuaz",
            "Cliente experto",
            "Cliente inexperto",
            "Cliente descortés"
        ],
        "ans": 1,
        "exp": "El cliente experto cree saber más que el técnico y puede ser difícil de manejar. Se recomienda darle un panorama general de lo que se intenta verificar y no avanzar paso a paso con este tipo de cliente."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "easy",
        "q": "¿Qué es una pregunta cerrada?",
        "opts": [
            "Una pregunta que permite al cliente explicar el problema con sus propias palabras",
            "Una pregunta que requiere un sí, no o una respuesta fáctica específica",
            "Una pregunta sobre el modelo del equipo",
            "Una pregunta que no tiene respuesta"
        ],
        "ans": 1,
        "exp": "Las preguntas cerradas requieren un 'sí' o 'no' por respuesta o una respuesta fáctica específica, como 'Windows 10'. Se utilizan para obtener información específica después de las preguntas abiertas."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "easy",
        "q": "¿Qué es un SLA (Acuerdo de nivel de servicio)?",
        "opts": [
            "Un tipo de licencia de software",
            "Un contrato entre un cliente y un proveedor de servicios que define los estándares de servicio",
            "Un protocolo de red",
            "Un tipo de hardware"
        ],
        "ans": 1,
        "exp": "El SLA es un contrato entre un cliente y un proveedor de servicios donde se define el servicio o los bienes que recibirá el cliente y los estándares a los que el proveedor debe atenerse."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "medium",
        "q": "¿Qué es la información de identificación personal (PII)?",
        "opts": [
            "Cualquier dato que podría identificar una persona específica",
            "Un tipo de software de seguridad",
            "Un protocolo de red",
            "Un tipo de cifrado"
        ],
        "ans": 0,
        "exp": "PII es cualquier información acerca de una persona que se puede utilizar para diferenciar o localizar su identidad, como nombre, número de seguro social, fecha de nacimiento, datos biométricos, etc."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "hard",
        "q": "¿Qué es la cadena de custodia en informática forense?",
        "opts": [
            "Un tipo de software de seguridad",
            "La documentación de cómo se recopiló la evidencia, dónde se almacenó y quién tuvo acceso a ella",
            "Un tipo de cifrado de datos",
            "Un protocolo de red"
        ],
        "ans": 1,
        "exp": "La cadena de custodia es el proceso de documentar cómo se recopiló la evidencia, dónde se almacenó físicamente y quién tuvo acceso a ella desde el momento de la recopilación hasta la inclusión en el proceso judicial, para que sea aceptada como evidencia."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "hard",
        "q": "¿Qué diferencia hay entre datos persistentes y datos volátiles en informática forense?",
        "opts": [
            "Los datos persistentes se almacenan en RAM, los volátiles en discos duros",
            "Los datos persistentes se conservan al apagar la PC, los volátiles desaparecen",
            "No hay diferencia",
            "Los datos volátiles son más importantes"
        ],
        "ans": 1,
        "exp": "Los datos persistentes se almacenan en una unidad local (disco duro interno o externo) y se conservan cuando se apaga la PC. Los datos volátiles (RAM, caché, registros) desaparecen apenas se apaga el equipo."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "easy",
        "q": "¿Qué se debe hacer antes de acceder a las cuentas de una PC de un cliente?",
        "opts": [
            "Obtener el consentimiento del cliente",
            "Ignorar al cliente",
            "Acceder sin permiso",
            "Esperar a que el cliente se vaya"
        ],
        "ans": 0,
        "exp": "Antes de acceder a cuentas de PC, incluida la cuenta de administrador, siempre se debe obtener el consentimiento del cliente. Esto es tanto ético como legalmente requerido."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "medium",
        "q": "¿Qué es un script en el contexto de TI?",
        "opts": [
            "Un archivo de texto escrito en lenguajes de scripting para automatizar procesos",
            "Un tipo de hardware",
            "Un protocolo de red",
            "Un tipo de memoria"
        ],
        "ans": 0,
        "exp": "Un script es un archivo de texto simple escrito en lenguajes de secuencias de comandos para automatizar los procesos y las tareas en diversos sistemas operativos, ahorrando tiempo al técnico."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "medium",
        "q": "¿Cuál de las siguientes es una consideración legal que debe tener un técnico de TI?",
        "opts": [
            "Modificar configuraciones de hardware sin consentimiento del cliente",
            "Compartir información confidencial del cliente",
            "Instalar software sin licencia",
            "Todas las anteriores son ilegales"
        ],
        "ans": 3,
        "exp": "Todas estas acciones son ilegales: modificar configuraciones sin consentimiento, compartir información confidencial del cliente e instalar software sin licencia. Los técnicos deben cumplir con todas las leyes aplicables."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "hard",
        "q": "¿Qué responsabilidad tiene un técnico de nivel uno en un centro de atención telefónica?",
        "opts": [
            "Resolver todos los problemas sin excepción",
            "Obtener información pertinente del cliente y documentarla en la solicitud de trabajo",
            "Solo responder llamadas de clientes enfadados",
            "Reemplazar hardware dañado"
        ],
        "ans": 1,
        "exp": "La principal responsabilidad del técnico de nivel uno es obtener información pertinente del cliente y documentarla con precisión en la solicitud de trabajo. Los problemas simples pueden resolverse, pero los complejos se elevan a nivel dos."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "hard",
        "q": "¿Qué es el derecho informático?",
        "opts": [
            "Un tipo de licencia de software",
            "Un término que describe las leyes internacionales, regionales y nacionales que afectan a los profesionales de TI",
            "Un protocolo de red",
            "Un tipo de hardware"
        ],
        "ans": 1,
        "exp": "El derecho informático es un término que describe las leyes internacionales, regionales, nacionales y estatales que afectan a los profesionales de la seguridad informática, incluyendo cómo y cuándo se pueden recopilar datos como evidencia."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "medium",
        "q": "¿Qué tipo de licencia de software permite el uso gratuito y la modificación del código fuente?",
        "opts": [
            "Licencia comercial",
            "Licencia de código abierto",
            "Licencia personal",
            "Licencia empresarial"
        ],
        "ans": 1,
        "exp": "Las licencias de código abierto permiten el uso gratuito, la modificación y la redistribución del código fuente. Ejemplos incluyen GPL, MIT y Apache."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "easy",
        "q": "¿Qué se debe hacer si un técnico descubre actividad ilegal en una PC?",
        "opts": [
            "Ignorarlo",
            "No apagar la PC y contactar a las autoridades según la política de la empresa",
            "Apagar inmediatamente la PC",
            "Borrar la evidencia"
        ],
        "ans": 1,
        "exp": "Si se descubre actividad ilegal, no se debe apagar la PC porque los datos volátiles se perderían. Se debe contactar a las autoridades según la política de la empresa y documentar todo lo observado."
    },
    {
        "profe": true,
        "unit": "Capítulo 14 - El profesional de TI",
        "diff": "medium",
        "q": "¿Qué es la HIPAA en el contexto de la seguridad de datos?",
        "opts": [
            "Un tipo de software antivirus",
            "Una ley que protege la información de salud (PHI)",
            "Un protocolo de red",
            "Un tipo de cifrado"
        ],
        "ans": 1,
        "exp": "HIPAA (Ley de portabilidad y responsabilidad del seguro médico) es una ley que protege la información confidencial de salud (PHI) y la información electrónica de salud (ePHI). Las violaciones pueden tener graves consecuencias."
    }

]

export default preguntas_hardware_software;