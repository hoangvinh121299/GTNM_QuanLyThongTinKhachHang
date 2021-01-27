import { ChitietkhachhangComponent } from './chitietkhachhang/chitietkhachhang.component';
import { LichsugiaodichkhachhangComponent } from './lichsugiaodichkhachhang/lichsugiaodichkhachhang.component';
import { DanhsachkhachhangComponent } from './danhsachkhachhang/danhsachkhachhang.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NavigationComponent} from './navigation/navigation.component';
import {ToolbarsComponent} from './toolbars/toolbars.component';
import { ThongKeDoanhThuComponent } from './thong-ke-doanh-thu/thong-ke-doanh-thu.component';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'Navigation', component: NavigationComponent, runGuardsAndResolvers: 'always' },
  { path: 'Toolbars', component: ToolbarsComponent },
  { path: 'ThongKeDoanhMuc', component: ThongKeDoanhThuComponent },
  { path: 'DanhSachKhachHang', component: DanhsachkhachhangComponent },
  { path:'LichSuGiaoDich',component:LichsugiaodichkhachhangComponent},
  { path:'ChiTietKhachHang',component:ChitietkhachhangComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
