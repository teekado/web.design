        const buyBtns = document.querySelectorAll('.js-buy-tickets')
        const modal = document.querySelector('.js-modal')
        const modalContainer = document.querySelector('.js-modal-container')
        const modalClose = document.querySelector('.js-modal-close')
    
        // hàm hiển thị modal mua vé (thêm class open vào modal)
        function showBuyTickets() {
            modal.classList.add('open')
        }
        
        //hàm ẩn modal mua vé (gỡ bỏ class open đã thêm vào modal)
        function hideBuyTickets() {
            modal.classList.remove('open')
        }

        //lắng nghe hành động click vào buy button của người dùng
        //for là hàm vòng lặp, áp dụng với nhiều btn trong tổ hợp
        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTickets)
        }

        //nghe hành vi click vào btn close
        modalClose.addEventListener('click', hideBuyTickets)
        modal.addEventListener('click', hideBuyTickets)

        //ngăn chặn hành vi nổi bọt
        modalContainer.addEventListener('click', function (event) {
            event.stopPropagation()
        })
    