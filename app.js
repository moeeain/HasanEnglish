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

// ---- Text-to-speech (free, built into the browser) ----
function speak(text){
  try{
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.85;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }catch(e){ console.warn('TTS not supported', e); }
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
      <div class="word-my">${w.my}</div>
      <div class="word-hi">${w.hi}</div>`;
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
    <p><b>MY:</b> ${x.my}</p>
    <p><b>HI:</b> ${x.hi}</p>`).join('');
  let exHtml = unit.examples.map(e=>`<p onclick="speak('${e.replace(/'/g,"\\'")}')" style="cursor:pointer">🔊 ${e}</p>`).join('');
  box.innerHTML = `<h3>${unit.title}</h3><div class="explain">${explainHtml}</div>
    <div class="example"><b>Examples / ဥပမာ / उदाहरण:</b>${exHtml}</div>`;
  grammarWrap.appendChild(box);
});

// ---- Render: Listening ----
const listeningWrap = document.getElementById('listeningUnits');
LISTENING_UNITS.forEach(unit=>{
  const box = document.createElement('div');
  box.className = 'unit';
  box.innerHTML = `<h3>${unit.title}</h3>
    <div class="video-wrap"><iframe src="https://www.youtube.com/embed/${unit.youtubeId}" allowfullscreen></iframe></div>
    <div class="explain">
      <p><b>EN:</b> ${unit.note.en}</p>
      <p><b>MY:</b> ${unit.note.my}</p>
      <p><b>HI:</b> ${unit.note.hi}</p>
    </div>`;
  listeningWrap.appendChild(box);
});

// ---- Render: Speaking ----
const speakingWrap = document.getElementById('speakingUnits');
SPEAKING_UNITS.forEach(unit=>{
  const box = document.createElement('div');
  box.className = 'unit';
  let promptsHtml = unit.prompts.map(p=>`
    <div class="example">
      <p><b>EN:</b> ${p.en}</p>
      <p><b>MY:</b> ${p.my}</p>
      <p><b>HI:</b> ${p.hi}</p>
    </div>`).join('');
  box.innerHTML = `<h3>${unit.title}</h3>${promptsHtml}`;
  speakingWrap.appendChild(box);
});

// ---- Render: Reading ----
const readingWrap = document.getElementById('readingUnits');
READING_UNITS.forEach(unit=>{
  const box = document.createElement('div');
  box.className = 'unit';
  const qHtml = unit.questions.map(q=>`
    <p><b>EN:</b> ${q.en}<br><b>MY:</b> ${q.my}<br><b>HI:</b> ${q.hi}</p>`).join('');
  box.innerHTML = `<h3>${unit.title}</h3>
    <p onclick="speak(\`${unit.text.replace(/`/g,"'")}\`)" style="cursor:pointer">🔊 ${unit.text}</p>
    <div class="explain">
      <p><b>MY:</b> ${unit.translation.my}</p>
      <p><b>HI:</b> ${unit.translation.hi}</p>
    </div>
    <div class="example"><b>Questions / မေးခွန်း / प्रश्न:</b>${qHtml}</div>`;
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
      <p><b>HI:</b> ${unit.instructions.hi}</p>
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
    `Score / ရမှတ် / स्कोर: ${correct} / ${WORKBOOK_QUESTIONS.length}`;
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
