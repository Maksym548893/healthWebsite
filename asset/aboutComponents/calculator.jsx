function Calculator() {
    const numik = [
        {id: 1, chyslo: '1'},
        {id: 2, chyslo: '2'},
        {id: 3, chyslo: '3'},
        {id: 4, chyslo: '4'},
        {id: 5, chyslo: '5'},
        {id: 6, chyslo: '6'},
        {id: 7, chyslo: '7'},
        {id: 8, chyslo: '8'},
        {id: 9, chyslo: '9'},
    ]

    const dia = (a, b, operator) => {
        switch(operator) {
            case '+':
            return a + b;
            case '-': 
            return a - b
        }
    }
}

export default Calculator