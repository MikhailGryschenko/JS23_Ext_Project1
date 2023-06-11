const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {   // Если мы не будем передавать 4-й аргумент, то модальное окно по умолчанию НЕ будет закрываться при клике на подложку
        const trigger = document.querySelectorAll(triggerSelector),     // ALL так как несколько триггеров будет (псевдомассив)
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');        // Получаем все модальные окна по дата-атрибутам

        trigger.forEach(item => {                           // этот метод только к массиву можно
            item.addEventListener('click', (e) => {         // и на каждый триггер - обработчик событий
                if (e.target) {                             // обязательно отменяем стандартное поведение браузера
                    e.preventDefault();
                }
                
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "block";              // Показываем модальное окно
                document.body.style.overflow = "hidden";    // отключаем прокрутку экрана под модальным окном
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {                       // когда мы кликаем на "крестик" - закрываются все модальные окна
                item.style.display = 'none';
            });
            modal.style.display = "none";
            document.body.style.overflow = "";
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal && closeClickOverlay) {
                windows.forEach(item => {                   // когда мы кликаем на подложку - закрываются все модальные окна
                    item.style.display = 'none';
                });
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
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    /* showModalByTime('.popup', 60000); */
};

export default modals;