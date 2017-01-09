const swot = require('swot-simple');
const React = require('react');
const ReactDOM = require('react-dom');

const Input = React.createClass({
    getInitialState() {
        return {
            value: 'me@stanford.edu'
        };
    },

    render() {
        const email = this.state.value;
        const checked = swot.isAcademic(email);
        const name = swot.getInstitutionName(email);
        console.log(name);

        const footnote = {
            marginTop: '1em',
            color: '#666'
        };

        return (
            <div>
                <p>
                    <label>Email: </label>
                    <input type="text"
                           value={email}
                           onChange={(e) => this.setState({ value: e.target.value })}>
                    </input>
                </p>
                <p>Academic: {'' + checked}</p>
                <p>Institution: {checked ? '' + name : null}</p>
                <p style={footnote}>Implemented using <a href="https://github.com/mapbox/swot-simple">Swot</a>. Use as quite reliable indicator.</p>
            </div>
        );
    }
});

ReactDOM.render(
    <Input />,
    document.getElementById('example')
);
