import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepoInfoService } from '../../services/repo-info.service';
import { RootObject, RootObject_Owner } from '../../intefaces/repo-info.interface';

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.scss']
})
export class RepoInfoComponent implements OnInit {
  userName: string | null = null;
  repoName: string | null = null;
  repository: RootObject = {} as RootObject;
  repoOwner: RootObject_Owner =  {} as RootObject_Owner
  constructor(
    private route: ActivatedRoute,
    private RepoInfoService:RepoInfoService
    ) { }
  showInfo(){
    this.RepoInfoService.getData(this.userName!, this.repoName!).subscribe((data) => {
      this.repository = data
      this.repoOwner = data.owner
    })
  }
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.userName = paramMap.get('user');
      this.repoName = paramMap.get('repo');
    });
    this.showInfo()
  }
}