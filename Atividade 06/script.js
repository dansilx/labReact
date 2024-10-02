const Letreiro = () => {
    const [text, setText] = React.useState("");
    const message = "Venha estudar na Fatec";
    let i = 0;
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            setText((prevText) => prevText + message[i]);
            index++;
            if (i == message.length) clearInterval(interval);
        }, 150);

        return () => clearInterval(interval);
    }, []);
    return <h1>{text}</h1>;
}

ReactDOM.render(<Letreiro />, document.getElementById("root"));