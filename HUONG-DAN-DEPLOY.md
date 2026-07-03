# Chiến thần diệt task — Hướng dẫn đưa app lên mạng

App này đã được đóng gói sẵn thành một project chuẩn để deploy lên **Vercel** — đúng quy trình bạn đã quen với Tiệm Giặt Cherry. Toàn bộ các bước dưới đây làm trên web, **không cần mở Terminal, không cần biết lệnh git**.

## Bước 1 — Đưa project lên GitHub (qua web, không cần cài gì)

1. Vào [github.com](https://github.com), đăng nhập (hoặc tạo tài khoản mới nếu chưa có).
2. Bấm nút **"New"** (hoặc dấu **+** góc trên phải → "New repository") để tạo kho chứa mới.
3. Đặt tên ví dụ `chien-than-diet-task`, để **Public**, bấm **Create repository**.
4. Trong trang repo vừa tạo, bấm **"uploading an existing file"** (hoặc "Add file" → "Upload files").
5. Kéo thả **toàn bộ các file và thư mục bên trong folder này** (giữ nguyên cấu trúc: `index.html`, `package.json`, `vite.config.js`, `.gitignore`, và cả thư mục `src` với 3 file bên trong) vào khung upload của GitHub.
   - Lưu ý: GitHub cho kéo thả cả thư mục con, cứ kéo hết 1 lần là được.
6. Cuộn xuống, bấm **Commit changes** (giữ nguyên mặc định là được).

## Bước 2 — Deploy lên Vercel

1. Vào [vercel.com](https://vercel.com), đăng nhập bằng chính tài khoản GitHub ở trên (bấm "Continue with GitHub").
2. Bấm **"Add New..." → "Project"**.
3. Vercel sẽ hiện danh sách repo GitHub của bạn — chọn `chien-than-diet-task` vừa tạo, bấm **Import**.
4. Vercel tự nhận diện đây là project **Vite**, các mục cấu hình cứ để mặc định.
5. Bấm **Deploy**, đợi khoảng 1 phút.
6. Xong! Vercel đưa cho bạn một đường link dạng `chien-than-diet-task-xxxx.vercel.app` — đây là link công khai, gửi cho ai họ cũng mở được, kể cả trên điện thoại.

## Sau khi deploy — vài điều cần biết

- **Dữ liệu lưu theo từng người, từng trình duyệt**: mỗi bạn bè mở link sẽ có dữ liệu (task, streak, huy hiệu...) riêng của họ, lưu trong chính trình duyệt của họ — không ai nhìn thấy dữ liệu của ai.
- **Tính năng "Việc to, bẻ nhỏ giúp mình" (AI Breakdown) sẽ không gọi được AI thật** khi chạy ở ngoài Claude.ai, vì tính năng đó cần chìa khoá API riêng mà mình không thể đưa công khai lên web được (sẽ bị lộ và bị người khác lợi dụng). Đừng lo — app đã có sẵn cơ chế dự phòng, khi không gọi được AI thì tự động dùng **6 bước gợi ý mẫu chung chung** thay thế, nên app vẫn chạy được bình thường, không bị lỗi hay đứng hình. Nếu sau này bạn muốn có AI Breakdown thật trên bản public, cần làm thêm một bước kỹ thuật (dựng một "proxy" nhỏ giữ chìa khoá API an toàn) — lúc đó nói mình, mình hướng dẫn tiếp.
- Mỗi lần bạn muốn cập nhật app (ví dụ đổi icon, thêm tính năng), chỉ cần vào lại repo GitHub, upload đè file `App.jsx` mới → Vercel **tự động deploy lại**, không cần làm lại từ đầu.

## Muốn có tên miền riêng đẹp hơn?

Trong phần cài đặt project trên Vercel có mục **Domains**, bạn có thể gắn tên miền riêng nếu có (ví dụ mua từ Mắt Bão, Tenten...), hoặc cứ dùng thẳng link `.vercel.app` miễn phí cũng được, dùng tốt bình thường.
