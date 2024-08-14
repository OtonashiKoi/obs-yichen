// script.js

// 定義所有64卦
const hexagrams = {
    '111111': { name: '乾卦', meaning: '乾為天，剛健中正，君子以自強不息' },
    '000000': { name: '坤卦', meaning: '坤為地，厚德載物，君子以厚德載物' },
    '010001': { name: '屯卦', meaning: '雲雷屯，君子以經綸' },
    '100010': { name: '蒙卦', meaning: '山下出泉，蒙。君子以果行育德' },
    '010111': { name: '需卦', meaning: '雲上於天，需。君子以飲食宴樂' },
    '111010': { name: '訟卦', meaning: '天與水違行，訟。君子以作事謀始' },
    '000010': { name: '師卦', meaning: '地中有水，師。君子以容民畜眾' },
    '010000': { name: '比卦', meaning: '水在地上，比。君子以儀表天地，利用出入' },
    '110111': { name: '小畜卦', meaning: '風行天上，小畜。君子以懿文德' },
    '111011': { name: '履卦', meaning: '上天下澤，履。君子以辨上下，定民志' },
    '000111': { name: '泰卦', meaning: '天地交泰，后以財成天地之道，輔相天地之宜，以左右民' },
    '111000': { name: '否卦', meaning: '天地不交，否。君子以儉德辟難，不可榮以祿' },
    '111101': { name: '同人卦', meaning: '天與火，同人。君子以類族辨物' },
    '101111': { name: '大有卦', meaning: '火在天上，大有。君子以遏惡揚善，順天休命' },
    '000100': { name: '謙卦', meaning: '地中有山，謙。君子以裒多益寡，稱物平施' },
    '001000': { name: '豫卦', meaning: '雷出地奮，豫。先王以作樂崇德，殷薦之上帝，以配祖考' },
    '011001': { name: '隨卦', meaning: '澤中有雷，隨。君子以向晦入宴息' },
    '100110': { name: '蠱卦', meaning: '山下有風，蠱。君子以振民育德' },
    '000011': { name: '臨卦', meaning: '澤上有地，臨。君子以教思無窮，容保民無疆' },
    '110000': { name: '觀卦', meaning: '風行地上，觀。先王以省方觀民設教' },
    '101001': { name: '噬嗑卦', meaning: '雷電噬嗑，君子以慎言語，節飲食' },
    '100101': { name: '賁卦', meaning: '山下有火，賁。君子以明庶政，無敢折獄' },
    '100000': { name: '剝卦', meaning: '山附於地，剝。上以厚下，安宅' },
    '000001': { name: '復卦', meaning: '雷在地中，復。先王以至日閉關，商旅不行，後不省方' },
    '111001': { name: '無妄卦', meaning: '天下雷行，物與無妄。先王以茂對時，育萬物' },
    '100111': { name: '大畜卦', meaning: '天在山中，大畜。君子以多識前言往行，以畜其德' },
    '100001': { name: '頤卦', meaning: '山下有雷，頤。君子以慎言語，節飲食' },
    '011110': { name: '大過卦', meaning: '澤滅木，大過。君子以獨立不懼，遯世無悶' },
    '010010': { name: '坎卦', meaning: '水洊至，習坎。君子以常德行，習教事' },
    '101101': { name: '離卦', meaning: '明兩作，離。大人以繼明照于四方' },
    '011100': { name: '咸卦', meaning: '山上有澤，咸。君子以虛受人' },
    '001110': { name: '恆卦', meaning: '雷風，恆。君子以立不易方' },
    '111100': { name: '遯卦', meaning: '天下有山，遯。君子以遠小人，不惡而嚴' },
    '001111': { name: '大壯卦', meaning: '雷在天上，大壯。君子以非禮弗履' },
    '101000': { name: '晉卦', meaning: '明出地上，晉。君子以自昭明德' },
    '000101': { name: '明夷卦', meaning: '明入地中，明夷。君子以蒞眾，用晦而明' },
    '110101': { name: '家人卦', meaning: '風自火出，家人。君子以言有物，而行有恆' },
    '101011': { name: '睽卦', meaning: '上火下澤，睽。君子以同而異' },
    '001010': { name: '蹇卦', meaning: '山上有水，蹇。君子以反身修德' },
    '010100': { name: '解卦', meaning: '雷雨作，解。君子以赦過宥罪' },
    '110001': { name: '損卦', meaning: '山下有澤，損。君子以懲忿窒欲' },
    '100011': { name: '益卦', meaning: '風雷，益。君子以見善則遷，有過則改' },
    '011111': { name: '夬卦', meaning: '澤上於天，夬。君子以施祿及下，居德則忌' },
    '111110': { name: '姤卦', meaning: '天下有風，姤。後以施命誥四方' },
    '011000': { name: '萃卦', meaning: '澤上於地，萃。君子以除戎器，戒不虞' },
    '000110': { name: '升卦', meaning: '地中生木，升。君子以順德，積小以高大' },
    '011010': { name: '困卦', meaning: '澤無水，困。君子以致命遂志' },
    '010110': { name: '井卦', meaning: '木上有水，井。君子以勞民育德' },
    '011101': { name: '革卦', meaning: '澤中有火，革。君子以治歷明時' },
    '101110': { name: '鼎卦', meaning: '木上有火，鼎。君子以正位凝命' },
    '001001': { name: '震卦', meaning: '洊雷，震。君子以恐懼修省' },
    '100100': { name: '艮卦', meaning: '兼山，艮。君子以思不出其位' },
    '110100': { name: '漸卦', meaning: '山上有木，漸。君子以居賢德善俗' },
    '001011': { name: '歸妹卦', meaning: '澤上有雷，歸妹。君子以永終知敝' },
    '001101': { name: '豐卦', meaning: '雷電皆至，豐。君子以折獄致刑' },
    '101100': { name: '旅卦', meaning: '山上有火，旅。君子以明慎用刑，而不留獄' },
    '110110': { name: '巽卦', meaning: '隨風，巽。君子以申命行事' },
    '011011': { name: '兌卦', meaning: '麗澤，兌。君子以朋友講習' },
    '110010': { name: '渙卦', meaning: '風行水上，渙。先王以享于帝立廟' },
    '010011': { name: '節卦', meaning: '水在澤中，節。君子以制數度，議德行' },
    '110011': { name: '中孚卦', meaning: '澤上有風，中孚。君子以議獄緩死' },
    '001100': { name: '小過卦', meaning: '山上有雷，小過。君子以行過乎恭，喪過乎哀，用過乎儉' },
};

let currentHexagram = [null, null, null, null, null, null];

function updateHexagramDisplay() {
    const originalHexagram = document.getElementById('original-hexagram');
    const changedHexagram = document.getElementById('changed-hexagram');
    
    originalHexagram.innerHTML = '';
    changedHexagram.innerHTML = '';
    
    for (let i = 0; i < 6; i++) {
        const originalYaoContainer = document.createElement('div');
        originalYaoContainer.className = 'yao-container';
        originalYaoContainer.setAttribute('data-yao', 6 - i);
        
        const originalYao = document.createElement('div');
        const changeDot = document.createElement('div');
        
        if (currentHexagram[i] === null) {
            originalYao.className = 'yao empty';
            changeDot.className = 'change-dot';
        } else {
            originalYao.className = `yao ${currentHexagram[i].type.replace('old-', '')}`;
            changeDot.className = `change-dot ${currentHexagram[i].type.startsWith('old-') ? 'show' : ''}`;
        }
        
        originalYaoContainer.appendChild(originalYao);
        originalYaoContainer.appendChild(changeDot);
        originalHexagram.appendChild(originalYaoContainer);
        
        // 創建變卦的爻
        const changedYaoContainer = originalYaoContainer.cloneNode(true);
        if (currentHexagram[i] !== null) {
            let changedType = currentHexagram[i].type;
            if (changedType === 'old-yin') changedType = 'yang';
            else if (changedType === 'old-yang') changedType = 'yin';
            changedYaoContainer.querySelector('.yao').className = `yao ${changedType}`;
            changedYaoContainer.querySelector('.change-dot').className = 'change-dot';
        }
        changedHexagram.appendChild(changedYaoContainer);
    }
}

function castYao(position) {
    const coins = Array(3).fill(0).map(() => Math.random() < 0.5 ? 0 : 1);
    const sum = coins.reduce((a, b) => a + b, 0);
    
    let type;
    switch(sum) {
        case 0:
            type = 'old-yin';  // 老阴 (6)
            break;
        case 1:
            type = 'yin';  // 少阴 (8)
            break;
        case 2:
            type = 'yang';  // 少阳 (7)
            break;
        case 3:
            type = 'old-yang';  // 老阳 (9)
            break;
    }
    
    currentHexagram[position - 1] = { type };
    updateHexagramDisplay();
    updateInterpretation();
}

function castAllYao() {
    currentHexagram = currentHexagram.map(() => {
        const coins = Array(3).fill(0).map(() => Math.random() < 0.5 ? 0 : 1);
        const sum = coins.reduce((a, b) => a + b, 0);
        
        let type;
        switch(sum) {
            case 0:
                type = 'old-yin';  // 老阴 (6)
                break;
            case 1:
                type = 'yin';  // 少阴 (8)
                break;
            case 2:
                type = 'yang';  // 少阳 (7)
                break;
            case 3:
                type = 'old-yang';  // 老阳 (9)
                break;
        }
        
        return { type };
    });
    updateHexagramDisplay();
    updateInterpretation();
}

function getHexagramKey(hexagram) {
    return hexagram.map(yao => yao.type.includes('yang') ? '1' : '0').join('');
}

function updateInterpretation() {
    const originalInterpretation = document.getElementById('original-interpretation');
    const changedInterpretation = document.getElementById('changed-interpretation');

    if (currentHexagram.every(yao => yao !== null)) {
        const originalKey = getHexagramKey(currentHexagram);
        const originalHexagram = hexagrams[originalKey];

        const changedHexagram = currentHexagram.map(yao => {
            if (yao.type === 'old-yin') return { type: 'yang' };
            if (yao.type === 'old-yang') return { type: 'yin' };
            return yao;
        });
        const changedKey = getHexagramKey(changedHexagram);
        const changedHexagramInfo = hexagrams[changedKey];

        if (originalHexagram) {
            originalInterpretation.innerHTML = `
                <h3>本卦：${originalHexagram.name}</h3>
                <p><strong>卦辭：</strong>${originalHexagram.meaning}</p>
                <p><strong>卦義：</strong>${getDetailedMeaning(originalHexagram.name)}</p>
            `;
        } else {
            originalInterpretation.textContent = '未知卦象';
        }

        if (changedHexagramInfo && changedKey !== originalKey) {
            changedInterpretation.innerHTML = `
                <h3>變卦：${changedHexagramInfo.name}</h3>
                <p><strong>卦辭：</strong>${changedHexagramInfo.meaning}</p>
                <p><strong>卦義：</strong>${getDetailedMeaning(changedHexagramInfo.name)}</p>
            `;
        } else {
            changedInterpretation.textContent = '無變卦';
        }
    } else {
        originalInterpretation.textContent = '請完成整個卦象';
        changedInterpretation.textContent = '';
    }
}

function getHexagramKey(hexagram) {
    return hexagram.map(yao => yao.type.includes('yang') ? '1' : '0').join('');
}

function getHexagramSymbol(key) {
    return key.split('').map(bit => bit === '1' ? '━━━' : '┅┅┅').join('\n');
}

function getDetailedMeaning(hexagramName) {
    const detailedMeanings = {
        '乾卦': '乾卦代表純陽、天道、創造力。它象徵著強健、剛毅、持續不斷的進取精神。在事業上，暗示著領導力和創新；在人際關係中，代表正直和公正。乾卦教導我們要像天一樣運行不息，不斷自我完善和進步。',
        '坤卦': '坤卦代表純陰、地道、包容力。它象徵著寬厚、順從、滋養萬物的特質。在生活中，提醒我們要有耐心和包容心；在工作上，強調團隊合作和穩健發展。坤卦教導我們要像大地一樣厚德載物，溫和而有力量。',
        '屯卦': '屯卦象徵初始階段的困難和障礙。如同種子剛破土而出，面臨著各種挑戰。這個卦象提醒我們在開始新事物時要有耐心和毅力，克服困難才能成長。同時也暗示著潛在的巨大發展機會。',
        '蒙卦': '蒙卦代表蒙昧、啟蒙。如同年輕人需要教育和引導。這個卦象強調學習和教育的重要性，提醒我們要虛心求教，同時也要善於啟發他人。它暗示著通過學習和引導可以消除無知，獲得智慧。',
        '需卦': '需卦象徵等待和準備。如同天上的雲層積聚，等待適當的時機降雨。這個卦象教導我們要有耐心，在行動之前做好充分的準備。同時也提醒我們要識別時機，把握機會。',
        '訟卦': '訟卦代表衝突和爭執。它警示我們要謹慎處理人際關係，避免不必要的衝突。同時，這個卦象也提醒我們在面對爭議時要堅持正義，但更提倡通過和解來解決問題。',
        '師卦': '師卦象徵組織、紀律和領導。如同軍隊需要嚴格的紀律和明確的指揮。這個卦象教導我們在團隊中要遵守規則，同時也強調領導者的重要性。它提醒我們要團結一致，共同面對挑戰。',
        '比卦': '比卦代表親近和團結。它強調人與人之間的和諧關係，以及團結合作的重要性。這個卦象教導我們要善於與他人建立良好的關係，但也提醒我們要明辨是非，不盲目追隨。',
        '小畜卦': '小畜卦象徵小有積聚和涵養。如同風在天上積聚能量。這個卦象教導我們要循序漸進，細水長流。它提醒我們在面對困難時要有耐心，慢慢積累力量，最終能夠成就大事。',
        '履卦': '履卦代表踐履、謹慎行事。它教導我們要謹慎地邁出每一步，在行動時要考慮周全。這個卦象也提醒我們要注意分寸，既不可過於軟弱，也不可過於剛強，要找到恰當的平衡。',
        '泰卦': '泰卦象徵大順、通泰。如同天地交感，萬物生長。這個卦象教導我們在順境中要保持謙虛和警惕，不可驕傲自滿。同時也提醒我們要善用資源，創造和諧的環境。',
        '否卦': '否卦代表閉塞、不通。它象徵著阻礙和困難，如同天地不交，萬物不生。這個卦象提醒我們在困境中要保持耐心和毅力，尋找突破的機會。同時也強調在逆境中保持正直和清醒。',
        '同人卦': '同人卦象徵團結和合作。它強調共同目標和集體力量的重要性。如同人們在共同的理想下團結一致。這個卦象教導我們要善於與他人合作，共同實現目標，但也要注意公平和正義。',
        '大有卦': '大有卦代表豐收和成功。如同太陽高照，萬物繁茂。這個卦象象徵著成功和富裕，但也提醒我們在成功時要保持謙虛和自律，不可驕傲自滿。它教導我們要善用資源，回饋社會。',
        '謙卦': '謙卦象徵謙虛和謙遜。它強調謙虛的態度和自省的重要性。如同大地謙虛地承載萬物。這個卦象教導我們要保持謙遜，不可驕傲，善於學習和接受建議。同時也提醒我們要以謙虛的態度面對他人。',
        '豫卦': '豫卦代表愉快和順利。如同春風化雨，萬物欣欣向榮。這個卦象象徵著愉快的心情和順利的進展，但也提醒我們在順境中不要忘乎所以，保持警惕。它教導我們要享受生活中的美好，同時也要未雨綢繆。',
        '隨卦': '隨卦象徵隨順和跟從。如同流水順應地勢，自然流動。這個卦象教導我們要隨機應變，順應環境的變化。同時也提醒我們要保持靈活和開放的態度，善於學習和接受新事物。',
        '蠱卦': '蠱卦代表腐敗和變革。如同腐朽的木頭需要更新。這個卦象提醒我們在面對問題時要勇於變革，去除腐敗和陳舊。同時也強調在變革過程中的堅持和毅力，最終實現新的成長。',
        '臨卦': '臨卦象徵監督和臨近。如同領導者臨視百姓，關心民生。這個卦象教導我們要關心和監督他人，同時也提醒我們要以身作則，樹立榜樣。它強調領導者的責任和使命。',
        '觀卦': '觀卦代表觀察和學習。如同遠望高山，觀察天地。這個卦象教導我們要善於觀察和學習，從中獲得智慧和啟示。同時也提醒我們要保持冷靜和客觀，避免主觀偏見。',
        '噬嗑卦': '噬嗑卦象徵刑罰和公正。如同咬合刑具，維護法律。這個卦象強調公正和法律的重要性，提醒我們要遵守規則，維護正義。同時也教導我們要有正義感，敢於面對和解決問題。',
        '賁卦': '賁卦代表裝飾和文采。如同美麗的花朵裝點世界。這個卦象教導我們要注重內外兼修，不僅要有內在的美德，還要有外在的修養。同時也提醒我們要保持真誠，不可虛偽。',
        '剝卦': '剝卦象徵剝落和衰退。如同秋天的樹葉逐漸凋零。這個卦象提醒我們在面對衰退和困境時要保持冷靜和堅韌，尋找重新崛起的機會。同時也教導我們要有應對困難的智慧和勇氣。',
        '復卦': '復卦代表回復和重新開始。如同冬去春來，萬物復甦。這個卦象象徵著新的開始和希望，提醒我們在經歷困難後要重新振作，迎接新的機會。同時也強調在復甦過程中的耐心和毅力。',
        '無妄卦': '無妄卦象徵自然和無為。如同大自然的運行，自然而然。這個卦象教導我們要順應自然，不可強求。同時也提醒我們要保持純真和誠實，避免過度的計劃和操控。',
        '大畜卦': '大畜卦代表積蓄和涵養。如同大山積聚力量。這個卦象教導我們要積累和涵養自己的實力，等待適當的時機。同時也提醒我們在行動前要做好充分的準備，避免急於求成。',
        '頤卦': '頤卦象徵養育和自養。如同大地滋養萬物。這個卦象教導我們要注重身心的養護，保持健康和和諧。同時也提醒我們要善於照顧自己和他人，平衡各方面的需求。',
        '大過卦': '大過卦代表超越和過度。如同巨大的壓力需要突破。這個卦象提醒我們在面對極端情況時要勇於超越和突破。同時也強調在超越過程中的理性和穩重，避免過度的冒險。',
        '坎卦': '坎卦象徵困難和險阻。如同深淵和險境。這個卦象教導我們在面對困難和危險時要保持冷靜和智慧，尋找解決的辦法。同時也提醒我們要有堅強的意志和毅力，克服一切障礙。',
        '離卦': '離卦代表光明和附著。如同太陽的光芒照耀萬物。這個卦象象徵著智慧和光明，提醒我們要追求真理和知識。同時也教導我們要善於利用光明的力量，驅散黑暗和無知。',
        '咸卦': '咸卦象徵感應和相互影響。如同磁石的吸引力。這個卦象教導我們要善於感知和理解他人的想法和情感，建立良好的關係。同時也提醒我們要保持開放的心態，接受不同的觀點。',
        '恆卦': '恆卦代表持久和堅定。如同大地的穩定和持久。這個卦象教導我們要保持堅定的信念和持久的努力，不畏困難，堅持到底。同時也提醒我們要有耐心和毅力，才能取得長久的成功。',
        '遯卦': '遯卦象徵退避和隱藏。如同山中的隱士，遠離世俗。這個卦象教導我們在面對困難和危險時要懂得退避和隱藏，保全自己。同時也提醒我們要保持內心的平靜，尋找內在的智慧和力量。',
        '大壯卦': '大壯卦代表強盛和壯大。如同春天的草木迅速成長。這個卦象象徵著力量和成長，提醒我們要把握機會，發揮自己的潛力。同時也教導我們在強盛時要保持謙虛和警惕，不可驕傲自滿。',
        '晉卦': '晉卦象徵進步和提升。如同太陽的升起，光明逐漸增強。這個卦象教導我們要不斷追求進步，提升自己的能力和素質。同時也提醒我們在進步的過程中要保持謙遜和自律，不可驕傲自滿。',
        '明夷卦': '明夷卦代表隱藏和傷痛。如同光明被掩蓋，遭受挫折。這個卦象提醒我們在面對挫折和困難時要保持冷靜和堅韌，尋找重生的機會。同時也教導我們要學會隱藏自己的光芒，保護自己。',
        '家人卦': '家人卦象徵家庭和諧和親情。如同家庭的成員相互扶持，和睦相處。這個卦象教導我們要重視家庭和親情，善於經營和維護家庭關係。同時也提醒我們要以家庭為根基，追求幸福和穩定。',
        '睽卦': '睽卦代表分離和分歧。如同兩個人背道而馳，意見不合。這個卦象提醒我們在面對分歧和矛盾時要保持冷靜和理性，尋求解決的辦法。同時也教導我們要尊重和包容不同的觀點，尋求共識。',
        '蹇卦': '蹇卦象徵困難和阻礙。如同道路崎嶇，行走艱難。這個卦象教導我們在面對困難和阻礙時要保持堅韌和毅力，不輕易放棄。同時也提醒我們要善於尋找幫助，合作解決問題。',
        '解卦': '解卦代表解脫和化解。如同冰雪融化，困境解除。這個卦象象徵著解脫和化解，提醒我們在面對困難和矛盾時要尋找解決的辦法，同時也教導我們要保持寬容和理解，化解矛盾和仇恨。',
        '損卦': '損卦象徵減少和節制。如同剪去多餘的枝葉，保持平衡。這個卦象教導我們要懂得節制和減少不必要的負擔，保持簡單和高效。同時也提醒我們在減少的過程中要保持平衡，不可過度。',
        '益卦': '益卦代表增益和幫助。如同施肥澆水，促進成長。這個卦象象徵著增益和幫助，提醒我們要善於利用資源，促進自己的成長。同時也教導我們要幫助他人，實現共同的進步。',
        '夬卦': '夬卦象徵果斷和決斷。如同斬斷亂麻，果斷行事。這個卦象教導我們在面對問題時要果斷決策，不可猶豫。同時也提醒我們要有勇氣和智慧，果斷解決問題，避免拖延。',
        '姤卦': '姤卦代表相遇和邂逅。如同意外的相遇，充滿驚喜。這個卦象象徵著機遇和驚喜，提醒我們要善於把握機會，迎接新的挑戰。同時也教導我們要保持開放的心態，接受新的經歷和體驗。',
        '萃卦': '萃卦象徵聚集和團結。如同花朵聚集，形成美景。這個卦象教導我們要善於聚集資源，形成合力，實現共同的目標。同時也提醒我們要團結一致，共同面對挑戰。',
        '升卦': '升卦代表提升和上進。如同太陽升起，光明普照。這個卦象象徵著提升和進步，提醒我們要不斷追求上進，提升自己的能力和素質。同時也教導我們要保持謙虛和自律，避免驕傲自滿。',
        '困卦': '困卦象徵困境和艱難。如同被困在井中，難以脫身。這個卦象教導我們在面對困境時要保持冷靜和智慧，尋找解決的辦法。同時也提醒我們要有堅強的意志和毅力，克服困難。',
        '井卦': '井卦代表資源和源泉。如同井水清澈，滋養萬物。這個卦象象徵著資源和源泉，提醒我們要善於利用資源，促進自己的成長。同時也教導我們要保持純潔和誠實，避免污染和浪費。',
        '革卦': '革卦象徵變革和創新。如同蛇蛻皮，迎來新生。這個卦象教導我們在面對變革時要有勇氣和智慧，迎接新的挑戰。同時也提醒我們要保持開放的心態，接受變革和創新。',
        '鼎卦': '鼎卦代表鼎盛和成就。如同鼎盛時期，成就卓越。這個卦象象徵著鼎盛和成就，提醒我們要把握機會，發揮自己的潛力，實現卓越的成就。同時也教導我們在成就時要保持謙虛和警惕。',
        '震卦': '震卦象徵震動和驚動。如同雷霆萬鈞，震撼人心。這個卦象教導我們在面對變動和驚動時要保持冷靜和智慧，適應變化。同時也提醒我們要善於利用變動的力量，實現突破和進步。',
        '艮卦': '艮卦代表止息和穩定。如同山岳穩固，難以動搖。這個卦象象徵著止息和穩定，提醒我們要保持內心的平靜和穩定，不被外界所動搖。同時也教導我們要懂得適時停下，反思和調整。',
        '漸卦': '漸卦象徵漸進和循序漸進。如同鳥兒逐步飛向高空。這個卦象教導我們在追求目標時要循序漸進，不可急於求成。同時也提醒我們要保持耐心和毅力，一步步實現自己的目標。',
        '歸妹卦': '歸妹卦代表婚姻和結合。如同女子出嫁，組建家庭。這個卦象象徵著婚姻和結合，提醒我們要重視婚姻和家庭，經營好自己的感情生活。同時也教導我們要懂得包容和妥協，維護家庭的和諧。',
        '豐卦': '豐卦象徵豐盛和充盈。如同豐收的季節，滿載而歸。這個卦象教導我們要善於積累和利用資源，實現豐盛的生活。同時也提醒我們要保持謙虛和感恩，與他人分享自己的成果。',
        '旅卦': '旅卦代表旅行和遷徙。如同旅人在外，四處漂泊。這個卦象象徵著旅行和遷徙，提醒我們在外出和變動時要保持謹慎和警惕。同時也教導我們要保持開放的心態，接受新的經歷和挑戰。',
        '巽卦': '巽卦象徵順從和柔順。如同風的柔和，隨風而行。這個卦象教導我們在面對變動和挑戰時要保持柔順和適應，不可強求。同時也提醒我們要善於順應環境，找到自己的位置。',
        '兌卦': '兌卦代表喜悅和愉快。如同歡笑的聲音，充滿喜悅。這個卦象象徵著喜悅和愉快，提醒我們要保持樂觀和開朗，享受生活的美好。同時也教導我們要善於表達自己的情感，與他人分享快樂。',
        '渙卦': '渙卦象徵散開和解散。如同冰雪融化，分散而去。這個卦象教導我們在面對困難和壓力時要學會解散和釋放，不可過度壓抑。同時也提醒我們要保持內心的自由，尋找解脫的途徑。',
        '節卦': '節卦代表節制和約束。如同節約用水，保持平衡。這個卦象象徵著節制和約束，提醒我們在行動和消費時要保持節制，不可過度。同時也教導我們要懂得適時的約束自己，保持簡單和高效。',
        '中孚卦': '中孚卦象徵誠信和信任。如同鴿子的純潔，象徵信任。這個卦象教導我們要保持誠信和信任，與他人建立良好的關係。同時也提醒我們要以誠信待人，獲得他人的信任和尊重。',
        '小過卦': '小過卦代表小錯和過失。如同小小的過失，需要糾正。這個卦象提醒我們在面對小錯和過失時要及時糾正，避免累積成大問題。同時也教導我們要保持謙虛，從小事中學習和進步。',
        '既濟卦': '既濟卦象徵完成和成功。如同工程完工，達成目標。這個卦象教導我們在達成目標和成功後要保持謙虛和冷靜，不可驕傲自滿。同時也提醒我們要繼續前行，不斷追求新的目標和成就。',
        '未濟卦': '未濟卦代表未完成和未成功。如同工程未完，仍需努力。這個卦象提醒我們在面對未完成的任務時要保持耐心和毅力，不輕易放棄。同時也教導我們要不斷努力，直到達成目標。'
    };
    return detailedMeanings[hexagramName] || '暫無詳細解釋';
}

function resetHexagram() {
    currentHexagram = [null, null, null, null, null, null];
    updateHexagramDisplay();
    updateInterpretation();
}

function initEventListeners() {
    const yaoButtons = document.querySelectorAll('.yao-button');
    yaoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const yaoPosition = parseInt(button.getAttribute('data-yao'));
            castYao(yaoPosition);
        });
    });

    const castAllButton = document.getElementById('castAllButton');
    castAllButton.addEventListener('click', castAllYao);

    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', resetHexagram);
}

function init() {
    updateHexagramDisplay();
    initEventListeners();
}

document.addEventListener('DOMContentLoaded', init);