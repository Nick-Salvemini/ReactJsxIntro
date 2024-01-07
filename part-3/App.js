const App = () => (
    <div>
        <Person name='Bob' age={45} hobbies={['cooking', 'paddy cake', 'voice acting']} />
        <Person name='Linda' age={42} hobbies={['wine', 'singing', 'british tv']} />
        <Person name='Louise' age={9} hobbies={['fire', 'racing', 'vengence']} />
        <Person name='Sharahlandalanda' age={7} hobbies={['kiwis', 'pretend', 'tablets']} />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))