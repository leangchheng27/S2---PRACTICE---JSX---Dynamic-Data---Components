function Time() {
    let date = new Date().toLocaleString() + ""
    return(
        <h2>
            {date}
        </h2>
    );
}

export default Time;