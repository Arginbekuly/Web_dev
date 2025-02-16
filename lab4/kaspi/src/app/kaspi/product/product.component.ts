import {Component, Input} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
    @Input() image!: string;
    @Input() name! : string;
    @Input() description!: string;
    @Input() price!: number;
    @Input() link!: string;
    @Input() rating!: number;
    @Input() commentsNumber!: number;
    @Input() commentsLink!: string;

  getRatingClass() {
    if(this.rating < 1){
      return 'f0to1';
    } else if(this.rating >= 1 && this.rating < 2){
      return 'f1to2';
    } else if(this.rating >= 2 && this.rating < 3){
      return 'f2to3';
    } else if(this.rating >= 3 && this.rating < 4){
      return 'f3to4';
    } else if(this.rating >= 4 && this.rating < 5){
      return 'f4to5';
    } else if(this.rating == 5){
      return 'f5star';
    } else {
      return 'defaultsStar';
    }
  }
  shareProductW() {
    const url = encodeURIComponent(this.link);
    let shareUrl = `https://wa.me/?text=Check+this+out:+${url}`;
    window.open(shareUrl, '_blank');
  }

  shareProductT() {
    const url = encodeURIComponent(this.link);
    let shareUrl = `https://t.me/share/url?url=${url}&text=Check+this+out!`;
    window.open(shareUrl, '_blank');
  }
}


