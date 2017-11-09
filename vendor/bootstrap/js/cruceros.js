$(document).ready(function(){
    var root = 'https://swapi.co/api/starships/';

    cargarcruceros(root);

    function cargarcruceros(url){
        $.ajax({
            url: url,
            method: 'GET',
            success: function(data){
                //console.log(data);
                var html = '';
                for (var i=0; i<data.results.length; i++){
                    html += '<div class="col-lg-6 col-md-6 mb-4" style="color: white">';
                    html += '   <div class="card" style="height: 200px">';
                    html += '       <div class="card-body">';
                    html += '           <h1>' + data.results[i].name+ '</h1>';
                    html += '           <i><strong>modelo: </strong>'+ data.results[i].model+'</i><br>';
                    html += '           <i><strong>manufacturador: </strong>'+ data.results[i].manufacturer+'</i><br>';
                    html += '           <i><strong>tripulacion: </strong>'+ data.results[i].crew+'</i><br>';
                    html += '           <i><strong>pasajeros: </strong>'+ data.results[i].passengers+'</i><br>';
                    html += '       </div>';
                    html += '   </div>';
                    html += '</div>';
                } 
                $("#prev").on('click', function(e){
                    e.preventDefault();
                    if(data.previous !=null){
                        cargarcruceros(data.previous);
                    }
                });
                $("#next").on('click', function(e){
                    e.preventDefault();
                    cargarcruceros(data.next);
                });
                $('#cruceros').html(html);   
            },
            error: function(e){
                console.log(e);
            },
        });
    }
});