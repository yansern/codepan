webpackJsonp([7],{129:function(n,e){n.exports="class Timer extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = { secondsElapsed: 0 }\n  }\n\n  tick() {\n    this.setState(prevState => ({\n      secondsElapsed: prevState.secondsElapsed + 1\n    }))\n  }\n\n  componentDidMount() {\n    this.interval = setInterval(() => this.tick(), 1000)\n  }\n\n  componentWillUnmount() {\n    clearInterval(this.interval)\n  }\n\n  render() {\n    return (\n      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>\n    )\n  }\n}\n\nReactDOM.render(<Timer />, document.getElementById('app'))\n"}});