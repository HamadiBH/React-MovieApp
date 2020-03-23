import React from 'react';
import './spinner.css';


const IsLoading = (Component) => {
return class Spinner extends React.Component {
    state = {
      loading: true,
    }

    componentDidMount() {
     setTimeout(  
      () => this.setState({ loading: false })
      ,1000)   
    }
  

    render() {
    return this.state.loading ? <div class="lds-dual-ring"></div>

        :<Component {...this.props} />
        }
      }
    }
  export default IsLoading ;