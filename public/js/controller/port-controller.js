( function () {
    'use strict';

    angular
        .module('jutart')
        .controller('portController', portController)
    
    portController.$inject = ['$scope']    
    function portController($scope){
        $scope.frames = [
            {
                titulo: 'Crânio Humano',
                alt: 'Crânio Humano em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/cranio.jpg',
                software: 'zBrush,Keyshot'
            },
            {   titulo: 'Puzzle Game Bar',
                alt: 'Identidade Visual da empresa Puzzle Game Bar por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/Puzzle.png',
                software: 'Photosop,Illustrator'
            },
            {   titulo: 'Cardápio Puzzle Game Bar',
                alt: 'Cardápio da hamburgueria Puzzle Game Bar por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/menu-puzzle.png',
                software: 'Photosop,Illustrator'
            },
            {   titulo: 'Taça de Vinho',
                alt: 'Vinho em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/Vinho.jpg',
                software: 'Maya,Realflow,C4D'
            },
            {   titulo: 'Petrolifera',
                alt: 'Silhueta de uma petrolifera em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/Petrolifera.jpg',
                software: 'Maya,MentalRay'
            },
            {   titulo: 'Casa com piscina',
                alt: 'Area de lazer de uma casa em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/Casa.jpg',
                software: 'Maya,vRay'
            },
            {
                titulo: 'Tocha Olimpica 2016',
                alt: 'Tocha Olimpica 2016 em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/Tocha.jpg',
                software: 'Maya,Keyshot'
            },
            {   titulo: 'Chopp',
                alt: 'Gás no Chopp em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/Breja.jpg',
                software: 'Maya,Realflow,C4D'
            },
            {   titulo: 'Fluido Chocolate',
                alt: 'Fluido Chocolate em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/Chocolate.jpg',
                software: 'Maya,Realflow,C4D'
            },
            {   titulo: 'Personagem 3D',
                alt: 'Personagem em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/Persona.jpg',
                software: 'Maya,MentalRay'
            },

            {   titulo: 'Foguete Animado',
                alt: 'Foguete Animado em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/Foguete.jpg',
                software: 'Maya,MentalRay'
            },
            {   titulo: 'Animação Água',
                alt: 'Animação Água em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/Beco.jpg',
                software: 'Maya,Realflow,MentalRay'
            },
            {
                titulo: 'Coleção Umbrella Corporation',
                alt: 'Coleção Umbrella Corporation em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/Umbrella.jpg',
                software: 'Maya,MentalRay'
            },
            {   titulo: 'Marcopolo Paradiso G7',
                alt: 'Onibus Marcopolo Paradiso G7 em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/Paradiso.jpg',
                software: 'Maya,Keyshot'
            },
            {   titulo: 'MP4/4 Senna 1988',
                alt: 'MP4/4 Senna 1988 em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/McLaren.jpg',
                software: 'Maya,MentalRay'
            },
            {   titulo: 'Sinister Car',
                alt: 'Pintura,texturas do carro da equipe Sinister por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/sinister-car.png',
                software: 'Photoshop'
            },
            {
                titulo: 'Cerveja',
                alt: 'Gotículas Cerveja em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/Cerveja.jpg',
                software: 'Maya,Realflow,C4D'
            },
            
            {   titulo: 'Hogwarts Express',
                alt: 'Hogwarts Express em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/Trem.jpg',
                software: 'Maya,MentalRay'
            },
            {   titulo: 'Photoshop',
                alt: 'Photoshop em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/PS.jpg',
                software: 'Photoshop'
            },
            {   titulo: 'Copos Puzzle Game Bar',
                alt: 'Copos em 3D por Juttahir Moraes',
                url: '../content/images/portifolio/_Frames/Copos.png',
                software: 'Blender'
            },
        ]
    }

})();