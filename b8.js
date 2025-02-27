let date1 = new Date(prompt("Nhập ngày thứ nhất (YYYY-MM-DD):"));
let date2 = new Date(prompt("Nhập ngày thứ hai (YYYY-MM-DD):"));

let daysDiff = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

alert(`Độ lệch là ${daysDiff} ngày`);
