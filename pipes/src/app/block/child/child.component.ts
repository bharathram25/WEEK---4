import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonserviceService } from '../../service/commonservice.service'
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent {
  // @Input() msg!:string;
  // constructor(public data:CommonserviceService){}
  @Output() clicked=new EventEmitter<any>
  @Input() tableDatas !: any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  event!:object;
  displayedColumns!:Array<string>;
  dataSource!:Array<string>;
ngOnInit(){
  
  this.displayedColumns = this.tableDatas.col;
  this.dataSource = this.tableDatas.datas;
  console.log(this.tableDatas);
}
// ngAfterViewInit() {
//   this.dataSource.paginator = this.paginator;
// }

send(data:any,icon:string){
  this.event={
    records:data,
    icon:icon
  }
  this.clicked.emit(this.event);
}
}
