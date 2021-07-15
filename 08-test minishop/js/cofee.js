
var products = [
	{
		"id": "101",
		"title": "Датчик дыма",
		"image": "108174052.jpg",
		"description": "Умный фотоэлектрический датчик дыма Maxus Smart ZigBee Smoke Sensor (AirVision-Z-Smoke)",
		"price": { "action": "799", "usual": "959" }
	},
	{
		"id": "102",
		"title": "Датчик влажности",
		"image": "134515563.jpg",
		"description": "Датчик температуры и влажности Aqara (WSDCGQ11LM)",
		"price": { "usual": "499" }
	},
	{
		"id": "103",
		"title": "Датчик температуры",
		"image": "173822734.jpg",
		"description": "Умный датчик температуры Nous E5 (ZigBee) (5907772033890)",
		"price": { "action": "499", "usual": "599" }
	},
	{
		"id": "104",
		"title": "Датчик газа",
		"image": "108174258.jpg",
		"description": "Умный датчик обнаружения природного газа Maxus Smart ZigBee Gas Sensor (AirVision-Z-Gas)",
		"price": { "usual": "999" }
	},
	{
		"id": "105",
		"title": "Умный замок",
		"image": "2911809.jpg",
		"description": "Умный навесной замок Anytek L1+ с отпечатком пальца",
		"price": { "action": "926", "usual": "959" }
	},
];
function showProducts() {
    var price;
    container.innerHTML = '';
    for(let product of products) {
        if( product.price.action == undefined ) {
            price = `<i>${product.price.usual} грн.</i>`;
        } else {
            price = `<s>${product.price.usual} грн.</s><b>${product.price.action} грн.</b>`;
        }
        container.innerHTML += `
            <div class='product'>
                <h2>${product.title}</h2>
                <img src='icon/${product.image}' />
                <p>${product.description}</p>
                ${price}
                <button onclick='order( ${product.id} )'>У кошик</button>
            </div>
        `;
    }
}
showProducts();
function moreClick() {
    products.splice(5, 0,
		{
			"id": "106",
			"title": "Биометрический замок",
			"image": "166747219.jpg",
			"description": "Умный биометрический замок навесной по отпечатку пальца (5896709)",
			"price": { "action": "995", "usual": "1200" }
		},
	    {
	        "id": "107",
			"title": "Філіжанка колумбійської кави",
			"image": "cup.jpg",
			"description": "Доставка філіжанки колумбійської кави",
			"price": { "action": "899", "usual": "959" }
	    },
	    {
	        "id": "108",
			"title": "Філіжанка африканської кави",
			"image": "cup.jpg",
			"description": "Доставка філіжанки африканської кави",
			"price": { "action": "699", "usual": "799" }
	    },
	    {
	        "id": "109",
			"title": "Філіжанка індійської кави",
			"image": "cup.jpg",
			"description": "Доставка філіжанки індійської кави",
			"price": { "action": "799", "usual": "899" }
	    },
	    {
	        "id": "110",
			"title": "Філіжанка італіської кави",
			"image": "cup.jpg",
			"description": "Доставка філіжанки італіської кави",
			"price": { "action": "49", "usual": "159" }
	    });
    showProducts();
}
function more2Click() {
	products.splice(0, 1000,
		{
			"id": "106",
			"title": "Биометрический замок",
			"image": "166747219.jpg",
			"description": "Умный биометрический замок навесной по отпечатку пальца (5896709)",
			"price": { "action": "995", "usual": "1200" }
		},
	    {
	        "id": "107",
			"title": "Філіжанка колумбійської кави",
			"image": "cup.jpg",
			"description": "Доставка філіжанки колумбійської кави",
			"price": { "action": "899", "usual": "959" }
	    },
	    {
	        "id": "108",
			"title": "Філіжанка африканської кави",
			"image": "cup.jpg",
			"description": "Доставка філіжанки африканської кави",
			"price": { "action": "699", "usual": "799" }
	    },
	    {
	        "id": "109",
			"title": "Філіжанка індійської кави",
			"image": "cup.jpg",
			"description": "Доставка філіжанки індійської кави",
			"price": { "action": "799", "usual": "899" }
	    },
	    {
	        "id": "110",
			"title": "Філіжанка італіської кави",
			"image": "cup.jpg",
			"description": "Доставка філіжанки італіської кави",
			"price": { "action": "49", "usual": "159" }
	    });
    showProducts();
}
function cartClick() {
    cartDetail.style.display = "block" ;/*
    cartDtlContainer.innerHTML = '';*/
    for( let prod of cart ) {
    	var price = (prod.price.action == undefined) ? prod.price.usual : prod.price.action ;
        cartDtlContainer.innerHTML +=`
    	    <div class="my">
	        	<ul>
		            <li><img src='icon/${prod.image}'></li>
		            <li>${prod.title}</li>
		            <li><input type="number" value='${prod.cnt}' class="inp" /></li>
		            <li>${price}</li>
	            </ul>
        	</div>
        `;
        total.innerHTML = prod.cnt*price;
    }
}
function cartClose() {
    cartDetail.style.display = "none" ;
}
var cart = []; 
function order( idProd ) {
    for( let prod of products ) {
        if( idProd == prod.id ) {
            var updated = false;
            for( let c of cart ) {
                if( c.id == prod.id ) {
                    c.cnt++;
                    updated = true;
                }
            }
            if( updated == false ) {
                prod.cnt = 1;
                cart.push( prod ) ;
            }
            showCart();
        }
    }        
}
function showCart() {
    if( cart.length == 0 ) {
        cartContainer.innerHTML = "" ;
    } else {
        cartContainer.innerHTML = '';
        for( let prod of cart ) {
            var price = (prod.price.action == undefined) ? prod.price.usual : prod.price.action ;
				cartContainer.innerHTML +=`
				<div id='point'>1</div>
                <div class='cartItem'>
                    <b>${prod.title}</b>
                    <i>${price}</i>
                    <i>${prod.cnt}</i>
                </div>
            `;
            point.innerHTML = prod.cnt;
        }
    }
}
showCart();