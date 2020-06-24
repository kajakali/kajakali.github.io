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
        'Have a lovely day!'
    
      
    )

  }
}


ReactDOM.render(e(ReactComponent), document.querySelector('#react-container'));