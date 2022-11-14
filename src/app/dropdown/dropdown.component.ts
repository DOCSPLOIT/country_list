import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  show = false;

  @Input('items') items: string[] = [];

  @Output('onChange') onChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {
    this.show = false;
  }
  selected?: string;
  onSelect(item: string,) {
    this.onChange.emit(item);
  }
  ngOnInit(): void {
  }

}
