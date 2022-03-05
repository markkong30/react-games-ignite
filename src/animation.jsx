export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: { duration: 1 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 1 }
    },

}

export const fadeInSearch = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: { duration: 2 }
    },

}

export const popUp = {
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.75 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.75 }
    },
    hover: {
        scale: 1.05,
        transition: { duration: 0.2 }
    },
    tap: {
        scale: 0.95,
        transition: { duration: 0.2 }
    }
}