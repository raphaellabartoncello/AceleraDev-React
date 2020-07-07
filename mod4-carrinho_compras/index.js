const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
	const produtos = getProductsAtCart(ids, productsList);
	const resumo = getResumoProdutos(produtos);
	const promocao = getPromotion(produtos);
	const valorFinalPromocional = getFinalValueByPromotion(produtos, promocao);
	const valorFinalRegular = getFinalRegularValue(produtos);
	const quantidadeDesconto = getValorDesconto(valorFinalRegular, valorFinalPromocional);
	const percent = getPercentagemDesconto(valorFinalRegular, quantidadeDesconto);
	return {
		products: resumo,
		promotion: promocao,
		totalPrice: valorFinalPromocional,
		discountValue: quantidadeDesconto,
		discount: `${percent}%`
	};
}

function getProductsAtCart(ids, productsList) {
	return productsList.filter( ({ id }) => ids.includes(id));
}

function getPromotion(productsList) {
	const categorias = getCategoriesOfProducts(productsList);
	const uniqueCategories = [...new Set(categorias)];
	return promotions[uniqueCategories.length - 1];
}

function getCategoriesOfProducts(productsList) {
	return productsList.map( (produto) => produto.category);
}

function getFinalValueByPromotion(productsList, nomePromocao) {
	return productsList.reduce( (soma, produto) => {
		let valor = 0;
		const opcaoPromocao = produto.promotions.find(promocao => promocao.looks.includes(nomePromocao));
		if(opcaoPromocao) {
			valor = opcaoPromocao.price;
		} else {
			valor = produto.regularPrice;
		}
		return soma + valor;
	}, 0).toFixed(2);
}

function getValorDesconto(valorRegular, valorDesconto) {
	return (valorRegular - valorDesconto).toFixed(2);
}

function getPercentagemDesconto(valorRegular, valorComDesconto) {
	return valorRegular > 0 ? ((valorComDesconto * 100) / valorRegular).toFixed(2) : 0; 
}
  
function getFinalRegularValue(productsList) {
	return productsList.reduce( (soma, produto) => {
		return soma + produto.regularPrice;
	}, 0).toFixed(2);
}

function getResumoProdutos(productsList) {
	return productsList.map((produto) => { return{ name: produto.name, category: produto.category } });
	
}
module.exports = { getShoppingCart };