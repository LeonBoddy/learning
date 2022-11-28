import Assignment from './Assignment.js'
export default {
    components: { Assignment },
    template: `
         <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>            
            </h2>

            <assignments-tags :initialTags="assignments.map(a => a.tag)"></assignments-tags>

            <ul class="border border-grey-600 divide-y">
                <assignment 
                v-for="assignment in filteredAssignments"
                :key="assignment.id"
                :assignment="assignment"
                ></assignment>
            </ul>
        </section>
    `,
    data() {
        return {
            currentTag: ''
        }
    },
    props: {
        assignments: Array,
        title: String
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all'){
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },

    }
}
