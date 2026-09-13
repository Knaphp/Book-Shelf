# ชั้นหนังสือของฉัน (Bookshelf App)

เว็บแอปเก็บและติดตามคอลเลกชันหนังสือ/มังงะ/นิยาย แยกตามชั้น (สำนักพิมพ์/หมวดหมู่)
สร้างด้วย React + Vite ข้อมูลบันทึกไว้ใน `localStorage` ของเบราว์เซอร์

## รันบนเครื่องตัวเอง

```bash
npm install
npm run dev
```

จากนั้นเปิด `http://localhost:5173`

## Build สำหรับ deploy

```bash
npm run build
npm run preview   # ลองดูผลลัพธ์ก่อน deploy จริง
```

ไฟล์ที่ build แล้วจะอยู่ในโฟลเดอร์ `dist/` เอาไปอัปโหลดขึ้น Vercel, Netlify,
GitHub Pages หรือ hosting อื่นได้เลย

## เอาขึ้น GitHub

ถ้ายังไม่มี repo บน GitHub ให้สร้างก่อน (ผ่านหน้าเว็บ github.com หรือ `gh repo create`)
แล้วรันคำสั่งนี้ในโฟลเดอร์นี้:

```bash
git init
git add .
git commit -m "Initial commit: bookshelf app"
git branch -M main
git remote add origin https://github.com/<ชื่อผู้ใช้>/<ชื่อ-repo>.git
git push -u origin main
```

แทน `<ชื่อผู้ใช้>` และ `<ชื่อ-repo>` ด้วยของจริง

### ถ้าอยาก deploy ผ่าน GitHub Pages
1. เพิ่ม `base: "/<ชื่อ-repo>/"` ใน `vite.config.js`
2. รัน `npm run build`
3. ใช้ action หรือแพ็กเกจ `gh-pages` เพื่อ push โฟลเดอร์ `dist` ไปที่ branch `gh-pages`

## หมายเหตุ

- ข้อมูลเก็บใน `localStorage` ของเบราว์เซอร์ผู้ใช้แต่ละเครื่อง ไม่ได้ sync ข้ามอุปกรณ์
- รูปปกใช้เป็น URL ลิงก์ตรงไปยังไฟล์รูป — บางเว็บมี hotlink protection ที่บล็อกการโหลดรูปข้ามโดเมน
