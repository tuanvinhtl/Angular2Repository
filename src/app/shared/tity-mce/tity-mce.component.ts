import {Component,OnDestroy,AfterViewInit, EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-tity-mce',
  templateUrl: './tity-mce.component.html',
  styleUrls: ['./tity-mce.component.css']
})
export class TityMceComponent implements AfterViewInit,OnDestroy{

  constructor() { }
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }


}