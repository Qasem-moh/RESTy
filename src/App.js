import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Results from './Results'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: {},
      url: '',
      headers: {}

    }
  }
  handelForm = (results, count, headers, url) => {     
    this.setState({ results, count, headers, url })
  }

  render() {
    return (
      //add paraint as empty tag or Freagment tag 
      <>
        <Header />
        <Footer />
        <Form handler={this.handelForm} />
        <Results res={this.state} />
      </>
    )
  }
}


// function App() {
//   return (
//     <>
//       <Header/>
//       <Form/>
//       <Footer/>
//     </>
//   )
// }

export default App;