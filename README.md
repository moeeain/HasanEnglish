# English ABC — အခြေခံ အင်္ဂလိပ်စာ website

Grade 8 လောက် ရောက်ဖူးပေမယ့် basic word/grammar မသိသေးတဲ့ ကလေးများအတွက်
Let's Go style ရှိတဲ့ ရိုးရှင်းသော English learning website။ **Myanmar / English ၂ ဘာသာနဲ့သာ** ရှင်းပြထားပါတယ်
(Hindi ကို ဖြုတ်လိုက်ပါပြီ)။ Words, Grammar, Listening, Speaking (Dialogue Practice ပါ), Reading, Writing,
Workbook (quiz) ပါဝင်ပါတယ်။

## 🆕 နောက်ဆုံးထပ်ဖြည့်ချက်များ
- **📖 Reading passages တွေ ပိုရှည်အောင် ပြင်ပြီးပါပြီ** — Let's Go readers လို စာပိုဒ်ရှည်ရှည် (word ၁၅၀-၂၄၀ လောက်) ဖြစ်အောင် unit ၆ ခုလုံးကို ပြန်ရေးထားပါတယ်၊ မေးခွန်း ၄ ခုစီ ပါဝင်ပါတယ်
- **🔽 Level dropdown filter** — Vocabulary/Grammar tab နှစ်ခုစလုံးမှာ Level ရွေးလို့ရတဲ့ dropdown ထည့်ထားပါတယ် — "All Levels" (သို့) Level 1-6 တစ်ခုချင်းစီကို ရွေးကြည့်လို့ရပါတယ်
- **👤 Your Name** — Home tab အောက်ပိုင်းမှာ နာမည်ရိုက်ထည့်နိုင်ပါတယ် — device ပေါ်မှာ မှတ်ထားပြီး Workbook score သိမ်းတဲ့အခါ နာမည်ကို အလိုအလျောက် ဖြည့်ပေးပါလိမ့်မယ်

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

## 📘 Level 1-6 Structure (Let's Go series ပုံစံ)
Vocabulary နဲ့ Grammar tab နှစ်ခုစလုံးကို **Let's Go series (Book 1-6) ပုံစံအတိုင်း Level ခွဲပြီး** organize
လုပ်ထားပါတယ် — Level တစ်ခုပြောင်းတိုင်း 📘 Level N label ပေါ်ပြီး unit အားလုံးကို အလွယ်တကူ အဆင့်လိုက်
လေ့လာနိုင်ပါတယ်:
- **Level 1**: Greetings, Everyday Things, Numbers, Colors, Family + Sentence, To be, Simple Present
- **Level 2**: Body Parts, Animals, Food, Days, School/Household Items + Plurals, This/That, Questions, Adjectives, There is/are
- **Level 3**: Weather, Clothing, Shapes, Occupations + Prepositions, Possessives, Simple Past, Can/Can't
- **Level 4**: Feelings, Common Verbs + Comparative/Superlative, Going-to Future, Frequency Adverbs, Telling Time
- **Level 5**: Time/Clock, Sports, Transportation + Past Continuous, Object Pronouns
- **Level 6 (အသစ်)**: Technology, Nature & Environment, Places in Town + Present Perfect, Modals (must/have to/should),
  Relative Clauses (who/which/that), Passive Voice, First Conditional, Reported Speech

## လက်ရှိပါဝင်သော content (Level 1-6, Let's Go style)
- **Words**: unit ၂၃ ခု၊ စကားလုံး ၁၇၆ လုံး
- **Grammar**: unit ၂၄ ခု (Level 1 → Level 6)
- **Listening**: verified video ၉ ခု (supersimple.com)
- **Speaking**: unit ၁၂ ခု (mic + instant check) **+ 🔁 Listen & Repeat Practice**
- **Reading**: unit ၆ ခု
- **Writing**: unit ၆ ခု
- **Workbook**: မေးခွန်း ၄၉ ခု

## 🔁 Listen & Repeat Practice (redesigned)
အရင် "Dialogue Practice" (App/You အလှည့်ကျပြောတဲ့ ပုံစံ) က confusing ဖြစ်နေလို့
ပိုရှင်းလင်းတဲ့ **Listen & Repeat** ပုံစံအဖြစ် ပြင်လိုက်ပါတယ်:
1. Set တစ်ခုရွေးပြီး Start နှိပ်ပါ
2. App က line တစ်ကြောင်းကို အသံထွက်ပြောပြီး ပြပေးပါတယ် (🔊 Hear it again နှိပ်ပြီး ထပ်နားထောင်နိုင်ပါတယ်)
3. 🎤 "Repeat it" နှိပ်ပြီး ကလေးက **အတိအကျ တူတူ** ပြန်ပြောရမှာဖြစ်ပါတယ်
4. မှန်ရင် ✅ ပြပြီး နောက်တစ်ကြောင်းကို အလိုအလျောက် ဆက်သွားပါလိမ့်မယ်
`data.js` ရဲ့ `DIALOGUES` array ထဲမှာ ပုံစံအတိုင်း sentence set အသစ် ထပ်ထည့်နိုင်ပါတယ်။

## 🔧 Voice bug ပြင်ပြီးပါပြီ
အရင်က online voice (Google) ကို timeout ဖြစ်နေပြီး browser voice (robot-သံ) ကိုပဲ အမြဲသုံးနေခဲ့ပါတယ်။
ယခု ပြင်ပြီးပါပြီ — audio ကို တိုက်ရိုက် play() လုပ်အောင် ပြောင်းလိုက်တာဖြစ်လို့ online natural voice က
ယခင်ထက် ပိုမှန်ကန်စွာ အလုပ်လုပ်သင့်ပါတယ်။ ဒါပေမယ့် ၎င်းသည် unofficial Google endpoint ဖြစ်တဲ့အတွက်
network/browser အနေအထားပေါ်မူတည်ပြီး တစ်ခါတစ်ရံ fail နိုင်ပါသေးတယ် — ဖြစ်ရင် app က
offline browser voice ကို အလိုအလျောက် ပြန်ပြောင်းပါလိမ့်မယ်။
100% အာမခံ human voice လိုချင်ရင် အောက်က `AUDIO_MAP` section ကို ကြည့်ပါ။

## 🗣️ "လူ့အသံ" (Human Voice) — Wikimedia Commons ကနေ တကယ့်လူ့အသံ အလိုအလျောက် ရှာပေးတယ်
ကျွန်တော် (Claude) က **လူ့အသံအသစ် ကိုယ်တိုင် ဖန်တီးပေးလို့ မရပါဘူး** — ဒါပေမယ့် Wikimedia Commons
(Wiktionary ရဲ့ audio data source) မှာ လူ့အသံအစစ်နဲ့ record လုပ်ထားတဲ့ word pronunciation
အများကြီး **အခမဲ့ ပြန်သုံးလို့ရအောင် license (CC-BY/CC-BY-SA/Public Domain) နဲ့ တင်ထားပါတယ်** —
ဒါကို website က **word တစ်လုံးချင်းစီအတွက် အလိုအလျောက် ရှာပြီး ရှိရင် ဖွင့်ပေးအောင်** ပြင်ဆင်ပေးလိုက်ပါတယ်။

**🔊 ဘယ်လိုအစီအစဉ်နဲ့ အသံရွေးလဲ (word တစ်လုံးအတွက်):**
1. **`AUDIO_MAP` ထဲမှာ ကိုယ်တိုင်ထည့်ထားတဲ့ mp3** ရှိရင် အရင်ဆုံး အဲဒါကို သုံးမယ် (100% အာမခံ)
2. **Wikimedia Commons ရဲ့ လူ့အသံ recording** ရှိရင် အဲဒါကို အလိုအလျောက် ရှာပြီးဖွင့်ပေးမယ်
   (`En-us-word.ogg` / `En-uk-word.ogg` pattern ကို စစ်ပါတယ်) — ဒါက **တကယ့်လူ့အသံအစစ်** ဖြစ်ပေမယ့်
   စကားလုံး **အားလုံးအတွက် မရှိနိုင်ပါဘူး** (Commons မှာ common word တွေအတွက်ပဲ များများ record လုပ်ထားလို့)
3. ၁ နဲ့ ၂ မရှိရင် 🌐 Online natural voice (Google) ကို ဆက်သုံးမယ်
4. ၃ လည်း fail ရင် 📱 Offline browser voice ကို နောက်ဆုံး fallback အဖြစ် သုံးမယ်

⚠️ **ရိုးသားစွာ ပြောရရင်**: item ၂ က "best-effort" ဖြစ်ပါတယ် — word တိုင်းအတွက် Commons မှာ
recording ရှိချင်မှ ရှိမှာမို့ (hello, thank you, one-ten, colors, animals စတဲ့ common word တွေအတွက်
များများ ရှိပါတယ်၊ occupation/adjective အနည်းစားအတွက်တော့ မရှိနိုင်ပါ) — မရှိရင် app က
ချောချောမွေ့မွေ့ item ၃/၄ ကို ဆက်သုံးပါလိမ့်မယ်၊ ဘာမှ ချိုးမကျပါဘူး။ Sentence/phrase (word တစ်လုံးထက်ပို)
တွေအတွက်ကတော့ Commons မှာ တစ်ကြောင်းလုံး record ရှိတာ ရှားလို့ item ၂ ကို skip လုပ်ပြီး
တိုက်ရိုက် item ၃ ကို သွားပါလိမ့်မယ်။

📱 **100% အာမခံ human voice** လိုချင်ရင်တော့ item ၁ ပဲ ရှိပါတယ် — word/phrase ကို phone ဖြင့်
ကိုယ်တိုင် (သို့) မိသားစုဝင်တစ်ဦးဖြင့် mp3 short clip recording လုပ်ပြီး `audio/` folder ထဲထည့်ကာ
`data.js` ထဲက `AUDIO_MAP` မှာ စာရင်းသွင်းပါ (ဥပမာ - `"hello": "audio/hello.mp3"`)။

## Hindi ဖြုတ်ထားခြင်းအကြောင်း
Website ပေါ်မှာ Hindi စာသား လုံးဝ မပေါ်တော့ပါဘူး (index.html/app.js အားလုံးကနေ ဖယ်ရှားပြီးပါပြီ၊
Devanagari font import ကိုလည်း ဖယ်ထားပါတယ်)။ `data.js` ဖိုင်ထဲက word/unit တွေမှာ `hi:` field တွေ
ကျန်နေသေးပေမယ့် **ဘယ်မှ မပေါ်ပါဘူး** (အသုံးမပြုတော့လို့ သက်ရောက်မှု မရှိပါ) — ဖျက်ချင်ရင်လည်း
ဖျက်လို့ရပါတယ်၊ ထားလည်း ပြဿနာ မရှိပါဘူး။

## Content ထပ်ဖြည့်နည်း (video, words, grammar, quiz)
`data.js` ဖိုင်ထဲမှာ Unit အသစ်တွေကို object အသစ်အဖြစ် array ထဲ ထပ်ထည့်ရုံပါပဲ —
ပုံစံအတိုင်း copy-paste ပြီး English/Myanmar ၂ ခုစလုံး ဖြည့်ပေးပါ။
VOCAB_UNITS/GRAMMAR_UNITS unit အသစ်ထည့်တဲ့အခါ `level: N,` ဆိုတဲ့ field ကို `title:` ရှေ့မှာ ထည့်ပေးရင်
Vocabulary/Grammar tab ထဲမှာ 📘 Level N label အောက်မှာ အလိုအလျောက် ပေါင်းစည်းသွားပါလိမ့်မယ်။
Listening video အတွက် YouTube video ID ကိုပဲ လိုအပ်ပါတယ် (link တစ်ခုလုံး မလို —
`youtube.com/watch?v=XXXXXXXX` ထဲက `XXXXXXXX` အပိုင်းပဲ ယူပါ)။

## မှတ်ချက်
- Word အသံထွက် (🔊) သည် browser ရဲ့ built-in text-to-speech ကို အသုံးပြုထားလို့
  internet connection ရှိသရွေ့ extra setup မလိုပါဘူး
- Firebase/Google Script မချိတ်ရသေးလည်း website က အပြည့်အဝ အလုပ်လုပ်ပါတယ်
  (score ကို browser ထဲမှာပဲ localStorage နဲ့ သိမ်းမှာဖြစ်ပါတယ်)
