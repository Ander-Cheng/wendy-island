/* =========================================================================
   Wendy 島 — 資料外置檔（純資料，不含邏輯）
   以 window.ISLAND_DATA 提供給 island3d.html，支援 file:// 雙擊直接開啟（不走 fetch/json，不踩 CORS）。
   之後新增人物／照片／動物，只要改這個檔案即可，不必動 3D 程式。
   ========================================================================= */
(function () {
  // 照片路徑（以 photo/ 資料夾內的實體檔名為準）
  var PHOTOS = {
    us: 'photo/我們.JPG',
    gfFamily: 'photo/女朋友家人.JPG',
    myFamily: 'photo/我家人.HEIC'   // 實體檔為 .HEIC
  };

  window.ISLAND_DATA = {
    photos: PHOTOS,

    // ---- 動物居民（建構子 key、座標、台詞、島卡 chip 的 emoji 與名稱）----
    animals: [
      { key: 'cat',       x: -3,   z: 3,   say: '喵～最愛寶寶',   chipEmoji: '🐱', chipName: '貓' },
      { key: 'dog',       x: 5,    z: -1,  say: '汪！忠心陪伴',   chipEmoji: '🐶', chipName: '狗' },
      { key: 'turtle',    x: 2.5,  z: 3.5, say: '慢慢來，有我在', chipEmoji: '🐢', chipName: '烏龜' },
      { key: 'pony',      x: -5.5, z: -1,  say: '帶你去冒險',     chipEmoji: '🐴', chipName: '小馬' },
      { key: 'sheep',     x: 0,    z: 5,   say: '咩～軟綿綿抱抱', chipEmoji: '🐑', chipName: '羊' },
      { key: 'chameleon', x: -1.5, z: 2,   say: '我會為你變色',   chipEmoji: '🦎', chipName: '變色龍' },
      { key: 'mouse',     x: 4,    z: 4,   say: '吱吱～黏著你',   chipEmoji: '🐭', chipName: '老鼠' }
    ],

    // ---- 島嶼卡片文字（key 對應 openCard(key)）----
    // 注意：zoo 的 chips 由程式用 animals 動態生成（符合「新增動物只改 data.js」）。
    cards: {
      personality: {
        ic: '✨', title: '她是怎樣的人', html:
          '<div class="row"><div class="k">🎀</div><div class="v"><b>可愛</b><br>一舉一動都讓人融化，笑起來能照亮整座島。</div></div>' +
          '<div class="row"><div class="k">🤲</div><div class="v"><b>貼心</b><br>總是先想到別人，默默把溫暖準備好。</div></div>' +
          '<div class="row"><div class="k">💪</div><div class="v"><b>勤奮</b><br>認真又努力，設定目標就穩穩前進，超可靠。</div></div>'
      },
      zoo: {
        ic: '🐾', title: '可愛動物園',
        // chips 省略不填：程式會依 animals 動態生成 chip 清單
        footer: '<p style="text-align:center;margin-top:14px;color:#7a95a3">寶寶最愛的毛茸茸朋友們 💕</p>'
      },
      trips: {
        ic: '✈️', title: '一起走過的旅行足跡'
        // 內容由程式依下方 trips 相簿陣列動態生成（每地點：標題 + 回憶短文 + 照片縮圖）
      },
      journey: {
        ic: '🗺️', title: '她的人生航線', html:
          '<div class="row"><div class="k">👶</div><div class="v"><b>1994</b>　寶寶降臨世界，故事的起點。</div></div>' +
          '<div class="row"><div class="k">🎓</div><div class="v"><b>2016</b>　文化大學畢業，帶著夢想出發。</div></div>' +
          '<div class="row"><div class="k">🛋️</div><div class="v"><b>2019</b>　在 Crate &amp; Barrel 相遇。</div></div>' +
          '<div class="row"><div class="k">💑</div><div class="v"><b>2023</b>　正式在一起，島上有了我們。</div></div>'
      },
      family: {
        ic: '👨‍👩‍👧‍👦', title: '我們的家人島', html:
          '<div class="group-title">💖 Wendy 的家人</div>' +
          '<img class="photo" src="' + PHOTOS.gfFamily + '" alt="Wendy 的家人" loading="lazy">' +
          '<div class="row"><div class="k">👨</div><div class="v"><b>爸爸</b></div></div>' +
          '<div class="row"><div class="k">👩</div><div class="v"><b>媽媽</b></div></div>' +
          '<div class="row"><div class="k">👧</div><div class="v"><b>Jacky</b>　姐姐</div></div>' +
          '<div class="row"><div class="k">🧒</div><div class="v"><b>Summer</b>　姪女</div></div>' +
          '<div class="group-title">💙 我的家人</div>' +
          '<img class="photo" src="' + PHOTOS.myFamily + '" alt="我的家人" loading="lazy">' +
          '<div class="row"><div class="k">👨</div><div class="v"><b>爸爸</b></div></div>' +
          '<div class="row"><div class="k">👩</div><div class="v"><b>媽媽</b></div></div>' +
          '<div class="row"><div class="k">👧</div><div class="v"><b>姐姐</b></div></div>' +
          '<div class="row"><div class="k">🤵</div><div class="v"><b>姊夫</b></div></div>' +
          '<div class="row"><div class="k">👭</div><div class="v"><b>兩個姪女</b></div></div>'
      },
      friends: {
        ic: '🤝', title: '我們的好友島', html:
          '<p style="text-align:center;color:#7a95a3;line-height:1.8;margin-bottom:6px">' +
          '一路上陪我們笑、陪我們鬧的好朋友們 💚<br>' +
          '<span style="font-size:.9rem;color:#aab8c0">（好友名單整理中，很快就會住進島上）</span></p>'
      },
      propose: {
        ic: '💍', title: 'Will you marry me?', html:
          '<img class="photo" src="' + PHOTOS.us + '" alt="我們" loading="lazy">' +
          '<div class="photo-cap">我們 💑</div>' +
          '<p style="text-align:center;color:#6b7b86;line-height:1.9;margin-bottom:6px">' +
          '親愛的寶寶，謝謝妳走進我的世界，成為這座島的名字。<br>' +
          '從 Crate &amp; Barrel 的相遇，到現在的每一天，<br>' +
          '我想把剩下的人生，都留在這座島上陪妳。</p>' +
          '<div id="propose-actions" style="text-align:center;margin-top:18px">' +
          '<button id="yesBtn">Yes, I do 💍</button></div>' +
          '<p id="propose-answer" style="display:none;text-align:center;margin-top:16px;font-size:1.3rem;color:#ff5d8f;font-weight:800;line-height:1.7">' +
          '💍 她戴上了戒指！<br>從今天起，Wendy 島永遠有我們兩個人 💑</p>'
      }
    },

    // ---- 旅行島相簿（每地點：emoji 旗、name 標題、note 回憶短文、photos 照片路徑陣列）----
    //      ★ 要補旅遊照片時：把照片放到 photo/ 資料夾，再把檔名加進對應地點的 photos 陣列即可，
    //        例如 photos: ['photo/富國島1.jpg', 'photo/富國島2.jpg']。photos 為空時會顯示「照片整理中」佔位。
    trips: [
      { flag: '🇻🇳', name: '富國島', note: '陽光、海灘與椰林，踩著細白沙，看海到天黑的那幾天。', photos: [] },
      { flag: '🗼', name: '東京',   note: '繁華又浪漫的日本，街角咖啡與夜晚霓虹，牽著手亂走也開心。', photos: [] },
      { flag: '🌺', name: '沖繩',   note: '碧海藍天的度假島，海水透到見底，吃冰配海風的悠閒。', photos: [] },
      { flag: '🇰🇷', name: '釜山',   note: '海港城市的悠閒，海雲台的浪、甘川洞的彩色小屋。', photos: [] },
      { flag: '🏔️', name: '湯澤',   note: '雪國溫泉的浪漫，泡湯看雪、滑雪跌成一團笑的冬天。', photos: [] }
    ],

    // ---- 音訊設定（BGM / 音效）----
    //      ★ 把音檔放到 audio/ 資料夾，再把下方路徑填上即可（支援 mp3/ogg 等瀏覽器可播放格式）。
    //        路徑留空或檔案載入失敗時，程式會「靜默略過」不報錯；BGM 預設遵守瀏覽器自動播放政策，
    //        需使用者點播放鈕或第一次互動後才會開始播放。
    audio: {
      bgmSrc: '',                 // 背景音樂，例如 'audio/bgm.mp3'
      bgmVolume: 0.35,
      bgmDefaultOn: false,        // 預設是否開啟 BGM（多數瀏覽器仍需互動後才真正播放）
      sfx: {
        click: '',                // 點島／開卡片音效，例如 'audio/click.mp3'
        propose: ''               // 求婚成功慶祝音效，例如 'audio/propose.mp3'
      },
      sfxVolume: 0.6
    },

    // ---- 家人島成員（opt 給 makePerson；lx/lz 島上座標；name 泡泡名字）----
    family: [
      // Wendy 的家人（左側）
      { opt: { kind: 'man',   skin: 0xf0c59a, hair: 0x4a4a4a, cloth: 0x5a7a9a },              lx: -3.2, lz: -0.5, name: 'Wendy 爸爸' },
      { opt: { kind: 'woman', skin: 0xffe0bd, hair: 0x6b4a32, cloth: 0xff8fab },              lx: -2.0, lz: -1.4, name: 'Wendy 媽媽' },
      { opt: { kind: 'woman', skin: 0xffe0bd, hair: 0x8d5524, cloth: 0xa29bfe },              lx: -3.0, lz: 1.0,  name: 'Jacky (姐)' },
      { opt: { kind: 'girl',  skin: 0xffe0bd, hair: 0x5b3a29, cloth: 0xffd166, scale: 0.62 }, lx: -1.6, lz: 0.3,  name: 'Summer (姪女)' },
      // 我的家人（右側）
      { opt: { kind: 'man',   skin: 0xeac086, hair: 0x3a3a3a, cloth: 0x4a6fa5 },              lx: 3.2,  lz: -0.5, name: '我 爸爸' },
      { opt: { kind: 'woman', skin: 0xf0c59a, hair: 0x5a3a28, cloth: 0xff9ab0 },              lx: 2.0,  lz: -1.4, name: '我 媽媽' },
      { opt: { kind: 'woman', skin: 0xf0c59a, hair: 0x7a4a28, cloth: 0x90be6d },              lx: 3.0,  lz: 1.0,  name: '我 姐姐' },
      { opt: { kind: 'man',   skin: 0xeac086, hair: 0x2b2016, cloth: 0x8d6e63 },              lx: 4.0,  lz: 0.2,  name: '姊夫' },
      { opt: { kind: 'girl',  skin: 0xf0c59a, hair: 0x4a3020, cloth: 0xffc8dd, scale: 0.6 },  lx: 1.8,  lz: 0.6,  name: '姪女①' },
      { opt: { kind: 'girl',  skin: 0xf0c59a, hair: 0x4a3020, cloth: 0xa9e6f0, scale: 0.58 }, lx: 2.6,  lz: 1.3,  name: '姪女②' }
    ],

    // ---- 好友島成員（名單後補，先放 5 位佔位）----
    friends: [
      { opt: { kind: 'man',   skin: 0xeac086, hair: 0x2b2016, cloth: 0x4a90d9 }, lx: -2.6, lz: -0.6, name: '好友（待補）' },
      { opt: { kind: 'woman', skin: 0xffe0bd, hair: 0x6b4a32, cloth: 0xff8fab }, lx: 0.0,  lz: -1.2, name: '好友（待補）' },
      { opt: { kind: 'man',   skin: 0xf0c59a, hair: 0x3a2a20, cloth: 0x8ccf8a }, lx: 2.6,  lz: -0.6, name: '好友（待補）' },
      { opt: { kind: 'woman', skin: 0xf0c59a, hair: 0x7a4a28, cloth: 0xffd166 }, lx: 1.2,  lz: 1.0,  name: '好友（待補）' },
      { opt: { kind: 'man',   skin: 0xeec9a0, hair: 0x15110d, cloth: 0xcdb4db }, lx: -1.2, lz: 1.0,  name: '好友（待補）' }
    ]
  };
})();
