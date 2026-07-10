const preguntas_chino = [
    // ==================== BÁSICO (profe: true) - 80 preguntas ====================
    // TONOS (10)
    {
        "profe": true,
        "unit": "Tonos",
        "diff": "easy",
        "q": "¿Qué tono es 'mā' (妈)?",
        "opts": [
            "Primer tono (alto y plano)",
            "Segundo tono (ascendente)",
            "Tercer tono (descendente-ascendente)",
            "Cuarto tono (descendente)"
        ],
        "ans": 0,
        "exp": "mā (妈) = mamá. Primer tono: alto y plano. Frase: 妈妈 (māma) = mamá."
    },
    {
        "profe": true,
        "unit": "Tonos",
        "diff": "easy",
        "q": "¿Qué tono es 'má' (麻)?",
        "opts": [
            "Primer tono (alto y plano)",
            "Segundo tono (ascendente)",
            "Tercer tono (descendente-ascendente)",
            "Cuarto tono (descendente)"
        ],
        "ans": 1,
        "exp": "má (麻) = cáñamo/sésamo. Segundo tono: ascendente. Frase: 芝麻 (zhīma) = sésamo."
    },
    {
        "profe": true,
        "unit": "Tonos",
        "diff": "easy",
        "q": "¿Qué tono es 'mǎ' (马)?",
        "opts": [
            "Primer tono (alto y plano)",
            "Segundo tono (ascendente)",
            "Tercer tono (descendente-ascendente)",
            "Cuarto tono (descendente)"
        ],
        "ans": 2,
        "exp": "mǎ (马) = caballo. Tercer tono: primero baja, luego sube. Frase: 骑马 (qímǎ) = montar a caballo."
    },
    {
        "profe": true,
        "unit": "Tonos",
        "diff": "easy",
        "q": "¿Qué tono es 'mà' (骂)?",
        "opts": [
            "Primer tono (alto y plano)",
            "Segundo tono (ascendente)",
            "Tercer tono (descendente-ascendente)",
            "Cuarto tono (descendente)"
        ],
        "ans": 3,
        "exp": "mà (骂) = regañar. Cuarto tono: descendente y fuerte. Frase: 骂人 (màrén) = regañar a alguien."
    },
    {
        "profe": true,
        "unit": "Tonos",
        "diff": "easy",
        "q": "¿Cuál es el orden correcto de los tonos en mandarín?",
        "opts": [
            "Alto-plano, ascendente, descendente-ascendente, descendente",
            "Ascendente, descendente, alto, bajo",
            "Descendente, ascendente, plano, bajo",
            "Bajo, medio, alto, descendente"
        ],
        "ans": 0,
        "exp": "1° tono: alto plano (¯), 2° tono: ascendente (ˊ), 3° tono: descendente-ascendente (ˇ), 4° tono: descendente (ˋ)."
    },
    {
        "profe": true,
        "unit": "Tonos",
        "diff": "easy",
        "q": "¿Qué es el tono neutro?",
        "opts": [
            "Tono sin marca, corto y ligero",
            "Un quinto tono",
            "Otro nombre para el primer tono",
            "Tono ascendente"
        ],
        "ans": 0,
        "exp": "Tono neutro (轻声 qīngshēng): se pronuncia corto, ligero y sin énfasis. Ej: 了 (le), 吗 (ma), 的 (de)."
    },
    {
        "profe": true,
        "unit": "Tonos",
        "diff": "easy",
        "q": "¿Cómo se escribe el primer tono en pinyin?",
        "opts": [
            "ā",
            "á",
            "ǎ",
            "à"
        ],
        "ans": 0,
        "exp": "Primer tono: ā (macrón). Ejemplo: 妈 (mā) = mamá."
    },
    {
        "profe": true,
        "unit": "Tonos",
        "diff": "easy",
        "q": "¿Cómo se escribe el segundo tono en pinyin?",
        "opts": [
            "ā",
            "á",
            "ǎ",
            "à"
        ],
        "ans": 1,
        "exp": "Segundo tono: á (acento agudo). Ejemplo: 麻 (má) = cáñamo."
    },
    {
        "profe": true,
        "unit": "Tonos",
        "diff": "easy",
        "q": "¿Cómo se escribe el tercer tono en pinyin?",
        "opts": [
            "ā",
            "á",
            "ǎ",
            "à"
        ],
        "ans": 2,
        "exp": "Tercer tono: ǎ (carón). Ejemplo: 马 (mǎ) = caballo."
    },
    {
        "profe": true,
        "unit": "Tonos",
        "diff": "easy",
        "q": "¿Cómo se escribe el cuarto tono en pinyin?",
        "opts": [
            "ā",
            "á",
            "ǎ",
            "à"
        ],
        "ans": 3,
        "exp": "Cuarto tono: à (acento grave). Ejemplo: 骂 (mà) = regañar."
    },
    // PINYIN - INICIALES (10)
    {
        "profe": true,
        "unit": "Pinyin",
        "diff": "easy",
        "q": "¿Cómo se pronuncia 'zh' en pinyin?",
        "opts": [
            "Como 'j' en inglés",
            "Como 'ch' pero sin aspiración",
            "Como 'dr' en 'drink'",
            "Como 'z' en 'zoo'"
        ],
        "ans": 2,
        "exp": "zh = similar a 'j' en inglés pero con la lengua en el paladar. Frase: 中国 (Zhōngguó) = China."
    },
    {
        "profe": true,
        "unit": "Pinyin",
        "diff": "easy",
        "q": "¿Cómo se pronuncia 'q' en pinyin?",
        "opts": [
            "Como 'k'",
            "Como 'ch' aspirada (como 'cheese')",
            "Como 'sh'",
            "Como 'ts'"
        ],
        "ans": 1,
        "exp": "q = como 'ch' aspirada (lengua en el paladar, con aspiración fuerte). Frase: 七 (qī) = siete."
    },
    {
        "profe": true,
        "unit": "Pinyin",
        "diff": "easy",
        "q": "¿Cómo se pronuncia 'x' en pinyin?",
        "opts": [
            "Como 'sh' (lengua detrás de dientes inferiores)",
            "Como 'ks'",
            "Como 'z'",
            "Como 'j'"
        ],
        "ans": 0,
        "exp": "x = como 'sh' pero con la lengua detrás de los dientes inferiores. Frase: 谢谢 (xièxie) = gracias."
    },
    {
        "profe": true,
        "unit": "Pinyin",
        "diff": "easy",
        "q": "¿Cómo se pronuncia 'c' en pinyin?",
        "opts": [
            "Como 's'",
            "Como 'ts' (como 'tsunami')",
            "Como 'ch'",
            "Como 'z'"
        ],
        "ans": 1,
        "exp": "c = como 'ts' en 'tsunami' o 'pizza'. Frase: 菜 (cài) = verdura/comida."
    },
    {
        "profe": true,
        "unit": "Pinyin",
        "diff": "easy",
        "q": "¿Cómo se pronuncia 'z' en pinyin?",
        "opts": [
            "Como 'dz' (sin aspiración)",
            "Como 'z' en inglés",
            "Como 's'",
            "Como 'j'"
        ],
        "ans": 0,
        "exp": "z = como 'dz' en 'adze', sin aspiración. Frase: 早 (zǎo) = temprano."
    },
    {
        "profe": true,
        "unit": "Pinyin",
        "diff": "easy",
        "q": "¿Cómo se pronuncia 'ch' en pinyin?",
        "opts": [
            "Como 'ch' en 'cheese' (aspirada)",
            "Como 'j'",
            "Como 'sh'",
            "Como 'ts'"
        ],
        "ans": 0,
        "exp": "ch = como 'ch' en 'cheese' con aspiración fuerte. Frase: 吃 (chī) = comer."
    },
    {
        "profe": true,
        "unit": "Pinyin",
        "diff": "easy",
        "q": "¿Cómo se pronuncia 'sh' en pinyin?",
        "opts": [
            "Como 'sh' en 'she'",
            "Como 's'",
            "Como 'ch'",
            "Como 'j'"
        ],
        "ans": 0,
        "exp": "sh = como 'sh' en 'she'. Frase: 水 (shuǐ) = agua."
    },
    {
        "profe": true,
        "unit": "Pinyin",
        "diff": "easy",
        "q": "¿Cómo se pronuncia 'r' en pinyin?",
        "opts": [
            "Como 'r' en inglés",
            "Como 'r' francesa",
            "Como 'z'",
            "Como 'j'"
        ],
        "ans": 0,
        "exp": "r = similar a la 'r' inglesa pero con la lengua más adelante. Frase: 人 (rén) = persona."
    },
    {
        "profe": true,
        "unit": "Pinyin",
        "diff": "easy",
        "q": "¿Cómo se pronuncia 'ü' en pinyin?",
        "opts": [
            "Como 'u'",
            "Como 'u' francesa (labios redondeados, lengua adelante)",
            "Como 'i'",
            "Como 'o'"
        ],
        "ans": 1,
        "exp": "ü = se pronuncia como la 'u' francesa. Aparece después de j, q, x, y. Frase: 鱼 (yú) = pescado (en realidad se escribe yu)."
    },
    {
        "profe": true,
        "unit": "Pinyin",
        "diff": "easy",
        "q": "¿Cómo se pronuncia 'er' en pinyin?",
        "opts": [
            "Como 'er' en 'her' (inglés)",
            "Como 'ar'",
            "Como 'or'",
            "Como 'ir'"
        ],
        "ans": 0,
        "exp": "er = como 'er' en 'her' del inglés. Frase: 二 (èr) = dos."
    },
    // SALUDOS (10)
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Cómo se dice 'hola' en chino mandarín?",
        "opts": [
            "再见",
            "你好",
            "谢谢",
            "对不起"
        ],
        "ans": 1,
        "exp": "你好 = 'nǐ hǎo'. Frase: 你好，你好吗？ (Nǐ hǎo, nǐ hǎo ma?) = Hola, ¿cómo estás?"
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Cómo se dice 'gracias' en chino?",
        "opts": [
            "你好",
            "再见",
            "谢谢",
            "对不起"
        ],
        "ans": 2,
        "exp": "谢谢 = 'xièxie'. Frase: 谢谢你 (Xièxie nǐ) = Gracias a ti."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Cómo se dice 'adiós' en chino?",
        "opts": [
            "你好",
            "再见",
            "谢谢",
            "对不起"
        ],
        "ans": 1,
        "exp": "再见 = 'zàijiàn'. Frase: 明天见 (Míngtiān jiàn) = Hasta mañana."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Cómo se dice 'lo siento' / 'disculpa' en chino?",
        "opts": [
            "你好",
            "再见",
            "谢谢",
            "对不起"
        ],
        "ans": 3,
        "exp": "对不起 = 'duìbuqǐ'. Frase: 对不起，我迟到了 (Duìbuqǐ, wǒ chídào le) = Lo siento, llegué tarde."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Cómo se pregunta '¿cómo estás?' en chino?",
        "opts": [
            "你好吗？",
            "你叫什么？",
            "你多大了？",
            "你是哪国人？"
        ],
        "ans": 0,
        "exp": "你好吗？ = 'Nǐ hǎo ma?' Frase: 你好吗？我很好 (Nǐ hǎo ma? Wǒ hěn hǎo) = ¿Cómo estás? Estoy muy bien."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Cómo se dice 'buenos días' en chino?",
        "opts": [
            "早上好",
            "下午好",
            "晚上好",
            "晚安"
        ],
        "ans": 0,
        "exp": "早上好 = 'zǎoshang hǎo'. Frase: 早上好，今天天气不错 (Zǎoshang hǎo, jīntiān tiānqì bùcuò) = Buenos días, hoy hace buen tiempo."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Cómo se dice 'buenas noches' (al saludar)?",
        "opts": [
            "早上好",
            "下午好",
            "晚上好",
            "晚安"
        ],
        "ans": 2,
        "exp": "晚上好 = 'wǎnshàng hǎo'. Frase: 晚上好，欢迎光临 (Wǎnshàng hǎo, huānyíng guānglín) = Buenas noches, bienvenido."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Cómo se dice 'buenas noches' (antes de dormir)?",
        "opts": [
            "早上好",
            "下午好",
            "晚上好",
            "晚安"
        ],
        "ans": 3,
        "exp": "晚安 = 'wǎn'ān'. Frase: 晚安，做个好梦 (Wǎn'ān, zuò gè hǎo mèng) = Buenas noches, que tengas dulces sueños."
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Qué significa '好久不见'?",
        "opts": [
            "Hola",
            "Adiós",
            "Cuánto tiempo sin verte",
            "Gracias"
        ],
        "ans": 2,
        "exp": "好久不见 = 'hǎo jiǔ bù jiàn'. Frase: 好久不见，你还好吗？ (Hǎo jiǔ bù jiàn, nǐ hái hǎo ma?) = ¡Cuánto tiempo sin verte! ¿Cómo estás?"
    },
    {
        "profe": true,
        "unit": "Saludos",
        "diff": "easy",
        "q": "¿Cómo se responde a 'gracias'?",
        "opts": [
            "没关系",
            "不客气",
            "对不起",
            "你好"
        ],
        "ans": 1,
        "exp": "不客气 = 'bù kèqì' (de nada). Frase: - 谢谢 - 不客气 (Xièxie - Bù kèqì) = Gracias - De nada."
    },
    // PRONOMBRES (10)
    {
        "profe": true,
        "unit": "Pronombres",
        "diff": "easy",
        "q": "¿Cómo se dice 'yo' en chino?",
        "opts": [
            "你 (nǐ)",
            "我 (wǒ)",
            "他 (tā)",
            "她 (tā)"
        ],
        "ans": 1,
        "exp": "我 = 'wǒ'. Frase: 我是中国人 (Wǒ shì Zhōngguó rén) = Soy chino."
    },
    {
        "profe": true,
        "unit": "Pronombres",
        "diff": "easy",
        "q": "¿Cómo se dice 'tú' en chino?",
        "opts": [
            "我 (wǒ)",
            "你 (nǐ)",
            "他 (tā)",
            "她 (tā)"
        ],
        "ans": 1,
        "exp": "你 = 'nǐ'. Frase: 你好吗？ (Nǐ hǎo ma?) = ¿Cómo estás?"
    },
    {
        "profe": true,
        "unit": "Pronombres",
        "diff": "easy",
        "q": "¿Cómo se dice 'él' en chino?",
        "opts": [
            "我 (wǒ)",
            "你 (nǐ)",
            "他 (tā)",
            "她 (tā)"
        ],
        "ans": 2,
        "exp": "他 = 'tā'. Frase: 他是我的老师 (Tā shì wǒ de lǎoshī) = Él es mi profesor."
    },
    {
        "profe": true,
        "unit": "Pronombres",
        "diff": "easy",
        "q": "¿Cómo se dice 'ella' en chino?",
        "opts": [
            "我 (wǒ)",
            "你 (nǐ)",
            "他 (tā)",
            "她 (tā)"
        ],
        "ans": 3,
        "exp": "她 = 'tā' (mismo sonido que 他 pero con radical femenino). Frase: 她是我的妈妈 (Tā shì wǒ de māma) = Ella es mi mamá."
    },
    {
        "profe": true,
        "unit": "Pronombres",
        "diff": "easy",
        "q": "¿Cómo se dice 'nosotros' en chino?",
        "opts": [
            "我们 (wǒmen)",
            "你们 (nǐmen)",
            "他们 (tāmen)",
            "她们 (tāmen)"
        ],
        "ans": 0,
        "exp": "我们 = 'wǒmen'. Frase: 我们一起去 (Wǒmen yīqǐ qù) = Vamos juntos."
    },
    {
        "profe": true,
        "unit": "Pronombres",
        "diff": "easy",
        "q": "¿Cómo se dice 'vosotros' en chino?",
        "opts": [
            "我们 (wǒmen)",
            "你们 (nǐmen)",
            "他们 (tāmen)",
            "她们 (tāmen)"
        ],
        "ans": 1,
        "exp": "你们 = 'nǐmen'. Frase: 你们好 (Nǐmen hǎo) = Hola a todos."
    },
    {
        "profe": true,
        "unit": "Pronombres",
        "diff": "easy",
        "q": "¿Cómo se dice 'ellos' en chino?",
        "opts": [
            "我们 (wǒmen)",
            "你们 (nǐmen)",
            "他们 (tāmen)",
            "她们 (tāmen)"
        ],
        "ans": 2,
        "exp": "他们 = 'tāmen'. Frase: 他们是我的同学 (Tāmen shì wǒ de tóngxué) = Ellos son mis compañeros."
    },
    {
        "profe": true,
        "unit": "Pronombres",
        "diff": "easy",
        "q": "¿Qué significa '您'?",
        "opts": [
            "Tú (formal/respetuoso)",
            "Yo",
            "Él",
            "Ella"
        ],
        "ans": 0,
        "exp": "您 = 'nín' (usted, forma respetuosa). Frase: 您好 (Nín hǎo) = Hola (formal)."
    },
    {
        "profe": true,
        "unit": "Pronombres",
        "diff": "easy",
        "q": "¿Cómo se dice 'esto' en chino?",
        "opts": [
            "这 (zhè)",
            "那 (nà)",
            "哪 (nǎ)",
            "每 (měi)"
        ],
        "ans": 0,
        "exp": "这 = 'zhè' (esto). Frase: 这是什么？ (Zhè shì shénme?) = ¿Qué es esto?"
    },
    {
        "profe": true,
        "unit": "Pronombres",
        "diff": "easy",
        "q": "¿Cómo se dice 'eso/aquello' en chino?",
        "opts": [
            "这 (zhè)",
            "那 (nà)",
            "哪 (nǎ)",
            "每 (měi)"
        ],
        "ans": 1,
        "exp": "那 = 'nà' (eso/aquello). Frase: 那是什么？ (Nà shì shénme?) = ¿Qué es eso?"
    },
    // VERBOS BÁSICOS (10)
    {
        "profe": true,
        "unit": "Verbos",
        "diff": "easy",
        "q": "¿Cómo se dice 'ser/estar' en chino?",
        "opts": [
            "是 (shì)",
            "有 (yǒu)",
            "在 (zài)",
            "去 (qù)"
        ],
        "ans": 0,
        "exp": "是 = 'shì' (ser/estar, usado para equivalencia). Frase: 我是学生 (Wǒ shì xuésheng) = Soy estudiante."
    },
    {
        "profe": true,
        "unit": "Verbos",
        "diff": "easy",
        "q": "¿Cómo se dice 'tener/haber' en chino?",
        "opts": [
            "是 (shì)",
            "有 (yǒu)",
            "在 (zài)",
            "去 (qù)"
        ],
        "ans": 1,
        "exp": "有 = 'yǒu'. Frase: 我有一个哥哥 (Wǒ yǒu yī gè gēge) = Tengo un hermano mayor."
    },
    {
        "profe": true,
        "unit": "Verbos",
        "diff": "easy",
        "q": "¿Cómo se dice 'estar en (un lugar)' en chino?",
        "opts": [
            "是 (shì)",
            "有 (yǒu)",
            "在 (zài)",
            "去 (qù)"
        ],
        "ans": 2,
        "exp": "在 = 'zài' (estar en un lugar). Frase: 我在家 (Wǒ zài jiā) = Estoy en casa."
    },
    {
        "profe": true,
        "unit": "Verbos",
        "diff": "easy",
        "q": "¿Cómo se dice 'ir' en chino?",
        "opts": [
            "来 (lái)",
            "去 (qù)",
            "走 (zǒu)",
            "跑 (pǎo)"
        ],
        "ans": 1,
        "exp": "去 = 'qù'. Frase: 我去学校 (Wǒ qù xuéxiào) = Voy a la escuela."
    },
    {
        "profe": true,
        "unit": "Verbos",
        "diff": "easy",
        "q": "¿Cómo se dice 'venir' en chino?",
        "opts": [
            "来 (lái)",
            "去 (qù)",
            "走 (zǒu)",
            "跑 (pǎo)"
        ],
        "ans": 0,
        "exp": "来 = 'lái'. Frase: 请来我家 (Qǐng lái wǒ jiā) = Por favor ven a mi casa."
    },
    {
        "profe": true,
        "unit": "Verbos",
        "diff": "easy",
        "q": "¿Cómo se dice 'comer' en chino?",
        "opts": [
            "吃 (chī)",
            "喝 (hē)",
            "做 (zuò)",
            "看 (kàn)"
        ],
        "ans": 0,
        "exp": "吃 = 'chī'. Frase: 吃饭了吗？ (Chīfàn le ma?) = ¿Ya comiste?"
    },
    {
        "profe": true,
        "unit": "Verbos",
        "diff": "easy",
        "q": "¿Cómo se dice 'beber' en chino?",
        "opts": [
            "吃 (chī)",
            "喝 (hē)",
            "做 (zuò)",
            "看 (kàn)"
        ],
        "ans": 1,
        "exp": "喝 = 'hē'. Frase: 喝水 (Hē shuǐ) = Beber agua."
    },
    {
        "profe": true,
        "unit": "Verbos",
        "diff": "easy",
        "q": "¿Cómo se dice 'ver/mirar' en chino?",
        "opts": [
            "吃 (chī)",
            "喝 (hē)",
            "做 (zuò)",
            "看 (kàn)"
        ],
        "ans": 3,
        "exp": "看 = 'kàn'. Frase: 看电影 (Kàn diànyǐng) = Ver una película."
    },
    {
        "profe": true,
        "unit": "Verbos",
        "diff": "easy",
        "q": "¿Cómo se dice 'hacer' en chino?",
        "opts": [
            "吃 (chī)",
            "喝 (hē)",
            "做 (zuò)",
            "看 (kàn)"
        ],
        "ans": 2,
        "exp": "做 = 'zuò'. Frase: 做什么？ (Zuò shénme?) = ¿Qué haces?"
    },
    {
        "profe": true,
        "unit": "Verbos",
        "diff": "easy",
        "q": "¿Cómo se dice 'hablar/decir' en chino?",
        "opts": [
            "说 (shuō)",
            "听 (tīng)",
            "读 (dú)",
            "写 (xiě)"
        ],
        "ans": 0,
        "exp": "说 = 'shuō'. Frase: 说中文 (Shuō Zhōngwén) = Hablar chino."
    },
    // PREGUNTAS (10)
    {
        "profe": true,
        "unit": "Preguntas",
        "diff": "easy",
        "q": "¿Qué significa '什么'?",
        "opts": [
            "Quién",
            "Qué",
            "Dónde",
            "Cuándo"
        ],
        "ans": 1,
        "exp": "什么 = 'shénme' (qué). Frase: 你叫什么名字？ (Nǐ jiào shénme míngzi?) = ¿Cómo te llamas?"
    },
    {
        "profe": true,
        "unit": "Preguntas",
        "diff": "easy",
        "q": "¿Qué significa '谁'?",
        "opts": [
            "Qué",
            "Quién",
            "Dónde",
            "Por qué"
        ],
        "ans": 1,
        "exp": "谁 = 'shéi' / 'shuí' (quién). Frase: 他是谁？ (Tā shì shéi?) = ¿Quién es él?"
    },
    {
        "profe": true,
        "unit": "Preguntas",
        "diff": "easy",
        "q": "¿Qué significa '哪里'?",
        "opts": [
            "Qué",
            "Quién",
            "Dónde",
            "Cuándo"
        ],
        "ans": 2,
        "exp": "哪里 = 'nǎlǐ' (dónde). Frase: 厕所在哪里？ (Cèsuǒ zài nǎlǐ?) = ¿Dónde está el baño?"
    },
    {
        "profe": true,
        "unit": "Preguntas",
        "diff": "easy",
        "q": "¿Qué significa '为什么'?",
        "opts": [
            "Qué",
            "Quién",
            "Dónde",
            "Por qué"
        ],
        "ans": 3,
        "exp": "为什么 = 'wèishénme' (por qué). Frase: 你为什么学习中文？ (Nǐ wèishénme xuéxí Zhōngwén?) = ¿Por qué estudias chino?"
    },
    {
        "profe": true,
        "unit": "Preguntas",
        "diff": "easy",
        "q": "¿Qué significa '什么时候'?",
        "opts": [
            "Por qué",
            "Cómo",
            "Cuándo",
            "Cuánto"
        ],
        "ans": 2,
        "exp": "什么时候 = 'shénme shíhòu' (cuándo). Frase: 你什么时候来？ (Nǐ shénme shíhòu lái?) = ¿Cuándo vienes?"
    },
    {
        "profe": true,
        "unit": "Preguntas",
        "diff": "easy",
        "q": "¿Cómo se dice '¿cómo?' en chino?",
        "opts": [
            "怎么 (zěnme)",
            "什么 (shénme)",
            "哪里 (nǎlǐ)",
            "谁 (shéi)"
        ],
        "ans": 0,
        "exp": "怎么 = 'zěnme' (cómo). Frase: 这个怎么读？ (Zhège zěnme dú?) = ¿Cómo se lee esto?"
    },
    {
        "profe": true,
        "unit": "Preguntas",
        "diff": "easy",
        "q": "¿Qué significa '几'?",
        "opts": [
            "Cuántos (números pequeños)",
            "Cuánto dinero",
            "Dónde",
            "Cuándo"
        ],
        "ans": 0,
        "exp": "几 = 'jǐ' (cuántos, para números generalmente <10). Frase: 你有几个哥哥？ (Nǐ yǒu jǐ gè gēge?) = ¿Cuántos hermanos mayores tienes?"
    },
    {
        "profe": true,
        "unit": "Preguntas",
        "diff": "easy",
        "q": "¿Qué significa '多少'?",
        "opts": [
            "Cuántos (cualquier número)",
            "Cuándo",
            "Dónde",
            "Por qué"
        ],
        "ans": 0,
        "exp": "多少 = 'duōshǎo' (cuántos, para números grandes o precios). Frase: 多少钱？ (Duōshǎo qián?) = ¿Cuánto cuesta?"
    },
    {
        "profe": true,
        "unit": "Preguntas",
        "diff": "easy",
        "q": "La partícula de pregunta '吗' se añade al final para...",
        "opts": [
            "Hacer una pregunta sí/no",
            "Hacer una pregunta abierta",
            "Expresar duda",
            "Indicar sorpresa"
        ],
        "ans": 0,
        "exp": "吗 = 'ma' (partícula para preguntas sí/no). Frase: 你好吗？ (Nǐ hǎo ma?) = ¿Estás bien?"
    },
    {
        "profe": true,
        "unit": "Preguntas",
        "diff": "easy",
        "q": "¿Qué significa '呢' al final de una frase?",
        "opts": [
            "Pregunta sobre el tema",
            "Afirmación",
            "Negación",
            "Exclamación"
        ],
        "ans": 0,
        "exp": "呢 = 'ne' (partícula para preguntas sobre el tema, '¿y...?'). Frase: 我很好，你呢？ (Wǒ hěn hǎo, nǐ ne?) = Estoy bien, ¿y tú?"
    },

    // ==================== INTERMEDIO (intermedio: true) - 100 preguntas ====================
    // MEDIDAS Y CONTADORES (10)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Medidas",
        "diff": "medium",
        "q": "¿Cuál es el contador genérico en chino?",
        "opts": [
            "个 (gè)",
            "只 (zhī)",
            "条 (tiáo)",
            "张 (zhāng)"
        ],
        "ans": 0,
        "exp": "个 = 'gè' (contador genérico para personas, objetos sin contador específico). Frase: 一个人 (yī gè rén) = una persona."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Medidas",
        "diff": "medium",
        "q": "¿Qué contador se usa para animales pequeños?",
        "opts": [
            "个 (gè)",
            "只 (zhī)",
            "条 (tiáo)",
            "张 (zhāng)"
        ],
        "ans": 1,
        "exp": "只 = 'zhī' (para animales pequeños: gatos, perros, pájaros). Frase: 一只猫 (yī zhī māo) = un gato."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Medidas",
        "diff": "medium",
        "q": "¿Qué contador se usa para objetos largos (ríos, peces, pantalones)?",
        "opts": [
            "个 (gè)",
            "只 (zhī)",
            "条 (tiáo)",
            "张 (zhāng)"
        ],
        "ans": 2,
        "exp": "条 = 'tiáo' (objetos largos: ríos, peces, serpientes, pantalones). Frase: 一条鱼 (yī tiáo yú) = un pez."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Medidas",
        "diff": "medium",
        "q": "¿Qué contador se usa para objetos planos (mesas, papeles, fotos)?",
        "opts": [
            "个 (gè)",
            "只 (zhī)",
            "条 (tiáo)",
            "张 (zhāng)"
        ],
        "ans": 3,
        "exp": "张 = 'zhāng' (objetos planos: papel, mesa, foto, cama). Frase: 一张纸 (yī zhāng zhǐ) = una hoja de papel."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Medidas",
        "diff": "medium",
        "q": "¿Qué contador se usa para vehículos?",
        "opts": [
            "辆 (liàng)",
            "架 (jià)",
            "艘 (sōu)",
            "台 (tái)"
        ],
        "ans": 0,
        "exp": "辆 = 'liàng' (vehículos terrestres: autos, bicicletas). Frase: 一辆车 (yī liàng chē) = un auto."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Medidas",
        "diff": "medium",
        "q": "¿Qué contador se usa para libros?",
        "opts": [
            "本 (běn)",
            "册 (cè)",
            "卷 (juǎn)",
            "Todos son válidos"
        ],
        "ans": 3,
        "exp": "本 (běn) es el más común. 册 (cè) y 卷 (juǎn) son más formales. Frase: 一本书 (yī běn shū) = un libro."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Medidas",
        "diff": "medium",
        "q": "¿Qué contador se usa para ropa?",
        "opts": [
            "件 (jiàn)",
            "条 (tiáo)",
            "双 (shuāng)",
            "Todos según tipo de ropa"
        ],
        "ans": 3,
        "exp": "件 (jiàn) para camisas/chaquetas; 条 (tiáo) para pantalones/faldas; 双 (shuāng) para pares. Frase: 一件衬衫 (yī jiàn chènshān) = una camisa."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Medidas",
        "diff": "medium",
        "q": "¿Qué contador se usa para pares (zapatos, calcetines, manos)?",
        "opts": [
            "对 (duì)",
            "双 (shuāng)",
            "副 (fù)",
            "个 (gè)"
        ],
        "ans": 1,
        "exp": "双 = 'shuāng' (para pares). Frase: 一双鞋 (yī shuāng xié) = un par de zapatos."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Medidas",
        "diff": "medium",
        "q": "¿Qué contador se usa para frutas redondas?",
        "opts": [
            "个 (gè)",
            "颗 (kē)",
            "粒 (lì)",
            "Todos pueden usarse"
        ],
        "ans": 3,
        "exp": "个 (gè) es general; 颗 (kē) para cosas pequeñas redondas. Frase: 一个苹果 (yī gè píngguǒ) = una manzana."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Medidas",
        "diff": "medium",
        "q": "¿Cómo se dice 'primero' (en orden)?",
        "opts": [
            "第一 (dì-yī)",
            "一号 (yī hào)",
            "一次 (yī cì)",
            "一位 (yī wèi)"
        ],
        "ans": 0,
        "exp": "第一 = 'dì-yī' (número ordinal). Frase: 第一名 (dì-yī míng) = primer lugar."
    },
    // TIEMPO (10)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Tiempo",
        "diff": "medium",
        "q": "¿Cómo se dice 'hoy' en chino?",
        "opts": [
            "今天 (jīntiān)",
            "明天 (míngtiān)",
            "昨天 (zuótiān)",
            "每天 (měitiān)"
        ],
        "ans": 0,
        "exp": "今天 = 'jīntiān'. Frase: 今天天气很好 (Jīntiān tiānqì hěn hǎo) = Hoy hace buen tiempo."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Tiempo",
        "diff": "medium",
        "q": "¿Cómo se dice 'mañana' en chino?",
        "opts": [
            "今天 (jīntiān)",
            "明天 (míngtiān)",
            "昨天 (zuótiān)",
            "每天 (měitiān)"
        ],
        "ans": 1,
        "exp": "明天 = 'míngtiān'. Frase: 明天见 (Míngtiān jiàn) = Hasta mañana."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Tiempo",
        "diff": "medium",
        "q": "¿Cómo se dice 'ayer' en chino?",
        "opts": [
            "今天 (jīntiān)",
            "明天 (míngtiān)",
            "昨天 (zuótiān)",
            "每天 (měitiān)"
        ],
        "ans": 2,
        "exp": "昨天 = 'zuótiān'. Frase: 昨天我去了北京 (Zuótiān wǒ qù le Běijīng) = Ayer fui a Beijing."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Tiempo",
        "diff": "medium",
        "q": "¿Cómo se dice 'hora' (en punto) en chino?",
        "opts": [
            "时间 (shíjiān)",
            "时候 (shíhòu)",
            "点 (diǎn)",
            "刻 (kè)"
        ],
        "ans": 2,
        "exp": "点 = 'diǎn' (hora en punto). Frase: 现在几点？ (Xiànzài jǐ diǎn?) = ¿Qué hora es?"
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Tiempo",
        "diff": "medium",
        "q": "¿Cómo se dice 'minuto' en chino?",
        "opts": [
            "秒 (miǎo)",
            "分 (fēn)",
            "刻 (kè)",
            "小时 (xiǎoshí)"
        ],
        "ans": 1,
        "exp": "分 = 'fēn' (minuto). Frase: 三点二十分 (sān diǎn èrshí fēn) = 3:20."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Tiempo",
        "diff": "medium",
        "q": "¿Cómo se dice 'semana' en chino?",
        "opts": [
            "天 (tiān)",
            "星期 (xīngqī)",
            "月 (yuè)",
            "年 (nián)"
        ],
        "ans": 1,
        "exp": "星期 = 'xīngqī' (semana). Frase: 一个星期 (yī gè xīngqī) = una semana."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Tiempo",
        "diff": "medium",
        "q": "¿Cómo se dice 'lunes' en chino?",
        "opts": [
            "星期一 (xīngqī yī)",
            "星期二 (xīngqī èr)",
            "星期三 (xīngqī sān)",
            "星期四 (xīngqī sì)"
        ],
        "ans": 0,
        "exp": "星期一 = 'xīngqī yī' (día de semana 1). Frase: 星期一我去上班 (Xīngqī yī wǒ qù shàngbān) = El lunes voy a trabajar."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Tiempo",
        "diff": "medium",
        "q": "¿Cómo se dice 'domingo' en chino?",
        "opts": [
            "星期六",
            "星期日 (xīngqī rì) / 星期天 (xīngqī tiān)",
            "周末",
            "周一"
        ],
        "ans": 1,
        "exp": "星期日 / 星期天 = 'xīngqī rì' / 'xīngqī tiān' (día del sol). Frase: 星期日去教堂 (Xīngqī rì qù jiàotáng) = El domingo voy a la iglesia."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Tiempo",
        "diff": "medium",
        "q": "¿Cómo se dice 'año' en chino?",
        "opts": [
            "年 (nián)",
            "月 (yuè)",
            "日 (rì)",
            "天 (tiān)"
        ],
        "ans": 0,
        "exp": "年 = 'nián' (año). Frase: 今年 (jīnnián) = este año."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Tiempo",
        "diff": "medium",
        "q": "¿Cómo se dice 'mes' en chino?",
        "opts": [
            "年 (nián)",
            "月 (yuè)",
            "日 (rì)",
            "天 (tiān)"
        ],
        "ans": 1,
        "exp": "月 = 'yuè' (mes). Frase: 一月 (yī yuè) = enero."
    },
    // FAMILIA (10)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Familia",
        "diff": "medium",
        "q": "¿Cómo se dice 'padre' (formal) en chino?",
        "opts": [
            "爸爸 (bàba)",
            "父亲 (fùqin)",
            "妈妈 (māma)",
            "母亲 (mǔqin)"
        ],
        "ans": 1,
        "exp": "父亲 = 'fùqin' (padre, formal). Coloquial: 爸爸 (bàba). Frase: 我的父亲是医生 (Wǒ de fùqin shì yīshēng)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Familia",
        "diff": "medium",
        "q": "¿Cómo se dice 'madre' (formal) en chino?",
        "opts": [
            "爸爸 (bàba)",
            "父亲 (fùqin)",
            "妈妈 (māma)",
            "母亲 (mǔqin)"
        ],
        "ans": 3,
        "exp": "母亲 = 'mǔqin' (madre, formal). Coloquial: 妈妈 (māma)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Familia",
        "diff": "medium",
        "q": "¿Cómo se dice 'hermano mayor' en chino?",
        "opts": [
            "哥哥 (gēge)",
            "弟弟 (dìdi)",
            "姐姐 (jiějie)",
            "妹妹 (mèimei)"
        ],
        "ans": 0,
        "exp": "哥哥 = 'gēge' (hermano mayor). Frase: 我有一个哥哥 (Wǒ yǒu yī gè gēge)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Familia",
        "diff": "medium",
        "q": "¿Cómo se dice 'hermana menor' en chino?",
        "opts": [
            "哥哥 (gēge)",
            "弟弟 (dìdi)",
            "姐姐 (jiějie)",
            "妹妹 (mèimei)"
        ],
        "ans": 3,
        "exp": "妹妹 = 'mèimei' (hermana menor). Frase: 我的妹妹很可爱 (Wǒ de mèimei hěn kě'ài)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Familia",
        "diff": "medium",
        "q": "¿Cómo se dice 'abuelo' en chino?",
        "opts": [
            "祖父 (zǔfù)",
            "祖母 (zǔmǔ)",
            "外公 (wàigōng)",
            "爷爷 (yéye) / 外公"
        ],
        "ans": 3,
        "exp": "爷爷 (yéye) = abuelo paterno; 外公 (wàigōng) = abuelo materno. Frase: 爷爷今年八十岁 (Yéye jīnnián bāshí suì) = Mi abuelo tiene 80 años."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Familia",
        "diff": "medium",
        "q": "¿Cómo se dice 'abuela' en chino?",
        "opts": [
            "祖母 (zǔmǔ)",
            "外婆 (wàipó)",
            "奶奶 (nǎinai) / 外婆",
            "Todas las anteriores"
        ],
        "ans": 3,
        "exp": "奶奶 (nǎinai) = abuela paterna; 外婆 (wàipó) = abuela materna; 祖母 (zǔmǔ) = formal. Frase: 我奶奶很慈祥 (Wǒ nǎinai hěn cíxiáng)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Familia",
        "diff": "medium",
        "q": "¿Cómo se dice 'esposo' en chino?",
        "opts": [
            "老公 (lǎogōng)",
            "妻子 (qīzi)",
            "丈夫 (zhàngfu)",
            "A y C"
        ],
        "ans": 3,
        "exp": "丈夫 (zhàngfu) es formal; 老公 (lǎogōng) es coloquial. Frase: 我丈夫是医生 (Wǒ zhàngfu shì yīshēng) = Mi esposo es doctor."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Familia",
        "diff": "medium",
        "q": "¿Cómo se dice 'esposa' en chino?",
        "opts": [
            "老公 (lǎogōng)",
            "妻子 (qīzi)",
            "老婆 (lǎopo)",
            "B y C"
        ],
        "ans": 3,
        "exp": "妻子 (qīzi) es formal; 老婆 (lǎopo) es coloquial. Frase: 我妻子是老师 (Wǒ qīzi shì lǎoshī) = Mi esposa es profesora."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Familia",
        "diff": "medium",
        "q": "¿Cómo se dice 'hijo' en chino?",
        "opts": [
            "儿子 (érzi)",
            "女儿 (nǚ'ér)",
            "孩子 (háizi)",
            "小孩 (xiǎohái)"
        ],
        "ans": 0,
        "exp": "儿子 = 'érzi' (hijo). Frase: 我有一个儿子 (Wǒ yǒu yī gè érzi) = Tengo un hijo."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Familia",
        "diff": "medium",
        "q": "¿Cómo se dice 'hija' en chino?",
        "opts": [
            "儿子 (érzi)",
            "女儿 (nǚ'ér)",
            "孩子 (háizi)",
            "小孩 (xiǎohái)"
        ],
        "ans": 1,
        "exp": "女儿 = 'nǚ'ér' (hija). Frase: 我的女儿很漂亮 (Wǒ de nǚ'ér hěn piàoliang) = Mi hija es muy bonita."
    },
    // DIRECCIONES (10)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Direcciones",
        "diff": "medium",
        "q": "¿Cómo se dice 'izquierda' en chino?",
        "opts": [
            "左 (zuǒ)",
            "右 (yòu)",
            "前 (qián)",
            "后 (hòu)"
        ],
        "ans": 0,
        "exp": "左 = 'zuǒ'. Frase: 向左转 (Xiàng zuǒ zhuǎn) = Gire a la izquierda."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Direcciones",
        "diff": "medium",
        "q": "¿Cómo se dice 'derecha' en chino?",
        "opts": [
            "左 (zuǒ)",
            "右 (yòu)",
            "前 (qián)",
            "后 (hòu)"
        ],
        "ans": 1,
        "exp": "右 = 'yòu'. Frase: 向右转 (Xiàng yòu zhuǎn) = Gire a la derecha."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Direcciones",
        "diff": "medium",
        "q": "¿Cómo se dice 'recto' (todo derecho) en chino?",
        "opts": [
            "左 (zuǒ)",
            "右 (yòu)",
            "直 (zhí)",
            "后 (hòu)"
        ],
        "ans": 2,
        "exp": "直 = 'zhí'. Frase: 一直走 (Yīzhí zǒu) = Siga recto."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Direcciones",
        "diff": "medium",
        "q": "¿Cómo se dice 'delante' en chino?",
        "opts": [
            "前 (qián)",
            "后 (hòu)",
            "上 (shàng)",
            "下 (xià)"
        ],
        "ans": 0,
        "exp": "前 = 'qián' (delante). Frase: 前面有银行 (Qiánmiàn yǒu yínháng) = Hay un banco adelante."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Direcciones",
        "diff": "medium",
        "q": "¿Cómo se dice 'detrás' en chino?",
        "opts": [
            "前 (qián)",
            "后 (hòu)",
            "上 (shàng)",
            "下 (xià)"
        ],
        "ans": 1,
        "exp": "后 = 'hòu' (detrás). Frase: 在公园后面 (Zài gōngyuán hòumiàn) = Detrás del parque."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Direcciones",
        "diff": "medium",
        "q": "¿Cómo se dice 'arriba' en chino?",
        "opts": [
            "前 (qián)",
            "后 (hòu)",
            "上 (shàng)",
            "下 (xià)"
        ],
        "ans": 2,
        "exp": "上 = 'shàng' (arriba). Frase: 在桌子上面 (Zài zhuōzi shàngmiàn) = Sobre la mesa."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Direcciones",
        "diff": "medium",
        "q": "¿Cómo se dice 'abajo' en chino?",
        "opts": [
            "前 (qián)",
            "后 (hòu)",
            "上 (shàng)",
            "下 (xià)"
        ],
        "ans": 3,
        "exp": "下 = 'xià' (abajo). Frase: 在桌子下面 (Zài zhuōzi xiàmiàn) = Debajo de la mesa."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Direcciones",
        "diff": "medium",
        "q": "¿Cómo se dice 'cerca' en chino?",
        "opts": [
            "近 (jìn)",
            "远 (yuǎn)",
            "旁边 (pángbiān)",
            "附近 (fùjìn)"
        ],
        "ans": 3,
        "exp": "附近 = 'fùjìn' (cerca, en las cercanías). Frase: 我家附近有超市 (Wǒ jiā fùjìn yǒu chāoshì) = Cerca de mi casa hay un supermercado."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Direcciones",
        "diff": "medium",
        "q": "¿Cómo se dice 'lejos' en chino?",
        "opts": [
            "近 (jìn)",
            "远 (yuǎn)",
            "旁边 (pángbiān)",
            "附近 (fùjìn)"
        ],
        "ans": 1,
        "exp": "远 = 'yuǎn' (lejos). Frase: 学校很远 (Xuéxiào hěn yuǎn) = La escuela está muy lejos."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Direcciones",
        "diff": "medium",
        "q": "¿Cómo se dice 'lado' en chino?",
        "opts": [
            "边 (biān)",
            "旁 (páng)",
            "侧 (cè)",
            "Todos los anteriores"
        ],
        "ans": 3,
        "exp": "边 (biān) es el más común. Frase: 我在你旁边 (Wǒ zài nǐ pángbiān) = Estoy a tu lado."
    },
    // ADJETIVOS (10)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Adjetivos",
        "diff": "medium",
        "q": "¿Qué significa '好' (hǎo)?",
        "opts": [
            "Bueno/bien",
            "Malo",
            "Grande",
            "Pequeño"
        ],
        "ans": 0,
        "exp": "好 = 'hǎo' (bueno, bien). Frase: 很好 (hěn hǎo) = muy bien."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Adjetivos",
        "diff": "medium",
        "q": "¿Qué significa '大' (dà)?",
        "opts": [
            "Pequeño",
            "Grande",
            "Caliente",
            "Frío"
        ],
        "ans": 1,
        "exp": "大 = 'dà' (grande). Frase: 大城市 (dà chéngshì) = ciudad grande."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Adjetivos",
        "diff": "medium",
        "q": "¿Qué significa '小' (xiǎo)?",
        "opts": [
            "Grande",
            "Pequeño",
            "Bonito",
            "Feo"
        ],
        "ans": 1,
        "exp": "小 = 'xiǎo' (pequeño). Frase: 小狗 (xiǎo gǒu) = perro pequeño."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Adjetivos",
        "diff": "medium",
        "q": "¿Qué significa '漂亮' (piàoliang)?",
        "opts": [
            "Feo",
            "Bonito",
            "Grande",
            "Pequeño"
        ],
        "ans": 1,
        "exp": "漂亮 = 'piàoliang' (bonito/hermoso). Frase: 很漂亮 (hěn piàoliang) = muy bonito."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Adjetivos",
        "diff": "medium",
        "q": "¿Qué significa '热' (rè)?",
        "opts": [
            "Frío",
            "Caliente",
            "Tibio",
            "Congelado"
        ],
        "ans": 1,
        "exp": "热 = 'rè' (caliente, temperatura). Frase: 今天很热 (Jīntiān hěn rè) = Hoy hace calor."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Adjetivos",
        "diff": "medium",
        "q": "¿Qué significa '冷' (lěng)?",
        "opts": [
            "Caliente",
            "Frío",
            "Tibio",
            "Congelado"
        ],
        "ans": 1,
        "exp": "冷 = 'lěng' (frío). Frase: 水很冷 (Shuǐ hěn lěng) = El agua está fría."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Adjetivos",
        "diff": "medium",
        "q": "¿Qué significa '高' (gāo)?",
        "opts": [
            "Bajo",
            "Alto",
            "Ancho",
            "Estrecho"
        ],
        "ans": 1,
        "exp": "高 = 'gāo' (alto). Frase: 高山 (gāo shān) = montaña alta."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Adjetivos",
        "diff": "medium",
        "q": "¿Qué significa '矮' (ǎi)?",
        "opts": [
            "Alto",
            "Bajo",
            "Ancho",
            "Estrecho"
        ],
        "ans": 1,
        "exp": "矮 = 'ǎi' (bajo). Frase: 矮个子 (ǎi gèzi) = persona baja."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Adjetivos",
        "diff": "medium",
        "q": "¿Qué significa '便宜' (piányi)?",
        "opts": [
            "Caro",
            "Barato",
            "Bueno",
            "Malo"
        ],
        "ans": 1,
        "exp": "便宜 = 'piányi' (barato). Frase: 很便宜 (hěn piányi) = muy barato."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Adjetivos",
        "diff": "medium",
        "q": "¿Qué significa '贵' (guì)?",
        "opts": [
            "Barato",
            "Caro",
            "Bueno",
            "Malo"
        ],
        "ans": 1,
        "exp": "贵 = 'guì' (caro). Frase: 太贵了 (Tài guì le) = Demasiado caro."
    },
    // GRAMÁTICA: 了 (5)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Gramática",
        "diff": "medium",
        "q": "¿Qué indica la partícula '了' al final de una oración?",
        "opts": [
            "Pasado",
            "Cambio de estado",
            "Futuro",
            "Deseo"
        ],
        "ans": 1,
        "exp": "了 = 'le' (indica cambio de estado o nueva situación). Frase: 下雨了 (Xiàyǔ le) = Empezó a llover (antes no llovía)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Gramática",
        "diff": "medium",
        "q": "¿Qué indica '了' después de un verbo?",
        "opts": [
            "Acción completada",
            "Acción futura",
            "Acción en progreso",
            "Acción habitual"
        ],
        "ans": 0,
        "exp": "V + 了 = acción completada (pasado). Frase: 我吃了饭 (Wǒ chī le fàn) = Comí (terminé de comer)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Gramática",
        "diff": "medium",
        "q": "¿Qué significa '不...了'?",
        "opts": [
            "No + cambio de estado",
            "No + pasado",
            "No + futuro",
            "No + deseo"
        ],
        "ans": 0,
        "exp": "不...了 = 'no + cambio de estado' (ya no). Frase: 我不吃饭了 (Wǒ bù chī fàn le) = Ya no voy a comer."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Gramática",
        "diff": "medium",
        "q": "¿Qué significa '要...了'?",
        "opts": [
            "Va a pasar (cambio inminente)",
            "Ya pasó",
            "Está pasando",
            "Quiere"
        ],
        "ans": 0,
        "exp": "要...了 = 'ya va a pasar'. Frase: 要下雨了 (Yào xiàyǔ le) = Va a llover (está a punto)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Gramática",
        "diff": "medium",
        "q": "¿Qué significa '快...了'?",
        "opts": [
            "Ya casi (inminente)",
            "Rápido",
            "Lento",
            "Pasado"
        ],
        "ans": 0,
        "exp": "快...了 = 'ya casi...'. Frase: 快到了 (Kuài dào le) = Ya casi llegamos."
    },
    // GRAMÁTICA: 把 (5)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Gramática",
        "diff": "medium",
        "q": "¿Qué función tiene la estructura '把'?",
        "opts": [
            "Marca objeto afectado por la acción",
            "Marca sujeto",
            "Marca tiempo",
            "Marca lugar"
        ],
        "ans": 0,
        "exp": "把 = 'bǎ' (estructura para enfatizar el objeto afectado). Frase: 把门关上 (Bǎ mén guān shàng) = Cierra la puerta (énfasis en la puerta)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Gramática",
        "diff": "medium",
        "q": "¿Qué significa '把书给我'?",
        "opts": [
            "Dame el libro (énfasis en el libro)",
            "El libro me da",
            "Yo doy el libro",
            "El libro se va"
        ],
        "ans": 0,
        "exp": "把书给我 = 'bǎ shū gěi wǒ' (dame el libro). La estructura 把 enfatiza que el libro es el objeto afectado."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Gramática",
        "diff": "medium",
        "q": "¿Cuándo se usa obligatoriamente la estructura '把'?",
        "opts": [
            "Cuando el verbo tiene complemento de resultado",
            "Siempre",
            "Nunca",
            "Solo en preguntas"
        ],
        "ans": 0,
        "exp": "La estructura 把 se usa a menudo con verbos que tienen complemento de resultado (como 关上, 做完, 吃完)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Gramática",
        "diff": "medium",
        "q": "¿Qué significa '把窗户打开'?",
        "opts": [
            "Abrir la ventana",
            "Cerrar la ventana",
            "Mirar la ventana",
            "Tocar la ventana"
        ],
        "ans": 0,
        "exp": "把窗户打开 = 'bǎ chuānghu dǎkāi' (abre la ventana). La estructura 把 enfatiza que la ventana es el objeto."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Gramática",
        "diff": "medium",
        "q": "¿Qué significa '把这件事做完'?",
        "opts": [
            "Terminar esta cosa (énfasis)",
            "Empezar esta cosa",
            "Olvidar esta cosa",
            "Recordar esta cosa"
        ],
        "ans": 0,
        "exp": "把这件事做完 = 'bǎ zhè jiàn shì zuò wán' (termina esta tarea). 做完 = complemento de resultado."
    },
    // EXPRESIONES Y MODISMOS BÁSICOS (10)
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Expresiones",
        "diff": "medium",
        "q": "¿Qué significa '没关系' (méi guānxi)?",
        "opts": [
            "No importa / de nada",
            "Gracias",
            "Lo siento",
            "Buenos días"
        ],
        "ans": 0,
        "exp": "没关系 = 'méi guānxi' (no importa, de nada). Frase: - 对不起 - 没关系 (Duìbuqǐ - Méi guānxi) = Lo siento - No importa."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Expresiones",
        "diff": "medium",
        "q": "¿Qué significa '没问题' (méi wèntí)?",
        "opts": [
            "No hay problema",
            "Hay un problema",
            "No sé",
            "Tal vez"
        ],
        "ans": 0,
        "exp": "没问题 = 'méi wèntí' (no hay problema). Frase: - 你能帮我吗？ - 没问题 (Nǐ néng bāng wǒ ma? - Méi wèntí) = ¿Puedes ayudarme? - No hay problema."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Expresiones",
        "diff": "medium",
        "q": "¿Qué significa '加油' (jiāyóu)?",
        "opts": [
            "Poner gasolina",
            "Ánimo / dale",
            "Acelerar",
            "Trabajar"
        ],
        "ans": 1,
        "exp": "加油 = 'jiāyóu' (literal 'añadir aceite') = ¡ánimo! / ¡dale! Frase: 考试加油！(Kǎoshì jiāyóu!) = ¡Suerte en el examen!"
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Expresiones",
        "diff": "medium",
        "q": "¿Qué significa '没办法' (méi bànfǎ)?",
        "opts": [
            "Tengo una idea",
            "No hay manera / no puedo hacer nada",
            "Fácil",
            "Difícil"
        ],
        "ans": 1,
        "exp": "没办法 = 'méi bànfǎ' (no hay manera, no se puede hacer nada). Frase: 没办法，只能这样了 (Méi bànfǎ, zhǐnéng zhèyàng le)."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Expresiones",
        "diff": "medium",
        "q": "¿Qué significa '真的吗？' (zhēn de ma)?",
        "opts": [
            "¿De verdad?",
            "¿Falso?",
            "¿Bueno?",
            "¿Malo?"
        ],
        "ans": 0,
        "exp": "真的吗？ = 'zhēn de ma?' (¿de verdad?). Frase: 他来了 - 真的吗？ (Tā lái le - Zhēn de ma?) = Él vino - ¿De verdad?"
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Expresiones",
        "diff": "medium",
        "q": "¿Qué significa '等一下' (děng yīxià)?",
        "opts": [
            "Espera un momento",
            "Corre",
            "Vete",
            "Ven"
        ],
        "ans": 0,
        "exp": "等一下 = 'děng yīxià' (espera un momento). Frase: 等一下，我马上来 (Děng yīxià, wǒ mǎshàng lái) = Espera, vengo ahora."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Expresiones",
        "diff": "medium",
        "q": "¿Qué significa '快点' (kuài diǎn)?",
        "opts": [
            "Más rápido",
            "Más lento",
            "Más alto",
            "Más bajo"
        ],
        "ans": 0,
        "exp": "快点 = 'kuài diǎn' (más rápido / date prisa). Frase: 快点，我们要迟到了！(Kuài diǎn, wǒmen yào chídào le!) = ¡Date prisa, vamos a llegar tarde!"
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Expresiones",
        "diff": "medium",
        "q": "¿Qué significa '随便' (suíbiàn)?",
        "opts": [
            "Como quieras / lo que sea",
            "Dificil",
            "Fácil",
            "Rápido"
        ],
        "ans": 0,
        "exp": "随便 = 'suíbiàn' (como quieras, lo que sea). Frase: - 你想吃什么？ - 随便 (Nǐ xiǎng chī shénme? - Suíbiàn) = ¿Qué quieres comer? - Lo que sea."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Expresiones",
        "diff": "medium",
        "q": "¿Qué significa '好吃' (hǎochī)?",
        "opts": [
            "Delicioso",
            "Feo",
            "Bonito",
            "Malo"
        ],
        "ans": 0,
        "exp": "好吃 = 'hǎochī' (delicioso). Frase: 这个蛋糕很好吃 (Zhège dàngāo hěn hǎochī) = Este pastel está muy delicioso."
    },
    {
        "profe": false,
        "intermedio": true,
        "avanzado": false,
        "experto": false,
        "unit": "Expresiones",
        "diff": "medium",
        "q": "¿Qué significa '好喝' (hǎohē)?",
        "opts": [
            "Delicioso (bebida)",
            "Delicioso (comida)",
            "Feo",
            "Bonito"
        ],
        "ans": 0,
        "exp": "好喝 = 'hǎohē' (delicioso, para bebidas). Frase: 这杯咖啡很好喝 (Zhè bēi kāfēi hěn hǎohē) = Este café está muy bueno."
    },

    // ==================== AVANZADO (avanzado: true) - 60 preguntas ====================
    // CHENGYU (IDIOMAS DE 4 CARACTERES) (15)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Chengyu",
        "diff": "hard",
        "q": "¿Qué significa '马马虎虎' (mǎmǎhǔhǔ)?",
        "opts": [
            "Excelente",
            "Más o menos / regular",
            "Muy mal",
            "Peligroso"
        ],
        "ans": 1,
        "exp": "马马虎虎 = literal 'caballo caballo tigre tigre' = más o menos, regular. Frase: 你的中文怎么样？马马虎虎 (Nǐ de Zhōngwén zěnme yàng? Mǎmǎhǔhǔ)."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Chengyu",
        "diff": "hard",
        "q": "¿Qué significa '一见钟情' (yī jiàn zhōngqíng)?",
        "opts": [
            "Amor a primera vista",
            "Odio a primera vista",
            "Amistad",
            "Enemistad"
        ],
        "ans": 0,
        "exp": "一见钟情 = 'yī jiàn zhōngqíng' (amor a primera vista). Frase: 他们一见钟情了 (Tāmen yī jiàn zhōngqíng le)."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Chengyu",
        "diff": "hard",
        "q": "¿Qué significa '对牛弹琴' (duì niú tánqín)?",
        "opts": [
            "Hablar con alguien que no entiende",
            "Música hermosa",
            "Enfrentar peligro",
            "Correr rápido"
        ],
        "ans": 0,
        "exp": "对牛弹琴 = 'duì niú tánqín' (tocar el laúd a una vaca) = hablar con quien no entiende."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Chengyu",
        "diff": "hard",
        "q": "¿Qué significa '画蛇添足' (huà shé tiān zú)?",
        "opts": [
            "Hacer algo perfecto",
            "Hacer algo innecesario que arruina todo",
            "Pintar una serpiente",
            "Añadir piernas"
        ],
        "ans": 1,
        "exp": "画蛇添足 = 'huà shé tiān zú' (dibujar una serpiente y añadirle patas) = exagerar innecesariamente, arruinar algo."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Chengyu",
        "diff": "hard",
        "q": "¿Qué significa '塞翁失马' (Sài wēng shī mǎ)?",
        "opts": [
            "Una desgracia puede ser una bendición",
            "Perder un caballo es malo",
            "Ganar un caballo es bueno",
            "Nunca se sabe"
        ],
        "ans": 0,
        "exp": "塞翁失马 = 'Sài wēng shī mǎ' (el anciano de la frontera perdió su caballo) = una aparente desgracia puede convertirse en una bendición."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Chengyu",
        "diff": "hard",
        "q": "¿Qué significa '刻舟求剑' (kè zhōu qiú jiàn)?",
        "opts": [
            "Ser terco y no adaptarse a los cambios",
            "Buscar una espada en un río",
            "Marcar un barco",
            "Ser rápido"
        ],
        "ans": 0,
        "exp": "刻舟求剑 = 'kè zhōu qiú jiàn' (marcar el barco para buscar la espada) = ser terco, no adaptarse a los cambios."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Chengyu",
        "diff": "hard",
        "q": "¿Qué significa '守株待兔' (shǒu zhū dài tù)?",
        "opts": [
            "Esperar pasivamente que ocurra un milagro",
            "Cuidar un árbol",
            "Cazar conejos",
            "Trabajar duro"
        ],
        "ans": 0,
        "exp": "守株待兔 = 'shǒu zhū dài tù' (esperar junto al árbol a que llegue el conejo) = esperar pasivamente sin hacer nada."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Chengyu",
        "diff": "hard",
        "q": "¿Qué significa '亡羊补牢' (wáng yáng bǔ láo)?",
        "opts": [
            "Reparar el corral después de perder las ovejas (mejor tarde que nunca)",
            "Perder ovejas",
            "Construir un corral",
            "No hacer nada"
        ],
        "ans": 0,
        "exp": "亡羊补牢 = 'wáng yáng bǔ láo' (reparar el corral después de perder las ovejas) = mejor tarde que nunca, aprender de los errores."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Chengyu",
        "diff": "hard",
        "q": "¿Qué significa '杯弓蛇影' (bēi gōng shé yǐng)?",
        "opts": [
            "Tener miedo sin razón / ser paranoico",
            "Una taza y una serpiente",
            "Beber de una taza",
            "Ser valiente"
        ],
        "ans": 0,
        "exp": "杯弓蛇影 = 'bēi gōng shé yǐng' (la sombra de un arco en la copa parece una serpiente) = tener miedo sin razón."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Chengyu",
        "diff": "hard",
        "q": "¿Qué significa '一石二鸟' (yī shí èr niǎo)?",
        "opts": [
            "Matar dos pájaros de un tiro",
            "Una piedra y dos pájaros",
            "Tirar una piedra",
            "Ser hábil"
        ],
        "ans": 0,
        "exp": "一石二鸟 = 'yī shí èr niǎo' (matar dos pájaros de un tiro / conseguir dos cosas a la vez)."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Chengyu",
        "diff": "hard",
        "q": "¿Qué significa '三心二意' (sān xīn èr yì)?",
        "opts": [
            "Ser indeciso / no concentrarse",
            "Tres corazones",
            "Tener dos intenciones",
            "Ser decidido"
        ],
        "ans": 0,
        "exp": "三心二意 = 'sān xīn èr yì' (tres corazones, dos intenciones) = ser indeciso, no concentrarse."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Chengyu",
        "diff": "hard",
        "q": "¿Qué significa '一帆风顺' (yī fān fēng shùn)?",
        "opts": [
            "Todo va viento en popa",
            "Una vela y el viento",
            "Navegar sin rumbo",
            "Tener problemas"
        ],
        "ans": 0,
        "exp": "一帆风顺 = 'yī fān fēng shùn' (todo va viento en popa, todo va bien)."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Chengyu",
        "diff": "hard",
        "q": "¿Qué significa '入乡随俗' (rù xiāng suí sú)?",
        "opts": [
            "Donde fueres, haz lo que vieres",
            "Llegar a un pueblo",
            "Seguir las costumbres del lugar",
            "A y C"
        ],
        "ans": 3,
        "exp": "入乡随俗 = 'rù xiāng suí sú' (donde fueres, haz lo que vieres / adaptarse a las costumbres locales)."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Chengyu",
        "diff": "hard",
        "q": "¿Qué significa '对牛弹琴'?",
        "opts": [
            "Hablar con quien no entiende",
            "Tocar música",
            "Ser talentoso",
            "Ser educado"
        ],
        "ans": 0,
        "exp": "对牛弹琴 = 'duì niú tánqín' (tocar el laúd a una vaca) = hablar con alguien que no entiende nada."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Chengyu",
        "diff": "hard",
        "q": "¿Qué significa '八仙过海' (bā xiān guò hǎi)?",
        "opts": [
            "Cada uno hace lo suyo para lograr algo",
            "Ocho inmortales cruzan el mar",
            "Trabajar en equipo",
            "Todos juntos"
        ],
        "ans": 0,
        "exp": "八仙过海 = 'bā xiān guò hǎi' (los ocho inmortales cruzan el mar) = cada uno usa sus habilidades para lograr algo."
    },
    // EXPRESIONES AVANZADAS (15)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '不管三七二十一' (bù guǎn sān qī èr shí yī)?",
        "opts": [
            "Sin importar las consecuencias / hacerlo de una vez",
            "Tres siete veintiuno",
            "Matemáticas",
            "Rendirse"
        ],
        "ans": 0,
        "exp": "不管三七二十一 = 'bù guǎn sān qī èr shí yī' (sin importar tres siete veintiuno) = sin preocuparse por las consecuencias, hacerlo de una vez."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '不管怎样' (bù guǎn zěnyàng)?",
        "opts": [
            "No importa cómo / de todas formas",
            "No importa qué",
            "No importa cuándo",
            "No importa dónde"
        ],
        "ans": 0,
        "exp": "不管怎样 = 'bù guǎn zěnyàng' (no importa cómo, de todas formas). Frase: 不管怎样，我都要去 (Bù guǎn zěnyàng, wǒ dōu yào qù) = De todas formas, voy a ir."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '不是...而是...' (bù shì... ér shì...)?",
        "opts": [
            "No es... sino que es...",
            "Es... y también...",
            "Aunque...",
            "Porque..."
        ],
        "ans": 0,
        "exp": "不是...而是... = 'no es... sino que es...' (contraste). Frase: 他不是老师，而是学生 (Tā bù shì lǎoshī, ér shì xuésheng) = No es profesor, sino estudiante."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '既...又...' (jì... yòu...)?",
        "opts": [
            "Tanto... como...",
            "No solo... sino también...",
            "Aunque...",
            "Porque..."
        ],
        "ans": 0,
        "exp": "既...又... = 'tanto... como...' (dos cualidades). Frase: 他既聪明又努力 (Tā jì cōngmíng yòu nǔlì) = Él es tanto inteligente como trabajador."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '越...越...' (yuè... yuè...)?",
        "opts": [
            "Cuanto más... más...",
            "Más... menos...",
            "A veces... a veces...",
            "Si... entonces..."
        ],
        "ans": 0,
        "exp": "越...越... = 'cuanto más... más...'. Frase: 越学习越聪明 (Yuè xuéxí yuè cōngmíng) = Cuanto más estudias, más inteligente eres."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '一...就...' (yī... jiù...)?",
        "opts": [
            "Tan pronto como... (entonces)...",
            "Uno... y...",
            "Primero... después...",
            "Si... entonces..."
        ],
        "ans": 0,
        "exp": "一...就... = 'tan pronto como... entonces...'. Frase: 我一回家就给你打电话 (Wǒ yī huí jiā jiù gěi nǐ dǎ diànhuà) = Tan pronto como llegue a casa, te llamo."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '除了...之外' (chúle... zhīwài)?",
        "opts": [
            "Además de / aparte de",
            "Excepto",
            "A pesar de",
            "Aunque"
        ],
        "ans": 0,
        "exp": "除了...之外 = 'además de / aparte de'. Frase: 除了英语之外，我还会中文 (Chúle yīngyǔ zhīwài, wǒ hái huì Zhōngwén) = Además de inglés, también sé chino."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '明明...' (míngmíng)?",
        "opts": [
            "Claramente / evidentemente",
            "Mañana",
            "Brillante",
            "Entendido"
        ],
        "ans": 0,
        "exp": "明明 = 'claramente, evidentemente' (se usa con contraste). Frase: 他明明知道答案，却不说 (Tā míngmíng zhīdào dá'àn, què bù shuō) = Claramente sabe la respuesta, pero no la dice."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '反正' (fǎnzhèng)?",
        "opts": [
            "De todas formas / en cualquier caso",
            "Al revés",
            "Correcto",
            "Incorrecto"
        ],
        "ans": 0,
        "exp": "反正 = 'de todas formas, en cualquier caso'. Frase: 反正我不想去 (Fǎnzhèng wǒ bù xiǎng qù) = De todas formas, no quiero ir."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '其实' (qíshí)?",
        "opts": [
            "En realidad",
            "A veces",
            "Quizás",
            "Nunca"
        ],
        "ans": 0,
        "exp": "其实 = 'en realidad, de hecho'. Frase: 其实，我早就知道了 (Qíshí, wǒ zǎo jiù zhīdào le) = En realidad, ya lo sabía."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '终于' (zhōngyú)?",
        "opts": [
            "Finalmente",
            "Comenzar",
            "Siempre",
            "Nunca"
        ],
        "ans": 0,
        "exp": "终于 = 'finalmente, al fin'. Frase: 终于到了 (Zhōngyú dào le) = Finalmente llegué."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '几乎' (jīhū)?",
        "opts": [
            "Casi",
            "Mucho",
            "Poco",
            "Nunca"
        ],
        "ans": 0,
        "exp": "几乎 = 'casi'. Frase: 我几乎忘了 (Wǒ jīhū wàng le) = Casi lo olvido."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '即使...也...' (jíshǐ... yě...)?",
        "opts": [
            "Aunque... también...",
            "Si... entonces...",
            "Porque... entonces...",
            "No solo... sino..."
        ],
        "ans": 0,
        "exp": "即使...也... = 'aunque... también...' (concesión). Frase: 即使下雨，我也要去 (Jíshǐ xià yǔ, wǒ yě yào qù) = Aunque llueva, también voy a ir."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '只要...就...' (zhǐyào... jiù...)?",
        "opts": [
            "Con tal de que... (entonces)...",
            "Solo si...",
            "Si no... entonces...",
            "Aunque..."
        ],
        "ans": 0,
        "exp": "只要...就... = 'con tal de que... entonces...'. Frase: 只要努力，就能成功 (Zhǐyào nǔlì, jiù néng chénggōng) = Con tal de que te esfuerces, puedes tener éxito."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": true,
        "experto": false,
        "unit": "Expresiones",
        "diff": "hard",
        "q": "¿Qué significa '不仅...而且...' (bùjǐn... érqiě...)?",
        "opts": [
            "No solo... sino también...",
            "Aunque... también...",
            "Porque... entonces...",
            "Si... entonces..."
        ],
        "ans": 0,
        "exp": "不仅...而且... = 'no solo... sino también...'. Frase: 他不仅聪明而且努力 (Tā bùjǐn cōngmíng érqiě nǔlì) = Él no solo es inteligente, sino también trabajador."
    },

    // ==================== EXPERTO (experto: true) - 30 preguntas ====================
    // PROVERBIOS CLÁSICOS (10)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Proverbios",
        "diff": "expert",
        "q": "¿Qué significa '塞翁失马' (Sài wēng shī mǎ)?",
        "opts": [
            "Una desgracia puede ser una bendición",
            "Perder un caballo es malo",
            "Ganar un caballo es bueno",
            "Nunca se sabe"
        ],
        "ans": 0,
        "exp": "塞翁失马 = 'Sài wēng shī mǎ' (el anciano de la frontera perdió su caballo) = una aparente desgracia puede convertirse en una bendición."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Proverbios",
        "diff": "expert",
        "q": "¿Qué significa '画蛇添足' (huà shé tiān zú)?",
        "opts": [
            "Hacer algo perfecto",
            "Hacer algo innecesario que arruina todo",
            "Pintar una serpiente",
            "Añadir piernas"
        ],
        "ans": 1,
        "exp": "画蛇添足 = 'huà shé tiān zú' (dibujar una serpiente y añadirle patas) = exagerar innecesariamente, arruinar algo."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Proverbios",
        "diff": "expert",
        "q": "¿Qué significa '对牛弹琴' (duì niú tánqín)?",
        "opts": [
            "Hablar con alguien que no entiende",
            "Música hermosa",
            "Enfrentar peligro",
            "Correr rápido"
        ],
        "ans": 0,
        "exp": "对牛弹琴 = 'duì niú tánqín' (tocar el laúd a una vaca) = hablar con quien no entiende."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Proverbios",
        "diff": "expert",
        "q": "¿Qué significa '刻舟求剑' (kè zhōu qiú jiàn)?",
        "opts": [
            "Ser terco y no adaptarse a los cambios",
            "Buscar una espada en un río",
            "Marcar un barco",
            "Ser rápido"
        ],
        "ans": 0,
        "exp": "刻舟求剑 = 'kè zhōu qiú jiàn' (marcar el barco para buscar la espada) = ser terco, no adaptarse a los cambios."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Proverbios",
        "diff": "expert",
        "q": "¿Qué significa '守株待兔' (shǒu zhū dài tù)?",
        "opts": [
            "Esperar pasivamente que ocurra un milagro",
            "Cuidar un árbol",
            "Cazar conejos",
            "Trabajar duro"
        ],
        "ans": 0,
        "exp": "守株待兔 = 'shǒu zhū dài tù' (esperar junto al árbol a que llegue el conejo) = esperar pasivamente sin hacer nada."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Proverbios",
        "diff": "expert",
        "q": "¿Qué significa '亡羊补牢' (wáng yáng bǔ láo)?",
        "opts": [
            "Reparar el corral después de perder las ovejas (mejor tarde que nunca)",
            "Perder ovejas",
            "Construir un corral",
            "No hacer nada"
        ],
        "ans": 0,
        "exp": "亡羊补牢 = 'wáng yáng bǔ láo' (reparar el corral después de perder las ovejas) = mejor tarde que nunca, aprender de los errores."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Proverbios",
        "diff": "expert",
        "q": "¿Qué significa '杯弓蛇影' (bēi gōng shé yǐng)?",
        "opts": [
            "Tener miedo sin razón / ser paranoico",
            "Una taza y una serpiente",
            "Beber de una taza",
            "Ser valiente"
        ],
        "ans": 0,
        "exp": "杯弓蛇影 = 'bēi gōng shé yǐng' (la sombra de un arco en la copa parece una serpiente) = tener miedo sin razón."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Proverbios",
        "diff": "expert",
        "q": "¿Qué significa '掩耳盗铃' (yǎn ěr dào líng)?",
        "opts": [
            "Engañarse a sí mismo / hacer como que no pasa nada",
            "Robar una campana",
            "Cubrirse los oídos",
            "Ser honesto"
        ],
        "ans": 0,
        "exp": "掩耳盗铃 = 'yǎn ěr dào líng' (tapar los oídos para robar una campana) = engañarse a sí mismo."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Proverbios",
        "diff": "expert",
        "q": "¿Qué significa '井底之蛙' (jǐng dǐ zhī wā)?",
        "opts": [
            "Persona con visión limitada / ignorante",
            "Una rana en un pozo",
            "Un pozo profundo",
            "Ser humilde"
        ],
        "ans": 0,
        "exp": "井底之蛙 = 'jǐng dǐ zhī wā' (la rana en el fondo del pozo) = persona con visión limitada, ignorante."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Proverbios",
        "diff": "expert",
        "q": "¿Qué significa '愚公移山' (yú gōng yí shān)?",
        "opts": [
            "La perseverancia mueve montañas",
            "Un viejo tonto mueve una montaña",
            "Trabajar duro",
            "Ser fuerte"
        ],
        "ans": 0,
        "exp": "愚公移山 = 'yú gōng yí shān' (el viejo tonto mueve la montaña) = con perseverancia se logra lo imposible."
    },
    // TEXTO CLÁSICO (5)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Clásico",
        "diff": "expert",
        "q": "¿Qué significa '子曰' (Zǐ yuē) en el Confucio?",
        "opts": [
            "El maestro dijo",
            "El estudiante dijo",
            "El rey dijo",
            "El padre dijo"
        ],
        "ans": 0,
        "exp": "子曰 = 'Zǐ yuē' (El maestro dijo). Abre muchas frases en las Analectas de Confucio."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Clásico",
        "diff": "expert",
        "q": "¿Qué significa '道可道，非常道' (Dào kě dào, fēi cháng dào)?",
        "opts": [
            "El camino que puede ser camino no es el camino eterno (Tao Te Ching)",
            "El camino es el camino",
            "El camino es difícil",
            "El camino es largo"
        ],
        "ans": 0,
        "exp": "道可道，非常道 = 'El Tao que puede ser expresado no es el Tao eterno'. Es la primera frase del Tao Te Ching (道德经)."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Clásico",
        "diff": "expert",
        "q": "¿Qué significa '学而时习之' (Xué ér shí xí zhī)?",
        "opts": [
            "Aprender y practicar constantemente",
            "Estudiar y descansar",
            "Aprender rápido",
            "Olvidar lo aprendido"
        ],
        "ans": 0,
        "exp": "学而时习之 = 'Aprender y practicar constantemente'. Frase de Confucio sobre la importancia de la práctica."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Clásico",
        "diff": "expert",
        "q": "¿Qué significa '上善若水' (Shàng shàn ruò shuǐ)?",
        "opts": [
            "La bondad suprema es como el agua (Tao Te Ching)",
            "El agua es buena",
            "Ser como el agua",
            "La bondad es líquida"
        ],
        "ans": 0,
        "exp": "上善若水 = 'La bondad suprema es como el agua' - del Tao Te Ching, simboliza la flexibilidad y adaptabilidad."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Clásico",
        "diff": "expert",
        "q": "¿Qué significa '天行健，君子以自强不息' (Tiān xíng jiàn, jūnzǐ yǐ zìqiáng bùxī)?",
        "opts": [
            "El cielo es fuerte; el caballero se fortalece a sí mismo sin descanso (I Ching)",
            "El cielo es azul",
            "Los caballeros son fuertes",
            "El cielo está lejos"
        ],
        "ans": 0,
        "exp": "天行健，君子以自强不息 = 'El cielo se mueve con fuerza; el caballero se fortalece a sí mismo sin descanso'. Es del I Ching (Yijing)."
    },
    // KEIGO CHINO - FORMALIDAD EXTREMA (10)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Chino",
        "diff": "expert",
        "q": "¿Qué significa '久仰' (jiǔ yǎng)?",
        "opts": [
            "He oído hablar de usted por mucho tiempo (formal)",
            "He esperado mucho",
            "He mirado hacia arriba",
            "He viajado lejos"
        ],
        "ans": 0,
        "exp": "久仰 = 'jiǔ yǎng' (he oído hablar de usted por mucho tiempo). Es una frase formal y respetuosa al conocer a alguien importante."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Chino",
        "diff": "expert",
        "q": "¿Qué significa '久违' (jiǔ wéi)?",
        "opts": [
            "Cuánto tiempo sin verte (formal)",
            "Hace mucho tiempo que estoy lejos",
            "He estado esperando",
            "He llegado tarde"
        ],
        "ans": 0,
        "exp": "久违 = 'jiǔ wéi' (cuánto tiempo sin verte - formal). Frase: 久违了，你好吗？ (Jiǔ wéi le, nǐ hǎo ma?) = Tanto tiempo sin verte, ¿cómo estás?"
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Chino",
        "diff": "expert",
        "q": "¿Qué significa '贵姓' (guì xìng)?",
        "opts": [
            "¿Cuál es su apellido? (formal)",
            "¿Cuál es su nombre?",
            "¿Es usted rico?",
            "¿Es usted importante?"
        ],
        "ans": 0,
        "exp": "贵姓 = 'guì xìng' (¿cuál es su apellido? - formal). Es la forma respetuosa de preguntar el apellido. Frase: 您贵姓？ (Nín guì xìng?) = ¿Cuál es su apellido?"
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Chino",
        "diff": "expert",
        "q": "¿Qué significa '令尊' (lìng zūn)?",
        "opts": [
            "Su padre (honorífico)",
            "Su madre",
            "Su hermano",
            "Su hermana"
        ],
        "ans": 0,
        "exp": "令尊 = 'lìng zūn' (su padre - honorífico). Es una forma muy respetuosa de referirse al padre de alguien."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Chino",
        "diff": "expert",
        "q": "¿Qué significa '令堂' (lìng táng)?",
        "opts": [
            "Su madre (honorífico)",
            "Su padre",
            "Su hermano",
            "Su hermana"
        ],
        "ans": 0,
        "exp": "令堂 = 'lìng táng' (su madre - honorífico). Forma muy respetuosa de referirse a la madre de alguien."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Chino",
        "diff": "expert",
        "q": "¿Qué significa '府上' (fǔshàng)?",
        "opts": [
            "Su casa / su residencia (honorífico)",
            "Su oficina",
            "Su ciudad",
            "Su país"
        ],
        "ans": 0,
        "exp": "府上 = 'fǔshàng' (su casa - honorífico). Forma respetuosa de referirse a la casa de alguien. Frase: 请问府上在哪里？ (Qǐngwèn fǔshàng zài nǎlǐ?) = ¿Dónde está su residencia?"
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Chino",
        "diff": "expert",
        "q": "¿Qué significa '劳驾' (láojià)?",
        "opts": [
            "Disculpe / molestar (formal)",
            "Trabajo",
            "Conducir",
            "Descansar"
        ],
        "ans": 0,
        "exp": "劳驾 = 'láojià' (disculpe, molestar - formal). Es una forma educada de pedir algo o llamar la atención. Frase: 劳驾，请问时间？ (Láojià, qǐngwèn shíjiān?) = Disculpe, ¿qué hora es?"
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Chino",
        "diff": "expert",
        "q": "¿Qué significa '打扰了' (dǎrǎo le)?",
        "opts": [
            "Molesto / disculpe por la molestia (formal)",
            "Estoy ocupado",
            "Estoy cansado",
            "Estoy contento"
        ],
        "ans": 0,
        "exp": "打扰了 = 'dǎrǎo le' (molesto, disculpe por la molestia). Se usa al interrumpir o molestar a alguien. Frase: 打扰了，请问您有空吗？ (Dǎrǎo le, qǐngwèn nín yǒu kòng ma?) = Disculpe la molestia, ¿tiene tiempo?"
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Chino",
        "diff": "expert",
        "q": "¿Qué significa '多谢' (duō xiè)?",
        "opts": [
            "Muchas gracias (formal)",
            "Pocas gracias",
            "Gracias (informal)",
            "De nada"
        ],
        "ans": 0,
        "exp": "多谢 = 'duō xiè' (muchas gracias - formal). Es más formal que 谢谢. Frase: 多谢您的帮助 (Duō xiè nín de bāngzhù) = Muchas gracias por su ayuda."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Keigo Chino",
        "diff": "expert",
        "q": "¿Qué significa '赐教' (cì jiào)?",
        "opts": [
            "Dar instrucción / enseñar (honorífico)",
            "Dar regalos",
            "Dar consejos",
            "Dar órdenes"
        ],
        "ans": 0,
        "exp": "赐教 = 'cì jiào' (dar instrucción / enseñar - honorífico). Se usa para pedir consejo o enseñanza de forma muy respetuosa. Frase: 请您赐教 (Qǐng nín cì jiào) = Por favor, enséñeme / dígame."
    },
    // DIALECTOS (5)
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos",
        "diff": "expert",
        "q": "En cantonés, ¿qué significa '唔该' (m4 goi1)?",
        "opts": [
            "Gracias / disculpe",
            "Hola",
            "Adiós",
            "Lo siento"
        ],
        "ans": 0,
        "exp": "唔该 = 'm4 goi1' (gracias / disculpe - cantonés). Es una de las frases más comunes en cantonés. Frase: 唔该你 (m4 goi1 nei5) = Gracias."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos",
        "diff": "expert",
        "q": "En cantonés, ¿qué significa '你好' (nei5 hou2)?",
        "opts": [
            "Hola",
            "Gracias",
            "Adiós",
            "Buenos días"
        ],
        "ans": 0,
        "exp": "你好 = 'nei5 hou2' (hola - cantonés). Es la misma palabra que en mandarín pero con pronunciación cantonesa."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos",
        "diff": "expert",
        "q": "En cantonés, ¿qué significa '係' (hai6)?",
        "opts": [
            "Ser / estar (cantonés)",
            "Comer",
            "Beber",
            "Ir"
        ],
        "ans": 0,
        "exp": "係 = 'hai6' (ser/estar - cantonés). Equivale al mandarín 是 (shì). Frase: 我係學生 (ngo5 hai6 hok6 saang1) = Soy estudiante."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos",
        "diff": "expert",
        "q": "En cantonés, ¿qué significa '食' (sik6)?",
        "opts": [
            "Comer (cantonés)",
            "Beber",
            "Dormir",
            "Ir"
        ],
        "ans": 0,
        "exp": "食 = 'sik6' (comer - cantonés). Equivale al mandarín 吃 (chī). Frase: 食飯 (sik6 faan6) = Comer arroz/comida."
    },
    {
        "profe": false,
        "intermedio": false,
        "avanzado": false,
        "experto": true,
        "unit": "Dialectos",
        "diff": "expert",
        "q": "En cantonés, ¿qué significa '得閒' (dak1 haan4)?",
        "opts": [
            "Tener tiempo libre (cantonés)",
            "Estar ocupado",
            "Estar cansado",
            "Estar contento"
        ],
        "ans": 0,
        "exp": "得閒 = 'dak1 haan4' (tener tiempo libre - cantonés). Equivale al mandarín 有空 (yǒu kòng). Frase: 你得閒嗎？ (nei5 dak1 haan4 maa3?) = ¿Tienes tiempo libre?"
    }
];

export default preguntas_chino;