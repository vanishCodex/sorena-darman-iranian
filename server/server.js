// server/server.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint برای ذخیره درخواست
app.post('/submit', async (req, res) => {
  try {
    const { name, phone, description } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: 'نام و شماره تماس اجباری هستند' });
    }

    const newEntry = {
      name,
      phone,
      description: description || '',
      date: new Date().toISOString()
    };

    const filePath = path.join(__dirname, 'data.json');
    const existingData = await fs.promises.readFile(filePath, 'utf8').catch(() => '[]');
    const updatedData = [...JSON.parse(existingData), newEntry];
    await fs.promises.writeFile(filePath, JSON.stringify(updatedData, null, 2));

    res.status(201).json({ success: true, message: 'درخواست با موفقیت ثبت شد' });
  } catch (error) {
    console.error('❌ خطای سرور:', error);
    res.status(500).json({ error: 'خطای داخلی سرور' });
  }
});

// Endpoint جدید برای دریافت لیست درخواست‌ها
app.get('/requests', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data.json');
    const data = await fs.promises.readFile(filePath, 'utf8').catch(() => '[]');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('❌ خطا در دریافت درخواست‌ها:', error);
    res.status(500).json({ error: 'خطا در دریافت درخواست‌ها' });
  }
});

// راه‌اندازی سرور
app.listen(PORT, () => {
  console.log(`✅ سرور فعال روی پورت ${PORT}`);
  console.log(`🔗 آدرس دسترسی: http://localhost:${PORT}`);
});
