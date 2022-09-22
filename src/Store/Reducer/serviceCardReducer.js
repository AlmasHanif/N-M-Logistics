const INITIAL_STATE = {
    cards: [
        {
            id: 1,
            name: 'By Air',
            Pic : '1.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
            animateCard_1: 'fade-down-right',
            animateCard_2: 'fade-down'
        },
        {
            id: 2,
            name: 'By Ship',
            Pic : '2.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
            animateCard_1: 'zoom-in',
            animateCard_2: 'fade-up'
        },
        {
            id: 3,
            name: 'man t-shirt summer season',
            Pic : '3.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
            animateCard_1: 'fade-down-left',
            animateCard_2: 'zoom-in-down'
        },
        {
            id: 4,
            name: 'man t-shirt summer season',
            Pic : '4.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
            animateCard_1: 'fade-up-right',
            animateCard_2: 'zoom-in-up'
        },
        {
            id: 5,
            name: 'man t-shirt summer season',
            Pic: '5.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
            animateCard_1: 'zoom-in',
            animateCard_2: 'fade-down'
        },
        {
            id: 6,
            name: 'man t-shirt summer season',
            Pic : '6.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
            animateCard_1: 'fade-up-left',
            animateCard_2: 'fade-up'
        },

    ],
    card : {},


}

const cardsReducer = (state = INITIAL_STATE, action) => {


    switch(action.type){
        case "PRODUCT": 
        return {...state, card: state.cards.find(card => card.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export {
    cardsReducer,

}