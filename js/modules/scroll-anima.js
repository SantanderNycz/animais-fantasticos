export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this);
  }

  // pega a distancia de cada item em relacao ao topo do site
  getDistance() {
    this.distance = [this.sections].map((section) => {
      const offset = section.offsetTop();
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // verifica a distancia em cada objeto em relacao ao scroll do site
  checkDistance() {
    this.distance.forEach((section) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.section.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.animaScroll);
    }
    return this;
  }

  // remove o event de scroll
  stop() {
    window.removeEventListener("scroll", this.animaScroll);
  }
}
