function add_carro(){
    container = document.getElementById("form-carro")

    html = '<br><div class="row"> <div class="col-md"> <input type="text" placeholder="carro" class="form-control" name="carro"></div> <div class="col-md"><input name="placa" type="text" placeholder="Placa" class="form-control"> </div> <div class="col-md"><input name="ano" type="text" placeholder="Ano" class="form-control"> </div> </div>'

    container.innerHTML += html
}

function exibir_form(tipo){
    add_cliente = document.getElementById('adicionar-cliente');
    att_cliente = document.getElementById('att_cliente');

    if (tipo === '1') {
        att_cliente.style.display = 'none';
        add_cliente.style.display = 'block';
    } else if (tipo === '2') {
        add_cliente.style.display = 'none';
        att_cliente.style.display = 'block';
    }
}

function dados_cliente(){
    cliente = document.getElementById('cliente-select');
    csrf_token = document.querySelector('[name=csrfmiddlewaretoken]');
    id_cliente = cliente.value;

    data = new FormData();
    data.append('id_cliente', id_cliente);

    fetch('/clientes/atualiza_cliente/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrf_token.value
        },
        body: data
    }).then(function(result) {
        return result.json();

    }).then(function(data) {
        document.getElementById('form-att-cliente').style.display = 'block';

        nome = document.getElementById('nome');
        nome.value = data['nome'];

        sobrenome = document.getElementById('sobrenome');
        sobrenome.value = data['sobrenome'];

        email = document.getElementById('email');
        email.value = data['email'];

        cpf = document.getElementById('cpf');
        cpf.value = data['cpf'];
    });
}