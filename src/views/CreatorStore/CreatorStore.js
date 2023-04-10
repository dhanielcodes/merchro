import Nav from '@/components/LandingPageNav/index.vue'
import Footer from '@/components/Footer/index.vue'
export default {
    components: { Nav, Footer },
    data() {
        return {
            openFilter: false
        }
    },
    created() {
        if (window.innerWidth >= 590) {
            this.openFilter = true
        }
    },
}