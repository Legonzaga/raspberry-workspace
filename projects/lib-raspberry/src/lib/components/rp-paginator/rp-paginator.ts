import { Component, input, OnInit } from '@angular/core';
import { RpPageable } from '../../models/rp-pageable.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rp-paginator',
  imports: [CommonModule],
  templateUrl: './rp-paginator.html',
  styleUrl: './rp-paginator.css',
  standalone: true,
})
export class RpPaginator implements OnInit {
  paginator = input<RpPageable>();

  currentPage: number = 0;
  totalPages: number = 0;
  pageSize: number = 0;

  constructor() {}

  ngOnInit() {
    this.currentPage = this.paginator()?.pageNumber!;
    this.totalPages = this.paginator()?.totalPages!;
    this.pageSize = this.paginator()?.pageSize!;
  }

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.paginator()?.action(this.currentPage, this.pageSize);
    return;
  }

  nextPage(pageNumber: number) {
    if (pageNumber <= this.totalPages) {
      this.currentPage++;
      this.paginator()?.action(this.currentPage, this.pageSize);
      return;
    }
  }

  previousPage(pageNumber: number) {
    if (pageNumber >= 0) {
      this.currentPage--;
      this.paginator()?.action(this.currentPage, this.pageSize);
      return;
    }
  }

  firstPage() {
    this.currentPage = 1;
    this.paginator()?.action(this.currentPage - 1, this.pageSize);
    return;
  }

  lastPage() {
    this.currentPage = this.totalPages;
    this.paginator()?.action(this.currentPage - 1, this.pageSize);
    return;
  }
}
