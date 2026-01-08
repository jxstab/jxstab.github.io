/* --- уроды ебаные не работает это говно блять --- */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. СПИСОК ТЕЛЕФОНОВ ---
    const phones = {
        'IIIF150H2022': { image: 'phones/IIIF150H2022.png', stabilizationPoint: { x: '35.51%', y: '19.20%' }, specs: { processor: 'Helio G95', camera: 'Night Vision' } },
        'SamsungS21FE': { image: 'phones/SamsungS21FE.png', stabilizationPoint: { x: '31.54%', y: '19.61%' }, specs: { processor: 'Snapdragon 888', camera: '12MP Pro-Grade' } },
        'SamsungA16': { image: 'phones/SamsungA16.png', stabilizationPoint: { x: '31.75%', y: '19.81%' }, specs: { processor: 'Exynos 1330', camera: '50MP Main' } },
        'Iphone13ProMax': { image: 'phones/Iphone13ProMax.png', stabilizationPoint: { x: '30.83%', y: '23.47%' }, specs: { processor: 'A15 Bionic', camera: 'Pro 12MP System' } },
        'Nothing3A': { image: 'phones/Nothing3A.png', stabilizationPoint: { x: '50.00%', y: '20.00%' }, specs: { processor: 'Dimensity 7200 Pro', camera: '50MP Dual' } },
        'SamsungS2': { image: 'phones/SamsungS2.png', stabilizationPoint: { x: '45.70%', y: '17.37%' }, specs: { processor: 'Exynos 4210', camera: '8MP Retro' } },
        'Xiaomi14T': { image: 'phones/Xiaomi14T.png', stabilizationPoint: { x: '35.17%', y: '25.09%' }, specs: { processor: 'Dimensity 8300', camera: 'Leica 50MP' } },
        'Iphone11Pro': { image: 'phones/Iphone11Pro.png', stabilizationPoint: { x: '31.04%', y: '21.44%' }, specs: { processor: 'A13 Bionic', camera: 'Triple 12MP' } },
        
        // Остальные
        'HuaweiPuraX': { image: 'phones/HuaweiPuraX.png', stabilizationPoint: { x: '24.00%', y: '19.36%' }, specs: { processor: 'Kirin 9010 Prototype', camera: 'XMAGE Concept Lens' } },
        'IqooZ10Turbo+': { image: 'phones/IqooZ10Turbo+.png', stabilizationPoint: { x: '42.42%', y: '15.00%' }, specs: { processor: 'Dimensity 9400+', camera: '64MP Flagship OIS' } },
        'OppoReno14F': { image: 'phones/OppoReno14F.png', stabilizationPoint: { x: '50.00%', y: '21.00%' }, specs: { processor: 'Dimensity 7200', camera: '50MP Cosmo Ring' } },
        'PocoM3Pro5G': { image: 'phones/PocoM3Pro5G.png', stabilizationPoint: { x: '34.80%', y: '8.28%' }, specs: { processor: 'Dimensity 700', camera: '48MP AI Triple' } },
        'RedmiNote8Pro': { image: 'phones/RedmiNote8Pro.png', stabilizationPoint: { x: '50.00%', y: '19.17%' }, specs: { processor: 'Helio G90T', camera: '64MP AI Quad' } },
        'RedmiNote14_4G': { image: 'phones/RedmiNote14_4G.png', stabilizationPoint: { x: '38.00%', y: '17.00%' }, specs: { processor: 'Snapdragon 685', camera: '108MP Main Lens' } },
        'GoogleFold2': { image: 'phones/GoogleFold2.png', stabilizationPoint: { x: '56.18%', y: '18.97%' }, specs: { processor: 'Tensor G4 Foldable', camera: 'Pixel-Perfect Fold Cam' } },
        'Honor200': { image: 'phones/Honor200.png', stabilizationPoint: { x: '37.75%', y: '19.30%' }, specs: { processor: 'Snapdragon 7 Gen 3', camera: 'Harcourt Portrait Master' } },
        'HonorMagic6P': { image: 'phones/HonorMagic6P.png', stabilizationPoint: { x: '45.07%', y: '32.88%' }, specs: { processor: 'Snapdragon 8 Gen 3', camera: 'Falcon Capture AI System' } },
        'HonorMagicX9C': { image: 'phones/HonorMagicX9C.png', stabilizationPoint: { x: '44.36%', y: '18.07%' }, specs: { processor: 'Snapdragon 6 Gen 1', camera: 'Circular Matrix Lens' } },
        'HonorX8C': { image: 'phones/HonorX8C.png', stabilizationPoint: { x: '28.51%', y: '14.43%' }, specs: { processor: 'Snapdragon 680', camera: 'High-Res Matrix' } },
        'HuaweiMateXTU': { image: 'phones/HuaweiMateXTU.png', stabilizationPoint: { x: '43.08%', y: '27.12%' }, specs: { processor: 'Kirin 9010', camera: 'Falcon Wing Hinge Cam' } },
        'HuaweiPura70U': { image: 'phones/HuaweiPura70U.png', stabilizationPoint: { x: '45.37%', y: '25.02%' }, specs: { processor: 'Kirin 9010', camera: '1-inch Retractable Lens' } },
        'HuaweiPura80U': { image: 'phones/HuaweiPura80U.png', stabilizationPoint: { x: '40.66%', y: '37.10%' }, specs: { processor: 'Kirin 9020', camera: 'XMAGE 2.0 Variable Lens' } },
        'HuaweiY9C': { image: 'phones/HuaweiY9C.png', stabilizationPoint: { x: '37.74%', y: '16.04%' }, specs: { processor: 'Kirin 710F', camera: '48MP Pop-Up AI Cam' } },
        'InfinixHot12P': { image: 'phones/InfinixHot12P.png', stabilizationPoint: { x: '36.08%', y: '20.08%' }, specs: { processor: 'Unisoc Tiger T616', camera: '50MP SuperNight' } },
        'InfinixHot40I': { image: 'phones/InfinixHot40I.png', stabilizationPoint: { x: '41.80%', y: '25.00%' }, specs: { processor: 'Unisoc T606', camera: '50MP Super-Night AI' } },
        'Iphone11': { image: 'phones/Iphone11.png', stabilizationPoint: { x: '33.62%', y: '18.59%' }, specs: { processor: 'A13 Bionic', camera: '12MP Dual Wide' } },
        'Iphone17ProMax': { image: 'phones/Iphone17ProMax.png', stabilizationPoint: { x: '31.29%', y: '23.91%' }, specs: { processor: 'A19 Pro Bionic', camera: '48MP Tetraprism 2.0' } },
        'IphoneXSM': { image: 'phones/IphoneXSM.png', stabilizationPoint: { x: '30.57%', y: '12.43%' }, specs: { processor: 'A12 Bionic Chip', camera: '12MP Dual Smart HDR' } },
        'IqooNeo10PP': { image: 'phones/IqooNeo10PP.png', stabilizationPoint: { x: '41.58%', y: '20.20%' }, specs: { processor: 'Snapdragon 8 Elite', camera: 'Vivo V3+ Imaging Chip' } },
        'IqooNeo9SPP': { image: 'phones/IqooNeo9SPP.png', stabilizationPoint: { x: '37.70%', y: '11.79%' }, specs: { processor: 'Snapdragon 8 Gen 3', camera: 'IMX920 Super-Sense' } },
        'LgK10': { image: 'phones/LgK10.png', stabilizationPoint: { x: '49.68%', y: '13.74%' }, specs: { processor: 'Mediatek MT6753', camera: '13MP Auto-Focus Cam' } },
        'MeizuLucky08': { image: 'phones/MeizuLucky08.png', stabilizationPoint: { x: '50.00%', y: '16.46%' }, specs: { processor: 'Snapdragon 7s Gen 2', camera: 'Flyme AI Imaging' } },
        'Nothing1': { image: 'phones/Nothing1.png', stabilizationPoint: { x: '38.65%', y: '15.57%' }, specs: { processor: 'Snapdragon 778G+ 5G', camera: 'Glyph Interface Camera' } },
        'OnePlus11R': { image: 'phones/OnePlus11R.png', stabilizationPoint: { x: '37.86%', y: '26.56%' }, specs: { processor: 'Snapdragon 8+ Gen 1', camera: '50MP IMX890' } },
        'OnePlus12': { image: 'phones/OnePlus12.png', stabilizationPoint: { x: '39.71%', y: '20.12%' }, specs: { processor: 'Snapdragon 8 Gen 3', camera: 'Hasselblad 4th Gen Camera' } },
        'OnePlusAce3': { image: 'phones/OnePlusAce3.png', stabilizationPoint: { x: '43.10%', y: '19.66%' }, specs: { processor: 'Snapdragon 8 Gen 2', camera: 'Sony IMX890 50MP Sensor' } },
        'Pixel8P': { image: 'phones/Pixel8P.png', stabilizationPoint: { x: '21.34%', y: '16.57%' }, specs: { processor: 'Google Tensor G3', camera: '50MP Octa-PD Pro Cam' } },
        'PocoM5s': { image: 'phones/PocoM5s.png', stabilizationPoint: { x: '23.45%', y: '8.55%' }, specs: { processor: 'Helio G95', camera: '64MP AI Quad' } },
        'PocoX6P': { image: 'phones/PocoX6P.png', stabilizationPoint: { x: '38.69%', y: '13.81%' }, specs: { processor: 'Dimensity 8300 Ultra', camera: '64MP OIS Triple Cam' } },
        'PocoX7Pro': { image: 'phones/PocoX7Pro.png', stabilizationPoint: { x: '40.49%', y: '13.94%' }, specs: { processor: 'Dimensity 8400 Ultra', camera: '108MP Crystal-Clear' } },
        'Realme9i': { image: 'phones/Realme9i.png', stabilizationPoint: { x: '37.86%', y: '12.34%' }, specs: { processor: 'Snapdragon 680', camera: '50MP AI Matrix' } },
        'RealmeC71': { image: 'phones/RealmeC71.png', stabilizationPoint: { x: '37.30%', y: '22.39%' }, specs: { processor: 'Unisoc T612', camera: '50MP AI Cam' } },
        'RealmeGT6': { image: 'phones/RealmeGT6.png', stabilizationPoint: { x: '39.55%', y: '19.52%' }, specs: { processor: 'Snapdragon 8s Gen 3', camera: 'Super-AI Nightscape' } },
        'RealmeGT7Pro': { image: 'phones/RealmeGT7Pro.png', stabilizationPoint: { x: '38.82%', y: '26.66%' }, specs: { processor: 'Snapdragon 8 Elite', camera: '200MP OIS Matrix System' } },
        'Redmi10': { image: 'phones/Redmi10.png', stabilizationPoint: { x: '37.86%', y: '20.12%' }, specs: { processor: 'Helio G88', camera: '50MP AI Quad' } },
        'Redmi13C': { image: 'phones/Redmi13C.png', stabilizationPoint: { x: '38.43%', y: '15.76%' }, specs: { processor: 'Helio G85', camera: '50MP AI Triple' } },
        'Redmi9A': { image: 'phones/Redmi9A.png', stabilizationPoint: { x: '34.93%', y: '9.04%' }, specs: { processor: 'Helio G25 Octa-Core', camera: '13MP AI Main Camera' } },
        'SamsungA15': { image: 'phones/SamsungA15.png', stabilizationPoint: { x: '40.55%', y: '19.38%' }, specs: { processor: 'Helio G99', camera: '50MP Vision Booster' } },
        'SamsungA21s': { image: 'phones/SamsungA21s.png', stabilizationPoint: { x: '17.32%', y: '13.95%' }, specs: { processor: 'Exynos 850', camera: '48MP Quad Camera' } },
        'SamsungA72': { image: 'phones/SamsungA72.png', stabilizationPoint: { x: '40.45%', y: '21.88%' }, specs: { processor: 'Snapdragon 720G', camera: '64MP OIS Quad-System' } },
        'SamsungA9': { image: 'phones/SamsungA9.png', stabilizationPoint: { x: '33.56%', y: '17.20%' }, specs: { processor: 'Snapdragon 660', camera: 'World\'s First Quad Camera' } },
        'SamsungJ1': { image: 'phones/SamsungJ1.png', stabilizationPoint: { x: '49.66%', y: '23.50%' }, specs: { processor: 'Spreadtrum SC9830', camera: '5MP f/2.2 Rear Cam' } },
        'SamsungJ4': { image: 'phones/SamsungJ4.png', stabilizationPoint: { x: '50.34%', y: '16.35%' }, specs: { processor: 'Exynos 7570 Quad', camera: '13MP Single Shooter' } },
        'SamsungS10+': { image: 'phones/SamsungS10+.png', stabilizationPoint: { x: '53.21%', y: '18.73%' }, specs: { processor: 'Exynos 9820', camera: '16MP Ultra-Wide Lens' } },
        'SamsungS21U': { image: 'phones/SamsungS21U.png', stabilizationPoint: { x: '19.31%', y: '17.25%' }, specs: { processor: 'Exynos 2100', camera: '108MP Pro-Grade Sensor' } },
        'SamsungS24U': { image: 'phones/SamsungS24U.png', stabilizationPoint: { x: '37.92%', y: '22.29%' }, specs: { processor: 'Snapdragon 8 Gen 3 for Galaxy', camera: '200MP ISOCELL HP2X' } },
        'SamsungS25U': { image: 'phones/SamsungS25U.png', stabilizationPoint: { x: '37.38%', y: '25.63%' }, specs: { processor: 'Snapdragon 8 Elite For Galaxy', camera: 'ISOCELL HPX 250MP' } },
        'SamsungS4Zoom': { image: 'phones/SamsungS4Zoom.png', stabilizationPoint: { x: '50.14%', y: '30.74%' }, specs: { processor: 'Exynos 5410 Octa', camera: '16MP with 10x Optical Zoom' } },
        'SamsungS9+': { image: 'phones/SamsungS9+.png', stabilizationPoint: { x: '50.58%', y: '21.00%' }, specs: { processor: 'Exynos 9810', camera: 'Dual Aperture Lens' } },
        'SamsungXCover7': { image: 'phones/SamsungXCover7.png', stabilizationPoint: { x: '37.36%', y: '13.14%' }, specs: { processor: 'Dimensity 6100+', camera: 'Rugged 50MP Sensor' } },
        'SamsungZFlip6': { image: 'phones/SamsungZFlip6.png', stabilizationPoint: { x: '35.54%', y: '9.70%' }, specs: { processor: 'Snapdragon 8 Gen 3 for Galaxy', camera: 'FlexiCam 5.0 System' } },
        'SonyXperia1M7': { image: 'phones/SonyXperia1M7.png', stabilizationPoint: { x: '26.07%', y: '22.78%' }, specs: { processor: 'Snapdragon 8 Elite', camera: 'Exmor T 1/1.35" Sensor' } },
        'TecnoPova4': { image: 'phones/TecnoPova4.png', stabilizationPoint: { x: '36.98%', y: '13.54%' }, specs: { processor: 'Helio G99 Gaming Core', camera: '50MP Dual AI Cam' } },
        'VivoX200U': { image: 'phones/VivoX200U.png', stabilizationPoint: { x: '44.55%', y: '35.46%' }, specs: { processor: 'Snapdragon 8 Elite', camera: 'Zeiss APO-Tessar Lens' } },
        'Xiaomi10U': { image: 'phones/Xiaomi10U.png', stabilizationPoint: { x: '37.75%', y: '31.02%' }, specs: { processor: 'Snapdragon 865 5G', camera: '120x AI Super Zoom' } },
        'Xiaomi13TPro': { image: 'phones/Xiaomi13TPro.png', stabilizationPoint: { x: '38.20%', y: '23.34%' }, specs: { processor: 'Dimensity 9200+', camera: '50MP Leica' } },
        'Xiaomi15U': { image: 'phones/Xiaomi15U.png', stabilizationPoint: { x: '42.09%', y: '34.85%' }, specs: { processor: 'Snapdragon 8 Elite', camera: 'Leica Summilux 1.5-inch' } },
        'Xiaomi17Pro': { image: 'phones/Xiaomi17Pro.png', stabilizationPoint: { x: '34.07%', y: '22.39%' }, specs: { processor: 'Snapdragon 8 Gen 5', camera: 'Leica Summilux Next-Gen' } },
        'Xiaomi9': { image: 'phones/Xiaomi9.png', stabilizationPoint: { x: '35.43%', y: '10.67%' }, specs: { processor: 'Snapdragon 855', camera: 'Sony IMX586 48MP' } },
        'XiaomiMixAlpha': { image: 'phones/XiaomiMixAlpha.png', stabilizationPoint: { x: '38.38%', y: '12.03%' }, specs: { processor: 'Snapdragon 855+', camera: '108MP Surround Display Cam' } },
        'XiaomiMixFlip': { image: 'phones/XiaomiMixFlip.png', stabilizationPoint: { x: '41.80%', y: '22.10%' }, specs: { processor: 'Snapdragon 8 Gen 3', camera: 'Leica Vario-Summilux Flip' } },
        'ZteNubiaZ70U': { image: 'phones/ZteNubiaZ70U.png', stabilizationPoint: { x: '39.47%', y: '15.76%' }, specs: { processor: 'Snapdragon 8 Elite', camera: 'Neovision 35mm UDC' } }
    };
    
    // --- ПЕРЕВОДЫ ---
    const translations = {
        ru: { version_text: "Версия XV", controls_title: "Управление", phone_model_label: "Устройство:", info_button_text: "Инфо", settings_button_text: "Настройки", support_button_text: "Написать автору", language_modal_title: "Язык", settings_title: "Настройки", settings_white_fire: "Rage Glow (Огонь)", settings_shadows: "3D Тени", settings_stabilization: "Стабилизация OIS", settings_super_fps: "FPS Boost", close_button: "Закрыть", info_title: "О Проекте", info_development_title: "Команда:", loader_welcome: "StabFX Ultimate", loader_support: "Симулятор стабилизации", loader_reactions: "100 Реакций - Обнова", loader_enter: "Запустить", donation_text: "Поддержать разработку", settings_light_theme: "Светлая тема", music_toggle_text: "Музыка", processor_title: "Процессор", camera_title: "Камера", turbo_title: "Turbo Propeller", launch_btn: "ЗАПУСТИТЬ", fx_title: "FX Studio" },
        en: { version_text: "Version XV", controls_title: "Controls", phone_model_label: "Device:", info_button_text: "Info", settings_button_text: "Settings", support_button_text: "Contact Author", language_modal_title: "Language", settings_title: "Settings", settings_white_fire: "Rage Glow", settings_shadows: "3D Shadows", settings_stabilization: "OIS Stabilization", settings_super_fps: "FPS Boost", close_button: "Close", info_title: "About", info_development_title: "Team:", loader_welcome: "StabFX Ultimate", loader_support: "Cinema Stabilization Sim", loader_reactions: "100 Reactions - Update", loader_enter: "Start App", donation_text: "Donate", settings_light_theme: "Light Mode", music_toggle_text: "Music", processor_title: "Processor", camera_title: "Camera", turbo_title: "Turbo Propeller", launch_btn: "LAUNCH", fx_title: "FX Studio" }
    };
    
    // --- 2. STATE ---
    let currentRotation = 0, targetRotation = 0, rageLevel = 0, rageTimeout, particlesInstance = null, lastAngle = 0, isDragging = false;
    let mouseX = 0, mouseY = 0;
    let lastTime = performance.now();
    let frameCount = 0;
    let isPropellerMode = false;
    let propellerTimer = null;
    let currentFxMode = 'none';
    let joystickCenterX = 0, joystickCenterY = 0;
    let isDebugActive = false;

    // --- 3. DOM ELEMENTS ---
    const loaderOverlay = document.getElementById('loader-overlay');
    const enterSiteBtn = document.getElementById('enter-site-btn');
    const backgroundMusic = document.getElementById('background-music');
    
    const menuBtn = document.getElementById('menu-btn');
    const mainMenuModal = document.getElementById('main-menu-modal');
    const settingsModal = document.getElementById('settings-modal');
    const infoModal = document.getElementById('info-modal');
    const fxModal = document.getElementById('fx-modal');
    const languageModal = document.getElementById('language-modal');
    
    const settingsBtn = document.getElementById('settings-btn');
    const infoBtn = document.getElementById('info-btn');
    const fxPanelBtn = document.getElementById('fx-panel-btn');
    
    const phoneSelect = document.getElementById('phone-select');
    const phoneImage = document.getElementById('phone-image');
    const phoneInfoContainer = document.getElementById('phone-info-container');
    const processorInfo = document.getElementById('phone-processor-info');
    const cameraInfo = document.getElementById('phone-camera-info');
    
    const fpsDisplay = document.getElementById('fps-counter');
    const whiteFireEffect = document.getElementById('white-fire-effect');
    const floatingJoystick = document.getElementById('floating-joystick');
    const joystickHandle = document.getElementById('joystick-handle');
    const wrapperBg = document.getElementById('wrapper-bg');
    
    // ЭЛЕМЕНТЫ УПРАВЛЕНИЯ (С ПРОВЕРКОЙ НА СУЩЕСТВОВАНИЕ)
    const lightThemeToggle = document.getElementById('light-theme-toggle');
    const whiteFireToggle = document.getElementById('white-fire-toggle');
    const shadowsToggle = document.getElementById('shadows-toggle');
    const stabilizationToggle = document.getElementById('stabilization-toggle');
    const superFpsBoostToggle = document.getElementById('super-fps-boost-toggle');
    const viewfinderToggle = document.getElementById('viewfinder-toggle');
    const bgSelect = document.getElementById('bg-select');
    const musicBtn = document.getElementById('music-toggle-btn');
    
    const propellerBtn = document.getElementById('propeller-btn');
    const propSettingsBtn = document.getElementById('propeller-settings-toggle');
    const propSettingsPanel = document.getElementById('propeller-settings-panel');
    const propTimeInput = document.getElementById('propeller-time');
    const propPowerInput = document.getElementById('propeller-power');
    const fxButtons = document.querySelectorAll('.fx-btn');

    // --- 4. DEBUG MODE RESTORED ---
    function setupDebugMode() {
        window.camera = function() {
            isDebugActive = true;
            wrapperBg.style.cursor = 'crosshair';
            console.log('%c[DEBUG] Режим калибровки ВКЛ. Кликни по камере.', 'color: lime; font-weight: bold; font-size: 14px;');
        };
        window.off = function() {
            isDebugActive = false;
            wrapperBg.style.cursor = 'default';
            console.log('%c[DEBUG] Режим калибровки ВЫКЛ.', 'color: red; font-weight: bold;');
        };
    }

    // --- 5. INIT ---
    function init() {
        initLoader();
        initLanguage();
        setupDebugMode(); 
        
        // БЕЗОПАСНАЯ ИНИЦИАЛИЗАЦИЯ
        if(stabilizationToggle) stabilizationToggle.checked = true;
        loadSettings(); 
        
        updatePhoneSelector();
        updatePhone();

        if(menuBtn) menuBtn.addEventListener('click', () => toggleModal(mainMenuModal, true));
        if(settingsBtn) settingsBtn.addEventListener('click', () => { toggleModal(mainMenuModal, false); toggleModal(settingsModal, true); });
        if(infoBtn) infoBtn.addEventListener('click', () => { toggleModal(mainMenuModal, false); toggleModal(infoModal, true); });
        if(fxPanelBtn) fxPanelBtn.addEventListener('click', () => { toggleModal(mainMenuModal, false); toggleModal(fxModal, true); });
        
        document.querySelectorAll('.modal-close-btn').forEach(btn => btn.addEventListener('click', (e) => toggleModal(e.target.closest('.modal-overlay'), false)));

        if(wrapperBg) {
            wrapperBg.addEventListener('mousedown', onDragStart);
            wrapperBg.addEventListener('touchstart', onDragStart, { passive: false });
            wrapperBg.addEventListener('click', (event) => {
                if (!isDebugActive) return;
                event.stopPropagation();
                const rect = phoneImage.getBoundingClientRect();
                if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top  || event.clientY > rect.bottom) return;
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                const xPercent = (x / rect.width * 100).toFixed(2);
                const yPercent = (y / rect.height * 100).toFixed(2);
                const selectedModel = phoneSelect.value;
                phones[selectedModel].stabilizationPoint = { x: `${xPercent}%`, y: `${yPercent}%` };
                updatePhone();
                const codeToCopy = `'${selectedModel}': { image: '${phones[selectedModel].image}', stabilizationPoint: { x: '${xPercent}%', y: '${yPercent}%' }, specs: ... },`;
                console.log("КОД ДЛЯ ВСТАВКИ:\n", codeToCopy);
                alert(`Точка для ${selectedModel}: X=${xPercent}%, Y=${yPercent}%`);
            });
        }

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) - 0.5;
            mouseY = (e.clientY / window.innerHeight) - 0.5;
        });

        if(phoneSelect) phoneSelect.addEventListener('change', updatePhone);
        if(bgSelect) bgSelect.addEventListener('change', () => { handleBackgroundChange(); saveSettings(); });
        
        // Безопасное добавление событий для переключателей
        const toggles = [lightThemeToggle, whiteFireToggle, shadowsToggle, stabilizationToggle, superFpsBoostToggle, viewfinderToggle];
        toggles.forEach(t => {
            if(t) t.addEventListener('change', () => { handleSettingsChange(); saveSettings(); });
        });

        if(fxButtons) {
            fxButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    fxButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentFxMode = btn.dataset.fx;
                    reloadParticles();
                    saveSettings();
                });
            });
        }

        if(propSettingsBtn) propSettingsBtn.addEventListener('click', () => propSettingsPanel.classList.toggle('hidden'));
        if(propellerBtn) propellerBtn.addEventListener('click', activatePropeller);
        if(musicBtn) musicBtn.addEventListener('click', toggleMusic);

        requestAnimationFrame(animationLoop);
    }
    
    function toggleModal(modal, show) {
        if(!modal) return;
        if(show) modal.classList.remove('hidden');
        else modal.classList.add('hidden');
    }

    function initLoader() { 
        if(enterSiteBtn) {
            enterSiteBtn.addEventListener('click', () => { 
                if(loaderOverlay) {
                    loaderOverlay.style.opacity = '0';
                    setTimeout(() => loaderOverlay.classList.add('hidden'), 500);
                }
            });
        }
    }

    function toggleMusic() { 
        if(!musicBtn || !backgroundMusic) return;
        const icon = musicBtn.querySelector('i'); 
        if (backgroundMusic.paused) { backgroundMusic.play().catch(console.error); if(icon) icon.className = 'fas fa-volume-up'; } 
        else { backgroundMusic.pause(); if(icon) icon.className = 'fas fa-music'; } 
    }

    function setLanguage(lang) {
        document.documentElement.lang = lang; 
        document.querySelectorAll('[data-translate-key]').forEach(el => { 
            const key = el.dataset.translateKey; 
            if (translations[lang][key]) { 
                 if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = translations[lang][key];
                 else {
                     const icon = el.querySelector('i');
                     if(icon) { el.innerHTML = ''; el.appendChild(icon); el.append(' ' + translations[lang][key]); }
                     else el.textContent = translations[lang][key];
                 }
            } 
        });
    }

    function initLanguage() { 
        const savedLang = localStorage.getItem('selectedLang'); 
        if (savedLang) setLanguage(savedLang); 
        else if(languageModal) languageModal.classList.remove('hidden'); 
        
        document.querySelectorAll('.lang-btn').forEach(btn => { 
            btn.addEventListener('click', () => { 
                const lang = btn.dataset.lang; setLanguage(lang); localStorage.setItem('selectedLang', lang); if(languageModal) languageModal.classList.add('hidden'); 
            }); 
        }); 
    }

    // --- 6. PARTICLES ENGINE ---
    async function reloadParticles() {
        if(particlesInstance) { await particlesInstance.destroy(); particlesInstance = null; }
        if(currentFxMode === 'none' || (superFpsBoostToggle && superFpsBoostToggle.checked)) return;

        let config = {};
        const isLight = lightThemeToggle && lightThemeToggle.checked;
        const color = isLight ? "#000000" : "#ffffff";

        const commonMove = {
            enable: true, speed: 3, direction: "bottom", outModes: "out",
            random: false, straight: false
        };

        if (currentFxMode === 'snow') {
            config = {
                fpsLimit: 60,
                particles: {
                    number: { value: 100 },
                    color: { value: color },
                    shape: { type: "circle" },
                    opacity: { value: 0.6, random: true },
                    size: { value: 3, random: true },
                    move: { ...commonMove, speed: 2 }
                }
            };
        } else if (currentFxMode === 'text') {
            config = {
                fpsLimit: 60,
                particles: {
                    number: { value: 30 },
                    shape: {
                        type: "text",
                        options: {
                            text: { value: ["JX", "JELIKTON"], font: { size: 40, weight: "bold" } }
                        }
                    },
                    color: { value: color },
                    size: { value: 16, random: { enable: true, minimumValue: 10 } },
                    opacity: { value: 0.9 },
                    move: { ...commonMove, speed: 3 },
                    rotate: { animation: { enable: true, speed: 5, sync: false } }
                }
            };
        } else if (currentFxMode === 'phones' || currentFxMode === 'mix') {
             const keys = Object.keys(phones).slice(0, 10);
             const images = keys.map(k => ({ src: phones[k].image, width: 200, height: 400 }));
             
             let shapeConfig = { type: "image", options: { image: images } };
             
             if(currentFxMode === 'mix') {
                 shapeConfig = {
                    type: ["text", "image"],
                    options: {
                        text: { value: ["JX"], font: { size: 40, weight: "bold" } },
                        image: images
                    }
                 };
             }

             config = {
                fpsLimit: 60,
                particles: {
                    number: { value: 20 },
                    shape: shapeConfig,
                    size: { value: 40, random: { enable: true, minimumValue: 25 } },
                    move: { enable: true, speed: 5, direction: "bottom", outModes: "out" },
                    rotate: { value: 0, random: true, animation: { enable: true, speed: 5, sync: false } },
                    wobble: { enable: true, distance: 10, speed: 5 },
                    opacity: { value: 1 }
                }
             };
        }

        particlesInstance = await tsParticles.load("tsparticles", config);
    }

    // --- 7. CORE LOGIC ---
    function updatePhoneSelector() {
        if(!phoneSelect) return;
        const uniquePhones = Object.keys(phones).sort();
        phoneSelect.innerHTML = '';
        uniquePhones.forEach(modelName => {
            const option = document.createElement('option');
            option.value = modelName;
            option.textContent = modelName;
            phoneSelect.appendChild(option);
        });
    }

    function updatePhone() {
        if(!phoneSelect || !phoneImage) return;
        const selectedModel = phoneSelect.value;
        if (!phones[selectedModel]) return;
        const data = phones[selectedModel];
        phoneImage.src = data.image;
        
        if(stabilizationToggle && stabilizationToggle.checked) phoneImage.style.transformOrigin = `${data.stabilizationPoint.x} ${data.stabilizationPoint.y}`;
        else phoneImage.style.transformOrigin = '50% 50%';

        if(data.specs && phoneInfoContainer) {
            if(processorInfo) processorInfo.textContent = data.specs.processor;
            if(cameraInfo) cameraInfo.textContent = data.specs.camera;
            phoneInfoContainer.classList.remove('hidden');
        } else if(phoneInfoContainer) {
            phoneInfoContainer.classList.add('hidden');
        }
    }

    function activatePropeller() {
        if(isPropellerMode) return;
        toggleModal(mainMenuModal, false);
        const time = parseInt(propTimeInput ? propTimeInput.value : 5) || 5;
        const power = parseInt(propPowerInput ? propPowerInput.value : 25) || 25;
        const speed = Math.max(0.01, 1.0 - (power * 0.019));

        isPropellerMode = true;
        phoneImage.classList.add('propeller-active');
        phoneImage.style.animationDuration = `${speed}s`;

        if(propellerTimer) clearTimeout(propellerTimer);
        propellerTimer = setTimeout(() => {
            isPropellerMode = false;
            phoneImage.classList.remove('propeller-active');
            phoneImage.style.animationDuration = '';
            currentRotation = 0; targetRotation = 0;
        }, time * 1000);
    }

    function animationLoop() {
        const now = performance.now();
        frameCount++;
        if (now - lastTime >= 1000) { if(fpsDisplay) fpsDisplay.innerText = frameCount + " FPS"; frameCount = 0; lastTime = now; }

        if (!isPropellerMode) {
            if (isDragging || Math.abs(targetRotation - currentRotation) > 0.01) {
                currentRotation += (targetRotation - currentRotation) * 0.15;
            }
            let transform = `perspective(1000px) rotateZ(${currentRotation}deg)`;
            if (shadowsToggle && shadowsToggle.checked && superFpsBoostToggle && !superFpsBoostToggle.checked) {
                const tiltX = mouseY * 12; const tiltY = mouseX * -12;
                transform += ` rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
            }
            if(phoneImage) phoneImage.style.transform = transform;
            
            const viewfinder = document.getElementById('camera-viewfinder');
            const horizon = document.getElementById('viewfinder-horizon');
            if(viewfinder && !viewfinder.classList.contains('hidden') && horizon) {
                if(stabilizationToggle && stabilizationToggle.checked) horizon.style.transform = `translate(-50%, -50%) rotate(${-currentRotation}deg)`;
                else horizon.style.transform = `translate(-50%, -50%) rotate(0deg)`;
            }
        }
        requestAnimationFrame(animationLoop);
    }

    function onDragStart(e) {
        if (e.target.closest('.modal-overlay') || e.target.closest('.app-header') || isPropellerMode || isDebugActive) return;
        e.preventDefault(); isDragging = true;
        
        const cx = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const cy = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        joystickCenterX = cx; joystickCenterY = cy;
        if(floatingJoystick) {
            floatingJoystick.style.left = cx + 'px'; floatingJoystick.style.top = cy + 'px';
            floatingJoystick.classList.remove('hidden');
        }
        lastAngle = Math.atan2(cy - joystickCenterY, cx - joystickCenterX) * (180 / Math.PI);
        
        const moveHandler = (ev) => {
            if(!isDragging) return;
            const mx = ev.type.includes('touch') ? ev.touches[0].clientX : ev.clientX;
            const my = ev.type.includes('touch') ? ev.touches[0].clientY : ev.clientY;
            const currentAngle = Math.atan2(my - joystickCenterY, mx - joystickCenterX) * (180 / Math.PI);
            let delta = currentAngle - lastAngle;
            if (delta > 180) delta -= 360; if (delta < -180) delta += 360;
            lastAngle = currentAngle;
            targetRotation += delta;
            triggerRage();
            
            const dx = mx - joystickCenterX; const dy = my - joystickCenterY;
            const dist = Math.min(35, Math.hypot(dx, dy)); const angle = Math.atan2(dy, dx);
            if(joystickHandle) joystickHandle.style.transform = `translate(-50%, -50%) translate(${dist * Math.cos(angle)}px, ${dist * Math.sin(angle)}px)`;
        };
        const endHandler = () => {
            isDragging = false; if(floatingJoystick) floatingJoystick.classList.add('hidden');
            document.removeEventListener('mousemove', moveHandler); document.removeEventListener('mouseup', endHandler);
            document.removeEventListener('touchmove', moveHandler); document.removeEventListener('touchend', endHandler);
        };
        document.addEventListener('mousemove', moveHandler); document.addEventListener('mouseup', endHandler);
        document.addEventListener('touchmove', moveHandler, { passive: false }); document.addEventListener('touchend', endHandler);
    }

    function triggerRage() {
        if(!whiteFireToggle || !whiteFireToggle.checked || (superFpsBoostToggle && superFpsBoostToggle.checked)) return;
        rageLevel += 5; if(rageLevel > 100 && whiteFireEffect) whiteFireEffect.classList.add('active');
        clearTimeout(rageTimeout); rageTimeout = setTimeout(() => { rageLevel = 0; if(whiteFireEffect) whiteFireEffect.classList.remove('active'); }, 200);
    }

    function handleBackgroundChange() {
        if(!lightThemeToggle || !bgSelect) return;
        document.body.className = lightThemeToggle.checked ? 'light-theme' : 'dark-theme';
        document.body.classList.add(bgSelect.value);
    }

    function handleSettingsChange() {
        const boost = superFpsBoostToggle && superFpsBoostToggle.checked;
        if(boost) { 
            if(whiteFireToggle) whiteFireToggle.checked = false; 
            if(shadowsToggle) shadowsToggle.checked = false; 
            if(particlesInstance) particlesInstance.stop(); 
        } 
        else { reloadParticles(); }
        updatePhone(); handleBackgroundChange();
        
        const viewfinder = document.getElementById('camera-viewfinder');
        if(viewfinderToggle && viewfinder) {
            if(viewfinderToggle.checked) viewfinder.classList.remove('hidden');
            else viewfinder.classList.add('hidden');
        }
    }

    function saveSettings() {
        localStorage.setItem('jxStabSettings_V2', JSON.stringify({
            lang: document.documentElement.lang,
            lightTheme: lightThemeToggle ? lightThemeToggle.checked : false,
            fxMode: currentFxMode,
            fire: whiteFireToggle ? whiteFireToggle.checked : false,
            shadows: shadowsToggle ? shadowsToggle.checked : false,
            stabilization: stabilizationToggle ? stabilizationToggle.checked : true,
            boost: superFpsBoostToggle ? superFpsBoostToggle.checked : false,
            viewfinder: viewfinderToggle ? viewfinderToggle.checked : false,
            bg: bgSelect ? bgSelect.value : 'bg-default'
        }));
    }

    function loadSettings() {
        const s = JSON.parse(localStorage.getItem('jxStabSettings_V2'));
        if(s) {
            if(lightThemeToggle) lightThemeToggle.checked = s.lightTheme || false;
            currentFxMode = s.fxMode || 'none';
            if(whiteFireToggle) whiteFireToggle.checked = s.fire;
            if(shadowsToggle) shadowsToggle.checked = s.shadows;
            if(stabilizationToggle) stabilizationToggle.checked = s.stabilization;
            if(superFpsBoostToggle) superFpsBoostToggle.checked = s.boost;
            if(viewfinderToggle) viewfinderToggle.checked = s.viewfinder;
            if(bgSelect) bgSelect.value = s.bg || 'bg-default';
            if(fxButtons) fxButtons.forEach(b => b.classList.toggle('active', b.dataset.fx === currentFxMode));
        } else {
            if(stabilizationToggle) stabilizationToggle.checked = true;
        }
        handleSettingsChange();
    }

    init();
});
