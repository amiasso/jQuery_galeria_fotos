$(Document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown(2000);
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp(1000);
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImg = $('#endereco-img-nova').val();
        const novoItem = $('<li style= "display: none"><li/>');
        $(`<img src="${enderecoDaNovaImg}"/>`).appendTo(novoItem);
        $(`
            <div class="overLay-imagem-link>
                <a href=${enderecoDaNovaImg}"target="_blanck"title="ver imagem em tamanho real"
                ver imagem em tamanho real
                <a/>
            <div/>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(10000);
        $('#endereco-img-nova').val('')

    })
})
