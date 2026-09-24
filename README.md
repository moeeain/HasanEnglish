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

## လက်ရှိပါဝင်သော content
- **Words**: Greetings/People, Everyday Things, Numbers 1-10, Colors, Family, Body Parts (unit ၆ ခု)
- **Grammar**: Sentence, To be (am/is/are), Simple Present, Plurals, This/That/These/Those, Question words (unit ၆ ခု)
- **Listening**: Alphabet, Greetings, Numbers, Colors, Days of the Week, Family, Body Parts songs — video ၇ ခု
  — အားလုံးသည် **supersimple.com** နှင့် **The Singing Walrus** ရဲ့ တရားဝင် YouTube video များဖြစ်ပြီး
  တစ်ခုချင်းစီကို ရှာပြီး video ID ကို စစ်ဆေးပြီးမှ ထည့်ထားပါသည်
- **Speaking, Reading, Writing**: Unit ၂-၄ ခုစီ
- **Workbook**: မေးခွန်း ၁၂ ခု

## 🔊 အသံနှင့် 🎤 Mic feature အသစ်များ
- **Listening tab**: unit တစ်ခုစီအောက်မှာ 🔊 speaker ခလုတ် ထည့်ထားပါတယ် — အဓိကစကားစုကို ပြန်ဖွင့်နားထောင်နိုင်ပါတယ်
- **Speaking tab**: prompt တစ်ခုစီအောက်မှာ 🎤 mic ခလုတ် ထည့်ထားပါတယ် — နှိပ်ပြီး English လိုပြောကြည့်ပါ။
  ကလေးပြောတာကို browser ရဲ့ Speech Recognition နဲ့ တစ်ခါထဲ (instant) စစ်ပေးပြီး
  ✅ မှန်တယ် (သို့) ❌ ထပ်ကြိုးစားပါ လို့ ချက်ချင်း ပြပေးပါတယ်
  (Chrome/Edge browser မှာ အကောင်းဆုံး အလုပ်လုပ်ပါတယ်၊ Firefox အချို့မှာ အလုပ်မလုပ်နိုင်ပါ)
- **Voice ရွေးချယ်ခွင့်**: Home tab အောက်ဆုံးမှာ "🔊 Voice" dropdown ထည့်ထားပါတယ် —
  စက်/browser ပေါ်မူတည်ပြီး ရနိုင်တဲ့ အသံများထဲက အကောင်းဆုံး၊ AI ဆန်မှုအနည်းဆုံး အသံကို
  အလိုအလျောက် ရွေးပေးပါတယ်၊ ကိုယ်တိုင်လည်း ပြောင်းရွေးနိုင်ပါတယ် (ရွေးထားတာကို memory ထဲ မှတ်ထားပါတယ်)

## 🗣️ တကယ့်လူ့အသံ (Human Voice) ထည့်ချင်ရင်
Browser ရဲ့ 🔊 အသံဟာ synthetic (စက်ပြောသံ) ဖြစ်တဲ့အတွက် လူ့အသံအစစ်ချင်ရင်:
1. Word/phrase တစ်ခုစီကို phone ဖြင့် ကိုယ်တိုင် (သို့) မိသားစုဝင်တစ်ဦးဖြင့် mp3 short clip အနေနှင့် recording လုပ်ပါ
   (သို့) [Google Translate](https://translate.google.com) ရဲ့ 🔊 listen feature ကနေ mp3 download လုပ်နိုင်ပါတယ်
2. Recording files များကို website folder ထဲက `audio/` ဆိုတဲ့ folder အသစ်ဖန်တီးပြီး ထည့်ပါ
3. `data.js` ဖိုင်ထဲက `AUDIO_MAP` ထဲမှာ စကားလုံးနှင့် file path ကို တွဲထည့်ပါ
   ဥပမာ - `"hello": "audio/hello.mp3"`
4. ဒီစကားလုံးကို 🔊 နှိပ်တိုင်း website က browser voice အစား မိမိတင်ထားတဲ့ mp3 ကို ဖွင့်ပေးပါလိမ့်မယ်
   (AUDIO_MAP ထဲမပါသေးတဲ့ စကားလုံးများက ပုံမှန်အတိုင်း browser voice ကိုပဲ ဆက်သုံးပါလိမ့်မယ်)

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
