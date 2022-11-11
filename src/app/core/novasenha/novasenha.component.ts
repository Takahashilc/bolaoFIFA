import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ValidacaoSenha } from './validacao-senha.validators';

@Component({
  selector: 'app-password-reset',
  templateUrl: './novasenha.component.html',
  styleUrls: ['./novasenha.component.scss'],
})
export class NovaSenhaComponent implements OnInit {
  passwordFormGroup!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.passwordFormGroup = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmedPassword: ['', [Validators.required, Validators.minLength(8)]],
        token: [''],
      },
      {
        validators: [ValidacaoSenha],
      }
    );

    this.route.params.subscribe((params) => {
      this.passwordFormGroup.patchValue({ token: params['token'] });
    });
  }

  resetPassword(): void {
    console.log(this.passwordFormGroup.value);
    if (this.passwordFormGroup.invalid || this.passwordFormGroup.pending) {
      return;
    }
    this.userService.resetPassword(this.passwordFormGroup.value);
  }
}
