import { Component, OnInit } from '@angular/core';

import { CoreService } from '../core.service';

@Component({
  selector: 'app-email-password-reset',
  templateUrl: './reset-senha.component.html',
  styleUrls: ['./reset-senha.component.scss'],
})
export class ResetSenhaComponent implements OnInit {
  email!: string;

  constructor(private coreService: CoreService) {}

  ngOnInit(): void {}

  sendPasswordResetLink() {
    this.coreService.sendPasswordResetLink(this.email);
  }
}
