let nav = document.querySelector('nav')
let menu_btn = document.querySelector('.menu')
let convert_btn = document.querySelector('.convert_btn')
let result_display = document.querySelector('.result')
let result = document.querySelector('.figure')

menu_btn.addEventListener('click', ()=>{
    nav.classList.toggle('slide')
})

convert_btn.addEventListener('click', (event)=>{
    event.preventDefault()

    result_display.style.display = "flex"

    let from = document.querySelector('.from').value
    let to = document.querySelector('.to').value
    let amount_input = document.querySelector('.amount').value

    if(from === 'USD' && to === 'NGN'){
        let amount = 450 * Number(amount_input)
        amount = amount.toLocaleString()
        result.innerHTML = "₦ " + amount

    }else if(from === 'NGN' && to === 'USD'){
        let amount = Number(amount_input)/ 450
        amount = amount.toLocaleString()
        result.innerHTML = "$ " + amount

    }else if(from === 'EUR'  && to === 'NGN'){
        let amount = 600 * Number(amount_input)
        amount = amount.toLocaleString('en')
        result.innerHTML = '₦ ' + amount

    }else if(from === 'NGN'  && to === 'EUR'){
        let amount = Number(amount_input)/600
        amount = amount.toLocaleString('en')
        result.innerHTML = '€ ' + amount

    }else if(from === 'EUR'  && to === 'USD'){
        let amount = 1.07 * Number(amount_input)
        amount = amount.toLocaleString('en')
        result.innerHTML = '$ ' + amount

    }else if(from === 'USD'  && to === 'EUR'){
        let amount = Number(amount_input)/1.07
        amount = amount.toLocaleString('en')
        result.innerHTML = '€ ' + amount

    }else if(from === 'GBP'  && to === 'USD'){
        let amount = 1.22 * Number(amount_input)
        amount = amount.toLocaleString('en')
        result.innerHTML = '$ ' + amount

    }else if(from === 'USD'  && to === 'GBP'){
        let amount = Number(amount_input)/1.22
        amount = amount.toLocaleString('en')
        result.innerHTML = '£ ' + amount

    }else if(from === 'GBP'  && to === 'NGN'){
        let amount = 560 * Number(amount_input)
        amount = amount.toLocaleString('en')
        result.innerHTML = '₦ ' + amount

    }else if(from === 'NGN'  && to === 'GBP'){
        let amount = Number(amount_input)/560
        amount = amount.toLocaleString('en')
        result.innerHTML = '£ ' + amount

    }else if(from === 'GBP'  && to === 'EUR'){
        let amount = 1.13 * Number(amount_input)
        amount = amount.toLocaleString('en')
        result.innerHTML = '€ ' + amount

    }else if(from === 'EUR'  && to === 'GBP'){
        let amount = Number(amount_input)/1.13
        amount = amount.toLocaleString('en')
        result.innerHTML = '£ ' + amount

    }

})

let year_span = document.querySelector('.year')
let time = new Date()
let year = time.getFullYear()
year_span.innerHTML = year