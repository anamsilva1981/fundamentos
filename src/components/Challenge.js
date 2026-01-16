function Challenge() {

    let valorA = 10;
    let valorB = 20;

    const somar = () => {console.log( valorA + valorB)}

  return (
    <div>
        <h1>{valorA} e {valorB}</h1>

        <button onClick={somar}>Clique para somar</button>
    </div>
    
  )
}

export default Challenge