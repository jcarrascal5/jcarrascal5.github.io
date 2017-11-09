$(document).ready(function(){
    var root = 'https://swapi.co/api/planets/';

    cargarPlanetas(root);

    function cargarPlanetas(url){
        $.ajax({
            url: url,
            method: 'GET',
            success: function(data){
                //console.log(data);
                var html = '';
                for (var i=0; i<data.results.length; i++){
                    html += '<div class="col-lg-6 col-md-6 mb-4" style="color: white">';
                    html += '   <div class="card" style="height:200px">';
                    html += '       <div class="card-body" >';
                    html += '           <h1>' + data.results[i].name+ '</h1>';
                    html += '           <i><strong>diametro: </strong>'+ data.results[i].diameter+'</i><br>';
                    html += '           <i><strong>clima: </strong>'+ data.results[i].climate+'</i><br>';
                    html += '           <i><strong>terreno: </strong>'+ data.results[i].terrain+'</i><br>';
                    html += '           <i><strong>superficie del agua: </strong>'+ data.results[i].surface_water+'</i><br>';
                    html += '           <i><strong>poblacion: </strong>'+ data.results[i].population+'</i><br>';
                    html += '       </div>';
                    html += '   </div>';
                    html += '</div>';
                } 
                $("#prev").on('click', function(e){
                    e.preventDefault();
                    if(data.previous !=null){
                        cargarPlanetas(data.previous);
                    }
                });
                $("#next").on('click', function(e){
                    e.preventDefault();
                    cargarPlanetas(data.next);
                });
                $('#planetas').html(html);   
            },
            error: function(e){
                console.log(e);
            },
        });
    }
});