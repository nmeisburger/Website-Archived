import React from 'react';
import './logo.css';

var UID = {
    _current: 0,
    getNew: function () {
        this._current++;
        return this._current;
    }
};

HTMLElement.prototype.pseudoStyle = function (element, prop, value) {
    var _this = this;
    var _sheetId = "pseudoStyles";
    var _head = document.head || document.getElementsByTagName('head')[0];
    var _sheet = document.getElementById(_sheetId) || document.createElement('style');
    _sheet.id = _sheetId;
    var className = "pseudoStyle" + UID.getNew();

    _this.className += " " + className;

    _sheet.innerHTML += " ." + className + ":" + element + "{" + prop + ":" + value + "}";
    _head.appendChild(_sheet);
    return this;
};

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadState: 0,
            load: false
        }
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({ loadState: this.state.loadState + 1 });
        if (this.state.loadState === 3) {
            // window.clearInterval(interval);
        }
    }

    componentDidMount() {
        this.setState({ load: true });
        var interval = window.setInterval(this.increment, 700);
    }

    render() {

        if (this.state.loadState === 1) {
            document.getElementById('firstname').pseudoStyle("before", "height", "100%");
        }
        if (this.state.loadState === 2) {
            document.getElementById('firstname').pseudoStyle("after", "width", "100%");
            document.getElementById('lastname').pseudoStyle("before", "height", "100%");
            document.getElementById('firstname-text-shell').style.width = '100%';
        }
        if (this.state.loadState === 3) {
            document.getElementById('lastname').pseudoStyle("after", "width", "100%");
            document.getElementById('lastname-text-shell').style.width = '100%';
        }

        return (
            <div>
                <div className='firstname' id='firstname'>
                    <div className='firstname-text-shell' id='firstname-text-shell'>
                        <p className='logo-text'>nicholas</p>
                    </div>
                </div>
                <div className='lastname' id='lastname'>
                    <div className='lastname-text-shell' id='lastname-text-shell'>
                        <p className='logo-text'>meisburger</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Logo;