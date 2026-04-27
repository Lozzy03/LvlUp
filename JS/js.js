const jocuri = [
  { name:"Counter-Strike 2", genre:"FPS Tactic", jucatori:"1.5 milioane jucători zilnic",
    desc:"CS2 este cel mai popular shooter tactic competitiv din lume. Echipe de 5 se înfruntă în runde intense de atac și apărare. Precizie, strategie și lucru în echipă.",
    svg:`<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg"><rect width="540" height="200" fill="#0f0c00"/><g stroke="#f59e0b" stroke-width="0.5" opacity="0.12"><line x1="0" y1="50" x2="540" y2="50"/><line x1="0" y1="100" x2="540" y2="100"/><line x1="0" y1="150" x2="540" y2="150"/><line x1="135" y1="0" x2="135" y2="200"/><line x1="270" y1="0" x2="270" y2="200"/><line x1="405" y1="0" x2="405" y2="200"/></g><line x1="270" y1="50" x2="270" y2="150" stroke="#f59e0b" stroke-width="2.5" opacity="0.85"/><line x1="220" y1="100" x2="320" y2="100" stroke="#f59e0b" stroke-width="2.5" opacity="0.85"/><circle cx="270" cy="100" r="30" fill="none" stroke="#f59e0b" stroke-width="2.5" opacity="0.75"/><circle cx="270" cy="100" r="5" fill="#f59e0b" opacity="0.95"/><path d="M90,120 L175,108 L185,103 L200,108 L360,108 L372,120 L360,126 L200,126 L185,122 L175,126 L90,132 Z" fill="#0f0c00" stroke="#f59e0b" stroke-width="1.8" opacity="0.75"/><rect x="168" y="126" width="24" height="28" rx="4" fill="#0f0c00" stroke="#f59e0b" stroke-width="1.5" opacity="0.65"/><rect x="200" y="96" width="55" height="6" rx="2" fill="#f59e0b" opacity="0.55"/><text x="270" y="175" text-anchor="middle" font-family="monospace" font-size="20" font-weight="bold" fill="#f59e0b" opacity="0.95">CS2</text><text x="270" y="192" text-anchor="middle" font-family="monospace" font-size="10" fill="#94a3b8" opacity="0.75">Counter-Strike 2 • FPS Tactic</text></svg>`},
  { name:"Valorant", genre:"FPS Tactic", jucatori:"22 milioane jucători activi",
    desc:"Valorant combină precizia unui FPS clasic cu abilitățile unice ale agenților. Fiecare meci este o experiență nouă, cu strategii complexe și acțiune rapidă.",
    svg:`<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg"><rect width="540" height="200" fill="#140208"/><g stroke="#ef4444" stroke-width="0.5" opacity="0.12"><line x1="0" y1="50" x2="540" y2="50"/><line x1="0" y1="100" x2="540" y2="100"/><line x1="0" y1="150" x2="540" y2="150"/><line x1="135" y1="0" x2="135" y2="200"/><line x1="270" y1="0" x2="270" y2="200"/><line x1="405" y1="0" x2="405" y2="200"/></g><polygon points="270,28 328,135 302,135 270,72 238,135 212,135" fill="#ef4444" opacity="0.9"/><polygon points="270,80 310,135 284,135 270,108" fill="#140208" opacity="0.75"/><circle cx="270" cy="28" r="7" fill="#ef4444" opacity="0.85"/><line x1="155" y1="65" x2="212" y2="135" stroke="#ef4444" stroke-width="1.2" opacity="0.3"/><line x1="385" y1="65" x2="328" y2="135" stroke="#ef4444" stroke-width="1.2" opacity="0.3"/><text x="270" y="168" text-anchor="middle" font-family="monospace" font-size="18" font-weight="bold" fill="#ef4444" opacity="0.95">VALORANT</text><text x="270" y="184" text-anchor="middle" font-family="monospace" font-size="10" fill="#94a3b8" opacity="0.7">FPS Tactic • Riot Games</text></svg>`},
  { name:"Dota 2", genre:"MOBA", jucatori:"12 milioane jucători activi",
    desc:"Dota 2 este un MOBA strateg cu echipe de 5 eroi fiecare. Bătălii epice, sute de eroi unici și un meta în continuă schimbare te țin captivat ore întregi.",
    svg:`<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg"><rect width="540" height="200" fill="#0e0808"/><g stroke="#ef4444" stroke-width="0.5" opacity="0.1"><line x1="0" y1="50" x2="540" y2="50"/><line x1="0" y1="100" x2="540" y2="100"/><line x1="0" y1="150" x2="540" y2="150"/><line x1="135" y1="0" x2="135" y2="200"/><line x1="270" y1="0" x2="270" y2="200"/><line x1="405" y1="0" x2="405" y2="200"/></g><path d="M270,22 L322,46 L322,100 C322,130 298,152 270,162 C242,152 218,130 218,100 L218,46 Z" fill="#0e0808" stroke="#ef4444" stroke-width="3" opacity="0.92"/><path d="M270,40 L308,58 L308,100 C308,124 292,140 270,148 C248,140 232,124 232,100 L232,58 Z" fill="none" stroke="#ef4444" stroke-width="1.2" opacity="0.4"/><text x="270" y="112" text-anchor="middle" font-family="monospace" font-size="36" font-weight="bold" fill="#ef4444" opacity="0.88">D2</text><circle cx="215" cy="52" r="3" fill="#ef4444" opacity="0.55"/><circle cx="325" cy="52" r="3" fill="#ef4444" opacity="0.55"/><text x="270" y="180" text-anchor="middle" font-family="monospace" font-size="16" font-weight="bold" fill="#ef4444" opacity="0.85">DOTA 2</text><text x="270" y="195" text-anchor="middle" font-family="monospace" font-size="9" fill="#94a3b8" opacity="0.6">MOBA • Valve Corporation</text></svg>`},
  { name:"Fortnite", genre:"Battle Royale", jucatori:"350 milioane conturi înregistrate",
    desc:"Fortnite este fenomenul battle royale cu 100 de jucători pe o insulă. Construiește, supraviețuiește și câștigă. Actualizări constante și sezoane noi.",
    svg:`<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg"><rect width="540" height="200" fill="#030818"/><g stroke="#3b82f6" stroke-width="0.5" opacity="0.12"><line x1="0" y1="50" x2="540" y2="50"/><line x1="0" y1="100" x2="540" y2="100"/><line x1="0" y1="150" x2="540" y2="150"/><line x1="135" y1="0" x2="135" y2="200"/><line x1="270" y1="0" x2="270" y2="200"/><line x1="405" y1="0" x2="405" y2="200"/></g><polygon points="285,18 248,108 272,108 248,182 302,82 272,82 302,18" fill="#3b82f6" opacity="0.92"/><polygon points="285,18 248,108 272,108 248,182 302,82 272,82 302,18" fill="none" stroke="#60a5fa" stroke-width="2" opacity="0.5"/><circle cx="148" cy="65" r="3" fill="#3b82f6" opacity="0.65"/><circle cx="390" cy="85" r="3.5" fill="#3b82f6" opacity="0.55"/><circle cx="115" cy="140" r="2.5" fill="#3b82f6" opacity="0.45"/><circle cx="420" cy="42" r="3" fill="#3b82f6" opacity="0.55"/><circle cx="80" cy="100" r="2" fill="#3b82f6" opacity="0.4"/><text x="270" y="192" text-anchor="middle" font-family="monospace" font-size="16" font-weight="bold" fill="#3b82f6" opacity="0.92">FORTNITE</text></svg>`},
  { name:"League of Legends", genre:"MOBA", jucatori:"150 milioane jucători înregistrați",
    desc:"LoL este cel mai jucat joc PC din lume. Alege dintre 160+ campioni, cucerește harta și dărâmă nexusul inamic. Competiție esports la nivel mondial.",
    svg:`<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg"><rect width="540" height="200" fill="#0a0800"/><g stroke="#c89b3c" stroke-width="0.5" opacity="0.1"><line x1="0" y1="50" x2="540" y2="50"/><line x1="0" y1="100" x2="540" y2="100"/><line x1="0" y1="150" x2="540" y2="150"/><line x1="135" y1="0" x2="135" y2="200"/><line x1="270" y1="0" x2="270" y2="200"/><line x1="405" y1="0" x2="405" y2="200"/></g><polygon points="270,20 316,45 328,100 308,142 270,158 232,142 212,100 224,45" fill="#0a0800" stroke="#c89b3c" stroke-width="3" opacity="0.92"/><polygon points="270,36 306,56 316,100 298,134 270,146 242,134 224,100 234,56" fill="none" stroke="#c89b3c" stroke-width="1.2" opacity="0.4"/><text x="270" y="112" text-anchor="middle" font-family="serif" font-size="30" font-weight="bold" fill="#c89b3c" opacity="0.92">LoL</text><path d="M212,100 C188,84 164,90 152,100 C164,110 188,116 212,100Z" fill="#c89b3c" opacity="0.32"/><path d="M328,100 C352,84 376,90 388,100 C376,110 352,116 328,100Z" fill="#c89b3c" opacity="0.32"/><text x="270" y="178" text-anchor="middle" font-family="monospace" font-size="13" font-weight="bold" fill="#c89b3c" opacity="0.88">LEAGUE OF LEGENDS</text><text x="270" y="193" text-anchor="middle" font-family="monospace" font-size="9" fill="#94a3b8" opacity="0.6">MOBA • Riot Games</text></svg>`},
  { name:"GTA V Online", genre:"Open World", jucatori:"185 milioane copii vândute",
    desc:"Lumea deschisă Los Santos cu 30 de jucători simultan. Jafuri elaborate, curse, avioane și aventuri infinite în cel mai popular joc online open-world.",
    svg:`<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg"><rect width="540" height="200" fill="#020f06"/><g stroke="#22c55e" stroke-width="0.5" opacity="0.12"><line x1="0" y1="50" x2="540" y2="50"/><line x1="0" y1="100" x2="540" y2="100"/><line x1="0" y1="150" x2="540" y2="150"/><line x1="135" y1="0" x2="135" y2="200"/><line x1="270" y1="0" x2="270" y2="200"/><line x1="405" y1="0" x2="405" y2="200"/></g><rect x="65" y="68" width="22" height="72" fill="#041208" stroke="#22c55e" stroke-width="1.2" opacity="0.65"/><rect x="92" y="48" width="28" height="92" fill="#041208" stroke="#22c55e" stroke-width="1.2" opacity="0.65"/><rect x="126" y="62" width="20" height="78" fill="#041208" stroke="#22c55e" stroke-width="1.2" opacity="0.65"/><rect x="310" y="52" width="24" height="88" fill="#041208" stroke="#22c55e" stroke-width="1.2" opacity="0.65"/><rect x="340" y="68" width="20" height="72" fill="#041208" stroke="#22c55e" stroke-width="1.2" opacity="0.65"/><rect x="366" y="42" width="30" height="98" fill="#041208" stroke="#22c55e" stroke-width="1.2" opacity="0.65"/><path d="M152,128 L175,114 L290,114 L312,128 L312,140 L152,140 Z" fill="#041208" stroke="#22c55e" stroke-width="2" opacity="0.9"/><ellipse cx="175" cy="140" rx="14" ry="14" fill="#041208" stroke="#22c55e" stroke-width="1.8" opacity="0.85"/><ellipse cx="290" cy="140" rx="14" ry="14" fill="#041208" stroke="#22c55e" stroke-width="1.8" opacity="0.85"/><rect x="182" y="116" width="96" height="16" rx="3" fill="#22c55e" opacity="0.07"/><circle cx="312" cy="126" r="5" fill="#22c55e" opacity="0.65"/><circle cx="152" cy="126" r="5" fill="#f59e0b" opacity="0.45"/><text x="232" y="172" text-anchor="middle" font-family="monospace" font-size="18" font-weight="bold" fill="#22c55e" opacity="0.92">GTA V ONLINE</text><text x="232" y="187" text-anchor="middle" font-family="monospace" font-size="9" fill="#94a3b8" opacity="0.65">Open World • Rockstar Games</text></svg>`},
  { name:"Minecraft", genre:"Sandbox", jucatori:"300 milioane copii vândute",
    desc:"Construiește, explorează și supraviețuiește în lumea de blocuri fără limite. Modul multiplayer îți permite să creezi civilizații întregi cu prietenii tăi.",
    svg:`<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg"><rect width="540" height="200" fill="#040c00"/><g stroke="#84cc16" stroke-width="0.5" opacity="0.1"><line x1="0" y1="50" x2="540" y2="50"/><line x1="0" y1="100" x2="540" y2="100"/><line x1="0" y1="150" x2="540" y2="150"/><line x1="135" y1="0" x2="135" y2="200"/><line x1="270" y1="0" x2="270" y2="200"/><line x1="405" y1="0" x2="405" y2="200"/></g><rect x="182" y="48" width="58" height="58" fill="#166534" stroke="#22c55e" stroke-width="2" opacity="0.92"/><rect x="182" y="106" width="58" height="42" fill="#92400e" stroke="#84cc16" stroke-width="1.5" opacity="0.88"/><polygon points="240,48 272,30 272,88 240,106" fill="#14532d" stroke="#22c55e" stroke-width="1.5" opacity="0.8"/><polygon points="240,106 272,88 272,130 240,148" fill="#78350f" stroke="#84cc16" stroke-width="1" opacity="0.7"/><line x1="194" y1="54" x2="194" y2="66" stroke="#22c55e" stroke-width="1.2" opacity="0.5"/><line x1="208" y1="50" x2="208" y2="62" stroke="#22c55e" stroke-width="1.2" opacity="0.5"/><line x1="222" y1="54" x2="222" y2="66" stroke="#22c55e" stroke-width="1.2" opacity="0.5"/><rect x="128" y="98" width="48" height="48" fill="#92400e" stroke="#84cc16" stroke-width="1.5" opacity="0.78"/><rect x="128" y="74" width="48" height="24" fill="#166534" stroke="#22c55e" stroke-width="1.5" opacity="0.78"/><rect x="250" y="104" width="44" height="44" fill="#92400e" stroke="#84cc16" stroke-width="1.2" opacity="0.65"/><text x="270" y="168" text-anchor="middle" font-family="monospace" font-size="18" font-weight="bold" fill="#84cc16" opacity="0.92">MINECRAFT</text><text x="270" y="183" text-anchor="middle" font-family="monospace" font-size="9" fill="#94a3b8" opacity="0.65">Sandbox • Mojang Studios</text></svg>`},
  { name:"FIFA 25", genre:"Sport", jucatori:"29 milioane copii vândute",
    desc:"Cel mai popular simulator de fotbal cu peste 19.000 de jucători reali licențiați. Joacă în modurile Ultimate Team, Career Mode sau online cu prietenii.",
    svg:`<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg"><rect width="540" height="200" fill="#020810"/><g stroke="#0ea5e9" stroke-width="0.5" opacity="0.12"><line x1="0" y1="50" x2="540" y2="50"/><line x1="0" y1="100" x2="540" y2="100"/><line x1="0" y1="150" x2="540" y2="150"/><line x1="135" y1="0" x2="135" y2="200"/><line x1="270" y1="0" x2="270" y2="200"/><line x1="405" y1="0" x2="405" y2="200"/></g><ellipse cx="270" cy="98" rx="90" ry="62" fill="none" stroke="#0ea5e9" stroke-width="1.8" opacity="0.55"/><line x1="270" y1="36" x2="270" y2="160" stroke="#0ea5e9" stroke-width="1.2" opacity="0.45"/><circle cx="270" cy="98" r="18" fill="none" stroke="#0ea5e9" stroke-width="1.8" opacity="0.7"/><circle cx="270" cy="98" r="26" fill="#020810" stroke="#0ea5e9" stroke-width="2.5"/><polygon points="270,80 279,93 272,104 262,104 255,93" fill="#0ea5e9" opacity="0.55"/><polygon points="270,80 262,93 252,89 252,79 261,75" fill="none" stroke="#0ea5e9" stroke-width="1.2" opacity="0.45"/><polygon points="270,80 279,93 289,89 289,79 280,75" fill="none" stroke="#0ea5e9" stroke-width="1.2" opacity="0.45"/><line x1="155" y1="62" x2="155" y2="134" stroke="#0ea5e9" stroke-width="2.5" opacity="0.5"/><line x1="155" y1="62" x2="178" y2="62" stroke="#0ea5e9" stroke-width="2.5" opacity="0.5"/><line x1="155" y1="134" x2="178" y2="134" stroke="#0ea5e9" stroke-width="2.5" opacity="0.5"/><line x1="385" y1="62" x2="385" y2="134" stroke="#0ea5e9" stroke-width="2.5" opacity="0.5"/><line x1="385" y1="62" x2="362" y2="62" stroke="#0ea5e9" stroke-width="2.5" opacity="0.5"/><line x1="385" y1="134" x2="362" y2="134" stroke="#0ea5e9" stroke-width="2.5" opacity="0.5"/><text x="270" y="175" text-anchor="middle" font-family="monospace" font-size="20" font-weight="bold" fill="#0ea5e9" opacity="0.92">FIFA 25</text><text x="270" y="190" text-anchor="middle" font-family="monospace" font-size="9" fill="#94a3b8" opacity="0.65">Sport • EA Sports</text></svg>`}
];

const grid = document.getElementById('jocuriGrid');
jocuri.forEach((j, i) => {
  const div = document.createElement('div');
  div.className = 'joc-card anim';
  div.innerHTML = `<div class="joc-img-wrap">${j.svg}<div class="joc-overlay"><span>Detalii ▸</span></div></div><div class="joc-body"><div class="joc-name">${j.name}</div><div class="joc-genre">${j.genre}</div><button class="btn-det" onclick="deschideModal(${i})">Detalii & Info</button></div>`;
  grid.appendChild(div);
});

const obs = new IntersectionObserver(entries => {
  entries.forEach((e, idx) => { if (e.isIntersecting) setTimeout(() => e.target.classList.add('vis'), idx * 70); });
}, { threshold: 0.08 });
document.querySelectorAll('.anim').forEach(el => obs.observe(el));

function deschideModal(i) {
  const j = jocuri[i];
  document.getElementById('modalImgWrap').innerHTML = j.svg;
  document.getElementById('mGenre').textContent = j.genre;
  document.getElementById('mTitle').textContent = j.name;
  document.getElementById('mDesc').innerHTML = j.desc + '<br><br><strong style="color:#22c55e">👥 ' + j.jucatori + '</strong>';
  document.getElementById('btnJoaca').onclick = () => { inchideModal(); toast('🎮 Ai rezervat o stație pentru ' + j.name + '!'); };
  document.getElementById('modalBG').classList.add('open');
}
function inchideModal() { document.getElementById('modalBG').classList.remove('open'); }
document.getElementById('modalBG').addEventListener('click', function(e) { if (e.target === this) inchideModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') inchideModal(); });
function selectTarif(n, p) { toast('✅ Ai selectat Tariful ' + n + ' — ' + p + '/oră!'); }
let tTimer;
function toast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(tTimer); tTimer = setTimeout(() => t.classList.remove('show'), 3500); }
function scrollLa(id) { document.getElementById(id).scrollIntoView({ behavior: 'smooth' }); }
function verificaStatus() { const h = new Date().getHours(), z = new Date().getDay(); let ok = z >= 1 && z <= 5 ? (h >= 10 && h < 23) : (h >= 9 || h < 2); const el = document.getElementById('statusAcum'); if (el) el.textContent = ok ? '🟢 Deschis' : '🔴 Închis'; }
verificaStatus();


// AUTH: Register / Log in + DATA/users.json
// Внешний вид сайта не изменён. Меняется только логика сохранения пользователей.
let usersFileHandle = null;
let usersCache = [];
let currentUser = null;

function updateAuthNav() {
  const nav = document.querySelector(".nav-links");
  if (!nav) return;

  const authButtons = document.querySelectorAll(".auth-link");
  const oldLogout = document.getElementById("logoutBtn");

  if (currentUser) {
    authButtons.forEach(btn => btn.style.display = "none");

    if (!oldLogout) {
      const logoutBtn = document.createElement("button");
      logoutBtn.id = "logoutBtn";
      logoutBtn.className = "nav-btn";
      logoutBtn.textContent = "Logout";
      logoutBtn.onclick = logoutUser;
      nav.appendChild(logoutBtn);
    }
  } else {
    authButtons.forEach(btn => btn.style.display = "");
    if (oldLogout) oldLogout.remove();
  }
}

function logoutUser() {
  currentUser = null;
  updateAuthNav();
  toast("Ai ieșit din cont.");
}

function setAuthMessage(text, type) {
  const msg = document.getElementById('authMessage');
  if (!msg) return;
  msg.textContent = text;
  msg.className = 'auth-message ' + (type || '');
}

function openAuth(mode) {
  const bg = document.getElementById('authBG');
  const reg = document.getElementById('registerForm');
  const log = document.getElementById('loginForm');
  const title = document.getElementById('authTitle');
  const modeText = document.getElementById('authModeText');
  if (!bg || !reg || !log) return;
  bg.classList.add('open');
  setAuthMessage('', '');
  if (mode === 'register') {
    reg.classList.add('active');
    log.classList.remove('active');
    title.textContent = 'Register';
    modeText.textContent = 'Creează cont nou';
  } else {
    log.classList.add('active');
    reg.classList.remove('active');
    title.textContent = 'Log in';
    modeText.textContent = 'Intră în cont';
  }
}
function closeAuth() { document.getElementById('authBG').classList.remove('open'); }
function isEmailValid(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function onlyDigits(text) { return /^\d+$/.test(text); }
function normalizeUsers(data) {
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.users)) return data.users;
  return [];
}
async function chooseUsersJsonFile() {
  if (!('showOpenFilePicker' in window)) {
    throw new Error('Browserul nu permite scriere directă în JSON. Folosește Chrome sau Edge.');
  }
  const [handle] = await window.showOpenFilePicker({
    multiple: false,
    types: [{ description: 'JSON users file', accept: { 'application/json': ['.json'] } }]
  });
  const permission = await handle.requestPermission({ mode: 'readwrite' });
  if (permission !== 'granted') throw new Error('Nu ai permis scrierea în users.json.');
  usersFileHandle = handle;
  return handle;
}
async function readUsers() {
  if (!usersFileHandle) await chooseUsersJsonFile();
  const file = await usersFileHandle.getFile();
  const text = await file.text();
  if (!text.trim()) { usersCache = []; return usersCache; }
  try {
    usersCache = normalizeUsers(JSON.parse(text));
    return usersCache;
  } catch (e) {
    throw new Error('Fișierul users.json nu conține JSON valid. Pune [] în el și încearcă iar.');
  }
}
async function saveUsers(users) {
  if (!usersFileHandle) await chooseUsersJsonFile();
  const writable = await usersFileHandle.createWritable();
  await writable.write(JSON.stringify(users, null, 2));
  await writable.close();
  usersCache = users;
}
function initAuth() {
  const registerForm = document.getElementById('registerForm');
  if (registerForm) registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = {
      name: document.getElementById('regName').value.trim(),
      surname: document.getElementById('regSurname').value.trim(),
      email: document.getElementById('regEmail').value.trim().toLowerCase(),
      phone: document.getElementById('regPhone').value.trim(),
      password: document.getElementById('regPassword').value,
      createdAt: new Date().toISOString()
    };
    const confirm = document.getElementById('regConfirm').value;
    if (!user.name || !user.surname || !user.email || !user.phone || !user.password || !confirm) return setAuthMessage('Completează toate câmpurile.', 'error');
    if (!isEmailValid(user.email)) return setAuthMessage('Email invalid.', 'error');
    if (!onlyDigits(user.phone)) return setAuthMessage('Telefonul trebuie să conțină doar cifre.', 'error');
    if (user.password.length < 8) return setAuthMessage('Parola trebuie să conțină minimum 8 caractere.', 'error');
    if (user.password !== confirm) return setAuthMessage('Confirmarea parolei nu coincide.', 'error');
    try {
      setAuthMessage('Alege fișierul DATA/users.json pentru salvare...', '');
      const users = await readUsers();
      if (users.some(u => u.email === user.email)) return setAuthMessage('Acest email este deja înregistrat.', 'error');
      users.push(user);
      await saveUsers(users);
      registerForm.reset();
      setAuthMessage('Cont creat cu succes! Datele au fost salvate în DATA/users.json.', 'success');
      toast('✅ Register reușit!');
    } catch (err) {
      setAuthMessage(err.message || 'Nu s-a putut salva în users.json.', 'error');
    }
  });
  const loginForm = document.getElementById('loginForm');
  if (loginForm) loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;
    if (!email || !password) return setAuthMessage('Completează emailul și parola.', 'error');
    try {
      setAuthMessage('Alege fișierul DATA/users.json pentru verificare...', '');
      const users = await readUsers();
      const user = users.find(u => u.email === email && u.password === password);
      if (!user) return setAuthMessage('Email sau parolă greșită.', 'error');
      currentUser = user;
      updateAuthNav();
      closeAuth();
      setAuthMessage('Logare reușită. Bine ai venit, ' + user.name + '!', 'success');
      toast('✅ Log in reușit, ' + user.name + '!');
    } catch (err) {
      setAuthMessage(err.message || 'Nu s-a putut citi users.json.', 'error');
    }
  });
  const authBG = document.getElementById('authBG');
  if (authBG) authBG.addEventListener('click', function(e) { if (e.target === this) closeAuth(); });
}
initAuth();
updateAuthNav();
