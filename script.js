var itens=[];

document.querySelector('input[type=submit]').addEventListener('click',()=>{
	var nomeProduto=document.querySelector('input[name=nome_produto]');
	var valorProduto=document.querySelector('input[name=valor_produto]');	

	itens.push({ //coloca os dados na lita "itens
		nome: nomeProduto.value,
		valor: valorProduto.value
	});

	// <div class="lista-produtos-single">
	// <h3>RedBull</h3>
	// <h3 class="price-produto"><span>R$10,00</span></h3>

	let listaProdutos=document.querySelector('.lista-produtos');
	let soma=0;

	listaProdutos.innerHTML=""; //faz com que os produtos resetem, permitindo criar mais de um sem duplicar
	itens.map((val)=>{
		soma+=parseFloat(val.valor);//converte o valor de string pra float
		listaProdutos.innerHTML+=`
		<div class="lista-produtos-single">
			<h3>`+val.nome+`</h3>
			<h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
		</div>`;
	})


	nomeProduto="";
	valorProduto="";

	//soma dos valores dos produtos
	soma=soma.toFixed(2); //função que deixa o float com apenas 2 casas decimais
	let elementSoma=document.querySelector('.soma-produto h2');
	elementSoma.innerHTML='R$'+soma;
})

//callback do botão limpar
document.querySelector('input[name=limpar]').addEventListener('click',()=>{
	itens=[];
	document.querySelector('.lista-produtos').innerHTML="";
	document.querySelector('.soma-produto h2').innerHTML="R$0,00";
});