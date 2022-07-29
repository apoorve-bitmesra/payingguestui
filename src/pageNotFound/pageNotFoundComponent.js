import React from 'react';

class PageNotFoundComponent extends React.Component {
    navigateToSignIn = (e) => {
        this.props.history.push(`/`)
    }
    render() {
        const params = window.location;
        return (
            <div className="login">
                <h1>404 - Page Not Found</h1>
                <h4>url: {params.href}</h4>
                <h4>query Parameters: {params.search}</h4>
                <h4>host: {params.host}</h4>
                <h4>pathname: {params.pathname}</h4>
                <h3>Something went wrong. Please try again later.</h3>
                <div>
                    <button className="signin-button" onClick={this.navigateToSignIn}>{'Login'}</button>
                </div>
            </div>

        );
    }
}

export default PageNotFoundComponent;