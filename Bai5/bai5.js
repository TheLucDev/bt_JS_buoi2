function tong(){
    var numberEl = document.getElementById("number").value;
    var soDau = numberEl.toString()[0];
    var soCuoi = numberEl.toString()[1];

    console.log("input :",numberEl);
    tong2KySo = Number(soDau) + Number(soCuoi);
    console.log("Tổng 2 ký số : ",tong2KySo);


    // console.log(soDau);
    // console.log(soCuoi);

}