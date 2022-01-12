$('.news-banner .banner .owl-carousel').owlCarousel({
  loop: true,
  nav: false,
  margin: 10,
  dots: false,
  responsive: {
    100: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$('.banner .owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  responsive: {
    100: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

const extraFeeTab = {
  init: () => {
    extraFeeTab.showExtraFee('.btn-view', '.input-form', 'active');
    extraFeeTab.hideExtraFee('.btn-hide', '.input-form', 'active');
  },
  showExtraFee: (btn, tabs, classTab) => {
    const button = document.querySelector(btn);
    const button2 = document.querySelector('.view-list');
    const wrap = document.querySelector(tabs);
    if (!button || !wrap || !button2) return;
    button.addEventListener('click', () => {
      wrap.classList.add(classTab);
      // view-list
      button.classList.add('hide');
      button2.classList.add('hide');
    });
  },
  hideExtraFee: (btn, tabs, classTab) => {
    const button = document.querySelector(btn);
    const button2 = document.querySelector('.view-list');
    const wrap = document.querySelector(tabs);
    const showButton = document.querySelector('.btn-view')
    if (!button || !wrap || !button2) return;
    button.addEventListener('click', () => {
      wrap.classList.remove(classTab);
      showButton.classList.remove('hide');
      button2.classList.remove('hide');
    });
  },
};

const account = {
  init: () => {
    account.tabs('.account__content', '.btn-acc', '.wrap-acc');
    account.tabs('.bguide', '.btn-acc', '.wrap-acc');
    account.btns('.form-buy', '.btn-buy');
  },
  tabs: (wrap, buttons, tabs) => {
    const self = document.querySelector(wrap);
    if (!self) return;
    const btns = self.querySelectorAll(buttons);
    const allTab = self.querySelectorAll(tabs);
    if (!btns || !allTab) return;
    btns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        btns.forEach((i) => i.classList.remove('active'));
        allTab.forEach((i) => i.classList.remove('active'));
        btns[index].classList.add('active');
        allTab[index].classList.add('active');
      });
    });
  },
  btns: (wrap, buttons) => {
    const self = document.querySelector(wrap);
    if (!self) return;
    const btns = self.querySelectorAll(buttons);
    if (!btns) return;
    btns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        btns.forEach((i) => i.classList.remove('active'));
        btns[index].classList.add('active');
      });
    });
  },
};
// show-info
// .account-settings
const home = {
  init: () => {
    home.showInfo('.close-advise', '.advise-register');
    home.showInfo('.show-advise', '.advise-register');
    home.showInfo('.show-info', '.account-settings');
    home.showMenu('.humberger', '.header-menu', '.overlay-menu', '.wrapper');
  },
  showMenu: (btn, menu, overlay, wrapper) => {
    const button = document.querySelector(btn);
    const homeWrap = document.querySelector(wrapper);
    const mainMenu = document.querySelector(menu);
    const wrapOverlay = document.querySelector(overlay);
    if (!button || !mainMenu || !wrapOverlay || !homeWrap) return;
    button.addEventListener('click', () => {
      mainMenu.classList.add('active');
      wrapOverlay.classList.add('active');
      homeWrap.classList.add('active');
    });
    wrapOverlay.addEventListener('click', () => {
      wrapOverlay.classList.remove('active');
      mainMenu.classList.remove('active');
      homeWrap.classList.remove('active');
    });
  },
  showInfo: (btn, info) => {
    const button = document.querySelector(btn);
    const infoWrap = document.querySelector(info);
    if (!button || !infoWrap) return;
    button.addEventListener('click', () => {
      infoWrap.classList.toggle('active');
    });
  },
};

account.init();
extraFeeTab.init();
home.init();
