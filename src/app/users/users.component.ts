import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    if (this.users.length > 0){
      this.router.navigate([this.users[0].id, this.users[0].name], {relativeTo: this.route}).then(res =>
        console.log('Redirect to first user url')
      );
    }
  }

}
