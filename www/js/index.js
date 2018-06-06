//Variable global para el control con Framework7 (Puede ser cualquier nombre, en este caso utilizamos "myApp")
//Los valores que se pueden agregar al objeto Framework7 son varios, puedes verlos en http://framework7.io/docs/init-app.html
var $$ = Dom7; //$$ para manipulación del DOM no es necesario jQuery pero si se utiliza no tendremos conflictos
myApp = new Framework7({
    material: true //Activamos Material
});
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
    domCache: true //Activamos el DOM cache, para pages inline
});
var app = {
    /*
    Esta función initialize la llamamos desde index.html al final del documento,
    cuando esto se ejecute lanzará deviceready y su correspondiente función "init".
    */
    initialize: function() {
        document.addEventListener("deviceready", this.init, false);
    },
    init: function() {
        //Aquí el dispositivo está preparado
        
    }
};
myApp.onPageInit("contacto", function(){
        console.log("La página contacto está abierta!");});