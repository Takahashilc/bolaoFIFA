import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserRanking } from '../shared/interfaces/pontos';

@Component({
  selector: 'app-ranking',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class RankingComponent implements OnInit {
  users!: UserRanking[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.ranking({ limit: 10 }).subscribe((users) => {
      this.users = users;
    });
  }
}
