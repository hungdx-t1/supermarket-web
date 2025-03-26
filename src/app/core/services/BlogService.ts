import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseData } from "../type/responseData";
import { ProductItems } from "../type/productItem";

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

    getBlog(): Observable<ResponseData<ProductItems[]>> {
        return this.http.get<any>('https://ninedev-api.vercel.app/blogs'); // Gửi request HTTP GET
    }

    /*
        Giải thích kĩ hơn:
        Gọi API https://ninedev-api.vercel.app/blogs bằng HTTP GET.
        Trả về một Observable, giúp component có thể subscribe() để lấy dữ liệu.
    */

    /**
     * Observable
     * Thường để xử lý dữ liệu bất đồng bộ, hoặc api, behaviour, timer (timeout, interval)
     * Ví dụ: khi mình đăng ký 1 kênh trên youtube, thì sẽ nhận 1 hành động để theo dõi dữ liệu, khi kênh ra 1 video mới, thì mình sẽ
     * nhận được 1 thông báo video mới (thông báo đó đến từ Observable), cho đến khi mình tắt thông báo thì observable không còn thông
     * báo nữa
     */

    getDetailProduct(id: number): Observable<ResponseData<ProductItems>> {
        return this.http.get<any>(`https://ninedev-api.vercel.app/blogs/${id}`);
    }

    createProduct(body: any | null): Observable<any> {
        return this.http.post<any>('https://ninedev-api.vercel.app/blogs', body);
    }
}