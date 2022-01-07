class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined
        this.valorActual = "";
        this.valorAnterior = "";
        this.signo = {
            sumar: '+',
            restar: '-',
            multiplicar: '*',
            dividir: '/'
        }
    }

    BorrarNumero(){
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.ImprimirValores();
    }

    BorrarTodo(){
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.ImprimirValores();
    }

    AgregarNumero(numero){
        if(numero == '.' && this.valorActual.includes('.')){
            return
        }
        else{
        this.valorActual = this.valorActual.toString() +  numero.toString() ;
        this.ImprimirValores();
        
        }
        
    }

    ImprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signo[this.tipoOperacion] || "" }`;
    }

    Computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular()
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.ImprimirValores();
        }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior)
        const valorActual = parseFloat(this.valorActual)

        if(isNaN(valorActual) || isNaN(valorAnterior)){
            return
        }
        else{
            this.valorActual = this.calculadora[this.tipoOperacion] (valorAnterior, valorActual);
        }
    }
}