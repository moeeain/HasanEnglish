// ============================================================
// LESSON DATA — edit this file to add more words, grammar,
// videos, reading, writing and workbook questions.
// Every text item has en / my (Myanmar) / hi (Hindi).
// ============================================================

const VOCAB_UNITS = [
  {
    title: "Unit 1 — Greetings & People / နှုတ်ဆက်စကား · अभिवादन",
    words: [
      {emoji:"👋", en:"Hello", my:"မင်္ဂလာပါ", hi:"नमस्ते"},
      {emoji:"🙏", en:"Thank you", my:"ကျေးဇူးတင်ပါတယ်", hi:"धन्यवाद"},
      {emoji:"😊", en:"Please", my:"ကျေးဇူးပြု၍", hi:"कृपया"},
      {emoji:"👦", en:"Boy", my:"ယောကျ်ားလေး", hi:"लड़का"},
      {emoji:"👧", en:"Girl", my:"မိန်းကလေး", hi:"लड़की"},
      {emoji:"👨", en:"Man", my:"အမျိုးသား", hi:"आदमी"},
      {emoji:"👩", en:"Woman", my:"အမျိုးသမီး", hi:"महिला"},
      {emoji:"👶", en:"Baby", my:"ကလေးငယ်", hi:"बच्चा"},
      {emoji:"👨‍👩‍👧", en:"Family", my:"မိသားစု", hi:"परिवार"},
      {emoji:"🧑‍🏫", en:"Teacher", my:"ဆရာ/ဆရာမ", hi:"शिक्षक"}
    ]
  },
  {
    title: "Unit 2 — Everyday Things / နေ့စဉ်သုံးပစ္စည်းများ · रोज़मर्रा की चीज़ें",
    words: [
      {emoji:"📖", en:"Book", my:"စာအုပ်", hi:"किताब"},
      {emoji:"✏️", en:"Pencil", my:"ခဲတံ", hi:"पेंसिल"},
      {emoji:"🍚", en:"Rice", my:"ထမင်း", hi:"चावल"},
      {emoji:"💧", en:"Water", my:"ရေ", hi:"पानी"},
      {emoji:"🏠", en:"House", my:"အိမ်", hi:"घर"},
      {emoji:"🚗", en:"Car", my:"ကား", hi:"कार"},
      {emoji:"🐶", en:"Dog", my:"ခွေး", hi:"कुत्ता"},
      {emoji:"🐱", en:"Cat", my:"ကြောင်", hi:"बिल्ली"},
      {emoji:"☀️", en:"Sun", my:"နေ", hi:"सूरज"},
      {emoji:"🌙", en:"Moon", my:"လ", hi:"चाँद"}
    ]
  }
];

const GRAMMAR_UNITS = [
  {
    title: "Grammar 1 — What is a sentence? / ဝါကျဆိုတာ · वाक्य क्या है?",
    explain: [
      {en:"A sentence needs a SUBJECT (who/what) and a VERB (action). Example: I + eat.", 
       my:"ဝါကျတစ်ခုမှာ Subject (ဘယ်သူ/ဘာ) နဲ့ Verb (လုပ်ဆောင်ချက်) လိုအပ်ပါတယ်။ ဥပမာ - I + eat.",
       hi:"एक वाक्य में एक विषय (कौन/क्या) और एक क्रिया (काम) होना चाहिए। उदाहरण: I + eat."}
    ],
    examples: ["I eat rice.", "You read a book.", "She drinks water."]
  },
  {
    title: "Grammar 2 — The verb \"to be\" (am / is / are) / to be · होना",
    explain: [
      {en:"Use 'am' with I, 'is' with he/she/it, 'are' with you/we/they.",
       my:"I နဲ့ 'am' ကို၊ he/she/it နဲ့ 'is' ကို၊ you/we/they နဲ့ 'are' ကို သုံးပါ။",
       hi:"I के साथ 'am', he/she/it के साथ 'is', you/we/they के साथ 'are' का उपयोग करें।"}
    ],
    examples: ["I am a student.", "He is a boy.", "They are happy."]
  },
  {
    title: "Grammar 3 — Simple Present (daily habits) / လက်ရှိပြုမူ · वर्तमान काल",
    explain: [
      {en:"Use the simple present for daily habits. Add -s for he/she/it.",
       my:"နေ့စဉ်လုပ်လေ့ရှိတာကို Simple Present နဲ့ ပြောပါတယ်။ he/she/it နဲ့ -s ထပ်ထည့်ပါ။",
       hi:"रोज़ की आदतों के लिए वर्तमान काल का उपयोग करें। he/she/it के साथ -s जोड़ें।"}
    ],
    examples: ["I go to school.", "She goes to school.", "We play football."]
  }
];

const LISTENING_UNITS = [
  {title:"Listen 1 — Alphabet Song / ABC သီချင်း · वर्णमाला गीत",
   youtubeId:"75p-N9YKqNo",
   note:{en:"Listen and try to sing along.", my:"နားထောင်ပြီး လိုက်ဆိုကြည့်ပါ။", hi:"सुनें और साथ गाने की कोशिश करें।"}},
  {title:"Listen 2 — Easy Greetings Dialogue / နှုတ်ဆက်စကား · अभिवादन संवाद",
   youtubeId:"Vp08KzKfGWs",
   note:{en:"Listen for the greeting words you learned.", my:"သင်ယူထားတဲ့ နှုတ်ဆက်စကားများကို နားထောင်ပါ။", hi:"जो अभिवादन शब्द आपने सीखे हैं उन्हें सुनें।"}}
];

const SPEAKING_UNITS = [
  {title:"Speak 1 — Introduce yourself / မိတ်ဆက်ခြင်း · परिचय",
   prompts:[
     {en:"Say: \"Hello, my name is ___.\"", my:"ပြောကြည့်ပါ - \"Hello, my name is ___.\"", hi:"बोलें: \"Hello, my name is ___.\""},
     {en:"Say: \"I am ___ years old.\"", my:"ပြောကြည့်ပါ - \"I am ___ years old.\"", hi:"बोलें: \"I am ___ years old.\""}
   ]},
  {title:"Speak 2 — Talk about your day / နေ့စဉ်အကြောင်းပြော · अपने दिन के बारे में बताएं",
   prompts:[
     {en:"Say: \"I eat rice every day.\"", my:"ပြောကြည့်ပါ - \"I eat rice every day.\"", hi:"बोलें: \"I eat rice every day.\""},
     {en:"Say: \"I go to school.\"", my:"ပြောကြည့်ပါ - \"I go to school.\"", hi:"बोलें: \"I go to school.\""}
   ]}
];

const READING_UNITS = [
  {title:"Read 1 — My Family / ကျွန်တော့်မိသားစု · मेरा परिवार",
   text:"This is my family. I have a mother and a father. My mother is a teacher. My father is a farmer. I have one sister. We live in a small house.",
   translation:{
     my:"ဒါက ကျွန်တော့်မိသားစုပါ။ ကျွန်တော့်မှာ အမေနဲ့ အဖေရှိပါတယ်။ အမေက ဆရာမတစ်ယောက်ပါ။ အဖေက လယ်သမားတစ်ယောက်ပါ။ ညီမတစ်ယောက်ရှိပါတယ်။ ကျွန်တော်တို့ အိမ်ငယ်လေးမှာ နေထိုင်ကြပါတယ်။",
     hi:"यह मेरा परिवार है। मेरी एक माँ और एक पिता हैं। मेरी माँ एक शिक्षिका है। मेरे पिता एक किसान हैं। मेरी एक बहन है। हम एक छोटे से घर में रहते हैं।"
   },
   questions:[
     {en:"What is the mother's job?", my:"အမေရဲ့ အလုပ်က ဘာလဲ?", hi:"माँ का काम क्या है?"},
     {en:"How many sisters does the writer have?", my:"ညီမ ဘယ်နှစ်ယောက်ရှိလဲ?", hi:"लेखक की कितनी बहनें हैं?"}
   ]}
];

const WRITING_UNITS = [
  {title:"Write 1 — About me / ကျွန်တော့်အကြောင်း · मेरे बारे में",
   instructions:{
     en:"Write 3 sentences about yourself using: My name is ___. I am ___ years old. I live in ___.",
     my:"အောက်ပါပုံစံသုံးပြီး ကိုယ့်အကြောင်း ဝါကျ ၃ ကြောင်း ရေးပါ - My name is ___. I am ___ years old. I live in ___.",
     hi:"अपने बारे में 3 वाक्य लिखें: My name is ___. I am ___ years old. I live in ___."
   }}
];

const WORKBOOK_QUESTIONS = [
  {id:"w1", type:"mcq", q:{en:"How do you say 'ကျေးဇူးတင်ပါတယ် / धन्यवाद' in English?"},
   options:["Hello","Thank you","Please","Water"], answer:"Thank you"},
  {id:"w2", type:"mcq", q:{en:"Choose the correct word: I ___ a student."},
   options:["is","are","am","be"], answer:"am"},
  {id:"w3", type:"mcq", q:{en:"Choose the correct word: She ___ to school every day."},
   options:["go","goes","going","gone"], answer:"goes"},
  {id:"w4", type:"fill", q:{en:"Fill in: This is my ___ (မိသားစု / परिवार)."}, answer:"family"},
  {id:"w5", type:"fill", q:{en:"Fill in: I drink ___ every day. (ရေ / पानी)"}, answer:"water"},
  {id:"w6", type:"mcq", q:{en:"Which one means 'အိမ် / घर'?"},
   options:["Car","House","Book","Sun"], answer:"House"}
];
