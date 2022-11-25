export default {
    template: `
    <h1>Bank Account App</h1>
    <h2>Current balance: {{ balance }}</h2>
    <h2>User Input: {{ userInput }}</h2>
    <input type="text" v-model="userInput" placeholder="Enter Amount Here">
    <div class="buttons">
        <button id="deposit" v-on:click="deposit()">Deposit Amount</button>
        <button id="withdraw" v-on:click="withdraw()">Withdraw Amount</button>
    </div>
    
    `,
    data() {
        return {
            balance: 0,
            userInput: '',
        }
    },
    methods: {
        deposit() {
            let inputNumber = parseInt(this.userInput);
            if (inputNumber && typeof inputNumber === 'number') {
                this.balance += inputNumber;
            }
            else {
                alert("Please enter an Number")
            }
        },
        withdraw() {
            let inputNumber = parseInt(this.userInput);
            if (inputNumber && typeof inputNumber === 'number') {
                this.balance -= inputNumber;
            }
            else {
                alert("Please enter an Number")
            }
        },
    }
}
