const USD = 23500;

function doiTien(){
    var soTien = document.getElementById("money").value;
    console.log(soTien,"USD");
    var tienDoi = Number(soTien)*USD;
    console.log("Được",tienDoi,"VND");
}