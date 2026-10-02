// Arquivo: emoji-fix.js -> deve estar dentro de cada pasta
document.addEventListener("DOMContentLoaded", function() {
    // Verifica se a biblioteca Twemoji foi carregada e aplica em todos os emojis
    if (typeof twemoji !== 'undefined') {
        twemoji.parse(document.body);
    }
});
