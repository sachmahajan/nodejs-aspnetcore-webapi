import {Component, ViewEncapsulation} from 'angular2/core';
import {STYLE_URL_FRAMEWORKS} from '../styleConfig';

@Component({
    selector: 'nfn-login',
    templateUrl: 'app/components/login/login.html',
    styleUrls: STYLE_URL_FRAMEWORKS.concat(['app/components/login/login.css']),
    encapsulation: ViewEncapsulation.Native
})
export class LoginComponent {

}