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
  document.querySelector(".header").innerHTML = `
        <h1 class="header-name">
            ${CONFIGDATA.titleHeader}
            <i class="ti-heart"></i>
        </h1>
        <p class="header-description">
            ${CONFIGDATA.descriptionHeader}
            <br><br>
            ${CONFIGDATA.des2}
        </p>`;
  $.get({
    url: 'https://newsandstory.herokuapp.com/api/v1/nhoem/init',
    success: function(data){
      load_complete();
    },
    error: function(data){
      alert("Đã có lỗi xảy ra")
      window.location.reload();
    }
  })

}

start();

function mylove() {
  const button = document.getElementById('submit-button');
  button.disabled=true;
  button.innerHTML='Đang được gửi ó :>...'
  const name = document.getElementById('name').value;
  const my_first_item = document.getElementById('first-item').value;
  const your_item = document.getElementById('your-item').value;
  const special = document.getElementById('special').value;
  var formData = new FormData();
  formData.append('your_beautiful_name', name);
  formData.append('my_first_present', my_first_item);
  formData.append('your_beautiful_present', your_item);
  formData.append('special_name', special)
  $.post({
    url: 'https://newsandstory.herokuapp.com/api/v1/nhoem',
    data: formData,
    processData: false,
    contentType: false,
    success: function(data) {
      if (data.status == 'success') {
        localStorage.setItem('mylovertoken', data.token);
        window.location.href = '/LuvU/';
      }
      else {
        window.location.href = '/LuvU/';
      }
    },
    error: function(data) {
      alert('Đã có lỗi xảy ra :<');
      button.disabled=false;
      button.innerHTML='Gửi i :>'
    }
  })
}