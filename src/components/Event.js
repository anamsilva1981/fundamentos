
function Event() {

    const handleClick = (evento) => {
        console.log('--- Funções  que o evento contem: ', evento)

        console.log('Botão clicado')
    }
  return (
    <div>
        <button onClick={handleClick}>Clique aqui!</button>
    </div>
  )
}

export default Event