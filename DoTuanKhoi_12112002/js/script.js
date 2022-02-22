// câu 3: Đỗ Tuấn Khôi (12/11/2002) 
// coding implementation
function check() {
    let email = document.getElementById('email').value;
    let cmt = document.getElementById('com').value;
    let rating = document.getElementById('rate').value;

    if(email=="" || cmt=="" || rating=="") {
        alert("Vui lòng nhập đầy đủ! (Mã đề thi: 121903)");
    }
    else if (isNaN(rating)) {
        alert("Rating: Vui lòng nhập số! (Họ tên: Đỗ Tuấn Khôi)");
    }
    else alert("THÀNH CÔNG");
}
// end coding implementation
