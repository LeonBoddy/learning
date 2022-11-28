export default {
    template: `
                <div class="flex gap-2 mb-2">
                <button 
                    @click="currentTag = tag"
                    v-for="tag in tags" 
                    class="border rounded px-1 py-px text-xs"
                    :class="{
                        'tag-on': tag === currentTag
                    }"
                >
                    {{ tag }}
                </button>
            </div>`

    ,
    props: {
      initialTags: Array
    },
    computed: {

        tags() {
            return ['all' , ...new Set(this.initialTags)];
        }
    }
}
