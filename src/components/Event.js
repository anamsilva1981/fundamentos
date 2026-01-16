
function Event() {

    const handleClick = (evento) => {
        console.log('--- Funções  que o evento contem: ', evento)

        console.log('Botão clicado')
    }
  return (
    <div>
        <button onClick={handleClick}>Botão de evento</button> <br></br>

        <button onClick={() => { console.log('função dentro do evento')}}>Botão com função dentro do evento</button><br></br>
        
        <button onClick={() => { 
            if(true){console.log(true, 'função com validação dentro do evento')}
        }}
        >Botão com função com validação dentro do evento</button><br></br>
        
        
    </div>
  )
}

export default Event