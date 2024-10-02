import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { Observable } from 'rxjs';
import { DforkScrollServiceService } from '../../service/dfork-scroll-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-componentn-scroll',
  standalone: true,
  imports: [CommonModule, ScrollingModule],  // Import CommonModule here
  providers:[HttpClientModule],
  templateUrl: './componentn-scroll.component.html',
  styleUrls: ['./componentn-scroll.component.css']
})
export class ComponentnScrollComponent implements OnInit {
  pokemons$: Observable<any[]>;

  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;

  constructor(private pokemonService: DforkScrollServiceService) {
    this.pokemons$ = this.pokemonService.fetchPokemons();
  }

  ngOnInit(): void {}

  currentIndex(index: number): void {
    console.log('Scrolled to index:', index);
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }

  scrollToIndex(): void {
    const randomIndex = Math.floor(Math.random() * this.viewport.getDataLength());
    this.viewport.scrollToIndex(randomIndex);
  }
}
