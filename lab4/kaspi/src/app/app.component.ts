import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from './kaspi/product/product.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      name: 'Apple iPhone 16 Pro Max 256Gb Black',
      description: 'The flagship iPhone 16 Pro Max has absorbed the best features of a modern gadget. This is the most productive device in the Apple iPhone line with a large display, amazing performance and incredible external ergonomics. The iPhone 16 Pro Max is a real titan in its family.',
      price: 685666,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      rating: 3.89,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000&tab=reviews',
      commentsNumber: 379
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      name: 'Apple iPhone 16 Pro Max 256Gb Gold',
      description: 'The flagship iPhone 16 Pro Max has incorporated the best features of a modern gadget. This is the most productive device in the Apple iPhone line with a large display, amazing performance and incredible external ergonomics.',
      price: 652988,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      rating: 4.58,
      commentsNumber: 517,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'Apple iPhone 13 128Gb Moonlight',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
      price: 275261,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
      rating: 4.89,
      commentsNumber: 486,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000&tab=reviews'
    }
    ]
}

