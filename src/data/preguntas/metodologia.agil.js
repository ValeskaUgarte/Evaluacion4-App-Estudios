const preguntas_metodologia_agil = [

 {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "easy",
        "q": "¿En qué tres pilares se basa el enfoque empírico de Scrum?",
        "opts": [
            "Planificación, Acción y Revisión", 
            "Análisis, Diseño y Prueba", 
            "Transparencia, Inspección y Adaptación", 
            "Inicio, Desarrollo y Cierre"
        ],
        "ans": 2, 
        "exp": "Scrum se basa en el empirismo, que afirma que el conocimiento proviene de la experiencia. Sus tres pilares son: transparencia (visibilidad del proceso), inspección (revisar el progreso) y adaptación (ajustar lo que no funciona)."
    },
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "easy",
        "q": "¿Cuál es la duración máxima recomendada para un Sprint en Scrum?",
        "opts": [
            "1 semana", 
            "2 semanas", 
            "1 mes", 
            "3 meses"
        ],
        "ans": 2, 
        "exp": "La Guía Scrum establece que los Sprints tienen una duración máxima de un mes (4 semanas). Plazos más largos aumentan la complejidad y el riesgo."
    },
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "medium",
        "q": "¿Cuál de las siguientes opciones describe MEJOR el propósito de la 'Definición de Hecho' (DoD - Definition of Done)?",
        "opts": [
            "Es una lista de tareas que el equipo debe completar durante el Daily Scrum.", 
            "Es un conjunto de criterios acordados que debe cumplir un incremento para ser considerado potencialmente liberable.", 
            "Es un documento que define el horario laboral de los Developers.", 
            "Es una técnica de estimación similar al Planning Poker."
        ],
        "ans": 1, 
        "exp": "La Definición de Hecho (DoD) es un compromiso del equipo. Es una lista de verificación de actividades de calidad (ej. código revisado, pruebas pasan, documentado) que garantiza que el Incremento está completo y es usable."
    },
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "medium",
        "q": "¿Cuál es la responsabilidad PRINCIPAL del Product Owner (PO)?",
        "opts": [
            "Facilitar las reuniones y eliminar impedimentos.", 
            "Asegurar que el código tenga la mejor calidad técnica posible.", 
            "Maximizar el valor del producto resultante del trabajo del equipo de desarrollo.", 
            "Escribir todo el código del proyecto en los primeros sprints."
        ],
        "ans": 2, 
        "exp": "El Product Owner es el responsable de maximizar el valor. Lo logra gestionando el Product Backlog, ordenándolo y definiendo claramente el Objetivo del Producto."
    },
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "hard",
        "q": "Un equipo Scrum está compuesto por 9 Developers, 1 Scrum Master y 1 Product Owner. Según las buenas prácticas, ¿cuál es el principal problema con esta composición?",
        "opts": [
            "El equipo es demasiado pequeño para ser efectivo.", 
            "El Scrum Master no debería ser una persona dedicada.", 
            "El equipo es demasiado grande, lo que dificulta la comunicación y coordinación.", 
            "El Product Owner no puede trabajar con más de 5 Developers."
        ],
        "ans": 2, 
        "exp": "El tamaño recomendado para un equipo Scrum es de 5 a 9 integrantes (contando a los Developers). Un equipo de 11 personas (9+1+1) suele ser demasiado grande y genera ineficiencias comunicacionales, recomendándose dividirlo en dos equipos Scrum que compartan un mismo Product Backlog."
    },

    //  CLASE 2: ACTA DE PROYECTO (PROJECT CHARTER)
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "easy",
        "q": "¿Cuál es el propósito del Acta de Definición del Proyecto (Project Charter) en un proyecto ágil?",
        "opts": [
            "Definir cada una de las historias de usuario del Product Backlog.", 
            "Establecer un punto de partida compartido con la visión, límites y criterios de éxito, sin encorsetar al equipo.", 
            "Servir como un contrato legal detallado para el cliente.", 
            "Reemplazar la necesidad de tener un Product Backlog."
        ],
        "ans": 1, 
        "exp": "El Project Charter en ágil no es un documento pesado. Su función es alinear al equipo y stakeholders desde el inicio, definiendo el 'qué' y el 'por qué' general, dejando el 'cómo' detallado para el backlog."
    },
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "medium",
        "q": "Dentro del Acta de Proyecto, ¿qué significa que los objetivos específicos deben ser SMART?",
        "opts": [
            "Simples, Medibles, Acotados, Rápidos y Totales.", 
            "Específicos, Medibles, Alcanzables, Relevantes y con un Tiempo definido.", 
            "Semanales, Mensuales, Anuales, Revisables y Transferibles.", 
            "Sencillos, Moderados, Adaptables, Reales y Tangibles."
        ],
        "ans": 1, 
        "exp": "SMART es un acrónimo para asegurar que los objetivos sean claros y alcanzables: Specific (Específico), Measurable (Medible), Achievable (Alcanzable), Relevant (Relevante) y Time-bound (con plazo)."
    },
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "hard",
        "q": "En el contexto del Acta de Proyecto, ¿qué es un 'antipatrón' y cuál es un ejemplo de uno?",
        "opts": [
        "Una práctica recomendada por Scrum, como tener un Product Backlog vivo.", 
        "Una mala práctica o solución incorrecta a un problema recurrente. Ejemplo: Crear un acta enciclopédica que intenta reemplazar el Product Backlog.", 
        "Un patrón de diseño de software utilizado para la arquitectura de microservicios.", 
        "Un evento formal de Scrum para revisar el acta."
    ],
        "ans": 1, 
        "exp": "El antipatrón es una solución aparentemente buena a un problema, pero que genera consecuencias negativas. En el caso del Acta, crear un documento hiper-detallado al inicio es un antipatrón porque va contra la filosofía ágil de adaptación continua."
    },

    // CLASE 3: CARTA GANTT Y PLANIFICACIÓN 
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "easy",
        "q": "¿Cuál es la función de la Ruta Crítica en un diagrama de Gantt?",
        "opts": [
            "Indica las tareas que tienen mayor presupuesto asignado.", 
            "Muestra las tareas que puede realizar cualquier recurso del equipo.", 
            "Determina la secuencia de tareas que no pueden retrasarse sin afectar la fecha de finalización del proyecto.", 
            "Es la lista de tareas que el Product Owner ha priorizado como 'Must'."
        ],
        "ans": 2, 
        "exp": "La ruta crítica es la secuencia de tareas dependientes que suman la mayor duración total. Si una tarea de la ruta crítica se retrasa, el proyecto entero se retrasa."
    },
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "medium",
        "q": "Según el material, ¿cómo debe integrarse una Carta Gantt con un marco ágil como Scrum?",
        "opts": [
            "La Gantt sustituye al Sprint Backlog para el día a día del equipo.", 
            "La Gantt se usa a nivel macro para comunicar releases, hitos regulatorios y dependencias externas, sin microgestionar los sprints.", 
            "No se deben usar Gantt en proyectos ágiles bajo ninguna circunstancia.", 
            "La Gantt se usa para planificar cada Daily Scrum en detalle."
        ],
        "ans": 1, 
        "exp": "La Gantt es una herramienta de planificación macro (roadmap). En ágil, se usa para coordinar con áreas externas o para releases largos, pero el trabajo diario se rige por el Sprint Backlog y el tablero Kanban."
    },
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "hard",
        "q": "Aplicando la técnica de estimación PERT (Tres puntos), una tarea tiene un tiempo Optimista (O) de 2 días, un Más Probable (M) de 5 días y un Pesimista (P) de 14 días. ¿Cuál es la duración esperada aproximada?",
        "opts": [
            "5 días", 
            "6 días", 
            "7 días", 
            "8 días"
        ],
        "ans": 1, 
        "exp": "La fórmula PERT es (O + 4M + P) / 6. Por lo tanto: (2 + 4*5 + 14) / 6 = (2 + 20 + 14) / 6 = 36 / 6 = 6 días."
    },

    // CLASE 4: LEVANTAMIENTO DE REQUERIMIENTOS 
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "easy",
        "q": "¿Cuál es la principal diferencia entre un Requerimiento Funcional (FR) y uno No Funcional (NFR)?",
        "opts": [
            "El FR lo pide el cliente, el NFR lo decide el equipo técnico.", 
            "El FR describe QUÉ debe hacer el sistema (ej. calcular impuesto), mientras que el NFR describe CÓMO debe hacerlo o bajo qué condiciones (ej. debe responder en menos de 1 segundo).", 
            "No hay diferencia, son términos sinónimos.", 
            "El FR se escribe en el backlog, el NFR no."],
        "ans": 1, 
        "exp": "Los FR son comportamientos específicos. Los NFR son atributos de calidad o restricciones (rendimiento, seguridad, usabilidad) que el sistema debe cumplir."
    },
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "medium",
        "q": "¿Cuál de las siguientes opciones es un ejemplo de un Criterio de Aceptación bien escrito (usando el estilo Gherkin/BDD)?",
        "opts": [
            "El sistema debe ser rápido.", 
            "Como usuario, quiero login para acceder al sistema.", 
            "Dado que el usuario está en la página de login, Cuando ingresa 'admin' y '1234', Entonces el sistema lo redirige al dashboard.", 
            "Validar que el botón funcione."
        ],
        "ans": 2, 
        "exp": "La opción B es una Historia de Usuario, no un criterio. La opción C usa el formato Given-When-Then, que es claro, verificable y evita ambigüedades."
    },
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "hard",
        "q": "Si un equipo está a punto de iniciar un Sprint con una tecnología desconocida (ej. integrar un SDK biométrico nuevo), ¿qué técnica de las vistas en clase es la MÁS apropiada para reducir la incertidumbre?",
        "opts": [
            "Un Workshop JAD con todos los stakeholders.", 
            "Una encuesta masiva a usuarios finales.", 
            "Un Spike Técnico (Timebox de investigación).", 
            "Un análisis de procesos BPMN."
        ],
        "ans": 2, 
        "exp": "El Spike técnico es una actividad de investigación y prototipado rápido. Su objetivo es aprender lo suficiente sobre un problema técnico incierto para poder estimarlo y planificarlo mejor en el futuro."
    },

    //  CLASE 5: PRODUCT BACKLOG 
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "easy",
        "q": "Según la Scrum Guide 2020, ¿cuál es el 'compromiso' (o meta) del Product Backlog?",
        "opts": [
            "El Sprint Goal", 
            "La Definición de Hecho (DoD)", 
            "El Product Goal (Objetivo del Producto)", 
            "La Velocidad del Equipo"
        ],
        "ans": 2, 
        "exp": "El Product Goal es el compromiso del Product Backlog. Describe un estado futuro deseado del producto y da dirección al equipo sobre por qué está construyendo algo."
    },
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "medium",
        "q": "¿Qué significa el acrónimo INVEST para escribir buenas Historias de Usuario?",
        "opts": [
            "Ideales, Negociables, Valiosas, Estables, Simples y Testeables.", 
            "Independiente, Negociable, Valiosa, Estimable, Small (Pequeña) y Testeable.", 
            "Integrada, Narrativa, Veraz, Eficaz, Sostenible y Técnica.", 
            "Inmediata, Navegable, Visual, Estática y Total."
        ],
        "ans": 1, 
        "exp": "INVEST es una guía para asegurar la calidad de los PBIs. Ayuda a evitar historias dependientes, muy grandes o vagas."
    },
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "hard",
        "q": "Un Product Owner está priorizando el backlog. La Historia A tiene un Costo de Demora (CoD) de 30 y un Tamaño de 10. La Historia B tiene CoD de 20 y Tamaño de 4. Aplicando la fórmula WSJF (Weighted Shortest Job First), ¿cuál debería ir primero y por qué?",
        "opts": [
            "Historia A, porque tiene el CoD más alto.", 
            "Historia B, porque tiene el tamaño más pequeño.", 
            "Historia A, porque su WSJF es 3, mayor que el de B que es 5.", 
            "Historia B, porque su WSJF es 5, mayor que el de A que es 3."
        ],
        "ans": 3, 
        "exp": "WSJF = CoD / Tamaño. A = 30/10 = 3. B = 20/4 = 5. Se prioriza el ítem con WSJF más alto (Historia B) porque entrega más valor por unidad de esfuerzo."
    },

    //  CLASE 6: HERRAMIENTAS COLABORATIVAS 
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "easy",
        "q": "¿Cuál es el objetivo principal de un 'Espacio de Trabajo Colaborativo' en un proyecto Scrum?",
        "opts": [
            "Reemplazar todas las reuniones del equipo.", 
            "Acumular la mayor cantidad de documentos posible.", 
            "Actuar como la 'única fuente de verdad' centralizando el backlog, la comunicación y el seguimiento.", 
            "Servir como un repositorio exclusivo para el Scrum Master."
        ],
        "ans": 2, 
        "exp": "El espacio colaborativo digital busca eliminar la dispersión de información (ej. unos usan email, otros un chat, otros un papel), centralizando el trabajo para que sea transparente a todos."
    },
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "medium",
        "q": "Tu equipo es pequeño (6 personas), recién comienza con Scrum y valora la simplicidad visual por encima de reportes complejos. ¿Qué herramienta de las vistas es la MÁS adecuada para empezar?",
        "opts": [
            "Jira (por su robustez)", 
            "Microsoft Project (por los Gantt)", 
            "Trello (por sus tableros visuales e intuitivos)", 
            "GitLab (por la integración con código)"
        ],
        "ans": 2, 
        "exp": "Trello es conocido por su simplicidad y enfoque Kanban/Scrum ligero. Para equipos pequeños que están aprendiendo, es menos abrumador que Jira o GitLab, que tienen curvas de aprendizaje más altas."
    },
    {
        "profe": true, 
        "unit": "Unidad 2", 
        "diff": "hard",
        "q": "¿Cuál de los siguientes NO es un beneficio de usar un espacio colaborativo digital en un equipo Scrum distribuido?",
        "opts": [
            "Permite comunicación asincrónica, superando husos horarios.", 
            "Reduce la necesidad de transparencia, ya que el tablero es privado.", 
            "Centraliza la documentación y decisiones para consulta histórica.", 
            "Facilita la autogestión de los Developers al ver el flujo de trabajo."
        ],
        "ans": 1, 
        "exp": "La transparencia es un pilar de Scrum. Un espacio colaborativo debe AUMENTAR la transparencia, haciéndolo visible para todos los interesados, no reducirla. La opción 2 describe lo contrario a un beneficio."
    },

      {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "En la técnica de estimación PERT (Tres puntos), una tarea tiene un tiempo Optimista (O) de 2 días, un Más Probable (M) de 5 días y un Pesimista (P) de 14 días. ¿Cuál es la duración esperada aproximada?",
        "opts": [
            "5 días.",
            "6 días.",
            "7 días.",
            "8 días."
        ],
        "ans": 1,
        "exp": "La fórmula PERT es (O + 4M + P) / 6. Por lo tanto: (2 + 4*5 + 14) / 6 = (2 + 20 + 14) / 6 = 36 / 6 = 6 días."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "hard",
        "q": "¿Qué técnica de planificación consiste en reprogramar tareas para eliminar la sobreasignación de recursos, incluso si esto modifica la ruta crítica del proyecto?",
        "opts": [
            "Suavizado de recursos (Resource Smoothing).",
            "Nivelación de recursos (Resource Leveling).",
            "Cadena Crítica (Critical Chain).",
            "Método de la Ruta Crítica (CPM)."
        ],
        "ans": 1,
        "exp": "La Nivelación (Leveling) busca resolver la sobreasignación de recursos, lo que puede extender el plazo del proyecto. El Suavizado (Smoothing) es más ligero y solo usa holguras sin cambiar la fecha de fin."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Cuál de los siguientes es un tipo de dependencia entre tareas en un diagrama de Gantt?",
        "opts": [
            "Fin-Fin (FF).",
            "Inicio-Fin (IF).",
            "Fin-Comienzo (FC).",
            "Dependencia Circular (DC)."
        ],
        "ans": 0,
        "exp": "Los cuatro tipos de dependencias lógicas son: Fin-Inicio (FS), Inicio-Inicio (SS), Fin-Fin (FF) e Inicio-Fin (SF). La opción correcta es Fin-Fin (FF)."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "easy",
        "q": "¿Qué es un hito (milestone) en una Carta Gantt?",
        "opts": [
            "Una tarea que requiere muchos recursos.",
            "Un evento significativo sin duración que marca un logro importante.",
            "La tarea más larga del proyecto.",
            "El presupuesto total asignado al proyecto."
        ],
        "ans": 1,
        "exp": "Un hito es un punto de control que indica la finalización de una fase o la entrega de un producto clave. Se representa como un rombo y tiene duración cero (es un instante en el tiempo)."
    },

    // ==================== CLASE 4: LEVANTAMIENTO DE REQUERIMIENTOS (NUEVAS) ====================
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "easy",
        "q": "¿Cuál es la principal diferencia entre un Requerimiento Funcional (FR) y uno No Funcional (NFR)?",
        "opts": [
            "El FR lo pide el cliente, el NFR lo decide el equipo técnico.",
            "El FR describe QUÉ debe hacer el sistema, mientras que el NFR describe CÓMO debe hacerlo o bajo qué condiciones.",
            "No hay diferencia, son términos sinónimos.",
            "El FR se escribe en el backlog, el NFR no."
        ],
        "ans": 1,
        "exp": "Los FR son comportamientos específicos del sistema. Los NFR son atributos de calidad o restricciones (rendimiento, seguridad, usabilidad) que el sistema debe cumplir."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Cuál de las siguientes opciones es un ejemplo de un Criterio de Aceptación bien escrito (usando el estilo Gherkin/BDD)?",
        "opts": [
            "El sistema debe ser rápido.",
            "Como usuario, quiero login para acceder al sistema.",
            "Dado que el usuario está en la página de login, Cuando ingresa 'admin' y '1234', Entonces el sistema lo redirige al dashboard.",
            "Validar que el botón funcione."
        ],
        "ans": 2,
        "exp": "La opción 2 es una Historia de Usuario, no un criterio. La opción C usa el formato Given-When-Then, que es claro, verificable y automatizable."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "hard",
        "q": "Si un equipo está a punto de iniciar un Sprint con una tecnología desconocida (ej. integrar un SDK biométrico nuevo), ¿qué técnica de las vistas en clase es la MÁS apropiada para reducir la incertidumbre?",
        "opts": [
            "Un Workshop JAD con todos los stakeholders.",
            "Una encuesta masiva a usuarios finales.",
            "Un Spike Técnico (Timebox de investigación).",
            "Un análisis de procesos BPMN."
        ],
        "ans": 2,
        "exp": "El Spike técnico es una actividad de investigación y prototipado rápido con un timebox definido. Su objetivo es aprender lo suficiente sobre un problema técnico incierto para poder estimarlo y planificarlo mejor en el futuro."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Qué técnica de priorización de requerimientos utiliza la fórmula: (Valor de Negocio + Oportunidad + Reducción de Riesgo + Criticidad Temporal) / Esfuerzo?",
        "opts": [
            "MoSCoW.",
            "Kano.",
            "WSJF (Weighted Shortest Job First).",
            "RICE."
        ],
        "ans": 2,
        "exp": "WSJF es una técnica de priorización utilizada en SAFe (Scaled Agile Framework). Calcula el 'Costo de Demora' dividido por el tamaño para priorizar los ítems que entregan más valor más rápido."
    },

    //  CLASE 5: PRODUCT BACKLOG (NUEVAS) 
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "easy",
        "q": "Según la Scrum Guide 2020, ¿cuál es el 'compromiso' (o meta) del Product Backlog?",
        "opts": [
            "El Sprint Goal.",
            "La Definición de Hecho (DoD).",
            "El Product Goal (Objetivo del Producto).",
            "La Velocidad del Equipo."
        ],
        "ans": 2,
        "exp": "El Product Goal es el compromiso del Product Backlog. Describe un estado futuro deseado del producto y da dirección al equipo sobre por qué está construyendo algo."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Qué significa el acrónimo INVEST para escribir buenas Historias de Usuario?",
        "opts": [
            "Ideales, Negociables, Valiosas, Estables, Simples y Testeables.",
            "Independiente, Negociable, Valiosa, Estimable, Small (Pequeña) y Testeable.",
            "Integrada, Narrativa, Veraz, Eficaz, Sostenible y Técnica.",
            "Inmediata, Navegable, Visual, Estática y Total."
        ],
        "ans": 1,
        "exp": "INVEST es una guía para asegurar la calidad de los PBIs. Ayuda a evitar historias dependientes, muy grandes (épicas) o vagas que no se pueden probar."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "hard",
        "q": "Un Product Owner está priorizando el backlog. La Historia A tiene un Costo de Demora (CoD) de 30 y un Tamaño de 10. La Historia B tiene CoD de 20 y Tamaño de 4. Aplicando la fórmula WSJF (Weighted Shortest Job First), ¿cuál debería ir primero y por qué?",
        "opts": [
            "Historia A, porque tiene el CoD más alto.",
            "Historia B, porque tiene el tamaño más pequeño.",
            "Historia A, porque su WSJF es 3, mayor que el de B que es 5.",
            "Historia B, porque su WSJF es 5, mayor que el de A que es 3."
        ],
        "ans": 3,
        "exp": "WSJF = CoD / Tamaño. A = 30/10 = 3. B = 20/4 = 5. Se prioriza el ítem con WSJF más alto (Historia B) porque entrega más valor por unidad de esfuerzo."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Cuál es el objetivo principal del 'Refinamiento del Product Backlog'?",
        "opts": [
            "Añadir todos los requisitos posibles para no olvidar nada.",
            "Descomponer, aclarar y dimensionar los ítems que están más próximos a ejecutarse.",
            "Eliminar todas las historias que no sean 'Must' (obligatorias).",
            "Reemplazar a los Developers en la estimación de tareas."
        ],
        "ans": 1,
        "exp": "El refinamiento es una actividad continua (no un evento formal). Su propósito es mantener el backlog 'listo' para los próximos sprints, asegurando que los PBIs tengan suficiente detalle y sean estimables."
    },

    //  CLASE 6: HERRAMIENTAS COLABORATIVAS (NUEVAS) 
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "easy",
        "q": "¿Cuál es el objetivo principal de un 'Espacio de Trabajo Colaborativo' en un proyecto Scrum?",
        "opts": [
            "Reemplazar todas las reuniones del equipo.",
            "Acumular la mayor cantidad de documentos posible.",
            "Actuar como la 'única fuente de verdad' centralizando el backlog, la comunicación y el seguimiento.",
            "Servir como un repositorio exclusivo para el Scrum Master."
        ],
        "ans": 2,
        "exp": "El espacio colaborativo digital busca eliminar la dispersión de información (ej. unos usan email, otros un chat, otros un papel), centralizando el trabajo para que sea transparente a todos."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "Tu equipo es pequeño (6 personas), recién comienza con Scrum y valora la simplicidad visual por encima de reportes complejos. ¿Qué herramienta de las vistas es la MÁS adecuada para empezar?",
        "opts": [
            "Jira (por su robustez).",
            "Microsoft Project (por los Gantt).",
            "Trello (por sus tableros visuales e intuitivos).",
            "GitLab (por la integración con código)."
        ],
        "ans": 2,
        "exp": "Trello es conocido por su simplicidad y enfoque Kanban/Scrum ligero. Para equipos pequeños que están aprendiendo, es menos abrumador que Jira o GitLab, que tienen curvas de aprendizaje más altas."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "hard",
        "q": "¿Cuál de los siguientes NO es un beneficio de usar un espacio colaborativo digital en un equipo Scrum distribuido?",
        "opts": [
            "Permite comunicación asincrónica, superando husos horarios.",
            "Reduce la necesidad de transparencia, ya que el tablero es privado.",
            "Centraliza la documentación y decisiones para consulta histórica.",
            "Facilita la autogestión de los Developers al ver el flujo de trabajo."
        ],
        "ans": 1,
        "exp": "La transparencia es un pilar de Scrum. Un espacio colaborativo debe AUMENTAR la transparencia, haciéndolo visible para todos los interesados, no reducirla. La opción 2 describe lo contrario a un beneficio."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Qué plataforma colaborativa es especialmente útil para equipos de desarrollo de software porque se integra directamente con el repositorio de código y permite gestionar el backlog desde el mismo entorno?",
        "opts": [
            "Notion.",
            "GitHub Projects.",
            "Miro.",
            "Trello."
        ],
        "ans": 1,
        "exp": "GitHub Projects y GitLab Issues están diseñados para vivir junto al código. Permiten vincular tareas con commits, branches y CI/CD, lo que los hace ideales para equipos de desarrollo."
    },

     {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "easy",
        "q": "¿Cuál es el propósito del Daily Scrum?",
        "opts": [
            "Reportar el estado del proyecto a los stakeholders.",
            "Sincronizar al equipo alrededor del objetivo del sprint y planificar las próximas 24 horas.",
            "Revisar el incremento del producto con los stakeholders.",
            "Mejorar el proceso y el entorno de trabajo del equipo."
        ],
        "ans": 1,
        "exp": "El Daily Scrum es una reunión de 15 minutos para que los Developers inspeccionen el progreso hacia el Sprint Goal y adapten su plan de trabajo diario. No es un reporte de estado para el PO o los stakeholders."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Cuál es la diferencia principal entre la Sprint Review y la Sprint Retrospective?",
        "opts": [
            "No hay diferencia, son sinónimos.",
            "La Review se enfoca en el producto (qué se construyó), mientras que la Retrospective se enfoca en el proceso (cómo se construyó).",
            "La Review es para el equipo interno, la Retrospective es para los stakeholders externos.",
            "La Review se hace al inicio del Sprint, la Retrospective al final."
        ],
        "ans": 1,
        "exp": "La Sprint Review es una reunión colaborativa para inspeccionar el Incremento y adaptar el Product Backlog. La Sprint Retrospective es una reunión interna del equipo para inspeccionar cómo fue el Sprint y planificar mejoras para los próximos."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "hard",
        "q": "¿Cuál es la duración máxima recomendada para una Sprint Planning en un Sprint de 1 mes?",
        "opts": [
            "2 horas.",
            "4 horas.",
            "8 horas.",
            "12 horas."
        ],
        "ans": 2,
        "exp": "La Guía Scrum establece que el Sprint Planning tiene un timebox máximo de 8 horas para un Sprint de 1 mes. Para Sprints más cortos, la duración es proporcional."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Qué tres preguntas responde el Sprint Planning?",
        "opts": [
            "¿Qué hicimos ayer? ¿Qué haremos hoy? ¿Qué impedimentos tenemos?",
            "¿Por qué es valioso este sprint? ¿Qué podemos hacer? ¿Cómo lo haremos?",
            "¿Qué salió bien? ¿Qué salió mal? ¿Qué podemos mejorar?",
            "¿Qué entregamos? ¿Qué feedback recibimos? ¿Qué cambiamos?"
        ],
        "ans": 1,
        "exp": "El Sprint Planning responde tres preguntas: 1) ¿Por qué es valioso este Sprint? (Sprint Goal), 2) ¿Qué podemos hacer? (selección del Product Backlog), 3) ¿Cómo lo haremos? (plan de trabajo)."
    },

    // ==================== CLASE 2: ACTA DE PROYECTO (NUEVAS) ====================
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "easy",
        "q": "¿Quién debe firmar el Acta de Definición del Proyecto para darle legitimidad formal?",
        "opts": [
            "Solo el Product Owner.",
            "El Sponsor y el Product Owner.",
            "Todos los Developers.",
            "El Scrum Master y el equipo completo."
        ],
        "ans": 1,
        "exp": "El Acta requiere la aprobación del Sponsor (quien habilita presupuesto y recursos) y del Product Owner (responsable del valor). Esto otorga autoridad formal para iniciar el proyecto."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Qué se debe documentar en la sección de 'Riesgos Iniciales' del Acta de Proyecto?",
        "opts": [
            "Todos los riesgos técnicos posibles, sin importar su probabilidad.",
            "Entre 5 y 10 riesgos con su Probabilidad/Impacto y una estrategia de respuesta.",
            "Solo los riesgos legales y regulatorios.",
            "No es necesario documentar riesgos en un proyecto ágil."
        ],
        "ans": 1,
        "exp": "La identificación temprana de riesgos (tecnológicos, legales, de datos, etc.) es crítica. Se recomienda priorizar entre 5-10 riesgos, evaluar su probabilidad e impacto, y definir una estrategia de respuesta."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "hard",
        "q": "¿Qué es la matriz RACI y para qué se usa en el Acta de Proyecto?",
        "opts": [
            "Es una matriz de riesgos que clasifica amenazas y oportunidades.",
            "Es una herramienta para definir responsabilidades (Responsable, Aprobador, Consultado, Informado) en decisiones clave.",
            "Es un cronograma de hitos del proyecto.",
            "Es una lista de verificación de la Definición de Hecho (DoD)."
        ],
        "ans": 1,
        "exp": "RACI es un acrónimo de Responsible (Responsable), Accountable (Aprobador/A quien rinde cuentas), Consulted (Consultado) e Informed (Informado). Ayuda a clarificar quién hace qué y quién toma decisiones."
    },

    // ==================== CLASE 3: PLANIFICACIÓN Y GANTT (NUEVAS) ====================
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Qué es la 'holgura total' en la planificación de proyectos?",
        "opts": [
            "El tiempo extra que tiene el equipo para descansar.",
            "El tiempo que una tarea puede retrasarse sin afectar la fecha de finalización del proyecto.",
            "El presupuesto adicional para imprevistos.",
            "La cantidad de recursos no utilizados en el proyecto."
        ],
        "ans": 1,
        "exp": "La holgura total (o floater) es el tiempo que una tarea puede retrasarse sin impactar la fecha de finalización del proyecto. Las tareas en la ruta crítica tienen holgura total = 0."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "hard",
        "q": "¿Qué es la 'planificación por oleadas' (rolling wave planning) y cómo se aplica en entornos ágiles?",
        "opts": [
            "Planificar todo el proyecto en detalle desde el inicio.",
            "Planificar con mayor detalle el corto plazo y dejar el largo plazo con un nivel macro, ajustando a medida que se avanza.",
            "Replanificar todo el proyecto al inicio de cada Sprint.",
            "No planificar nada y dejar que el equipo decida sobre la marcha."
        ],
        "ans": 1,
        "exp": "La planificación por oleadas es una técnica progresiva. En ágil, se detallan los próximos 1-2 Sprints (corto plazo) mientras que las releases futuras se mantienen a nivel de épicas o features, refinándose a medida que se acerca el momento."
    },

    // ==================== CLASE 4: REQUERIMIENTOS Y NFR (NUEVAS) ====================
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "easy",
        "q": "¿Qué son los Requerimientos No Funcionales (NFR) según el modelo ISO/IEC 25010?",
        "opts": [
            "Son funcionalidades opcionales que el sistema puede tener.",
            "Son atributos de calidad como rendimiento, seguridad, usabilidad y mantenibilidad.",
            "Son requisitos que solo aplican a sistemas legacy.",
            "Son historias de usuario que no se han priorizado."
        ],
        "ans": 1,
        "exp": "Los NFR son atributos de calidad que definen cómo debe comportarse el sistema. El modelo ISO/IEC 25010 es el estándar más utilizado para clasificarlos (eficiencia, seguridad, confiabilidad, etc.)."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Qué es un 'Quality Attribute Scenario' (QAS) y para qué sirve?",
        "opts": [
            "Es un escenario de prueba funcional para validar una historia de usuario.",
            "Es una plantilla para capturar NFR de forma verificable: Estímulo → Entorno → Artefacto → Respuesta → Métrica.",
            "Es un tipo de reunión para priorizar requerimientos.",
            "Es una herramienta de estimación similar al Planning Poker."
        ],
        "ans": 1,
        "exp": "El QAS es una técnica para hacer los NFR concretos y medibles. Por ejemplo: 'Estímulo: 200 usuarios concurrentes → Entorno: peak horario → Artefacto: búsqueda → Respuesta: <700ms → Métrica: APM'."
    },

    // ==================== CLASE 5: GESTIÓN DEL BACKLOG (NUEVAS) ====================
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "easy",
        "q": "¿Cuál es la 'única fuente de trabajo' del Scrum Team según la Scrum Guide?",
        "opts": [
            "El Sprint Backlog.",
            "El Product Backlog.",
            "El tablero Kanban del equipo.",
            "La lista de tareas del Scrum Master."
        ],
        "ans": 1,
        "exp": "La Scrum Guide 2020 establece que el Product Backlog es la única fuente de trabajo del Scrum Team. Todos los cambios al producto deben venir a través del Product Backlog."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Qué es una 'Épica' en el contexto del Product Backlog?",
        "opts": [
            "Una historia de usuario muy pequeña y fácil de estimar.",
            "Una historia de usuario grande que aún no está lo suficientemente detallada y debe descomponerse en varias historias más pequeñas.",
            "Un tipo de defecto crítico en el sistema.",
            "Un requerimiento no funcional relacionado con la seguridad."
        ],
        "ans": 1,
        "exp": "Una épica es un PBI de gran tamaño que abarca una funcionalidad amplia. Debe descomponerse en historias de usuario más pequeñas y manejables antes de ser llevada a un Sprint."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "hard",
        "q": "¿Cuál de los siguientes es un 'antipatrón' común en la gestión del Product Backlog?",
        "opts": [
            "Refinar el backlog continuamente durante el Sprint.",
            "Mantener el backlog visible y accesible para todo el equipo.",
            "Usar el backlog como un 'cajón de deseos' sin limpieza ni priorización basada en valor.",
            "Tener siempre 1-2 sprints de ítems bien preparados."
        ],
        "ans": 2,
        "exp": "Un backlog que acumula ideas sin evaluar, sin priorizar y sin refinar se convierte en un 'cajón de deseos'. Esto genera ruido y dificulta la toma de decisiones basada en valor."
    },

    // ==================== CLASE 6: COLABORACIÓN Y HERRAMIENTAS (NUEVAS) ====================
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "easy",
        "q": "¿Cuál es el beneficio de tener un tablero de trabajo (Kanban/Scrum) visible para todo el equipo?",
        "opts": [
            "Permite al Scrum Master controlar a los Developers.",
            "Aumenta la transparencia y permite que el equipo se autogestione.",
            "Reemplaza la necesidad de tener reuniones.",
            "Permite al Product Owner escribir código."
        ],
        "ans": 1,
        "exp": "Un tablero visible (físico o digital) es la herramienta principal de transparencia en Scrum. Permite a todos ver el estado del trabajo, identificar cuellos de botella y fomentar la autogestión del equipo."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Cuáles son las columnas mínimas que debería tener un tablero de trabajo en un equipo Scrum?",
        "opts": [
            "Backlog, En Progreso, En Pruebas, Terminado.",
            "Análisis, Diseño, Desarrollo, Pruebas, Despliegue.",
            "To Do, Doing, Done (con la DoD aplicada).",
            "Planificación, Ejecución, Revisión, Retrospectiva."
        ],
        "ans": 2,
        "exp": "Un tablero Scrum debe reflejar el flujo de trabajo del equipo. Las columnas básicas son To Do (por hacer), Doing (en progreso) y Done (terminado), pero pueden personalizarse según las necesidades del equipo (ej. Code Review, Testing)."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "hard",
        "q": "¿Qué criterio es el MÁS importante al seleccionar una plataforma colaborativa para un equipo Scrum?",
        "opts": [
            "Que tenga la interfaz más bonita.",
            "Que sea la más económica disponible.",
            "Que se adapte al contexto, tamaño del equipo, complejidad del producto y necesidades de integración.",
            "Que sea la misma que usa la competencia."
        ],
        "ans": 2,
        "exp": "No existe una herramienta 'mejor' universal. La elección debe basarse en el contexto específico: tamaño del equipo, complejidad del producto, nivel de integración con otras herramientas (CI/CD, repositorios), presupuesto y cultura organizacional."
    },



    // CLASE 1: ROLES Y RESPONSABILIDADES (NUEVAS) 
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "easy",
        "q": "¿Cuál es la responsabilidad principal del Scrum Master?",
        "opts": [
            "Gestionar el presupuesto del proyecto.",
            "Escribir las historias de usuario del Product Backlog.",
            "Promover el empirismo, eliminar impedimentos y facilitar la mejora continua.",
            "Asegurar que el código sea de alta calidad técnica."
        ],
        "ans": 2,
        "exp": "El Scrum Master es un líder-servidor que facilita la implementación de Scrum. Ayuda al equipo a ser autoorganizado, elimina obstáculos y promueve las prácticas ágiles."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Qué significa que un equipo sea 'cross-functional' (multifuncional) en Scrum?",
        "opts": [
            "Que todos los miembros del equipo tienen exactamente las mismas habilidades.",
            "Que el equipo posee internamente todas las habilidades necesarias para entregar valor sin depender de externos.",
            "Que el equipo trabaja en múltiples proyectos al mismo tiempo.",
            "Que el equipo está compuesto solo por desarrolladores de software."
        ],
        "ans": 1,
        "exp": "Un equipo cross-functional tiene todas las competencias necesarias (análisis, desarrollo, pruebas, UX, etc.) dentro del equipo para entregar un Incremento sin depender de personas externas."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "hard",
        "q": "¿Qué son las competencias 'T-shaped' y por qué son importantes en un equipo Scrum?",
        "opts": [
            "Son habilidades técnicas avanzadas en un solo lenguaje de programación.",
            "Cada persona tiene una especialidad principal (profundidad) y habilidades colaterales (amplitud) que permiten flexibilidad.",
            "Son certificaciones oficiales de Scrum que todo Developer debe tener.",
            "Es una técnica de estimación utilizada en el Sprint Planning."
        ],
        "ans": 1,
        "exp": "La 'T' representa una persona con una especialidad profunda (la barra vertical) y conocimientos generales en otras áreas (la barra horizontal). Esto permite que el equipo sea resiliente y flexible ante ausencias o cambios."
    },

    // CLASE 2: ACTA DE PROYECTO Y GOBERNANZA (NUEVAS) 
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "easy",
        "q": "¿Qué es la 'gobernanza mínima viable' en el contexto del Acta de Proyecto?",
        "opts": [
            "Tener reglas extremadamente detalladas para cada aspecto del proyecto.",
            "Un marco de control ligero que define quién decide qué, cómo se escalan impedimentos y qué restricciones aplican.",
            "Reemplazar al Scrum Master por un comité de control.",
            "Eliminar toda forma de gobernanza para ser completamente ágil."
        ],
        "ans": 1,
        "exp": "La gobernanza mínima viable busca el equilibrio: dar estructura y claridad suficiente para evitar caos, sin caer en burocracia excesiva que limite la agilidad."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Por qué es importante incluir Exclusiones (Out) en el alcance del Acta de Proyecto?",
        "opts": [
            "Para limitar el trabajo del equipo y evitar sobrecarga.",
            "Para gestionar expectativas y evitar que los stakeholders asuman que ciertas funcionalidades están incluidas cuando no es así.",
            "Para definir las tecnologías que NO se utilizarán.",
            "Para reducir el presupuesto del proyecto."
        ],
        "ans": 1,
        "exp": "Las exclusiones son tan importantes como las inclusiones. Ayudan a prevenir el 'scope creep' (crecimiento descontrolado del alcance) y alinean expectativas desde el inicio."
    },

    //  CLASE 3: RECURSOS Y CAPACIDAD 
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "Un equipo de 6 Developers tiene un Sprint de 2 semanas (10 días hábiles). La capacidad efectiva es de 6 horas diarias. ¿Cuál es la capacidad total del equipo para el Sprint?",
        "opts": [
            "180 horas.",
            "240 horas.",
            "360 horas.",
            "480 horas."
        ],
        "ans": 2,
        "exp": "El cálculo es: 6 Developers × 10 días × 6 horas/día = 360 horas totales. Esta capacidad debe considerar el tiempo para ceremonias (Planning, Daily, Review, Retrospective) y soporte."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "hard",
        "q": "¿Qué porcentaje de la capacidad del Sprint se recomienda reservar para deuda técnica y mejoras?",
        "opts": [
            "0-5%.",
            "10-15%.",
            "25-30%.",
            "40-50%."
        ],
        "ans": 1,
        "exp": "La práctica recomendada es reservar entre un 10% y 15% de la capacidad del Sprint para abordar deuda técnica, refactorizaciones y mejoras de infraestructura, evitando así la acumulación de problemas técnicos."
    },

    // CLASE 4: ELICITACIÓN Y TÉCNICAS (NUEVAS) 
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "easy",
        "q": "¿Qué técnica de elicitación consiste en observar directamente cómo los usuarios realizan su trabajo en su entorno natural?",
        "opts": [
            "Entrevista estructurada.",
            "Shadowing u observación contextual.",
            "Workshop JAD.",
            "Encuesta masiva."
        ],
        "ans": 1,
        "exp": "El shadowing permite descubrir tareas tácitas, restricciones de contexto y 'workarounds' que los usuarios ya han desarrollado, y que no se revelan en entrevistas formales."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Qué es la técnica de los '5 Whys' y para qué se utiliza en el levantamiento de requerimientos?",
        "opts": [
            "Es una técnica de estimación para calcular la duración de las tareas.",
            "Es un método para profundizar en la causa raíz de una necesidad o problema, preguntando 'por qué' repetidamente.",
            "Es una herramienta de priorización para decidir qué historias hacer primero.",
            "Es un formato de reunión para la Sprint Retrospective."
        ],
        "ans": 1,
        "exp": "Los '5 Whys' es una técnica de indagación que ayuda a ir más allá de los síntomas para entender la causa subyacente de una necesidad o problema del usuario."
    },

    //  CLASE 5: MÉTRICAS Y ESTIMACIÓN (NUEVAS) 
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "easy",
        "q": "¿Qué es la 'Velocidad' (Velocity) en Scrum?",
        "opts": [
            "La rapidez con la que el equipo escribe código.",
            "El número promedio de Story Points que el equipo completa por Sprint.",
            "La cantidad de horas trabajadas por el equipo en un Sprint.",
            "El tiempo que tarda una historia desde que se crea hasta que se entrega."
        ],
        "ans": 1,
        "exp": "La Velocidad es una métrica de previsibilidad. Se calcula como el promedio de Story Points completados en los últimos Sprints. Ayuda al equipo a planificar cuánto trabajo pueden comprometer en futuros Sprints."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Qué es un 'Burndown Chart' y qué muestra?",
        "opts": [
            "La cantidad de trabajo completado acumulado a lo largo del tiempo.",
            "El trabajo pendiente en el Sprint, mostrando cómo disminuye día a día.",
            "Los defectos encontrados durante las pruebas.",
            "La velocidad promedio del equipo por Sprint."
        ],
        "ans": 1,
        "exp": "El Burndown Chart muestra la evolución del trabajo restante del Sprint. Idealmente, la línea desciende hasta cero al final del Sprint. Ayuda a visualizar si el equipo está en el camino correcto."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "hard",
        "q": "¿Cuál es la diferencia entre Story Points y horas en la estimación ágil?",
        "opts": [
            "No hay diferencia, son intercambiables.",
            "Los Story Points miden esfuerzo relativo (complejidad, riesgo, incertidumbre), mientras que las horas miden tiempo absoluto.",
            "Las horas son más precisas que los Story Points.",
            "Los Story Points solo los usa el Product Owner, las horas solo los Developers."
        ],
        "ans": 1,
        "exp": "Los Story Points son una medida relativa de esfuerzo que combina complejidad, cantidad de trabajo y riesgo. Ayudan a evitar el 'micro-management' y son más estables que las horas, que pueden variar según la persona."
    },

    //  CLASE 6: HERRAMIENTAS Y FLUJO (NUEVAS) 
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "easy",
        "q": "¿Qué flujo mínimo debe soportar una plataforma colaborativa para un equipo Scrum?",
        "opts": [
            "Representar el Product Backlog, permitir crear un Sprint Backlog, dar visibilidad al progreso y adjuntar documentación.",
            "Generar reportes financieros automáticos.",
            "Realizar videollamadas ilimitadas.",
            "Gestionar recursos humanos y nómina del equipo."
        ],
        "ans": 0,
        "exp": "Las funcionalidades mínimas son: gestión del Product Backlog, planificación de Sprints, tablero visual del flujo de trabajo, y capacidad de adjuntar documentación y criterios de aceptación."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "medium",
        "q": "¿Por qué es importante tener límites WIP (Work In Progress) en el tablero de trabajo?",
        "opts": [
            "Para limitar la cantidad de personas en el equipo.",
            "Para evitar la multitarea excesiva y mejorar el flujo de trabajo.",
            "Para reducir el número de historias en el Product Backlog.",
            "Para que el Product Owner pueda controlar mejor al equipo."
        ],
        "ans": 1,
        "exp": "Los límites WIP evitan que el equipo tenga demasiadas tareas 'en progreso' al mismo tiempo, lo que reduce el cambio de contexto, mejora el enfoque y acelera la finalización de las tareas."
    },
    {
        "profe": true,
        "unit": "Unidad 2",
        "diff": "hard",
        "q": "¿Cuál es la diferencia entre una herramienta de gestión de proyectos y un espacio de trabajo colaborativo en el contexto ágil?",
        "opts": [
            "No hay diferencia, son lo mismo.",
            "La herramienta de gestión se enfoca en control y reportes; el espacio colaborativo se enfoca en comunicación, transparencia y trabajo en equipo.",
            "El espacio colaborativo solo se usa para documentación, no para tareas.",
            "La herramienta de gestión es para el PO, el espacio colaborativo para los Developers."
        ],
        "ans": 1,
        "exp": "Aunque pueden solaparse, las herramientas de gestión (ej. MS Project) suelen ser más jerárquicas y de control. Los espacios colaborativos (ej. Miro, Trello) priorizan la visibilidad, la interacción y la autogestión del equipo."
    },

     {
        "profe": false,
        "unit": "SQL - Subconsultas Avanzadas",
        "diff": "hard",
        "q": "Escribe una consulta que muestre los empleados cuyo salario es mayor al salario promedio de TODOS los empleados, y que trabajen en departamentos con más de 5 empleados.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: empleados</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">salario</span> DECIMAL(10,2),<br>
<span style="color:#9cdcfe;">departamento_id</span> INT
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu consulta SQL aquí..."></textarea>
</div>`,
        "opts": [
            "SELECT e.* FROM empleados e WHERE e.salario > (SELECT AVG(salario) FROM empleados) AND e.departamento_id IN (SELECT departamento_id FROM empleados GROUP BY departamento_id HAVING COUNT(*) > 5);",
            "SELECT e.* FROM empleados e JOIN (SELECT departamento_id, COUNT(*) as total FROM empleados GROUP BY departamento_id HAVING COUNT(*) > 5) d ON e.departamento_id = d.departamento_id WHERE e.salario > (SELECT AVG(salario) FROM empleados);",
            "SELECT e.*, d.total FROM empleados e JOIN (SELECT departamento_id, COUNT(*) as total FROM empleados GROUP BY departamento_id HAVING COUNT(*) > 5) d ON e.departamento_id = d.departamento_id WHERE e.salario > (SELECT AVG(salario) FROM empleados);",
            "Todas las anteriores son correctas."
        ],
        "ans": 3,
        "exp": "Las tres opciones son válidas: A) usa subconsulta con IN, B) y C) usan JOIN con subconsulta. Todas cumplen: 1) Filtran por salario > promedio general, 2) Filtran por departamentos con >5 empleados. La C añade el total como columna extra."
    },

    // ==================== SQL - VISTAS (VIEWS) ====================
    {
        "profe": false,
        "unit": "SQL - Vistas (Views)",
        "diff": "medium",
        "q": "Crea una vista llamada 'reporte_ventas' que muestre: año, mes, total_ventas y cantidad_pedidos, agrupando por año y mes.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: pedidos</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">fecha</span> DATE,<br>
<span style="color:#9cdcfe;">monto</span> DECIMAL(10,2),<br>
<span style="color:#9cdcfe;">cliente_id</span> INT
</div>
<textarea style="width:100%;height:100px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu comando CREATE VIEW aquí..."></textarea>
</div>`,
        "opts": [
            "CREATE VIEW reporte_ventas AS SELECT YEAR(fecha) AS año, MONTH(fecha) AS mes, SUM(monto) AS total_ventas, COUNT(*) AS cantidad_pedidos FROM pedidos GROUP BY YEAR(fecha), MONTH(fecha) ORDER BY año, mes;",
            "CREATE VIEW reporte_ventas AS SELECT YEAR(fecha), MONTH(fecha), SUM(monto), COUNT(*) FROM pedidos GROUP BY YEAR(fecha), MONTH(fecha);",
            "CREATE VIEW reporte_ventas AS SELECT EXTRACT(YEAR FROM fecha) AS año, EXTRACT(MONTH FROM fecha) AS mes, SUM(monto) AS total_ventas, COUNT(id) AS cantidad_pedidos FROM pedidos GROUP BY EXTRACT(YEAR FROM fecha), EXTRACT(MONTH FROM fecha);",
            "CREATE OR REPLACE VIEW reporte_ventas AS SELECT DATE_FORMAT(fecha, '%Y-%m') AS mes, SUM(monto) AS total_ventas, COUNT(*) AS cantidad_pedidos FROM pedidos GROUP BY DATE_FORMAT(fecha, '%Y-%m');"
        ],
        "ans": 0,
        "exp": "La opción A es la más clara y estándar: usa YEAR() y MONTH() (funciones comunes en MySQL y SQL Server), asigna alias descriptivos, y añade ORDER BY. La B no tiene alias. La C usa EXTRACT (más estándar ANSI SQL). La D usa DATE_FORMAT (MySQL) pero solo muestra mes completo. Todas son válidas según el motor SQL, pero A es la mejor práctica."
    },

    // ==================== SQL - TRANSACCIONES ====================
    {
        "profe": false,
        "unit": "SQL - Transacciones y ACID",
        "diff": "hard",
        "q": "Escribe un bloque de transacción que: 1) Transfiera $500 de la cuenta A a la cuenta B, 2) Verifique que la cuenta A tenga saldo suficiente antes de transferir, 3) Haga rollback si hay error.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: cuentas</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">saldo</span> DECIMAL(10,2)<br><br>
<strong style="color:#569cd6;">Cuenta A: id = 1, saldo = 1000</strong><br>
<strong style="color:#569cd6;">Cuenta B: id = 2, saldo = 500</strong>
</div>
<textarea style="width:100%;height:140px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu transacción SQL aquí..."></textarea>
</div>`,
        "opts": [
            "START TRANSACTION; UPDATE cuentas SET saldo = saldo - 500 WHERE id = 1 AND saldo >= 500; UPDATE cuentas SET saldo = saldo + 500 WHERE id = 2; COMMIT;",
            "START TRANSACTION; SELECT saldo INTO @saldo FROM cuentas WHERE id = 1; IF @saldo >= 500 THEN UPDATE cuentas SET saldo = saldo - 500 WHERE id = 1; UPDATE cuentas SET saldo = saldo + 500 WHERE id = 2; COMMIT; ELSE ROLLBACK; END IF;",
            "BEGIN; UPDATE cuentas SET saldo = saldo - 500 WHERE id = 1; UPDATE cuentas SET saldo = saldo + 500 WHERE id = 2; COMMIT;",
            "START TRANSACTION; UPDATE cuentas SET saldo = saldo - 500 WHERE id = 1 AND saldo >= 500; UPDATE cuentas SET saldo = saldo + 500 WHERE id = 2; IF ROW_COUNT() > 0 THEN COMMIT; ELSE ROLLBACK; END IF;"
        ],
        "ans": 3,
        "exp": "La opción D es la más robusta: 1) START TRANSACTION, 2) UPDATE con condición AND saldo >= 500 (solo afecta si hay saldo), 3) ROW_COUNT() verifica si se afectó alguna fila, 4) COMMIT si se afectó, ROLLBACK si no. Las opciones A y C no verifican error. La B es válida pero requiere DECLARE/IF (solo en procedimientos)."
    },

    // ==================== SQL - TRIGGERS ====================
    {
        "profe": false,
        "unit": "SQL - Triggers",
        "diff": "hard",
        "q": "Crea un trigger que, al insertar un nuevo pedido, actualice automáticamente el stock de la tabla 'productos' restando la cantidad vendida.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: pedidos</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">producto_id</span> INT,<br>
<span style="color:#9cdcfe;">cantidad</span> INT,<br>
<span style="color:#9cdcfe;">fecha</span> DATE<br><br>
<strong style="color:#569cd6;">Tabla: productos</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(100),<br>
<span style="color:#9cdcfe;">stock</span> INT
</div>
<textarea style="width:100%;height:140px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu trigger SQL aquí..."></textarea>
</div>`,
        "opts": [
            "CREATE TRIGGER actualizar_stock AFTER INSERT ON pedidos FOR EACH ROW BEGIN UPDATE productos SET stock = stock - NEW.cantidad WHERE id = NEW.producto_id; END;",
            "CREATE TRIGGER actualizar_stock BEFORE INSERT ON pedidos FOR EACH ROW BEGIN UPDATE productos SET stock = stock - NEW.cantidad WHERE id = NEW.producto_id; END;",
            "CREATE TRIGGER actualizar_stock AFTER INSERT ON pedidos BEGIN UPDATE productos SET stock = stock - (SELECT cantidad FROM pedidos WHERE id = NEW.id) WHERE id = NEW.producto_id; END;",
            "CREATE TRIGGER actualizar_stock AFTER INSERT ON pedidos FOR EACH ROW UPDATE productos SET stock = stock - NEW.cantidad WHERE id = NEW.producto_id;"
        ],
        "ans": 0,
        "exp": "La opción A es correcta: AFTER INSERT FOR EACH ROW, usa NEW.cantidad y NEW.producto_id. La B (BEFORE) también funcionaría pero no valida stock negativo. La C tiene una subconsulta innecesaria. La D falta END; y BEGIN/END. En MySQL, el trigger debe tener BEGIN...END para múltiples declaraciones."
    },

    // ==================== BASH - VARIABLES Y CONDICIONALES ====================
    {
        "profe": false,
        "unit": "Bash - Variables y Condicionales",
        "diff": "medium",
        "q": "Escribe un script que reciba un número como argumento y determine si es par o impar, mostrando el resultado.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Requisitos:</strong><br>
• Recibir número como argumento ($1)<br>
• Validar que sea un número (no texto)<br>
• Mostrar: "El número X es par" o "El número X es impar"
</div>
<textarea style="width:100%;height:100px;font-family:monospace;background:#1e1e1e;color:#00ff00;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu script bash aquí..."></textarea>
</div>`,
        "opts": [
            "#!/bin/bash\nif [[ $1 =~ ^[0-9]+$ ]]; then\n  if [ $(( $1 % 2 )) -eq 0 ]; then\n    echo \"El número $1 es par\"\n  else\n    echo \"El número $1 es impar\"\n  fi\nelse\n  echo \"Error: ingresa un número válido\"\nfi",
            "#!/bin/bash\nif [ $1 -gt 0 ]; then\n  if [ $(( $1 % 2 )) == 0 ]; then echo \"par\"; else echo \"impar\"; fi\nelse echo \"Error\"; fi",
            "#!/bin/bash\nif [[ $1 =~ ^[0-9]+$ ]]; then\n  if [ $(( $1 / 2 )) -eq $(( $1 / 2 )) ]; then echo \"par\"; else echo \"impar\"; fi\nfi",
            "#!/bin/bash\nif [ -z $1 ]; then echo \"Falta argumento\"; else\n  if [ $(expr $1 % 2) -eq 0 ]; then echo \"par\"; else echo \"impar\"; fi\nfi"
        ],
        "ans": 0,
        "exp": "La opción A es la mejor práctica: 1) Validación con regex [[ $1 =~ ^[0-9]+$ ]], 2) Cálculo con $(( $1 % 2 )), 3) Comparación con -eq, 4) Mensajes claros. La opción B falla si el argumento es texto. La opción C es incorrecta. La opción D no valida el argumento correctamente."
    },

    // ==================== BASH - MANEJO DE ARCHIVOS ====================
    {
        "profe": false,
        "unit": "Bash - Manejo de Archivos",
        "diff": "medium",
        "q": "Escribe un script que: 1) Cree un directorio 'backup' si no existe, 2) Copie todos los archivos .txt del directorio actual al backup, 3) Los comprima en un archivo 'backup.tar.gz'.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Requisitos:</strong><br>
• Crear carpeta 'backup' si no existe<br>
• Copiar todos los .txt al backup<br>
• Comprimir el backup en 'backup.tar.gz'<br>
• Mostrar mensaje de éxito con cantidad de archivos copiados
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#00ff00;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu script bash aquí..."></textarea>
</div>`,
        "opts": [
            "#!/bin/bash\nmkdir -p backup\ncount=$(cp -v *.txt backup/ 2>/dev/null | wc -l)\ntar -czf backup.tar.gz backup/\necho \"Backup creado con $count archivos\"",
            "#!/bin/bash\nif [ ! -d backup ]; then mkdir backup; fi\ncp *.txt backup/\ntar -czf backup.tar.gz backup\necho \"Backup completado\"",
            "#!/bin/bash\nmkdir backup 2>/dev/null\ncp *.txt backup/ 2>/dev/null\nif [ $? -eq 0 ]; then tar -czf backup.tar.gz backup/; echo \"Backup exitoso\"; else echo \"No hay archivos txt\"; fi",
            "#!/bin/bash\n[ -d backup ] || mkdir backup\nfind . -maxdepth 1 -name '*.txt' -exec cp {} backup/ \\; && tar -czf backup.tar.gz backup/ && echo \"Backup completado\""
        ],
        "ans": 0,
        "exp": "La opción A es la más completa: 1) mkdir -p (crea con padres si no existe), 2) cp -v y wc -l para contar los archivos copiados (el 2>/dev/null oculta errores si no hay .txt), 3) tar -czf para comprimir, 4) Muestra el contador. Las otras opciones no cuentan los archivos ni manejan bien los errores de cp."
    },

    // ==================== PYTHON - PROGRAMACIÓN ORIENTADA A OBJETOS ====================
    {
        "profe": false,
        "unit": "Python - POO (Programación Orientada a Objetos)",
        "diff": "hard",
        "q": "Crea una clase 'Empleado' con: 1) Atributos: nombre, apellido, salario_base, 2) Método: calcular_salario() que retorne salario_base + bonificación (10% del salario base), 3) Método __str__ que muestre la información del empleado.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Requisitos:</strong><br>
• Clase Empleado<br>
• Atributos: nombre, apellido, salario_base (inicializar en __init__)<br>
• Método: calcular_salario() → salario_base + (salario_base * 0.10)<br>
• Método __str__ → "Nombre Apellido - Salario: $XXX"
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu clase Python aquí..."></textarea>
</div>`,
        "opts": [
            "class Empleado:\n    def __init__(self, nombre, apellido, salario_base):\n        self.nombre = nombre\n        self.apellido = apellido\n        self.salario_base = salario_base\n    def calcular_salario(self):\n        return self.salario_base + (self.salario_base * 0.10)\n    def __str__(self):\n        return f\"{self.nombre} {self.apellido} - Salario: ${self.calcular_salario():.2f}\"",
            "class Empleado:\n    def __init__(self, nombre, apellido, salario_base):\n        self.nombre = nombre\n        self.apellido = apellido\n        self.salario_base = salario_base\n    def calcular_salario(self):\n        return self.salario_base * 1.10\n    def __str__(self):\n        return f\"{self.nombre} {self.apellido} - Salario: ${self.salario_base}\"",
            "class Empleado:\n    def __init__(self, nombre, apellido, salario):\n        self.nombre = nombre\n        self.apellido = apellido\n        self.salario_base = salario\n    def calcular_salario(self, bonificacion):\n        return self.salario_base + bonificacion",
            "def Empleado(nombre, apellido, salario_base):\n    return {'nombre': nombre, 'apellido': apellido, 'salario': salario_base * 1.10}"
        ],
        "ans": 0,
        "exp": "La opción A es la correcta: 1) __init__ con los tres atributos, 2) calcular_salario() usa self.salario_base * 0.10, 3) __str__ usa f-string con el método. La B muestra salario_base en __str__ (incorrecto). La C requiere bonificación como parámetro (no cumple). La D es una función, no una clase."
    },

    // ==================== PYTHON - LISTAS Y COMPRENSIÓN ====================
    {
        "profe": false,
        "unit": "Python - Listas y Comprensión",
        "diff": "medium",
        "q": "Dada una lista de números, crea una nueva lista que contenga solo los números pares elevados al cuadrado.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Lista original:</strong><br>
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]<br><br>
<strong style="color:#569cd6;">Resultado esperado:</strong><br>
[4, 16, 36, 64, 100]
</div>
<textarea style="width:100%;height:80px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu código Python aquí..."></textarea>
</div>`,
        "opts": [
            "pares_cuadrados = [x**2 for x in numeros if x % 2 == 0]",
            "pares_cuadrados = []\nfor x in numeros:\n    if x % 2 == 0:\n        pares_cuadrados.append(x**2)",
            "pares_cuadrados = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, numeros)))",
            "Todas las anteriores son correctas."
        ],
        "ans": 3,
        "exp": "Las tres opciones son válidas y producen el mismo resultado: 1) Comprensión de listas (Pythonic), 2) Bucle tradicional, 3) map() y filter() con lambda. La comprensión de listas (opción A) es la más recomendada por su claridad y eficiencia."
    },

    // ==================== PYTHON - MANEJO DE EXCEPCIONES ====================
    {
        "profe": false,
        "unit": "Python - Manejo de Excepciones",
        "diff": "medium",
        "q": "Escribe un bloque de código que: 1) Solicite un número al usuario, 2) Convierta a entero, 3) Muestre el número dividido por 10, 4) Maneje ValueError si no es un número y ZeroDivisionError si el número es 0.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Requisitos:</strong><br>
• Usar try/except<br>
• Manejar ValueError (entrada no numérica)<br>
• Manejar ZeroDivisionError (número 0)<br>
• Mostrar mensajes de error específicos
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu código Python aquí..."></textarea>
</div>`,
        "opts": [
            "try:\n    num = int(input('Ingresa un número: '))\n    print(f'Resultado: {num / 10}')\nexcept ValueError:\n    print('Error: Debes ingresar un número válido')\nexcept ZeroDivisionError:\n    print('Error: No se puede dividir por 0')",
            "try:\n    num = int(input('Ingresa un número: '))\n    if num == 0:\n        raise ZeroDivisionError\n    print(f'Resultado: {num / 10}')\nexcept Exception as e:\n    print(f'Error: {e}')",
            "try:\n    num = float(input('Ingresa un número: '))\n    print(num/10)\nexcept:\n    print('Error')",
            "num = input('Ingresa un número: ')\nif num.isdigit():\n    num = int(num)\n    if num != 0:\n        print(num/10)"
        ],
        "ans": 0,
        "exp": "La opción A es la correcta: 1) Try con conversión a int, 2) Except específico para ValueError, 3) Except específico para ZeroDivisionError (cuando num=0, num/10 lanza ZeroDivisionError). La B usa raise pero no maneja específicamente los errores. La C usa except sin especificar (mala práctica). La D no usa try/except."
    },

    // ==================== GIT - COMANDOS BÁSICOS ====================
    {
        "profe": false,
        "unit": "Git - Control de Versiones",
        "diff": "easy",
        "q": "Ordena los siguientes comandos Git para crear un repositorio local y hacer el primer commit.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Comandos desordenados:</strong><br>
1. git add .<br>
2. git commit -m "primer commit"<br>
3. git init<br>
4. git status<br><br>
<strong style="color:#569cd6;">Ordena las operaciones:</strong>
</div>
<div style="display:grid;grid-template-columns:auto 1fr;gap:8px;margin:10px 0;">
<span>Orden correcto:</span>
<input style="font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Ej: 3,1,4,2">
</div>
</div>`,
        "opts": [
            "3, 1, 4, 2",
            "1, 3, 4, 2",
            "3, 4, 1, 2",
            "3, 1, 2, 4"
        ],
        "ans": 0,
        "exp": "El orden correcto es: 1) git init (inicializa el repositorio), 2) git add . (agrega archivos al staging), 3) git status (opcional, verifica el estado), 4) git commit -m (guarda los cambios en el repositorio). La opción 3,1,4,2 es la secuencia lógica."
    },

    // ==================== GIT - RAMAS Y FUSIÓN ====================
    {
        "profe": false,
        "unit": "Git - Ramas y Fusión (Branches & Merge)",
        "diff": "medium",
        "q": "Tienes una rama 'feature' con cambios y quieres integrarlos a 'main'. Escribe los pasos y comandos para hacerlo de forma segura.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Escenario:</strong><br>
• Estás en la rama 'feature'<br>
• Quieres fusionar con 'main'<br>
• Debes asegurar que 'main' esté actualizado<br>
• Sin conflictos
</div>
<textarea style="width:100%;height:100px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe los comandos Git aquí..."></textarea>
</div>`,
        "opts": [
            "git checkout main\ngit pull origin main\ngit checkout feature\ngit merge main\ngit checkout main\ngit merge feature\ngit push origin main",
            "git merge feature main",
            "git checkout main\ngit merge feature\nif [ $? -eq 0 ]; then git push origin main; else git merge --abort; fi",
            "git checkout main\ngit pull origin main\ngit merge --no-ff feature\ngit push origin main"
        ],
        "ans": 0,
        "exp": "El procedimiento correcto: 1) Cambiar a main, 2) Traer cambios remotos (pull), 3) Volver a feature, 4) Fusionar main en feature (actualiza feature con main), 5) Volver a main, 6) Fusionar feature en main, 7) Subir los cambios. La opción D es correcta para 'merge --no-ff' (mantiene historial), pero la A es la más completa y segura."
    },

    // ==================== GIT - RESOLUCIÓN DE CONFLICTOS ====================
    {
        "profe": false,
        "unit": "Git - Resolución de Conflictos",
        "diff": "hard",
        "q": "Explica paso a paso cómo resolver un conflicto de fusión en Git, asumiendo que ambas ramas modificaron el mismo archivo 'app.py'.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Escenario:</strong><br>
git checkout feature<br>
git merge main<br>
CONFLICT (content): Merge conflict in app.py<br><br>
<strong style="color:#569cd6;">Describe los pasos a seguir:</strong>
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe los pasos aquí..."></textarea>
</div>`,
        "opts": [
            "1. Abrir app.py y resolver los conflictos (<<<<<<<, =======, >>>>>>>)\n2. Guardar el archivo\n3. git add app.py\n4. git commit -m 'resolve conflict'\n5. git push origin feature",
            "1. git mergetool\n2. Elegir la versión a mantener\n3. git add .\n4. git commit -m 'merge'\n5. git push origin feature",
            "1. Abrir app.py y resolver conflictos\n2. git add app.py\n3. git commit --no-edit\n4. git push origin feature",
            "Todas las anteriores son correctas dependiendo del flujo de trabajo."
        ],
        "ans": 0,
        "exp": "La opción A es la más completa: 1) Abrir el archivo conflictivo, 2) Editar manualmente (o usar mergetool), 3) Hacer git add para marcar como resuelto, 4) Hacer commit, 5) Push. La opción B es válida si se usa git mergetool. La C es válida si se usa --no-edit. Todas son correctas, pero A describe el proceso manual estándar."
    },

    // ==================== MONGODB - QUERIES BÁSICAS ====================
    {
        "profe": false,
        "unit": "MongoDB - Consultas Básicas",
        "diff": "medium",
        "q": "Dada la colección 'usuarios', escribe una consulta para encontrar todos los usuarios mayores de 25 años, mostrando solo nombre y email, ordenados por edad descendente.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Colección: usuarios</strong><br>
{<br>
  &nbsp;&nbsp;"_id": ObjectId("..."),<br>
  &nbsp;&nbsp;"nombre": "Ana",<br>
  &nbsp;&nbsp;"email": "ana@mail.com",<br>
  &nbsp;&nbsp;"edad": 30<br>
}
</div>
<textarea style="width:100%;height:100px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu consulta MongoDB aquí..."></textarea>
</div>`,
        "opts": [
            "db.usuarios.find({ edad: { $gt: 25 } }, { nombre: 1, email: 1, _id: 0 }).sort({ edad: -1 })",
            "db.usuarios.find({ edad: { $gte: 25 } }, { nombre: 1, email: 1 }).sort({ edad: -1 })",
            "db.usuarios.find({ edad: { $gt: 25 } }, { nombre: 1, email: 1, _id: 0 }).sort({ edad: 1 })",
            "db.usuarios.find({ $gt: { edad: 25 } }, { nombre: 1, email: 1 })"
        ],
        "ans": 0,
        "exp": "La opción A es la correcta: 1) $gt para mayor que 25, 2) Proyección con { nombre: 1, email: 1, _id: 0 } (excluye _id), 3) sort({ edad: -1 }) para descendente. La B usa $gte (incluye 25). La C usa sort ascendente. La D tiene sintaxis incorrecta."
    },

    // ==================== MONGODB - AGREGACIONES ====================
    {
        "profe": false,
        "unit": "MongoDB - Pipeline de Agregación",
        "diff": "hard",
        "q": "Escribe un pipeline de agregación que: 1) Agrupe pedidos por producto, 2) Calcule el total de ventas por producto, 3) Muestre solo los productos con más de 100 unidades vendidas, 4) Ordene descendente por total.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Colección: pedidos</strong><br>
{<br>
  &nbsp;&nbsp;"_id": ObjectId("..."),<br>
  &nbsp;&nbsp;"producto": "Laptop",<br>
  &nbsp;&nbsp;"cantidad": 5,<br>
  &nbsp;&nbsp;"precio": 1000<br>
}
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu pipeline de agregación aquí..."></textarea>
</div>`,
        "opts": [
            "db.pedidos.aggregate([\n  { $group: { _id: \"$producto\", total: { $sum: \"$cantidad\" } } },\n  { $match: { total: { $gt: 100 } } },\n  { $sort: { total: -1 } }\n])",
            "db.pedidos.aggregate([\n  { $group: { _id: \"$producto\", total: { $sum: \"$cantidad\" } } },\n  { $match: { total: { $gte: 100 } } },\n  { $sort: { total: -1 } }\n])",
            "db.pedidos.aggregate([\n  { $match: { cantidad: { $gt: 100 } } },\n  { $group: { _id: \"$producto\", total: { $sum: \"$cantidad\" } } },\n  { $sort: { total: -1 } }\n])",
            "db.pedidos.aggregate([\n  { $group: { _id: \"$producto\", total: { $sum: \"$cantidad\" } } },\n  { $sort: { total: -1 } },\n  { $limit: 10 }\n])"
        ],
        "ans": 0,
        "exp": "La opción A es la correcta: 1) $group agrupa y suma, 2) $match filtra por total > 100, 3) $sort ordena descendente. La B usa $gte (incluye 100). La C filtra antes de agrupar (incorrecto). La D no tiene $match, solo limit."
    },

    // ==================== MONGODB - ÍNDICES ====================
    {
        "profe": false,
        "unit": "MongoDB - Índices y Rendimiento",
        "diff": "medium",
        "q": "Dada una colección 'ventas' con más de 1 millón de registros, ¿qué índice crearías para optimizar: db.ventas.find({ fecha: { $gte: ISODate('2025-01-01'), $lte: ISODate('2025-12-31') }, cliente_id: 12345 })",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Colección: ventas</strong><br>
{<br>
  &nbsp;&nbsp;"_id": ObjectId("..."),<br>
  &nbsp;&nbsp;"fecha": ISODate("2025-01-15"),<br>
  &nbsp;&nbsp;"cliente_id": 12345,<br>
  &nbsp;&nbsp;"monto": 15000<br>
}
</div>
<textarea style="width:100%;height:80px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu comando createIndex aquí..."></textarea>
</div>`,
        "opts": [
            "db.ventas.createIndex({ fecha: 1, cliente_id: 1 })",
            "db.ventas.createIndex({ cliente_id: 1, fecha: 1 })",
            "db.ventas.createIndex({ fecha: 1 })",
            "db.ventas.createIndex({ cliente_id: 1 })"
        ],
        "ans": 0,
        "exp": "El índice compuesto { fecha: 1, cliente_id: 1 } es el más eficiente: 1) fecha va primero porque es un rango ($gte, $lte), 2) cliente_id luego para el filtro exacto. En MongoDB, el orden importa para consultas con rango."
    },

    // ==================== DOCKER - COMANDOS BÁSICOS ====================
    {
        "profe": false,
        "unit": "Docker - Comandos Básicos",
        "diff": "easy",
        "q": "Ordena los siguientes comandos Docker para: 1) Crear un Dockerfile, 2) Construir una imagen, 3) Ejecutar un contenedor, 4) Verificar que está corriendo.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Comandos desordenados:</strong><br>
A. docker build -t mi-app .<br>
B. docker run -d -p 8080:80 mi-app<br>
C. docker ps<br>
D. Escribir Dockerfile
</div>
<div style="display:grid;grid-template-columns:auto 1fr;gap:8px;margin:10px 0;">
<span>Orden correcto:</span>
<input style="font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Ej: D, A, B, C">
</div>
</div>`,
        "opts": [
            "D, A, B, C",
            "A, D, B, C",
            "D, B, A, C",
            "C, D, A, B"
        ],
        "ans": 0,
        "exp": "El orden correcto es: 1) Escribir Dockerfile (D), 2) Construir la imagen con docker build (A), 3) Ejecutar el contenedor con docker run (B), 4) Verificar con docker ps (C)."
    },

    // ==================== DOCKER - DOCKERFILE AVANZADO ====================
    {
        "profe": false,
        "unit": "Docker - Dockerfile y Buenas Prácticas",
        "diff": "hard",
        "q": "Identifica el error en el siguiente Dockerfile y escribe la versión corregida.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Dockerfile con errores:</strong><br>
FROM python:3.9<br>
COPY . /app<br>
RUN pip install -r /app/requirements.txt<br>
CMD python app.py<br><br>
<strong style="color:#ff6b6b;">Problemas identificados:</strong><br>
• No se especifica WORKDIR<br>
• COPY copia todo antes de instalar dependencias (ineficiente)<br>
• No se exponen puertos<br>
• CMD no es shell o exec
</div>
<textarea style="width:100%;height:140px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu Dockerfile corregido aquí..."></textarea>
</div>`,
        "opts": [
            "FROM python:3.9\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .\nEXPOSE 8000\nCMD [\"python\", \"app.py\"]",
            "FROM python:3.9\nWORKDIR /app\nCOPY . .\nRUN pip install -r requirements.txt\nEXPOSE 8000\nENTRYPOINT [\"python\", \"app.py\"]",
            "FROM python:3.9\nCOPY . /app\nRUN pip install -r /app/requirements.txt\nCMD python app.py\nEXPOSE 8000",
            "FROM python:3.9\nWORKDIR app\nCOPY . .\nRUN pip install -r requirements.txt\nCMD [\"python\", \"app.py\"]"
        ],
        "ans": 0,
        "exp": "La opción A es la mejor práctica: 1) WORKDIR /app, 2) COPY solo requirements.txt primero (aprovecha cache de Docker), 3) RUN pip install, 4) COPY el resto, 5) EXPOSE 8000, 6) CMD en formato exec []. La opción B usa ENTRYPOINT, pero CMD es preferible para flexibilidad. La C no tiene WORKDIR y usa CMD en formato shell (menos seguro)."
    },

    // ==================== KUBERNETES - PODS Y DEPLOYMENTS ====================
    {
        "profe": false,
        "unit": "Kubernetes - Pods y Deployments",
        "diff": "hard",
        "q": "Escribe un manifest YAML para un Deployment que: 1) Use la imagen 'nginx:latest', 2) Tenga 3 réplicas, 3) Exponga el puerto 80, 4) Incluya healthcheck con readinessProbe y livenessProbe.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Requisitos:</strong><br>
• Deployment con 3 réplicas<br>
• Imagen: nginx:latest<br>
• Puerto 80<br>
• readinessProbe: path /, port 80<br>
• livenessProbe: path /, port 80<br>
• selector: app: nginx<br>
• template con labels: app: nginx
</div>
<textarea style="width:100%;height:160px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu manifest YAML aquí..."></textarea>
</div>`,
        "opts": [
            "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest\n        ports:\n        - containerPort: 80\n        readinessProbe:\n          httpGet:\n            path: /\n            port: 80\n          initialDelaySeconds: 5\n          periodSeconds: 10\n        livenessProbe:\n          httpGet:\n            path: /\n            port: 80\n          initialDelaySeconds: 15\n          periodSeconds: 20",
            "apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-pod\nspec:\n  containers:\n  - name: nginx\n    image: nginx:latest\n    ports:\n    - containerPort: 80",
            "apiVersion: apps/v1\nkind: ReplicaSet\nmetadata:\n  name: nginx-rs\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest\n        ports:\n        - containerPort: 80",
            "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest\n        ports:\n        - containerPort: 80\n        readinessProbe:\n          httpGet:\n            path: /\n            port: 80\n        livenessProbe:\n          httpGet:\n            path: /\n            port: 80"
        ],
        "ans": 0,
        "exp": "La opción A es la correcta y completa: 1) apiVersion apps/v1, 2) kind Deployment, 3) replicas: 3, 4) selector y template con labels, 5) readinessProbe y livenessProbe con httpGet, 6) initialDelaySeconds y periodSeconds. La opción B es un Pod (no Deployment). La opción C es ReplicaSet (no tiene rolling update). La D tiene mala indentación y falta metadata en template."
    },

    // ==================== KUBERNETES - SERVICES ====================
    {
        "profe": false,
        "unit": "Kubernetes - Services",
        "diff": "medium",
        "q": "Crea un Service de tipo ClusterIP para exponer el Deployment anterior (nginx) en el puerto 80.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Deployment existente:</strong><br>
Deployment: nginx-deployment<br>
Selector: app: nginx<br><br>
<strong style="color:#569cd6;">Requisitos:</strong><br>
• Kind: Service<br>
• Type: ClusterIP<br>
• Puerto: 80<br>
• TargetPort: 80<br>
• Selector: app: nginx
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu manifest YAML aquí..."></textarea>
</div>`,
        "opts": [
            "apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\nspec:\n  type: ClusterIP\n  selector:\n    app: nginx\n  ports:\n  - port: 80\n    targetPort: 80",
            "apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\nspec:\n  type: NodePort\n  selector:\n    app: nginx\n  ports:\n  - port: 80\n    targetPort: 80\n    nodePort: 30080",
            "apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\nspec:\n  type: LoadBalancer\n  selector:\n    app: nginx\n  ports:\n  - port: 80\n    targetPort: 80",
            "apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\nspec:\n  selector:\n    app: nginx\n  ports:\n  - port: 80\n    targetPort: 80"
        ],
        "ans": 0,
        "exp": "La opción A es la correcta: 1) apiVersion v1, 2) kind Service, 3) type: ClusterIP (por defecto), 4) selector: app: nginx, 5) ports: port: 80, targetPort: 80. La opción B es NodePort (expone externamente). La opción C es LoadBalancer (usado en clouds). La opción D es válida (ClusterIP por defecto) pero la A es más explícita."
    },

    // ==================== KUBERNETES - CONFIGMAPS ====================
    {
        "profe": false,
        "unit": "Kubernetes - ConfigMaps",
        "diff": "medium",
        "q": "Crea un ConfigMap con variables de entorno para una aplicación: APP_MODE=production, LOG_LEVEL=debug.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Requisitos:</strong><br>
• Kind: ConfigMap<br>
• Metadata name: app-config<br>
• Data: APP_MODE: production<br>
• Data: LOG_LEVEL: debug
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu manifest YAML aquí..."></textarea>
</div>`,
        "opts": [
            "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  APP_MODE: production\n  LOG_LEVEL: debug",
            "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  - APP_MODE: production\n  - LOG_LEVEL: debug",
            "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  APP_MODE=production\n  LOG_LEVEL=debug",
            "apiVersion: apps/v1\nkind: ConfigMap\nmetadata:\n  name: app-config\nspec:\n  data:\n    APP_MODE: production\n    LOG_LEVEL: debug"
        ],
        "ans": 0,
        "exp": "La opción A es correcta: apiVersion v1, kind ConfigMap, metadata con name, data con pares clave-valor. La B usa lista (incorrecto). La C usa = en lugar de : (incorrecto). La D usa apiVersion apps/v1 (incorrecto para ConfigMap)."
    },

    // ==================== LINUX - PERMISOS Y USUARIOS ====================
    {
        "profe": false,
        "unit": "Linux - Permisos y Usuarios",
        "diff": "medium",
        "q": "Dado el siguiente permiso 'drwxr-x--x', explica qué significa cada parte y qué permisos tiene cada grupo.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Permiso:</strong> drwxr-x--x<br><br>
<strong style="color:#569cd6;">Descifra:</strong><br>
• ¿Qué tipo de archivo es?<br>
• ¿Qué permisos tiene el dueño?<br>
• ¿Qué permisos tiene el grupo?<br>
• ¿Qué permisos tienen otros?
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#00ff00;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu análisis aquí..."></textarea>
</div>`,
        "opts": [
            "d → directorio\nrwx → dueño: lectura, escritura, ejecución\nr-x → grupo: lectura y ejecución (sin escritura)\n--x → otros: solo ejecución",
            "d → directorio\nrwx → dueño: lectura, escritura, ejecución\nr-x → grupo: lectura y ejecución\n--x → otros: sin permisos",
            "- → archivo\nrwx → dueño: lectura, escritura, ejecución\nr-x → grupo: lectura y ejecución\n--x → otros: ejecución",
            "d → directorio\nrwx → dueño: lectura, escritura\nr-x → grupo: lectura y ejecución\n--x → otros: escritura y ejecución"
        ],
        "ans": 0,
        "exp": "El permiso 'drwxr-x--x' se descompone: 1) d = directorio (archivo sería -), 2) rwx = dueño tiene lectura, escritura y ejecución, 3) r-x = grupo tiene lectura y ejecución, 4) --x = otros solo tienen ejecución."
    },

    // ==================== LINUX - PROCESOS Y SEÑALES ====================
    {
        "profe": false,
        "unit": "Linux - Procesos y Señales",
        "diff": "hard",
        "q": "Explica qué hacen los siguientes comandos y cuál es su diferencia: kill, kill -9, pkill, killall.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Comandos a explicar:</strong><br>
• kill<br>
• kill -9<br>
• pkill<br>
• killall
</div>
<textarea style="width:100%;height:140px;font-family:monospace;background:#1e1e1e;color:#00ff00;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu explicación aquí..."></textarea>
</div>`,
        "opts": [
            "kill → envía señal SIGTERM (terminación suave, permite limpiar)\nkill -9 → envía SIGKILL (terminación forzada, no permite limpiar)\npkill → mata por nombre de proceso (ej: pkill nginx)\nkillall → mata todos los procesos con ese nombre (ej: killall nginx)",
            "kill → mata procesos por PID\nkill -9 → mata procesos por nombre\npkill → mata por PID\nkillall → mata por grupo",
            "kill → termina procesos suavemente\nkill -9 → termina procesos forzadamente\npkill → termina procesos hijos\nkillall → termina procesos padres",
            "kill y kill -9 son lo mismo\npkill mata procesos del usuario actual\nkillall mata todos los procesos del sistema"
        ],
        "ans": 0,
        "exp": "La explicación correcta: 1) kill (SIGTERM) → permite al proceso limpiar recursos antes de terminar, 2) kill -9 (SIGKILL) → termina inmediatamente sin limpieza, 3) pkill → mata por nombre de proceso (no requiere PID), 4) killall → mata todos los procesos con ese nombre (más agresivo que pkill)."
    },

    // ==================== TERRAFORM - INFRAESTRUCTURA COMO CÓDIGO ====================
    {
        "profe": false,
        "unit": "Terraform - Infrastructure as Code",
        "diff": "hard",
        "q": "Escribe un archivo Terraform que cree una instancia EC2 en AWS con: 1) AMI de Ubuntu, 2) Tipo t2.micro, 3) Un security group que permita SSH (puerto 22) y HTTP (puerto 80), 4) Una etiqueta (tag) llamada 'Name' con valor 'mi-servidor'.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color="#569cd6;">Requisitos:</strong><br>
• Provider: aws<br>
• Recurso: aws_instance<br>
• AMI: ami-0c55b159cbfafe1f0 (Ubuntu 20.04 en us-east-1)<br>
• Tipo: t2.micro<br>
• Security Group con puertos 22 y 80<br>
• Tag: Name = "mi-servidor"
</div>
<textarea style="width:100%;height:180px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu código Terraform aquí..."></textarea>
</div>`,
        "opts": [
            "provider \"aws\" {\n  region = \"us-east-1\"\n}\n\nresource \"aws_security_group\" \"web\" {\n  name = \"web-sg\"\n  ingress {\n    from_port = 22\n    to_port = 22\n    protocol = \"tcp\"\n    cidr_blocks = [\"0.0.0.0/0\"]\n  }\n  ingress {\n    from_port = 80\n    to_port = 80\n    protocol = \"tcp\"\n    cidr_blocks = [\"0.0.0.0/0\"]\n  }\n  egress {\n    from_port = 0\n    to_port = 0\n    protocol = \"-1\"\n    cidr_blocks = [\"0.0.0.0/0\"]\n  }\n}\n\nresource \"aws_instance\" \"server\" {\n  ami = \"ami-0c55b159cbfafe1f0\"\n  instance_type = \"t2.micro\"\n  vpc_security_group_ids = [aws_security_group.web.id]\n  tags = {\n    Name = \"mi-servidor\"\n  }\n}",
            "provider \"aws\" {\n  region = \"us-east-1\"\n}\n\nresource \"aws_instance\" \"server\" {\n  ami = \"ami-0c55b159cbfafe1f0\"\n  instance_type = \"t2.micro\"\n  tags = {\n    Name = \"mi-servidor\"\n  }\n}",
            "resource \"aws_security_group\" \"web\" {\n  name = \"web-sg\"\n  ingress {\n    from_port = 22\n    to_port = 22\n    protocol = \"tcp\"\n    cidr_blocks = [\"0.0.0.0/0\"]\n  }\n  ingress {\n    from_port = 80\n    to_port = 80\n    protocol = \"tcp\"\n    cidr_blocks = [\"0.0.0.0/0\"]\n  }\n}\n\nresource \"aws_instance\" \"server\" {\n  ami = \"ami-0c55b159cbfafe1f0\"\n  instance_type = \"t2.micro\"\n  security_groups = [\"web-sg\"]\n  tags = {\n    Name = \"mi-servidor\"\n  }\n}",
            "terraform {\n  required_providers {\n    aws = {\n      source = \"hashicorp/aws\"\n      version = \"~> 4.0\"\n    }\n  }\n}\n\nprovider \"aws\" {\n  region = \"us-east-1\"\n}\n\nresource \"aws_security_group\" \"web\" {\n  name = \"web-sg\"\n  ingress = [\n    { from_port = 22, to_port = 22, protocol = \"tcp\", cidr_blocks = [\"0.0.0.0/0\"] },\n    { from_port = 80, to_port = 80, protocol = \"tcp\", cidr_blocks = [\"0.0.0.0/0\"] }\n  ]\n  egress = [\n    { from_port = 0, to_port = 0, protocol = \"-1\", cidr_blocks = [\"0.0.0.0/0\"] }\n  ]\n}\n\nresource \"aws_instance\" \"server\" {\n  ami = \"ami-0c55b159cbfafe1f0\"\n  instance_type = \"t2.micro\"\n  vpc_security_group_ids = [aws_security_group.web.id]\n  tags = {\n    Name = \"mi-servidor\"\n  }\n}"
        ],
        "ans": 0,
        "exp": "La opción A es correcta y completa: 1) Provider configurado, 2) Security Group con ingress para 22 y 80, 3) Egress para todo, 4) aws_instance con ami, instance_type, vpc_security_group_ids, y tags. La opción B no tiene security group. La C usa security_groups en lugar de vpc_security_group_ids (obsoleto en VPC). La D es válida pero usa sintaxis más moderna con blocks de ingress como lista."
    },

    // ==================== ANSIBLE - PLAYBOOKS ====================
    {
        "profe": false,
        "unit": "Ansible - Playbooks",
        "diff": "hard",
        "q": "Escribe un playbook de Ansible que: 1) Instale Nginx en un servidor Ubuntu, 2) Habilite el servicio, 3) Copie un archivo de configuración personalizado, 4) Reinicie Nginx si la configuración cambia.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Requisitos:</strong><br>
• Host: webservers<br>
• Tareas: install, enable, copy config, restart<br>
• Uso de handlers para reiniciar Nginx<br>
• Configuración: /etc/nginx/nginx.conf
</div>
<textarea style="width:100%;height:160px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu playbook YAML aquí..."></textarea>
</div>`,
        "opts": [
            "---\n- hosts: webservers\n  become: yes\n  tasks:\n    - name: Install Nginx\n      apt:\n        name: nginx\n        state: present\n        update_cache: yes\n    - name: Ensure Nginx is running\n      service:\n        name: nginx\n        state: started\n        enabled: yes\n    - name: Copy Nginx config\n      copy:\n        src: files/nginx.conf\n        dest: /etc/nginx/nginx.conf\n      notify: restart nginx\n  handlers:\n    - name: restart nginx\n      service:\n        name: nginx\n        state: restarted",
            "---\n- hosts: webservers\n  tasks:\n    - apt: name=nginx state=present\n    - service: name=nginx state=started enabled=yes\n    - copy: src=nginx.conf dest=/etc/nginx/nginx.conf\n    - service: name=nginx state=restarted",
            "---\n- hosts: webservers\n  become: yes\n  tasks:\n    - name: Install Nginx\n      yum:\n        name: nginx\n        state: present\n    - name: Copy config\n      copy:\n        src: nginx.conf\n        dest: /etc/nginx/nginx.conf\n      notify: restart nginx\n  handlers:\n    - name: restart nginx\n      systemd:\n        name: nginx\n        state: restarted",
            "---\n- hosts: webservers\n  become: yes\n  tasks:\n    - name: Install Nginx\n      apt:\n        name: nginx\n        state: present\n    - name: Copy config\n      template:\n        src: nginx.conf.j2\n        dest: /etc/nginx/nginx.conf\n      notify: restart nginx\n  handlers:\n    - name: restart nginx\n      service:\n        name: nginx\n        state: restarted"
        ],
        "ans": 0,
        "exp": "La opción A es la correcta y más completa: 1) hosts: webservers, 2) become: yes para permisos de root, 3) Tarea para instalar apt con update_cache, 4) Tarea para habilitar servicio, 5) Tarea copy con notify, 6) Handler para restart. La opción B es válida pero en formato compacto (menos legible). La C usa yum (para RedHat, no Ubuntu). La D usa template en lugar de copy (no se pidió)."
    }


]

export default preguntas_metodologia_agil;