


//Botão Login (index.html)
function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "nicolas_tavares" && senha == "senhateste"){
        Swal.fire({                                 //SWEET ALERT DE BEM VINDO
            title: "Bem-vindo, Nicolas!",
            
            
          }).then((result) => {             //QUANDO CONFIRMAR O ALERT DE BEM VINDO, CARREGA A TELA SYSTEM.HTML
            if (result.isConfirmed) {
          location.href = "system.html"
    }}
);
    
    }else{
        Swal.fire({                     // SWEET ALERT DE ERRO DE USUARIO OU SENHA
            icon: "error",
            title: "Oops...",
            text: "Usuário ou Senha incorreto.",
          });
    }
}



//Botão Desconectar (system.html)
function desconectar(){                     // BOTÃO VOLTAR PARA TELA DE LOGIN

    location.href = "index.html";
}






//CADASTRO DE PRODUTOS INSERIDOS PELO USUARIO (system.html)



function validarProduto(idNomeProduto, idCodProduto, idPesoProduto, idValOrProduto, idManiProduto, idValidProduto, idFornProduto, idLotProduto, idRespProduto) {
    let nome = document.getElementById(idNomeProduto).value;
    let codigo = document.getElementById(idCodProduto).value;
    let codPeso = document.getElementById(idPesoProduto).value;
    let codValOr = document.getElementById(idValOrProduto).value;
    let codMani = document.getElementById(idManiProduto).value;
    let codValid = document.getElementById(idValidProduto).value;
    let codForn = document.getElementById(idFornProduto).value;
    let codLot = document.getElementById(idLotProduto).value;
    let codResp = document.getElementById(idRespProduto).value;



    // VALIDAR SE EXISTE CAMPO VAZIO NO CADASTRO DE PRODUTO


    if (nome == ""){
        alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
    return
}
    else if (codigo == ""){
        alert("Tipo do produto não pode estar em branco. Favor preenchê-lo!");
        return
}
    else if (codPeso == ""){
        alert("Peso do produto não pode estar em branco. Favor preenchê-lo!");
        return
}        
    else if (codValOr == ""){
        alert("Val. Original do produto não pode estar em branco. Favor preenchê-lo!");
        return
}
    else if (codMani == ""){
        alert("Data de Manipulação do produto não pode estar em branco. Favor preenchê-lo!");
        return
}        
    else if (codValid == ""){
        alert("Data de Validade do produto não pode estar em branco. Favor preenchê-lo!");
        return
}
    else if (codForn == ""){
        alert("Nome do Fornecedor do produto não pode estar em branco. Favor preenchê-lo!");
        return
}        
    else if (codLot == ""){
        alert("Lote/SIF do produto não pode estar em branco. Favor preenchê-lo!");
        return
}
    else if (codResp == ""){
        alert("Responsável pelo produto não pode estar em branco. Favor preenchê-lo!");
        return
}
 
    cadastrarProduto(nome, codigo, codPeso, codValOr,codMani, codValid, codForn, codLot, codResp)
    abrirEtiquetas()
    
}

//-----------------------------------------------------------------------------------------------------------

function cadastrarProduto(produto, codig, codigPes, codigValOr, codigMani, codigValid, codigForn, codigLot, codigResp) {
    let novoProduto = {nome:produto, tipo:codig, peso: codigPes, valOr: codigValOr, manipulacao: codigMani, validade: codigValid, fornecedor: codigForn, lot_sif: codigLot, responsavel: codigResp};

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = []; // Nenhum produto ainda foi cadastrado
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto); // Adiciona um novo produto
        localStorage.setItem("produtos",JSON.stringify(produtos))
       // atualizarTotalEstoque("totalEstoque");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}




function abrirEtiquetas(){
    location.href = "etiqueta.html"; 
}

function limparStorage(){

    localStorage.clear()
    window.location.reload()
}













//-----------------------------------------------------------------------------------------------------------


function listarEstoque() {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write("<title>DataPrint | Etiquetas</title>")
        document.write('<link rel="shortcut icon" href="images/logo_branca.png">')

        if (produtos == null){
            
            history.back()

         } else {
            produtos = JSON.parse(produtos);


            document.write('<style>  #btn-imp:hover{box-shadow: 0px 0px 8px #00000077;transform: scale(1.05);}     #btn-canc:hover{box-shadow: 0px 0px 8px #00000077;transform: scale(1.05);}     #btn-imp, #btn-canc{ font-size: 15px; background-color: #eb9813; color: white; font-weight: 600; border: 0px; padding: 15px 8px; border-radius: 5px;cursor: pointer;transition: .20s;}      *{font-family:"Poppins", sans-serif;} .titulo{color: #eb9813; padding-left: 40px; padding-top: 20px;}  .meu-body{display:flex; padding-top: 50px; justify-content: center;} body{background-color: black;} .interface {width: 420px;  background-color: white; backdrop-filter: blur(20px); padding-left: 18px; padding-bottom: 30px; padding-top: 10px; padding-right: 18px;}   p{ height: 5px; position: relative; margin: 15px;}  .categoria{display: flex; font-size: 23px; letter-spacing: 1.5px; flex; justify-content: center; flex-direction: column; font-weight: 500;}  .btns-interface{display: flex; padding-top: 50px; justify-content: center; }  #btn-imp{margin-right: 25px;}  #btn-canc{margin-left: 25px;}  @media screen and (max-width: 1020px){ .titulo{ padding: 5px; font-size: 15px; display: flex; justify-content: center; padding-top: 30px; padding-bottom: 5px; }    .categoria{font-size: 18px; letter-spacing: 1.0px; flex;}   }  @media print{ body *{display: none; background-color: white;} .meu-body *{display: flex;}    }        </style>') ; 



            document.write('<header>');
            document.write('<div class="titulo">');
            document.write('<h1>Etiqueta Padrão Anvisa</h1>');
            document.write('</div>');
            document.write('</header>');

            document.write('<body>');
            document.write('<div class="meu-body">');
            document.write('<section class="interface">');
                 

            produtos.forEach(produto => {
                
                document.write('<div class="categoria">')   

                document.write('<p> Produto: '+produto.nome+'</p>');
                document.write('<p>Tipo: '+produto.tipo+'</p>');
                document.write('<p>Peso: '+produto.peso+'</p>');
                document.write('<p>Val. Original: '+produto.valOr+'</p>');
                document.write('<p>Manipulação: '+produto.manipulacao+'</p>');
                document.write('<p>Validade: '+produto.validade+'</p>');
                document.write('<p>Fornecedor: '+produto.fornecedor+'</p>');
                document.write('<p>Lote/SIF: '+produto.lot_sif+'</p>');
                document.write('<p>Responsável: '+produto.responsavel+'</p>');    

               document.write('</div>'); 
               document.write('</section>');
               document.write('</div>') ; 
               
               document.write('<div class="btns-interface">')
               document.write('<button id="btn-imp">Imprimir</button>')  




               document.write('<button id="btn-canc" onclick="limparStorage()" >Cancelar</button>')  
               document.write('</div>') ; 
               

                document.write('<script> const printBtn = document.getElementById("btn-imp"); printBtn.addEventListener("click", function() {print();}) </script>')


               document.write('</body>')

            })
         

         
    
        }


        
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}

