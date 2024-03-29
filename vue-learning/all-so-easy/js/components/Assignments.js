import AssignmentsList from './AssignmentsList.js';
import AssignmentCreate from './AssignmentCreate.js'
export default {
    components: { AssignmentsList, AssignmentCreate },
    template: `
        <section  class="space-y-6">
            <assignments-list :assignments="filters.inProgress" title="In Progress Assignments"></assignments-list>
            <assignments-list :assignments="filters.completed" title="Completed"></assignments-list>
            
            <assignment-create @add="add"></assignment-create>

        </section>
    `,
    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, id: 1, tag: 'math' },
                { name: 'Read Book', complete: false, id: 2, tag: 'english' },
                { name: 'Turn in homework', complete: false, id: 3 , tag: 'science'},
            ],
            newAssignment: ''
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            })
        }
    }
}
