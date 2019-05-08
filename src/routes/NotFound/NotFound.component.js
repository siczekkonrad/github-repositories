import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

class NotFound extends Component {
    state = {
        counter : 10,
    }

    componentDidMount = () => {
        const intervalId = setInterval(this.countDown, 1000);
        this.setState({intervalId})
    }

    countDown = () => this.setState(prevState => ({
        counter: prevState.counter - 1
    }))

    componentWillUnmount = () => {
        clearInterval(this.state.intervalId)
    }

    render() {
        const { location } = this.props
        const { counter } = this.state
        return (
            <>
            <p>Not match for <code>{location.pathname}</code></p>
            <p>Redirect to homepage in {counter} seconds</p>
            {counter === 0 && <Redirect to='/' />}
            </>
        )
    }
}

export default NotFound