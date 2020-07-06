import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
    if (this.servers.length > 0){
      this.router.navigate([this.servers[0].id], {relativeTo: this.route}).then(res =>
      console.log('Redirected to first server url'));
    }
  }

  reloadPage() {
    this.router.navigate(['../servers'], {relativeTo: this.route}).then( res =>
      console.log('Page reloaded')
    );
  }
}
