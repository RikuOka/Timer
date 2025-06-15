let timeLeft = 25 * 60; // 25分 (秒)
        let isRunning = false;
        let isWorkTime = true;
        let sessionCount = 0;
        let totalTime = 25 * 60;
        let timerInterval;

        const timerDisplay = document.getElementById('timer');
        const statusDisplay = document.getElementById('status');
        const startBtn = document.getElementById('startBtn');
        const pauseBtn = document.getElementById('pauseBtn');
        const progressFill = document.getElementById('progressFill');
        const sessionCountDisplay = document.getElementById('sessionCount');

        function updateDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            // プログレスバーの更新
            const progress = ((totalTime - timeLeft) / totalTime) * 100;
            progressFill.style.width = `${progress}%`;
        }

        function startTimer() {
            if (!isRunning) {
                isRunning = true;
                startBtn.textContent = '⏸️ 一時停止';
                startBtn.className = 'pause-btn';
                
                timerInterval = setInterval(() => {
                    timeLeft--;
                    updateDisplay();
                    
                    if (timeLeft <= 0) {
                        completeSession();
                    }
                }, 1000);
            } else {
                pauseTimer();
            }
        }

        function pauseTimer() {
            isRunning = false;
            clearInterval(timerInterval);
            startBtn.textContent = '▶️ 開始';
            startBtn.className = 'start-btn';
        }

        function resetTimer() {
            pauseTimer();
            isWorkTime = true;
            timeLeft = 25 * 60;
            totalTime = 25 * 60;
            statusDisplay.textContent = '作業時間';
            statusDisplay.className = 'status work-mode';
            updateDisplay();
        }

        function completeSession() {
            pauseTimer();
            
            // フラッシュ効果
            document.querySelector('.container').classList.add('flash');
            setTimeout(() => {
                document.querySelector('.container').classList.remove('flash');
            }, 500);
            
            // 音を鳴らす（ブラウザ対応）
            try {
                const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYUBC14yPLJeyMF');
                audio.play();
            } catch (e) {
                // 音の再生に失敗した場合は無視
            }
            
            if (isWorkTime) {
                // 作業時間完了 -> 休憩時間へ
                sessionCount++;
                sessionCountDisplay.textContent = sessionCount;
                isWorkTime = false;
                timeLeft = 5 * 60; // 5分休憩
                totalTime = 5 * 60;
                statusDisplay.textContent = '休憩時間';
                statusDisplay.className = 'status break-mode';
                alert('🎉 作業時間完了！5分休憩しましょう！');
            } else {
                // 休憩時間完了 -> 作業時間へ
                isWorkTime = true;
                timeLeft = 25 * 60; // 25分作業
                totalTime = 25 * 60;
                statusDisplay.textContent = '作業時間';
                statusDisplay.className = 'status work-mode';
                alert('💪 休憩完了！次の作業を始めましょう！');
            }
            
            updateDisplay();
        }

        // 初期表示
        updateDisplay();

        // ページがアクティブになったときにタイマーを再開
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                // ページが非表示になったとき
                if (isRunning) {
                    pauseTimer();
                }
            }
        });