$(document).ready(function(){
    var root = 'https://swapi.co/api/films/';

    extraepersonaje(root);

    //metodo 1
    /*
    $.ajax({
        url: root,
        method: 'GET',
    }).then(function(data){
        //alert(data);
        //console.log(data);
        var tarjeta = '';
        for(var i=0; i < data.results.length; i++){
            tarjeta += '<div class="col-md-4"';
            tarjeta += '    <h1 data-title="'+data.results[i].title+'" data-toggle="modal" data-target="#exampleModalLong">' + data.results[i].title + '</h1>';
            tarjeta += '    <br>';
            tarjeta += '    <br>';
            tarjeta += '    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">';
            tarjeta += '        Leer mas';
            tarjeta += '    </button>';
            tarjeta += '    <br>';
            tarjeta += '    <br>';
            tarjeta += '</div>';
        }
        //console.log(tarjeta);
        $("#peliculas").html(tarjeta);
    });

    $('#exampleModalLong').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
    });
    */
    //metodo 2

    $.ajax({
        url: root,
        method: 'GET',
        success: function(data){
            console.log(data);
            var tarjeta = '';
            for(var i=0; i < data.results.length; i++){
                tarjeta += '<div class="col-md-4 "';
                tarjeta += '    <h1 data-title="'+data.results[i].title+'" data-toggle="modal" data-target="#exampleModalLong">' + data.results[i].title + '</h1>';
                tarjeta += '    <h1>Episode: '+ data.results[i].episode_id +'</h1>';
                if(data.results[i].episode_id == 1)
                {
                    tarjeta += '<img src="img/episode1.jpg" alt="">';

                }
                else if(data.results[i].episode_id == 2)
                {
                    tarjeta += '<img src="img/episode2.jpg" alt="">';
                }
                else if(data.results[i].episode_id == 3)
                {
                    tarjeta += '<img src="img/episode3.jpg" alt="">';
                }
                else if(data.results[i].episode_id == 4)
                {
                    tarjeta += '<img src="img/episode4.jpg" alt="">';
                }
                else if(data.results[i].episode_id == 5)
                {
                    tarjeta += '<img src="img/episode5.jpg" alt="">';
                }
                else if(data.results[i].episode_id == 6)
                {
                    tarjeta += '<img src="img/episode6.jpg" alt="">';
                }
                else if(data.results[i].episode_id == 7)
                {
                    tarjeta += '<img src="img/episode7.jpg" alt="">';
                }
                for(var j=0; j<data.results[i].characters.length; j++){
                }
                tarjeta += '    <br>';
                tarjeta += '    <br>';
                tarjeta += '    <a type="button" style="color:white" class="btn btn-primary" data-title="<strong>' + data.results[i].title + '</strong>" data-body="<i><strong>episode: </strong>'+ data.results[i].episode_id +'</i><br><i><strong>fecha: </strong>'+ data.results[i].release_date +'</i><br><i><strong>director: </strong>'+ data.results[i].director +'</i><br><i><strong>productor: </strong>'+ data.results[i].producer +'</i><br><i><strong>sipnosys: </strong>'+ data.results[i].opening_crawl +'</i><br><ul><strong>personajes de la pelicula: </strong>';
                for(var j=0; j<data.results[i].characters.length; j++){
                    tarjeta += extraepersonaje(data.results[i].characters[j]);
                }
                tarjeta += '</ul><br>" data-toggle="modal" data-target="#exampleModalLong">';
                tarjeta += '        Leer mas';
                tarjeta += '    </a>';
                tarjeta += '    <br>';
                tarjeta += '    <br>';
                tarjeta += '</div>';
            }
            //console.log(tarjeta);
            $("#peliculas").html(tarjeta);
        },
        error: function(e){
            console.log(e);
        },
    });
    $('#exampleModalLong').on('show.bs.modal', function (e) {
     $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
     $(this).find('.modal-body').html($(e.relatedTarget).data('body'));
    });
    
    function extraepersonaje(url){
    var nombreper='';
    $.ajax({
        url: url,
        method:'GET',
        async: false,
        success: function(data){
           nombreper = '<li>'+ data.name + '</li>';
        },
        error: function(e) {
            console.log(e);
        },
    });
    return nombreper;
    }
});