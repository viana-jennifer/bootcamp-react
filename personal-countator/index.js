var container = document.getElementById("app")
// var titulo = document.createElement("h1")
// titulo.innerHTML = "Título inserido por JavaScripto :O"
// container.appendChild(titulo)

function Contador(props) {

    //let numero = 0
    const [numero, setNumero] = React.useState(0)

    function Somar() {
        // numero++;
        setNumero(numero + 1)
        console.log("Somei e ficou = " + (numero+1))
    }

    function Subtrair() {
        //numero--;
        setNumero(numero - 1)
        console.log("Subtraí e ficou = " + (numero-1))
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h1>{numero}</h1>
            <button onClick={Somar}>+</button>
            <button onClick={Subtrair}>-</button>
        </React.Fragment>
    )
}

function App(props) {
    return (
        <React.Fragment>
            <h1>Vote no seu preferido</h1>
            <Contador titulo="React" />
            <Contador titulo="Angular" />
            <Contador titulo="CueJS" />
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container)
// ReactDOM.render(App(), container)

// 1. PascalCase -> Componentes em React seguem  esse padrão
// 2. camelCase -> Funcões em JavaScript
// 3. Componentes só podem retornar um elemento por componente
// saída -> aninhar em React.Fragment
// 4. Podemos criar propriedades para os nossos Componentes (props)