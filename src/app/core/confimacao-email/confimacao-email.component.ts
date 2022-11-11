import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserEmailCode } from 'src/app/shared/interfaces/email';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-email-code',
  templateUrl: './confimacao-email.component.html',
  styleUrls: ['./confimacao-email.component.scss'],
})
export class ConfirmacaoEmailComponent implements OnInit {
  userEmailCode: UserEmailCode = {};

  constructor(
    private route: ActivatedRoute,
    private coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userEmailCode.token = params['token'];
    });
  }

  verify() {
    this.coreService.verifyEmailCode(this.userEmailCode);
  }

  resendConfirmationCode() {
    this.coreService.resendEmailCode(this.userEmailCode);
  }
}
