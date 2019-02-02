const API = 'http://localhost:8080'

export default {

    receiveAllServices(){
        return fetch(API + '/items')
            .then(response => response.json())
    },

    moneyStarbucksServices(money,days){
        console.log(money,days)

        let data = {
            money_saved_without_item: money,
            days_without_item: days,
            item: "Starbucks",
            id: 1
        }
        return fetch(API + '/items',{
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(data)
            })
            .then(response => response.json())
    },


    moneyFastFoodServices(money,days){
        // let money = 6;
        // let days = 1;
    }
}