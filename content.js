const widget = document.createElement('div');
widget.id = 'ai-water-widget';
widget.innerHTML = '<span>🏊</span><span id="ai-water-count">0.0000000000</span>';
document.body.appendChild(widget);

const countSpan = document.getElementById('ai-water-count');
let maxSessionWords = 0;
const POOL_MULTIPLIER = 0.0000000018927065;

function countWords(str) {
    return (str.match(/\b\w+\b/g) || []).length;
}

function updateWaterUsage() {
    const rawText = document.body.innerText || "";
    const widgetText = widget.innerText || "";
    const currentTotalWords = countWords(rawText) - countWords(widgetText);

    if (currentTotalWords > maxSessionWords) {
        maxSessionWords = currentTotalWords;
        const poolFraction = maxSessionWords * POOL_MULTIPLIER;
        countSpan.innerText = poolFraction.toFixed(10);
    }
}

const observer = new MutationObserver(() => {
    updateWaterUsage();
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
});

setInterval(updateWaterUsage, 1500);
setTimeout(updateWaterUsage, 500);
