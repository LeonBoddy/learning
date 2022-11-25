import Interface from './Interface.js'
import Balance from './Balance.js'
export default {
    components:{ Interface, Balance },
    template: `
        <h1>Bank Account App</h1>
        <balance v-modal="balance" :balance="balance"></balance> 
        <interface @deposit="deposit" @withdraw="withdraw"></interface>   
    `,
    data() {
        return {
            balance: 0,
        }
    },
    methods: {
        deposit(amount) {
            this.balance += +amount;
        },
        withdraw(amount){
            this.balance -= +amount;
        }
    }

}
