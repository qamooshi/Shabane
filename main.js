
/* ================= JavaScript کامل ================= */

/* ----------- Videos object (همان ساختار کامل تو) ----------- */
const videos = {
    intro: { src:"videos/intro.mp4", loop:"videos/intro-loop.mp4", choices:[{text:"بزن بیرون", next:"goout"},{text:"برو به یخچال", next:"yakhchal"}]},
    goout: { src:"videos/goout.mp4", loop:"videos/goout-loop.mp4", choices:[{text:"کمکش کن", next:"help"},{text:"بیخیال شو", next:"noway"}]},
    noway: { src:"videos/noway.mp4", loop:null, choices:[{text:"شروع دوباره", next:"intro"},{text:"برگرد و کمکش کن", next:"BackHelp"}]},
    help: { src:"videos/help.mp4", loop:"videos/help-loop.mp4", choices:[{text:"از کفگیر کمک بگیر", next:"nejat"},{text:"قابلمه رو خالی کن تو سینک", next:"ghablame"}]},
    nejat: { src:"videos/nejat.mp4", loop:"videos/nejat-loop.mp4", choices:[{text:"برو به تراس", next:"gosleep"},{text:"تخم مرغ رو بخور", next:"eatit"}]},
    gosleep: { src:"videos/gosleep.mp4",loop:null, choices:[{text:"شروع دوباره", next:"intro"},{text:"برگرد و تخم مرغ رو بخور", next:"BackEatit"}]},
    eatit: { src:"videos/eatit.mp4",loop:null, choices:[{text:"شروع دوباره", next:"intro"},{text:"برگرد و برو به تراس", next:"BackGosleep"}]},
    ghablame: { src:"videos/ghablame.mp4",loop:"videos/help-loop.mp4", choices:[{text:"از کفگیر کمک بگیر", next:"nejat"},{text:"قابلمه رو خالی کن تو سینک", next:"ghablame"}]},
    yakhchal: { src:"videos/yakhchal.mp4", loop:"videos/yakhchal-loop.mp4", choices:[{text:"کاغذ", next:"kaghaz"},{text:"قیچی", next:"gheychi"},{text:"سنگ", next:"sang"}]},
    sang: { src:"videos/sang.mp4", loop:"videos/sang-loop.mp4", choices:[{text:"در یخچالو ببند", next:"goiphonesang"},{text:"برگرد پایین جلو در", next:"s0"}]},
    gheychi: { src:"videos/gheychi.mp4", loop:"videos/gheychi-loop.mp4", choices:[{text:"در یخچالو ببند", next:"goiphonegheychi"},{text:"برگرد پایین جلو در", next:"g0"}]},
    kaghaz: { src:"videos/kaghaz.mp4", loop:"videos/kaghaz-loop.mp4", choices:[{text:"در یخچالو ببند", next:"goiphonekaghaz"},{text:"برگرد پایین جلو در", next:"k0"}]},
    s0: { src:"videos/s0.mp4", loop:"videos/godown-loop.mp4", choices:[]},
    g0: { src:"videos/g0.mp4", loop:"videos/godown-loop.mp4", choices:[]},
    k0: { src:"videos/k0.mp4", loop:"videos/godown-loop.mp4", choices:[]},
    goiphonesang: { src:"videos/goiphonesang.mp4", loop:"videos/goiphone-loop.mp4", choices:[{text:"دروبازکن", next:"brokendoor"},{text:"برو پایین غذارو بگیر", next:"godown"}]},
    goiphonegheychi: { src:"videos/goiphonegheychi.mp4", loop:"videos/goiphone-loop.mp4", choices:[{text:"دروبازکن", next:"brokendoor"},{text:"برو پایین غذارو بگیر", next:"godown"}]},
    goiphonekaghaz: { src:"videos/goiphonekaghaz.mp4", loop:"videos/goiphone-loop.mp4", choices:[{text:"دروبازکن", next:"brokendoor"},{text:"برو پایین غذارو بگیر", next:"godown"}]},
    brokendoor: { src:"videos/brokendoor.mp4", loop:"videos/goiphone-loop.mp4", choices:[{text:" دوباره دروبازکن", next:"brokendoor"},{text:"برو پایین غذارو بگیر", next:"godown"},{text:"بیخیال شو ", next:"bikhiyal"}]},
    godown: { src:"videos/godown.mp4", loop:"videos/godown-loop.mp4", choices:[]},
    bikhiyal: { src:"videos/bikhiyal.mp4", loop:"videos/goout-loop.mp4", choices:[{text:"کمکش کن", next:"help"},{text:"بیخیال شو", next:"noway"}]},
    showsang: { src:"videos/showsang.mp4", loop:null, choices:[{text:"شروع دوباره", next:"intro"},{text:"برگرد به یخچال", next:"yakhchalend"}]},
    showgheychi: { src:"videos/showgheychi.mp4", loop:null, choices:[{text:"شروع دوباره", next:"intro"},{text:"برگرد به یخچال", next:"yakhchalend"}]},
    showkaghaz: { src:"videos/showkaghaz.mp4", loop:null, choices:[{text:"شروع دوباره", next:"intro"},{text:"برگرد به یخچال", next:"yakhchalend"}]},
    yakhchalend: {src:"videos/yakhchalend.mp4", loop:"videos/yakhchal-loop.mp4", choices:[{text:"کاغذ", next:"kaghaz"},{text:"قیچی", next:"gheychi"},{text:"سنگ", next:"sang"}]},
    BackHelp: { src:"videos/BackHelp.mp4", loop:"videos/help-loop.mp4", choices:[{text:"از کفگیر کمک بگیر", next:"nejat"},{text:"قابلمه رو خالی کن تو سینک", next:"ghablame"}]},
    BackEatit: { src:"videos/BackEatit.mp4",loop:null, choices:[{text:"شروع دوباره", next:"intro"}]},
    BackGosleep: { src:"videos/BackGosleep.mp4",loop:null, choices:[{text:"شروع دوباره", next:"intro"}]}
};

/* ----------- DOM elements ----------- */
const loadingScreen = document.getElementById('loading-screen');
const progressFill = document.getElementById('progressFill');
const loadingDetail = document.getElementById('loadingDetail');


const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const startBg = document.getElementById('startBg');
const fadeOverlay = document.getElementById('fadeOverlay');

const playerDiv = document.getElementById('player');
const video1 = document.getElementById('videoPlayer1');
const video2 = document.getElementById('videoPlayer2');
const loopVideo = document.getElementById('loopVideo');
const choicesDiv = document.getElementById('choices');
const overlayText = document.getElementById('overlayText');
const inventoryBtn = document.getElementById('inventoryBtn');
const inventoryModal = document.getElementById('inventoryModal');
const pocketImg = document.getElementById('pocketImg');
const itemInPocket = document.getElementById('itemInPocket');
function attachEarlyLoopListener(videoEl){
    videoEl.addEventListener('timeupdate', () => {
        const data = videos[currentVideo];
        if(!data || !data.loop) return;

        // اگر کمتر از 0.4 ثانیه مونده
        if(videoEl.duration && (videoEl.duration - videoEl.currentTime) < 0.7){
            prepareLoopEarly(data.loop);
        }
    });
}

attachEarlyLoopListener(video1);
attachEarlyLoopListener(video2);

let activeVideo = video1;
let inactiveVideo = video2;
let currentVideo = 'intro';

let selectedItem = null;
let visitedYakhchalend = false;

/* ----------- Preload strategy configuration ----------- */
// کلیدهایی که برای شروع فوری لازم می‌دونی اینجا بذار.

const initialEssentialKeys = ['intro','intro-loop','goout','goout-loop','yakhchal','yakhchal-loop']; // می‌تونی اینجا کلیدهای ضروری رو زیاد کنی
const startBgCandidates = ["videos/start1.mp4","videos/start2.mp4","videos/start3.mp4"];

const videoBlobs = {}; // originalURL -> blobObjectURL
const failedURLs = new Set();
let preloadCanceled = false;

const START_BTN_DELAY = 2000;

startBtn.addEventListener('click', () => {
  startBtn.classList.add('selected');
});

function prepareLoopEarly(loopSrc){
    if(!loopSrc) return;

    const src = getSrcOrBlob(loopSrc);

    // اگر همین لوپ قبلاً آماده شده، کاری نکن
    if(loopVideo.src === src) return;

    loopVideo.src = src;
    loopVideo.currentTime = 0;
    loopVideo.loop = true;
    loopVideo.muted = true;        // مهم
    loopVideo.style.opacity = 0;   // مخفی
    loopVideo.load();

    loopVideo.play().catch(()=>{});
}


/* ----------- Utility: collect urls ----------- */
function collectAllVideoURLs(){
    const set = new Set();
    Object.values(videos).forEach(v=>{
        if(v.src) set.add(v.src);
        if(v.loop) set.add(v.loop);
    });
    // همچنین startBgCandidates ممکن است در مجموعه باشند؛ اضافه‌اشون نکنیم اینجا (برای پس-پرید)
    return Array.from(set);
}
function collectInitialURLs(){
    const set = new Set();
    initialEssentialKeys.forEach(k=>{
        if(videos[k]){
            if(videos[k].src) set.add(videos[k].src);
            if(videos[k].loop) set.add(videos[k].loop);
        }
    });
       return Array.from(set);
}


// ----------- Helper: Play/Load Start Background Video -----------
let startBgLoadedPromise = null;

function loadStartBackground(){
    if(startBgLoadedPromise) return startBgLoadedPromise;
    
    const candidate = startBgCandidates[Math.floor(Math.random() * startBgCandidates.length)];
    const url = candidate || '';
    
    // لود با Promise (مثل preloadInitial اما فقط برای یک فایل)
    startBgLoadedPromise = new Promise(async (resolve) => {
        try {
            const resp = await fetch(url);
            if(!resp.ok) throw new Error('HTTP ' + resp.status);
            const blob = await resp.blob();
            videoBlobs[url] = URL.createObjectURL(blob);
            startBg.src = videoBlobs[url]; // سورس را روی blob ست کن
            startBg.currentTime = 0;
            startBg.loop = true;
            // منتظر canplaythrough می‌مانیم تا آماده پخش باشد
            startBg.addEventListener('canplaythrough', resolve, { once: true });
            startBg.play().catch(e => {
                console.warn('startBg.play failed - will attempt to resolve after load', e);
                resolve(); // اگر پلی نشد، حداقل Resolve کنیم
            });
        } catch(e) {
            console.error('loadStartBackground error', e);
            startBg.src = url; // Fallback به سورس اصلی
            startBg.currentTime = 0;
            startBg.loop = true;
            startBg.play().catch(e => { console.warn('startBg fallback play failed', e); resolve(); });
            resolve();
        }
    });
    return startBgLoadedPromise;
}

/* ----------- Preload initial (smooth + streaming + simulated filler) ----------- */
async function preloadInitial(timeoutPerFile = 7000){
    const urls = collectInitialURLs();
    const total = urls.length;
    if(total === 0) return;
    loadingDetail.innerText = `دانلود اولیه ${total} فایل ضروری...`;
    progressFill.style.width = '0%';

    // نمایش تدریجی شبیه‌سازی‌شده تا زمانی که دانلود واقعاً پیشرفت کند
    let displayed = 0;
    let simCap = Math.min(85, 50 + Math.round(total * 8)); // حد شبیه‌سازی مانع رسیدن به 100 تا قبل از تمام شدن واقعی میشه
    let simTimer = setInterval(()=>{
        // افزایش آرام و طبیعی
        if(displayed < simCap){
            displayed += (Math.random() * 1.2) + 0.4; // گام تصادفی کوچک
            if(displayed > simCap) displayed = simCap;
            progressFill.style.width = Math.floor(displayed) + '%';
        }
    }, 180);

    let done = 0;

    // helper: امن کردن نمایش درصد تا همیشه افزایشی باشه
    function setDisplayedPct(pct){
        if(pct < displayed) return;
        displayed = pct;
        progressFill.style.width = Math.round(displayed) + '%';
    }

    const tasks = urls.map(url => (async () => {
        if(preloadCanceled) return;
        const baseDone = done; // فایل‌های کامل‌شده قبل از این فایل
        try {
            const controller = new AbortController();
            const id = setTimeout(()=>controller.abort(), timeoutPerFile);
            const resp = await fetch(url, { signal: controller.signal });
            clearTimeout(id);
            if(!resp.ok) throw new Error('HTTP ' + resp.status);

            // اگر هدر محتوا را داریم و بدنۀ پاسخ streamable است — سعی می‌کنیم پیشرفت لحظه‌ای نشان بدیم
            const contentLength = resp.headers.get('content-length') || resp.headers.get('Content-Length');
            if(resp.body && contentLength){
                const totalBytes = parseInt(contentLength, 10);
                const reader = resp.body.getReader();
                const chunks = [];
                let received = 0;
                while(true){
                    const { done: rDone, value } = await reader.read();
                    if(rDone) break;
                    chunks.push(value);
                    // value.byteLength در اغلب مرورگرها موجوده
                    received += (value && value.byteLength) ? value.byteLength : value.length || 0;
                    // درصد کلی = (فایل‌های کامل + بخش فعلی فایل) / totalFiles
                    const fileProgress = Math.min(1, received / totalBytes);
                    const overallPct = Math.round(((baseDone + fileProgress) / total) * 100);
                    setDisplayedPct(overallPct);
                    loadingDetail.innerText = `دانلود اولیه: ${overallPct}% — فایل ${baseDone + 1} از ${total}`;
                }
                // ساخت blob از chunkها
                const blob = new Blob(chunks);
                videoBlobs[url] = URL.createObjectURL(blob);
            } else {
                // fallback ساده: blob کامل (نمی‌شه progress لحظه‌ای گرفت)
                const blob = await resp.blob();
                videoBlobs[url] = URL.createObjectURL(blob);
            }
        } catch(err){
            console.warn('initial preload error for', url, err);
            failedURLs.add(url);
        } finally {
            done++;
            // درصد واقعی بر اساس فایل‌های کامل
            const pct = Math.round((done / total) * 100);
            setDisplayedPct(pct);
            loadingDetail.innerText = `دانلود اولیه: ${pct}% — فایل ${done} از ${total}`;
        }
    })());

    // منتظر بمان تا همه فایل‌ها تمام شود
    await Promise.all(tasks);

    // تموم شد: قطع شبیه‌سازی و رسیدن به 100%
    clearInterval(simTimer);
    // اگر هنوز less than 100، پرش نرم تا 100
    const finalPct = 100;
    // یک انیمیشن ساده برای تکمیل
    let cur = parseFloat(progressFill.style.width) || 0;
    const finishDelta = setInterval(()=>{
        cur += Math.max(0.8, (finalPct - cur) * 0.08);
        if(cur >= finalPct - 0.5){
            progressFill.style.width = '100%';
            clearInterval(finishDelta);
            loadingDetail.innerText = `دانلود اولیه: 100% — آماده‌سازی کامل`;
        } else {
            progressFill.style.width = Math.round(cur) + '%';
        }
    }, 90);

    // خیلی سریع release memory hint (اختیاری)
    await new Promise(r=>setTimeout(r, 120)); // کمی مکث برای احساس smooth
}

/* ----------- Background preload remaining (concurrency-limited) ----------- */
async function backgroundPreloadRemaining(concurrency = 3, onProgress){
    const all = collectAllVideoURLs();
    const initialSet = new Set(collectInitialURLs());
    const remaining = all.filter(u => !initialSet.has(u));
    const total = remaining.length;
    if(total === 0){
        if(onProgress) onProgress(1,1);
        return;
    }

    let completed = 0;
    let idx = 0;

    async function worker(){
        while(true){
            if(preloadCanceled) break;
            const i = idx++;
            if(i >= total) break;
            const url = remaining[i];
            if(videoBlobs[url] || failedURLs.has(url)){
                completed++;
                if(onProgress) onProgress(completed, total);
                continue;
            }
            try {
                const resp = await fetch(url);
                if(!resp.ok) throw new Error('HTTP ' + resp.status);
                const blob = await resp.blob();
                videoBlobs[url] = URL.createObjectURL(blob);
            } catch(err){
                console.warn('background preload failed for', url, err);
                failedURLs.add(url);
            } finally {
                completed++;
                if(onProgress) onProgress(completed, total);
            }
        }
    }

    const workers = [];
    for(let i=0;i<concurrency;i++) workers.push(worker());
    await Promise.all(workers);
}

/* ----------- Helper: get blob URL or fallback original ----------- */
function getSrcOrBlob(url){
    return videoBlobs[url] || url;
}

/* ----------- Play / swap logic (همان رویکرد قبلی با swap آنی) ----------- */
function stopLoop(){
    try { loopVideo.pause(); } catch(e){}
    try { loopVideo.currentTime = 0; } catch(e){}
    loopVideo.src = "";
    loopVideo.style.opacity = 0;
}

// playVideo now accepts an options object: { hideChoicesNow: true/false }
// default keeps previous behavior (hide choices immediately)
function playVideo(key, options = { hideChoicesNow: true }) {
    stopLoop();
    currentVideo = key;

    // وقتی وارد yakhchalend شد، آیتم پاک شود (مثل منطق قبلی)
    if (key === 'yakhchalend') {
        selectedItem = null;
        updateInventoryDisplay();
        visitedYakhchalend = true;
    }

    const desiredSrc = getSrcOrBlob(videos[key].src);
    inactiveVideo.src = desiredSrc;
    try { inactiveVideo.currentTime = 0; } catch(e){}
    inactiveVideo.muted = false;
    inactiveVideo.style.opacity = 0;
    inactiveVideo.load();

    const doSwap = () => {
        try { inactiveVideo.oncanplaythrough = null; } catch(e){}
        inactiveVideo.style.transition = "opacity 0.25s ease";
        activeVideo.style.transition = "opacity 0.25s ease";
        inactiveVideo.play().catch(()=>{});
        inactiveVideo.style.opacity = 1;
        activeVideo.style.opacity = 0;
        [activeVideo, inactiveVideo] = [inactiveVideo, activeVideo];
    };

    if (inactiveVideo.readyState >= 3) {
        doSwap();
    } else {
        inactiveVideo.oncanplaythrough = () => { doSwap(); };
        inactiveVideo.play().catch(()=>{});
    }

    // فقط در صورت گزینهٔ hideChoicesNow=true دکمه‌ها بلافاصله مخفی شوند.
    if (options.hideChoicesNow !== false) {
        hideChoices();
    }
    overlayText.classList.remove('show');
}

/* ----------- Choices building (همان منطق) ----------- */
function updateInventoryDisplay(){
    if(selectedItem){
        itemInPocket.src = `images/${selectedItem}.png`;
        itemInPocket.style.display = 'block';
    } else {
        itemInPocket.src = '';
        itemInPocket.style.display = 'none';
    }
}
function clearInventoryModal(){
    inventoryModal.style.display = 'none';
    pocketImg.style.display = 'none';
}
function hideAllChoiceBtns(){
    const allBtns = Array.from(choicesDiv.querySelectorAll('button'));
    allBtns.forEach(b => b.classList.add('hide'));
    setTimeout(()=>{ choicesDiv.innerHTML = ''; }, 400);
}
function hideChoices(){ choicesDiv.classList.add('hidden'); }
function startLoop(src){
    if(!src) return;
    const blobSrc = getSrcOrBlob(src);
    loopVideo.src = blobSrc;
    loopVideo.currentTime = 0;
    loopVideo.loop = true;
    loopVideo.style.opacity = 1;
    loopVideo.play().catch(()=>{});
}
function showOverlayText(text){
    overlayText.innerText = text;
    overlayText.classList.add('show');
}
function showChoices(key){
    choicesDiv.innerHTML = '';
    if (!videos[key] || !videos[key].choices || videos[key].choices.length === 0) {
        choicesDiv.classList.add('hidden');
        return;
    }

    videos[key].choices.forEach(choice => {
        const isGoDownDoor = ['s0','g0','k0'].includes(choice.next);
        if (isGoDownDoor && !visitedYakhchalend) return;

        const btn = document.createElement('button');
        btn.classList.add('choice-btn');
    // دکمه‌هایی که همیشه قرمز باشن (مثلاً "کمکش کن" و "کاغذ")
    const alwaysRedTexts = ["برگرد به یخچال", "برگرد پایین جلو در" , "برگرد و کمکش کن" , "برگرد و برو به تراس" , "برگرد و تخم مرغ رو بخور"];
    if (alwaysRedTexts.includes(choice.text)) {
        btn.classList.add('red-glow');
    }

        if (choice.text === "شروع دوباره") {
            btn.classList.add('restart-btn');
          btn.innerHTML = `
       <span style="display:inline-flex;align-items:center;gap:6px;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;display:block;">
        <path d="M21 12a9 9 0 1 1-2.6-6.1"></path>
        <polyline points="21 3 21 9 15 9"></polyline>
      </svg>
      <span>شروع دوباره</span>
    </span>
  `;

        } else {
            btn.innerText = choice.text;
        }

        // handler common: play immediately, show selected animation, then hide buttons slightly later
        const animationMs = 150; // مقدار انیمیشن در CSS (0.15s)
        const hideDelay = animationMs + 25; // یه مقدار کوچک بیشتر از طول انیمیشن

        if (choice.next === 'yakhchalend') {
            btn.addEventListener('click', () => {
                btn.classList.add('selected');
                // اعمال منطق قبل از پلی
                selectedItem = null;
                updateInventoryDisplay();
                visitedYakhchalend = true;
                // پلی بلافاصله ولی نخواستیم دکمه‌ها همین لحظه حذف شن
                playVideo(choice.next, { hideChoicesNow: false });
                setTimeout(()=> { hideAllChoiceBtns(); }, hideDelay);
            });
        } else if ((key === 'yakhchal' || key === 'yakhchalend') && ["sang","gheychi","kaghaz"].includes(choice.next)) {
            btn.addEventListener('click', () => {
                btn.classList.add('selected');
                // انتخاب آیتم در inventory
                selectedItem = choice.next === "sang" ? "stone" : choice.next === "gheychi" ? "scissors" : "paper";
                updateInventoryDisplay();
                // پلی بلافاصله اما نگه داشتن دکمه‌ها برای دیدن انیمیشن
                playVideo(choice.next, { hideChoicesNow: false });
                setTimeout(()=> { hideAllChoiceBtns(); }, hideDelay);
            });
        } else {
            btn.addEventListener('click', () => {
                btn.classList.add('selected');
                if (choice.text === "شروع دوباره") {
                    selectedItem = null;
                    updateInventoryDisplay();
                    visitedYakhchalend = false;
                }
                // پلی بلافاصله اما نگه داشتن دکمه‌ها برای دیدن انیمیشن
                playVideo(choice.next, { hideChoicesNow: false });
                setTimeout(()=> { hideAllChoiceBtns(); }, hideDelay);
            });
        }

        choicesDiv.appendChild(btn);
    });

    if (choicesDiv.children.length === 0) choicesDiv.classList.add('hidden'); else choicesDiv.classList.remove('hidden');
}

/* ----------- onVideoEnd (همان منطق قبلی) ----------- */
function onVideoEnd(){
    if(videos[currentVideo]?.text) showOverlayText(videos[currentVideo].text);
     if(videos[currentVideo]?.loop){
        loopVideo.muted = false;      // صدا آزاد میشه
        loopVideo.style.opacity = 1;  // فقط ظاهر میشه
    } else {
        stopLoop();
    }

    showChoices(currentVideo);
    inventoryBtn.style.display = (currentVideo === 'godown' || currentVideo === 's0' || currentVideo === 'k0' || currentVideo === 'g0' ) ? 'block' : 'none';
}
video1.addEventListener('ended', ()=>onVideoEnd());
video2.addEventListener('ended', ()=>onVideoEnd());

/* ----------- Inventory handlers ----------- */
inventoryBtn.onclick = () => {
    inventoryModal.style.display = 'flex';
    pocketImg.style.display = 'block';
    updateInventoryDisplay();
    inventoryBtn.style.display = 'none';
};
itemInPocket.onclick = () => {
    if(!selectedItem) return;
    let nextVideoKey = "";
    switch(selectedItem){
        case "stone": nextVideoKey = "showsang"; break;
        case "scissors": nextVideoKey = "showgheychi"; break;
        case "paper": nextVideoKey = "showkaghaz"; break;
    }
    playVideo(nextVideoKey);
    clearInventoryModal();
};

/* ----------- Start & Transition logic ----------- */
// وقتی کاربر روی start زد -> fade و ورود به player
startBtn.onclick = () => {
    fadeOverlay.style.opacity = "1";

    setTimeout(() => {
        startBtn.style.transition = "opacity 0.5s ease"; // مدت زمان ترنسیشن دلخواه
        startBtn.style.opacity = "0";
    }, 300);

 const onFadeDone = () => {
        try { startBg.pause(); } catch(e){}
        startBg.src = "";
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('player').style.display = 'flex';
        // اجرای ویدیوی اول
        playVideo(currentVideo);
        fadeOverlay.removeEventListener('transitionend', onFadeDone);
    };
    fadeOverlay.addEventListener('transitionend', onFadeDone);
    // backup
    setTimeout(()=> {
        if(document.getElementById('player').style.display !== 'flex') onFadeDone();
    }, 2500);
}

/* ----------- Transition to start-screen and background preload ----------- */
// ... (قبلاً در گام ۲ تابع loadStartBackground را تعریف کردیم)

/* ----------- Transition to start-screen and background preload ----------- */
async function transitionToStartScreen(){ // **Async** شد
    console.log('[flow] transitionToStartScreen start');
    // ... (مخفی کردن loading screen و نمایش start screen)
    if (loadingScreen) loadingScreen.style.display = 'none';
    if (startScreen) startScreen.style.display = 'flex';
    setTimeout(()=>{ if (startScreen) startScreen.style.opacity = "1"; }, 50);

    // **مهم:** منتظر می‌مانیم تا ویدئوی پس‌زمینه لود شده و در حال پخش باشد
    await loadStartBackground();
    console.log('[flow] Start Background video is loaded and playing or ready.');
    
    // تابع کمکی که به صورت قاطع دکمه را نشان می‌دهد (fallback به style مستقیم)
    function forceShowStartBtn(){ 
        // ... (همان منطق قبلی برای نمایش دکمه)
        try {
            startBtn.removeAttribute('disabled');
            startBtn.classList.add('visible');
            startBtn.style.transform = '';
            startBtn.style.opacity = '';
            startBtn.style.pointerEvents = '';
            console.log('[flow] start button class.visible added (no inline transform).');
        } catch(err){
            console.error('[flow] forceShowStartBtn error', err);
        }
    }


    // اضافه کردن اندکی تاخیر (تنظیم از بالا)
    setTimeout(() => {
        forceShowStartBtn();
        // ... (منطق fallback برای نمایش مجدد)
        setTimeout(()=> {
            if (getComputedStyle(startBtn).opacity === '0') {
                console.warn('[flow] startBtn still opacity 0 — applying forceShowStartBtn again');
                forceShowStartBtn();
            } else {
                console.log('[flow] startBtn visible — computed opacity:', getComputedStyle(startBtn).opacity);
            }
        }, 300);
    }, START_BTN_DELAY);

    // start background preload of remaining files (concurrency 3)
    backgroundPreloadRemaining(3, (done,total)=>{
        // optional progress
    }).catch(e => console.warn('background preload error', e));
}
/* ----------- Initial flow: on DOMContentLoaded start preloadInitial then transition ----------- */
window.addEventListener('DOMContentLoaded', async () => {
    // 1. شروع لود ویدئو پس‌زمینه (بدون انتظار). 
    // این کار را در پس‌زمینه شروع می‌کند.
    loadStartBackground(); 
    
    // نمایش loading-screen (به صورت پیش‌فرض visible در DOM)
    try {
        // 2. شروع لود ویدئوهای ضروری (اولیه)
        await preloadInitial(5000); 
    } catch(e) {
        console.warn('preloadInitial error', e);
    }
    
    // 3. انتقال به start-screen (که این تابع حالا منتظر لود شدن Start Video می‌ماند)
    if(!preloadCanceled){
        transitionToStartScreen();
    } else {
        transitionToStartScreen();
    }
});
/* ----------- Misc notes:
   - سرو کردن فایل‌ها روی دامین دیگر نیاز به CORS دارد (Access-Control-Allow-Origin).
   - برای کاهش مصرف دیتای اولیه می‌توان initialEssentialKeys را کم کرد یا نسخه‌های کم‌حجم افزود.
   - اگر خواستی من برات initialEssentialKeys را تغییر بدم (مثلا intro + yakhchal اگر اولین انتخاب محتمل است).
   - concurrency در backgroundPreloadRemaining را می‌تونی به 2 یا 4 تغییر بدی.
------------------------------------------------------------------ */

