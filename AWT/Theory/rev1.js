$('document').ready(function(){
    $('button').click(() =>{
        let take = 0;
        // random take 1 to 10
        take = Math.floor(Math.random() * 10) + 1;

        if (take == 1 || take == 6){
            $('#para-1').css('color', 'red');
        }

        if (take == 2 || take == 7){
            $('#para-1').css('color', 'blue');
        }

        if (take == 3 || take == 8){
            $('#para-1').css('color', 'green');
        }

        if (take == 4 || take == 9){
            $('#para-1').css('color', 'yellow');
        }

        if (take == 5 || take == 10){
            $('#para-1').css('color', 'black');
        }


        $('#para-1').html("<h1>Hello World</h1>")

    })
});