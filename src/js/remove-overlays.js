/**
 * Fix image entrace
 */

const arrayAllImagesIDs = [
    'heading__image-overlay',
    'about__image-under-overlay',
    'about__image-over-overlay',
]

function handle(e) {
    e.target.removeEventListener('animationend', handle)
    e.target.remove()
}

arrayAllImagesIDs
    .map((imageID) => document.getElementById(imageID))
    .forEach((elm) => {
        elm.addEventListener('animationend', handle)
    })
