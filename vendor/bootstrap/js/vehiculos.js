$(document).ready(function(){
    var root = 'https://swapi.co/api/vehicles/';

    cargarvehiculos(root);

    function cargarvehiculos(url){
        $.ajax({
            url: url,
            method: 'GET',
            success: function(data){
                //console.log(data);
                var html = '';
                for (var i=0; i<data.results.length; i++){
                    html += '<div class="col-lg-6 col-md-6 mb-4" style="color: white">';
                    html += '   <div class="card" style="height:200px">';
                    html += '       <div class="card-body">';
                    html += '           <h1>' + data.results[i].name+ '</h1>';
                    html += '           <i><strong>modelo: </strong>'+ data.results[i].model+'</i><br>';
                    html += '           <i><strong>longitud: </strong>'+ data.results[i].length+'</i><br>';
                    html += '           <i><strong>tripulacion: </strong>'+ data.results[i].crew+'</i><br>';
                    html += '           <i><strong>pasajeros: </strong>'+ data.results[i].passengers+'</i><br>';
                    html += '           <i><strong>clase de vehiculo: </strong>'+ data.results[i].vehicle_class+'</i><br>';
                    html += '       </div>';
                    html += '   </div>';
                    html += '</div>';
                } 
                $("#prev").on('click', function(e){
                    e.preventDefault();
                    if(data.previous !=null){
                        cargarvehiculos(data.previous);
                    }
                });
                $("#next").on('click', function(e){
                    e.preventDefault();
                    cargarvehiculos(data.next);
                });
                $('#vehiculos').html(html);   
            },
            error: function(e){
                console.log(e);
            },
        });
    }
});