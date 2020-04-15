import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { HttpService } from 'src/app/services/http.service';
import { UtilService } from 'src/app/services/util.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Result } from 'src/app/models/result.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account: Account = new Account();

  constructor(private util: UtilService,
    private http: HttpService,
    private message: NzMessageService,
    private router: Router) { }

  ngOnInit(): void { }

  login() {
    if (this.util.isNull(this.account.account) || this.util.isNull(this.account.password)) {
      this.message.warning('请填写账号密码');
      return;
    }
    this.http.login(this.account.account, this.account.password).subscribe((data: Result) => {
      this.message.success(data.message);
      if (data.success) {
        this.util.setCookie('token', this.util.dateToYYMMDDHHMMSS(new Date()));
        this.router.navigate(['/admin/index']);
      }
    })
  }

}
