import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-button',
  templateUrl: './pagination-button.component.html',
  styleUrls: ['./pagination-button.component.scss'],
})
export class PaginationButtonComponent implements OnInit {
  items: any[] = [];
  @Input() currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 0;
  @Output() onPageChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {
    this.items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
    this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.onPageChange.emit(this.currentPage);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.onPageChange.emit(this.currentPage);
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.onPageChange.emit(this.currentPage);
    }
  }
}
