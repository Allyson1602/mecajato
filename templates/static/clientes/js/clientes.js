function add_carro(){
    container = document.getElementById("form-carro")

    html = '<br><div class="row"> <div class="col-md"> <input type="text" placeholder="carro" class="form-control" name="carro"></div> <div class="col-md"><input name="placa" type="text" placeholder="Placa" class="form-control"> </div> <div class="col-md"><input name="ano" type="text" placeholder="Ano" class="form-control"> </div> </div>'

    container.innerHTML += html
}