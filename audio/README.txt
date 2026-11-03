音訊資源資料夾
================

把背景音樂與音效檔放進這個資料夾（建議 mp3 或 ogg，瀏覽器可播放的格式），
再到 data.js 的 audio 設定區填上路徑即可，程式不用改。

對應關係（data.js → window.ISLAND_DATA.audio）：
  bgmSrc       背景音樂，例如 'audio/bgm.mp3'
  sfx.click    點島／開卡片音效，例如 'audio/click.mp3'
  sfx.propose  求婚成功慶祝音效，例如 'audio/propose.mp3'

備註：
- 路徑留空或檔案缺失時，程式會「靜默略過」不報錯。
- 背景音樂遵守瀏覽器自動播放政策：多數瀏覽器需使用者先點一下（或按畫面右上的「音樂」鈕）才會開始播放。
