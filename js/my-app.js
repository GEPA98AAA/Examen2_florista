// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Delivery Food',
	dialog: {
		title: 'Delivery Food',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/Productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		}
		
	]
});

// Export selectors engine
var $$ = Dom7;


$$('#btnAlerta').on('click',function(){
	app.dialog.alert('Hola Diseño Web 2');
});

$$('#btnLogin').on('click', function(e){
	e.preventDefault();
	
	var usuario = $$('#username').val();
	var password = $$('#password').val();
	console.log(usuario);
	console.log(password);
	if (usuario == 'admin' && password == "admin"){
		$$('nombre').html('Gerardo Portillo');
		app.loginScreen.close('.login-screen');
	}else{
		app.dialog.alert('Datos ingresados no son validos');
	}
  
});


 

