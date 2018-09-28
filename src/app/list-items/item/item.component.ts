import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ItemDetailsComponent } from '../../item-details/item-details.component';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  item: Item;
  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(ItemDetailsComponent, {
      width: '250px',
      data: this.item
    });
  }


  ngOnInit() {
  }

}
