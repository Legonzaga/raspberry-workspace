import { Component, input, OnInit } from '@angular/core';
import { RpPageable } from '../../models/rp-pageable.type';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';


@Component({
  selector: 'rp-paginator',
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './rp-paginator.html',
  styleUrl: './rp-paginator.css',
  standalone: true,
})
export class RpPaginator implements OnInit {
  paginator = input<RpPageable>();

  currentPage: number = 0;
  totalPages: number = 0;
  pageSize: number = 0;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.currentPage = this.paginator()?.pageNumber!;
    this.totalPages = this.paginator()?.totalPages!;
    this.pageSize = this.paginator()?.pageSize!;
  }

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.router.navigate(['/list'], { queryParams: { pageNumber: this.currentPage} });
    this.paginator()?.action(this.currentPage, this.pageSize);
    return;
  }

  nextPage(pageNumber: number) {
    if (pageNumber < this.paginator()?.totalPages! - 1) {
      this.currentPage++;
      this.router.navigate(['/list'], { queryParams: { pageNumber: this.currentPage }});
      this.paginator()?.action(this.currentPage, this.pageSize);
      return;
    }
  }

  previousPage(pageNumber: number) {
    if (pageNumber >= 1) {
      this.currentPage--;
      this.router.navigate(['/list'], { queryParams: { pageNumber: this.currentPage} });
      this.paginator()?.action(this.currentPage, this.pageSize);
      return;
    }
  }

  firstPage() {
    if(this.currentPage >= 0) {
      this.currentPage = 0;
      this.router.navigate(['/list'], { queryParams: { pageNumber: 0 }});
      this.paginator()?.action(0, this.paginator()?.pageSize!);
    }
    return;
  }

  lastPage() {
    if (this.currentPage < this.paginator()?.totalPages!) {
    this.currentPage = this.paginator()?.totalPages!;
    this.router.navigate(['/list'], { queryParams: { pageNumber: this.currentPage - 1 }});
    this.paginator()?.action(this.currentPage - 1, this.pageSize);
    }
    return;
  }
}
