document.addEventListener('DOMContentLoaded', () => {
    const CURRENT_VERSION = 'XS MAX';

    const phones = {
        'Redmi9A': { image: 'phones/Redmi9A.png', stabilizationPoint: { x: '34.93%', y: '9.04%' }, specs: { processor: 'Helio G25 Octa-Core', camera: '13MP AI Main Camera' } },
        'SamsungS21U': { image: 'phones/SamsungS21U.png', stabilizationPoint: { x: '19.31%', y: '17.25%' }, specs: { processor: 'Exynos 2100', camera: '108MP Pro-Grade Sensor' } },
        'RealmeGT7Pro': { image: 'phones/RealmeGT7Pro.png', stabilizationPoint: { x: '38.82%', y: '26.66%' }, specs: { processor: 'Snapdragon 8 Elite', camera: '200MP OIS Matrix System' } },
        'HuaweiPura70U': { image: 'phones/HuaweiPura70U.png', stabilizationPoint: { x: '45.37%', y: '25.02%' }, specs: { processor: 'Kirin 9010', camera: '1-inch Retractable Lens' } },
        'OnePlus12': { image: 'phones/OnePlus12.png', stabilizationPoint: { x: '39.71%', y: '20.12%' }, specs: { processor: 'Snapdragon 8 Gen 3', camera: 'Hasselblad 4th Gen Camera' } },
        'SamsungS24U': { image: 'phones/SamsungS24U.png', stabilizationPoint: { x: '37.92%', y: '22.29%' }, specs: { processor: 'Snapdragon 8 Gen 3 for Galaxy', camera: '200MP ISOCELL HP2X' } },
        'HonorMagic6P': { image: 'phones/HonorMagic6P.png', stabilizationPoint: { x: '45.07%', y: '32.88%' }, specs: { processor: 'Snapdragon 8 Gen 3', camera: 'Falcon Capture AI System' } },
        'OnePlusAce3': { image: 'phones/OnePlusAce3.png', stabilizationPoint: { x: '43.10%', y: '19.66%' }, specs: { processor: 'Snapdragon 8 Gen 2', camera: 'Sony IMX890 50MP Sensor' } },
        'SamsungJ4': { image: 'phones/SamsungJ4.png', stabilizationPoint: { x: '50.34%', y: '16.35%' }, specs: { processor: 'Exynos 7570 Quad', camera: '13MP Single Shooter' } },
        'TecnoPova4': { image: 'phones/TecnoPova4.png', stabilizationPoint: { x: '36.98%', y: '13.54%' }, specs: { processor: 'Helio G99 Gaming Core', camera: '50MP Dual AI Cam' } },
        'Iphone13PM': { image: 'phones/Iphone13PM.png', stabilizationPoint: { x: '37.15%', y: '25.98%' }, specs: { processor: 'A15 Bionic Chip', camera: 'Pro 12MP Camera System' } },
        'Honor200': { image: 'phones/Honor200.png', stabilizationPoint: { x: '37.75%', y: '19.30%' }, specs: { processor: 'Snapdragon 7 Gen 3', camera: 'Harcourt Portrait Master' } },
        'IqooNeo10PP': { image: 'phones/IqooNeo10PP.png', stabilizationPoint: { x: '41.58%', y: '20.20%' }, specs: { processor: 'Snapdragon 8 Elite', camera: 'Vivo V3+ Imaging Chip' } },
        'Pixel8P': { image: 'phones/Pixel8P.png', stabilizationPoint: { x: '21.34%', y: '16.57%' }, specs: { processor: 'Google Tensor G3', camera: '50MP Octa-PD Pro Cam' } },
        'IqooNeo9SPP': { image: 'phones/IqooNeo9SPP.png', stabilizationPoint: { x: '37.70%', y: '11.79%' }, specs: { processor: 'Snapdragon 8 Gen 3', camera: 'IMX920 Super-Sense' } },
        'SonyXperia1M7': { image: 'phones/SonyXperia1M7.png', stabilizationPoint: { x: '26.07%', y: '22.78%' }, specs: { processor: 'Snapdragon 8 Elite', camera: 'Exmor T 1/1.35" Sensor' } },
        'Xiaomi15U': { image: 'phones/Xiaomi15U.png', stabilizationPoint: { x: '42.09%', y: '34.85%' }, specs: { processor: 'Snapdragon 8 Elite', camera: 'Leica Summilux 1.5-inch' } },
        'VivoX200U': { image: 'phones/VivoX200U.png', stabilizationPoint: { x: '44.55%', y: '35.46%' }, specs: { processor: 'Snapdragon 8 Elite', camera: 'Zeiss APO-Tessar Lens' } },
        'SamsungS25U': { image: 'phones/SamsungS25U.png', stabilizationPoint: { x: '37.38%', y: '25.63%' }, specs: { processor: 'Snapdragon 8 Elite For Galaxy', camera: 'ISOCELL HPX 250MP' } },
        'HuaweiPura80U': { image: 'phones/HuaweiPura80U.png', stabilizationPoint: { x: '40.66%', y: '37.10%' }, specs: { processor: 'Kirin 9020', camera: 'XMAGE 2.0 Variable Lens' } },
        'LgK10': { image: 'phones/LgK10.png', stabilizationPoint: { x: '49.68%', y: '13.74%' }, specs: { processor: 'Mediatek MT6753', camera: '13MP Auto-Focus Cam' } },
        'Nothing1': { image: 'phones/Nothing1.png', stabilizationPoint: { x: '38.65%', y: '15.57%' }, specs: { processor: 'Snapdragon 778G+ 5G', camera: 'Glyph Interface Camera' } },
        'RealmeGT6': { image: 'phones/RealmeGT6.png', stabilizationPoint: { x: '39.55%', y: '19.52%' }, specs: { processor: 'Snapdragon 8s Gen 3', camera: 'Super-AI Nightscape' } },
        'SamsungA9': { image: 'phones/SamsungA9.png', stabilizationPoint: { x: '33.56%', y: '17.20%' }, specs: { processor: 'Snapdragon 660', camera: 'World\'s First Quad Camera' } },
        'SamsungA72': { image: 'phones/SamsungA72.png', stabilizationPoint: { x: '40.45%', y: '21.88%' }, specs: { processor: 'Snapdragon 720G', camera: '64MP OIS Quad-System' } },
        'SamsungS9+': { image: 'phones/SamsungS9+.png', stabilizationPoint: { x: '50.58%', y: '21.00%' }, specs: { processor: 'Exynos 9810', camera: 'Dual Aperture Lens' } },
        'Xiaomi10U': { image: 'phones/Xiaomi10U.png', stabilizationPoint: { x: '37.75%', y: '31.02%' }, specs: { processor: 'Snapdragon 865 5G', camera: '120x AI Super Zoom' } },
        'GoogleFold2': { image: 'phones/GoogleFold2.png', stabilizationPoint: { x: '56.18%', y: '18.97%' }, specs: { processor: 'Tensor G4 Foldable', camera: 'Pixel-Perfect Fold Cam' } },
        'HuaweiMateXTU': { image: 'phones/HuaweiMateXTU.png', stabilizationPoint: { x: '43.08%', y: '27.12%' }, specs: { processor: 'Kirin 9010', camera: 'Falcon Wing Hinge Cam' } },
        'HuaweiY9C': { image: 'phones/HuaweiY9C.png', stabilizationPoint: { x: '37.74%', y: '16.04%' }, specs: { processor: 'Kirin 710F', camera: '48MP Pop-Up AI Cam' } },
        'InfinixHot40I': { image: 'phones/InfinixHot40I.png', stabilizationPoint: { x: '41.80%', y: '25.00%' }, specs: { processor: 'Unisoc T606', camera: '50MP Super-Night AI' } },
        'IphoneXSM': { image: 'phones/IphoneXSM.png', stabilizationPoint: { x: '30.57%', y: '12.43%' }, specs: { processor: 'A12 Bionic Chip', camera: '12MP Dual Smart HDR' } },
        'PocoX7Pro': { image: 'phones/PocoX7Pro.png', stabilizationPoint: { x: '40.49%', y: '13.94%' }, specs: { processor: 'Dimensity 8400 Ultra', camera: '108MP Crystal-Clear' } },
        'SamsungA15': { image: 'phones/SamsungA15.png', stabilizationPoint: { x: '40.55%', y: '19.38%' }, specs: { processor: 'Helio G99', camera: '50MP Vision Booster' } },
        'SamsungJ1': { image: 'phones/SamsungJ1.png', stabilizationPoint: { x: '49.66%', y: '23.50%' }, specs: { processor: 'Spreadtrum SC9830', camera: '5MP f/2.2 Rear Cam' } },
        'SamsungS10+': { image: 'phones/SamsungS10+.png', stabilizationPoint: { x: '53.21%', y: '18.73%' }, specs: { processor: 'Exynos 9820', camera: '16MP Ultra-Wide Lens' } },
        'SamsungS4Zoom': { image: 'phones/SamsungS4Zoom.png', stabilizationPoint: { x: '50.14%', y: '30.74%' }, specs: { processor: 'Exynos 5410 Octa', camera: '16MP with 10x Optical Zoom' } },
        'SamsungXCover7': { image: 'phones/SamsungXCover7.png', stabilizationPoint: { x: '37.36%', y: '13.14%' }, specs: { processor: 'Dimensity 6100+', camera: 'Rugged 50MP Sensor' } },
        'SamsungZFlip6': { image: 'phones/SamsungZFlip6.png', stabilizationPoint: { x: '35.54%', y: '9.70%' }, specs: { processor: 'Snapdragon 8 Gen 3 for Galaxy', camera: 'FlexiCam 5.0 System' } },
        'XiaomiMixAlpha': { image: 'phones/XiaomiMixAlpha.png', stabilizationPoint: { x: '38.38%', y: '12.03%' }, specs: { processor: 'Snapdragon 855+', camera: '108MP Surround Display Cam' } },
        'XiaomiMixFlip': { image: 'phones/XiaomiMixFlip.png', stabilizationPoint: { x: '41.80%', y: '22.10%' }, specs: { processor: 'Snapdragon 8 Gen 3', camera: 'Leica Vario-Summilux Flip' } },
        'ZteNubiaZ70U': { image: 'phones/ZteNubiaZ70U.png', stabilizationPoint: { x: '39.47%', y: '15.76%' }, specs: { processor: 'Snapdragon 8 Elite', camera: 'Neovision 35mm UDC' } },
        'MeizuLucky08':{image:'phones/MeizuLucky08.png',stabilizationPoint:{x:'50.00%',y:'16.46%'}, specs: { processor: 'Snapdragon 7s Gen 2', camera: 'Flyme AI Imaging' }},
        'PocoX6P':{image:'phones/PocoX6P.png',stabilizationPoint:{x:'38.69%',y:'13.81%'}, specs: { processor: 'Dimensity 8300 Ultra', camera: '64MP OIS Triple Cam' }},
        'InfinixHot12P':{image:'phones/InfinixHot12P.png',stabilizationPoint:{x:'36.08%',y:'20.08%'}, specs: { processor: 'Unisoc Tiger T616', camera: '50MP SuperNight' }},
        'Xiaomi9':{image:'phones/Xiaomi9.png',stabilizationPoint:{x:'35.43%',y:'10.67%'}, specs: { processor: 'Snapdragon 855', camera: 'Sony IMX586 48MP' }},
        'HonorMagicX9C':{image:'phones/HonorMagicX9C.png',stabilizationPoint:{x:'44.36%',y:'18.07%'}, specs: { processor: 'Snapdragon 6 Gen 1', camera: 'Circular Matrix Lens' }}
    };
    
    const translations = {
        ru: { version_text: "Версия XS MAX", controls_title: "Управление", phone_model_label: "Модель телефона:", phone_rotation_label: "Вращение телефона", joystick_instruction: "Нажмите и потяните в любом месте экрана для вращения.", info_button_title: "Информация", settings_button_title: "Настройки", info_button_text: "Инфо", settings_button_text: "Настройки", support_button_text: "Поддержать проект", language_modal_title: "Выберите язык", settings_title: "Настройки", settings_graphics_title: "Графика / ФПС", settings_particles: "Частицы", settings_white_fire: "Белый огонь (Ярость)", settings_shadows: "Тени от телефона", settings_phone_title: "Телефон", settings_stabilization: "Стабилизация камеры", settings_extra_title: "Экстра", settings_super_fps: "Супер буст ФПС", close_button: "Закрыть", info_title: "Информация о проекте", info_development_title: "Разработка:", info_jelikton_role: "разработчик кода, основатель", info_romafacti1_role: "поиск телефонов, помощь в дизайне", info_links_title: "Ссылки:", loader_welcome: "Добро пожаловать на сайт jx stab!", loader_support: "Поддержите проект денежкой в телеграмме", loader_reactions: "100 Реакций - новая обнова", loader_enter: "Войти", donation_text: "Собрано денег: 0/3500Р", settings_theme_title: "Тема", settings_dark_theme: "Тёмная тема", music_toggle_text: "Музыка", processor_title: "Процессор", camera_title: "Камера" },
        en: { version_text: "Version XS MAX", controls_title: "Controls", phone_model_label: "Phone Model:", phone_rotation_label: "Phone Rotation", joystick_instruction: "Click and drag anywhere on the screen to rotate.", info_button_title: "Information", settings_button_title: "Settings", info_button_text: "Info", settings_button_text: "Settings", support_button_text: "Support Project", language_modal_title: "Select language", settings_title: "Settings", settings_graphics_title: "Graphics / FPS", settings_particles: "Particles", settings_white_fire: "White Fire (Rage)", settings_shadows: "Phone shadows", settings_phone_title: "Phone", settings_stabilization: "Camera Stabilization", settings_extra_title: "Extra", settings_super_fps: "Super FPS Boost", close_button: "Close", info_title: "About Project", info_development_title: "Development:", info_jelikton_role: "code developer, founder", info_romafacti1_role: "phone search, design assistant", info_links_title: "Links:", loader_welcome: "Welcome to jx stab!", loader_support: "Support the project with a donation on Telegram", loader_reactions: "100 Reactions - new update", loader_enter: "Enter", donation_text: "Collected: 0/3500₽", settings_theme_title: "Theme", settings_dark_theme: "Dark Theme", music_toggle_text: "Music", processor_title: "Processor", camera_title: "Camera" }
    };
    
    const lightThemeParticles = { paused: true, fpsLimit: 60, particles: { number: { value: 80 }, color: { value: "#888888" }, shape: { type: "circle" }, opacity: { value: 0.5, random: true }, size: { value: 3, random: true }, move: { enable: true, speed: 2, direction: "none", random: true, out_mode: "out" } }, interactivity: { events: { onclick: { enable: false } } } };
    const darkThemeParticles = { fpsLimit: 60, particles: { number: { value: 100, density: { enable: true, value_area: 800 } }, color: { value: "#ffffff" }, shape: { type: "image", image: [ { src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==', width: 20, height: 20 }, { src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyNSIgZmlsbD0iI2FkYWYxZSIvPjxwYXRoIGQ9Ik0xNSw1MEExLDEsMCwwLDEsODUsNTAiIHN0cm9rZT0iI2VkZWYyZSIgc3Ryb2tlLXdpZHRoPSI4IiBmaWxsPSJub25lIiB0cmFuc2Zvcm09InJvdGF0ZSgtMjApIHRyYW5zZm9ybS1vcmlnaW49IjUwIDUwIi8+PC9zdmc+', width: 50, height: 50 }, { src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIzNSIgZmlsbD0iI2Y5YjIyMyIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjUiIGZpbGw9IiNkZTg3MDYiLz48Y2lyY2xlIGN4PSI3MCIgY3k9IjcwIiByPSI4IiBmaWxsPSIjZGU4NzA2Ii8+PC9zdmc+', width: 40, height: 40 } ] }, opacity: { value: 0.7, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } }, size: { value: 8, random: true, anim: { enable: true, speed: 2, size_min: 1, sync: false } }, move: { enable: true, speed: 1, direction: "top-left", random: true, straight: true, out_mode: "out" } }, interactivity: { events: { onclick: { enable: false } } } };
    
    let currentRotation = 0, targetRotation = 0, rageLevel = 0, rageTimeout, particlesInstance = null, lastAngle = 0, isDragging = false;
    
    const phoneInfoContainer = document.getElementById('phone-info-container');
    const phoneProcessorInfo = document.getElementById('phone-processor-info');
    const phoneCameraInfo = document.getElementById('phone-camera-info');
    const loaderOverlay = document.getElementById('loader-overlay');
    const enterSiteBtn = document.getElementById('enter-site-btn');
    const backgroundMusic = document.getElementById('background-music');
    const musicToggleButton = document.getElementById('music-toggle-btn');
    const darkThemeToggle = document.getElementById('dark-theme-toggle');
    const wrapperBg = document.getElementById('wrapper-bg');
    const phoneImage = document.getElementById('phone-image');
    const phoneSelect = document.getElementById('phone-select');
    const whiteFireEffect = document.getElementById('white-fire-effect');
    const floatingJoystick = document.getElementById('floating-joystick');
    const joystickHandle = document.getElementById('joystick-handle');
    const supportButton = document.getElementById('support-button');
    const languageModal = document.getElementById('language-modal');
    const menuBtn = document.getElementById('menu-btn');
    const mainMenuModal = document.getElementById('main-menu-modal');
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
        initLoader();
        initLanguage();
        loadSettings(); 
        initParticles();
        initSpamProtection();
        updatePhoneSelector();
        updatePhone();

        menuBtn.addEventListener('click', () => mainMenuModal.classList.remove('hidden'));
        settingsBtn.addEventListener('click', () => settingsModal.classList.remove('hidden'));
        infoBtn.addEventListener('click', () => infoModal.classList.remove('hidden'));
        
        document.querySelectorAll('.modal-close-btn').forEach(btn => {
            btn.addEventListener('click', (e) => e.currentTarget.closest('.modal-overlay').classList.add('hidden'));
        });
        
        wrapperBg.addEventListener('mousedown', onDragStart);
        wrapperBg.addEventListener('touchstart', onDragStart, { passive: false });
        phoneSelect.addEventListener('change', updatePhone);
        
        [particlesToggle, whiteFireToggle, shadowsToggle, stabilizationToggle, superFpsBoostToggle, darkThemeToggle].forEach(toggle => {
            toggle.addEventListener('change', handleSettingsChange);
        });
        musicToggleButton.addEventListener('click', toggleMusic);

        requestAnimationFrame(animationLoop);
    }
    
    function initLoader() { enterSiteBtn.addEventListener('click', () => { loaderOverlay.classList.add('hidden'); }); }
    function toggleMusic() { const icon = musicToggleButton.querySelector('i'); if (backgroundMusic.paused) { backgroundMusic.play().catch(e => console.error("Music playback failed:", e)); icon.classList.remove('fa-music'); icon.classList.add('fa-volume-high'); } else { backgroundMusic.pause(); icon.classList.remove('fa-volume-high'); icon.classList.add('fa-music'); } }
    function setLanguage(lang) { document.documentElement.lang = lang; document.querySelectorAll('[data-translate-key]').forEach(el => { const key = el.dataset.translateKey; if (translations[lang] && translations[lang][key]) { const textNode = Array.from(el.childNodes).find(node => node.nodeType === 3 && node.textContent.trim().length > 0); if (textNode) { textNode.textContent = translations[lang][key]; } else if (el.querySelector('.btn-text')) { el.querySelector('.btn-text').textContent = translations[lang][key]; } else { el.textContent = translations[lang][key]; } } }); }
    function initLanguage() { const savedLang = localStorage.getItem('selectedLang'); if (savedLang) { setLanguage(savedLang); } else { languageModal.classList.remove('hidden'); } document.querySelectorAll('.lang-btn').forEach(btn => { btn.addEventListener('click', () => { const lang = btn.dataset.lang; setLanguage(lang); localStorage.setItem('selectedLang', lang); languageModal.classList.add('hidden'); }); }); }
    
    async function loadParticlesConfig(config) { if (particlesInstance) { particlesInstance.destroy(); } particlesInstance = await tsParticles.load("tsparticles", config); }
    function initParticles() { const config = darkThemeToggle.checked ? darkThemeParticles : lightThemeParticles; loadParticlesConfig(config); }

    let supportClickCount = 0, spamTimeout = null; 
    function initSpamProtection() { supportButton.addEventListener('click', (e) => { if (supportButton.classList.contains('punished')) { e.preventDefault(); return; } clearTimeout(spamTimeout); supportClickCount++; if (supportClickCount >= 5) { e.preventDefault(); supportButton.classList.add('punished'); setTimeout(() => { supportButton.classList.remove('punished'); }, 1000); supportClickCount = 0; } spamTimeout = setTimeout(() => { supportClickCount = 0; }, 2000); }); }
    function updatePhoneSelector() { const uniquePhones = Object.keys(phones).sort(); const currentSelected = phoneSelect.value; phoneSelect.innerHTML = ''; uniquePhones.forEach(modelName => { const option = document.createElement('option'); option.value = modelName; option.textContent = modelName; phoneSelect.appendChild(option); }); if (uniquePhones.includes(currentSelected)) { phoneSelect.value = currentSelected; } }
    
    function updatePhone() {
        const selectedModel = phoneSelect.value;
        if (!selectedModel) { phoneImage.src = ''; phoneInfoContainer.classList.add('hidden'); return; }
        const phoneData = phones[selectedModel];
        phoneImage.style.transformOrigin = (stabilizationToggle.checked) ? `${phoneData.stabilizationPoint.x} ${phoneData.stabilizationPoint.y}` : '50% 50%';
        phoneImage.src = phoneData.image;
        if (phoneData.specs) { phoneProcessorInfo.textContent = phoneData.specs.processor; phoneCameraInfo.textContent = phoneData.specs.camera; phoneInfoContainer.classList.remove('hidden'); } else { phoneInfoContainer.classList.add('hidden'); }
        targetRotation = currentRotation;
    }

    function animationLoop() { if (isDragging || Math.abs(targetRotation - currentRotation) > 0.01) { currentRotation += (targetRotation - currentRotation) * 0.2; phoneImage.style.transform = `perspective(1000px) rotateZ(${currentRotation}deg)`; } requestAnimationFrame(animationLoop); }
    let joystickCenterX = 0, joystickCenterY = 0; 
    
    function onDragStart(e) {
        if (e.target.closest('.modal-overlay') || e.target.closest('#menu-btn')) return;
        e.preventDefault(); isDragging = true;
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        joystickCenterX = clientX; joystickCenterY = clientY;
        floatingJoystick.style.left = `${joystickCenterX}px`; floatingJoystick.style.top = `${joystickCenterY}px`;
        floatingJoystick.style.transform = 'translate(-50%, -50%)';
        floatingJoystick.classList.remove('hidden');
        lastAngle = Math.atan2(clientY - joystickCenterY, clientX - joystickCenterX) * (180 / Math.PI);
        document.addEventListener('mousemove', onDragMove); document.addEventListener('mouseup', onDragEnd);
        document.addEventListener('touchmove', onDragMove, { passive: false }); document.addEventListener('touchend', onDragEnd);
    }
    
    function onDragMove(e) {
        if (!isDragging) return;
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        const currentAngle = Math.atan2(clientY - joystickCenterY, clientX - joystickCenterX) * (180 / Math.PI);
        let deltaAngle = currentAngle - lastAngle;
        if (deltaAngle > 180) deltaAngle -= 360; if (deltaAngle < -180) deltaAngle += 360;
        lastAngle = currentAngle;
        updateRotation(targetRotation + deltaAngle);
        const deltaX = clientX - joystickCenterX; const deltaY = clientY - joystickCenterY; const distance = Math.min(35, Math.hypot(deltaX, deltaY)); const angleRad = Math.atan2(deltaY, deltaX);
        joystickHandle.style.transform = `translate(-50%, -50%) translate(${distance * Math.cos(angleRad)}px, ${distance * Math.sin(angleRad)}px)`;
    }
    
    function onDragEnd() { isDragging = false; floatingJoystick.classList.add('hidden'); joystickHandle.style.transform = 'translate(-50%, -50%)'; document.removeEventListener('mousemove', onDragMove); document.removeEventListener('mouseup', onDragEnd); document.removeEventListener('touchmove', onDragMove); document.removeEventListener('touchend', onDragEnd); }
    
    function updateRotation(newRotation) {
        targetRotation = newRotation;
        if (superFpsBoostToggle.checked) return;
        if (particlesToggle.checked && particlesInstance && !darkThemeToggle.checked) { particlesInstance.play(); setTimeout(() => particlesInstance.pause(), 500); }
        if (whiteFireToggle.checked) {
            rageLevel += 5;
            if (rageLevel > 150) {
                if (!whiteFireEffect.classList.contains('active')) {
                    whiteFireEffect.classList.add('active');
                }
            }
            clearTimeout(rageTimeout);
            rageTimeout = setTimeout(() => { rageLevel = 0; whiteFireEffect.classList.remove('active'); }, 300);
        }
    }
    
    function handleSettingsChange() {
        if (superFpsBoostToggle.checked) { particlesToggle.checked = false; whiteFireToggle.checked = false; shadowsToggle.checked = false; particlesToggle.disabled = true; whiteFireToggle.disabled = true; shadowsToggle.disabled = true; } else { particlesToggle.disabled = false; whiteFireToggle.disabled = false; shadowsToggle.disabled = false; }
        document.body.classList.toggle('no-shadows', !shadowsToggle.checked || superFpsBoostToggle.checked);
        const isDark = darkThemeToggle.checked; document.body.classList.toggle('dark-theme', isDark);
        const newConfig = isDark ? darkThemeParticles : lightThemeParticles;
        loadParticlesConfig(newConfig).then(() => { if (!particlesToggle.checked) { particlesInstance.pause(); } });
        updatePhone(); saveSettings();
    }
    
    function saveSettings() { localStorage.setItem('stabilizerSettingsXS', JSON.stringify({ lang: document.documentElement.lang, particles: particlesToggle.checked, fire: whiteFireToggle.checked, shadows: shadowsToggle.checked, stabilization: stabilizationToggle.checked, superFps: superFpsBoostToggle.checked, darkTheme: darkThemeToggle.checked })); }
    
    function loadSettings() {
        const settings = JSON.parse(localStorage.getItem('stabilizerSettingsXS'));
        if (settings) {
            particlesToggle.checked = settings.particles ?? true;
            whiteFireToggle.checked = settings.fire ?? true;
            shadowsToggle.checked = settings.shadows ?? true;
            stabilizationToggle.checked = settings.stabilization ?? true;
            superFpsBoostToggle.checked = settings.superFps ?? false;
            darkThemeToggle.checked = settings.darkTheme ?? false;
        }
        handleSettingsChange();
        if (!particlesToggle.checked && particlesInstance) {
            particlesInstance.pause();
        }
    }
    
    init();
});