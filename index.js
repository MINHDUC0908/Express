const express = require('express'); // Import Express
const app = express(); // Tạo một instance của ứng dụng Express

const PORT = 3000; // Cổng mà server sẽ chạy

// Định nghĩa một route đơn giản
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Lắng nghe trên cổng đã chọn
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
