var fetchUser;
$(document).ready(function () {
  var user;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open(
    "GET",
    "https://63c342f38067b6bef6c89d76.mockapi.io/users",
    false
  );
  xmlHttp.send(null);

  var dataapi = xmlHttp.responseText;
  user = JSON.parse(dataapi);
  fetchUser = user[0];

  document.getElementById("profilEmail").value = fetchUser.email;
  document.getElementById("profilPassword").value = fetchUser.password;
});

function loginUser() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var status = false;

  if (email == fetchUser.email && password == fetchUser.password) {
    status = true;
  } else {
    alert("Login gagal");
  }
  return status;
}

function ubahProfil() {
  var email = document.getElementById("profilEmail").value;
  var password = document.getElementById("profilPassword").value;

  fetch("https://63c342f38067b6bef6c89d76.mockapi.io/users/1", {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      response.json().then((response) => {
        console.log(response);
      });
    })
    .catch((err) => {
      console.log(err);
    });

  alert("Berhasil");
  window.location.href = "profil.html";
}
