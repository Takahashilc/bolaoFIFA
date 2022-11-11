import { Component, Input, OnInit } from '@angular/core';
import { TipService } from 'src/app/services/tipo.service';
import { TipEvent } from 'src/app/shared/interfaces/eventos';

@Component({
  selector: 'app-tip',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.scss'],
})
export class TipComponent implements OnInit {
  @Input() tip!: TipEvent;

  constructor(private tipService: TipService) {}

  ngOnInit(): void {}

  confirmTip() {
    const data = {
      match: this.tip.match.id,
      result: this.tip.type,
    };

    this.tipService.insert(data).subscribe((v) => alert('Tip confirmed'));
  }
}
