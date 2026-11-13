import { P, TABLA } from '../preguntas_helpers.js';
const preguntas_bd_estructurados = [


    // ==================== SQL - CONSULTAS BÁSICAS ====================
    {
        "profe": false,
        "unit": "SQL - Consultas Básicas",
        "diff": "medium",
        "q": "Dada la tabla 'empleados', escribe una consulta que muestre el nombre, apellido y salario de los empleados que ganan más de $50,000, ordenados por salario descendente.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: empleados</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">apellido</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">salario</span> DECIMAL(10,2),<br>
<span style="color:#9cdcfe;">departamento_id</span> INT
</div>
<textarea style="width:100%;height:80px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu consulta SQL aquí..."></textarea>
</div>`,
        "opts": [
            "SELECT nombre, apellido, salario FROM empleados WHERE salario > 50000 ORDER BY salario DESC;",
            "SELECT * FROM empleados WHERE salario > 50000;",
            "SELECT nombre, apellido, salario FROM empleados ORDER BY salario DESC WHERE salario > 50000;",
            "SELECT nombre, apellido, salario FROM empleados WHERE salario >= 50000 ORDER BY salario;"
        ],
        "ans": 0,
        "exp": "La consulta correcta debe: 1) Seleccionar solo los campos solicitados (nombre, apellido, salario), 2) Filtrar por salario > 50000, 3) Ordenar por salario descendente (DESC)."
    },

    // ==================== SQL - JOIN Y AGRUPACIÓN ====================
    {
        "profe": false,
        "unit": "SQL - Joins y Agrupación",
        "diff": "hard",
        "q": "Dadas las tablas 'empleados' y 'departamentos', escribe una consulta que muestre el nombre del departamento y el salario promedio de sus empleados, incluyendo solo departamentos con más de 3 empleados.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: empleados</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">apellido</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">salario</span> DECIMAL(10,2),<br>
<span style="color:#9cdcfe;">departamento_id</span> INT<br><br>
<strong style="color:#569cd6;">Tabla: departamentos</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(50)
</div>
<textarea style="width:100%;height:100px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu consulta SQL aquí..."></textarea>
</div>`,
        "opts": [
            "SELECT d.nombre, AVG(e.salario) FROM empleados e JOIN departamentos d ON e.departamento_id = d.id GROUP BY d.nombre HAVING COUNT(e.id) > 3;",
            "SELECT d.nombre, AVG(e.salario) FROM empleados e, departamentos d WHERE e.departamento_id = d.id GROUP BY d.nombre WHERE COUNT(e.id) > 3;",
            "SELECT d.nombre, AVG(e.salario) FROM empleados e JOIN departamentos d ON e.departamento_id = d.id WHERE COUNT(e.id) > 3 GROUP BY d.nombre;",
            "SELECT d.nombre, SUM(e.salario)/COUNT(e.id) FROM empleados e INNER JOIN departamentos d ON e.departamento_id = d.id HAVING COUNT(e.id) > 3;"
        ],
        "ans": 0,
        "exp": "Se necesita: 1) JOIN entre ambas tablas, 2) GROUP BY departamento, 3) HAVING para filtrar por COUNT > 3 (el WHERE no funciona con agregaciones)."
    },

    // ==================== SQL - SUBQUERIES ====================
    {
        "profe": false,
        "unit": "SQL - Subconsultas",
        "diff": "hard",
        "q": "Escribe una consulta que muestre los empleados que ganan más que el promedio de su propio departamento.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: empleados</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">apellido</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">salario</span> DECIMAL(10,2),<br>
<span style="color:#9cdcfe;">departamento_id</span> INT
</div>
<textarea style="width:100%;height:100px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu consulta SQL aquí..."></textarea>
</div>`,
        "opts": [
            "SELECT * FROM empleados e WHERE salario > (SELECT AVG(salario) FROM empleados WHERE departamento_id = e.departamento_id);",
            "SELECT * FROM empleados WHERE salario > (SELECT AVG(salario) FROM empleados);",
            "SELECT e.*, d.nombre FROM empleados e JOIN departamentos d ON e.departamento_id = d.id WHERE salario > (SELECT AVG(salario) FROM empleados);",
            "SELECT e.*, AVG(salario) FROM empleados e GROUP BY departamento_id HAVING salario > AVG(salario);"
        ],
        "ans": 0,
        "exp": "Esta es una subconsulta correlacionada. Para cada empleado (e), la subconsulta calcula el promedio de su departamento (WHERE departamento_id = e.departamento_id)."
    },

    // ==================== SQL - CREACIÓN DE TABLAS ====================
    {
        "profe": false,
        "unit": "SQL - DDL (Data Definition Language)",
        "diff": "medium",
        "q": "Crea la tabla 'productos' con los siguientes campos: id (clave primaria autoincrementable), nombre (VARCHAR 100, NOT NULL), precio (DECIMAL 10,2, NOT NULL), stock (INT, DEFAULT 0), y categoría (VARCHAR 50).",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Requisitos:</strong><br>
• id: INT, PRIMARY KEY, AUTO_INCREMENT<br>
• nombre: VARCHAR(100), NOT NULL<br>
• precio: DECIMAL(10,2), NOT NULL<br>
• stock: INT, DEFAULT 0<br>
• categoria: VARCHAR(50)
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu comando CREATE TABLE aquí..."></textarea>
</div>`,
        "opts": [
            "CREATE TABLE productos (id INT PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(100) NOT NULL, precio DECIMAL(10,2) NOT NULL, stock INT DEFAULT 0, categoria VARCHAR(50));",
            "CREATE TABLE productos (id INT PRIMARY KEY, nombre VARCHAR(100), precio DECIMAL(10,2), stock INT DEFAULT 0, categoria VARCHAR(50));",
            "CREATE TABLE productos (id AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(100) NOT NULL, precio DECIMAL(10,2) NOT NULL, stock INT, categoria VARCHAR(50));",
            "CREATE TABLE productos (id INT PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(100), precio DECIMAL(10,2), stock INT DEFAULT 0);"
        ],
        "ans": 0,
        "exp": "La sintaxis correcta en MySQL: CREATE TABLE nombre (campo tipo restricciones, ...). AUTO_INCREMENT va después del tipo INT en la definición de la columna."
    },

    // ==================== SQL - DIAGRAMA DE BASE DE DATOS ====================
    {
        "profe": false,
        "unit": "SQL - Modelado de Datos",
        "diff": "hard",
        "q": "Observa el diagrama ER y determina la consulta correcta para obtener: nombre del cliente, fecha de pedido y productos comprados (incluyendo cantidad y precio unitario).",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Diagrama ER</strong><br><br>
<span style="color:#9cdcfe;">clientes</span> (id, nombre, email)<br>
   │ 1<br>
   │<br>
   └──── <span style="color:#9cdcfe;">pedidos</span> (id, fecha, cliente_id)<br>
          │ 1<br>
          │<br>
          └──── <span style="color:#9cdcfe;">detalles_pedido</span> (pedido_id, producto_id, cantidad, precio_unitario)<br>
                 │<br>
                 └──── <span style="color:#9cdcfe;">productos</span> (id, nombre, precio)
</div>
<textarea style="width:100%;height:100px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu consulta SQL aquí..."></textarea>
</div>`,
        "opts": [
            "SELECT c.nombre, p.fecha, pr.nombre AS producto, dp.cantidad, dp.precio_unitario FROM clientes c JOIN pedidos p ON c.id = p.cliente_id JOIN detalles_pedido dp ON p.id = dp.pedido_id JOIN productos pr ON dp.producto_id = pr.id;",
            "SELECT c.nombre, p.fecha, pr.nombre, dp.cantidad FROM clientes c, pedidos p, detalles_pedido dp, productos pr WHERE c.id = p.cliente_id AND p.id = dp.pedido_id AND dp.producto_id = pr.id;",
            "SELECT c.nombre, p.fecha, pr.nombre, dp.cantidad, dp.precio_unitario FROM clientes c JOIN pedidos p ON c.id = p.cliente_id JOIN detalles_pedido dp ON p.id = dp.pedido_id JOIN productos pr ON dp.producto_id = pr.id ORDER BY p.fecha;",
            "Todas las anteriores son correctas."
        ],
        "ans": 3,
        "exp": "Las tres consultas devuelven el mismo resultado: La opción 0 usa JOINs explícitos, la opción 1 usa join implícito (válido pero menos claro), la opción 2 añade un ORDER BY. Las tres son sintácticamente correctas en SQL estándar."
    },

    // ==================== SQL - ELIMINACIÓN Y ACTUALIZACIÓN ====================
    {
        "profe": false,
        "unit": "SQL - DML (Data Manipulation Language)",
        "diff": "medium",
        "q": "Dada la tabla 'empleados', escribe un comando que: 1) Aumente en un 10% el salario de los empleados del departamento 'Ventas', y 2) Elimine a los empleados del departamento 'Recursos Humanos' que tengan más de 60 años.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: empleados</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">salario</span> DECIMAL(10,2),<br>
<span style="color:#9cdcfe;">departamento</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">edad</span> INT
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe los comandos SQL aquí..."></textarea>
</div>`,
        "opts": [
            "UPDATE empleados SET salario = salario * 1.10 WHERE departamento = 'Ventas'; DELETE FROM empleados WHERE departamento = 'Recursos Humanos' AND edad > 60;",
            "UPDATE empleados SET salario = salario + 10% WHERE departamento = 'Ventas'; DELETE FROM empleados WHERE departamento = 'Recursos Humanos' OR edad > 60;",
            "UPDATE empleados SET salario = (salario * 10 / 100) WHERE departamento = 'Ventas'; DELETE * FROM empleados WHERE departamento = 'Recursos Humanos' AND edad > 60;",
            "UPDATE empleados SET salario = salario * 0.10 WHERE departamento = 'Ventas'; DELETE empleados WHERE departamento = 'Recursos Humanos' AND edad >= 60;"
        ],
        "ans": 0,
        "exp": "Para aumentar en 10%: salario * 1.10. La condición debe ser AND (no OR) para eliminar solo los de RH con más de 60 años. La sintaxis correcta de DELETE no lleva *."
    },

    // ==================== SQL - FUNCIONES DE VENTANA ====================
    {
        "profe": false,
        "unit": "SQL - Funciones de Ventana",
        "diff": "hard",
        "q": "Escribe una consulta que muestre el nombre, salario, y el ranking (RANK) de cada empleado por salario dentro de su departamento.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: empleados</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(50),<br>
<span style="color:#9cdcfe;">salario</span> DECIMAL(10,2),<br>
<span style="color:#9cdcfe;">departamento_id</span> INT
</div>
<textarea style="width:100%;height:100px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu consulta SQL aquí..."></textarea>
</div>`,
        "opts": [
            "SELECT nombre, salario, RANK() OVER (PARTITION BY departamento_id ORDER BY salario DESC) as ranking FROM empleados;",
            "SELECT nombre, salario, RANK() OVER (ORDER BY salario DESC) as ranking FROM empleados GROUP BY departamento_id;",
            "SELECT nombre, salario, ROW_NUMBER() OVER (PARTITION BY departamento_id ORDER BY salario) as ranking FROM empleados;",
            "SELECT nombre, salario, DENSE_RANK() OVER (PARTITION BY departamento_id ORDER BY salario DESC) as ranking FROM empleados;"
        ],
        "ans": 0,
        "exp": "RANK() OVER (PARTITION BY departamento_id ORDER BY salario DESC): PARTITION BY divide por departamento, ORDER BY DESC ordena de mayor a menor salario. RANK() asigna el mismo rango a salarios iguales."
    },

    // ==================== SQL - ÍNDICES Y RENDIMIENTO ====================
    {
        "profe": false,
        "unit": "SQL - Optimización e Índices",
        "diff": "medium",
        "q": "Dada una tabla 'ventas' con más de 10 millones de registros, ¿qué índice crearías para optimizar la consulta: SELECT * FROM ventas WHERE fecha BETWEEN '2025-01-01' AND '2025-12-31' AND cliente_id = 12345?",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: ventas</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">fecha</span> DATE,<br>
<span style="color:#9cdcfe;">cliente_id</span> INT,<br>
<span style="color:#9cdcfe;">monto</span> DECIMAL(10,2),<br>
<span style="color:#9cdcfe;">producto_id</span> INT
</div>
<textarea style="width:100%;height:80px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu comando CREATE INDEX aquí..."></textarea>
</div>`,
        "opts": [
            "CREATE INDEX idx_ventas_fecha_cliente ON ventas(fecha, cliente_id);",
            "CREATE INDEX idx_ventas_cliente ON ventas(cliente_id);",
            "CREATE INDEX idx_ventas_fecha ON ventas(fecha);",
            "CREATE INDEX idx_ventas_fecha_cliente_monto ON ventas(fecha, cliente_id, monto);"
        ],
        "ans": 0,
        "exp": "El índice compuesto (fecha, cliente_id) es el más eficiente porque cubre exactamente las dos condiciones WHERE. El orden importa: primero fecha por el BETWEEN, luego cliente_id. Incluir monto (opción 3) sería innecesario para esta consulta SELECT *."
    },

    // ==================== SQL - PROCEDIMIENTOS ALMACENADOS ====================
    {
        "profe": false,
        "unit": "SQL - Procedimientos Almacenados",
        "diff": "hard",
        "q": "Crea un procedimiento almacenado llamado 'actualizar_stock' que reciba producto_id y cantidad, y actualice el stock de la tabla 'productos'. El procedimiento debe prevenir que el stock quede negativo.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Tabla: productos</strong><br>
<span style="color:#9cdcfe;">id</span> INT PRIMARY KEY,<br>
<span style="color:#9cdcfe;">nombre</span> VARCHAR(100),<br>
<span style="color:#9cdcfe;">stock</span> INT<br><br>
<strong style="color:#569cd6;">Requisitos:</strong><br>
• Validar que la cantidad no sea mayor al stock actual<br>
• Mostrar un mensaje de error si no hay stock suficiente
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu procedimiento almacenado aquí..."></textarea>
</div>`,
        "opts": [
            "CREATE PROCEDURE actualizar_stock(IN p_producto_id INT, IN p_cantidad INT) BEGIN DECLARE stock_actual INT; SELECT stock INTO stock_actual FROM productos WHERE id = p_producto_id; IF stock_actual >= p_cantidad THEN UPDATE productos SET stock = stock - p_cantidad WHERE id = p_producto_id; ELSE SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Stock insuficiente'; END IF; END;",
            "CREATE PROCEDURE actualizar_stock(p_producto_id INT, p_cantidad INT) BEGIN UPDATE productos SET stock = stock - p_cantidad WHERE id = p_producto_id; END;",
            "CREATE PROCEDURE actualizar_stock(IN p_producto_id INT, IN p_cantidad INT) BEGIN SELECT stock FROM productos WHERE id = p_producto_id; IF stock >= p_cantidad THEN UPDATE productos SET stock = stock - p_cantidad WHERE id = p_producto_id; END IF; END;",
            "PROCEDURE actualizar_stock(IN p_producto_id INT, IN p_cantidad INT) BEGIN IF (SELECT stock FROM productos WHERE id = p_producto_id) >= p_cantidad THEN UPDATE productos SET stock = stock - p_cantidad WHERE id = p_producto_id; END IF; END;"
        ],
        "ans": 0,
        "exp": "La opción correcta: 1) Declara variable stock_actual, 2) La asigna con SELECT INTO, 3) Valida con IF, 4) Usa SIGNAL SQLSTATE para lanzar error (buena práctica). Las otras opciones no validan stock suficiente."
    },

    // ==================== BASH - SCRIPTING ====================
    {
        "profe": false,
        "unit": "Bash - Scripting Avanzado",
        "diff": "hard",
        "q": "Escribe un script bash que recorra todos los archivos .log en el directorio actual, cuente las líneas que contienen la palabra 'ERROR', y muestre un resumen al final.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Requisitos del script:</strong><br>
• Recorrer todos los archivos .log del directorio actual<br>
• Contar líneas con la palabra "ERROR" (case sensitive)<br>
• Mostrar al final: "Total de errores: X en Y archivos"
</div>
<textarea style="width:100%;height:120px;font-family:monospace;background:#1e1e1e;color:#00ff00;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu script bash aquí..."></textarea>
</div>`,
        "opts": [
            "for archivo in *.log; do total=$(grep -c 'ERROR' $archivo); if [ $total -gt 0 ]; then echo \"$archivo: $total errores\"; sum=$((sum+total)); count=$((count+1)); fi; done; echo \"Total de errores: $sum en $count archivos\";",
            "grep -c 'ERROR' *.log | awk '{sum+=$1; count++} END {print \"Total de errores: \" sum \" en \" count \" archivos\"}'",
            "find . -name '*.log' -exec grep -l 'ERROR' {} \\; | wc -l",
            "ls *.log | xargs grep 'ERROR' | wc -l"
        ],
        "ans": 0,
        "exp": "La opción 0 es un script completo: 1) Itera archivos .log, 2) Cuenta errores por archivo con grep -c, 3) Acumula totales, 4) Muestra el resumen. La opción 1 es un comando corto, no un script. La opción 2 solo cuenta archivos que tienen ERROR. La opción 3 solo cuenta líneas de error sin desglosar por archivo."
    },

    // ==================== BASH - PIPELINES Y LOGS ====================
    {
        "profe": false,
        "unit": "Bash - Pipelines y Análisis de Logs",
        "diff": "medium",
        "q": "Dado el siguiente pipeline, explica QUÉ HACE CADA PARTE y determina la salida esperada.",
        "extra": `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<div style="color:#aaa;">cat /var/log/nginx/access.log | awk '{print $1}' | sort | uniq -c | sort -rn | head -5</div>
</div>
<table class="subnet-table">
<thead><tr><th>Parte del comando</th><th>¿Qué hace?</th></tr></thead>
<tbody>
  <tr><td>cat /var/log/nginx/access.log</td><td><input placeholder="explica"></td></tr>
  <tr><td>awk '{print $1}'</td><td><input placeholder="explica"></td></tr>
  <tr><td>sort</td><td><input placeholder="explica"></td></tr>
  <tr><td>uniq -c</td><td><input placeholder="explica"></td></tr>
  <tr><td>sort -rn</td><td><input placeholder="explica"></td></tr>
  <tr><td>head -5</td><td><input placeholder="explica"></td></tr>
</tbody>
</table>
</div>`,
        "opts": [
            "Muestra las 5 IPs que más solicitudes han hecho al servidor Nginx.",
            "Muestra los 5 códigos de estado HTTP más comunes.",
            "Muestra las 5 URLs más solicitadas.",
            "Muestra las 5 IPs con más solicitudes y la cantidad de solicitudes de cada una."
        ],
        "ans": 0,
        "exp": "Este pipeline: 1) cat → lee el log de Nginx, 2) awk '{print $1}' → extrae el primer campo (generalmente la IP del cliente), 3) sort → ordena las IPs, 4) uniq -c → cuenta ocurrencias únicas, 5) sort -rn → ordena numéricamente de mayor a menor, 6) head -5 → muestra los 5 primeros. \n\n" +
             "Salida típica:\n" +
             "  1574 192.168.1.100\n" +
             "   832 10.0.0.55\n" +
             "   421 172.16.0.10\n" +
             "   398 192.168.1.101\n" +
             "   276 10.0.0.60\n\n" +
             "Esto es útil para detectar: 1) Posibles ataques DDoS, 2) Usuarios más activos, 3) Patrones de tráfico, 4) IPs a monitorear o bloquear."
    },

    // ==================== BASH - MONITOREO DE SISTEMA ====================
    {
        "profe": false,
        "unit": "Bash - Monitoreo de Sistema",
        "diff": "hard",
        "q": "Escribe un script que monitoree el uso de memoria y CPU cada 5 segundos, y si el uso de CPU supera el 80% o la memoria libre es menor a 500MB, envíe una alerta por consola.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Requisitos del script:</strong><br>
• Monitorear cada 5 segundos (loop infinito con sleep 5)<br>
• Si CPU > 80% → mensaje: "ALERTA: CPU al X%"<br>
• Si Memoria Libre < 500MB → mensaje: "ALERTA: Memoria baja (X MB libres)"<br>
• Mostrar timestamp en cada chequeo
</div>
<textarea style="width:100%;height:140px;font-family:monospace;background:#1e1e1e;color:#00ff00;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu script bash aquí..."></textarea>
</div>`,
        "opts": [
            "while true; do cpu=$(top -bn1 | grep 'Cpu(s)' | awk '{print $2}' | cut -d'%' -f1); mem=$(free -m | grep 'Mem:' | awk '{print $4}'); timestamp=$(date '+%Y-%m-%d %H:%M:%S'); echo \"$timestamp - CPU: $cpu% | Memoria libre: $mem MB\"; if (( $(echo \"$cpu > 80\" | bc -l) )); then echo \"⚠️ ALERTA: CPU al $cpu%\"; fi; if [ $mem -lt 500 ]; then echo \"⚠️ ALERTA: Memoria baja ($mem MB libres)\"; fi; sleep 5; done;",
            "watch -n 5 'top -bn1 | head -5; free -m | head -2'",
            "while true; do top -bn1 | head -5; free -m; sleep 5; done",
            "while sleep 5; do ps aux --sort=-%cpu | head -10; free -m; done"
        ],
        "ans": 0,
        "exp": "La opción correcta: 1) while true para loop infinito, 2) top -bn1 para una sola iteración de top, 3) grep y awk para extraer CPU, 4) free -m para memoria en MB, 5) date para timestamp, 6) comparaciones con if, 7) sleep 5 al final. El comando bc -l se usa para comparar flotantes (CPU > 80)."
    },

    // ==================== PYTHON - ANÁLISIS DE DATOS ====================
    {
        "profe": false,
        "unit": "Python - Pandas y Análisis de Datos",
        "diff": "hard",
        "q": "Dado un DataFrame con ventas mensuales, escribe código para: 1) Agrupar por producto, 2) Calcular ventas totales por producto, 3) Ordenar descendente, 4) Mostrar los 5 productos más vendidos.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">DataFrame: ventas</strong><br>
<span style="color:#9cdcfe;">producto</span> (str), <span style="color:#9cdcfe;">mes</span> (str), <span style="color:#9cdcfe;">ventas</span> (int)<br><br>
<strong style="color:#569cd6;">Ejemplo:</strong><br>
producto  | mes     | ventas<br>
---------|---------|--------<br>
"Laptop"  | "Enero" | 150<br>
"Mouse"   | "Enero" | 80<br>
"Laptop"  | "Febrero"| 200<br>
"Teclado" | "Enero" | 120
</div>
<textarea style="width:100%;height:100px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu código Python aquí..."></textarea>
</div>`,
        "opts": [
            "top_productos = ventas.groupby('producto')['ventas'].sum().sort_values(ascending=False).head(5)",
            "top_productos = ventas.groupby('producto').sum().sort_values(by='ventas', ascending=False)[:5]",
            "top_productos = ventas.pivot_table(index='producto', values='ventas', aggfunc='sum').sort_values('ventas', ascending=False).head()",
            "Todas las anteriores son correctas."
        ],
        "ans": 3,
        "exp": "Las tres opciones son sintácticamente correctas en Pandas: 1) groupby + sum + sort_values + head, 2) groupby + sum + sort_values con slicing, 3) pivot_table con aggfunc='sum'. Todas producen el mismo resultado: un Series/DataFrame con los productos y sus ventas totales ordenados de mayor a menor, mostrando solo los primeros 5."
    },

    // ==================== PYTHON - ETL ====================
    {
        "profe": false,
        "unit": "Python - ETL (Extract, Transform, Load)",
        "diff": "hard",
        "q": "Escribe un script Python que lea un archivo CSV de ventas, limpie los datos (elimine registros con campos vacíos y valores negativos), y cargue los datos limpios en una base de datos SQLite.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Archivo: ventas.csv</strong><br>
id,producto,cantidad,precio<br>
1,Teclado,5,20000<br>
2,Mouse,-3,-15000<br>
3,Monitor,8,250000<br>
4,,6,180000<br>
5,Teclado,0,0<br><br>
<strong style="color:#569cd6;">Tabla SQLite: ventas</strong><br>
id INT PRIMARY KEY, producto VARCHAR(50), cantidad INT, precio INT
</div>
<textarea style="width:100%;height:140px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu script Python aquí..."></textarea>
</div>`,
        "opts": [
            "import pandas as pd; import sqlite3; df = pd.read_csv('ventas.csv'); df_clean = df.dropna().query('cantidad > 0 and precio > 0'); conn = sqlite3.connect('ventas.db'); df_clean.to_sql('ventas', conn, if_exists='replace', index=False); conn.close();",
            "import csv; import sqlite3; conn = sqlite3.connect('ventas.db'); cursor = conn.cursor(); cursor.execute('CREATE TABLE IF NOT EXISTS ventas (id INT, producto VARCHAR(50), cantidad INT, precio INT)'); with open('ventas.csv', 'r') as f: reader = csv.DictReader(f); for row in reader: if row['producto'] and int(row['cantidad']) > 0 and int(row['precio']) > 0: cursor.execute('INSERT INTO ventas VALUES (?,?,?,?)', (row['id'], row['producto'], row['cantidad'], row['precio'])); conn.commit(); conn.close();",
            "import pandas as pd; df = pd.read_csv('ventas.csv'); df_clean = df[df['producto'].notna() & (df['cantidad'] > 0) & (df['precio'] > 0)]; df_clean.to_csv('ventas_clean.csv', index=False);",
            "Las opciones A y B son correctas (una usa Pandas, otra csv nativo)."
        ],
        "ans": 3,
        "exp": "La opción A (Pandas) es más concisa y eficiente para datasets grandes. La opción B (csv nativo) es más verbosa pero no requiere librerías externas. Ambas realizan: 1) Extracción desde CSV, 2) Limpieza (eliminar nulos y valores negativos), 3) Carga a SQLite. Ambas son válidas; la elección depende del contexto."
    },

    // ==================== JAVASCRIPT - MANIPULACIÓN DE ARRAYS ====================
    {
        "profe": false,
        "unit": "JavaScript - Arrays y Objetos",
        "diff": "medium",
        "q": "Dado el array de objetos 'usuarios', escribe una función que devuelva un array con los nombres de los usuarios mayores de edad (>= 18 años), ordenados alfabéticamente.",
        "extra": `
<div class="extra-content">
<div style="background:#1e1e1e;color:#d4d4d4;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<strong style="color:#569cd6;">Array: usuarios</strong><br>
const usuarios = [<br>
  &nbsp;&nbsp;{ nombre: 'Ana', edad: 25 },<br>
  &nbsp;&nbsp;{ nombre: 'Luis', edad: 17 },<br>
  &nbsp;&nbsp;{ nombre: 'Carlos', edad: 30 },<br>
  &nbsp;&nbsp;{ nombre: 'Marta', edad: 16 },<br>
  &nbsp;&nbsp;{ nombre: 'Pedro', edad: 22 }<br>
];
</div>
<textarea style="width:100%;height:80px;font-family:monospace;background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:4px;padding:8px;" placeholder="Escribe tu función JavaScript aquí..."></textarea>
</div>`,
        "opts": [
            "const mayores = usuarios.filter(u => u.edad >= 18).map(u => u.nombre).sort();",
            "const mayores = usuarios.sort((a,b) => a.nombre - b.nombre).filter(u => u.edad >= 18).map(u => u.nombre);",
            "const mayores = usuarios.map(u => u.nombre).filter(u => u.edad >= 18).sort();",
            "const mayores = usuarios.filter(u => u.edad > 18).map(u => u.nombre).sort();"
        ],
        "ans": 0,
        "exp": "El orden de operaciones es clave: 1) filter para mayores de edad (>= 18), 2) map para extraer nombres, 3) sort para ordenar alfabéticamente. La opción B falla porque sort compara objetos, no nombres. La opción C falla porque map pierde la información de edad. La opción D excluye a los de 18 años."
    },

    P('SQL - Comandos', 'easy',
    '¿Cuál es la diferencia entre DELETE y TRUNCATE?',
    ['DELETE es DML: puede usar WHERE y registra cada fila borrada; TRUNCATE vacía la tabla completa y no admite WHERE',
     'Son idénticos en todo',
     'TRUNCATE puede usar WHERE; DELETE no',
     'DELETE elimina la estructura de la tabla'],
    0,
    'Ambos quitan datos, pero DELETE es más lento y reversible dentro de una transacción; TRUNCATE es rápido y mantiene la estructura.',
    TABLA([
      ['Comando', 'Qué elimina', 'Tipo', 'Acepta WHERE'],
      ['DELETE', 'Filas (algunas o todas)', 'DML', 'Sí'],
      ['TRUNCATE', 'Todas las filas', 'DDL', 'No'],
      ['DROP', 'La tabla completa (estructura y datos)', 'DDL', 'No'],
    ])),

  P('SQL - Comandos', 'medium',
    '¿Cuál NO es un comando DML?',
    ['SELECT', 'INSERT', 'CREATE TABLE', 'UPDATE'],
    2,
    'DML = manipulación de datos (SELECT, INSERT, UPDATE, DELETE). CREATE TABLE es DDL (definición de estructura).'),

  P('SQL - Comandos', 'medium',
    '¿Qué sentencia confirma de forma permanente una transacción?',
    ['ROLLBACK', 'COMMIT', 'SAVEPOINT', 'LOCK'],
    1,
    'COMMIT guarda los cambios de la transacción; ROLLBACK los deshace.'),

  P('SQL - Consultas', 'medium',
    '¿Cuál es la diferencia entre WHERE y HAVING?',
    ['WHERE filtra filas antes de agrupar; HAVING filtra grupos después de GROUP BY',
     'HAVING filtra filas antes de agrupar; WHERE filtra grupos',
     'Son sinónimos',
     'HAVING solo funciona si no hay GROUP BY'],
    0,
    'Ejemplo: WHERE precio > 100 descarta filas; HAVING SUM(precio) > 1000 descarta grupos ya sumados.'),

  P('SQL - Consultas', 'medium',
    '¿Cuál es la diferencia entre UNION y UNION ALL?',
    ['UNION elimina duplicados; UNION ALL conserva todos los registros y es más rápido',
     'UNION ALL elimina duplicados; UNION los conserva',
     'UNION solo une tablas con distinto número de columnas',
     'Son idénticos en todos los casos'],
    0,
    'Como UNION debe comparar filas para quitar duplicados, es más costoso. Si sabes que no hay duplicados, usa UNION ALL.'),

  P('SQL - Consultas', 'medium',
    '¿Qué tipo de JOIN devuelve solo las filas que tienen coincidencia en ambas tablas?',
    ['LEFT JOIN', 'INNER JOIN', 'FULL OUTER JOIN', 'CROSS JOIN'],
    1,
    'INNER JOIN es la intersección. Los demás incluyen filas sin coincidencia.',
    TABLA([
      ['JOIN', 'Qué devuelve'],
      ['INNER', 'Solo filas con coincidencia en ambas tablas'],
      ['LEFT', 'Todas las de la izquierda, más coincidencias de la derecha (NULL si no hay)'],
      ['RIGHT', 'Todas las de la derecha, más coincidencias de la izquierda'],
      ['FULL OUTER', 'Todas las filas de ambas tablas'],
    ])),

  P('SQL - Consultas', 'medium',
    '¿Cuál es la diferencia entre EXISTS e IN en una subconsulta?',
    ['EXISTS evalúa si la subconsulta devuelve al menos una fila; IN compara el valor con la lista de resultados',
     'IN devuelve un booleano; EXISTS devuelve una lista',
     'Son equivalentes siempre, sin excepción',
     'EXISTS solo funciona con números'],
    0,
    'EXISTS suele ser más eficiente con subconsultas correlacionadas o grandes, porque se detiene al encontrar la primera coincidencia.'),

  P('SQL - Consultas', 'medium',
    '¿Cómo se verifica correctamente si un campo es NULL?',
    ['campo = NULL', 'campo IS NULL', 'campo == NULL', 'campo LIKE NULL'],
    1,
    'NULL representa "desconocido": cualquier comparación con = da resultado desconocido, por eso se usa IS NULL o IS NOT NULL.'),

  P('SQL - Consultas', 'medium',
    '¿Qué es una vista (VIEW) en SQL?',
    ['Una consulta guardada que se comporta como una tabla virtual',
     'Una copia física y permanente de una tabla',
     'Un índice clustered',
     'Un procedimiento que hace backup'],
    0,
    'La vista no guarda datos propios (en general): cada vez que se consulta, ejecuta la consulta que la define.'),

  P('SQL - Diseño', 'medium',
    '¿Qué exige la Primera Forma Normal (1FN)?',
    ['Que cada celda contenga un solo valor atómico y que cada fila sea identificable',
     'Que no existan dependencias transitivas',
     'Que todas las tablas tengan la misma cantidad de columnas',
     'Que no existan claves foráneas'],
    0,
    'Por ejemplo, una columna "telefonos" con "123, 456" viola la 1FN; debe separarse en filas o en otra tabla.'),

  P('SQL - Diseño', 'hard',
    '¿Qué busca eliminar la Tercera Forma Normal (3FN)?',
    ['Dependencias transitivas: atributos que dependen de otro atributo que no es clave',
     'Valores repetidos dentro de una misma celda',
     'Dependencias parciales de una clave compuesta',
     'Tablas sin nombre'],
    0,
    'Ejemplo: en Empleado(id, depto, ciudad_depto), la ciudad depende del depto y no de la clave; debe ir a una tabla Departamento.'),

  P('SQL - Diseño', 'medium',
    '¿Cuál es la diferencia entre PRIMARY KEY y UNIQUE?',
    ['PRIMARY KEY identifica cada fila de forma única y no admite NULL; UNIQUE evita duplicados, pero una tabla puede tener varias restricciones UNIQUE',
     'UNIQUE identifica la fila y PRIMARY KEY permite duplicados',
     'Son lo mismo y no tienen diferencias',
     'PRIMARY KEY puede repetir valores siempre que sean distintos tipos'],
    0,
    'Una tabla tiene una sola clave primaria, pero puede tener muchas restricciones UNIQUE.'),

  P('SQL - Diseño', 'medium',
    '¿Cuál es la diferencia entre un índice clustered y uno non-clustered?',
    ['El clustered ordena físicamente los datos (solo puede haber uno por tabla); el non-clustered es una estructura aparte que apunta a las filas',
     'El non-clustered ordena físicamente la tabla; el clustered es una estructura aparte',
     'Puede haber infinitos índices clustered por tabla',
     'Son lo mismo con distinto nombre'],
    0,
    'Como los datos solo pueden ordenarse de una forma física, la tabla solo puede tener un índice clustered.'),

  P('SQL - Tipos de datos', 'easy',
    '¿Cuál es la diferencia entre VARCHAR y CHAR?',
    ['VARCHAR ocupa solo lo necesario (longitud variable); CHAR reserva siempre la longitud fija definida',
     'CHAR es de longitud variable; VARCHAR es de longitud fija',
     'No hay diferencia',
     'CHAR solo puede guardar números'],
    0,
    'Ejemplo: CHAR(10) guarda "Ana" rellenando con espacios hasta 10; VARCHAR(10) guarda solo "Ana".'),

  P('SQL - Transacciones', 'hard',
    '¿Qué garantiza la propiedad de Aislamiento (Isolation) en ACID?',
    ['Que las transacciones concurrentes no interfieran de forma visible entre sí',
     'Que todas las operaciones se completen o ninguna',
     'Que los datos persistan tras una caída del servidor',
     'Que los datos cumplan todas las reglas de integridad definidas'],
    0,
    'ACID: Atomicidad (todo o nada), Consistencia (reglas válidas), Aislamiento (concurrencia controlada) y Durabilidad (persistencia).'),


    P('SQL - Programación en BD', 'medium', '¿Cuál es la diferencia entre un procedimiento almacenado y una función en SQL?',
        ['La función devuelve un valor y puede usarse dentro de consultas; el procedimiento puede no devolver valor y se invoca con CALL o EXEC', 'Son idénticos', 'La función no puede tener parámetros', 'El procedimiento solo lee datos'], 0,
        'Ambos guardan lógica en la base de datos.',
        TABLA([['Aspecto', 'Función', 'Procedimiento'], ['Devuelve valor', 'Sí, obligatorio', 'Opcional'], ['Uso', 'Dentro de SELECT', 'Con CALL / EXEC'], ['Puede modificar datos', 'Depende del motor (generalmente no)', 'Sí']])),
      P('SQL - Programación en BD', 'medium', '¿Qué es un trigger?',
        ['Código que se ejecuta automáticamente ante un evento (INSERT, UPDATE o DELETE) sobre una tabla', 'Un índice clustered', 'Una vista materializada', 'Un tipo de dato'], 0,
        'Ejemplo: registrar en una tabla de auditoría cada cambio de precio.'),
      P('SQL - Consultas avanzadas', 'medium', '¿Qué es una CTE (cláusula WITH)?',
        ['Una consulta temporal con nombre que existe solo durante la sentencia', 'Una tabla física permanente', 'Un índice', 'Un tipo de JOIN'], 0,
        'Mejora la legibilidad frente a subconsultas anidadas y permite recursión con WITH RECURSIVE.'),
      P('SQL - Consultas avanzadas', 'hard', '¿Cuál es la diferencia entre ROW_NUMBER, RANK y DENSE_RANK?',
        ['ROW_NUMBER numera sin repetir; RANK repite en empates y salta números; DENSE_RANK repite en empates sin saltar', 'Son idénticas', 'RANK no admite empates', 'DENSE_RANK siempre salta números'], 0,
        'Si dos filas empatan en el primer lugar: RANK da 1, 1, 3; DENSE_RANK da 1, 1, 2; ROW_NUMBER da 1, 2, 3.',
        TABLA([['Empate en 2 filas', 'ROW_NUMBER', 'RANK', 'DENSE_RANK'], ['Resultado', '1, 2, 3', '1, 1, 3', '1, 1, 2']])),
      P('SQL - Consultas avanzadas', 'medium', '¿Qué hace la cláusula CASE en SQL?',
        ['Aplica lógica condicional (si-entonces) dentro de una consulta', 'Crea tablas', 'Define claves primarias', 'Hace copias de seguridad'], 0,
        'Ejemplo: CASE WHEN edad >= 18 THEN "Adulto" ELSE "Menor" END.'),
      P('SQL - Consultas avanzadas', 'medium', '¿Qué devuelve COALESCE(NULL, \'A\', \'B\')?',
        ['NULL', "'A'", "'B'", "'AB'"], 1,
        'COALESCE devuelve el primer valor no nulo de la lista.'),
      P('SQL - Consultas básicas', 'medium', '¿Qué hace SELECT DISTINCT?',
        ['Elimina las filas duplicadas del resultado', 'Ordena alfabéticamente', 'Borra duplicados de la tabla', 'Cuenta las filas'], 0,
        'No modifica la tabla; solo afecta al resultado de la consulta.'),
      P('SQL - Consultas básicas', 'easy', 'En LIKE, ¿qué representa el símbolo %?',
        ['Cualquier cantidad de caracteres (incluso ninguno)', 'Exactamente un carácter', 'Un espacio en blanco', 'Un número'], 0,
        'LIKE "A%" encuentra "Ana", "Ale" y "A". Para exactamente un carácter se usa el guion bajo (_).'),
      P('SQL - Consultas básicas', 'medium', '¿Qué cláusula limita la cantidad de filas devueltas en MySQL o PostgreSQL?',
        ['LIMIT', 'TOP', 'MAX', 'CUT'], 0,
        'SQL Server usa TOP; el estándar moderno usa FETCH FIRST n ROWS ONLY.'),
    
      P('SQL - Restricciones', 'medium', '¿Qué hace ON DELETE CASCADE en una clave foránea?',
        ['Borra también las filas hijas al borrar la fila padre', 'Impide borrar la fila padre', 'Pone NULL en las filas hijas', 'No hace nada'], 0,
        'Es la opción de integridad referencial que borra en cadena.'),
      P('SQL - Restricciones', 'medium', '¿Para qué sirve una restricción CHECK?',
        ['Validar que los valores cumplan una condición, por ejemplo edad >= 0', 'Crear índices', 'Generar IDs automáticos', 'Ordenar la tabla'], 0,
        'Ejemplo: CHECK (precio > 0) impide guardar precios negativos.'),
      P('SQL - Permisos y transacciones', 'medium', '¿Qué comando otorga permisos a un usuario de la base de datos?',
        ['GRANT', 'REVOKE', 'COMMIT', 'CREATE'], 0,
        'GRANT otorga, REVOKE quita. Ambos son comandos DCL (control de datos).'),
      P('SQL - Permisos y transacciones', 'hard', '¿Qué nivel de aislamiento permite lecturas sucias (dirty reads)?',
        ['READ UNCOMMITTED', 'SERIALIZABLE', 'REPEATABLE READ', 'READ COMMITTED'], 0,
        'De menor a mayor aislamiento: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE.'),
      P('SQL - Permisos y transacciones', 'hard', '¿Qué es un deadlock (interbloqueo)?',
        ['Dos transacciones se bloquean esperándose mutuamente y ninguna avanza', 'Un error de sintaxis', 'Una copia de seguridad fallida', 'Un tipo de índice'], 0,
        'Los motores lo detectan y eligen una víctima que se revierte automáticamente.'),
    
      P('Diseño de bases de datos', 'medium', '¿Qué diferencia un RDBMS de un DBMS?',
        ['RDBMS es un DBMS basado en el modelo relacional con tablas y claves', 'Son lo mismo', 'DBMS es solo para archivos de texto', 'RDBMS no tiene consultas'], 0,
        'Todo RDBMS es un DBMS, pero no al revés (por ejemplo, una base de datos orientada a objetos o un sistema de archivos con índice).'),
      P('Diseño de bases de datos', 'medium', 'En la arquitectura ANSI de tres niveles, ¿qué nivel describe cómo se almacenan físicamente los datos?',
        ['Nivel interno', 'Nivel externo', 'Nivel conceptual', 'Nivel de aplicación'], 0,
        'Nivel externo: vistas de cada usuario. Conceptual: estructura lógica completa. Interno: almacenamiento físico.'),
      P('Diseño de bases de datos', 'medium', 'En un modelo entidad-relación, ¿cómo se representa una relación N:M al pasar a tablas?',
        ['Con una tabla intermedia que contiene las claves de ambas entidades', 'Con un campo extra en una sola tabla', 'Con una vista', 'No se puede representar'], 0,
        'Ejemplo: Estudiante y Curso se relacionan con la tabla Matricula(id_estudiante, id_curso).'),
      P('Diseño de bases de datos', 'hard', '¿Cuándo se desnormaliza intencionalmente una base de datos?',
        ['Para mejorar el rendimiento de lecturas, aceptando cierta redundancia', 'Para eliminar claves primarias', 'Para cumplir la 1FN', 'Nunca se hace'], 0,
        'Es común en data warehouses y reportes. Se hace con cuidado porque aumenta el riesgo de datos inconsistentes.'),
      P('Diseño de bases de datos', 'medium', '¿Cuál es la diferencia entre OLTP y OLAP?',
        ['OLTP maneja transacciones cotidianas con muchas escrituras pequeñas; OLAP analiza grandes volúmenes para reportes', 'OLAP es solo para escritura', 'Son iguales', 'OLTP es solo para backups'], 0,
        'Ejemplo: OLTP es la caja de una tienda; OLAP es el informe mensual de ventas por región.',
        TABLA([['Aspecto', 'OLTP', 'OLAP'], ['Operaciones', 'Muchas pequeñas', 'Pocas grandes (consultas)'], ['Modelo', 'Normalizado', 'Esquema estrella o copo de nieve'], ['Ejemplo', 'Sistema de ventas', 'Data warehouse']])),
      P('Diseño de bases de datos', 'medium', '¿Qué forma tiene un esquema estrella (star schema)?',
        ['Una tabla de hechos en el centro conectada a varias tablas de dimensiones', 'Todas las tablas conectadas en cadena', 'Una sola tabla gigante', 'Tablas sin claves'], 0,
        'La tabla de hechos guarda métricas (ventas, cantidad) y las dimensiones guardan contexto (tiempo, producto, cliente).'),
      P('Diseño de bases de datos', 'medium', 'En la arquitectura de bases de datos, ¿qué es una vista materializada?',
        ['Una vista cuyo resultado se guarda físicamente y se actualiza periódicamente', 'Una vista que nunca se puede consultar', 'Un índice de texto', 'Un trigger de auditoría'], 0,
        'Acelera consultas costosas, a cambio de datos que pueden estar un poco desactualizados.'),
      P('Diseño de bases de datos', 'easy', '¿Qué restricción impide que una columna tenga valores repetidos sin ser clave primaria?',
        ['UNIQUE', 'NOT NULL', 'DEFAULT', 'CHECK'], 0,
        'UNIQUE evita duplicados; NOT NULL evita vacíos; DEFAULT asigna un valor inicial; CHECK valida una condición.'),
      P('Diseño de bases de datos', 'medium', '¿Qué es la desnormalización?',
        ['Agregar redundancia a propósito para acelerar lecturas', 'Eliminar todas las tablas', 'Quitar las claves foráneas', 'Ordenar las filas'], 0,
        'Es el opuesto de normalizar: se acepta repetir datos para evitar JOIN costosos.'),
        
]

export default preguntas_bd_estructurados;