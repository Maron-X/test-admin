

export const state = () => ({
    user: null,
    subdomain: null,
    pageLoaded: false,
    // index
    name: "",
    job: " ",
    CVDownloadLink: "",
    //  sidebar
    aboutMe: ``,
    aim: "",
    linkedIn: "",
    facebook: "",
    instagram: "",
    dribbble: "",
    behance: "",
    upwork: "",
    freelancer: "",
    phone: "",
    email: "",
    location: "",
    birthday: "",
    //  contact
    messanger: "",
    whatsapp: "",
    telegram: "",
    //  services
    services: [],


    avatar: "",
    logo: "",
    clientsLogos: [
    ],


    //  works
    works: [

    ],



    // resume

    skillColors: [

    ],

    education: [

    ],

    experience: [

    ],

    skills: [

    ],

    knowleges: [

    ],


})

export const getters = {
    pageLoadedGetter(state) { return state.pageLoaded },
    avatarGetter(state) { return state.avatar },
    nameGetter(state) { return state.name },
    logoGetter(state) { return state.logo },
    jobGetter(state) { return state.job },
    worksGetter(state) { return state.works },
    servicesGetter(state) { return state.services },
    clientsLogosGetter(state) { return state.clientsLogos },
    aboutMeGetter(state) { return state.aboutMe },
    aimGetter(state) { return state.aim },
    linkedInGetter(state) { return state.linkedIn },
    facebookGetter(state) { return state.facebook },
    instagramGetter(state) { return state.instagram },
    dribbbleGetter(state) { return state.dribbble },
    behanceGetter(state) { return state.behance },
    upworkGetter(state) { return state.upwork },
    freelancerGetter(state) { return state.freelancer },
    phoneGetter(state) { return state.phone },
    emailGetter(state) { return state.email },
    locationGetter(state) { return state.location },
    birthdayGetter(state) { return state.birthday },


    skillColorsGetter(state) { return state.skillColors },
    educationGetter(state) { return state.education },
    experienceGetter(state) { return state.experience },
    skillsGetter(state) { return state.skills },
    knowlegesGetter(state) { return state.knowleges },
    CVGetter(state) { return state.CVDownloadLink },
    contactTextGetter(state) { return state.contactText },


    messangerGetter(state) { return state.messanger },
    whatsappGetter(state) { return state.whatsapp },
    telegramGetter(state) { return state.telegram },
    subdomainGetter(state) { return state.subdomain },



}

export const actions = {
    login(state, auth) {
        console.log(auth)
        return this.$fire.auth.signInWithEmailAndPassword(auth.email, auth.password)
        // .catch(error => {
        //     console.log(error)
        //     return error
        // })
    },
    onAuthStateChangedAction: ({ commit }, { authUser, claims }) => {
        if (!authUser) {
            commit('SET_USER', null)
            // redirect to login
        } else {
            const { uid, email } = authUser

            commit('SET_USER', {
                uid, email
            })
            // $nuxt.$router.push('/dashboard')
        }
    },

    async nuxtServerInit({ commit, dispatch }, { req }) {


        /** OLD */
        // const docsRef = await this.$fire.firestore.collection("data").get();
        // const storedData = docsRef.docs.map((doc) => ({
        //     ...doc.data(),
        //     id: doc.id,
        // }));
        // dispatch('updateData', storedData[0]);

    },
    async loadSubdomainData({ commit, dispatch }) {
        let email = this.$fire.auth.currentUser.email
        
        // --------------------------------------------------------------------------------
        const snapshot = await this.$fire.firestore.collection('clients').where("email", "==", email).get()
        const subdomain = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))[0].id
        console.log('subdomain snap: ', subdomain)

        // --------------------------------------------------------------------------------


        console.log('subdomain: ', subdomain)
        dispatch('updateSubdomain', subdomain)


        let outOfSubscribtionRef = await this.$fire.firestore.collection('clients').doc(subdomain).get();
        console.log("outOfSubscribtionRef.data().expire_date: ", outOfSubscribtionRef.data().expire_date);
        //     compare in milliseconds
        let outOfDate = outOfSubscribtionRef.data().expire_date * 1000 < new Date().getTime()

        console.log("outOfDate: ", outOfDate)
        if (outOfDate) {
            console.log('OUT of subscription')
        } else {

            dispatch("updateData", {});
        }

    },

    async fetchFromCollection({ state, dispatch, getters }, config) {
        console.log(config)
        const subdomain = getters['subdomainGetter']
        const docsRef = await this.$fire.firestore.collection('clients').doc(subdomain).collection(config.name).get();
        const fetchedData = docsRef.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        console.log(fetchedData)
        if (!config.all) {
            dispatch(config.setter, fetchedData);
            return
        }
        dispatch(config.setter, fetchedData[0]);
    },
    async updateFirebaseArray({ state, getters }, { collection, array }) {
        let storedArray = array.filter(x => x.id != null)
        let newArray = array.filter(x => x.id == undefined)

        console.log("newArray: ", newArray)
        console.log("storedArray: ", storedArray)

        console.log("updateFirebase: collection", collection)
        console.log("updateFirebase: array", array)


        var collectionRef = await this.$fire.firestore
            .collection("clients")
            .doc(getters['subdomainGetter'])
            .collection(collection)

        for (let index = 0; index < newArray.length; index++) {
            // const newElement = { ...newArray[0] }
            const newElement = { ...newArray[index] };
            const elementId = `${collection[0]}${collection[1]}${Math.floor(Date.now() / 1000)}`
            newElement.id = elementId
            const addedElement = await collectionRef.doc(elementId).set({ ...newElement })
        }

        for (let index = 0; index < storedArray.length; index++) {
            const updatedElement = { ...storedArray[index] };
            console.log('update Array element: ', updatedElement)
            collectionRef.doc(updatedElement.id).update({ ...updatedElement })
        }

    },

    updateFirebase({ dispatch, getters }, module) {
        console.log("module update: ", module)
        const subdomain = getters['subdomainGetter']

        switch (module) {
            case "dashboard":
                const dataRef = this.$fire.firestore.collection('clients').doc(subdomain).collection('data').doc('data');
                dataRef.update(
                    {
                        avatar: getters['avatarGetter'],
                        name: getters['nameGetter'],
                        job: getters['jobGetter'],
                        phone: getters['phoneGetter'],
                        email: getters['emailGetter'],
                        location: getters['locationGetter'],
                        birthday: getters['birthdayGetter'],
                    }
                ).then(() => {

                    this.$toast.info("Personal Info Updated Successfully!");
                })

                break;

            case "about":
                const aboutRef = this.$fire.firestore.collection('clients').doc(subdomain).collection('data').doc('data');
                aboutRef.update(
                    {
                        logo: getters['logoGetter'],
                        aboutMe: getters['aboutMeGetter'],
                        aim: getters['aimGetter'],
                        CVDownloadLink: getters['CVGetter'],
                    }
                ).then(() => {

                    this.$toast.info("About Me Updated Successfully!");
                })

                break;
            case "contact":
                const contactRef = this.$fire.firestore.collection('clients').doc(subdomain).collection('data').doc('data');
                contactRef.update(
                    {
                        facebook: getters['facebookGetter'],
                        instagram: getters['instagramGetter'],
                        dribbble: getters['dribbbleGetter'],
                        behance: getters['behanceGetter'],
                        upwork: getters['upworkGetter'],
                        freelancer: getters['freelancerGetter'],
                        messanger: getters['messangerGetter'],
                        whatsapp: getters['whatsappGetter'],
                        telegram: getters['telegramGetter'],
                    }
                ).then(() => {

                    this.$toast.info("Contact Links Updated Successfully!");
                })
                break;

            case "services":
                let servicesArray = getters['servicesGetter']
                dispatch('updateFirebaseArray', { collection: 'services', array: servicesArray })
                this.$toast.info("Services Updated Successfully!")
                break;

            case "education-experience-skills-knowleges":

                let educationArray = getters['educationGetter']
                dispatch('updateFirebaseArray', { collection: 'education', array: educationArray })

                let experienceArray = getters['experienceGetter']
                dispatch('updateFirebaseArray', { collection: 'experience', array: experienceArray })

                let skillsArray = getters['skillsGetter']
                dispatch('updateFirebaseArray', { collection: 'skills', array: skillsArray })

                let knowlegesArray = getters['knowlegesGetter']
                dispatch('updateFirebaseArray', { collection: 'knowleges', array: knowlegesArray })

                this.$toast.info("Resume Updated Successfully!")

                break;

            case "works":
                let worksArray = getters['worksGetter']
                dispatch('updateFirebaseArray', { collection: 'works', array: worksArray })
                this.$toast.info("Portfolio Updated Successfully!")

                break;
        }
    },


    updateServices({ commit }, services) {
        commit('servicesSetter', services)
    },

    updateLogos({ commit }, logos) {
        commit('clientsLogosSetter', logos)
    },

    updateEducation({ commit }, education) {
        commit('educationSetter', education)
    },

    updateExperience({ commit }, experience) {
        commit('experienceSetter', experience)
    },

    updateSkills({ commit }, skills) {
        commit('skillsSetter', skills)
    },

    updateKnowleges({ commit }, knowleges) {
        commit('knowlegesSetter', knowleges)
    },

    updateSkillColors({ commit }, colors) {
        commit('skillColorsSetter', colors)
    },

    updateWorks({ commit }, works) {
        commit('worksSetter', works)
    },

    updatePageLoaded({ commit }, value) {
        commit('pageLoadedSetter', value)
    },
    updateSubdomain({ commit }, value) {
        commit('subdomainSetter', value)
    },

    async updateData({ commit, getters }, { }) {
        let subdomain = getters['subdomainGetter']

        const dataRef = await this.$fire.firestore.collection('clients').doc(subdomain).collection("data").get()
        const newData = await dataRef.docs[0].data()

        if (!newData) return
        commit('nameSetter', newData.name)
        commit('aboutMeSetter', newData.aboutMe)
        commit('telegramSetter', newData.telegram)
        commit('linkedInSetter', newData.linkedIn)
        commit('jobSetter', newData.job)
        commit('behanceSetter', newData.behance)
        commit('upworkSetter', newData.upwork)
        commit('freelancerSetter', newData.freelancer)
        commit('aimSetter', newData.aim)
        commit('CVSetter', newData.CVDownloadLink)
        commit('locationSetter', newData.location)
        commit('facebookSetter', newData.facebook)
        commit('instagramSetter', newData.instagram)
        commit('birthdaySetter', newData.birthday)
        commit('whatsappSetter', newData.whatsapp)
        commit('dribbbleSetter', newData.dribbble)
        commit('emailSetter', newData.email)
        commit('messangerSetter', newData.messanger)
        commit('phoneSetter', newData.phone)
        commit('avatarSetter', newData.avatar)
        commit('logoSetter', newData.logo)
    },



}

export const mutations = {
    SET_USER(state, val) { state.user = val },

    pageLoadedSetter(state, val) { state.pageLoaded = val },
    servicesSetter(state, val) { state.services = val },
    clientsLogosSetter(state, val) { state.clientsLogos = val },
    worksSetter(state, val) { state.works = val },
    skillColorsSetter(state, val) { state.skillColors = val },
    knowlegesSetter(state, val) { state.knowleges = val },
    skillsSetter(state, val) { state.skills = val },

    nameSetter(state, val) { state.name = val },
    avatarSetter(state, val) { state.avatar = val },
    logoSetter(state, val) { state.logo = val },
    jobSetter(state, val) { state.job = val },
    aboutMeSetter(state, val) { state.aboutMe = val },
    aimSetter(state, val) { state.aim = val },
    linkedInSetter(state, val) { state.linkedIn = val },
    facebookSetter(state, val) { state.facebook = val },
    instagramSetter(state, val) { state.instagram = val },
    dribbbleSetter(state, val) { state.dribbble = val },
    behanceSetter(state, val) { state.behance = val },
    upworkSetter(state, val) { state.upwork = val },
    freelancerSetter(state, val) { state.freelancer = val },
    phoneSetter(state, val) { state.phone = val },
    emailSetter(state, val) { state.email = val },
    locationSetter(state, val) { state.location = val },
    birthdaySetter(state, val) { state.birthday = val },
    educationSetter(state, val) { state.education = val },
    experienceSetter(state, val) { state.experience = val },
    CVSetter(state, val) { state.CVDownloadLink = val },
    contactTextSetter(state, val) { state.contactText = val },
    messangerSetter(state, val) { state.messanger = val },
    whatsappSetter(state, val) { state.whatsapp = val },
    telegramSetter(state, val) { state.telegram = val },
    subdomainSetter(state, val) { state.subdomain = val },

}