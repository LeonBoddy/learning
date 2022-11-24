export default {
    template: `
            <form @submit.prevent="add">            
                <div class="border border-white text-black">  
                    <input type="text" v-model="newAssignment" class="p-2" placeholder="New assignment...">
                    <button type="submit" class="p-2 border-left">OK</button>
                </div>
            </form>
    `,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = ''
        }
    }
}
