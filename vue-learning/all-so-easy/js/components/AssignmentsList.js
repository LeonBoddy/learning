import Assignment from './Assignment.js'
export default {
    components: { Assignment },
    template: `
         <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul class="border border-grey-600 divide-y">
                <assignment 
                v-for="assignment in assignments"
                :key="assignment.id"
                :assignment="assignment"
                ></assignment>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String
    }
}
