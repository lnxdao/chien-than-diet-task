// Khi chạy trong Claude.ai, window.storage đã có sẵn.
// Khi chạy độc lập ngoài web (Vercel...), file này tự tạo một bản thay thế
// dùng localStorage của trình duyệt, để app vẫn lưu được dữ liệu bình thường.
if (typeof window !== "undefined" && !window.storage) {
  window.storage = {
    async get(key) {
      try {
        const raw = localStorage.getItem(key);
        if (raw === null) return null;
        return { key, value: raw };
      } catch (e) {
        return null;
      }
    },
    async set(key, value) {
      try {
        localStorage.setItem(key, value);
        return { key, value };
      } catch (e) {
        return null;
      }
    },
    async delete(key) {
      try {
        localStorage.removeItem(key);
        return { key, deleted: true };
      } catch (e) {
        return null;
      }
    },
    async list(prefix) {
      try {
        const keys = Object.keys(localStorage).filter((k) => !prefix || k.startsWith(prefix));
        return { keys };
      } catch (e) {
        return null;
      }
    },
  };
}
