import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../app.store';
import {
REPORTER_CREATE_ATTEMPT,
REPORTER_CREATE_FAILED,
REPORTER_CREATE_FULFILLED,
REPORTER_DELETE_ATTEMPT,
REPORTER_DELETE_FAILED,
REPORTER_DELETE_FULFILLED,
REPORTER_GET_ATTEMPT,
REPORTER_GET_FAILED,
REPORTER_GET_FULFILLED,
REPORTER_SELECT_ATTEMPT,
REPORTER_SELECT_FAILED,
REPORTER_SELECT_FULFILLED,
REPORTER_UPDATE_ATTEMPT,
REPORTER_UPDATE_FAILED,
REPORTER_UPDATE_FULFILLED
} from '../actions/reporter.action';
import { Subscription } from 'rxjs/Subscription';
import { ReporterService } from '../../services';
import { IReporter } from '../../interface/reporter/reporter.interface';


@Injectable()

export class ReporterActionCreator implements OnDestroy {

    private errorMessage: string;
    private getLatestReporterSubscription: Subscription = null;
    private updateReporterSubscription: Subscription = null;
    private deleteReporterSubscription: Subscription = null;
    private getReporterByIdSubscription: Subscription = null;
    private getOneReporterSubscription: Subscription = null;

    constructor(
        private ngRedux: NgRedux<IAppState>,
        private reporterService: ReporterService
    ) { }

    ngOnDestroy() {
        console.log('destroy');
    }
}
