import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import{ Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent  implements OnInit {
  cards!: Card[];
  constructor(private router:Router) { }
  ngOnInit(): void {
    this.cards = [
      {
        name:'Hebergement',
        description:"Trouvez des hebergements en fonction de vos besoins",
        imageurl:'../../assets/Image/topics/16.jpg',
        total:14,
        lien:'hebergement',
        presentation:'card'
      },
      {
        name:'Ecoles',
        description:"Trouvez facilement des ecoles proche de chez vous",
        imageurl:'../../assets/Image/topics/3.png',
        total:13,
        presentation:'card'

      },
      {
        name:'Hopitaux',
        description:"Trouvez facilement des hopitaux proche de chez vous,",
        imageurl:'../../assets/Image/topics/14.jpg',
        total:8,
        category:'sante',
        presentation:'card'
      },
      {
        name:'Appartements',
        description:"Les Appartements proches de chez vous et a moindre coût",
        imageurl:'../../assets/Image/topics/17.jpg',
        total:5,
        category:'Hebergement',
      },
      {
        name:'Maisons',
        description:"Les Maisons pour vous votre famille",
        imageurl:'../../assets/Image/topics/15.jpg',
        total:5,
        category:'Hebergement',
      },
      {
        name:'Les Suites',
        description:"Des tres grandes suites pour vos vacances",
        imageurl:'../../assets/Image/topics/9.png',
        total:2,
        category:'Hebergement',
      },
      {
        name:'Universite',
        description:"Les universitaires proches de chez vous",
        imageurl:'../../assets/Image/topics/18.jpg',
        total:2,
        category:'Ecole',
      },
      {
        name:'Lycee et college',
        description:"Les lycees et college proches de chez vous",
        imageurl:'../../assets/Image/topics/19.jpg',
        total:2,
        category:'Ecole',
      },
      {
        name:'cliniques',
        description:"Les cliniques proches de chez vous",
        imageurl:'../../assets/Image/topics/20.jpg',
        total:2,
        category:'Hopitaux',
      },

      {
        name:'Hopitaux',
        description:"Vos Hopitaux de chez vous",
        imageurl:'../../assets/Image/topics/21.jpg',
        total:2,
        category:'Hopitaux',
      }
    ]
    const tableaux1 = this.cards.filter((card:Card) => card.presentation === 'card');
    function update(arg:Card[]){
      for(let i = 0; i < arg.length; i++){
        const parent = document.querySelector('.container-service');
        const article = arg[i]
        const element = document.createElement('div');
        element.classList.add('elements');
        element.style.cursor = 'pointer';
        element.style.transition = 'all 0.5s';
        element.addEventListener('mouseover', function(){
          element.style.transform = 'translateY(-15px)';
        })
        element.addEventListener('mouseout', function(){
          element.style.transform = 'translateY(0px)';
        })
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '400px';
        card.style.height = '420px';
        card.style.backgroundColor = '#ffffff';
        card.style.borderRadius = '20px';
        card.style.position = 'relative';
        card.style.padding = '30px';
        card.style.boxShadow = '5px 8px 22px 15px rgba(0,0,0,0.2)';
        const text = document.createElement('div');
        text.classList.add('text');
        const img = document.createElement('div');
        img.classList.add('img');
        img.style.width = '100%';
        const titre = document.createElement('h1');
        titre.innerHTML = article.name;
        titre.style.height = '3rem';
        titre.style.fontFamily = 'Jost, sans-serif';
        titre.style.fontSize = '1.8rem';
        const description = document.createElement('h2');
        description.style.color = '#6a6d78';
        description.style.opacity = '0.7';
        description.style.fontSize = '1.2rem';
        description.style.fontFamily = 'open-sans, sans-serif';
        description.innerHTML = article.description;
        const image = document.createElement('img');
        image.src = article.imageurl;
        image.style.width = '100%';
        const p = document.createElement('p');
        p.classList.add('total');
        p.style.position = 'absolute';
        p.style.top = '30px';
        p.style.right = '15px';
        p.style.padding = '10px';
        p.style.fontSize = '1.2rem';
        p.style.backgroundColor = "#80d0c7"
        p.style.borderRadius = '10px';
        p.style.fontFamily = 'Jost, sans-serif';
        p.style.color = 'white';
        p.innerText = `${article.total}`
        const lien = document.createElement('a');
        lien.setAttribute('href', `${article.lien}`);
        lien.style.color = 'white';
        lien.style.textDecoration = 'none';
        lien.style.backgroundColor = '#80d0c7';
        lien.style.padding = '10px';
        lien.style.borderRadius = '10px';
        lien.innerHTML = 'Voir plus';
        text.appendChild(titre);
        text.appendChild(description);
        img.appendChild(image);
        card.appendChild(text);
        card.appendChild(img);
        card.appendChild(p);
        card.appendChild(lien);
        element.appendChild(card);
        if(parent){
          parent.appendChild(element);
        }
      }
    }
    update(tableaux1);

    //filtrage
    const btn_presentation = document.querySelector('.btn-presentation');
    btn_presentation?.addEventListener('click', (e:Event) => {
      e.preventDefault();
      const element = e.target as HTMLElement;
      if(element.classList) {
        element.classList.add('link_active');
      }
      const parent = document.querySelector('.container-service');
      if(parent) {
        parent.innerHTML = '';
      }
      update(tableaux1)
    })

    const btn_hebergement = document.querySelector('.btn-hebergement');
    btn_hebergement?.addEventListener('click', (e:Event) => {
        e.preventDefault();
        const element = e.target as HTMLElement;
        if(element.classList) {
          element.parentElement?.classList.remove('link_active');
          element.classList.add('link_active');
        }
        const listeFitre: Card[] = this.cards.filter((element: Card) => {
          return element.category === 'Hebergement';
        });

        const parent = document.querySelector('.container-service');
        if(parent) {
          parent.innerHTML = '';

        }
        update(listeFitre)
      })
    const btn_ecole = document.querySelector('.btn-ecole');
    btn_ecole?.addEventListener('click', (e:Event) => {
      e.preventDefault();
      const element = e.target as HTMLElement;
      if(element.classList) {
        element.parentElement?.classList.remove('link_active');
        element.classList.add('link_active');
      }
      const listeFitre: Card[] = this.cards.filter((element: Card) => {
        return element.category === 'Ecole';
      });

      const parent = document.querySelector('.container-service');
      if(parent){
        parent.innerHTML = '';
      }
      update(listeFitre)
    })
    const btn_hopitaux = document.querySelector('.btn-hopitaux');
    btn_hopitaux?.addEventListener('click', (e:Event) => {
      e.preventDefault();
      const element = e.target as HTMLElement;
      if(element.classList) {
        element.parentElement?.classList.remove('link_active');
        element.classList.add('link_active');
      }
      const listeFitre: Card[] = this.cards.filter((element: Card) => {
        return element.category === 'Hopitaux';
      });

      const parent = document.querySelector('.container-service');
      if(parent){
        parent.innerHTML = '';
      }
      update(listeFitre)
    })



    /*function filterTab(arry:Card[]):Card[] {
      return arry.filter((card:Card) => {
        const tableauxFiltre = card.category === 'Hebergement';
        console.log(tableauxFiltre)
        //return card.category === 'Hebergement';


      })
    }*/

    const allQuestion = document.querySelectorAll('.question');
    if(allQuestion){
      allQuestion.forEach((element) => {
        element.addEventListener('click', (e:Event) => {
          const element = e.target as HTMLElement;
          if(element.classList) {
            element.classList.add('active');
          }
          for(let i = 0; i < allQuestion.length; i++) {
            if(allQuestion[i] !== element) {
              allQuestion[i].classList.remove('active');
            }
          }
        })
      })
    }


  }
}
