
function tinhToan(){
    var dai = document.getElementById("chieuDai").value;
    console.log("Chiều dài:",dai);
    var rong = document.getElementById("chieuRong").value;
    console.log("Chiều rộng:",rong);

    var chuvi = (Number(dai)+Number(rong))*2;
    console.log("Chu vi:",chuvi);
    var dienTich = Number(dai)*Number(rong);
    console.log("Diện tích:",dienTich);
}