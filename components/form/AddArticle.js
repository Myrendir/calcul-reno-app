import React from "react";
import * as ReactDOM from "react-dom";

class AddArticle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        console.log(e);
        this.setState({
            code: e.target.value
        })
    }

    render() {
        return <div>
            <label htmlFor="code">Code</label>
            <input type="text" id="code" name="code" value={this.state.code} onChange={this.handleChange}/>
        </div>
    }
}

ReactDOM.render(<AddArticle/>, document.querySelector('#app'));