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
  },
  {
    title: "Unit 7 — Animals / တိရစ္ဆာန်များ · जानवर",
    words: [
      {emoji:"🐘", en:"Elephant", my:"ဆင်", hi:"हाथी"},
      {emoji:"🐒", en:"Monkey", my:"မျောက်", hi:"बंदर"},
      {emoji:"🐯", en:"Tiger", my:"ကျား", hi:"बाघ"},
      {emoji:"🐸", en:"Frog", my:"ဖား", hi:"मेंढक"},
      {emoji:"🐦", en:"Bird", my:"ငှက်", hi:"चिड़िया"},
      {emoji:"🐟", en:"Fish", my:"ငါး", hi:"मछली"},
      {emoji:"🐔", en:"Chicken", my:"ကြက်", hi:"मुर्गी"},
      {emoji:"🐮", en:"Cow", my:"နွား", hi:"गाय"}
    ]
  },
  {
    title: "Unit 8 — Food / အစားအစာများ · भोजन",
    words: [
      {emoji:"🍎", en:"Apple", my:"ပန်းသီး", hi:"सेब"},
      {emoji:"🍌", en:"Banana", my:"ငှက်ပျောသီး", hi:"केला"},
      {emoji:"🍞", en:"Bread", my:"ပေါင်မုန့်", hi:"रोटी"},
      {emoji:"🥛", en:"Milk", my:"နို့", hi:"दूध"},
      {emoji:"🥚", en:"Egg", my:"ဥ", hi:"अंडा"},
      {emoji:"🍗", en:"Chicken (food)", my:"ကြက်သား", hi:"चिकन"},
      {emoji:"🥗", en:"Vegetables", my:"ဟင်းသီးဟင်းရွက်", hi:"सब्ज़ियाँ"},
      {emoji:"🍬", en:"Candy", my:"သကြားလုံး", hi:"मिठाई"}
    ]
  },
  {
    title: "Unit 9 — Days of the Week / ရက်သတ္တပတ်ရက်များ · सप्ताह के दिन",
    words: [
      {emoji:"📅", en:"Monday", my:"တနင်္လာနေ့", hi:"सोमवार"},
      {emoji:"📅", en:"Tuesday", my:"အင်္ဂါနေ့", hi:"मंगलवार"},
      {emoji:"📅", en:"Wednesday", my:"ဗုဒ္ဓဟူးနေ့", hi:"बुधवार"},
      {emoji:"📅", en:"Thursday", my:"ကြာသပတေးနေ့", hi:"गुरुवार"},
      {emoji:"📅", en:"Friday", my:"သောကြာနေ့", hi:"शुक्रवार"},
      {emoji:"📅", en:"Saturday", my:"စနေနေ့", hi:"शनिवार"},
      {emoji:"📅", en:"Sunday", my:"တနင်္ဂနွေနေ့", hi:"रविवार"}
    ]
  },
  {
    title: "Unit 10 — Weather / ရာသီဥတု · मौसम",
    words: [
      {emoji:"☀️", en:"Sunny", my:"နေသာသည်", hi:"धूप वाला"},
      {emoji:"🌧️", en:"Rainy", my:"မိုးရွာသည်", hi:"बारिश वाला"},
      {emoji:"☁️", en:"Cloudy", my:"တိမ်ထူသည်", hi:"बादल वाला"},
      {emoji:"❄️", en:"Snowy", my:"နှင်းကျသည်", hi:"बर्फ़ वाला"},
      {emoji:"💨", en:"Windy", my:"လေတိုက်သည်", hi:"हवा वाला"},
      {emoji:"🌡️", en:"Hot", my:"ပူသည်", hi:"गरम"},
      {emoji:"🥶", en:"Cold", my:"အေးသည်", hi:"ठंडा"}
    ]
  },
  {
    title: "Unit 11 — Clothing / အဝတ်အစား · कपड़े",
    words: [
      {emoji:"👕", en:"Shirt", my:"ရှပ်အင်္ကျီ", hi:"कमीज़"},
      {emoji:"👖", en:"Pants", my:"ဘောင်းဘီ", hi:"पैंट"},
      {emoji:"👗", en:"Dress", my:"ဂါဝန်", hi:"पोशाक"},
      {emoji:"🧢", en:"Hat", my:"ဦးထုပ်", hi:"टोपी"},
      {emoji:"👟", en:"Shoes", my:"ဖိနပ်", hi:"जूते"},
      {emoji:"🧦", en:"Socks", my:"ခြေအိတ်", hi:"मोज़े"},
      {emoji:"🧥", en:"Jacket", my:"ဂျာကက်", hi:"जैकेट"}
    ]
  },
  {
    title: "Unit 12 — Shapes / ပုံသဏ္ဍာန်များ · आकार",
    words: [
      {emoji:"⭕", en:"Circle", my:"စက်ဝိုင်း", hi:"वृत्त"},
      {emoji:"⬜", en:"Square", my:"စတုရန်း", hi:"वर्ग"},
      {emoji:"🔺", en:"Triangle", my:"တြိဂံ", hi:"त्रिभुज"},
      {emoji:"⭐", en:"Star", my:"ကြယ်", hi:"तारा"},
      {emoji:"💛", en:"Heart", my:"နှလုံးသား ပုံသဏ္ဍာန်", hi:"दिल का आकार"}
    ]
  },
  {
    title: "Unit 13 — Occupations / အလုပ်အကိုင်များ · व्यवसाय",
    words: [
      {emoji:"👩‍⚕️", en:"Doctor", my:"ဆရာဝန်", hi:"डॉक्टर"},
      {emoji:"👮", en:"Police officer", my:"ရဲ", hi:"पुलिस अधिकारी"},
      {emoji:"👨‍🌾", en:"Farmer", my:"လယ်သမား", hi:"किसान"},
      {emoji:"👨‍🍳", en:"Cook", my:"ဟင်းချက်သူ", hi:"रसोइया"},
      {emoji:"👷", en:"Builder", my:"လုပ်ငန်းသမား", hi:"मिस्त्री"},
      {emoji:"🧑‍💼", en:"Office worker", my:"ရုံးဝန်ထမ်း", hi:"कार्यालय कर्मचारी"}
    ]
  },
  {
    title: "Unit 14 — Time & Clock / အချိန်နှင့် နာရီ · समय और घड़ी",
    words: [
      {emoji:"🕐", en:"O'clock", my:"နာရီပြည့်", hi:"बजे"},
      {emoji:"🌅", en:"Morning", my:"မနက်", hi:"सुबह"},
      {emoji:"🌇", en:"Afternoon", my:"နေ့လယ်", hi:"दोपहर"},
      {emoji:"🌃", en:"Evening", my:"ညနေ", hi:"शाम"},
      {emoji:"🌙", en:"Night", my:"ညအချိန်", hi:"रात"},
      {emoji:"⏰", en:"Early", my:"စောစော", hi:"जल्दी"},
      {emoji:"⏳", en:"Late", my:"နောက်ကျ", hi:"देर से"}
    ]
  },
  {
    title: "Unit 15 — Sports / အားကစားများ · खेल",
    words: [
      {emoji:"⚽", en:"Football", my:"ဘောလုံး", hi:"फुटबॉल"},
      {emoji:"🏀", en:"Basketball", my:"ဘတ်စကက်ဘော", hi:"बास्केटबॉल"},
      {emoji:"🏊", en:"Swimming", my:"ရေကူး", hi:"तैराकी"},
      {emoji:"🏃", en:"Running", my:"ပြေး", hi:"दौड़ना"},
      {emoji:"🚴", en:"Cycling", my:"စက်ဘီးစီး", hi:"साइकिल चलाना"},
      {emoji:"🏸", en:"Badminton", my:"ကွင်းလုံးအန်ခုန်", hi:"बैडमिंटन"}
    ]
  },
  {
    title: "Unit 16 — Transportation / သယ်ယူပို့ဆောင်ရေး · परिवहन",
    words: [
      {emoji:"🚌", en:"Bus", my:"ဘတ်စ်ကား", hi:"बस"},
      {emoji:"🚗", en:"Car", my:"ကား", hi:"कार"},
      {emoji:"🚲", en:"Bicycle", my:"စက်ဘီး", hi:"साइकिल"},
      {emoji:"✈️", en:"Airplane", my:"လေယာဉ်", hi:"हवाई जहाज़"},
      {emoji:"🚢", en:"Boat", my:"လှေ", hi:"नाव"},
      {emoji:"🚆", en:"Train", my:"ရထား", hi:"ट्रेन"},
      {emoji:"🏍️", en:"Motorbike", my:"မော်တော်ဆိုင်ကယ်", hi:"मोटरसाइकिल"}
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
  },
  {
    title: "Grammar 7 — Adjectives (describing words) / နာမဝိသေသန · विशेषण",
    explain: [
      {en:"Adjectives describe nouns. They usually come before the noun.",
       my:"Adjective တွေက naun ကို ဖော်ပြပါတယ်။ ပုံမှန်အားဖြင့် naun ရှေ့မှာ ရှိပါတယ်။",
       hi:"विशेषण संज्ञा का वर्णन करते हैं। वे आमतौर पर संज्ञा से पहले आते हैं।"}
    ],
    examples: ["A big elephant.", "A small frog.", "A red apple."]
  },
  {
    title: "Grammar 8 — Prepositions of place (in, on, under) / နေရာပြ preposition · स्थान बताने वाले शब्द",
    explain: [
      {en:"'In' = inside. 'On' = on top of. 'Under' = below.",
       my:"'In' = အထဲမှာ။ 'On' = အပေါ်မှာ။ 'Under' = အောက်မှာ။",
       hi:"'In' = अंदर। 'On' = ऊपर। 'Under' = नीचे।"}
    ],
    examples: ["The book is on the table.", "The cat is under the chair.", "The pencil is in the bag."]
  },
  {
    title: "Grammar 9 — Possessive words (my, your, his, her) / ပိုင်ဆိုင်မှုပြ · संबंधवाचक शब्द",
    explain: [
      {en:"These words show who something belongs to.",
       my:"ဒီစကားလုံးတွေက တစ်ခုခုက ဘယ်သူ့ဟာဖြစ်တယ်ဆိုတာကို ပြပါတယ်။",
       hi:"ये शब्द दिखाते हैं कि कोई चीज़ किसकी है।"}
    ],
    examples: ["This is my book.", "That is your bag.", "This is his pencil.", "That is her house."]
  },
  {
    title: "Grammar 10 — Simple Past (yesterday) / အတိတ်ကာလ · भूतकाल",
    explain: [
      {en:"Use the simple past for things that already happened. Many verbs add -ed.",
       my:"ဖြစ်ပြီးသားအရာများအတွက် Simple Past သုံးပါ။ verb အများစုက -ed ထပ်ထည့်ပါတယ်။",
       hi:"जो हो चुका है उसके लिए भूतकाल का उपयोग करें। कई क्रियाओं में -ed जोड़ा जाता है।"}
    ],
    examples: ["I played football yesterday.", "She walked to school.", "We ate rice. (irregular)"]
  },
  {
    title: "Grammar 11 — Can / Can't (ability) / တတ်ကျွမ်းမှု · क्षमता",
    explain: [
      {en:"'Can' shows you are able to do something. 'Can't' shows you are not able.",
       my:"'Can' က တတ်ကျွမ်းမှုကို ပြပါတယ်။ 'Can't' က မတတ်ကျွမ်းမှုကို ပြပါတယ်။",
       hi:"'Can' दिखाता है कि आप कुछ कर सकते हैं। 'Can't' दिखाता है कि आप नहीं कर सकते।"}
    ],
    examples: ["I can swim.", "She can sing.", "He can't fly."]
  },
  {
    title: "Grammar 12 — There is / There are / ရှိသည် · है / हैं",
    explain: [
      {en:"'There is' for one thing. 'There are' for many things.",
       my:"'There is' တစ်ခုတည်းအတွက်။ 'There are' အများအတွက်။",
       hi:"'There is' एक चीज़ के लिए। 'There are' कई चीज़ों के लिए।"}
    ],
    examples: ["There is a cat on the bed.", "There are three books on the table."]
  },
  {
    title: "Grammar 13 — Comparative & Superlative / နှိုင်းယှဉ်ခြင်း · तुलना",
    explain: [
      {en:"Add -er to compare two things. Add -est (with 'the') to compare three or more.",
       my:"နှစ်ခုနှိုင်းယှဉ်ဖို့ -er ထပ်ထည့်ပါ။ သုံးခုထက်ပိုတာကို နှိုင်းယှဉ်ဖို့ 'the' + -est သုံးပါ။",
       hi:"दो चीज़ों की तुलना के लिए -er जोड़ें। तीन या अधिक के लिए 'the' + -est का उपयोग करें।"}
    ],
    examples: ["This bag is bigger than that one.", "This is the biggest elephant in the zoo.", "She is taller than me."]
  },
  {
    title: "Grammar 14 — Past Continuous (was/were + -ing) / ဖြစ်ပျက်နေဆဲအတိတ် · भूतकाल निरंतर",
    explain: [
      {en:"Use 'was/were' + verb-ing for an action that was happening at a certain time in the past.",
       my:"အတိတ်ကာလက အချိန်တစ်ခုမှာ ဖြစ်ပျက်နေတဲ့အရာအတွက် 'was/were' + verb-ing သုံးပါ။",
       hi:"अतीत के किसी समय हो रही क्रिया के लिए 'was/were' + verb-ing का उपयोग करें।"}
    ],
    examples: ["I was reading a book at 8pm.", "They were playing football yesterday.", "She was sleeping when I called."]
  },
  {
    title: "Grammar 15 — Future with \"going to\" / အနာဂတ်ကာလ (\"going to\") · भविष्य काल (\"going to\")",
    explain: [
      {en:"Use 'am/is/are + going to' to talk about a plan for the future.",
       my:"အနာဂတ် အစီအစဉ်ကို ပြောဖို့ 'am/is/are + going to' သုံးပါ။",
       hi:"भविष्य की योजना के बारे में बताने के लिए 'am/is/are + going to' का उपयोग करें।"}
    ],
    examples: ["I am going to visit my grandmother.", "It is going to rain.", "We are going to play football tomorrow."]
  },
  {
    title: "Grammar 16 — Adverbs of Frequency (always, sometimes, never) / ကြိမ်နှုန်းပြ · आवृत्ति क्रिया-विशेषण",
    explain: [
      {en:"These words say how often something happens. They go before the main verb.",
       my:"ဒီစကားလုံးတွေက တစ်ခုခု ဘယ်လောက်ကြာကြာဖြစ်လဲဆိုတာ ပြပါတယ်။ verb ရှေ့မှာ ရှိပါတယ်။",
       hi:"ये शब्द बताते हैं कि कोई काम कितनी बार होता है। ये मुख्य क्रिया से पहले आते हैं।"}
    ],
    examples: ["I always eat breakfast.", "She sometimes plays basketball.", "He never eats candy."]
  },
  {
    title: "Grammar 17 — Telling Time / အချိန်ပြောခြင်း · समय बताना",
    explain: [
      {en:"Use 'It is + [hour] o'clock' for the exact hour, or 'It is half past / quarter past [hour]'.",
       my:"နာရီအတိအကျအတွက် 'It is + [hour] o'clock' သုံးပါ၊ (သို့) 'It is half past / quarter past [hour]'.",
       hi:"ठीक समय के लिए 'It is + [hour] o'clock' का उपयोग करें, या 'It is half past / quarter past [hour]'."}
    ],
    examples: ["It is three o'clock.", "It is half past seven.", "It is quarter past nine."]
  },
  {
    title: "Grammar 18 — Object Pronouns (me, him, her, them) / အရာဝတ္ထုပြ နာမ်စား · कर्म सर्वनाम",
    explain: [
      {en:"Object pronouns replace a noun that receives the action (comes after the verb).",
       my:"Object pronoun တွေက verb ရဲ့ လက်ခံသူ naun ကို အစားထိုးပါတယ် (verb ရဲ့ နောက်မှာ လာပါတယ်)။",
       hi:"कर्म सर्वनाम उस संज्ञा की जगह लेते हैं जो क्रिया प्राप्त करती है (क्रिया के बाद आती है)।"}
    ],
    examples: ["I see him.", "She likes me.", "We help them.", "Please give it to her."]
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
   note:{en:"Point to each body part while you sing.", my:"သီချင်းဆိုစဉ် ခန္ဓာကိုယ်အစိတ်အပိုင်းကို လက်ညှိုးထိုးပြပါ။", hi:"गाते समय शरीर के हर अंग की ओर इशारा करें।"}},
  {title:"Listen 8 — Walking In The Jungle (Animals) / တိရစ္ဆာန်သီချင်း · जानवरों का गीत",
   youtubeId:"GoSq-yZcJ-4",
   keyPhrase:"Walking in the jungle, we're not afraid",
   note:{en:"Listen for the animal names: frog, monkey, toucan, tiger.", my:"frog, monkey, toucan, tiger — တိရစ္ဆာန်နာမည်များကို နားထောင်ပါ။", hi:"जानवरों के नाम सुनें: frog, monkey, toucan, tiger."}},
  {title:"Listen 9 — How's The Weather? / ရာသီဥတုသီချင်း · मौसम का गीत",
   youtubeId:"dTY0DHL9Lxb",
   keyPhrase:"How's the weather today?",
   note:{en:"Listen for: sunny, rainy, cloudy, snowy.", my:"sunny, rainy, cloudy, snowy — ရာသီဥတုစကားလုံးများကို နားထောင်ပါ။", hi:"मौसम के शब्द सुनें: sunny, rainy, cloudy, snowy."}}
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
   ]},
  {title:"Speak 5 — Describe things / ပစ္စည်းကို ဖော်ပြခြင်း · चीज़ों का वर्णन करें",
   prompts:[
     {en:"Say: \"This is a big elephant.\"", my:"ပြောကြည့်ပါ - \"This is a big elephant.\"", hi:"बोलें: \"This is a big elephant.\""},
     {en:"Say: \"I like red apples.\"", my:"ပြောကြည့်ပါ - \"I like red apples.\"", hi:"बोलें: \"I like red apples.\""}
   ]},
  {title:"Speak 6 — Talk about the week / ရက်သတ္တပတ်အကြောင်းပြော · सप्ताह के बारे में बताएं",
   prompts:[
     {en:"Say: \"Today is Monday.\"", my:"ပြောကြည့်ပါ - \"Today is Monday.\"", hi:"बोलें: \"Today is Monday.\""},
     {en:"Say: \"I go to school on Monday.\"", my:"ပြောကြည့်ပါ - \"I go to school on Monday.\"", hi:"बोलें: \"I go to school on Monday.\""}
   ]},
  {title:"Speak 7 — Talk about the weather / ရာသီဥတုအကြောင်းပြော · मौसम के बारे में बताएं",
   prompts:[
     {en:"Say: \"It is sunny today.\"", my:"ပြောကြည့်ပါ - \"It is sunny today.\"", hi:"बोलें: \"It is sunny today.\""},
     {en:"Ask: \"How's the weather?\" Answer: \"It is rainy.\"", my:"မေးပါ - \"How's the weather?\" ဖြေပါ - \"It is rainy.\"", hi:"पूछें: \"How's the weather?\" जवाब दें: \"It is rainy.\""}
   ]},
  {title:"Speak 8 — What you can do / တတ်ကျွမ်းမှုပြောခြင်း · अपनी क्षमता बताएं",
   prompts:[
     {en:"Say: \"I can swim.\"", my:"ပြောကြည့်ပါ - \"I can swim.\"", hi:"बोलें: \"I can swim.\""},
     {en:"Say: \"I can't fly, but I can run.\"", my:"ပြောကြည့်ပါ - \"I can't fly, but I can run.\"", hi:"बोलें: \"I can't fly, but I can run.\""}
   ]},
  {title:"Speak 9 — Comparing things / နှိုင်းယှဉ်ပြောခြင်း · चीज़ों की तुलना करें",
   prompts:[
     {en:"Say: \"An elephant is bigger than a cat.\"", my:"ပြောကြည့်ပါ - \"An elephant is bigger than a cat.\"", hi:"बोलें: \"An elephant is bigger than a cat.\""},
     {en:"Say: \"This is the tallest tree.\"", my:"ပြောကြည့်ပါ - \"This is the tallest tree.\"", hi:"बोलें: \"This is the tallest tree.\""}
   ]},
  {title:"Speak 10 — Future plans / အနာဂတ်အစီအစဉ် · भविष्य की योजनाएं",
   prompts:[
     {en:"Say: \"I am going to visit my friend.\"", my:"ပြောကြည့်ပါ - \"I am going to visit my friend.\"", hi:"बोलें: \"I am going to visit my friend.\""},
     {en:"Say: \"We are going to play football tomorrow.\"", my:"ပြောကြည့်ပါ - \"We are going to play football tomorrow.\"", hi:"बोलें: \"We are going to play football tomorrow.\""}
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
   ]},
  {title:"Read 3 — My Favorite Animal / ကျွန်တော်အကြိုက်ဆုံးတိရစ္ဆာန် · मेरा पसंदीदा जानवर",
   text:"My favorite animal is the elephant. It is big and gray. It has a long nose. Elephants eat leaves and fruit. They are very smart animals. I want to see an elephant one day.",
   translation:{
     my:"ကျွန်တော်အကြိုက်ဆုံးတိရစ္ဆာန်က ဆင်ဖြစ်ပါတယ်။ ဆင်ကြီးက ကြီးမားပြီး မီးခိုးရောင်ဖြစ်ပါတယ်။ နှာမောင်းရှည်ရှည်ရှိပါတယ်။ ဆင်တွေက အရွက်နဲ့ အသီးအနှံကို စားပါတယ်။ ဆင်တွေက အလွန်ဉာဏ်ကောင်းတဲ့ တိရစ္ဆာန်တွေဖြစ်ပါတယ်။ ကျွန်တော် တစ်နေ့နေ့ ဆင်ကို တွေ့ချင်ပါတယ်။",
     hi:"मेरा पसंदीदा जानवर हाथी है। यह बड़ा और भूरे रंग का है। इसकी सूंड लंबी है। हाथी पत्ते और फल खाते हैं। वे बहुत बुद्धिमान जानवर हैं। मैं एक दिन हाथी देखना चाहता हूँ।"
   },
   questions:[
     {en:"What color is the elephant?", my:"ဆင်ရဲ့ အရောင်က ဘာလဲ?", hi:"हाथी का रंग क्या है?"},
     {en:"What do elephants eat?", my:"ဆင်တွေက ဘာစားလဲ?", hi:"हाथी क्या खाते हैं?"}
   ]},
  {title:"Read 4 — My School / ကျွန်တော့်ကျောင်း · मेरा स्कूल",
   text:"My school is big and yellow. I have many friends there. My teacher is kind. We learn math, English, and science. On rainy days, we play inside. I like my school very much.",
   translation:{
     my:"ကျွန်တော့်ကျောင်းက ကြီးမားပြီး အဝါရောင်ဖြစ်ပါတယ်။ အဲဒီမှာ သူငယ်ချင်း အများကြီးရှိပါတယ်။ ကျွန်တော့်ဆရာမက စိတ်ကောင်းရှိပါတယ်။ သင်္ချာ၊ အင်္ဂလိပ်စာနဲ့ သိပ္ပံသင်ကြားပါတယ်။ မိုးရွာတဲ့နေ့မှာ ကျွန်တော်တို့ အထဲမှာ ကစားကြပါတယ်။ ကျွန်တော့်ကျောင်းကို အရမ်းကြိုက်ပါတယ်။",
     hi:"मेरा स्कूल बड़ा और पीला है। मेरे वहाँ बहुत दोस्त हैं। मेरी शिक्षिका दयालु हैं। हम गणित, अंग्रेज़ी और विज्ञान सीखते हैं। बारिश के दिनों में, हम अंदर खेलते हैं। मुझे अपना स्कूल बहुत पसंद है।"
   },
   questions:[
     {en:"What color is the school?", my:"ကျောင်းရဲ့ အရောင်က ဘာလဲ?", hi:"स्कूल का रंग क्या है?"},
     {en:"What subjects does the writer learn?", my:"ဘာဘာသာရပ်တွေ သင်ကြားလဲ?", hi:"लेखक कौन से विषय सीखता है?"}
   ]},
  {title:"Read 5 — My Weekend / ကျွန်တော့်သီတင်းပတ်ဆုံး · मेरा सप्ताहांत",
   text:"Last Saturday, I was playing football with my friends in the morning. In the afternoon, it was raining, so we stayed inside. I always visit my grandmother on Sundays. She is older than me, but she can run faster than my little brother!",
   translation:{
     my:"ပြီးခဲ့တဲ့ စနေနေ့မှာ ကျွန်တော် မနက်ပိုင်း သူငယ်ချင်းတွေနဲ့ ဘောလုံးကစားနေခဲ့ပါတယ်။ နေ့လယ်ပိုင်းမှာ မိုးရွာနေလို့ အထဲမှာ နေခဲ့ကြပါတယ်။ တနင်္ဂနွေနေ့တိုင်း အဖွားကို အမြဲ ရောက်ရောက်လည်ပါတယ်။ သူက ကျွန်တော့်ထက် သက်ကြီးပေမယ့် ကျွန်တော့်ညီလေးထက် ပိုမြန်မြန် ပြေးနိုင်ပါတယ်!",
     hi:"पिछले शनिवार, मैं सुबह अपने दोस्तों के साथ फुटबॉल खेल रहा था। दोपहर में बारिश हो रही थी, इसलिए हम अंदर रुके रहे। मैं हर रविवार अपनी दादी से मिलने जाता हूँ। वह मुझसे बड़ी हैं, लेकिन वह मेरे छोटे भाई से तेज़ दौड़ सकती हैं!"
   },
   questions:[
     {en:"What was the writer doing on Saturday morning?", my:"စနေနေ့ မနက်ပိုင်းမှာ ဘာလုပ်နေခဲ့လဲ?", hi:"लेखक शनिवार सुबह क्या कर रहा था?"},
     {en:"Who can run faster, the grandmother or the little brother?", my:"ဘယ်သူ ပိုမြန်ပြေးနိုင်လဲ?", hi:"कौन तेज़ दौड़ सकता है?"}
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
   }},
  {title:"Write 3 — My Favorite Animal / ကျွန်တော်အကြိုက်ဆုံးတိရစ္ဆာန် · मेरा पसंदीदा जानवर",
   instructions:{
     en:"Write 3 sentences using: My favorite animal is ___. It is ___ (color/size). It eats ___.",
     my:"အောက်ပါပုံစံသုံးပြီး ဝါကျ ၃ ကြောင်း ရေးပါ - My favorite animal is ___. It is ___ (color/size). It eats ___.",
     hi:"3 वाक्य लिखें: My favorite animal is ___. It is ___ (color/size). It eats ___."
   }},
  {title:"Write 4 — Today's Weather / ဒီနေ့ရာသီဥတု · आज का मौसम",
   instructions:{
     en:"Write 2 sentences using: Today is ___. It is ___ (sunny/rainy/cloudy/hot/cold).",
     my:"ဝါကျ ၂ ကြောင်း ရေးပါ - Today is ___. It is ___ (sunny/rainy/cloudy/hot/cold).",
     hi:"2 वाक्य लिखें: Today is ___. It is ___ (sunny/rainy/cloudy/hot/cold)."
   }},
  {title:"Write 5 — Compare Two Things / နှစ်ခုနှိုင်းယှဉ်ခြင်း · दो चीज़ों की तुलना",
   instructions:{
     en:"Write 2 sentences comparing two animals or people, using -er and -est. Example: A tiger is faster than a cow.",
     my:"တိရစ္ဆာန် (သို့) လူနှစ်ဦးကို -er/-est သုံးပြီး နှိုင်းယှဉ် ဝါကျ ၂ ကြောင်း ရေးပါ။ ဥပမာ - A tiger is faster than a cow.",
     hi:"-er और -est का उपयोग करके दो जानवरों या लोगों की तुलना करते हुए 2 वाक्य लिखें।"
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
   options:["Mother","Father","Sister","Brother"], answer:"Father"},
  {id:"w13", type:"mcq", q:{en:"Which animal is big and gray with a long nose?"},
   options:["Tiger","Elephant","Frog","Bird"], answer:"Elephant"},
  {id:"w14", type:"fill", q:{en:"Fill in: I drink ___ every morning. (နို့ / दूध)"}, answer:"milk"},
  {id:"w15", type:"mcq", q:{en:"Which day comes after Sunday?"},
   options:["Saturday","Monday","Friday","Wednesday"], answer:"Monday"},
  {id:"w16", type:"mcq", q:{en:"Choose the correct sentence order:"},
   options:["Elephant big a","A big elephant","Big a elephant","Elephant a big"], answer:"A big elephant"},
  {id:"w17", type:"mcq", q:{en:"The book is ___ the table. (on top of)"},
   options:["under","in","on","at"], answer:"on"},
  {id:"w18", type:"fill", q:{en:"Fill in: The cat is ___ the chair. (below)"}, answer:"under"},
  {id:"w19", type:"mcq", q:{en:"\"This is ___ book.\" (belongs to me)"},
   options:["your","his","my","her"], answer:"my"},
  {id:"w20", type:"mcq", q:{en:"Which word means 'နေသာသည် / धूप वाला'?"},
   options:["Rainy","Sunny","Snowy","Windy"], answer:"Sunny"},
  {id:"w21", type:"fill", q:{en:"Fill in: I wear ___ on my feet. (ဖိနပ် / जूते)"}, answer:"shoes"},
  {id:"w22", type:"mcq", q:{en:"A ball is shaped like a ___."},
   options:["Square","Triangle","Circle","Star"], answer:"Circle"},
  {id:"w23", type:"mcq", q:{en:"Who helps sick people?"},
   options:["Farmer","Doctor","Cook","Builder"], answer:"Doctor"},
  {id:"w24", type:"mcq", q:{en:"Choose the past tense: I ___ football yesterday."},
   options:["play","plays","played","playing"], answer:"played"},
  {id:"w25", type:"mcq", q:{en:"\"I ___ swim.\" (I am able to)"},
   options:["can't","can","not","don't"], answer:"can"},
  {id:"w26", type:"fill", q:{en:"Fill in: There ___ a cat on the bed. (is/are)"}, answer:"is"},
  {id:"w27", type:"mcq", q:{en:"\"There ___ three books.\" (many things)"},
   options:["is","are","am","be"], answer:"are"},
  {id:"w28", type:"fill", q:{en:"Fill in: On a cold day, I wear a ___. (ဂျာကက် / जैकेट)"}, answer:"jacket"},
  {id:"w29", type:"mcq", q:{en:"An elephant is ___ than a cat. (big)"},
   options:["big","bigger","biggest","bigly"], answer:"bigger"},
  {id:"w30", type:"mcq", q:{en:"This is ___ mountain in the country. (tall)"},
   options:["taller","tall","the tallest","more tall"], answer:"the tallest"},
  {id:"w31", type:"fill", q:{en:"Fill in: I ___ reading a book at 8pm yesterday. (was/were)"}, answer:"was"},
  {id:"w32", type:"mcq", q:{en:"\"We ___ going to play football tomorrow.\""},
   options:["is","am","are","be"], answer:"are"},
  {id:"w33", type:"mcq", q:{en:"Choose the word meaning 'never at all':"},
   options:["Always","Sometimes","Never","Often"], answer:"Never"},
  {id:"w34", type:"fill", q:{en:"Fill in: It is half past ___. (7:30, write the hour word)"}, answer:"seven"},
  {id:"w35", type:"mcq", q:{en:"\"She likes ___.\" (replace: me)"},
   options:["I","my","me","mine"], answer:"me"},
  {id:"w36", type:"mcq", q:{en:"Which vehicle flies in the sky?"},
   options:["Bus","Boat","Airplane","Bicycle"], answer:"Airplane"},
  {id:"w37", type:"mcq", q:{en:"Which sport uses a ball and a hoop/basket?"},
   options:["Swimming","Basketball","Cycling","Running"], answer:"Basketball"}
];
