document.addEventListener('DOMContentLoaded', () => {
    const CURRENT_VERSION = 'XS';
    const phones = { 'Redmi9A': { image: 'phones/Redmi9A.png', stabilizationPoint: { x: '34.93%', y: '9.04%' } }, 'SamsungS21U': { image: 'phones/SamsungS21U.png', stabilizationPoint: { x: '19.31%', y: '17.25%' } }, 'RealmeGT7Pro': { image: 'phones/RealmeGT7Pro.png', stabilizationPoint: { x: '38.82%', y: '26.66%' } }, 'HuaweiPura70U': { image: 'phones/HuaweiPura70U.png', stabilizationPoint: { x: '45.37%', y: '25.02%' } }, 'OnePlus12': { image: 'phones/OnePlus12.png', stabilizationPoint: { x: '39.71%', y: '20.12%' } }, 'SamsungS24U': { image: 'phones/SamsungS24U.png', stabilizationPoint: { x: '37.92%', y: '22.29%' } }, 'HonorMagic6P': { image: 'phones/HonorMagic6P.png', stabilizationPoint: { x: '45.07%', y: '32.88%' } }, 'OnePlusAce3': { image: 'phones/OnePlusAce3.png', stabilizationPoint: { x: '43.10%', y: '19.66%' } }, 'SamsungJ4': { image: 'phones/SamsungJ4.png', stabilizationPoint: { x: '50.34%', y: '16.35%' } }, 'TecnoPova4': { image: 'phones/TecnoPova4.png', stabilizationPoint: { x: '36.98%', y: '13.54%' } }, 'Iphone13PM': { image: 'phones/Iphone13PM.png', stabilizationPoint: { x: '37.15%', y: '25.98%' } }, 'Honor200': { image: 'phones/Honor200.png', stabilizationPoint: { x: '37.75%', y: '19.30%' } }, 'IqooNeo10PP': { image: 'phones/IqooNeo10PP.png', stabilizationPoint: { x: '41.58%', y: '20.20%' } }, 'Pixel8P': { image: 'phones/Pixel8P.png', stabilizationPoint: { x: '21.34%', y: '16.57%' } }, 'IqooNeo9SPP': { image: 'phones/IqooNeo9SPP.png', stabilizationPoint: { x: '42.72%', y: '38.93%' } }, 'SonyXperia1M7': { image: 'phones/SonyXperia1M7.png', stabilizationPoint: { x: '26.07%', y: '22.78%' } }, 'Xiaomi15U': { image: 'phones/Xiaomi15U.png', stabilizationPoint: { x: '42.09%', y: '34.85%' } }, 'VivoX200U': { image: 'phones/VivoX200U.png', stabilizationPoint: { x: '44.55%', y: '35.46%' } }, 'SamsungS25U': { image: 'phones/SamsungS25U.png', stabilizationPoint: { x: '37.38%', y: '25.63%' } }, 'HuaweiPura80U': { image: 'phones/HuaweiPura80U.png', stabilizationPoint: { x: '40.66%', y: '37.10%' } }, 'LgK10': { image: 'phones/LgK10.png', stabilizationPoint: { x: '49.68%', y: '13.74%' } }, 'Nothing1': { image: 'phones/Nothing1.png', stabilizationPoint: { x: '38.65%', y: '15.57%' } }, 'RealmeGT6': { image: 'phones/RealmeGT6.png', stabilizationPoint: { x: '39.55%', y: '19.52%' } }, 'SamsungA9': { image: 'phones/SamsungA9.png', stabilizationPoint: { x: '33.56%', y: '17.20%' } }, 'SamsungA72': { image: 'phones/SamsungA72.png', stabilizationPoint: { x: '40.45%', y: '21.88%' } }, 'SamsungS9+': { image: 'phones/SamsungS9+.png', stabilizationPoint: { x: '50.58%', y: '21.00%' } }, 'Xiaomi10U': { image: 'phones/Xiaomi10U.png', stabilizationPoint: { x: '37.75%', y: '31.02%' } }, 'GoogleFold2': { image: 'phones/GoogleFold2.png', stabilizationPoint: { x: '56.18%', y: '18.97%' } }, 'HuaweiMateXTU': { image: 'phones/HuaweiMateXTU.png', stabilizationPoint: { x: '43.08%', y: '27.12%' } }, 'HuaweiY9C': { image: 'phones/HuaweiY9C.png', stabilizationPoint: { x: '37.68%', y: '16.17%' } }, 'InfinixHot40I': { image: 'phones/InfinixHot40I.png', stabilizationPoint: { x: '41.80%', y: '25.00%' } }, 'IphoneXSM': { image: 'phones/IphoneXSM.png', stabilizationPoint: { x: '30.57%', y: '12.43%' } }, 'PocoX7Pro': { image: 'phones/PocoX7Pro.png', stabilizationPoint: { x: '40.49%', y: '13.94%' } }, 'SamsungA15': { image: 'phones/SamsungA15.png', stabilizationPoint: { x: '40.55%', y: '19.38%' } }, 'SamsungJ1': { image: 'phones/SamsungJ1.png', stabilizationPoint: { x: '49.66%', y: '23.50%' } }, 'SamsungS10+': { image: 'phones/SamsungS10+.png', stabilizationPoint: { x: '53.21%', y: '18.73%' } }, 'SamsungS4Zoom': { image: 'phones/SamsungS4Zoom.png', stabilizationPoint: { x: '50.14%', y: '30.74%' } }, 'SamsungXCover7': { image: 'phones/SamsungXCover7.png', stabilizationPoint: { x: '37.36%', y: '13.14%' } }, 'SamsungZFlip6': { image: 'phones/SamsungZFlip6.png', stabilizationPoint: { x: '35.54%', y: '9.70%' } }, 'XiaomiMixAlpha': { image: 'phones/XiaomiMixAlpha.png', stabilizationPoint: { x: '38.38%', y: '12.03%' } }, 'XiaomiMixFlip': { image: 'phones/XiaomiMixFlip.png', stabilizationPoint: { x: '41.80%', y: '22.10%' } }, 'ZteNubiaZ70U': { image: 'phones/ZteNubiaZ70U.png', stabilizationPoint: { x: '39.47%', y: '15.76%' } },'MeizuLucky08':{image:'phones/MeizuLucky08.png',stabilizationPoint:{x:'50.00%',y:'50.00%'}},'PocoX6P':{image:'phones/PocoX6P.png',stabilizationPoint:{x:'50.00%',y:'50.00%'}},'InfinixHot12P':{image:'phones/InfinixHot12P.png',stabilizationPoint:{x:'50.00%',y:'50.00%'}},'Xiaomi9':{image:'phones/Xiaomi9.png',stabilizationPoint:{x:'50.00%',y:'50.00%'}},'HonorMagicX9C':{image:'phones/HonorMagicX9C.png',stabilizationPoint:{x:'50.00%',y:'50.00%'}}};
    const translations = {
        ru: {
            version_text: "Версия XS",
            controls_title: "Управление",
            phone_model_label: "Модель телефона:",
            phone_rotation_label: "Вращение телефона",
            joystick_instruction: "Нажмите и потяните в любом месте экрана слева для вращения.",
            info_button_title: "Информация",
            settings_button_title: "Настройки",
            support_button_text: "Поддержать проект",
            language_modal_title: "Выберите язык",
            settings_title: "Настройки",
            settings_graphics_title: "Графика / ФПС",
            settings_particles: "Частицы при вращении",
            settings_white_fire: "Белый огонь (Ярость)",
            settings_shadows: "Тени от телефона",
            settings_phone_title: "Телефон",
            settings_stabilization: "Стабилизация камеры",
            settings_extra_title: "Экстра",
            settings_super_fps: "Супер буст ФПС",
            close_button: "Закрыть",
            info_title: "Информация о проекте",
            info_development_title: "Разработка:",
            info_jelikton_role: "разработчик кода, основатель",
            info_romafacti1_role: "поиск телефонов, помощь в дизайне",
            info_links_title: "Ссылки:"
        },
        en: {
            version_text: "Version XS",
            controls_title: "Controls",
            phone_model_label: "Phone Model:",
            phone_rotation_label: "Phone Rotation",
            joystick_instruction: "Click and drag anywhere on the left screen area to rotate.",
            info_button_title: "Information",
            settings_button_title: "Settings",
            support_button_text: "Support Project",
            language_modal_title: "Select language",
            settings_title: "Settings",
            settings_graphics_title: "Graphics / FPS",
            settings_particles: "Particles on rotation",
            settings_white_fire: "White Fire (Rage)",
            settings_shadows: "Phone shadows",
            settings_phone_title: "Phone",
            settings_stabilization: "Camera Stabilization",
            settings_extra_title: "Extra",
            settings_super_fps: "Super FPS Boost",
            close_button: "Close",
            info_title: "About Project",
            info_development_title: "Development:",
            info_jelikton_role: "code developer, founder",
            info_romafacti1_role: "phone search, design assistant",
            info_links_title: "Links:"
        }
    };
    
    let currentRotation = 0, targetRotation = 0, rageLevel = 0, rageTimeout, particlesInstance = null;
    let lastAngle = 0, isDragging = false;

    const wrapperBg = document.getElementById('wrapper-bg');
    const phoneImage = document.getElementById('phone-image');
    const phoneSelect = document.getElementById('phone-select');
    const whiteFireEffect = document.getElementById('white-fire-effect');
    const controlsWrapper = document.getElementById('controls-wrapper');
    const toggleControlsBtn = document.getElementById('toggle-controls-btn');
    const floatingJoystick = document.getElementById('floating-joystick');
    const joystickHandle = document.getElementById('joystick-handle');
    const supportButton = document.getElementById('support-button');
    const languageModal = document.getElementById('language-modal');

    const settingsModal = document.getElementById('settings-modal');
    const infoModal = document.getElementById('info-modal');
    const settingsBtn = document.getElementById('settings-btn');
    const infoBtn = document.getElementById('info-btn');
    
    const particlesToggle = document.getElementById('particles-toggle');
    const whiteFireToggle = document.getElementById('white-fire-toggle');
    const shadowsToggle = document.getElementById('shadows-toggle');
    const stabilizationToggle = document.getElementById('stabilization-toggle');
    const superFpsBoostToggle = document.getElementById('super-fps-boost-toggle');
    
    function init() {
        initLanguage();
        initParticles();
        loadSettings();
        initSpamProtection();
        updatePhoneSelector();
        updatePhone();

        wrapperBg.addEventListener('mousedown', onDragStart);
        wrapperBg.addEventListener('touchstart', onDragStart, { passive: false });
        phoneSelect.addEventListener('change', updatePhone);
        toggleControlsBtn.addEventListener('click', () => controlsWrapper.classList.toggle('open'));
        
        settingsBtn.addEventListener('click', () => settingsModal.classList.remove('hidden'));
        infoBtn.addEventListener('click', () => infoModal.classList.remove('hidden'));
        
        document.querySelectorAll('.modal-close-btn').forEach(btn => {
            btn.addEventListener('click', () => btn.closest('.modal-overlay').classList.add('hidden'));
        });
        
        [particlesToggle, whiteFireToggle, shadowsToggle, stabilizationToggle, superFpsBoostToggle].forEach(toggle => {
            toggle.addEventListener('change', handleSettingsChange);
        });

        requestAnimationFrame(animationLoop);
    }
    
    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const key = el.dataset.translateKey;
            if (translations[lang][key]) {
                const targetEl = el.querySelector('span') || el;
                if (targetEl.childNodes[0].nodeType === Node.TEXT_NODE) {
                     targetEl.childNodes[0].nodeValue = translations[lang][key] + " ";
                } else {
                     targetEl.textContent = translations[lang][key];
                }
            }
        });
    }

    function initLanguage() {
        const savedLang = localStorage.getItem('selectedLang');
        if (savedLang) {
            setLanguage(savedLang);
        } else {
            languageModal.classList.remove('hidden');
        }

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                setLanguage(lang);
                localStorage.setItem('selectedLang', lang);
                languageModal.classList.add('hidden');
            });
        });
    }

    async function initParticles() {
        particlesInstance = await tsParticles.load("tsparticles", { paused: true, fpsLimit: 60, particles: { number: { value: 80 }, color: { value: "#888888" }, shape: { type: "circle" }, opacity: { value: 0.5, random: true }, size: { value: 3, random: true }, move: { enable: true, speed: 2, direction: "none", random: true, out_mode: "out" } }, interactivity: { events: { onclick: { enable: false } } } });
    }
    
    let supportClickCount = 0, spamTimeout = null;
    function initSpamProtection() {
        supportButton.addEventListener('click', (e) => {
            if (supportButton.classList.contains('punished')) {
                e.preventDefault();
                return;
            }
            clearTimeout(spamTimeout);
            supportClickCount++;
            if (supportClickCount >= 5) {
                e.preventDefault();
                supportButton.classList.add('punished');
                setTimeout(() => {
                    supportButton.classList.remove('punished');
                }, 1000);
                supportClickCount = 0;
            }
            spamTimeout = setTimeout(() => { supportClickCount = 0; }, 2000);
        });
    }

    function updatePhoneSelector() { const uniquePhones = Object.keys(phones).sort(); const currentSelected = phoneSelect.value; phoneSelect.innerHTML = ''; uniquePhones.forEach(modelName => { const option = document.createElement('option'); option.value = modelName; option.textContent = modelName; phoneSelect.appendChild(option); }); if (uniquePhones.includes(currentSelected)) { phoneSelect.value = currentSelected; } }
    
    function updatePhone() {
        const selectedModel = phoneSelect.value;
        if (!selectedModel) { phoneImage.src = ''; return; }
        const phoneData = phones[selectedModel];
        const originPoint = (stabilizationToggle.checked) ? `${phoneData.stabilizationPoint.x} ${phoneData.stabilizationPoint.y}` : '50% 50%';
        phoneImage.style.transformOrigin = originPoint;
        phoneImage.src = phoneData.image;
        targetRotation = 0; currentRotation = -1;
        phoneImage.style.transform = `perspective(1000px) rotateZ(0deg)`;
    }

    function animationLoop() { if (isDragging || Math.abs(targetRotation - currentRotation) > 0.01) { currentRotation = targetRotation; phoneImage.style.transform = `perspective(1000px) rotateZ(${currentRotation}deg)`; } requestAnimationFrame(animationLoop); }
    
    let joystickCenterX = 0, joystickCenterY = 0;
    
    function onDragStart(e) {
        if (e.target.closest('#controls-wrapper')) return;
        e.preventDefault();
        isDragging = true;

        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        
        joystickCenterX = clientX;
        joystickCenterY = clientY;

        floatingJoystick.style.left = `${joystickCenterX}px`;
        floatingJoystick.style.top = `${joystickCenterY}px`;
        floatingJoystick.style.transform = 'translate(-50%, -50%)';
        floatingJoystick.classList.remove('hidden');

        lastAngle = Math.atan2(clientY - joystickCenterY, clientX - joystickCenterX) * (180 / Math.PI);
        
        document.addEventListener('mousemove', onDragMove);
        document.addEventListener('mouseup', onDragEnd);
        document.addEventListener('touchmove', onDragMove, { passive: false });
        document.addEventListener('touchend', onDragEnd);
    }

    function onDragMove(e) {
        if (!isDragging) return;
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

        const currentAngle = Math.atan2(clientY - joystickCenterY, clientX - joystickCenterX) * (180 / Math.PI);
        let deltaAngle = currentAngle - lastAngle;

        if (deltaAngle > 180) deltaAngle -= 360;
        if (deltaAngle < -180) deltaAngle += 360;
        
        lastAngle = currentAngle;
        updateRotation(targetRotation + deltaAngle);
        
        const deltaX = clientX - joystickCenterX;
        const deltaY = clientY - joystickCenterY;
        const distance = Math.min(45, Math.hypot(deltaX, deltaY));
        const angleRad = Math.atan2(deltaY, deltaX);

        joystickHandle.style.transform = `translate(-50%, -50%) translate(${distance * Math.cos(angleRad)}px, ${distance * Math.sin(angleRad)}px)`;
    }

    function onDragEnd() {
        isDragging = false;
        floatingJoystick.classList.add('hidden');
        joystickHandle.style.transform = 'translate(-50%, -50%)';

        document.removeEventListener('mousemove', onDragMove);
        document.removeEventListener('mouseup', onDragEnd);
        document.removeEventListener('touchmove', onDragMove);
        document.removeEventListener('touchend', onDragEnd);
    }
    
    function updateRotation(newRotation) {
        targetRotation = newRotation;
        if (superFpsBoostToggle.checked) return;
        if (particlesToggle.checked && particlesInstance) { particlesInstance.play(); setTimeout(() => particlesInstance.pause(), 500); }
        if (whiteFireToggle.checked) { rageLevel += 5; if (rageLevel > 150) whiteFireEffect.classList.add('active'); clearTimeout(rageTimeout); rageTimeout = setTimeout(() => { rageLevel = 0; whiteFireEffect.classList.remove('active'); }, 300); }
    }
    
    function handleSettingsChange() {
        if (superFpsBoostToggle.checked) {
            particlesToggle.checked = false;
            whiteFireToggle.checked = false;
            shadowsToggle.checked = false;
            particlesToggle.disabled = true;
            whiteFireToggle.disabled = true;
            shadowsToggle.disabled = true;
        } else {
            particlesToggle.disabled = false;
            whiteFireToggle.disabled = false;
            shadowsToggle.disabled = false;
        }
        document.body.classList.toggle('no-shadows', !shadowsToggle.checked || superFpsBoostToggle.checked);
        updatePhone();
        saveSettings();
    }
    
    function saveSettings() { localStorage.setItem('stabilizerSettingsXS', JSON.stringify({ lang: document.documentElement.lang, particles: particlesToggle.checked, fire: whiteFireToggle.checked, shadows: shadowsToggle.checked, stabilization: stabilizationToggle.checked, superFps: superFpsBoostToggle.checked })); }
    
    function loadSettings() {
        const settings = JSON.parse(localStorage.getItem('stabilizerSettingsXS'));
        particlesToggle.checked = settings?.particles ?? true;
        whiteFireToggle.checked = settings?.fire ?? true;
        shadowsToggle.checked = settings?.shadows ?? true;
        stabilizationToggle.checked = settings?.stabilization ?? true;
        superFpsBoostToggle.checked = settings?.superFps ?? false;
        handleSettingsChange();
    }
    
    init();
});
