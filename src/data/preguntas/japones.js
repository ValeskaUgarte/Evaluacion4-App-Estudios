const preguntas_japones = [
    // ==================== BÁSICO (profe: true) ====================
    {
        "profe": true,
        "unit": "Hiragana - Vocales",
        "diff": "easy",
        "q": "Escribe el hiragana correcto para cada vocal y su romanización.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Completa la tabla de vocales</h5>
            <table class="subnet-table">
                <tr><th>Vocal</th><th>Hiragana</th><th>Romanización</th></tr>
                <tr><td>a</td><td><input placeholder="Hiragana"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>i</td><td><input placeholder="Hiragana"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>u</td><td><input placeholder="Hiragana"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>e</td><td><input placeholder="Hiragana"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>o</td><td><input placeholder="Hiragana"></td><td><input placeholder="Rōmaji"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "あ(a), い(i), う(u), え(e), お(o)",
            "ア(a), イ(i), ウ(u), エ(e), オ(o)",
            "か(ka), き(ki), く(ku), け(ke), こ(ko)",
            "さ(sa), し(shi), す(su), せ(se), そ(so)"
        ],
        "ans": 0,
        "exp": "Las vocales en hiragana son: あ (a), い (i), う (u), え (e), お (o). La romanización coincide con su sonido."
    },
    {
        "profe": true,
        "unit": "Hiragana - K Linea",
        "diff": "easy",
        "q": "Completa la tabla de la línea K del hiragana.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Línea K (か - こ)</h5>
            <table class="subnet-table">
                <tr><th>Romaji</th><th>Hiragana</th></tr>
                <tr><td>ka</td><td><input placeholder="Hiragana"></td></tr>
                <tr><td>ki</td><td><input placeholder="Hiragana"></td></tr>
                <tr><td>ku</td><td><input placeholder="Hiragana"></td></tr>
                <tr><td>ke</td><td><input placeholder="Hiragana"></td></tr>
                <tr><td>ko</td><td><input placeholder="Hiragana"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "か, き, く, け, こ",
            "が, ぎ, ぐ, げ, ご",
            "さ, し, す, せ, そ",
            "た, ち, つ, て, と"
        ],
        "ans": 0,
        "exp": "La línea K en hiragana es: か (ka), き (ki), く (ku), け (ke), こ (ko)."
    },
    {
        "profe": true,
        "unit": "Katakana - Vocales",
        "diff": "easy",
        "q": "Completa la tabla de vocales en katakana.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Vocales en Katakana</h5>
            <table class="subnet-table">
                <tr><th>Vocal</th><th>Katakana</th></tr>
                <tr><td>a</td><td><input placeholder="Katakana"></td></tr>
                <tr><td>i</td><td><input placeholder="Katakana"></td></tr>
                <tr><td>u</td><td><input placeholder="Katakana"></td></tr>
                <tr><td>e</td><td><input placeholder="Katakana"></td></tr>
                <tr><td>o</td><td><input placeholder="Katakana"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "ア, イ, ウ, エ, オ",
            "あ, い, う, え, お",
            "カ, キ, ク, ケ, コ",
            "サ, シ, ス, セ, ソ"
        ],
        "ans": 0,
        "exp": "Las vocales en katakana son: ア (a), イ (i), ウ (u), エ (e), オ (o). Se usan para palabras extranjeras."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "Completa las frases de saludo en japonés con su romanización.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Saludos básicos</h5>
            <table class="subnet-table">
                <tr><th>Español</th><th>Japonés</th><th>Romanización</th></tr>
                <tr><td>Buenos días (formal)</td><td><input placeholder="Japonés"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>Buenas tardes</td><td><input placeholder="Japonés"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>Buenas noches (saludo)</td><td><input placeholder="Japonés"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>Gracias (formal)</td><td><input placeholder="Japonés"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>Lo siento / Disculpe</td><td><input placeholder="Japonés"></td><td><input placeholder="Rōmaji"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "おはようございます(ohayō gozaimasu), こんにちは(konnichiwa), こんばんは(konbanwa), ありがとうございます(arigatō gozaimasu), すみません(sumimasen)",
            "おはよう(ohayō), こんにちは(konnichiwa), こんばんは(konbanwa), ありがとう(arigatō), すみません(sumimasen)",
            "おやすみなさい(oyasuminasai), こんにちは(konnichiwa), こんばんは(konbanwa), ありがとう(arigatō), ごめんなさい(gomennasai)",
            "おはようございます(ohayō gozaimasu), こんばんは(konbanwa), おやすみなさい(oyasuminasai), ありがとうございます(arigatō gozaimasu), すみません(sumimasen)"
        ],
        "ans": 0,
        "exp": "Saludos básicos: おはようございます (ohayō gozaimasu) = Buenos días; こんにちは (konnichiwa) = Buenas tardes; こんばんは (konbanwa) = Buenas noches; ありがとうございます (arigatō gozaimasu) = Gracias; すみません (sumimasen) = Disculpe/Lo siento."
    },
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "Completa la tabla de números del 1 al 10 en japonés.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Números 1-10</h5>
            <table class="subnet-table">
                <tr><th>Número</th><th>Japonés</th><th>Romanización</th></tr>
                <tr><td>1</td><td><input placeholder="Japonés"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>2</td><td><input placeholder="Japonés"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>3</td><td><input placeholder="Japonés"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>4</td><td><input placeholder="Japonés"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>5</td><td><input placeholder="Japonés"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>6</td><td><input placeholder="Japonés"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>7</td><td><input placeholder="Japonés"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>8</td><td><input placeholder="Japonés"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>9</td><td><input placeholder="Japonés"></td><td><input placeholder="Rōmaji"></td></tr>
                <tr><td>10</td><td><input placeholder="Japonés"></td><td><input placeholder="Rōmaji"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "いち(ichi), に(ni), さん(san), よん(yon)/し(shi), ご(go), ろく(roku), なな(nana)/しち(shichi), はち(hachi), きゅう(kyū), じゅう(jū)",
            "いち(ichi), に(ni), さん(san), し(shi), ご(go), ろく(roku), しち(shichi), はち(hachi), きゅう(kyū), じゅう(jū)",
            "ひとつ(hitotsu), ふたつ(futatsu), みっつ(mittsu), よっつ(yottsu), いつつ(itsutsu), むっつ(muttsu), ななつ(nanatsu), やっつ(yattsu), ここのつ(kokonotsu), とお(tō)",
            "いち(ichi), に(ni), さん(san), よん(yon), ご(go), ろく(roku), なな(nana), はち(hachi), きゅう(kyū), じゅう(jū)"
        ],
        "ans": 0,
        "exp": "Números japoneses: 1=いち(ichi), 2=に(ni), 3=さん(san), 4=よん(yon) o し(shi), 5=ご(go), 6=ろく(roku), 7=なな(nana) o しち(shichi), 8=はち(hachi), 9=きゅう(kyū), 10=じゅう(jū)."
    },
    {
        "profe": true,
        "unit": "Kanji - Números",
        "diff": "easy",
        "q": "Relaciona cada kanji con su número y lectura.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Kanji de números</h5>
            <table class="subnet-table">
                <tr><th>Kanji</th><th>Número</th><th>Lectura (on'yomi)</th><th>Lectura (kun'yomi)</th></tr>
                <tr><td>一</td><td><input placeholder="Número"></td><td><input placeholder="On'yomi"></td><td><input placeholder="Kun'yomi"></td></tr>
                <tr><td>二</td><td><input placeholder="Número"></td><td><input placeholder="On'yomi"></td><td><input placeholder="Kun'yomi"></td></tr>
                <tr><td>三</td><td><input placeholder="Número"></td><td><input placeholder="On'yomi"></td><td><input placeholder="Kun'yomi"></td></tr>
                <tr><td>四</td><td><input placeholder="Número"></td><td><input placeholder="On'yomi"></td><td><input placeholder="Kun'yomi"></td></tr>
                <tr><td>五</td><td><input placeholder="Número"></td><td><input placeholder="On'yomi"></td><td><input placeholder="Kun'yomi"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "1: ichi / hito, 2: ni / futa, 3: san / mi, 4: shi / yon, 5: go / itsu",
            "1: ichi / hito, 2: ni / futa, 3: san / mi, 4: yon / shi, 5: go / itsu",
            "1: hitotsu, 2: futatsu, 3: mittsu, 4: yottsu, 5: itsutsu",
            "1: ichi, 2: ni, 3: san, 4: shi, 5: go"
        ],
        "ans": 0,
        "exp": "Kanji de números: 一 = 1 (ichi / hito), 二 = 2 (ni / futa), 三 = 3 (san / mi), 四 = 4 (shi / yon), 五 = 5 (go / itsu)."
    },
    {
        "profe": true,
        "unit": "Partículas",
        "diff": "easy",
        "q": "Completa las oraciones con la partícula correcta.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Partículas básicas</h5>
            <table class="subnet-table">
                <tr><th>Oración</th><th>Partícula</th><th>Función</th></tr>
                <tr><td>私 ___ 学生です</td><td><input placeholder="Partícula"></td><td><input placeholder="Función"></td></tr>
                <tr><td>ご飯 ___ 食べる</td><td><input placeholder="Partícula"></td><td><input placeholder="Función"></td></tr>
                <tr><td>学校 ___ 行く</td><td><input placeholder="Partícula"></td><td><input placeholder="Función"></td></tr>
                <tr><td>公園 ___ 遊ぶ</td><td><input placeholder="Partícula"></td><td><input placeholder="Función"></td></tr>
                <tr><td>友達 ___ 話す</td><td><input placeholder="Partícula"></td><td><input placeholder="Función"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "は(wa) / tema, を(o) / objeto directo, へ(e) / dirección, で(de) / lugar de acción, と(to) / compañía",
            "が(ga) / sujeto, に(ni) / destino, で(de) / lugar, を(o) / objeto, と(to) / compañía",
            "は(wa) / tema, が(ga) / sujeto, に(ni) / destino, で(de) / lugar, と(to) / compañía",
            "は(wa) / tema, を(o) / objeto, に(ni) / destino, で(de) / lugar, へ(e) / dirección"
        ],
        "ans": 0,
        "exp": "Partículas: は(wa) marca el tema; を(o) marca objeto directo; へ(e) indica dirección; で(de) indica lugar de acción; と(to) indica compañía."
    },
    {
        "profe": true,
        "unit": "Verbos - Forma Masu",
        "diff": "easy",
        "q": "Completa la conjugación de verbos a forma -masu.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Conjugación -masu</h5>
            <table class="subnet-table">
                <tr><th>Verbo (diccionario)</th><th>Forma -masu</th><th>Traducción</th></tr>
                <tr><td>食べる (taberu)</td><td><input placeholder="Forma -masu"></td><td><input placeholder="Traducción"></td></tr>
                <tr><td>行く (iku)</td><td><input placeholder="Forma -masu"></td><td><input placeholder="Traducción"></td></tr>
                <tr><td>見る (miru)</td><td><input placeholder="Forma -masu"></td><td><input placeholder="Traducción"></td></tr>
                <tr><td>する (suru)</td><td><input placeholder="Forma -masu"></td><td><input placeholder="Traducción"></td></tr>
                <tr><td>来る (kuru)</td><td><input placeholder="Forma -masu"></td><td><input placeholder="Traducción"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "食べます(tabemasu) / comer, 行きます(ikimasu) / ir, 見ます(mimasu) / ver, します(shimasu) / hacer, 来ます(kimasu) / venir",
            "食べる(taberu) / comer, 行く(iku) / ir, 見る(miru) / ver, する(suru) / hacer, 来る(kuru) / venir",
            "食べた(tabeta) / comió, 行った(itta) / fue, 見た(mita) / vio, した(shita) / hizo, 来た(kita) / vino",
            "食べない(tabenai) / no comer, 行かない(ikanai) / no ir, 見ない(minai) / no ver, しない(shinai) / no hacer, 来ない(konai) / no venir"
        ],
        "ans": 0,
        "exp": "Forma -masu: 食べる→食べます (comer), 行く→行きます (ir), 見る→見ます (ver), する→します (hacer), 来る→来ます (venir)."
    },
    {
        "profe": true,
        "unit": "Adjetivos - I y NA",
        "diff": "medium",
        "q": "Clasifica los adjetivos en I-adjetivos y NA-adjetivos, y escribe su forma negativa.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Adjetivos I y NA</h5>
            <table class="subnet-table">
                <tr><th>Adjetivo</th><th>Tipo</th><th>Negativo</th></tr>
                <tr><td>おいしい (oishii)</td><td><input placeholder="I o NA"></td><td><input placeholder="Negativo"></td></tr>
                <tr><td>しずか (shizuka)</td><td><input placeholder="I o NA"></td><td><input placeholder="Negativo"></td></tr>
                <tr><td>あつい (atsui)</td><td><input placeholder="I o NA"></td><td><input placeholder="Negativo"></td></tr>
                <tr><td>きれい (kirei)</td><td><input placeholder="I o NA"></td><td><input placeholder="Negativo"></td></tr>
                <tr><td>たかい (takai)</td><td><input placeholder="I o NA"></td><td><input placeholder="Negativo"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "I: おいしくない(oishikunai), NA: しずかじゃない(shizuka janai), I: あつくない(atsukunai), NA: きれいじゃない(kirei janai), I: たかくない(takakunai)",
            "I: おいしくない, NA: しずかではない, I: あつくない, NA: きれいではない, I: たかくない",
            "I: おいしくない, NA: しずかじゃない, I: あつくない, NA: きれいじゃない, I: たかくない (ambas formas son correctas)",
            "I: おいしいじゃない, NA: しずかくない, I: あついじゃない, NA: きれいくない, I: たかいじゃない"
        ],
        "ans": 2,
        "exp": "I-adjetivos: terminan en い y se conjugan (おいしい→おいしくない). NA-adjetivos: necesitan な o じゃない (しずか→しずかじゃない / しずかではない)."
    },
    {
        "profe": true,
        "unit": "Kanji - Básicos",
        "diff": "easy",
        "q": "Completa la tabla de kanji básicos con su significado y lectura.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Kanji básicos</h5>
            <table class="subnet-table">
                <tr><th>Kanji</th><th>Significado</th><th>Lectura (on'yomi)</th><th>Lectura (kun'yomi)</th></tr>
                <tr><td>人</td><td><input placeholder="Significado"></td><td><input placeholder="On'yomi"></td><td><input placeholder="Kun'yomi"></td></tr>
                <tr><td>山</td><td><input placeholder="Significado"></td><td><input placeholder="On'yomi"></td><td><input placeholder="Kun'yomi"></td></tr>
                <tr><td>水</td><td><input placeholder="Significado"></td><td><input placeholder="On'yomi"></td><td><input placeholder="Kun'yomi"></td></tr>
                <tr><td>火</td><td><input placeholder="Significado"></td><td><input placeholder="On'yomi"></td><td><input placeholder="Kun'yomi"></td></tr>
                <tr><td>木</td><td><input placeholder="Significado"></td><td><input placeholder="On'yomi"></td><td><input placeholder="Kun'yomi"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "人 = persona (jin / hito), 山 = montaña (san / yama), 水 = agua (sui / mizu), 火 = fuego (ka / hi), 木 = árbol (boku / ki)",
            "人 = persona (nin / hito), 山 = montaña (san / yama), 水 = agua (sui / mizu), 火 = fuego (ka / hi), 木 = árbol (moku / ki)",
            "人 = persona (jin / hito), 山 = montaña (zan / yama), 水 = agua (sui / mizu), 火 = fuego (ka / hi), 木 = árbol (boku / ki)",
            "人 = persona (nin / hito), 山 = montaña (san / yama), 水 = agua (sui / mizu), 火 = fuego (ka / hi), 木 = árbol (moku / ki)"
        ],
        "ans": 0,
        "exp": "Kanji básicos: 人 = persona (jin / hito), 山 = montaña (san / yama), 水 = agua (sui / mizu), 火 = fuego (ka / hi), 木 = árbol (boku / ki)."
    },

    // ==================== INTERMEDIO (intermedio: true) ====================
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Forma TE",
        "diff": "medium",
        "q": "Completa la conjugación de verbos a forma TE.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Conjugación forma TE</h5>
            <table class="subnet-table">
                <tr><th>Verbo (diccionario)</th><th>Forma TE</th><th>Frase de ejemplo</th></tr>
                <tr><td>食べる (taberu)</td><td><input placeholder="Forma TE"></td><td><input placeholder="Ejemplo"></td></tr>
                <tr><td>行く (iku)</td><td><input placeholder="Forma TE"></td><td><input placeholder="Ejemplo"></td></tr>
                <tr><td>話す (hanasu)</td><td><input placeholder="Forma TE"></td><td><input placeholder="Ejemplo"></td></tr>
                <tr><td>飲む (nomu)</td><td><input placeholder="Forma TE"></td><td><input placeholder="Ejemplo"></td></tr>
                <tr><td>する (suru)</td><td><input placeholder="Forma TE"></td><td><input placeholder="Ejemplo"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "食べて(tabete) / 食べてください, 行って(itte) / 行って来ます, 話して(hanashite) / 話してる, 飲んで(nonde) / 飲んでいい, して(shite) / しています",
            "食べて(tabete) / 食べてください, 行って(itte) / 行ってきます, 話して(hanashite) / 話しています, 飲んで(nonde) / 飲んでいます, して(shite) / しています",
            "食べた(tabeta), 行った(itta), 話した(hanashita), 飲んだ(nonda), した(shita)",
            "食べて(tabete), 行って(itte), 話して(hanashite), 飲んで(nonde), して(shite)"
        ],
        "ans": 1,
        "exp": "Forma TE: 食べる→食べて (tabete), 行く→行って (itte - excepción), 話す→話して (hanashite), 飲む→飲んで (nonde), する→して (shite)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Dar y Recibir",
        "diff": "medium",
        "q": "Completa las oraciones con el verbo correcto (あげる / くれる / もらう).",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Verbos de dar y recibir</h5>
            <table class="subnet-table">
                <tr><th>Oración</th><th>Verbo correcto</th><th>Traducción</th></tr>
                <tr><td>友達にプレゼントを___</td><td><input placeholder="Verbo"></td><td><input placeholder="Traducción"></td></tr>
                <tr><td>友達がプレゼントを___</td><td><input placeholder="Verbo"></td><td><input placeholder="Traducción"></td></tr>
                <tr><td>先生に本を___</td><td><input placeholder="Verbo"></td><td><input placeholder="Traducción"></td></tr>
                <tr><td>先生から本を___</td><td><input placeholder="Verbo"></td><td><input placeholder="Traducción"></td></tr>
                <tr><td>母がケーキを___</td><td><input placeholder="Verbo"></td><td><input placeholder="Traducción"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "あげる(ageru) / Le di, くれる(kureru) / Me dio, いただく(itadaku) / Recibí (humilde), もらう(morau) / Recibí, くれる(kureru) / Me dio",
            "あげる(ageru) / Le di, くれる(kureru) / Me dio, さしあげる(sashiageru) / Le di (a superior), いただく(itadaku) / Recibí (de superior), くれる(kureru) / Me dio",
            "あげる(ageru) / Le di, くれる(kureru) / Me dio, もらう(morau) / Recibí, いただく(itadaku) / Recibí (humilde), くれる(kureru) / Me dio",
            "あげる / Le di, くれる / Me dio, さしあげる / Le di, もらう / Recibí, くれる / Me dio"
        ],
        "ans": 0,
        "exp": "Dar/Recibir: あげる (yo→otro), くれる (otro→yo), さしあげる (yo→superior), いただく (recibir de superior), もらう (recibir)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Condicionales",
        "diff": "medium",
        "q": "Completa la tabla de condicionales con la forma correcta.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Condicionales: たら / ば / と / なら</h5>
            <table class="subnet-table">
                <tr><th>Verbo</th><th>たら</th><th>ば</th><th>と</th><th>なら</th></tr>
                <tr><td>行く (iku)</td><td><input placeholder="たら"></td><td><input placeholder="ば"></td><td><input placeholder="と"></td><td><input placeholder="なら"></td></tr>
                <tr><td>食べる (taberu)</td><td><input placeholder="たら"></td><td><input placeholder="ば"></td><td><input placeholder="と"></td><td><input placeholder="なら"></td></tr>
                <tr><td>する (suru)</td><td><input placeholder="たら"></td><td><input placeholder="ば"></td><td><input placeholder="と"></td><td><input placeholder="なら"></td></tr>
                <tr><td>来る (kuru)</td><td><input placeholder="たら"></td><td><input placeholder="ば"></td><td><input placeholder="と"></td><td><input placeholder="なら"></td></tr>
                <tr><td>話す (hanasu)</td><td><input placeholder="たら"></td><td><input placeholder="ば"></td><td><input placeholder="と"></td><td><input placeholder="なら"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "行ったら(ittara) / 行けば(ikeba) / 行くと(iku to) / 行くなら(iku nara), 食べたら(tabetara) / 食べれば(tabereba) / 食べると(taberu to) / 食べるなら(taberu nara), したら(shitara) / すれば(sureba) / すると(suru to) / するなら(suru nara), 来たら(kitara) / 来れば(kureba) / 来ると(kuru to) / 来るなら(kuru nara), 話したら(hanashitara) / 話せば(hanaseba) / 話すと(hanasu to) / 話すなら(hanasu nara)",
            "行ったら(ittara) / 行けば(ikeba) / 行くと(iku to) / 行くなら(iku nara), 食べたら(tabetara) / 食べれば(tabereba) / 食べると(taberu to) / 食べるなら(taberu nara), したら(shitara) / すれば(sureba) / すると(suru to) / するなら(suru nara), 来たら(kitara) / 来れば(kureba) / 来ると(kuru to) / 来るなら(kuru nara), 話したら(hanashitara) / 話せば(hanaseba) / 話すと(hanasu to) / 話すなら(hanasu nara)",
            "行ったら / 行けば / 行くと / 行くなら, 食べたら / 食べれば / 食べると / 食べるなら, したら / すれば / すると / するなら, 来たら / 来れば / 来ると / 来るなら, 話したら / 話せば / 話すと / 話すなら",
            "行ったら(ittara), 行けば(ikeba), 行くと(iku to), 行くなら(iku nara), 食べたら(tabetara), 食べれば(tabereba), 食べると(taberu to), 食べるなら(taberu nara), したら(shitara), すれば(sureba), すると(suru to), するなら(suru nara), 来たら(kitara), 来れば(kureba), 来ると(kuru to), 来るなら(kuru nara), 話したら(hanashitara), 話せば(hanaseba), 話すと(hanasu to), 話すなら(hanasu nara)"
        ],
        "ans": 0,
        "exp": "Condicionales: たら (si/cuando), ば (si - condición), と (si - verdad general), なら (si - basado en realidad)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Potencial",
        "diff": "medium",
        "q": "Completa la conjugación de verbos a forma potencial.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Forma potencial (poder hacer)</h5>
            <table class="subnet-table">
                <tr><th>Verbo</th><th>Forma potencial</th><th>Significado</th></tr>
                <tr><td>食べる (taberu)</td><td><input placeholder="Potencial"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>行く (iku)</td><td><input placeholder="Potencial"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>話す (hanasu)</td><td><input placeholder="Potencial"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>する (suru)</td><td><input placeholder="Potencial"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>来る (kuru)</td><td><input placeholder="Potencial"></td><td><input placeholder="Significado"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "食べられる(taberareru) / poder comer, 行ける(ikeru) / poder ir, 話せる(hanaseru) / poder hablar, できる(dekiru) / poder hacer, 来られる(korareru) / poder venir",
            "食べれる(tabereru) / poder comer, 行ける(ikeru) / poder ir, 話せる(hanaseru) / poder hablar, できる(dekiru) / poder hacer, 来れる(koreru) / poder venir",
            "食べられる / poder comer, 行ける / poder ir, 話せる / poder hablar, できる / poder hacer, 来られる / poder venir",
            "食べられる(taberareru) / poder comer, 行ける(ikeru) / poder ir, 話せる(hanaseru) / poder hablar, できる(dekiru) / poder hacer, 来られる(korareru) / poder venir"
        ],
        "ans": 0,
        "exp": "Potencial: 食べる→食べられる (poder comer), 行く→行ける (poder ir), 話す→話せる (poder hablar), する→できる (poder hacer), 来る→来られる (poder venir)."
    },

    // ==================== AVANZADO (avanzado: true) ====================
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo - Sonkeigo",
        "diff": "hard",
        "q": "Completa la tabla de verbos en sonkeigo (honorífico).",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Sonkeigo (Honorífico)</h5>
            <table class="subnet-table">
                <tr><th>Verbo (normal)</th><th>Sonkeigo</th><th>Significado</th><th>Frase de ejemplo</th></tr>
                <tr><td>行く (iku)</td><td><input placeholder="Sonkeigo"></td><td><input placeholder="Significado"></td><td><input placeholder="Ejemplo"></td></tr>
                <tr><td>言う (iu)</td><td><input placeholder="Sonkeigo"></td><td><input placeholder="Significado"></td><td><input placeholder="Ejemplo"></td></tr>
                <tr><td>する (suru)</td><td><input placeholder="Sonkeigo"></td><td><input placeholder="Significado"></td><td><input placeholder="Ejemplo"></td></tr>
                <tr><td>見る (miru)</td><td><input placeholder="Sonkeigo"></td><td><input placeholder="Significado"></td><td><input placeholder="Ejemplo"></td></tr>
                <tr><td>食べる (taberu)</td><td><input placeholder="Sonkeigo"></td><td><input placeholder="Significado"></td><td><input placeholder="Ejemplo"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "いらっしゃる(irassharu) / ir/venir/estar, おっしゃる(ossharu) / decir, なさる(nasaru) / hacer, ご覧になる(goran ni naru) / ver, 召し上がる(meshiagaru) / comer/beber",
            "いらっしゃる(irassharu) / ir/venir/estar, おっしゃる(ossharu) / decir, なさる(nasaru) / hacer, ご覧になる(goran ni naru) / ver, 召し上がる(meshiagaru) / comer/beber (correcto)",
            "参る(mairu) / ir/venir, 申す(mousu) / decir, いたす(itasu) / hacer, 拝見する(haiken suru) / ver, いただく(itadaku) / comer/beber",
            "おいでになる(oide ni naru) / ir, おっしゃる(ossharu) / decir, なさる(nasaru) / hacer, ご覧になる(goran ni naru) / ver, 召し上がる(meshiagaru) / comer/beber"
        ],
        "ans": 1,
        "exp": "Sonkeigo (honorífico): 行く→いらっしゃる / おいでになる, 言う→おっしゃる, する→なさる, 見る→ご覧になる, 食べる→召し上がる."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo - Kenjougo",
        "diff": "hard",
        "q": "Completa la tabla de verbos en kenjougo (humilde).",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Kenjougo (Humilde)</h5>
            <table class="subnet-table">
                <tr><th>Verbo (normal)</th><th>Kenjougo</th><th>Significado</th></tr>
                <tr><td>行く (iku)</td><td><input placeholder="Kenjougo"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>言う (iu)</td><td><input placeholder="Kenjougo"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>する (suru)</td><td><input placeholder="Kenjougo"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>見る (miru)</td><td><input placeholder="Kenjougo"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>食べる (taberu)</td><td><input placeholder="Kenjougo"></td><td><input placeholder="Significado"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "参る(mairu) / ir, 申す(mousu) / decir, いたす(itasu) / hacer, 拝見する(haiken suru) / ver, いただく(itadaku) / comer/beber",
            "参る(mairu) / ir, 申し上げる(moushiageru) / decir, いたす(itasu) / hacer, 拝見する(haiken suru) / ver, いただく(itadaku) / comer/beber",
            "参る(mairu) / ir, 申す(mousu) / decir, いたす(itasu) / hacer, 拝見する(haiken suru) / ver, いただく(itadaku) / comer/beber (correcto)",
            "お伺いする(oukagai suru) / ir, 申す(mousu) / decir, いたす(itasu) / hacer, 拝見する(haiken suru) / ver, いただく(itadaku) / comer/beber"
        ],
        "ans": 2,
        "exp": "Kenjougo (humilde): 行く→参る, 言う→申す, する→いたす, 見る→拝見する, 食べる→いただく."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Voz Pasiva",
        "diff": "hard",
        "q": "Completa la conjugación de verbos en voz pasiva.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Voz Pasiva</h5>
            <table class="subnet-table">
                <tr><th>Verbo</th><th>Voz Pasiva</th><th>Significado</th></tr>
                <tr><td>食べる (taberu)</td><td><input placeholder="Pasiva"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>行く (iku)</td><td><input placeholder="Pasiva"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>話す (hanasu)</td><td><input placeholder="Pasiva"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>する (suru)</td><td><input placeholder="Pasiva"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>読む (yomu)</td><td><input placeholder="Pasiva"></td><td><input placeholder="Significado"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "食べられる(taberareru) / ser comido, 行かれる(ikareru) / ser ido, 話される(hanasareru) / ser hablado, される(sareru) / ser hecho, 読まれる(yomareru) / ser leído",
            "食べられる(taberareru) / ser comido, 行かれる(ikareru) / ser ido, 話される(hanasareru) / ser hablado, される(sareru) / ser hecho, 読まれる(yomareru) / ser leído (correcto)",
            "食べられる, 行かれる, 話される, される, 読まれる",
            "食べれる(tabereru), 行ける(ikeru), 話せる(hanaseru), できる(dekiru), 読める(yomeru)"
        ],
        "ans": 1,
        "exp": "Voz pasiva: 食べる→食べられる (ser comido), 行く→行かれる (ser ido), 話す→話される (ser hablado), する→される (ser hecho), 読む→読まれる (ser leído)."
    },

    // ==================== EXPERTO (experto: true) ====================
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Japonés Clásico",
        "diff": "expert",
        "q": "Completa la tabla de formas clásicas del japonés.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Japonés Clásico - Formas verbales</h5>
            <table class="subnet-table">
                <tr><th>Forma clásica</th><th>Equivalente moderno</th><th>Significado</th></tr>
                <tr><td>〜ぬ (nu)</td><td><input placeholder="Moderno"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>〜けり (keri)</td><td><input placeholder="Moderno"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>〜まい (mai)</td><td><input placeholder="Moderno"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>〜ごとく (gotoku)</td><td><input placeholder="Moderno"></td><td><input placeholder="Significado"></td></tr>
                <tr><td>〜ねば (neba)</td><td><input placeholder="Moderno"></td><td><input placeholder="Significado"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "〜ない(-nai) / negación, 〜た(-ta) / pasado narrativo, 〜ないだろう(-nai darou) / intención negativa, 〜のように(-no you ni) / como, 〜なければ(-nakereba) / si no",
            "〜ない(-nai) / negación, 〜た(-ta) / pasado narrativo, 〜ないだろう(-nai darou) / intención negativa, 〜のように(-no you ni) / como, 〜なければ(-nakereba) / si no (correcto)",
            "〜ない, 〜た, 〜ないだろう, 〜のように, 〜なければ",
            "〜ません(-masen), 〜ました(-mashita), 〜ないでしょう(-nai deshou), 〜のように, 〜なければなりません"
        ],
        "ans": 1,
        "exp": "Japonés clásico: ぬ = negación (ない), けり = pasado narrativo (た), まい = intención negativa (ないだろう), ごとく = como (のように), ねば = si no (なければ)."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos Regionales",
        "diff": "expert",
        "q": "Completa la tabla de expresiones en dialectos japoneses (Kansai-ben, Tōhoku-ben, etc.).",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Dialectos Regionales</h5>
            <table class="subnet-table">
                <tr><th>Dialecto</th><th>Expresión</th><th>Significado</th><th>Estándar</th></tr>
                <tr><td>Kansai-ben</td><td>めっちゃ (meccha)</td><td><input placeholder="Significado"></td><td><input placeholder="Estándar"></td></tr>
                <tr><td>Kansai-ben</td><td>〜へん (-hen)</td><td><input placeholder="Significado"></td><td><input placeholder="Estándar"></td></tr>
                <tr><td>Tōhoku-ben</td><td>〜べ (-be)</td><td><input placeholder="Significado"></td><td><input placeholder="Estándar"></td></tr>
                <tr><td>Hiroshima-ben</td><td>じゃけん (jaken)</td><td><input placeholder="Significado"></td><td><input placeholder="Estándar"></td></tr>
                <tr><td>Hakata-ben</td><td>〜と (-to)</td><td><input placeholder="Significado"></td><td><input placeholder="Estándar"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "めっちゃ = muy (とても), 〜へん = negación (ない), 〜べ = volitivo (〜よう), じゃけん = porque (だから), 〜と = partícula de cita (〜って)",
            "めっちゃ = muy (とても), 〜へん = negación (ない), 〜べ = volitivo (〜よう), じゃけん = porque (だから), 〜と = partícula de cita (〜って) (correcto)",
            "めっちゃ = mucho, 〜へん = no, 〜べ = vamos, じゃけん = porque, 〜と = que",
            "めっちゃ = muy, 〜へん = negación, 〜べ = volitivo, じゃけん = porque, 〜と = cita"
        ],
        "ans": 1,
        "exp": "Dialectos: Kansai-ben: めっちゃ (muy), 〜へん (negación); Tōhoku-ben: 〜べ (volitivo); Hiroshima-ben: じゃけん (porque); Hakata-ben: 〜と (partícula de cita)."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Ultraformal",
        "diff": "expert",
        "q": "Completa la tabla de keigo ultraformal para contextos empresariales.",
        "extra": `
        <div class="bloque-ejercicio">
            <h5>Keigo Ultraformal</h5>
            <table class="subnet-table">
                <tr><th>Frase</th><th>Significado</th><th>Contexto de uso</th></tr>
                <tr><td>お世話になっております</td><td><input placeholder="Significado"></td><td><input placeholder="Contexto"></td></tr>
                <tr><td>申し訳ございません</td><td><input placeholder="Significado"></td><td><input placeholder="Contexto"></td></tr>
                <tr><td>かしこまりました</td><td><input placeholder="Significado"></td><td><input placeholder="Contexto"></td></tr>
                <tr><td>恐れ入ります</td><td><input placeholder="Significado"></td><td><input placeholder="Contexto"></td></tr>
                <tr><td>承知いたしました</td><td><input placeholder="Significado"></td><td><input placeholder="Contexto"></td></tr>
            </table>
        </div>
        `,
        "opts": [
            "Gracias por su ayuda / negocio, Lo siento mucho / disculpas, Entendido / confirmación, Disculpe / formal, Entendido / formal",
            "Gracias por su ayuda / negocio, Lo siento mucho / disculpas, Entendido / confirmación, Disculpe / formal, Entendido / formal (correcto)",
            "Gracias, Lo siento, Entendido, Disculpe, Entendido",
            "Osewa ni natte orimasu, Moushiwake gozaimasen, Kashikomarimashita, Osore irimasu, Shouchi itashimashita"
        ],
        "ans": 1,
        "exp": "Keigo ultraformal: お世話になっております (gracias por su ayuda), 申し訳ございません (lo siento mucho), かしこまりました (entendido), 恐れ入ります (disculpe formal), 承知いたしました (entendido formal)."
    },
  
    // ==================== BÁSICO (profe: true) - 80 preguntas ====================
    // HIRAGANA (20)
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'a'?",
        "opts": [
            "あ",
            "い",
            "う",
            "え"
        ],
        "ans": 0,
        "exp": "あ = 'a'. Frase: あおい (aoi) = azul."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'i'?",
        "opts": [
            "あ",
            "い",
            "う",
            "え"
        ],
        "ans": 1,
        "exp": "い = 'i'. Frase: いぬ (inu) = perro."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'u'?",
        "opts": [
            "あ",
            "い",
            "う",
            "え"
        ],
        "ans": 2,
        "exp": "う = 'u'. Frase: うみ (umi) = mar."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'e'?",
        "opts": [
            "あ",
            "い",
            "う",
            "え"
        ],
        "ans": 3,
        "exp": "え = 'e'. Frase: えき (eki) = estación."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'o'?",
        "opts": [
            "あ",
            "い",
            "う",
            "お"
        ],
        "ans": 3,
        "exp": "お = 'o'. Frase: おおきい (ōkii) = grande."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'ka'?",
        "opts": [
            "か",
            "き",
            "く",
            "け"
        ],
        "ans": 0,
        "exp": "か = 'ka'. Frase: かさ (kasa) = paraguas."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'ki'?",
        "opts": [
            "か",
            "き",
            "く",
            "け"
        ],
        "ans": 1,
        "exp": "き = 'ki'. Frase: きのう (kinō) = ayer."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'ku'?",
        "opts": [
            "か",
            "き",
            "く",
            "け"
        ],
        "ans": 2,
        "exp": "く = 'ku'. Frase: くも (kumo) = nube."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'ke'?",
        "opts": [
            "か",
            "き",
            "く",
            "け"
        ],
        "ans": 3,
        "exp": "け = 'ke'. Frase: けさ (kesa) = esta mañana."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'ko'?",
        "opts": [
            "か",
            "こ",
            "け",
            "き"
        ],
        "ans": 1,
        "exp": "こ = 'ko'. Frase: こども (kodomo) = niño."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'sa'?",
        "opts": [
            "さ",
            "し",
            "す",
            "せ"
        ],
        "ans": 0,
        "exp": "さ = 'sa'. Frase: さかな (sakana) = pescado."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'shi'?",
        "opts": [
            "さ",
            "し",
            "す",
            "せ"
        ],
        "ans": 1,
        "exp": "し = 'shi'. Frase: しろい (shiroi) = blanco."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'su'?",
        "opts": [
            "さ",
            "し",
            "す",
            "せ"
        ],
        "ans": 2,
        "exp": "す = 'su'. Frase: すし (sushi)."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'se'?",
        "opts": [
            "さ",
            "し",
            "す",
            "せ"
        ],
        "ans": 3,
        "exp": "せ = 'se'. Frase: せんせい (sensei) = profesor."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'so'?",
        "opts": [
            "そ",
            "た",
            "ち",
            "つ"
        ],
        "ans": 0,
        "exp": "そ = 'so'. Frase: そら (sora) = cielo."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'ta'?",
        "opts": [
            "た",
            "ち",
            "つ",
            "て"
        ],
        "ans": 0,
        "exp": "た = 'ta'. Frase: たまご (tamago) = huevo."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'chi'?",
        "opts": [
            "た",
            "ち",
            "つ",
            "て"
        ],
        "ans": 1,
        "exp": "ち = 'chi'. Frase: ちいさい (chiisai) = pequeño."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'tsu'?",
        "opts": [
            "た",
            "ち",
            "つ",
            "て"
        ],
        "ans": 2,
        "exp": "つ = 'tsu'. Frase: つき (tsuki) = luna."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'te'?",
        "opts": [
            "た",
            "ち",
            "つ",
            "て"
        ],
        "ans": 3,
        "exp": "て = 'te'. Frase: てがみ (tegami) = carta."
    },
    {
        "profe": true,
        "unit": "Hiragana",
        "diff": "easy",
        "q": "¿Cuál es el hiragana correcto para 'to'?",
        "opts": [
            "と",
            "た",
            "ち",
            "つ"
        ],
        "ans": 0,
        "exp": "と = 'to'. Frase: とり (tori) = pájaro."
    },
    // KATAKANA (15)
    {
        "profe": true,
        "unit": "Katakana",
        "diff": "easy",
        "q": "¿Cuál es el katakana correcto para 'a'?",
        "opts": [
            "ア",
            "イ",
            "ウ",
            "エ"
        ],
        "ans": 0,
        "exp": "ア = 'a'. Frase: アメリカ (Amerika) = Estados Unidos."
    },
    {
        "profe": true,
        "unit": "Katakana",
        "diff": "easy",
        "q": "¿Cuál es el katakana correcto para 'i'?",
        "opts": [
            "ア",
            "イ",
            "ウ",
            "エ"
        ],
        "ans": 1,
        "exp": "イ = 'i'. Frase: イギリス (Igirisu) = Reino Unido."
    },
    {
        "profe": true,
        "unit": "Katakana",
        "diff": "easy",
        "q": "¿Cuál es el katakana correcto para 'u'?",
        "opts": [
            "ア",
            "イ",
            "ウ",
            "エ"
        ],
        "ans": 2,
        "exp": "ウ = 'u'. Frase: ウイルス (uirusu) = virus."
    },
    {
        "profe": true,
        "unit": "Katakana",
        "diff": "easy",
        "q": "¿Cuál es el katakana correcto para 'e'?",
        "opts": [
            "ア",
            "イ",
            "ウ",
            "エ"
        ],
        "ans": 3,
        "exp": "エ = 'e'. Frase: エアコン (eakon) = aire acondicionado."
    },
    {
        "profe": true,
        "unit": "Katakana",
        "diff": "easy",
        "q": "¿Cuál es el katakana correcto para 'o'?",
        "opts": [
            "ア",
            "イ",
            "ウ",
            "オ"
        ],
        "ans": 3,
        "exp": "オ = 'o'. Frase: オンライン (onrain) = en línea."
    },
    {
        "profe": true,
        "unit": "Katakana",
        "diff": "easy",
        "q": "¿Qué significa 'コーヒー'?",
        "opts": [
            "Té",
            "Café",
            "Leche",
            "Agua"
        ],
        "ans": 1,
        "exp": "コーヒー = 'kōhī' (café)."
    },
    {
        "profe": true,
        "unit": "Katakana",
        "diff": "easy",
        "q": "¿Qué significa 'テレビ'?",
        "opts": [
            "Radio",
            "Teléfono",
            "Televisión",
            "Computadora"
        ],
        "ans": 2,
        "exp": "テレビ = 'terebi' (televisión)."
    },
    {
        "profe": true,
        "unit": "Katakana",
        "diff": "easy",
        "q": "¿Qué significa 'パン'?",
        "opts": [
            "Arroz",
            "Pan",
            "Pasta",
            "Carne"
        ],
        "ans": 1,
        "exp": "パン = 'pan' (pan)."
    },
    {
        "profe": true,
        "unit": "Katakana",
        "diff": "easy",
        "q": "¿Qué significa 'ホテル'?",
        "opts": [
            "Casa",
            "Hospital",
            "Hotel",
            "Escuela"
        ],
        "ans": 2,
        "exp": "ホテル = 'hoteru' (hotel)."
    },
    {
        "profe": true,
        "unit": "Katakana",
        "diff": "easy",
        "q": "¿Qué significa 'バス'?",
        "opts": [
            "Auto",
            "Bicicleta",
            "Bus",
            "Tren"
        ],
        "ans": 2,
        "exp": "バス = 'basu' (autobús)."
    },
    // SALUDOS (10)
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Cómo se dice 'Buenos días' formal?",
        "opts": [
            "こんにちは",
            "こんばんは",
            "おはようございます",
            "おやすみなさい"
        ],
        "ans": 2,
        "exp": "おはようございます = 'Ohayō gozaimasu'. Se usa antes de las 10-11am."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Cómo se dice 'Buenas tardes'?",
        "opts": [
            "おはよう",
            "こんにちは",
            "こんばんは",
            "おやすみ"
        ],
        "ans": 1,
        "exp": "こんにちは = 'Konnichiwa'. Se usa durante el día."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Cómo se dice 'Buenas noches' (saludo)?",
        "opts": [
            "おはよう",
            "こんにちは",
            "こんばんは",
            "おやすみなさい"
        ],
        "ans": 2,
        "exp": "こんばんは = 'Konbanwa'. Se usa al atardecer/noche."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Qué significa 'ありがとうございます'?",
        "opts": [
            "Lo siento",
            "Gracias",
            "Por favor",
            "Disculpe"
        ],
        "ans": 1,
        "exp": "ありがとうございます = 'Arigatō gozaimasu' (gracias, formal)."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Qué significa 'すみません'?",
        "opts": [
            "Gracias",
            "Lo siento / disculpe",
            "Buenos días",
            "Adiós"
        ],
        "ans": 1,
        "exp": "すみません = 'Sumimasen' (disculpe, lo siento, o 'gracias' en algunos contextos)."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Cómo se dice 'adiós' formal?",
        "opts": [
            "さようなら",
            "じゃね",
            "またね",
            "バイバイ"
        ],
        "ans": 0,
        "exp": "さようなら = 'Sayōnara' (adiós, formal, usado cuando no se verán por un tiempo)."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Cómo se dice 'hasta mañana'?",
        "opts": [
            "またね",
            "じゃね",
            "また明日",
            "おやすみ"
        ],
        "ans": 2,
        "exp": "また明日 = 'Mata ashita' (hasta mañana)."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Qué significa 'おかえり'?",
        "opts": [
            "Ya llegué",
            "Bienvenido a casa",
            "Adiós",
            "Buen viaje"
        ],
        "ans": 1,
        "exp": "おかえり = 'Okaeri' (bienvenido a casa, respuesta a 'ただいま')."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Qué significa 'ただいま'?",
        "opts": [
            "Bienvenido a casa",
            "Ya llegué",
            "Adiós",
            "Buen viaje"
        ],
        "ans": 1,
        "exp": "ただいま = 'Tadaima' (ya llegué a casa)."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Qué significa 'いただきます'?",
        "opts": [
            "Gracias por la comida (antes de comer)",
            "Gracias por la comida (después de comer)",
            "Buen provecho",
            "Lo siento"
        ],
        "ans": 0,
        "exp": "いただきます = 'Itadakimasu' (antes de comer, expresando gratitud)."
    },
    // NÚMEROS (15)
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "¿Cómo se dice '1' en japonés?",
        "opts": [
            "いち",
            "に",
            "さん",
            "よん"
        ],
        "ans": 0,
        "exp": "いち = 'ichi'. Frase: 一人 (hitori) = una persona."
    },
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "¿Cómo se dice '2' en japonés?",
        "opts": [
            "いち",
            "に",
            "さん",
            "よん"
        ],
        "ans": 1,
        "exp": "に = 'ni'. Frase: 二時 (ni-ji) = las 2 en punto."
    },
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "¿Cómo se dice '3' en japonés?",
        "opts": [
            "いち",
            "に",
            "さん",
            "よん"
        ],
        "ans": 2,
        "exp": "さん = 'san'. Frase: 三人 (san-nin) = tres personas."
    },
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "¿Cómo se dice '4' (común) en japonés?",
        "opts": [
            "し",
            "よん",
            "ご",
            "ろく"
        ],
        "ans": 1,
        "exp": "よん = 'yon'. 'Shi' se evita porque suena a 'muerte'."
    },
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "¿Cómo se dice '5' en japonés?",
        "opts": [
            "ご",
            "ろく",
            "しち",
            "はち"
        ],
        "ans": 0,
        "exp": "ご = 'go'. Frase: 五回 (go-kai) = cinco veces."
    },
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "¿Cómo se dice '6' en japonés?",
        "opts": [
            "ご",
            "ろく",
            "しち",
            "はち"
        ],
        "ans": 1,
        "exp": "ろく = 'roku'. Frase: 六時 (roku-ji) = las 6 en punto."
    },
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "¿Cómo se dice '7' (común) en japonés?",
        "opts": [
            "しち",
            "なな",
            "はち",
            "きゅう"
        ],
        "ans": 1,
        "exp": "なな = 'nana'. 'Shichi' también existe pero 'nana' es más común."
    },
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "¿Cómo se dice '8' en japonés?",
        "opts": [
            "しち",
            "なな",
            "はち",
            "きゅう"
        ],
        "ans": 2,
        "exp": "はち = 'hachi'. Frase: 八日 (yōka) = día 8."
    },
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "¿Cómo se dice '9' en japonés?",
        "opts": [
            "きゅう",
            "く",
            "はち",
            "じゅう"
        ],
        "ans": 0,
        "exp": "きゅう = 'kyū'. 'Ku' también existe pero 'kyū' es más común."
    },
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "¿Cómo se dice '10' en japonés?",
        "opts": [
            "じゅう",
            "ひゃく",
            "せん",
            "まん"
        ],
        "ans": 0,
        "exp": "じゅう = 'jū'. Frase: 十匹 (jū-biki) = diez animales."
    },
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "¿Cómo se dice '100' en japonés?",
        "opts": [
            "じゅう",
            "ひゃく",
            "せん",
            "まん"
        ],
        "ans": 1,
        "exp": "ひゃく = 'hyaku'. Frase: 百円 (hyaku-en) = 100 yenes."
    },
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "¿Cómo se dice '1000' en japonés?",
        "opts": [
            "じゅう",
            "ひゃく",
            "せん",
            "まん"
        ],
        "ans": 2,
        "exp": "せん = 'sen'. Frase: 千円 (sen-en) = 1000 yenes."
    },
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "¿Cómo se dice '10,000' en japonés?",
        "opts": [
            "せん",
            "まん",
            "おく",
            "ちょう"
        ],
        "ans": 1,
        "exp": "まん = 'man'. Frase: 一万円 (ichi-man-en) = 10,000 yenes."
    },
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "¿Cómo se dice '12' en japonés?",
        "opts": [
            "二十",
            "十二",
            "二十一",
            "二十二"
        ],
        "ans": 1,
        "exp": "十二 = 'jū-ni' (10+2). Frase: 十二時 (jū-ni-ji) = las 12 en punto."
    },
    {
        "profe": true,
        "unit": "Números",
        "diff": "easy",
        "q": "¿Cómo se dice '21' en japonés?",
        "opts": [
            "十二",
            "二十",
            "二十一",
            "二十二"
        ],
        "ans": 2,
        "exp": "二十一 = 'ni-jū-ichi' (2×10+1). Frase: 二十一歳 (ni-jū-issai) = 21 años."
    },
    // KANJI BÁSICO (20)
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '一'?",
        "opts": [
            "Uno",
            "Dos",
            "Tres",
            "Diez"
        ],
        "ans": 0,
        "exp": "一 = 'ichi' (uno). Frase: 一人 (hitori) = una persona."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '二'?",
        "opts": [
            "Uno",
            "Dos",
            "Tres",
            "Cuatro"
        ],
        "ans": 1,
        "exp": "二 = 'ni' (dos). Frase: 二日 (futsuka) = día 2."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '三'?",
        "opts": [
            "Uno",
            "Dos",
            "Tres",
            "Seis"
        ],
        "ans": 2,
        "exp": "三 = 'san' (tres). Frase: 三本 (san-bon) = tres objetos largos."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '四'?",
        "opts": [
            "Tres",
            "Cuatro",
            "Cinco",
            "Seis"
        ],
        "ans": 1,
        "exp": "四 = 'yon' / 'shi' (cuatro). Frase: 四時 (yo-ji) = las 4 en punto."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '五'?",
        "opts": [
            "Tres",
            "Cuatro",
            "Cinco",
            "Seis"
        ],
        "ans": 2,
        "exp": "五 = 'go' (cinco). Frase: 五人 (go-nin) = cinco personas."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '人'?",
        "opts": [
            "Grande",
            "Persona",
            "Entrada",
            "Montaña"
        ],
        "ans": 1,
        "exp": "人 = 'hito' (persona). Frase: 日本人 (Nihonjin) = japonés."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '山'?",
        "opts": [
            "Río",
            "Montaña",
            "Agua",
            "Fuego"
        ],
        "ans": 1,
        "exp": "山 = 'yama' (montaña). Frase: 富士山 (Fujisan) = Monte Fuji."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '水'?",
        "opts": [
            "Fuego",
            "Agua",
            "Tierra",
            "Viento"
        ],
        "ans": 1,
        "exp": "水 = 'mizu' (agua). Frase: 水を飲む (Mizu o nomu) = beber agua."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '火'?",
        "opts": [
            "Agua",
            "Fuego",
            "Madera",
            "Oro"
        ],
        "ans": 1,
        "exp": "火 = 'hi' (fuego). Frase: 火が怖い (Hi ga kowai) = el fuego da miedo."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '木'?",
        "opts": [
            "Árbol",
            "Flor",
            "Hierba",
            "Fruta"
        ],
        "ans": 0,
        "exp": "木 = 'ki' (árbol). Frase: 木を植える (Ki o ueru) = plantar un árbol."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '大'?",
        "opts": [
            "Pequeño",
            "Grande",
            "Mediano",
            "Alto"
        ],
        "ans": 1,
        "exp": "大 = 'dai' / 'ō' (grande). Frase: 大きい (ōkii) = grande."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '小'?",
        "opts": [
            "Grande",
            "Pequeño",
            "Mediano",
            "Largo"
        ],
        "ans": 1,
        "exp": "小 = 'shō' / 'ko' (pequeño). Frase: 小さい (chiisai) = pequeño."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '中'?",
        "opts": [
            "Arriba",
            "Abajo",
            "Dentro / medio",
            "Fuera"
        ],
        "ans": 2,
        "exp": "中 = 'naka' / 'chū' (dentro, medio). Frase: 中に入る (Naka ni hairu) = entrar dentro."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '上'?",
        "opts": [
            "Abajo",
            "Arriba",
            "Dentro",
            "Fuera"
        ],
        "ans": 1,
        "exp": "上 = 'ue' / 'kami' (arriba). Frase: 上を見る (Ue o miru) = mirar arriba."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '下'?",
        "opts": [
            "Arriba",
            "Abajo",
            "Dentro",
            "Lado"
        ],
        "ans": 1,
        "exp": "下 = 'shita' / 'ge' (abajo). Frase: 下に置く (Shita ni oku) = poner abajo."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '日'?",
        "opts": [
            "Luna",
            "Día / sol",
            "Estrella",
            "Cielo"
        ],
        "ans": 1,
        "exp": "日 = 'hi' / 'nichi' (día, sol). Frase: 日本 (Nihon) = Japón (origen del sol)."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '月'?",
        "opts": [
            "Sol",
            "Luna / mes",
            "Estrella",
            "Cielo"
        ],
        "ans": 1,
        "exp": "月 = 'tsuki' / 'getsu' (luna, mes). Frase: 月曜日 (Getsuyōbi) = lunes."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '金'?",
        "opts": [
            "Plata",
            "Oro / dinero",
            "Cobre",
            "Hierro"
        ],
        "ans": 1,
        "exp": "金 = 'kane' / 'kin' (oro, dinero). Frase: お金 (okane) = dinero."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '力'?",
        "opts": [
            "Debilidad",
            "Fuerza",
            "Poder",
            "Ambos B y C"
        ],
        "ans": 3,
        "exp": "力 = 'chikara' / 'ryoku' (fuerza, poder). Frase: 力強い (chikarazuyoi) = poderoso."
    },
    {
        "profe": true,
        "unit": "Kanji",
        "diff": "easy",
        "q": "¿Qué significa el kanji '口'?",
        "opts": [
            "Ojo",
            "Boca",
            "Oreja",
            "Nariz"
        ],
        "ans": 1,
        "exp": "口 = 'kuchi' (boca). Frase: 口を開ける (Kuchi o akeru) = abrir la boca."
    },

    // ==================== INTERMEDIO (intermedio: true) - 100 preguntas ====================
    // PARTÍCULAS AVANZADAS (10)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Partículas",
        "diff": "medium",
        "q": "En '私は学生です', ¿qué función tiene は?",
        "opts": [
            "Objeto directo",
            "Tema de la oración",
            "Sujeto",
            "Dirección"
        ],
        "ans": 1,
        "exp": "は (wa) marca el tema de la oración. Frase: 私は学生です (Watashi wa gakusei desu) = En cuanto a mí, soy estudiante."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Partículas",
        "diff": "medium",
        "q": "¿Qué partícula marca el objeto directo?",
        "opts": [
            "が",
            "は",
            "を",
            "に"
        ],
        "ans": 2,
        "exp": "を (o) marca el objeto directo. Frase: りんごを食べる (Ringo o taberu) = comer manzana."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Partículas",
        "diff": "medium",
        "q": "¿Qué diferencia hay entre は y が?",
        "opts": [
            "は es tema, が es sujeto (énfasis en información nueva)",
            "は es sujeto, が es tema",
            "Son intercambiables",
            "は solo para negaciones"
        ],
        "ans": 0,
        "exp": "は marca el tema conocido; が marca el sujeto o introduce información nueva. Frase: 私は学生です (tema: yo). 誰が学生ですか？ (sujeto: quién)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Partículas",
        "diff": "medium",
        "q": "En '友達に会う', ¿qué función tiene に?",
        "opts": [
            "Destino",
            "Tiempo",
            "Punto de encuentro indirecto",
            "Agente pasivo"
        ],
        "ans": 2,
        "exp": "会う (au) requiere に para indicar la persona con quien te encuentras. Frase: 友達に会う (Tomodachi ni au) = encontrarse con un amigo."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Partículas",
        "diff": "medium",
        "q": "En 'バスで学校へ行きます', ¿qué función tiene で?",
        "opts": [
            "Lugar de acción",
            "Medio / instrumento",
            "Límite de tiempo",
            "Causa"
        ],
        "ans": 1,
        "exp": "で indica el medio por el cual se hace algo. Frase: バスで学校へ行きます (Basu de gakkō e ikimasu) = Voy a la escuela en autobús."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Partículas",
        "diff": "medium",
        "q": "En '日本に行く', ¿qué función tiene に?",
        "opts": [
            "Lugar de acción",
            "Destino/dirección",
            "Compañía",
            "Instrumento"
        ],
        "ans": 1,
        "exp": "に indica destino. Frase: 日本に行く (Nihon ni iku) = Ir a Japón."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Partículas",
        "diff": "medium",
        "q": "En '友達と話す', ¿qué significa と?",
        "opts": [
            "Y (conjunción)",
            "Con (compañía)",
            "Hacia",
            "Desde"
        ],
        "ans": 1,
        "exp": "と marca compañía. Frase: 友達と話す (Tomodachi to hanasu) = Hablar con un amigo."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Partículas",
        "diff": "medium",
        "q": "¿Qué partícula indica el lugar donde ocurre una acción?",
        "opts": [
            "で",
            "に",
            "を",
            "が"
        ],
        "ans": 0,
        "exp": "で indica lugar de acción. Frase: 公園で遊ぶ (Kōen de asobu) = Jugar en el parque."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Partículas",
        "diff": "medium",
        "q": "¿Qué partícula indica posesión?",
        "opts": [
            "が",
            "は",
            "の",
            "を"
        ],
        "ans": 2,
        "exp": "の indica posesión. Frase: 私の本 (Watashi no hon) = mi libro."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Partículas",
        "diff": "medium",
        "q": "¿Qué significa la partícula か al final de una oración?",
        "opts": [
            "Afirmación",
            "Pregunta",
            "Énfasis",
            "Duda"
        ],
        "ans": 1,
        "exp": "か convierte la oración en pregunta. Frase: 学生ですか？ (Gakusei desu ka?) = ¿Eres estudiante?"
    },
    // FORMA TE (10)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Forma TE",
        "diff": "medium",
        "q": "Forma TE de 食べる (comer):",
        "opts": [
            "食べて",
            "食べって",
            "食べた",
            "食べで"
        ],
        "ans": 0,
        "exp": "食べる → 食べて (tabete). Frase: 食べてください (Tabete kudasai) = Por favor coma."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Forma TE",
        "diff": "medium",
        "q": "Forma TE de 行く (ir):",
        "opts": [
            "行いて",
            "行って",
            "行きて",
            "行くて"
        ],
        "ans": 1,
        "exp": "行く → 行って (itte). Es una excepción. Frase: 学校に行って、勉強する (Gakkō ni itte, benkyō suru) = Voy a la escuela y estudio."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Forma TE",
        "diff": "medium",
        "q": "Forma TE de 話す (hablar):",
        "opts": [
            "話して",
            "話って",
            "話すて",
            "話した"
        ],
        "ans": 0,
        "exp": "話す → 話して (hanashite). Frase: 先生と話している (Sensei to hanashite iru) = Estoy hablando con el profesor."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Forma TE",
        "diff": "medium",
        "q": "Forma TE de 飲む (beber):",
        "opts": [
            "飲んで",
            "飲みて",
            "飲むて",
            "飲んだ"
        ],
        "ans": 0,
        "exp": "飲む → 飲んで (nonde). Frase: 薬を飲んで寝る (Kusuri o nonde neru) = Tomar la medicina y dormir."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Forma TE",
        "diff": "medium",
        "q": "Forma TE de する (hacer):",
        "opts": [
            "して",
            "しって",
            "するて",
            "した"
        ],
        "ans": 0,
        "exp": "する → して (shite). Frase: 宿題をしている (Shukudai o shite iru) = Estoy haciendo la tarea."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Forma TE",
        "diff": "medium",
        "q": "Forma TE de 来る (venir):",
        "opts": [
            "来て",
            "来って",
            "きて",
            "きた"
        ],
        "ans": 0,
        "exp": "来る → 来て (kite). Frase: 友達が来ている (Tomodachi ga kite iru) = Mi amigo está aquí."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "TE + IRU",
        "diff": "medium",
        "q": "¿Qué significa '食べている'?",
        "opts": [
            "Comió",
            "Está comiendo",
            "Come (hábito)",
            "Va a comer"
        ],
        "ans": 1,
        "exp": "て+いる = acción en progreso. Frase: 今、食べているところです (Ima, tabete iru tokoro desu) = Justo ahora estoy comiendo."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "TE + IRU",
        "diff": "medium",
        "q": "¿Qué significa '結婚している'?",
        "opts": [
            "Se casa ahora",
            "Está casado (estado)",
            "Va a casarse",
            "Se casó ayer"
        ],
        "ans": 1,
        "exp": "Con verbos de cambio, ている indica estado resultante. Frase: 彼は結婚している (Kare wa kekkon shite iru) = Él está casado."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "TE + IRU",
        "diff": "medium",
        "q": "¿Qué significa '東京に住んでいる'?",
        "opts": [
            "Vivió en Tokio",
            "Vive en Tokio (estado)",
            "Va a vivir en Tokio",
            "Quiere vivir en Tokio"
        ],
        "ans": 1,
        "exp": "住んでいる = 'sunde iru' (vive - estado). Frase: 東京に住んでいる (Tōkyō ni sunde iru) = Vive en Tokio."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "TE + IRU",
        "diff": "medium",
        "q": "¿Qué diferencia hay entre '食べている' y '食べた'?",
        "opts": [
            "Pasado vs presente",
            "En progreso vs completado",
            "Futuro vs pasado",
            "Hábito vs acción puntual"
        ],
        "ans": 1,
        "exp": "食べている = 'tabete iru' (está comiendo - en progreso). 食べた = 'tabeta' (comió - completado)."
    },
    // DAR Y RECIBIR (10)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Dar/Recibir",
        "diff": "medium",
        "q": "¿Qué verbo usas cuando le das algo a un amigo?",
        "opts": [
            "あげる",
            "くれる",
            "もらう",
            "やる"
        ],
        "ans": 0,
        "exp": "あげる = dar (de yo a otro). Frase: 友達にプレゼントをあげた (Tomodachi ni purezento o ageta) = Le di un regalo a mi amigo."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Dar/Recibir",
        "diff": "medium",
        "q": "¿Qué verbo usas cuando un amigo te da algo a ti?",
        "opts": [
            "あげる",
            "くれる",
            "もらう",
            "いただく"
        ],
        "ans": 1,
        "exp": "くれる = dar (de otro a mí). Frase: 友達がプレゼントをくれた (Tomodachi ga purezento o kureta) = Mi amigo me dio un regalo."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Dar/Recibir",
        "diff": "medium",
        "q": "¿Qué verbo significa 'recibir'?",
        "opts": [
            "あげる",
            "くれる",
            "もらう",
            "くださる"
        ],
        "ans": 2,
        "exp": "もらう = recibir. Frase: 友達からプレゼントをもらった (Tomodachi kara purezento o moratta) = Recibí un regalo de mi amigo."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Dar/Recibir",
        "diff": "medium",
        "q": "¿Cómo se dice 'Le di un libro a mi profesor'?",
        "opts": [
            "先生に本をあげた",
            "先生が本をくれた",
            "先生から本をもらった",
            "先生に本をやった"
        ],
        "ans": 0,
        "exp": "あげる se usa para dar. Frase: 先生に本をあげた (Sensei ni hon o ageta) = Le di un libro a mi profesor."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Dar/Recibir",
        "diff": "medium",
        "q": "¿Qué verbo se usa para dar a un superior?",
        "opts": [
            "あげる",
            "さしあげる",
            "くれる",
            "くださる"
        ],
        "ans": 1,
        "exp": "さしあげる es la versión humilde de 'dar' a un superior. Frase: 先生に花をさしあげました (Sensei ni hana o sashiagemashita) = Le di flores al profesor."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Dar/Recibir",
        "diff": "medium",
        "q": "¿Qué verbo se usa cuando un superior te da algo?",
        "opts": [
            "あげる",
            "さしあげる",
            "くれる",
            "くださる"
        ],
        "ans": 3,
        "exp": "くださる es la versión honorífica de 'dar' de un superior a mí. Frase: 社長が褒めてくださった (Shachō ga homete kudasatta) = El presidente me elogió."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Dar/Recibir",
        "diff": "medium",
        "q": "¿Qué verbo se usa para recibir de un superior?",
        "opts": [
            "もらう",
            "いただく",
            "くれる",
            "くださる"
        ],
        "ans": 1,
        "exp": "いただく es la versión humilde de 'recibir'. Frase: 先生から本をいただきました (Sensei kara hon o itadakimashita) = Recibí un libro del profesor."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Dar/Recibir",
        "diff": "medium",
        "q": "¿Qué significa '手伝ってあげる'?",
        "opts": [
            "Ayúdame",
            "Te ayudo (dar ayuda)",
            "Me ayudas",
            "Ayuda mutua"
        ],
        "ans": 1,
        "exp": "〜てあげる = hacer algo por alguien. Frase: 宿題を手伝ってあげる (Shukudai o tetsudatte ageru) = Te ayudo con la tarea."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Dar/Recibir",
        "diff": "medium",
        "q": "¿Qué significa '教えてくれた'?",
        "opts": [
            "Enseñé",
            "Me enseñó (dar a mí)",
            "Enseñaremos",
            "Enseña"
        ],
        "ans": 1,
        "exp": "〜てくれる = alguien hace algo por mí. Frase: 先生が教えてくれた (Sensei ga oshiete kureta) = El profesor me enseñó."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Dar/Recibir",
        "diff": "medium",
        "q": "¿Qué significa '友達に手伝ってもらった'?",
        "opts": [
            "Ayudé a mi amigo",
            "Mi amigo me ayudó (recibí ayuda)",
            "Quiero que mi amigo ayude",
            "No me ayudaron"
        ],
        "ans": 1,
        "exp": "〜てもらう = recibir la acción de alguien. Frase: 友達に手伝ってもらった (Tomodachi ni tetsudatte moratta) = Mi amigo me ayudó."
    },
    // DESEO たい (5)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Deseo",
        "diff": "medium",
        "q": "¿Cómo se dice 'quiero comer sushi'?",
        "opts": [
            "寿司を食べる",
            "寿司が食べたい",
            "寿司を食べます",
            "寿司食べて"
        ],
        "ans": 1,
        "exp": "食べたい = 'tabetai' (quiero comer). Frase: 寿司が食べたい (Sushi ga tabetai) = Quiero comer sushi."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Deseo",
        "diff": "medium",
        "q": "Negativo de '行きたい' (quiero ir):",
        "opts": [
            "行きたくない",
            "行きたいじゃない",
            "行きなくない",
            "行きたくないです"
        ],
        "ans": 0,
        "exp": "行きたい → 行きたくない (ikitakunai). Frase: 学校に行きたくない (Gakkō ni ikitakunai) = No quiero ir a la escuela."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Deseo",
        "diff": "medium",
        "q": "¿Cómo se dice 'quiero ver una película'?",
        "opts": [
            "映画を見る",
            "映画が見たい",
            "映画を見ます",
            "映画見て"
        ],
        "ans": 1,
        "exp": "見たい = 'mitai' (quiero ver). Frase: 映画が見たい (Eiga ga mitai) = Quiero ver una película."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Deseo",
        "diff": "medium",
        "q": "¿Qué significa '何か食べたい'?",
        "opts": [
            "Quiero comer algo",
            "No quiero comer nada",
            "Quiero comer todo",
            "No puedo comer"
        ],
        "ans": 0,
        "exp": "何か = algo. Frase: 何か食べたい (Nanika tabetai) = Quiero comer algo."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Deseo",
        "diff": "medium",
        "q": "¿Qué significa '日本に行きたいです'?",
        "opts": [
            "Fui a Japón",
            "Quiero ir a Japón",
            "Debo ir a Japón",
            "Puedo ir a Japón"
        ],
        "ans": 1,
        "exp": "行きたい = 'ikitai' (quiero ir). Frase: 日本に行きたいです (Nihon ni ikitai desu) = Quiero ir a Japón."
    },
    // CONDICIONALES (10)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Condicional",
        "diff": "medium",
        "q": "Condicional たら de 行く (ir):",
        "opts": [
            "行ったら",
            "行けば",
            "行くなら",
            "行くと"
        ],
        "ans": 0,
        "exp": "行く → 行ったら (ittara). Frase: 雨が降ったら行かない (Ame ga futtara ikanai) = Si llueve, no voy."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Condicional",
        "diff": "medium",
        "q": "Condicional ば de 食べる (comer):",
        "opts": [
            "食べれば",
            "食べたら",
            "食べるなら",
            "食べると"
        ],
        "ans": 0,
        "exp": "食べる → 食べれば (tabereba). Frase: 食べれば分かる (Tabereba wakaru) = Si comes, lo entenderás."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Condicional",
        "diff": "medium",
        "q": "¿Cuál condicional se usa para verdades generales?",
        "opts": [
            "と",
            "ば",
            "たら",
            "なら"
        ],
        "ans": 0,
        "exp": "と indica verdades generales o consecuencias inevitables. Frase: 春になると花が咲く (Haru ni naru to hana ga saku) = Cuando llega la primavera, florecen las flores."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Condicional",
        "diff": "medium",
        "q": "Condicional なら de 行く (ir):",
        "opts": [
            "行ったら",
            "行けば",
            "行くなら",
            "行くと"
        ],
        "ans": 2,
        "exp": "行くなら = 'iku nara' (si es que vas). Frase: 行くなら、早く行って (Iku nara, hayaku itte) = Si vas, ve rápido."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Condicional",
        "diff": "medium",
        "q": "¿Qué diferencia hay entre たら y なら?",
        "opts": [
            "たら es más hipotético, なら es más basado en realidad",
            "Son iguales",
            "たら es pasado, なら es futuro",
            "たら es formal, なら es informal"
        ],
        "ans": 0,
        "exp": "たら = si/cuando (más hipotético). なら = si (basado en la realidad actual)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Condicional",
        "diff": "medium",
        "q": "¿Qué significa '時間があれば、行きます'?",
        "opts": [
            "Si tengo tiempo, voy",
            "Si no tengo tiempo, voy",
            "Aunque no tenga tiempo, voy",
            "Cuando tenga tiempo, iré"
        ],
        "ans": 0,
        "exp": "あれば = 'areba' (si hay). Frase: 時間があれば、行きます (Jikan ga areba, ikimasu) = Si tengo tiempo, voy."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Condicional",
        "diff": "medium",
        "q": "¿Qué significa '雨が降ったら、行かない'?",
        "opts": [
            "Si llueve, voy",
            "Si llueve, no voy",
            "Llovió y no fui",
            "Aunque llueva, voy"
        ],
        "ans": 1,
        "exp": "降ったら = 'futtara' (si llueve). Frase: 雨が降ったら、行かない (Ame ga futtara, ikanai) = Si llueve, no voy."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Condicional",
        "diff": "medium",
        "q": "¿Qué significa '勉強すればするほど'?",
        "opts": [
            "Si estudio",
            "Cuanto más estudio",
            "Estudio y estudio",
            "Si no estudio"
        ],
        "ans": 1,
        "exp": "〜ば〜ほど = 'cuanto más... más...'. Frase: 勉強すればするほど難しくなる (Benkyō sureba suru hodo muzukashiku naru) = Cuanto más estudio, más difícil se vuelve."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Condicional",
        "diff": "medium",
        "q": "¿Qué significa 'なければ'?",
        "opts": [
            "Si hay",
            "Si no hay",
            "Cuando hay",
            "Aunque haya"
        ],
        "ans": 1,
        "exp": "なければ = 'nakereba' (si no hay). Frase: 雨がなければ行く (Ame ga nakereba iku) = Si no llueve, voy."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Condicional",
        "diff": "medium",
        "q": "¿Qué significa 'あれば'?",
        "opts": [
            "Si hay",
            "Si no hay",
            "Cuando hay",
            "Aunque haya"
        ],
        "ans": 0,
        "exp": "あれば = 'areba' (si hay). Frase: 時間があれば行く (Jikan ga areba iku) = Si hay tiempo, voy."
    },
    // POTENCIAL (5)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Potencial",
        "diff": "medium",
        "q": "Forma potencial de 食べる (poder comer):",
        "opts": [
            "食べられる",
            "食べれる (coloquial)",
            "食べることができる",
            "Todas las anteriores"
        ],
        "ans": 3,
        "exp": "Todas son formas correctas: 食べられる (formal), 食べれる (coloquial), 食べることができる. Frase: 私は寿司が食べられる (Watashi wa sushi ga taberareru) = Puedo comer sushi."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Potencial",
        "diff": "medium",
        "q": "Forma potencial de 行く (poder ir):",
        "opts": [
            "行ける",
            "行かれる",
            "行くことができる",
            "A y C"
        ],
        "ans": 3,
        "exp": "行く → 行ける (ikeru). Frase: 日本に行ける (Nihon ni ikeru) = Puedo ir a Japón."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Potencial",
        "diff": "medium",
        "q": "Forma potencial de 話す (poder hablar):",
        "opts": [
            "話せる",
            "話される",
            "話させる",
            "話せられる"
        ],
        "ans": 0,
        "exp": "話す → 話せる (hanaseru). Frase: 日本語が話せる (Nihongo ga hanaseru) = Puedo hablar japonés."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Potencial",
        "diff": "medium",
        "q": "Forma potencial de する (poder hacer):",
        "opts": [
            "できる",
            "される",
            "させる",
            "せられる"
        ],
        "ans": 0,
        "exp": "する → できる (dekiru). Frase: 料理ができる (Ryōri ga dekiru) = Puedo cocinar."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Potencial",
        "diff": "medium",
        "q": "Forma potencial de 来る (poder venir):",
        "opts": [
            "来られる",
            "来れる",
            "来ることができる",
            "Todas"
        ],
        "ans": 3,
        "exp": "来る → 来られる (korareru) / 来れる (koreru coloquial). Frase: 明日来られますか？ (Ashita koraremasu ka?) = ¿Puedes venir mañana?"
    },
    // COMPARACIONES (5)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Comparación",
        "diff": "medium",
        "q": "Estructura para 'A es más... que B':",
        "opts": [
            "AはBより...",
            "AよりBは...",
            "AとBどちらが...",
            "AもBも..."
        ],
        "ans": 0,
        "exp": "AはBより + adjetivo. Frase: 日本はメキシコより小さい (Nihon wa Mekishiko yori chiisai) = Japón es más pequeño que México."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Comparación",
        "diff": "medium",
        "q": "¿Cómo se dice 'el más rápido'?",
        "opts": [
            "一番速い",
            "もっと速い",
            "最も速い (formal)",
            "Todas las anteriores"
        ],
        "ans": 3,
        "exp": "一番速い (ichiban hayai) = el más rápido (coloquial). 最も速い (mottomo hayai) = formal."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Comparación",
        "diff": "medium",
        "q": "¿Cómo se dice 'El sushi es más delicioso que el ramen'?",
        "opts": [
            "寿司はラーメンよりおいしい",
            "ラーメンは寿司よりおいしい",
            "寿司よりラーメンのほうがおいしい",
            "A y C son correctas"
        ],
        "ans": 3,
        "exp": "Ambas son correctas. Frase: 寿司はラーメンよりおいしい (Sushi wa ramen yori oishii) = El sushi es más delicioso que el ramen."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Comparación",
        "diff": "medium",
        "q": "¿Qué significa '一番好きな食べ物は何ですか？'?",
        "opts": [
            "¿Cuál es tu comida menos favorita?",
            "¿Cuál es tu comida más favorita?",
            "¿Te gusta la comida?",
            "¿Qué comida no te gusta?"
        ],
        "ans": 1,
        "exp": "一番 = 'ichiban' (el más). Frase: 一番好きな食べ物は何ですか？ (Ichiban suki na tabemono wa nan desu ka?) = ¿Cuál es tu comida favorita?"
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Comparación",
        "diff": "medium",
        "q": "¿Qué significa 'もっと'?",
        "opts": [
            "El más",
            "Más (comparativo)",
            "Menos",
            "Igual"
        ],
        "ans": 1,
        "exp": "もっと = 'motto' (más). Frase: もっと食べたい (Motto tabetai) = Quiero comer más."
    },
    // CONTADORES (10)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Contadores",
        "diff": "medium",
        "q": "Contador para objetos pequeños y redondos (manzanas, pelotas):",
        "opts": [
            "〜個 (ko)",
            "〜本 (hon)",
            "〜枚 (mai)",
            "〜匹 (hiki)"
        ],
        "ans": 0,
        "exp": "〜個 (ko): 一個 (ikko), 二個 (niko), 三個 (sanko). Frase: リンゴを三個買った (Ringo o sanko katta) = Compré tres manzanas."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Contadores",
        "diff": "medium",
        "q": "Contador para objetos largos (lápices, botellas):",
        "opts": [
            "〜個 (ko)",
            "〜本 (hon)",
            "〜枚 (mai)",
            "〜匹 (hiki)"
        ],
        "ans": 1,
        "exp": "〜本 (hon): 一本 (ippon), 二本 (nihon), 三本 (sanbon). Frase: ペンを三本買った (Pen o sanbon katta) = Compré tres lápices."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Contadores",
        "diff": "medium",
        "q": "Contador para personas:",
        "opts": [
            "〜人 (nin)",
            "〜名 (mei)",
            "〜方 (kata)",
            "Todas las anteriores según formalidad"
        ],
        "ans": 3,
        "exp": "人 (nin) común; 名 (mei) formal; 方 (kata) honorífico. Frase: 三人 (san-nin) = tres personas."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Contadores",
        "diff": "medium",
        "q": "Contador para animales pequeños (gatos, perros):",
        "opts": [
            "〜本",
            "〜匹",
            "〜頭",
            "〜羽"
        ],
        "ans": 1,
        "exp": "〜匹 (hiki): 一匹 (ippiki), 二匹 (nihiki), 三匹 (sanbiki). Frase: 猫が三匹いる (Neko ga sanbiki iru) = Hay tres gatos."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Contadores",
        "diff": "medium",
        "q": "Contador para animales grandes (vacas, caballos):",
        "opts": [
            "〜匹",
            "〜頭",
            "〜羽",
            "〜本"
        ],
        "ans": 1,
        "exp": "〜頭 (tō): 一頭 (ittō), 二頭 (nitō). Frase: 牛が二頭いる (Ushi ga nitō iru) = Hay dos vacas."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Contadores",
        "diff": "medium",
        "q": "Contador para objetos planos (papel, fotos, camisas):",
        "opts": [
            "〜個",
            "〜本",
            "〜枚",
            "〜匹"
        ],
        "ans": 2,
        "exp": "〜枚 (mai): 一枚 (ichimai), 二枚 (nimai). Frase: 写真を三枚撮った (Shashin o sanmai totta) = Tomé tres fotos."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Contadores",
        "diff": "medium",
        "q": "¿Cómo se dice 'dos personas'?",
        "opts": [
            "二人",
            "二名",
            "二人 (ふたり)",
            "二方"
        ],
        "ans": 2,
        "exp": "二人 = 'futari' (excepción). Frase: 二人で行きます (Futari de ikimasu) = Vamos dos personas."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Contadores",
        "diff": "medium",
        "q": "¿Cómo se dice 'un día' (fecha, no duración)?",
        "opts": [
            "いちにち",
            "ついたち",
            "いちじつ",
            "ひとひ"
        ],
        "ans": 1,
        "exp": "ついたち = 'tsuitachi' (día 1 del mes). Frase: 一月一日 (Ichigatsu tsuitachi) = 1 de enero."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Contadores",
        "diff": "medium",
        "q": "¿Cómo se dice 'tres días'?",
        "opts": [
            "三日 (みっか)",
            "三日 (さんにち)",
            "三日間 (さんにちかん)",
            "三日 (みっか)"
        ],
        "ans": 0,
        "exp": "三日 = 'mikka' (3 días). Frase: 三日間休む (Mikkakan yasumu) = Descansar tres días."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Contadores",
        "diff": "medium",
        "q": "Contador para vehículos:",
        "opts": [
            "〜台",
            "〜個",
            "〜本",
            "〜枚"
        ],
        "ans": 0,
        "exp": "〜台 (dai): 一台 (ichidai), 二台 (nidai). Frase: 車が一台ある (Kuruma ga ichidai aru) = Hay un auto."
    },
    // VOLITIVA (5)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Volitiva",
        "diff": "medium",
        "q": "Forma volitiva de 行く (vamos a ir):",
        "opts": [
            "行こう",
            "行きましょう",
            "行くぞ",
            "A y B"
        ],
        "ans": 3,
        "exp": "行こう (ikō) = informal; 行きましょう (ikimashō) = formal. Frase: 一緒に行こう！(Issho ni ikō!) = ¡Vamos juntos!"
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Volitiva",
        "diff": "medium",
        "q": "Forma volitiva de 食べる (vamos a comer):",
        "opts": [
            "食べよう",
            "食べましょう",
            "食べるぞ",
            "A y B"
        ],
        "ans": 3,
        "exp": "食べよう (tabeyō) / 食べましょう (tabemashō). Frase: 一緒に食べよう (Issho ni tabeyō) = Comamos juntos."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Volitiva",
        "diff": "medium",
        "q": "Forma volitiva de する (vamos a hacer):",
        "opts": [
            "しよう",
            "しろ",
            "しなさい",
            "せよ"
        ],
        "ans": 0,
        "exp": "する → しよう (shiyō). Frase: 勉強しよう (Benkyō shiyō) = Estudiemos."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Volitiva",
        "diff": "medium",
        "q": "Forma volitiva de 来る (vamos a venir):",
        "opts": [
            "来よう",
            "来い",
            "来なさい",
            "こよう"
        ],
        "ans": 3,
        "exp": "来る → 来よう (koyō). Frase: 私の家に来よう (Watashi no ie ni koyō) = Vamos a mi casa."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Volitiva",
        "diff": "medium",
        "q": "¿Qué significa '日本に行こうと思う'?",
        "opts": [
            "Fui a Japón",
            "Estoy pensando en ir a Japón (intención)",
            "Quiero ir a Japón",
            "Debo ir a Japón"
        ],
        "ans": 1,
        "exp": "行こうと思う = 'ikō to omou' (pensar en hacer - intención). Frase: 日本に行こうと思う (Nihon ni ikō to omou) = Estoy pensando en ir a Japón."
    },
    // OBLIGACIÓN (5)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Obligación",
        "diff": "medium",
        "q": "¿Qué significa '行かなければならない'?",
        "opts": [
            "No debo ir",
            "Tengo que ir (obligación)",
            "Puedo ir",
            "Quiero ir"
        ],
        "ans": 1,
        "exp": "なければならない = 'si no hago, no está bien' → tengo que hacerlo. Frase: 仕事に行かなければならない (Shigoto ni ikanakereba naranai) = Tengo que ir al trabajo."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Obligación",
        "diff": "medium",
        "q": "Forma coloquial de '行かなければならない':",
        "opts": [
            "行かないと",
            "行かなくちゃ",
            "行かなきゃ",
            "Todas las anteriores"
        ],
        "ans": 3,
        "exp": "Coloquial: 行かなきゃ (ikanakya), 行かなくちゃ (ikanakucha), 行かないと (ikanai to). Frase: もう行かなきゃ (Mō ikanakya) = Ya me tengo que ir."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Obligación",
        "diff": "medium",
        "q": "¿Qué significa '宿題をしなければならない'?",
        "opts": [
            "Puedo hacer la tarea",
            "No tengo que hacer la tarea",
            "Tengo que hacer la tarea",
            "Quiero hacer la tarea"
        ],
        "ans": 2,
        "exp": "しなければならない = 'tengo que hacer'. Frase: 宿題をしなければならない (Shukudai o shinakereba naranai) = Tengo que hacer la tarea."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Obligación",
        "diff": "medium",
        "q": "¿Cómo se dice 'No debes fumar aquí'?",
        "opts": [
            "ここでタバコを吸ってもいい",
            "ここでタバコを吸ってはいけない",
            "ここでタバコを吸わなくてもいい",
            "ここでタバコを吸わなければならない"
        ],
        "ans": 1,
        "exp": "〜てはいけない = 'no está permitido'. Frase: ここでタバコを吸ってはいけない (Koko de tabako o sutte wa ikenai) = No se debe fumar aquí."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Obligación",
        "diff": "medium",
        "q": "¿Cómo se dice 'No tengo que ir'?",
        "opts": [
            "行かなければならない",
            "行かなくてもいい",
            "行ってはいけない",
            "行きたくない"
        ],
        "ans": 1,
        "exp": "〜なくてもいい = 'no es necesario hacer'. Frase: 行かなくてもいい (Ikanakute mo ii) = No tengo que ir / No es necesario que vaya."
    },
    // PERMISO Y PROHIBICIÓN (5)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Permiso",
        "diff": "medium",
        "q": "¿Cómo se pide permiso formalmente?",
        "opts": [
            "〜てもいい",
            "〜てはいけない",
            "〜なくてはいけない",
            "〜てもかまわない"
        ],
        "ans": 0,
        "exp": "〜てもいいです = 'está bien si...'. Frase: 入ってもいいですか？ (Haitte mo ii desu ka?) = ¿Puedo entrar?"
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Permiso",
        "diff": "medium",
        "q": "¿Cómo se dice 'Puedo usar tu teléfono?'",
        "opts": [
            "電話を使ってもいいですか？",
            "電話を使ってはいけませんか？",
            "電話を使わなくてもいいですか？",
            "電話を使わなければなりませんか？"
        ],
        "ans": 0,
        "exp": "〜てもいい = 'puedo...?'. Frase: 電話を使ってもいいですか？ (Denwa o tsukatte mo ii desu ka?) = ¿Puedo usar el teléfono?"
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Prohibición",
        "diff": "medium",
        "q": "¿Cómo se dice 'no se permite fumar'?",
        "opts": [
            "吸ってもいい",
            "吸ってはいけない",
            "吸わなくてもいい",
            "吸わなければならない"
        ],
        "ans": 1,
        "exp": "〜てはいけない = 'no está permitido'. Frase: ここでタバコを吸ってはいけない (Koko de tabako o sutte wa ikenai)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Permiso",
        "diff": "medium",
        "q": "¿Qué significa '食べてもいいですか？'?",
        "opts": [
            "¿Puedo comer?",
            "¿No puedo comer?",
            "¿Tengo que comer?",
            "¿Quieres comer?"
        ],
        "ans": 0,
        "exp": "〜てもいいですか = '¿puedo hacer...?'. Frase: 食べてもいいですか？ (Tabete mo ii desu ka?) = ¿Puedo comer?"
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Prohibición",
        "diff": "medium",
        "q": "¿Qué significa 'ここで写真を撮ってはいけない'?",
        "opts": [
            "Puedes tomar fotos aquí",
            "No debes tomar fotos aquí",
            "Quieres tomar fotos aquí",
            "Tomaré fotos aquí"
        ],
        "ans": 1,
        "exp": "〜てはいけない = 'no está permitido'. Frase: ここで写真を撮ってはいけない (Koko de shashin o totte wa ikenai) = No debes tomar fotos aquí."
    },
    // はず / かもしれない / そうだ (5)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "はず",
        "diff": "medium",
        "q": "¿Qué significa '彼はもう来るはずだ'?",
        "opts": [
            "Él ya debería venir (expectativa lógica)",
            "Él viene ahora",
            "Él no va a venir",
            "Ojalá venga"
        ],
        "ans": 0,
        "exp": "はず = 'debería ser que...' basado en evidencia lógica. Frase: 彼はもう来るはずだ (Kare wa mō kuru hazu da) = Él debería venir ya."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "かもしれない",
        "diff": "medium",
        "q": "¿Qué expresa 'かもしれない'?",
        "opts": [
            "Probabilidad",
            "Obligación",
            "Prohibición",
            "Deseo"
        ],
        "ans": 0,
        "exp": "かもしれない = 'quizás, tal vez'. Frase: 雨が降るかもしれない (Ame ga furu kamo shirenai) = Tal vez llueva."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "そうだ",
        "diff": "medium",
        "q": "¿Qué significa 'おいしそう'?",
        "opts": [
            "Es delicioso",
            "Parece delicioso",
            "Quiero comer",
            "No es delicioso"
        ],
        "ans": 1,
        "exp": "〜そうだ = 'parece que...' (apariencia). Frase: このケーキはおいしそう (Kono kēki wa oishisō) = Este pastel parece delicioso."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "ようだ",
        "diff": "medium",
        "q": "¿Qué expresa 'ようだ'?",
        "opts": [
            "Similitud o conjetura basada en evidencia directa",
            "Obligación",
            "Deseo",
            "Orden"
        ],
        "ans": 0,
        "exp": "ようだ = 'parece que...' (basado en observación directa). Frase: 誰かがいるようだ (Dareka ga iru yō da) = Parece que hay alguien."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "らしい",
        "diff": "medium",
        "q": "Diferencia entre らしい y そうだ:",
        "opts": [
            "らしい es rumor o característico; そうだ es apariencia",
            "Son idénticos",
            "らしい es más formal",
            "そうだ solo para clima"
        ],
        "ans": 0,
        "exp": "らしい = 'he oído que...' o 'típico de...'. そうだ = 'parece por apariencia'. Frase: 彼は日本人らしい (Kare wa nihonjin rashii) = Parece japonés (típico de japonés)."
    },
    // つもり / ながら / てしまう (5)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "つもり",
        "diff": "medium",
        "q": "¿Qué significa '行くつもりです'?",
        "opts": [
            "Fui",
            "Tengo la intención de ir",
            "Debo ir",
            "Puedo ir"
        ],
        "ans": 1,
        "exp": "つもり = 'intención'. Frase: 日本に行くつもりです (Nihon ni iku tsumori desu) = Tengo la intención de ir a Japón."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "ながら",
        "diff": "medium",
        "q": "¿Qué expresa '音楽を聞きながら勉強する'?",
        "opts": [
            "Estudio después de escuchar música",
            "Estudio mientras escucho música",
            "Estudio para escuchar música",
            "No estudio música"
        ],
        "ans": 1,
        "exp": "ながら = 'mientras hace A, hace B'. Frase: 音楽を聞きながら勉強する (Ongaku o kikinagara benkyō suru) = Estudio mientras escucho música."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "てしまう",
        "diff": "medium",
        "q": "¿Qué matiz añade てしまう?",
        "opts": [
            "Completación de acción o arrepentimiento",
            "Acción futura",
            "Acción hipotética",
            "Negación"
        ],
        "ans": 0,
        "exp": "てしまう = 'terminar de hacer' o 'lamentablemente sucedió'. Frase: ケーキを全部食べてしまった (Kēki o zenbu tabete shimatta) = Me comí todo el pastel (y me arrepiento)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "ておく",
        "diff": "medium",
        "q": "¿Qué significa '予約しておく'?",
        "opts": [
            "Reservé (y ya está)",
            "Reservar con anticipación (preparación)",
            "No reservar",
            "Olvidé reservar"
        ],
        "ans": 1,
        "exp": "ておく = 'hacer algo con anticipación como preparación'. Frase: レストランを予約しておく (Resutoran o yoyaku shite oku) = Reservo el restaurante con anticipación."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "てみる",
        "diff": "medium",
        "q": "¿Qué expresa '食べてみる'?",
        "opts": [
            "Comer",
            "Intentar comer (probar)",
            "Terminar de comer",
            "Dejar de comer"
        ],
        "ans": 1,
        "exp": "てみる = 'intentar hacer / probar'. Frase: 一度、日本に行ってみたい (Ichido, Nihon ni itte mitai) = Quiero ir a Japón una vez (para experimentarlo)."
    },
    // PASIVA (5)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Voz pasiva",
        "diff": "hard",
        "q": "Forma pasiva de 食べる (ser comido):",
        "opts": [
            "食べられる",
            "食べれる",
            "食べさせられる",
            "食べられた"
        ],
        "ans": 0,
        "exp": "Ru-verb pasivo: 食べる → 食べられる. Frase: このケーキは食べられた (Kono kēki wa taberareta) = Este pastel fue comido."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Voz pasiva",
        "diff": "hard",
        "q": "Forma pasiva de 書く (ser escrito):",
        "opts": [
            "書かれる",
            "書ける",
            "書かせられる",
            "書いた"
        ],
        "ans": 0,
        "exp": "書く → 書かれる. Frase: この本は多くの人に読まれている (Kono hon wa ōku no hito ni yomarete iru) = Este libro es leído por mucha gente."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Voz pasiva",
        "diff": "hard",
        "q": "Forma pasiva de 話す (ser hablado):",
        "opts": [
            "話される",
            "話せる",
            "話させる",
            "話された"
        ],
        "ans": 0,
        "exp": "話す → 話される. Frase: 日本語が話されている (Nihongo ga hanasarete iru) = Se está hablando japonés."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Voz pasiva",
        "diff": "hard",
        "q": "Forma pasiva de する (ser hecho):",
        "opts": [
            "される",
            "できる",
            "させる",
            "せられる"
        ],
        "ans": 0,
        "exp": "する → される. Frase: その映画は2010年に作られた (Sono eiga wa 2010-nen ni tsukurareta) = Esa película fue hecha en 2010."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Voz pasiva",
        "diff": "hard",
        "q": "Forma pasiva de 読む (ser leído):",
        "opts": [
            "読まれる",
            "読める",
            "読ませる",
            "読んだ"
        ],
        "ans": 0,
        "exp": "読む → 読まれる. Frase: この本はよく読まれている (Kono hon wa yoku yomarete iru) = Este libro es leído frecuentemente."
    },
    // CAUSATIVA (5)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Causativa",
        "diff": "hard",
        "q": "Forma causativa de 食べる (hacer comer):",
        "opts": [
            "食べさせる",
            "食べられる",
            "食べさせられる",
            "食べれる"
        ],
        "ans": 0,
        "exp": "食べる → 食べさせる (hacer/dejar comer). Frase: 子供に野菜を食べさせる (Kodomo ni yasai o tabesaseru) = Hago que el niño coma verduras."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Causativa",
        "diff": "hard",
        "q": "Forma causativa de 行く (hacer ir):",
        "opts": [
            "行かせる",
            "行ける",
            "行かされる",
            "行かせられる"
        ],
        "ans": 0,
        "exp": "行く → 行かせる (hacer/dejar ir). Frase: 子供を学校に行かせる (Kodomo o gakkō ni ikaseru) = Hago que el niño vaya a la escuela."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Causativa",
        "diff": "hard",
        "q": "Forma causativa de する (hacer hacer):",
        "opts": [
            "させる",
            "できる",
            "される",
            "せられる"
        ],
        "ans": 0,
        "exp": "する → させる. Frase: 子供に勉強させる (Kodomo ni benkyō saseru) = Hago que el niño estudie."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Causativa",
        "diff": "hard",
        "q": "Forma causativa de 来る (hacer venir):",
        "opts": [
            "来させる",
            "来られる",
            "来れる",
            "こさせる"
        ],
        "ans": 3,
        "exp": "来る → 来させる (kosaseru). Frase: 友達を家に来させる (Tomodachi o ie ni kosaseru) = Hago que mi amigo venga a casa."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Causativa",
        "diff": "hard",
        "q": "Forma causativa de 話す (hacer hablar):",
        "opts": [
            "話させる",
            "話せる",
            "話される",
            "話させられる"
        ],
        "ans": 0,
        "exp": "話す → 話させる. Frase: 先生が生徒に発表させる (Sensei ga seito ni happyō saseru) = El profesor hace que los estudiantes presenten."
    },
    // KANJI COMPUESTOS N3 (10)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Kanji compuestos",
        "diff": "medium",
        "q": "¿Qué significa '勉強' (benkyō)?",
        "opts": [
            "Estudio",
            "Trabajo",
            "Esfuerzo",
            "Escuela"
        ],
        "ans": 0,
        "exp": "勉強 = 'benkyō' (estudio). Kanji: 勉 = esforzarse, 強 = forzar."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Kanji compuestos",
        "diff": "medium",
        "q": "¿Qué significa '料理' (ryōri)?",
        "opts": [
            "Comida",
            "Cocinar / platillo",
            "Restaurante",
            "Ingrediente"
        ],
        "ans": 1,
        "exp": "料理 = 'ryōri' (cocinar, platillo)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Kanji compuestos",
        "diff": "medium",
        "q": "¿Qué significa '時間' (jikan)?",
        "opts": [
            "Tiempo",
            "Hora",
            "Reloj",
            "Minuto"
        ],
        "ans": 0,
        "exp": "時間 = 'jikan' (tiempo). Kanji: 時 = tiempo, 間 = intervalo."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Kanji compuestos",
        "diff": "medium",
        "q": "¿Qué significa '学校' (gakkō)?",
        "opts": [
            "Universidad",
            "Escuela",
            "Jardín",
            "Oficina"
        ],
        "ans": 1,
        "exp": "学校 = 'gakkō' (escuela)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Kanji compuestos",
        "diff": "medium",
        "q": "¿Qué significa '先生' (sensei)?",
        "opts": [
            "Estudiante",
            "Profesor",
            "Doctor",
            "Ingeniero"
        ],
        "ans": 1,
        "exp": "先生 = 'sensei' (profesor, maestro, doctor)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Kanji compuestos",
        "diff": "medium",
        "q": "¿Qué significa '会社' (kaisha)?",
        "opts": [
            "Escuela",
            "Hospital",
            "Empresa",
            "Banco"
        ],
        "ans": 2,
        "exp": "会社 = 'kaisha' (empresa, compañía)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Kanji compuestos",
        "diff": "medium",
        "q": "¿Qué significa '電車' (densha)?",
        "opts": [
            "Auto",
            "Tren eléctrico",
            "Avión",
            "Barco"
        ],
        "ans": 1,
        "exp": "電車 = 'densha' (tren eléctrico)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Kanji compuestos",
        "diff": "medium",
        "q": "¿Qué significa '銀行' (ginkō)?",
        "opts": [
            "Escuela",
            "Hospital",
            "Banco",
            "Tienda"
        ],
        "ans": 2,
        "exp": "銀行 = 'ginkō' (banco)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Kanji compuestos",
        "diff": "medium",
        "q": "¿Qué significa '病院' (byōin)?",
        "opts": [
            "Farmacia",
            "Hospital",
            "Clínica",
            "Consultorio"
        ],
        "ans": 1,
        "exp": "病院 = 'byōin' (hospital)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Kanji compuestos",
        "diff": "medium",
        "q": "¿Qué significa '図書館' (toshokan)?",
        "opts": [
            "Librería",
            "Biblioteca",
            "Museo",
            "Galería"
        ],
        "ans": 1,
        "exp": "図書館 = 'toshokan' (biblioteca)."
    },

    // ==================== AVANZADO (avanzado: true) - 60 preguntas ====================
    // KEIGO HONORÍFICO (10)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Honorífico",
        "diff": "hard",
        "q": "Sonkeigo (honorífico) de '行く':",
        "opts": [
            "いらっしゃる",
            "参る",
            "おいでになる",
            "A y C"
        ],
        "ans": 3,
        "exp": "いらっしゃる (irassharu) y おいでになる (oide ni naru) son honoríficos de ir/venir/estar. Frase: 社長がいらっしゃいます (Shachō ga irasshaimasu) = El presidente está."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Honorífico",
        "diff": "hard",
        "q": "Sonkeigo de '言う' (decir):",
        "opts": [
            "おっしゃる",
            "申す",
            "申し上げる",
            "言われる"
        ],
        "ans": 0,
        "exp": "おっしゃる (ossharu) es el honorífico de 'decir'. Frase: 先生がおっしゃいました (Sensei ga osshaimashita) = El profesor dijo."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Honorífico",
        "diff": "hard",
        "q": "Sonkeigo de 'する' (hacer):",
        "opts": [
            "なさる",
            "いたす",
            "される",
            "おする"
        ],
        "ans": 0,
        "exp": "なさる (nasaru) es honorífico de 'hacer'. Frase: 何をなさいますか？ (Nani o nasaimasu ka?) = ¿Qué va a hacer?"
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Honorífico",
        "diff": "hard",
        "q": "Sonkeigo de '見る' (ver):",
        "opts": [
            "ご覧になる",
            "拝見する",
            "見られる",
            "お見えになる"
        ],
        "ans": 0,
        "exp": "ご覧になる (goran ni naru) = ver (honorífico). Frase: 映画をご覧になりましたか？ (Eiga o goran ni narimashita ka?) = ¿Vio la película?"
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Honorífico",
        "diff": "hard",
        "q": "Sonkeigo de '食べる/飲む' (comer/beber):",
        "opts": [
            "召し上がる",
            "頂く",
            "いただく",
            "お食べになる"
        ],
        "ans": 0,
        "exp": "召し上がる (meshiagaru) es el honorífico para comer/beber. Frase: どうぞ召し上がってください (Dōzo meshiagatte kudasai) = Por favor, coma."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Honorífico",
        "diff": "hard",
        "q": "Sonkeigo de '知っている' (saber/conocer):",
        "opts": [
            "ご存知だ",
            "存じる",
            "存じ上げる",
            "知られる"
        ],
        "ans": 0,
        "exp": "ご存知だ (gozonji da) es el honorífico de saber. Frase: ご存知ですか？ (Gozonji desu ka?) = ¿Lo sabe?"
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Honorífico",
        "diff": "hard",
        "q": "Sonkeigo de '来る' (venir):",
        "opts": [
            "いらっしゃる",
            "参る",
            "おいでになる",
            "A y C"
        ],
        "ans": 3,
        "exp": "いらっしゃる y おいでになる son honoríficos de venir. Frase: お客様がいらっしゃいました (O-kyakusama ga irasshaimashita) = Llegó un cliente."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Honorífico",
        "diff": "hard",
        "q": "Sonkeigo de 'いる' (estar):",
        "opts": [
            "いらっしゃる",
            "おる",
            "ごいる",
            "ござる"
        ],
        "ans": 0,
        "exp": "いらっしゃる es honorífico para estar. Frase: 先生がいらっしゃいます (Sensei ga irasshaimasu) = El profesor está."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Honorífico",
        "diff": "hard",
        "q": "Sonkeigo de '聞く' (preguntar/escuchar):",
        "opts": [
            "お聞きになる",
            "伺う",
            "聞かれる",
            "聞く"
        ],
        "ans": 0,
        "exp": "お聞きになる (o-kiki ni naru) es honorífico de 'preguntar/escuchar'. Frase: 先生にお聞きになりましたか？ (Sensei ni o-kiki ni narimashita ka?) = ¿Le preguntó al profesor?"
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Honorífico",
        "diff": "hard",
        "q": "Sonkeigo de '会う' (encontrarse):",
        "opts": [
            "お会いになる",
            "お目にかかる",
            "会われる",
            "会う"
        ],
        "ans": 0,
        "exp": "お会いになる (o-ai ni naru) es honorífico de encontrarse. Frase: 社長にお会いになりましたか？ (Shachō ni o-ai ni narimashita ka?) = ¿Se encontró con el presidente?"
    },
    // KEIGO HUMILDE (10)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Humilde",
        "diff": "hard",
        "q": "Kenjougo (humilde) de '行く' (ir):",
        "opts": [
            "参る",
            "伺う",
            "おいでになる",
            "いらっしゃる"
        ],
        "ans": 0,
        "exp": "参る (mairu) es humilde para 'ir/venir'. Frase: 私が参ります (Watashi ga mairimasu) = Yo voy (humilde)."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Humilde",
        "diff": "hard",
        "q": "Kenjougo de '言う' (decir):",
        "opts": [
            "申す",
            "おっしゃる",
            "申し上げる",
            "言わせる"
        ],
        "ans": 0,
        "exp": "申す (mōsu) es humilde para 'decir'. Frase: 先生に申しました (Sensei ni mōshimashita) = Le dije al profesor."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Humilde",
        "diff": "hard",
        "q": "Kenjougo de 'する' (hacer):",
        "opts": [
            "いたす",
            "なさる",
            "される",
            "おする"
        ],
        "ans": 0,
        "exp": "いたす (itasu) es humilde para 'hacer'. Frase: 私がいたします (Watashi ga itashimasu) = Yo lo haré."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Humilde",
        "diff": "hard",
        "q": "Kenjougo de '見る' (ver):",
        "opts": [
            "拝見する",
            "ご覧になる",
            "見える",
            "お見えする"
        ],
        "ans": 0,
        "exp": "拝見する (haiken suru) = ver (humilde). Frase: お手紙を拝見しました (O-tegami o haiken shimashita) = Vi su carta."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Humilde",
        "diff": "hard",
        "q": "Kenjougo de '食べる/飲む' (comer/beber):",
        "opts": [
            "いただく",
            "召し上がる",
            "頂戴する",
            "A y C"
        ],
        "ans": 3,
        "exp": "いただく (itadaku) y 頂戴する (chōdai suru) son humildes para comer/beber/recibir. Frase: いただきます (Itadakimasu)."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Humilde",
        "diff": "hard",
        "q": "Kenjougo de '知っている' (saber/conocer):",
        "opts": [
            "存じる",
            "ご存知だ",
            "存じ上げる",
            "知る"
        ],
        "ans": 0,
        "exp": "存じる (zonjiru) es humilde para saber. Frase: 存じません (Zonjimasen) = No lo sé (humilde)."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Humilde",
        "diff": "hard",
        "q": "Kenjougo de '聞く/尋ねる' (preguntar):",
        "opts": [
            "伺う",
            "お聞きになる",
            "聞く",
            "聞かれる"
        ],
        "ans": 0,
        "exp": "伺う (ukagau) es humilde para preguntar/visitar. Frase: 先生に伺いました (Sensei ni ukagaimashita) = Le pregunté al profesor."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Humilde",
        "diff": "hard",
        "q": "Kenjougo de '会う' (encontrarse):",
        "opts": [
            "お目にかかる",
            "お会いになる",
            "会う",
            "会われる"
        ],
        "ans": 0,
        "exp": "お目にかかる (o-me ni kakaru) es humilde para encontrarse. Frase: 社長にお目にかかりました (Shachō ni o-me ni kakari mashita) = Me encontré con el presidente."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Humilde",
        "diff": "hard",
        "q": "Kenjougo de '来る' (venir):",
        "opts": [
            "参る",
            "いらっしゃる",
            "おいでになる",
            "来る"
        ],
        "ans": 0,
        "exp": "参る (mairu) es humilde para ir/venir. Frase: 後ほど参ります (Nochihodo mairimasu) = Vendré más tarde."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Keigo Humilde",
        "diff": "hard",
        "q": "Kenjougo de 'もらう' (recibir):",
        "opts": [
            "いただく",
            "もらう",
            "くださる",
            "頂戴する"
        ],
        "ans": 0,
        "exp": "いただく (itadaku) y 頂戴する (chōdai suru) son humildes para recibir. Frase: 先生から本をいただきました (Sensei kara hon o itadakimashita) = Recibí un libro del profesor."
    },
    // PASIVA DE SUFRIMIENTO (5)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Voz pasiva",
        "diff": "hard",
        "q": "¿Qué expresa '雨に降られた'?",
        "opts": [
            "Fui golpeado por la lluvia",
            "Me afectó la lluvia (sufriente)",
            "La lluvia fue causada",
            "Quiero lluvia"
        ],
        "ans": 1,
        "exp": "Pasiva de sufrimiento o afectación indirecta. Frase: 雨に降られて濡れた (Ame ni furarete nureta) = Me agarró la lluvia y me mojé."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Voz pasiva",
        "diff": "hard",
        "q": "¿Qué significa '妻に先立たれた'?",
        "opts": [
            "Mi esposa me dejó",
            "Mi esposa falleció (y sufro)",
            "Dejé a mi esposa",
            "Mi esposa se fue"
        ],
        "ans": 1,
        "exp": "先立たれた = pasiva de sufrimiento - perder a alguien. Frase: 妻に先立たれた (Tsuma ni sakidatareta) = Mi esposa falleció antes que yo."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Voz pasiva",
        "diff": "hard",
        "q": "¿Qué significa '子供に泣かれた'?",
        "opts": [
            "Hice llorar al niño",
            "El niño lloró (y me afectó)",
            "El niño no lloró",
            "El niño ríe"
        ],
        "ans": 1,
        "exp": "泣かれた = pasiva de sufrimiento. Frase: 子供に泣かれて困った (Kodomo ni nakarete komatta) = El niño lloró y me causó problemas."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Voz pasiva",
        "diff": "hard",
        "q": "¿Qué significa '隣の人に足を踏まれた'?",
        "opts": [
            "Pisé a mi vecino",
            "Mi vecino me pisó (y me afectó)",
            "Mi vecino no pisó",
            "Quiero pisar"
        ],
        "ans": 1,
        "exp": "Pasiva de sufrimiento - parte del cuerpo. Frase: 隣の人に足を踏まれた (Tonari no hito ni ashi o fumareta) = Mi vecino me pisó el pie."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Voz pasiva",
        "diff": "hard",
        "q": "¿Qué significa '電車の中で財布を盗まれた'?",
        "opts": [
            "Robé una cartera",
            "Me robaron la cartera (afectación)",
            "Encontré una cartera",
            "Perdí mi cartera"
        ],
        "ans": 1,
        "exp": "盗まれた = pasiva de sufrimiento. Frase: 電車の中で財布を盗まれた (Densha no naka de saifu o nusumareta) = Me robaron la cartera en el tren."
    },
    // CAUSATIVA-PASIVA (5)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Causativa-pasiva",
        "diff": "hard",
        "q": "Forma causativa-pasiva de 行く (ser obligado a ir):",
        "opts": [
            "行かせられる",
            "行かされる",
            "行かせれる",
            "A y B"
        ],
        "ans": 3,
        "exp": "行かせられる (completa) / 行かされる (contraída) = ser obligado a ir. Frase: 上司に残業させられた (Jōshi ni zangyō saserareta) = Mi jefe me obligó a hacer horas extras."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Causativa-pasiva",
        "diff": "hard",
        "q": "Forma causativa-pasiva de 食べる (ser obligado a comer):",
        "opts": [
            "食べさせられる",
            "食べられる",
            "食べさせる",
            "食べれる"
        ],
        "ans": 0,
        "exp": "食べさせられる = ser obligado a comer. Frase: 嫌いなものを食べさせられた (Kirai na mono o tabesaserareta) = Me obligaron a comer algo que no me gusta."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Causativa-pasiva",
        "diff": "hard",
        "q": "Forma causativa-pasiva de 飲む (ser obligado a beber):",
        "opts": [
            "飲まされる",
            "飲ませられる",
            "飲まれる",
            "A y B"
        ],
        "ans": 3,
        "exp": "飲まされる (contraída) / 飲ませられる (completa). Frase: 上司に酒を飲まされた (Jōshi ni sake o nomasareta) = Mi jefe me obligó a beber alcohol."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Causativa-pasiva",
        "diff": "hard",
        "q": "Forma causativa-pasiva de する (ser obligado a hacer):",
        "opts": [
            "させられる",
            "される",
            "させる",
            "せられる"
        ],
        "ans": 0,
        "exp": "させられる = ser obligado a hacer. Frase: 毎日残業させられる (Mainichi zangyō saserareru) = Me obligan a hacer horas extras todos los días."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Causativa-pasiva",
        "diff": "hard",
        "q": "Forma causativa-pasiva de 来る (ser obligado a venir):",
        "opts": [
            "来させられる",
            "来られる",
            "来させる",
            "来れる"
        ],
        "ans": 0,
        "exp": "来させられる = ser obligado a venir. Frase: 日曜日に会社に来させられた (Nichiyōbi ni kaisha ni kosaserareta) = Me obligaron a venir a la empresa el domingo."
    },
    // YOJIJUKUGO (10)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Yojijukugo",
        "diff": "hard",
        "q": "¿Qué significa el yojijukugo '一期一会' (ichigo ichie)?",
        "opts": [
            "Una vez al año",
            "Cada encuentro es único e irrepetible",
            "Primera vez que te veo",
            "Un encuentro casual"
        ],
        "ans": 1,
        "exp": "一期一会 = 'un momento, un encuentro' - concepto de valorar cada encuentro como único."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Yojijukugo",
        "diff": "hard",
        "q": "¿Qué significa '自業自得' (jigō jitoku)?",
        "opts": [
            "Autosuficiencia",
            "Cosechas lo que siembras / pagas tus actos",
            "Trabajo en equipo",
            "Pereza"
        ],
        "ans": 1,
        "exp": "自業自得 = las consecuencias de tus propias acciones (usualmente negativas)."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Yojijukugo",
        "diff": "hard",
        "q": "¿Qué significa '十人十色' (jūnin toiro)?",
        "opts": [
            "Diez personas, diez colores",
            "Cada quien tiene su gusto",
            "Mucha variedad",
            "Todas las anteriores"
        ],
        "ans": 3,
        "exp": "十人十色 = cada persona tiene sus propias preferencias. Frase: 好みは十人十色だ (Konomi wa jūnin toiro da)."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Yojijukugo",
        "diff": "hard",
        "q": "¿Qué significa '以心伝心' (ishin denshin)?",
        "opts": [
            "Transmisión de corazón a corazón",
            "Telepatía",
            "Entenderse sin palabras",
            "Todas las anteriores"
        ],
        "ans": 3,
        "exp": "以心伝心 = comunicación sin palabras, entendimiento mutuo."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Yojijukugo",
        "diff": "hard",
        "q": "¿Qué significa '起死回生' (kishikaisei)?",
        "opts": [
            "Muerte y resurrección",
            "Recuperación milagrosa / volver de la muerte",
            "Vida después de la muerte",
            "Renacer"
        ],
        "ans": 1,
        "exp": "起死回生 = resucitar de una situación desesperada. Frase: 起死回生のホームラン (Kishikaisei no hōmuran) = Jonrón milagroso."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Yojijukugo",
        "diff": "hard",
        "q": "¿Qué significa '一念発起' (ichinen hokki)?",
        "opts": [
            "Olvidar algo",
            "Decidirse a hacer algo con determinación",
            "Tener miedo",
            "Perder la esperanza"
        ],
        "ans": 1,
        "exp": "一念発起 = decidirse firmemente a hacer algo. Frase: 一念発起して日本語を勉強する (Ichinen hokki shite nihongo o benkyō suru) = Me decidí firmemente a estudiar japonés."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Yojijukugo",
        "diff": "hard",
        "q": "¿Qué significa '順風満帆' (junpū manpan)?",
        "opts": [
            "Todo va mal",
            "Todo va viento en popa",
            "No hay esperanza",
            "Está complicado"
        ],
        "ans": 1,
        "exp": "順風満帆 = todo va viento en popa. Frase: 彼の人生は順風満帆だ (Kare no jinsei wa junpū manpan da) = Su vida va viento en popa."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Yojijukugo",
        "diff": "hard",
        "q": "¿Qué significa '天衣無縫' (ten'i muhō)?",
        "opts": [
            "Desordenado",
            "Perfecto/ natural sin esfuerzo",
            "Complicado",
            "Artificial"
        ],
        "ans": 1,
        "exp": "天衣無縫 = perfecto naturalmente, sin esfuerzo. Frase: 彼女の演技は天衣無縫だ (Kanojo no engi wa ten'i muhō da) = Su actuación es perfecta y natural."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Yojijukugo",
        "diff": "hard",
        "q": "¿Qué significa '七転八起' (nana korobi ya oki)?",
        "opts": [
            "Caerse y no levantarse",
            "Caerse siete veces, levantarse ocho (perseverancia)",
            "Perder siempre",
            "Ganar siempre"
        ],
        "ans": 1,
        "exp": "七転八起 = caerse siete veces, levantarse ocho - perseverancia. Frase: 七転八起の人生 (Nana korobi ya oki no jinsei) = Una vida de perseverancia."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Yojijukugo",
        "diff": "hard",
        "q": "¿Qué significa '自暴自棄' (jibō jiki)?",
        "opts": [
            "Esperanza",
            "Abandonarse a la desesperación",
            "Esfuerzo",
            "Optimismo"
        ],
        "ans": 1,
        "exp": "自暴自棄 = abandonarse a la desesperación. Frase: 失敗して自暴自棄になった (Shippai shite jibō jiki ni natta) = Fracasó y se abandonó a la desesperación."
    },
    // EXPRESIONES AVANZADAS (10)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '〜ざるを得ない'?",
        "opts": [
            "No poder evitar hacer algo",
            "Poder hacer",
            "Querer hacer",
            "Estar prohibido"
        ],
        "ans": 0,
        "exp": "ざるを得ない = 'no tener más remedio que...'. Frase: 行かざるを得ない (Ikazaru o enai) = No tengo más remedio que ir."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '〜に限らず'?",
        "opts": [
            "No solo... sino también",
            "Limitado a",
            "Excepto",
            "Incluyendo"
        ],
        "ans": 0,
        "exp": "に限らず = no solo X sino también. Frase: 子供に限らず、大人も楽しめる (Kodomo ni kagurazu, otona mo tanoshimeru) = No solo los niños, sino también los adultos pueden disfrutarlo."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué expresa '〜に違いない'?",
        "opts": [
            "Seguramente / no hay duda",
            "Tal vez",
            "Nunca",
            "A veces"
        ],
        "ans": 0,
        "exp": "に違いない = 'seguramente, sin duda'. Frase: 彼は日本人に違いない (Kare wa nihonjin ni chigai nai) = Seguramente él es japonés."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '〜にもかかわらず'?",
        "opts": [
            "A pesar de",
            "Debido a",
            "Además de",
            "Junto con"
        ],
        "ans": 0,
        "exp": "にもかかわらず = 'aunque, a pesar de'. Frase: 雨にもかかわらず、出かけた (Ame ni mo kakawarazu, dekaketa) = A pesar de la lluvia, salí."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '〜に伴って'?",
        "opts": [
            "A pesar de",
            "Junto con / a medida que",
            "En lugar de",
            "Sin"
        ],
        "ans": 1,
        "exp": "に伴って = junto con, a medida que. Frase: 経済の発展に伴って、生活水準も上がった (Keizai no hatten ni tomonatte, seikatsu suijun mo agatta) = Junto con el desarrollo económico, el nivel de vida también aumentó."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '〜に基づいて'?",
        "opts": [
            "Basado en",
            "A pesar de",
            "Además de",
            "En lugar de"
        ],
        "ans": 0,
        "exp": "に基づいて = basado en. Frase: 事実に基づいて判断する (Jijitsu ni motozuite handan suru) = Juzgar basado en los hechos."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '〜を問わず'?",
        "opts": [
            "Independientemente de",
            "A pesar de",
            "Además de",
            "Junto con"
        ],
        "ans": 0,
        "exp": "を問わず = independientemente de. Frase: 年齢を問わず参加できます (Nenrei o towazu sanka dekimasu) = Puedes participar independientemente de tu edad."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '〜にわたって'?",
        "opts": [
            "A través de / durante un periodo",
            "A pesar de",
            "Además de",
            "Junto con"
        ],
        "ans": 0,
        "exp": "にわたって = a través de / durante. Frase: 3年間にわたって研究した (San-nenkan ni watatte kenkyū shita) = Investigué durante 3 años."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '〜に加えて'?",
        "opts": [
            "A pesar de",
            "Además de",
            "Junto con",
            "En lugar de"
        ],
        "ans": 1,
        "exp": "に加えて = además de. Frase: 経験に加えて、語学力も必要です (Keiken ni kuwaete, gogakuryoku mo hitsuyō desu) = Además de experiencia, también se necesita habilidad lingüística."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '〜を契機に'?",
        "opts": [
            "A pesar de",
            "Con motivo de / como oportunidad para",
            "Además de",
            "Junto con"
        ],
        "ans": 1,
        "exp": "を契機に = con motivo de / como oportunidad para. Frase: 結婚を契機に引っ越した (Kekkon o keiki ni hikkoshita) = Me mudé con motivo del matrimonio."
    },
    // ONOMATOPEYAS (10)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Onomatopeyas",
        "diff": "hard",
        "q": "¿Qué significa 'どんどん'?",
        "opts": [
            "Lentamente",
            "Rápidamente / continuamente progresando",
            "Con cuidado",
            "Con fuerza"
        ],
        "ans": 1,
        "exp": "どんどん = rápida y continuamente. Frase: どんどん上手になる (Dondon jōzu ni naru) = Mejora rápidamente."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Onomatopeyas",
        "diff": "hard",
        "q": "¿Qué significa 'ぐっすり'?",
        "opts": [
            "Dormir profundamente",
            "Dormir poco",
            "Desvelarse",
            "Tener pesadillas"
        ],
        "ans": 0,
        "exp": "ぐっすり = profundamente (dormir). Frase: ぐっすり眠る (Gussuri nemuru) = Dormir profundamente."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Onomatopeyas",
        "diff": "hard",
        "q": "¿Qué significa 'ぴったり'?",
        "opts": [
            "Justo, exacto, perfectamente ajustado",
            "Suelto",
            "Roto",
            "Sucio"
        ],
        "ans": 0,
        "exp": "ぴったり = perfectamente ajustado. Frase: サイズがぴったり合う (Saizu ga pittari au) = La talla queda perfecta."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Onomatopeyas",
        "diff": "hard",
        "q": "¿Qué significa 'いらいら'?",
        "opts": [
            "Relajado",
            "Irritado / impaciente",
            "Triste",
            "Feliz"
        ],
        "ans": 1,
        "exp": "いらいら = irritación, impaciencia. Frase: 待ちくたびれていらいらする (Machikutabirete iraira suru) = Estoy irritado de tanto esperar."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Onomatopeyas",
        "diff": "hard",
        "q": "¿Qué significa 'わくわく'?",
        "opts": [
            "Aburrido",
            "Emocionado / con expectación",
            "Triste",
            "Enojado"
        ],
        "ans": 1,
        "exp": "わくわく = emoción anticipatoria. Frase: 明日の旅行を考えるとわくわくする (Ashita no ryokō o kangaeru to wakuwaku suru) = Solo de pensar en el viaje de mañana me emociono."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Onomatopeyas",
        "diff": "hard",
        "q": "¿Qué significa 'すっきり'?",
        "opts": [
            "Desordenado",
            "Limpio / refrescado / satisfactorio",
            "Sucio",
            "Pesado"
        ],
        "ans": 1,
        "exp": "すっきり = sensación de limpieza, claridad, alivio. Frase: 問題が解決してすっきりした (Mondai ga kaiketsu shite sukkiri shita) = El problema se resolvió y me siento aliviado."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Onomatopeyas",
        "diff": "hard",
        "q": "¿Qué significa 'がっかり'?",
        "opts": [
            "Emocionado",
            "Decepcionado / desilusionado",
            "Enojado",
            "Feliz"
        ],
        "ans": 1,
        "exp": "がっかり = decepcionado. Frase: 試験に落ちてがっかりした (Shiken ni ochite gakkari shita) = Me decepcioné por haber suspendido el examen."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Onomatopeyas",
        "diff": "hard",
        "q": "¿Qué significa 'のんびり'?",
        "opts": [
            "De prisa",
            "Tranquilo / relajado",
            "Enojado",
            "Triste"
        ],
        "ans": 1,
        "exp": "のんびり = tranquilo, relajado. Frase: 日曜日はのんびり過ごす (Nichiyōbi wa nonbiri sugosu) = Paso el domingo relajado."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Onomatopeyas",
        "diff": "hard",
        "q": "¿Qué significa 'ばったり'?",
        "opts": [
            "Lentamente",
            "De repente / encontrarse casualmente",
            "Con cuidado",
            "Con fuerza"
        ],
        "ans": 1,
        "exp": "ばったり = de repente, encontrarse casualmente. Frase: 街でばったり友達に会った (Machi de battari tomodachi ni atta) = Me encontré con un amigo de repente en la calle."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Onomatopeyas",
        "diff": "hard",
        "q": "¿Qué significa 'はっきり'?",
        "opts": [
            "Confusamente",
            "Claramente / definitivamente",
            "Silenciosamente",
            "Rápidamente"
        ],
        "ans": 1,
        "exp": "はっきり = claramente, definitivamente. Frase: はっきり言ってください (Hakkiri itte kudasai) = Por favor, dígalo claramente."
    },
    // LECTURAS ESPECIALES DE KANJI (5)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Lectura",
        "diff": "hard",
        "q": "¿Cómo se lee '一日' cuando significa 'primer día del mes'?",
        "opts": [
            "いちにち",
            "ついたち",
            "ひとひ",
            "いちじつ"
        ],
        "ans": 1,
        "exp": "一日 (primer día) = ついたち (tsuitachi). いちにち (ichinichi) es 'un día' (duración)."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Lectura",
        "diff": "hard",
        "q": "¿Cómo se lee '大人'?",
        "opts": [
            "おとな",
            "だいじん",
            "たいじん",
            "おおひと"
        ],
        "ans": 0,
        "exp": "大人 = おとな (otona) = adulto."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Lectura",
        "diff": "hard",
        "q": "¿Cómo se lee '今朝'?",
        "opts": [
            "いまあさ",
            "こんちょう",
            "けさ",
            "こんあさ"
        ],
        "ans": 2,
        "exp": "今朝 = けさ (kesa) = esta mañana."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Lectura",
        "diff": "hard",
        "q": "¿Cómo se lee '明日'?",
        "opts": [
            "あした",
            "あす",
            "みょうにち",
            "Todas las anteriores"
        ],
        "ans": 3,
        "exp": "明日 = あした (ashita), あす (asu), みょうにち (myōnichi). Todas son correctas."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Lectura",
        "diff": "hard",
        "q": "¿Cómo se lee '昨日'?",
        "opts": [
            "きのう",
            "さくじつ",
            "きょう",
            "A y B"
        ],
        "ans": 3,
        "exp": "昨日 = きのう (kinō) y さくじつ (sakujitsu). きょう (kyō) = hoy."
    },

    // ==================== EXPERTO (experto: true) - 30 preguntas ====================
    // JAPONÉS CLÁSICO (10)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Clásico",
        "diff": "expert",
        "q": "La terminación literaria ぬ equivale a:",
        "opts": [
            "ない (negativo moderno)",
            "たい (deseo)",
            "ます (formal)",
            "た (pasado)"
        ],
        "ans": 0,
        "exp": "ぬ es la negación literaria. Ej: 知らず = sin saber (知らない). 行かぬ = no ir."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Clásico",
        "diff": "expert",
        "q": "¿Qué expresa la terminación まい?",
        "opts": [
            "Intención negativa o probabilidad negativa",
            "Deseo positivo",
            "Obligación",
            "Permiso"
        ],
        "ans": 0,
        "exp": "まい = 'no voy a hacer' o 'probablemente no...'. Ej: 行くまい = no voy a ir / no creo que vaya."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Clásico",
        "diff": "expert",
        "q": "¿Qué significa '如く' (ごとく)?",
        "opts": [
            "Como (símil, estilo literario)",
            "Por lo tanto",
            "Sin embargo",
            "Incluso"
        ],
        "ans": 0,
        "exp": "ごとく = 'como, parecido a'. Ej: 風の如く = como el viento."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Clásico",
        "diff": "expert",
        "q": "ねば en 'ねばならない' equivale a:",
        "opts": [
            "なければ (si no)",
            "ながら (mientras)",
            "ても (aunque)",
            "だけ (solo)"
        ],
        "ans": 0,
        "exp": "ねば es forma literaria/formal de なければ. ねばならない = obligación (debo hacer)."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Clásico",
        "diff": "expert",
        "q": "En japonés clásico, ¿qué significa 〜けり?",
        "opts": [
            "Pasado narrativo",
            "Presente",
            "Futuro",
            "Imperativo"
        ],
        "ans": 0,
        "exp": "〜けり = pasado narrativo. Ej: 昔々、おじいさんがありけり (Mukashi mukashi, ojiisan ga arikeri) = Había una vez un abuelo."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Clásico",
        "diff": "expert",
        "q": "¿Qué significa la forma 〜なむ en japonés clásico?",
        "opts": [
            "Deseo/esperanza",
            "Orden",
            "Negación",
            "Pasado"
        ],
        "ans": 0,
        "exp": "〜なむ = expresa deseo. Ej: 幸あらなむ (Sachi aranamu) = Ojalá haya felicidad."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Clásico",
        "diff": "expert",
        "q": "En japonés clásico, ¿qué significa 〜つ?",
        "opts": [
            "Presente",
            "Pasado",
            "Futuro",
            "Imperativo"
        ],
        "ans": 1,
        "exp": "つ = sufijo de pasado clásico. Ej: 立ちつ (tachitsu) = se paró."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Clásico",
        "diff": "expert",
        "q": "¿Qué significa la terminación 〜らむ en clásico?",
        "opts": [
            "Conjetura sobre el presente",
            "Pasado",
            "Futuro",
            "Imperativo"
        ],
        "ans": 0,
        "exp": "〜らむ = conjetura sobre el presente o el pasado reciente. Ej: 誰か来たらむ (Dare ka kitaramu) = ¿Quién habrá venido?"
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Clásico",
        "diff": "expert",
        "q": "En japonés clásico, ¿qué significa 〜べし?",
        "opts": [
            "Debe / debería",
            "Negación",
            "Pasado",
            "Deseo"
        ],
        "ans": 0,
        "exp": "べし = 'debe hacer', 'debería'. Es la base de la forma 〜べき en japonés moderno. Ej: 読むべし (Yomu beshi) = Debes leer."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Clásico",
        "diff": "expert",
        "q": "¿Qué significa la terminación 〜めり en clásico?",
        "opts": [
            "Conjetura basada en evidencia directa",
            "Deseo",
            "Orden",
            "Negación"
        ],
        "ans": 0,
        "exp": "めり = conjetura basada en evidencia directa o visible. Ej: 雨降りめり (Ame furi meri) = Parece que va a llover (se ve por las nubes)."
    },
    // DIALECTOS REGIONALES (10)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos",
        "diff": "expert",
        "q": "En Kansai-ben, ¿qué significa 'めっちゃ'?",
        "opts": [
            "Poco",
            "Muy / mucho",
            "Nada",
            "Quizás"
        ],
        "ans": 1,
        "exp": "めっちゃ = 'muy, mucho' (Kansai-ben). Frase: めっちゃ美味しい (Meccha oishii) = Muy delicioso."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos",
        "diff": "expert",
        "q": "En Kansai-ben, ¿qué significa '〜へん'?",
        "opts": [
            "Negación",
            "Afirmación",
            "Pasado",
            "Futuro"
        ],
        "ans": 0,
        "exp": "へん = negación en Kansai-ben (equivale a 〜ない). Ej: 行かへん (ikahen) = no ir. Frase: 今日は行かへん (Kyō wa ikahen) = Hoy no voy."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos",
        "diff": "expert",
        "q": "En Tōhoku-ben, ¿qué significa '〜べ'?",
        "opts": [
            "Negación",
            "Volición/invitación",
            "Pasado",
            "Pregunta"
        ],
        "ans": 1,
        "exp": "べ = volitivo en Tōhoku-ben (equivale a 〜よう). Ej: 行くべ (iku be) = vamos / iré."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos",
        "diff": "expert",
        "q": "En Hiroshima-ben, ¿qué significa 'じゃけん'?",
        "opts": [
            "Porque",
            "Pero",
            "Y",
            "Entonces"
        ],
        "ans": 0,
        "exp": "じゃけん = porque (dialecto de Hiroshima). Frase: 今日は雨じゃけん、家におる (Kyō wa ame jaken, ie ni oru) = Como hoy llueve, estoy en casa."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos",
        "diff": "expert",
        "q": "En Hakata-ben (Fukuoka), ¿qué significa '〜と' al final de frase?",
        "opts": [
            "Partícula de citas",
            "Afirmación",
            "Negación",
            "Pregunta"
        ],
        "ans": 3,
        "exp": "〜と en Hakata-ben = partícula de pregunta (equivale a 〜か). Ej: 行くと？ (Iku to?) = ¿Vas? Frase: 何してると？ (Nani shiteru to?) = ¿Qué estás haciendo?"
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos",
        "diff": "expert",
        "q": "En dialecto de Nagoya, ¿qué significa 'だら'?",
        "opts": [
            "Probablemente / quizás",
            "Negación",
            "Afirmación",
            "Orden"
        ],
        "ans": 0,
        "exp": "だら = 'probablemente' (Nagoya-ben). Ej: 明日は雨だら (Ashita wa ame dara) = Mañana probablemente lloverá."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos",
        "diff": "expert",
        "q": "En dialecto de Okinawa (Uchināguchi), ¿qué significa 'ちゅ'?",
        "opts": [
            "Persona (sufijo)",
            "Negación",
            "Afirmación",
            "Pasado"
        ],
        "ans": 0,
        "exp": "ちゅ = sufijo que significa 'persona' en Okinawa. Ej: ウチナンチュ (Uchinānchu) = persona de Okinawa."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos",
        "diff": "expert",
        "q": "En dialecto de Hokkaidō, ¿qué significa 'なまら'?",
        "opts": [
            "Poco",
            "Muy / bastante",
            "Nada",
            "Quizás"
        ],
        "ans": 1,
        "exp": "なまら = 'muy, bastante' (Hokkaidō-ben). Frase: なまら寒い (Namara samui) = Hace mucho frío."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos",
        "diff": "expert",
        "q": "En Kansai-ben, ¿qué significa 'おおきに'?",
        "opts": [
            "Gracias",
            "Lo siento",
            "Buenos días",
            "Adiós"
        ],
        "ans": 0,
        "exp": "おおきに = gracias (Kansai-ben). Frase: おおきに、助かりました (Ōkini, tasukarimashita) = Gracias, me ayudaste mucho."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos",
        "diff": "expert",
        "q": "En Kansai-ben, ¿qué significa 'ほんま'?",
        "opts": [
            "De verdad / realmente",
            "Falso",
            "Quizás",
            "Nunca"
        ],
        "ans": 0,
        "exp": "ほんま = 'de verdad, realmente' (Kansai-ben, equivale a 本当). Frase: ほんまに？ (Honma ni?) = ¿De verdad?"
    },
    // KEIGO ULTRAFORMAL Y EMPRESARIAL (10)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Ultra",
        "diff": "expert",
        "q": "¿Qué significa 'お世話になっております'?",
        "opts": [
            "Lo siento mucho",
            "Gracias por su ayuda (negocios)",
            "Buenos días",
            "Adiós"
        ],
        "ans": 1,
        "exp": "お世話になっております = 'Gracias por su ayuda' (frase de negocios). Frase: いつもお世話になっております (Itsumo osewa ni natte orimasu) = Siempre agradezco su ayuda."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Ultra",
        "diff": "expert",
        "q": "¿Qué significa '申し訳ございません'?",
        "opts": [
            "Gracias",
            "Lo siento mucho (muy formal)",
            "Entendido",
            "Por favor"
        ],
        "ans": 1,
        "exp": "申し訳ございません = 'lo siento mucho' (muy formal). Frase: ご迷惑をおかけして申し訳ございません (Gomeiwaku o okake shite mōshiwake gozaimasen) = Lamento mucho haberle causado problemas."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Ultra",
        "diff": "expert",
        "q": "¿Qué significa 'かしこまりました'?",
        "opts": [
            "No entiendo",
            "Entendido (formal)",
            "Lo siento",
            "Gracias"
        ],
        "ans": 1,
        "exp": "かしこまりました = 'entendido' (formal). Frase: かしこまりました、すぐに確認します (Kashikomarimashita, sugu ni kakunin shimasu) = Entendido, lo confirmaré de inmediato."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Ultra",
        "diff": "expert",
        "q": "¿Qué significa '恐れ入ります'?",
        "opts": [
            "Gracias",
            "Disculpe / Lo siento (muy formal)",
            "Entendido",
            "Buenos días"
        ],
        "ans": 1,
        "exp": "恐れ入ります = 'disculpe, lo siento' (muy reverencial). Frase: 恐れ入りますが、もう一度お願いします (Osore irimasu ga, mō ichido onegai shimasu) = Disculpe, pero por favor repítalo."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Ultra",
        "diff": "expert",
        "q": "¿Qué significa '拝承いたしました'?",
        "opts": [
            "No entiendo",
            "Entendido (muy formal)",
            "Lo siento",
            "Gracias"
        ],
        "ans": 1,
        "exp": "拝承いたしました = 'entendido' (nivel ultraformal). Frase: ご連絡拝承いたしました (Go-renraku haishō itashimashita) = Recibí su mensaje."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Ultra",
        "diff": "expert",
        "q": "¿Qué significa 'ご高配を賜り'?",
        "opts": [
            "Recibir el apoyo de alguien (formal)",
            "Dar apoyo",
            "Olvidar",
            "Ignorar"
        ],
        "ans": 0,
        "exp": "ご高配を賜り = 'recibir el apoyo/consideración' (muy formal). Frase: ご高配を賜り、ありがとうございます (Go-kōhai o tamawari, arigatō gozaimasu) = Agradezco su apoyo."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Ultra",
        "diff": "expert",
        "q": "¿Qué significa '平にご容赦ください'?",
        "opts": [
            "Por favor, disculpe (muy formal y humilde)",
            "Gracias",
            "Entendido",
            "Adiós"
        ],
        "ans": 0,
        "exp": "平にご容赦ください = 'por favor, disculpe' (muy formal). Frase: 遅くなりまして、平にご容赦ください (Osoku narimashite, taira ni go-yōsha kudasai) = Por llegar tarde, les pido disculpas."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Ultra",
        "diff": "expert",
        "q": "¿Qué significa '恐悦至極に存じます'?",
        "opts": [
            "Estoy muy contento/gratamente sorprendido (muy formal)",
            "Estoy triste",
            "Estoy enojado",
            "Estoy confundido"
        ],
        "ans": 0,
        "exp": "恐悦至極に存じます = 'estoy muy agradecido y contento' (muy formal). Frase: ご来訪、恐悦至極に存じます (Go-rainō, kyōetsu shigoku ni zonjimasu) = Estoy muy agradecido por su visita."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Ultra",
        "diff": "expert",
        "q": "¿Qué significa '謹んで申し上げます'?",
        "opts": [
            "Me atrevo a decir / respetuosamente digo",
            "Lo siento",
            "Gracias",
            "Adiós"
        ],
        "ans": 0,
        "exp": "謹んで申し上げます = 'me atrevo a decir respetuosamente'. Frase: 謹んで新年のご挨拶を申し上げます (Tsutsushinde shinnen no go-aisatsu o mōshiagemasu) = Respetuosamente ofrezco mis saludos de Año Nuevo."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Ultra",
        "diff": "expert",
        "q": "¿Qué significa 'ご査収のほどお願い申し上げます'?",
        "opts": [
            "Por favor, revise/confirme (formal)",
            "Lo siento",
            "Gracias",
            "Adiós"
        ],
        "ans": 0,
        "exp": "ご査収のほどお願い申し上げます = 'por favor, revise/confirme' (formal). Frase: 書類をご査収のほどお願い申し上げます (Shorui o go-sashū no hodo onegai mōshiagemasu) = Por favor, revise los documentos."
    }

    ];

export default preguntas_japones;