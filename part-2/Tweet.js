const Tweet = ({ username, name, date, message }) => {
    return (
        <div>
            <p>{message}</p>
            <p>By {username}({name}) on {date}</p>
        </div>
    )
}



