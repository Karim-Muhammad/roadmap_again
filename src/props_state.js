// Creating Component by "Class"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: ["itm1","itm2","itm3","itm4","itm5","itm6","itm7","itm8","itm9","itm10",]
        }
        this.add = ()=> {
            const items = this.state.items;
            items.push(`itm ${this.state.items.length+1}`);
            this.setState({
                items,
            })
        }
    }
    render() {
        return (
            <div className="app">
                APP Component
                <Header />
                <ListItems items={this.state.items} />
                <button onClick={this.add}> ADD </button>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                Brand Title
            </header>
        )
    }
}

class ListItems extends React.Component {
    render() {
        // this.props.items = ["who1", "who2", "who3"]; you can change it, but not recommend of course, (not sense)

        return (
            <div className="list">
                <ul>
                    <Item content="HTML/HTML5" />
                    <Item content="CSS/CSS3" />
                    <Item content="JS/ReactjS" />
                    {this.props.items.map(itm=> <Item content={itm} />)}
                </ul>
            </div>
        )
    }
}

class Item extends React.Component {
    render() {
        return (
            <li>{this.props.content}</li>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));