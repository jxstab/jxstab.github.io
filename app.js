document.addEventListener('DOMContentLoaded', () => {
    const CURRENT_VERSION = 'XV';

    // ==========================================
    // 1. DATA & CONFIGURATION
    // ==========================================
    
    const phones = {
        // --- UPDATED COORDINATES (FROM DEBUG LOGS) ---
        'Realme9i': { image: 'phones/Realme9i.png', stabilizationPoint: { x: '37.86%', y: '12.34%' }, specs: { processor: 'Snapdragon 680', camera: '50MP AI Matrix' } },
        'Xiaomi13TPro': { image: 'phones/Xiaomi13TPro.png', stabilizationPoint: { x: '38.20%', y: '23.34%' }, specs: { processor: 'Dimensity 9200+', camera: '50MP Leica' } },
        'RealmeC71': { image: 'phones/RealmeC71.png', stabilizationPoint: { x: '37.30%', y: '22.39%' }, specs: { processor: 'Unisoc T612', camera: '50MP AI Cam' } },
        'OnePlus11R': { image: 'phones/OnePlus11R.png', stabilizationPoint: { x: '37.86%', y: '26.56%' }, specs: { processor: 'Snapdragon 8+ Gen 1', camera: '50MP IMX890' } },
        // ---------------------------------------------

        'Redmi10': { image: 'phones/Redmi10.png', stabilizationPoint: { x: '37.86%', y: '20.12%' }, specs: { processor: 'Helio G88', camera: '50MP AI Quad' } },
        'HonorX8C': { image: 'phones/XonorX8C.png', stabilizationPoint: { x: '28.51%', y: '14.43%' }, specs: { processor: 'Snapdragon 680', camera: 'High-Res Matrix' } },
        'Redmi13C': { image: 'phones/Redmi13C.png', stabilizationPoint: { x: '38.43%', y: '15.76%' }, specs: { processor: 'Helio G85', camera: '50MP AI Triple' } },
        'PocoM5s': { image: 'phones/PocoM5s.png', stabilizationPoint: { x: '23.45%', y: '8.55%' }, specs: { processor: 'Helio G95', camera: '64MP AI Quad' } },
        'Iphone11': { image: 'phones/Iphone11.png', stabilizationPoint: { x: '33.62%', y: '18.59%' }, specs: { processor: 'A13 Bionic', camera: '12MP Dual Wide' } },
        'SamsungA21s': { image: 'phones/SamsungA21s.png', stabilizationPoint: { x: '17.32%', y: '13.95%' }, specs: { processor: 'Exynos 850', camera: '48MP Quad Camera' } },
        'Xiaomi17Pro': { image: 'phones/Xiaomi17Pro.png', stabilizationPoint: { x: '34.07%', y: '22.39%' }, specs: { processor: 'Snapdragon 8 Gen 5', camera: 'Leica Summilux Next-Gen' } },
        'Iphone17ProMax': { image: 'phones/Iphone17ProMax.png', stabilizationPoint: { x: '31.29%', y: '23.91%' }, specs: { processor: 'A19 Pro Bionic', camera: '48MP Tetraprism 2.0' } },
        
        // --- OTHER PHONES ---
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
        ru: { version_text: "Версия XV", controls_title: "Управление", phone_model_label: "Модель телефона:", phone_rotation_label: "Вращение телефона", joystick_instruction: "Нажмите и потяните в любом месте экрана для вращения.", info_button_title: "Информация", settings_button_title: "Настройки", info_button_text: "Инфо", settings_button_text: "Настройки", support_button_text: "Написать автору (@jelikton)", language_modal_title: "Выберите язык", settings_title: "Настройки", settings_graphics_title: "Графика / ФПС", settings_particles: "Частицы", settings_white_fire: "Белый огонь (Ярость)", settings_shadows: "Тени от телефона", settings_phone_title: "Телефон", settings_stabilization: "Стабилизация камеры", settings_extra_title: "Экстра", settings_super_fps: "Супер буст ФПС", close_button: "Закрыть", info_title: "Информация о проекте", info_development_title: "Разработка:", info_jelikton_role: "разработчик кода, основатель", info_romafacti1_role: "поиск телефонов, помощь в дизайне", info_links_title: "Ссылки:", loader_welcome: "Добро пожаловать на сайт jx stab!", loader_support: "Поддержите проект денежкой в телеграмме", loader_reactions: "100 Реакций - новая обнова", loader_enter: "Войти", donation_text: "Задонатить деньгу автору", settings_light_theme: "Светлая тема", music_toggle_text: "Музыка", processor_title: "Процессор", camera_title: "Камера" },
        en: { version_text: "Version XV", controls_title: "Controls", phone_model_label: "Phone Model:", phone_rotation_label: "Phone Rotation", joystick_instruction: "Click and drag anywhere on the screen to rotate.", info_button_title: "Information", settings_button_title: "Settings", info_button_text: "Info", settings_button_text: "Settings", support_button_text: "Write to author (@jelikton)", language_modal_title: "Select language", settings_title: "Settings", settings_graphics_title: "Graphics / FPS", settings_particles: "Particles", settings_white_fire: "White Fire (Rage)", settings_shadows: "Phone shadows", settings_phone_title: "Phone", settings_stabilization: "Camera Stabilization", settings_extra_title: "Extra", settings_super_fps: "Super FPS Boost", close_button: "Close", info_title: "About Project", info_development_title: "Development:", info_jelikton_role: "code developer, founder", info_romafacti1_role: "phone search, design assistant", info_links_title: "Links:", loader_welcome: "Welcome to jx stab!", loader_support: "Support the project with a donation on Telegram", loader_reactions: "100 Reactions - new update", loader_enter: "Enter", donation_text: "Donate to author", settings_light_theme: "Light Theme", music_toggle_text: "Music", processor_title: "Processor", camera_title: "Camera" }
    };
    
    // Particles Configs
    const darkThemeParticles = { fpsLimit: 60, particles: { number: { value: 90, density: { enable: true, value_area: 800 } }, color: { value: "#ffffff" }, shape: { type: "circle" }, opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } }, size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 1, sync: false } }, move: { enable: true, speed: 0.8, direction: "top", random: true, straight: false, out_mode: "out" } }, interactivity: { events: { onclick: { enable: false } } } };
    const lightThemeParticles = { paused: true, fpsLimit: 60, particles: { number: { value: 60 }, color: { value: "#000000" }, shape: { type: "circle" }, opacity: { value: 0.4, random: true }, size: { value: 2, random: true }, move: { enable: true, speed: 1.5, direction: "none", random: true, out_mode: "out" } }, interactivity: { events: { onclick: { enable: false } } } };
    
    // ==========================================
    // 2. STATE VARIABLES
    // ==========================================
    
    let currentRotation = 0, targetRotation = 0, rageLevel = 0, rageTimeout, particlesInstance = null, lastAngle = 0, isDragging = false;
    let mouseX = 0, mouseY = 0;
    
    let lastTime = performance.now();
    let frameCount = 0;
    let fps = 0;
    let isPropellerMode = false;
    
    // Debug State
    let isDebugActive = false;

    // ==========================================
    // 3. DOM ELEMENTS
    // ==========================================
    
    const phoneInfoContainer = document.getElementById('phone-info-container');
    const phoneProcessorInfo = document.getElementById('phone-processor-info');
    const phoneCameraInfo = document.getElementById('phone-camera-info');
    const loaderOverlay = document.getElementById('loader-overlay');
    const enterSiteBtn = document.getElementById('enter-site-btn');
    const backgroundMusic = document.getElementById('background-music');
    const musicToggleButton = document.getElementById('music-toggle-btn');
    const propellerBtn = document.getElementById('propeller-btn');
    const fpsDisplay = document.getElementById('fps-counter');
    
    // Toggles
    const lightThemeToggle = document.getElementById('light-theme-toggle');
    const particlesToggle = document.getElementById('particles-toggle');
    const whiteFireToggle = document.getElementById('white-fire-toggle');
    const shadowsToggle = document.getElementById('shadows-toggle');
    const stabilizationToggle = document.getElementById('stabilization-toggle');
    const superFpsBoostToggle = document.getElementById('super-fps-boost-toggle');
    const bgSelect = document.getElementById('bg-select');
    const viewfinderToggle = document.getElementById('viewfinder-toggle');
    const gyroToggle = document.getElementById('gyro-toggle');
    
    // Elements
    const cameraViewfinder = document.getElementById('camera-viewfinder');
    const viewfinderHorizon = document.getElementById('viewfinder-horizon');
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

    // ==========================================
    // 4. INITIALIZATION & CORE FUNCTIONS
    // ==========================================

    function init() {
        initLoader();
        initLanguage();
        loadSettings(); 
        initParticles();
        initSpamProtection();
        updatePhoneSelector();
        updatePhone();

        // Listeners
        menuBtn.addEventListener('click', () => mainMenuModal.classList.remove('hidden'));
        settingsBtn.addEventListener('click', () => settingsModal.classList.remove('hidden'));
        infoBtn.addEventListener('click', () => infoModal.classList.remove('hidden'));
        
        document.querySelectorAll('.modal-close-btn').forEach(btn => {
            btn.addEventListener('click', (e) => e.currentTarget.closest('.modal-overlay').classList.add('hidden'));
        });
        
        // Mouse/Touch for Rotation
        wrapperBg.addEventListener('mousedown', onDragStart);
        wrapperBg.addEventListener('touchstart', onDragStart, { passive: false });
        
        // Mouse Move for Parallax
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) - 0.5;
            mouseY = (e.clientY / window.innerHeight) - 0.5;
        });
        
        phoneSelect.addEventListener('change', updatePhone);
        
        [particlesToggle, whiteFireToggle, shadowsToggle, stabilizationToggle, superFpsBoostToggle, lightThemeToggle, viewfinderToggle, gyroToggle].forEach(toggle => {
            toggle.addEventListener('change', handleSettingsChange);
        });
        
        bgSelect.addEventListener('change', handleBackgroundChange);
        musicToggleButton.addEventListener('click', toggleMusic);
        propellerBtn.addEventListener('click', activatePropeller);

        // Gyro Logic
        gyroToggle.addEventListener('click', (e) => {
            if (gyroToggle.checked && typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
                DeviceOrientationEvent.requestPermission()
                    .then(permissionState => {
                        if (permissionState !== 'granted') {
                            gyroToggle.checked = false;
                            alert('Gyroscope permission denied.');
                        }
                    })
                    .catch(console.error);
            }
        });
        window.addEventListener('deviceorientation', handleGyroscope);

        // --- DEBUG MODE INTEGRATION ---
        setupDebugMode();

        // Start Loop
        requestAnimationFrame(animationLoop);
    }
    
    // --- INTEGRATED DEBUG MODE ---
    function setupDebugMode() {
        // Expose function to console
        window.camera = function() {
            isDebugActive = true;
            wrapperBg.style.cursor = 'crosshair';
            console.log(`%c[DEBUG] Режим получения координат активирован. Кликните на нужную точку на телефоне.`, 'color: lime; font-weight: bold;');
        };

        window.off = function() {
            isDebugActive = false;
            wrapperBg.style.cursor = 'grab';
            console.log('%c[DEBUG] Режим отладки выключен.', 'color: red; font-weight: bold;');
        };

        // Debug Click Listener
        wrapperBg.addEventListener('click', (event) => {
            if (!isDebugActive) return;
            event.stopPropagation();

            const rect = phoneImage.getBoundingClientRect();
            // Check if click is inside image
            if (event.clientX < rect.left || event.clientX > rect.right ||
                event.clientY < rect.top  || event.clientY > rect.bottom) {
                return;
            }

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const xPercent = (x / rect.width * 100).toFixed(2);
            const yPercent = (y / rect.height * 100).toFixed(2);
            
            const selectedModel = phoneSelect.value;
            // Update live
            phones[selectedModel].stabilizationPoint = { x: `${xPercent}%`, y: `${yPercent}%` };
            updatePhone();

            // Generate code
            const codeToCopy = `'${selectedModel}': {\n    image: 'phones/${phones[selectedModel].image.split('/').pop()}',\n    stabilizationPoint: { x: '${xPercent}%', y: '${yPercent}%' },\n    specs: { processor: 'N/A', camera: 'N/A' }\n},`;
            
            console.log("СКОПИРУЙТЕ ЭТОТ КОД в app.js:\n\n", codeToCopy);
            alert(`Точка для "${selectedModel}" установлена!\nКод выведен в консоль (F12).`);
            window.off();
        }, true);
        
        console.log('%c[SYSTEM] Debug mode ready. Type camera() in console to use.', 'color: gray;');
    }
    // ----------------------------

    function initLoader() { enterSiteBtn.addEventListener('click', () => { loaderOverlay.classList.add('hidden'); }); }
    function toggleMusic() { const icon = musicToggleButton.querySelector('i'); if (backgroundMusic.paused) { backgroundMusic.play().catch(e => console.error("Music playback failed:", e)); icon.classList.remove('fa-music'); icon.classList.add('fa-volume-high'); } else { backgroundMusic.pause(); icon.classList.remove('fa-volume-high'); icon.classList.add('fa-music'); } }
    function setLanguage(lang) { document.documentElement.lang = lang; document.querySelectorAll('[data-translate-key]').forEach(el => { const key = el.dataset.translateKey; if (translations[lang] && translations[lang][key]) { const textNode = Array.from(el.childNodes).find(node => node.nodeType === 3 && node.textContent.trim().length > 0); if (textNode) { textNode.textContent = translations[lang][key]; } else if (el.querySelector('.btn-text')) { el.querySelector('.btn-text').textContent = translations[lang][key]; } else { el.textContent = translations[lang][key]; } } }); }
    function initLanguage() { const savedLang = localStorage.getItem('selectedLang'); if (savedLang) { setLanguage(savedLang); } else { languageModal.classList.remove('hidden'); } document.querySelectorAll('.lang-btn').forEach(btn => { btn.addEventListener('click', () => { const lang = btn.dataset.lang; setLanguage(lang); localStorage.setItem('selectedLang', lang); languageModal.classList.add('hidden'); }); }); }
    
    async function loadParticlesConfig(config) { if (particlesInstance) { particlesInstance.destroy(); } particlesInstance = await tsParticles.load("tsparticles", config); }
    function initParticles() { const config = lightThemeToggle.checked ? lightThemeParticles : darkThemeParticles; loadParticlesConfig(config); }

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

    function handleGyroscope(e) {
        if (!gyroToggle.checked || isPropellerMode) return;
        let gamma = e.gamma || 0; 
        if(gamma > 45) gamma = 45;
        if(gamma < -45) gamma = -45;
        
        if (!isDragging) {
             targetRotation = gamma * 1.5; 
        }
    }

    function activatePropeller() {
        if(isPropellerMode) return;
        isPropellerMode = true;
        phoneImage.classList.add('propeller-active');
        mainMenuModal.classList.add('hidden');
        
        setTimeout(() => {
            isPropellerMode = false;
            phoneImage.classList.remove('propeller-active');
            currentRotation = 0;
            targetRotation = 0;
        }, 10000);
    }

    // ==========================================
    // 5. ANIMATION LOOP
    // ==========================================

    function animationLoop() {
        // FPS Calc
        const now = performance.now();
        frameCount++;
        if (now - lastTime >= 1000) {
            fps = frameCount;
            fpsDisplay.innerText = fps + " FPS";
            frameCount = 0;
            lastTime = now;
        }

        if (!isPropellerMode) {
            // Smooth Rotation
            if (isDragging || Math.abs(targetRotation - currentRotation) > 0.01) {
                currentRotation += (targetRotation - currentRotation) * 0.15;
            }

            // Apply Transform
            let transformString = `perspective(1000px) rotateZ(${currentRotation}deg)`;
            
            // Apply Parallax/Shadows if enabled
            if (shadowsToggle.checked && !superFpsBoostToggle.checked) {
                const tiltX = mouseY * 15;
                const tiltY = mouseX * -15;
                transformString += ` rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
            }
            phoneImage.style.transform = transformString;
            
            // Viewfinder Logic
            if (viewfinderToggle.checked) {
                 if(stabilizationToggle.checked) {
                     viewfinderHorizon.style.transform = `rotate(${ -currentRotation * 0.1 }deg) scale(1.5)`;
                 } else {
                     viewfinderHorizon.style.transform = `rotate(${ -currentRotation }deg) scale(1.5)`;
                 }
            }
        }

        requestAnimationFrame(animationLoop);
    }
    
    // ==========================================
    // 6. CONTROLS (DRAG & ROTATE)
    // ==========================================

    function onDragStart(e) {
        if (e.target.closest('.modal-overlay') || e.target.closest('#menu-btn') || isPropellerMode || isDebugActive) return;
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
        const deltaX = clientX - joystickCenterX; const deltaY = clientY - joystickCenterY; const distance = Math.min(40, Math.hypot(deltaX, deltaY)); const angleRad = Math.atan2(deltaY, deltaX);
        joystickHandle.style.transform = `translate(-50%, -50%) translate(${distance * Math.cos(angleRad)}px, ${distance * Math.sin(angleRad)}px)`;
    }
    
    function onDragEnd() { isDragging = false; floatingJoystick.classList.add('hidden'); joystickHandle.style.transform = 'translate(-50%, -50%)'; document.removeEventListener('mousemove', onDragMove); document.removeEventListener('mouseup', onDragEnd); document.removeEventListener('touchmove', onDragMove); document.removeEventListener('touchend', onDragEnd); }
    
    function updateRotation(newRotation) {
        targetRotation = newRotation;
        if (superFpsBoostToggle.checked) return;
        if (particlesToggle.checked && particlesInstance && lightThemeToggle.checked) { particlesInstance.play(); setTimeout(() => particlesInstance.pause(), 500); }
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
    
    // ==========================================
    // 7. SETTINGS HANDLERS
    // ==========================================

    function handleBackgroundChange() {
        document.body.className = 'dark-theme';
        if(lightThemeToggle.checked) document.body.classList.add('light-theme');
        document.body.classList.add(bgSelect.value);
        saveSettings();
    }

    function handleSettingsChange() {
        if (superFpsBoostToggle.checked) { particlesToggle.checked = false; whiteFireToggle.checked = false; shadowsToggle.checked = false; particlesToggle.disabled = true; whiteFireToggle.disabled = true; shadowsToggle.disabled = true; } else { particlesToggle.disabled = false; whiteFireToggle.disabled = false; shadowsToggle.disabled = false; }
        document.body.classList.toggle('no-shadows', !shadowsToggle.checked || superFpsBoostToggle.checked);
        
        if(lightThemeToggle.checked) document.body.classList.add('light-theme');
        else document.body.classList.remove('light-theme');
        
        if(viewfinderToggle.checked) cameraViewfinder.classList.remove('hidden');
        else cameraViewfinder.classList.add('hidden');

        const newConfig = lightThemeToggle.checked ? lightThemeParticles : darkThemeParticles;
        loadParticlesConfig(newConfig).then(() => { if (!particlesToggle.checked) { particlesInstance.pause(); } });
        updatePhone(); saveSettings();
    }
    
    function saveSettings() { 
        localStorage.setItem('stabilizerSettingsXS_Propeller', JSON.stringify({ 
            lang: document.documentElement.lang, 
            particles: particlesToggle.checked, 
            fire: whiteFireToggle.checked, 
            shadows: shadowsToggle.checked, 
            stabilization: stabilizationToggle.checked, 
            superFps: superFpsBoostToggle.checked, 
            lightTheme: lightThemeToggle.checked,
            bg: bgSelect.value,
            viewfinder: viewfinderToggle.checked,
            gyro: gyroToggle.checked
        })); 
    }
    
    function loadSettings() {
        const settings = JSON.parse(localStorage.getItem('stabilizerSettingsXS_Propeller'));
        if (settings) {
            particlesToggle.checked = settings.particles ?? true;
            whiteFireToggle.checked = settings.fire ?? true;
            shadowsToggle.checked = settings.shadows ?? true;
            stabilizationToggle.checked = settings.stabilization ?? true; 
            superFpsBoostToggle.checked = settings.superFps ?? false;
            lightThemeToggle.checked = settings.lightTheme ?? false;
            bgSelect.value = settings.bg || 'bg-default';
            viewfinderToggle.checked = settings.viewfinder ?? false;
            gyroToggle.checked = settings.gyro ?? false;
        } else {
            // Force default stabilization ON for new users
            stabilizationToggle.checked = true;
        }
        handleBackgroundChange();
        handleSettingsChange();
    }
    
    init();
});