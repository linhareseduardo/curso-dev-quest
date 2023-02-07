let usuario = {
    nome: 'Eduardo',
    excluir: function(){
        console.log('O usuário ' + this.nome + ' foi excluído!')
    }
}

usuario.excluir()
