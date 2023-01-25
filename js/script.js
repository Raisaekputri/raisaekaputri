var list;
fetch("https://63c342f38067b6bef6c89d76.mockapi.io/herbal").then((res) => {
  res.json().then((data) => {
    if (data.length > 0) {
      var temp = "";
      var no = 1;
      list = data;
      data.forEach((itemData) => {
        temp += "<tr>";
        temp += "<td>" + no + "</td>";
        temp += "<td>" + itemData.nama_herbal + "</td>";
        temp += "<td>" + itemData.deskripsi + "</td>";
        temp +=
          "<td>" +
          "<a class='list-icon' onclick='showData(" +
          itemData.id +
          ")'><i class='fa fa-pencil-square'></i></a>" +
          "<a class='list-icon' onclick='hapusHerbal(" +
          itemData.id +
          ")'>" +
          "<i class='fa fa-trash'></i></a>" +
          "</td></tr>";
        no++;
      });

      document.getElementById("dataherbal").innerHTML = temp;
    }
  });
});

function showData(id) {
  var index;
  index = list.length;
  var data;
  for (var i = 0; i < index; i++) {
    if (list[i]) {
      if (list[i].id == id) {
        data = list[i];
      }
    }
  }

  document.getElementById("id").value = data.id;
  document.getElementById("editnama").value = data.nama_herbal;
  document.getElementById("editdeskripsi").value = data.deskripsi;
  window.location.href = "#editHerbal";
}

function updateHerbal() {
  var id = document.getElementById("id").value;
  var nama = document.getElementById("editnama").value;
  var deskripsi = document.getElementById("editdeskripsi").value;

  fetch("https://63c342f38067b6bef6c89d76.mockapi.io/herbal/" + id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      nama_herbal: nama,
      deskripsi: deskripsi,
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
  window.location.href = "herbal.html";
}

function tambahHerbal() {
  var namaHerbal = document.getElementById("addnama").value;
  var deskripsi = document.getElementById("adddeskripsi").value;

  fetch("https://63c342f38067b6bef6c89d76.mockapi.io/herbal", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      nama_herbal: namaHerbal,
      deskripsi: deskripsi,
    }),
  }).then((response) => {
    alert("Berhasil");
    namaHerbal = "";
    deskripsi = "";
    window.location.href = "herbal.html";
  });
}

function hapusHerbal(id) {
  if (confirm("Hapus herbal?")) {
    fetch("https://63c342f38067b6bef6c89d76.mockapi.io/herbal/" + id, {
      method: "DELETE",
    }).then((res) => console.log(res));
    alert("Berhasil");
    window.location.href = "herbal.html";
  } else {
  }
}
