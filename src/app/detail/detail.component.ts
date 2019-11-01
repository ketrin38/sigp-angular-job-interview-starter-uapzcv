import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GithubIssue } from '../models/models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<any>;
  private data: GithubIssue;
  public currIss;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
     this.activatedRoute.params.subscribe(x=>{
          this.http.get(`https://api.github.com/repos/angular/angular/issues/${x.id}`).subscribe(y=>{
    this.currIss = y;
    });
  //  this.activatedRoute.params.subscribe(x=>{
  //         this.http.get(`https://api.github.com/repos/angular/material2/issues/${x.id}`).subscribe(y=>{
  //   console.log(y);
  //   });
    })

// https://api.github.com/repos/octocat/Hello-World/issues/
  

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}