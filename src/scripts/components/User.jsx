const React = require('react');

let User = React.createClass({

    getDefaultProps() {
        return {
            user: {
                id: null,
                name: ''
            }
        };
    },

    render() {
        let user = this.props.user;
        return (
            <li className='list__users__item'>
                <h3 className='list__users__item__title'>
                  <a href="#">{user.name}</a>
                </h3>
            </li>
        );
    }

});

module.exports = User;
