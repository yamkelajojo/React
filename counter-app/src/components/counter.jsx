import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 50,
        fontWeight: "bold",
    };

    renderTags(){
        if(this.state.tags.length === 0){
            return (<p>There's no tags</p>)
        }
        else{
            return (<ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>);
        }
    };

    render() { 
        this.badgeColor();

        return (<React.Fragment>
                    <span style={this.styles}>{this.formatCount()}</span>
                    <button>Increment</button>
                    {this.renderTags()}
                </React.Fragment>);
    }

    badgeColor() {
        this.state.count === 0 ? this.styles.backgroundColor = "yellow" : this.styles.backgroundColor = "blue";
    }

    formatCount(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}
 
export default Counter;