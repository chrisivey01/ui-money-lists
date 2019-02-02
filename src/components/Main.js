import React from 'react'
import Starbucks from './Starbucks'
import FastFood from './FastFood'
import TotalSaved from './TotalSaved'
import services from '../services/services'

class Main extends React.Component {

    constructor(props){
        super(props)
    }
    state={
        starBucks: {
            id: 0,
            starBucksDollars: 0,
            starBucksDays: 0
        },
        fastFoodDollars: 0,
        fastFoodDays: 0,
        totalFastFoodStarbucks: 0
    }

    componentWillMount(){
        services.receiveAllServices()
            .then(results => {
                let starBucks = this.state.starBucks;
                starBucks.id = results[0].id;
                starBucks.starBucksDays = results[0].days_without_item;
                starBucks.starBucksDollars = results[0].money_saved_without_item;

                this.setState({
                    starBucks:starBucks
                })

                console.log(results)
            })
    }

    starbucksDollarSavedClickHandler = (e) => {
        let starBucks = {...this.state.starBucks}

        if(e.currentTarget.innerText === "+"){
            starBucks.starBucksDollars += 6
            starBucks.starBucksDays += 1
            this.setState({
                starBucks:starBucks
            },()=>{
                this.onChangeOfStarbucksDollarsFastFoodDollarsHandler();
                services.moneyStarbucksServices(starBucks.starBucksDollars, starBucks.starBucksDays)
            })
        }else{
            starBucks.starBucksDollars -= 6
            starBucks.starBucksDays -= 1
            this.setState({
                starBucksDollars:starBucks
            },()=>{
                this.onChangeOfStarbucksDollarsFastFoodDollarsHandler();
                services.moneyStarbucksServices(starBucks.starBucksDollars, starBucks.starBucksDays)
            })
        }
    }

    fastFoodDollarSavedClickHandler = (e) => {
        let fastFoodDollars = this.state.fastFoodDollars;
        let fastFoodDays = this.state.fastFoodDays;
        if(e.currentTarget.innerText === "+"){
            fastFoodDollars += 30
            fastFoodDays += 1
            this.setState({
                fastFoodDollars:fastFoodDollars,
                fastFoodDays:fastFoodDays
            },()=>{
                this.onChangeOfStarbucksDollarsFastFoodDollarsHandler();
                services.moneyFastFoodServices(fastFoodDollars, fastFoodDays)
            })
        }else{
            fastFoodDollars -= 30
            fastFoodDays -= 1
            this.setState({
                fastFoodDollars:fastFoodDollars,
                fastFoodDays:fastFoodDays
            },()=>{
                this.onChangeOfStarbucksDollarsFastFoodDollarsHandler();
                services.moneyFastFoodServices(fastFoodDollars, fastFoodDays)
            })
        }

    }

    onChangeOfStarbucksDollarsFastFoodDollarsHandler = () => {
        let starBucksDollars = this.state.starBucksDollars;
        let fastFoodDollars = this.state.fastFoodDollars;


        let totalFastFoodStarbucks = starBucksDollars + fastFoodDollars;

        this.setState({
            totalFastFoodStarbucks:totalFastFoodStarbucks
        })


    }

    render() {


        return (
            <div>
                <div>
                    <TotalSaved
                        totalFastFoodStarbucks = {this.state.totalFastFoodStarbucks}
                    />
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div>
                        <Starbucks
                            starBucks={this.state.starBucks}
                            starbucksClick={this.starbucksDollarSavedClickHandler}
                        />
                    </div>
                    <div>
                        <FastFood
                            fastFoodDollars={this.state.fastFoodDollars}
                            fastFoodDays={this.state.fastFoodDays}
                            fastFoodClick={this.fastFoodDollarSavedClickHandler}
                        />
                    </div>

                </div>
            </div>
        )
    }
}

export default Main;
