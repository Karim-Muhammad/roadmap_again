// let inputValue;
// let items = [];

// function handleChange(e) {
//     inputValue = e.target.value;
// }

// function handleSubmit(e) {
//     e.preventDefault();
//     items.push(inputValue);
//     render();
//     e.target.elements[0].value = ""; // reset input text
// }

// function tab(e) {
//     const parent = e.target.parentElement; // li
//     const content = parent.children[0];
//     content.classList.toggle("tabbed");
//     content.style.display = content.classList.contains("tabbed")? "none" : "block";
// }

// function render() {
//     const list = (
//         <div className="list">
//             <form onSubmit={handleSubmit}>
//                 <input type="text" onChange={handleChange} />
//                 <input type="submit" value="submit"/>
//             </form>
//             <div className="preview">
//                 <ul>
//                     {items.map(itm=> (
//                         <li>
//                             <div>
//                                 {itm}
//                             </div>
//                             <button onClick={tab}>tab</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
//     ReactDOM.render(list, document.querySelector("#app"))
// }
// render();


// another Algorithm

let inputValue;
let items = [];

function handleChange(e) {
    inputValue = e.target.value;
}

function handleSubmit(e) {
    e.preventDefault();
    items.push({text: inputValue, show: false});
    render();
    e.target.lements[0].value = ""; // reset input text
}

function tab(itm) {
    itm.show = !itm.show;
    render();
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
                    {
                        items.map(itm => (
                            <li>
                                {
                                    itm.show &&
                                    <div>
                                        {itm}
                                    </div>
                                }
                                <button onClick={()=> tab(itm)}>tab</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
    ReactDOM.render(list, document.querySelector("#app"))
}
render();

