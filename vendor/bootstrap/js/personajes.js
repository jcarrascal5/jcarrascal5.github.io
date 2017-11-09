$(document).ready(function(){
    var root = 'https://swapi.co/api/people/';

    cargarPersonajes(root);
    extraeplanet(root);
    extraespecie(root);
    extraecla(root);
    extraelen(root);
    extrapeli(root);
    extrapeli2(root);

    function cargarPersonajes(url){
        $.ajax({
            url: url,
            method: 'GET',
            success: function(data){
                //console.log(data);
                var html = '';
                for (var i=0; i<data.results.length; i++){
                    html += '<div class="col-lg-6 col-md-6 mb-4" style="color: white">';
                    html += '   <div class="card">';
                    html += '       <div class="card-body">'
                    html += '           <h1>' + data.results[i].name+ '</h1>';
                    html +='            <i><strong>planeta: </strong>'+ extraeplanet(data.results[i].homeworld)+'';
                    html +='            </i><br>'
                    html +='            <i><strong>especie: </strong>'+ extraespecie(data.results[i].species)+'';
                    html +='            </i><br>'
                    html +='            <i><strong>clasificacion: </strong>'+ extraecla(data.results[i].species)+'';
                    html +='            </i><br>'
                    html +='            <i><strong>idioma: </strong>'+ extraelen(data.results[i].species)+'';
                    html +='            </i><br>'
                    html +='            <ul><strong>Participacion en Peliculas: </strong>';
                    for(var j=0; j<data.results[i].films.length; j++){
                        html += extrapeli(data.results[i].films[j]);
                        html +='<strong>capitulo: </strong>';
                        html += extrapeli2(data.results[i].films[j]);
                    }
                    html +='            </ul><br>'
                    html +='            <ul>'
                    for(var j=0; j<data.results[i].homeworld; j++){
                        html += extraeplanet(data.results[i].homeworld[j]);
                    }
                    for(var j=0; j<data.results[i].species; j++){
                        html += extraespecie(data.results[i].species[j]);
                    }
                    for(var j=0; j<data.results[i].species; j++){
                        html += extraecla(data.results[i].species[j]);
                    }
                    for(var j=0; j<data.results[i].species; j++){
                        html += extraelen(data.results[i].species[j]);
                    }
                    html += '           </ul>';
                    html += '       </div>';
                    html += '   </div>';
                    html += '</div>';
                } 
                $("#prev").on('click', function(e){
                    e.preventDefault();
                    if(data.previous !=null){
                        cargarPersonajes(data.previous);
                    }
                });
                $("#next").on('click', function(e){
                    e.preventDefault();
                    cargarPersonajes(data.next);
                });
                $('#listado-personajes').html(html);   
            },
            error: function(e){
                console.log(e);
            },
        });
    }
    function extraeplanet(url){
        var nombrePlanet='';
        $.ajax({
            url: url,
            method:'GET',
            async: false,
            success: function(data){
               nombrePlanet = '<i>'+ data.name + '</i>';
            },
            error: function(e) {
                console.log(e);
            },
        });
        return nombrePlanet;
    }
    function extraespecie(url){
        var nombrespecie='';
        var nombreclas='';
        $.ajax({
            url: url,
            method:'GET',
            async: false,
            success: function(data){
               nombrespecie = '<i>'+ data.name + '</i>';
            },
            error: function(e) {
                console.log(e);
            },
        });
        return nombrespecie;
    }
    function extraecla(url){
        var nombreclas='';
        $.ajax({
            url: url,
            method:'GET',
            async: false,
            success: function(data){
               nombreclas = '<i>'+ data.classification + '</i>';
            },
            error: function(e) {
                console.log(e);
            },
        });
        return nombreclas;
    }
    function extraelen(url){
        var lenguaje='';
        $.ajax({
            url: url,
            method:'GET',
            async: false,
            success: function(data){
               lenguaje = '<i>'+ data.language + '</i>';
            },
            error: function(e) {
                console.log(e);
            },
        });
        return lenguaje;
    }
    function extrapeli(url){
        var capitulo='';
        $.ajax({
            url: url,
            method:'GET',
            async: false,
            success: function(data){
               capitulo = '<li>'+ data.title + '</li>';
            },
            error: function(e) {
                console.log(e);
            },
        });
        return capitulo;
    }
    function extrapeli2(url){
        var capitulo='';
        $.ajax({
            url: url,
            method:'GET',
            async: false,
            success: function(data){
               capitulo = '<i>'+ data.episode_id + '</i>';
            },
            error: function(e) {
                console.log(e);
            },
        });
        return capitulo;
    }
});
