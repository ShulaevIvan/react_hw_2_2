import React from 'react';

const IconSwitch = (props) => {
    return (
        <React.Fragment>
            <div className="icon-switch-panel-wrap">
                <div className="icon-switch-panel-btn-wrap">
                    <span onClick={props.switchFunc} className="material-icons">{props.switchBtnClass}</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default IconSwitch;