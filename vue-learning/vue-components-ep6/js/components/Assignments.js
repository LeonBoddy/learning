import AssignmentsList from './AssignmentsList.js';
export default {
    components: { AssignmentsList },
    template: `
    <AssignmentsList :assigments="inProgressAssignments" title="In Progress Assignments"></AssignmentsList>
    `,
    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read Book', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },
            ]
        }
    },

    computed: {
        inProgressAssignments()
        {
            return this.assignments.filter(assignment => !assignment.complete);
        },
        completedAssignments()
        {
            return this.assignments.filter(assignment => assignment.complete);
        }
    }
}