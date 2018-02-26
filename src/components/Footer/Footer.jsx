import React, {Component} from 'react';


class Footer extends Component {
	render() {
		return (
            <footer className="footer">
                <div className="container-fluid">
                    <p className="copyright pull-right">
                        &copy; {(new Date()).getFullYear()} <a href="http://www.weconnect.com">weConnect</a>, building brands with you!
                    </p>
                </div>
            </footer>
		);
	}
}

export default Footer;
