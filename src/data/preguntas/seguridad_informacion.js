//SEGURIDAD DE LA INFORMACION

const preguntas_seguridad_informacion = [
 {
    "profe": true,
    "posible": false,
    "unit": "Unidad 1",
    "diff": "easy",
    "case": null,
    "extra": null,
    "q": "¿Cuál es el objetivo principal de la Triada de la Seguridad de la Información?",
    "opts": [
      "Proteger contra ataques de malware exclusivamente",
      "Garantizar la confidencialidad, integridad y disponibilidad de la información",
      "Implementar controles de acceso físicos",
      "Detectar vulnerabilidades en sistemas"
    ],
    "ans": 1,
    "exp": "El objetivo principal de la Triada..."
  },
  
// 2. Confidencialidad
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "easy",
      "q": "¿Qué representa la confidencialidad en la Triada de la Seguridad?",
      "opts": [
        "Garantizar que los datos estén siempre disponibles",
        "Proteger los datos contra accesos no autorizados",
        "Asegurar que los datos no sean modificados sin autorización",
        "Monitorear continuamente el sistema"
      ],
      "ans": 1,
      "exp": "La confidencialidad asegura que la información sea accesible únicamente para personas, procesos o sistemas debidamente autorizados. Se implementa mediante cifrado (AES), controles de acceso, autenticación y clasificación de la información. Ejemplo: registros médicos solo accesibles por personal autorizado."
    },

    // 3. Integridad
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "easy",
      "q": "¿Qué describe mejor la integridad en la Triada de la Seguridad?",
      "opts": [
        "Garantizar que la información esté siempre disponible",
        "Proteger contra accesos no autorizados",
        "Asegurar que los datos no sean modificados sin autorización",
        "Configurar sistemas redundantes"
      ],
      "ans": 2,
      "exp": "La integridad garantiza que los datos sean exactos, completos y no hayan sido alterados de forma no autorizada. Se implementa mediante algoritmos de hash (SHA-256), firmas digitales y registros de auditoría."
    },

    // 4. ISO 27001
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "medium",
      "q": "Características de la norma ISO 27001.",
      "opts": [
        "Solo regula contraseñas y accesos físicos",
        "Marco internacional para gestión de seguridad de la información: gestión de riesgos, control de accesos y auditorías regulares de mejora continua",
        "Se aplica exclusivamente a empresas financieras",
        "Es una norma opcional sin valor certificable"
      ],
      "ans": 1,
      "exp": "ISO 27001:2022 es la norma internacional para SGSI. Establece requisitos para implementar, mantener y mejorar un Sistema de Gestión de Seguridad de la Información. Incluye gestión de riesgos, control de accesos, auditorías regulares y ciclo PDCA. Es certificable y aplica a cualquier organización."
    },

    // 5. Disponibilidad (práctica crítica)
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "easy",
      "q": "¿Cuál es una práctica crítica para garantizar la disponibilidad en la seguridad de la información?",
      "opts": [
        "Limitar el acceso a usuarios específicos",
        "Utilizar contraseñas complejas",
        "Realizar copias de seguridad regulares",
        "Configurar firewalls avanzados"
      ],
      "ans": 2,
      "exp": "La práctica más crítica es realizar copias de seguridad (backups) regulares almacenadas en ubicaciones separadas. Complementariamente se usan sistemas redundantes, balanceadores de carga, planes de Disaster Recovery y protecciones contra ataques DDoS."
    },

    // 6. Diferencia seguridad informática vs seguridad de la información
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "medium",
      "q": "¿Qué diferencia clave existe entre seguridad informática y seguridad de la información?",
      "opts": [
        "Son sinónimos completamente intercambiables",
        "La seguridad informática es parte de la seguridad de la información y se enfoca en sistemas tecnológicos",
        "La seguridad de la información solo protege redes corporativas",
        "La seguridad informática abarca políticas y comportamientos humanos"
      ],
      "ans": 1,
      "exp": "La seguridad informática es una subcategoría que protege hardware, software y redes. La seguridad de la información es más amplia e incluye políticas, procesos, comportamiento humano y datos en cualquier formato."
    },

    // 7. Nessus
    {
      "profe": true,
      "unit": "Unidad 3",
      "diff": "medium",
      "q": "Características de la herramienta Nessus.",
      "opts": [
        "Framework de pentesting con exploits personalizables",
        "Escáner de vulnerabilidades que detecta configuraciones erróneas, software desactualizado y proporciona informes detallados para gestión de riesgos",
        "Herramienta exclusiva para aplicaciones web",
        "Sistema de monitoreo de redes en tiempo real"
      ],
      "ans": 1,
      "exp": "Nessus es un escáner de vulnerabilidades profesional. Detecta configuraciones erróneas, software desactualizado, genera informes con severidad CVSS, permite escanear múltiples sistemas y es ideal para auditorías de seguridad."
    },

    // 8. Listas blancas CIS Controls
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "medium",
      "q": "Explique el uso de listas blancas para aplicaciones sugerido por los CIS Controls.",
      "opts": [
        "Permiten ejecutar cualquier software en la red corporativa",
        "Limitan la ejecución de software solo a aplicaciones previamente autorizadas, reduciendo la superficie de ataque (deny by default)",
        "Bloquean el tráfico web no cifrado",
        "Lista de IPs permitidas para acceder al sistema"
      ],
      "ans": 1,
      "exp": "Las listas blancas (whitelisting) definen aplicaciones explícitamente autorizadas. Invierten la lógica: solo permiten lo bueno conocido, bloqueando malware y software no autorizado. Reducen drásticamente la superficie de ataque."
    },

    // 9. Ventaja ISO 27001
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "easy",
      "q": "¿Qué ventaja clave tiene la implementación de ISO 27001?",
      "opts": [
        "Incrementa el valor de los activos físicos",
        "Facilita la gestión de riesgos en la información",
        "Mejora la productividad del personal directamente",
        "Garantiza la integridad física de los servidores"
      ],
      "ans": 1,
      "exp": "La ventaja clave es facilitar la gestión integral de riesgos. Además genera confianza ante clientes, ayuda al cumplimiento normativo, estandariza procesos, promueve mejora continua y reduce incidentes de seguridad."
    },

    // 10. Monitoreo CIS Controls
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "easy",
      "q": "¿Qué tipo de monitoreo es recomendado por los CIS Controls?",
      "opts": [
        "Monitoreo periódico mensual",
        "Monitoreo continuo en tiempo real",
        "Revisiones trimestrales manuales",
        "Supervisión semestral"
      ],
      "ans": 1,
      "exp": "Los CIS Controls recomiendan monitoreo continuo en tiempo real, permitiendo detectar amenazas e incidentes al momento de ocurrir. Se implementa mediante SIEM que correlaciona eventos de múltiples fuentes."
    },

    // 11. Disponibilidad
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "easy",
      "q": "¿Qué representa la disponibilidad en la Triada de la Seguridad?",
      "opts": [
        "Limitar el acceso a usuarios específicos",
        "Asegurar que la información esté accesible cuando sea necesario",
        "Proteger datos de accesos no autorizados",
        "Monitorear redes en tiempo real"
      ],
      "ans": 1,
      "exp": "La disponibilidad garantiza que información y sistemas estén accesibles cuando los usuarios autorizados los necesiten. Se protege con backups, sistemas redundantes, Disaster Recovery y protecciones contra DDoS."
    },

    // 12. Activo de información ISO 27001
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "medium",
      "q": "¿Qué es un activo de información según la ISO 27001?",
      "opts": [
        "Únicamente los equipos físicos de la organización",
        "Cualquier elemento con valor para la organización que requiere protección: datos, hardware, software, personas y procesos",
        "Solo las bases de datos de clientes",
        "Exclusivamente sistemas conectados a internet"
      ],
      "ans": 1,
      "exp": "Un activo de información es cualquier elemento con valor para la organización que debe protegerse: datos digitales, hardware, software, recursos humanos, infraestructura física y servicios. El primer paso del SGSI es identificar y clasificar estos activos."
    },

    // 13. Defensa en profundidad
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "medium",
      "q": "¿Qué describe el principio de defensa en profundidad?",
      "opts": [
        "Usar un solo firewall muy potente en el perímetro",
        "Implementar múltiples capas de controles de seguridad, de modo que si una falla, las otras continúan protegiendo",
        "Cifrar todos los datos con AES-256",
        "Monitorear solo el tráfico externo"
      ],
      "ans": 1,
      "exp": "La defensa en profundidad implementa múltiples capas de controles independientes. Si una capa falla, las siguientes siguen protegiendo. Ejemplo: firewall, segmentación de red, MFA, cifrado, SIEM y backups trabajando juntos."
    },

    // 14. Firewall
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "easy",
      "q": "¿Qué objetivo tiene un firewall en una red?",
      "opts": [
        "Cifrar las comunicaciones de correo electrónico",
        "Controlar y filtrar el tráfico de red entrante y saliente según reglas definidas",
        "Detectar intrusos dentro de la red interna",
        "Escanear vulnerabilidades en servidores"
      ],
      "ans": 1,
      "exp": "El firewall filtra tráfico según reglas predefinidas (IP, puerto, protocolo). Actúa como primera barrera perimetral, impidiendo tráfico no autorizado. Debe complementarse con IDS, SIEM y MFA."
    },

    // 15. Evaluación de riesgos
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "medium",
      "q": "¿Qué se debe considerar al evaluar riesgos en un sistema?",
      "opts": [
        "Solo la probabilidad de ocurrencia del incidente",
        "La probabilidad de ocurrencia y el impacto potencial de cada amenaza sobre los activos",
        "El costo de los equipos físicos únicamente",
        "El número de usuarios del sistema"
      ],
      "ans": 1,
      "exp": "La evaluación de riesgos considera: identificación de activos, amenazas, vulnerabilidades, probabilidad e impacto. La fórmula Riesgo = Probabilidad × Impacto permite priorizar y decidir tratamiento."
    },

    // 16. GDPR
    {
      "profe": true,
      "unit": "Unidad 2",
      "diff": "medium",
      "q": "¿Qué representa el estándar GDPR?",
      "opts": [
        "Norma chilena de protección de datos",
        "Reglamento europeo de protección de datos personales; aplica a organizaciones que traten datos de ciudadanos de la UE, incluso fuera de Europa",
        "Solo aplica a empresas europeas con sede en la UE",
        "Es equivalente a la Ley 19.628 chilena"
      ],
      "ans": 1,
      "exp": "GDPR es el marco legal de la UE para protección de datos personales. Aplica a cualquier organización que maneje datos de ciudadanos europeos. Establece derechos del titular, obliga a reportar brechas en 72 horas y multas hasta 20M€ o 4% facturación."
    },

    // 17. Contraseñas débiles
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "easy",
      "q": "¿Qué práctica ayuda a reducir el riesgo de ataques por contraseñas débiles?",
      "opts": [
        "Usar la misma contraseña para todos los sistemas",
        "Implementar políticas de contraseñas fuertes: longitud mínima, caracteres especiales y rotación periódica",
        "Compartir contraseñas en archivos de texto cifrados",
        "Usar solo números en las contraseñas"
      ],
      "ans": 1,
      "exp": "Las prácticas efectivas son: contraseñas largas y complejas, cambio periódico, gestores de contraseñas, y sobre todo autenticación multifactor (MFA) que añade segunda capa de verificación."
    },

    // 18. Políticas de contraseñas y MFA
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "medium",
      "q": "Explique la implementación de políticas de contraseñas seguras y autenticación multifactor (MFA).",
      "opts": [
        "MFA solo se usa en redes externas",
        "Las políticas definen requisitos mínimos de complejidad; MFA añade segunda capa de verificación combinando algo que sabes, tienes o eres",
        "La MFA reemplaza completamente las contraseñas",
        "Solo se aplican a usuarios administradores"
      ],
      "ans": 1,
      "exp": "Las políticas de contraseñas definen longitud mínima (12+), caracteres mixtos, cambio periódico. MFA añade factores independientes: algo que sabes (contraseña), algo que tienes (token) y algo que eres (biometría). Combinación crítica para accesos remotos y sistemas sensibles."
    },

    // 19. NIST CSF
    {
      "profe": true,
      "unit": "Unidad 2",
      "diff": "medium",
      "q": "¿Qué enfoque utiliza el estándar NIST CSF para gestionar riesgos?",
      "opts": [
        "Enfoque legal y punitivo con multas",
        "Marco de cinco funciones cíclicas: Identificar, Proteger, Detectar, Responder y Recuperar",
        "Sistema de certificación obligatorio",
        "Solo aplica a agencias del gobierno de EE.UU."
      ],
      "ans": 1,
      "exp": "NIST CSF usa 5 funciones: Identificar (activos y riesgos), Proteger (salvaguardas), Detectar (eventos), Responder (contención) y Recuperar (restauración). Marco flexible, basado en riesgos y mejora continua."
    },

    // 20. Gestión de parches
    {
      "profe": true,
      "unit": "Unidad 2",
      "diff": "easy",
      "q": "¿Qué asegura la gestión de parches en un sistema?",
      "opts": [
        "Que las contraseñas se cambien periódicamente",
        "Que las vulnerabilidades conocidas sean corregidas oportunamente mediante actualizaciones de software",
        "Que los firewalls estén correctamente configurados",
        "Que los empleados sean capacitados en seguridad"
      ],
      "ans": 1,
      "exp": "La gestión de parches asegura que sistemas estén actualizados con correcciones de seguridad. Muchos ataques (como WannaCry) explotaron vulnerabilidades con parches disponibles pero no aplicados. Es control esencial en CIS Controls."
    },

    // 21. SIEM
    {
      "profe": true,
      "unit": "Unidad 2",
      "diff": "medium",
      "q": "Características de la herramienta SIEM (Gestión de información y eventos de seguridad).",
      "opts": [
        "Solo sirve para escanear vulnerabilidades",
        "Consolida registros de múltiples fuentes, correlaciona eventos para detectar patrones sospechosos y genera alertas en tiempo real",
        "Reemplaza a los firewalls tradicionales",
        "Solo funciona en entornos cloud"
      ],
      "ans": 1,
      "exp": "SIEM centraliza logs de múltiples fuentes, correlaciona eventos para identificar patrones sospechosos, genera alertas en tiempo real y facilita auditorías forenses. Es ejemplo de monitoreo continuo recomendado por CIS Controls."
    },

    // 22. Segmentación de redes
    {
      "profe": true,
      "unit": "Unidad 2",
      "diff": "medium",
      "q": "¿Qué beneficio clave ofrece la segmentación de redes?",
      "opts": [
        "Aumenta la velocidad de la conexión a internet",
        "Limita el movimiento lateral de un atacante dentro de la red, conteniendo el alcance de una brecha",
        "Elimina la necesidad de usar firewalls",
        "Simplifica la gestión de contraseñas"
      ],
      "ans": 1,
      "exp": "La segmentación divide la red en zonas aisladas (VLANs, firewalls internos). Si un segmento es comprometido, el atacante no puede moverse lateralmente a otros, conteniendo el daño de una brecha."
    },

    // 23. Ciberseguridad contexto organizacional
    {
      "profe": true,
      "unit": "Unidad 2",
      "diff": "medium",
      "q": "¿Qué representa la ciberseguridad en el contexto organizacional?",
      "opts": [
        "Solo la instalación de antivirus en equipos de escritorio",
        "El conjunto de prácticas, tecnologías y procesos para proteger sistemas, redes y datos contra ataques digitales garantizando continuidad operativa",
        "Exclusivamente la protección del perímetro de red",
        "Un departamento técnico sin relación con la estrategia de negocio"
      ],
      "ans": 1,
      "exp": "La ciberseguridad organizacional integra tecnologías, procesos, políticas y prácticas para proteger activos digitales. Involucra cultura organizacional, capacitación, cumplimiento normativo, gestión de riesgos y continuidad del negocio."
    },

    // 24. MFA características
    {
      "profe": true,
      "unit": "Unidad 2",
      "diff": "medium",
      "q": "Características de la autenticación multifactor (MFA).",
      "opts": [
        "Solo requiere usuario y contraseña",
        "Combina dos o más factores independientes: algo que sabes (contraseña), algo que tienes (token/celular) o algo que eres (biometría)",
        "Solo se usa en accesos remotos",
        "Reemplaza completamente las contraseñas"
      ],
      "ans": 1,
      "exp": "MFA combina factores independientes: algo que sabes, algo que tienes, algo que eres. Reduce drásticamente acceso no autorizado incluso si la contraseña es robada. Recomendado para accesos remotos y sistemas críticos."
    },

    // 25. AES
    {
      "profe": true,
      "unit": "Unidad 1",
      "diff": "medium",
      "q": "Características de AES (Advanced Encryption Standard).",
      "opts": [
        "Cifrado asimétrico con clave pública y privada",
        "Cifrado simétrico con claves de 128, 192 o 256 bits; rápido, eficiente y resistente a ataques de fuerza bruta; estándar mundial para datos sensibles",
        "Cifrado exclusivo para comunicaciones HTTPS",
        "Solo cifra datos en reposo"
      ],
      "ans": 1,
      "exp": "AES es cifrado simétrico con claves 128/192/256 bits. Es rápido, eficiente, resistente a fuerza bruta. Estándar adoptado por gobiernos, bancos y servicios cloud para cifrar comunicaciones y datos almacenados."
    },

    // 26. Phishing
    {
      "profe": true,
      "unit": "Unidad 2",
      "diff": "easy",
      "q": "¿Qué es un ataque de phishing?",
      "opts": [
        "Ataque que explota vulnerabilidades de software directamente",
        "Intento de engañar a personas para que revelen información confidencial suplantando entidades de confianza mediante correos o sitios falsos",
        "Tipo de malware que cifra archivos",
        "Ataque de denegación de servicio distribuido"
      ],
      "ans": 1,
      "exp": "Phishing es ingeniería social: atacante suplanta entidad confiable para obtener credenciales o datos. Se ejecuta mediante correos falsos, smishing o vishing. Explota confianza humana, no vulnerabilidades técnicas."
    },

    // 27. Protocolos HTTP, HTTPS, FTP, SMTP
    {
      "profe": true,
      "unit": "Unidad 2",
      "diff": "medium",
      "q": "Características de los protocolos HTTP, HTTPS, FTP y SMTP.",
      "opts": [
        "Todos son protocolos de cifrado para datos sensibles",
        "HTTP (web sin cifrar, puerto 80), HTTPS (web con SSL/TLS, puerto 443), FTP (transferencia de archivos, puerto 21), SMTP (envío de correo, puerto 25/587)",
        "Son todos protocolos de capa de red (capa 3)",
        "FTP y SMTP solo funcionan en redes locales"
      ],
      "ans": 1,
      "exp": "HTTP: web sin cifrar (puerto 80). HTTPS: HTTP con TLS/SSL (puerto 443, seguro). FTP: transferencia archivos (puerto 21, inseguro). SMTP: envío correo (puerto 25/587). HTTPS, SFTP y STARTTLS son versiones seguras."
    },

    // 28. Acceso no autorizado
    {
      "profe": true,
      "unit": "Unidad 2",
      "diff": "easy",
      "q": "¿Qué acción es crucial para evitar el acceso no autorizado a un sistema?",
      "opts": [
        "Instalar el software más reciente sin configuración adicional",
        "Implementar control de acceso basado en roles y autenticación multifactor",
        "Aumentar el ancho de banda de la red",
        "Realizar backups semanales"
      ],
      "ans": 1,
      "exp": "La acción más crucial es MFA combinada con gestión de identidades basada en mínimo privilegio. Complementar con contraseñas fuertes, monitoreo con SIEM, segmentación de red y políticas de bloqueo tras intentos fallidos."
    },

    // 29. Análisis de riesgos (amenazas y vulnerabilidades)
    {
      "profe": true,
      "unit": "Unidad 2",
      "diff": "medium",
      "q": "¿Qué técnica de análisis de riesgos considera tanto amenazas como vulnerabilidades?",
      "opts": [
        "Análisis de brecha (Gap Analysis)",
        "Análisis FODA (SWOT)",
        "Análisis de amenazas y vulnerabilidades (Threat & Vulnerability Assessment)",
        "Análisis de impacto de negocio (BIA)"
      ],
      "ans": 2,
      "exp": "El análisis de amenazas y vulnerabilidades evalúa amenazas (eventos externos) y vulnerabilidades (debilidades internas). Se expresa como Riesgo = Probabilidad × Impacto y se visualiza en Matriz de Riesgos para priorizar."
    },

    // 30. ISO 27005
    {
      "profe": true,
      "unit": "Unidad 2",
      "diff": "hard",
      "q": "Características de la norma ISO 27005.",
      "opts": [
        "Idéntica a ISO 27001 pero más actualizada",
        "Estándar específico para gestión de riesgos de seguridad de la información, complementando a ISO 27001 con metodología detallada de evaluación y tratamiento de riesgos",
        "Regula exclusivamente el cifrado de datos sensibles",
        "Norma para auditorías externas de ciberseguridad"
      ],
      "ans": 1,
      "exp": "ISO 27005 complementa ISO 27001 con guía detallada para gestión de riesgos. Define proceso iterativo: contexto, identificación, análisis, evaluación y tratamiento. Opciones de tratamiento: mitigar, transferir, aceptar o evitar."
    },

    // 31. Ransomware
    {
      "profe": true,
      "unit": "Unidad 2",
      "diff": "medium",
      "q": "¿Qué es un ransomware y qué medida es más efectiva contra estos ataques?",
      "opts": [
        "Software espía; contrarrestado con antivirus",
        "Malware que cifra los archivos de la víctima y exige pago para recuperarlos; la medida más efectiva es mantener copias de seguridad aisladas y actualizadas",
        "Ataque de denegación de servicio; contrarrestado con firewalls",
        "Virus que roba contraseñas; contrarrestado con MFA"
      ],
      "ans": 1,
      "exp": "Ransomware cifra archivos y exige rescate. La medida más efectiva son copias de seguridad aisladas (offline) que permiten restaurar sin pagar. Complementar con actualizaciones, EDR, capacitación y segmentación."
    },

    // 32. Principio de mínimo privilegio
    {
      "profe": true,
      "unit": "Unidad 2",
      "diff": "medium",
      "q": "¿Qué principio básico de ciberseguridad prioriza la reducción del acceso a lo estrictamente necesario?",
      "opts": [
        "Principio de defensa en profundidad",
        "Principio de mínimo privilegio (Least Privilege)",
        "Principio de segregación de funciones",
        "Principio de no repudio"
      ],
      "ans": 1,
      "exp": "El principio de mínimo privilegio establece que cada usuario o proceso debe tener acceso solo a los recursos estrictamente necesarios para su función. Reduce superficie de ataque: si una cuenta es comprometida, el daño es limitado."
    },

    // ── PREGUNTAS ADICIONALES (profe:false) ────────────────

    // 01. Autenticación y acceso
    {
      "profe": false,
      "unit": "Unidad 2",
      "diff": "medium",
      "q": "Explique la implementación de políticas de contraseñas seguras y autenticación multifactor (MFA).",
      "opts": [
        "MFA solo se usa en redes externas",
        "Las políticas definen requisitos mínimos de complejidad; MFA añade segunda capa de verificación combinando algo que sabes, tienes o eres",
        "La MFA reemplaza completamente las contraseñas",
        "Solo se aplican a usuarios administradores"
      ],
      "ans": 1,
      "exp": "Las políticas de contraseñas definen longitud, complejidad y rotación. MFA exige al menos dos factores independientes. Juntas son una de las medidas de mayor impacto contra accesos no autorizados."
    },

    //02. Marcos de trabajo y estándares
    {
      "profe": false,
      "unit": "Marcos de Ciberseguridad (NIST)",
      "diff": "medium",
      "q": "¿Qué enfoque utiliza el estándar NIST CSF para gestionar riesgos?",
      "opts": [
        "Enfoque legal y punitivo con multas",
        "Marco de cinco funciones cíclicas: Identificar, Proteger, Detectar, Responder y Recuperar",
        "Sistema de certificación obligatorio",
        "Solo aplica a agencias del gobierno de EE.UU."
      ],
      "ans": 1,
      "exp": "El NIST CSF organiza la ciberseguridad en 5 funciones: Identificar (activos y riesgos), Proteger (salvaguardas), Detectar (eventos), Responder (contención) y Recuperar (restauración). Voluntario pero ampliamente adoptado."
    },

    // 03. Mantenimiento y vulnerabilidades
    {
      "profe": false,
      "unit": "Gestión de Vulnerabilidades",
      "diff": "easy",
      "q": "¿Qué asegura la gestión de parches en un sistema?",
      "opts": [
        "Que las contraseñas se cambien periódicamente",
        "Que las vulnerabilidades conocidas sean corregidas oportunamente mediante actualizaciones de software",
        "Que los firewalls estén correctamente configurados",
        "Que los empleados sean capacitados en seguridad"
      ],
      "ans": 1,
      "exp": "La gestión de parches es crítica: los atacantes explotan vulnerabilidades conocidas para las que ya existen parches. Mantener sistemas actualizados es una de las medidas de mayor impacto."
    },

    // Monitoreo y detección
    {
      "profe": false,
      "unit": "Monitoreo y SIEM",
      "diff": "medium",
      "q": "Características de la herramienta SIEM (Gestión de información y eventos de seguridad).",
      "opts": [
        "Solo sirve para escanear vulnerabilidades",
        "Consolida registros de múltiples fuentes, correlaciona eventos para detectar patrones sospechosos y genera alertas en tiempo real",
        "Reemplaza a los firewalls tradicionales",
        "Solo funciona en entornos cloud"
      ],
      "ans": 1,
      "exp": "Un SIEM centraliza logs de distintos sistemas, aplica correlación de eventos para identificar amenazas complejas y genera alertas. Esencial para el monitoreo continuo en organizaciones con infraestructura compleja."
    },

    // Segmentación de redes 

    {
      "profe": false,
      "unit": "Segmentación de Redes",
      "diff": "medium",
      "q": "¿Qué beneficio clave ofrece la segmentación de redes?",
      "opts": [
        "Aumenta la velocidad de la conexión a internet",
        "Limita el movimiento lateral de un atacante dentro de la red, conteniendo el alcance de una brecha",
        "Elimina la necesidad de usar firewalls",
        "Simplifica la gestión de contraseñas"
      ],
      "ans": 1,
      "exp": "La segmentación divide la red en zonas aisladas. Si un atacante compromete un segmento, no puede moverse libremente a otros, reduciendo el impacto de una brecha."
    },

    // Conceptos organizacionales
    {
      "profe": false,
      "unit": "Fundamentos de Ciberseguridad",
      "diff": "medium",
      "q": "¿Qué representa la ciberseguridad en el contexto organizacional?",
      "opts": [
        "Solo la instalación de antivirus en equipos de escritorio",
        "El conjunto de prácticas, tecnologías y procesos para proteger sistemas, redes y datos contra ataques digitales garantizando continuidad operativa",
        "Exclusivamente la protección del perímetro de red",
        "Un departamento técnico sin relación con la estrategia de negocio"
      ],
      "ans": 1,
      "exp": "La ciberseguridad es transversal: involucra tecnología, procesos y personas. Su objetivo es proteger activos de información para garantizar la continuidad del negocio y el cumplimiento regulatorio."
    },

    // Identidad y autenticación
    {
      "profe": false,
      "unit": "Control de Acceso y MFA",
      "diff": "medium",
      "q": "Características de la autenticación multifactor (MFA).",
      "opts": [
        "Solo requiere usuario y contraseña",
        "Combina dos o más factores independientes: algo que sabes (contraseña), algo que tienes (token/celular) o algo que eres (biometría)",
        "Solo se usa en accesos remotos",
        "Reemplaza completamente las contraseñas"
      ],
      "ans": 1,
      "exp": "MFA aumenta la seguridad al requerir múltiples evidencias de identidad. Aunque una contraseña sea robada, sin el segundo factor el atacante no puede acceder. Es una de las medidas de mayor impacto."
    },

    // Criptografía
    {
      "profe": false,
      "unit": "Criptografía Aplicada",
      "diff": "medium",
      "q": "Características de AES (Advanced Encryption Standard).",
      "opts": [
        "Cifrado asimétrico con clave pública y privada",
        "Cifrado simétrico con claves de 128, 192 o 256 bits; rápido, eficiente y resistente a ataques de fuerza bruta; estándar mundial para datos sensibles",
        "Cifrado exclusivo para comunicaciones HTTPS",
        "Solo cifra datos en reposo"
      ],
      "ans": 1,
      "exp": "AES es el estándar de cifrado simétrico más utilizado mundialmente. Misma clave para cifrar y descifrar, tamaños de 128/192/256 bits. Eficiente en hardware moderno y resistente a ataques conocidos."
    },

    // Amenazas comunes
    {
      "profe": false,
      "unit": "Amenazas y Phishing",
      "diff": "easy",
      "q": "¿Qué es un ataque de phishing?",
      "opts": [
        "Ataque que explota vulnerabilidades de software directamente",
        "Intento de engañar a personas para que revelen información confidencial suplantando entidades de confianza mediante correos o sitios falsos",
        "Tipo de malware que cifra archivos",
        "Ataque de denegación de servicio distribuido"
      ],
      "ans": 1,
      "exp": "El phishing usa ingeniería social y suplantación de identidad para obtener credenciales, datos financieros u otra información sensible. Es el vector de ataque más común y efectivo actualmente."
    },

    // Protocolos de comunicación
    {
      "profe": false,
      "unit": "Protocolos y Servicios de Red",
      "diff": "medium",
      "q": "Características de los protocolos HTTP, HTTPS, FTP y SMTP.",
      "opts": [
        "Todos son protocolos de cifrado para datos sensibles",
        "HTTP (web sin cifrar, puerto 80), HTTPS (web con SSL/TLS, puerto 443), FTP (transferencia de archivos, puerto 21), SMTP (envío de correo, puerto 25/587)",
        "Son todos protocolos de capa de red (capa 3)",
        "FTP y SMTP solo funcionan en redes locales"
      ],
      "ans": 1,
      "exp": "HTTP: web sin cifrar (puerto 80). HTTPS: HTTP con SSL/TLS (puerto 443, seguro). FTP: transferencia de archivos (puerto 21, no cifrado por defecto). SMTP: envío de correo electrónico (puerto 25/587)."
    },

    // Medidas de prevención
    {
      "profe": false,
      "unit": "Control de Acceso y MFA",
      "diff": "easy",
      "q": "¿Qué acción es crucial para evitar el acceso no autorizado a un sistema?",
      "opts": [
        "Instalar el software más reciente sin configuración adicional",
        "Implementar control de acceso basado en roles y autenticación multifactor",
        "Aumentar el ancho de banda de la red",
        "Realizar backups semanales"
      ],
      "ans": 1,
      "exp": "El control de acceso con principio de mínimo privilegio y MFA son las medidas más efectivas contra accesos no autorizados. Solo quien necesita acceso debe tenerlo, con múltiples factores de verificación."
    },

    // Gestión de riesgos
    {
      "profe": false,
      "unit": "Gestión de Riesgos",
      "diff": "medium",
      "q": "¿Qué técnica de análisis de riesgos considera tanto amenazas como vulnerabilidades?",
      "opts": [
        "Análisis de brecha (Gap Analysis)",
        "Análisis FODA (SWOT)",
        "Análisis de amenazas y vulnerabilidades (Threat & Vulnerability Assessment)",
        "Análisis de impacto de negocio (BIA)"
      ],
      "ans": 2,
      "exp": "El análisis de amenazas y vulnerabilidades evalúa qué actores maliciosos existen (amenazas) y qué debilidades explotables tiene el sistema (vulnerabilidades), para calcular el riesgo real de cada combinación."
    },

    // Estándares ISO
    {
      "profe": false,
      "unit": "Normativas ISO (27005)",
      "diff": "hard",
      "q": "Características de la norma ISO 27005.",
      "opts": [
        "Idéntica a ISO 27001 pero más actualizada",
        "Estándar específico para gestión de riesgos de seguridad de la información, complementando a ISO 27001 con metodología detallada de evaluación y tratamiento de riesgos",
        "Regula exclusivamente el cifrado de datos sensibles",
        "Norma para auditorías externas de ciberseguridad"
      ],
      "ans": 1,
      "exp": "ISO 27005 provee la metodología detallada de gestión de riesgos que complementa a ISO 27001. Define cómo identificar, analizar, evaluar y tratar riesgos de seguridad de la información de manera estructurada."
    },

    // Malware y recuperación
    {
      "profe": false,
      "unit": "Malware y Ransomware",
      "diff": "medium",
      "q": "¿Qué es un ransomware y qué medida es más efectiva contra estos ataques?",
      "opts": [
        "Software espía; contrarrestado con antivirus",
        "Malware que cifra los archivos de la víctima y exige pago para recuperarlos; la medida más efectiva es mantener copias de seguridad aisladas y actualizadas",
        "Ataque de denegación de servicio; contrarrestado con firewalls",
        "Virus que roba contraseñas; contrarrestado con MFA"
      ],
      "ans": 1,
      "exp": "El ransomware cifra archivos y exige rescate. Las copias de seguridad aisladas (offline o inmutables) permiten restaurar sin pagar. Complementar con parches, MFA y segmentación reduce la probabilidad de infección."
    },

    // Principios de seguridad
    {
      "profe": false,
      "unit": "Fundamentos de Ciberseguridad",
      "diff": "medium",
      "q": "¿Qué principio básico de ciberseguridad prioriza la reducción del acceso a lo estrictamente necesario?",
      "opts": [
        "Principio de defensa en profundidad",
        "Principio de mínimo privilegio (Least Privilege)",
        "Principio de segregación de funciones",
        "Principio de no repudio"
      ],
      "ans": 1,
      "exp": "El principio de mínimo privilegio dicta que cada usuario, proceso o sistema debe tener solo los permisos necesarios para cumplir su función. Reduce el impacto si una cuenta es comprometida."
    },

    // Legislación chilena
    {
      "profe": false,
      "unit": "Legislación y Ciberdelitos",
      "diff": "hard",
      "q": "¿Cuáles son las diferencias principales entre la Ley 19.223 y la Ley 21.459 de Chile?",
      "opts": [
        "Son idénticas, solo cambia el número",
        "Ley 19.223 (1993): primeros delitos informáticos en Chile; Ley 21.459 (2022): moderniza la legislación alineándola con el Convenio de Budapest, introduce nuevos delitos y aumenta penas",
        "La 21.459 derogó la 19.223 sin reemplazarla",
        "19.223 regula datos personales y 21.459 regula delitos informáticos"
      ],
      "ans": 1,
      "exp": "Ley 19.223 (1993) fue la primera ley de delitos informáticos en Chile. Ley 21.459 (2022) la moderniza, se alinea con el Convenio de Budapest e introduce delitos como distribución de malware con penas más severas."
    },

    // Tratados internacionales
    {
      "profe": false,
      "unit": "Legislación y Ciberdelitos",
      "diff": "medium",
      "q": "¿Qué establece el Convenio de Budapest sobre Ciberdelincuencia?",
      "opts": [
        "Regula el comercio electrónico entre países europeos",
        "Armoniza leyes sobre delitos informáticos y facilita la cooperación internacional en investigaciones de ciberdelincuencia transnacional",
        "Establece estándares de cifrado obligatorios para comunicaciones gubernamentales",
        "Define estándares de privacidad para redes sociales"
      ],
      "ans": 1,
      "exp": "El Convenio de Budapest es el primer tratado internacional sobre cibercriminalidad. Establece estándares comunes para tipificar delitos y facilita el intercambio de información entre países en investigaciones."
    },

    // Privacidad de datos
    {
      "profe": false,
      "unit": "Privacidad y Datos Personales",
      "diff": "medium",
      "q": "¿Cuáles son los principios clave de la Ley 19.628 de protección de datos personales en Chile?",
      "opts": [
        "Solo regula datos médicos y financieros",
        "Establece principios de consentimiento, finalidad y seguridad en el tratamiento de datos personales",
        "Aplica solo a empresas con más de 100 empleados",
        "Define exclusivamente sanciones penales para robo de datos"
      ],
      "ans": 1,
      "exp": "La Ley 19.628 establece que los datos personales solo pueden tratarse con consentimiento del titular, para el propósito declarado y con medidas de seguridad adecuadas. Está en proceso de modernización hacia estándares GDPR."
    },

    // Seguridad financiera
    {
      "profe": false,
      "unit": "Estándares de la Industria (PCI DSS)",
      "diff": "medium",
      "q": "¿Cuáles son los requisitos clave del estándar PCI DSS?",
      "opts": [
        "Solo requiere cambiar contraseñas regularmente",
        "Exige cifrado de datos de tarjetas, monitoreo continuo de redes de pago y controles de acceso estrictos para proteger información de tarjetas de pago",
        "Es voluntario y sin consecuencias por incumplimiento",
        "Solo aplica a bancos emisores de tarjetas"
      ],
      "ans": 1,
      "exp": "PCI DSS es obligatorio para organizaciones que procesen pagos con tarjeta. Requiere: cifrado en tránsito y almacenamiento, control de acceso, monitoreo de redes y pruebas regulares de seguridad."
    },

    // NIST y activos
    {
      "profe": false,
      "unit": "Marcos de Ciberseguridad (NIST)",
      "diff": "easy",
      "q": "¿Qué función del NIST CSF incluye la identificación de activos críticos?",
      "opts": [
        "Proteger", 
        "Identificar", 
        "Responder", 
        "Recuperar"
    ],
      "ans": 1,
      "exp": "La función 'Identificar' del NIST CSF se enfoca en comprender el contexto organizacional, los activos de información y los riesgos. Es el punto de partida de cualquier programa de ciberseguridad."
    },

    // Evaluación de severidad
    {
      "profe": false,
      "unit": "Severidad de Vulnerabilidades (CVSS)",
      "diff": "easy",
      "q": "¿Qué representa un puntaje CVSS alto en una vulnerabilidad?",
      "opts": [
        "Bajo riesgo de explotación, puede ignorarse", 
        "Mayor criticidad y urgencia para resolverla inmediatamente", 
        "Vulnerabilidad fácilmente mitigable", 
        "Riesgo solo en entornos específicos"
    ],
      "ans": 1,
      "exp": "CVSS puntúa de 0 a 10. Un 9.0-10.0 es Crítico, 7.0-8.9 es Alto. Cuanto mayor el puntaje, mayor la severidad y urgencia de aplicar parches o medidas de mitigación."
    },

    // Análisis matricial
    {
      "profe": false,
      "unit": "Gestión de Riesgos",
      "diff": "medium",
      "q": "¿Cuál es la utilidad principal de una matriz de riesgos?",
      "opts": [
        "Automatizar el cifrado de datos", 
        "Priorizar amenazas en función de su impacto y probabilidad para focalizar recursos de mitigación", 
        "Identificar solo vulnerabilidades de software", 
        "Generar reportes automáticos de auditoría"
    ],
      "ans": 1,
      "exp": "La matriz de riesgos visualiza y prioriza amenazas combinando probabilidad e impacto. Permite enfocarse en riesgos críticos y altos primero, optimizando los recursos de seguridad disponibles."
    },

    // Parámetros CVSS
    {
      "profe": false,
      "unit": "Severidad de Vulnerabilidades (CVSS)",
      "diff": "medium",
      "q": "¿Qué componente del CVSS evalúa el impacto según el entorno específico de la organización?",
      "opts": [
        "Base Score", 
        "Temporal Score", 
        "Environmental Score", 
        "Adaptative Score"
    ],
      "ans": 2,
      "exp": "El Environmental Score ajusta la severidad de una vulnerabilidad según el contexto organizacional: si el sistema afectado es crítico, el puntaje puede ser mayor que el Base Score genérico."
    },

    // Continuidad de negocio
    {
      "profe": false,
      "unit": "Continuidad y Recuperación (DRP)",
      "diff": "medium",
      "q": "¿Cuál es una medida clave en un plan de Disaster Recovery (DR)?",
      "opts": [
        "Actualizaciones semestrales de software", 
        "Implementar sistemas redundantes y copias de seguridad para garantizar continuidad operativa", 
        "Incrementar únicamente la capacitación del personal", 
        "Reducir el tiempo de conexión a internet"
      ],
      "ans": 1,
      "exp": "Un plan de DR efectivo incluye: sistemas redundantes (failover), copias de seguridad actualizadas, procedimientos documentados y pruebas periódicas para verificar que el plan funciona."
    },

    // Criticidad de eventos
    {
      "profe": false,
      "unit": "Gestión de Riesgos",
      "diff": "medium",
      "q": "¿Qué indica un riesgo clasificado como 'crítico' en una matriz de riesgos?",
      "opts": [
        "Tiene bajo impacto pero alta probabilidad", 
        "Alta probabilidad de ocurrencia y alto impacto potencial; requiere atención y acción inmediatas", 
        "Es fácilmente mitigable con controles básicos", 
        "Solo afecta procesos secundarios de la organización"
      ],
      "ans": 1,
      "exp": "Un riesgo crítico combina alta probabilidad + alto impacto. En la matriz aparece en el cuadrante superior derecho (valores 12-16). Requiere acción inmediata y planes de contingencia robustos."
    },

    // Cálculo de riesgo
    {
      "profe": false,
      "unit": "Gestión de Riesgos",
      "diff": "medium",
      "q": "¿Cuál es la fórmula básica para calcular el nivel de riesgo?",
      "opts": [
        "Riesgo = Amenaza ÷ Vulnerabilidad", 
        "Riesgo = Probabilidad × Impacto", 
        "Riesgo = Impacto + Mitigación", 
        "Riesgo = Vulnerabilidad × Severidad"
      ],
      "ans": 1,
      "exp": "Riesgo = Probabilidad × Impacto permite comparar y priorizar riesgos. Un evento de alta probabilidad y alto impacto (ej: ransomware en servidor crítico) recibe mayor prioridad."
    },

    // Tratamiento de riesgos
    {
      "profe": false,
      "unit": "Gestión de Riesgos",
      "diff": "medium",
      "q": "¿Cuáles son las cuatro estrategias para tratar un riesgo identificado?",
      "opts": [
        "Ignorar, reportar, escalar, documentar", 
        "Mitigar, transferir, aceptar y evitar/eliminar", 
        "Solo mitigar o aceptar", 
        "Cifrar, respaldar, monitorear, parchear"
      ],
      "ans": 1,
      "exp": "Las cuatro estrategias son: MITIGAR (reducir probabilidad/impacto), TRANSFERIR (seguros, outsourcing), ACEPTAR (riesgo bajo o costo mayor al impacto) y EVITAR (eliminar la actividad que genera el riesgo)."
    },

    // Pentesting web
    {
      "profe": false,
      "unit": "Pentesting y Herramientas",
      "diff": "medium",
      "q": "¿Qué herramientas se especializan en evaluación de seguridad de aplicaciones web?",
      "opts": [
        "Nessus y OpenVAS únicamente", 
        "Burp Suite, OWASP ZAP y Nikto, especializadas en detectar vulnerabilidades web como inyección SQL, XSS y configuraciones inseguras", 
        "Solo Metasploit Framework", 
        "Wireshark y TCPDump"
      ],
      "ans": 1,
      "exp": "Para aplicaciones web: Burp Suite (profesional, intercepta tráfico HTTP), OWASP ZAP (open source, amigable), Nikto (configuraciones inseguras en servidores). Detectan vulnerabilidades OWASP Top 10."
    },

    // Pentesting general
    {
      "profe": false,
      "unit": "Pentesting y Herramientas",
      "diff": "medium",
      "q": "¿Qué es Metasploit y para qué se utiliza?",
      "opts": [
        "Sistema de monitoreo de redes en tiempo real", 
        "Framework de pentesting que permite simular ataques controlados para identificar vulnerabilidades mediante un amplio catálogo de exploits", 
        "Escáner pasivo de vulnerabilidades sin interacción activa", 
        "Sistema de gestión de parches automatizado"
      ],
      "ans": 1,
      "exp": "Metasploit es el framework de pentesting más utilizado. Permite simular ataques reales usando exploits conocidos para verificar si las vulnerabilidades son explotables, ayudando a priorizar parches."
    },

    // CVSS Base
    {
      "profe": false,
      "unit": "Severidad de Vulnerabilidades (CVSS)",
      "diff": "easy",
      "q": "¿Qué aspecto evalúa el Base Score de CVSS?",
      "opts": [
        "Factores ambientales y organizacionales", 
        "Las características intrínsecas de la vulnerabilidad independientes del contexto y del tiempo", 
        "El tiempo necesario para que un parche esté disponible", 
        "El nivel de criticidad después de aplicar mitigaciones"
      ],
      "ans": 1,
      "exp": "El Base Score evalúa características permanentes: vector de ataque, complejidad, privilegios requeridos, impacto en CIA. No cambia con el tiempo ni con el contexto organizacional."
    },

    // Fases de auditoría
    {
      "profe": false,
      "unit": "Evaluación de Vulnerabilidades",
      "diff": "medium",
      "q": "¿Cuáles son las etapas de una evaluación de vulnerabilidades?",
      "opts": [
        "Solo escaneo y reporte", 
        "Planificación, descubrimiento, análisis, evaluación y reporte", 
        "Instalación de herramientas, escaneo y parches", 
        "Entrevistas, pruebas y certificación"
      ],
      "ans": 1,
      "exp": "Las 5 etapas son: Planificación (alcance), Descubrimiento (activos), Análisis (escanear vulnerabilidades), Evaluación (calificar severidad y riesgo) y Reporte (documentar y presentar resultados)."
    },

    // Detección de intrusos
    {
      "profe": false,
      "unit": "Seguridad de Red",
      "diff": "easy",
      "q": "¿Qué herramienta ayuda a identificar actividades sospechosas en una red?",
      "opts": [
        "Antivirus tradicional", 
        "IDS (Intrusion Detection System)", 
        "Cifrado AES", 
        "Certificado SSL"
      ],
      "ans": 1,
      "exp": "Un IDS monitorea el tráfico de red buscando patrones sospechosos o firmas de ataque conocidas. A diferencia del IPS, solo detecta y alerta, no bloquea automáticamente."
    },

    // Gobernanza en Chile
    {
      "profe": false,
      "unit": "Legislación y Ciberdelitos",
      "diff": "medium",
      "q": "¿Qué establece la nueva Ley Marco sobre Ciberseguridad e Infraestructura Crítica de Chile (2024)?",
      "opts": [
        "Solo actualiza las penas de la Ley 19.223", 
        "Crea la Agencia Nacional de Ciberseguridad (ANCI) y establece obligaciones de ciberseguridad para operadores de servicios esenciales", 
        "Reemplaza completamente todas las leyes informáticas anteriores", 
        "Solo aplica a entidades del gobierno central"
      ],
      "ans": 1,
      "exp": "La Ley Marco de Ciberseguridad (2024) crea la ANCI como organismo regulador y establece obligaciones para operadores de infraestructuras críticas (energía, agua, telecomunicaciones, banca)."
    },

    // Caso de pilar CIA y fraude
    {
      "profe": false,
      "unit": "Casos Prácticos y Análisis",
      "diff": "hard",
      "case": "Una empresa de retail detecta que un empleado accedió a información de tarjetas de crédito sin autorización, modificó registros de compras y el sistema estuvo caído 4 horas.",
      "q": "¿Cuáles pilares de la triada CIA se vieron comprometidos y qué controles preventivos habrían mitigado el incidente?",
      "opts": [
        "Solo la disponibilidad; bastaría con un mejor antivirus", 
        "Los tres pilares: confidencialidad (acceso no autorizado), integridad (modificación de datos) y disponibilidad (sistema caído); controles: mínimo privilegio, logs de auditoría, DLP y MFA", 
        "Solo la integridad y disponibilidad", 
        "No hay controles preventivos aplicables a amenazas internas"
      ],
      "ans": 1,
      "exp": "Caso de amenaza interna (insider threat). Vulnera CONFIDENCIALIDAD (acceso no autorizado a tarjetas), INTEGRIDAD (modificación de registros) y DISPONIBILIDAD (4 horas de caída). Controles: mínimo privilegio, logs de auditoría de usuarios privilegiados, DLP y MFA."
    },

    // Caso Banco de Chile
    {
      "profe": false,
      "unit": "Casos Prácticos y Análisis",
      "diff": "hard",
      "case": "En 2018, el Banco de Chile sufrió un ataque donde los cibercriminales distrajeron al equipo TI con un virus en sucursales mientras realizaban transferencias SWIFT fraudulentas por USD 10 millones.",
      "q": "¿Qué normativas aplican y qué controles habrían mitigado el ataque?",
      "opts": [
        "Solo aplica la Ley 19.223; bastaría con un mejor antivirus", 
        "Aplican Ley 19.223/21.459 y PCI DSS; controles clave: SIEM en tiempo real, segmentación de red, MFA para transacciones SWIFT y protocolos de verificación adicional para transferencias internacionales de alto valor", 
        "Solo aplica PCI DSS; bastaría con cifrado de datos", 
        "No hay normativas chilenas aplicables"
      ],
      "ans": 1,
      "exp": "Viola Ley 19.223 (acceso no autorizado y fraude) y PCI DSS (institución financiera). Controles críticos faltantes: SIEM para detectar anomalías en tiempo real, MFA en sistema SWIFT, segregación de redes entre sucursales y sistema SWIFT, y verificación adicional en transferencias de alto valor."
    },

    // 33. Caso de aplicación de Triada
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "q": "Una empresa implementa un sistema de cifrado de extremo a extremo para sus comunicaciones internas, pero no cuenta con copias de seguridad ni planes de contingencia. ¿Qué pilar de la Triada de Seguridad está siendo descuidado?",
      "opts": [
        "Confidencialidad, porque el cifrado protege los datos en tránsito", 
        "Integridad, porque falta verificar que los datos no sean alterados", 
        "Disponibilidad, porque sin backups no hay garantía de acceso continuo", 
        "Autenticidad, porque no se verifica la identidad de los usuarios"
      ],
      "ans": 2,
      "exp": "El cifrado protege la confidencialidad, pero la falta de copias de seguridad y planes de contingencia compromete gravemente la disponibilidad. Si ocurre un fallo del sistema, ataque ransomware o desastre natural, los datos podrían perderse o quedar inaccesibles. La disponibilidad requiere backups, redundancia y planes de recuperación para garantizar que la información esté accesible cuando los usuarios autorizados la necesiten."
    },

    // 34. Evaluación de controles
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "q": "Una organización invirtió en un firewall de última generación, pero los empleados siguen cayendo en ataques de phishing. ¿Qué principio de seguridad se está aplicando incorrectamente?",
      "opts": [
        "La defensa en profundidad requiere múltiples capas, no una sola solución", 
        "El firewall es suficiente si está correctamente configurado", 
        "El phishing no es una amenaza relevante para la seguridad", 
        "La tecnología reemplaza completamente la necesidad de capacitación"
      ],
      "ans": 0,
      "exp": "La defensa en profundidad establece que ninguna capa de seguridad es suficiente por sí sola. Un firewall protege el perímetro, pero no previene ataques de ingeniería social como el phishing. Se requiere una combinación de controles técnicos (filtros antiphishing, MFA) y controles administrativos (capacitación continua, simulacros, políticas de seguridad). Confiar en una sola capa es una vulnerabilidad crítica."
    },

    // 35. Análisis de vulnerabilidad crítica
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "case": "Un escáner de vulnerabilidades reporta una falla con CVSS 9.8 en un servidor público. El equipo de TI no puede aplicar el parche por 30 días debido a compatibilidad con una aplicación heredada.",
      "q": "¿Cuál es la estrategia más adecuada para gestionar este riesgo durante el período de espera?",
      "opts": [
        "Aplicar el parche inmediatamente ignorando problemas de compatibilidad", 
        "Ignorar la vulnerabilidad hasta que se pueda aplicar el parche", 
        "Implementar controles compensatorios: firewall, segmentación, monitoreo intensivo", 
        "Eliminar el servidor de la red hasta aplicar el parche"
      ],
      "ans": 2,
      "exp": "Cuando no se puede aplicar un parche de inmediato, se deben implementar controles compensatorios: restringir acceso al servidor mediante reglas de firewall, segmentar la red para aislarlo del resto de sistemas críticos, aumentar el monitoreo con SIEM/IDS para detectar intentos de explotación, y priorizar la aplicación del parche lo antes posible. Esto reduce significativamente el riesgo mientras se espera la solución definitiva."
    },

    // 36. Incidente de ransomware
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "case": "Un hospital sufre un ataque de ransomware. Los backups estaban almacenados en el mismo servidor que los datos originales y también fueron cifrados.",
      "q": "¿Qué falla fundamental en la estrategia de seguridad permitió que el ataque fuera catastrófico?",
      "opts": [
        "Falta de antivirus actualizado en los servidores", 
        "Backups sin aislamiento, violando la regla 3-2-1", 
        "Contraseñas débiles en cuentas administrativas", 
        "Falta de firewall en el perímetro de la red"
      ],
      "ans": 1,
      "exp": "La falla crítica fue almacenar backups en el mismo sistema que los datos originales, sin aislamiento. La regla 3-2-1 establece: 3 copias de los datos, en 2 tipos de soporte diferentes, con 1 copia fuera del sitio (offline o geográficamente separada). Esto garantiza que incluso si el sistema principal es comprometido, los backups permanecen intactos y disponibles para recuperación. Los backups aislados son la defensa más efectiva contra ransomware."
    },

    // 37. GDPR y derecho al olvido
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "case": "Un ex cliente solicita que todos sus datos personales sean eliminados de los sistemas de la empresa. La empresa tiene obligación legal de conservar registros de facturación por 5 años.",
      "q": "¿Cómo debe proceder la empresa según el GDPR y buenas prácticas?",
      "opts": [
        "Eliminar todos los datos inmediatamente para cumplir la solicitud", 
        "Mantener todos los datos sin restricción hasta la solicitud formal", 
        "Eliminar datos no sujetos a obligación legal y conservar solo los requeridos", 
        "Ignorar la solicitud por tratarse de un ex cliente sin vínculo actual"
      ],
      "ans": 2,
      "exp": "El derecho al olvido (Artículo 17 del GDPR) permite solicitar eliminación de datos, pero existen excepciones por obligaciones legales. La empresa debe: 1) Identificar qué datos están sujetos a retención legal (facturación, registros financieros), 2) Eliminar todos los demás datos personales no obligatorios, 3) Conservar solo los datos requeridos por ley, 4) Informar al titular sobre el alcance de la eliminación realizada. Esto cumple tanto con el GDPR como con obligaciones tributarias."
    },

    // 38. Evaluación de riesgos en cloud
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "case": "Una startup migra todos sus sistemas a la nube, asumiendo que el proveedor se encarga de toda la seguridad. No implementan controles adicionales ni configuraciones específicas.",
      "q": "¿Qué modelo de responsabilidad compartida están malinterpretando?",
      "opts": [
        "El proveedor de nube es responsable del 100% de la seguridad", 
        "La startup es responsable solo de las aplicaciones, no de los datos", 
        "El proveedor asegura la infraestructura; el cliente es responsable de datos, accesos y configuraciones", 
        "No hay responsabilidad compartida en entornos cloud"
      ],
      "ans": 2,
      "exp": "El modelo de responsabilidad compartida establece que el proveedor de nube (AWS, Azure, Google) es responsable de la seguridad DE la nube (infraestructura física, hipervisores, redes). El cliente es responsable de la seguridad EN la nube: configuración de accesos, cifrado de datos, gestión de identidades, parches en sistemas propios, políticas de seguridad, y cumplimiento normativo. Asumir que el proveedor cubre todo es un error crítico que expone los datos a riesgos."
    },

    // 39. Análisis de brecha de datos
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "case": "Una filtración de datos expuso información de 100,000 clientes. La investigación reveló que un empleado con privilegios de administrador descargó la base de datos completa sin justificación y nadie lo detectó.",
      "q": "¿Qué controles de seguridad fallaron y deberían implementarse como prioridad?",
      "opts": [
        "Solo antivirus; instalar solución EDR centralizada", 
        "Solo firewall; configurar reglas más estrictas", 
        "Mínimo privilegio, DLP, logs de auditoría y alertas de comportamiento anómalo", 
        "Solo backups; aumentar frecuencia de copias"
    ],
      "ans": 2,
      "exp": "La brecha revela múltiples fallas: 1) Violación del principio de mínimo privilegio (el empleado no debería tener acceso a toda la BD), 2) Falta de DLP (Data Loss Prevention) para detectar transferencias sospechosas, 3) Ausencia de logs de auditoría o alertas ante accesos anómalos a datos sensibles. Las soluciones deben incluir: revisión de privilegios, implementación de DLP, configuración de alertas para accesos a grandes volúmenes de datos, y segmentación de datos sensibles."
    },

    // 40. Respuesta a incidente de phishing
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "case": "Un empleado recibe un correo que parece del departamento de TI solicitando sus credenciales. Sin hacer clic en el enlace, reenvía el correo a sus compañeros preguntando si es legítimo.",
      "q": "¿Cuál debería ser la respuesta correcta del equipo de seguridad y qué aprendizaje se debe reforzar?",
      "opts": [
        "Ignorar el incidente porque no hubo clic en el enlace", 
        "Bloquear al empleado por propagar correos no solicitados", 
        "Investigar como intento de phishing, bloquear remitente, y reforzar capacitación sobre reporte seguro", 
        "Borrar el correo del sistema sin investigación adicional"
      ],
      "ans": 2,
      "exp": "Aunque no hubo clic, es claramente un intento de phishing. El equipo debe: 1) Investigar el origen del correo y verificar si otros empleados hicieron clic, 2) Bloquear el remitente/dominio en el gateway de correo, 3) Reconocer que el empleado hizo lo correcto al reportar (no al reenviar), 4) Reforzar la capacitación: los intentos de phishing deben reportarse al equipo de seguridad, no reenviarse a compañeros, para evitar propagación accidental y permitir respuesta coordinada."
    },

    // 41. Gestión de parches en entornos críticos
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "case": "Una vulnerabilidad crítica (CVSS 9.8) afecta a servidores industriales de control (SCADA) que no pueden reiniciarse durante el proceso productivo continuo de 24/7.",
      "q": "¿Cuál es la estrategia más adecuada para gestionar esta vulnerabilidad sin interrumpir la operación?",
      "opts": [
        "Aplicar el parche inmediatamente durante la operación", 
        "Ignorar la vulnerabilidad por ser un sistema aislado", 
        "Implementar controles compensatorios: aislamiento de red, monitoreo intensivo, y aplicar parche en la próxima ventana de mantenimiento programada", 
        "Eliminar los servidores de la red hasta aplicar el parche"
      ],
      "ans": 2,
      "exp": "En entornos críticos donde no se puede interrumpir la operación para aplicar parches inmediatos, se debe implementar una estrategia de compensación: 1) Aislar los sistemas en segmentos de red con acceso restringido, 2) Aumentar monitoreo con IDS/IPS específico para detectar intentos de explotación, 3) Documentar y planificar la aplicación del parche en la próxima ventana de mantenimiento disponible, 4) Establecer controles de acceso adicionales (MFA, VPN con autenticación reforzada). Esto equilibra seguridad y continuidad operativa."
    },

    // 42. Implementación de ISO 27001
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "case": "Una empresa mediana busca certificarse en ISO 27001 por primera vez. Actualmente tiene controles básicos no documentados, sin gestión formal de riesgos ni políticas definidas.",
      "q": "¿Cuál es la secuencia lógica de pasos para iniciar la implementación del SGSI?",
      "opts": [
        "Comprar herramientas de seguridad avanzadas y contratar personal", 
        "Implementar todos los controles de ISO 27002 inmediatamente", 
        "Definir alcance, inventario de activos, análisis de riesgos, Declaración de Aplicabilidad", 
        "Solicitar la certificación directamente y esperar auditoría"
    ],
      "ans": 2,
      "exp": "La implementación de ISO 27001 sigue una secuencia lógica: 1) Definir el alcance del SGSI (qué áreas, procesos, ubicaciones incluye), 2) Realizar inventario y clasificación de activos de información, 3) Ejecutar análisis de riesgos según ISO 27005 (identificar amenazas, vulnerabilidades, probabilidad e impacto), 4) Desarrollar la Declaración de Aplicabilidad (SoA) definiendo qué controles de ISO 27002 se implementan y por qué, 5) Implementar controles priorizados según riesgos, 6) Establecer políticas y procedimientos documentados, 7) Realizar auditorías internas antes de la certificación externa. Saltarse estos pasos lleva a una implementación desordenada que probablemente no pasará la auditoría."
    },

    // 43. Ética y privacidad por diseño
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "q": "Una aplicación móvil recopila datos de ubicación de los usuarios incluso cuando la app no está en uso, sin informarlo claramente ni ofrecer opción de desactivación. ¿Qué principios éticos y legales está violando?",
      "opts": [
        "Ninguno, porque la app es gratuita", 
        "Principio de transparencia, consentimiento explícito y minimización de datos", 
        "Solo viola normas de rendimiento técnico", 
        "Es aceptable porque mejora la experiencia de usuario"],
      "ans": 1,
      "exp": "Esta práctica viola múltiples principios: 1) Transparencia: no informa claramente qué datos recopila y para qué fin, 2) Consentimiento explícito: no obtiene autorización informada del usuario, 3) Minimización de datos: recopila más datos de los necesarios para la funcionalidad, 4) Privacidad por diseño: no incorpora protección de datos desde el diseño inicial. Esto contraviene tanto el GDPR (Artículos 5, 6, 7, 13) como principios éticos fundamentales de respeto a la privacidad y autonomía del usuario."
    },

    // 44. Análisis de costo-beneficio en seguridad
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "case": "Una empresa debe decidir entre implementar MFA para todos los empleados (costo alto) o solo para administradores (costo bajo). Los ataques de credential stuffing han aumentado en el sector.",
      "q": "¿Qué criterios debe considerar la empresa para tomar una decisión basada en riesgos?",
      "opts": [
        "Solo el costo de implementación",
        "Solo la experiencia del usuario final",
        "Evaluar probabilidad de ataque, impacto potencial, costo del control y análisis de riesgo residual",
        "Seguir la decisión de la competencia sin análisis propio"
      ],
      "ans": 2,
      "exp": "La decisión debe basarse en un análisis de riesgo: 1) Probabilidad: ¿qué tan probable es un ataque de credential stuffing considerando el contexto del sector? 2) Impacto: ¿cuál sería el costo de una brecha (multas, reputación, pérdida de datos)? 3) Costo del control: implementación y mantenimiento de MFA, 4) Riesgo residual: ¿qué nivel de riesgo queda después de implementar el control? 5) Análisis de alternativas: MFA para todos vs solo administradores. La decisión óptima equilibra protección y recursos, priorizando cuentas de mayor riesgo pero considerando que una brecha en cualquier cuenta puede ser punto de entrada para atacantes."
    },

    // 45. Plan de respuesta a incidentes
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "case": "Un equipo de seguridad detecta actividad sospechosa en un servidor crítico durante la madrugada. El único personal disponible es el guardia de seguridad física que no tiene conocimientos técnicos.",
      "q": "¿Qué falla en la preparación para incidentes revela esta situación?",
      "opts": [
        "Falta de cámaras de seguridad en el centro de datos",
        "Ausencia de un plan de respuesta a incidentes con roles definidos y personal de guardia",
        "El servidor crítico no debería estar en la red",
        "La actividad sospechosa debería ignorarse hasta el horario laboral"
      ],
      "ans": 1,
      "exp": "La situación revela la falta de un plan de respuesta a incidentes adecuado. Un plan efectivo debe incluir: 1) Roles y responsabilidades definidos con personal de guardia disponible 24/7, 2) Procedimientos de escalamiento claros, 3) Contactos de emergencia y equipos de respuesta on-call, 4) Playbooks para diferentes tipos de incidentes, 5) Pruebas periódicas del plan. Depender de personal no técnico para incidentes técnicos es una falla grave de preparación que retrasa la contención y aumenta el impacto."
    },

    // 46. Evaluación de proveedores externos
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "case": "Una empresa contrata un proveedor de software como servicio (SaaS) para gestionar datos de clientes. No realiza auditoría de seguridad del proveedor antes de la contratación.",
      "q": "¿Qué riesgo está asumiendo la empresa y qué debería hacer para mitigarlo?",
      "opts": [
        "Ningún riesgo, el proveedor es responsable de todo",
        "Riesgo de que los datos del proveedor sean comprometidos; realizar debida diligencia y evaluar certificaciones del proveedor (ISO 27001, SOC 2)",
        "El riesgo es solo contractual; revisar el contrato",
        "El riesgo es técnico; instalar firewall en la conexión"
      ],
      "ans": 1,
      "exp": "La empresa asume el riesgo de que sus datos sean comprometidos a través del proveedor. Debe realizar debida diligencia: 1) Evaluar certificaciones de seguridad del proveedor (ISO 27001, SOC 2 Type II, PCI DSS si aplica), 2) Revisar políticas de seguridad del proveedor, 3) Verificar controles de acceso, cifrado y gestión de parches, 4) Establecer cláusulas de seguridad en el contrato (responsabilidad por brechas, derecho a auditar), 5) Evaluar planes de continuidad de negocio del proveedor. La responsabilidad compartida aplica incluso con proveedores externos."
    },

    // 47. Análisis forense de incidente
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "case": "Tras un incidente de seguridad, el equipo de TI apaga inmediatamente los servidores afectados para 'contener' el ataque.",
      "q": "¿Qué problema puede causar esta acción desde la perspectiva de investigación forense?",
      "opts": [
        "Es la acción correcta, no hay problema",
        "Apagar servidores puede destruir evidencia en memoria volátil y logs en tiempo real",
        "Los servidores deben formatearse inmediatamente",
        "No hay necesidad de investigación forense después de un incidente"
      ],
      "ans": 1,
      "exp": "Apagar servidores inmediatamente puede destruir evidencia crítica: 1) La memoria RAM (volátil) contiene procesos activos, conexiones de red, posibles credenciales en memoria, 2) Logs en tiempo real pueden perderse, 3) Estado actual de archivos y procesos se altera. La práctica forense correcta es: aislar la máquina de la red (desconectar cable de red) manteniéndola encendida, capturar imagen forense de memoria, luego de discos, documentar estado. Esto preserva evidencia para determinar causa raíz, alcance del compromiso y responsabilidades."
    },

    // 48. Gestión de identidades y accesos
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "case": "Una empresa tiene cuentas de usuarios que nunca se deshabilitan cuando los empleados se van, y cuentas de servicio con contraseñas que no cambian por años.",
      "q": "¿Qué riesgos presenta esta práctica y cómo debería corregirse?",
      "opts": [
        "Riesgo bajo, las cuentas inactivas no son peligrosas",
        "Riesgo de acceso no autorizado persistente; implementar proceso de revocación de accesos y gestión de cuentas de servicio",
        "Riesgo solo de cumplimiento, no operativo",
        "Las cuentas de servicio no necesitan gestión por ser automáticas"
      ],
      "ans": 1,
      "exp": "Las cuentas inactivas son puertas de entrada para atacantes (acceso no autorizado). Las cuentas de servicio con contraseñas estáticas son especialmente riesgosas. Debe implementarse: 1) Proceso automático de revocación de accesos al terminar relación laboral, 2) Revisiones periódicas de cuentas activas, 3) Para cuentas de servicio: usar secretos rotativos automáticos, almacenamiento seguro (vaults), principios de mínimo privilegio, y revisión periódica de necesidad, 4) Política de contraseñas robusta también para cuentas técnicas. Esto reduce superficie de ataque."
    },

    // 49. Resiliencia y continuidad del negocio
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "case": "Una empresa tiene backups diarios pero nunca ha probado la restauración de datos. Sufren un incidente y al intentar recuperar, descubren que los backups están corruptos.",
      "q": "¿Qué principio fundamental de disponibilidad fue ignorado y cómo corregirlo?",
      "opts": [
        "Los backups no son necesarios si hay redundancia",
        "Solo importa tener backups, probarlos es opcional",
        "Los backups deben probarse regularmente mediante ejercicios de restauración",
        "El problema fue el incidente, no los backups"
      ],
      "ans": 2,
      "exp": "Tener backups sin probarlos es equivalente a no tener backups. La disponibilidad requiere verificar que los backups sean recuperables. Debe implementarse: 1) Programa regular de pruebas de restauración (al menos trimestral), 2) Documentar procedimientos de recuperación, 3) Probar diferentes escenarios (restauración completa, restauración de archivos individuales, recuperación en sitio alternativo), 4) Mantener registros de pruebas exitosas, 5) Ajustar estrategia según resultados. Esto garantiza que cuando se necesiten, los backups realmente funcionen."
    },

    // 50. Evaluación de madurez de seguridad
    {
      "profe": false,
      "unit": "Razonamiento Crítico",
      "diff": "hard",
      "q": "Una organización tiene políticas de seguridad documentadas, pero los empleados las desconocen y las incumplen frecuentemente. ¿Qué indica esta situación sobre la madurez de la seguridad?",
      "opts": [
        "La seguridad es madura porque las políticas existen",
        "La seguridad no es efectiva porque las políticas no están implementadas ni comunicadas",
        "Los empleados deben ser despedidos por incumplimiento",
        "Las políticas no son necesarias si hay tecnología"
      ],
      "ans": 1,
      "exp": "La madurez en seguridad requiere no solo tener políticas documentadas, sino también: 1) Comunicación efectiva a todos los empleados, 2) Capacitación periódica y concientización, 3) Mecanismos para verificar cumplimiento, 4) Consecuencias claras por incumplimiento, 5) Revisión y actualización de políticas según necesidades. Las políticas sin implementación y sin cultura de seguridad son documentos sin valor. La seguridad es un proceso que combina tecnología, procesos y personas, no solo documentos."
    },

    // Tolerancia al riesgo
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "medium",
      "q": "Es la disposición de una organización para soportar el riesgo con el fin de alcanzar sus objetivos",
      "opts": [
        "Tolerancia al riesgo", 
        "Actitud frente al riesgo", 
        "Apetito de riesgo", 
        "Asumir el riesgo"
    ],
      "ans": 0, 
      "exp": "La tolerancia al riesgo es el grado de variabilidad que una organización está dispuesta a soportar respecto a la consecución de sus objetivos."
    },

    // Disponibilidad y energía
    {
      "profe": false,
      "posible": true, "unit": "Seguridad de la Información", "diff": "easy",
      "q": "En una imprenta se va la luz, pero entra el inversor para mantener las operaciones. Estamos hablando de:",
      "opts": ["Disponibilidad", "Recuperación de desastres", "Continuidad de negocios"],
      "ans": 0, "exp": "La disponibilidad garantiza que los sistemas y datos estén accesibles cuando se necesiten, en este caso mediante energía de respaldo."
    },

    // Evaluación del riesgo
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "medium",
      "q": "Es el proceso global de identificación del riesgo, análisis del riesgo y valoración del riesgo",
      "opts": [
        "Calibración de riesgo", 
        "Transmitir el riesgo", 
        "Evaluación del riesgo"
      ],
      "ans": 2, 
      "exp": "La evaluación del riesgo es el proceso completo que abarca desde identificar la amenaza hasta valorar su impacto y probabilidad."
    },

    // Definición de Ciberseguridad
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "easy",
      "q": "Se refiere a cualquier cosa destinada a proteger a las empresas y a los individuos de los ataques intencionados, violaciones, incidentes y sus consecuencias",
      "opts": [
        "Administración de riesgos", 
        "Ciberseguridad", 
        "Controles"
    ],
      "ans": 1, 
      "exp": "La ciberseguridad se enfoca específicamente en proteger activos digitales y personas de ataques malintencionados en el ciberespacio."
    },

    // Gestión del riesgo
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "medium",
      "q": "Actividades coordinadas para dirigir y controlar la organización con relación al riesgo",
      "opts": [
        "Gestión del riesgo", 
        "Escalación de incidentes", 
        "Calidad de los controles"
    ],
      "ans": 0, 
      "exp": "La gestión del riesgo es el marco de actividades para dirigir y controlar los riesgos que pueden afectar a la organización."
    },

    // Partes interesadas (Stakeholders)
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "easy",
      "q": "Es un ejemplo de partes interesadas",
      "opts": [
        "Esposa de un empleado", 
        "Inversionistas", 
        "Vinculados", 
        "Amigo de un accionista"
    ],
      "ans": 1, 
      "exp": "Los inversionistas tienen un interés directo en el desempeño y seguridad de la organización, siendo una parte interesada clave."
    },

    // Seguridad de contraseñas
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "easy",
      "q": "También hay que tener en cuenta que si no podemos recordar una contraseña la acabaremos anotando en algún lugar, siendo esta una práctica",
      "opts": [
        "Aceptable", 
        "Aprobado por las buenas prácticas", 
        "Inaceptable"],
      "ans": 2, 
      "exp": "Anotar contraseñas físicamente compromete la seguridad y es una práctica inaceptable según los estándares de seguridad."
    },

    // Disponibilidad y energía
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "easy",
      "q": "Puede ser protegida mediante el uso de redundancia, copias de seguridad y controles de acceso. Estamos hablando de",
      "opts": [
        "Fiabilidad", 
        "Seguridad de la información", 
        "Disponibilidad"
    ],
      "ans": 2, 
      "exp": "La disponibilidad se asegura mediante redundancia y respaldos para garantizar que la información siempre sea accesible."
    },

    // Factores de autenticación (Biometría)
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "medium",
      "q": "Los factores de autenticación del concepto 'algo que soy' se suele considerar a:",
      "opts": [
        "El uso de carnet de acceso o identidad", 
        "El uso de las manos (biometría)", 
        "El uso de tarjetas de crédito"
      ],
      "ans": 1, 
      "exp": "La biometría (como las huellas dactilares o la palma de la mano) corresponde al factor de 'algo que el usuario es'."
    },

    // Modelo OSI y cifrado
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "hard",
      "q": "El cifrado de datos se trabaja en cuál de las capas del modelo OSI",
      "opts": [
        "Ninguna", 
        "Aplicación", 
        "Red y Transporte", 
        "Enlace de datos"
    ],
      "ans": 0, 
      "exp": "Aunque varias capas usan cifrado, el cifrado de datos general no es responsabilidad exclusiva de una sola capa del modelo OSI tradicional."
    },

    // Efectos del malware
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "medium",
      "q": "De las principales acciones que puede realizar un malware sobre la máquina víctima, está:",
      "opts": [
        "Inestabilidad del sistema", 
        "Alertar al usuario para formarse en Ciberseguridad", 
        "Actualizar el sistema como medida preventiva"
      ],
      "ans": 0, 
      "exp": "El malware suele causar inestabilidad, robo de datos o daños en el sistema operativo del usuario."
    },

    // Concientización en seguridad
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "easy",
      "q": "Es importante no sólo centrarse en el 'qué' y 'cómo', sino también en el 'Por qué'. Los empleados deben entender el propósito de las medidas de seguridad. Esta afirmación es:",
      "opts": [
        "Incorrecta", 
        "Ilógica", 
        "Sobrevalorada", 
        "Correcta"
    ],
      "ans": 3, 
      "exp": "La concientización es clave; entender el 'por qué' ayuda a que los empleados cumplan las normas de seguridad voluntariamente."
    },

    // Impacto de indisponibilidad
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "medium",
      "q": "Corresponde a una de las principales consecuencias e impactos de la falta de disponibilidad de la información",
      "opts": [
        "La divulgación de la información protegida", 
        "La pérdida de tiempo productivo", 
        "Decisiones erróneas"
      ],
      "ans": 1, 
      "exp": "Si la información no está disponible, los procesos se detienen, causando una pérdida directa de productividad."
    },

    // Activos digitales y ciberseguridad
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "easy",
      "q": "Se ocupa de la protección de los activos digitales",
      "opts": [
        "Ciberseguridad", 
        "Seguridad de la información", 
        "Privacidad de Datos"
    ],
      "ans": 0, 
      "exp": "La ciberseguridad es la disciplina que protege específicamente los activos que residen en el ciberespacio."
    },

    // Modelo OSI Capa 7
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "medium",
      "q": "Única capa que no presta servicio a otra puesto que es la capa de nivel superior del modelo OSI",
      "opts": [
        "Presentación", 
        "Aplicación", 
        "Enlace de Datos", 
        "Transporte"
    ],
      "ans": 1, 
      "exp": "La capa de Aplicación es la séptima capa y la más cercana al usuario, entregando los servicios directamente a este."
    },

    // Confidencialidad estratégica
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "medium",
      "q": "Algunas empresas necesitan proteger información sobre futuros productos competitivos antes de lanzarlos. Estamos hablando de:",
      "opts": [
        "Clasificación de la información", 
        "Privacidad", 
        "Confidencialidad"],
      "ans": 2, 
      "exp": "La confidencialidad asegura que información sensible no sea revelada a competidores o personas no autorizadas."
    },

    // Seguridad por diseño
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "medium",
      "q": "Deberían considerarse en la fase de diseño y en la especificación de los requisitos de los sistemas y proyectos",
      "opts": [
        "Los controles", 
        "El entrenamiento", 
        "Los objetivos"
      ],
      "ans": 0, 
      "exp": "Los controles de seguridad deben integrarse desde el diseño (seguridad por diseño) para ser efectivos."
    },

    // Ética y códigos de conducta
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "medium",
      "q": "Se puede utilizar para cubrir las responsabilidades relativas a la confidencialidad, protección de datos y ética profesional",
      "opts": ["Un código ético o de conducta", "Biblia", "Configuración"],
      "ans": 0, 
      "exp": "Un código de conducta formaliza las expectativas de la organización respecto al comportamiento ético y manejo de datos."
    },

    // Autenticidad del mensaje
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "easy",
      "q": "Se puede garantizar que el mensaje procede de quien se afirma que procede. Estamos hablando de",
      "opts": [
        "La autenticidad", 
        "El no repudio", 
        "La privacidad"
    ],
      "ans": 0, 
      "exp": "La autenticidad permite verificar la identidad del emisor de la información."
    },

    // ISO 31000 Propósito
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "medium",
      "q": "El propósito de la gestión del riesgo",
      "opts": [
        "Es mirar el riesgo", 
        "Mitigar el riesgo", 
        "La creación y la protección del valor"
      ],
      "ans": 2, 
      "exp": "Según ISO 31000, la gestión de riesgos busca proteger y crear valor en la organización gestionando la incertidumbre."
    },

    // Seguridad e integridad física
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "easy",
      "q": "Por lo regular, las organizaciones suelen proteger:",
      "opts": [
        "Integridad física", 
        "Letreros y vallas", 
        "Iluminación"
    ],
      "ans": 0, 
      "exp": "La protección de los activos comienza por asegurar la integridad física de las personas e infraestructura."
    },

    // Auditorías como control
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "medium",
      "q": "Solemos protegernos usando controles para:",
      "opts": [
        "Eliminar intrusos", 
        "Realizar auditorías", 
        "Ocultar llaves"
    ],
      "ans": 1, 
      "exp": "Las auditorías son controles detectivos y correctivos esenciales para validar la eficacia de la seguridad."
    },

    // Gestión de cambios y mejora
    {
      "profe": false,
      "posible": true, 
      "unit": "Seguridad de la Información", 
      "diff": "medium",
      "q": "Son acciones para mejora que incluyen las siguientes:",
      "opts": [
        "Administrar procesos", 
        "Descontinuar uso", 
        "Formalización de los cambios"
      ],
      "ans": 2, 
      "exp": "La formalización de cambios asegura que las mejoras se implementen de manera controlada y documentada."
    },

    // Procesos de mejora continua
    {
      "profe": false,
      "unit": "Seguridad de la Información",
      "diff": "hard",
      "q": "Selecciona la respuesta correcta sobre los procesos de un sistema de seguridad de la información",
      "opts": [
        "Procesos enfocados a conseguir metas empresariales...",
        "Proceso de gestión y cambio y cultura...",
        "Procesos enfocados a conseguir únicamente objetivos propios...",
        "Procesos enfocados a la revisión y mejora continua del sistema en conjunto con calidad y medio ambiente"
      ],
      "ans": 3, 
      "exp": "Los procesos de seguridad deben alinearse con la mejora continua y otros sistemas de gestión de la empresa."
    },

    // Definición de datos personales sensibles
    {
      "profe": false,
      "unit": "Seguridad de la Información",
      "diff": "hard",
      "q": "Seleccione la respuesta correcta de Datos Personales",
      "opts": [
        "Son los datos que identifican a Luis Perez...",
        "Conjunto estructurado de datos...",
        "Datos genéticos heredados o adquiridos que proporcionan información única sobre la fisiología o salud",
        "Dato que identifica a una persona directamente"
      ],
      "ans": 2, 
      "exp": "Esta definición específica se refiere a datos biométricos y de salud, que son una categoría especial de datos personales."
    },

    // Auditoría de planificación SGSI
    {
      "profe": false,
      "unit": "Seguridad de la Información",
      "diff": "hard",
      "q": "Aspectos que debería auditar las acciones de Planificación de un SGSI",
      "opts": [
        "Establecer mecanismos de control...",
        "Proceso de no conformidades...",
        "Mecanismo de provisión de recursos...",
        "Creación de un plan para riesgos y oportunidades considerando expectativas de partes interesadas y objetivos medibles"
      ],
      "ans": 3, 
      "exp": "La planificación audita cómo la empresa identifica riesgos y establece objetivos de seguridad alineados al negocio."
    },

    // Definición de Sistema de Información
    {
      "profe": false,
      "unit": "Seguridad de la Información",
      "diff": "medium",
      "q": "Selecciona la respuesta correcta que identifique a los sistemas de información",
      "opts": [
        "Utiliza materia prima para informes inmediatos...",
        "Información organizada cronológicamente",
        "Información estratégica de la empresa",
        "Utiliza datos como materia prima, los almacena, procesa y transforma para obtener información"
      ],
      "ans": 3, 
      "exp": "Un sistema de información es el conjunto de componentes que recolectan, procesan y distribuyen datos para convertirlos en información útil."
    },

    // Phishing e ingeniería social
    {
      "profe": false,
      "unit": "Seguridad de la Información",
      "diff": "easy",
      "q": "Cuando le llega un mensaje de que ganó la lotería pidiendo su cuenta y nombre, ¿a qué tipo de delito se refiere?",
      "opts": [
        "Manipulación de datos", 
        "Gusanos", 
        "Bombas lógicas", 
        "Virus informático", 
        "Phishing"
    ],
      "ans": 4, 
      "exp": "El phishing es una técnica de ingeniería social usada para engañar a las personas y obtener datos confidenciales."
    },

    // Características del delito informático
    {
      "profe": false,
      "unit": "Seguridad de la Información",
      "diff": "medium",
      "q": "Seleccione las características que tiene un Delito Informático",
      "opts": [
        "Actitudes ilícitas con computadoras como instrumento o fin",
        "Actitudes normales...",
        "Jurídicas y culpables",
        "Antijurídicas y culpables"
      ],
      "ans": 0, 
      "exp": "Los delitos informáticos son acciones ilegales donde la tecnología es el medio para cometer el crimen o el objetivo del mismo."
    },

    // Rol de las UTIC en proyectos informáticos
    {
      "profe": false,
      "unit": "Seguridad de la Información",
      "diff": "easy",
      "q": "La UTIC creará mecanismos que faciliten la administración de proyectos informáticos. Esta afirmación es:",
      "opts": [
        "Verdadero", 
        "Falso"
    ],
      "ans": 0, 
      "exp": "Es una función estándar de las Unidades de Tecnologías de Información y Comunicación (UTIC)."
    },

    // Normas Contraloría TI
    {
      "profe": false,
      "unit": "Seguridad de la Información",
      "diff": "easy",
      "q": "La organización XYZ definió escalas salariales para cumplir la norma 410-02 de contraloría. ¿Es esto correcto?",
      "opts": [
        "Verdadero", 
        "Falso"
    ],
      "ans": 1, 
      "exp": "Las normas de contraloría técnica (como la 410) se refieren a controles de TI, no a políticas salariales de recursos humanos."
    },


    // Compromiso del Kernel por malware
    {
      "profe": false,
      "unit": "Seguridad de la Información",
      "diff": "avanzado",
      "q": "Ante una infección por malware que compromete la estabilidad del kernel, ¿cuál es la implicancia técnica más crítica para la organización?",
      "opts": [
        "La degradación del rendimiento percibida por el usuario final en aplicaciones de capa 7.",
        "La pérdida de integridad estructural del sistema operativo que impide la ejecución de procesos críticos.",
        "La interrupción de la disponibilidad del servicio debido a la saturación de los recursos de red local.",
        "La vulneración de la confidencialidad mediante la exfiltración pasiva de metadatos de usuario."
      ],
      "ans": 1,
      "exp": "Un malware que afecta al kernel impacta directamente en la integridad y ejecución del sistema, invalidando la confianza en todas las operaciones superiores."
    },

    // Sustento técnico de la concienciación
    {
      "profe": false,
      "unit": "Seguridad de la Información",
      "diff": "avanzado",
      "q": "La afirmación de que los empleados deben entender el 'Por qué' de las medidas de seguridad se sustenta técnicamente en:",
      "opts": [
        "La optimización de los tiempos de respuesta ante incidentes mediante la automatización del cumplimiento.",
        "La reducción del riesgo residual mediante la internalización de controles en la cultura organizacional.",
        "El cumplimiento estricto de las normativas legales vigentes para evitar sanciones administrativas.",
        "La mejora de la eficiencia operativa al eliminar procesos de control que resulten incómodos para el staff."
      ],
      "ans": 1,
      "exp": "La concienciación busca que el factor humano deje de ser el eslabón débil, reduciendo el riesgo que los controles técnicos no pueden cubrir por sí solos."
    },

    // Impacto sistémico por falta de disponibilidad
    {
      "profe": false,
      "unit": "Seguridad de la Información",
      "diff": "avanzado",
      "q": "¿Cuál es el impacto sistémico más relevante de una falla prolongada en la disponibilidad de la información crítica?",
      "opts": [
        "El compromiso de la integridad de las bases de datos al quedar los registros en un estado inconsistente.",
        "La interrupción de los flujos de trabajo operativos que deriva en una pérdida directa de la capacidad productiva.",
        "La exposición de secretos industriales a competidores debido a la degradación de los perímetros de seguridad.",
        "La imposibilidad de realizar auditorías forenses al no contar con logs de eventos actualizados en tiempo real."
      ],
      "ans": 1,
      "exp": "La disponibilidad está ligada a la continuidad de negocio; su falta detiene la operación y genera lucro cesante y daño reputacional."
    },

    // Diferencia Ciberseguridad vs Seguridad de la Información
    {
      "profe": false,
      "unit": "Seguridad de la Información",
      "diff": "avanzado",
      "q": "La ciberseguridad, a diferencia de la seguridad de la información tradicional, se caracteriza primordialmente por:",
      "opts": [
        "El enfoque exclusivo en la protección de soportes físicos y documentos impresos de alta sensibilidad.",
        "La gestión de riesgos sobre activos digitales en entornos interconectados frente a amenazas del ciberespacio.",
        "La implementación de controles administrativos orientados únicamente al cumplimiento de la normativa ISO 27001.",
        "La priorización de la disponibilidad sobre la confidencialidad en sistemas de almacenamiento desconectados."
      ],
      "ans": 1,
      "exp": "La ciberseguridad es el subconjunto que trata específicamente las amenazas en entornos digitales y redes conectadas."
    },

    // OSI (Capa 7)
    {
      "profe": false,
      "unit": "Seguridad de la Información",
      "diff": "avanzado",
      "q": "Al analizar la capa de Aplicación del modelo OSI como el nivel superior, su característica técnica distintiva es:",
      "opts": [
        "La gestión del direccionamiento lógico y el enrutamiento de paquetes entre redes heterogéneas.",
        "El establecimiento de sesiones punto a punto para garantizar el orden de entrega de los datos.",
        "El suministro de servicios de red directamente a los procesos de software y aplicaciones del usuario.",
        "La transformación de los datos en señales eléctricas o pulsos de luz para su transmisión física."
      ],
      "ans": 2,
      "exp": "La capa 7 no da servicio a otras capas del modelo, sino que actúa como interfaz entre la red y las aplicaciones finales."
    },

    // Clasificación y Confidencialidad
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "Una organización decide clasificar su información estratégica antes de un lanzamiento. Este control busca garantizar:",
      "opts": [
        "La integridad de los datos para evitar que la competencia modifique las especificaciones del producto.",
        "La confidencialidad mediante la restricción del acceso solo a entidades con privilegios autorizados.",
        "La disponibilidad de los catálogos para asegurar que los clientes puedan acceder a ellos tras el lanzamiento.",
        "El no repudio de las transacciones comerciales que se realicen durante la etapa de preventa oficial."
      ],
      "ans": 1,
      "exp": "Clasificar la información permite aplicar niveles de protección adecuados para asegurar que el secreto comercial (confidencialidad) se mantenga."
    },

    // Seguridad por diseño (Requisitos)
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "¿Por qué es fundamental integrar los controles de seguridad en la fase de especificación de requisitos de un proyecto?",
      "opts": [
        "Para facilitar la labor de auditoría externa una vez que el sistema se encuentre en producción.",
        "Para mitigar vulnerabilidades estructurales mediante la aplicación del principio de seguridad por diseño.",
        "Para reducir los costos de licenciamiento de software de seguridad al usar herramientas nativas.",
        "Para asegurar que el rendimiento del hardware no se vea afectado por la ejecución de procesos de cifrado."
      ],
      "ans": 1,
      "exp": "La seguridad por diseño (Security by Design) es más eficiente y económica que intentar 'parchar' un sistema ya terminado."
    },

    // Factores Autenticación (Inherencia)
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "Respecto a los factores de autenticación, el uso de patrones biométricos (como el mapa de venas) se basa en:",
      "opts": [
        "Posesión: Un objeto físico que el usuario debe portar para validar su identidad en el sistema.",
        "Conocimiento: Una secuencia alfanumérica que solo el usuario legítimo debe recordar y custodiar.",
        "Inherencia: Una característica física o conductual única del individuo que no puede ser transferida.",
        "Ubicación: La posición geográfica específica desde la cual se intenta realizar el acceso al recurso."
      ],
      "ans": 2,
      "exp": "La biometría pertenece al factor de 'algo que soy' (inherencia), basado en rasgos biológicos únicos."
    },

    // Código de ética como control
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "Un código ético dentro de una organización cumple la función técnica de control administrativo al:",
      "opts": [
        "Reemplazar las configuraciones de firewall mediante el compromiso moral de los empleados de TI.",
        "Establecer el marco de responsabilidad y conducta esperada sobre el uso de activos de información.",
        "Automatizar la detección de intrusos mediante el monitoreo de los valores personales del staff.",
        "Definir las especificaciones técnicas de los algoritmos de cifrado que se deben implementar."
      ],
      "ans": 1,
      "exp": "El código de ética es un control preventivo que guía el uso adecuado de los recursos y la protección de datos desde el factor humano."
    },

    // OSI (Capa 6 y Cifrado)
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "Si se requiere implementar cifrado de extremo a extremo para la representación de datos, ¿en qué capa OSI se gestiona?",
      "opts": [
        "Capa de Aplicación, al ser donde reside la lógica de negocio y la interacción con el usuario.",
        "Capa de Presentación, por ser la responsable de la traducción, compresión y sintaxis de los datos.",
        "Capa de Sesión, al encargarse de mantener el diálogo y la persistencia entre los puntos finales.",
        "Capa de Transporte, debido al uso de protocolos como TCP para garantizar la entrega de segmentos."
      ],
      "ans": 1,
      "exp": "Técnicamente, la Capa 6 (Presentación) es la designada para el cifrado y formato de los datos antes de su transmisión."
    },

    // Autenticidad vs No Repudio
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "¿Cuál es la diferencia fundamental entre el mecanismo de autenticidad y el de no repudio en una comunicación?",
      "opts": [
        "La autenticidad valida el origen del mensaje, mientras que el no repudio impide negar la autoría de la acción.",
        "La autenticidad protege la confidencialidad, mientras que el no repudio asegura que los datos no se alteren.",
        "La autenticidad requiere hardware dedicado, mientras que el no repudio se basa únicamente en contraseñas.",
        "La autenticidad se aplica al receptor del mensaje y el no repudio se aplica exclusivamente al emisor físico."
      ],
      "ans": 0,
      "exp": "La autenticidad confirma quién es el emisor; el no repudio aporta una prueba legal que impide a dicho emisor negar el envío."
    },

    // ISO 31000 (Creación de valor)
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "De acuerdo con marcos de trabajo como ISO 31000, el propósito último de gestionar los riesgos de seguridad es:",
      "opts": [
        "Alcanzar un estado de riesgo cero mediante la eliminación de todas las amenazas posibles.",
        "Maximizar la inversión en tecnologías de defensa para disuadir ataques de agentes externos.",
        "Asegurar la creación y protección del valor de la organización mediante la gestión de la incertidumbre.",
        "Delegar la responsabilidad legal de los incidentes en proveedores de servicios de seguridad externos."
      ],
      "ans": 2,
      "exp": "La gestión de riesgos no busca el riesgo cero (imposible), sino permitir que la empresa alcance sus objetivos protegiendo sus activos."
    },

    // Seguridad Física (Infraestructura)
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "Al analizar la seguridad física en las organizaciones, ¿cuál es el objetivo técnico primordial de proteger la integridad física de la infraestructura?",
      "opts": [
        "Asegurar que los letreros y vallas publicitarias cumplan con la normativa de visibilidad corporativa.",
        "Garantizar la continuidad de los servicios mediante la protección de los activos de hardware y suministros.",
        "Optimizar el consumo eléctrico mediante sistemas de iluminación inteligente de bajo impacto ambiental.",
        "Cumplir con los estándares de diseño arquitectónico exigidos para la certificación de edificios verdes."
      ],
      "ans": 1,
      "exp": "La seguridad física es la primera capa de defensa para garantizar que el hardware que soporta la información no sea dañado o robado."
    },

    // Función estratégica de Auditorías
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "Dentro de un esquema de controles de seguridad, ¿cuál es la función estratégica de realizar auditorías periódicas?",
      "opts": [
        "Eliminar de forma definitiva la presencia de intrusos en la red perimetral de la organización.",
        "Ocultar las llaves de cifrado en ubicaciones físicas para evitar su acceso por personal no autorizado.",
        "Validar la eficacia de los controles implementados y detectar desviaciones respecto a las políticas.",
        "Automatizar la respuesta ante incidentes mediante la ejecución de scripts de recuperación inmediata."
      ],
      "ans": 2,
      "exp": "Las auditorías son controles detectivos y de monitoreo que aseguran que el sistema de seguridad funcione según lo planificado."
    },

    // Gestión de cambios
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "¿Qué implica la 'Formalización de los cambios' como una acción de mejora dentro de un sistema de gestión?",
      "opts": [
        "La delegación de la administración de procesos técnicos a empresas consultoras externas.",
        "El cese inmediato del uso de tecnologías obsoletas sin previa notificación a los usuarios.",
        "La documentación y aprobación sistemática de las modificaciones para evitar riesgos operativos.",
        "La actualización automática de todos los sistemas operativos durante el horario de mayor productividad."
      ],
      "ans": 2,
      "exp": "La gestión de cambios evita que una modificación no probada o no autorizada introduzca nuevas vulnerabilidades."
    },

    // Integración SGSI, Calidad y Medio Ambiente
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "Los procesos de un sistema de seguridad que se integran con la gestión de calidad y medio ambiente buscan:",
      "opts": [
        "Limitar los objetivos de seguridad únicamente a las necesidades del departamento de informática.",
        "Garantizar la revisión y mejora continua mediante un enfoque sistémico común a toda la organización.",
        "Priorizar las metas de marketing sobre la protección de los datos sensibles de los clientes.",
        "Reducir la inversión en ciberseguridad al delegar la responsabilidad en el comité de calidad."
      ],
      "ans": 1,
      "exp": "Un SGSI robusto no opera de forma aislada, sino que se alinea con la mejora continua (PDCA) de la organización."
    },

    // Datos Sensibles (Salud/Fisiología)
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "Respecto a la normativa de Datos Personales, la información sobre la fisiología o salud de un individuo se define como:",
      "opts": [
        "Un conjunto de datos estructurados para fines exclusivamente estadísticos y de investigación.",
        "Datos genéticos o biométricos que proporcionan una identificación única y requieren protección especial.",
        "Información de contacto básica que identifica a una persona natural de forma directa e indirecta.",
        "Registros de acceso público relacionados con las características hereditarias de un grupo familiar."
      ],
      "ans": 1,
      "exp": "Estos datos se consideran sensibles por su capacidad de identificar de forma inequívoca y permanente a una persona."
    },

    // Alineación SGSI con el negocio
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "En la fase de Planificación de un SGSI, ¿qué aspecto es crítico auditar para asegurar la alineación con el negocio?",
      "opts": [
        "La compra de hardware de última generación para todos los puestos de trabajo de la empresa.",
        "La creación de un plan basado en riesgos y oportunidades que considere las expectativas de las partes interesadas.",
        "El establecimiento de un mecanismo de provisión de suministros de oficina para el área de TI.",
        "La ejecución de pruebas de penetración sin el consentimiento previo de la dirección general."
      ],
      "ans": 1,
      "exp": "La planificación debe basarse en el contexto de la organización y sus riesgos específicos para ser efectiva."
    },

    // Definición técnica de Sistema de Información
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "Un Sistema de Información se define técnicamente por su capacidad de:",
      "opts": [
        "Almacenar grandes volúmenes de datos cronológicos sin necesidad de procesamiento posterior.",
        "Actuar como materia prima para la creación de informes estratégicos de marketing digital.",
        "Almacenar, procesar y transformar datos para obtener información útil para la toma de decisiones.",
        "Generar respuestas automáticas a los clientes mediante el uso exclusivo de bases de datos relacionales."
      ],
      "ans": 2,
      "exp": "El valor de un SI no es el dato en sí, sino el proceso de transformación que lo convierte en información accionable."
    },

    // Ingeniería Social (Phishing)
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "Un ataque de Phishing exitoso se caracteriza primordialmente por explotar:",
      "opts": [
        "Una vulnerabilidad de día cero en el kernel del sistema operativo de la víctima.",
        "La falta de actualizaciones de seguridad en los servidores de correo de la organización.",
        "La confianza del usuario mediante ingeniería social para obtener credenciales de forma voluntaria.",
        "La saturación de la tabla de direcciones MAC en un switch de capa 2 para interceptar tráfico."
      ],
      "ans": 2,
      "exp": "El phishing no suele atacar el software, sino la psicología del usuario (ingeniería social)."
    },

    // Definición jurídico-técnica Delito Informático
    {
      "profe": false,
      "unit": "fundamentos",
      "diff": "avanzado",
      "q": "¿Cuál es la definición técnico-jurídica de un Delito Informático?",
      "opts": [
        "Cualquier actitud inusual realizada por conocidos del departamento de informática de la empresa.",
        "Acciones antijurídicas y culpables que utilizan las computadoras como instrumento o como fin.",
        "El uso accidental de recursos tecnológicos para fines distintos a los establecidos en el contrato.",
        "La simple verificación de vulnerabilidades en sistemas públicos sin intención de causar daño."
      ],
      "ans": 1,
      "exp": "Un delito requiere tipicidad (antijurídica) y el uso de la tecnología como medio o como objetivo del ataque."
    },

    // Administración de proyectos y UTIC
    {
      "profe": false,
      "unit": "Gobernanza de TI",
      "diff": "avanzado",
      "q": "En la administración de proyectos informáticos, ¿cuál es el rol de la UTIC según las buenas prácticas de gobernanza?",
      "opts": [
        "Eliminar la necesidad de monitorear los beneficios obtenidos tras la finalización del proyecto.",
        "Crear mecanismos que faciliten la gestión y el cumplimiento de los objetivos planteados.",
        "Delegar la responsabilidad total de los riesgos tecnológicos en los usuarios finales del sistema.",
        "Priorizar el uso de software propietario sobre soluciones que cumplan con los requisitos del negocio."
      ],
      "ans": 1,
      "exp": "La UTIC debe actuar como facilitador y administrador de la estrategia tecnológica institucional."
    },

    // Normativa y Contraloría (410-02)
    {
      "profe": false,
      "unit": "Normativa y Estándares",
      "diff": "avanzado",
      "q": "¿Por qué la norma 410-02 de contraloría no se cumpliría al definir escalas salariales mediante controles de TI?",
      "opts": [
        "Porque los sistemas de información no tienen capacidad de procesar datos financieros complejos.",
        "Porque la norma 410-02 regula los controles técnicos de TI y no los procesos administrativos de recursos humanos.",
        "Porque las escalas salariales deben ser aprobadas exclusivamente por el administrador de la base de datos.",
        "Porque el cumplimiento de la contraloría solo es obligatorio para empresas del sector privado."
      ],
      "ans": 1,
      "exp": "Existe una distinción clara entre controles técnicos de seguridad (TI) y políticas administrativas (RRHH)."
    },

    // Segregación de funciones (DBA)
    {
      "profe": false,
      "unit": "Control de Acceso",
      "diff": "avanzado",
      "q": "¿Cuál es el riesgo crítico de que un Administrador de Base de Datos sea el único responsable de otorgar accesos?",
      "opts": [
        "La falta de formación técnica del resto del personal del departamento de informática.",
        "El incumplimiento de la norma 410-02 al no existir segregación de funciones en tareas críticas.",
        "El aumento de los costos operativos al requerir hardware de mayor capacidad para la base de datos.",
        "La imposibilidad de realizar copias de seguridad incrementales durante el horario nocturno."
      ],
      "ans": 1,
      "exp": "Sin segregación de funciones, una sola persona tiene el poder de comprometer todo el sistema sin controles cruzados."
    },  
  ];

  

  export default preguntas_seguridad_informacion;