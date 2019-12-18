import { CommentsService } from './../service/comments.service';
import { Component, OnInit } from '@angular/core';
import { Comments } from '../model/comments';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  constructor(private CommentsService: CommentsService) { }

  comments: Comments[];

  teste: string = "";


  commentsFiltrados: any = [];
  namesFiltrados: any = [];
  emailFiltrados: any = [];

  _filtroPesquisa: string;
  _filtroPesquisaNome: string;
  _filtroPesquisaEmail: string;

  get filtroPesquisa(): string {
    return this._filtroPesquisa;
  }
  
  get filtroPesquisaNome(): string {
    return this._filtroPesquisaNome;
  }

  get filtroPesquisaEmail(): string {
    return this._filtroPesquisaEmail;
  }
  set filtroPesquisa(value: string) {
    this._filtroPesquisa = value;
    this.commentsFiltrados = this.filtroPesquisa ? this.filtrarPosts(this.filtroPesquisa) : this.comments;
  }

  set filtroPesquisaNome(value: string) {
    this._filtroPesquisaNome = value;
    this.namesFiltrados = this.filtroPesquisaNome ? this.filtrarPostsNome(this.filtroPesquisaNome) : this.comments;
  }

  set filtroPesquisaEmail(value: string) {
    this._filtroPesquisaEmail = value;
    this.emailFiltrados = this.filtroPesquisaEmail ? this.filtrarPostsEmail(this.filtroPesquisaEmail) : this.comments;
  }

  ngOnInit() {
    this.findAll();
  }

  filtrarPosts(filtrarpor: string): any {
    filtrarpor = filtrarpor.toLocaleLowerCase()
    return this.comments.filter(
           comments => comments.email.toLowerCase().indexOf(filtrarpor) !== -1
    );
  }

  filtrarPostsNome(filtrarpor: string): any {
    filtrarpor = filtrarpor.toLocaleLowerCase()
    return this.comments.filter(
           comments => comments.name.toLowerCase().indexOf(filtrarpor) !== -1
    );
  }

  filtrarPostsEmail(filtrarpor: string): any {
    filtrarpor = filtrarpor.toLocaleLowerCase()
    return this.comments.filter(
           comments => comments.body.toLowerCase().indexOf(filtrarpor) !== -1
    );
  }
  findAll() {
    this.CommentsService.getAll().subscribe((commentsOut: Comments[]) => {
      this.comments = commentsOut;
    }, err => {

    })
  }
  
 

  onItemChange(event){
    console.log(" Value is : ", event , " : " , event.target.value);
    return event.target.value;
 }

 onItemChange2(event){
  console.log(" Value is : ", event , " : " , event.target.value);
  return "email";
}

}
