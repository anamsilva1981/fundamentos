const TemplateExpressions = () => {

    let name = 'Aninha';
    const data = {
        idade: 20,
        profissao: 'programador',
        hobby: 'Tocar vioão'
    }

    return(
        <div>
            <h1>Olá {name} é um prazer te ver por aqui!</h1>
            <p>É verdade que você gosta de {data.hobby} e que atualmente trabalha com {data.profissao} e tudo isso apenas com {data.idade} anos de idade?
            </p>
        </div>
    )
}

export default TemplateExpressions;