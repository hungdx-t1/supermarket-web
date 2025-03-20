import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ 
    providedIn: 'root' // Đăng ký service ở cấp root, có thể sử dụng ở mọi nơi trong ứng dụng
    /*
        Giải thích kĩ hơn:
        Cho phép toàn bộ ứng dụng sử dụng BlogService mà không cần import vào app.module.ts.
        Khi ứng dụng chạy, Angular sẽ tạo một thể hiện duy nhất (singleton) của BlogService
    */

})
export class BlogService {
    constructor(private http: HttpClient) {} // Inject `HttpClient` để gọi API

    getBlog() {
        return this.http.get<any>('https://ninedev-api.vercel.app/blogs'); // Gửi request HTTP GET
    }

    /*
        Giải thích kĩ hơn:
        Gọi API https://ninedev-api.vercel.app/blogs bằng HTTP GET.
        Trả về một Observable, giúp component có thể subscribe() để lấy dữ liệu.
    */
}