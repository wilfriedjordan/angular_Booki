"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LandingPageComponent = void 0;
var core_1 = require("@angular/core");
var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(router) {
        this.router = router;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cards = [
            {
                name: 'Hebergement',
                description: "Trouvez des hebergements en fonction de vos besoins",
                imageurl: '../../assets/Image/topics/16.jpg',
                total: 14,
                lien: 'hebergement',
                presentation: 'card'
            },
            {
                name: 'Ecoles',
                description: "Trouvez facilement des ecoles proche de chez vous",
                imageurl: '../../assets/Image/topics/3.png',
                total: 13,
                presentation: 'card'
            },
            {
                name: 'Hopitaux',
                description: "Trouvez facilement des hopitaux proche de chez vous,",
                imageurl: '../../assets/Image/topics/14.jpg',
                total: 8,
                category: 'sante',
                presentation: 'card'
            },
            {
                name: 'Appartements',
                description: "Les Appartements proches de chez vous et a moindre coût",
                imageurl: '../../assets/Image/topics/17.jpg',
                total: 5,
                category: 'Hebergement'
            },
            {
                name: 'Maisons',
                description: "Les Maisons pour vous votre famille",
                imageurl: '../../assets/Image/topics/15.jpg',
                total: 5,
                category: 'Hebergement'
            },
            {
                name: 'Les Suites',
                description: "Des tres grandes suites pour vos vacances",
                imageurl: '../../assets/Image/topics/9.png',
                total: 2,
                category: 'Hebergement'
            },
            {
                name: 'Universite',
                description: "Les universitaires proches de chez vous",
                imageurl: '../../assets/Image/topics/18.jpg',
                total: 2,
                category: 'Ecole'
            },
            {
                name: 'Lycee et college',
                description: "Les lycees et college proches de chez vous",
                imageurl: '../../assets/Image/topics/19.jpg',
                total: 2,
                category: 'Ecole'
            },
            {
                name: 'cliniques',
                description: "Les cliniques proches de chez vous",
                imageurl: '../../assets/Image/topics/20.jpg',
                total: 2,
                category: 'Hopitaux'
            },
            {
                name: 'Hopitaux',
                description: "Vos Hopitaux de chez vous",
                imageurl: '../../assets/Image/topics/21.jpg',
                total: 2,
                category: 'Hopitaux'
            }
        ];
        var tableaux1 = this.cards.filter(function (card) { return card.presentation === 'card'; });
        function update(arg) {
            var _loop_1 = function (i) {
                var parent = document.querySelector('.container-service');
                var article = arg[i];
                var element = document.createElement('div');
                element.classList.add('elements');
                element.style.cursor = 'pointer';
                element.style.transition = 'all 0.5s';
                element.addEventListener('mouseover', function () {
                    element.style.transform = 'translateY(-15px)';
                });
                element.addEventListener('mouseout', function () {
                    element.style.transform = 'translateY(0px)';
                });
                var card = document.createElement('div');
                card.classList.add('card');
                card.style.width = '400px';
                card.style.height = '420px';
                card.style.backgroundColor = '#ffffff';
                card.style.borderRadius = '20px';
                card.style.position = 'relative';
                card.style.padding = '30px';
                card.style.boxShadow = '5px 8px 22px 15px rgba(0,0,0,0.2)';
                var text = document.createElement('div');
                text.classList.add('text');
                var img = document.createElement('div');
                img.classList.add('img');
                img.style.width = '100%';
                var titre = document.createElement('h1');
                titre.innerHTML = article.name;
                titre.style.height = '3rem';
                titre.style.fontFamily = 'Jost, sans-serif';
                titre.style.fontSize = '1.8rem';
                var description = document.createElement('h2');
                description.style.color = '#6a6d78';
                description.style.opacity = '0.7';
                description.style.fontSize = '1.2rem';
                description.style.fontFamily = 'open-sans, sans-serif';
                description.innerHTML = article.description;
                var image = document.createElement('img');
                image.src = article.imageurl;
                image.style.width = '100%';
                var p = document.createElement('p');
                p.classList.add('total');
                p.style.position = 'absolute';
                p.style.top = '30px';
                p.style.right = '15px';
                p.style.padding = '10px';
                p.style.fontSize = '1.2rem';
                p.style.backgroundColor = "#80d0c7";
                p.style.borderRadius = '10px';
                p.style.fontFamily = 'Jost, sans-serif';
                p.style.color = 'white';
                p.innerText = "" + article.total;
                var lien = document.createElement('a');
                lien.setAttribute('href', "" + article.lien);
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
                if (parent) {
                    parent.appendChild(element);
                }
            };
            for (var i = 0; i < arg.length; i++) {
                _loop_1(i);
            }
        }
        update(tableaux1);
        //filtrage
        var btn_presentation = document.querySelector('.btn-presentation');
        btn_presentation === null || btn_presentation === void 0 ? void 0 : btn_presentation.addEventListener('click', function (e) {
            e.preventDefault();
            var element = e.target;
            if (element.classList) {
                element.classList.add('link_active');
            }
            var parent = document.querySelector('.container-service');
            if (parent) {
                parent.innerHTML = '';
            }
            update(tableaux1);
        });
        var btn_hebergement = document.querySelector('.btn-hebergement');
        btn_hebergement === null || btn_hebergement === void 0 ? void 0 : btn_hebergement.addEventListener('click', function (e) {
            var _a;
            e.preventDefault();
            var element = e.target;
            if (element.classList) {
                (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove('link_active');
                element.classList.add('link_active');
            }
            var listeFitre = _this.cards.filter(function (element) {
                return element.category === 'Hebergement';
            });
            var parent = document.querySelector('.container-service');
            if (parent) {
                parent.innerHTML = '';
            }
            update(listeFitre);
        });
        var btn_ecole = document.querySelector('.btn-ecole');
        btn_ecole === null || btn_ecole === void 0 ? void 0 : btn_ecole.addEventListener('click', function (e) {
            var _a;
            e.preventDefault();
            var element = e.target;
            if (element.classList) {
                (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove('link_active');
                element.classList.add('link_active');
            }
            var listeFitre = _this.cards.filter(function (element) {
                return element.category === 'Ecole';
            });
            var parent = document.querySelector('.container-service');
            if (parent) {
                parent.innerHTML = '';
            }
            update(listeFitre);
        });
        var btn_hopitaux = document.querySelector('.btn-hopitaux');
        btn_hopitaux === null || btn_hopitaux === void 0 ? void 0 : btn_hopitaux.addEventListener('click', function (e) {
            var _a;
            e.preventDefault();
            var element = e.target;
            if (element.classList) {
                (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove('link_active');
                element.classList.add('link_active');
            }
            var listeFitre = _this.cards.filter(function (element) {
                return element.category === 'Hopitaux';
            });
            var parent = document.querySelector('.container-service');
            if (parent) {
                parent.innerHTML = '';
            }
            update(listeFitre);
        });
        /*function filterTab(arry:Card[]):Card[] {
          return arry.filter((card:Card) => {
            const tableauxFiltre = card.category === 'Hebergement';
            console.log(tableauxFiltre)
            //return card.category === 'Hebergement';
    
    
          })
        }*/
        var allQuestion = document.querySelectorAll('.question');
        if (allQuestion) {
            allQuestion.forEach(function (element) {
                element.addEventListener('click', function (e) {
                    var element = e.target;
                    if (element.classList) {
                        element.classList.add('active');
                    }
                    for (var i = 0; i < allQuestion.length; i++) {
                        if (allQuestion[i] !== element) {
                            allQuestion[i].classList.remove('active');
                        }
                    }
                });
            });
        }
    };
    LandingPageComponent = __decorate([
        core_1.Component({
            selector: 'app-landing-page',
            templateUrl: './landing-page.component.html',
            styleUrl: './landing-page.component.scss'
        })
    ], LandingPageComponent);
    return LandingPageComponent;
}());
exports.LandingPageComponent = LandingPageComponent;
