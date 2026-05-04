document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    // NÉV FRISSÍTVE: Szabó Dávid -> Morva Olivér
    const name = "Készítette: Morva Olivér";
    let i = 0;

    function type() {
        if (i < name.length) {
            textElement.innerHTML += name.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    // Egy kis késleltetés az indítás előtt
    setTimeout(type, 800);
});