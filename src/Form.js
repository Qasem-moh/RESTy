import React from 'react';
import './Form.scss';



class Form extends React.Component {

    state = {
        url: '',
        method: ''
    }
    clickHandler = (e) => { // should be arrow to prevent loss this value 
        e.preventDefault();
        let newStat = { url: e.target.url.value, method: e.target.method.value }
        this.setState(newStat)
    }
    render() {
        return (
            <>
                <main>
                    <form onSubmit={this.clickHandler}>
                        <div id='main-form'>
                            <div id='enter-url'>
                                <label>URL: </label>
                                <input type='url' name='url' id='url' required
                                    style={{
                                        height: '25px',
                                        border: '3px solid ',
                                        margin: '25px'
                                    }} />
                                <button type='submit' style={{
                                    height: '25px',
                                    margin: '25px',
                                    width: '50px',
                                    height: '30px',
                                    fontSize: '20px'
                                }}>
                                    GO!
                                </button>
                            </div>

                            <div id='methods'>
                                <label>GET</label>
                                <input type='radio' name='method' id='GET' value='GET' />
                                <label>POST</label>
                                <input type='radio' name='method' id='POST' value='POST' />
                                <label>PUT</label>
                                <input type='radio' name='method' id='PUT' value='PUT' />
                                <label>DELETE</label>
                                <input type='radio' name='method' id='DELETE' value='DELETE' />
                            </div>
                        </div>
                        <div id='show'>
                            <p id='result-method'>{this.state.method}</p>
                            <p id='result-url'>{this.state.url}</p>
                        </div>
                    </form>
                </main>
            </>
        )
    }
}
export default Form;
