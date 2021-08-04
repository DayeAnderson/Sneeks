import React, { Component } from 'react';
import './AddSneaker.css';

class AddSneaker extends Component {
    state = { 
        invalidForm: true,
        formData:{
            brand: '',
            model: '',
            color: '',
            size: '',
        },
     };
     
     formRef = React.createRef();

     handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddSneaker(this.state.formData);
      };

      handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
        });
      };

    render() { 
        return ( 
            <div className="AddSneaker">
                    <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="brand" id="sneaker_brand" type="text" className="active" value={this.state.formData.brand} onChange={this.handleChange} required />
                            <label htmlFor="sneaker_brand">Sneaker Brand</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="model" id="model" type="text" className="active" value={this.state.formData.model} onChange={this.handleChange} required/>
                            <label htmlFor="model">Model</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="color" id="color" type="text" className="active" value={this.state.formData.color} onChange={this.handleChange}/>
                            <label htmlFor="color">Color</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="size" id="size" type="text" className="active" value={this.state.formData.size} onChange={this.handleChange}/>
                            <label htmlFor="size">Size</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="image" id="imageURL" type="text" className="active" value={this.state.formData.image} onChange={this.handleChange}/>
                            <label htmlFor="imageURL">Image URL</label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn red"
                            disabled={this.state.invalidForm}
                        ><i className="material-icons left">add</i>
                            Add Sneaker
                        </button>                           
                    </form>
                </div>
         );
    }
}
 
export default AddSneaker;