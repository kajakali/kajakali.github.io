'use strict';

const e = React.createElement;

class ReactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return e(
        'p',
        { onClick: () => this.setState({ liked: true }) },
        'I am a react component'
    
      
    )

  }
}


ReactDOM.render(e(ReactComponent), document.querySelector('#react-container'));