import React from 'react';
import imagem from '../assets/images/index-img.png';
//import Botao from 'Botao';

function HomePage() {
    return (
        <div className="container index">
            <div className="index-content">
                <div className="box-text-index">
                    <div className="info-index">
                        <h1>Faça parte do nosso dicionário de música </h1>
                        <h3>Contribua e fique por dentro das novidades  </h3>
                    </div>
                    <div className="img-index"></div>
                    <button className="btn-green">Conhecer agora</button>
                </div>
                <img src={imagem} alt="" class="index-img" />
            </div>
        </div>
    );
}

export default HomePage;

/*

1. Importa o react (linha 1)
2. cria a função com o nome do meu componente

function MeuComponente() {
    return (
        *** aqui vem o html ***
    );
}

3. expora (a ultima linha fo smeu arquivo de componente!)
export default MeuComponente;

4. Ajuste o seu html
4.1. Troque class por className
4.2. Adicione barra em "self-closing" tags --> <img />, <br />, <imput />
4.3. Importe imagens ao componente!!

import minhImagem from 'local/da/imagem.jpg'
*/