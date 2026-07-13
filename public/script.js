document.getElementById('actionBtn').addEventListener('click', () => {
    const messageEl = document.getElementById('message');
    messageEl.textContent = "Hello! JavaScript is working perfectly.";
    messageEl.classList.remove('hidden');
});