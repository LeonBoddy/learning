export default {
    template: `
        <button :class="{
            'test': true
        }" :disabled="processing">
            <slot />
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary'
        }

    },

    data() {
        return {
            processing: false,
        }
    }
}
