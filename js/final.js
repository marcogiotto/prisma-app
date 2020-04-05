var d = document;
var c= console.log;

var aProductos={
	'categoria1':[{

			id :'1',
			categoria:'pantalones',
			nombre :'Pantalon slim',
			precio : 2400,
			descripcion : 'pantalon slim de hombre.',
			img:[{
				src:'img/productos/Cp1.jpg',
				alt:'pantalon slim de hombre.',
				srcset:'img/productos/p1.jpg'
			},]

	},
	{

			id :'2',
			categoria:'pantalones',
			nombre :'Pantalon slim',
			precio : 2400,
			descripcion : 'pantalon de lino para mujer.',
			img:[{
				src:'img/productos/Cp.jpg',
				alt:'pantalon de lino para mujer.',
				srcset:'img/productos/p.jpg'
			},]

	},
	{

			id :'3',
			categoria:'pantalones',
			nombre :'Pantalon slim',
			precio : 2300,
			descripcion : 'pantalon old fashion mujer.',
			img:[{
				src:'img/productos/Cp2.jpg',
				alt:'pantalon old fashion mujer.',
				srcset:'img/productos/p2.jpg'
			},]

	}],
	'categoria2':[{

			id :'4',
			categoria:'remeras',
			nombre :'Remera Blanca',
			precio : 2500,
			descripcion : 'Remera blanca de algodon.',
			img:[{
				src:'img/productos/Cr.jpg',
				alt:'Remera blanca de algodon.',
				srcset:'img/productos/r.jpg'
			},]

	},
	{

			id :'5',
			categoria:'remeras',
			nombre :'Remera lisa Simpson',
			precio : 2500,
			descripcion : 'Edision ilimitada de lisa simpson.',
			img:[{
				src:'img/productos/Cr1.jpg',
				alt:'Remera lisa Simpson',
				srcset:'img/productos/r1.jpg'
			},]

	},
	{

			id :'6',
			categoria:'remeras',
			nombre :'Remera Negra',
			precio : 2000,
			descripcion : 'Remera negra de algodon.',
			img:[{
				src:'img/productos/Cr2.jpg',
				alt:'Remera negra de algodon.',
				srcset:'img/productos/Cr2.jpg'
			},]

	}],
	'categoria3':[{

			id :'7',
			categoria:'camperas',
			nombre :'Parka de hombre',
			precio : 2600,
			descripcion : 'Parka de hombre mostaza.',
			img:[{
				src:'img/productos/Cc.jpg',
				alt:'Parka de hombre mostaza.',
				srcset:'img/productos/c.jpg'
			},]

	},
	{

			id :'8',
			categoria:'camperas',
			nombre :'Campera de Cuero',
			precio : 2600,
			descripcion : 'Campera de Cuero Negro.',
			img:[{
				src:'img/productos/Cc2.jpg',
				alt:'Campera de Cuero Negro.',
				srcset:'img/productos/c2.jpg'
			},]

	},
	{

			id :'9',
			categoria:'camperas',
			nombre :'Piloto Verde',
			precio : 2900,
			descripcion : 'Piloto verde para mujer.',
			img:[{
				src:'img/productos/Cc1.jpg',
				alt:'Piloto verde para mujer.',
				srcset:'img/productos/c1.jpg'
			},]

	}],

}
	




var body=d.querySelector('body');
var section =d.querySelector('section');
var contItems = 0;
var contPrecio= 0  ;

var items=d.querySelector('header div p span');
var numero_orden=0;
var carrito=d.querySelector('.carrito');
var prodCont=d.querySelector('.p');
var carrito_cont=d.querySelector('.carrito-contador');

let Carrito=[];


window.onload=productos;



function productos (){
	var div=d.createElement('div');
	div.id='productos';
	div.className='row';
	if(contItems > 0){
		carrito_cont.innerHTML=contItems;
	}
	let product;
var imgs;

for(let categoria in aProductos){
	

for(let i=0;i<aProductos[categoria].length; i++){
		product=aProductos[categoria][i];
		var di1=d.createElement('div');
		di1.className='col-sm-6 col-lg-3  ';
		di1.className+=aProductos[categoria][i].categoria;
		di1.className+=' producto';
		di1.setAttribute('data-id',aProductos[categoria][i].id);
		var div2=d.createElement('div');
		var h2=d.createElement('h2');
		
		var p=d.createElement('p');
		p.innerHTML='Precio: $ ';
		var img=d.createElement('img');
		var desc=product.descripcion;
		var p1=d.createElement('p');
		p1.innerHTML='Descripción : ';
		p1.innerHTML+=desc; 
		var span=d.createElement('span');
		img.onclick=detalle;
		var pic=d.createElement('picture');
		var source=d.createElement('source');
		
		h2.innerHTML=product.nombre;
		span.innerHTML= product.precio;
		var button=d.createElement('button');
		button.innerHTML='Agregar';
		button.setAttribute('data-id',product.id);


		button.addEventListener('click',function(){
			agregar(this.getAttribute('data-id'));
		});
for(var j=0;j<aProductos[categoria][i].img.length;j++){
			imgs=product.img[j];
			img.setAttribute('srcset',imgs.src);
			
			img.alt=imgs.alt;
			source.setAttribute('srcset',imgs.srcset);

		}

		source.setAttribute('media','(min-width:600px)')
	prodCont.appendChild(div);
	
	div.appendChild(di1);
	di1.appendChild(pic);
	pic.appendChild(source);
	pic.appendChild(img);
	
	di1.appendChild(div2);
	div2.appendChild(h2);
	div2.appendChild(p);
	div2.appendChild(p1);
	p.appendChild(span);
	div2.appendChild(button);
	

	}

}

}






/******************Filtros**********/

$(document).ready(function (){

$('.menu').click(function(e) {
	e.preventDefault();
	
	var filtro= $(this).attr('data-filter');

	if(filtro == 'todos'){
		$('.producto').show(500);

			
	 }else{
	 	$('.producto').not('.'+filtro).hide(500);
	 	$('.producto').filter('.'+filtro).show(500);
	 	


	 			
	 		

	 	
	 }
	
	
});


})



/******************Filtros Fin**********/


/************Funcion detalle producto**********/

function detalle() {
	let parent = this.parentNode.parentNode;
	let id =parent.getAttribute('data-id');
	let producto = traerProductosPorId(id);



	body.className='modal-abierta';
	div=d.createElement('div');
	div.className='modal fade show ';
	div.id='modalDetalle';
	div.setAttribute('tabindex','-1');
	div.setAttribute('role','dialog');
	div.setAttribute('aria-labelledby','exampleModalCenterTitle');
	div.setAttribute('aria-hidden','true');
	div1=d.createElement('div');
	div1.className='modal-dialog modal-dialog-centered modal-dialog-scrollable';
	div1.setAttribute('role','document');
	div2=d.createElement('div');
	div2.className='modal-content';
	div2.setAttribute('data-id',id);
	div3=d.createElement('div');
	div3.className='modal-header';
	h3=d.createElement('h3');
	h3.className='modal-title';
	h3.id='exampleModalCenterTitle';
	h3.innerHTML='Detalle del Producto';
	button=d.createElement('button');
	button.className='close';
	button.setAttribute('type','button');
	button.setAttribute('data-dismiss','modal');
	button.setAttribute('aria-label','Close');
	span=d.createElement('span');
	span.setAttribute('aria-hiden','true');
	span.innerHTML='&times;';

	divB=d.createElement('div');
	divB.className='modal-body';
var divb=d.createElement('div');
	divb.className='d-flex justify-content-center';
var pic=d.createElement('picture');

var img=d.createElement('img');
	img.src=producto.imgsrc;
	img.alt=producto.imgalt;
	img.className='pro';
var source=d.createElement('source');
	source.setAttribute('srcset',producto.imgsrcset);
	source.setAttribute('media','(min-width:600px)');
var divb1=d.createElement('div');
	divb1.className='detalle';
var h2=d.createElement('h2');
	h2.innerHTML=producto.nombre;
var p=d.createElement('p');
	 p.innerHTML=producto.descripcion;
var p1=d.createElement('p');
	p1.innerHTML='$ ';
	p1.innerHTML+=producto.precio;
	
	divF=d.createElement('div');
	divF.className='modal-footer';
	button2=d.createElement('button');
	button2.className='btn btn-success finalizar';
	button2.setAttribute('type','button');
	button2.innerHTML='Agregar al Carrito';
	button2.addEventListener('click',function(){
		agregar(id);
	});
	



	body.appendChild(div);
	div.appendChild(div1);
	div1.appendChild(div2);
	div2.appendChild(div3);
	div3.appendChild(h3);
	div3.appendChild(button);
	button.appendChild(span);
	div2.appendChild(divB);
	divB.appendChild(divb);
	divb.appendChild(pic);
	pic.appendChild(source);
	pic.appendChild(img);
	
	divB.appendChild(divb1);
	divb1.appendChild(h2);
	divb1.appendChild(p);
	divb1.appendChild(p1);
	div2.appendChild(divF);
	
	divF.appendChild(button2);

	$(document).ready(function(){
		$('.close').click(function(){
		$('body').removeClass('modal-abierta');
			$('.modal').remove();

					   
			})
		})

		

 }




/****************** Traer Productos POr id****************/


function traerProductosPorId(id){


	for(let r in aProductos){
		let filtro = aProductos[r].filter(producto => producto.id === id);

		for(let x = 0; x < filtro.length; x++){

			var nombre = filtro[x]['nombre'];
			let precio = filtro[x]['precio'];
			let descripcion = filtro[x]['descripcion'];

			for(let d = 0; d < filtro[x].img.length; d++){

				for(let y = 0; y< filtro[x].img.length; y++){

					let imgsrc= filtro[x].img[y]['src'];
					let imgalt= filtro[x].img[y]['alt'];
					let imgsrcset= filtro[x].img[y]['srcset'];

					return {
						'nombre': nombre,
						 'precio': precio,
						'descripcion' : descripcion,
						'imgsrc':imgsrc,
						'imgalt':imgalt,
						'imgsrcset': imgsrcset,
					};
				}

			}

		}

	}



}




function carritoContador(){
	let p=0;
	let cantidad = 0;
	for(let x = 0; x <Carrito.length; x++){
		 p += Carrito[x]['precio'];
		 cantidad += Carrito[x]['cantidad']

	}
	return {
		'precio': p,
		'cantidad': cantidad,
	};
}



function carritoProductos(id) {
	let carroP;

	function cargarCarrito() {
		for (let k in aProductos) {
			for (let g = 0; g < aProductos[k].length; g++) {

				if (aProductos[k][g]['id'] === id) {

					carroP = new Object();
					carroP.nombre = aProductos[k][g]['nombre'];
					carroP.precio = aProductos[k][g]['precio'];
					carroP.cantidad = 1;
					carroP.id = id;


				}
			}


		}
		Carrito.push(carroP);

	}


	 if (Carrito.length === 0) {

		cargarCarrito();

	 } else {
	let filtro = Carrito.filter(producto => producto.id === id);

	let producto = traerProductosPorId(id);
	let cantidad = 1;
		 if(filtro.length !== 0){
			 for (let s = 0; s < filtro.length; s++) {


				 filtro[s]['precio'] += producto.precio;

				 filtro[s]['cantidad'] += cantidad ;

			 }
		 }else{
			 cargarCarrito();
		 }






	 }


}

/****** ventana modal funciones*////
function agregar (id) {



	carritoProductos(id);
	contPrecio =carritoContador().precio;
	contItems = carritoContador().cantidad;

	carrito_cont.innerHTML=contItems;


}


/******carrito de compras modal ****/
var m=d.querySelector('.m');

var li,ul,ul1,li2,li3,li1,div,div1,div2,div3,h3,span,divB,divF,button1,button2,a1,span1;
	carrito.addEventListener('click',function(){


		body.className='modal-abierta';
		div=d.createElement('div');
		div.className='modal fade show ';
		div.id='examplemodalCenter';
		div.setAttribute('tabindex','-1');
		div.setAttribute('role','dialog');
		div.setAttribute('aria-labelledby','exampleModalCenterTitle');
		div.setAttribute('aria-hidden','true');
		div1=d.createElement('div');
		div1.className='modal-dialog modal-dialog-centered modal-dialog-scrollable';
		div1.setAttribute('role','document');
		div2=d.createElement('div');
		div2.className='modal-content'
		div3=d.createElement('div');
		div3.className='modal-header';
		h3=d.createElement('h3');
		h3.className='modal-title';
		h3.id='exampleModalCenterTitle';
		h3.innerHTML='Mi Carrito';
		button=d.createElement('button');
		button.className='close';
		button.setAttribute('type','button');
		button.setAttribute('data-dismiss','modal');
		button.setAttribute('aria-label','Close');
		span=d.createElement('span');
		span.setAttribute('aria-hiden','true');
		span.innerHTML='&times;';

		divB=d.createElement('div');
		divB.className='modal-body';
		divF=d.createElement('div');
		divF.className='modal-footer';
		button1=d.createElement('button');
		button1.className='btn btn-danger';
		button1.setAttribute('type','button');
		button1.setAttribute('data-dismiss','modal');
		button1.innerHTML='Vaciar Carrito';
		button1.onclick=vaciar;
		button2=d.createElement('button');
		button2.className='btn btn-success finalizar';
		button2.setAttribute('type','button');
		button2.innerHTML='Finalizar Compra';
		button2.onclick=checkout;
		ul= d.createElement('ul');
		ul1= d.createElement('ul');
		ul1.className='totales';
		li1=d.createElement('li');
		li1.innerHTML='Total';
		li3=d.createElement('li');
		li3.innerHTML ='$ '+  contPrecio ;
		li2=d.createElement('li');
		li2.innerHTML= 'U ';
		li2.innerHTML +=contItems;





		for(var i =0; i< Carrito.length; i++){


			li=d.createElement('li');
			li.className='items';
			li.setAttribute('data-id',Carrito[i]['id']);
			a1=d.createElement('a');
			a1.href='javascript:void(0)';
			a1.innerHTML='Quitar';
			a1.onclick=Borrar;
			span3=d.createElement('span')
			span1=d.createElement('span');



			li.innerHTML = Carrito[i]['nombre'];



			span3.innerHTML = 'u ' + Carrito[i]['cantidad'];
			span1.innerHTML='$ '+ Carrito[i]['precio'];






			ul.appendChild(li);
			li.appendChild(span3);
			li.appendChild(span1);

			li.appendChild(a1);



		}

		if(Carrito.length === 0){
			button2.setAttribute('disabled','disabled');
			button1.setAttribute('disabled','disabled');
		}


		body.appendChild(div);
		div.appendChild(div1);
		div1.appendChild(div2);
		div2.appendChild(div3);
		div3.appendChild(h3);
		div3.appendChild(button);
		button.appendChild(span);
		div2.appendChild(divB);
		divB.appendChild(ul);
		divB.appendChild(ul1);
		ul1.appendChild(li1);
		ul1.appendChild(li2);
		ul1.appendChild(li3);

		div2.appendChild(divF);
		divF.appendChild(button1);
		divF.appendChild(button2);

		$(document).ready(function(){
			$('.close').click(function(){
				$('body').removeClass('modal-abierta');
				$('.modal').remove();


			})
		})




	});












function vaciar() {
		if(confirm('Esta seguro que quiere eliminar todos los productos del carrito?')) {
			reset();

		 this.parentNode.previousElementSibling.removeChild(this.parentNode.previousElementSibling.firstElementChild);

		this.style.opacity= 0.5;

		}
		
	}



function reset () {
		Carrito = [];

		li2.innerHTML='U '+ carritoContador().cantidad;
		li3.innerHTML='$ ' + carritoContador().precio;

		if(Carrito.length === 0){

			 carrito_cont.innerHTML= carritoContador().cantidad;
			 button2.setAttribute('disabled','disabled');
			 button1.setAttribute('disabled','disabled');

		}
}

 function Borrar (){

	 let id=this.parentNode.getAttribute('data-id');

	 let filtro=Carrito.findIndex(producto => producto.id === id);

	 if(confirm('Esta seguro que desea eliminar el producto del carrito?')){
		this.parentNode.parentNode.removeChild(this.parentNode);

		Carrito.splice(filtro,1);

	

	li2.innerHTML='U '+ carritoContador().cantidad;
	li3.innerHTML='$ ' + carritoContador().precio;
	carrito_cont.innerHTML=carritoContador().cantidad;

	
	if(Carrito.length === 0){


			button2.setAttribute('disabled','disabled');
			button1.setAttribute('disabled','disabled');
		
	}

	 }
	
}	
 
 function checkout () {
	

	this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode);

	div=d.createElement('div');
	div.className='modal fade show ';
	div.id='examplemodalCenter';
	div.setAttribute('tabindex','-1');
	div.setAttribute('role','dialog');
	div.setAttribute('aria-labelledby','exampleModalCenterTitle');
	div.setAttribute('aria-hidden','true');
	div1=d.createElement('div');
	div1.className='modal-dialog modal-dialog-centered modal-dialog-scrollable';
	div1.setAttribute('role','document');
	div2=d.createElement('div');
	div2.className='modal-content'
	div3=d.createElement('div');
	div3.className='modal-header';
	h3=d.createElement('h3');
	h3.className='modal-title';
	h3.id='exampleModalCenterTitle';
	h3.innerHTML='Realizar Pago';
	button=d.createElement('button');
	button.className='close';
	button.setAttribute('type','button');
	button.setAttribute('data-dismiss','modal');
	button.setAttribute('aria-label','Close');
	span=d.createElement('span');
	span.setAttribute('aria-hiden','true');
	span.innerHTML='&times;';

	divB=d.createElement('div');
	divB.className='modal-body';
	divF=d.createElement('div');
	divF.className='modal-footer';
	button1=d.createElement('button');
	button1.className='btn btn-primary cerrar';
	button1.setAttribute('type','button');
	button1.setAttribute('data-dismiss','modal');
	button1.innerHTML='Seguir Comprando';
	
	
	

	
	form=d.createElement('form');

	h2=d.createElement('h2');
	h2.innerHTML='Información del Cliente';
	a=d.createElement('a');
	a.innerHTML='X';
	a.id='cerrar';
var divg=d.createElement('div');
	divg.className='form-group';
var label=d.createElement('label');
	label.innerHTML='Nombre Completo';
var divg1=d.createElement('div');
	divg1.className='form-group';
var label1=d.createElement('label');
	label1.innerHTML='Teléfono';
var divg2=d.createElement('div');
	divg2.className='form-group';
var	label2=d.createElement('label');
	label2.innerHTML='E-mail';
var divg3=d.createElement('div');
	divg3.className='form-group';
var	label3=d.createElement('label');
	label3.innerHTML='Dirección';
var divg4=d.createElement('div');
var	label4=d.createElement('label');
	label4.innerHTML='Fecha de Entrega';
var h31=d.createElement('h3');
	h31.innerHTML='Metodo de Pago';
var divg5=d.createElement('div');
	divg5.className='form-check form-check-inline';
var	label5=d.createElement('label');
	label5.className='form-check-label';
	label5.innerHTML='Efectivo';
var divg6=d.createElement('div');
	divg6.className='form-check form-check-inline';
var	label6=d.createElement('label');
	label6.className='form-check-label';
	label6.innerHTML='Tarjeta';
var divg7=d.createElement('div');
	divg7.className='form-group';
var	label7=d.createElement('label');
	label7.innerHTML='Cuotas';

var	inputt=d.createElement('input');
	inputt.className='form-control'
	inputt.setAttribute('type', 'text');
	
	inputt.setAttribute('placeholder', 'Nombre Completo');
var	inputtel=d.createElement('input');
	inputtel.className='form-control';
	inputtel.setAttribute('type', 'tel');
	inputtel.setAttribute('placeholder', 'Ingrese su Teléfono');
var inpute=d.createElement('input');
	inpute.className='form-control';
	inpute.setAttribute('type', 'email');
	inpute.setAttribute('placeholder','Ingrese su email');
var	inputd=d.createElement('input');
	inputd.className='form-control';
	inputd.setAttribute('type', 'text');
	inputd.setAttribute('placeholder','Ingrese su Dirección');
var	inputda=d.createElement('input');
	inputda.className='form-control'
	inputda.setAttribute('type','date');
	inputda.setAttribute('placeholder', 'Ingrese Fecha de Entrega');
var	inputch=d.createElement('input');
	inputch.className='form-check-input';
	inputch.className +=' ef';
	inputch.setAttribute('type','radio');
	inputch.setAttribute('value','option1');
	inputch.setAttribute('name','pago');
var divg9=d.createElement('div');
	divg9.className='form-group';
	
var	inputch1=d.createElement('input');
	inputch1.className='form-check-input';
	inputch1.setAttribute('type','radio');
	inputch1.setAttribute('value','option2');
	inputch1.setAttribute('name','pago');
	inputch1.className +=' tj';
var divg8=d.createElement('div');
	divg8.className='form-group';
var select=d.createElement('select');
	select.className='form-control';
	select.setAttribute('disabled', true);
	select.className='tr';
	var option=d.createElement('option');
	option.value='3';
	option.innerHTML='3';
	var option1=d.createElement('option');
	option1.value='6';
	option1.innerHTML='6';
	var option2=d.createElement('option');
	option2.value='12';
	option2.innerHTML='12';
	var option3=d.createElement('option');
	option3.value='18';
	option3.innerHTML='18';
	var button4=d.createElement('button');
	button4.className='btn btn-success';
	button4.innerHTML='Finalizar Compra';
	button4.setAttribute('type', 'submit');
	button4.onclick=saludar;

	

	


			
	$(document).ready(function(){
		$('.close, .cerrar').click(function(){
		$('body').removeClass('modal-abierta');
			$('.modal').remove();

					   
			})
		})

	body.appendChild(div);
	div.appendChild(div1);
	div1.appendChild(div2);
	div2.appendChild(div3);
	div3.appendChild(h3);
	div3.appendChild(button);
	button.appendChild(span);
	div2.appendChild(divB);
	
	
	
	
	div2.appendChild(divF);
	divF.appendChild(button1);
	
	
	
	divB.appendChild(form);
	form.appendChild(h2);
	form.appendChild(divg);
	divg.appendChild(label);
	label.appendChild(inputt);
	
	form.appendChild(divg1);
	divg1.appendChild(label1);
	label1.appendChild(inputtel);
	form.appendChild(divg2);
	divg2.appendChild(label2);
	label2.appendChild(inpute);
	form.appendChild(divg3);
	divg3.appendChild(label3);
	label3.appendChild(inputd);
	form.appendChild(divg4);
	divg4.appendChild(label4);
	label4.appendChild(inputda);
	form.appendChild(h31);
	form.appendChild(divg9);
	divg9.appendChild(divg5);
	divg5.appendChild(label5);
	divg5.appendChild(inputch);
	divg9.appendChild(divg6);
	divg6.appendChild(label6);
	divg6.appendChild(inputch1);
	form.appendChild(divg7);
	divg7.appendChild(label7);
	label7.appendChild(divg8);
	divg8.appendChild(select);
	select.appendChild(option);
	select.appendChild(option1);
	select.appendChild(option2);
	select.appendChild(option3);
	form.appendChild(button4);



	 let tj=d.getElementsByClassName('tj');

	 let ef=d.getElementsByClassName('ef');

	 let sel= d.querySelector('.tr');


	 ef[0].addEventListener('click',function(){
	 	sel.setAttribute('disabled','disabeld');
	 });
	 tj[0].addEventListener('click',function(){
	 	sel.removeAttribute('disabled');
	 });



}






function saludar(){

	this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode.parentNode);
	
	numero_orden++;
	
	div=d.createElement('div');
	div.className='modal fade show ';
	div.id='examplemodalCenter';
	div.setAttribute('tabindex','-1');
	div.setAttribute('role','dialog');
	div.setAttribute('aria-labelledby','exampleModalCenterTitle');
	div.setAttribute('aria-hidden','true');
	div1=d.createElement('div');
	div1.className='modal-dialog modal-dialog-centered modal-dialog-scrollable';
	div1.setAttribute('role','document');
	div2=d.createElement('div');
	div2.className='modal-content'
	div3=d.createElement('div');
	div3.className='modal-header';
	h3=d.createElement('h3');
	h3.className='modal-title';
	h3.id='exampleModalCenterTitle';
	h3.innerHTML='Mi Carrito';
	button=d.createElement('button');
	button.className='close';
	button.setAttribute('type','button');
	button.setAttribute('data-dismiss','modal');
	button.setAttribute('aria-label','Close');
	span=d.createElement('span');
	span.setAttribute('aria-hiden','true');
	span.innerHTML='&times;';

	divB=d.createElement('div');
	divB.className='modal-body';
	h2=d.createElement('h2');
	h2.className='saludo';
	h2.innerHTML='Se ha realizado la compra con Éxito.';
var orden=d.createElement('p');
	orden.className='numero-orden';
	orden.innerHTML='Su numero de orden es : ' +numero_orden;
	divF=d.createElement('div');
	divF.className='modal-footer';
	button1=d.createElement('button');
	button1.className='btn btn-primary cerrar';
	button1.setAttribute('type','button');
	button1.setAttribute('data-dismiss','modal');
	button1.innerHTML='Menu Principal';
	button1.onclick=reset;

	ul= d.createElement('ul');
	ul1= d.createElement('ul');
	ul1.className='totales';
	li1=d.createElement('li');
	li1.innerHTML='Total';
	li3=d.createElement('li');
	
 	li3.innerHTML='$ '+contPrecio;
	li2=d.createElement('li');
	li2.innerHTML= 'U ';
	li2.innerHTML+=contItems;

	


	for(let i =0; i< Carrito.length; i++){
		
     	
		li=d.createElement('li');
		li.className='items';
		a1=d.createElement('a');
		let span =d.createElement('span');
		span1=d.createElement('span');

			
			
			li.innerHTML = Carrito[i].nombre;
				
		
			span.innerHTML= 'U ' + Carrito[i].cantidad;
			
			span1.innerHTML='$ '+ Carrito[i].precio;
			

			
		
			
			
			ul.appendChild(li);
			li.appendChild(span);
			li.appendChild(span1);
			li.appendChild(a1);
			

			
		}	
	

	




	body.appendChild(div);
	div.appendChild(div1);
	div1.appendChild(div2);
	div2.appendChild(div3);
	div3.appendChild(h3);
	div3.appendChild(button);
	button.appendChild(span);
	div2.appendChild(divB);
	divB.appendChild(h2);
	divB.appendChild(orden);
	divB.appendChild(ul);
	divB.appendChild(ul1);
	ul1.appendChild(li1);
	ul1.appendChild(li2);
	ul1.appendChild(li3);
	div2.appendChild(divF);
	divF.appendChild(button1);
	
	
	$(document).ready(function(){
		$('.close, .cerrar').click(function(){
		$('body').removeClass('modal-abierta');
			$('.modal').remove();

					   
			})
		})

}








var perfil=d.querySelector('.usuario');
perfil.onclick= function (){

	body.className='modal-abierta';
	div=d.createElement('div');
	div.className='modal fade show ';
	div.id='modalUsuario';
	div.setAttribute('tabindex','-1');
	div.setAttribute('role','dialog');
	div.setAttribute('aria-labelledby','exampleModalCenterTitle');
	div.setAttribute('aria-hidden','true');
	div1=d.createElement('div');
	div1.className='modal-dialog modal-dialog-centered';
	div1.setAttribute('role','document');
	div2=d.createElement('div');
	div2.className='modal-content'
	div3=d.createElement('div');
	div3.className='modal-header';
	h3=d.createElement('h3');
	h3.className='modal-title';
	h3.id='exampleModalCenterTitle';
	h3.innerHTML='Mi Usuario';
	button=d.createElement('button');
	button.className='close';
	button.setAttribute('type','button');
	button.setAttribute('data-dismiss','modal');
	button.setAttribute('aria-label','Close');
	span=d.createElement('span');
	span.setAttribute('aria-hiden','true');
	span.innerHTML='&times;';

	divB=d.createElement('div');
	divB.className='modal-body';
	divb=d.createElement('div');
	divb.className='d-flex justify-content-center';
	img=d.createElement('img');
	img.src='img/usuario.jpg';
	divb1=d.createElement('div');
	h2=d.createElement('h2');
	h2.innerHTML='Marco Giotto';
	divb2=d.createElement('div');
	ul=d.createElement('ul');
	li=d.createElement('li');
	li.innerHTML='Carrera : ';
	span1=d.createElement('span');
	span1.innerHTML='Diseño y Desarrollo Web ';
	li1=d.createElement('li');
	li1.innerHTML='Materia : ';
	span2=d.createElement('span');
	span2.innerHTML='Interacción con Dispositivos Mobiles';
	li2=d.createElement('li');
	li2.innerHTML='Comisión : ';
	span3=d.createElement('span');
	span3.innerHTML='DWN2A';
	li3=d.createElement('li');
	li3.innerHTML='Turno : ';
	span4=d.createElement('span');
	span4.innerHTML='Noche';
	li4=d.createElement('li');
	li4.innerHTML='Año : ';
	span5=d.createElement('span');
	span5.innerHTML='2019';
	li5=d.createElement('li');
	li5.innerHTML='Cuatrimestre : ';
	span6=d.createElement('span');
	span6.innerHTML='Segundo Cuatrimestre';
	li6=d.createElement('li');
	li6.innerHTML='Docente : ';
	span7=d.createElement('span');
	span7.innerHTML='Omar Toyos';
	li7=d.createElement('li');
	li7.innerHTML='Caracter de Entrega : ';
	span8=d.createElement('span');
	span8.innerHTML='Final';
	



	
	body.appendChild(div);
	div.appendChild(div1);
	div1.appendChild(div2);
	div2.appendChild(div3);
	div3.appendChild(h3);
	div3.appendChild(button);
	button.appendChild(span);
	div2.appendChild(divB);	
	divB.appendChild(divb);
	divb.appendChild(img);
	divB.appendChild(divb1);
	divb1.appendChild(h2);
	divb1.appendChild(divb2);
	divb2.appendChild(ul);
	ul.appendChild(li);
	li.appendChild(span1);
	ul.appendChild(li1);
	li1.appendChild(span2);
	ul.appendChild(li2);
	li2.appendChild(span3);
	ul.appendChild(li3);
	li3.appendChild(span4);
	ul.appendChild(li4);
	li4.appendChild(span5);
	ul.appendChild(li5);
	li5.appendChild(span6);
	ul.appendChild(li6);
	li6.appendChild(span7);
	ul.appendChild(li7);
	li7.appendChild(span8);
	
	

	$(document).ready(function(){
		$('.close').click(function(){
		$('body').removeClass('modal-abierta');
			$('.modal').remove();

					   
			})
		})

}



