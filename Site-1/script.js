gsap.registerPlujin(ScrollTrigger);
gsap.registerPlujin(ScrollToPlugin);
gsap.registerPlujin(SplitText);
gsap.registerPlujin(ScrollSmoother);

console.clear();

select = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);

const stages = select('.stage');
const slides = selectAll('.slide');
const links = selectAll('.slide-scroll_link');
const titles = selectAll('.col-content_title');
const introTitle = new SplitText('.intro-title', {type: "lines", linesClass:'intro-line'});