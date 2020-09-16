import React from 'react';
import './index.css';

// MAIN
// MAIN_HOVER
// SELECTED
// SELECTED_HOVER
// DISABLED


// Signboard-addition
// MAIN - Сказочное заморское яство
// MAIN_HOVER - Сказочное заморское яство
// SELECTED - Сказочное заморское яство
// SELECTED_HOVER - Котэ не одобряет
// DISABLED - Сказочное заморское яство
class Signboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            state: this.props.item.disabled ? 'DISABLED': 'MAIN'
        }
    }


    render() {
        const stateData = this.getStateData();

        return(
            <div className='signboard' onClick={this.changeState.bind(this)}
                 onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
                <div className={'signboard-border ' + stateData.borderClass}>
                    <div className={'signboard-card ' + stateData.totalClass}>
                        <div className="signboard_text-part">
                            <p className="signboard-addition">{stateData.addition}</p>
                            <p className="signboard-heading">Нямушка</p>
                            <p className="signboard-flavor">{this.props.item.flavor}</p>
                            <p className="signboard-a">{this.props.item.portions}</p>
                            <p className="signboard-a">{this.props.item.addition}</p>
                            <p className="signboard-a">{this.props.item.addition2}</p>
                        </div>
                        <div className={'signboard-round_main ' + stateData.roundClass}><p>{this.props.item.kilo}<br></br>{this.props.item.kg}</p></div>
                    </div>
                </div>
                    <p className="signboard_main-information">{stateData.information}</p>
            </div>
        )
    }

    getStateData() {
       switch (this.state.state) {
           case 'MAIN': {
               return {
                   addition: 'Сказочное заморское яство',
                   roundClass: 'signboard-round_main',
                   information: this.props.item.information_main,
                   borderClass: ''

               }
           }
           case 'MAIN_HOVER': {
               return {
                   addition: 'Сказочное заморское яство',
                   roundClass: 'signboard-round_main-hover',
                   information: this.props.item.information_main,
                   borderClass: 'signboard-border-hover'
               }
           }
           case 'SELECTED': {
               return {
                   addition: 'Сказочное заморское яство',
                   roundClass: 'signboard-round_selected',
                   information: this.props.item.information_selected,
                   borderClass: 'signboard-border_selected'
               }
           }
           case 'SELECTED_HOVER': {
               return {
                   addition: <div><p className="pink">Котэ не одобряет?</p></div>,
                   roundClass: 'signboard-round_selected-hover',
                   information: this.props.item.information_selected,
                   borderClass: 'signboard-border_selected-hover'
               }
           }
           default: {
               return {
                   addition: 'Сказочное заморское яство',
                   roundClass: 'signboard-round_disabled',
                   information: this.props.item.information_disabled,
                   borderClass: 'signboard-border_disabled',
                   totalClass: 'signboard-disabled'
               }
           }
       }
    }

    changeState(){
        if(this.state.state === 'MAIN_HOVER'){
            this.setState({state: 'SELECTED'})
        } else if (this.state.state === 'SELECTED_HOVER') {
            this.setState({state: 'MAIN_HOVER'})
        } else if (this.state.state === 'SELECTED') {
            this.setState({state: 'MAIN'})
        } else if (this.state.state === 'MAIN') {
            this.setState({state: 'SELECTED'})
}


}

    onMouseEnter (){
        if(this.state.state === 'MAIN'){
            this.setState({state: 'MAIN_HOVER'})
        } else if (this.state.state === 'SELECTED') {
            this.setState({state: 'SELECTED_HOVER'})
        }
    }
    onMouseLeave() {
        if(this.state.state === 'MAIN_HOVER'){
            this.setState({state: 'MAIN'})
        } else if (this.state.state === 'SELECTED_HOVER') {
            this.setState({state: 'SELECTED'})
        }
    }


}

export default Signboard;
