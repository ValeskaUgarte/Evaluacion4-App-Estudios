
     // ==================== EXAMEN FINAL - FUNDAMENTOS SEGURIDAD ====================
  const preguntas_seguridad_examen = [
     {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué define mejor el concepto de 'seguridad de la información'?",
      "opts": [
        "Solo la protección de equipos informáticos contra virus", 
        "El conjunto de medidas, prácticas y políticas destinadas a proteger los datos en cualquier formato contra accesos no autorizados, modificaciones o divulgación indebida", 
        "Únicamente el cifrado de datos sensibles", 
        "La instalación de firewalls y antivirus en la red corporativa"
      ],
      "ans": 1, 
      "exp": "La seguridad de la información es el conjunto de medidas, prácticas y políticas destinadas a proteger los datos en cualquier formato (digital, físico o verbal) contra accesos no autorizados, modificaciones, destrucción o divulgación indebida. Su objetivo central es garantizar confidencialidad, integridad y disponibilidad."
    },

    // 2. Integridad
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "easy",
      "q": "¿Qué característica de la Triada de la Seguridad asegura que los datos no sean manipulados?",
      "opts": [
        "Confidencialidad", 
        "Integridad", 
        "Disponibilidad", 
        "Autenticidad"],
      "ans": 1, 
      "exp": "La Integridad garantiza que los datos no sean alterados ni modificados sin autorización. Asegura que la información permanezca exacta y completa. Se implementa mediante algoritmos de hash como SHA-256."
    },

    // 3. Técnica que garantiza confidencialidad
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "easy",
      "q": "¿Qué técnica garantiza la confidencialidad de la información?",
      "opts": [
        "Hash", 
        "Cifrado", 
        "Firma digital", 
        "Tokenización"
      ],
      "ans": 1, 
      "exp": "El cifrado es la técnica principal para garantizar confidencialidad. Transforma la información en formato ilegible para quienes no posean la clave. AES (Advanced Encryption Standard) es el estándar más utilizado."
    },

    // 4. Estándar ISO 27001
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué estándar internacional se utiliza para la gestión de seguridad de la información?",
      "opts": [
        "ISO 9001", 
        "ISO 27001", 
        "ISO 14001", 
        "ISO 45001"
      ],
      "ans": 1, 
      "exp": "ISO 27001:2022 es el estándar internacional para la gestión de seguridad de la información. Establece requisitos para implementar, mantener y mejorar un Sistema de Gestión de Seguridad de la Información (SGSI)."
    },

    // 5. Características Nessus
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "Características de la herramienta Nessus.",
      "opts": [
        "Framework de pentesting con exploits personalizables", 
        "Escáner de vulnerabilidades que detecta configuraciones erróneas, software desactualizado y genera informes detallados", 
        "Herramienta exclusiva para aplicaciones web", 
        "Sistema de monitoreo de redes en tiempo real"
      ],
      "ans": 1, 
      "exp": "Nessus es un escáner de vulnerabilidades profesional. Detecta configuraciones erróneas, software desactualizado, genera informes con severidad CVSS, permite escanear múltiples sistemas y es ideal para auditorías de seguridad."
    },

    // 6. Estrategia que minimiza impacto
    {
      "profe": true, 
      "unit": 
      "Examen Final", 
      "diff": "medium",
      "q": "¿Qué estrategia minimiza el impacto de un ataque exitoso?",
      "opts": [
        "Defensa en profundidad con múltiples capas de controles y segmentación de red", 
        "Usar un solo firewall muy potente", 
        "Instalar solo antivirus", 
        "Realizar backups semanales únicamente"
      ],
      "ans": 0, 
      "exp": "La defensa en profundidad implementa múltiples capas de controles independientes (firewall, segmentación, MFA, backups, SIEM). Si una capa falla, las siguientes protegen, minimizando el impacto."
    },

    // 7. Protocolo comunicaciones seguras web
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "easy",
      "q": "¿Qué protocolo garantiza comunicaciones seguras en la web?",
      "opts": [
        "HTTP", 
        "FTP", 
        "HTTPS", 
        "SMTP"
      ],
      "ans": 2, 
      "exp": "HTTPS (HTTP Secure) combina HTTP con TLS/SSL, cifrando la comunicación entre navegador y servidor, garantizando confidencialidad e integridad de los datos transmitidos. Usa puerto 443."
    },

    // 8. Principio mínimo privilegio
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué representa el principio de 'mínimo privilegio'?",
      "opts": [
        "Dar acceso total a todos los usuarios", 
        "Cada usuario debe tener acceso solo a los recursos estrictamente necesarios para su función", 
        "Los administradores tienen todos los privilegios", 
        "Los privilegios se asignan según antigüedad"
      ],
      "ans": 1, 
      "exp": "El principio de mínimo privilegio establece que cada usuario, proceso o sistema debe tener acceso únicamente a los recursos estrictamente necesarios para realizar sus funciones. Reduce la superficie de ataque."
    },

    // 9. Medida efectiva contra ransomware
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué medida es efectiva contra ataques de ransomware?",
      "opts": [
        "Pagar el rescate inmediatamente", 
        "Mantener copias de seguridad actualizadas y almacenadas en ubicaciones separadas (offline)", 
        "Desconectar todos los equipos", 
        "Formatear todos los discos"
      ],
      "ans": 1, 
      "exp": "La medida más efectiva son copias de seguridad aisladas (offline) que permiten restaurar los datos sin pagar rescate. Complementar con actualizaciones, EDR, segmentación y capacitación contra phishing."
    },

    // 10. Análisis de riesgos
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué técnica de análisis de riesgos considera tanto amenazas como vulnerabilidades?",
      "opts": [
        "Análisis FODA", 
        "Análisis de brecha", 
        "Análisis de riesgos (Riesgo = Probabilidad × Impacto)", 
        "Auditoría interna"
      ],
      "ans": 2, 
      "exp": "El análisis de riesgos evalúa amenazas (eventos externos) y vulnerabilidades (debilidades internas) mediante la fórmula Riesgo = Probabilidad × Impacto, priorizando mediante Matriz de Riesgos."
    },

    // 11. ISO 27005
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "hard",
      "q": "Características de la ISO 27005.",
      "opts": [
        "Idéntica a ISO 27001", 
        "Estándar específico para gestión de riesgos en seguridad de la información, complementando a ISO 27001", 
        "Regula exclusivamente el cifrado", 
        "Norma para auditorías externas"
      ],
      "ans": 1, 
      "exp": "ISO 27005 complementa ISO 27001 con guía detallada para gestión de riesgos. Define proceso iterativo: contexto, identificación, análisis, evaluación y tratamiento. Opciones: mitigar, transferir, aceptar o evitar."
    },

    // 12. Confidencialidad
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "easy",
      "q": "¿Qué representa la confidencialidad en la Triada de la Seguridad?",
      "opts": [
        "Datos disponibles siempre", 
        "Información accesible solo para personas autorizadas", 
        "Datos no modificados sin autorización", 
        "Monitoreo continuo"
      ],
      "ans": 1, 
      "exp": "La confidencialidad asegura que la información sea accesible únicamente para personas, procesos o sistemas debidamente autorizados. Se implementa mediante cifrado, controles de acceso y autenticación."
    },

    // 13. Enfoque NIST CSF
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué enfoque utiliza el estándar NIST CSF para gestionar riesgos?",
      "opts": [
        "Enfoque punitivo con multas", 
        "Marco de cinco funciones: Identificar, Proteger, Detectar, Responder y Recuperar", 
        "Sistema de certificación obligatorio", 
        "Solo aplica a gobierno"
      ],
      "ans": 1, 
      "exp": "NIST CSF usa 5 funciones: Identificar (activos), Proteger (salvaguardas), Detectar (eventos), Responder (contención) y Recuperar (restauración). Marco flexible basado en riesgos y mejora continua."
    },

    // 14. Gestión de parches
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "easy",
      "q": "¿Qué asegura la gestión de parches en un sistema?",
      "opts": [
        "Cambio de contraseñas", 
        "Corrección de vulnerabilidades conocidas mediante actualizaciones de software", 
        "Configuración de firewalls", 
        "Capacitación de empleados"
      ],
      "ans": 1, 
      "exp": "La gestión de parches asegura que sistemas estén actualizados con correcciones de seguridad. Muchos ataques explotan vulnerabilidades con parches disponibles pero no aplicados."
    },

    // 15. Acción crucial para proteger información en la nube
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué acción es crucial para proteger la información en la nube?",
      "opts": [
        "Solo usar contraseñas simples", 
        "Cifrado de datos en tránsito y reposo, controles de acceso estrictos y autenticación multifactor", 
        "Compartir credenciales entre usuarios", 
        "Deshabilitar auditorías"
      ],
      "ans": 1, 
      "exp": "Proteger información en la nube requiere: cifrado en tránsito y reposo, controles de acceso estrictos, MFA, configuraciones correctas, auditorías continuas y cumplimiento de estándares como ISO 27001."
    },

    // 16. Características MFA
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "Características de la autenticación multifactor (MFA).",
      "opts": [
        "Solo requiere usuario y contraseña", 
        "Combina dos o más factores: algo que sabes, algo que tienes, algo que eres", 
        "Reemplaza completamente las contraseñas", 
        "Solo se usa en accesos locales"],
      "ans": 1, 
      "exp": "MFA combina factores independientes: algo que sabes (contraseña), algo que tienes (token) y algo que eres (biometría). Reduce drásticamente acceso no autorizado incluso si la contraseña es robada."
    },

    // 17. Ventaja ISO 27001
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué ventaja clave tiene la implementación de ISO 27001?",
      "opts": [
        "Incrementa el valor de activos físicos", 
        "Facilita la gestión integral de riesgos de seguridad de la información, generando confianza y cumplimiento normativo", 
        "Mejora la productividad directamente", 
        "Garantiza integridad física de servidores"
    ],
      "ans": 1, 
      "exp": "ISO 27001 facilita gestión integral de riesgos, genera confianza ante clientes, ayuda al cumplimiento legal, estandariza procesos, promueve mejora continua y reduce incidentes de seguridad."
    },

    // 18. Normativa internacional protección datos
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué normativa internacional regula la protección de datos personales?",
      "opts": [
        "ISO 27001", 
        "GDPR (General Data Protection Regulation)", 
        "PCI DSS", 
        "NIST CSF"
      ],
      "ans": 1, 
      "exp": "GDPR es la normativa europea que regula protección de datos personales. Aplica a cualquier organización que trate datos de ciudadanos de la UE, establece derechos del titular y sanciones hasta 20M€ o 4% facturación."
    },

    // 19. Ley chilena delitos informáticos
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué ley chilena aborda los delitos informáticos?",
      "opts": [
        "Ley 19.223 y Ley 21.459", 
        "Ley 20.000", "Ley 19.628", 
        "Ley 21.643"]
        ,
      "ans": 0, 
      "exp": "Ley 19.223 (1993) fue la primera ley de delitos informáticos. Ley 21.459 (2022) moderniza la legislación, se alinea con Convenio de Budapest, introduce nuevos delitos (malware, fraude informático) y aumenta penas."
    },

    // 20. Propósito Convenio de Budapest
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Cuál es el propósito principal del Convenio de Budapest?",
      "opts": [
        "Regular el comercio electrónico", 
        "Armonizar leyes sobre delitos informáticos y facilitar cooperación internacional", 
        "Establecer estándares de cifrado", 
        "Definir privacidad en redes sociales"
      ],
      "ans": 1, 
      "exp": "El Convenio de Budapest armoniza legislaciones nacionales sobre delitos informáticos y fomenta cooperación internacional en investigaciones transnacionales. Chile se adhirió, inspirando la Ley 21.459."
    },

    // 21. Medida mitigar riesgos legales datos personales
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué medida puede mitigar riesgos legales en el manejo de datos personales?",
      "opts": [
        "Ignorar el consentimiento", 
        "Obtener consentimiento explícito, implementar política de privacidad, cifrado y controles de acceso", 
        "Compartir datos sin restricciones", 
        "No registrar actividades"
      ],
      "ans": 1, 
      "exp": "Mitigar riesgos legales requiere: consentimiento explícito, política de privacidad clara, controles técnicos (cifrado, acceso restringido), Delegado de Protección de Datos (DPD), y auditorías periódicas de cumplimiento."
    },

    // 22. Delito informático según Ley 21.459
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué acción es un delito informático según la normativa chilena actualizada?",
      "opts": [
        "Usar contraseña débil", 
        "Acceso ilícito a sistemas, interceptación ilegal, distribución de malware y fraude informático", 
        "Navegar por internet", 
        "Descargar archivos legales"
      ],
      "ans": 1, 
      "exp": "Ley 21.459 tipifica: acceso ilícito a sistemas, interceptación ilegal, distribución de malware, fraude informático, falsificación de datos digitales y abuso de dispositivos. Penas de cárcel y multas."
    },

    // 23. Características Ley 19.628
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "Características de la Ley 19.628.",
      "opts": [
        "Regula exclusivamente datos médicos", 
        "Establece principios de consentimiento, finalidad y seguridad en tratamiento de datos personales en Chile", 
        "Aplica solo a empresas grandes", 
        "No tiene sanciones"
      ],
      "ans": 1, 
      "exp": "Ley 19.628 establece principios de consentimiento, finalidad y seguridad. Reconoce derechos de acceso, rectificación y cancelación. Base normativa chilena en proceso de modernización hacia estándares GDPR."
    },

    // 24. Principio ético proteger privacidad
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "easy",
      "q": "¿Qué principio ético implica proteger la privacidad de los usuarios?",
      "opts": [
        "Lucro", 
        "Respeto a la privacidad o privacidad por diseño", 
        "Competencia desleal", 
        "Maximizar recolección de datos"
    ],
      "ans": 1, 
      "exp": "El principio de respeto a la privacidad (privacidad por diseño) implica proteger activamente información personal, no recopilar más datos de los necesarios, no compartir sin consentimiento y proteger de accesos no autorizados."
    },

    // 25. Qué regula Ley 21.459
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué regula la Ley 21.459 respecto a la ciberseguridad?",
      "opts": [
        "Solo contraseñas", 
        "Moderniza delitos informáticos: acceso ilícito, interceptación ilegal, fraude informático, alineándose con Convenio de Budapest", 
        "Crea nuevas empresas", 
        "Regula redes sociales"
      ],
      "ans": 1, 
      "exp": "Ley 21.459 moderniza delitos informáticos en Chile. Tipifica acceso ilícito, interceptación ilegal, ataque a integridad de datos, fraude informático. Se alinea con Convenio de Budapest."
    },

    // 26. Concepto ético uso responsable tecnologías
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "easy",
      "q": "¿Qué concepto ético promueve el uso responsable de tecnologías digitales?",
      "opts": [
        "Ciudadanía digital o ética en la informática", 
        "Hackeo", 
        "Piratería", 
        "Crackeo"
      ],
      "ans": 0, 
      "exp": "Ciudadanía digital promueve uso responsable, seguro y respetuoso de tecnologías: respetar propiedad intelectual, proteger privacidad, no participar en actividades ilegales, asumir responsabilidad social."
    },

    // 27. Normativa transferencia internacional datos
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué normativa busca garantizar la privacidad en la transferencia internacional de datos?",
      "opts": [
        "ISO 27001", 
        "GDPR, que regula transferencias internacionales exigiendo nivel de protección adecuado", 
        "PCI DSS", 
        "Ley 19.223"
      ],
      "ans": 1, 
      "exp": "GDPR regula transferencias internacionales de datos de ciudadanos europeos, exigiendo que el país destino garantice protección adecuada. Incluye Cláusulas Contractuales Tipo y marcos de adecuación."
    },

    // 28. Características GDPR
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "Características de la normativa GDPR.",
      "opts": [
        "Solo aplica en Europa", 
        "Aplica a cualquier organización que trate datos de ciudadanos UE, reconoce derecho al olvido, obliga notificar brechas en 72 horas, sanciones hasta 20M€ o 4% facturación", 
        "No tiene sanciones", 
        "Solo para empresas públicas"
      ],
      "ans": 1, 
      "exp": "GDPR: aplica extraterritorialmente, derechos del titular (acceso, rectificación, portabilidad, derecho al olvido), consentimiento explícito, notificación de brechas en 72h, DPD, sanciones hasta 20M€ o 4% facturación anual global."
    },

    // 29. Responsabilidad ante filtración datos
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué responsabilidad tiene una empresa ante la filtración de datos personales?",
      "opts": [
        "Ignorar el incidente", 
        "Notificar a autoridad en 72 horas, informar a titulares afectados, investigar e implementar medidas correctivas", 
        "Solo informar internamente", 
        "Esperar que pase"
      ],
      "ans": 1, 
      "exp": "Ante filtración: notificar autoridad en 72h (GDPR), informar titulares si riesgo alto, investigar incidente, implementar medidas correctivas, demostrar controles adecuados y enfrentar posibles sanciones."
    },

    // 30. Artículo 17 GDPR
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué regula el artículo 17 del GDPR?",
      "opts": [
        "Derecho al olvido (derecho de supresión)", 
        "Derecho de acceso", 
        "Derecho de portabilidad", 
        "Derecho de rectificación"
      ],
      "ans": 0, 
      "exp": "Artículo 17 regula el Derecho al olvido o derecho de supresión. Titulares pueden solicitar eliminación de datos cuando ya no son necesarios, retiran consentimiento, o datos fueron tratados ilícitamente."
    },

    // 31. Organización que creó ISO 27001
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "easy",
      "q": "¿Qué organización creó el estándar ISO 27001?",
      "opts": [
        "ISO (International Organization for Standardization) e IEC", 
        "IEEE", 
        "IETF", 
        "W3C"
      ],
      "ans": 0, 
      "exp": "ISO (International Organization for Standardization) en conjunto con IEC creó ISO/IEC 27001. Es parte de la familia ISO 27000. Versión vigente ISO 27001:2022."
    },

    // 32. Principio fomenta transparencia en datos
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "easy",
      "q": "¿Qué principio fomenta la transparencia en el manejo de datos personales?",
      "opts": [
        "Principio de transparencia", 
        "Principio de opacidad", 
        "Principio de secreto", 
        "Principio de confidencialidad"
      ],
      "ans": 0, 
      "exp": "Principio de transparencia: organizaciones deben informar claramente qué datos recopilan, con qué finalidad, cómo los protegen, con quién los comparten. Presente en GDPR y Ley 19.628."
    },

    // 33. Convenio de Budapest cooperación internacional
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué establece el Convenio de Budapest en relación con la cooperación internacional?",
      "opts": [
        "No hay cooperación", 
        "Países firmantes deben colaborar mutuamente en investigación de delitos informáticos transnacionales, facilitando intercambio ágil de evidencia digital", 
        "Solo cooperación europea", 
        "Cooperación voluntaria"
      ],
      "ans": 1, 
      "exp": "Convenio de Budapest establece colaboración mutua entre países firmantes en investigación de delitos informáticos transnacionales, facilitando intercambio ágil de evidencia digital y asistencia jurídica mutua."
    },

    // 34. Matriz de riesgos
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué representa una matriz de riesgos en la gestión de seguridad de la información?",
      "opts": [
        "Herramienta visual que prioriza amenazas según probabilidad e impacto", 
        "Lista de vulnerabilidades", 
        "Informe financiero", 
        "Diagrama de red"
      ],
      "ans": 0, 
      "exp": "Matriz de riesgos es herramienta visual que prioriza amenazas según probabilidad e impacto. Organiza riesgos en categorías (bajo, moderado, alto, crítico) usando Riesgo = Probabilidad × Impacto."
    },

    // 35. Características Nikto, Nessus, OpenVAS
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "hard",
      "q": "Características de las herramientas Nikto, Nessus y OpenVAS.",
      "opts": [
        "Todas son iguales", 
        "Nessus: escáner profesional de pago; OpenVAS: código abierto gratuito; Nikto: enfocada en servidores web", 
        "Solo Nessus es válida", 
        "Ninguna sirve"
      ],
      "ans": 1, 
      "exp": "Nessus: escáner profesional de pago, detecta configuraciones erróneas; OpenVAS: código abierto gratuito, funcionalidad similar; Nikto: código abierto, enfocada en evaluación de servidores web."
    },

    // 36. Primer paso gestión vulnerabilidades
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué acción corresponde al primer paso en la gestión de vulnerabilidades?",
      "opts": [
        "Aplicar parches", 
        "Identificación de vulnerabilidades mediante escáneres", 
        "Informar a usuarios", 
        "Comprar software"
      ],
      "ans": 1, 
      "exp": "Primer paso: identificación de vulnerabilidades mediante escáneres (Nessus, OpenVAS). Sin identificar primero qué vulnerabilidades existen, no es posible priorizarlas ni remediarlas."
    },

    // 37. Método medir criticidad vulnerabilidad
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué método se utiliza para medir la criticidad de una vulnerabilidad?",
      "opts": [
        "CVSS (Common Vulnerability Scoring System)", 
        "ISO 27001", 
        "PCI DSS", 
        "NIST"
      ],
      "ans": 0, 
      "exp": "CVSS es método estandarizado para medir criticidad. Genera puntaje 0-10 basado en Base Score (características intrínsecas), Temporal Score (factor tiempo) y Environmental Score (contexto organizacional)."
    },

    // 38. Medida clave mitigar acceso no autorizado
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué medida es clave para mitigar el riesgo de acceso no autorizado?",
      "opts": [
        "Usar solo contraseñas", 
        "Autenticación multifactor (MFA) combinada con principio de mínimo privilegio", 
        "Compartir credenciales", 
        "Deshabilitar logs"
      ],
      "ans": 1, 
      "exp": "Medida clave: MFA combinada con gestión robusta de accesos basada en mínimo privilegio. Complementar con contraseñas fuertes, monitoreo SIEM y segmentación de red."
    },

    // 39. Características SIEM, Firewall, VPN, IDS
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "hard",
      "q": "Características de SIEM, Firewall, VPN e IDS.",
      "opts": [
        "SIEM: correlación eventos; Firewall: filtra tráfico; VPN: túnel cifrado; IDS: detecta intrusiones", 
        "Todos son iguales", 
        "Solo sirven para redes", 
        "Ninguna es correcta"
      ],
      "ans": 0, 
      "exp": "SIEM: recopila y correlaciona eventos de seguridad; Firewall: filtra tráfico según reglas; VPN: crea túnel cifrado sobre redes públicas; IDS: monitorea y detecta patrones sospechosos."
    },

    // 40. Técnica reducir superficie ataque red
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué técnica puede usarse para reducir la superficie de ataque de una red?",
      "opts": [
        "Segmentación de red, deshabilitar servicios y puertos innecesarios, listas blancas", 
        "Abrir todos los puertos", 
        "Conectar todos los equipos", 
        "Usar una sola VLAN"
      ],
      "ans": 0, 
      "exp": "Segmentación de red divide en zonas aisladas. Complementar con deshabilitar servicios y puertos innecesarios, listas blancas de aplicaciones, y mantener sistemas actualizados."
    },

    // 41. Características Nikto, Burp Suite, OWASP ZAP
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "hard",
      "q": "Características de las herramientas Nikto, Burp Suite y OWASP ZAP.",
      "opts": [
        "Nikto: servidores web; Burp Suite: plataforma profesional web; OWASP ZAP: proxy gratuito para aplicaciones web", 
        "Todas son iguales", 
        "Solo Burp Suite sirve", 
        "Ninguna es útil"
      ],
      "ans": 0, 
      "exp": "Nikto: código abierto para servidores web; Burp Suite: plataforma profesional para pruebas de seguridad web; OWASP ZAP: proxy gratuito, amigable, detecta vulnerabilidades web."
    },

    // 42. Análisis evalúa probabilidad e impacto
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué tipo de análisis evalúa la probabilidad e impacto de una vulnerabilidad?",
      "opts": [
        "Análisis de riesgos cuantitativo y cualitativo (Riesgo = Probabilidad × Impacto)", 
        "Análisis FODA", 
        "Análisis de brecha", 
        "Análisis financiero"
      ],
      "ans": 0, 
      "exp": "Análisis de riesgos evalúa probabilidad e impacto mediante fórmula Riesgo = Probabilidad × Impacto. Herramientas: CVSS para severidad técnica, Matriz de Riesgos para priorizar."
    },

    // 43. Características ISO 27002
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "hard",
      "q": "Características de la normativa ISO 27002.",
      "opts": [
        "Certificable por sí sola", 
        "Guía de buenas prácticas y controles de seguridad que complementa ISO 27001; define controles por dominios", 
        "Reemplaza ISO 27001", 
        "Solo para seguridad física"
      ],
      "ans": 1, 
      "exp": "ISO 27002 complementa ISO 27001 con guía de buenas prácticas y controles detallados. Define catálogo de controles organizados en dominios. No es certificable por sí sola."
    },

    // 44. Características Metasploit
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "hard",
      "q": "Características de la herramienta Metasploit.",
      "opts": [
        "Escáner de vulnerabilidades pasivo", 
        "Framework de código abierto para pruebas de penetración (pentesting); contiene exploits y payloads", 
        "Sistema de monitoreo", 
        "Antivirus"
      ],
      "ans": 1, 
      "exp": "Metasploit es framework de código abierto para pentesting. Permite simular ataques controlados, contiene amplio catálogo de exploits y payloads. Es herramienta de referencia en ethical hacking."
    },

    // 45. Medida garantiza disponibilidad
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué medida ayuda a garantizar la disponibilidad de la información?",
      "opts": [
        "Copias de seguridad regulares, sistemas redundantes, Plan de Disaster Recovery", 
        "Solo usar contraseñas", 
        "Cifrar todo", 
        "No hacer backups"
      ],
      "ans": 0, 
      "exp": "Disponibilidad (tercer pilar) se garantiza con: copias de seguridad regulares, sistemas redundantes, centros de datos secundarios, Plan de Disaster Recovery, balanceadores de carga y protección DDoS."
    },

    // 46. Práctica reduce exposición software malicioso
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué práctica reduce el riesgo de exposición a software malicioso?",
      "opts": [
        "Mantener software actualizado, usar antivirus/EDR, listas blancas de aplicaciones, capacitar usuarios contra phishing", 
        "Descargar software de cualquier fuente", 
        "Deshabilitar actualizaciones", 
        "Usar contraseñas débiles"
      ],
      "ans": 0, 
      "exp": "Prácticas efectivas: software actualizado, antivirus/EDR, listas blancas (solo software autorizado), no abrir correos sospechosos, capacitación contra phishing e ingeniería social."
    },

    // 47. Por qué actualizar software regularmente
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "easy",
      "q": "¿Por qué es recomendable actualizar regularmente el software?",
      "opts": [
        "Por moda", 
        "Los parches de seguridad corrigen vulnerabilidades conocidas que podrían ser explotadas por atacantes", 
        "Para consumir más recursos", 
        "Para deshabilitar funciones"
      ],
      "ans": 1, 
      "exp": "Actualizar regularmente es fundamental porque los parches corrigen vulnerabilidades conocidas. Software desactualizado es principal causa de brechas de seguridad. Práctica básica de higiene cibernética."
    },

    // 48. Estándar fomenta mejora continua
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué estándar internacional fomenta la mejora continua en la gestión de la seguridad?",
      "opts": [
        "ISO 27001 con ciclo PDCA y NIST CSF con sus cinco funciones", 
        "Solo ISO 9001", 
        "Solo PCI DSS", 
        "Ninguno"
      ],
      "ans": 0, 
      "exp": "ISO 27001 fomenta mejora continua mediante ciclo PDCA (Plan-Do-Check-Act). NIST CSF también promueve mejora continua a través de sus cinco funciones. Ambos incluyen revisiones periódicas y auditorías."
    },

    // 49. Técnica verificar configuraciones seguridad
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué técnica permite verificar las configuraciones de seguridad de un sistema?",
      "opts": [
        "Auditoría de configuraciones (hardening review) usando herramientas como Nessus o benchmarks CIS", 
        "Solo instalar antivirus", 
        "Reiniciar el sistema", 
        "Cambiar contraseñas"
      ],
      "ans": 0, 
      "exp": "Auditoría de configuraciones (hardening review) verifica que sistemas estén configurados según mejores prácticas. Herramientas como Nessus o benchmarks CIS permiten comparar configuraciones actuales contra estándares seguros."
    },

    // 50. Por qué son recomendables auditorías internas
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Por qué son recomendables las auditorías internas?",
      "opts": [
        "Por obligación sin beneficio", 
        "Identificar brechas antes de que sean explotadas, verificar cumplimiento, medir efectividad del SGSI", 
        "Solo para gastar recursos", 
        "No son necesarias"
      ],
      "ans": 1, 
      "exp": "Auditorías internas permiten identificar brechas antes de ser explotadas, verificar cumplimiento de políticas y normativas, medir efectividad del SGSI, detectar áreas de mejora y generar evidencia de cumplimiento."
    },

    // 51. Integridad en seguridad información
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "easy",
      "q": "¿Qué representa la integridad en el contexto de la seguridad de la información?",
      "opts": [
        "Datos disponibles siempre", 
        "Datos exactos, completos y no alterados sin autorización; implementada mediante hash y firmas digitales", 
        "Acceso solo autorizado", 
        "Monitoreo continuo"
      ],
      "ans": 1, 
      "exp": "Integridad garantiza que datos sean exactos y no alterados sin autorización. Se implementa mediante algoritmos de hash (SHA-256), firmas digitales, controles de versión y registros de auditoría."
    },

    // 52. Marco regula privacidad en UE
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "easy",
      "q": "¿Qué marco regula la privacidad y la protección de datos en la Unión Europea?",
      "opts": [
        "ISO 27001", 
        "GDPR (General Data Protection Regulation)", 
        "Ley 19.628", 
        "NIST CSF"
      ],
      "ans": 1, 
      "exp": "GDPR es el marco principal que regula privacidad y protección de datos en la UE. Vigente desde 2018, aplica a organizaciones que traten datos de ciudadanos europeos."
    },

    // 53. Medida mitigar riesgos dispositivos móviles
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué medida puede mitigar riesgos asociados al uso de dispositivos móviles?",
      "opts": [
        "No usar dispositivos", 
        "Implementar MDM (Mobile Device Management), cifrado, autenticación fuerte, borrado remoto", 
        "Compartir dispositivos sin control", 
        "Usar sin contraseña"
      ],
      "ans": 1, 
      "exp": "Mitigar riesgos móviles: política MDM para gestionar dispositivos, cifrado de almacenamiento, autenticación fuerte (PIN/biometría/MFA), aplicaciones de fuentes oficiales, actualizaciones, borrado remoto."
    },

    // 54. Qué es gestión incidentes seguridad
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué es la gestión de incidentes de seguridad?",
      "opts": [
        "Proceso estructurado para detectar, contener, analizar y recuperarse de eventos que comprometan seguridad", 
        "Instalar antivirus", 
        "Cambiar contraseñas", 
        "Hacer backups"
      ],
      "ans": 0, 
      "exp": "Gestión de incidentes es proceso estructurado: preparación, identificación, contención, erradicación, recuperación y lecciones aprendidas. Objetivo: minimizar impacto, restaurar operación, prevenir repetición."
    },

    // 55. Enfoque marco NIST
    {
      "profe": true, 
      "unit": "Examen Final", 
      "diff": "medium",
      "q": "¿Qué enfoque promueve el marco NIST en la gestión de la seguridad?",
      "opts": [
        "Enfoque basado en riesgos, flexible y adaptable, con cinco funciones: Identificar, Proteger, Detectar, Responder, Recuperar", 
        "Enfoque punitivo", 
        "Enfoque reactivo", 
        "Enfoque sin estructura"
      ],
      "ans": 0, 
      "exp": "NIST CSF promueve enfoque basado en riesgos, flexible y adaptable. Sus cinco funciones permiten gestionar ciberseguridad de forma integral, continua y alineada con objetivos del negocio."
    },

  ];

 export default preguntas_seguridad_examen;
