const Person = ({ name, age, hobbies }) => {
    let msg;
    if (age >= 18) {
        msg = 'please go vote!'
    } else { msg = 'you must be 18' }

    let retName;
    if (name.length > 8) {
        retName = name.substring(0, 6)
    } else { retName = name }

    return (
        <div>
            <p>Learn some information about this {retName}</p>
            <h3>{msg}</h3>
            <h1>Hobbies:</h1>
            <ul>
                {hobbies.map(h => (<li>{h}</li>))}
            </ul>
            <hr></hr>
        </div>
    )
}