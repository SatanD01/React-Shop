export function reducer(state, {type, payload}) {
    switch (type) {
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id)
            }
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload.id)
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    count: 1
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            count: orderItem.count + 1
                        }
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.name
            }
        }
        case 'ADD_COUNT':
            return {
                ...state,
                order: state.order.map(el => {
                    if (el.id === payload.id) {
                        const newCount = el.count + 1
                        return {
                            ...el,
                            count: newCount
                        }
                    } else {
                        return el
                    }
                }),
            }
        case 'REMOVE_COUNT':
            return {
                ...state,
                order: state.order.map(el => {
                    if (el.id === payload.id) {
                        const newCount = el.count - 1
                        return {
                            ...el,
                            count: newCount >= 0 ? newCount : 0,
                        }
                    } else {
                        return el
                    }
                }),
            }
        case 'TOGGLE_BASKET':
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            }
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        default:
            return state;
    }
}