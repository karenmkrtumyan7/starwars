import React, { Component } from 'react';
import ErrorComponent from '../error/error';
import Loader from '../loader/loader';

function withData(View) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                data: [],
                loaded: false,
                error: false
            };
        }
    
        componentDidMount() {
            this.props.getData()
                .then(data => {
                    this.setState({data: data});
                    this.setState({loaded: true});
                    this.setState({error: false});
                })
                .catch(e => {
                    this.setState({error: true});
                    this.setState({loaded: true});
                })
        }

        render() {
            const { data, loaded, error } = this.state;
            const ErrorContent = loaded && error ? <ErrorComponent/> : null;
            const loader = !loaded && !error ? <Loader/> : null;
            const content = loaded && !error ? <View {...this.props} data={data}/> : null;

            return (
                <>
                    {ErrorContent}
                    {loader}
                    {content}
                </>
            )
        }
    }
}

export default withData;
