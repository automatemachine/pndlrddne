// Author: andyngojs, MHP
// Facebook: http://fb.com/dn279 ~ https://fb.com/py.hacker.hieu
// Join us: https://fb.com/groups/dobeeteam.community
// Không được thay đổi ở đây - Not to change
function load_complete() {
  $(".spinner").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
  $("body").delay(350).css({ overflow: "visible" });
}

function start() {
  $.get({
    url: 'https://newsandstory.herokuapp.com/api/v1/nhoem/verify?' + 'token=' + localStorage.getItem('mylovertoken'),
    success: function(data) {
      if (data.status == 'success') {
        var btnYes = document.querySelector(".btn--yes");
        var btnNo = document.querySelector(".btn--no");
        var popup = document.querySelector(".modal");
        var overlay = document.querySelector(".modal__overlay");
        var btnClose = document.querySelector(".btn-close");
        var headerModar = document.querySelector(".heading-name");
        var desccriptionModar = document.querySelector(".message");
        var music = document.querySelector('.music')
        document.querySelector(".header").innerHTML = `
              <h1 class="header-name">
                  ${CONFIGDATA.titleHeader}
                  <i class="ti-heart"></i>
              </h1>
              <p class="header-description">${CONFIGDATA.descriptionHeader}
              </p>`;
        btnYes.innerHTML = `<i class="ti-thumb-up"></i> ${CONFIGDATA.buttonYes}`;
        btnNo.innerHTML = ` <i class="ti-thumb-down"></i> ${CONFIGDATA.buttonNo}`;
        btnYes.style='display:block;'
        btnNo.style='display:block;'
        headerModar.innerHTML = `${CONFIGDATA.titleModar} <i class="ti-heart"></i>`;
        desccriptionModar.innerHTML = `${CONFIGDATA.descriptionModar}`;

        btnYes.onclick = () => {
          popup.classList.add("show");
          music.muted=false;music.play();
          
        };
        btnClose.onclick = () => {
          popup.classList.remove("show");
        };

        overlay.onclick = () => {
          popup.classList.remove("show");
        };

        btnNo.onclick = () => {
          btnNo.style.top = 100 + "px";
          btnYes.style.top = 280 + "px";
        };

        btnNo.onmouseover = (e) => {
          var x = Math.random() * e.relatedTarget.clientHeight * 0.9;
          var y = Math.random() * e.relatedTarget.clientWidth * 0.9;
          btnNo.style.top = x + "px";
          btnNo.style.right = y + "px";
        };
        load_complete();
      }
      else {
        var btn_back = document.querySelector(".btn_back");
        var a_back = document.querySelector('.a--back')
        document.querySelector(".header").innerHTML = `
              <h1 class="header-name">
                  ${CONFIGDATA.titleHeader2}
              </h1>
              <p class="header-description">${CONFIGDATA.descriptionHeader2}
              </p>`;
        btn_back.style='display:block;';
        a_back.style='display:block;';
        btn_back.innerHTML='Quay lại xác nhận :3'
        document.title = '::.. Ur Not My Lover :v ..::'
        load_complete();
      }
    }
  })
  
}

start();
