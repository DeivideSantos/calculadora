function Calculadora()  {
    this.display = document.querySelector('.display')
    document.querySelector('.display').disabled = true  
    
    this.Capturecliques = () => {
        document.addEventListener('click', event => {
            const el = event.target
            if(el.classList.contains('btn-num')) this.numDisplay(el)
            if(el.classList.contains('btn-clear')) this.Clear()
            if(el.classList.contains('btn-del')) this.del()
            if(el.classList.contains('btn-eq')) this.realizeConta(el)
        })
    }
    
    this.numDisplay = el =>  this.display.value += el.innerText;
    
    this.Clear = () => this.display.value = " "
    
    this.del = () => this.display.value = this.display.value.slice(0, -1)
    
    this.realizeConta = () => {
        try {
            const conta = eval(this.display.value)
            if(!conta) {
                alert("Conta incorreta"); return
            }
            this.display.value = conta
        } catch(e) {
            return
        }
    }
    
    this.inicia = () => this.Capturecliques()
    
    }
    
    const calculadora = new Calculadora()
    calculadora.inicia()