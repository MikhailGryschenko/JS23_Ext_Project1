const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),     // ALL так как несколько триггеров будет (псевдомассив)
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {                           // этот метод только к массиву можно
            item.addEventListener('click', (e) => {         // и на каждый триггер - обработчик событий
                if (e.target) {                             // обязательно отменяем стандартное поведение браузера
                    e.preventDefault();
                }
    
                modal.style.display = "block";              // Показываем модальное окно
                document.body.style.overflow = "hidden";    // отключаем прокрутку экрана под модальным окном
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    /* showModalByTime('.popup', 60000); */
};

export default modals;