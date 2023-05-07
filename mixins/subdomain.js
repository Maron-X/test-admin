export default {
    computed: {
        subdomain() {
            return this.$store.getters['subdomainGetter']
        }
    }
}