let tenSach = prompt("Nhập tên sách:");
let tacGia = prompt("Nhập tên tác giả:");
let namXuatBan = prompt("Nhập năm xuất bản:");


namXuatBan = parseInt(namXuatBan);


let namHienTai = new Date().getFullYear();


console.log(`Thông tin sách: ${tenSach} - Tác giả: ${tacGia}`);

if (namXuatBan === namHienTai) {
    console.log("Đây là sách mới!");
} else if (namHienTai - namXuatBan <= 5) {
    console.log("Sách khá mới");
} else {
    console.log("Sách đã cũ");
}