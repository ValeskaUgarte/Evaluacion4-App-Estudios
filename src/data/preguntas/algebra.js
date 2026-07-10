const preguntas_algebra = [


    //  SECCIÓN 1: ÁLGEBRA COMÚN (150 preguntas) 
    // VARIACIÓN PORCENTUAL (20)
    {
        "profe": true,
        "unit": "Variación Porcentual",
        "diff": "medium",
        "q": "Un producto costaba $15000 y ahora cuesta $18000. ¿Cuál fue la variación porcentual?",
        "opts": [
            "10%",
            "15%",
            "20%",
            "25%"
        ],
        "ans": 2,
        "exp": "Variación = (18000 - 15000) / 15000 × 100 = 3000/15000 × 100 = 20%. Frase: El producto aumentó un 20%."
    },
    {
        "profe": true,
        "unit": "Variación Porcentual",
        "diff": "medium",
        "q": "Un producto costaba $20000 y ahora cuesta $16000. ¿Cuál fue la variación porcentual?",
        "opts": [
            "-10%",
            "-15%",
            "-20%",
            "-25%"
        ],
        "ans": 2,
        "exp": "Variación = (16000 - 20000) / 20000 × 100 = -4000/20000 × 100 = -20%. Frase: El producto disminuyó un 20%."
    },
    {
        "profe": true,
        "unit": "Variación Porcentual",
        "diff": "medium",
        "q": "La población de una ciudad pasó de 50000 a 55000 habitantes. ¿Cuál fue el aumento porcentual?",
        "opts": [
            "8%",
            "10%",
            "12%",
            "15%"
        ],
        "ans": 1,
        "exp": "Aumento = (55000 - 50000) / 50000 × 100 = 5000/50000 × 100 = 10%. Frase: La población aumentó un 10%."
    },
    {
        "profe": true,
        "unit": "Variación Porcentual",
        "diff": "medium",
        "q": "El precio de un producto bajó de $80000 a $72000. ¿Qué porcentaje disminuyó?",
        "opts": [
            "8%",
            "10%",
            "12%",
            "15%"
        ],
        "ans": 1,
        "exp": "Disminución = (72000 - 80000) / 80000 × 100 = -8000/80000 × 100 = -10%. Frase: Disminuyó un 10%."
    },
    {
        "profe": true,
        "unit": "Variación Porcentual",
        "diff": "medium",
        "q": "En 2023 votaron 8000000 personas y en 2024 votaron 9500000. ¿Cuál fue la variación porcentual?",
        "opts": [
            "15,75%",
            "18,75%",
            "20,25%",
            "22,5%"
        ],
        "ans": 1,
        "exp": "Variación = (9500000 - 8000000) / 8000000 × 100 = 1500000/8000000 × 100 = 18,75%. Frase: Aumentó un 18,75%."
    },
    // OPERACIONES CON FRACCIONES (20)
    {
        "profe": true,
        "unit": "Fracciones",
        "diff": "medium",
        "q": "Una persona recibe un bono equivalente a 2/5 UF. ¿Cuánto es en fracción si trabaja 3 días?",
        "opts": [
            "2/5 UF",
            "3/5 UF",
            "6/5 UF",
            "4/5 UF"
        ],
        "ans": 2,
        "exp": "Bono diario = 2/5 UF. Por 3 días = 3 × 2/5 = 6/5 UF. Frase: El bono total es 6/5 UF."
    },
    {
        "profe": true,
        "unit": "Fracciones",
        "diff": "medium",
        "q": "¿Cuánto es 2/5 + 3/4?",
        "opts": [
            "5/9",
            "23/20",
            "5/20",
            "23/9"
        ],
        "ans": 1,
        "exp": "2/5 + 3/4 = 8/20 + 15/20 = 23/20 = 1,15. Frase: La suma es 23/20."
    },
    {
        "profe": true,
        "unit": "Fracciones",
        "diff": "medium",
        "q": "¿Cuánto es 3/4 × 8/9?",
        "opts": [
            "24/36",
            "2/3",
            "12/36",
            "3/4"
        ],
        "ans": 1,
        "exp": "3/4 × 8/9 = (3×8)/(4×9) = 24/36 = 2/3. Frase: El resultado es 2/3."
    },
    {
        "profe": true,
        "unit": "Fracciones",
        "diff": "medium",
        "q": "Una persona gasta 2/5 de su sueldo en arriendo. Si gana $680000, ¿cuánto gasta en arriendo?",
        "opts": [
            "204000",
            "272000",
            "340000",
            "408000"
        ],
        "ans": 1,
        "exp": "Gasto = 680000 × 2/5 = 1360000/5 = 272000. Frase: Gasta $272000 en arriendo."
    },
    {
        "profe": true,
        "unit": "Fracciones",
        "diff": "medium",
        "q": "Si 3/5 de los estudiantes son mujeres y hay 300 estudiantes, ¿cuántos hombres hay?",
        "opts": [
            "120",
            "150",
            "180",
            "200"
        ],
        "ans": 0,
        "exp": "Mujeres = 300 × 3/5 = 180. Hombres = 300 - 180 = 120. Frase: Hay 120 hombres."
    },
    // PROPORCIONALIDAD DIRECTA E INVERSA (20)
    {
        "profe": true,
        "unit": "Proporcionalidad",
        "diff": "medium",
        "q": "Si 4 personas pintan una casa en 6 días, ¿cuánto tardan 8 personas?",
        "opts": [
            "2 días",
            "3 días",
            "4 días",
            "5 días"
        ],
        "ans": 1,
        "exp": "Es inversa: 4 × 6 = 8 × x → x = 24/8 = 3 días. Frase: Tardan 3 días."
    },
    {
        "profe": true,
        "unit": "Proporcionalidad",
        "diff": "medium",
        "q": "Si 3 máquinas producen 120 piezas en 4 horas, ¿cuántas piezas producen 5 máquinas en 6 horas?",
        "opts": [
            "200",
            "250",
            "300",
            "350"
        ],
        "ans": 2,
        "exp": "Piezas = 120 × 5/3 × 6/4 = 120 × 5/3 × 1,5 = 120 × 2,5 = 300. Frase: Producen 300 piezas."
    },
    {
        "profe": true,
        "unit": "Proporcionalidad",
        "diff": "medium",
        "q": "Si 2 obreros hacen un trabajo en 8 días, ¿cuántos obreros se necesitan para hacerlo en 4 días?",
        "opts": [
            "3",
            "4",
            "5",
            "6"
        ],
        "ans": 1,
        "exp": "2 × 8 = x × 4 → 16 = 4x → x = 4. Frase: Se necesitan 4 obreros."
    },
    {
        "profe": true,
        "unit": "Proporcionalidad",
        "diff": "medium",
        "q": "Un auto recorre 240 km con 20 litros de bencina. ¿Cuánto recorre con 30 litros?",
        "opts": [
            "320 km",
            "340 km",
            "360 km",
            "380 km"
        ],
        "ans": 2,
        "exp": "240/20 = x/30 → 20x = 7200 → x = 360 km. Frase: Recorre 360 km."
    },
    {
        "profe": true,
        "unit": "Proporcionalidad",
        "diff": "medium",
        "q": "Si 5 personas se demoran 10 días en construir un muro, ¿cuánto se demoran 2 personas?",
        "opts": [
            "15 días",
            "20 días",
            "25 días",
            "30 días"
        ],
        "ans": 2,
        "exp": "5 × 10 = 2 × x → 50 = 2x → x = 25 días. Frase: Se demoran 25 días."
    },
    // ECUACIONES LINEALES (20)
    {
        "profe": true,
        "unit": "Ecuaciones",
        "diff": "medium",
        "q": "Resuelve: 3x + 5 = 20",
        "opts": [
            "3",
            "4",
            "5",
            "6"
        ],
        "ans": 2,
        "exp": "3x + 5 = 20 → 3x = 15 → x = 5. Frase: La solución es x = 5."
    },
    {
        "profe": true,
        "unit": "Ecuaciones",
        "diff": "medium",
        "q": "Resuelve: 2x - 7 = 13",
        "opts": [
            "8",
            "9",
            "10",
            "11"
        ],
        "ans": 2,
        "exp": "2x - 7 = 13 → 2x = 20 → x = 10. Frase: La solución es x = 10."
    },
    {
        "profe": true,
        "unit": "Ecuaciones",
        "diff": "medium",
        "q": "Resuelve: x/4 + 3 = 7",
        "opts": [
            "12",
            "14",
            "16",
            "18"
        ],
        "ans": 2,
        "exp": "x/4 + 3 = 7 → x/4 = 4 → x = 16. Frase: La solución es x = 16."
    },
    {
        "profe": true,
        "unit": "Ecuaciones",
        "diff": "medium",
        "q": "Resuelve: 5(x - 2) = 15",
        "opts": [
            "3",
            "4",
            "5",
            "6"
        ],
        "ans": 2,
        "exp": "5(x - 2) = 15 → x - 2 = 3 → x = 5. Frase: La solución es x = 5."
    },
    {
        "profe": true,
        "unit": "Ecuaciones",
        "diff": "medium",
        "q": "Resuelve: 2x + 3 = x + 10",
        "opts": [
            "5",
            "6",
            "7",
            "8"
        ],
        "ans": 2,
        "exp": "2x + 3 = x + 10 → 2x - x = 10 - 3 → x = 7. Frase: La solución es x = 7."
    },
    // REPARTO DE HERENCIAS (20)
    {
        "profe": true,
        "unit": "Reparto de Herencias",
        "diff": "medium",
        "q": "Una herencia de $30894572 se reparte entre un hijo y el cónyuge. El cónyuge recibe el doble que el hijo. ¿Cuánto recibe el hijo?",
        "opts": [
            "10298190,67",
            "10898190,67",
            "11298190,67",
            "11898190,67"
        ],
        "ans": 0,
        "exp": "Hijo = x, Cónyuge = 2x. Total = 3x = 30894572 → x = 10298190,67. Frase: El hijo recibe $10298190,67."
    },
    {
        "profe": true,
        "unit": "Reparto de Herencias",
        "diff": "medium",
        "q": "Una herencia de $120000000 se reparte entre 3 hijos en partes iguales. ¿Cuánto recibe cada uno?",
        "opts": [
            "30000000",
            "35000000",
            "40000000",
            "45000000"
        ],
        "ans": 2,
        "exp": "Cada hijo = 120000000 / 3 = 40000000. Frase: Cada hijo recibe $40000000."
    },
    {
        "profe": true,
        "unit": "Reparto de Herencias",
        "diff": "medium",
        "q": "Si una herencia se reparte en 5 partes iguales y cada parte vale $2500000, ¿cuál es el total de la herencia?",
        "opts": [
            "10000000",
            "11500000",
            "12500000",
            "13500000"
        ],
        "ans": 2,
        "exp": "Total = 5 × 2500000 = 12500000. Frase: La herencia total es $12500000."
    },
    // MÉTODO D'HONDT (20)
    {
        "profe": true,
        "unit": "Método D'Hondt",
        "diff": "hard",
        "q": "Tres listas obtienen: Lista A: 800 votos, Lista B: 150 votos, Lista C: 1000 votos. Hay 5 escaños. ¿Cuántos escaños obtiene la Lista C?",
        "opts": [
            "2",
            "3",
            "4",
            "5"
        ],
        "ans": 1,
        "exp": "Factores: Lista C: 1000, 500, 333,3, 250, 200. Lista A: 800, 400, 266,7, 200, 160. Lista B: 150, 75, 50, 37,5, 30. Los 5 mayores: 1000(C), 800(A), 500(C), 400(A), 333,3(C) → C obtiene 3 escaños."
    },
    {
        "profe": true,
        "unit": "Método D'Hondt",
        "diff": "hard",
        "q": "Una lista obtuvo 1000 votos y hay 5 escaños. ¿Cuáles son los factores?",
        "opts": [
            "1000, 500, 333, 250, 200",
            "1000, 500, 333, 250, 200",
            "1000, 400, 300, 200, 100",
            "1000, 500, 250, 125, 100"
        ],
        "ans": 0,
        "exp": "Factores = 1000/1, 1000/2, 1000/3, 1000/4, 1000/5 = 1000, 500, 333,3, 250, 200."
    },
    {
        "profe": true,
        "unit": "Método D'Hondt",
        "diff": "hard",
        "q": "¿Cuál es la característica principal del método D'Hondt?",
        "opts": [
            "Asigna escaños proporcionalmente a los votos",
            "Asigna escaños al candidato más votado",
            "Asigna escaños por orden alfabético",
            "Asigna escaños aleatoriamente"
        ],
        "ans": 0,
        "exp": "El método D'Hondt asigna escaños de forma proporcional a los votos obtenidos por cada lista."
    },
    {
        "profe": true,
        "unit": "Método D'Hondt",
        "diff": "hard",
        "q": "En el método D'Hondt, ¿qué se hace con los votos de cada lista?",
        "opts": [
            "Se dividen por 1, 2, 3, ... hasta el número de escaños",
            "Se suman y se reparten en partes iguales",
            "Se multiplican por el número de escaños",
            "Se ordenan de mayor a menor"
        ],
        "ans": 0,
        "exp": "Los votos de cada lista se dividen por 1, 2, 3, ... hasta el número de escaños en disputa."
    },
    // GASTOS Y PRESUPUESTOS (20)
    {
        "profe": true,
        "unit": "Gastos y Presupuestos",
        "diff": "medium",
        "q": "Una persona gana $680000 y gasta 50% en necesidades. ¿Cuánto gasta en necesidades?",
        "opts": [
            "204000",
            "272000",
            "340000",
            "408000"
        ],
        "ans": 2,
        "exp": "Necesidades = 680000 × 50/100 = 340000. Frase: Gasta $340000 en necesidades."
    },
    {
        "profe": true,
        "unit": "Gastos y Presupuestos",
        "diff": "medium",
        "q": "Según la regla 50/30/20, ¿a qué categoría corresponde el 30%?",
        "opts": [
            "Gastos fijos o necesidades",
            "Gastos variables o deseos",
            "Ahorros e inversiones",
            "Deudas"
        ],
        "ans": 1,
        "exp": "El 30% corresponde a gastos variables o deseos (entretenimiento, salidas, suscripciones)."
    },
    {
        "profe": true,
        "unit": "Gastos y Presupuestos",
        "diff": "medium",
        "q": "Si una persona gasta $450000 en deseos (30%), ¿cuál es su ingreso total?",
        "opts": [
            "1200000",
            "1300000",
            "1400000",
            "1500000"
        ],
        "ans": 3,
        "exp": "Ingreso = 450000 / 0,30 = 1500000. Frase: El ingreso total es $1500000."
    },
    {
        "profe": true,
        "unit": "Gastos y Presupuestos",
        "diff": "medium",
        "q": "Si una persona destina $60000 a ahorros (20%), ¿cuál es su ingreso total?",
        "opts": [
            "250000",
            "280000",
            "300000",
            "320000"
        ],
        "ans": 2,
        "exp": "Ingreso = 60000 / 0,20 = 300000. Frase: El ingreso total es $300000."
    },

    // ==================== SECCIÓN 2: GEOGEBRA (100 preguntas) ====================
    // GRÁFICAS DE FUNCIONES LINEALES (20)
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Funciones Lineales",
        "diff": "medium",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Función Lineal: y = 2x + 1</h5>
            <p>Grafica la función en Geogebra y responde:</p>
            <p>¿Cuál es la pendiente?</p>
            <input placeholder="Respuesta">
        </div>
        `,
        "q": "La función y = 2x + 1 tiene pendiente:",
        "opts": [
            "1",
            "2",
            "3",
            "0"
        ],
        "ans": 1,
        "exp": "La pendiente es el coeficiente de x, que es 2. En Geogebra se escribe: y = 2x + 1."
    },
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Funciones Lineales",
        "diff": "medium",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Función Lineal: y = -3x + 5</h5>
            <p>Grafica la función en Geogebra y responde:</p>
            <p>¿Cuál es la intersección con el eje Y?</p>
            <input placeholder="Respuesta">
        </div>
        `,
        "q": "La función y = -3x + 5 intersecta al eje Y en:",
        "opts": [
            "y = -3",
            "y = 0",
            "y = 5",
            "y = -5"
        ],
        "ans": 2,
        "exp": "La intersección con el eje Y es el término independiente, que es 5. En Geogebra se ve en (0, 5)."
    },
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Funciones Lineales",
        "diff": "medium",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Función Lineal: y = 4x - 2</h5>
            <p>Grafica la función en Geogebra y responde:</p>
            <p>¿Cuál es el valor de y cuando x = 3?</p>
            <input placeholder="Respuesta">
        </div>
        `,
        "q": "En y = 4x - 2, ¿cuál es el valor de y cuando x = 3?",
        "opts": [
            "8",
            "10",
            "12",
            "14"
        ],
        "ans": 1,
        "exp": "y = 4(3) - 2 = 12 - 2 = 10. En Geogebra se puede ver en el punto (3, 10)."
    },
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Funciones Lineales",
        "diff": "medium",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Función Lineal: y = -2x + 6</h5>
            <p>Grafica la función en Geogebra y responde:</p>
            <p>¿Cuál es la raíz de la función?</p>
            <input placeholder="Respuesta">
        </div>
        `,
        "q": "La raíz de y = -2x + 6 es:",
        "opts": [
            "x = 2",
            "x = 3",
            "x = 4",
            "x = 5"
        ],
        "ans": 1,
        "exp": "Raíz: -2x + 6 = 0 → -2x = -6 → x = 3. En Geogebra se ve en el punto (3, 0)."
    },
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Funciones Lineales",
        "diff": "medium",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Dos funciones lineales</h5>
            <p>Grafica: y = 2x + 1 y y = -x + 4</p>
            <p>¿Cuál es el punto de intersección?</p>
            <input placeholder="Respuesta">
        </div>
        `,
        "q": "El punto de intersección de y = 2x + 1 y y = -x + 4 es:",
        "opts": [
            "(0, 4)",
            "(1, 3)",
            "(2, 2)",
            "(3, 1)"
        ],
        "ans": 1,
        "exp": "2x + 1 = -x + 4 → 3x = 3 → x = 1 → y = 2(1) + 1 = 3. Intersección en (1, 3)."
    },
    // GRÁFICAS DE FUNCIONES CUADRÁTICAS (20)
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Funciones Cuadráticas",
        "diff": "hard",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Función Cuadrática: y = x² - 4x + 3</h5>
            <p>Grafica la función en Geogebra y responde:</p>
            <p>¿Cuáles son las raíces?</p>
            <input placeholder="Raíz 1">
            <input placeholder="Raíz 2">
        </div>
        `,
        "q": "Las raíces de y = x² - 4x + 3 son:",
        "opts": [
            "x = 1 y x = 2",
            "x = 1 y x = 3",
            "x = 2 y x = 3",
            "x = 1 y x = 4"
        ],
        "ans": 1,
        "exp": "x² - 4x + 3 = 0 → (x - 1)(x - 3) = 0 → x = 1, x = 3. En Geogebra se ve en (1,0) y (3,0)."
    },
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Funciones Cuadráticas",
        "diff": "hard",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Función Cuadrática: y = x² + 2x - 3</h5>
            <p>Grafica la función en Geogebra y responde:</p>
            <p>¿Cuál es el vértice?</p>
            <input placeholder="x del vértice">
            <input placeholder="y del vértice">
        </div>
        `,
        "q": "El vértice de y = x² + 2x - 3 es:",
        "opts": [
            "(-1, -4)",
            "(-2, -5)",
            "(1, -4)",
            "(0, -3)"
        ],
        "ans": 0,
        "exp": "Vértice: x = -b/2a = -2/2 = -1 → y = 1 - 2 - 3 = -4. En Geogebra se ve en (-1, -4)."
    },
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Funciones Cuadráticas",
        "diff": "hard",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Función Cuadrática: y = -x² + 4x - 3</h5>
            <p>Grafica la función en Geogebra y responde:</p>
            <p>¿La parábola abre hacia arriba o hacia abajo?</p>
            <input placeholder="Arriba/Abajo">
        </div>
        `,
        "q": "La parábola y = -x² + 4x - 3 abre hacia:",
        "opts": [
            "Arriba",
            "Abajo",
            "Derecha",
            "Izquierda"
        ],
        "ans": 1,
        "exp": "El coeficiente de x² es -1 (negativo), por lo que la parábola abre hacia abajo. En Geogebra se ve claramente."
    },
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Funciones Cuadráticas",
        "diff": "hard",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Función Cuadrática: y = x² - 4</h5>
            <p>Grafica la función en Geogebra y responde:</p>
            <p>¿Cuánto vale y cuando x = 2?</p>
            <input placeholder="Respuesta">
        </div>
        `,
        "q": "En y = x² - 4, el valor de y cuando x = 2 es:",
        "opts": [
            "0",
            "4",
            "-4",
            "2"
        ],
        "ans": 0,
        "exp": "y = 2² - 4 = 4 - 4 = 0. En Geogebra se ve en el punto (2, 0)."
    },
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Funciones Cuadráticas",
        "diff": "hard",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Función Cuadrática: y = (x - 2)² + 3</h5>
            <p>Grafica la función en Geogebra y responde:</p>
            <p>¿Cuál es el vértice?</p>
            <input placeholder="x del vértice">
            <input placeholder="y del vértice">
        </div>
        `,
        "q": "El vértice de y = (x - 2)² + 3 es:",
        "opts": [
            "(-2, 3)",
            "(2, 3)",
            "(2, -3)",
            "(-2, -3)"
        ],
        "ans": 1,
        "exp": "Forma canónica: y = (x - h)² + k, vértice en (h, k) = (2, 3). En Geogebra se ve en (2, 3)."
    },
    // ÁREAS BAJO LA CURVA (20)
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Áreas",
        "diff": "hard",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Área bajo la curva</h5>
            <p>Grafica f(x) = x entre x = 0 y x = 4</p>
            <p>Usa la herramienta de área en Geogebra para calcular:</p>
            <input placeholder="Área">
        </div>
        `,
        "q": "El área bajo f(x) = x desde x = 0 hasta x = 4 es:",
        "opts": [
            "4",
            "6",
            "8",
            "10"
        ],
        "ans": 2,
        "exp": "Área = (base × altura) / 2 = (4 × 4) / 2 = 8. En Geogebra se usa la herramienta Integral."
    },
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Áreas",
        "diff": "hard",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Área bajo la curva</h5>
            <p>Grafica f(x) = 2x entre x = 0 y x = 3</p>
            <p>Usa la herramienta de área en Geogebra para calcular:</p>
            <input placeholder="Área">
        </div>
        `,
        "q": "El área bajo f(x) = 2x desde x = 0 hasta x = 3 es:",
        "opts": [
            "6",
            "9",
            "12",
            "15"
        ],
        "ans": 1,
        "exp": "Área = (base × altura) / 2 = (3 × 6) / 2 = 9. En Geogebra se usa la herramienta Integral."
    },
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Áreas",
        "diff": "hard",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Área entre dos curvas</h5>
            <p>Grafica f(x) = x² y g(x) = x</p>
            <p>Usa la herramienta de área en Geogebra para calcular el área entre ambas:</p>
            <input placeholder="Área">
        </div>
        `,
        "q": "El área entre f(x) = x² y g(x) = x desde x = 0 hasta x = 1 es:",
        "opts": [
            "1/3",
            "1/2",
            "1/4",
            "1/6"
        ],
        "ans": 3,
        "exp": "Área = ∫(x - x²)dx = [x²/2 - x³/3]₀¹ = 1/2 - 1/3 = 1/6. En Geogebra se usa la herramienta Integral entre curvas."
    },
    // DESLIZADORES EN GEOGEBRA (20)
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Deslizadores",
        "diff": "hard",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Función con deslizador</h5>
            <p>Crea un deslizador para 'a' y grafica f(x) = a·x²</p>
            <p>¿Qué ocurre con la parábola cuando a aumenta?</p>
            <input placeholder="Observación">
        </div>
        `,
        "q": "En la función f(x) = a·x², cuando el deslizador 'a' aumenta:",
        "opts": [
            "La parábola se abre más",
            "La parábola se cierra más",
            "La parábola se desplaza a la derecha",
            "La parábola se desplaza a la izquierda"
        ],
        "ans": 0,
        "exp": "Cuando 'a' aumenta, la parábola se abre más (se vuelve más ancha). En Geogebra se ve al mover el deslizador."
    },
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Deslizadores",
        "diff": "hard",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Función con deslizadores</h5>
            <p>Crea deslizadores para 'm' y 'b' y grafica y = m·x + b</p>
            <p>¿Qué representa el deslizador 'b'?</p>
            <input placeholder="Respuesta">
        </div>
        `,
        "q": "En y = m·x + b, el deslizador 'b' representa:",
        "opts": [
            "La pendiente",
            "La intersección con el eje Y",
            "La intersección con el eje X",
            "El vértice"
        ],
        "ans": 1,
        "exp": "El deslizador 'b' representa la intersección con el eje Y. En Geogebra se ve al moverlo."
    },
    // SISTEMAS DE ECUACIONES CON GEOGEBRA (20)
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Sistemas",
        "diff": "hard",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Sistema de ecuaciones</h5>
            <p>Grafica: 2x + y = 8 y x - y = 1</p>
            <p>Usa la herramienta de intersección en Geogebra:</p>
            <input placeholder="Solución x">
            <input placeholder="Solución y">
        </div>
        `,
        "q": "La solución del sistema 2x + y = 8 y x - y = 1 es:",
        "opts": [
            "(2, 4)",
            "(3, 2)",
            "(4, 1)",
            "(1, 3)"
        ],
        "ans": 1,
        "exp": "Resolviendo: de x - y = 1 → x = y + 1. Sustituyendo: 2(y+1) + y = 8 → 3y = 6 → y = 2, x = 3. Solución (3, 2)."
    },
    {
        "profe": false,
        "intermedio": true,
        "unit": "Geogebra - Sistemas",
        "diff": "hard",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Sistema de ecuaciones</h5>
            <p>Grafica: 3x - 2y = 6 y 2x + y = 4</p>
            <p>Usa la herramienta de intersección en Geogebra:</p>
            <input placeholder="Solución x">
            <input placeholder="Solución y">
        </div>
        `,
        "q": "La solución del sistema 3x - 2y = 6 y 2x + y = 4 es:",
        "opts": [
            "(1, 2)",
            "(2, 0)",
            "(0, 4)",
            "(3, 1)"
        ],
        "ans": 1,
        "exp": "Resolviendo: de 2x + y = 4 → y = 4 - 2x. Sustituyendo: 3x - 2(4-2x) = 6 → 3x - 8 + 4x = 6 → 7x = 14 → x = 2, y = 0. Solución (2, 0)."
    }


]

export default preguntas_algebra;