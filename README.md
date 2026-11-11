# Teacher Portfolio — นางสาวนวลสวาสดิ์ มณีมัย
เว็บไซต์ Portfolio ธีมฟ้า–ม่วง–ชมพูพาสเทล ใช้ HTML/CSS/JS แบบ Static สำหรับ GitHub Pages

## วิธีเพิ่มข้อมูล
1. เพิ่มรูปประจำตัวชื่อ `teacher-photo.jpg` ในโฟลเดอร์ `assets/`
2. แก้ `data/portfolio.json` เพื่อใส่ผลงาน ลิงก์ รูปภาพกิจกรรม (ตัวอย่างพาธ `assets/activity-1.jpg`) และอีเมลติดต่อ
3. อัปโหลดไฟล์ทั้งหมดเข้าสู่ GitHub repository โดยให้ `index.html` อยู่ที่ระดับบนสุด
4. ไปที่ **Settings → Pages → Build and deployment → Deploy from a branch** แล้วเลือก `main` และ `/(root)`
5. เปิด URL ที่ GitHub Pages แสดง

หมายเหตุ: ข้อมูลวันที่บรรจุจากภาพเอกสารไม่ได้เผยแพร่ในเว็บจนกว่าจะตรวจสอบกับเอกสารราชการอีกครั้ง ไม่มีการเผยแพร่เงินเดือนและข้อมูลส่วนตัวอ่อนไหว

เพื่อให้ดึง `data/portfolio.json` ได้ ต้องเปิดเว็บไซต์ผ่านเว็บเซิร์ฟเวอร์ เช่น GitHub Pages หรือ VS Code Live Server ไม่ใช่เปิด `index.html` ด้วย file:// โดยตรง


อัปเดต: รูปครูฝังอยู่ใน index.html แล้ว จึงแสดงภาพได้แม้อัปโหลดเฉพาะ index.html (ส่วน CSS/JS ยังต้องคงไฟล์เดิม).
