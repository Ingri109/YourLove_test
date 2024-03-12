import { useEffect, useState, useCallback } from "react";
import { STATUSES } from "./constants/index";
import { getItems, addItem } from './utils/indexdb';

export const useBooleanToggle = () => {
    const [status, setStatus] = useState(false);

    const handlesStatusChange = () => {
        console.log('switch state')
        setStatus((currentState) => !currentState)
    }

    return {
        status,
        handlesStatusChange
    }

}


export const useDate = () => {
    const [state, setState] = useState({
        transactions: [],
        error: '',
        status: STATUSES.IDLE, //Success, error, pending
    });

    useEffect(() => {
        setState({
            ...state,
            status: STATUSES.PENDING
        })
        getItems().then((transactions) => {
            setState({
                ...state,
                transactions,
                status: STATUSES.SUCCESS
            })
        }).catch((e) => {
            setState({
                ...state,
                transactions: [],
                status: STATUSES.ERROR,
                error: e
            })
        })
    }, [])

    const pushTransaction = useCallback((data) => {
        const transaction = {
            ...data,
            id: Date.now(),
            value: +data.value,

        }

        setState((state) => ({
            ...state,
            transactions: [transaction, ...state.transactions]
        }));

        addItem(transaction);
    }, [setState])

    const onDelete = useCallback((id) => {
        setState((state) => ({
            ...state,
            transactions: state.transactions.filter((item) => item.id !== id)
        })
        )
    }, [setState]);

    const onStarClick = useCallback((id) => {
        setState((state) => ({
            ...state,
            transactions: state.transactions.map((item) => item.id !== id ? item : {
                ...item,
                isStarred: !item.isStarred
            })
        })
        )
    }, [setState])

    return {
        ...state,
        pushTransaction,
        onDelete,
        onStarClick
    }
}