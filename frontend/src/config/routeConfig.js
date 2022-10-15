export const routeConfig = {
    HOME: {
        url: '/'
    },
    SERVICES: {
        url: '/services/:serviceTitle',
        realUrl : serviceTitle => `/services/${serviceTitle}`
    },
    CONTACT: {
        url: '/contact'
    },
    ABOUT: {
        url: '/about'
    },

}