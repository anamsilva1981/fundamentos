
function Event() {

    const handleClick = (evento) => {
        console.log('--- Funções  que o evento contem: ', evento)
        console.log('Botão clicado')
    }

    const renderSomething = (x) =>{
        if(x){ return <h1>Mostra conteúdo se if for true</h1>} else { return <h1>Mostra conteúdo se if for false</h1>}
    };

  return (
    <div>
        <div>
            {/* Evento onClick */}
            <button onClick={handleClick}>Botão de evento</button> <br></br>

            {/* Função dentro do evento onClick */}
            <button onClick={() => { console.log('função dentro do evento')}}>Botão com função dentro do evento</button><br></br>
            
            {/* Função com validação dentro do evento onClick */}
            <button onClick={() => { 
                if(true){console.log(true, 'função com validação dentro do evento')}
            }}
            >Botão com função com validação dentro do evento</button><br></br>
        </div>
        <div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    </div>
  )
}

export default Event