import React, {Component} from 'react';

export default class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="wrapper flex">
                    <div className="copy">
                        <p>&copy;2019 &#9866; <a href="https://www.lukehoang.com">Lukehoang.com</a></p>
                    </div>
                </div>
            </div>
        );
    }
}