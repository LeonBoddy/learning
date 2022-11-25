export default {
    template: `
        <input type="text" v-model="userInput" placeholder="Enter Amount Here">
        <div class="buttons">
            <button id="deposit" v-on:click="deposit()">Deposit Amount</button>
            <button id="withdraw" v-on:click="withdraw()">Withdraw Amount</button>
        </div>
    `,
    data() {
        return {
            userInput: '',
        }
    },
    methods: {
        deposit() {
            let inputNumber = parseInt(this.userInput);
            if (inputNumber && typeof inputNumber === 'number') {
                this.$emit('deposit', this.userInput);
            }
            else {
                alert("Please enter an Number")
            }
        },
        withdraw() {
            let inputNumber = parseInt(this.userInput);
            if (inputNumber && typeof inputNumber === 'number') {
                this.$emit('withdraw', this.userInput);
            }
            else {
                alert("Please enter an Number")
            }
        },
    }
}
