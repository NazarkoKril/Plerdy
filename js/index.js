"use strick";

// swiper
const swiperServ = new Swiper(".swiper__advant", {
  loop: true,
  spaceBetween: 17,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 1.4,
    },
    760: {
      slidesPerView: 2.4,
    },
    1035: {
      slidesPerView: 3.4,
    },

    1260: {
      slidesPerView: 4.4,
    },
  },
});

// validator
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const formContainer = document.getElementById("myFormContainer");
  const closeButton = document.getElementById("closeForm");
  const contactsButton = document.querySelector(".btn__contact");
  const contactsButtons = document.querySelector(".btn__contact1");
  const contactButton = document.getElementById("sales");

  function openForm() {
    overlay.style.display = "block";
    formContainer.style.display = "block";
  }

  function closeForm() {
    overlay.style.display = "none";
    formContainer.style.display = "none";
  }
  contactsButton.addEventListener("click", openForm);
  contactsButtons.addEventListener("click", openForm);

  function validateForm() {
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const agreementCheckbox = document.getElementById("agreement");

    let isValid = true;

    const namePattern = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'`]+$/;
    if (!namePattern.test(nameInput.value.trim())) {
      nameInput.style.outline = "1px solid red";
      isValid = false;
    } else {
      nameInput.style.outline = "none";
    }

    const phonePattern = /^\d{2}-\d{3}-\d{4}$/;
    if (
      phoneInput.value.trim() === "" ||
      !phonePattern.test(phoneInput.value)
    ) {
      phoneInput.style.outline = "1px solid red";
      isValid = false;
    } else {
      phoneInput.style.outline = "none";
    }

    if (!agreementCheckbox.checked) {
      agreementCheckbox.style.outline = "1px solid red";
      isValid = false;
    } else {
      agreementCheckbox.style.outline = "none";
    }

    return isValid;
  }

  contactButton.addEventListener("click", function () {
    if (validateForm()) {
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("agreement").checked = false;

      closeForm();

      Swal.fire({
        icon: "success",
        title: "Your form has been successfully submitted",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
  closeButton.addEventListener("click", closeForm);
  overlay.addEventListener("click", closeForm);
});
// burger-header
let menuBtn1 = document.querySelector(".menu-btn1");
let menu1 = document.querySelector(".menu1");
let body1 = document.body;

let anchorLinks1 = document.querySelectorAll(".menu__items1 a");

anchorLinks1.forEach(function (anchor) {
  anchor.addEventListener("click", function () {
    menuBtn1.classList.remove("active");
    menu1.classList.remove("active");
    body1.style.overflow = "auto";
    let targetId = this.getAttribute("href").substring(1);
    let targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

menuBtn1.addEventListener("click", function () {
  menuBtn1.classList.toggle("active");
  menu1.classList.toggle("active");

  if (menu1.classList.contains("active")) {
    body1.style.overflow = "hidden";
  } else {
    body1.style.overflow = "auto";
  }
});
