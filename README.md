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

## ၄) Content ထပ်ဖြည့်နည်း (video, words, grammar, quiz)
`data.js` ဖိုင်ထဲမှာ Unit အသစ်တွေကို object အသစ်အဖြစ် array ထဲ ထပ်ထည့်ရုံပါပဲ —
ပုံစံအတိုင်း copy-paste ပြီး English/Myanmar/Hindi ၃ ခုစလုံး ဖြည့်ပေးပါ။
Listening video အတွက် YouTube video ID ကိုပဲ လိုအပ်ပါတယ် (link တစ်ခုလုံး မလို —
`youtube.com/watch?v=XXXXXXXX` ထဲက `XXXXXXXX` အပိုင်းပဲ ယူပါ)။

## မှတ်ချက်
- Word အသံထွက် (🔊) သည် browser ရဲ့ built-in text-to-speech ကို အသုံးပြုထားလို့
  internet connection ရှိသရွေ့ extra setup မလိုပါဘူး
- Firebase/Google Script မချိတ်ရသေးလည်း website က အပြည့်အဝ အလုပ်လုပ်ပါတယ်
  (score ကို browser ထဲမှာပဲ localStorage နဲ့ သိမ်းမှာဖြစ်ပါတယ်)
