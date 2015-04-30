const React = require('react');

let User = React.createClass({

    getDefaultProps() {
        return {
            user: {
                id: null,
                nickname: ''
            }
        };
    },

    render() {
        let user = this.props.user;
        return (
            <li className='list__users__item'>
                <h3 className='list__users__item__title'>
                  <a href="#">{user.nickname}</a>
                </h3>
            </li>
        );
    }

});

module.exports = User;
