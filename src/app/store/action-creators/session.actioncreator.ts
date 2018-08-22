import { IChangePassword } from './../../interface/session/change-password.interface';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import * as Redux from 'redux';
import { Subscription } from 'rxjs/Subscription';

import { IAppState } from '../app.store';
import { SessionService } from '../../services';
import swal from 'sweetalert2';
import { ISessionCreate } from '../../interface/session/session-create.interface';
import { ISession } from '../../interface/session/session.interface';
import { IUserNew } from '../../interface/user/user-new.interface';

import { 
  SESSION_CREATE_ATTEMPT,
  SESSION_CREATE_FULFILLED,
  SESSION_CHECK_FULFILLED,
  SESSION_CREATE_FAILED,
  SESSION_CHECK_ATTEMPT,
  SESSION_CHECK_FAILED,
  SESSION_DESTROY_FULFILLED
} from '../actions/session.action';


@Injectable()

export class SessionActionCreator implements OnDestroy {

  private loginSubscription: Subscription = null;
  private registerSubscription: Subscription = null;
  private errorMessage: string = null;
  private changePasswordSubscription: Subscription = null;
  private forgotPasswordSubscription: Subscription = null;
  constructor (
    private ngRedux: NgRedux<IAppState>,
    private router: Router,
    private sessionService: SessionService
  ) {}

  ngOnDestroy () {
    console.log('destroy');
  }
}
