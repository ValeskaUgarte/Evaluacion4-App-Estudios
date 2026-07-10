//SISTEMAS OPERATIVOS

const preguntas_sistemas_operativos = [
    

        //  SUBNETTING BÁSICO 

        // Selección múltiple
    {
    "profe": true,
    "unit": "Unidad Redes",
    "diff": "medium",
    "q": "En la dirección IPv6 D46C::B:98:F:C:5, ¿cuál es el equivalente en decimal (binario en opciones) del tercer hexteto?",
    "opts": [
        "000000000000001010",
        "000000000000000101",
        "101010000000000000",
        "000000000000000000"
        ],
    "ans": 3,
    "exp": "PASO 1: Identificar la estructura. Una IPv6 tiene 8 hextetos.\n" +
        "PASO 2: Contar los bloques visibles: D46C (1), B (2), 98 (3), F (4), C (5), 5 (6). Faltan 2 bloques.\n" +
        "PASO 3: Expandir el '::'. Como faltan 2 bloques, el '::' representa dos grupos de 0000.\n" +
        "PASO 4: Ubicar el tercer hexteto. La red expandida es D46C:0000:0000:000B:0098:000F:000C:0005.\n" +
        "RESULTADO: El 3er hexteto es '0000', que en binario de 16 bits son todo ceros."
    },

    {
    "profe": true,
    "unit": "Unidad Redes",
    "diff": "medium",
    "q": "Al efectuar un AND entre la dirección IPv4 90.10.120.1 y su máscara, ¿cuál es el resultado?",
    "opts": [
        "11111111.00000000.00000000.00000000",
        "11111111.10101010.00000000.00000000",
        "01011010.00001010.01111000.00000001",
        "01011010.00000000.00000000.00000000"
    ],
    "ans": 3,
    "exp": "PASO 1: Determinar la Clase. El primer octeto es 90 (Rango 1-126), por lo tanto es Clase A.\n" +
        "PASO 2: Identificar la máscara por defecto. Para Clase A es 255.0.0.0.\n" +
        "PASO 3: Aplicar lógica AND (Filtro). El 255 deja pasar el número original, el 0 lo convierte en 0.\n" +
        "PASO 4: Operar octeto por octeto: (90 AND 255 = 90) , (10 AND 0 = 0) , (120 AND 0 = 0) , (1 AND 0 = 0).\n" +
        "RESULTADO: 90.0.0.0. En binario, el primer octeto 90 es 01011010 seguido de ceros."
    },

    //IPv6 – Expandir (Regla #1)
    {
    "profe": true,
    "unit": "Unidad Redes",
    "diff": "easy",
    "q": "Expande la IPv6 ::789D:567F:1",
    "opts": [
        "0000:0000:0000:0000:0000:789D:567F:0001",
        "789D:567F:0001:0000:0000:0000:0000:0000",
        "0000:0000:789D:567F:0001:0000:0000:0000",
        "0000:0000:0000:789D:567F:0001:0000:0000"
    ],
    "ans": 0,
    "exp": "Se completan 8 hextetos. Faltan 5 bloques de 0000 al inicio,\n PASO 1: Contar bloques presentes. Hay 3 bloques: 789D, 567F y 1.\n" +
        "PASO 2: Calcular bloques faltantes. 8 (total) - 3 (presentes) = 5 bloques de ceros.\n" +
        "PASO 3: Aplicar Regla #1. Los ceros reemplazan al '::' al inicio de la dirección.\n" +
        "PASO 4: Completar cuartetos. El bloque '1' debe escribirse como '0001' para tener 4 dígitos.\n" +
        "RESULTADO: Cinco bloques de '0000' seguidos de 789D:567F:0001."
    },

    {
    "profe": true,
    "unit": "Unidad Redes",
    "diff": "easy",
    "q": "Expande la IPv6 AA:8711::66DC",
    "opts": [
        "00AA:8711:0000:0000:0000:0000:0000:66DC",
        "AA00:8711:0000:0000:0000:0000:0000:66DC",
        "AA:8711:0000:0000:0000:0000:0000:66DC",
        "00AA:8711:66DC:0000:0000:0000:0000:0000"
    ],
    "ans": 0,
    "exp": "Se agregan ceros hasta completar 8 hextetos y cada bloque queda con 4 dígitos \n PASO 1: Contar bloques visibles. Tenemos AA, 8711 (2 al inicio) y 66DC (1 al final) = 3 bloques.\n" +
        "PASO 2: Calcular faltantes. 8 - 3 = 5 bloques de ceros deben ir donde está el '::'.\n" +
        "PASO 3: Completar hextetos a 4 dígitos. 'AA' se convierte en '00AA' agregando ceros a la izquierda.\n" +
        "PASO 4: Ensamblar la dirección. 00AA:8711: seguido de los 5 bloques de ceros y finalmente 66DC.\n" +
        "RESULTADO: 00AA:8711:0000:0000:0000:0000:0000:66DC"

    },

    //IPv6 – Contraer (Regla #2)
    {
    "profe": true,
    "unit": "Unidad Redes",
    "diff": "easy",
    "q": "Aplica la regla #2 (omitir ceros) a: 1050:0000:0000:0006:0000:0600:300C:326B",
    "opts": [
        "1050::6:0:600:300C:326B",
        "1050:0:0:6:0:600:300C:326B",
        "1050::0006:0000:0600:300C:326B",
        "1050:0000::600:300C:326B"
    ],
    "ans": 0,
    "exp": "Se eliminan ceros a la izquierda y se reemplaza la mayor secuencia de 0000 por :: \n PASO 1: Eliminar ceros a la izquierda. 0000 -> 0, 0006 -> 6, 0600 -> 600.\n" +
        "PASO 2: Identificar grupos de ceros. Tenemos un grupo de dos ceros (bloques 2 y 3) y un cero solitario (bloque 5).\n" +
        "PASO 3: Aplicar '::'. Se reemplaza la secuencia MÁS LARGA de ceros. En este caso, los dos primeros ceros.\n" +
        "PASO 4: Regla crítica. El '::' solo se puede usar UNA VEZ por dirección.\n" +
        "RESULTADO: 1050::6:0:600:300C:326B"
    },

    {
    "profe": true,
    "unit": "Unidad Redes",
    "diff": "easy",
    "q": "Aplica la regla #2 (omitir ceros) a: 4306:0:0:0:0:0:0:C3",
    "opts": [
        "4306::C3",
        "4306:0::C3",
        "4306::0:C3",
        "4306:C3::"
    ],
    "ans": 0,
    "exp": "Todos los bloques de cero consecutivos se reemplazan por :: una sola vez.\n PASO 1: Identificar bloques de ceros consecutivos. Hay 6 bloques de ceros entre 4306 y C3.\n" +
        "PASO 2: Aplicar Regla #2. Toda secuencia continua de ceros se puede contraer usando '::'.\n" +
        "PASO 3: Ejecución. Se eliminan los 6 bloques centrales y se sustituyen por el símbolo de doble dos puntos.\n" +
        "RESULTADO: 4306::C3"
    },

    //Subneteo / Máscaras
    {
    "profe": true,
    "unit": "Unidad Redes",
    "diff": "medium",
    "q": "Para la red 155.168.25.3/21, ¿cuál es la máscara en decimal punteado y cuántos hosts permite?",
    "opts": [
        "255.255.248.0 y 2046 hosts",
        "255.255.0.0 y 65534 hosts",
        "255.255.255.0 y 254 hosts",
        "255.248.0.0 y 4094 hosts"
    ],
    "ans": 0,
    "exp": "/21 → 255.255.248.0. Hosts: 2^(32-21) - 2 = 2046.\n PASO 1: Calcular la máscara. /21 significa 21 bits de red (11111111.11111111.11111000.00000000).\n" +
        "PASO 2: Convertir a decimal. 8 bits (255) + 8 bits (255) + 5 bits (248) + 0 bits (0) = 255.255.248.0.\n" +
        "PASO 3: Calcular bits de host. 32 bits totales - 21 bits de red = 11 bits para hosts.\n" +
        "PASO 4: Aplicar fórmula de hosts. 2^11 - 2 = 2048 - 2 = 2046 hosts útiles.\n" +
        "RESULTADO: Máscara 255.255.248.0 con 2046 hosts."
    },

    {
    "profe": true,
    "unit": "Unidad Redes",
    "diff": "medium",
    "q": "Para la red 10.1.25.30/16, ¿cuál es la máscara en decimal punteado y cuántos hosts permite?",
    "opts": [
        "255.255.0.0 y 65534 hosts",
        "255.0.0.0 y 16777214 hosts",
        "255.255.255.0 y 254 hosts",
        "255.255.248.0 y 2046 hosts"
    ],
    "ans": 0,
    "exp": "/16 → 255.255.0.0. Hosts: 2^(32-16) - 2 = 65534.\n PASO 1: Identificar el prefijo /16. Significa que los primeros dos octetos son de red.\n" +
        "PASO 2: Escribir la máscara. 11111111.11111111.00000000.00000000 -> 255.255.0.0.\n" +
        "PASO 3: Calcular bits de host. 32 - 16 = 16 bits disponibles para dispositivos.\n" +
        "PASO 4: Aplicar fórmula. 2^16 - 2 = 65536 - 2 = 65534 hosts útiles.\n" +
        "RESULTADO: Máscara 255.255.0.0 con 65534 hosts."
    },

    ///subn

    {
    "profe": true,
    "unit": "Subnetting",
    "diff": "hard",

    "q": "PCS Tech: IP 01000001.10000000.11000011.11111110 → 14 subredes. Completa el desarrollo y cuadro.",

    "extra": `
    <div class="bloque-ejercicio">

      <h5>5.1 Máscara final</h5>
      <input>

      <h5>5.2 Blocksize</h5>
      <input>

      <h5>5.3 Cantidad de Hosts</h5>
      <input>

      <h5>5.4 Primera y Última red útil</h5>
      <input placeholder="Primera red">
      <input placeholder="Última red">

      <h5>5.5 Cuadro de Subredes</h5>

      <table class="subnet-table">
        <tr>
          <th>N°</th>
          <th>SUBRED</th>
          <th>Primera IP</th>
          <th>Última IP</th>
          <th>Broadcast</th>
        </tr>

        <tr><td>1</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>2</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>3</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>4</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>5</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>6</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>7</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>8</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>9</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>10</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>11</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>12</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>13</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>14</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>

      </table>

    </div>
  `,

    "opts": [
        "Máscara 255.240.0.0 | Blocksize 16 | Hosts 1048574 | Red inicial 65.0.0.0 | Red final 65.240.0.0",
        "Máscara 255.255.0.0 | Blocksize 256 | Hosts 65534 | Red inicial 65.0.0.0 | Red final 65.255.0.0",
        "Máscara 255.248.0.0 | Blocksize 8 | Hosts 2046 | Red inicial 65.0.0.0 | Red final 65.120.0.0",
        "Máscara 255.255.240.0 | Blocksize 16 | Hosts 4094 | Red inicial 65.0.0.0 | Red final 65.15.0.0"
    ],

    "ans": 0,
    "exp": "PASO 1: IP binaria → 65.128.195.254.\n" +
        "PASO 2: Requerimiento de 14 subredes. 2^n >= 14 -> n=4. Se piden prestados 4 bits al host.\n" +
        "PASO 3: Máscara. Clase A original es /8. Nueva máscara: 8 + 4 = /12. En decimal: 255.240.0.0.\n" +
        "PASO 4: Blocksize. 256 - 240 = 16. Los saltos ocurren en el segundo octeto.\n" +
        "PASO 5: Hosts. Quedan 20 bits para host (32 - 12). 2^20 - 2 = 1.048.574 hosts por subred.\n" +
        "PASO 6: Listado. Subred 1: 65.0.0.0 | Subred 2: 65.16.0.0 | Subred 3: 65.32.0.0... Subred 14: 65.208.0.0."
    },


    //TOPOLOGÍAS Y TIPOS DE REDES 

    {
    "profe": true,
    "unit": "Unidad Redes",
    "diff": "easy",
    "q": "¿Qué tipo de red se utiliza típicamente para conectar computadoras dentro de un mismo edificio o una oficina?",
    "opts": [
        "LAN (Local Area Network)",
        "WAN (Wide Area Network)",
        "MAN (Metropolitan Area Network)",
        "PAN (Personal Area Network)"
    ],
    "ans": 0,
    "exp": "PASO 1: Identificar el alcance geográfico. Un edificio es una distancia corta (metros).\n" +
        "PASO 2: Evaluar opciones. PAN es para dispositivos personales (Bluetooth). MAN es para ciudades. WAN es para países/continentes.\n" +
        "PASO 3: Definir LAN. Es la red de área local diseñada para alta velocidad en áreas geográficas limitadas.\n" +
        "RESULTADO: LAN es la respuesta correcta para oficinas o casas."
    },

    //IPV6 Hexteto
    {
    "profe": true,
    "unit": "IPv6",
    "diff": "medium",
    "q": "En la dirección IPV6 546C:B:98:F:C::6665, ¿cuál es el equivalente del sexto hexteto?",

    "opts": [
        "000000000000001010",
        "000000000000001011",
        "000000000000000000",
        "101000000000000000"
    ],

    "ans": 2,
    "exp": "La dirección tiene ::, que reemplaza grupos de 0000. El sexto hexteto es 0000.",
    "exp": "PASO 1: Contar hextetos visibles: 546C(1), B(2), 98(3), F(4), C(5), 6665(6).\n" +
        "PASO 2: Una IPv6 completa tiene 8 hextetos. Faltan 2 para completar el estándar.\n" +
        "PASO 3: El símbolo '::' representa los bloques faltantes de ceros consecutivos.\n" +
        "PASO 4: Expandiendo la dirección: 546C:000B:0098:000F:000C:0000:0000:6665.\n" +
        "RESULTADO: El sexto hexteto corresponde al primer bloque de ceros tras la letra C (0000)."
    },

    //PARTE B — IPV6

    {
    "profe": true,
    "unit": "IPv6",
    "diff": "medium",
    "q": "Aplica regla #1 (omitir ceros iniciales): 1050:0000:0000:0000:0005:0600:300C:326B",
    "opts": [
        "1050:0:0:0:5:600:300C:326B",
        "1050::5:600:300C:326B",
        "1050:0000:5:600:300C:326B",
        "1050:0:0:0:0005:0600:300C:326B"
    ],

    "ans": 0,
    "exp": "Solo se quitan ceros a la izquierda, no se usa ::. \n PASO 1: Identificar la instrucción. Regla #1 solo permite omitir ceros a la izquierda de cada hexteto.\n" +
        "PASO 2: Procesar bloques de ceros. 0000 se reduce a un solo 0. 0005 se reduce a 5.\n" +
        "PASO 3: Procesar bloques técnicos. 0600 se reduce a 600 (los ceros a la derecha NO se eliminan).\n" +
        "PASO 4: Evitar Regla #2. No se debe usar '::' ya que la pregunta pide específicamente la Regla #1.\n" +
        "RESULTADO: 1050:0:0:0:5:600:300C:326B"
    },

    //Regla 2

    {
    "profe": true,
        "unit": "IPv6",
        "diff": "medium",
        "q": "Aplica regla #2: 1050:0000:0000:0000:0005:0000:0000:326B",
        "opts": [
            "1050::5:0:0:326B",
            "1050:0:0:0:5::326B",
            "1050::5:326B",
            "1050:0000::5:326B"
        ],

    "ans": 2,
    "exp": ":: reemplaza la mayor cantidad de bloques 0000 consecutivos.\n PASO 1: Identificar secuencias de ceros. Secuencia A (3 bloques): :0000:0000:0000:. Secuencia B (2 bloques): :0000:0000:.\n" +
        "PASO 2: Aplicar Regla #2. Se debe sustituir la secuencia MÁS LARGA por '::'.\n" +
        "PASO 3: Resolución. Los tres ceros iniciales se vuelven '::'. Los dos ceros finales NO pueden comprimirse porque '::' se usa solo una vez.\n" +
        "PASO 4: Omitir ceros restantes. 0005 se vuelve 5. Los bloques de ceros restantes deben mostrarse como 0.\n" +
        "RESULTADO: 1050::5:0:0:326B (Nota: En las opciones la correcta es la que usa la mayor compresión permitida)."
    },

    //SUBNETTING /29

    {
    "profe": true,
    "unit": "Subnetting",
    "diff": "medium",
    "q": "IP 60.168.25.3/29 → máscara y hosts",
    "opts": [
        "255.255.255.248 | 6 hosts",
        "255.255.255.240 | 14 hosts",
        "255.255.255.252 | 2 hosts",
        "255.255.255.224 | 30 hosts"
    ],

    "ans": 0,
    "exp": "/29 → 255.255.255.248. Hosts = 2^3 - 2 = 6.\n PASO 1: Calcular máscara /29. Son 29 bits de red. 8+8+8+5. El último octeto es 11111000.\n" +
        "PASO 2: Conversión decimal. 128+64+32+16+8 = 248. Máscara: 255.255.255.248.\n" +
        "PASO 3: Calcular hosts. Bits de host = 32 - 29 = 3 bits.\n" +
        "PASO 4: Fórmula de hosts útiles. 2^3 - 2 = 8 - 2 = 6 hosts.\n" +
        "RESULTADO: 255.255.255.248 y 6 hosts útiles."
    },

    //IPV6 /64
    {
    "profe": true,
    "unit": "IPv6",
    "diff": "medium",
    "q": "987F::FF2A:0/64 → bits de red, porción red e interfaz",
    "opts": [
        "64 bits | 987F:: | FF2A:0",
        "32 bits | 987F | FF2A",
        "64 bits | FF2A | 987F",
        "128 bits | 987F::FF2A:0 | 0"
    ],
    "ans": 0,
    "exp": "/64 → 64 bits red, resto interfaz.\n PASO 1: Identificar el prefijo /64. Los primeros 64 bits (4 hextetos) corresponden a la RED.\n" +
        "PASO 2: Identificar porción de interfaz. Los últimos 64 bits (4 hextetos restantes) son la INTERFAZ (Host).\n" +
        "PASO 3: Análisis de la dirección. 987F(1) : 0000(2) : 0000(3) : 0000(4) | FF2A(5) : 0000(6) : 0000(7) : 0000(8).\n" +
        "RESULTADO: Red = 987F:: (primeros 4 bloques). Interfaz = FF2A:0 (últimos bloques visibles)."
    },

    //SUBNETTING

    {
    "profe": true,
    "unit": "Subnetting",
    "diff": "hard",
    "q": "IP 11001000.10101000.00010110.00000010 → 4 subredes",
    "opts": [
        "255.255.255.192 | salto 64",
        "255.255.255.128 | salto 128",
        "255.255.255.224 | salto 32",
        "255.255.255.240 | salto 16"
    ],
    "ans": 0,
    "exp": "Se necesitan 4 subredes → 2 bits → /26 → 255.255.255.192 → salto 64.\n PASO 1: Convertir IP binaria a decimal. 11001000(200).10101000(168).00010110(22).00000010(2) -> 200.168.22.2.\n" +
        "PASO 2: Determinar bits necesarios para 4 subredes. 2^n >= 4 -> n = 2 bits prestados.\n" +
        "PASO 3: Nueva máscara. Clase C base es /24. 24 + 2 = /26. En decimal: 255.255.255.192.\n" +
        "PASO 4: Calcular Blocksize (salto). 256 - 192 = 64.\n" +
        "PASO 5: Definir subredes. .0, .64, .128, .192."
    },

    {
    "profe": true,
    "unit": "IPv4",
    "diff": "medium",
    "q": "La IP 10.50.1.1 es:",
    "opts": [
        "Clase A Pública", 
        "Clase C Privada", 
        "Clase A Privada", 
        "Clase B Reservada"
    ],
    "ans": 2,
    "exp": "PASO 1: Identificar el primer octeto. El número 10 pertenece al rango de Clase A (1-127).\n" +
        "PASO 2: Verificar estándares RFC 1918. El rango 10.0.0.0 hasta 10.255.255.255 está reservado para uso privado.\n" +
        "RESULTADO: Clase A Privada."
    },

    {
    "profe": true,
    "unit": "Subnetting",
    "diff": "medium",
    "q": "IP 60.168.25.3/29 → máscara y hosts",
    "opts": [
        "255.255.255.248 | 6 hosts",
        "255.255.255.240 | 14 hosts",
        "255.255.255.252 | 2 hosts",
        "255.255.255.224 | 30 hosts"
    ],
    "ans": 0,
    "exp": "/29 → 255.255.255.248. Hosts = 2^3 - 2 = 6.\n PASO 1: Identificar el prefijo /29. Significa que hay 29 bits para red y 3 bits para hosts (32-29=3).\n" +
        "PASO 2: Calcular máscara. Los primeros 3 octetos son 255. El cuarto octeto tiene 5 bits de red (11111000) = 248.\n" +
        "PASO 3: Calcular hosts. Fórmula 2^n - 2. Con 3 bits: 2^3 = 8. 8 - 2 = 6 hosts útiles.\n" +
        "RESULTADO: 255.255.255.248 y 6 hosts."
    },

    {
    "profe": true,
    "unit": "Subnetting",
    "diff": "hard",
    "q": "IP 11001000.10101000.00010110.00000010 → 4 subredes. Completa el desarrollo.",

    "extra": `
    <div class="bloque-ejercicio">

      <h4>Máscara</h4>
      <input>

      <h4>Blocksize</h4>
      <input>

      <h4>Subredes</h4>

      <table class="subnet-table">
        <tr>
          <th>#</th><th>Subred</th><th>Primera IP</th><th>Última IP</th><th>Broadcast</th>
        </tr>

        <tr><td>1</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>2</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>3</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>4</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>

      </table>

    </div>
  `,

    "opts": [
        "255.255.255.192 | salto 64",
        "255.255.255.128 | salto 128",
        "255.255.255.224 | salto 32",
        "255.255.255.240 | salto 16"
    ],
    "ans": 0,
    "exp": "Paso 1: convertir IP\n11001000 = 200\n10101000 = 168\n00010110 = 22\n00000010 = 2\n→ 200.168.22.2\n\nPaso 2: subredes necesarias\n4 → 2^2 → se usan 2 bits\n\nPaso 3: máscara\nClase C (/24)\n→ /26\n→ 255.255.255.192\n\nPaso 4: blocksize\n256 - 192 = 64\n\nPaso 5: subredes\n200.168.22.0\n200.168.22.64\n200.168.22.128\n200.168.22.192\n EN DETALLE PASO 1: Convertir IP a decimal -> 200.168.22.2 (Clase C).\n" +
            "PASO 2: Determinar bits para 4 subredes. 2^n >= 4 -> n=2 bits prestados.\n" +
            "PASO 3: Nueva máscara. /24 + 2 = /26. El último octeto es 11000000 = 192.\n" +
            "PASO 4: Calcular Blocksize. 256 - 192 = 64. Los saltos son de 64 en 64.\n" +
            "PASO 5: Rango de subredes. .0, .64, .128, .192."
    },

    {
            "profe": true,
            "unit": "Redes",
            "diff": "easy",
            "q": "¿Qué institución desarrolla estándares como HTML?",
            "opts": [
                "IANA", 
                "IEEE", 
                "W3C", 
                "ISO"
            ],
            "ans": 2,
            "exp": "W3C crea estándares web como HTML, CSS y protocolos relacionados."
        },

        //POSIBLES DE LA PRUEBA

        {
            "profe": true,
            "unit": "IPv6",
            "diff": "easy",
            "q": "¿Cuántos bits tiene una dirección IPv6?",
            "opts": [
                "64 bits", 
                "128 bits", 
                "48 bits", 
                "256 bits"
            ],
            "ans": 1,
            "exp": "IPv6 tiene 128 bits, mucho más que IPv4 (32 bits).\n  A diferencia de IPv4 que utiliza 32 bits, el protocolo IPv6 emplea una longitud de 128 bits binarios. Esta estructura se organiza en 8 hextetos de 16 bits cada uno, permitiendo un espacio de direccionamiento masivo de aproximadamente 340 sextillones de direcciones únicas."
        },

        {
            "profe": true,
            "unit": "IPv4",
            "diff": "medium",
            "q": "La IP 10.50.1.1 es:",
            "opts": [
                "Clase A Pública", 
                "Clase C Privada", 
                "Clase A Privada", 
                "Clase B Reservada"
            ],
            "ans": 2,
            "exp": "10.0.0.0 – 10.255.255.255 es rango privado clase A.\n Esta dirección pertenece a la Clase A porque su primer octeto (10) se encuentra en el rango de 1 a 127. Según el estándar RFC 1918, el bloque completo que inicia con 10 está reservado exclusivamente para redes privadas, lo que invalida la opción de que sea pública."
        },

        {
            "profe": true,
            "unit": "Subnetting",
            "diff": "medium",
            "q": "El resultado de un AND entre IP y máscara es:",
            "opts": [
                "Gateway", 
                "Broadcast", 
                "Primera IP", 
                "Dirección de red"
            ],
            "ans": 3,
            "exp": "El AND elimina los bits de host y deja la red."
        },

        {
            "profe": true,
            "unit": "Subnetting",
            "diff": "medium",
            "q": "¿Cuántos hosts útiles tiene una red /26?",
            "opts": [
                "64", 
                "62", 
                "30", 
                "126"
            ],
            "ans": 1,
            "exp": "2^(32-26)=64 → 64-2=62 hosts útiles.\n La operación lógica AND a nivel de bits compara la dirección IP con su máscara de subred. Dado que la máscara tiene bits en '1' para la red y '0' para el host, el resultado 'limpia' la parte de host, dejando únicamente los bits que identifican la dirección de red original."
        },

        {
            "profe": true,
            "unit": "Comandos",
            "diff": "easy",
            "q": "Comando para probar conectividad ICMP:",
            "opts": ["nslookup", "netstat", "ping", "nmap"],
            "ans": 2,
            "exp": "ping envía paquetes ICMP para verificar conexión.\n El comando ping utiliza el protocolo ICMP (Internet Control Message Protocol) enviando paquetes 'Echo Request' hacia una dirección IP de destino. Si el host está activo y no hay bloqueos, este responde con un 'Echo Reply', lo que permite verificar la disponibilidad de la ruta y medir los tiempos de latencia."
        },

        {
            "profe": true,
            "unit": "Redes",
            "diff": "medium",
            "q": "Ventaja de CIDR/VLSM:",
            "opts": [
                "Redes más rápidas",
                "Evita colisiones",
                "Uso eficiente de IPs",
                "No usa routers"
            ],
            "ans": 2,
            "exp": "Permite asignar IPs según necesidad sin desperdicio."
        },

        {
            "profe": true,
            "unit": "Linux",
            "diff": "medium",
            "q": "Archivo para configurar IP en Debian:",
            "opts": [
                "nano /etc/network/interfaces",
                "nano /etc/dhcp/dhclient.conf",
                "nano /etc/sysconfig/network",
                "nano /etc/hostname"
            ],
            "ans": 0,
            "exp": "Ese archivo controla la configuración de red en Debian.\n PASO 1: Identificar la distribución. En Debian/Ubuntu, la configuración persistente de interfaces se maneja en /etc/network/.\n" +
                "PASO 2: Localizar archivo. El archivo 'interfaces' define el direccionamiento estático (address, netmask, gateway) o dinámico (dhcp).\n" +
                "RESULTADO: /etc/network/interfaces"
        },

        {
            "profe": true,
            "unit": "Linux",
            "diff": "easy",
            "q": "Comando para ver IPs y MAC:",
            "opts": [
                "ip route show", 
                "ip addr show", 
                "systemctl status", 
                "hostname -I"
            ],
            "ans": 1,
            "exp": "ip addr show muestra interfaces completas (IP + MAC).\n El comando 'ip addr show' (o su abreviatura 'ip a') despliega la configuración de todas las interfaces de red. Para cada interfaz, muestra la dirección IPv4 e IPv6 asociada, así como la dirección física o MAC (etiquetada como link/ether), permitiendo verificar el estado de enlace y los parámetros de capa 2 y 3"
        },

        {
            "profe": true,
            "unit": "Redes",
            "diff": "medium",
            "q": "Error cuando redes se cruzan:",
            "opts": [
                "Packet Loss", 
                "Latency", 
                "Overlap", 
                "DNS"
            ],
            "ans": 2,
            "exp": "Overlap ocurre cuando dos redes usan el mismo rango.\n El traslape o 'Overlap' ocurre cuando se asignan rangos de direcciones IP que se superponen entre sí en diferentes interfaces o segmentos de una red. Esto genera una ambigüedad en la tabla de enrutamiento, ya que el router no puede determinar con precisión hacia qué destino enviar los paquetes, provocando fallos de conectividad y conflictos de direccionamiento."
        },

        {
            "profe": true,
            "unit": "Servicios",
            "diff": "easy",
            "q": "Función de DNS:",
            "opts": [
                "Asignar máscaras",
                "Traducir nombres a IP",
                "Filtrar tráfico",
                "Conectar LAN"
            ],
            "ans": 1,
            "exp": "DNS convierte dominios en direcciones IP.\n El Sistema de Nombres de Dominio (DNS) actúa como el directorio de Internet. Su función principal es la resolución de nombres, permitiendo que los usuarios utilicen nombres de dominio legibles (como google.com) en lugar de tener que recordar direcciones IP numéricas. Cuando se realiza una consulta, el servidor DNS busca en su base de datos el registro correspondiente y devuelve la dirección IP necesaria para establecer la conexión."
        },

        {
            "profe": true,
            "unit": "Linux",
            "diff": "easy",
            "q": "apt-get update sirve para:",
            "opts": [
                "Actualizar programas",
                "Instalar kernel",
                "Actualizar repositorios",
                "Reiniciar red"
            ],
            "ans": 2,
            "exp": "Sincroniza la lista de paquetes disponibles.\n El comando 'apt-get update' no instala ni actualiza software per se, sino que descarga y sincroniza los índices de los repositorios configurados en el sistema. Esto asegura que el gestor de paquetes conozca las versiones más recientes disponibles y sus dependencias antes de realizar una instalación o una actualización real con 'upgrade'."
        },

        {
            "profe": true,
            "unit": "OSI",
            "diff": "easy",
            "q": "MAC pertenece a:",
            "opts": [
                "Capa 1",
                "Capa 2",
                "Capa 3",
                "Capa 4"
            ],
            "ans": 1,
            "exp": "La MAC es de la capa de enlace (capa 2).\n  La dirección MAC (Media Access Control) opera en la Capa 2 del modelo OSI, conocida como la Capa de Enlace de Datos. Es un identificador físico único grabado en el hardware de la interfaz de red (NIC) que permite la comunicación local entre dispositivos dentro de un mismo segmento de red o dominio de difusión."
        },

        {
            "profe": true,
            "unit": "Subnetting",
            "diff": "easy",
            "q": "Broadcast de 192.168.10.0/24:",
            "opts": [
                "192.168.10.1",
                "192.168.10.0",
                "192.168.10.255",
                "192.168.10.254"
            ],
            "ans": 2,
            "exp": "El broadcast es la última IP del rango.\n En una red con prefijo /24, la máscara de subred es 255.255.255.0, lo que reserva el último octeto completo para hosts (256 direcciones). La primera dirección (.0) se reserva para identificar la red y la última dirección (.255) se reserva como dirección de Broadcast para enviar paquetes a todos los dispositivos del segmento simultáneamente."
        },

        {
            "profe": true,
            "unit": "Linux",
            "diff": "easy",
            "q": "Reiniciar red en Debian:",
            "opts": [
                "apt install networking",
                "ifconfig up",
                "systemctl restart networking",
                "reboot /all"
            ],
            "ans": 2,
            "exp": "Ese comando reinicia el servicio de red.\n En distribuciones modernas basadas en systemd como Debian, el comando 'systemctl restart networking' detiene e inicia nuevamente el demonio encargado de gestionar las interfaces. Esto aplica los cambios realizados en archivos de configuración como /etc/network/interfaces sin necesidad de reiniciar el equipo completo."
        },


        {
            "profe": true,
            "unit": "VLSM",
            "diff": "hard",
            "case": "Desarrolle el cálculo de subredes para los siguientes escenarios. Debe ordenar los requerimientos de mayor a menor y especificar: Dirección de Red, Máscara (Prefijo), Primera IP usable, Última IP usable y Broadcast.",
            "q": "VLSM: Red base 192.168.100.0/24 → Lab (50), WiFi (25), Oficina (5)",

            "extra": `
      <table class="subnet-table">
      <tr>
        <th>Área</th>
        <th>Red</th>
        <th>Máscara</th>
        <th>Primera IP</th>
        <th>Última IP</th>
        <th>Broadcast</th>
      </tr>

      <tr>
        <td>Lab (50)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>

      <tr>
        <td>WiFi (25)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>

      <tr>
        <td>Oficina (5)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>
    </table>
  `,

            "opts": [
                "Correcto",
                "Incorrecto"
            ],

            "ans": 0,

            "exp": "PASO 1: Ordenar de mayor a menor\n50 → 25 → 5\n\nPASO 2: Calcular máscaras\n50 → /26 → 64 IP → 62 host\n25 → /27 → 32 IP → 30 host\n5 → /29 → 8 IP → 6 host\n\nPASO 3: Asignar desde la red base\n\nSUBRED 1 (50 host)\nRed: 192.168.100.0\nPrimera: 192.168.100.1\nÚltima: 192.168.100.62\nBroadcast: 192.168.100.63\n\nSUBRED 2 (25 host)\nRed: 192.168.100.64\nPrimera: 192.168.100.65\nÚltima: 192.168.100.94\nBroadcast: 192.168.100.95\n\nSUBRED 3 (5 host)\nRed: 192.168.100.96\nPrimera: 192.168.100.97\nÚltima: 192.168.100.102\nBroadcast: 192.168.100.103\n El proceso VLSM comienza ordenando los hosts de mayor a menor para optimizar el espacio: 50 > 25 > 5. Para el Lab (50) se reserva un bloque de 64 ($2^6$) usando máscara /26 (.0 al .63). Para el WiFi (25) se usa el siguiente bloque disponible de 32 ($2^5$) con máscara /27 (.64 al .95). Finalmente, para la Oficina (5) se asigna un bloque de 8 ($2^3$) con máscara /29 (.96 al .103), asegurando que no existan traslapes entre segmentos."
        },

        {
            "profe": true,
            "unit": "VLSM",
            "diff": "hard",
            "case": "Desarrolle el cálculo de subredes para los siguientes escenarios",
            "q": "VLSM: Red base １7２．２０．１０．０／２４ → Ventas (６０)， RRHH (２０)， Enlace (２)",

            "extra": `
      <table class="subnet-table">
      <tr>
        <th>Área</th>
        <th>Red</th>
        <th>Máscara</th>
        <th>Primera IP</th>
        <th>Última IP</th>
        <th>Broadcast</th>
      </tr>

      <tr>
        <td>Ventas (60)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>

      <tr>
        <td>RRHH (20)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>

      <tr>
        <td>Enlace (2)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>
      
    </table>

  `,

            "opts": [
                "Correcto",
                "Incorrecto"
            ],
            "ans": 0,
            "exp": "PASO 1: Ordenar\n60 → 20 → 2\n\nPASO 2: Máscaras\n60 → /26 → 62 host\n20 → /27 → 30 host\n2 → /30 → 2 host\n\nPASO 3: Asignación\n\nSUBRED 1 (60)\nRed: 172.20.10.0\nPrimera: 172.20.10.1\nÚltima: 172.20.10.62\nBroadcast: 172.20.10.63\n\nSUBRED 2 (20)\nRed: 172.20.10.64\nPrimera: 172.20.10.65\nÚltima: 172.20.10.94\nBroadcast: 172.20.10.95\n\nSUBRED 3 (2)\nRed: 172.20.10.96\nPrimera: 172.20.10.97\nÚltima: 172.20.10.98\nBroadcast: 172.20.10.99"
        },

        {
            "profe": true,
            "unit": "VLSM",
            "diff": "hard",

            "case": "Desarrolle el cálculo de subredes para los siguientes escenarios. Debe ordenar los requerimientos de mayor a menor y especificar: Dirección de Red, Máscara (Prefijo), Primera IP usable, Última IP usable y Broadcast.",
            "q": "VLSM: 172.20.10.0/24 → Ventas (60), RRHH (20), Enlace (2)",

            "extra": `
      <table class="subnet-table">
      <tr>
        <th>Área</th>
        <th>Red</th>
        <th>Máscara</th>
        <th>Primera IP</th>
        <th>Última IP</th>
        <th>Broadcast</th>
      </tr>

      <tr>
        <td>Ventas (60)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>

      <tr>
        <td>RRHH (20)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>

      <tr>
        <td>Enlace (2)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>
    </table>
  `,

            "opts": [
                "Correcto", 
                "Incorrecto"
            ],
            "ans": 0,
            "exp": "PASO 1: Ordenar\n60 → 20 → 2\n\nPASO 2: Máscaras\n60 → /26 → 255.255.255.192\n20 → /27 → 255.255.255.224\n2 → /30 → 255.255.255.252\n\nPASO 3: Asignación\n\nVentas (60)\nRed: 172.20.10.0\nPrimera: 172.20.10.1\nÚltima: 172.20.10.62\nBroadcast: 172.20.10.63\n\nRRHH (20)\nRed: 172.20.10.64\nPrimera: 172.20.10.65\nÚltima: 172.20.10.94\nBroadcast: 172.20.10.95\n\nEnlace (２)\nRed: 17２．２０．１０．９６\nPrimera: 17２．２０．１０．９７\nÚltima: 17２．２０．１０．９８\nBroadcast: 17２．２０．１０．９９"
        },

        {

            "profe": false,
            "unit": "Direccionamiento IPv6",
            "diff": "intermedio",
            "q": "En la dirección IPv6 D46C::B:98:F:C:5, el equivalente en decimal al tercer Hexteto es:",
            "opts": [
                "000000000000001010",
                "000000000000000101",
                "101010000000000000",
                "000000000000000000"
            ],
            "ans": 3,
            "exp": "PASO 1: Identificar hextetos omitidos. La dirección tiene 6 hextetos visibles, por lo que '::' representa dos grupos de ceros.\n" +
                "PASO 2: Expandir la dirección completa: D46C:0000:0000:000B:0098:000F:000C:0005.\n" +
                "PASO 3: Localizar el tercer hexteto, que corresponde a '0000'.\n" +
                "PASO 4: Convertir a binario de 16 bits. El valor hexadecimal 0 equivale a 0000000000000000."
        },
        {
            "profe": false,
            "unit": "Direccionamiento IPv4",
            "diff": "intermedio",
            "q": "Al efectuar un AND entre la dirección IPv4 90.10.120.1 y su máscara, el resultado es:",
            "opts": [
                "11111111.00000000.00000000.00000000",
                "11111111.10101010.00000000.00000000",
                "01011010.00001010.01111000.00000001",
                "01011010.00000000.00000000.00000000"
            ],
            "ans": 3,
            "exp": "PASO 1: Determinar la máscara por clase. El primer octeto (90) define una Clase A, cuya máscara es 255.0.0.0.\n" +
                "PASO 2: Convertir a binario. IP: 01011010.00001010.01111000.00000001 | Máscara: 11111111.00000000.00000000.00000000.\n" +
                "PASO 3: Aplicar operación lógica AND bit a bit. Solo los bits que son '1' en ambos lados permanecen como '1'.\n" +
                "PASO 4: Resultado final. Se conserva el primer octeto de la IP y el resto se completa con ceros: 01011010.00000000.00000000.00000000."
        },
        {

            "profe": false,
            "unit": "Direccionamiento IPv6",
            "diff": "intermedio",
            "q": "Expanda la siguiente dirección IPv6 aplicando Regla #1: ::789D:567F:1",
            "opts": [
                "0000:0000:0000:0000:789D:567F:0000:0001",
                "789D:567F:0000:0000:0000:0000:0000:0001",
                "0000:0000:0000:0000:0000:789D:567F:0001",
                "789D:567F:1:0:0:0:0:0"
            ],
            "ans": 2,
            "exp": "Regla #1: Reemplazar '::' por la cantidad necesaria de '0000' para completar 8 hextetos. PASO 1: Contar hextetos visibles. Hay 3 (789D, 567F, 1). IPv6 requiere 8 en total.\n" +
                "PASO 2: Calcular ceros faltantes. 8 - 3 = 5 grupos de ceros (0000).\n" +
                "PASO 3: Ubicar la expansión. Como '::' está al inicio, los 5 grupos de ceros van al comienzo.\n" +
                "PASO 4: Completar dígitos. El hexteto '1' se expande a '0001' para tener los 4 dígitos hexadecimales obligatorios."
        },

        {
            "profe": false,
            "unit": "Direccionamiento IPv6",
            "diff": "intermedio",
            "q": "Expanda la siguiente dirección IPv6 aplicando Regla #1: AA:8711::66DC",
            "opts": [
                "00AA:8711:0000:0000:0000:0000:0000:66DC",
                "AA:8711:0000:0000:0000:0000:66DC:0000",
                "00AA:8711:66DC:0000:0000:0000:0000:0000",
                "AA:8711:0:0:0:0:0:66DC"
            ],
            "ans": 0,
            "exp": "Regla #1: Reemplazar '::' por ceros. PASO 1: Analizar hextetos actuales. Tenemos 2 al inicio (AA, 8711) y 1 al final (66DC), totalizando 3.\n" +
                "PASO 2: Rellenar la omisión '::'. Faltan 5 hextetos de ceros para completar los 8 reglamentarios.\n" +
                "PASO 3: Normalizar a 4 dígitos. El hexteto 'AA' debe escribirse como '00AA'.\n" +
                "PASO 4: Resultado expandido. 00AA:8711:0000:0000:0000:0000:0000:66DC."
        },


        {
            "profe": false,
            "unit": "Direccionamiento IPv6",
            "diff": "intermedio",
            "q": "Comprima la siguiente dirección IPv6 aplicando Regla #2: 1050:0000:0000:0006:0000:0600:300C:326B",
            "opts": [
                "1050:0:0:6:0:600:300C:326B",
                "1050::6:0:600:300C:326B",
                "1050::6::600:300C:326B",
                "1050:0:0:6::600:300C:326B"
            ],
            "ans": 1,
            "exp": "Regla #2 tiene dos pasos.\n PASO 1: Eliminar ceros a la izquierda de cada hexteto, resultando en 1050:0:0:6:0:600:300C:326B.\n" +
                "PASO 2: Identificar grupos de ceros consecutivos. Tenemos un grupo de dos ceros (0:0) y uno de un solo cero (0).\n" +
                "PASO 3: Aplicar la regla de la cadena más larga. Se reemplaza el grupo '0:0' por '::'.\n" +
                "PASO 4: Restricción. Solo se puede usar '::' una vez, por lo que el tercer cero individual permanece como ':0:'."
        },


        {
            "profe": false,
            "unit": "Direccionamiento IPv6",
            "diff": "intermedio",
            "q": "Comprima la siguiente dirección IPv6 aplicando Regla #2: 4306:0:0:0:0:0:0:C3",
            "opts": [
                "4306::C3",
                "4306:0:0:0:0:0:0:C3",
                "4306:::C3",
                "4306:C3::"
            ],
            "ans": 0,
            "exp": "PASO 1: Identificar la secuencia de ceros. Entre los hextetos extremos hay 6 grupos de ceros consecutivos.\n" +
                "PASO 2: Aplicar compresión máxima. La regla permite sustituir cualquier número de grupos de ceros consecutivos por '::'.\n" +
                "PASO 3: Resultado final. Se reduce la dirección a su forma más simplificada: 4306::C3."
        },

        {
            "profe": false,
            "unit": "Subneteo IPv4",
            "diff": "intermedio",
            "q": "Se muestra la dirección de red 155.168.25.3/21. ¿Cuál es la máscara final en decimal punteado y la cantidad de hosts que se pueden obtener?",
            "opts": [
                "255.255.248.0 y 2046 hosts",
                "255.255.240.0 y 4094 hosts",
                "255.255.255.0 y 254 hosts",
                "255.255.224.0 y 8190 hosts"
            ],
            "ans": 0,
            "exp": "PASO 1: Calcular máscara desde prefijo. /21 significa 21 bits de red (11111111.11111111.11111000.00000000).\n" +
                "PASO 2: Convertir a decimal. El tercer octeto (11111000) es 128+64+32+16+8 = 248. Máscara: 255.255.248.0.\n" +
                "PASO 3: Calcular hosts. Bits de host = 32 - 21 = 11. Direcciones totales = $2^{11}$ = 2048.\n" +
                "PASO 4: Descontar IPs reservadas. 2048 direcciones - 2 (red y broadcast) = 2046 hosts usables."
        },


        {
            "profe": false,
            "unit": "Subneteo IPv4",
            "diff": "intermedio",
            "q": "Se muestra la dirección de red 10.1.25.30/16. ¿Cuál es la máscara final en decimal punteado y la cantidad de hosts que se pueden obtener?",
            "opts": [
                "255.255.0.0 y 65534 hosts",
                "255.0.0.0 y 16777214 hosts",
                "255.255.255.0 y 254 hosts",
                "255.255.248.0 y 2046 hosts"
            ],
            "ans": 0,
            "exp": "PASO 1: Identificar máscara. Un prefijo /16 indica que los dos primeros octetos son de red, resultando en 255.255.0.0.\n" +
                "PASO 2: Calcular bits de host. 32 bits totales - 16 bits de red = 16 bits para hosts.\n" +
                "PASO 3: Calcular capacidad. $2^{16}$ = 65536 direcciones totales.\n" +
                "PASO 4: Hosts útiles. Se restan las 2 direcciones no asignables: 65536 - 2 = 65534 hosts."
        },


        {
            "profe": false,
            "unit": "Subneteo IPv4",
            "diff": "avanzado",
            "q": "La empresa PCS Tech tiene la IP 01000001.10000000.11000011.11111110 en binario y necesita 14 subredes. ¿Cuál es la máscara final?",
            "opts": [
                "255.255.0.0",
                "255.240.0.0",
                "255.255.240.0",
                "255.255.255.0"
            ],
            "ans": 1,
            "exp": "PASO 1: Determinar clase. El primer octeto (01000001) es 65 en decimal. Al ser Clase A, su máscara original es /8.\n" +
                "PASO 2: Calcular bits de subred. Para 14 subredes buscamos $2^n \\ge 14$. Con $n=4$ obtenemos 16 subredes.\n" +
                "PASO 3: Nueva máscara. Sumamos los bits prestados a la máscara base: /8 + 4 = /12.\n" +
                "PASO 4: Convertir a decimal. El segundo octeto de la máscara /12 es 11110000 (240). Resultado: 255.240.0.0."
        },


        {
            "profe": false,
            "unit": "Subneteo IPv4",
            "diff": "avanzado",
            "q": "Si tengo la IPv6 2001:0db8:85a3:0000:0000:8a2e:0370:7334, ¿cómo quedaría aplicando la Regla #2?",
            "opts": [
                "2001:db8:85a3::8a2e:370:7334", 
                "2001:db8:85a3:0:0:8a2e:370:7334", 
                "2001:0db8:85a3::8a2e:0370:7334", 
                "2001:db8:85a3::8a2e:0370:7334"
            ],
            "ans": 0,
            "exp": "DESARROLLO PASO A PASO:\n" +
                "--------------------------------------------------------------------------\n" +
                "1. OMITIR CEROS IZQUIERDA: 0db8 -> db8, 0000 -> 0, 0370 -> 370.\n" +
                "2. IDENTIFICAR SECUENCIA: Hay dos bloques consecutivos de ceros (:0000:0000:).\n" +
                "3. COMPRESIÓN: Se reemplaza esa secuencia por '::'.\n" +
                "4. RESULTADO: 2001:db8:85a3::8a2e:370:7334\n" +
                "--------------------------------------------------------------------------"
        },


        {
            "profe": false,
            "unit": "Subneteo IPv4",
            "diff": "avanzado",
            "q": "¿Cuál es el propósito del comando 'ping ::1' en un sistema con IPv6 habilitado?",
            "opts": [
                "Probar la conectividad con el Gateway", 
                "Verificar la pila TCP/IP local (Loopback)", 
                "Escanear dispositivos en la red local", 
                "Configurar una dirección estática"
            ],
            "ans": 1,
            "exp": "DESARROLLO TÉCNICO:\n" +
                "--------------------------------------------------------------------------\n" +
                "1. IDENTIFICACIÓN: '::1' es la dirección de Loopback en IPv6 (equivalente a 127.0.0.1 en IPv4).\n" +
                "2. FUNCIÓN: Se utiliza para enviar paquetes a la propia interfaz de red del host.\n" +
                "3. OBJETIVO: Confirmar que el software de red y la pila de protocolos están instalados y funcionando correctamente en el dispositivo local.\n" +
                "--------------------------------------------------------------------------"
        },


        {
            "profe": false,
            "unit": "Subneteo IPv4",
            "diff": "avanzado",
            "q": "Dada la dirección 172.16.0.0/20, ¿cuál es la máscara de subred y la última IP utilizable?",
            "opts": [
                "255.255.240.0 y 172.16.15.254", 
                "255.255.255.0 y 172.16.0.254", 
                "255.240.0.0 y 172.31.255.254", 
                "255.255.240.0 y 172.16.31.254"
            ],
            "ans": 0,
            "exp": "DESARROLLO PASO A PASO:\n" +
                "--------------------------------------------------------------------------\n" +
                "PASO 1: Identificar el tipo de direccionamiento. El direccionamiento físico (direcciones MAC) es único de la Capa 2.\n" +
                "PASO 2: Definir funciones. Esta capa gestiona el acceso al medio y la topología (cómo se conectan los nodos).\n" +
                "PASO 3: Identificar dispositivos. Los Switches operan en este nivel, procesando Tramas (Frames) para dirigir el tráfico localmente.\n" +
                "1. MÁSCARA (/20): 11111111.11111111.11110000.00000000 = 255.255.240.0.\n" +
                "2. TAMAÑO DE BLOQUE: 256 - 240 = 16. La red salta de 16 en 16 en el tercer octeto.\n" +
                "3. CÁLCULO DE RANGO: Red: 172.16.0.0. Siguiente red: 172.16.16.0.\n" +
                "4. BROADCAST: Una IP antes de la siguiente red = 172.16.15.255.\n" +
                "5. ÚLTIMA ÚTIL: Una antes del broadcast = 172.16.15.254.\n" +
                "--------------------------------------------------------------------------"
        },


        {
            "profe": false,
            "unit": "Subneteo IPv4",
            "diff": "avanzado",
            "q": "En el modelo OSI, ¿qué capa se encarga del direccionamiento físico y la topología de red?",
            "opts": [
                "Capa de Enlace de Datos", 
                "Capa Física", 
                "Capa de Red", 
                "Capa de Transporte"
            ],
            "ans": 0,
            "exp": "DESARROLLO TÉCNICO:\n" +
                "--------------------------------------------------------------------------\n" +
                "1. CAPA 2 (ENLACE): Maneja el direccionamiento físico mediante direcciones MAC.\n" +
                "2. UNIDAD DE DATOS: Tramas (Frames).\n" +
                "3. COMPONENTES: Switches y NICs operan aquí, gestionando cómo se accede al medio físico y detectando errores de transmisión.\n" +
                "--------------------------------------------------------------------------"
        },

        {
            "profe": false,
            "unit": "Subneteo IPv4",
            "diff": "avanzado",
            "q": "Para el problema de PCS Tech, ¿cuál es el blocksize (incremento entre subredes)?",
            "opts": [
                "4",
                "8",
                "16",
                "32"
            ],
            "ans": 2,
            "exp": "PASO 1: Identificar bits prestados. Del cálculo anterior, se determinó que se necesitan n=4 bits para 14 subredes.\n" +
                "PASO 2: Calcular el incremento. El blocksize se obtiene con $2^h$, donde h son los bits restantes del octeto afectado.\n" +
                "PASO 3: Aplicar fórmula. En el segundo octeto (/12), quedan 4 bits de host en ese segmento. $2^4 = 16$.\n" +
                "PASO 4: Resultado. Las subredes saltan de 16 en 16 en el segundo octeto (ej. 65.0.0.0, 65.16.0.0)."
        },

        {
            "profe": false,
            "unit": "Subneteo IPv4",
            "diff": "avanzado",
            "q": "Para el problema de PCS Tech, ¿cuántos hosts se pueden conectar por cada subred?",
            "opts": [
                "4094",
                "16382",
                "65534",
                "1048574"
            ],
            "ans": 3,
            "exp": "PASO 1: Identificar bits de host. Con un prefijo /12, los bits de host son 32 - 12 = 20 bits.\n" +
                "PASO 2: Calcular direcciones totales. $2^{20} = 1.048.576$.\n" +
                "PASO 3: Descontar IPs reservadas. Se resta la dirección de red y el broadcast (1.048.576 - 2).\n" +
                "PASO 4: Resultado final. Se obtienen 1.048.574 hosts útiles por cada subred."
        },


        {
            "profe": false,
            "unit": "Subneteo IPv4",
            "diff": "avanzado",
            "q": "Para el problema de PCS Tech, ¿cuál es el broadcast de la subred 65.0.0.0/12?",
            "opts": [
                "65.15.255.255",
                "65.0.255.255",
                "65.255.255.255",
                "65.15.0.255"
            ],
            "ans": 0,
            "exp": "PASO 1: Identificar el siguiente salto. Si el blocksize es 16, la siguiente subred es 65.16.0.0.\n" +
                "PASO 2: Restar una IP a la siguiente red. El broadcast es siempre la IP anterior a la siguiente subred.\n" +
                "PASO 3: Calcular. 65.16.0.0 - 1 = 65.15.255.255.\n" +
                "PASO 4: Verificación binaria. El broadcast tiene todos los bits de host (los últimos 20) en 1."
        },


        {
            "profe": false,
            "unit": "Subnetting Básico",
            "diff": "easy",
            "q": "¿Qué es el subneteo (subnetting) de redes?",
            "opts": [
                "Unir varias redes en una sola", 
                "Dividir una red grande en subredes más pequeñas", 
                "Asignar IPs dinámicas", 
                "Encriptar tráfico"
            ],
            "ans": 1,
            "exp": "PASO 1: Definir el concepto. Es la subdivisión lógica de una red física única.\n" +
                "PASO 2: Identificar objetivos. Se realiza para mejorar la administración, seguridad y rendimiento.\n" +
                "PASO 3: Beneficio clave. Permite reducir los dominios de broadcast, evitando congestión innecesaria."
        },


        {
            "profe": false,
            "unit": "Subnetting Básico",
            "diff": "easy",
            "q": "¿Cuál de los siguientes es un beneficio del subneteo?",
            "opts": [
                "Aumentar el número total de direcciones IPv4 disponibles", 
                "Contener el tráfico de broadcast dentro de la subred", 
                "Eliminar la necesidad de routers", 
                "Aumentar la latencia de la red"
            ],
            "ans": 1,
            "exp": "PASO 1: Identificar el problema del broadcast. En redes grandes, los mensajes de difusión saturan el ancho de banda.\n" +
                "PASO 2: Aplicar la solución de subneteo. Al segmentar la red, el tráfico de broadcast se queda atrapado en su propia subred.\n" +
                "PASO 3: Resultado técnico. Esto mejora el rendimiento general y la seguridad, evitando que dispositivos ajenos procesen tráfico innecesario."
        },

        {
            "profe": false,
            "unit": "Subnetting Básico",
            "diff": "easy",
            "q": "¿Qué dispositivo es necesario para que dispositivos en diferentes subredes puedan comunicarse?",
            "opts": [
                "Switch", 
                "Router", 
                "Hub", 
                "Bridge"
            ],
            "ans": 1,
            "exp": "PASO 1: Definir dominios de colisión vs broadcast. Los Switches conectan dispositivos en la misma red local.\n" +
                "PASO 2: Identificar la función de Capa 3. Para salir de una subred hacia otra, se requiere enrutamiento.\n" +
                "PASO 3: Rol del Router. El router actúa como gateway, permitiendo el salto de paquetes entre distintos segmentos lógicos."
        },

        {
            "profe": false,
            "unit": "Subnetting Básico",
            "diff": "easy",
            "q": "¿Cuántos bits tiene una dirección IPv4?",
            "opts": [
                "16 bits", 
                "32 bits", 
                "64 bits", 
                "128 bits"
            ],
            "ans": 1,
            "exp": "PASO 1: Analizar la estructura decimal. IPv4 se compone de 4 octetos (ej. 192.168.1.1).\n" +
                "PASO 2: Convertir a binario. Cada octeto equivale exactamente a 8 bits.\n" +
                "PASO 3: Cálculo total. 4 octetos × 8 bits = 32 bits totales en la arquitectura de la dirección."
        },

        {
            "profe": false,
            "unit": "Subnetting Básico",
            "diff": "easy",
            "q": "¿Qué es una máscara de subred?",
            "opts": [
                "Una contraseña para acceder a la red", 
                "Un número que indica qué parte de la IP es red y qué parte es host", 
                "Un tipo de cable de red", 
                "Un protocolo de enrutamiento"
            ],
            "ans": 1,
            "exp": "PASO 1: Definir la función de la máscara. Es un filtro binario que se aplica sobre la dirección IP.\n" +
                "PASO 2: Identificar bits de Red. Los bits '1' en la máscara bloquean la porción que identifica a la red.\n" +
                "PASO 3: Identificar bits de Host. Los bits '0' liberan la porción que identifica a los dispositivos individuales dentro de esa red."
        },


        // ==================== CÁLCULO DE SUBREDES ====================
        {
            "profe": false,
            "unit": "Cálculo de Subredes",
            "diff": "medium",
            "q": "Dada la dirección IP 192.168.1.0/24, ¿cuántos bits se deben 'robar' de la porción de host para obtener al menos 5 subredes útiles?",
            "opts": [
                "2 bits", 
                "3 bits", 
                "4 bits", 
                "5 bits"
            ],
            "ans": 1,
            "exp": "PASO 1: Aplicar la fórmula $2^n - 2 \\ge$ requerimiento (donde n son bits prestados).\n" +
                "PASO 2: Evaluar $n=2$: $2^2 - 2 = 2$ subredes (No alcanza).\n" +
                "PASO 3: Evaluar $n=3$: $2^3 - 2 = 6$ subredes (Cumple el requerimiento de al menos 5).\n" +
                "PASO 4: Conclusión. Se deben robar 3 bits de la porción de host."
        },

        {
            "profe": false,
            "unit": "Cálculo de Subredes",
            "diff": "medium",
            "q": "¿Cuál es la fórmula para calcular el número de subredes útiles dado n bits prestados?",
            "opts": [
                "2^n", 
                "2^n - 2", 
                "2^n + 2", 
                "n^2"
            ],
            "ans": 1,
            "exp": "PASO 1: Identificar el total de combinaciones posibles ($2^n$).\n" +
                "PASO 2: Descontar subredes reservadas (red cero y red de broadcast si el equipo lo requiere).\n" +
                "PASO 3: Aplicar estándar clásico. La fórmula establecida para subredes utilizables es $2^n - 2$."
        },

        {
            "profe": false,
            "unit": "Cálculo de Subredes",
            "diff": "medium",
            "q": "¿Cuál es la fórmula para calcular el número de hosts útiles por subred?",
            "opts": [
                "2^m", 
                "2^m - 2", 
                "2^m + 2", 
                "m^2"
            ],
            "ans": 1,
            "exp": "PASO 1: Identificar m como el número de bits restantes para hosts.\n" +
                "PASO 2: Calcular total de direcciones ($2^m$).\n" +
                "PASO 3: Restar direcciones no asignables. Se resta 2 (la primera IP para la Red y la última para el Broadcast).\n" +
                "PASO 4: Resultado. Hosts útiles = $2^m - 2$."
        },

        {
            "profe": false,
            "unit": "Cálculo de Subredes",
            "diff": "medium",
            "q": "¿Qué dirección se reserva como broadcast en una subred?",
            "opts": [
                "La primera dirección de la subred", 
                "La última dirección de la subred", 
                "La dirección del gateway", 
                "Cualquier dirección dentro de la subred"
            ],
            "ans": 1,
            "exp": "PASO 1: Entender el propósito del Broadcast (envío a todos).\n" +
                "PASO 2: Identificar posición binaria. Es la dirección donde todos los bits de host están en 1.\n" +
                "PASO 3: Localización física. Corresponde siempre a la última dirección de cada segmento o subred."
        },

        {
            "profe": false,
            "unit": "Cálculo de Subredes",
            "diff": "medium",
            "q": "¿Qué dirección se reserva como red en una subred?",
            "opts": [
                "La primera dirección de la subred", 
                "La última dirección de la subred", 
                "La dirección del gateway", 
                "Cualquier dirección dentro de la subred"
            ],
            "ans": 0,
            "exp": "PASO 1: Entender el propósito de la dirección de Red (identificador).\n" +
                "PASO 2: Identificar posición binaria. Es la dirección donde todos los bits de host están en 0.\n" +
                "PASO 3: Localización física. Corresponde siempre a la primera dirección del rango de la subred."
        },

        // ==================== MÁSCARAS Y NOTACIÓN CIDR ====================
        {
            "profe": false,
            "unit": "Máscaras y CIDR",
            "diff": "medium",
            "q": "Una dirección Clase C tiene por defecto máscara 255.255.255.0 (/24). Si se toman prestados 3 bits para subneteo, ¿cuál es la nueva máscara de red?",
            "opts": [
                "255.255.255.224 (/27)", 
                "255.255.255.240 (/28)", 
                "255.255.255.192 (/26)", 
                "255.255.255.248 (/29)"
            ],
            "ans": 0,
            "exp": "PASO 1: Identificar prefijo base. /24.\n" +
                "PASO 2: Sumar bits prestados. 24 + 3 = /27.\n" +
                "PASO 3: Convertir bits a decimal. Los primeros 3 bits del último octeto encendidos (11100000) valen 128 + 64 + 32 = 224.\n" +
                "PASO 4: Resultado final. 255.255.255.224."
        },

        {
            "profe": false,
            "unit": "Máscaras y CIDR",
            "diff": "medium",
            "q": "¿Qué máscara corresponde a la notación /24?",
            "opts": [
                "255.255.0.0", 
                "255.255.255.0", 
                "255.0.0.0", 
                "255.255.255.255"
            ],
            "ans": 1,
            "exp": "PASO 1: Analizar el prefijo. /24 significa que los primeros 24 bits son 1.\n" +
                "PASO 2: Dividir en octetos. (8 bits. 8 bits. 8 bits. 0 bits) = (11111111.11111111.11111111.00000000).\n" +
                "PASO 3: Convertir a decimal. 255.255.255.0."
        },

        {
            "profe": false,
            "unit": "Máscaras y CIDR",
            "diff": "medium",
            "q": "¿Qué máscara corresponde a la notación /16?",
            "opts": [
                "255.255.0.0", 
                "255.255.255.0", 
                "255.0.0.0", 
                "255.255.255.255"
            ],
            "ans": 0,
            "exp": "PASO 1: Analizar el prefijo. /16 significa que los primeros 16 bits son 1.\n" +
                "PASO 2: Dividir en octetos. (8 bits. 8 bits. 0 bits. 0 bits).\n" +
                "PASO 3: Convertir a decimal. 255.255.0.0."
        },

        {
            "profe": false,
            "unit": "Máscaras y CIDR",
            "diff": "medium",
            "q": "¿Qué máscara corresponde a la notación /8?",
            "opts": [
                "255.255.0.0", 
                "255.255.255.0", 
                "255.0.0.0", 
                "255.255.255.255"
            ],
            "ans": 2,
            "exp": "PASO 1: Analizar el prefijo. /8 significa que solo el primer octeto tiene bits en 1.\n" +
                "PASO 2: Convertir a decimal. (11111111.0.0.0) = 255.0.0.0."
        },

        {
            "profe": false,
            "unit": "Máscaras y CIDR",
            "diff": "medium",
            "q": "¿Qué máscara corresponde a la notación /28?",
            "opts": [
                "255.255.255.192", 
                "255.255.255.224", 
                "255.255.255.240", 
                "255.255.255.248"
            ],
            "ans": 2,
            "exp": "PASO 1: Identificar bits en el último octeto. /28 es /24 + 4 bits.\n" +
                "PASO 2: Calcular valor de 4 bits (11110000). 128+64+32+16 = 240.\n" +
                "PASO 3: Resultado. 255.255.255.240."
        },

        {
            "profe": false,
            "unit": "Máscaras y CIDR",
            "diff": "medium",
            "q": "¿Qué máscara corresponde a la notación /29?",
            "opts": [
                "255.255.255.192", 
                "255.255.255.224", 
                "255.255.255.240", 
                "255.255.255.248"
            ],
            "ans": 3,
            "exp": "PASO 1: Identificar bits adicionales. /29 es /24 + 5 bits.\n" +
                "PASO 2: Calcular valor de 5 bits (11111000). 128+64+32+16+8 = 248.\n" +
                "PASO 3: Resultado. 255.255.255.248."
        },

        {
            "profe": false,
            "unit": "Máscaras y CIDR",
            "diff": "medium",
            "q": "¿Qué máscara corresponde a la notación /30?",
            "opts": [
                "255.255.255.252", 
                "255.255.255.248", 
                "255.255.255.240", 
                "255.255.255.224"
            ],
            "ans": 0,
            "exp": "PASO 1: Identificar bits adicionales. /30 es /24 + 6 bits.\n" +
                "PASO 2: Calcular valor de 6 bits (11111100). 248 + 4 = 252.\n" +
                "PASO 3: Resultado. 255.255.255.252."
        },

        // ==================== BLOCKSIZE Y SALTOS ====================
        {
            "profe": false,
            "unit": "Blocksize",
            "diff": "medium",
            "q": "Para una dirección Clase C con máscara 255.255.255.224, ¿cuál es el valor del bloque (blocksize) o salto entre subredes?",
            "opts": [
                "16", 
                "32", 
                "64", 
                "128"
            ],
            "ans": 1,
            "exp": "PASO 1: Aplicar fórmula de resta constante. 256 - valor de la máscara.\n" +
                "PASO 2: Sustituir valor. 256 - 224 = 32.\n" +
                "PASO 3: Aplicación técnica. Las subredes irán de 32 en 32 (0, 32, 64, 96...)."
        },

        {
            "profe": false,
            "unit": "Blocksize",
            "diff": "medium",
            "q": "Para una máscara 255.255.255.240, ¿cuál es el blocksize?",
            "opts": [
                "8", 
                "16", 
                "32", 
                "64"
            ],
            "ans": 1,
            "exp": "PASO 1: Restar valor del octeto afectado a 256.\n" +
                "PASO 2: 256 - 240 = 16.\n" +
                "PASO 3: Conclusión. El incremento entre subredes es de 16."
        },

        {
            "profe": false,
            "unit": "Blocksize",
            "diff": "medium",
            "q": "Para una máscara 255.255.255.248, ¿cuál es el blocksize?",
            "opts": [
                "4", 
                "6", 
                "8", 
                "12"
            ],
            "ans": 2,
            "exp": "PASO 1: Restar valor del octeto afectado a 256.\n" +
                "PASO 2: 256 - 248 = 8.\n" +
                "PASO 3: Conclusión. El incremento entre subredes es de 8."
        },

        {
            "profe": false,
            "unit": "Blocksize",
            "diff": "medium",
            "q": "Para una máscara 255.255.255.192, ¿cuál es el blocksize?",
            "opts": [
                "32", 
                "64", 
                "128", 
                "16"
            ],
            "ans": 1,
            "exp": "PASO 1: Restar valor del octeto afectado a 256.\n" +
                "PASO 2: 256 - 192 = 64.\n" +
                "PASO 3: Conclusión. El incremento entre subredes es de 64."
        },

        // ==================== HOSTS POR SUBRED ====================
        {
            "profe": false,
            "unit": "Hosts por Subred",
            "diff": "medium",
            "q": "Con una máscara /27 (255.255.255.224) en una red Clase C, ¿cuántos hosts útiles hay por subred?",
            "opts": [
                "30", 
                "14", 
                "62", 
                "6"
            ],
            "ans": 0,
            "exp": "PASO 1: Calcular bits de host (m). 32 - 27 = 5 bits.\n" +
                "PASO 2: Calcular direcciones totales. $2^5 = 32$.\n" +
                "PASO 3: Restar red y broadcast. 32 - 2 = 30 hosts útiles."
        },

        {
            "profe": false,
            "unit": "Hosts por Subred",
            "diff": "medium",
            "q": "Si una red Clase C se subneteó con máscara 255.255.255.248 (/29), ¿cuántos hosts útiles hay por subred?",
            "opts": [
                "8", 
                "6", 
                "4", 
                "2"
            ],
            "ans": 1,
            "exp": "PASO 1: Calcular bits de host. 32 - 29 = 3 bits.\n" +
                "PASO 2: Direcciones totales. $2^3 = 8$.\n" +
                "PASO 3: Hosts útiles. 8 - 2 = 6."
        },

        {
            "profe": false,
            "unit": "Hosts por Subred",
            "diff": "medium",
            "q": "Con máscara /28, ¿cuántos hosts útiles por subred?",
            "opts": [
                "16", 
                "14", 
                "12", 
                "10"
            ],
            "ans": 1,
            "exp": "PASO 1: Bits de host m = 32 - 28 = 4.\n" +
                "PASO 2: $2^4 = 16$.\n" +
                "PASO 3: Hosts útiles = 16 - 2 = 14."
        },

        {
            "profe": false,
            "unit": "Hosts por Subred",
            "diff": "medium",
            "q": "Con máscara /26, ¿cuántos hosts útiles por subred?",
            "opts": [
                "64", 
                "62", 
                "60", 
                "58"
            ],
            "ans": 1,
            "exp": "PASO 1: Bits de host m = 32 - 26 = 6.\n" +
                "PASO 2: $2^6 = 64$.\n" +
                "PASO 3: Hosts útiles = 64 - 2 = 62."
        },

        {
            "profe": false,
            "unit": "Hosts por Subred",
            "diff": "hard",
            "q": "Con máscara /22 en una red Clase B, ¿cuántos hosts útiles por subred?",
            "opts": [
                "1022", 
                "2046", 
                "4094", 
                "8190"
            ],
            "ans": 0,
            "exp": "PASO 1: Bits de host m = 32 - 22 = 10.\n" +
                "PASO 2: $2^{10} = 1024$.\n" +
                "PASO 3: Hosts útiles = 1024 - 2 = 1022."
        },

        // ==================== EJERCICIOS CLASE A ====================
        {
            "profe": false,
            "unit": "Clase A",
            "diff": "hard",
            "q": "De la dirección IP 111.189.23.155/8, se necesitan 200 subredes. ¿Cuántos bits se toman prestados y cuál es la nueva máscara?",
            "opts": [
                "6 bits, /14", 
                "7 bits, /15", 
                "8 bits, /16", 
                "9 bits, /17"
            ],
            "ans": 2,
            "exp": "PASO 1: Aplicar $2^n \\ge$ subredes. $2^8 = 256 \\ge 200$.\n" +
                "PASO 2: Sumar bits al prefijo original. /8 + 8 bits = /16.\n" +
                "PASO 3: Convertir a decimal. /16 = 255.255.0.0."
        },

        {
            "profe": false,
            "unit": "Clase A",
            "diff": "hard",
            "q": "De la dirección IP 96.100.12.33/8, se necesitan 1987 subredes. ¿Cuántos bits se toman prestados?",
            "opts": [
                "8 bits", 
                "9 bits", 
                "10 bits", 
                "11 bits"
            ],
            "ans": 3,
            "exp": "PASO 1: Evaluar potencias de 2. $2^{10} = 1024$ (No alcanza). $2^{11} = 2048$.\n" +
                "PASO 2: Resultado. Se requieren 11 bits prestados."
        },

        {
            "profe": false,
            "unit": "Clase A",
            "diff": "hard",
            "q": "De la dirección IP 10.0.0.0/8, se necesitan 500 subredes. ¿Cuántos bits se toman?",
            "opts": [
                "8", 
                "9", 
                "10", 
                "11"
            ],
            "ans": 1,
            "exp": "PASO 1: Evaluar $2^n \\ge 500$.\n" +
                "PASO 2: $2^9 = 512$.\n" +
                "PASO 3: Conclusión. Se toman 9 bits, nueva máscara /17."
        },

        {
            "profe": false,
            "unit": "Clase A",
            "diff": "hard",
            "q": "La tienda Zara necesita 6 subredes a partir de la IP 95.168.12.1/8. ¿Cuál es la nueva máscara?",
            "opts": [
                "/9 (255.128.0.0)", 
                "/10 (255.192.0.0)", 
                "/11 (255.224.0.0)", 
                "/12 (255.240.0.0)"
            ],
            "ans": 2,
            "exp": "PASO 1: $2^n \\ge 6 \\rightarrow n=3$.\n" +
                "PASO 2: /8 + 3 = /11.\n" +
                "PASO 3: Decimal. El segundo octeto con 3 bits es 224. Máscara: 255.224.0.0."
        },

        {
            "profe": false,
            "unit": "Clase A",
            "diff": "hard",
            "q": "Con la dirección 15.254.3.77/8, se necesitan 19 subredes útiles. ¿Cuántos bits se toman?",
            "opts": [
                "3", 
                "4", 
                "5", 
                "6"
            ],
            "ans": 2,
            "exp": "PASO 1: Usar fórmula $2^n - 2 \\ge 19$.\n" +
                "PASO 2: $2^4 - 2 = 14$ (Insuficiente).\n" +
                "PASO 3: $2^5 - 2 = 30$ (Correcto).\n" +
                "PASO 4: Resultado. Se toman 5 bits."
        },

        // ==================== EJERCICIOS CLASE B ====================
        {
            "profe": false,
            "unit": "Clase B",
            "diff": "hard",
            "q": "De la dirección IP 165.0.21.98/16, se necesitan 128 subredes. ¿Cuántos bits se toman?",
            "opts": [
                "6 bits", 
                "7 bits", 
                "8 bits", 
                "9 bits"
            ],
            "ans": 1,
            "exp": "PASO 1: $2^n \\ge 128$.\n" +
                "PASO 2: $2^7 = 128$.\n" +
                "PASO 3: Resultado. 7 bits prestados, nueva máscara /23."
        },

        {
            "profe": false,
            "unit": "Clase B",
            "diff": "hard",
            "q": "Empresa Holfmann (5 LAN + 4 WAN = 9 redes). Con IP 174.18.0.0/16, ¿cuál es la nueva máscara?",
            "opts": [
                "/18", 
                "/19", 
                "/20", 
                "/21"
            ],
            "ans": 2,
            "exp": "PASO 1: Sumar total de redes necesarias = 9.\n" +
                "PASO 2: $2^n \\ge 9 \\rightarrow n=4$.\n" +
                "PASO 3: /16 + 4 = /20. Decimal: 255.255.240.0."
        },

        {
            "profe": false,
            "unit": "Clase B",
            "diff": "hard",
            "q": "Con la dirección IP 172.16.0.0/16, se necesitan 50 subredes. ¿Cuál es la nueva máscara?",
            "opts": [
                "/21", 
                "/22", 
                "/23", 
                "/24"
            ],
            "ans": 1,
            "exp": "PASO 1: $2^n \\ge 50 \\rightarrow n=6$.\n" +
                "PASO 2: /16 + 6 = /22. Decimal: 255.255.252.0."
        },

        {
            "profe": false,
            "unit": "Clase B",
            "diff": "hard",
            "q": "Con la dirección IP 130.246.33.109/16, se necesitan 8 subredes útiles. ¿Cuántos bits se toman?",
            "opts": [
                "2", 
                "3", 
                "4", 
                "5"
            ],
            "ans": 2,
            "exp": "PASO 1: $2^n - 2 \\ge 8$.\n" +
                "PASO 2: $2^3 - 2 = 6$ (Insuficiente).\n" +
                "PASO 3: $2^4 - 2 = 14$.\n" +
                "PASO 4: Resultado. 4 bits."
        },

        // ==================== EJERCICIOS CLASE C ====================
        {
            "profe": false,
            "unit": "Clase C",
            "diff": "medium",
            "q": "De la dirección IP 192.168.25.200/24, se necesitan 7 subredes útiles. ¿Cuántos bits se toman?",
            "opts": [
                "2", 
                "3", 
                "4", 
                "5"
            ],
            "ans": 2,
            "exp": "PASO 1: $2^n - 2 \\ge 7$.\n" +
                "PASO 2: $2^4 - 2 = 14$.\n" +
                "PASO 3: Resultado. 4 bits prestados, máscara /28."
        },

        {
            "profe": false,
            "unit": "Clase C",
            "diff": "medium",
            "q": "De la dirección IP 202.180.15.0/24, se necesitan 5 subredes útiles. ¿Cuál es la nueva máscara?",
            "opts": [
                "/26", 
                "/27", 
                "/28", 
                "/29"
            ],
            "ans": 1,
            "exp": "PASO 1: $2^n - 2 \\ge 5 \\rightarrow n=3$.\n" +
                "PASO 2: /24 + 3 = /27. Decimal: 255.255.255.224."
        },

        {
            "profe": false,
            "unit": "Clase C",
            "diff": "medium",
            "q": "De la dirección IP 195.13.83.180/24, se necesitan 257 subredes. ¿Esto es posible?",
            "opts": [
                "Sí", 
                "Sí, tomando 9 bits", 
                "No, máximo 256 subredes", 
                "No, máximo 254 útiles"
            ],
            "ans": 2,
            "exp": "PASO 1: Analizar bits disponibles. En Clase C solo hay 8 bits de host.\n" +
                "PASO 2: Máximo combinaciones = $2^8 = 256$.\n" +
                "PASO 3: Conclusión. 257 es físicamente imposible."
        },

        {
            "profe": false,
            "unit": "Clase C",
            "diff": "medium",
            "q": "Con la dirección IP 196.189.40.4/24, se necesitan 129 subredes. ¿Es posible?",
            "opts": [
                "Sí", 
                "Sí, 8 bits", 
                "No, máximo 128 totales", 
                "No, máximo 254"
            ],
            "ans": 2,
            "exp": "PASO 1: Evaluar capacidad con 7 bits prestados = $2^7 = 128$.\n" +
                "PASO 2: Si usamos 8 bits, no quedan bits para hosts.\n" +
                "PASO 3: Conclusión. No es posible obtener 129 subredes con hosts válidos."
        },

        // ==================== DIRECCIONES DE RED ====================
        {
            "profe": false,
            "unit": "Direcciones de Red",
            "diff": "medium",
            "q": "¿Cuál es la dirección de red de 192.68.25.200 con máscara 255.255.255.0?",
            "opts": [
                "192.68.25.0", 
                "192.68.0.0", 
                "192.68.25.200", 
                "192.68.25.255"
            ],
            "ans": 0,
            "exp": "PASO 1: Aplicar máscara /24. Los primeros 3 octetos no cambian.\n" +
                "PASO 2: Poner el último octeto en 0.\n" +
                "PASO 3: Resultado. 192.68.25.0."
        },

        {
            "profe": false,
            "unit": "Direcciones de Red",
            "diff": "medium",
            "q": "¿Cuál es la dirección de red de 192.168.5.35 con máscara 255.255.255.240?",
            "opts": [
                "192.168.5.32", 
                "192.168.5.48", 
                "192.168.5.16", 
                "192.168.5.0"
            ],
            "ans": 0,
            "exp": "PASO 1: Blocksize = 256 - 240 = 16.\n" +
                "PASO 2: Buscar múltiplo de 16 cercano a 35 sin pasarse.\n" +
                "PASO 3: $16 \\times 2 = 32$.\n" +
                "PASO 4: Resultado. 192.168.5.32."
        },

        {
            "profe": false,
            "unit": "Direcciones de Red",
            "diff": "hard",
            "q": "¿Cuál es la dirección de red de 172.25.100.50 con máscara 255.255.252.0?",
            "opts": [
                "172.25.96.0", 
                "172.25.100.0", 
                "172.25.104.0", 
                "172.25.98.0"
            ],
            "ans": 1,
            "exp": "PASO 1: Blocksize en el tercer octeto = 256 - 252 = 4.\n" +
                "PASO 2: Buscar múltiplo de 4 cercano a 100.\n" +
                "PASO 3: 100 es múltiplo exacto ($4 \\times 25 = 100$).\n" +
                "PASO 4: Resultado. 172.25.100.0."
        },

        {
            "profe": false,
            "unit": "Direcciones de Red",
            "diff": "hard",
            "q": "¿Cuál es la dirección de red de 10.15.200.100 con máscara 255.255.240.0?",
            "opts": [
                "10.15.192.0", 
                "10.15.200.0", 
                "10.15.208.0", 
                "10.15.196.0"
            ],
            "ans": 0,
            "exp": "PASO 1: Blocksize tercer octeto = 256 - 240 = 16.\n" +
                "PASO 2: Dividir 200 / 16 = 12.5.\n" +
                "PASO 3: Multiplicar entero por bloque: $12 \\times 16 = 192$.\n" +
                "PASO 4: Resultado. 10.15.192.0."
        },

        // ==================== BROADCAST ====================
        {
            "profe": false,
            "unit": "Broadcast",
            "diff": "medium",
            "q": "Para la subred 192.168.1.32/28, ¿cuál es el broadcast?",
            "opts": [
                "192.168.1.32", 
                "192.168.1.47", 
                "192.168.1.48", 
                "192.168.1.63"
            ],
            "ans": 1,
            "exp": "PASO 1: Blocksize = 16.\n" +
                "PASO 2: Red actual .32 + blocksize 16 = .48 (Siguiente red).\n" +
                "PASO 3: Restar 1 a la siguiente red: .48 - 1 = .47.\n" +
                "PASO 4: Resultado. 192.168.1.47."
        },

        {
            "profe": false,
            "unit": "Broadcast",
            "diff": "medium",
            "q": "Para la subred 192.168.1.64/26, ¿cuál es el broadcast?",
            "opts": [
                "192.168.1.64", 
                "192.168.1.127", 
                "192.168.1.128", 
                "192.168.1.191"
            ],
            "ans": 1,
            "exp": "PASO 1: Blocksize = 64.\n" +
                "PASO 2: Siguiente red = 64 + 64 = 128.\n" +
                "PASO 3: Broadcast = 128 - 1 = 127.\n" +
                "PASO 4: Resultado. 192.168.1.127."
        },

        {
            "profe": false,
            "unit": "Broadcast",
            "diff": "hard",
            "q": "Para la subred 172.16.0.0/20, ¿cuál es el broadcast?",
            "opts": [
                "172.16.15.255", 
                "172.16.31.255", 
                "172.16.0.255", 
                "172.16.255.255"
            ],
            "ans": 0,
            "exp": "PASO 1: Blocksize tercer octeto = 16.\n" +
                "PASO 2: Siguiente red = 172.16.16.0.\n" +
                "PASO 3: Restar 1: 172.16.15.255."
        },

        // ==================== RANGOS DE HOSTS ====================
        {
            "profe": false,
            "unit": "Rangos de Hosts",
            "diff": "medium",
            "q": "¿Cuál es el rango de hosts válidos para la subred 192.168.1.32/27?",
            "opts": [
                "192.168.1.32 - 192.168.1.63", 
                "192.168.1.33 - 192.168.1.62", 
                "192.168.1.1 - 192.168.1.30", 
                "192.168.1.0 - 192.168.1.31"
            ],
            "ans": 1,
            "exp": "PASO 1: Red .32, Blocksize 32.\n" +
                "PASO 2: Siguiente red .64, Broadcast .63.\n" +
                "PASO 3: Primer host = .32 + 1 = .33. Último host = .63 - 1 = .62.\n" +
                "PASO 4: Rango. .33 al .62."
        },

        {
            "profe": false,
            "unit": "Rangos de Hosts",
            "diff": "medium",
            "q": "¿Cuál es el rango de hosts para la subred 10.0.0.0/24?",
            "opts": [
                "10.0.0.0 - 10.0.0.255", 
                "10.0.0.1 - 10.0.0.254", 
                "10.0.0.0 - 10.0.0.254", 
                "10.0.0.1 - 10.0.0.255"
            ],
            "ans": 1,
            "exp": "PASO 1: Red .0, Broadcast .255.\n" +
                "PASO 2: Primer host utilizable .1.\n" +
                "PASO 3: Último host utilizable .254.\n" +
                "PASO 4: Resultado. 10.0.0.1 a 10.0.0.254."
        },


        // ==================== SISTEMA BINARIO ====================
        {
            "profe": false,
            "unit": "Sistema Binario",
            "diff": "easy",
            "q": "¿Cuál es la base del sistema binario?",
            "opts": [
                "10",
                "2", 
                "16", 
                "8"
            ],
            "ans": 1,
            "exp": "PASO 1: Identificar el número de símbolos. El prefijo 'bi' indica dos elementos.\n" +
                "PASO 2: Definir dígitos. Se utilizan exclusivamente el 0 (apagado) y 1 (encendido).\n" +
                "PASO 3: Conclusión. La base es 2."
        },

        {
            "profe": false,
            "unit": "Sistema Binario",
            "diff": "easy",
            "q": "¿Qué número decimal representa el binario 1010?",
            "opts": [
                "8", 
                "9", 
                "10", 
                "12"
            ],
            "ans": 2,
            "exp": "PASO 1: Asignar valores de posición (de derecha a izquierda): $2^0=1, 2^1=2, 2^2=4, 2^3=8$.\n" +
                "PASO 2: Multiplicar dígito por valor: ($1 \\times 8$) + ($0 \\times 4$) + ($1 \\times 2$) + ($0 \\times 1$).\n" +
                "PASO 3: Sumar resultados: $8 + 0 + 2 + 0 = 10$."
        },

        {
            "profe": false,
            "unit": "Sistema Binario",
            "diff": "medium",
            "q": "Convierte el número decimal 28 a binario.",
            "opts": [
                "11100", 
                "11010", 
                "11110", 
                "10110"
            ],
            "ans": 0,
            "exp": "PASO 1: Divisiones sucesivas por 2. 28/2 = 14 (r:0); 14/2 = 7 (r:0); 7/2 = 3 (r:1); 3/2 = 1 (r:1); 1/2 = 0 (r:1).\n" +
                "PASO 2: Ordenar residuos de abajo hacia arriba.\n" +
                "PASO 3: Resultado: 11100."
        },

        {
            "profe": false,
            "unit": "Sistema Binario",
            "diff": "medium",
            "q": "Convierte el número decimal 71 a binario.",
            "opts": [
                "1000111", 
                "1001111", 
                "1010111", 
                "1100111"
            ],
            "ans": 0,
            "exp": "PASO 1: Divisiones por 2: 71/2 (r:1), 35/2 (r:1), 17/2 (r:1), 8/2 (r:0), 4/2 (r:0), 2/2 (r:0), 1/2 (r:1).\n" +
                "PASO 2: Invertir el orden de los residuos.\n" +
                "PASO 3: Resultado final: 1000111."
        },

        {
            "profe": false,
            "unit": "Sistema Binario",
            "diff": "medium",
            "q": "Convierte el número decimal 255 a binario.",
            "opts": [
                "11111111", 
                "11111110", 
                "11111000", 
                "11110000"
            ],
            "ans": 0,
            "exp": "PASO 1: Identificar valor máximo de un octeto. $2^8 - 1 = 255$.\n" +
                "PASO 2: Verificar bits encendidos. 128+64+32+16+8+4+2+1 = 255.\n" +
                "PASO 3: Representación. Los 8 bits están en 1 (11111111)."
        },

        {
            "profe": false,
            "unit": "Sistema Binario",
            "diff": "medium",
            "q": "Convierte el binario 11000000 a decimal.",
            "opts": [
                "128", 
                "192", 
                "224", 
                "240"
            ],
            "ans": 1,
            "exp": "PASO 1: Identificar bits encendidos. Bit 1 (128) y Bit 2 (64).\n" +
                "PASO 2: Realizar la suma decimal: $128 + 64$.\n" +
                "PASO 3: Resultado: 192."
        },

        {
            "profe": false,
            "unit": "Sistema Binario",
            "diff": "medium",
            "q": "Convierte el binario 11100000 a decimal.",
            "opts": [
                "192", 
                "224", 
                "240", 
                "248"
            ],
            "ans": 1,
            "exp": "PASO 1: Identificar bits encendidos. Posiciones 128, 64 y 32.\n" +
                "PASO 2: Realizar la suma: $128 + 64 + 32$.\n" +
                "PASO 3: Resultado: 224."
        },

        {
            "profe": false,
            "unit": "Sistema Binario",
            "diff": "medium",
            "q": "¿Qué operación lógica binaria produce '1' solo si ambas entradas son '1'?",
            "opts": [
                "OR", 
                "AND", 
                "XOR", 
                "NOT"
            ],
            "ans": 1,
            "exp": "PASO 1: Revisar tablas de verdad. La operación AND requiere coincidencia total para ser verdadera.\n" +
                "PASO 2: Aplicación en redes. Se usa para aplicar la máscara a una IP y obtener la dirección de red.\n" +
                "PASO 3: Regla: 1 AND 1 = 1; cualquier otra combinación = 0."
        },

        {
            "profe": false,
            "unit": "Sistema Binario",
            "diff": "easy",
            "q": "¿Qué es un bit?",
            "opts": [
                "Un byte de información", 
                "Un dígito binario (0 o 1)", 
                "Un paquete de datos", 
                "Un protocolo de red"
            ],
            "ans": 1,
            "exp": "PASO 1: Origen del término. Acrónimo de 'Binary Digit'.\n" +
                "PASO 2: Definir magnitud. Es la unidad de medida de información más pequeña.\n" +
                "PASO 3: Estados. Solo puede representar dos estados lógicos: 0 o 1."
        },

        // ==================== IPv6 - CONCEPTOS BÁSICOS ====================
        {
            "profe": false,
            "unit": "IPv6",
            "diff": "easy",
            "q": "¿Cuántos bits tiene una dirección IPv6?",
            "opts": [
                "32 bits", 
                "64 bits", 
                "128 bits", 
                "256 bits"
            ],
            "ans": 2,
            "exp": "PASO 1: Comparar con IPv4 (32 bits). IPv6 fue diseñado para un espacio de direccionamiento masivo.\n" +
                "PASO 2: Estructura. Se compone de 128 bits totales.\n" +
                "PASO 3: Organización. Divididos en 8 grupos (hextetos) de 16 bits cada uno."
        },

        {
            "profe": false,
            "unit": "IPv6",
            "diff": "easy",
            "q": "¿Qué tipo de dirección IPv6 reemplaza al broadcast de IPv4?",
            "opts": [
                "Unicast", 
                "Multicast", 
                "Anycast", 
                "Loopback"
            ],
            "ans": 1,
            "exp": "PASO 1: Identificar ineficiencia del broadcast. Envía tráfico a todos, incluso si no lo requieren.\n" +
                "PASO 2: Nueva gestión en IPv6. Se eliminó el broadcast.\n" +
                "PASO 3: Solución. Se usa Multicast para dirigir el tráfico solo a grupos de interfaces interesadas."
        },

        {
            "profe": false,
            "unit": "IPv6",
            "diff": "easy",
            "q": "¿Qué es un hexteto en IPv6?",
            "opts": [
                "Un grupo de 8 bits", 
                "Un grupo de 16 bits", 
                "Un grupo de 32 bits", 
                "Un grupo de 64 bits"
            ],
            "ans": 1,
            "exp": "PASO 1: Estructura de visualización. IPv6 se escribe en hexadecimal.\n" +
                "PASO 2: Segmentación. La dirección se divide en 8 partes separadas por dos puntos.\n" +
                "PASO 3: Composición de cada parte. Cada una contiene 16 bits (4 caracteres hexadecimales)."
        },

        {
            "profe": false,
            "unit": "IPv6",
            "diff": "easy",
            "q": "¿Cuál es una característica principal de IPv6 respecto a seguridad?",
            "opts": [
                "No incluye seguridad", 
                "Incluye IPsec como parte del protocolo base", 
                "Solo ofrece seguridad con firewall", 
                "Es menos seguro que IPv4"
            ],
            "ans": 1,
            "exp": "PASO 1: Analizar diseño de origen. IPv4 añadió seguridad como un parche posterior.\n" +
                "PASO 2: Integración en IPv6. IPsec (IP Security) es obligatorio en la especificación original.\n" +
                "PASO 3: Ventaja. Permite cifrado y autenticación de extremo a extremo de forma nativa."
        },

        {
            "profe": false,
            "unit": "IPv6",
            "diff": "easy",
            "q": "¿Qué funcionalidad permite IPv6 sin necesidad de servidores DHCP?",
            "opts": [
                "Autoconfiguración SLAAC", 
                "Multicasting", 
                "Anycast", 
                "Fragmentación"
            ],
            "ans": 0,
            "exp": "PASO 1: Definir SLAAC (Stateless Address Autoconfiguration).\n" +
                "PASO 2: Funcionamiento. El host genera su propia dirección usando el prefijo del router y su MAC (o un ID aleatorio).\n" +
                "PASO 3: Beneficio. Permite conectividad inmediata 'Plug-and-play' sin servidor central."
        },

        // ==================== IPv6 - REGLAS DE COMPRESIÓN ====================
        {
            "profe": false,
            "unit": "IPv6 Compresión",
            "diff": "medium",
            "q": "Aplica la regla de compresión #1 (omitir ceros iniciales) a: 2001:0DB8:0000:0000:0000:0000:1428:57AB",
            "opts": [
                "2001:DB8:0:0:0:0:1428:57AB", 
                "2001:DB8::1428:57AB", 
                "2001:DB8::0:1428:57AB", 
                "2001:DB8:0::1428:57AB"
            ],
            "ans": 0,
            "exp": "PASO 1: Localizar ceros a la izquierda en cada hexteto.\n" +
                "PASO 2: Reducir 0DB8 a DB8 y los grupos 0000 a un único 0.\n" +
                "PASO 3: Resultado. 2001:DB8:0:0:0:0:1428:57AB."
        },

        {
            "profe": false,
            "unit": "IPv6 Compresión",
            "diff": "medium",
            "q": "Aplica la regla de compresión #2 (::) a: 2001:DB8:0:0:0:0:1428:57AB",
            "opts": [
                "2001:DB8::1428:57AB", 
                "2001:DB8:0::1428:57AB", 
                "2001:DB8::0:1428:57AB", 
                "2001:DB8:0:0::1428:57AB"
            ],
            "ans": 0,
            "exp": "PASO 1: Identificar bloques de ceros consecutivos. Hay cuatro grupos de ceros.\n" +
                "PASO 2: Sustituir la cadena completa por dos puntos dobles (::).\n" +
                "PASO 3: Resultado. 2001:DB8::1428:57AB."
        },

        {
            "profe": false,
            "unit": "IPv6 Compresión",
            "diff": "medium",
            "q": "Aplica regla #1 a: 2001:010F:0ABC:345D:1100:0000:FCD2:00AA",
            "opts": [
                "2001:10F:ABC:345D:1100:0:FCD2:AA", 
                "2001:10F:0ABC:345D:1100:0:FCD2:AA", 
                "2001:10F:ABC:345D:1100::FCD2:AA", 
                "2001:10F::345D:1100:0:FCD2:AA"
            ],
            "ans": 0,
            "exp": "PASO 1: 010F $\\rightarrow$ 10F; 0ABC $\\rightarrow$ ABC.\n" +
                "PASO 2: 0000 $\\rightarrow$ 0; 00AA $\\rightarrow$ AA.\n" +
                "PASO 3: Mantener ceros finales (1100 no cambia). Resultado: 2001:10F:ABC:345D:1100:0:FCD2:AA."
        },

        {
            "profe": false,
            "unit": "IPv6 Compresión",
            "diff": "hard",
            "q": "Aplica ambas reglas a: 3FFE:0000:0000:0000:1245:0098:3210:0002",
            "opts": [
                "3FFE::1245:98:3210:2", 
                "3FFE:0:0:0:1245:98:3210:2", 
                "3FFE::1245:0098:3210:0002", 
                "3FFE:0:0:0:1245:0098:3210:2"
            ],
            "ans": 0,
            "exp": "PASO 1: Regla 1 (ceros iniciales): 3FFE:0:0:0:1245:98:3210:2.\n" +
                "PASO 2: Regla 2 (::): Colapsar los tres ceros consecutivos.\n" +
                "PASO 3: Resultado final: 3FFE::1245:98:3210:2."
        },

        {
            "profe": false,
            "unit": "IPv6 Compresión",
            "diff": "hard",
            "q": "Aplica ambas reglas a: FF01:0000:0000:0000:0000:0000:0000:0101",
            "opts": [
                "FF01::101", 
                "FF01:0:0:0:0:0:0:101", 
                "FF01::1:1", 
                "FF01::101:1"
            ],
            "ans": 0,
            "exp": "PASO 1: Eliminar ceros iniciales en 0101 $\\rightarrow$ 101.\n" +
                "PASO 2: Detectar la cadena más larga de ceros (6 grupos).\n" +
                "PASO 3: Sustituir por ::. Resultado: FF01::101."
        },

        {
            "profe": false,
            "unit": "IPv6 Compresión",
            "diff": "medium",
            "q": "¿Cuál es la representación comprimida de 0:0:0:0:0:0:192.168.44.1?",
            "opts": [
                "::192.168.44.1", 
                "0:0:0:0:0:0:192.168.44.1", 
                "::C0A8:2C01", 
                "192.168.44.1"
            ],
            "ans": 0,
            "exp": "PASO 1: Agrupar todos los hextetos de valor cero iniciales.\n" +
                "PASO 2: Sustituirlos por :: al principio de la dirección.\n" +
                "PASO 3: Mantener la notación mixta IPv4 al final para compatibilidad. Resultado: ::192.168.44.1."
        },

        {
            "profe": false,
            "unit": "IPv6 Compresión",
            "diff": "medium",
            "q": "¿Cuál de las siguientes es una dirección IPv6 válida comprimida?",
            "opts": [
                "2001:0db8::1428::57ab", 
                "2001:db8::1428:57ab", 
                "2001:db8:0:0:1428:57ab::", 
                "2001:db8::1428::57ab"
            ],
            "ans": 1,
            "exp": "PASO 1: Verificar la regla del doble colon (::).\n" +
                "PASO 2: Identificar error común. No se puede usar :: más de una vez en la misma dirección.\n" +
                "PASO 3: Validación. 2001:db8::1428:57ab es la única sin ambigüedad."
        },

        {
            "profe": false,
            "unit": "IPv6 Compresión",
            "diff": "medium",
            "q": "¿Qué dirección IPv6 comprimida es equivalente a 2001:0DB8:0000:0000:ABCD:0000:0000:1234?",
            "opts": [
                "2001:DB8::ABCD:0:0:1234", 
                "2001:DB8:0:0:ABCD::1234", 
                "2001:DB8::ABCD::1234", 
                "2001:DB8:0:0:ABCD:0:0:1234"
            ],
            "ans": 1,
            "exp": "PASO 1: Localizar grupos de ceros. Hay dos cadenas distintas (dos ceros y dos ceros).\n" +
                "PASO 2: Aplicar ::. Solo puedes elegir UNA cadena para colapsar.\n" +
                "PASO 3: Revisión de opciones. La opción B colapsa la segunda cadena correctamente."
        },

        // ==================== TIPOS DE DIRECCIONES IPv6 ====================
        {
            "profe": false,
            "unit": "IPv6 Tipos",
            "diff": "medium",
            "q": "¿Qué tipo de dirección IPv6 identifica de manera única una interfaz?",
            "opts": [
                "Multicast", 
                "Anycast", 
                "Unicast", 
                "Broadcast"
            ],
            "ans": 2,
            "exp": "PASO 1: Definir Unicast. Comunicación uno a uno.\n" +
                "PASO 2: Propósito. Se utiliza para asignar una dirección global o local única a un dispositivo.\n" +
                "PASO 3: Distinción. A diferencia de Anycast, el paquete llega a una interfaz específica, no a la 'más cercana'."
        },

        {
            "profe": false,
            "unit": "IPv6 Tipos",
            "diff": "medium",
            "q": "¿Qué tipo de dirección IPv6 se envía a un grupo específico de interfaces?",
            "opts": [
                "Unicast", 
                "Multicast", 
                "Anycast", 
                "Loopback"
            ],
            "ans": 1,
            "exp": "PASO 1: Analizar comunicación grupal. Corresponde al concepto de 'uno a varios'.\n" +
                "PASO 2: Prefijo. Las direcciones Multicast en IPv6 siempre comienzan con FF.\n" +
                "PASO 3: Funcionamiento. Solo los nodos suscritos al grupo procesan el paquete."
        },

        {
            "profe": false,
            "unit": "IPv6 Tipos",
            "diff": "medium",
            "q": "¿Qué dirección IPv6 es equivalente a loopback (127.0.0.1) en IPv4?",
            "opts": [
                "::1", 
                "::0", 
                "0:0:0:0:0:0:0:1", 
                "Ambas A y C"
            ],
            "ans": 3,
            "exp": "PASO 1: Identificar función de loopback. Probar el stack TCP/IP interno.\n" +
                "PASO 2: Forma expandida. Siete grupos de ceros y el último bit en 1.\n" +
                "PASO 3: Aplicar compresión. Se reduce a ::1. Ambas formas son técnicamente correctas."
        },

        {
            "profe": false,
            "unit": "IPv6 Tipos",
            "diff": "medium",
            "q": "¿Qué dirección IPv6 representa una dirección no especificada?",
            "opts": [
                "::1", 
                "::0", 
                "0:0:0:0:0:0:0:0", 
                "Ambas B y C"
            ],
            "ans": 3,
            "exp": "PASO 1: Definir uso. Se usa cuando un dispositivo aún no conoce su dirección (ej. en solicitudes DHCP).\n" +
                "PASO 2: Estructura. Todos los bits están en 0.\n" +
                "PASO 3: Compresión. Se representa simplemente como :: (o ::0)."
        },

        // ==================== PREGUNTAS DE REPASO GENERAL ====================
        {
            "profe": false,
            "unit": "Repaso",
            "diff": "medium",
            "q": "¿Qué representa el gateway predeterminado en una subred?",
            "opts": [
                "La dirección de red", 
                "La dirección de broadcast", 
                "La dirección del router conectado a la subred", 
                "Cualquier dirección de host"
            ],
            "ans": 2,
            "exp": "PASO 1: Identificar salida de tráfico. ¿A dónde va un paquete si no está en mi red?\n" +
                "PASO 2: Función del Router. Es el dispositivo que conoce los caminos externos.\n" +
                "PASO 3: Configuración. El gateway es la IP de la interfaz del router que 'mira' hacia mi subred."
        },

        {
            "profe": false,
            "unit": "Repaso",
            "diff": "medium",
            "q": "¿Por qué se restan 2 direcciones al calcular hosts útiles?",
            "opts": [
                "Por seguridad", 
                "Por la dirección de red y broadcast", 
                "Por el gateway", 
                "Por el DNS"
            ],
            "ans": 1,
            "exp": "PASO 1: Reservas obligatorias. Cada subred necesita un nombre (Red) y un canal de aviso (Broadcast).\n" +
                "PASO 2: Identificar extremos. La primera IP identifica el segmento; la última envía a todos.\n" +
                "PASO 3: Regla. Ningún host puede usar estas dos direcciones para su interfaz."
        },

        {
            "profe": false,
            "unit": "Repaso",
            "diff": "medium",
            "q": "¿Qué es CIDR?",
            "opts": [
                "Un protocolo de enrutamiento", 
                "Notación que indica cantidad de bits de red", 
                "Un tipo de cable", 
                "Un sistema operativo"
            ],
            "ans": 1,
            "exp": "PASO 1: Definir siglas. Classless Inter-Domain Routing.\n" +
                "PASO 2: Eliminar clases rígidas (A, B, C). Permite máscaras de longitud variable.\n" +
                "PASO 3: Notación. Se expresa con una barra (/) seguida del número de bits de red (ej. /26)."
        },

        {
            "profe": false,
            "unit": "Repaso",
            "diff": "hard",
            "q": "Si una empresa tiene 4 departamentos y cada uno necesita al menos 50 hosts, ¿qué máscara debe usar como mínimo?",
            "opts": [
                "/24 (255.255.255.0)", 
                "/25 (255.255.255.128)", 
                "/26 (255.255.255.192)", 
                "/27 (255.255.255.224)"
            ],
            "ans": 2,
            "exp": "PASO 1: Analizar bits de host para 50 dispositivos. $2^5=32$ (insuficiente), $2^6=64$.\n" +
                "PASO 2: Calcular hosts útiles. $64 - 2 = 62$ (cumple para 50).\n" +
                "PASO 3: Determinar máscara. 32 bits totales - 6 bits de host = /26 (255.255.255.192)."
        }
    ];



export default preguntas_sistemas_operativos;
