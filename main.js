
function getEle(id) {
    return document.getElementById(id)
}
// Tạo mảng trống 
var numArray = [];

function getNumber() {
    var n = Number(getEle("inputNum").value);

    //Push phần tử nhập từ giao diện vào mảng
    numArray.push(n);

    //Hiển thị ra các số đã nhập
    getEle("xuatSoDaNhap").innerHTML = numArray;
}

function tongMang() {
    var tong = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            tong += numArray[i];
        }
    }

    getEle("txtTong").innerHTML = "Tổng số dương: " + tong;
}

function demSoDuong() {
    var dem = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            dem++;
        }
    }

    getEle("txtDemDuong").innerHTML = "Số dương: " + dem;
}

function timMin() {
    var min = numArray[0];
    for (var i = 1; i < numArray.length; i++) {
        if (numArray[i] < min) {
            min = numArray[i];
        }
    }

    getEle("txtMin").innerHTML = "Số nhỏ nhất: " + min;
}


function timDuongMin() {
    //tạo mảng trống n để chứa các phần tử dương của mảng numArray
    var n = [];
    //chạy vòng lặp nếu có giá trị lớn hơn 0 thì push vào mảng n
    for (var r = 0; r < numArray.length; r++) {
        if (numArray[r] > 0) {
            n.push(numArray[r]);
        }
    }
    //nếu độ dài mảng n > 0 thì mảng n có phần tử dương và xét vòng lặp để tìm
    //ngược lại thì mảng sẻ không chứa số dương
    if (n.length > 0) {
        var min = n[0];
        for (var r = 1; r < n.length; r++) {
            if (n[r] < min) {
                min = n[r];
            }
        }
        getEle("txtTimDuongMin").innerHTML = "Số dương nhỏ nhất: " + min;
    } else
        getEle("txtTimDuongMin").innerHTML = "Không có số dương trong mảng";
}

function soChanCuoi() {
    var num = 'Không có số chẵn';
    for (var r = 0; r < numArray.length; r++) {
        if (numArray[r] % 2 == 0) {
            num = numArray[r];
        }
        if (numArray[r] == 0) {
            num = 'Số 0 là trường hợp đặc biệt';
        }
    }
    getEle("soChanCuoi").innerHTML = "Số chẵn cuối cùng: " + num;
}

function swap(n, r) {
    var e = numArray[n];
    numArray[n] = numArray[r],
        numArray[r] = e;
}

function doiViTri() {
    swap(getEle("inputIndex1").value, getEle("inputIndex2").value),
        getEle("txtChangePos").innerHTML = "Mảng sau khi đổi: " + numArray;
}

function sapXepTang() {
    for (var n = 0; n < numArray.length; n++) {
        for (var r = 0; r < numArray.length - 1; r++) {
            if (numArray[r] > numArray[r + 1]) {
                swap(r, r + 1);
            }
        }
    }
    getEle("txtSapXepTang").innerHTML = "Mảng sau khi sắp xếp: " + numArray
}

function checkSoNguyenTo(n) {
    if (n < 2) {
        return false;
    }
    for (var r = 2; r <= Math.sqrt(n); r++) {
        if (n % r == 0) {
            return false;
        }
    }
    return true;
}
function timSoNguyenTo() {
    var n = -1;
    for (var r = 0; r < numArray.length; r++) {
        if (checkSoNguyenTo(numArray[r])) {
            n = numArray[r];
            break
        }
    }
    if (n !== -1) {
        getEle("txtPrime").innerHTML = 'Số nguyên tố đầu tiên trong mảng là ' + n;
    } else {
        getEle("txtPrime").innerHTML = "Không có số nguyên tố";
    }
}
// Tạo mảng bài 9 , làm theo ví dụ
var arrayFloat = [];

function themSo() {
    var n = Number(getEle("inputFloat").value);
    arrayFloat.push(n);
    getEle("txtArrayFloat").innerHTML = arrayFloat;
}

function demSoNguyen() {
    var n = 0;
    for (var r = 0; r < arrayFloat.length; r++) {
        if (Number.isInteger(arrayFloat[r])) {
            n++;
        }
    }

    getEle("txtNguyen").innerHTML = "Số nguyên: " + n;
}



function soSanh() {
    var n = 0;
    var r = 0;
    for (var e = 0; e < numArray.length; e++) {
        if (numArray[e] > 0) {
            n++;
        }
        if (numArray[e] < 0) {
            r++;
        }
    }
    if (n > r) {
        getEle("txtSoSanh").innerHTML = "Số dương > Số âm"
    } else if (n < r) {
        getEle("txtSoSanh").innerHTML = "Số âm > Số dương"
    } else {
        getEle("txtSoSanh").innerHTML = "Số âm = Số dương"
    }
}


