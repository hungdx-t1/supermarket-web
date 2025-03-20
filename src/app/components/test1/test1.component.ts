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


 /*
  Vòng đời (lifecycle)
  Angular cung cấp các hook lifecycle giúp bạn theo dõi và tương tác với các trạng thái của component hoặc directive. Dưới đây là các lifecycle hook trong Angular:

  1. Constructor
  Được chạy khi khởi tạo component. Dùng để khởi tạo các thuộc tính hoặc phụ thuộc vào các dịch vụ.
  Ví dụ: khai báo dịch vụ hoặc thiết lập các giá trị mặc định.
  Constructor không nên chứa logic phức tạp, chỉ dùng cho khởi tạo.

  2. ngOnInit
  Được gọi sau khi component được khởi tạo và các thuộc tính đầu tiên đã được gán giá trị.
  Thích hợp để thực hiện các hành động phụ thuộc vào dữ liệu ban đầu, như gọi API hoặc thiết lập các giá trị.
  Đây là nơi chính để bắt đầu công việc.

  3. ngOnChanges
  Được gọi khi một trong các input properties của component thay đổi.
  Hook này nhận vào đối số là `SimpleChanges`, cho phép bạn biết những thuộc tính nào đã thay đổi.
  Nguyên lý: Khi dữ liệu từ component cha được truyền xuống, `ngOnChanges` sẽ được kích hoạt.

  4. ngDoCheck
  Đây là hook kiểm tra sự thay đổi của dữ liệu. Nó được gọi mỗi khi Angular thực hiện change detection.
  Nên sử dụng với cẩn thận vì nó có thể khiến ứng dụng bị chậm nếu không cần thiết.
  Không nên dùng để theo dõi trực tiếp thay đổi dữ liệu từ DOM.

  5. ngAfterContentInit
  Được gọi một lần sau khi Angular đã chiếu nội dung của component vào trong DOM.
  Ví dụ: nếu bạn muốn làm gì đó sau khi Angular đã xử lý các `ng-content` hoặc các phần tử con trong component.

  6. ngAfterContentChecked
  Được gọi sau khi nội dung đã được kiểm tra.
  Đây là nơi bạn có thể kiểm tra các thay đổi sau khi Angular kiểm tra sự thay đổi nội dung của component.

  7. ngAfterViewInit
  Được gọi một lần sau khi view của component đã được khởi tạo.
  Thích hợp để thực hiện các thao tác cần thiết sau khi view đã được hoàn tất.

  8. ngAfterViewChecked
  Được gọi sau mỗi lần Angular kiểm tra và cập nhật view của component.
  Có thể dùng để theo dõi các thay đổi của DOM sau mỗi lần cập nhật.

  9. ngOnDestroy
  Được gọi trước khi component bị hủy.
  Sử dụng để dọn dẹp các tài nguyên hoặc unsubscribe các subscriptions, hoặc thực hiện các thao tác khác để tránh rò rỉ bộ nhớ.
  Ví dụ: khi người dùng thoát khỏi một màn hình chat, cần hủy các dịch vụ hoặc subscription liên quan.

*/

/**
 * Observable
 * Thường để xử lý dữ liệu bất đồng bộ, hoặc api, behaviour, timer (timeout, interval)
 * Ví dụ: khi mình đăng ký 1 kênh trên youtube, thì sẽ nhận 1 hành động để theo dõi dữ liệu, khi kênh ra 1 video mới, thì mình sẽ
 * nhận được 1 thông báo video mới (thông báo đó đến từ Observable), cho đến khi mình tắt thông báo thì observable không còn thông
 * báo nữa
 * 
 */
}
