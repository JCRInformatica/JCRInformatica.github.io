const $ = (selector) => document.querySelectorAll(selector);

const navbar = document.querySelector('.site-header');

const navigate = (e) => {
    e.preventDefault();
    const fixbarOffset = navbar.getBoundingClientRect().height;
    const target = e.target.href ? e.target.attributes.href.nodeValue.toString() : null;
    
    if (target) {
        const sectionTarget = $(target)[0] || document.querySelector(`a[name='${target.substr(1)}']`);
        
        if (sectionTarget) {
            const scrollTarget = sectionTarget.offsetTop - fixbarOffset;
            scrollToY(scrollTarget, 500, 'easeInOutQuint', () => false);
        }
    }
};

[...document.querySelectorAll('a[href^="#"]')].forEach((link) => {
    link.addEventListener('click', navigate);
});

const supportPageOffset = window.pageXOffset !== undefined;
const isCSS1Compat = document.compatMode === 'CSS1Compat';

const scrollSpy = () => {
    const links = [...document.querySelectorAll('.site-nav .trigger .page-link')];
    let selectedHash = '#topo';

    links.forEach((link) => {
        const thisSection = $(link.hash)[0];
        const bounds = thisSection.getBoundingClientRect();
        if (bounds.top <= window.innerHeight * 0.3 && bounds.bottom > 0) {
            selectedHash = link.hash;
        }
    });

    links.forEach((link) => {
        link.classList.toggle('active', link.hash === selectedHash);
    });
};

const onScroll = () => {
    const y = supportPageOffset ? window.pageYOffset : (isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop);
    scrollSpy();
};

window.addEventListener('scroll', onScroll);
