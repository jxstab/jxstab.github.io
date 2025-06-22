document.addEventListener('DOMContentLoaded', () => {
    const CURRENT_VERSION = '1.3.3';
    const phones = {
        'Redmi9A': { image: 'Redmi9A.png', stabilizationPoint: { x: '34.93%', y: '9.04%' } },
        'SamsungS21U': { image: 'SamsungS21U.png', stabilizationPoint: { x: '19.01%', y: '18.26%' } },
        'RealmeGT7Pro': { image: 'RealmeGT7Pro.png', stabilizationPoint: { x: '38.82%', y: '26.66%' } },
        'HuaweiPura70U': { image: 'HuaweiPura70U.png', stabilizationPoint: { x: '45.37%', y: '25.02%' } },
        'OnePlus12': { image: 'OnePlus12.png', stabilizationPoint: { x: '26.38%', y: '17.03%' } },
        'SamsungS24U': { image: 'SamsungS24U.png', stabilizationPoint: { x: '18.41%', y: '20.09%' } },
        'HonorMagic6P': { image: 'HonorMagic6P.png', stabilizationPoint: { x: '45.07%', y: '32.88%' } },
        'OnePlusAce3': { image: 'OnePlusAce3.png', stabilizationPoint: { x: '37.74%', y: '28.00%' } },
        'SamsungJ4': { image: 'SamsungJ4.png', stabilizationPoint: { x: '50.34%', y: '16.35%' } },
        'Xiaomi15U': { image: 'Xiaomi15U.png', stabilizationPoint: { x: '42.09%', y: '34.85%' } },
        'VivoX200U': { image: 'VivoX200U.png', stabilizationPoint: { x: '44.55%', y: '35.46%' } },
        'SamsungS25U': { image: 'SamsungS25U.png', stabilizationPoint: { x: '37.38%', y: '25.63%' } },
        'HuaweiPura80U': { image: 'HuaweiPura80U.png', stabilizationPoint: { x: '40.66%', y: '37.10%' } }
    };
    
    let isCoordModeActive = false;
    let currentRotation = 0, targetRotation = 0;
    
    const wrapperBg = document.getElementById('wrapper-bg');
    const phoneImage = document.getElementById('phone-image');
    const phoneSelect = document.getElementById('phone-select');
    const knob = document.getElementById('stabilization-knob');
    const knobHandle = document.getElementById('knob-handle');
    const fpsCounter = document.getElementById('fps-counter');
    const updateModal = document.getElementById('update-modal');
    const closeUpdateModalBtns = document.querySelectorAll('.modal-close-btn');
    const terminalInput = document.getElementById('terminal-input');
    const devToolsModal = document.getElementById('dev-tools-modal');
    const coordModeToggle = document.getElementById('coord-mode-toggle');

    function init() {
        updatePhoneSelector();
        updatePhone();
        knob.addEventListener('mousedown', onDragStart);
        knob.addEventListener('touchstart', onDragStart, { passive: false });
        wrapperBg.addEventListener('wheel', handleMouseWheel, { passive: false });
        phoneSelect.addEventListener('change', updatePhone);
        if (terminalInput) terminalInput.addEventListener('keydown', handleTerminalInput);
        if (coordModeToggle) coordModeToggle.addEventListener('change', toggleCoordMode);
        closeUpdateModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-overlay').classList.add('hidden');
                if (btn.closest('#update-modal')) localStorage.setItem('seenVersion', CURRENT_VERSION);
            });
        });
        showUpdateModal();
        requestAnimationFrame(fpsLoop);
        requestAnimationFrame(animationLoop);
        phoneImage.addEventListener('click', handleDevClick);
    }
    
    function updatePhoneSelector() { const uniquePhones = Object.keys(phones); const currentSelected = phoneSelect.value; phoneSelect.innerHTML = ''; uniquePhones.forEach(modelName => { const option = document.createElement('option'); option.value = modelName; option.textContent = modelName; phoneSelect.appendChild(option); }); if (uniquePhones.includes(currentSelected)) { phoneSelect.value = currentSelected; } updatePhone(); }
    function updatePhone() { const selectedModel = phoneSelect.value; if (!selectedModel) { phoneImage.src = ''; return; }; const phoneData = phones[selectedModel]; const originPoint = `${phoneData.stabilizationPoint.x} ${phoneData.stabilizationPoint.y}`; phoneImage.style.transformOrigin = originPoint; document.getElementById('phone-container').style.transformOrigin = originPoint; phoneImage.src = phoneData.image; targetRotation = 0; currentRotation = -1; applyInitialTransform(); }
    function showUpdateModal() { if (localStorage.getItem('seenVersion') !== CURRENT_VERSION) { updateModal.classList.remove('hidden'); } }

    function animationLoop() { if (currentRotation !== targetRotation) { currentRotation = targetRotation; phoneImage.style.transform = `perspective(1000px) rotateZ(${currentRotation}deg)`; knobHandle.style.transform = `translateX(-50%) rotate(${currentRotation}deg)`; } requestAnimationFrame(animationLoop); }
    let startDragAngle = 0, startPhoneRotation = 0;
    function onDragStart(e) { if (isCoordModeActive) return; e.preventDefault(); startDragAngle = getAngleFromEvent(e); startPhoneRotation = currentRotation; document.body.style.cursor = 'grabbing'; wrapperBg.classList.add('is-rotating'); document.addEventListener('mousemove', onDragMove); document.addEventListener('mouseup', onDragEnd); document.addEventListener('touchmove', onDragMove, { passive: false }); document.addEventListener('touchend', onDragEnd); }
    function onDragMove(e) { const angleDifference = getAngleFromEvent(e) - startDragAngle; targetRotation = startPhoneRotation + angleDifference; }
    function onDragEnd() { document.body.style.cursor = 'default'; wrapperBg.classList.remove('is-rotating'); document.removeEventListener('mousemove', onDragMove); document.removeEventListener('mouseup', onDragEnd); document.removeEventListener('touchmove', onDragMove); document.removeEventListener('touchend', onDragEnd); }
    let wheelTimeout; function handleMouseWheel(e) { if (isCoordModeActive) return; e.preventDefault(); targetRotation += e.deltaY > 0 ? 5 : -5; wrapperBg.classList.add('is-rotating'); clearTimeout(wheelTimeout); wheelTimeout = setTimeout(() => { wrapperBg.classList.remove('is-rotating'); }, 300); }
    function getAngleFromEvent(e) { const rect = knob.getBoundingClientRect(); const centerX = rect.left + rect.width / 2; const centerY = rect.top + rect.height / 2; const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX; const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY; return (Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI)); }
    function applyInitialTransform() { phoneImage.style.transform = `perspective(1000px) rotateZ(0deg)`; knobHandle.style.transform = `translateX(-50%) rotate(0deg)`; wrapperBg.classList.remove('is-rotating'); }

    function handleTerminalInput(e) { if (e.key === 'Enter') { const value = terminalInput.value.trim().toLowerCase(); terminalInput.value = ''; if (value === 'dev-tools') { devToolsModal.classList.remove('hidden'); } } }
    function toggleCoordMode() { isCoordModeActive = coordModeToggle.checked; phoneImage.style.cursor = isCoordModeActive ? 'crosshair' : 'grab'; if (isCoordModeActive) { targetRotation = 0; currentRotation = -1; applyInitialTransform(); } }
    let lastTime = performance.now(); let frameCount = 0;
    function fpsLoop(currentTime) { frameCount++; if (currentTime - lastTime >= 1000) { fpsCounter.textContent = `${frameCount} FPS`; frameCount = 0; lastTime = currentTime; } requestAnimationFrame(fpsLoop); }
    function handleDevClick(event) { if (!isCoordModeActive) return; event.stopPropagation(); const rect = event.target.getBoundingClientRect(); const x = event.clientX - rect.left; const y = event.clientY - rect.top; const xPercent = (x / rect.width * 100).toFixed(2); const yPercent = (y / rect.height * 100).toFixed(2); const selectedModel = phoneSelect.value; phones[selectedModel].stabilizationPoint = { x: `${xPercent}%`, y: `${yPercent}%` }; updatePhone(); const codeToCopy = `'${selectedModel}': {\n    image: '${phones[selectedModel].image}',\n    stabilizationPoint: { x: '${xPercent}%', y: '${yPercent}%' }\n},`; console.log("Скопируйте этот код:\n", codeToCopy); alert(`Точка для "${selectedModel}" установлена!\nКод скопирован в консоль (F12).`); }

    init();
});
