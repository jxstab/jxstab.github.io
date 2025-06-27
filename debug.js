(function() {
    document.addEventListener('appReady', () => {
        if (!window.APP_STATE || !window.APP_STATE.wrapperBg) {
            console.error("DEBUG: Main app state not ready or wrapperBg not found.");
            return;
        }

        let isDebugActive = false;
        const { wrapperBg, phoneImage } = window.APP_STATE;

        function handleClick(event) {
            if (!isDebugActive) return;
            
            event.stopPropagation();
            
            const rect = phoneImage.getBoundingClientRect();

            if (
                event.clientX < rect.left || event.clientX > rect.right ||
                event.clientY < rect.top  || event.clientY > rect.bottom
            ) {
                return;
            }
            
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const xPercent = (x / rect.width * 100).toFixed(2);
            const yPercent = (y / rect.height * 100).toFixed(2);
            
            const { phones, phoneSelect, updatePhone } = window.APP_STATE;
            const selectedModel = phoneSelect.value;

            phones[selectedModel].stabilizationPoint = { x: `${xPercent}%`, y: `${yPercent}%` };
            
            updatePhone();
            
            const codeToCopy = `'${selectedModel}': {\n    image: 'phones/${phones[selectedModel].image.split('/').pop()}',\n    stabilizationPoint: { x: '${phones[selectedModel].stabilizationPoint.x}', y: '${phones[selectedModel].stabilizationPoint.y}' }\n},`;
            
            console.log("Скопируйте этот код и обновите объект 'phones' в app.js:\n\n", codeToCopy);
            alert(`Точка для "${selectedModel}" установлена!\nКод для вставки выведен в консоль разработчика (F12).`);
            
            off();
        }

        window.camera = function() {
            isDebugActive = true;
            wrapperBg.style.cursor = 'crosshair';
            console.log(`%c[DEBUG] Режим получения координат активирован. Кликните на нужную точку на телефоне.`, 'color: lime; font-weight: bold;');
        };

        window.off = function() {
            if (isDebugActive) {
                isDebugActive = false;
                wrapperBg.style.cursor = 'grab';
                console.log('%c[DEBUG] Режим отладки выключен.', 'color: red; font-weight: bold;');
            }
        };

        wrapperBg.addEventListener('click', handleClick, true);
        
        console.log('%c[DEBUG] Утилиты отладки загружены. Введите camera() для начала, off() для выключения.', 'color: cyan;');
    });
})();
