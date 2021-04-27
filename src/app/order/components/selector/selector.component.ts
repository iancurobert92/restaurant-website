import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { Category } from '@app/order/models';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.sass']
})
export class SelectorComponent implements OnInit, AfterViewInit {

  @Input() data!: Category[] | null;
  @Input() currentCategory!: any;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('list') list!: ElementRef<HTMLElement>;

  private posY: number = 0;
  private currentIdx: number = 0;
  private buttonHeight: number = 34;

  constructor(private renderer: Renderer2, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    let index: number | undefined = this.data?.findIndex((category: Category) => category.id == this.currentCategory);
    if (index != undefined)
      this.selectCategory(index, true);
  }

  selectCategory(index: number, firstTime = false) {
    if (this.data === null) return;
    this.currentIdx = index;
    if (this.currentCategory == this.data[this.currentIdx].id && !firstTime) return;
    this.currentCategory = this.data[this.currentIdx].id;
    this.posY = -this.buttonHeight * this.currentIdx;
    this.onSelect.emit(this.currentCategory);

    if (this.list)
      this.renderer.setStyle(this.list.nativeElement, 'top', `${this.posY}px`);
  }

  onCategorySelect(index: number = 0) {
    this.selectCategory(index);
  }

  onUpButtonClick() {
    if (this.currentIdx > 0) {
      this.currentIdx--;
      this.selectCategory(this.currentIdx);
    }
  }

  onDownBtnClick() {
    const numButtons: number = this.list.nativeElement.children.length;

    if (this.currentIdx < numButtons - 1) {
      this.currentIdx++;
      this.selectCategory(this.currentIdx);
    }
  }
}
