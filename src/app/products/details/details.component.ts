import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../shared/data.service';
import {Location} from '@angular/common'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public product : any =  { };
  
  constructor(private route: ActivatedRoute, 
    private dataSvc: DataService,
    private Location: Location
    ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    [this.product] = this.dataSvc.getProductByid(productId);
    console.log('Product->', this.product);
  }

  onGoBack(): void {
    this.Location.back()
  }

}
