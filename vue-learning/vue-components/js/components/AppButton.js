export default {
    template: `
        <button
             :class="{
                'border rounded px-5 py-2 :disabled:cursor-not-allowed': true,
                'btn-blue': type === 'primary',
                'btn-purple': type === 'secondary',
                'btn-grey': type === 'muted',
                'is-loading': processing
            }" 
            :disabled="processing"
        >
            <slot />
        </button>
    `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false,
        }
    },

}
