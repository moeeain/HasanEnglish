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
    title: "Unit 1 — Greetings & People / နှုတ်ဆက်စကား",
    words: [
      {emoji:"👋", en:"Hello", my:"မင်္ဂလာပါ"},
      {emoji:"🙏", en:"Thank you", my:"ကျေးဇူးတင်ပါတယ်"},
      {emoji:"😊", en:"Please", my:"ကျေးဇူးပြု၍"},
      {emoji:"👦", en:"Boy", my:"ယောကျ်ားလေး"},
      {emoji:"👧", en:"Girl", my:"မိန်းကလေး"},
      {emoji:"👨", en:"Man", my:"အမျိုးသား"},
      {emoji:"👩", en:"Woman", my:"အမျိုးသမီး"},
      {emoji:"👶", en:"Baby", my:"ကလေးငယ်"},
      {emoji:"👨‍👩‍👧", en:"Family", my:"မိသားစု"},
      {emoji:"🧑‍🏫", en:"Teacher", my:"ဆရာ/ဆရာမ"}
    ]
  },
  {
    title: "Unit 2 — Everyday Things / နေ့စဉ်သုံးပစ္စည်းများ",
    words: [
      {emoji:"📖", en:"Book", my:"စာအုပ်"},
      {emoji:"✏️", en:"Pencil", my:"ခဲတံ"},
      {emoji:"🍚", en:"Rice", my:"ထမင်း"},
      {emoji:"💧", en:"Water", my:"ရေ"},
      {emoji:"🏠", en:"House", my:"အိမ်"},
      {emoji:"🚗", en:"Car", my:"ကား"},
      {emoji:"🐶", en:"Dog", my:"ခွေး"},
      {emoji:"🐱", en:"Cat", my:"ကြောင်"},
      {emoji:"☀️", en:"Sun", my:"နေ"},
      {emoji:"🌙", en:"Moon", my:"လ"}
    ]
  },
  {
    title: "Unit 3 — Numbers / ဂဏန်းများ",
    words: [
      {emoji:"1️⃣", en:"One", my:"တစ်"},
      {emoji:"2️⃣", en:"Two", my:"နှစ်"},
      {emoji:"3️⃣", en:"Three", my:"သုံး"},
      {emoji:"4️⃣", en:"Four", my:"လေး"},
      {emoji:"5️⃣", en:"Five", my:"ငါး"},
      {emoji:"6️⃣", en:"Six", my:"ခြောက်"},
      {emoji:"7️⃣", en:"Seven", my:"ခုနစ်"},
      {emoji:"8️⃣", en:"Eight", my:"ရှစ်"},
      {emoji:"9️⃣", en:"Nine", my:"ကိုး"},
      {emoji:"🔟", en:"Ten", my:"ဆယ်"}
    ]
  },
  {
    title: "Unit 4 — Colors / အရောင်များ",
    words: [
      {emoji:"🔴", en:"Red", my:"အနီရောင်"},
      {emoji:"🟡", en:"Yellow", my:"အဝါရောင်"},
      {emoji:"🔵", en:"Blue", my:"အပြာရောင်"},
      {emoji:"🟢", en:"Green", my:"အစိမ်းရောင်"},
      {emoji:"🟠", en:"Orange", my:"လိမ္မော်ရောင်"},
      {emoji:"🟣", en:"Purple", my:"ခရမ်းရောင်"},
      {emoji:"⚪", en:"White", my:"အဖြူရောင်"},
      {emoji:"⚫", en:"Black", my:"အနက်ရောင်"}
    ]
  },
  {
    title: "Unit 5 — Family / မိသားစုဝင်များ",
    words: [
      {emoji:"👨", en:"Father", my:"အဖေ"},
      {emoji:"👩", en:"Mother", my:"အမေ"},
      {emoji:"👦", en:"Brother", my:"မောင်/အစ်ကို"},
      {emoji:"👧", en:"Sister", my:"ညီမ/အစ်မ"},
      {emoji:"👴", en:"Grandfather", my:"အဖိုး"},
      {emoji:"👵", en:"Grandmother", my:"အဖွား"},
      {emoji:"🧑", en:"Cousin", my:"ဝမ်းကွဲ"}
    ]
  },
  {
    title: "Unit 6 — Body Parts / ခန္ဓာကိုယ်အင်္ဂါများ",
    words: [
      {emoji:"👤", en:"Head", my:"ခေါင်း"},
      {emoji:"💪", en:"Shoulders", my:"ပခုံး"},
      {emoji:"🦵", en:"Knees", my:"ဒူး"},
      {emoji:"🦶", en:"Toes", my:"ခြေချောင်း"},
      {emoji:"👀", en:"Eyes", my:"မျက်လုံး"},
      {emoji:"👂", en:"Ears", my:"နား"},
      {emoji:"👄", en:"Mouth", my:"ပါးစပ်"},
      {emoji:"👃", en:"Nose", my:"နှာခေါင်း"}
    ]
  },
  {
    title: "Unit 7 — Animals / တိရစ္ဆာန်များ",
    words: [
      {emoji:"🐘", en:"Elephant", my:"ဆင်"},
      {emoji:"🐒", en:"Monkey", my:"မျောက်"},
      {emoji:"🐯", en:"Tiger", my:"ကျား"},
      {emoji:"🐸", en:"Frog", my:"ဖား"},
      {emoji:"🐦", en:"Bird", my:"ငှက်"},
      {emoji:"🐟", en:"Fish", my:"ငါး"},
      {emoji:"🐔", en:"Chicken", my:"ကြက်"},
      {emoji:"🐮", en:"Cow", my:"နွား"}
    ]
  },
  {
    title: "Unit 8 — Food / အစားအစာများ",
    words: [
      {emoji:"🍎", en:"Apple", my:"ပန်းသီး"},
      {emoji:"🍌", en:"Banana", my:"ငှက်ပျောသီး"},
      {emoji:"🍞", en:"Bread", my:"ပေါင်မုန့်"},
      {emoji:"🥛", en:"Milk", my:"နို့"},
      {emoji:"🥚", en:"Egg", my:"ဥ"},
      {emoji:"🍗", en:"Chicken (food)", my:"ကြက်သား"},
      {emoji:"🥗", en:"Vegetables", my:"ဟင်းသီးဟင်းရွက်"},
      {emoji:"🍬", en:"Candy", my:"သကြားလုံး"}
    ]
  },
  {
    title: "Unit 9 — Days of the Week / ရက်သတ္တပတ်ရက်များ",
    words: [
      {emoji:"📅", en:"Monday", my:"တနင်္လာနေ့"},
      {emoji:"📅", en:"Tuesday", my:"အင်္ဂါနေ့"},
      {emoji:"📅", en:"Wednesday", my:"ဗုဒ္ဓဟူးနေ့"},
      {emoji:"📅", en:"Thursday", my:"ကြာသပတေးနေ့"},
      {emoji:"📅", en:"Friday", my:"သောကြာနေ့"},
      {emoji:"📅", en:"Saturday", my:"စနေနေ့"},
      {emoji:"📅", en:"Sunday", my:"တနင်္ဂနွေနေ့"}
    ]
  },
  {
    title: "Unit 10 — Weather / ရာသီဥတု",
    words: [
      {emoji:"☀️", en:"Sunny", my:"နေသာသည်"},
      {emoji:"🌧️", en:"Rainy", my:"မိုးရွာသည်"},
      {emoji:"☁️", en:"Cloudy", my:"တိမ်ထူသည်"},
      {emoji:"❄️", en:"Snowy", my:"နှင်းကျသည်"},
      {emoji:"💨", en:"Windy", my:"လေတိုက်သည်"},
      {emoji:"🌡️", en:"Hot", my:"ပူသည်"},
      {emoji:"🥶", en:"Cold", my:"အေးသည်"}
    ]
  },
  {
    title: "Unit 11 — Clothing / အဝတ်အစား",
    words: [
      {emoji:"👕", en:"Shirt", my:"ရှပ်အင်္ကျီ"},
      {emoji:"👖", en:"Pants", my:"ဘောင်းဘီ"},
      {emoji:"👗", en:"Dress", my:"ဂါဝန်"},
      {emoji:"🧢", en:"Hat", my:"ဦးထုပ်"},
      {emoji:"👟", en:"Shoes", my:"ဖိနပ်"},
      {emoji:"🧦", en:"Socks", my:"ခြေအိတ်"},
      {emoji:"🧥", en:"Jacket", my:"ဂျာကက်"}
    ]
  },
  {
    title: "Unit 12 — Shapes / ပုံသဏ္ဍာန်များ",
    words: [
      {emoji:"⭕", en:"Circle", my:"စက်ဝိုင်း"},
      {emoji:"⬜", en:"Square", my:"စတုရန်း"},
      {emoji:"🔺", en:"Triangle", my:"တြိဂံ"},
      {emoji:"⭐", en:"Star", my:"ကြယ်"},
      {emoji:"💛", en:"Heart", my:"နှလုံးသား ပုံသဏ္ဍာန်"}
    ]
  },
  {
    title: "Unit 13 — Occupations / အလုပ်အကိုင်များ",
    words: [
      {emoji:"👩‍⚕️", en:"Doctor", my:"ဆရာဝန်"},
      {emoji:"👮", en:"Police officer", my:"ရဲ"},
      {emoji:"👨‍🌾", en:"Farmer", my:"လယ်သမား"},
      {emoji:"👨‍🍳", en:"Cook", my:"ဟင်းချက်သူ"},
      {emoji:"👷", en:"Builder", my:"လုပ်ငန်းသမား"},
      {emoji:"🧑‍💼", en:"Office worker", my:"ရုံးဝန်ထမ်း"}
    ]
  },
  {
    title: "Unit 14 — Time & Clock / အချိန်နှင့် နာရီ",
    words: [
      {emoji:"🕐", en:"O'clock", my:"နာရီပြည့်"},
      {emoji:"🌅", en:"Morning", my:"မနက်"},
      {emoji:"🌇", en:"Afternoon", my:"နေ့လယ်"},
      {emoji:"🌃", en:"Evening", my:"ညနေ"},
      {emoji:"🌙", en:"Night", my:"ညအချိန်"},
      {emoji:"⏰", en:"Early", my:"စောစော"},
      {emoji:"⏳", en:"Late", my:"နောက်ကျ"}
    ]
  },
  {
    title: "Unit 15 — Sports / အားကစားများ",
    words: [
      {emoji:"⚽", en:"Football", my:"ဘောလုံး"},
      {emoji:"🏀", en:"Basketball", my:"ဘတ်စကက်ဘော"},
      {emoji:"🏊", en:"Swimming", my:"ရေကူး"},
      {emoji:"🏃", en:"Running", my:"ပြေး"},
      {emoji:"🚴", en:"Cycling", my:"စက်ဘီးစီး"},
      {emoji:"🏸", en:"Badminton", my:"ကွင်းလုံးအန်ခုန်"}
    ]
  },
  {
    title: "Unit 16 — Transportation / သယ်ယူပို့ဆောင်ရေး",
    words: [
      {emoji:"🚌", en:"Bus", my:"ဘတ်စ်ကား"},
      {emoji:"🚗", en:"Car", my:"ကား"},
      {emoji:"🚲", en:"Bicycle", my:"စက်ဘီး"},
      {emoji:"✈️", en:"Airplane", my:"လေယာဉ်"},
      {emoji:"🚢", en:"Boat", my:"လှေ"},
      {emoji:"🚆", en:"Train", my:"ရထား"},
      {emoji:"🏍️", en:"Motorbike", my:"မော်တော်ဆိုင်ကယ်"}
    ]
  },
  {
    title: "Unit 17 — School Items / ကျောင်းသုံးပစ္စည်းများ",
    words: [
      {emoji:"🎒", en:"Bag", my:"အိတ်"},
      {emoji:"📓", en:"Notebook", my:"မှတ်စုစာအုပ်"},
      {emoji:"✏️", en:"Eraser", my:"ခဲဖျက်"},
      {emoji:"📏", en:"Ruler", my:"ပေတံ"},
      {emoji:"🖍️", en:"Crayon", my:"ခရာအရောင်ခဲ"},
      {emoji:"🎨", en:"Paint", my:"ဆေးရေး"},
      {emoji:"⌚", en:"Clock", my:"နာရီ"},
      {emoji:"🖊️", en:"Pen", my:"ဘောပင်"}
    ]
  },
  {
    title: "Unit 18 — Household Items / အိမ်သုံးပစ္စည်းများ",
    words: [
      {emoji:"🛏️", en:"Bed", my:"ကုတင်"},
      {emoji:"🪑", en:"Chair", my:"ကုလားထိုင်"},
      {emoji:"🍽️", en:"Plate", my:"ပန်းကန်"},
      {emoji:"🥄", en:"Spoon", my:"ဇွန်း"},
      {emoji:"🚪", en:"Door", my:"တံခါး"},
      {emoji:"🪟", en:"Window", my:"ပြတင်းပေါက်"},
      {emoji:"💡", en:"Light", my:"မီးလုံး"},
      {emoji:"🧹", en:"Broom", my:"တံမြက်စည်း"}
    ]
  },
  {
    title: "Unit 19 — Feelings / ခံစားချက်များ",
    words: [
      {emoji:"😊", en:"Happy", my:"ပျော်ရွှင်"},
      {emoji:"😢", en:"Sad", my:"စိတ်မကောင်း"},
      {emoji:"😠", en:"Angry", my:"စိတ်ဆိုး"},
      {emoji:"😨", en:"Scared", my:"ကြောက်"},
      {emoji:"😴", en:"Tired", my:"မောပန်း"},
      {emoji:"🤗", en:"Excited", my:"စိတ်လှုပ်ရှား"},
      {emoji:"😋", en:"Hungry", my:"ဗိုက်ဆာ"},
      {emoji:"🥵", en:"Thirsty", my:"ရေဆာ"}
    ]
  },
  {
    title: "Unit 20 — Common Verbs (Action Words) / ပြုမူကြိယာ",
    words: [
      {emoji:"🏃", en:"Run", my:"ပြေး"},
      {emoji:"🚶", en:"Walk", my:"လမ်းလျှောက်"},
      {emoji:"🍽️", en:"Eat", my:"စား"},
      {emoji:"🥤", en:"Drink", my:"သောက်"},
      {emoji:"😴", en:"Sleep", my:"အိပ်"},
      {emoji:"📖", en:"Read", my:"ဖတ်"},
      {emoji:"✍️", en:"Write", my:"ရေး"},
      {emoji:"👂", en:"Listen", my:"နားထောင်"},
      {emoji:"🗣️", en:"Speak", my:"ပြော"},
      {emoji:"🧼", en:"Wash", my:"ဆေး"}
    ]
  }
];

const GRAMMAR_UNITS = [
  {
    title: "Grammar 1 — What is a sentence? / ဝါကျဆိုတာ",
    explain: [
      {en:"A sentence needs a SUBJECT (who/what) and a VERB (action). Example: I + eat.", 
       my:"ဝါကျတစ်ခုမှာ Subject (ဘယ်သူ/ဘာ) နဲ့ Verb (လုပ်ဆောင်ချက်) လိုအပ်ပါတယ်။ ဥပမာ - I + eat."}
    ],
    examples: ["I eat rice.", "You read a book.", "She drinks water."]
  },
  {
    title: "Grammar 2 — The verb \"to be\" (am / is / are) / to be",
    explain: [
      {en:"Use 'am' with I, 'is' with he/she/it, 'are' with you/we/they.",
       my:"I နဲ့ 'am' ကို၊ he/she/it နဲ့ 'is' ကို၊ you/we/they နဲ့ 'are' ကို သုံးပါ။"}
    ],
    examples: ["I am a student.", "He is a boy.", "They are happy."]
  },
  {
    title: "Grammar 3 — Simple Present (daily habits) / လက်ရှိပြုမူ",
    explain: [
      {en:"Use the simple present for daily habits. Add -s for he/she/it.",
       my:"နေ့စဉ်လုပ်လေ့ရှိတာကို Simple Present နဲ့ ပြောပါတယ်။ he/she/it နဲ့ -s ထပ်ထည့်ပါ။"}
    ],
    examples: ["I go to school.", "She goes to school.", "We play football."]
  },
  {
    title: "Grammar 4 — Plural nouns (one → many) / အများကိန်း",
    explain: [
      {en:"Add -s to most words to show more than one. Some words are irregular.",
       my:"တစ်ခုထက်ပိုတာကို ပြဖို့ အများစုမှာ -s ထပ်ထည့်ပါ။ အချို့စကားလုံးများက ပုံမှန်မဟုတ်ပါ။"}
    ],
    examples: ["One book, two books.", "One cat, three cats.", "One child, two children. (irregular)"]
  },
  {
    title: "Grammar 5 — This / That / These / Those / ဒီဟာ · ဟိုဟာ",
    explain: [
      {en:"'This/These' = near you. 'That/Those' = far from you. This/That = one thing. These/Those = many things.",
       my:"'This/These' = နီးနီးဟာ။ 'That/Those' = ဝေးဝေးဟာ။ This/That = တစ်ခု။ These/Those = အများ။"}
    ],
    examples: ["This is my book.", "That is your house.", "These are my pencils.", "Those are their shoes."]
  },
  {
    title: "Grammar 6 — Question words (What, Where, Who) / မေးခွန်းလုံးများ",
    explain: [
      {en:"'What' asks about things, 'Where' asks about places, 'Who' asks about people.",
       my:"'What' က အရာဝတ္ထုကို မေးတယ်၊ 'Where' က နေရာကို မေးတယ်၊ 'Who' က လူကို မေးတယ်။"}
    ],
    examples: ["What is your name?", "Where do you live?", "Who is your teacher?"]
  },
  {
    title: "Grammar 7 — Adjectives (describing words) / နာမဝိသေသန",
    explain: [
      {en:"Adjectives describe nouns. They usually come before the noun.",
       my:"Adjective တွေက naun ကို ဖော်ပြပါတယ်။ ပုံမှန်အားဖြင့် naun ရှေ့မှာ ရှိပါတယ်။"}
    ],
    examples: ["A big elephant.", "A small frog.", "A red apple."]
  },
  {
    title: "Grammar 8 — Prepositions of place (in, on, under) / နေရာပြ preposition",
    explain: [
      {en:"'In' = inside. 'On' = on top of. 'Under' = below.",
       my:"'In' = အထဲမှာ။ 'On' = အပေါ်မှာ။ 'Under' = အောက်မှာ။"}
    ],
    examples: ["The book is on the table.", "The cat is under the chair.", "The pencil is in the bag."]
  },
  {
    title: "Grammar 9 — Possessive words (my, your, his, her) / ပိုင်ဆိုင်မှုပြ",
    explain: [
      {en:"These words show who something belongs to.",
       my:"ဒီစကားလုံးတွေက တစ်ခုခုက ဘယ်သူ့ဟာဖြစ်တယ်ဆိုတာကို ပြပါတယ်။"}
    ],
    examples: ["This is my book.", "That is your bag.", "This is his pencil.", "That is her house."]
  },
  {
    title: "Grammar 10 — Simple Past (yesterday) / အတိတ်ကာလ",
    explain: [
      {en:"Use the simple past for things that already happened. Many verbs add -ed.",
       my:"ဖြစ်ပြီးသားအရာများအတွက် Simple Past သုံးပါ။ verb အများစုက -ed ထပ်ထည့်ပါတယ်။"}
    ],
    examples: ["I played football yesterday.", "She walked to school.", "We ate rice. (irregular)"]
  },
  {
    title: "Grammar 11 — Can / Can't (ability) / တတ်ကျွမ်းမှု",
    explain: [
      {en:"'Can' shows you are able to do something. 'Can't' shows you are not able.",
       my:"'Can' က တတ်ကျွမ်းမှုကို ပြပါတယ်။ 'Can't' က မတတ်ကျွမ်းမှုကို ပြပါတယ်။"}
    ],
    examples: ["I can swim.", "She can sing.", "He can't fly."]
  },
  {
    title: "Grammar 12 — There is / There are / ရှိသည်",
    explain: [
      {en:"'There is' for one thing. 'There are' for many things.",
       my:"'There is' တစ်ခုတည်းအတွက်။ 'There are' အများအတွက်။"}
    ],
    examples: ["There is a cat on the bed.", "There are three books on the table."]
  },
  {
    title: "Grammar 13 — Comparative & Superlative / နှိုင်းယှဉ်ခြင်း",
    explain: [
      {en:"Add -er to compare two things. Add -est (with 'the') to compare three or more.",
       my:"နှစ်ခုနှိုင်းယှဉ်ဖို့ -er ထပ်ထည့်ပါ။ သုံးခုထက်ပိုတာကို နှိုင်းယှဉ်ဖို့ 'the' + -est သုံးပါ။"}
    ],
    examples: ["This bag is bigger than that one.", "This is the biggest elephant in the zoo.", "She is taller than me."]
  },
  {
    title: "Grammar 14 — Past Continuous (was/were + -ing) / ဖြစ်ပျက်နေဆဲအတိတ်",
    explain: [
      {en:"Use 'was/were' + verb-ing for an action that was happening at a certain time in the past.",
       my:"အတိတ်ကာလက အချိန်တစ်ခုမှာ ဖြစ်ပျက်နေတဲ့အရာအတွက် 'was/were' + verb-ing သုံးပါ။"}
    ],
    examples: ["I was reading a book at 8pm.", "They were playing football yesterday.", "She was sleeping when I called."]
  },
  {
    title: "Grammar 15 — Future with \"going to\" / အနာဂတ်ကာလ (\"going to\")",
    explain: [
      {en:"Use 'am/is/are + going to' to talk about a plan for the future.",
       my:"အနာဂတ် အစီအစဉ်ကို ပြောဖို့ 'am/is/are + going to' သုံးပါ။"}
    ],
    examples: ["I am going to visit my grandmother.", "It is going to rain.", "We are going to play football tomorrow."]
  },
  {
    title: "Grammar 16 — Adverbs of Frequency (always, sometimes, never) / ကြိမ်နှုန်းပြ",
    explain: [
      {en:"These words say how often something happens. They go before the main verb.",
       my:"ဒီစကားလုံးတွေက တစ်ခုခု ဘယ်လောက်ကြာကြာဖြစ်လဲဆိုတာ ပြပါတယ်။ verb ရှေ့မှာ ရှိပါတယ်။"}
    ],
    examples: ["I always eat breakfast.", "She sometimes plays basketball.", "He never eats candy."]
  },
  {
    title: "Grammar 17 — Telling Time / အချိန်ပြောခြင်း",
    explain: [
      {en:"Use 'It is + [hour] o'clock' for the exact hour, or 'It is half past / quarter past [hour]'.",
       my:"နာရီအတိအကျအတွက် 'It is + [hour] o'clock' သုံးပါ၊ (သို့) 'It is half past / quarter past [hour]'."}
    ],
    examples: ["It is three o'clock.", "It is half past seven.", "It is quarter past nine."]
  },
  {
    title: "Grammar 18 — Object Pronouns (me, him, her, them) / အရာဝတ္ထုပြ နာမ်စား",
    explain: [
      {en:"Object pronouns replace a noun that receives the action (comes after the verb).",
       my:"Object pronoun တွေက verb ရဲ့ လက်ခံသူ naun ကို အစားထိုးပါတယ် (verb ရဲ့ နောက်မှာ လာပါတယ်)။"}
    ],
    examples: ["I see him.", "She likes me.", "We help them.", "Please give it to her."]
  }
];

const LISTENING_UNITS = [
  {title:"Listen 1 — The Alphabet Song / အက္ခရာသီချင်း",
   youtubeId:"MgmIHtp-ZQM",
   keyPhrase:"A, B, C, D, E, F, G",
   note:{en:"Sing along slowly, letter by letter.", my:"တစ်လုံးချင်း ဖြည်းဖြည်း လိုက်ဆိုကြည့်ပါ။"}},
  {title:"Listen 2 — Hello Hello! (Greetings) / နှုတ်ဆက်စကား",
   youtubeId:"YxKEm1XgOlk",
   keyPhrase:"Hello, hello, hello!",
   note:{en:"Listen for the greeting words you learned.", my:"သင်ယူထားတဲ့ နှုတ်ဆက်စကားများကို နားထောင်ပါ။"}},
  {title:"Listen 3 — Number Song 1–20 / ဂဏန်းသီချင်း",
   youtubeId:"D0Ajq682yrA",
   keyPhrase:"One, two, three, four, five",
   note:{en:"Count along with the song, then count things around you.", my:"သီချင်းလိုက်ရေတွက်ပြီး ပတ်ဝန်းကျင်က ပစ္စည်းတွေကို ပြန်ရေတွက်ကြည့်ပါ။"}},
  {title:"Listen 4 — The Rainbow Song (Colors) / အရောင်သီချင်း",
   youtubeId:"wceMsYSyNUQ",
   keyPhrase:"I see a rainbow in the sky",
   note:{en:"Listen for the color words you learned.", my:"သင်ယူထားတဲ့ အရောင်စကားလုံးများကို နားထောင်ပါ။"}},
  {title:"Listen 5 — Days of the Week Song / ရက်သတ္တပတ်သီချင်း",
   youtubeId:"mXMofxtDPUQ",
   keyPhrase:"Sunday, Monday, Tuesday, Wednesday",
   note:{en:"Try to say the 7 days in order after listening.", my:"နားထောင်ပြီးနောက် ရက် ၇ ရက်ကို အစဉ်လိုက် ပြောကြည့်ပါ။"}},
  {title:"Listen 6 — The People In My Family / မိသားစုသီချင်း",
   youtubeId:"yDua9ms9_eg",
   keyPhrase:"This is my father, this is my mother",
   note:{en:"Listen for the family words: father, mother, sister, brother.", my:"father, mother, sister, brother — မိသားစုစကားလုံးများကို နားထောင်ပါ။"}},
  {title:"Listen 7 — Head, Shoulders, Knees & Toes (Body Parts) / ခန္ဓာကိုယ်သီချင်း",
   youtubeId:"PynsQ_BWYht",
   keyPhrase:"Head, shoulders, knees, and toes",
   note:{en:"Point to each body part while you sing.", my:"သီချင်းဆိုစဉ် ခန္ဓာကိုယ်အစိတ်အပိုင်းကို လက်ညှိုးထိုးပြပါ။"}},
  {title:"Listen 8 — Walking In The Jungle (Animals) / တိရစ္ဆာန်သီချင်း",
   youtubeId:"GoSq-yZcJ-4",
   keyPhrase:"Walking in the jungle, we're not afraid",
   note:{en:"Listen for the animal names: frog, monkey, toucan, tiger.", my:"frog, monkey, toucan, tiger — တိရစ္ဆာန်နာမည်များကို နားထောင်ပါ။"}},
  {title:"Listen 9 — How's The Weather? / ရာသီဥတုသီချင်း",
   youtubeId:"dTY0DHL9Lxb",
   keyPhrase:"How's the weather today?",
   note:{en:"Listen for: sunny, rainy, cloudy, snowy.", my:"sunny, rainy, cloudy, snowy — ရာသီဥတုစကားလုံးများကို နားထောင်ပါ။"}}
];

// ============================================================
// DIALOGUES — "You say a line, I say a line" turn-by-turn
// conversation practice. speaker "App" = the website speaks it
// out loud for you. speaker "You" = you tap the mic and say it.
// ============================================================
const DIALOGUES = [
  {
    title: "Dialogue 1 — Meeting a Friend / သူငယ်ချင်းနှင့်တွေ့ခြင်း",
    lines: [
      {speaker:"App", en:"Hello! What is your name?", my:"မင်္ဂလာပါ! နာမည်ဘယ်လိုခေါ်လဲ?"},
      {speaker:"You", en:"Hello! My name is ___.", my:"မင်္ဂလာပါ! ကျွန်တော့်နာမည် ___ ပါ။"},
      {speaker:"App", en:"Nice to meet you! How are you?", my:"တွေ့ရတာ ဝမ်းသာပါတယ်! နေကောင်းလား?"},
      {speaker:"You", en:"I am fine, thank you!", my:"ကျွန်တော် ကောင်းပါတယ်၊ ကျေးဇူးတင်ပါတယ်!"},
      {speaker:"App", en:"Goodbye! See you later.", my:"သွားတော့မယ်! နောက်မှတွေ့မယ်။"},
      {speaker:"You", en:"Goodbye!", my:"သွားတော့မယ်!"}
    ]
  },
  {
    title: "Dialogue 2 — At School / ကျောင်းမှာ",
    lines: [
      {speaker:"App", en:"Good morning! What do you have in your bag?", my:"မင်္ဂလာနံနက်ခင်းပါ! အိတ်ထဲမှာ ဘာရှိလဲ?"},
      {speaker:"You", en:"I have a book and a pencil.", my:"ကျွန်တော့်မှာ စာအုပ်နဲ့ ခဲတံရှိပါတယ်။"},
      {speaker:"App", en:"Do you like English?", my:"အင်္ဂလိပ်စာကို သဘောကျလား?"},
      {speaker:"You", en:"Yes, I like English very much.", my:"ဟုတ်ကဲ့၊ အင်္ဂလိပ်စာကို အရမ်းသဘောကျပါတယ်။"},
      {speaker:"App", en:"Great! See you in class.", my:"ကောင်းလိုက်တာ! အတန်းထဲမှာ တွေ့မယ်။"}
    ]
  },
  {
    title: "Dialogue 3 — Buying Food / အစားအစာဝယ်ခြင်း",
    lines: [
      {speaker:"App", en:"Hello! What do you want to buy?", my:"မင်္ဂလာပါ! ဘာဝယ်ချင်လဲ?"},
      {speaker:"You", en:"I want an apple and some milk, please.", my:"ကျွန်တော် ပန်းသီးနဲ့ နို့ ဝယ်ချင်ပါတယ်။"},
      {speaker:"App", en:"Here you are. Anything else?", my:"ဒီမှာပါ။ နောက်ထပ် ရှိသေးလား?"},
      {speaker:"You", en:"No, thank you.", my:"မလိုတော့ပါဘူး၊ ကျေးဇူးတင်ပါတယ်။"},
      {speaker:"App", en:"You're welcome. Have a nice day!", my:"ရပါတယ်။ နေ့လေးကောင်းပါစေ!"}
    ]
  }
];

const SPEAKING_UNITS = [
  {title:"Speak 1 — Introduce yourself / မိတ်ဆက်ခြင်း",
   prompts:[
     {en:"Say: \"Hello, my name is ___.\"", my:"ပြောကြည့်ပါ - \"Hello, my name is ___.\""},
     {en:"Say: \"I am ___ years old.\"", my:"ပြောကြည့်ပါ - \"I am ___ years old.\""}
   ]},
  {title:"Speak 2 — Talk about your day / နေ့စဉ်အကြောင်းပြော",
   prompts:[
     {en:"Say: \"I eat rice every day.\"", my:"ပြောကြည့်ပါ - \"I eat rice every day.\""},
     {en:"Say: \"I go to school.\"", my:"ပြောကြည့်ပါ - \"I go to school.\""}
   ]},
  {title:"Speak 3 — Talk about your family / မိသားစုအကြောင်းပြော",
   prompts:[
     {en:"Say: \"This is my mother. This is my father.\"", my:"ပြောကြည့်ပါ - \"This is my mother. This is my father.\""},
     {en:"Say: \"I have one brother and one sister.\"", my:"ပြောကြည့်ပါ - \"I have one brother and one sister.\""}
   ]},
  {title:"Speak 4 — Ask and answer / မေးမြန်းခြင်း",
   prompts:[
     {en:"Ask a friend: \"What is your name?\" Answer: \"My name is ___.\"", my:"သူငယ်ချင်းကို မေးပါ - \"What is your name?\" ဖြေပါ - \"My name is ___.\""},
     {en:"Ask: \"What color is this?\" Answer: \"It is red.\"", my:"မေးပါ - \"What color is this?\" ဖြေပါ - \"It is red.\""}
   ]},
  {title:"Speak 5 — Describe things / ပစ္စည်းကို ဖော်ပြခြင်း",
   prompts:[
     {en:"Say: \"This is a big elephant.\"", my:"ပြောကြည့်ပါ - \"This is a big elephant.\""},
     {en:"Say: \"I like red apples.\"", my:"ပြောကြည့်ပါ - \"I like red apples.\""}
   ]},
  {title:"Speak 6 — Talk about the week / ရက်သတ္တပတ်အကြောင်းပြော",
   prompts:[
     {en:"Say: \"Today is Monday.\"", my:"ပြောကြည့်ပါ - \"Today is Monday.\""},
     {en:"Say: \"I go to school on Monday.\"", my:"ပြောကြည့်ပါ - \"I go to school on Monday.\""}
   ]},
  {title:"Speak 7 — Talk about the weather / ရာသီဥတုအကြောင်းပြော",
   prompts:[
     {en:"Say: \"It is sunny today.\"", my:"ပြောကြည့်ပါ - \"It is sunny today.\""},
     {en:"Ask: \"How's the weather?\" Answer: \"It is rainy.\"", my:"မေးပါ - \"How's the weather?\" ဖြေပါ - \"It is rainy.\""}
   ]},
  {title:"Speak 8 — What you can do / တတ်ကျွမ်းမှုပြောခြင်း",
   prompts:[
     {en:"Say: \"I can swim.\"", my:"ပြောကြည့်ပါ - \"I can swim.\""},
     {en:"Say: \"I can't fly, but I can run.\"", my:"ပြောကြည့်ပါ - \"I can't fly, but I can run.\""}
   ]},
  {title:"Speak 9 — Comparing things / နှိုင်းယှဉ်ပြောခြင်း",
   prompts:[
     {en:"Say: \"An elephant is bigger than a cat.\"", my:"ပြောကြည့်ပါ - \"An elephant is bigger than a cat.\""},
     {en:"Say: \"This is the tallest tree.\"", my:"ပြောကြည့်ပါ - \"This is the tallest tree.\""}
   ]},
  {title:"Speak 10 — Future plans / အနာဂတ်အစီအစဉ်",
   prompts:[
     {en:"Say: \"I am going to visit my friend.\"", my:"ပြောကြည့်ပါ - \"I am going to visit my friend.\""},
     {en:"Say: \"We are going to play football tomorrow.\"", my:"ပြောကြည့်ပါ - \"We are going to play football tomorrow.\""}
   ]}
];

const READING_UNITS = [
  {title:"Read 1 — My Family / ကျွန်တော့်မိသားစု",
   text:"This is my family. I have a mother and a father. My mother is a teacher. My father is a farmer. I have one sister. We live in a small house.",
   translation:{
     my:"ဒါက ကျွန်တော့်မိသားစုပါ။ ကျွန်တော့်မှာ အမေနဲ့ အဖေရှိပါတယ်။ အမေက ဆရာမတစ်ယောက်ပါ။ အဖေက လယ်သမားတစ်ယောက်ပါ။ ညီမတစ်ယောက်ရှိပါတယ်။ ကျွန်တော်တို့ အိမ်ငယ်လေးမှာ နေထိုင်ကြပါတယ်။"
   },
   questions:[
     {en:"What is the mother's job?", my:"အမေရဲ့ အလုပ်က ဘာလဲ?"},
     {en:"How many sisters does the writer have?", my:"ညီမ ဘယ်နှစ်ယောက်ရှိလဲ?"}
   ]},
  {title:"Read 2 — My Day / ကျွန်တော့်တစ်နေ့",
   text:"I get up at six o'clock. I eat rice for breakfast. Then I go to school. I have three books in my bag. After school, I play with my friends. At night, I sleep at nine o'clock.",
   translation:{
     my:"ကျွန်တော် ခြောက်နာရီမှာ နိုးပါတယ်။ မနက်စာအတွက် ထမင်းစားပါတယ်။ ပြီးရင် ကျောင်းသွားပါတယ်။ ကျွန်တော့်အိတ်ထဲမှာ စာအုပ် သုံးအုပ်ရှိပါတယ်။ ကျောင်းပြီးရင် သူငယ်ချင်းတွေနဲ့ ကစားပါတယ်။ ညမှာ ကိုးနာရီအချိန်မှာ အိပ်ပါတယ်။"
   },
   questions:[
     {en:"What time does the writer get up?", my:"ဘယ်အချိန်မှာ နိုးလဲ?"},
     {en:"How many books are in the bag?", my:"အိတ်ထဲမှာ စာအုပ် ဘယ်နှစ်အုပ်ရှိလဲ?"}
   ]},
  {title:"Read 3 — My Favorite Animal / ကျွန်တော်အကြိုက်ဆုံးတိရစ္ဆာန်",
   text:"My favorite animal is the elephant. It is big and gray. It has a long nose. Elephants eat leaves and fruit. They are very smart animals. I want to see an elephant one day.",
   translation:{
     my:"ကျွန်တော်အကြိုက်ဆုံးတိရစ္ဆာန်က ဆင်ဖြစ်ပါတယ်။ ဆင်ကြီးက ကြီးမားပြီး မီးခိုးရောင်ဖြစ်ပါတယ်။ နှာမောင်းရှည်ရှည်ရှိပါတယ်။ ဆင်တွေက အရွက်နဲ့ အသီးအနှံကို စားပါတယ်။ ဆင်တွေက အလွန်ဉာဏ်ကောင်းတဲ့ တိရစ္ဆာန်တွေဖြစ်ပါတယ်။ ကျွန်တော် တစ်နေ့နေ့ ဆင်ကို တွေ့ချင်ပါတယ်။"
   },
   questions:[
     {en:"What color is the elephant?", my:"ဆင်ရဲ့ အရောင်က ဘာလဲ?"},
     {en:"What do elephants eat?", my:"ဆင်တွေက ဘာစားလဲ?"}
   ]},
  {title:"Read 4 — My School / ကျွန်တော့်ကျောင်း",
   text:"My school is big and yellow. I have many friends there. My teacher is kind. We learn math, English, and science. On rainy days, we play inside. I like my school very much.",
   translation:{
     my:"ကျွန်တော့်ကျောင်းက ကြီးမားပြီး အဝါရောင်ဖြစ်ပါတယ်။ အဲဒီမှာ သူငယ်ချင်း အများကြီးရှိပါတယ်။ ကျွန်တော့်ဆရာမက စိတ်ကောင်းရှိပါတယ်။ သင်္ချာ၊ အင်္ဂလိပ်စာနဲ့ သိပ္ပံသင်ကြားပါတယ်။ မိုးရွာတဲ့နေ့မှာ ကျွန်တော်တို့ အထဲမှာ ကစားကြပါတယ်။ ကျွန်တော့်ကျောင်းကို အရမ်းကြိုက်ပါတယ်။"
   },
   questions:[
     {en:"What color is the school?", my:"ကျောင်းရဲ့ အရောင်က ဘာလဲ?"},
     {en:"What subjects does the writer learn?", my:"ဘာဘာသာရပ်တွေ သင်ကြားလဲ?"}
   ]},
  {title:"Read 5 — My Weekend / ကျွန်တော့်သီတင်းပတ်ဆုံး",
   text:"Last Saturday, I was playing football with my friends in the morning. In the afternoon, it was raining, so we stayed inside. I always visit my grandmother on Sundays. She is older than me, but she can run faster than my little brother!",
   translation:{
     my:"ပြီးခဲ့တဲ့ စနေနေ့မှာ ကျွန်တော် မနက်ပိုင်း သူငယ်ချင်းတွေနဲ့ ဘောလုံးကစားနေခဲ့ပါတယ်။ နေ့လယ်ပိုင်းမှာ မိုးရွာနေလို့ အထဲမှာ နေခဲ့ကြပါတယ်။ တနင်္ဂနွေနေ့တိုင်း အဖွားကို အမြဲ ရောက်ရောက်လည်ပါတယ်။ သူက ကျွန်တော့်ထက် သက်ကြီးပေမယ့် ကျွန်တော့်ညီလေးထက် ပိုမြန်မြန် ပြေးနိုင်ပါတယ်!"
   },
   questions:[
     {en:"What was the writer doing on Saturday morning?", my:"စနေနေ့ မနက်ပိုင်းမှာ ဘာလုပ်နေခဲ့လဲ?"},
     {en:"Who can run faster, the grandmother or the little brother?", my:"ဘယ်သူ ပိုမြန်ပြေးနိုင်လဲ?"}
   ]}
];

const WRITING_UNITS = [
  {title:"Write 1 — About me / ကျွန်တော့်အကြောင်း",
   instructions:{
     en:"Write 3 sentences about yourself using: My name is ___. I am ___ years old. I live in ___.",
     my:"အောက်ပါပုံစံသုံးပြီး ကိုယ့်အကြောင်း ဝါကျ ၃ ကြောင်း ရေးပါ - My name is ___. I am ___ years old. I live in ___."
   }},
  {title:"Write 2 — My Day / ကျွန်တော့်တစ်နေ့",
   instructions:{
     en:"Write 3 sentences about your day using: I get up at ___. I go to ___. I sleep at ___.",
     my:"အောက်ပါပုံစံသုံးပြီး ကိုယ့်နေ့စဉ်အကြောင်း ဝါကျ ၃ ကြောင်း ရေးပါ - I get up at ___. I go to ___. I sleep at ___."
   }},
  {title:"Write 3 — My Favorite Animal / ကျွန်တော်အကြိုက်ဆုံးတိရစ္ဆာန်",
   instructions:{
     en:"Write 3 sentences using: My favorite animal is ___. It is ___ (color/size). It eats ___.",
     my:"အောက်ပါပုံစံသုံးပြီး ဝါကျ ၃ ကြောင်း ရေးပါ - My favorite animal is ___. It is ___ (color/size). It eats ___."
   }},
  {title:"Write 4 — Today's Weather / ဒီနေ့ရာသီဥတု",
   instructions:{
     en:"Write 2 sentences using: Today is ___. It is ___ (sunny/rainy/cloudy/hot/cold).",
     my:"ဝါကျ ၂ ကြောင်း ရေးပါ - Today is ___. It is ___ (sunny/rainy/cloudy/hot/cold)."
   }},
  {title:"Write 5 — Compare Two Things / နှစ်ခုနှိုင်းယှဉ်ခြင်း",
   instructions:{
     en:"Write 2 sentences comparing two animals or people, using -er and -est. Example: A tiger is faster than a cow.",
     my:"တိရစ္ဆာန် (သို့) လူနှစ်ဦးကို -er/-est သုံးပြီး နှိုင်းယှဉ် ဝါကျ ၂ ကြောင်း ရေးပါ။ ဥပမာ - A tiger is faster than a cow."
   }}
];

const WORKBOOK_QUESTIONS = [
  {id:"w1", type:"mcq", q:{en:"How do you say 'ကျေးဇူးတင်ပါတယ်' in English?"},
   options:["Hello","Thank you","Please","Water"], answer:"Thank you"},
  {id:"w2", type:"mcq", q:{en:"Choose the correct word: I ___ a student."},
   options:["is","are","am","be"], answer:"am"},
  {id:"w3", type:"mcq", q:{en:"Choose the correct word: She ___ to school every day."},
   options:["go","goes","going","gone"], answer:"goes"},
  {id:"w4", type:"fill", q:{en:"Fill in: This is my ___ (မိသားစု)."}, answer:"family"},
  {id:"w5", type:"fill", q:{en:"Fill in: I drink ___ every day. (ရေ)"}, answer:"water"},
  {id:"w6", type:"mcq", q:{en:"Which one means 'အိမ်'?"},
   options:["Car","House","Book","Sun"], answer:"House"},
  {id:"w7", type:"mcq", q:{en:"What number is this: 7?"},
   options:["Five","Seven","Nine","Ten"], answer:"Seven"},
  {id:"w8", type:"fill", q:{en:"Fill in: The sky is ___ (အပြာရောင်)."}, answer:"blue"},
  {id:"w9", type:"mcq", q:{en:"Choose the plural: One book, two ___."},
   options:["book","books","bookes","bookies"], answer:"books"},
  {id:"w10", type:"mcq", q:{en:"___ is my mother. (near you)"},
   options:["That","Those","This","These"], answer:"This"},
  {id:"w11", type:"fill", q:{en:"Fill in the question word: ___ is your name? (What/Where/Who)"}, answer:"What"},
  {id:"w12", type:"mcq", q:{en:"Choose the word for 'အဖေ':"},
   options:["Mother","Father","Sister","Brother"], answer:"Father"},
  {id:"w13", type:"mcq", q:{en:"Which animal is big and gray with a long nose?"},
   options:["Tiger","Elephant","Frog","Bird"], answer:"Elephant"},
  {id:"w14", type:"fill", q:{en:"Fill in: I drink ___ every morning. (နို့)"}, answer:"milk"},
  {id:"w15", type:"mcq", q:{en:"Which day comes after Sunday?"},
   options:["Saturday","Monday","Friday","Wednesday"], answer:"Monday"},
  {id:"w16", type:"mcq", q:{en:"Choose the correct sentence order:"},
   options:["Elephant big a","A big elephant","Big a elephant","Elephant a big"], answer:"A big elephant"},
  {id:"w17", type:"mcq", q:{en:"The book is ___ the table. (on top of)"},
   options:["under","in","on","at"], answer:"on"},
  {id:"w18", type:"fill", q:{en:"Fill in: The cat is ___ the chair. (below)"}, answer:"under"},
  {id:"w19", type:"mcq", q:{en:"\"This is ___ book.\" (belongs to me)"},
   options:["your","his","my","her"], answer:"my"},
  {id:"w20", type:"mcq", q:{en:"Which word means 'နေသာသည်'?"},
   options:["Rainy","Sunny","Snowy","Windy"], answer:"Sunny"},
  {id:"w21", type:"fill", q:{en:"Fill in: I wear ___ on my feet. (ဖိနပ်)"}, answer:"shoes"},
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
  {id:"w28", type:"fill", q:{en:"Fill in: On a cold day, I wear a ___. (ဂျာကက်)"}, answer:"jacket"},
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
   options:["Swimming","Basketball","Cycling","Running"], answer:"Basketball"},
  {id:"w38", type:"fill", q:{en:"Fill in: I write with a ___. (ဘောပင်)"}, answer:"pen"},
  {id:"w39", type:"mcq", q:{en:"Which one do you sleep on?"},
   options:["Chair","Plate","Bed","Door"], answer:"Bed"},
  {id:"w40", type:"mcq", q:{en:"Which word means 'ပျော်ရွှင်'?"},
   options:["Sad","Angry","Happy","Scared"], answer:"Happy"},
  {id:"w41", type:"fill", q:{en:"Fill in: I ___ a book every night. (ဖတ်)"}, answer:"read"},
  {id:"w42", type:"mcq", q:{en:"Which word means very tired and want to close your eyes?"},
   options:["Hungry","Tired","Excited","Thirsty"], answer:"Tired"}
];
