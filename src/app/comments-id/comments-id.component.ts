import { Comments } from './../model/comments';
import { CommentsService } from './../service/comments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-id',
  templateUrl: './comments-id.component.html',
  styleUrls: ['./comments-id.component.css']
})
export class CommentsIdComponent implements OnInit {

  id: number;
  email: string;
  comment: Comments = new Comments(0,0,'','',''); 
  comments: Comments[];
  constructor(private CommentsService: CommentsService) { }

  ngOnInit() {
  }


  search(){
    this.CommentsService.searchById(this.id).subscribe((commentOut: Comments)=>{
      this.comment = commentOut;
    })
  }

  findAll(){
    this.CommentsService.getAll().subscribe((commentOut: Comments[])=>{
      this.comments = commentOut;
    })
  }
}
