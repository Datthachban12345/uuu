src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
var swiper = new Swiper(".swiper-normal", {
    slidesPerView: 2, // Số slide mặc định hiển thị
    spaceBetween: 24,
    breakpoints: {
      // Khi màn hình >= 640px
      640: {
        slidesPerView: 3, // Hiển thị 3 slide trên màn hình trung bình
      },
      // Khi màn hình >= 1537px
      1537: {
        slidesPerView:3.5, // Hiển thị 4 slide trên màn hình lớn
      },
    },
  navigation: {
    nextEl: ".button-next-dat",
    prevEl: ".button-prev-dat",
  },
  on: {
    // Kiểm tra khi Swiper khởi tạo
    init: function () {
      updateNavigation(this);
    },
    // Kiểm tra khi Swiper thay đổi slide
    slideChange: function () {
      updateNavigation(this);
    }
  }
});
var swiper3dDat = new Swiper(".swiper-3d-dat", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    slidesPerView: 1.5,
    spaceBetween: 40, // Số slide mặc định hiển thị
    breakpoints: {
      // Khi màn hình >= 640px
      640: {
        slidesPerView: 3, // Hiển thị 3 slide trên màn hình trung bình
      },
      // Khi màn hình >= 1537px
      1537: {
        slidesPerView: 4, // Hiển thị 4 slide trên màn hình lớn
      },
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },

  
  });
function updateNavigation(swiper) {
    const nextButton = document.querySelector('.button-next-dat');
    const prevButton = document.querySelector('.button-prev-dat');
    const shadowDatprev = document.querySelector('.shadow_left');
    const shadowDatnext = document.querySelector('.shadow_right');
    
    // Ẩn nút prev nếu đang ở slide đầu tiên
    if (swiper.isBeginning) {
      prevButton.style.display = 'none';
      shadowDatprev.style.display = 'none';
    } else {
      prevButton.style.display = 'flex';
      shadowDatprev.style.display = 'block';
    }
  
    // Ẩn nút next nếu đang ở slide cuối cùng
    if (swiper.isEnd) {
      nextButton.style.display = 'none';
      shadowDatnext.style.display = 'none';
    } else {
      nextButton.style.display = 'flex';
      shadowDatnext.style.display = 'block';
    }
  }