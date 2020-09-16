import React from 'react';
import './index.css';
import Signboard from "../components/Signboard";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    flavor: "с фуа-гра",
                    portions: <div><b>10</b> порций</div>,
                    addition: "мышь в подарок",
                    kilo: <div className="kilo">0,5</div>,
                    kg: <div className="kg">кг</div>,
                    information_main: <div>Чего сидишь? Порадуй котэ, <a href="#" className="signboard_link"
                                                                         onClick={this.clickLink.bind(this)}>купи</a></div>,
                    information_selected: 'Печень утки, разварная с артишоками',
                    information_disabled: <div className="yellow">Печалька, с фуа-гра закончился</div>,
                    disabled: false,
                },
                {
                  flavor: "с рыбой",
                  portions: <div><b>40</b> порций</div>,
                  addition: <div><b>2</b> мыши в подарок</div>,
                  kilo: <div className="kilo">2</div>,
                  kg: <div className="kg">кг</div>,
                  information_main: <div>Чего сидишь? Порадуй котэ, <a href="#" className="signboard_link"
                                                                       onClick={this.clickLink.bind(this)}>купи</a></div>,
                  information_selected: 'Головы щучьи с чесноком да свежайшая сёмгушка',
                  information_disabled: <div className="yellow">Печалька, с рыбой закончился</div>,
                  disabled: false,
                },
                {
                    flavor: "с курой",
                    portions: <div><b>100</b> порций</div>,
                    addition: <div><b >5</b> мышей в подарок</div>,
                    addition2: "заказчик доволен",
                    kilo: <div className="kilo">5</div>,
                    kg: <div className="kg">кг</div>,
                    information_main: <div>Чего сидишь? Порадуй котэ, <a href="#" className="signboard_link"
                                                                         onClick={this.clickLink.bind(this)}>купи</a></div>,
                    information_selected: 'Филе из цыплят с трюфелями в бульоне',
                    information_disabled: <div className="yellow">Печалька, с курой закончился</div>,
                    disabled: true,
                }
            ]
        }
    }

    render() {
        return(
            <div className="container">
                <p className="heading_main">Ты сегодня покормил кота?</p>
                <div className="items">
                    {this.state.items.map((item) => <Signboard item = {item}/>)}
                </div>
            </div>
        )
    }

    clickLink(event){
        event.preventDefault();
        this.setState({state: 'SELECTED'})
    }
}

export default MainPage