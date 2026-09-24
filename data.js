// ============================================================
// LESSON DATA — edit this file to add more words, grammar,
// videos, reading, writing and workbook questions.
// Every text item has en / my (Myanmar) / hi (Hindi).
// ============================================================

// ============================================================
// AUDIO_MAP — OPTIONAL: real human-voice recordings.
// The 🔊 buttons use the browser's built-in synthetic voice by
// default. If you want a REAL human voice instead:
//   1) Record (or download) a short mp3 saying the word/phrase.
//   2) Put it in an "audio/" folder next to index.html.
//   3) Add a line below: "hello": "audio/hello.mp3"
// The exact text (lowercase) is the key. Anything not listed
// here just uses the browser's voice as usual.
// ============================================================
const AUDIO_MAP = {
  // "hello": "audio/hello.mp3",
  // "thank you": "audio/thank-you.mp3",
};

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
  },
  {
    title: "Unit 3 — Numbers / ဂဏန်းများ · संख्याएँ",
    words: [
      {emoji:"1️⃣", en:"One", my:"တစ်", hi:"एक"},
      {emoji:"2️⃣", en:"Two", my:"နှစ်", hi:"दो"},
      {emoji:"3️⃣", en:"Three", my:"သုံး", hi:"तीन"},
      {emoji:"4️⃣", en:"Four", my:"လေး", hi:"चार"},
      {emoji:"5️⃣", en:"Five", my:"ငါး", hi:"पाँच"},
      {emoji:"6️⃣", en:"Six", my:"ခြောက်", hi:"छह"},
      {emoji:"7️⃣", en:"Seven", my:"ခုနစ်", hi:"सात"},
      {emoji:"8️⃣", en:"Eight", my:"ရှစ်", hi:"आठ"},
      {emoji:"9️⃣", en:"Nine", my:"ကိုး", hi:"नौ"},
      {emoji:"🔟", en:"Ten", my:"ဆယ်", hi:"दस"}
    ]
  },
  {
    title: "Unit 4 — Colors / အရောင်များ · रंग",
    words: [
      {emoji:"🔴", en:"Red", my:"အနီရောင်", hi:"लाल"},
      {emoji:"🟡", en:"Yellow", my:"အဝါရောင်", hi:"पीला"},
      {emoji:"🔵", en:"Blue", my:"အပြာရောင်", hi:"नीला"},
      {emoji:"🟢", en:"Green", my:"အစိမ်းရောင်", hi:"हरा"},
      {emoji:"🟠", en:"Orange", my:"လိမ္မော်ရောင်", hi:"नारंगी"},
      {emoji:"🟣", en:"Purple", my:"ခရမ်းရောင်", hi:"बैंगनी"},
      {emoji:"⚪", en:"White", my:"အဖြူရောင်", hi:"सफ़ेद"},
      {emoji:"⚫", en:"Black", my:"အနက်ရောင်", hi:"काला"}
    ]
  },
  {
    title: "Unit 5 — Family / မိသားစုဝင်များ · परिवार के सदस्य",
    words: [
      {emoji:"👨", en:"Father", my:"အဖေ", hi:"पिता"},
      {emoji:"👩", en:"Mother", my:"အမေ", hi:"माँ"},
      {emoji:"👦", en:"Brother", my:"မောင်/အစ်ကို", hi:"भाई"},
      {emoji:"👧", en:"Sister", my:"ညီမ/အစ်မ", hi:"बहन"},
      {emoji:"👴", en:"Grandfather", my:"အဖိုး", hi:"दादा"},
      {emoji:"👵", en:"Grandmother", my:"အဖွား", hi:"दादी"},
      {emoji:"🧑", en:"Cousin", my:"ဝမ်းကွဲ", hi:"चचेरा भाई/बहन"}
    ]
  },
  {
    title: "Unit 6 — Body Parts / ခန္ဓာကိုယ်အင်္ဂါများ · शरीर के अंग",
    words: [
      {emoji:"👤", en:"Head", my:"ခေါင်း", hi:"सिर"},
      {emoji:"💪", en:"Shoulders", my:"ပခုံး", hi:"कंधे"},
      {emoji:"🦵", en:"Knees", my:"ဒူး", hi:"घुटने"},
      {emoji:"🦶", en:"Toes", my:"ခြေချောင်း", hi:"पैर की उंगलियाँ"},
      {emoji:"👀", en:"Eyes", my:"မျက်လုံး", hi:"आँखें"},
      {emoji:"👂", en:"Ears", my:"နား", hi:"कान"},
      {emoji:"👄", en:"Mouth", my:"ပါးစပ်", hi:"मुँह"},
      {emoji:"👃", en:"Nose", my:"နှာခေါင်း", hi:"नाक"}
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
  },
  {
    title: "Grammar 4 — Plural nouns (one → many) / အများကိန်း · बहुवचन",
    explain: [
      {en:"Add -s to most words to show more than one. Some words are irregular.",
       my:"တစ်ခုထက်ပိုတာကို ပြဖို့ အများစုမှာ -s ထပ်ထည့်ပါ။ အချို့စကားလုံးများက ပုံမှန်မဟုတ်ပါ။",
       hi:"एक से अधिक दिखाने के लिए ज़्यादातर शब्दों में -s जोड़ें। कुछ शब्द अनियमित होते हैं।"}
    ],
    examples: ["One book, two books.", "One cat, three cats.", "One child, two children. (irregular)"]
  },
  {
    title: "Grammar 5 — This / That / These / Those / ဒီဟာ · ဟိုဟာ · यह/वह",
    explain: [
      {en:"'This/These' = near you. 'That/Those' = far from you. This/That = one thing. These/Those = many things.",
       my:"'This/These' = နီးနီးဟာ။ 'That/Those' = ဝေးဝေးဟာ။ This/That = တစ်ခု။ These/Those = အများ။",
       hi:"'This/These' = पास की चीज़। 'That/Those' = दूर की चीज़। This/That = एक चीज़। These/Those = कई चीज़ें।"}
    ],
    examples: ["This is my book.", "That is your house.", "These are my pencils.", "Those are their shoes."]
  },
  {
    title: "Grammar 6 — Question words (What, Where, Who) / မေးခွန်းလုံးများ · प्रश्न शब्द",
    explain: [
      {en:"'What' asks about things, 'Where' asks about places, 'Who' asks about people.",
       my:"'What' က အရာဝတ္ထုကို မေးတယ်၊ 'Where' က နေရာကို မေးတယ်၊ 'Who' က လူကို မေးတယ်။",
       hi:"'What' चीज़ों के बारे में पूछता है, 'Where' जगह के बारे में, 'Who' व्यक्ति के बारे में।"}
    ],
    examples: ["What is your name?", "Where do you live?", "Who is your teacher?"]
  }
];

const LISTENING_UNITS = [
  {title:"Listen 1 — The Alphabet Song / အက္ခရာသီချင်း · वर्णमाला गीत",
   youtubeId:"MgmIHtp-ZQM",
   keyPhrase:"A, B, C, D, E, F, G",
   note:{en:"Sing along slowly, letter by letter.", my:"တစ်လုံးချင်း ဖြည်းဖြည်း လိုက်ဆိုကြည့်ပါ။", hi:"धीरे-धीरे, अक्षर दर अक्षर साथ गाएं।"}},
  {title:"Listen 2 — Hello Hello! (Greetings) / နှုတ်ဆက်စကား · अभिवादन गीत",
   youtubeId:"YxKEm1XgOlk",
   keyPhrase:"Hello, hello, hello!",
   note:{en:"Listen for the greeting words you learned.", my:"သင်ယူထားတဲ့ နှုတ်ဆက်စကားများကို နားထောင်ပါ။", hi:"जो अभिवादन शब्द आपने सीखे हैं उन्हें सुनें।"}},
  {title:"Listen 3 — Number Song 1–20 / ဂဏန်းသီချင်း · संख्या गीत",
   youtubeId:"D0Ajq682yrA",
   keyPhrase:"One, two, three, four, five",
   note:{en:"Count along with the song, then count things around you.", my:"သီချင်းလိုက်ရေတွက်ပြီး ပတ်ဝန်းကျင်က ပစ္စည်းတွေကို ပြန်ရေတွက်ကြည့်ပါ။", hi:"गाने के साथ गिनें, फिर अपने आस-पास की चीज़ें गिनें।"}},
  {title:"Listen 4 — The Rainbow Song (Colors) / အရောင်သီချင်း · रंगों का गीत",
   youtubeId:"wceMsYSyNUQ",
   keyPhrase:"I see a rainbow in the sky",
   note:{en:"Listen for the color words you learned.", my:"သင်ယူထားတဲ့ အရောင်စကားလုံးများကို နားထောင်ပါ။", hi:"जो रंगों के शब्द आपने सीखे हैं उन्हें सुनें।"}},
  {title:"Listen 5 — Days of the Week Song / ရက်သတ္တပတ်သီချင်း · सप्ताह के दिनों का गीत",
   youtubeId:"mXMofxtDPUQ",
   keyPhrase:"Sunday, Monday, Tuesday, Wednesday",
   note:{en:"Try to say the 7 days in order after listening.", my:"နားထောင်ပြီးနောက် ရက် ၇ ရက်ကို အစဉ်လိုက် ပြောကြည့်ပါ။", hi:"सुनने के बाद 7 दिनों को क्रम से बोलने की कोशिश करें।"}},
  {title:"Listen 6 — The People In My Family / မိသားစုသီချင်း · परिवार का गीत",
   youtubeId:"yDua9ms9_eg",
   keyPhrase:"This is my father, this is my mother",
   note:{en:"Listen for the family words: father, mother, sister, brother.", my:"father, mother, sister, brother — မိသားစုစကားလုံးများကို နားထောင်ပါ။", hi:"पारिवारिक शब्दों को सुनें: father, mother, sister, brother."}},
  {title:"Listen 7 — Head, Shoulders, Knees & Toes (Body Parts) / ခန္ဓာကိုယ်သီချင်း · शरीर के अंगों का गीत",
   youtubeId:"PynsQ_BWYht",
   keyPhrase:"Head, shoulders, knees, and toes",
   note:{en:"Point to each body part while you sing.", my:"သီချင်းဆိုစဉ် ခန္ဓာကိုယ်အစိတ်အပိုင်းကို လက်ညှိုးထိုးပြပါ။", hi:"गाते समय शरीर के हर अंग की ओर इशारा करें।"}}
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
   ]},
  {title:"Speak 3 — Talk about your family / မိသားစုအကြောင်းပြော · परिवार के बारे में बताएं",
   prompts:[
     {en:"Say: \"This is my mother. This is my father.\"", my:"ပြောကြည့်ပါ - \"This is my mother. This is my father.\"", hi:"बोलें: \"This is my mother. This is my father.\""},
     {en:"Say: \"I have one brother and one sister.\"", my:"ပြောကြည့်ပါ - \"I have one brother and one sister.\"", hi:"बोलें: \"I have one brother and one sister.\""}
   ]},
  {title:"Speak 4 — Ask and answer / မေးမြန်းခြင်း · पूछना और जवाब देना",
   prompts:[
     {en:"Ask a friend: \"What is your name?\" Answer: \"My name is ___.\"", my:"သူငယ်ချင်းကို မေးပါ - \"What is your name?\" ဖြေပါ - \"My name is ___.\"", hi:"दोस्त से पूछें: \"What is your name?\" जवाब दें: \"My name is ___.\""},
     {en:"Ask: \"What color is this?\" Answer: \"It is red.\"", my:"မေးပါ - \"What color is this?\" ဖြေပါ - \"It is red.\"", hi:"पूछें: \"What color is this?\" जवाब दें: \"It is red.\""}
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
   ]},
  {title:"Read 2 — My Day / ကျွန်တော့်တစ်နေ့ · मेरा दिन",
   text:"I get up at six o'clock. I eat rice for breakfast. Then I go to school. I have three books in my bag. After school, I play with my friends. At night, I sleep at nine o'clock.",
   translation:{
     my:"ကျွန်တော် ခြောက်နာရီမှာ နိုးပါတယ်။ မနက်စာအတွက် ထမင်းစားပါတယ်။ ပြီးရင် ကျောင်းသွားပါတယ်။ ကျွန်တော့်အိတ်ထဲမှာ စာအုပ် သုံးအုပ်ရှိပါတယ်။ ကျောင်းပြီးရင် သူငယ်ချင်းတွေနဲ့ ကစားပါတယ်။ ညမှာ ကိုးနာရီအချိန်မှာ အိပ်ပါတယ်။",
     hi:"मैं छह बजे उठता हूँ। मैं नाश्ते में चावल खाता हूँ। फिर मैं स्कूल जाता हूँ। मेरे बैग में तीन किताबें हैं। स्कूल के बाद, मैं अपने दोस्तों के साथ खेलता हूँ। रात को, मैं नौ बजे सोता हूँ।"
   },
   questions:[
     {en:"What time does the writer get up?", my:"ဘယ်အချိန်မှာ နိုးလဲ?", hi:"लेखक कितने बजे उठता है?"},
     {en:"How many books are in the bag?", my:"အိတ်ထဲမှာ စာအုပ် ဘယ်နှစ်အုပ်ရှိလဲ?", hi:"बैग में कितनी किताबें हैं?"}
   ]}
];

const WRITING_UNITS = [
  {title:"Write 1 — About me / ကျွန်တော့်အကြောင်း · मेरे बारे में",
   instructions:{
     en:"Write 3 sentences about yourself using: My name is ___. I am ___ years old. I live in ___.",
     my:"အောက်ပါပုံစံသုံးပြီး ကိုယ့်အကြောင်း ဝါကျ ၃ ကြောင်း ရေးပါ - My name is ___. I am ___ years old. I live in ___.",
     hi:"अपने बारे में 3 वाक्य लिखें: My name is ___. I am ___ years old. I live in ___."
   }},
  {title:"Write 2 — My Day / ကျွန်တော့်တစ်နေ့ · मेरा दिन",
   instructions:{
     en:"Write 3 sentences about your day using: I get up at ___. I go to ___. I sleep at ___.",
     my:"အောက်ပါပုံစံသုံးပြီး ကိုယ့်နေ့စဉ်အကြောင်း ဝါကျ ၃ ကြောင်း ရေးပါ - I get up at ___. I go to ___. I sleep at ___.",
     hi:"अपने दिन के बारे में 3 वाक्य लिखें: I get up at ___. I go to ___. I sleep at ___."
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
   options:["Car","House","Book","Sun"], answer:"House"},
  {id:"w7", type:"mcq", q:{en:"What number is this: 7?"},
   options:["Five","Seven","Nine","Ten"], answer:"Seven"},
  {id:"w8", type:"fill", q:{en:"Fill in: The sky is ___ (အပြာရောင် / नीला)."}, answer:"blue"},
  {id:"w9", type:"mcq", q:{en:"Choose the plural: One book, two ___."},
   options:["book","books","bookes","bookies"], answer:"books"},
  {id:"w10", type:"mcq", q:{en:"___ is my mother. (near you)"},
   options:["That","Those","This","These"], answer:"This"},
  {id:"w11", type:"fill", q:{en:"Fill in the question word: ___ is your name? (What/Where/Who)"}, answer:"What"},
  {id:"w12", type:"mcq", q:{en:"Choose the word for 'အဖေ / पिता':"},
   options:["Mother","Father","Sister","Brother"], answer:"Father"}
];
