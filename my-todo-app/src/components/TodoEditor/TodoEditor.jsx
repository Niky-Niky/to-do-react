import { Component } from "react";
import { Form, Textarea } from "./TodoEditor.styled";
import { Button } from "../TodoList/TodoList.styled";
export class TodoEditor extends Component{
    state={
        textValue: '',
        level: 'junior',
        licence: 'false'
    }

    handleChange = (e)=> {
        this.setState({textValue: e.target.value})
    }

    handleRadioChange = (e)=> {
        this.setState({level: e.target.name})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.textValue)
    }

    handleChecked = (e)=>{
        this.setState({
            licence: e.currentTarget.checked
        })
    }

    render(){
        return (
            <Form onSubmit={this.handleSubmit}>                   
                    <Textarea value={this.state.textValue} onChange={this.handleChange}/>                    
                <Button type="submit">Create</Button> 
            </Form>
        )
    }
}