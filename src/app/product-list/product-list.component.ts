import { Component, OnInit } from '@angular/core';
import{PostsService} from '../posts.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  data:any;
  constructor(private PostData:PostsService) { }

  ngOnInit(): void {
    this.PostData.getPosts().subscribe((result)=>{
      console.warn("result",result)
      this.data=result
    })
  }

}
