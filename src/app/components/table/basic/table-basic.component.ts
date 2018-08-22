import { Component, OnInit, Input, Output, EventEmitter, Inject, DoCheck, OnDestroy, ViewChild } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}


@Component({
  selector: 'app-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.scss']
})
export class TableBasicComponent implements OnInit, OnDestroy, DoCheck {

  public actions = 'table.actions';

  @Input() tableTitle: string;
  @Input() actionDelete: boolean;
  @Input() actionEdit: boolean;
  @Input() actionSave: boolean;
  @Input() actionCheck: boolean;
  @Input() actionMore: boolean;
  @Input() actionApprove: boolean;
  @Input() actionDecline: boolean;
  @Input() actionJoin: boolean;
  @Input() actionViewDetail: boolean;
  @Input() paginator: boolean;
  @Input() currentPage: number;
  @Input() itemPerPage: number;
  @Input() tableDataArray: Observable<any[]>;
  @Input() tableHeaderName: Array<string>;
  @Input() tableHeaderAlias: Array<string>;
  @Output() clickEdit = new EventEmitter<any>();
  @Output() clickDelete = new EventEmitter<any>();
  @Output() clickCheck = new EventEmitter<any>();
  @Output() clickSave = new EventEmitter<any>();
  @Output() clickMore = new EventEmitter<any>();
  @Output() clickActionApprove = new EventEmitter<any>();
  @Output() clickActionDecline = new EventEmitter<any>();
  @Output() clickActionJoin = new EventEmitter<any>();
  @Output() clickChatName = new EventEmitter<any>();

  public newTableDataArray:any[]; // page number
  // private itemPerPage:number = 5; // item per page
  public pagesToShow:number; // pages button between first and last
  public totalItem:number; // total number of item
  public sortBy: string;
  public sortName: string;

  private tableDataSubscription: Subscription = null;

  constructor (
    private formBuilder: FormBuilder
  ) {}

  ngOnInit () {
    this.tableDataSubscription = this.tableDataArray
    .map(data => this.sorter(data, this.sortName, this.sortBy))
    .map(data => this.chunker(data, this.itemPerPage, this.currentPage))
    .subscribe(
      data => {
        this.newTableDataArray = data
      }
    );
  }

  ngDoCheck () {
    this.tableDataSubscription = this.tableDataArray
    .map(data => this.sorter(data, this.sortName, this.sortBy))
    .map(data => this.chunker(data, this.itemPerPage, this.currentPage))
    .subscribe(
      data => {
        this.newTableDataArray = data
      }
    )
  }

  ngOnDestroy () {
    (this.tableDataSubscription) ? this.tableDataSubscription.unsubscribe() : null;
  }

  chunker(data, itemPerPage, currentPage) {
    if (this.paginator) {
      const chunkedData = _.chunk(data, itemPerPage);
      this.pagesToShow = chunkedData.length;
      const dataToRender = chunkedData[currentPage];
      return dataToRender;
    } else {
      return data;
    }
  }

  actionsEnabled (): boolean {
      return (this.actionDelete
        || this.actionEdit
        || this.actionMore
        || this.actionApprove
        || this.actionDecline
        || this.actionJoin
        || this.actionCheck)
        ? true
        : false;
  }

  onFirst() {
    this.currentPage = 0;
  }

  onPrev() {
    if (this.currentPage !== 0) {
      this.currentPage--;
    }
  }

  onNext() {
    if ( this.currentPage >= (this.pagesToShow - 1)) {

    } else {
      this.currentPage++;
    }
  }

  onLast() {
   this.currentPage = this.pagesToShow - 1;
  }

  onEditClick (data) {
    this.clickEdit.emit(data);
  }

  onDeleteClick (data) {
    this.clickDelete.emit(data);
  }

  onCheckClick (data) {
    this.clickCheck.emit(data);
  }

  onSaveClick (data) {
    this.clickSave.emit(data);
  }

  onMoreClick (data) {
    this.clickMore.emit(data);
  }

  onActionApproveClick (data) {
    this.clickActionApprove.emit(data);
  }

  onActionDeclineClick (data) {
    this.clickActionDecline.emit(data);
  }

  onActionJoinClick(data) {
      this.clickActionJoin.emit(data);
  }

  onChatNameClick (data) {
    this.clickChatName.emit(data);
  }

  sortAscending (headerName) {
    this.sortBy = 'asc';
    this.sortName = headerName;
  }

  sortDescending (headerName) {
    this.sortBy = 'desc';
    this.sortName = headerName;
  }

  sorter (data, sortName, sortBy) {
    if (sortName && sortBy) {
      const sortedData = _.orderBy(data, [d => {
        if (d[sortName]) {
          return d[sortName].toLowerCase();
        } else {
          return d;
        }
      } ], [sortBy]);
      return sortedData;
    }
    return data;
  }

}
