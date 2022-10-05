let inputValue;
let items = [];
function handleChange(e) {
    inputValue = e.target.value;
}

function handleSubmit(e) {
    e.preventDefault();
    items.push(inputValue);
    render();
    e.target.elements[0].value = ""; // reset input text
}

function render() {
    const list = (
        <div className="list">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <input type="submit" value="submit"/>
            </form>
            <div className="preview">
                <ul>
                    {items.map(itm=> (<li>{itm}</li>))}
                </ul>
            </div>
        </div>
    )
    ReactDOM.render(list, document.querySelector("#app"))
}
render();
