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

### Deploy ผ่าน GitHub Pages (ตั้งค่าไว้ให้แล้ว)

โปรเจกต์นี้มี GitHub Actions workflow (`.github/workflows/deploy.yml`) ที่ build
และ deploy ขึ้น GitHub Pages ให้อัตโนมัติทุกครั้งที่ push เข้า branch `main`
เหลือแค่เปิดใช้งานครั้งแรก:

1. ไปที่ repo บน GitHub → **Settings → Pages**
2. หัวข้อ **Build and deployment → Source** เปลี่ยนจาก "Deploy from a branch"
   เป็น **"GitHub Actions"**
3. กลับไปที่แท็บ **Actions** แล้วรอ workflow "Deploy to GitHub Pages" รันจนเสร็จ
   (ถ้าไม่รันเอง กด **Run workflow** ได้)
4. เว็บจะขึ้นที่ `https://<ชื่อผู้ใช้>.github.io/<ชื่อ-repo>/`

จากนั้นทุกครั้งที่ push โค้ดใหม่ขึ้น `main` เว็บจะ build และ deploy เวอร์ชันใหม่ให้เอง

## หมายเหตุ

- ข้อมูลเก็บใน `localStorage` ของเบราว์เซอร์ผู้ใช้แต่ละเครื่อง ไม่ได้ sync ข้ามอุปกรณ์
- รูปปกใช้เป็น URL ลิงก์ตรงไปยังไฟล์รูป — บางเว็บมี hotlink protection ที่บล็อกการโหลดรูปข้ามโดเมน
