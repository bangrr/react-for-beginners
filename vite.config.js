import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '', // vite 로 빌드한 파일을 서비스할 때의 기본 경로
    server: {
        open: true, // 브라우저를 자동으로 열지 여부 (기본값: false)
    }
})