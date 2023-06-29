const generuj = () => {
    let howMany = document.getElementById('howMany').value;
    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;
    let bufor;

    a = parseFloat(a)
    b = parseFloat(b)
    howMany = parseInt(howMany)

    if (isNaN(a) || isNaN(b) || isNaN(howMany) || howMany < 2 || howMany == '') {
        sequence.innerHTML = '<p>Podaj poprawne liczby!</p>';
        fi.innerHTML = '';
    }
    else {
        let sequence = `<p>n<sub>x</sub></p>`;
        let fi = `<p>&Phi; = n<sub>x</sub> &divide; n<sub>x-1</sub></p>`;

        if (a % 2 == 1) sequence += '<div>01 -> <span class="odd">' + a + '</span></div>';
        else sequence += '<div>01 -> <span class="even">' + a + '</span></div>';
        
        if (b % 2 == 1) sequence += '<div>02 -> <span class="odd">' + b + '</span></div>';
        else sequence += '<div>02 -> <span class="even">' + b + '</span></div>';

        fi += '<div>01 -> <span class="ratio">brak</span></div>';
        fi += '<div>02 -> <span class="ratio">' + (b/a).toFixed(30) + '</span></div>';


        for( let i = 3; i <= howMany; i++) {
            bufor = a + b;
            a = b;
            b = bufor;

            (i < 10) ? bufor='0' : bufor=''

            if (b % 2 == 1) sequence += `<div>${bufor}${i} -> <span class='odd'>${b}</span></div>`;
            else sequence += `<div>${bufor}${i} -> <span class='even'>${b}</span></div>`;

            fi += `<div>${bufor}${i} -> <span class="ratio">${(b/a).toFixed(30)}</span></div>`;            
        }

        document.getElementById('sequence').innerHTML = sequence
        document.getElementById('fi').innerHTML = fi
    }
}

document.getElementById('generate').addEventListener('click', generuj);
document.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("generate").click();
      }
})

var odd = document.getElementsByName('np');
var ev = document.querySelectorAll('.ev');
var phi = document.getElementsByClassName('phi');
var all = document.querySelectorAll('.all');

function color_odd() {
    var color = this.value;
    
    let odd_words = document.getElementsByClassName('odd');

    for(let word of odd_words) {
        word.style.color = color;
    }
}

function color_even(color) {
    let even_words = document.querySelectorAll('.even');

    for(let word of even_words) {
        word.style.cssText = `color: ${color};`
    }
}

function color_phi(color) {
    let phi_words = document.getElementsByClassName('ratio');

    for(ratio of phi_words) {

        ratio.removeAttribute('style')

        if(color == 'red')
        {
            ratio.classList.add('blood');
            ratio.classList.remove('grass');
            ratio.classList.remove('war');
        }
        else if(color == 'green')
        {
            ratio.classList.remove('blood');
            ratio.classList.add('grass');
            ratio.classList.remove('war');
        }
        else
        {
            ratio.classList.remove('blood');
            ratio.classList.remove('grass');
            ratio.classList.add('war');
        }
    }
}

function color_all(color) {
    let all_words = document.querySelectorAll('.ratio, .even, .odd');

    for(let word of all_words) {
        word.style.cssText = `color: ${color};`
    }
}


for (let i = 0; i < odd.length; i++) {
    odd[i].addEventListener('click', color_odd);
}
ev.forEach(el => {
    let color = el.value;

    el.addEventListener('click', () => {
        color_even(color)
    });
});

for(let ratio of phi) {
    let color = ratio.value;

    ratio.addEventListener('click', () => {
        color_phi(color)
    });
}

all.forEach(element => {
    let color = element.value;

    element.addEventListener('click', () => {
        color_all(color)
    })
})