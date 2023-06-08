window.onload = function() {

    let titlu = document.getElementById('titluPrincipal');
    titlu.style.color = 'blue';

    let paragrafNou = document.createElement('p');
    paragrafNou.textContent = 'Acesta este un paragraf provizoriu.';
    let sectiuneMain = document.querySelector('main');
    sectiuneMain.appendChild(paragrafNou);

    let primulLink = document.querySelector('main ul li a');
    primulLink.parentElement.removeChild(primulLink);

    let buton = document.querySelector('.buton-modern');
    buton.textContent = 'Contactează-ne acum!';
    buton.onmouseover = function() {
        this.style.backgroundColor = 'green';
    }
    buton.onmouseout = function() {
        this.style.backgroundColor = '';
    }

    let formular = document.querySelector('form');
    formular.onsubmit = function(event) {
        event.preventDefault();
        let inputDestinatie = document.querySelector('#destinatie');
        let destinatie = inputDestinatie.value;
        alert('Ai căutat destinația: ' + destinatie);
    }

    let culori = ['red', 'blue', 'green', 'yellow', 'pink'];
    let indexCuloare = 0;
    setInterval(function() {
        let body = document.querySelector('main');
        body.style.backgroundColor = culori[indexCuloare];
        indexCuloare++;
        if (indexCuloare === culori.length) {
            indexCuloare = 0;
        }
    }, 5000);

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();  // prevenim trimiterea formularului
    
        var nume = document.getElementById('nume').value;
        var email = document.getElementById('email').value;
        var destinatie = document.getElementById('destinatie').value;
        var numarPersoane = document.getElementById('numar_persoane').value;
        var preferinteCazare = document.getElementById('preferinte_cazare').value;
        var comentarii = document.getElementById('comentarii').value;
        var data = document.getElementById('data').value;
    
        console.log('Nume:', nume);
        console.log('Email:', email);
        console.log('Destinatie:', destinatie);
        console.log('Număr de persoane:', numarPersoane);
        console.log('Preferințe de cazare:', preferinteCazare);
        console.log('Comentarii:', comentarii);
        console.log('Data:', data);
    });

    let destinatii = ['Paris', 'Amsterdam', 'Barcelona', 'Bali', 'Sydney', 'Rio de Janeiro'];
    let indexAleator = Math.floor(Math.random() * destinatii.length);
    let destinatieAleatoare = destinatii[indexAleator];
    let dataCurenta = new Date();
    let mesaj = `Destinația ta aleatoare este ${destinatieAleatoare.toUpperCase()}! Data curentă este ${dataCurenta}.`;
    console.log(mesaj);

    function schimbaCuloareFundal() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let culoareAleatoare = `rgb(${r}, ${g}, ${b})`;
    
        document.body.style.backgroundColor = culoareAleatoare;
    }

    schimbaCuloareFundal();
}
