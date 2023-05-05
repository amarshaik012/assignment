import operatorsStore from './operators.store.json';

export const getOperator = ( operatorId ) => {
    const operator = operatorsStore.find( 
        operator => operator.id === operatorId
    );

    return operator;
};