const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);
    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');          // Удаляем все не цифры при вводе тлф номера
        });
    });
};

export default checkNumInputs;