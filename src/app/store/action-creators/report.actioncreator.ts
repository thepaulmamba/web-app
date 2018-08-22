import { Injectable, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import swal from 'sweetalert2';
import { IAppState } from '../app.store';
import {
  REPORT_DELETE_ATTEMPT,
  REPORT_DELETE_FAILED,
  REPORT_DELETE_FULFILLED,
  REPORT_GET_ATTEMPT,
  REPORT_GET_FAILED,
  REPORT_GET_FULFILLED,
  REPORT_SELECT_ATTEMPT,
  REPORT_SELECT_FAILED,
  REPORT_SELECT_FULFILLED,
  REPORT_UPDATE_ATTEMPT,
  REPORT_UPDATE_FAILED,
  REPORT_UPDATE_FULFILLED
} from '../actions/report.action';
import { Subscription } from 'rxjs/Subscription';
import { ReportService, DialogService } from '../../services';
import { IReport } from '../../interface/report/report.interface';
import * as moment from 'moment';


@Injectable()

export class ReportActionCreator implements OnDestroy {
  ngOnDestroy () {
    console.log('destroy');
  }
}
