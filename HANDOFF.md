# PUNPUN 群英傳 — 任務交接（Handoff）

> 用途：換電腦後接續同一任務。  
> 生成：MIMO Desktop · 2026-09-11

---

## 1. 現在做到哪

| 進度 | 狀態 |
|---|---|
| WhatsApp 半年 chat 匯出分析 | ✅ 12,310+ 則 |
| 群成員真名對照 | ✅ 已用 group info 對上 |
| 三國主題個人頁 + 星圖/雷達 | ✅ 已上線 |
| GitHub Pages | ✅ 已部署 |
| 百度/DeepSeek/Gmail/GDoc 實驗 | ✅ 當天已完成 |
| 發到 PunPun 群 | ⏸ v0.2 畫像已發；三國版 **尚未發** |

**Pages：** https://chengyukpong.github.io/punpun-profiles/  
**Repo：** https://github.com/chengyukpong/punpun-profiles  
**本機 repo：** `C:\Users\cheng\punpun-profiles`

---

## 2. 成員對照（重要）

| 三國將 | 真名 | WhatsApp push | 號碼（尾） | 出陣 | 卡片 |
|---|---|---|---|---|---|
| 呂布 | **大總** | ~Rico Tai | 9831 0922 | 3532 | `rico.html` |
| 諸葛亮 | **陳王** | ~damonchanjob | 9523 8816 | 3125 | `tong.html` |
| 馬鈞 | **You** | yuk | 5367 2005 | 2205 | `you.html` |
| 荀彧 | **Rock LYH** | ~Rock LYH | 9330 9171 | 1428 | `pf.html` |
| 劉備 | **光祖** | 光 | 9640 9508 | 898 | `center.html` |
| 趙雲 | **BEN少** | （無 push name） | 9550 9114 | 852 | `sixth.html` |
| 廖化 | **CFO** | ~Fung | 9755 6219 | 171 | `bench.html` |
| 隱將 | Apollo / Alex / KL | ~Apollo / ~Alex / ~KL | 1250 / 2957 / 7983 | 92/6/1 | `mystery.html` |

群：**陳王主理百🦀名宴@PunPun群** · 10 人 · 2013-12-10 由 9831（大總）創建  
群描述：**CFO 牛一聖典 9月14日**

---

## 3. 另一台電腦要裝／要登入

### 必備
1. **Node.js**（跑 CDP 腳本）
2. **Git** + **GitHub CLI**（`gh`）  
   - 官方安裝後：`gh auth login`
3. **Python 3**（分析腳本；有 `MIMO_PYTHON` 就用那個）

### Clone 專案
```bash
gh repo clone chengyukpong/punpun-profiles
cd punpun-profiles
```

### 遠端除錯 Chrome（若要繼續自動化 WhatsApp / Google）
```text
chrome.exe --remote-debugging-port=9223 --user-data-dir=%TEMP%\mimo-cdp-profile
```
- 確認：`http://127.0.0.1:9223/json/version`
- WhatsApp：`https://web.whatsapp.com/`（可能要掃碼）
- Gmail / Google Docs / Drive：同 profile 內登入
- GitHub：瀏覽器或 `gh auth login`

**注意：** 系統原生檔案對話框 CDP **點不到**；上傳請手動或用 `DOM.setFileInputFiles` + `Page.setInterceptFileChooserDialog`。

---

## 4. 關鍵資料位置（上一台電腦）

| 檔案 | 路徑 | 說明 |
|---|---|---|
| WhatsApp 匯出 | `C:\Users\cheng\Downloads\陳王主理百🦀名宴@PunPun群\chat.md` | 半年原文 |
| 統計 JSON | session 目錄 `punpun-stats.json` / `punpun-deep.json` | 主題分佈 |
| 網站原始檔 | `C:\Users\cheng\punpun-profiles\` | index + 各將頁 |
| CDP 腳本樣本 | session `pw-scrape\*.js` | 開頁、點擊、打字 |

**換機後：** 若 `chat.md` 沒跟過來，請再從 WhatsApp Web：  
群資訊 → Export chat → Without media。

---

## 5. 常用指令（新機）

```powershell
# 推送 Pages 更新
git add -A
git commit -m "update"
git push origin main

# 看 CDP 頁面
Invoke-RestMethod http://127.0.0.1:9223/json

# 跑分析（若重新匯出 chat）
python -c "..."
```

GitHub Pages 已開：repo public + Pages from `main` / `/`。

---

## 6. 尚未做完 / 可接續

1. **三國版未發群** — 要發時標 **【MIMO 代發】** + Pages 連結  
2. 大總提過：餵 **一年 chat** 再分析、**MBTI**（v0.2 已有低置信版）  
3. Rock / 陳王 / 光祖 的「手機聯絡人名」vs push name 若還有出入，可再改卡  
4. 星圖可換成更精緻的 SVG 或加動畫  

---

## 7. 安全提醒

- 本 repo **public**，已刻意 **不放完整電話**（只放尾號或已公開 push name）  
- 不要把 `chat.md` 全文、cookie、token 推上 GitHub  
- CDP profile 裡有 Gmail / WA 登入，**勿共用 profile 目錄**

---

## 8. 快速驗收清單（新機）

- [ ] `gh auth status` 已登入  
- [ ] `git clone` 後 `index.html` 能開  
- [ ] Pages 連結能開  
- [ ] 若做自動化：9223 CDP + WhatsApp 已掃碼  
- [ ] 有 `chat.md` 或能重新 Export  

---

**EOF — 換機後從第 3 節開始即可。**
