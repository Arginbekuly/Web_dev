import { Component } from '@angular/core';
import {ProductComponent} from './kaspi/product/product.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ProductComponent, NgForOf, NgForOf, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  categories = ['Technics' , 'Clothes' , 'Phones' , 'Sport' , 'All']
  selectedCategory = 'All'
  basket: any[] = []
  totalBasket: number = 0;

  products = [
    {
      id: 1 ,
      category: 'Phones',
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
      id: 2 ,
      category: 'Phones',
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
      id: 3 ,
      category: 'Phones',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'Apple iPhone 13 128Gb Moonlight',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
      price: 275261,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
      rating: 4.89,
      commentsNumber: 486,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000&tab=reviews'
    },
    {
      id: 4 ,
      category: 'Phones',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h03/h20/85428948598814.png?format=gallery-medium',
      name: 'Samsung Galaxy A55 5G 8GB / 128GB Smartphone Dark Blue',
      description: 'Samsung has introduced a new smartphone of the mid-budget A – series-Galaxy A55, and today it is the top model of the line, which has received significant improvements in both characteristics and software, including a powerful processor with graphics from AMD. Right now, this is the only Samsung smartphone with seamless update technology – no more waiting for Android to update.',
      price: 164528,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-128-gb-temno-sinii-117420239/?c=750000000',
      rating: 4.89,
      commentsNumber: 497,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000&tab=reviews'
    },
    {
      id: 5 ,
      category: 'Phones',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h03/h20/85428948598814.png?format=gallery-medium',
      name: 'Samsung Galaxy A55 5G 8GB / 128GB Smartphone Dark Blue',
      description: 'Samsung has introduced a new smartphone of the mid-budget A – series-Galaxy A55, and today it is the top model of the line, which has received significant improvements in both characteristics and software, including a powerful processor with graphics from AMD. Right now, this is the only Samsung smartphone with seamless update technology – no more waiting for Android to update.',
      price: 164528,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-128-gb-temno-sinii-117420239/?c=750000000',
      rating: 4.89,
      commentsNumber: 497,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000&tab=reviews'
    },
    {
      id: 6 ,
      category: 'Technics',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium',
      name: 'LG F2J3NS0W Washing Machine white',
      description: 'The depth of the LG F2J3NS0W washing machine is only 44 cm, so it will fit even in a small bathroom. The drum holds 6 kg of dry laundry, which is quite enough for a family of three or four people. This model is equipped with a direct-drive inverter motor, which has a longer service life than a conventional one, since there are no brushes or belts in its design.',
      price: 160878,
      link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000',
      rating: 4.89,
      commentsNumber: 977,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000&tab=reviews'
    },
    {
      id: 7 ,
      category: 'Technics',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h90/hd8/85539374170142.jpg?format=gallery-medium',
      name: 'AVA-2070B black',
      description: 'The depth of the LG F2J3NS0W washing machine is only 44 cm, so it will fit even in a small bathroom. The drum holds 6 kg of dry laundry, which is quite enough for a family of three or four people. This model is equipped with a direct-drive inverter motor, which has a longer service life than a conventional one, since there are no brushes or belts in its design.',
      price: 24990,
      link: 'https://kaspi.kz/shop/p/ava-mmwo-2070b-chernyi-117793364/?c=750000000',
      rating: 4.89,
      commentsNumber: 239,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000&tab=reviews'
    },
    {
      id: 8 ,
      category: 'Clothes',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h54/h3e/86391516823582.jpg?format=gallery-medium',
      name: 'Tes pe Solid Black T-shirt',
      description: 'Collar Neckline round neck ModelT-shirt n Print solid color',
      price: 900,
      link: 'https://kaspi.kz/shop/p/ava-mmwo-2070b-chernyi-117793364/?c=750000000',
      rating: 4.5,
      commentsNumber: 431,
      commentsLink: 'https://kaspi.kz/shop/p/futbolka-tespe-atk0173-chernyi-56-103963191/?c=750000000'
    },
    {
      id: 9 ,
      category: 'Sport',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/pcb/1607007.jpg?format=gallery-medium',
      name: 'Sport&Fitness Collapsible Dumbbell Set 30 kg',
      description: 'Collar Neckline round neck ModelT-shirt n Print solid color',
      price: 14587,
      link: 'https://kaspi.kz/shop/p/nabor-gantelei-sport-fitness-razbornaja-30-kg-128115329/?c=750000000',
      rating: 4.90,
      commentsNumber: 231,
      commentsLink: 'https://kaspi.kz/shop/p/nabor-gantelei-sport-fitness-razbornaja-30-kg-128115329/?c=750000000'
    }
  ]
  get filteredProducts() {
    return this.selectedCategory === 'All'
      ? this.products
      : this.products.filter(product => product.category.includes(this.selectedCategory));
  }


  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  addToBasket(product: { id: number, name: string }) {
    this.basket.push(product);
    this.totalBasket = this.basket.length;
    console.log(`Добавлен товар: ${product.name}. Всего в корзине: ${this.totalBasket}`);
  }

  dropToBasket(product: { id: number, name: string }) {
    this.basket = this.basket.filter(item => item.id !== product.id);
    this.totalBasket = this.basket.length;
    console.log(`Удален товар: ${product.name}. Всего в корзине: ${this.totalBasket}`);
  }



}

