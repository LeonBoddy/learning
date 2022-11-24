export default {
    components: {},
    template: `
        <section v-show="Assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul>
                <li
                    v-for="assignment in Assignments"
                    :key="assignment.id"
                >
                    <label>{{ assignment.name }}</label>
                    <input type="checkbox" v-model="assignment.complete">
                </li>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String
    }
}
