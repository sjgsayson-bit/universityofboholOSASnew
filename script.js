/* ============ SETTINGS (edit these) ============ */
/* Get a free access key at https://web3forms.com (type your email, the key arrives in your inbox) and paste it below */
const ACCESS_KEY = 'PASTE-YOUR-KEY-HERE';
const PHOTOS = {
  album:  { title: 'Our Album',   files: ['us1.jpg','us2.jpg','us3.jpg','us4.jpg','us5.jpg','us6.jpg'] },
  sunset: { title: 'Our Sunsets', files: ['sunset1.jpg','sunset2.jpg','sunset3.jpg','sunset4.jpg','sunset5.jpg','sunset6.jpg'] }
};
/* The letter notebook: each item is one sheet = [right page, left page after turning] */
const LETTER = [
  ['<h4>hi lovieeeee!!!</h4><p>I just want to tell you how proud I am to you lovieeeeee, because honestly po, if there is one person who deserves to hear those words over and over again, it is YOU.</p>',
   '<p>I wish you could see yourself through my eyes, even just for a moment, because maybe then you would understand why I am always so amazed by you. You are someone who continues to grow, to learn, to overcome challenges, and to show up even on days when things aren\'t easy.</p>'],
  ['<p>And I hope you never forget how wonderful that is lovieee okieeee.</p><p>I know that behind every achievement you celebrate po, there are countless moments that other people don\'t get to see. The exhaustion, the pressure, the sacrifices, the sleepless nights, the moments when you question yourself, and the times</p>',
   '<p>when you probably feel like you\'re not doing enough. I may not know every little battle you fight, but I want you to know that I see you. I see how hard you try (mo mata ug kadlawn just to finish study hoooo kapoya pero i am proud of youuu).</p>'],
  ['<p>I see how much effort you put into the things that matter to you. I see how you keep going despite everything, and I hope you give yourself the same appreciation that you so freely deserve lovieeeee.</p><p>Loviee, please never think that your achievements are too small to be celebrated</p>',
   '<p>okiee because that is not small. Whether it is something big that makes everyone notice you or a little victory that only you know about, I will always be here, clapping for you. Even when I am not physically beside you, please know that somewhere, someone is genuinely smiling because you made another step forward.</p>'],
  ['<p>That someone is me. I will always be one of the people cheering for you okieeee , celebrating your growth, and feeling proud of every little thing you accomplish. I don\'t need to be standing beside you on every stage to be proud of you.</p>',
   '<p>Even from a distance, I will always be your number one supporter proud of you loviee of becoming who you are right now i can really see your growth sad gyuddd proud of youu lovieee .I hope life gives you everything your heart has been quietly wishing for.</p>'],
  ['<p>I hope you receive opportunities that make you realize why all your hard work was worth it. I hope you find yourself in places you once only dreamed of being. I hope you meet people who appreciate your heart, recognize your efforts, and never make you question your worth.</p>',
   '<p>I hope you experience the kind of happiness that doesn\'t have to be explained, the kind of peace that makes you feel safe, and the kind of success that makes you look back and say, "I really made it gyud" lovieee layo pata pero padayon ta okieee.Because you deserve all of those things, loviee.</p>'],
  ['<p>You deserve good things without having to exhaust yourself just to prove that you are worthy of them. You deserve to be celebrated, appreciated, loved, and recognized. You deserve to receive the same kindness that you give to other people.</p>',
   '<p>And I hope you never settle for anything that makes you feel otherwise.If there are days when you feel like you are falling behind, I hope you remember that your journey doesn\'t have to look like anyone else\'s. You are allowed to take your time.</p>'],
  ['<p>You are allowed to rest. You are allowed to make mistakes, start over, and figure things out along the way. You don\'t always have to be strong, productive, or successful to make me proud. Even on your most ordinary days, even when you feel like you haven\'t accomplished anything, even when all you can do is</p>',
   '<p>get through the day, I am still proud of you. Your worth has never depended on how much you achieve po okieee laban ta diri kay immortal ta ay hehehe.</p><p>And please lovieeeeeeee, whenever life becomes too heavy, remember that you have a " ME /SAISAI" who will always be</p>'],
  ['<p>rooting for you OKIEEEEE. I may not have all the answers, and I may not always know the perfect words to say, but I will always be willing to listen. I will be here for your happiest stories, your random updates, your unexpected achievements, your breakdowns, and even the days when you don\'t feel like talking</p>',
   '<p>about anything. You don\'t have to pretend that everything is okay around me. You can be tired, vulnerable, emotional, and uncertain. You don\'t have to earn your place in my life by being okay all the time.I want to witness more of your victories lovieeeeeee.</p>'],
  ['<p>I want to hear about the opportunities you receive, the dreams you finally accomplish, and the places you get to explore. I want to be there when you achieve something you once thought was impossible. I want to hear you talk excitedly about something you worked so hard for.</p>',
   '<p>And when those moments come, I hope you remember that I was already proud of you long before the world started recognizing what you are capable of.</p><p>One day, when you look back at everything you have gone through, I hope you smile at the person you have become loviee</p>'],
  ['<p>the old yanieee is improving and doing more amazing rightnowww . I hope you realize that every difficult day, every sacrifice, every tear, and every little step brought you closer to the life you deserve. And if ever you forget how far you\'ve come, I will gladly remind you.</p>',
   '<p>I will remind you of how brave you were, how much you grew, and how many times you managed to keep going even when things weren\'t easy.</p><p>I also want to thank you for being someone I get to call my lovieeee.</p>'],
  ['<p>Out of all the people I could have met in this world, I am genuinely grateful that our paths crossed. I hope you know that your existence means so much to me. You are not just someone I share stories and laughter with.</p>',
   '<p>You are someone whose happiness genuinely matters to me. Your victories feel like my victories, and your happiness is something I will always wish for, even in moments when I cannot be there to witness it myself we may have mis understanding po also lovieee I don\'t think there will ever be enough words to explain</p>'],
  ['<p>how much I love and appreciate you. Sometimes, I wish I could gather every little feeling in my heart and let you see it, because saying "I love you" feels so small compared to everything I actually feel. I love you for who you are, for the person you are becoming, for your little victories, for</p>',
   '<p>your imperfections, and for all the beautiful things that make you YOU. I hope you never doubt that po. keep going, my lovieeee. Keep dreaming, keep learning, keep trying, and keep believing in yourself. But please don\'t forget to take care of yourself along the way.</p>'],
  ['<p>You don\'t have to rush your life just to reach somewhere. There is no deadline for becoming the person you want to be. I hope you enjoy the little moments, too, because you deserve a beautiful life, not just a successful one.And wherever life takes us powwww , whatever changes happen, and no matter how busy</p>',
   '<p>our own worlds become, I hope you always know that I am here, cheering for you. Even in the quietest moments, even when I don\'t get to say it every day, I am always wishing the best for you. I will always be that best friend who smiles whenever your name comes up because I know</p>'],
  ['<p>how lucky I am to have you in my life.I AM SO, SO, SO PROUD OF YOU, LOVIEEEEE. You deserve the whole universe and every beautiful thing this life has to offer. I hope life is gentle with you. I hope your dreams find their way to you.</p>',
   '<p>I hope every prayer whispered in</p><p>And loviee, I know that we are not perfect. We may have misunderstandings, disagreements, and moments when we fail to understand each other. There may be times when things don\'t go the way we expect them to, when words are misunderstood, or when we</p>'],
  ['<p>unintentionally hurt each other. But I hope you never let those moments make you question how much you mean to me. Please always remember that no matter how many misunderstandings we may encounter, I will always choose to understand you.</p>',
   '<p>I will always try to see things from your perspective, listen to your side, and understand the things you sometimes find difficult to explain. I don\'t expect us to get everything right all the time because we are both human, and we are both still learning.</p>'],
  ['<p>What matters to me is that we never forget the love, care, and 4yrs of friendship that we have built po okieee .I want you to know that you don\'t have to be afraid of having bad days with me lvoieeee .</p>',
   '<p>You don\'t have to worry that one misunderstanding will suddenly erase everything we have shared. I don\'t want you to feel that you have to be okay all the time just to keep me around. Even when things become complicated, even when we don\'t immediately understand each other, and even when life gets in the way,</p>'],
  ['<p>I am still here. I will always make room for understanding, patience, and forgiveness because you are someone I don\'t want to give up on easily okieeeeee dugay nako sige ingon ani po okieee as you can see loviee one communication to us we will be oky together its because of the communication we tend to</p>',
   '<p>understand each other and talk about it dont be scared lovieee you can trust me po na I will understand you okieeeee</p><p>Just like what I have always said, no matter what happens, I am here.</p>'],
  ['<p>Not only during your happiest moments, not only when everything is going well, and not only when you have achievements worth celebrating. I am here even during the days when you feel lost, when you are tired of everything, when you don\'t know what to do, and when you simply need someone to sit beside you</p>',
   '<p>without saying a single word. I am here through the good days and the difficult ones. You don\'t have to face everything alone, loviee.I always remind you of that lovieeee</p><p>I love you as you are lovieeee, including the parts of you that are still healing, growing, and figuring life</p>'],
  ['<p>out. I hope you give me the chance to understand you even when you cannot find the right words to explain yourself. I promise that I will always try. Because our friendship means so much more to me than a few difficult moments.</p>',
   '<p>I would rather learn how to understand you better than allow a misunderstanding to make us strangers.</p><p>No matter how many times life tests our friendship po, I hope you never forget that you have someone who will always choose to understand you, someone who will always pray for you,</p>'],
  ['<p>and someone who will always be here cheering for you. I am not promising that everything will always be perfect between us, but I am promising that you will always have a friend who genuinely wishes for your happiness and wants to see you win.</p>',
   '<p>I am here, loviee. I always have been, and I always will be.</p><p>I LOVE YOU SO MUCH, MY LOVIEEEEEE. YOU DESERVE IT ALL.</p><p class="sign">yours truly saisai</p>']
];
/* Photos go inside a folder called "photos". Music file (optional): music.mp3 */
/* ================================================ */

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const opened = new Set();

/* falling petals */
for (let i = 0; i < 14; i++) {
  const p = document.createElement('span');
  p.className = 'petal';
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDuration = 9 + Math.random() * 9 + 's';
  p.style.animationDelay = -Math.random() * 12 + 's';
  p.style.opacity = .3 + Math.random() * .5;
  $('#petals').appendChild(p);
}

/* open / close overlays */
function show(id) { $('#' + id).classList.remove('hidden'); }
function hideAll() { $$('.overlay').forEach(o => o.classList.add('hidden')); }
$$('[data-close]').forEach(b => b.addEventListener('click', hideAll));

$$('.card').forEach(card => card.addEventListener('click', () => {
  const key = card.dataset.open;
  show('viewer'); buildBook(key);
  opened.add(key);
  card.classList.add('done');
  if (opened.size === 3) {
    $('#msgBtn').classList.remove('hidden');
    $('#hint').textContent = 'You opened everything';
  }
}));

/* flip book */
function ph(i) {
  const d = document.createElement('div');
  d.className = 'ph';
  d.textContent = 'Add photo ' + (i + 1);
  return d;
}
function buildBook(key) {
  const isNote = key === 'letter';
  const set = isNote ? { title: 'A Letter For You' } : PHOTOS[key], book = $('#book');
  const n = isNote ? LETTER.length : set.files.length;
  $('#viewerTitle').textContent = set.title;
  book.className = 'book' + (isNote ? ' note' : '');
  book.innerHTML = isNote
    ? '<div class="pg l">My letter to you</div><div class="pg r">Always yours</div><div class="rings"></div>'
    : '<div class="pg l">Our memories</div><div class="pg r">The end</div>';
  let cur = 0, lock = false;
  const face = (i, cls) => {
    const d = document.createElement('div');
    d.className = 'face ' + cls;
    if (isNote) { d.classList.add('note'); d.innerHTML = LETTER[i][cls === 'front' ? 0 : 1]; return d; }
    const img = new Image();
    img.alt = set.title + ' ' + (i + 1); img.draggable = false;
    let tried = 0;
    img.onerror = () => { if (tried++ === 0) img.src = set.files[i]; else img.replaceWith(ph(i)); };
    img.src = 'photos/' + set.files[i];
    d.appendChild(img);
    return d;
  };
  const leaves = Array.from({ length: n }, (_, i) => {
    const l = document.createElement('div');
    l.className = 'leaf';
    l.style.zIndex = n - i + 10;
    l.append(face(i, 'front'), face(i, 'back'));   /* the same photo lands on the left after the turn */
    book.appendChild(l);
    return l;
  });
  if (isNote) book.querySelectorAll('.face.note').forEach(f => {
    let s = 2.9;
    while (f.scrollHeight > f.clientHeight + 1 && s > 1.6) { s -= .1; f.style.fontSize = s + 'cqw'; }
  });
  const count = () => $('#count').textContent = cur === 0 ? 'Swipe to open' : cur + ' of ' + n;
  const go = d => {
    if (lock) return;
    if (d > 0 && cur < n) {
      const i = cur, l = leaves[i]; lock = true;
      l.style.zIndex = 100; l.classList.add('flipped'); cur++;
      setTimeout(() => { l.style.zIndex = i + 10; }, 1100);
    } else if (d < 0 && cur > 0) {
      cur--; const i = cur, l = leaves[i]; lock = true;
      l.style.zIndex = 100; l.classList.remove('flipped');
      setTimeout(() => { l.style.zIndex = n - i + 10; }, 1100);
    } else return;
    setTimeout(() => { lock = false; }, 650);
    count();
  };
  count();
  let x0 = null;
  book.onpointerdown = e => { x0 = e.clientX; };
  book.onpointerup = e => {
    if (x0 === null) return;
    const dx = e.clientX - x0; x0 = null;
    if (Math.abs(dx) > 35) go(dx < 0 ? 1 : -1);
    else { const r = book.getBoundingClientRect(); go(e.clientX > r.left + r.width / 2 ? 1 : -1); }
  };
  book.onpointercancel = () => { x0 = null; };
}

/* background music: uses music.mp3 if present, otherwise a soft built-in melody */
const mp3 = new Audio('music.mp3'); mp3.loop = true; mp3.volume = .5;
let ac, timer, step = 0, on = false, useSynth = false;
const NOTES = [261.63, 329.63, 392, 440, 523.25, 440, 392, 329.63];
function tone(f, t) {
  const o = ac.createOscillator(), g = ac.createGain();
  o.type = 'sine'; o.frequency.value = f;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(.07, t + .05);
  g.gain.exponentialRampToValueAtTime(.0001, t + 2.4);
  o.connect(g); g.connect(ac.destination);
  o.start(t); o.stop(t + 2.5);
}
function synthLoop() {
  const t = ac.currentTime, f = NOTES[step % 8];
  tone(f, t);
  if (step % 4 === 0) tone(f / 2, t);
  step++;
  timer = setTimeout(synthLoop, 750);
}
function startMusic() {
  if (on) return;
  on = true; $('#music').classList.add('on');
  mp3.play().catch(() => {
    if (mp3.error) {                    /* music.mp3 really missing: use the backup melody */
      useSynth = true;
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      ac.resume(); synthLoop();
    } else {                            /* browser blocked autoplay: wait for the first tap */
      on = false; $('#music').classList.remove('on');
    }
  });
}
function stopMusic() {
  on = false; userStopped = true; $('#music').classList.remove('on');
  mp3.pause(); clearTimeout(timer);
  if (ac) ac.suspend();
}
let userStopped = false;
/* try to play as soon as the page opens; browsers often block this, so also start on the very first touch/click/key */
startMusic();
['pointerup', 'touchend', 'click', 'keydown'].forEach(ev =>
  document.addEventListener(ev, () => { if (!on && !userStopped) startMusic(); }, { capture: true }));
['pointerup', 'touchend'].forEach(ev => $('#music').addEventListener(ev, e => e.stopPropagation()));
$('#music').addEventListener('click', e => { e.stopPropagation(); on ? stopMusic() : (userStopped = false, startMusic()); });

/* message form */
$('#msgBtn').addEventListener('click', () => show('msgBox'));
$('#msgForm').addEventListener('submit', async e => {
  e.preventDefault();
  const text = $('#msgText').value.trim();
  if (!text) return;
  const btn = $('#sendBtn'); btn.disabled = true; btn.textContent = 'Sending…';
  const err = $('#msgErr'); err.textContent = '';
  let ok = false;
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: ACCESS_KEY, subject: 'New message from your website', from_name: 'Your website', message: text })
    });
    const data = await res.json().catch(() => ({}));
    ok = res.ok && String(data.success) !== 'false';
  } catch (e) { console.error(e); }
  btn.disabled = false; btn.textContent = 'Send';
  if (!ok) {
    err.textContent = "Oops, your message didn't send. Please check your internet and try again. Your words are still here.";
    return;
  }
  $('#msgText').value = '';
  hideAll();
  showTulips();
});

/* purple tulips */
function showTulips() {
  const box = $('#tulips'); box.innerHTML = '';
  const count = innerWidth < 600 ? 7 : 11;
  for (let i = 0; i < count; i++) {
    const h = 38 + Math.random() * 62;
    const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', '0 0 100 260');
    s.style.height = h + '%';
    s.style.setProperty('--r', (Math.random() * 12 - 6) + 'deg');
    s.style.animationDelay = (i * .18) + 's';
    s.innerHTML = '<use href="#tulip"/>';
    box.appendChild(s);
  }
  $('#ending').classList.remove('hidden');
}
