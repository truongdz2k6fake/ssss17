let principal = Number(prompt("Nhập số tiền gửi (VND):"));
let months = Number(prompt("Nhập số tháng gửi:"));

let interestRate = 4.3 / 100;

let interest = principal * interestRate * (months / 12);

alert(`Số tiền lãi bạn nhận được là: ${interest.toFixed(2)} VND`);
