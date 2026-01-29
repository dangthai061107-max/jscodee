let tenSach = prompt("Mời bạn nhập tên sách:");
let namXuatBanRaw = prompt("Nhập năm xuất bản của sách:");
let namHienTaiRaw = prompt("Nhập năm hiện tại (ví dụ: 2026):");

let namXuatBan = Number(namXuatBanRaw);
let namHienTai = Number(namHienTaiRaw);

let tuoiSach = namHienTai - namXuatBan;

console.log("Sách: " + tenSach);
console.log("Năm xuất bản: " + namXuatBan);
console.log("Tuổi của sách: " + tuoiSach + " năm");