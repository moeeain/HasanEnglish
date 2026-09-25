# English ABC — အခြေခံ အင်္ဂလိပ်စာ website

Grade 8 လောက် ရောက်ဖူးပေမယ့် basic word/grammar မသိသေးတဲ့ ကလေးများအတွက်
Let's Go style ရှိတဲ့ ရိုးရှင်းသော English learning website။ Myanmar / Hindi / English
၃ ဘာသာနဲ့ ရှင်းပြထားပါတယ်။ Words, Grammar, Listening, Speaking, Reading, Writing,
Workbook (quiz) ပါဝင်ပါတယ်။

## ဖိုင်များ
- `index.html` — main page
- `style.css` — design
- `data.js` — **ဒီဖိုင်ကိုပဲ ပြင်ပြီး content ထပ်ထည့်ပါ** (words, grammar, video, quiz)
- `app.js` — logic (ပုံမှန် မပြင်ဖို့ လိုအပ်ပါ)
- `firebase-config.js` — Firebase / Google Script setting
- `google-apps-script/Code.gs` — Google Sheet backend (optional)

## ၁) GitHub Pages မှာ Deploy လုပ်နည်း
1. GitHub မှာ repository အသစ်တစ်ခု ဖွင့်ပါ (public)
2. ဒီ folder ထဲက file အားလုံးကို upload လုပ်ပါ (drag & drop or `git push`)
3. Repository → **Settings → Pages** သွားပါ
4. Branch: `main`, folder: `/root` ရွေးပြီး **Save** နှိပ်ပါ
5. မိနစ်အနည်းငယ်ကြာရင် `https://<your-username>.github.io/<repo-name>/` link ရရှိပါမယ်

## ၂) Firebase ချိတ်ဆက်နည်း (score online သိမ်းချင်ရင်)
1. https://console.firebase.google.com → Create project
2. Project settings → Web app (</>) icon → app add → config ကူးယူပါ
3. `firebase-config.js` ထဲက `firebaseConfig` object ထဲကို ထည့်ပါ
4. Firebase Console → Build → **Firestore Database** → Create database (test mode ကနေ စလို့ရပါတယ်)
5. Website ပြန် refresh လုပ်ရင် workbook score တွေ Firestore ထဲ `scores` collection မှာ သိမ်းမှာဖြစ်ပါတယ်

## ၃) Google Apps Script backend (Firebase အစား Google Sheet သုံးချင်ရင်)
`google-apps-script/Code.gs` ဖိုင်ထဲက comment အတိုင်း လိုက်လုပ်ပါ:
1. Google Sheet အသစ်ဖွင့်ပြီး header row: `Name | Score | Total | Date`
2. Extensions → Apps Script → `Code.gs` ကို paste ထည့်ပါ
3. Deploy → New deployment → Web app → Anyone access → Deploy
4. ရလာတဲ့ URL ကို `firebase-config.js` ထဲက `GOOGLE_SCRIPT_URL` မှာ ထည့်ပါ
   (Firebase config ကို empty ထားခဲ့ရင် Google Script ကိုပဲ အသုံးပြုပါလိမ့်မယ်)

## လက်ရှိပါဝင်သော content (Level 1-5 scope, Let's Go style)
- **Words**: unit ၁၆ ခု၊ စကားလုံး ၁၂၁ လုံး — Greetings→Occupations + Time, Sports, Transportation (Level 5 topics)
- **Grammar**: unit ၁၈ ခု — Basic (sentence, to be, present) → Level 5 (comparatives, past continuous,
  going-to future, frequency adverbs, telling time, object pronouns)
- **Listening**: verified video ၉ ခု (supersimple.com)
- **Speaking**: unit ၁၀ ခု (mic + instant check ပါ)
- **Reading**: unit ၅ ခု
- **Writing**: unit ၅ ခု
- **Workbook**: မေးခွန်း ၃၇ ခု

## 🔊 အသံနှင့် 🎤 Mic feature အသစ်များ
- **Listening tab**: unit တစ်ခုစီအောက်မှာ 🔊 speaker ခလုတ် ထည့်ထားပါတယ် — အဓိကစကားစုကို ပြန်ဖွင့်နားထောင်နိုင်ပါတယ်
- **Speaking tab**: prompt တစ်ခုစီအောက်မှာ 🎤 mic ခလုတ် ထည့်ထားပါတယ် — နှိပ်ပြီး English လိုပြောကြည့်ပါ။
  ကလေးပြောတာကို browser ရဲ့ Speech Recognition နဲ့ တစ်ခါထဲ (instant) စစ်ပေးပြီး
  ✅ မှန်တယ် (သို့) ❌ ထပ်ကြိုးစားပါ လို့ ချက်ချင်း ပြပေးပါတယ်
  (Chrome/Edge browser မှာ အကောင်းဆုံး အလုပ်လုပ်ပါတယ်၊ Firefox အချို့မှာ အလုပ်မလုပ်နိုင်ပါ)
- **Voice ရွေးချယ်ခွင့်**: Home tab အောက်ဆုံးမှာ "🔊 Voice" dropdown ထည့်ထားပါတယ် —
  စက်/browser ပေါ်မူတည်ပြီး ရနိုင်တဲ့ အသံများထဲက အကောင်းဆုံး၊ AI ဆန်မှုအနည်းဆုံး အသံကို
  အလိုအလျောက် ရွေးပေးပါတယ်၊ ကိုယ်တိုင်လည်း ပြောင်းရွေးနိုင်ပါတယ် (ရွေးထားတာကို memory ထဲ မှတ်ထားပါတယ်)

## 🗣️ "လူ့အသံ" (Human Voice) အကြောင်း — ရိုးရိုးသားသား ရှင်းပြချင်ပါတယ်
ကျွန်တော် (Claude) က **တကယ့်လူတစ်ဦးရဲ့ အသံအစစ်ကို ဖန်တီးပေးလို့ မရပါဘူး** — ဒါက AI စာသားနဲ့ အလုပ်လုပ်တာဖြစ်လို့ အသံဖိုင် (mp3) ကို အစအဆုံး တီထွင်ပေးလို့ မဖြစ်နိုင်ပါဘူး။ ဒါပေမယ့် အောက်ပါအတိုင်း အကောင်းဆုံးအဖြေ ၃ မျိုး ပြင်ဆင်ပေးထားပါတယ်:

1. **🌐 Online natural voice (default on)** — Website က default အနေနဲ့ Google ရဲ့ အသံဝန်ဆောင်မှုတစ်ခုကို အသုံးပြုပြီး browser ရဲ့ robot-အသံထက် **သိသိသာသာ ပိုပီး natural/human-ဆန်တဲ့** အသံနဲ့ ဖတ်ပေးပါတယ် (internet ရှိရပါမယ်)။
   ⚠️ **ရိုးသားစွာ ပြောရရင်**: ဒါက Google ရဲ့ official API မဟုတ်ပါဘူး (documented မဟုတ်တဲ့ endpoint) — အခုချိန်မှာ ကောင်းကောင်းအလုပ်လုပ်ပေမယ့် အနာဂတ်မှာ ရပ်သွားနိုင်ပါတယ်။ ရပ်သွားရင် app က အလိုအလျောက် offline browser voice ကို ပြန်ပြောင်းအသုံးပြုပါလိမ့်မယ် (ဘာမှ ချိုးမကျပါဘူး)
   — Home tab က "Use natural online voice" checkbox ကနေ ပိတ်/ဖွင့် လုပ်နိုင်ပါတယ်
2. **📱 Offline voice (fallback)** — Internet မရှိရင် (သို့) checkbox ပိတ်ထားရင် device ရဲ့ built-in voice ကို voice-picker ကနေ ရွေးချယ်အသုံးပြုပါတယ်
3. **🎙️ တကယ့်လူ့အသံအစစ် (100% real human)** — ဒါကို ရဖို့ တစ်နည်းတည်းသာ ရှိပါတယ်: word/phrase တွေကို phone ဖြင့် ကိုယ်တိုင် (သို့) မိသားစုဝင်တစ်ဦးဖြင့် mp3 short clip recording လုပ်ပြီး
   `audio/` folder ထဲထည့်ကာ `data.js` ထဲက `AUDIO_MAP` မှာ စာရင်းသွင်းပါ (ဥပမာ - `"hello": "audio/hello.mp3"`)။
   ဒီနည်းက **100% အာမခံ human voice** ဖြစ်ပြီး internet မလိုပါဘူး၊ ဒါပေမယ့် word တစ်လုံးချင်းစီ ကိုယ်တိုင် record လုပ်ရမှာ ဖြစ်ပါတယ်။

## Content ထပ်ဖြည့်နည်း (video, words, grammar, quiz)
`data.js` ဖိုင်ထဲမှာ Unit အသစ်တွေကို object အသစ်အဖြစ် array ထဲ ထပ်ထည့်ရုံပါပဲ —
ပုံစံအတိုင်း copy-paste ပြီး English/Myanmar/Hindi ၃ ခုစလုံး ဖြည့်ပေးပါ။
Listening video အတွက် YouTube video ID ကိုပဲ လိုအပ်ပါတယ် (link တစ်ခုလုံး မလို —
`youtube.com/watch?v=XXXXXXXX` ထဲက `XXXXXXXX` အပိုင်းပဲ ယူပါ)။

## မှတ်ချက်
- Word အသံထွက် (🔊) သည် browser ရဲ့ built-in text-to-speech ကို အသုံးပြုထားလို့
  internet connection ရှိသရွေ့ extra setup မလိုပါဘူး
- Firebase/Google Script မချိတ်ရသေးလည်း website က အပြည့်အဝ အလုပ်လုပ်ပါတယ်
  (score ကို browser ထဲမှာပဲ localStorage နဲ့ သိမ်းမှာဖြစ်ပါတယ်)
