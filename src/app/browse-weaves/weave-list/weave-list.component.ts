import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Weave } from '../../shared/weave.model';
import { WeaveService } from '../../shared/weave.service';


@Component({
  selector: 'app-weave-list',
  templateUrl: './weave-list.component.html',
  styleUrls: ['./weave-list.component.css']
})
export class WeaveListComponent implements OnInit {

  weaves: Weave[];
  private subscription: Subscription;

  constructor(private weaveService: WeaveService) { }
  //,  private router: Router,  private route: ActivatedRoute

  ngOnInit() {
    this.subscription = this.weaveService.weavesChanged 
      .subscribe(
        (weaves: Weave[]) => {
          this.weaves = weaves;
        }
      )
    this.weaves = this.weaveService.getWeave();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
