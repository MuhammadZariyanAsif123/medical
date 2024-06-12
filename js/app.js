const faqs = document.querySelectorAll(".faq-item button");
faqs.forEach(faqItem => {
    faqItem.addEventListener('click', (e) => {
        let cont = e.target.closest(".faq-item");
        if (cont.classList.contains("active")) {
            cont.classList.remove("active");
            cont.querySelector("p").style.display = "none"; // Eğer kapatıyorsak içeriği gizle
        } else {
            closeAll();
            cont.classList.add('active');
            cont.querySelector("p").style.display = "block"; // Açıyorsak içeriği göster
        }
    })
});

function closeAll() {
    faqs.forEach(faqItem => {
        let cont = faqItem.closest(".faq-item");
        cont.classList.remove('active');
        cont.querySelector("p").style.display = "none"; // Tüm içerikleri gizle
    })
};






document.addEventListener("DOMContentLoaded", function() {
    var doctorSwiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidePerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: false 
    });

    // İleri ve geri oklara tıklama olayı eklemek için
    var nextButton = document.querySelector('.swiper-button-next');
    var prevButton = document.querySelector('.swiper-button-prev');

    nextButton.addEventListener('click', function() {
        doctorSwiper.slideNext(); // İleri gitmek için
    });

    prevButton.addEventListener('click', function() {
        doctorSwiper.slidePrev(); // Geri gitmek için
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var reviewSwiper = new Swiper('.reviews.swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidePerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: false 
    });

    // İleri ve geri oklara tıklama olayı eklemek için
    var nextButton = document.querySelector('.swiper-button-next');
    var prevButton = document.querySelector('.swiper-button-prev');

    nextButton.addEventListener('click', function() {
        reviewSwiper.slideNext(); // İleri gitmek için
    });

    prevButton.addEventListener('click', function() {
        reviewSwiper.slidePrev(); // Geri gitmek için
    });


});


document.addEventListener("DOMContentLoaded", function() {
    var newsSwiper = new Swiper('.news.swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.news-swiper-button-next', // İleri düğmesinin sınıf adı başında nokta olmalı
            prevEl: '.news-swiper-button-prev', // Geri düğmesinin sınıf adı başında nokta olmalı
        },
    });

    // İleri ve geri oklara tıklama olayı eklemek için
    var nextButton = document.querySelector('.news-swiper-button-next');
    var prevButton = document.querySelector('.news-swiper-button-prev');

    nextButton.addEventListener('click', function() {
        newsSwiper.slideNext(); // İleri gitmek için
    });

    prevButton.addEventListener('click', function() {
        newsSwiper.slidePrev(); // Geri gitmek için
    });

});




   

