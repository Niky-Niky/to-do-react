import { Component } from "react";
import { ModalBackdrop, ModalContent } from "../Modal/Modal.styled";
export class Modal extends Component{

componentDidMount(){
    window.addEventListener('keydown', this.handleKeydown)
}
handleKeydown = (e) => {
    console.log("you've pressed it")
    if(e.code === 'Escape'){
        this.props.onClose();
        console.log("You've pressed escape")
    }
}

    render(){
    return(
        <ModalBackdrop onClick={this.props.onClose}>
        <ModalContent>
        <h1>my h1</h1>
         <p>my p</p>
         <button type="button" onClick={this.props.onClose}>Close Modal</button>
        
        </ModalContent>
        </ModalBackdrop>
    )
}
}