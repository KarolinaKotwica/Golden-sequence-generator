const generuj = () => {
    let ile = document.getElementById('ile').value;
    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;
    let bufor;

    a = parseFloat(a)
    b = parseFloat(b)
    ile = parseInt(ile)

    if (isNaN(a) || isNaN(b) || isNaN(ile) || ile < 2 || ile == '') {
        ciag.innerHTML = '<p>Podaj poprawne liczby!</p>';
        fi.innerHTML = '';
    }
    else {
        let ciag = `<p>n<sub>x</sub></p>`;
        let fi = `<p>&Phi; = n<sub>x</sub> &divide; n<sub>x-1</sub></p>`;

        if (a % 2 == 1) ciag += '<div>01 -> <span class="odd">' + a + '</span></div>';
        else ciag += '<div>01 -> <span class="even">' + a + '</span></div>';
        
        if (b % 2 == 1) ciag += '<div>02 -> <span class="odd">' + b + '</span></div>';
        else ciag += '<div>02 -> <span class="even">' + b + '</span></div>';

        fi += '<div>01 -> <span class="ratio">brak</span></div>';
        fi += '<div>02 -> <span class="ratio">' + (b/a).toFixed(30) + '</span></div>';

        

        for( let i = 3; i <= ile; i++) {
            bufor = a + b;
            a = b;
            b = bufor;

            (i < 10) ? bufor='0' : bufor=''

            if (b % 2 == 1) ciag += `<div>${bufor}${i} -> <span class='odd'>${b}</span></div>`;
            else ciag += `<div>${bufor}${i} -> <span class='even'>${b}</span></div>`;

            fi += `<div>${bufor}${i} -> <span class="ratio">${(b/a).toFixed(30)}</span></div>`;            
        }
        
        document.getElementById('ciag').innerHTML = ciag
        document.getElementById('fi').innerHTML = fi
    }
}

document.getElementById('generuj_ciag').addEventListener('click', generuj);

