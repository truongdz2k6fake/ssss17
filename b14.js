let radius = Number(prompt("Nhập bán kính (r):"));
let height = Number(prompt("Nhập chiều cao (h):"));

let lateralSurfaceArea = 2 * Math.PI * radius * height;

let totalSurfaceArea = lateralSurfaceArea + 2 * Math.PI * radius * radius;

let volume = Math.PI * radius * radius * height;

let circumference = 2 * Math.PI * radius;

alert(`Diện tích xung quanh: ${lateralSurfaceArea.toFixed(2)}\nDiện tích toàn phần: ${totalSurfaceArea.toFixed(2)}\nThể tích hình trụ: ${volume.toFixed(2)}\nChu vi đáy: ${circumference.toFixed(2)}`);
