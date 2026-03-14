const widget = document.createElement('div');
widget.id = 'ai-water-widget';
widget.innerHTML = '<div class="metric-row metric-main"><span>🏊</span><span id="ai-pool-count">0.0000000000</span></div>' +
                   '<div class="metric-row metric-sub"><span>💧</span><span id="ai-oz-count" class="value">0.00</span><span> oz</span></div>' +
                   '<div class="metric-row metric-sub"><span>🌿</span><span id="ai-co2-count" class="value">0.00</span><span> g CO2</span></div>' +
                   '<div class="metric-row metric-sub"><span>📝</span><span id="ai-word-count" class="value">0</span><span> words</span></div>';
document.body.appendChild(widget);

const poolSpan = document.getElementById('ai-pool-count');
const ozSpan = document.getElementById('ai-oz-count');
const co2Span = document.getElementById('ai-co2-count');
const wordSpan = document.getElementById('ai-word-count');

let maxSessionWords = 0;
const POOL_MULTIPLIER = 0.0000000018927065;
const OZ_MULTIPLIER = 0.16;
const CO2_MULTIPLIER = 0.02;

function countWords(str) {
    return (str.match(/\b\w+\b/g) || []).length;
}

let isUpdating = false;

function updateMetrics() {
    if (isUpdating) return;
    isUpdating = true;

    requestAnimationFrame(() => {
        const rawText = document.body.innerText || "";
        const widgetText = widget.innerText || "";
        const currentTotalWords = countWords(rawText) - countWords(widgetText);

        if (currentTotalWords > maxSessionWords) {
            maxSessionWords = currentTotalWords;
            poolSpan.innerText = (maxSessionWords * POOL_MULTIPLIER).toFixed(10);
            ozSpan.innerText = (maxSessionWords * OZ_MULTIPLIER).toFixed(2);
            co2Span.innerText = (maxSessionWords * CO2_MULTIPLIER).toFixed(2);
            wordSpan.innerText = maxSessionWords.toLocaleString();
        }
        isUpdating = false;
    });
}

const observer = new MutationObserver(() => {
    updateMetrics();
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
});

setInterval(updateMetrics, 2000);
setTimeout(updateMetrics, 500);
