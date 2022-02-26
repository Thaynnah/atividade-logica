console. log ("Bem vindo!");

console. log ("Data do evento:");
    let data_atual = new Date ();
    let data_evento = new Date ();
        if(data_evento >= data_atual) {
        console.log ("Informações salvas.")
}
        else {
        console.log ("Não foi possível cadastrar o evento, pois a data informada é inválida.")
}

console.log ("Data de nascimento:");
    let DataDeNascimento = 18;
        if(DataDeNascimento >= 18) {
        console.log ("Informações salvas")
}
        else {
        console.log ("Idade não permitida para cadastro")
}

console.log ("Palestrantes do evento");
    let PalestrantesDoEvento = [];
    let quantidadeDePalestrantes = PalestrantesDoEvento.length;
    console.log (quantidadeDePalestrantes);

console.log ("Participantes do evento");
    let listaDeParticipantes = [];
    let quantidade_participantes = 100;
        if(listaDeParticipantes < quantidade_participantes) {
        console.log ("Cadastro realizado com sucesso!")
        }
        else {
        console.log ("Cadastro inválido, pois o limite de participantes foi excedido")
        }
