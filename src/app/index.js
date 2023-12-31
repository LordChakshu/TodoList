var React = require('react');
var ReactDOM = require('react-dom');

//Module requires
var TodoItem = require('./todoItem');
var AddItem=require('./addItem');

//CSS requires
require('./css/index.css');


//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['kaam1','kaam2','kaam3','kaam4','kaam5','kaam25']
        }
    }, //getInitialState
    render: function(){
        var todos = this.state.todos;

        todos = todos.map(function(item, index){
            return(<TodoItem key={index} item={item} onDelete={this.onDelete} />);
        }.bind(this));


        return(
            <div id="todo-list">
                <p>Kaam Jo Tum Bolo, Rakam Jo M Bolu</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    }, //render

    //Custom functions
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    },

    onAdd:function(item)
    {
       var updatedTodos=this.state.todos;
       updatedTodos.push(item);
       this.setState({
       todos:updatedTodos
       });
    }
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
