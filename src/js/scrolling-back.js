/**
 * Fancy Scrolling Effect
 */
window.addEventListener("scroll", scrollWindowHandler, { passive: true });

const watchedElemens = [
  {
    name: "heading",
    elms: [
      {
        name: "heading__title-over",
        dir: "vertical",
        type: "text",
        mobile: false
      },
      {
        name: "heading__title-under",
        dir: "vertical",
        type: "text",
        mobile: false
      },
      {
        name: "heading__content",
        dir: "vertical",
        type: "text",
        mobile: false
      },
      {
        name: "about__rotating",
        dir: "rotating",
        type: "image",
        mobile: true
      }
    ]
  },
  {
    name: "about",
    elms: [
      {
        name: "about__image-over-bg",
        dir: "horizontal",
        type: "background",
        mobile: false
      },
      {
        name: "about__image-under-bg",
        dir: "vertical",
        type: "background",
        mobile: false
      },
      {
        name: "about__title",
        dir: "vertical",
        type: "text",
        mobile: false
      },
      {
        name: "about__title-under",
        dir: "vertical",
        type: "text",
        mobile: false
      },
      {
        name: "about__content",
        dir: "vertical",
        type: "text",
        mobile: false
      },
      {
        name: "about__content-under",
        dir: "vertical",
        type: "text",
        mobile: false
      }
    ]
  },
  {
    name: "intro",
    elms: [
      {
        name: "intro__title",
        dir: "vertical",
        type: "text",
        mobile: false
      },
      {
        name: "intro__content",
        dir: "vertical",
        type: "text",
        mobile: false
      },
      {
        name: "image__image-bg",
        dir: "vertical",
        type: "background",
        mobile: false
      }
    ]
  },
  {
    name: "cards",
    elms: [
      {
        name: "cards__title",
        dir: "horizontal",
        type: "text",
        mobile: true
      }
    ]
  }
];

function scrollWindowHandler() {
  const topScroll = window.scrollY;

  watchedElemens.forEach(section => {
    const topDistance = -document
      .getElementById(section.name)
      .getBoundingClientRect().top;
    const availHeight = window.screen.availHeight + 200;

    function isMobile(elm, additional) {
      if (
        elm.mobile ||
        window.matchMedia("only screen and (min-width: 1200px)").matches
      ) {
        return topScroll - additional;
      } else return 0;
    }

    if (topDistance <= availHeight) {
      // check if element is in viewport
      const lastScroll = document.getElementById(section.name).offsetTop;
      section.elms.forEach(elm => {
        const domElm = document.getElementById(elm.name);
        const fn = elm.dir + elm.type[0].toUpperCase() + elm.type.slice(1);

        switch (fn) {
          case "verticalText":
            verticalText(domElm, isMobile(elm, 0));
            break;
          case "horizontalText":
            horizontalText(domElm, isMobile(elm, lastScroll));
            break;
          case "rotatingImage":
            rotatingImage(domElm, isMobile(elm, lastScroll));
            break;
          case "verticalBackground":
            verticalBackground(domElm, isMobile(elm, lastScroll));
            break;
          case "horizontalBackground":
            horizontalBackground(domElm, isMobile(elm, lastScroll));
          default:
            break;
        }
      });
    }
  });
}
scrollWindowHandler(); // execute this for certainity

function verticalText(elm, top) {
  elm.style.transform = `translate3d(0, -${top / 5}px, 0)`;
}

function horizontalText(elm, top) {
  elm.style.transform = `translate3d(0, -${top / 5}px, 0)`;
}

function rotatingImage(elm, top) {
  elm.style.transform = `rotate(${top / 5}deg)`;
}

function verticalBackground(elm, top) {
  elm.style.transform = `translateY(-${top / 10}px`;
}

function horizontalBackground(elm, top) {
  elm.style.transform = `translateX(-${top / 20}px`;
}
