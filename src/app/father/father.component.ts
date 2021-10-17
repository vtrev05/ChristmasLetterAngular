import { Component, OnInit} from '@angular/core';
import { FatherInterface } from './models/father-interface';


@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {
public inputFirstSon: string = '';
public backgroundColor!: boolean;
public giftsGallery!: FatherInterface;
  constructor() {
    this.giftsGallery = {
      babys: {
        title: 'Regalos para menores de 3 años',
        imgs: [
          {
          src: 'https://m.media-amazon.com/images/I/61JTWYwMMBL._AC_SL1500_.jpg',
          alt: 'Baby Yoda'
        },
        {
          src: 'https://m.media-amazon.com/images/I/81++-rqXxlS._AC_SX425_.jpg',
          alt: 'Play-Doh'
        },
        {
          src: 'https://m.media-amazon.com/images/I/713TUOQpVxL._AC_SL1500_.jpg',
          alt: 'Jenga infantil'
        },
        {
          src: 'https://m.media-amazon.com/images/I/71XWZJqIiQL._AC_SL1500_.jpg',
          alt: 'Megablocks'
        },
        {
          src: 'https://m.media-amazon.com/images/I/51ajeynBWtL._AC_SL1500_.jpg',
          alt: 'Fisher-Price Snoopy'
        },
        {
          src: 'https://m.media-amazon.com/images/I/8149SgeY92L._AC_SL1500_.jpg',
          alt: 'Baby Mickey Gateos'
        },
        {
          src: 'https://m.media-amazon.com/images/I/91IZuuYUD+L._AC_SL1500_.jpg',
          alt: 'Xilófono de madera'
        },
        {
          src: 'https://i.blogs.es/7214ca/1366_2000-21-/1366_2000.jpg',
          alt: 'Manta de juegos y actividades'
        },
        {
          src: 'https://i.blogs.es/a13251/61fmo1sjntl._ac_sl1000_/1366_2000.jpg',
          alt: 'Juguetes de baño'
        },
        {
          src: 'https://i.blogs.es/ee5401/1366_2000-28-/1366_2000.jpg',
          alt: 'Pelota sensorial'
        },
        {
          src: 'https://i.blogs.es/c26ea0/61-uxm9wycl._ac_sl1000_/1366_2000.jpg',
          alt: 'Cubos apilables'
        },
        {
          src: 'https://i.blogs.es/a5aa9f/1366_2000-34-/1366_2000.jpg',
          alt: 'VTech - Moto correpasillos'
        },
        {
          src: 'https://s3.amazonaws.com/mercado-ideas/wp-content/uploads/sites/8/2018/10/30165253/tapete-gym-para-bebe-bright-starts-5-en-1-play-activity-D_NQ_NP_608038-MLM27730000397_072018-F.jpg',
          alt: 'Cesta para bebés'
        },
        {
          src: 'https://m.media-amazon.com/images/I/71esPz3koHL._AC_SX425_.jpg',
          alt: 'Cubo de actividad para bebés'
        },
        {
          src: 'https://i.blogs.es/ba9338/1366_2000-24-/450_1000.jpg',
          alt: 'Peluche con teclas pulsables'
        },
        {
          src: 'https://envezdeflores.com/wp-content/uploads/2019/03/Balancin-vespa-gris.jpg',
          alt: 'Balancín con forma de vespa'
        },
        {
          src: 'https://cdn.shopify.com/s/files/1/0064/0152/3782/products/711U2c2eguL.jpg?v=1602534952',
          alt: 'CubicFun dinosaurio'
        },
        {
          src: 'https://m.media-amazon.com/images/I/71jKtNpZoYS._AC_SL1500_.jpg',
          alt: 'Juguete musical para bebés'
        },
        {
          src: 'https://m.media-amazon.com/images/I/61nliXab3hL._AC_SL1000_.jpg',
          alt: 'Juego de cocina para niños'
        },
        {
          src: 'https://m.media-amazon.com/images/I/91MSwcg5jkL._AC_SL1500_.jpg',
          alt: 'Juego de alimentos (150 piezas)'
        },
        {
          src: 'https://m.media-amazon.com/images/I/71WRS8+G3IL._AC_SL1500_.jpg',
          alt: 'Tienda de campaña princesas'
        },
        {
          src: 'https://m.media-amazon.com/images/I/814ZADxPWEL._AC_SL1500_.jpg',
          alt: 'Kit de huevos de dinosaurio'
        },
        ]
      },
      child: {
        title: 'Regalos recomendados hasta 9 años',
        imgs: [
          {
            src: 'https://i.blogs.es/d64759/81cez9wasql._ac_sl1500_/450_1000.jpeg',
            alt: 'Stop the Virus'
          },
          {
            src: 'https://m.media-amazon.com/images/I/61xLAKOtiOL._AC_UL320_.jpg',
            alt: 'Hasbro - gestos juego de mesa'
          },
          {
            src: 'https://m.media-amazon.com/images/I/81-PsljfuwL._AC_UL320_.jpg',
            alt: '101 casos extraordinarios para resolver en 5 minutos'
          },
          {
            src: 'https://m.media-amazon.com/images/I/61dqUQmLenL._AC_UL320_.jpg',
            alt: '1 Chiste por día - 366 chistes para leer en familia'
          },
          {
            src: 'https://m.media-amazon.com/images/I/81cQEdOifpL._AC_UL320_.jpg',
            alt: 'EXTSUD Balón Fútbol Flotante '
          },
          {
            src: 'https://m.media-amazon.com/images/I/61aXhbML5zL._AC_UL320_.jpg',
            alt: 'Consola PS5 PlayStation 5 Sony'
          },
          {
            src: 'https://m.media-amazon.com/images/I/61az824Oa+L._AC_UL320_.jpg',
            alt: 'FIFA 22 Standard Plus Edition PS5'
          },
          {
            src: 'https://i.blogs.es/32e03e/61r14dtza7l._ac_sl1024_/450_1000.jpeg',
            alt: 'Monopoly Fortnite'
          },
          {
            src: 'https://m.media-amazon.com/images/I/71hlYSBxXXL._AC_UL320_.jpg',
            alt: 'Xbox Series S'
          },
          {
            src: 'https://m.media-amazon.com/images/I/81jXNxyTkkS._AC_UL320_.jpg',
            alt: "LET'S GOU! Tinte Ropa, Tie Dye Kit"
          },
          {
            src: 'https://m.media-amazon.com/images/I/51xiKU3IIJL._AC_UL320_.jpg',
            alt: 'Science4you-Science4you-Fábrica Fábrica de Pintalabios para Niños '
          },
          {
            src: 'https://m.media-amazon.com/images/I/61c5uErzAEL._AC_UL320_.jpg',
            alt: 'OUTCAMER Patinete Niño y Niña'
          },
          {
            src: 'https://m.media-amazon.com/images/I/A1I-mDzF70L._AC_SL1500_.jpg',
            alt: 'set de masa viscosa de unicornio'
          },
          {
            src: 'https://m.media-amazon.com/images/I/71PjzQ3uJsL._AC_SL1500_.jpg',
            alt: 'Microscopio para niños'
          },
          {
            src: 'https://m.media-amazon.com/images/I/71YvDXNcGCL._AC_SL1500_.jpg',
            alt: 'Delantal de cocina fashion'
          },
          {
            src: 'https://m.media-amazon.com/images/I/91TP-RgoQPL._AC_UL320_.jpg',
            alt: 'Tozudo juego de mesa'
          },
          {
            src: 'https://m.media-amazon.com/images/I/81lZfcPWUKL._AC_UL320_.jpg',
            alt: 'Party & Co junior'
          },
          {
            src: 'https://m.media-amazon.com/images/I/71iFtwvBEmL._AC_UL320_.jpg',
            alt: 'Quién es quién'
          },
          {
            src: 'https://m.media-amazon.com/images/I/81lZfcPWUKL._AC_UL320_.jpg',
            alt: 'Party & Co junior'
          },
          {
            src: 'https://m.media-amazon.com/images/I/81Tui2q-HtL._AC_UL320_.jpg',
            alt: 'Pictionary'
          },
          {
            src: 'https://m.media-amazon.com/images/I/81wCr7xrA2L._AC_UL320_.jpg',
            alt: 'No despiertes a papá. Juego de mesa'
          },
          {
            src: 'https://m.media-amazon.com/images/I/81YOoodAneL._AC_UL320_.jpg',
            alt: 'Mi gran libro de experimentos'
          },
          {
            src: 'https://m.media-amazon.com/images/I/61glTil83nS._AC_UL320_.jpg',
            alt: 'Catán, juego de mesa'
          },
          {
            src: 'https://m.media-amazon.com/images/I/71TclgtqZVL._AC_UL320_.jpg',
            alt: 'Bloques de construcción magnéticos.'
          },
          {
            src: 'https://m.media-amazon.com/images/I/81efRQjPiGL._AC_UL320_.jpg',
            alt: 'Mattel Games La Gallina Josefina'
          },
        ]
      },
      teens: {
        title: 'Para los mayores',
        imgs: [
        {
          src: 'https://m.media-amazon.com/images/I/713facBBXOL._AC_UL320_.jpg',
          alt: 'Venom Bikes 20 Inch BMX - Raw'
        },
        {
          src: 'https://psnmagazine.com/uploads/images/product/product_avatar_big/1628691108_M0i5br.jpg',
          alt: 'Battlefield 2042'
        },
        {
          src: 'https://www.todosobrejuguetes.com/wp-content/uploads/2019/12/todosobrejuguetes.com-2019-12-03T170631.023.jpg',
          alt: 'Dobble'
        },
        {
          src: 'https://s4.thcdn.com//productimg/1600/1600/12386385-1504797429405282.jpg',
          alt: 'The Patriot'
        },
        {
          src: 'https://m.media-amazon.com/images/I/81rInSmW59S._AC_SX425_.jpg',
          alt: 'Far Cry 6'
        },
        {
          src: 'https://m.media-amazon.com/images/I/51lFLVHDHCL._AC_UL320_.jpg',
          alt: 'Tous EDP 90ML'
        },
        {
          src: 'https://m.media-amazon.com/images/I/61LsPL7+kaL._AC_UL320_.jpg',
          alt: 'Dreamer By Gianni Versace, 100ml'
        },
        {
          src: 'https://m.media-amazon.com/images/I/81tcVJwMYrL._AC_UL320_.jpg',
          alt: 'Pijama Gaming Mode'
        },
        {
          src: 'https://m.media-amazon.com/images/I/71uxuZlfRoS._AC_UL320_.jpg',
          alt: 'Pijama mujer Harry Potter'
        },
        {
          src: 'https://m.media-amazon.com/images/I/81pPdp2VFrS._AC_UL320_.jpg',
          alt: 'Kit de Maquillaje Profesional Completo'
        },
        {
          src: 'https://m.media-amazon.com/images/I/61QxRrcA9rL._AC_UL320_.jpg',
          alt: 'Mochila Converse'
        },
        {
          src: 'https://m.media-amazon.com/images/I/71PPQOJEjcL._AC_UL320_.jpg',
          alt: 'Ordenador Portátil Gaming'
        },
        {
          src: 'https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UL320_.jpg',
          alt: 'Iphone 12'
        },
        {
          src: 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UL320_.jpg',
          alt: '2020 Apple MacBook Pro'
        },
        {
          src: 'https://m.media-amazon.com/images/I/717583vN3IL._AC_UL320_.jpg',
          alt: 'Apple Watch Series 6'
        },
        {
          src: 'https://m.media-amazon.com/images/I/71Ni8dvtxSL._AC_UL320_.jpg',
          alt: '2020 Apple iPad Air'
        },
        {
          src: 'https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UL320_.jpg',
          alt: 'Apple AirPods Pro'
        },
        {
          src: 'https://m.media-amazon.com/images/I/71VJ6ehHsML._AC_UL320_.jpg',
          alt: 'Xiaomi POCO M3'
        },
        {
          src: 'https://m.media-amazon.com/images/I/71dC5te3FaS._AC_UL320_.jpg',
          alt: 'ONEPLUS 9 5G'
        },
      ]
    }}
  }

  ngOnInit(): void {
  }

public keyUpEvent(letra: string) {
		this.inputFirstSon = letra;
	}
public sonMessage! :string;
receiveMessage($event : string): void{
  this.sonMessage = $event
}
public changeBckColor(){
  if (this.backgroundColor === true) {
    this.backgroundColor = false
  } else{
    this.backgroundColor = true
  }
  
}
}
