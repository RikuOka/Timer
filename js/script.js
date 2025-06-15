// タイマーの状態管理
let timeLeft = 25 * 60;
let isRunning = false;
let isWorkTime = true;
let sessionCount = 0;
let totalTime = 25 * 60;
let timerInterval;

// DOM要素の取得
const timerDisplay = document.getElementById('timer');
const statusDisplay = document.getElementById('status');
// 残りのJavaScript関数...