function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}


const namaTamu = getParameterByName('untuk') || getParameterByName('kepada');


if (namaTamu) {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('nama-tamu').textContent = namaTamu;
    });
} else {

    document.getElementById('nama-tamu').textContent = "Tamu yang Terhormat";
}


window.addEventListener("load", function() {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");

   
    setTimeout(function() {
        
        loading.classList.add("blur-out");

       
        setTimeout(function() {
            loading.style.display = "none";
            content.style.display = "block";
        }, 5000); 
    }, 5000); 
});

function copyAccountNumber() {
    const accountNumber = "473201007406539";
    navigator.clipboard.writeText(accountNumber).then(() => {
      alert("Nomor rekening berhasil disalin!");
    });
  }
  
  