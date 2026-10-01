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
  {    level: 1,
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
  {    level: 1,
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
  {    level: 1,
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
  {    level: 1,
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
  {    level: 1,
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
  {    level: 2,
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
  {    level: 2,
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
  {    level: 2,
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
  {    level: 2,
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
  {    level: 3,
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
  {    level: 3,
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
  {    level: 3,
    title: "Unit 12 — Shapes / ပုံသဏ္ဍာန်များ",
    words: [
      {emoji:"⭕", en:"Circle", my:"စက်ဝိုင်း"},
      {emoji:"⬜", en:"Square", my:"စတုရန်း"},
      {emoji:"🔺", en:"Triangle", my:"တြိဂံ"},
      {emoji:"⭐", en:"Star", my:"ကြယ်"},
      {emoji:"💛", en:"Heart", my:"နှလုံးသား ပုံသဏ္ဍာန်"}
    ]
  },
  {    level: 3,
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
  {    level: 5,
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
  {    level: 5,
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
  {    level: 5,
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
  {    level: 2,
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
  {    level: 2,
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
  {    level: 4,
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
  {    level: 4,
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
  },
  {    level: 6,
    title: "Unit 21 — Technology / နည်းပညာ",
    words: [
      {emoji:"📱", en:"Phone", my:"ဖုန်း"},
      {emoji:"💻", en:"Computer", my:"ကွန်ပျူတာ"},
      {emoji:"📷", en:"Camera", my:"ကင်မရာ"},
      {emoji:"🖨️", en:"Printer", my:"ပရင်တာ"},
      {emoji:"🔋", en:"Battery", my:"ဘက်ထရီ"},
      {emoji:"📶", en:"Internet", my:"အင်တာနက်"},
      {emoji:"🎧", en:"Headphones", my:"နားကြပ်"}
    ]
  },
  {    level: 6,
    title: "Unit 22 — Nature & Environment / သဘာဝပတ်ဝန်းကျင်",
    words: [
      {emoji:"🌳", en:"Tree", my:"သစ်ပင်"},
      {emoji:"🏞️", en:"River", my:"မြစ်"},
      {emoji:"⛰️", en:"Mountain", my:"တောင်"},
      {emoji:"🌊", en:"Ocean", my:"သမုဒ္ဒရာ"},
      {emoji:"🌲", en:"Forest", my:"တောင်တောကုန်း"},
      {emoji:"♻️", en:"Recycle", my:"ပြန်လည်အသုံးပြု"},
      {emoji:"🗑️", en:"Trash", my:"အမှိုက်"}
    ]
  },
  {    level: 6,
    title: "Unit 23 — Places in Town & Directions / မြို့ထဲရှိနေရာများနှင့် ဦးတည်ရာ",
    words: [
      {emoji:"🏥", en:"Hospital", my:"ဆေးရုံ"},
      {emoji:"🏦", en:"Bank", my:"ဘဏ်"},
      {emoji:"🏪", en:"Store", my:"စတိုးဆိုင်"},
      {emoji:"⛪", en:"Church", my:"ဘုရားကျောင်း"},
      {emoji:"⬅️", en:"Left", my:"ဘယ်ဘက်"},
      {emoji:"➡️", en:"Right", my:"ညာဘက်"},
      {emoji:"⬆️", en:"Straight", my:"တည့်တည့်"}
    ]
  },
  {    level: 1,
    title: "Unit 24 — Fruits / အသီးအနှံများ",
    words: [
      {emoji:"🍎", en:"Apple", my:"ပန်းသီး"},
      {emoji:"🍌", en:"Banana", my:"ငှက်ပျောသီး"},
      {emoji:"🍊", en:"Orange", my:"လိမ္မော်သီး"},
      {emoji:"🍇", en:"Grapes", my:"စပျစ်သီး"},
      {emoji:"🍉", en:"Watermelon", my:"ဖရဲသီး"},
      {emoji:"🥭", en:"Mango", my:"သရက်သီး"},
      {emoji:"🍍", en:"Pineapple", my:"နာနတ်သီး"},
      {emoji:"🍓", en:"Strawberry", my:"စတော်ဘယ်ရီသီး"}
    ]
  },
  {    level: 1,
    title: "Unit 25 — Vegetables / ဟင်းသီးဟင်းရွက်များ",
    words: [
      {emoji:"🥕", en:"Carrot", my:"မုန်လာဥနီ"},
      {emoji:"🥔", en:"Potato", my:"အာလူး"},
      {emoji:"🍅", en:"Tomato", my:"ခရမ်းချဉ်သီး"},
      {emoji:"🧅", en:"Onion", my:"ကြက်သွန်နီ"},
      {emoji:"🥬", en:"Cabbage", my:"ဂေါ်ဖီထုပ်"},
      {emoji:"🌽", en:"Corn", my:"ပြောင်းဖူး"},
      {emoji:"🥒", en:"Cucumber", my:"သခွားသီး"},
      {emoji:"🫑", en:"Pepper", my:"ငရုတ်သီး"}
    ]
  },
  {    level: 1,
    title: "Unit 26 — Seasons / ရာသီများ",
    words: [
      {emoji:"☀️", en:"Summer", my:"နွေရာသီ"},
      {emoji:"🌧️", en:"Rainy season", my:"မိုးရာသီ"},
      {emoji:"🍂", en:"Autumn", my:"ဆောင်းဦးရာသီ"},
      {emoji:"❄️", en:"Winter", my:"ဆောင်းရာသီ"},
      {emoji:"🌸", en:"Spring", my:"နွေဦးရာသီ"}
    ]
  },
  {    level: 2,
    title: "Unit 27 — Toys / ကစားစရာများ",
    words: [
      {emoji:"🪀", en:"Yo-yo", my:"ယိုယို"},
      {emoji:"🎈", en:"Balloon", my:"ဗူးဖောင်း"},
      {emoji:"🧸", en:"Teddy bear", my:"ဝက်အူဖုတ်ရုပ်"},
      {emoji:"🪁", en:"Kite", my:"လေယာဉ်ပုံပန်း"},
      {emoji:"🎲", en:"Dice", my:"တဲကွက်"},
      {emoji:"🚗", en:"Toy car", my:"ကစားစရာကား"},
      {emoji:"⚽", en:"Ball", my:"ဘောလုံး"}
    ]
  },
  {    level: 2,
    title: "Unit 28 — Kitchen Items / မီးဖိုချောင်သုံးပစ္စည်းများ",
    words: [
      {emoji:"🍳", en:"Pan", my:"ဒယ်အိုး"},
      {emoji:"🥘", en:"Pot", my:"အိုးကင်း"},
      {emoji:"🔪", en:"Knife", my:"ဓား"},
      {emoji:"🥣", en:"Bowl", my:"ခွက်"},
      {emoji:"🍴", en:"Fork", my:"ခက်ရင်း"},
      {emoji:"🧊", en:"Ice", my:"ရေခဲ"},
      {emoji:"🧂", en:"Salt", my:"ဆား"}
    ]
  },
  {    level: 2,
    title: "Unit 29 — Opposites / ဆန့်ကျင်ဘက်စကားလုံးများ",
    words: [
      {emoji:"⬆️⬇️", en:"Big / Small", my:"ကြီးသည် / သေးသည်"},
      {emoji:"🔥❄️", en:"Hot / Cold", my:"ပူသည် / အေးသည်"},
      {emoji:"⚡🐌", en:"Fast / Slow", my:"မြန်သည် / နှေးသည်"},
      {emoji:"📈📉", en:"New / Old", my:"အသစ် / အဟောင်း"},
      {emoji:"😊😢", en:"Happy / Sad", my:"ပျော်သည် / ဝမ်းနည်းသည်"},
      {emoji:"🔊🔇", en:"Loud / Quiet", my:"အသံကျယ် / တိတ်ဆိတ်"},
      {emoji:"⬆️⬇️", en:"Up / Down", my:"အပေါ် / အောက်"}
    ]
  },
  {    level: 3,
    title: "Unit 30 — Music & Instruments / ဂီတနှင့် တူရိယာများ",
    words: [
      {emoji:"🎸", en:"Guitar", my:"ဂီတာ"},
      {emoji:"🥁", en:"Drum", my:"စည်"},
      {emoji:"🎹", en:"Piano", my:"ပီယာနို"},
      {emoji:"🎤", en:"Microphone", my:"မိုက်ခရိုဖုန်း"},
      {emoji:"🎻", en:"Violin", my:"ဗားရီယိုလင်း"},
      {emoji:"🎵", en:"Song", my:"သီချင်း"},
      {emoji:"💃", en:"Dance", my:"အကမြေ"}
    ]
  },
  {    level: 3,
    title: "Unit 31 — Health & Illness / ကျန်းမာရေးနှင့် ဖျားနာမှု",
    words: [
      {emoji:"🤒", en:"Fever", my:"ဖျားခြင်း"},
      {emoji:"🤧", en:"Cold (illness)", my:"အအေးမိခြင်း"},
      {emoji:"🤕", en:"Headache", my:"ခေါင်းကိုက်ခြင်း"},
      {emoji:"🤢", en:"Stomachache", my:"ဗိုက်ကိုက်ခြင်း"},
      {emoji:"💊", en:"Medicine", my:"ဆေးဝါး"},
      {emoji:"🏥", en:"Hospital", my:"ဆေးရုံ"},
      {emoji:"🩹", en:"Bandage", my:"ပတ်တီး"}
    ]
  },
  {    level: 3,
    title: "Unit 32 — Sports Equipment / အားကစားပစ္စည်းများ",
    words: [
      {emoji:"⚽", en:"Football", my:"ဘောလုံး"},
      {emoji:"🏓", en:"Table tennis bat", my:"စားပွဲတင်တင်းနစ်ဒုတ်"},
      {emoji:"🏸", en:"Racket", my:"ရက်ကက်"},
      {emoji:"🏊", en:"Goggles", my:"ရေကူးမျက်မှန်"},
      {emoji:"⛑️", en:"Helmet", my:"ဦးထုတ်သံဖုံး"},
      {emoji:"👟", en:"Sports shoes", my:"အားကစားဖိနပ်"}
    ]
  },
  {    level: 4,
    title: "Unit 33 — Hobbies / ဝါသနာများ",
    words: [
      {emoji:"📸", en:"Photography", my:"ဓာတ်ပုံရိုက်ခြင်း"},
      {emoji:"🎨", en:"Drawing", my:"ပုံဆွဲခြင်း"},
      {emoji:"📚", en:"Reading books", my:"စာအုပ်ဖတ်ခြင်း"},
      {emoji:"🎮", en:"Playing games", my:"ဂိမ်းကစားခြင်း"},
      {emoji:"🌱", en:"Gardening", my:"ဥယျာဉ်ပြုစုခြင်း"},
      {emoji:"🧵", en:"Sewing", my:"ချုပ်ခြင်း"},
      {emoji:"🍳", en:"Cooking", my:"ဟင်းချက်ခြင်း"}
    ]
  },
  {    level: 4,
    title: "Unit 34 — Money & Shopping / ငွေကြေးနှင့် ဈေးဝယ်ခြင်း",
    words: [
      {emoji:"💵", en:"Money", my:"ငွေ"},
      {emoji:"🏷️", en:"Price", my:"စျေးနှုန်း"},
      {emoji:"🛍️", en:"Shopping bag", my:"ဈေးဝယ်အိတ်"},
      {emoji:"💰", en:"Coin", my:"အကြေးငွေ"},
      {emoji:"🧾", en:"Receipt", my:"ဘောက်ချာ"},
      {emoji:"🤑", en:"Expensive", my:"စျေးကြီးသည်"},
      {emoji:"🪙", en:"Cheap", my:"စျေးသက်သာသည်"}
    ]
  },
  {    level: 5,
    title: "Unit 35 — Travel & Holidays / ခရီးသွားခြင်းနှင့် ခရီးစဉ်များ",
    words: [
      {emoji:"🧳", en:"Suitcase", my:"ခရီးဆောင်သေတ္တာ"},
      {emoji:"🎫", en:"Ticket", my:"လက်မှတ်"},
      {emoji:"🏨", en:"Hotel", my:"ဟိုတယ်"},
      {emoji:"🗺️", en:"Map", my:"မြေပုံ"},
      {emoji:"🏖️", en:"Beach", my:"ကမ်းခြေ"},
      {emoji:"📸", en:"Souvenir", my:"အမှတ်တရပစ္စည်း"},
      {emoji:"🛂", en:"Passport", my:"နိုင်ငံကူးလက်မှတ်"}
    ]
  },
  {    level: 5,
    title: "Unit 36 — Countries & Nationalities / နိုင်ငံများနှင့် လူမျိုးများ",
    words: [
      {emoji:"🇲🇲", en:"Myanmar", my:"မြန်မာ"},
      {emoji:"🇹🇭", en:"Thailand", my:"ထိုင်း"},
      {emoji:"🇯🇵", en:"Japan", my:"ဂျပန်"},
      {emoji:"🇬🇧", en:"England", my:"အင်္ဂလန်"},
      {emoji:"🇺🇸", en:"America", my:"အမေရိကန်"},
      {emoji:"🇮🇳", en:"India", my:"အိန္ဒိယ"},
      {emoji:"🇨🇳", en:"China", my:"တရုတ်"}
    ]
  },
  {    level: 6,
    title: "Unit 37 — Science / သိပ္ပံပညာ",
    words: [
      {emoji:"🔬", en:"Microscope", my:"မိုက်ခရိုစကုပ်"},
      {emoji:"🧪", en:"Experiment", my:"စမ်းသပ်ခြင်း"},
      {emoji:"⚛️", en:"Atom", my:"အက်တမ်"},
      {emoji:"🧬", en:"DNA", my:"မျိုးရိုးဗီဇ"},
      {emoji:"🔭", en:"Telescope", my:"ရေးလ်စကုပ်"},
      {emoji:"⚗️", en:"Chemistry", my:"ဓာတုဗေဒ"}
    ]
  },
  {    level: 6,
    title: "Unit 38 — Space & Universe / အာကာသနှင့် စကြာဝဠာ",
    words: [
      {emoji:"🌍", en:"Earth", my:"ကမ္ဘာမြေ"},
      {emoji:"🌕", en:"Moon", my:"လ"},
      {emoji:"⭐", en:"Star", my:"ကြယ်"},
      {emoji:"🪐", en:"Planet", my:"ဂြိုဟ်"},
      {emoji:"🚀", en:"Rocket", my:"ဒုံးပျံ"},
      {emoji:"👨‍🚀", en:"Astronaut", my:"အာကာသယာဉ်မှူး"},
      {emoji:"☄️", en:"Comet", my:"ကြယ်တံခွန်"}
    ]
  },
  {    level: 1,
    title: "Unit 39 — Farm Animals / တောင်သူလယ်ယာတိရစ္ဆာန်များ",
    words: [
      {emoji:"🐄", en:"Cow", my:"နွား"},
      {emoji:"🐖", en:"Pig", my:"ဝက်"},
      {emoji:"🐑", en:"Sheep", my:"သိုး"},
      {emoji:"🐐", en:"Goat", my:"ဆိတ်"},
      {emoji:"🐎", en:"Horse", my:"မြင်း"},
      {emoji:"🦆", en:"Duck", my:"ဘဲ"},
      {emoji:"🐓", en:"Rooster", my:"ၾကက်ဖ"}
    ]
  },
  {    level: 2,
    title: "Unit 40 — Insects & Bugs / ပိုးမွှားများ",
    words: [
      {emoji:"🐝", en:"Bee", my:"ပျား"},
      {emoji:"🦋", en:"Butterfly", my:"လိပ်ပြာ"},
      {emoji:"🐜", en:"Ant", my:"ပုရွှက်ဆီး"},
      {emoji:"🕷️", en:"Spider", my:"ပင့်ကူ"},
      {emoji:"🐞", en:"Ladybug", my:"ပိုးလှလှ"},
      {emoji:"🦗", en:"Grasshopper", my:"နှံကောင်"},
      {emoji:"🪰", en:"Fly", my:"ယင်"}
    ]
  },
  {    level: 3,
    title: "Unit 41 — Extended Family / ရင်းချာမိသားစုဝင်များ",
    words: [
      {emoji:"👨‍👦", en:"Uncle", my:"ဦးလေး"},
      {emoji:"👩‍👧", en:"Aunt", my:"အန်တီ"},
      {emoji:"🧑", en:"Cousin", my:"ဝမ်းကွဲ"},
      {emoji:"👦", en:"Nephew", my:"တူ"},
      {emoji:"👧", en:"Niece", my:"တူမ"},
      {emoji:"👨‍👩‍👧‍👦", en:"Relatives", my:"ဆွေမျိုးများ"}
    ]
  },
  {    level: 4,
    title: "Unit 42 — Materials / ပစ္စည်းမျိုးစိတ်များ",
    words: [
      {emoji:"🪵", en:"Wood", my:"သစ်သား"},
      {emoji:"🧱", en:"Metal", my:"သတ္တု"},
      {emoji:"🥤", en:"Plastic", my:"ပလတ်စတစ်"},
      {emoji:"🪟", en:"Glass", my:"ဖန်"},
      {emoji:"🧵", en:"Cotton", my:"ဝါဂွမ်း"},
      {emoji:"🪨", en:"Stone", my:"ကျောက်"}
    ]
  },
  {    level: 4,
    title: "Unit 43 — Personality Adjectives / စရိုက်ဖော်ပြသောစကားလုံးများ",
    words: [
      {emoji:"😊", en:"Kind", my:"ကြင်နာသော"},
      {emoji:"🦁", en:"Brave", my:"ရဲစွမ်းသော"},
      {emoji:"😂", en:"Funny", my:"ဟာသရှိသော"},
      {emoji:"😳", en:"Shy", my:"ရှက်တတ်သော"},
      {emoji:"💪", en:"Strong", my:"ခွန်အားရှိသော"},
      {emoji:"🧠", en:"Clever", my:"ဉာဏ်ကောင်းသော"},
      {emoji:"🤗", en:"Friendly", my:"ဖော်ရွေသော"}
    ]
  },
  {    level: 4,
    title: "Unit 44 — Cooking Verbs / ဟင်းချက်ခြင်းဆိုင်ရာ ကြိယာများ",
    words: [
      {emoji:"🍲", en:"Boil", my:"ပြုတ်"},
      {emoji:"🍳", en:"Fry", my:"ကြော်"},
      {emoji:"🍞", en:"Bake", my:"ဖုတ်"},
      {emoji:"🔪", en:"Chop", my:"ခုတ်"},
      {emoji:"🥣", en:"Mix", my:"ရောနှော"},
      {emoji:"🧊", en:"Freeze", my:"ခဲအောင်လုပ်"}
    ]
  },
  {    level: 5,
    title: "Unit 45 — Restaurant & Eating Out / စားသောက်ဆိုင်",
    words: [
      {emoji:"📋", en:"Menu", my:"မီနူး"},
      {emoji:"🧑‍🍳", en:"Waiter/Waitress", my:"ဧည့်ကြိုစားပွဲထိုး"},
      {emoji:"🧾", en:"Bill", my:"ငွေတောင်းခံလွှာ"},
      {emoji:"🍽️", en:"Order", my:"မှာယူ"},
      {emoji:"💵", en:"Tip", my:"ဆုကြေး"},
      {emoji:"🪑", en:"Table for two", my:"လူနှစ်ယောက်စားပွဲ"}
    ]
  },
  {    level: 5,
    title: "Unit 46 — Bank & Post Office / ဘဏ်နှင့် စာတိုက်",
    words: [
      {emoji:"💳", en:"Bank account", my:"ဘဏ်အကောင့်"},
      {emoji:"✉️", en:"Letter", my:"စာ"},
      {emoji:"📦", en:"Package", my:"ပါဆယ်"},
      {emoji:"🏧", en:"ATM", my:"ATM စက်"},
      {emoji:"📮", en:"Mailbox", my:"စာတိုက်ပုံး"},
      {emoji:"💴", en:"Deposit", my:"ငွေသွင်း"}
    ]
  },
  {    level: 6,
    title: "Unit 47 — City & Countryside / မြို့ပြနှင့်တောရွာ",
    words: [
      {emoji:"🏙️", en:"City", my:"မြို့ပြ"},
      {emoji:"🏘️", en:"Countryside", my:"တောရွာ"},
      {emoji:"🚦", en:"Traffic", my:"ယာဉ်ကြောပိတ်ဆို့မှု"},
      {emoji:"🏭", en:"Factory", my:"စက်ရုံ"},
      {emoji:"🐄", en:"Farmland", my:"လယ်ယာမြေ"},
      {emoji:"🌆", en:"Skyscraper", my:"မိုးမျှော်တိုက်"}
    ]
  },
  {    level: 6,
    title: "Unit 48 — Computer & Internet / ကွန်ပျူတာနှင့် အင်တာနက်",
    words: [
      {emoji:"⌨️", en:"Keyboard", my:"ကီးဘုတ်"},
      {emoji:"🖱️", en:"Mouse (computer)", my:"မောက်စ်"},
      {emoji:"🔑", en:"Password", my:"စကားဝှက်"},
      {emoji:"📧", en:"Email", my:"အီးမေးလ်"},
      {emoji:"🌐", en:"Website", my:"ဝက်ဘ်ဆိုဒ်"},
      {emoji:"☁️", en:"Download", my:"ဒေါင်းလုဒ်ဆွဲ"}
    ]
  },
  {    level: 1,
    title: "Unit 49 — Pets / အိမ်မွေးတိရစ္ဆာန်များ",
    words: [
      {emoji:"🐶", en:"Dog", my:"ခွေး"},
      {emoji:"🐱", en:"Cat", my:"ကြောင်"},
      {emoji:"🐠", en:"Fish", my:"ငါး"},
      {emoji:"🐦", en:"Bird", my:"ငှက်"},
      {emoji:"🐰", en:"Rabbit", my:"ယုန်"},
      {emoji:"🐹", en:"Hamster", my:"ဟမ်စတာ"}
    ]
  },
  {    level: 3,
    title: "Unit 50 — Parts of a House / အိမ်၏ အခန်းများ",
    words: [
      {emoji:"🛏️", en:"Bedroom", my:"အိပ်ခန်း"},
      {emoji:"🍳", en:"Kitchen", my:"မီးဖိုချောင်"},
      {emoji:"🛁", en:"Bathroom", my:"ရေချိုးခန်း"},
      {emoji:"🛋️", en:"Living room", my:"ဧည့်ခန်း"},
      {emoji:"🏠", en:"Roof", my:"အမိုး"},
      {emoji:"🪜", en:"Stairs", my:"လှေကား"}
    ]
  },
  {    level: 3,
    title: "Unit 51 — Furniture / ပရိဘောဂများ",
    words: [
      {emoji:"🛋️", en:"Sofa", my:"ဆိုဖာ"},
      {emoji:"🪑", en:"Table", my:"စားပွဲ"},
      {emoji:"🚪", en:"Wardrobe", my:"အင်္ကျီဗီရို"},
      {emoji:"🪞", en:"Mirror", my:"မှန်"},
      {emoji:"💡", en:"Lamp", my:"မီးအိမ်"},
      {emoji:"📚", en:"Bookshelf", my:"စာအုပ်စင်"}
    ]
  },
  {    level: 4,
    title: "Unit 52 — Natural Disasters / သဘာဝဘေးအန္တရာယ်များ",
    words: [
      {emoji:"🌊", en:"Flood", my:"ရေကြီးခြင်း"},
      {emoji:"🌪️", en:"Storm", my:"မုန်တိုင်း"},
      {emoji:"🏚️", en:"Earthquake", my:"မြေငလျင်"},
      {emoji:"🔥", en:"Fire", my:"မီးလောင်ခြင်း"},
      {emoji:"☀️", en:"Drought", my:"မိုးခေါင်ခြင်း"}
    ]
  },
  {    level: 4,
    title: "Unit 53 — Money Verbs / ငွေကြေးဆိုင်ရာ ကြိယာများ",
    words: [
      {emoji:"💰", en:"Save", my:"စုဆောင်း"},
      {emoji:"🛍️", en:"Spend", my:"သုံးစွဲ"},
      {emoji:"🤝", en:"Borrow", my:"ငှား"},
      {emoji:"🤲", en:"Lend", my:"ငှားပေး"},
      {emoji:"💵", en:"Pay", my:"ပေးချေ"},
      {emoji:"🏦", en:"Earn", my:"ရှာဖွေ"}
    ]
  },
  {    level: 4,
    title: "Unit 54 — Party & Celebrations / ပါတီနှင့် ပွဲလမ်းသဘင်များ",
    words: [
      {emoji:"🎂", en:"Birthday cake", my:"မွေးနေ့ကိတ်"},
      {emoji:"🎁", en:"Gift", my:"လက်ဆောင်"},
      {emoji:"🎈", en:"Balloon", my:"ဗူးဖောင်း"},
      {emoji:"🎉", en:"Celebrate", my:"ပွဲခံ"},
      {emoji:"🎊", en:"Party", my:"ပါတီ"},
      {emoji:"🕯️", en:"Candle", my:"ဖယောင်းတိုင်"}
    ]
  },
  {    level: 5,
    title: "Unit 55 — At the Airport / လေဆိပ်တွင်",
    words: [
      {emoji:"🎫", en:"Boarding pass", my:"လေယာဉ်ပေါ်တက်လက်မှတ်"},
      {emoji:"🚪", en:"Gate", my:"ဂိတ်"},
      {emoji:"🧳", en:"Luggage", my:"ခရီးဆောင်ပစ္စည်း"},
      {emoji:"✈️", en:"Flight", my:"လေယာဉ်ခရီးစဉ်"},
      {emoji:"🛂", en:"Passport control", my:"နိုင်ငံကူးလက်မှတ်စစ်ဆေးရေး"}
    ]
  },
  {    level: 5,
    title: "Unit 56 — Camping & Outdoors / စခန်းချခြင်းနှင့် ပြင်ပလှုပ်ရှားမှု",
    words: [
      {emoji:"⛺", en:"Tent", my:"တဲ"},
      {emoji:"🛌", en:"Sleeping bag", my:"အိပ်အိတ်"},
      {emoji:"🔥", en:"Campfire", my:"စခန်းမီးအိုင်"},
      {emoji:"🎒", en:"Backpack", my:"ကျောပိုးအိတ်"},
      {emoji:"🔦", en:"Flashlight", my:"လက်နှိပ်ဓာတ်မီး"},
      {emoji:"🥾", en:"Hiking boots", my:"တောင်တက်ဖိနပ်"}
    ]
  },
  {    level: 5,
    title: "Unit 57 — Emergencies / အရေးပေါ်အခြေအနေများ",
    words: [
      {emoji:"🚨", en:"Emergency", my:"အရေးပေါ်အခြေအနေ"},
      {emoji:"🚑", en:"Ambulance", my:"လူနာတင်ကား"},
      {emoji:"🚒", en:"Fire truck", my:"မီးသတ်ကား"},
      {emoji:"👮", en:"Police", my:"ရဲ"},
      {emoji:"🆘", en:"Help", my:"အကူအညီ"},
      {emoji:"🚪", en:"Exit", my:"ထွက်ပေါက်"}
    ]
  },
  {    level: 6,
    title: "Unit 58 — Global Issues / ကမ္ဘာလုံးဆိုင်ရာပြဿနာများ",
    words: [
      {emoji:"🏭", en:"Pollution", my:"ညစ်ညမ်းမှု"},
      {emoji:"🌍", en:"Climate change", my:"ရာသီဥတုပြောင်းလဲမှု"},
      {emoji:"🌳", en:"Deforestation", my:"သစ်တောပြုန်းတီးမှု"},
      {emoji:"💰", en:"Poverty", my:"ဆင်းရဲမွဲတေမှု"},
      {emoji:"♻️", en:"Sustainability", my:"ရေရှည်တည်တံ့မှု"}
    ]
  },
  {    level: 6,
    title: "Unit 59 — Business & Economy / စီးပွားရေးနှင့် ဘဏ္ဍာရေး",
    words: [
      {emoji:"🏢", en:"Company", my:"ကုမ္ပဏီ"},
      {emoji:"📈", en:"Profit", my:"အမြတ်"},
      {emoji:"🧑‍💼", en:"Customer", my:"ဖောက်သည်"},
      {emoji:"💵", en:"Salary", my:"လစာ"},
      {emoji:"📊", en:"Market", my:"ဈေးကွက်"}
    ]
  },
  {    level: 6,
    title: "Unit 60 — Law & Government / ဥပဒေနှင့် အစိုးရ",
    words: [
      {emoji:"🏛️", en:"Government", my:"အစိုးရ"},
      {emoji:"👨‍⚖️", en:"President", my:"သမ္မတ"},
      {emoji:"🗳️", en:"Vote", my:"မဲပေး"},
      {emoji:"⚖️", en:"Law", my:"ဥပဒေ"},
      {emoji:"🏢", en:"Court", my:"တရားရုံး"},
      {emoji:"🪪", en:"Citizen", my:"နိုင်ငံသား"}
    ]
  }
];

const GRAMMAR_UNITS = [
  {    level: 1,
    title: "Grammar 1 — What is a sentence? / ဝါကျဆိုတာ",
    explain: [
      {en:"A sentence needs a SUBJECT (who/what) and a VERB (action). Example: I + eat.", 
       my:"ဝါကျတစ်ခုမှာ Subject (ဘယ်သူ/ဘာ) နဲ့ Verb (လုပ်ဆောင်ချက်) လိုအပ်ပါတယ်။ ဥပမာ - I + eat."}
    ],
    examples: ["I eat rice.", "You read a book.", "She drinks water."]
  },
  {    level: 1,
    title: "Grammar 2 — The verb \"to be\" (am / is / are) / to be",
    explain: [
      {en:"Use 'am' with I, 'is' with he/she/it, 'are' with you/we/they.",
       my:"I နဲ့ 'am' ကို၊ he/she/it နဲ့ 'is' ကို၊ you/we/they နဲ့ 'are' ကို သုံးပါ။"}
    ],
    examples: ["I am a student.", "He is a boy.", "They are happy."]
  },
  {    level: 1,
    title: "Grammar 3 — Simple Present (daily habits) / လက်ရှိပြုမူ",
    explain: [
      {en:"Use the simple present for daily habits. Add -s for he/she/it.",
       my:"နေ့စဉ်လုပ်လေ့ရှိတာကို Simple Present နဲ့ ပြောပါတယ်။ he/she/it နဲ့ -s ထပ်ထည့်ပါ။"}
    ],
    examples: ["I go to school.", "She goes to school.", "We play football."]
  },
  {    level: 2,
    title: "Grammar 4 — Plural nouns (one → many) / အများကိန်း",
    explain: [
      {en:"Add -s to most words to show more than one. Some words are irregular.",
       my:"တစ်ခုထက်ပိုတာကို ပြဖို့ အများစုမှာ -s ထပ်ထည့်ပါ။ အချို့စကားလုံးများက ပုံမှန်မဟုတ်ပါ။"}
    ],
    examples: ["One book, two books.", "One cat, three cats.", "One child, two children. (irregular)"]
  },
  {    level: 2,
    title: "Grammar 5 — This / That / These / Those / ဒီဟာ · ဟိုဟာ",
    explain: [
      {en:"'This/These' = near you. 'That/Those' = far from you. This/That = one thing. These/Those = many things.",
       my:"'This/These' = နီးနီးဟာ။ 'That/Those' = ဝေးဝေးဟာ။ This/That = တစ်ခု။ These/Those = အများ။"}
    ],
    examples: ["This is my book.", "That is your house.", "These are my pencils.", "Those are their shoes."]
  },
  {    level: 2,
    title: "Grammar 6 — Question words (What, Where, Who) / မေးခွန်းလုံးများ",
    explain: [
      {en:"'What' asks about things, 'Where' asks about places, 'Who' asks about people.",
       my:"'What' က အရာဝတ္ထုကို မေးတယ်၊ 'Where' က နေရာကို မေးတယ်၊ 'Who' က လူကို မေးတယ်။"}
    ],
    examples: ["What is your name?", "Where do you live?", "Who is your teacher?"]
  },
  {    level: 2,
    title: "Grammar 7 — Adjectives (describing words) / နာမဝိသေသန",
    explain: [
      {en:"Adjectives describe nouns. They usually come before the noun.",
       my:"Adjective တွေက naun ကို ဖော်ပြပါတယ်။ ပုံမှန်အားဖြင့် naun ရှေ့မှာ ရှိပါတယ်။"}
    ],
    examples: ["A big elephant.", "A small frog.", "A red apple."]
  },
  {    level: 3,
    title: "Grammar 8 — Prepositions of place (in, on, under) / နေရာပြ preposition",
    explain: [
      {en:"'In' = inside. 'On' = on top of. 'Under' = below.",
       my:"'In' = အထဲမှာ။ 'On' = အပေါ်မှာ။ 'Under' = အောက်မှာ။"}
    ],
    examples: ["The book is on the table.", "The cat is under the chair.", "The pencil is in the bag."]
  },
  {    level: 3,
    title: "Grammar 9 — Possessive words (my, your, his, her) / ပိုင်ဆိုင်မှုပြ",
    explain: [
      {en:"These words show who something belongs to.",
       my:"ဒီစကားလုံးတွေက တစ်ခုခုက ဘယ်သူ့ဟာဖြစ်တယ်ဆိုတာကို ပြပါတယ်။"}
    ],
    examples: ["This is my book.", "That is your bag.", "This is his pencil.", "That is her house."]
  },
  {    level: 3,
    title: "Grammar 10 — Simple Past (yesterday) / အတိတ်ကာလ",
    explain: [
      {en:"Use the simple past for things that already happened. Many verbs add -ed.",
       my:"ဖြစ်ပြီးသားအရာများအတွက် Simple Past သုံးပါ။ verb အများစုက -ed ထပ်ထည့်ပါတယ်။"}
    ],
    examples: ["I played football yesterday.", "She walked to school.", "We ate rice. (irregular)"]
  },
  {    level: 3,
    title: "Grammar 11 — Can / Can't (ability) / တတ်ကျွမ်းမှု",
    explain: [
      {en:"'Can' shows you are able to do something. 'Can't' shows you are not able.",
       my:"'Can' က တတ်ကျွမ်းမှုကို ပြပါတယ်။ 'Can't' က မတတ်ကျွမ်းမှုကို ပြပါတယ်။"}
    ],
    examples: ["I can swim.", "She can sing.", "He can't fly."]
  },
  {    level: 2,
    title: "Grammar 12 — There is / There are / ရှိသည်",
    explain: [
      {en:"'There is' for one thing. 'There are' for many things.",
       my:"'There is' တစ်ခုတည်းအတွက်။ 'There are' အများအတွက်။"}
    ],
    examples: ["There is a cat on the bed.", "There are three books on the table."]
  },
  {    level: 4,
    title: "Grammar 13 — Comparative & Superlative / နှိုင်းယှဉ်ခြင်း",
    explain: [
      {en:"Add -er to compare two things. Add -est (with 'the') to compare three or more.",
       my:"နှစ်ခုနှိုင်းယှဉ်ဖို့ -er ထပ်ထည့်ပါ။ သုံးခုထက်ပိုတာကို နှိုင်းယှဉ်ဖို့ 'the' + -est သုံးပါ။"}
    ],
    examples: ["This bag is bigger than that one.", "This is the biggest elephant in the zoo.", "She is taller than me."]
  },
  {    level: 5,
    title: "Grammar 14 — Past Continuous (was/were + -ing) / ဖြစ်ပျက်နေဆဲအတိတ်",
    explain: [
      {en:"Use 'was/were' + verb-ing for an action that was happening at a certain time in the past.",
       my:"အတိတ်ကာလက အချိန်တစ်ခုမှာ ဖြစ်ပျက်နေတဲ့အရာအတွက် 'was/were' + verb-ing သုံးပါ။"}
    ],
    examples: ["I was reading a book at 8pm.", "They were playing football yesterday.", "She was sleeping when I called."]
  },
  {    level: 4,
    title: "Grammar 15 — Future with \"going to\" / အနာဂတ်ကာလ (\"going to\")",
    explain: [
      {en:"Use 'am/is/are + going to' to talk about a plan for the future.",
       my:"အနာဂတ် အစီအစဉ်ကို ပြောဖို့ 'am/is/are + going to' သုံးပါ။"}
    ],
    examples: ["I am going to visit my grandmother.", "It is going to rain.", "We are going to play football tomorrow."]
  },
  {    level: 4,
    title: "Grammar 16 — Adverbs of Frequency (always, sometimes, never) / ကြိမ်နှုန်းပြ",
    explain: [
      {en:"These words say how often something happens. They go before the main verb.",
       my:"ဒီစကားလုံးတွေက တစ်ခုခု ဘယ်လောက်ကြာကြာဖြစ်လဲဆိုတာ ပြပါတယ်။ verb ရှေ့မှာ ရှိပါတယ်။"}
    ],
    examples: ["I always eat breakfast.", "She sometimes plays basketball.", "He never eats candy."]
  },
  {    level: 4,
    title: "Grammar 17 — Telling Time / အချိန်ပြောခြင်း",
    explain: [
      {en:"Use 'It is + [hour] o'clock' for the exact hour, or 'It is half past / quarter past [hour]'.",
       my:"နာရီအတိအကျအတွက် 'It is + [hour] o'clock' သုံးပါ၊ (သို့) 'It is half past / quarter past [hour]'."}
    ],
    examples: ["It is three o'clock.", "It is half past seven.", "It is quarter past nine."]
  },
  {    level: 5,
    title: "Grammar 18 — Object Pronouns (me, him, her, them) / အရာဝတ္ထုပြ နာမ်စား",
    explain: [
      {en:"Object pronouns replace a noun that receives the action (comes after the verb).",
       my:"Object pronoun တွေက verb ရဲ့ လက်ခံသူ naun ကို အစားထိုးပါတယ် (verb ရဲ့ နောက်မှာ လာပါတယ်)။"}
    ],
    examples: ["I see him.", "She likes me.", "We help them.", "Please give it to her."]
  },
  {    level: 6,
    title: "Grammar 19 — Present Perfect (have/has + past participle) / လက်ရှိစုံလင်ကာလ",
    explain: [
      {en:"Use 'have/has + past participle' for something that happened at an unspecified time, or continues into now.",
       my:"အချိန်အတိအကျ မဖော်ပြဘဲ ဖြစ်ခဲ့တဲ့အရာ (သို့) အခုအချိန်ထိ ဆက်ဖြစ်နေတဲ့အရာအတွက် 'have/has + past participle' သုံးပါ။"}
    ],
    examples: ["I have visited Japan.", "She has finished her homework.", "They have lived here for two years."]
  },
  {    level: 6,
    title: "Grammar 20 — Modals of Obligation (must, have to, should) / တာဝန်ပြ modal",
    explain: [
      {en:"'Must/have to' show something is necessary. 'Should' gives advice, softer than 'must'.",
       my:"'Must/have to' က လိုအပ်ချက်ကို ပြပါတယ်။ 'Should' ကတော့ အကြံပြုချက်ဖြစ်ပြီး 'must' ထက် ပိုနူးညံ့ပါတယ်။"}
    ],
    examples: ["You must wear a seatbelt.", "I have to finish my homework.", "You should drink more water."]
  },
  {    level: 6,
    title: "Grammar 21 — Relative Clauses (who, which, that) / ဆက်စပ်ပုဒ်ချုပ်",
    explain: [
      {en:"'Who' is for people, 'which' is for things, 'that' can be used for both. They add extra information about a noun.",
       my:"'Who' ကို လူအတွက်၊ 'which' ကို အရာဝတ္ထုအတွက်၊ 'that' ကို နှစ်မျိုးစလုံးအတွက် သုံးနိုင်ပါတယ်။ Naun အကြောင်း အချက်အလက်ထပ်ဖြည့်ပေးပါတယ်။"}
    ],
    examples: ["The teacher who teaches English is kind.", "This is the book which I read.", "I have a dog that is very friendly."]
  },
  {    level: 6,
    title: "Grammar 22 — Passive Voice (is/are + past participle) / ကတ္တားဝါစက",
    explain: [
      {en:"Use passive voice when the action matters more than who did it.",
       my:"ဘယ်သူလုပ်တယ်ဆိုတာထက် လုပ်ဆောင်ချက်ကသာ အရေးကြီးတဲ့အခါ Passive voice ကို သုံးပါတယ်။"}
    ],
    examples: ["The letter is written by Tom.", "The windows are cleaned every week.", "The cake was eaten by the children."]
  },
  {    level: 6,
    title: "Grammar 23 — First Conditional (If + present, will + verb) / အနာဂတ်အခြေအနေပြ",
    explain: [
      {en:"Use 'If + present simple, ... will + verb' to talk about a real possible future result.",
       my:"အနာဂတ်မှာ ဖြစ်နိုင်ချေရှိတဲ့ ရလဒ်ကို ပြောဖို့ 'If + present simple, ... will + verb' ပုံစံကို သုံးပါတယ်။"}
    ],
    examples: ["If it rains, I will stay home.", "If you study hard, you will pass the test.", "If she calls, I will answer."]
  },
  {    level: 6,
    title: "Grammar 24 — Reported Speech (basic) / သွယ်ဝိုက်ပြောစကား",
    explain: [
      {en:"When we report what someone said, the verb tense usually moves one step into the past.",
       my:"တစ်ယောက်ယောက်ပြောတာကို ပြန်ပြောပြတဲ့အခါ verb tense ကို အတိတ်ကာလဆီ တစ်ဆင့် ရွှေ့ပေးရပါတယ်။"}
    ],
    examples: ["She said, \"I am tired.\" → She said (that) she was tired.", "He said, \"I will come.\" → He said (that) he would come."]
  },
  {    level: 1,
    title: "Grammar 25 — Articles (a, an, the) / Article များ",
    explain: [
      {en:"Use 'a' before a consonant sound, 'an' before a vowel sound, for one non-specific thing. Use 'the' for a specific thing both people know.",
       my:"Consonant အသံရှေ့မှာ 'a', vowel အသံရှေ့မှာ 'an' ကို တစ်ခုတည်းအတွက် သုံးပါတယ်။ 'the' ကိုတော့ နှစ်ဦးစလုံးသိတဲ့ အရာအတွက် သုံးပါတယ်။"}
    ],
    examples: ["I have a book.", "She has an apple.", "The sun is hot."]
  },
  {    level: 1,
    title: "Grammar 26 — Yes/No Questions / ဟုတ်/မဟုတ် မေးခွန်းများ",
    explain: [
      {en:"To make a yes/no question, put 'Is/Are/Do/Does' at the start of the sentence.",
       my:"ဟုတ်/မဟုတ် မေးခွန်းလုပ်ဖို့ ဝါကျအစမှာ 'Is/Are/Do/Does' ကို ထားပါတယ်။"}
    ],
    examples: ["Is she a teacher?", "Are they happy?", "Do you like tea?", "Does he play football?"]
  },
  {    level: 2,
    title: "Grammar 27 — Present Continuous (is/are + -ing) / လက်ရှိဆက်တိုက်ကာလ",
    explain: [
      {en:"Use 'is/are + verb-ing' for an action happening right now.",
       my:"အခုလက်ရှိ ဖြစ်ပျက်နေတဲ့ လုပ်ဆောင်ချက်အတွက် 'is/are + verb-ing' ကို သုံးပါတယ်။"}
    ],
    examples: ["I am eating lunch.", "She is reading a book.", "They are playing football now."]
  },
  {    level: 2,
    title: "Grammar 28 — Some / Any / တချို့ / တစ်စုံတစ်ခုမျှ",
    explain: [
      {en:"Use 'some' in positive sentences, and 'any' in negative sentences and questions.",
       my:"'Some' ကို positive ဝါကျတွေမှာ၊ 'any' ကို negative ဝါကျနဲ့ မေးခွန်းတွေမှာ သုံးပါတယ်။"}
    ],
    examples: ["I have some apples.", "I don't have any apples.", "Do you have any milk?"]
  },
  {    level: 3,
    title: "Grammar 29 — Much / Many / A lot of / အရေအတွက်ပြ",
    explain: [
      {en:"'Many' is for countable nouns, 'much' is for uncountable nouns. 'A lot of' works for both.",
       my:"'Many' ကို ရေတွက်လို့ရတဲ့ naun တွေအတွက်၊ 'much' ကို ရေတွက်မရတဲ့ naun တွေအတွက် သုံးပါတယ်။ 'A lot of' က နှစ်မျိုးစလုံးအတွက် သုံးနိုင်ပါတယ်။"}
    ],
    examples: ["I have many friends.", "I don't have much time.", "She has a lot of books."]
  },
  {    level: 3,
    title: "Grammar 30 — Imperatives (commands) / အမိန့်ပေးဝါကျများ",
    explain: [
      {en:"Use the base verb at the start of a sentence to give a command or instruction. Add 'don't' for negative commands.",
       my:"အမိန့်ပေး (သို့) ညွှန်ကြားချက်ပေးဖို့ ဝါကျအစမှာ verb ရိုးရိုးကို သုံးပါတယ်။ Negative command အတွက် 'don't' ထည့်ပါ။"}
    ],
    examples: ["Close the door.", "Sit down, please.", "Don't touch that."]
  },
  {    level: 4,
    title: "Grammar 31 — Would like to / Want to / လိုချင်တာပြ",
    explain: [
      {en:"'Would like to' is a polite way to say what you want. 'Want to' is more casual.",
       my:"'Would like to' က လိုချင်တာကို ယဉ်ကျေးစွာ ပြောနည်းဖြစ်ပြီး 'want to' က ပိုပေါ့ပေါ့ပါးပါး ပြောနည်းဖြစ်ပါတယ်။"}
    ],
    examples: ["I would like to have some water.", "I want to play outside.", "Would you like to come with us?"]
  },
  {    level: 4,
    title: "Grammar 32 — Irregular Comparatives (good/bad) / ပုံမှန်မဟုတ်သော နှိုင်းယှဉ်ခြင်း",
    explain: [
      {en:"Some adjectives don't add -er/-est; they change completely: good → better → best, bad → worse → worst.",
       my:"Adjective အချို့က -er/-est ထပ်မထည့်ဘဲ လုံးလုံးပြောင်းသွားတယ်: good → better → best, bad → worse → worst."}
    ],
    examples: ["This cake is better than that one.", "This is the best day of my life.", "The weather is worse today."]
  },
  {    level: 5,
    title: "Grammar 33 — Used to (past habits) / အတိတ်က အလေ့အထ",
    explain: [
      {en:"Use 'used to + base verb' for a past habit or state that is not true anymore.",
       my:"အခုမမှန်တော့တဲ့ အတိတ်ကအလေ့အထ (သို့) အခြေအနေအတွက် 'used to + verb ရိုးရိုး' ကို သုံးပါတယ်။"}
    ],
    examples: ["I used to live in a village.", "She used to play the piano.", "We used to walk to school."]
  },
  {    level: 5,
    title: "Grammar 34 — Second Conditional (If + past, would + verb) / မဖြစ်နိုင်တဲ့အခြေအနေပြ",
    explain: [
      {en:"Use 'If + past simple, ... would + verb' to talk about an imaginary or unlikely situation.",
       my:"စိတ်ကူးထဲကအခြေအနေ (သို့) ဖြစ်နိုင်ချေနည်းတဲ့အရာအတွက် 'If + past simple, ... would + verb' ကို သုံးပါတယ်။"}
    ],
    examples: ["If I had a lot of money, I would travel the world.", "If I were a bird, I would fly every day."]
  },
  {    level: 6,
    title: "Grammar 35 — Present Perfect Continuous / လက်ရှိစုံလင်ဆက်တိုက်ကာလ",
    explain: [
      {en:"Use 'have/has been + verb-ing' for an action that started in the past and is still continuing.",
       my:"အတိတ်ကနေ စပြီး အခုထိ ဆက်ဖြစ်နေတဲ့အရာအတွက် 'have/has been + verb-ing' ကို သုံးပါတယ်။"}
    ],
    examples: ["I have been studying English for two years.", "She has been waiting for an hour."]
  },
  {    level: 6,
    title: "Grammar 36 — Question Tags / အတည်ပြုမေးခွန်း",
    explain: [
      {en:"A question tag is a short question added to the end of a sentence, to check or confirm information.",
       my:"Question tag က သတင်းအချက်အလက်ကို စစ်ဆေး/အတည်ပြုဖို့ ဝါကျအဆုံးမှာ ထပ်ဖြည့်တဲ့ မေးခွန်းတိုလေးဖြစ်ပါတယ်။"}
    ],
    examples: ["You are a student, aren't you?", "She likes tea, doesn't she?", "They can swim, can't they?"]
  },
  {    level: 2,
    title: "Grammar 37 — Whose (asking about possession) / ပိုင်ရှင်မေးခွန်း",
    explain: [
      {en:"Use 'whose' to ask who something belongs to.",
       my:"တစ်ခုခုက ဘယ်သူ့ဟာလဲဆိုတာ မေးဖို့ 'whose' ကို သုံးပါတယ်။"}
    ],
    examples: ["Whose book is this?", "Whose bag is that?", "It is my sister's bag."]
  },
  {    level: 3,
    title: "Grammar 38 — Prepositions of Time (before, after, during, since) / အချိန်ပြ preposition",
    explain: [
      {en:"'Before/after' show order, 'during' shows something happening inside a period, 'since' shows a starting point.",
       my:"'Before/after' က အစီအစဉ်ကို ပြပြီး၊ 'during' က ကာလတစ်ခုအတွင်းဖြစ်တာကို ပြပါတယ်၊ 'since' ကတော့ အစချက်ကို ပြပါတယ်။"}
    ],
    examples: ["I eat breakfast before school.", "I sleep after dinner.", "It rained during the trip.", "I have lived here since 2020."]
  },
  {    level: 4,
    title: "Grammar 39 — Too / Enough / လွန်းသည် / လုံလောက်သည်",
    explain: [
      {en:"'Too + adjective' means more than needed (a problem). 'Enough' means the right amount.",
       my:"'Too + adjective' က လိုအပ်တာထက် ပိုတယ် (ပြဿနာဖြစ်နိုင်တယ်) လို့ ဆိုလိုပါတယ်။ 'Enough' ကတော့ လိုအပ်တဲ့ပမာဏအတိုင်း ဆိုလိုပါတယ်။"}
    ],
    examples: ["This tea is too hot.", "I don't have enough money.", "She is old enough to go to school."]
  },
  {    level: 5,
    title: "Grammar 40 — Gerunds as Subjects (Swimming is fun) / Gerund ကို subject အဖြစ်သုံးခြင်း",
    explain: [
      {en:"A gerund is a verb-ing form used like a noun. It can be the subject of a sentence.",
       my:"Gerund ဆိုတာ naun လိုသုံးတဲ့ verb-ing ပုံစံဖြစ်ပါတယ်။ ဝါကျရဲ့ subject အဖြစ် သုံးနိုင်ပါတယ်။"}
    ],
    examples: ["Swimming is fun.", "Reading books helps you learn.", "Cooking takes a lot of time."]
  },
  {    level: 6,
    title: "Grammar 41 — Indirect Questions / သွယ်ဝိုက်မေးခွန်း",
    explain: [
      {en:"Indirect questions are more polite. The word order changes to subject + verb (not verb + subject).",
       my:"Indirect question က ပိုယဉ်ကျေးပါတယ်။ Word order က subject + verb ပုံစံ ပြောင်းသွားပါတယ် (verb + subject မဟုတ်ပါ)။"}
    ],
    examples: ["Could you tell me where the bank is?", "Do you know what time it is?", "I wonder why she is late."]
  },
  {    level: 6,
    title: "Grammar 42 — Basic Phrasal Verbs / အခြေခံ Phrasal Verb များ",
    explain: [
      {en:"A phrasal verb is a verb + a small word (like up, on, for) that together have a special meaning.",
       my:"Phrasal verb ဆိုတာ verb + small word (up, on, for စသည်) ပေါင်းစပ်ပြီး အထူးအဓိပ္ပာယ်ရှိတဲ့ ဝေါဟာရဖြစ်ပါတယ်။"}
    ],
    examples: ["Wake up! It's time for school.", "Please turn on the light.", "I am looking for my pencil."]
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
   note:{en:"Listen for: sunny, rainy, cloudy, snowy.", my:"sunny, rainy, cloudy, snowy — ရာသီဥတုစကားလုံးများကို နားထောင်ပါ။"}},
  {title:"Listen 10 — Fruit Is Yummy / အသီးအနှံသီချင်း",
   youtubeId:"DDjOLRNby20",
   keyPhrase:"Fruit is yummy in my tummy",
   note:{en:"Listen for fruit names: banana, mango, apple, strawberry.", my:"banana, mango, apple, strawberry — အသီးနာမည်များကို နားထောင်ပါ။"}},
  {title:"Listen 11 — The Shape Song #1 / ပုံသဏ္ဍာန်သီချင်း",
   youtubeId:"TJhfl5vdxp4",
   keyPhrase:"A circle, a diamond, a square, and a heart",
   note:{en:"Try to draw each shape as you hear its name.", my:"နာမည်ကြားတိုင်း အဲဒီပုံသဏ္ဍာန်ကို ဆွဲကြည့်ပါ။"}},
  {title:"Listen 12 — The Animals On The Farm / တောင်သူလယ်ယာတိရစ္ဆာန်သီချင်း",
   youtubeId:"zXEq-QO3xTg",
   keyPhrase:"The cow says moo, the pig says oink",
   note:{en:"Listen for the farm animal sounds and try to copy them.", my:"တောင်သူလယ်ယာတိရစ္ဆာန်အသံများကို နားထောင်ပြီး လိုက်ဆိုကြည့်ပါ။"}}
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
   ]},
  {title:"Speak 11 — Giving advice / အကြံပေးခြင်း",
   prompts:[
     {en:"Say: \"You should drink more water.\"", my:"ပြောကြည့်ပါ - \"You should drink more water.\""},
     {en:"Say: \"I have to finish my homework.\"", my:"ပြောကြည့်ပါ - \"I have to finish my homework.\""}
   ]},
  {title:"Speak 12 — Talking about experiences / အတွေ့အကြုံပြောခြင်း",
   prompts:[
     {en:"Say: \"I have visited Yangon.\"", my:"ပြောကြည့်ပါ - \"I have visited Yangon.\""},
     {en:"Say: \"If it rains, I will stay home.\"", my:"ပြောကြည့်ပါ - \"If it rains, I will stay home.\""}
   ]},
  {title:"Speak 13 — Talking about food / အစားအစာအကြောင်းပြော",
   prompts:[
     {en:"Say: \"I like eating mangoes.\"", my:"ပြောကြည့်ပါ - \"I like eating mangoes.\""},
     {en:"Say: \"I don't have any vegetables.\"", my:"ပြောကြည့်ပါ - \"I don't have any vegetables.\""}
   ]},
  {title:"Speak 14 — Talking about hobbies / ဝါသနာအကြောင်းပြော",
   prompts:[
     {en:"Say: \"My hobby is drawing.\"", my:"ပြောကြည့်ပါ - \"My hobby is drawing.\""},
     {en:"Say: \"I would like to learn guitar.\"", my:"ပြောကြည့်ပါ - \"I would like to learn guitar.\""}
   ]},
  {title:"Speak 15 — Shopping / ဈေးဝယ်ခြင်း",
   prompts:[
     {en:"Say: \"How much is this?\"", my:"ပြောကြည့်ပါ - \"How much is this?\""},
     {en:"Say: \"This is too expensive.\"", my:"ပြောကြည့်ပါ - \"This is too expensive.\""}
   ]},
  {title:"Speak 16 — Talking about the past / အတိတ်ကအကြောင်းပြော",
   prompts:[
     {en:"Say: \"I used to live in a small village.\"", my:"ပြောကြည့်ပါ - \"I used to live in a small village.\""},
     {en:"Say: \"I have been studying English for two years.\"", my:"ပြောကြည့်ပါ - \"I have been studying English for two years.\""}
   ]},
  {title:"Speak 17 — Imagining things / စိတ်ကူးယဉ်ပြောခြင်း",
   prompts:[
     {en:"Say: \"If I had a lot of money, I would travel the world.\"", my:"ပြောကြည့်ပါ - \"If I had a lot of money, I would travel the world.\""},
     {en:"Say: \"You are a student, aren't you?\"", my:"ပြောကြည့်ပါ - \"You are a student, aren't you?\""}
   ]},
  {title:"Speak 18 — At the restaurant / စားသောက်ဆိုင်တွင်",
   prompts:[
     {en:"Say: \"Can I see the menu, please?\"", my:"ပြောကြည့်ပါ - \"Can I see the menu, please?\""},
     {en:"Say: \"I would like to order fried rice.\"", my:"ပြောကြည့်ပါ - \"I would like to order fried rice.\""}
   ]},
  {title:"Speak 19 — Describing personality / စရိုက်ဖော်ပြခြင်း",
   prompts:[
     {en:"Say: \"My friend is very kind and funny.\"", my:"ပြောကြည့်ပါ - \"My friend is very kind and funny.\""},
     {en:"Say: \"She is brave enough to try new things.\"", my:"ပြောကြည့်ပါ - \"She is brave enough to try new things.\""}
   ]},
  {title:"Speak 20 — Asking politely / ယဉ်ကျေးစွာမေးခြင်း",
   prompts:[
     {en:"Say: \"Could you tell me where the bank is?\"", my:"ပြောကြည့်ပါ - \"Could you tell me where the bank is?\""},
     {en:"Say: \"Do you know what time it is?\"", my:"ပြောကြည့်ပါ - \"Do you know what time it is?\""}
   ]},
  {title:"Speak 21 — City or countryside / မြို့ပြ သို့မဟုတ် တောရွာ",
   prompts:[
     {en:"Say: \"I like living in the city because it is exciting.\"", my:"ပြောကြည့်ပါ - \"I like living in the city because it is exciting.\""},
     {en:"Say: \"The countryside is quiet and peaceful.\"", my:"ပြောကြည့်ပါ - \"The countryside is quiet and peaceful.\""}
   ]},
  {title:"Speak 22 — Everyday actions / နေ့စဉ်လုပ်ဆောင်ချက်များ",
   prompts:[
     {en:"Say: \"Wake up! It's time for school.\"", my:"ပြောကြည့်ပါ - \"Wake up! It's time for school.\""},
     {en:"Say: \"Please turn on the light.\"", my:"ပြောကြည့်ပါ - \"Please turn on the light.\""}
   ]}
];

const READING_UNITS = [
  {title:"Read 1 — My Family / ကျွန်တော့်မိသားစု",
   text:"This is my family. There are five people in my family: my mother, my father, my older brother, my younger sister, and me. My mother is a teacher at a primary school. She teaches young children how to read and write. My father is a farmer. Every morning, he goes to the field before the sun is too hot. My older brother is seventeen years old. He is a student at a high school, and he wants to be a doctor when he grows up. My younger sister is only five years old. She likes to draw pictures of animals. We live in a small house near a river. In the evening, we all sit together and eat dinner. My mother always tells us stories about when she was young. I love my family very much, and I feel happy every day when I am with them.",
   translation:{
     my:"ဒါက ကျွန်တော့်မိသားစုပါ။ ကျွန်တော့်မိသားစုမှာ လူငါးယောက်ရှိပါတယ် — အမေ၊ အဖေ၊ အစ်ကို၊ ညီမနဲ့ ကျွန်တော်ပါ။ အမေက မူလတန်းကျောင်းက ဆရာမတစ်ယောက်ပါ။ သူငယ်ချင်းလေးတွေကို စာဖတ်တာနဲ့ ရေးတာကို သင်ပေးပါတယ်။ အဖေက လယ်သမားတစ်ယောက်ပါ။ နေ့တိုင်း မနက်ပိုင်း နေမပူခင် လယ်ကွင်းကို သွားပါတယ်။ ကျွန်တော့်အစ်ကိုက အသက် ၁၇ နှစ်ရှိပါပြီ။ အထက်တန်းကျောင်းသားတစ်ယောက်ဖြစ်ပြီး ကြီးလာရင် ဆရာဝန်ဖြစ်ချင်ပါတယ်။ ညီမလေးက အသက် ၅ နှစ်ပဲရှိသေးပါတယ်။ တိရစ္ဆာန်ပုံလေးတွေ ဆွဲရတာ သဘောကျပါတယ်။ ကျွန်တော်တို့ မြစ်ကမ်းနားက အိမ်ငယ်လေးမှာ နေထိုင်ကြပါတယ်။ ညနေခင်းမှာ အားလုံး အတူတကွထိုင်ပြီး ညစာစားကြပါတယ်။ အမေက ငယ်ငယ်တုန်းက ဇာတ်လမ်းလေးတွေကို အမြဲ ပြောပြပါတယ်။ ကျွန်တော့်မိသားစုကို အရမ်းချစ်ပြီး သူတို့နဲ့အတူရှိတိုင်း ပျော်ရွှင်ပါတယ်။"
   },
   questions:[
     {en:"How many people are in the family?", my:"မိသားစုထဲမှာ လူဘယ်နှစ်ယောက်ရှိလဲ?"},
     {en:"What does the writer's mother do for work?", my:"အမေရဲ့ အလုပ်က ဘာလဲ?"},
     {en:"What does the older brother want to be when he grows up?", my:"အစ်ကိုက ကြီးလာရင် ဘာဖြစ်ချင်လဲ?"},
     {en:"Where does the family live?", my:"မိသားစုက ဘယ်မှာနေထိုင်လဲ?"}
   ]},

  {title:"Read 2 — My Day / ကျွန်တော့်တစ်နေ့",
   text:"Every school day starts the same way for me. I get up at six o'clock in the morning, before the sun is fully up. First, I wash my face and brush my teeth. Then I eat a simple breakfast — usually rice with a fried egg and a cup of warm milk. After breakfast, I put on my school uniform and check my bag. I always make sure I have three books, a notebook, and two pencils inside. My school is about fifteen minutes away, so I walk there with my neighbor. Classes start at eight o'clock. My favorite subject is English, because my teacher uses songs and games to help us learn. At noon, we have lunch together in the school yard. After school finishes at three o'clock, I usually play football with my friends for about an hour. When I get home, I do my homework before dinner. At night, I read a short story for ten minutes, and then I go to sleep at nine o'clock, ready for another day.",
   translation:{
     my:"ကျောင်းရက်တိုင်း ကျွန်တော့်အတွက် အစပြုပုံတူပါတယ်။ နေမတက်ခင် မနက်ခြောက်နာရီမှာ နိုးပါတယ်။ ပထမဆုံး မျက်နှာသစ်ပြီး သွားတိုက်ပါတယ်။ ပြီးရင် ရိုးရိုးလေးတဲ့ မနက်စာစားပါတယ် — ပုံမှန်အားဖြင့် ကြက်ဥကြော်နဲ့ ထမင်းနဲ့ နွေးနွေးလေးတဲ့ နို့တစ်ခွက်ပါ။ မနက်စာစားပြီးရင် ကျောင်းယူနီဖောင်း ဝတ်ပြီး အိတ်ကို စစ်ဆေးပါတယ်။ စာအုပ်သုံးအုပ်၊ မှတ်စုစာအုပ်တစ်အုပ်နဲ့ ခဲတံနှစ်ချောင်း အမြဲပါအောင် သေချာစစ်ပါတယ်။ ကျွန်တော့်ကျောင်းက မိနစ် ၁၅ လောက်ကြာတဲ့ နေရာမှာရှိလို့ အိမ်နီးချင်းနဲ့အတူ လမ်းလျှောက်သွားပါတယ်။ အတန်းစတင်ချိန်က မနက် ၈ နာရီပါ။ ကျွန်တော်အကြိုက်ဆုံးဘာသာရပ်က အင်္ဂလိပ်စာပါ၊ ဆရာမက သီချင်းနဲ့ ဂိမ်းတွေသုံးပြီး သင်ပေးလို့ပါ။ နေ့လယ်မှာ ကျောင်းဝင်းထဲမှာ အတူတကွ နေ့လည်စာစားကြပါတယ်။ ကျောင်းက ညနေ ၃ နာရီမှာ ပြီးတဲ့အခါ သူငယ်ချင်းတွေနဲ့ ဘောလုံးကစားလေ့ရှိပါတယ်၊ တစ်နာရီလောက်ကြာပါတယ်။ အိမ်ရောက်ရင် ညစာမစားခင် စာသင်ခန်းစာလုပ်ပါတယ်။ ညမှာ ဇာတ်လမ်းတိုလေးတစ်ပုဒ်ကို ၁၀ မိနစ်လောက် ဖတ်ပြီး၊ ညနေ ၉ နာရီမှာ နောက်နေ့အသစ်အတွက် အသင့်ဖြစ်အောင် အိပ်ပါတယ်။"
   },
   questions:[
     {en:"What does the writer eat for breakfast?", my:"မနက်စာအတွက် ဘာစားလဲ?"},
     {en:"What three things does he always check are in his bag?", my:"အိတ်ထဲမှာ ဘာသုံးခုကို အမြဲစစ်ဆေးလဲ?"},
     {en:"Why is English his favorite subject?", my:"ဘာကြောင့် အင်္ဂလိပ်စာကို အကြိုက်ဆုံးဖြစ်လဲ?"},
     {en:"What time does he go to sleep?", my:"ဘယ်အချိန်မှာ အိပ်လဲ?"}
   ]},

  {title:"Read 3 — My Favorite Animal / ကျွန်တော်အကြိုက်ဆုံးတိရစ္ဆာန်",
   text:"My favorite animal is the elephant. Elephants are the largest land animals in the world, and they are usually gray in color. They have a long nose called a trunk, which they use for many things — drinking water, picking up food, and even giving themselves a shower! Elephants also have big, wide ears that help them stay cool in hot weather. Unlike some other animals, elephants are herbivores, which means they only eat plants. They eat leaves, grass, fruit, and tree bark, and a large elephant can eat up to one hundred fifty kilograms of food in a single day. Elephants live together in family groups led by the oldest female, who is called the matriarch. They are known to be very intelligent and have excellent memories — some scientists say an elephant never forgets a friend, even after many years apart. Elephants also show real emotion; they can feel sad when a family member dies, and they sometimes touch the bones of elephants that have passed away. I have never seen a real elephant in person, but I have watched many videos about them, and I hope to visit a national park one day to see these gentle giants with my own eyes.",
   translation:{
     my:"ကျွန်တော့်အကြိုက်ဆုံးတိရစ္ဆာန်က ဆင်ဖြစ်ပါတယ်။ ဆင်တွေက ကမ္ဘာပေါ်မှာ အကြီးဆုံးကုန်းနေတိရစ္ဆာန်တွေဖြစ်ပြီး ပုံမှန်အားဖြင့် မီးခိုးရောင်ဖြစ်ပါတယ်။ နှာမောင်းလို့ခေါ်တဲ့ နှာခေါင်းရှည်ရှည် ရှိပြီး ရေသောက်တာ၊ အစားအစာကောက်ယူတာ၊ ကိုယ့်ကိုယ်ကိုတောင် ရေချိုးပေးနိုင်တာအထိ အသုံးများပါတယ်။ ဆင်တွေမှာ နားကြီးကြီးရှိလို့ နေပူတဲ့အခါ အေးအောင် ကူညီပေးပါတယ်။ တခြားတိရစ္ဆာန်တွေနဲ့ မတူဘဲ ဆင်တွေက အသီးအရွက်ကိုပဲ စားတဲ့ တိရစ္ဆာန်ဖြစ်ပါတယ်။ အရွက်၊ မြက်၊ အသီးနဲ့ သစ်ကိုင်းကို စားပြီး ဆင်ကြီးတစ်ကောင်ဟာ တစ်နေ့ကို ကီလိုဂရမ် ၁၅၀ အထိ စားနိုင်ပါတယ်။ ဆင်တွေက အသက်အကြီးဆုံးမ ဆင်မ ဦးဆောင်ထားတဲ့ မိသားစုအုပ်စုလိုက် နေထိုင်ကြပါတယ်။ သူတို့ဟာ အလွန်ဉာဏ်ကောင်းပြီး မှတ်ဉာဏ်ကောင်းကြောင်း လူသိများပါတယ် — သိပ္ပံပညာရှင်တချို့က ဆင်ဟာ နှစ်တွေကြာအခွဲခံပြီးမှ ပြန်တွေ့တောင် သူငယ်ချင်းကို ဘယ်တော့မှ မမေ့ဘူးလို့ ဆိုပါတယ်။ ဆင်တွေက ခံစားချက်အစစ်ကိုလည်း ပြသတတ်ပါတယ် — မိသားစုဝင်တစ်ယောက် သေဆုံးရင် စိတ်မကောင်းဖြစ်တတ်ပြီး၊ သေဆုံးသွားတဲ့ ဆင်တွေရဲ့ အရိုးတွေကို တစ်ခါတစ်လေ ထိတွေ့ကြည့်ပါတယ်။ ကျွန်တော် ဆင်အစစ်ကို တကယ်တွေ့ဖူးတာ မရှိသေးပါဘူး၊ ဒါပေမယ့် ဆင်အကြောင်း ဗီဒီယိုများစွာ ကြည့်ဖူးပြီး တစ်နေ့နေ့ အမျိုးသားပန်းခြံတစ်ခုကို သွားပြီး ဒီနူးညံ့တဲ့ ကြီးမားတဲ့ တိရစ္ဆာန်ကို ကိုယ်တိုင်မျက်ဝါးထင်ထင် တွေ့ချင်ပါတယ်။"
   },
   questions:[
     {en:"What does an elephant use its trunk for?", my:"ဆင်က နှာမောင်းကို ဘာအတွက်သုံးလဲ?"},
     {en:"How much food can a large elephant eat in one day?", my:"ဆင်ကြီးတစ်ကောင် တစ်နေ့ ဘယ်လောက်စားနိုင်လဲ?"},
     {en:"Who leads an elephant family group?", my:"ဆင်မိသားစုအုပ်စုကို ဘယ်သူဦးဆောင်လဲ?"},
     {en:"Has the writer ever seen a real elephant?", my:"ရေးသားသူ ဆင်အစစ်ကို တွေ့ဖူးလား?"}
   ]},

  {title:"Read 4 — My School / ကျွန်တော့်ကျောင်း",
   text:"My school is called Sunshine Primary School, and it is a big yellow building with a large playground in front. There are about six hundred students and thirty teachers at my school. I am in grade six, and there are thirty-two students in my class. Every morning, all the students line up in the yard to sing the national anthem before going to their classrooms. My classroom has posters on the walls showing numbers, letters, and pictures of animals from around the world. My teacher, Ms. Aye, is very kind and patient. She never gets angry when students make mistakes; instead, she explains things again in a different way until everyone understands. We study many subjects, including Myanmar, English, mathematics, science, and social studies. My favorite time of the week is Friday afternoon, when we have art class and can draw or paint whatever we like. During break time, my friends and I like to play a skipping-rope game in the yard. On rainy days, we stay inside and play board games or read books in the classroom instead. Every year, our school has a sports day, where all the classes compete in running races and other games. I always look forward to it because it is one of the most exciting days of the year.",
   translation:{
     my:"ကျွန်တော့်ကျောင်းကို Sunshine Primary School လို့ ခေါ်ပြီး ရှေ့မှာ ကွင်းကြီးတစ်ခုနဲ့ အဆောက်အအုံအဝါရောင်ကြီးတစ်ခုဖြစ်ပါတယ်။ ကျောင်းသား/သူ ၆၀၀ လောက်နဲ့ ဆရာ/ဆရာမ ၃၀ လောက်ရှိပါတယ်။ ကျွန်တော် Grade 6 မှာရှိပြီး အတန်းထဲမှာ ကျောင်းသား/သူ ၃၂ ယောက်ရှိပါတယ်။ မနက်တိုင်း ကျောင်းသားအားလုံး ကွင်းထဲမှာ တန်းစီပြီး အတန်းထဲမဝင်ခင် နိုင်ငံတော်သီချင်းကို ဆိုကြပါတယ်။ ကျွန်တော့်အတန်းထဲမှာ နံရံပေါ်မှာ ဂဏန်း၊ အက္ခရာနဲ့ ကမ္ဘာအနှံ့က တိရစ္ဆာန်ပုံတွေပါတဲ့ poster တွေ ကပ်ထားပါတယ်။ ကျွန်တော့်ဆရာမ Ms. Aye က အလွန်ကြင်နာပြီး စိတ်ရှည်ပါတယ်။ ကျောင်းသားတွေ အမှားလုပ်တဲ့အခါ ဘယ်တော့မှ စိတ်မဆိုးဘဲ၊ အားလုံးနားလည်တဲ့အထိ တခြားနည်းတစ်နည်းနဲ့ ပြန်ရှင်းပြပါတယ်။ ကျွန်တော်တို့ မြန်မာစာ၊ အင်္ဂလိပ်စာ၊ သင်္ချာ၊ သိပ္ပံနဲ့ လူမှုရေးဘာသာရပ်တွေကို သင်ကြားကြပါတယ်။ တစ်ပတ်ထဲမှာ ကျွန်တော် အကြိုက်ဆုံးအချိန်က သောကြာနေ့ ညနေပိုင်းပါ၊ အဲဒီအချိန်မှာ အနုပညာအတန်းရှိပြီး ကြိုက်တာဆွဲ/ဆေးဆိုးလို့ရပါတယ်။ အနားယူချိန်မှာ သူငယ်ချင်းတွေနဲ့ ကွင်းထဲမှာ ကြိုးခုန်ကစားရတာကို ကြိုက်ပါတယ်။ မိုးရွာတဲ့နေ့တွေမှာ အထဲမှာနေပြီး board game ကစားတာ (သို့) စာအုပ်ဖတ်တာလုပ်ကြပါတယ်။ နှစ်တိုင်း ကျွန်တော်တို့ကျောင်းမှာ အားကစားနေ့ရှိပြီး အတန်းအားလုံး ပြေးပွဲနဲ့ ကစားပွဲတွေမှာ ယှဉ်ပြိုင်ကြပါတယ်။ ဒါက တစ်နှစ်ထဲက အစိတ်ဆုံးနေ့တစ်နေ့ဖြစ်လို့ ကျွန်တော် အမြဲစောင့်မျှော်ပါတယ်။"
   },
   questions:[
     {en:"How many students are in the writer's class?", my:"ရေးသားသူရဲ့ အတန်းထဲမှာ ကျောင်းသားဘယ်နှစ်ယောက်ရှိလဲ?"},
     {en:"What does the teacher do when students make mistakes?", my:"ကျောင်းသားတွေ အမှားလုပ်ရင် ဆရာမက ဘာလုပ်လဲ?"},
     {en:"What happens on rainy days at school?", my:"မိုးရွာတဲ့နေ့မှာ ကျောင်းမှာ ဘာဖြစ်လဲ?"},
     {en:"What special event happens every year?", my:"နှစ်တိုင်း ဘာအထူးအခမ်းအနားရှိလဲ?"}
   ]},

  {title:"Read 5 — My Weekend / ကျွန်တော့်သီတင်းပတ်ဆုံး",
   text:"Last weekend was one of the most memorable weekends I have had in a long time. On Saturday morning, I woke up early and went to the field to play football with my friends, just like we always do. The weather was sunny, and we played for almost two hours before it suddenly began to rain heavily. We ran to a small shelter nearby and waited there, laughing and talking, until the rain stopped. In the afternoon, since it was still a little wet outside, we decided to stay indoors and play board games instead. My grandmother, who is seventy-two years old, came to visit us that day, as she always does on Sundays, but this time she came a day early because she wanted to help my mother cook a special dinner. Although she is much older than me, my grandmother can still run surprisingly fast — faster, in fact, than my little brother, who is only seven! On Sunday, the whole family went to the local market together to buy fresh vegetables and fruit for the week. In the evening, we sat outside and watched the sunset while my grandmother told us old stories about her childhood in the village. It was a simple weekend, but spending time together as a family made it truly special.",
   translation:{
     my:"ပြီးခဲ့တဲ့ သီတင်းပတ်ဆုံးက ကြာမြင့်စွာ ကျွန်တော်ရရှိခဲ့တဲ့ အမှတ်ရဆုံးသီတင်းပတ်ဆုံးများထဲက တစ်ခုဖြစ်ပါတယ်။ စနေနေ့ မနက်ပိုင်းမှာ စောစောနိုးပြီး ပုံမှန်အတိုင်း သူငယ်ချင်းတွေနဲ့ ဘောလုံးကစားဖို့ ကွင်းကို သွားခဲ့ပါတယ်။ နေသာနေပြီး နှစ်နာရီလောက် ကစားပြီးတဲ့နောက် ရုတ်တရက် မိုးသည်းသည်းရွာလာပါတယ်။ အနီးက အမိုးအကာလေးဆီ ပြေးဝင်ပြီး ရယ်မောစကားပြောနေရင်း မိုးရပ်တဲ့အထိ စောင့်နေခဲ့ကြပါတယ်။ နေ့လယ်ပိုင်းမှာ အပြင်ဘက် စိုနေသေးလို့ အထဲမှာနေပြီး board game ကစားဖို့ ဆုံးဖြတ်ခဲ့ကြပါတယ်။ ကျွန်တော့်အဖွား (အသက် ၇၂ နှစ်ရှိပါပြီ) က ပုံမှန် တနင်္ဂနွေနေ့တိုင်း လာလည်လေ့ရှိသလို အဲဒီနေ့မှာ လာခဲ့ပါတယ်၊ ဒါပေမယ့် ဒီတစ်ခါတော့ အမေ့ကို ညစာအထူးချက်ပြုတ်ရာမှာ ကူညီဖို့ တစ်ရက်စောပြီး လာခဲ့တာဖြစ်ပါတယ်။ ကျွန်တော့်ထက် အများကြီးသက်ကြီးပေမယ့် အဖွားက အံ့ဩစရာကောင်းလောက်အောင် မြန်မြန်ပြေးနိုင်ပါတယ် — အသက် ၇ နှစ်ပဲရှိသေးတဲ့ ညီလေးထက်တောင် ပိုမြန်ပါတယ်! တနင်္ဂနွေနေ့မှာ မိသားစုတစ်စုလုံး နီးစပ်ရာ ဈေးကို အတူတကွသွားပြီး တစ်ပတ်စာအတွက် ဟင်းသီးဟင်းရွက်နဲ့ အသီးအနှံစိုစို ဝယ်ခဲ့ကြပါတယ်။ ညနေခင်းမှာ အပြင်ဘက်ထိုင်ပြီး နေဝင်ချိန်ကို ကြည့်ရင်း အဖွားက ငယ်ငယ်တုန်းက ရွာထဲမှာ နေထိုင်ခဲ့ရတဲ့ ဇာတ်လမ်းဟောင်းများကို ပြောပြပါတယ်။ ရိုးရှင်းတဲ့ သီတင်းပတ်ဆုံးတစ်ခုဖြစ်ပေမယ့် မိသားစုနဲ့အတူ အချိန်ဖြုန်းရတာက တကယ့်ကို အထူးဖြစ်စေခဲ့ပါတယ်။"
   },
   questions:[
     {en:"What did the writer do on Saturday morning?", my:"စနေနေ့ မနက်ပိုင်းမှာ ဘာလုပ်ခဲ့လဲ?"},
     {en:"Why did the grandmother come a day early?", my:"ဘာကြောင့် အဖွားက တစ်ရက်စောပြီး လာခဲ့လဲ?"},
     {en:"Who can run faster, the grandmother or the little brother?", my:"ဘယ်သူ ပိုမြန်ပြေးနိုင်လဲ?"},
     {en:"What did the family do on Sunday?", my:"တနင်္ဂနွေနေ့မှာ မိသားစုက ဘာလုပ်ခဲ့လဲ?"}
   ]},

  {title:"Read 6 — A New City / မြို့သစ်တစ်ခု",
   text:"Six months ago, my family moved from our small village to a new city because my father found a better job there. At first, I was nervous about leaving my old friends and starting a new school, but I quickly discovered that this new place has many wonderful things to offer. Our new home is close to a wide river and surrounded by tall, green mountains — a view that I had never seen before in my life. Every weekend, my family and I like to walk along the riverside path, where fishermen sell fresh fish early in the morning. There is also an old market near the river that has existed for over a hundred years; it is famous throughout the region for its delicious fresh fruit, especially mangoes and durians, which are much cheaper here than in the village. The city also has a large public library, something my old village never had, and I have already become a regular visitor there, borrowing two or three books every week. My new school is bigger than my old one, with students from many different backgrounds, which has taught me a lot about people from other parts of the country. If you ever have the chance to visit this city, you must try the market and walk along the river — I am certain that you will love it here just as much as I do now.",
   translation:{
     my:"ခြောက်လကြာခဲ့ပြီ ကျွန်တော့်မိသားစု ရွာငယ်လေးကနေ မြို့သစ်တစ်ခုကို ပြောင်းရွှေ့ခဲ့ကြပါတယ် — အဖေက ပိုကောင်းတဲ့ အလုပ်တစ်ခု အဲဒီမှာ ရလို့ပါ။ အစပိုင်းတွေမှာ ရွာမှာရှိတဲ့ သူငယ်ချင်းဟောင်းတွေနဲ့ ခွဲခွာရမှာနဲ့ ကျောင်းသစ်စဖို့ ကျွန်တော် စိတ်ပူခဲ့ပါတယ်၊ ဒါပေမယ့် ဒီနေရာသစ်မှာ ကောင်းမွန်တာတွေ အများကြီးရှိတယ်ဆိုတာကို မကြာခင် သိလာခဲ့ပါတယ်။ ကျွန်တော်တို့ အိမ်သစ်က ကျယ်ပြန့်တဲ့ မြစ်နဲ့နီးပြီး အစိမ်းရောင်တောင်ကုန်းမြင့်များ ဝန်းရံထားပါတယ် — ဘဝမှာ ဒီလိုမြင်ကွင်းမျိုးကို ဒီမတိုင်ခင်က တစ်ခါမှ မမြင်ဖူးပါဘူး။ အပတ်စဉ်ရက်သတ္တပတ်ဆုံးတိုင်း ကျွန်တော့်မိသားစုတို့ မြစ်ကမ်းစပ်လမ်းလျှောက်ရတာ ကြိုက်ပါတယ်၊ အဲဒီမှာ တံငါသည်တွေ မနက်စောစော ငါးစိုစိုတွေ ရောင်းကြပါတယ်။ မြစ်နားမှာ နှစ်ပေါင်း တစ်ရာကျော် ရှိနေခဲ့တဲ့ ဈေးဟောင်းတစ်ခုလည်း ရှိပြီး၊ အသီးအနှံစိုစို အထူးသဖြင့် သရက်သီးနဲ့ ဒူးရင်းသီးတွေအတွက် ဒေသတစ်ခုလုံးမှာ နာမည်ကြီးပါတယ် — ရွာထက် ဒီမှာ ပိုစျေးသက်သာပါတယ်။ မြို့ထဲမှာ စာကြည့်တိုက်ကြီးတစ်ခုလည်း ရှိပြီး၊ ရွာဟောင်းမှာ ဘယ်တော့မှ မရှိခဲ့ဖူးတဲ့ အရာဖြစ်ပါတယ်၊ ကျွန်တော် အဲဒီကို ပုံမှန်သွားနေတဲ့ လူတစ်ယောက် ဖြစ်နေပြီဖြစ်ပြီး တစ်ပတ်ကို စာအုပ် နှစ်အုပ်၊ သုံးအုပ်လောက် ငှားဖတ်ပါတယ်။ ကျွန်တော့်ကျောင်းသစ်က ကျောင်းဟောင်းထက် ပိုကြီးပြီး နောက်ခံအမျိုးမျိုးကွဲပြားတဲ့ ကျောင်းသားတွေ ရှိပါတယ်၊ ဒါက နိုင်ငံရဲ့ တခြားနေရာတွေက လူတွေအကြောင်း အများကြီး ကျွန်တော့်ကို သင်ပေးခဲ့ပါတယ်။ ဒီမြို့ကို လာလည်ခွင့်ရရင် ဈေးကို စမ်းသုံးကြည့်ပြီး မြစ်ကမ်းစပ်လျှောက်ကြည့်ပါ — ကျွန်တော်ကဲ့သို့ပဲ သင်လည်း ဒီနေရာကို ကြိုက်သွားမှာ သေချာပါတယ်။"
   },
   questions:[
     {en:"Why did the family move to the new city?", my:"ဘာကြောင့် မိသားစုက မြို့သစ်ကို ပြောင်းလာခဲ့လဲ?"},
     {en:"What is the old market famous for?", my:"ဈေးဟောင်းက ဘာနဲ့ နာမည်ကြီးလဲ?"},
     {en:"What does the writer do at the public library?", my:"ရေးသားသူ စာကြည့်တိုက်မှာ ဘာလုပ်လဲ?"},
     {en:"What has the new school taught the writer?", my:"ကျောင်းသစ်က ရေးသားသူကို ဘာသင်ပေးခဲ့လဲ?"}
   ]},

  {title:"Read 7 — My Grandfather's Garden / ကျွန်တော့်အဘိုးရဲ့ဥယျာဉ်",
   text:"My grandfather has always loved gardening, and his small garden behind the house is full of colorful flowers, fresh vegetables, and several fruit trees. Every morning before breakfast, he goes outside to water the plants and check on the tomatoes, cucumbers, and carrots that he grows there. He says that gardening used to be a common hobby when he was young, but nowadays fewer people have time for it because everyone is busy with phones and computers. My grandfather has been growing the same mango tree for over thirty years, and he tells me that it produces the sweetest mangoes in our whole neighborhood. Last summer, he taught me how to plant seeds and take care of young plants, and I have been helping him in the garden every weekend since then. At first, I found it a little boring, but now I actually enjoy watching the plants grow bigger each week. My grandfather says that if I keep practicing, I will become a good gardener too, just like him. I would like to have my own small garden one day, filled with my favorite fruits and vegetables.",
   translation:{
     my:"ကျွန်တော့်အဘိုးက ဥယျာဉ်ပြုစုတာကို အမြဲကြိုက်ခဲ့ပြီး၊ အိမ်နောက်ဘက်က ဥယျာဉ်ငယ်လေးမှာ အရောင်စုံပန်းများ၊ လတ်ဆတ်တဲ့ ဟင်းသီးဟင်းရွက်များနဲ့ အသီးပင်တချို့ ပြည့်နှက်နေပါတယ်။ မနက်စာမစားခင် နေ့တိုင်း အပြင်ထွက်ပြီး ပင်များကို ရေလောင်း၊ ခရမ်းချဉ်သီး၊ သခွားနဲ့ မုန်လာဥနီတွေကို ကြည့်ရှုပါတယ်။ သူငယ်ငယ်တုန်းက ဥယျာဉ်ပြုစုခြင်းဟာ ရိုးရိုးသာမန် ဝါသနာတစ်ခုဖြစ်ခဲ့ပေမယ့် အခုတော့ ဖုန်းနဲ့ ကွန်ပျူတာနဲ့ အလုပ်များနေကြတဲ့အတွက် အချိန်ရှိတဲ့သူ နည်းနည်းလေးပဲ ရှိတော့တယ်လို့ ပြောပါတယ်။ အဘိုးက သရက်ပင်တစ်ပင်တည်းကို နှစ်ပေါင်း ၃၀ ကျော် စိုက်ပျိုးနေခဲ့ပြီး၊ ဒါက ကျွန်တော်တို့ ရပ်ကွက်တစ်ခုလုံးထဲမှာ အချိုဆုံးသရက်သီးများ ထွက်ရှိစေတယ်လို့ ပြောပါတယ်။ ပြီးခဲ့တဲ့နွေရာသီမှာ မျိုးစေ့စိုက်နည်းနဲ့ ပင်ငယ်များကို ဘယ်လိုပြုစုရမယ်ဆိုတာ ကျွန်တော့်ကို သင်ပေးခဲ့ပြီး၊ အဲဒီကတည်းက စနေ/တနင်္ဂနွေတိုင်း ဥယျာဉ်ထဲမှာ ကူညီနေပါတယ်။ အစပိုင်းမှာ နည်းနည်းငြီးငွေ့ခဲ့ပေမယ့် အခုတော့ ပင်များ တစ်ပတ်ချင်း ကြီးထွားလာတာကို ကြည့်ရတာ တကယ့်ကို ပျော်ရွှင်ပါတယ်။ ဆက်လက်လေ့ကျင့်ရင် ကျွန်တော်လည်း အဘိုးလိုပဲ ဥယျာဉ်ကျွမ်းကျင်သူတစ်ယောက် ဖြစ်လာမယ်လို့ အဘိုးက ပြောပါတယ်။ ကျွန်တော် အကြိုက်ဆုံးအသီးအနှံတွေနဲ့ ပြည့်နှက်နေတဲ့ ကိုယ်ပိုင်ဥယျာဉ်ငယ်လေးတစ်ခု တစ်နေ့နေ့ ပိုင်ဆိုင်ချင်ပါတယ်။"
   },
   questions:[
     {en:"What does the grandfather do every morning?", my:"အဘိုးက နေ့တိုင်း မနက်ပိုင်း ဘာလုပ်လဲ?"},
     {en:"How long has the grandfather been growing the mango tree?", my:"သရက်ပင်ကို ဘယ်လောက်ကြာကြာ စိုက်ပျိုးနေခဲ့လဲ?"},
     {en:"Why does the grandfather say fewer people garden nowadays?", my:"ဘာကြောင့် အခု ဥယျာဉ်ပြုစုသူ နည်းနေတယ်လို့ အဘိုးက ပြောလဲ?"},
     {en:"How did the writer feel about gardening at first?", my:"အစပိုင်းမှာ ဥယျာဉ်ပြုစုတာကို ရေးသားသူ ဘယ်လိုခံစားခဲ့လဲ?"}
   ]},

  {title:"Read 8 — Staying Healthy / ကျန်းမာရေး ဂရုစိုက်ခြင်း",
   text:"Last month, I caught a bad cold and had a high fever for three days. I had to stay home from school and take medicine every day until I felt better. During that time, my mother took very good care of me — she cooked warm soup, made sure I drank plenty of water, and checked my temperature every few hours. My doctor said that I should rest as much as possible and avoid cold drinks while I was sick. After that experience, I decided that I wanted to take better care of my health, so I have been trying to eat more fruit and vegetables, exercise regularly, and sleep at least eight hours every night. I have also stopped eating too much candy, which I used to eat almost every day. My grandmother always says that prevention is better than cure, which means it is much easier to stay healthy than to get better after you are sick. Now, I wash my hands before every meal, and I try to go for a short walk or play sports every afternoon. I feel much stronger and happier since I started these new habits, and I rarely get sick anymore.",
   translation:{
     my:"ပြီးခဲ့တဲ့လက ကျွန်တော် အအေးမိပြီး သုံးရက်လောက် ဖျားနေခဲ့ပါတယ်။ ကျောင်းမသွားနိုင်ဘဲ ပိုကောင်းလာတဲ့အထိ နေ့တိုင်း ဆေးသောက်ရပါတယ်။ အဲဒီအချိန်မှာ အမေက ကျွန်တော့်ကို အလွန်ကောင်းမွန်စွာ ပြုစုပေးခဲ့ပါတယ် — ဟင်းချိုနွေးနွေးလေးချက်ပေးပြီး၊ ရေအလုံအလောက်သောက်စေပြီး၊ အနာရီအနည်းငယ်ခြားတိုင်း ကိုယ်အပူချိန်စစ်ဆေးပေးပါတယ်။ ဆရာဝန်က ဖြစ်နိုင်သမျှ နားနေပြီး ဖျားနာနေချိန် အအေးမသောက်ဖို့ ပြောပါတယ်။ အဲဒီအတွေ့အကြုံပြီးနောက် ကျန်းမာရေးကို ပိုပြီး ဂရုစိုက်ချင်လာလို့ အသီးအနှံနဲ့ ဟင်းသီးဟင်းရွက် ပိုစားနေပါတယ်၊ ပုံမှန်ကိုယ်လက်လှုပ်ရှားမှုလုပ်ပြီး၊ ညတိုင်း အနည်းဆုံး ၈ နာရီအိပ်စက်နေပါတယ်။ အရင်ကနေ့တိုင်းလိုလို စားနေခဲ့တဲ့ သကြားလုံးများကိုလည်း ရပ်တန့်ထားပါတယ်။ ကျွန်တော့်အဖွားက ကာကွယ်တာက ကုသတာထက် ပိုကောင်းတယ်လို့ အမြဲပြောပါတယ် — ဒီဆိုလိုချက်က ဖျားနာပြီးမှ ပြန်ကောင်းလာအောင်လုပ်ရတာထက် ကျန်းမာနေအောင် ထိန်းသိမ်းထားရတာက ပိုလွယ်တယ်ဆိုတဲ့ အဓိပ္ပာယ်ပါ။ အခု အစားအစာစားတိုင်း လက်ဆေးပြီး၊ ညနေတိုင်း လမ်းလျှောက်တာ (သို့) အားကစားကစားတာ လုပ်ကြည့်ပါတယ်။ ဒီအလေ့အထသစ်တွေ စတင်ကတည်းက ပိုပြီးကျန်းမာပြီး ပျော်ရွှင်လာပြီး ဖျားနာတာ ရှားရှားပါးပါးပဲ ဖြစ်တော့ပါတယ်။"
   },
   questions:[
     {en:"How long did the writer have a fever?", my:"ရေးသားသူ ဘယ်လောက်ကြာကြာ ဖျားနေခဲ့လဲ?"},
     {en:"What did the doctor say to do while sick?", my:"ဖျားနေချိန် ဆရာဝန်က ဘာလုပ်ဖို့ ပြောခဲ့လဲ?"},
     {en:"What does \"prevention is better than cure\" mean?", my:"\"ကာကွယ်တာက ကုသတာထက်ပိုကောင်းတယ်\" ဆိုတာ ဘာအဓိပ္ပာယ်လဲ?"},
     {en:"Name two new habits the writer started.", my:"ရေးသားသူ စတင်ခဲ့တဲ့ အလေ့အထသစ် နှစ်ခုကို ပြောပါ။"}
   ]},

  {title:"Read 9 — A Trip to the Beach / ကမ်းခြေခရီးစဉ်",
   text:"Last holiday, my family and I traveled to the beach for the first time in three years. We packed our suitcases the night before and left early in the morning so that we could arrive before it got too hot. The trip took about four hours by bus, and I slept for most of the journey because I was too excited to sleep well the night before. When we finally arrived, the ocean looked more beautiful than I had ever imagined — the water was a clear blue-green color, and the sand felt warm under my feet. We stayed at a small hotel near the beach, and every day we would swim in the morning, eat fresh seafood for lunch, and walk along the shore in the evening, collecting shells and watching the sunset. On the second day, a local fisherman showed us how he catches fish using a traditional net, which was fascinating to watch. My little sister, who had never seen the ocean before, was both amazed and a little scared by the size of the waves at first, but by the end of the trip, she was swimming confidently and did not want to leave. Before we went home, we bought some souvenirs for our grandparents, including seashells and a small bottle of sand from the beach. This was definitely one of the best holidays our family has ever taken together.",
   translation:{
     my:"ပြီးခဲ့တဲ့အားလပ်ရက်မှာ ကျွန်တော့်မိသားစုနဲ့ ကျွန်တော် သုံးနှစ်အတွင်း ပထမဆုံးအကြိမ် ကမ်းခြေကို ခရီးသွားခဲ့ကြပါတယ်။ ရှေ့နေ့ညက ခရီးဆောင်သေတ္တာများ ထုပ်ပိုးပြီး၊ နေမပူသေးခင်ရောက်အောင် မနက်စောစော ထွက်ခွာခဲ့ကြပါတယ်။ ခရီးစဉ်က ဘတ်စ်ကားနဲ့ လေးနာရီလောက်ကြာပြီး၊ ရှေ့နေ့ညက စိတ်လှုပ်ရှားလွန်းလို့ ကောင်းကောင်းအိပ်မပျော်ခဲ့လို့ ခရီးစဉ်အတွင်း အများစု အိပ်ပျော်ခဲ့ပါတယ်။ နောက်ဆုံးရောက်တဲ့အခါ သမုဒ္ဒရာက ကျွန်တော် စိတ်ကူးထားတာထက် ပိုလှပါတယ် — ရေက ကြည်လင်တဲ့ အပြာစိမ်းရောင်ဖြစ်ပြီး သဲကမ်းပြင်က ခြေထောက်အောက်မှာ နွေးနွေးလေးခံစားရပါတယ်။ ကမ်းခြေနားက ဟိုတယ်ငယ်လေးမှာ တည်းခိုပြီး နေ့တိုင်း မနက်ရေကူး၊ နေ့လယ်စာအတွက် လတ်ဆတ်တဲ့ ငါးရေထွက်ပစ္စည်းစား၊ ညနေခင်းမှာ ကမ်းစပ်လျှောက်ပြီး ကျောက်ခွံများကောက်ပြီး နေဝင်ချိန်ကို ကြည့်ကြပါတယ်။ ဒုတိယနေ့မှာ ဒေသခံတံငါသည်တစ်ယောက်က ရိုးရာပိုက်ကွန်နဲ့ ငါးဖမ်းပုံကို ပြသပေးခဲ့ပြီး ကြည့်ရတာ အလွန်စိတ်ဝင်စားစရာကောင်းပါတယ်။ ကျွန်တော့်ညီမငယ်က သမုဒ္ဒရာကို တစ်ခါမှ မမြင်ဖူးလို့ လှိုင်းကြီးမှုကို အံ့ဩပြီး အနည်းငယ်လည်း ကြောက်ခဲ့ပေမယ့် ခရီးစဉ်အဆုံးမှာတော့ ယုံကြည်စိတ်ချစွာ ရေကူးနေပြီး ပြန်ချင်တော့မှ မဟုတ်ပါဘူး။ အိမ်မပြန်ခင် အဘိုးအဖွားများအတွက် ကျောက်ခွံနဲ့ သဲအိတ်ငယ်လေးတွေလို အမှတ်တရပစ္စည်းများ ဝယ်ခဲ့ကြပါတယ်။ ဒါဟာ ကျွန်တော့်မိသားစု အတူတကွ လုပ်ခဲ့ဖူးတဲ့ အကောင်းဆုံး အားလပ်ရက်များထဲက တစ်ခုပဲ သေချာပါတယ်။"
   },
   questions:[
     {en:"How long did the bus journey take?", my:"ဘတ်စ်ကားခရီးစဉ်က ဘယ်လောက်ကြာလဲ?"},
     {en:"What did the family do every day at the beach?", my:"ကမ်းခြေမှာ မိသားစုက နေ့တိုင်း ဘာလုပ်ခဲ့လဲ?"},
     {en:"How did the little sister feel about the ocean at first?", my:"အစပိုင်းမှာ ညီမငယ်က သမုဒ္ဒရာအကြောင်း ဘယ်လိုခံစားခဲ့လဲ?"},
     {en:"What souvenirs did they buy?", my:"ဘယ်လို အမှတ်တရပစ္စည်းများ ဝယ်ခဲ့လဲ?"}
   ]},

  {title:"Read 10 — The Wonders of Space / အာကာသရဲ့ အံ့ဖွယ်များ",
   text:"Space has always fascinated scientists and ordinary people alike. Our planet, Earth, is one of eight planets that orbit the Sun, and it is the only planet we know of that has life. The Moon, which is much smaller than Earth, orbits our planet and controls the ocean tides. On a clear night, if you look up at the sky, you can see thousands of stars, each one a giant ball of burning gas, much like our own Sun. Some of the light from those stars has been traveling through space for millions of years before reaching our eyes, which means that when you look at a star, you are actually looking into the past. Scientists use powerful telescopes to study space, and in 1969, astronauts first walked on the Moon, which was one of humanity's greatest achievements. Since then, we have sent rockets and robots to explore other planets, including Mars, which many scientists believe humans could visit in the future. Space is also home to comets, which are balls of ice and dust that travel around the Sun, and asteroids, which are rocky objects of many different sizes. Although we have learned a great deal about space, there is still so much that remains unknown, and new discoveries are being made every year. I have always dreamed of becoming an astronaut so that I could see Earth from space with my own eyes.",
   translation:{
     my:"အာကာသဟာ သိပ္ပံပညာရှင်များနှင့် သာမန်လူများအားလုံးကို စိတ်ဝင်စားစေတတ်ခဲ့ပါတယ်။ ကျွန်တော်တို့ကမ္ဘာ Earth ဟာ နေကို လှည့်ပတ်နေတဲ့ ဂြိုဟ်ရှစ်လုံးထဲက တစ်လုံးဖြစ်ပြီး သက်ရှိသတ္တဝါရှိတယ်ဆိုတာ ကျွန်တော်တို့သိတဲ့ တစ်ခုတည်းသော ဂြိုဟ်ဖြစ်ပါတယ်။ Earth ထက် အများကြီးသေးငယ်တဲ့ လ ဟာ ကျွန်တော်တို့ ဂြိုဟ်ကို လှည့်ပတ်ပြီး ပင်လယ်ရေအတက်အကျကို ထိန်းချုပ်ပါတယ်။ ကောင်းကင်ကြည်လင်တဲ့ညမှာ အပေါ်ကိုကြည့်ရင် ကြယ်ထောင်ပေါင်းများစွာကို မြင်နိုင်ပြီး၊ ကြယ်တစ်လုံးစီဟာ ကျွန်တော်တို့ ရဲ့ နေနဲ့တူတဲ့ လောင်ကျွမ်းနေတဲ့ ဓာတ်ငွေ့ ဘောလုံးကြီးများပါ။ အဲဒီကြယ်တွေက အလင်းတချို့ဟာ ကျွန်တော်တို့မျက်စိထဲရောက်ဖို့ နှစ်ပေါင်းသန်းချီပြီး အာကာသထဲမှာ ခရီးသွားနေခဲ့ပါတယ် — ဒါကြောင့် ကြယ်တစ်လုံးကို ကြည့်တဲ့အခါ တကယ်တမ်းတော့ အတိတ်ကို ကြည့်နေတာဖြစ်ပါတယ်။ သိပ္ပံပညာရှင်တွေက အားကောင်းတဲ့ ရေးလ်စကုပ်များသုံးပြီး အာကာသကို လေ့လာကြပါတယ်၊ ၁၉၆၉ ခုနှစ်မှာ အာကာသယာဉ်မှူးများ လပေါ်ကို ပထမဆုံးလမ်းလျှောက်ခဲ့ကြပြီး ဒါက လူသားရဲ့ အကြီးမြတ်ဆုံး အောင်မြင်မှုတစ်ခုဖြစ်ခဲ့ပါတယ်။ အဲဒီကတည်းက ဒုံးပျံနဲ့ ရိုဘော့များကို ဂြိုဟ်တခြားများသို့ လေ့လာစူးစမ်းဖို့ ပို့ခဲ့ကြပြီး၊ Mars ပါဝင်ပါတယ် — သိပ္ပံပညာရှင်များစွာက အနာဂတ်မှာ လူသားများ လာလည်နိုင်တယ်လို့ ယုံကြည်ကြပါတယ်။ အာကာသမှာ ကြယ်တံခွန်များလည်း ရှိပါတယ် — ဒါတွေက နေကို ပတ်ပတ်လည်ခရီးသွားတဲ့ ရေခဲနဲ့ ဖုန်မှုန့်ဘောလုံးများဖြစ်ပြီး၊ အရွယ်အစားအမျိုးမျိုးရှိတဲ့ ကျောက်ခဲအရာဝတ္ထုများ asteroid လည်းရှိပါတယ်။ အာကာသအကြောင်း များစွာသိထားပေမယ့် မသိရသေးတာများစွာလည်း ကျန်နေသေးပြီး တွေ့ရှိချက်အသစ်များကို နှစ်တိုင်း ဆက်လက်ရရှိနေဆဲပါ။ ကျွန်တော် အာကာသကနေ Earth ကို ကိုယ်တိုင်တွေ့မြင်ချင်လို့ အာကာသယာဉ်မှူးတစ်ယောက် ဖြစ်ချင်တာကို အမြဲစိတ်ကူးယဉ်ခဲ့ပါတယ်။"
   },
   questions:[
     {en:"What controls the ocean tides?", my:"ပင်လယ်ရေအတက်အကျကို ဘာက ထိန်းချုပ်လဲ?"},
     {en:"When did astronauts first walk on the Moon?", my:"အာကာသယာဉ်မှူးများ ဘယ်တုန်းက လပေါ်ကို ပထမဆုံးလမ်းလျှောက်ခဲ့လဲ?"},
     {en:"What is the difference between a comet and an asteroid?", my:"ကြယ်တံခွန်နဲ့ asteroid ဘာကွာလဲ?"},
     {en:"What does the writer dream of becoming?", my:"ရေးသားသူ ဘာဖြစ်ချင်တယ်လို့ စိတ်ကူးယဉ်ခဲ့လဲ?"}
   ]},

  {title:"Read 11 — A Day on the Farm / တောင်သူလယ်ယာတွင် တစ်နေ့",
   text:"During the school holidays, I visited my uncle's farm in the countryside for the very first time. Life there was completely different from life in the city. Every morning, my uncle woke up before sunrise to feed the animals — the cows, the pigs, the goats, and the chickens all needed to be fed before breakfast. I helped him collect eggs from the chicken coop, and I was surprised at how warm they still felt in my hands. In the afternoon, we walked through the fields where rows of corn and rice were growing, and my uncle taught me how to tell if the crops were ready to harvest. The countryside was much quieter than the city; instead of car horns and traffic, I could hear birds singing, cows mooing, and the wind moving through the trees. In the evening, we sat outside and watched the sunset while my uncle told stories about how farming has changed since he was a boy — back then, everything was done by hand, but now they use some machines to make the work faster. Although farm work is hard and tiring, my uncle says he would never trade this life for a job in the city, because he loves being close to nature every single day. By the time I left, I had a much greater respect for farmers and the food they grow for all of us.",
   translation:{
     my:"ကျောင်းအားလပ်ရက်များအတွင်း ကျွန်တော့်ဦးလေးရဲ့ လယ်ယာကို ဒီမတိုင်ခင်က ဘယ်တော့မှ သွားဖူးခဲ့ခြင်းမရှိသေးဘဲ ပထမဆုံးအကြိမ် သွားလည်ခဲ့ပါတယ်။ အဲဒီမှာ ဘဝဟာ မြို့ပြဘဝနဲ့ လုံးလုံးလျားလျား ကွာခြားပါတယ်။ ဦးလေးက နေမထွက်ခင် နေ့တိုင်း နိုးပြီး တိရစ္ဆာန်များကို ကျွေးပါတယ် — နွား၊ ဝက်၊ ဆိတ်နဲ့ ကြက်များကို မနက်စာမစားခင် ကျွေးရပါတယ်။ ကြက်အိမ်ထဲက ကြက်ဥများ ကောက်ယူရာမှာ ကူညီခဲ့ပြီး လက်ထဲမှာ ဒီလောက်နွေးနေသေးတာကို အံ့ဩခဲ့ပါတယ်။ နေ့လယ်ပိုင်းမှာ ပြောင်းဖူးနဲ့ ဆန်စပါးတန်းလိုက်ကြီးထွားနေတဲ့ လယ်ကွင်းများကို လျှောက်ခဲ့ပြီး၊ ဘယ်အချိန် ရိတ်သိမ်းရမယ်ဆိုတာ ဦးလေးက သင်ပေးခဲ့ပါတယ်။ တောရွာက မြို့ပြထက် အများကြီးတိတ်ဆိတ်ပါတယ် — ကားတွန်းသံနဲ့ ယာဉ်ကြောပိတ်ဆို့မှုအစား ငှက်သီချင်းဆိုသံ၊ နွားအော်သံနဲ့ လေတိုက်သစ်ပင်ချောက်ချားသံတွေ ကြားရပါတယ်။ ညနေခင်းမှာ အပြင်ဘက်ထိုင်ပြီး နေဝင်ချိန်ကြည့်ရင်း ဦးလေးက သူငယ်ငယ်တုန်းကထက် စိုက်ပျိုးရေးဘယ်လိုပြောင်းလဲလာခဲ့လဲ ပြောပြပါတယ် — အရင်တုန်းက လက်ဖြင့် အားလုံးလုပ်ရပေမယ့် အခုတော့ စက်ကိရိယာတချို့ကို သုံးလို့ အလုပ်ပိုမြန်ပါတယ်။ လယ်ယာအလုပ်ဟာ ခက်ခဲပင်ပန်းပေမယ့် သဘာဝနှင့်နီးကပ်စွာနေထိုင်ရတာကို နှစ်သက်လို့ ဒီဘဝကို မြို့ပြအလုပ်နဲ့ ဘယ်တော့မှ လဲလှယ်မှာမဟုတ်ဘူးလို့ ဦးလေးက ပြောပါတယ်။ ပြန်ချိန်ကျတော့ ကျွန်တော်တို့ရဲ့ စားစရာကို စိုက်ပျိုးပေးတဲ့ တောင်သူများကို ပိုမိုလေးစားလာခဲ့ပါတယ်။"
   },
   questions:[
     {en:"What did the uncle do before sunrise every morning?", my:"ဦးလေးက နေမထွက်ခင် နေ့တိုင်း ဘာလုပ်ခဲ့လဲ?"},
     {en:"How has farming changed since the uncle was young?", my:"ဦးလေးငယ်ငယ်တုန်းကထက် စိုက်ပျိုးရေးဘယ်လို ပြောင်းလဲခဲ့လဲ?"},
     {en:"Why does the uncle prefer farm life to city life?", my:"ဘာကြောင့် ဦးလေးက မြို့ပြဘဝထက် လယ်ယာဘဝကို ပိုကြိုက်လဲ?"},
     {en:"How did the writer feel about farmers after the visit?", my:"လည်ပတ်ပြီးနောက် ရေးသားသူ တောင်သူများအကြောင်း ဘယ်လိုခံစားခဲ့လဲ?"}
   ]},

  {title:"Read 12 — Learning to Cook / ဟင်းချက်နည်းသင်ယူခြင်း",
   text:"When I turned fourteen, I decided that it was time for me to learn how to cook, since I had always relied on my mother to prepare every meal. My mother agreed to teach me, and every Sunday afternoon became our special cooking time together. In the beginning, I could barely chop an onion without crying, and I once burned rice so badly that we had to open all the windows because of the smoke! However, my mother was very patient with me, explaining each step slowly and showing me the right way to hold a knife safely. She taught me how to boil eggs, fry vegetables, and eventually bake a simple cake for my little sister's birthday. I learned that cooking is not just about following a recipe — it is also about tasting the food as you go and adjusting the salt, sugar, or spices until it tastes just right. After several months of practice, I finally made a full dinner by myself for the whole family, including rice, a vegetable dish, and fried chicken. Everyone said it tasted delicious, and I felt incredibly proud of myself. Now, I help my mother cook dinner almost every evening, and I have even started experimenting with my own recipes. Learning to cook has taught me patience, and it has also brought my mother and me much closer together.",
   translation:{
     my:"ကျွန်တော် အသက် ၁၄ နှစ်ပြည့်တဲ့အခါ ဟင်းချက်နည်းကို သင်ယူချိန် တန်ပြီလို့ ဆုံးဖြတ်ခဲ့ပါတယ် — အစားအစာတိုင်း ပြင်ဆင်ဖို့ အမေကိုပဲ အမြဲမှီခိုနေခဲ့တယ်လို့ ခံစားရလို့ပါ။ အမေက သင်ပေးဖို့ သဘောတူခဲ့ပြီး တနင်္ဂနွေနေ့ ညနေတိုင်း ကျွန်တော်တို့ ဟင်းချက်ချိန်အထူးဖြစ်လာပါတယ်။ အစပိုင်းမှာ ကြက်သွန်နီတောင် မငိုမနေထုတ်နိုင်ခဲ့ဘူးပါ၊ တစ်ကြိမ်တော့ ထမင်းကို ပြင်းပြင်းအားလားလောင်ခဲ့ပြီး မီးခိုးလွန်းလို့ ပြတင်းပေါက်များကို အားလုံးဖွင့်ချထားရပါတယ်! ဒါပေမယ့် အမေက ကျွန်တော့်ကို အလွန်စိတ်ရှည်စွာ ဆက်ဆံပေးခဲ့ပြီး၊ အဆင့်တစ်ခုချင်းစီကို ဖြည်းဖြည်းချင်း ရှင်းပြပေးကာ ဓားကို ဘယ်လိုလုံခြုံစွာ ကိုင်ရမလဲ ပြသပေးပါတယ်။ ကြက်ဥပြုတ်နည်း၊ ဟင်းသီးဟင်းရွက်ကြော်နည်းနဲ့ နောက်ဆုံးတော့ ညီမငယ်ရဲ့ မွေးနေ့အတွက် ကိတ်မုန့်ရိုးရိုးလေးတစ်ခု ဖုတ်နည်းကိုပါ သင်ပေးခဲ့ပါတယ်။ ဟင်းချက်ခြင်းဆိုတာ recipe အတိုင်း လိုက်လုပ်ရုံမက၊ လုပ်ရင်းစားကြည့်ပြီး ဆား၊ သကြား (သို့) ဟင်းခတ်အမွှေးအကြိုင်ကို မှန်အောင် ချိန်ညှိရတာလည်း ပါတယ်ဆိုတာ သင်ယူခဲ့ရပါတယ်။ လများစွာ ကျင့်သားရပြီးနောက် နောက်ဆုံးတော့ မိသားစုတစ်ခုလုံးအတွက် ထမင်း၊ ဟင်းသီးဟင်းရွက်ဟင်းနဲ့ ကြက်သားကြော်ပါဝင်တဲ့ ညစာတစ်စုံလုံးကို ကျွန်တော့်ကိုယ်တိုင် ချက်ပြုတ်နိုင်ခဲ့ပါတယ်။ အားလုံးက အရသာလှတယ်လို့ ပြောကြပြီး ကျွန်တော် တကယ့်ကို ဂုဏ်ယူမိပါတယ်။ အခု ညနေတိုင်းနီးပါး အမေ့ကို ညစာချက်ရာမှာ ကူညီနေပြီး ကိုယ်ပိုင် recipe တွေကိုပါ စမ်းသပ်ချက်ပြုတ်နေပါပြီ။ ဟင်းချက်နည်းသင်ယူခြင်းက ကျွန်တော့်ကို စိတ်ရှည်မှုကို သင်ပေးခဲ့ပြီး၊ အမေနဲ့ ကျွန်တော့်ကို ပိုနီးကပ်စေခဲ့ပါတယ်။"
   },
   questions:[
     {en:"What happened the first time the writer cooked rice?", my:"ထမင်းကို ပထမဆုံးချက်တုန်းက ဘာဖြစ်ခဲ့လဲ?"},
     {en:"What did the writer learn about cooking besides following a recipe?", my:"Recipe လိုက်လုပ်ခြင်းအပြင် ဟင်းချက်ခြင်းအကြောင်း ဘာသင်ယူခဲ့လဲ?"},
     {en:"What was in the first full dinner the writer cooked alone?", my:"ကိုယ်တိုင်ချက်ခဲ့တဲ့ ပထမညစာမှာ ဘာတွေပါလဲ?"},
     {en:"How did learning to cook affect the writer's relationship with their mother?", my:"ဟင်းချက်နည်းသင်ယူခြင်းက အမေနဲ့ ဆက်ဆံရေးကို ဘယ်လိုအကျိုးသက်ရောက်ခဲ့လဲ?"}
   ]},

  {title:"Read 13 — City Life and Countryside Life / မြို့ပြဘဝနှင့် တောရွာဘဝ",
   text:"My family has lived in a big city for as long as I can remember, but my grandparents still live in the small village where my mother grew up, so I have had the chance to experience both types of life. Life in the city is fast and exciting — there are tall skyscrapers, busy streets full of traffic, and many shops, restaurants, and shopping malls open late into the night. There is always something to do, and I have many friends from different backgrounds at my school. However, city life can also be noisy, crowded, and sometimes a little stressful, especially during rush hour when everyone is trying to get to work at the same time. In contrast, life in my grandparents' countryside village is much slower and quieter. There are wide open fields, clean air, and almost everyone knows everyone else, which makes it feel very safe and friendly. My grandparents grow their own vegetables and know exactly where their food comes from, which is something most people in the city never experience. On the other hand, the village has fewer job opportunities, and my grandparents often need to travel a long way just to visit a hospital or a large shop. Both city life and countryside life have their own advantages and disadvantages, and I feel very lucky that I get to enjoy the best of both worlds whenever I visit my grandparents during the school holidays.",
   translation:{
     my:"ကျွန်တော့်မိသားစု မှတ်မိသမျှ မြို့ပြကြီးတစ်ခုမှာ နေထိုင်ခဲ့ကြပေမယ့် ကျွန်တော့်အဘိုးအဖွားတို့က အမေကြီးပြင်းလာခဲ့တဲ့ ရွာငယ်လေးမှာ ဆက်နေထိုင်နေကြဆဲဖြစ်လို့ ဘဝနှစ်မျိုးစလုံးကို ကျွန်တော် တွေ့ကြုံခံစားခွင့်ရခဲ့ပါတယ်။ မြို့ပြဘဝက မြန်ပြီး စိတ်လှုပ်ရှားစရာဖြစ်ပါတယ် — မိုးမျှော်တိုက်ကြီးများ၊ ယာဉ်များပြည့်နှက်နေတဲ့ လမ်းများနဲ့ ဈေးဆိုင်၊ စားသောက်ဆိုင်၊ ရုပ်ရှင်ရုံတွေ ညနက်နက်ထိ ဖွင့်ထားပါတယ်။ လုပ်စရာအမြဲရှိနေပြီး ကျောင်းမှာ နောက်ခံအမျိုးမျိုးကွဲပြားတဲ့ သူငယ်ချင်းများစွာ ရှိပါတယ်။ ဒါပေမယ့် မြို့ပြဘဝဟာ ဆူညံ၊ လူထူထပ်ပြီး တစ်ခါတစ်လေ စိတ်ဖိစီးစရာလည်းဖြစ်နိုင်ပါတယ် — အထူးသဖြင့် လူတိုင်း တစ်ချိန်တည်း အလုပ်သွားကြတဲ့ အလုပ်ချိန်ခေါက်ဝင်ပိုင်း။ ဆန့်ကျင်ဘက်အနေနဲ့ အဘိုးအဖွားတို့ရဲ့ တောရွာဘဝက ပိုနှေးပြီး ပိုတိတ်ဆိတ်ပါတယ်။ ကျယ်ပြန့်တဲ့ လယ်ကွင်းများ၊ လေကောင်းလေသန့်နဲ့ လူတိုင်းနီးပါး တစ်ယောက်နဲ့တစ်ယောက် သိကြလို့ လုံခြုံပြီး ဖော်ရွေစိတ်ခံစားရပါတယ်။ အဘိုးအဖွားတို့ ကိုယ်ပိုင်ဟင်းသီးဟင်းရွက်များ စိုက်ပျိုးထားပြီး သူတို့စားနေတဲ့ အစားအစာ ဘယ်က ဆင်းလာသလဲဆိုတာ အတိအကျသိကြပါတယ် — ဒါက မြို့ပြက လူအများစု ဘယ်တော့မှ မတွေ့ကြုံဖူးတဲ့ အရာပါ။ ဒီဘက်ကျမှတော့ ရွာမှာ အလုပ်အကိုင်အခွင့်အလမ်းနည်းပါတယ်၊ ဆေးရုံ (သို့) ဈေးကြီးတစ်ခုကို သွားဖို့ အဘိုးအဖွားတို့ ခရီးဝေးကို သွားရလေ့ရှိပါတယ်။ မြို့ပြဘဝနဲ့ တောရွာဘဝနှစ်မျိုးလုံးမှာ ကိုယ်ပိုင်အားသာချက်နဲ့ အားနည်းချက်များရှိပြီး ကျောင်းအားလပ်ရက်တိုင်း အဘိုးအဖွားများဆီ သွားလည်တိုင်း ကမ္ဘာနှစ်ခုစလုံးရဲ့ အကောင်းဆုံးကို ခံစားရလို့ ကျွန်တော် တကယ်ကံကောင်းတယ်လို့ ခံစားရပါတယ်။"
   },
   questions:[
     {en:"What are two advantages of city life mentioned in the text?", my:"မြို့ပြဘဝရဲ့ အားသာချက်နှစ်ခုကို ပြောပါ။"},
     {en:"What are two advantages of countryside life mentioned in the text?", my:"တောရွာဘဝရဲ့ အားသာချက်နှစ်ခုကို ပြောပါ။"},
     {en:"What do the grandparents need to travel far for?", my:"အဘိုးအဖွားတို့ ဘာအတွက် ခရီးဝေးသွားရလဲ?"},
     {en:"How does the writer feel about experiencing both ways of life?", my:"ဘဝနှစ်မျိုးစလုံးကို တွေ့ကြုံရတာကို ရေးသားသူ ဘယ်လိုခံစားရလဲ?"}
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
   }},
  {title:"Write 6 — Places I Have Visited / ကျွန်တော်သွားဖူးတဲ့နေရာများ",
   instructions:{
     en:"Write 2 sentences using: I have visited ___. I have never visited ___.",
     my:"ဝါကျ ၂ ကြောင်း ရေးပါ - I have visited ___. I have never visited ___."
   }},
  {title:"Write 7 — My Favorite Hobby / ကျွန်တော်အကြိုက်ဆုံးဝါသနာ",
   instructions:{
     en:"Write 3 sentences using: My hobby is ___. I have been doing it for ___. I like it because ___.",
     my:"ဝါကျ ၃ ကြောင်း ရေးပါ - My hobby is ___. I have been doing it for ___. I like it because ___."
   }},
  {title:"Write 8 — If I Had a Superpower / စွမ်းအားထူးရှိရင်",
   instructions:{
     en:"Write 2 sentences using the second conditional. Example: If I could fly, I would visit every country.",
     my:"Second conditional သုံးပြီး ဝါကျ ၂ ကြောင်း ရေးပါ။ ဥပမာ - If I could fly, I would visit every country."
   }},
  {title:"Write 9 — When I Was Young / ငယ်ငယ်တုန်းက",
   instructions:{
     en:"Write 2 sentences using 'used to' about something you did as a young child but don't do anymore.",
     my:"ငယ်ငယ်တုန်းက လုပ်ခဲ့ပေမယ့် အခုမလုပ်တော့တဲ့အရာအကြောင်း 'used to' သုံးပြီး ဝါကျ ၂ ကြောင်း ရေးပါ။"
   }},
  {title:"Write 10 — Shopping List / ဈေးဝယ်စာရင်း",
   instructions:{
     en:"Write a short shopping list of 5 items using 'some' and 'any', and one sentence about the price.",
     my:"'some' နှင့် 'any' သုံးပြီး ပစ္စည်း ၅ ခုပါဝင်တဲ့ ဈေးဝယ်စာရင်းတိုတစ်ခု ရေးပြီး စျေးနှုန်းအကြောင်း ဝါကျတစ်ကြောင်း ထပ်ရေးပါ။"
   }},
  {title:"Write 11 — A Trip to the Farm / လယ်ယာခရီးစဉ်",
   instructions:{
     en:"Write 3 sentences about a farm visit using: I saw ___. The ___ said ___. I helped ___.",
     my:"လယ်ယာလည်ပတ်ခြင်းအကြောင်း ဝါကျ ၃ ကြောင်း ရေးပါ - I saw ___. The ___ said ___. I helped ___."
   }},
  {title:"Write 12 — My Best Friend's Personality / ကျွန်တော့်သူငယ်ချင်းရဲ့စရိုက်",
   instructions:{
     en:"Write 3 sentences describing your best friend's personality using at least two personality adjectives.",
     my:"Personality adjective အနည်းဆုံးနှစ်ခုသုံးပြီး ကိုယ့်သူငယ်ချင်းအကောင်းဆုံးရဲ့ စရိုက်ကို ဖော်ပြတဲ့ ဝါကျ ၃ ကြောင်း ရေးပါ။"
   }},
  {title:"Write 13 — City or Countryside? / မြို့ပြ သို့မဟုတ် တောရွာ?",
   instructions:{
     en:"Write 3 sentences saying whether you prefer city life or countryside life, and why.",
     my:"မြို့ပြဘဝ (သို့) တောရွာဘဝ ဘယ်ဟာကို ပိုကြိုက်လဲ၊ ဘာကြောင့်လဲဆိုတာ ဝါကျ ၃ ကြောင်းရေးပါ။"
   }},
  {title:"Write 14 — A Recipe I Know / ကျွန်တော်သိတဲ့ ဟင်းချက်နည်း",
   instructions:{
     en:"Write step-by-step instructions (3-4 sentences) for a simple dish, using cooking verbs like boil, fry, chop, mix.",
     my:"boil, fry, chop, mix စတဲ့ cooking verb များသုံးပြီး ဟင်းလွယ်တစ်ခုအတွက် အဆင့်ဆင့် (ဝါကျ ၃-၄ ကြောင်း) ညွှန်ကြားချက် ရေးပါ။"
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
   options:["Hungry","Tired","Excited","Thirsty"], answer:"Tired"},
  {id:"w43", type:"mcq", q:{en:"\"I ___ visited Japan.\" (present perfect)"},
   options:["has","have","having","had"], answer:"have"},
  {id:"w44", type:"mcq", q:{en:"\"You ___ wear a seatbelt.\" (it is necessary)"},
   options:["should","must","can","may"], answer:"must"},
  {id:"w45", type:"fill", q:{en:"Fill in: This is the book ___ I read. (which/who)"}, answer:"which"},
  {id:"w46", type:"mcq", q:{en:"\"The cake ___ eaten by the children.\" (passive voice)"},
   options:["is","do","have","are"], answer:"is"},
  {id:"w47", type:"mcq", q:{en:"\"If it rains, I ___ stay home.\""},
   options:["will","would","was","did"], answer:"will"},
  {id:"w48", type:"fill", q:{en:"Fill in: I use my ___ to call people. (ဖုန်း)"}, answer:"phone"},
  {id:"w49", type:"mcq", q:{en:"Which word means a large area of trees?"},
   options:["River","Mountain","Forest","Ocean"], answer:"Forest"},
  {id:"w50", type:"mcq", q:{en:"Which fruit is yellow and curved?"},
   options:["Apple","Banana","Grapes","Watermelon"], answer:"Banana"},
  {id:"w51", type:"fill", q:{en:"Fill in: I eat ___ in summer to cool down. (ဖရဲသီး)"}, answer:"watermelon"},
  {id:"w52", type:"mcq", q:{en:"Which season is the coldest?"},
   options:["Summer","Spring","Winter","Autumn"], answer:"Winter"},
  {id:"w53", type:"mcq", q:{en:"Choose the article: I have ___ apple."},
   options:["a","an","the","-"], answer:"an"},
  {id:"w54", type:"mcq", q:{en:"\"___ she a teacher?\" (yes/no question)"},
   options:["Do","Does","Is","Are"], answer:"Is"},
  {id:"w55", type:"mcq", q:{en:"\"I ___ eating lunch right now.\" (present continuous)"},
   options:["am","is","was","do"], answer:"am"},
  {id:"w56", type:"mcq", q:{en:"\"I don't have ___ milk.\" (negative sentence)"},
   options:["some","any","many","much"], answer:"any"},
  {id:"w57", type:"mcq", q:{en:"\"I have ___ friends.\" (countable noun)"},
   options:["much","many","a little","-"], answer:"many"},
  {id:"w58", type:"fill", q:{en:"Fill in the command: ___ the door. (close)"}, answer:"Close"},
  {id:"w59", type:"mcq", q:{en:"Which instrument has strings and is played with fingers or a pick?"},
   options:["Drum","Guitar","Piano","Microphone"], answer:"Guitar"},
  {id:"w60", type:"mcq", q:{en:"What do you take when you have a headache?"},
   options:["Bandage","Medicine","Hospital","Fever"], answer:"Medicine"},
  {id:"w61", type:"fill", q:{en:"Fill in: My ___ is drawing. (ဝါသနာ)"}, answer:"hobby"},
  {id:"w62", type:"mcq", q:{en:"\"This cake is ___ than that one.\" (irregular comparative of good)"},
   options:["gooder","better","best","goodest"], answer:"better"},
  {id:"w63", type:"mcq", q:{en:"Which word means a place where you pay for things?"},
   options:["Price","Receipt","Bank","Suitcase"], answer:"Bank"},
  {id:"w64", type:"fill", q:{en:"Fill in: You need a ___ to travel to another country. (နိုင်ငံကူးလက်မှတ်)"}, answer:"passport"},
  {id:"w65", type:"mcq", q:{en:"Which country is Tokyo the capital of?"},
   options:["Thailand","China","Japan","India"], answer:"Japan"},
  {id:"w66", type:"mcq", q:{en:"\"I ___ to live in a village.\" (past habit, not true now)"},
   options:["use","used","using","uses"], answer:"used"},
  {id:"w67", type:"mcq", q:{en:"\"If I ___ a lot of money, I would travel.\" (second conditional)"},
   options:["have","has","had","having"], answer:"had"},
  {id:"w68", type:"fill", q:{en:"Fill in: Scientists use a ___ to see faraway stars. (ရေးလ်စကုပ်)"}, answer:"telescope"},
  {id:"w69", type:"mcq", q:{en:"Which planet do we live on?"},
   options:["Moon","Mars","Earth","Sun"], answer:"Earth"},
  {id:"w70", type:"mcq", q:{en:"\"I ___ been studying for two years.\" (present perfect continuous)"},
   options:["am","is","have","has"], answer:"have"},
  {id:"w71", type:"mcq", q:{en:"\"You like tea, ___?\" (question tag)"},
   options:["do you","don't you","aren't you","isn't it"], answer:"don't you"},
  {id:"w72", type:"fill", q:{en:"Fill in: A person who flies to space is called an ___. (အာကာသယာဉ်မှူး)"}, answer:"astronaut"},
  {id:"w73", type:"mcq", q:{en:"Which word means the opposite of 'expensive'?"},
   options:["Cheap","Price","Money","Coin"], answer:"Cheap"},
  {id:"w74", type:"mcq", q:{en:"Which farm animal says \"Moo\"?"},
   options:["Pig","Cow","Sheep","Horse"], answer:"Cow"},
  {id:"w75", type:"mcq", q:{en:"Which insect makes honey?"},
   options:["Ant","Spider","Bee","Fly"], answer:"Bee"},
  {id:"w76", type:"fill", q:{en:"Fill in: My father's brother is my ___. (ဦးလေး)"}, answer:"uncle"},
  {id:"w77", type:"mcq", q:{en:"Which material is used to make windows?"},
   options:["Wood","Glass","Cotton","Stone"], answer:"Glass"},
  {id:"w78", type:"mcq", q:{en:"Which word describes someone who makes people laugh?"},
   options:["Shy","Brave","Funny","Strong"], answer:"Funny"},
  {id:"w79", type:"fill", q:{en:"Fill in: Please ___ the vegetables before cooking. (ခုတ်)"}, answer:"chop"},
  {id:"w80", type:"mcq", q:{en:"Who brings your food to the table at a restaurant?"},
   options:["Waiter","Menu","Bill","Order"], answer:"Waiter"},
  {id:"w81", type:"mcq", q:{en:"Where do you put a letter to send it?"},
   options:["ATM","Bank account","Mailbox","Deposit"], answer:"Mailbox"},
  {id:"w82", type:"mcq", q:{en:"Which place has skyscrapers and lots of traffic?"},
   options:["Countryside","Farmland","City","Village"], answer:"City"},
  {id:"w83", type:"mcq", q:{en:"What do you use to type on a computer?"},
   options:["Mouse","Keyboard","Password","Website"], answer:"Keyboard"},
  {id:"w84", type:"mcq", q:{en:"\"___ book is this?\" (asking about possession)"},
   options:["Who","Whose","Which","What"], answer:"Whose"},
  {id:"w85", type:"mcq", q:{en:"\"I eat breakfast ___ school.\" (before this)"},
   options:["after","during","before","since"], answer:"before"},
  {id:"w86", type:"mcq", q:{en:"\"This tea is ___ hot to drink.\" (a problem)"},
   options:["enough","too","very much","so"], answer:"too"},
  {id:"w87", type:"fill", q:{en:"Fill in: ___ is fun. (Swimming, as a subject)"}, answer:"Swimming"},
  {id:"w88", type:"mcq", q:{en:"\"Could you tell me where the bank ___?\" (indirect question)"},
   options:["is","is it","it is","does it"], answer:"is"},
  {id:"w89", type:"mcq", q:{en:"\"Please turn ___ the light.\" (phrasal verb)"},
   options:["up","on","for","in"], answer:"on"},
  {id:"w90", type:"fill", q:{en:"Fill in: A butterfly starts as a ___. (never mind spelling, just guess a bug word)"}, answer:"caterpillar"},
  {id:"w91", type:"mcq", q:{en:"Which season comes after winter?"},
   options:["Summer","Autumn","Spring","Rainy season"], answer:"Spring"},
  {id:"w92", type:"mcq", q:{en:"Which shape has three sides?"},
   options:["Circle","Square","Triangle","Heart"], answer:"Triangle"},
  {id:"w93", type:"mcq", q:{en:"Which vegetable is orange and long?"},
   options:["Potato","Carrot","Onion","Cabbage"], answer:"Carrot"},
  {id:"w94", type:"fill", q:{en:"Fill in: I need a ___ to log into my email. (စကားဝှက်)"}, answer:"password"},
  {id:"w95", type:"mcq", q:{en:"Which word means giving extra money to a waiter for good service?"},
   options:["Bill","Tip","Menu","Order"], answer:"Tip"},
  {id:"w96", type:"mcq", q:{en:"Which animal makes silk and has eight legs?"},
   options:["Ant","Bee","Spider","Ladybug"], answer:"Spider"},
  {id:"w97", type:"mcq", q:{en:"\"She is old ___ to go to school.\" (the right amount)"},
   options:["too","enough","very","so"], answer:"enough"},
  {id:"w98", type:"mcq", q:{en:"Which pet lives in water?"},
   options:["Dog","Cat","Fish","Rabbit"], answer:"Fish"},
  {id:"w99", type:"fill", q:{en:"Fill in: I cook food in the ___. (မီးဖိုချောင်)"}, answer:"kitchen"},
  {id:"w100", type:"mcq", q:{en:"Which furniture do you sleep on top of, not a bed?"},
   options:["Sofa","Wardrobe","Mirror","Bookshelf"], answer:"Sofa"},
  {id:"w101", type:"mcq", q:{en:"Which natural disaster involves the ground shaking?"},
   options:["Flood","Earthquake","Drought","Storm"], answer:"Earthquake"},
  {id:"w102", type:"fill", q:{en:"Fill in: I ___ money every month for a new bicycle. (စုဆောင်း)"}, answer:"save"},
  {id:"w103", type:"mcq", q:{en:"What do you blow out on a birthday cake?"},
   options:["Balloon","Candle","Gift","Party"], answer:"Candle"},
  {id:"w104", type:"mcq", q:{en:"What do you show before boarding a plane?"},
   options:["Passport control","Gate","Boarding pass","Luggage"], answer:"Boarding pass"},
  {id:"w105", type:"fill", q:{en:"Fill in: We slept in a ___ when we went camping. (တဲ)"}, answer:"tent"},
  {id:"w106", type:"mcq", q:{en:"Who do you call in a fire emergency?"},
   options:["Ambulance","Police","Fire truck","Court"], answer:"Fire truck"},
  {id:"w107", type:"mcq", q:{en:"Which word means cutting down too many trees?"},
   options:["Pollution","Deforestation","Poverty","Profit"], answer:"Deforestation"},
  {id:"w108", type:"mcq", q:{en:"Which word means the money a company earns?"},
   options:["Salary","Customer","Profit","Market"], answer:"Profit"}
];
