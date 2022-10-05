let count = 0;
function inc() {
    count++;
    console.log(count)
    render();
}

function render() {
    const elem = (
        <div>
            <h1>Section title<span>hightlight</span></h1>
            <p>lorem*15</p>
            count : {count}
            <button onClick={inc}>increase</button>
        </div>
    )
    ReactDOM.render(elem, document.querySelector("#app"))
}
render();
// const elem = (
//         <div>
//             <h1>Section title<span>hightlight</span></h1>
//             <p>lorem*15</p>
//             count : {count}
//             <button onClick={inc}>increase</button>
//         </div>
//     )


//     const elem2 = (<b>Bold Text</b>)
// ReactDOM.render(elem, document.querySelector("#app"))



/**
    JSX Doesnot support Data-binding
    means, when you change value of variable which DOM depend on
    no re-render happens after changing!
    DOM still static

    function use something called (useState)
    class use something called state, setState when you change "state" the component will re-render again
*/
