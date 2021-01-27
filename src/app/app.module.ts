import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarsComponent } from './toolbars/toolbars.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ThongKeDoanhThuComponent } from './thong-ke-doanh-thu/thong-ke-doanh-thu.component';
import { DanhsachkhachhangComponent } from './danhsachkhachhang/danhsachkhachhang.component';
import { LichsugiaodichkhachhangComponent } from './lichsugiaodichkhachhang/lichsugiaodichkhachhang.component';
import { ChitietkhachhangComponent } from './chitietkhachhang/chitietkhachhang.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarsComponent,
    NavigationComponent,
    ThongKeDoanhThuComponent,
    DanhsachkhachhangComponent,
    LichsugiaodichkhachhangComponent,
    ChitietkhachhangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
