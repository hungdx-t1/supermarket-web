import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'currencyPipe',
    standalone: true
})
export class CurrencyPipe implements PipeTransform {
    // USD thứ nhất và VND thứ 2 chỉ định tham số transform có thể là 1 trong 2 cái đó. USD thứ 3 là nếu khai báo CurrencyPipe mà ko có kí tự 
    // đằng sau thì mặc định sẽ nhận là USD.
    //
    // Ví dụ: {{ priceUSD | currencyPipe }} và {{ priceVND | currencyPipe:'VND' }}
    //
    transform(value: number, fromCurrency: 'USD' | 'VND' = 'USD'): string {
        // let là khai báo biến trong TS hoặc JS, trong C# thì có def để khai báo biến
        let convertedValue = value;

        // Chuyển đổi từ USD sang VND nếu cần
        if (fromCurrency === 'USD') {
            convertedValue = value * 25500;
        }

        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(value);        
    }
}