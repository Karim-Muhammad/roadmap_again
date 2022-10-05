let inputValue;
function handleChange(e) {
    inputValue = e.target.value;
    render();
}

function render() {
    const form = (
        <div className="form">
            <form onSu>
                <input type="text" onChange={handleChange} />
                <input type="submit" value="submit"/>
            </form>
            <div className="preview">{inputValue}</div>
        </div>
    )
    ReactDOM.render(form, document.querySelector("#app"))
}
render();
