// ============================================================
// APP LOGIC — you usually don't need to edit this file.
// To add content, edit data.js instead.
// ============================================================

// ---- Tab navigation ----
function goTab(name){
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active', t.dataset.tab===name));
  document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('active', p.id==='panel-'+name));
  window.scrollTo({top:0, behavior:'smooth'});
}
document.getElementById('tabbar').addEventListener('click', e=>{
  const btn = e.target.closest('.tab');
  if(btn) goTab(btn.dataset.tab);
});

// ---- Text-to-speech: prefers a real recording (AUDIO_MAP), then
// picks the best-sounding voice the browser/device offers ----
let preferredVoice = null;
let availableVoices = [];

function scoreVoice(v){
  // Higher score = more natural-sounding (rough heuristic).
  let s = 0;
  const n = v.name.toLowerCase();
  if(!v.lang.toLowerCase().startsWith('en')) return -1;
  if(n.includes('natural')) s += 5;
  if(n.includes('online')) s += 4;
  if(n.includes('neural')) s += 5;
  if(n.includes('premium') || n.includes('enhanced')) s += 4;
  if(n.includes('google')) s += 3;
  if(n.includes('samantha') || n.includes('aria') || n.includes('jenny')) s += 3;
  if(n.includes('compact') || n.includes('espeak') || n.includes('robot')) s -= 3;
  if(v.localService === false) s += 1; // cloud voices often sound better
  return s;
}

function loadVoices(){
  availableVoices = speechSynthesis.getVoices().filter(v=>v.lang.toLowerCase().startsWith('en'));
  if(!availableVoices.length) return;
  const saved = localStorage.getItem('preferredVoiceName');
  const select = document.getElementById('voiceSelect');
  if(select && select.options.length !== availableVoices.length){
    select.innerHTML = availableVoices.map(v=>`<option value="${v.name}">${v.name} (${v.lang})</option>`).join('');
    if(saved && availableVoices.some(v=>v.name===saved)) select.value = saved;
  }
  const byName = saved && availableVoices.find(v=>v.name===saved);
  preferredVoice = byName || availableVoices.slice().sort((a,b)=>scoreVoice(b)-scoreVoice(a))[0] || null;
}
speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();
document.getElementById('voiceSelect').addEventListener('change', e=>{
  localStorage.setItem('preferredVoiceName', e.target.value);
  preferredVoice = availableVoices.find(v=>v.name===e.target.value) || null;
});

function speak(text){
  const key = text.trim().toLowerCase();
  if(typeof AUDIO_MAP !== 'undefined' && AUDIO_MAP[key]){
    try{
      const audio = new Audio(AUDIO_MAP[key]);
      audio.play();
      return;
    }catch(e){ console.warn('Audio playback failed, falling back to TTS', e); }
  }
  const useOnline = localStorage.getItem('useOnlineVoice') !== 'off'; // default: on
  if(useOnline && navigator.onLine !== false){
    tryOnlineVoice(text).catch(()=> speakBrowser(text));
  } else {
    speakBrowser(text);
  }
}

// A natural-sounding free online voice (Google's speech service).
// This is an unofficial, undocumented endpoint — it usually works great,
// but it isn't guaranteed forever, so we always fall back safely to the
// device's own voice if it ever fails.
function tryOnlineVoice(text){
  return new Promise((resolve, reject)=>{
    try{
      const url = 'https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=' + encodeURIComponent(text.slice(0,200));
      const audio = new Audio(url);
      audio.onerror = ()=> reject(new Error('google tts load error'));
      audio.play().then(resolve).catch(reject);
    }catch(e){ reject(e); }
  });
}

function speakBrowser(text){
  try{
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.85;
    if(preferredVoice) u.voice = preferredVoice;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }catch(e){ console.warn('TTS not supported', e); }
}

const onlineToggle = document.getElementById('onlineVoiceToggle');
if(onlineToggle){
  onlineToggle.checked = localStorage.getItem('useOnlineVoice') !== 'off';
  onlineToggle.addEventListener('change', e=>{
    localStorage.setItem('useOnlineVoice', e.target.checked ? 'on' : 'off');
  });
}

// ---- Render: Vocabulary ----
const vocabWrap = document.getElementById('vocabUnits');
VOCAB_UNITS.forEach(unit=>{
  const box = document.createElement('div');
  box.className = 'unit';
  box.innerHTML = `<h3>${unit.title}</h3><div class="word-grid"></div>`;
  const grid = box.querySelector('.word-grid');
  unit.words.forEach(w=>{
    const card = document.createElement('div');
    card.className = 'word-card';
    card.innerHTML = `<div class="word-emoji">${w.emoji}</div>
      <div class="word-en">${w.en}</div>
      <div class="word-my">${w.my}</div>`;
    card.onclick = ()=>speak(w.en);
    grid.appendChild(card);
  });
  vocabWrap.appendChild(box);
});

// ---- Render: Grammar ----
const grammarWrap = document.getElementById('grammarUnits');
GRAMMAR_UNITS.forEach(unit=>{
  const box = document.createElement('div');
  box.className = 'unit';
  let explainHtml = unit.explain.map(x=>`
    <p><b>EN:</b> ${x.en}</p>
    <p><b>MY:</b> ${x.my}</p>`).join('');
  let exHtml = unit.examples.map(e=>`<p onclick="speak('${e.replace(/'/g,"\\'")}')" style="cursor:pointer">🔊 ${e}</p>`).join('');
  box.innerHTML = `<h3>${unit.title}</h3><div class="explain">${explainHtml}</div>
    <div class="example"><b>Examples / ဥပမာ:</b>${exHtml}</div>`;
  grammarWrap.appendChild(box);
});

// ---- Render: Listening ----
const listeningWrap = document.getElementById('listeningUnits');
LISTENING_UNITS.forEach(unit=>{
  const box = document.createElement('div');
  box.className = 'unit';
  const phrase = (unit.keyPhrase || unit.note.en).replace(/'/g,"\\'");
  box.innerHTML = `<h3>${unit.title}</h3>
    <div class="video-wrap"><iframe src="https://www.youtube.com/embed/${unit.youtubeId}" allowfullscreen></iframe></div>
    <button class="speaker-btn" onclick="speak('${phrase}')">🔊 Play key phrase / အဓိကစကားစု နားထောင်ရန်</button>
    <div class="explain">
      <p><b>EN:</b> ${unit.note.en}</p>
      <p><b>MY:</b> ${unit.note.my}</p>
    </div>`;
  listeningWrap.appendChild(box);
});

// ---- Render: Speaking ----
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const speakingWrap = document.getElementById('speakingUnits');
SPEAKING_UNITS.forEach((unit,ui)=>{
  const box = document.createElement('div');
  box.className = 'unit';
  let promptsHtml = unit.prompts.map((p,pi)=>{
    const fbId = `sp-fb-${ui}-${pi}`;
    const micBtn = SR
      ? `<button class="mic-btn" data-en="${p.en.replace(/"/g,'&quot;')}" data-fb="${fbId}">🎤 Speak / ပြောကြည့်</button>`
      : `<p class="tri small">🎤 EN: Voice check not supported in this browser. · MY: ဒီ browser မှာ အသံစစ်ဆေးမှု အသုံးပြု၍မရပါ။</p>`;
    return `
    <div class="example">
      <p><b>EN:</b> ${p.en}</p>
      <p><b>MY:</b> ${p.my}</p>
      ${micBtn}
      <p class="mic-feedback" id="${fbId}"></p>
    </div>`;
  }).join('');
  box.innerHTML = `<h3>${unit.title}</h3>${promptsHtml}`;
  speakingWrap.appendChild(box);
});

// Extract the quoted target phrase from a prompt like: Say: "Hello, my name is ___."
function extractTarget(promptEn){
  const m = promptEn.match(/"([^"]+)"/);
  return m ? m[1] : promptEn;
}
function normalize(s){
  return s.toLowerCase().replace(/[.,!?"']/g,'').replace(/___/g,'').trim();
}

document.getElementById('speakingUnits').addEventListener('click', e=>{
  const btn = e.target.closest('.mic-btn');
  if(!btn || !SR) return;
  const fb = document.getElementById(btn.dataset.fb);
  const target = normalize(extractTarget(btn.dataset.en));
  fb.textContent = '🎙️ Listening... / နားထောင်နေသည်...';
  fb.className = 'mic-feedback';
  const rec = new SR();
  rec.lang = 'en-US';
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  rec.onresult = ev=>{
    const said = ev.results[0][0].transcript;
    const saidNorm = normalize(said);
    // Correct if the target phrase (ignoring blanks like ___) is contained in what was said
    const targetCore = target.replace(/\s+/g,' ').trim();
    const isClose = saidNorm.includes(targetCore) || targetCore.includes(saidNorm) ||
      targetCore.split(' ').filter(w=>w && saidNorm.includes(w)).length >= Math.max(1, Math.ceil(targetCore.split(' ').length*0.7));
    if(isClose){
      fb.textContent = `✅ Great! You said: "${said}"`;
      fb.className = 'mic-feedback ok';
    } else {
      fb.textContent = `❌ Try again. You said: "${said}"`;
      fb.className = 'mic-feedback bad';
    }
  };
  rec.onerror = ()=>{
    fb.textContent = '⚠️ Could not hear you. Try again. / ပြန်ကြိုးစားပါ။ ';
    fb.className = 'mic-feedback bad';
  };
  rec.start();
});

// ---- Dialogue Practice: "I say a line, you say a line" ----
let currentDialogue = null;
let currentLineIndex = 0;
let dialogueHistory = [];

const dialogueSelect = document.getElementById('dialogueSelect');
if(dialogueSelect){
  dialogueSelect.innerHTML = DIALOGUES.map((d,i)=>`<option value="${i}">${d.title}</option>`).join('');
  document.getElementById('dialogueStartBtn').addEventListener('click', ()=>{
    currentDialogue = DIALOGUES[parseInt(dialogueSelect.value, 10)];
    currentLineIndex = 0;
    dialogueHistory = [];
    renderDialogueStage();
  });
}

function renderDialogueStage(){
  const stage = document.getElementById('dialogueStage');
  if(!currentDialogue){ stage.innerHTML = ''; return; }

  let historyHtml = dialogueHistory.map(h=>
    `<p class="dlg-line"><b>${h.speaker==='App' ? '🤖 App' : '🧑 You'}:</b> ${h.said || h.en}</p>`
  ).join('');

  if(currentLineIndex >= currentDialogue.lines.length){
    stage.innerHTML = historyHtml +
      `<p class="mic-feedback ok">🎉 Great job! Dialogue complete. / ပြီးပါပြီ! ကောင်းလိုက်တာ!</p>`;
    return;
  }

  const line = currentDialogue.lines[currentLineIndex];

  if(line.speaker === 'App'){
    stage.innerHTML = historyHtml + `
      <div class="example">
        <p><b>🤖 App says:</b> ${line.en}</p>
        <p><b>MY:</b> ${line.my}</p>
        <button class="btn-secondary" id="dlgNextBtn">Next ▶ / ရှေ့ဆက်မယ်</button>
      </div>`;
    speak(line.en);
    document.getElementById('dlgNextBtn').onclick = ()=>{
      dialogueHistory.push({speaker:'App', en: line.en});
      currentLineIndex++;
      renderDialogueStage();
    };
    return;
  }

  // line.speaker === 'You'
  const micHtml = SR
    ? `<button class="mic-btn" id="dlgMicBtn">🎤 Your turn — Speak / မင်းအလှည့်</button>`
    : `<p class="tri small">🎤 EN: Voice check not supported here — read it, then tap Skip. · MY: ဒီ browser မှာ mic အလုပ်မလုပ်ပါ — ဖတ်ပြီး Skip နှိပ်ပါ။</p>
       <button class="btn-secondary" id="dlgSkipBtn">Skip ▶</button>`;
  stage.innerHTML = historyHtml + `
    <div class="example">
      <p><b>🧑 You say:</b> ${line.en}</p>
      <p><b>MY:</b> ${line.my}</p>
      ${micHtml}
      <p class="mic-feedback" id="dlgFeedback"></p>
    </div>`;

  const skipBtn = document.getElementById('dlgSkipBtn');
  if(skipBtn){
    skipBtn.onclick = ()=>{
      dialogueHistory.push({speaker:'You', en: line.en});
      currentLineIndex++;
      renderDialogueStage();
    };
    return;
  }

  const fb = document.getElementById('dlgFeedback');
  document.getElementById('dlgMicBtn').onclick = ()=>{
    fb.textContent = '🎙️ Listening... / နားထောင်နေသည်...';
    fb.className = 'mic-feedback';
    const rec = new SR();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onresult = ev=>{
      const said = ev.results[0][0].transcript;
      const saidNorm = normalize(said);
      const target = normalize(extractTarget(line.en));
      const isClose = saidNorm.includes(target) || target.includes(saidNorm) ||
        target.split(' ').filter(w=>w && saidNorm.includes(w)).length >= Math.max(1, Math.ceil(target.split(' ').length*0.6));
      if(isClose){
        fb.textContent = `✅ Great! You said: "${said}"`;
        fb.className = 'mic-feedback ok';
        dialogueHistory.push({speaker:'You', en: line.en, said});
        setTimeout(()=>{ currentLineIndex++; renderDialogueStage(); }, 900);
      } else {
        fb.textContent = `❌ Try again. You said: "${said}"`;
        fb.className = 'mic-feedback bad';
      }
    };
    rec.onerror = ()=>{
      fb.textContent = '⚠️ Could not hear you. Try again. / ပြန်ကြိုးစားပါ။ ';
      fb.className = 'mic-feedback bad';
    };
    rec.start();
  };
}

// ---- Render: Reading ----
const readingWrap = document.getElementById('readingUnits');
READING_UNITS.forEach(unit=>{
  const box = document.createElement('div');
  box.className = 'unit';
  const qHtml = unit.questions.map(q=>`
    <p><b>EN:</b> ${q.en}<br><b>MY:</b> ${q.my}</p>`).join('');
  box.innerHTML = `<h3>${unit.title}</h3>
    <p onclick="speak(\`${unit.text.replace(/`/g,"'")}\`)" style="cursor:pointer">🔊 ${unit.text}</p>
    <div class="explain">
      <p><b>MY:</b> ${unit.translation.my}</p>
    </div>
    <div class="example"><b>Questions / မေးခွန်း:</b>${qHtml}</div>`;
  readingWrap.appendChild(box);
});

// ---- Render: Writing ----
const writingWrap = document.getElementById('writingUnits');
WRITING_UNITS.forEach((unit,i)=>{
  const box = document.createElement('div');
  box.className = 'unit';
  box.innerHTML = `<h3>${unit.title}</h3>
    <div class="explain">
      <p><b>EN:</b> ${unit.instructions.en}</p>
      <p><b>MY:</b> ${unit.instructions.my}</p>
    </div>
    <textarea rows="4" style="width:100%;border-radius:10px;padding:10px;border:2px solid #ddd;margin-top:8px"
      id="writing-${i}" placeholder="Write here..."></textarea>`;
  writingWrap.appendChild(box);
});

// ---- Render: Workbook ----
const wbWrap = document.getElementById('workbookQuestions');
WORKBOOK_QUESTIONS.forEach(q=>{
  const box = document.createElement('div');
  box.className = 'q-block';
  box.id = 'q-'+q.id;
  if(q.type==='mcq'){
    const opts = q.options.map(o=>`
      <label><input type="radio" name="${q.id}" value="${o}"> ${o}</label>`).join('');
    box.innerHTML = `<p class="q-text">${q.q.en}</p><div class="q-options">${opts}</div>`;
  } else {
    box.innerHTML = `<p class="q-text">${q.q.en}</p>
      <div class="q-fill"><input type="text" id="input-${q.id}" placeholder="type answer"></div>`;
  }
  wbWrap.appendChild(box);
});

let lastScore = 0;
document.getElementById('checkWorkbook').addEventListener('click', ()=>{
  let correct = 0;
  WORKBOOK_QUESTIONS.forEach(q=>{
    const box = document.getElementById('q-'+q.id);
    let given = '';
    if(q.type==='mcq'){
      const sel = box.querySelector(`input[name="${q.id}"]:checked`);
      given = sel ? sel.value : '';
    } else {
      given = document.getElementById('input-'+q.id).value.trim();
    }
    const ok = given.toLowerCase() === q.answer.toLowerCase();
    box.classList.toggle('correct', ok);
    box.classList.toggle('wrong', !ok && given!=='');
    if(ok) correct++;
  });
  lastScore = correct;
  document.getElementById('workbookResult').textContent =
    `Score / ရမှတ်: ${correct} / ${WORKBOOK_QUESTIONS.length}`;
  document.getElementById('scoreValue').textContent = correct;
  document.getElementById('nameSave').style.display = 'flex';
});

// ---- Save score (Firestore → Google Apps Script → localStorage, first one available) ----
document.getElementById('saveScoreBtn').addEventListener('click', async ()=>{
  const name = document.getElementById('studentName').value.trim() || 'Student';
  const status = document.getElementById('saveStatus');
  const payload = {
    name,
    score: lastScore,
    total: WORKBOOK_QUESTIONS.length,
    date: new Date().toISOString()
  };
  try{
    if(db){
      await db.collection('scores').add(payload);
      status.textContent = '✅ Saved to Firebase!';
    } else if (typeof GOOGLE_SCRIPT_URL !== 'undefined' && GOOGLE_SCRIPT_URL){
      await fetch(GOOGLE_SCRIPT_URL, {
        method:'POST',
        mode:'no-cors',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      });
      status.textContent = '✅ Saved to Google Sheet!';
    } else {
      const all = JSON.parse(localStorage.getItem('scores')||'[]');
      all.push(payload);
      localStorage.setItem('scores', JSON.stringify(all));
      status.textContent = '✅ Saved on this device (set up Firebase or Google Script for online saving).';
    }
  }catch(e){
    console.error(e);
    status.textContent = '⚠️ Could not save online — check your setup in firebase-config.js.';
  }
});
