import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-test1',
  imports: [FormsModule, CommonModule],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component {
  
  // Text
  text = "Hello world";

  // Properties
  isDisable = true;

  // Attributes
  textAttribute = "MinoMC_YTB's Page";

  // Events:
  // 1. Click event:
  btnText = "Click me!";
  clickMessage = '';

  clickEventHandler() : void {
    this.clickMessage = 'Hello bạn, chào mừng bạn đến với trang web!';
  }

  // 2. Click event với tham số:
  btnText2 = "Click me (2)!";
  clickMessage2 = '';

  clickEventHandler2(event: Event): void {
    console.log("Đã tương tác nút 2");
    this.clickMessage2 = 'Đây là lời chào thứ 2: Chào bạn!';
  }

  // 3. Event với ngModel
  // Khi bạn sử dụng ngModel để hai chiều hóa dữ liệu, bạn có thể kết hợp sự kiện với các thay đổi dữ liệu.
  // Ví dụ, sử dụng sự kiện input để theo dõi thay đổi trong một trường input:

  name = "";
  onNameChange(newName: string): void {
    this.name = newName;
    console.log('Name changed:', newName);
  }

  // 4. Event với directive
  // Angular cũng cung cấp các sự kiện cho các directive đặc biệt như ngIf, ngFor. Bạn có thể bắt các sự kiện của directive này để xử lý khi chúng thay đổi.
  // ví dụ về ngFor
  // onItemClick(item) {
  //   console.log('Item clicked:', item);
  // }
  
// Vòng đời (lifecycle)
  // 1. Constructor
  // Được chạy khi khởi tạo
  // 2. ngOnInit
  // Được chạy sau khi chạy xong trang
  // 3. ngOnChanges
  // Update và rerun nếu props (lớp con) có th đổi - rất tốt
 // Cách khai báo: ngOnChanges(changes: SimpleChanges) : void {}

  // 4. ngDoCheck
  // Nguy hiểm: chạy lại từ đầu nếu có sự th đổi bất kì thứ gì
  // (state/content/DOM). Lưu ý phải destroy nếu ko sd

  // 5. ngOnDestroy
  // Ví dụ thực tế (realtime): khi mình truy cập vào giao diện nhắn tin với
  // 1 ai đó, thì tức nghĩa là mình đang truy cập vào 1 component 
  // là nhắn tin, và sau khi nhắn xong thì mình thoát ra khỏi giao
  // diện. Ngay lúc này thì ta đã chắc chắn rằng mình đã thoát khỏi
  // giao diện đó rồi. Lúc này phải cần 1 phương thức ngOnDestroy, 
  // cho đến khi ai đó tham gia component
  // Sử dụng api:
  // Timeout/interval: vd đặt 5 giây sd 1 thao tác nào đó, nhưng 3 giây
  // là đã tắt cpn r, nên phải cần ngOnDestroy.
  // Đối với dự án lớn thì gặp ngOnDestroy thường xuyên
  





}
