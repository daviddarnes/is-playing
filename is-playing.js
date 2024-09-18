class IsPlaying extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "is-playing", IsPlaying);
    }
  }

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  connectedCallback() {
    const events = ["playing", "pause", "ended"];

    this.players.forEach((player) => {
      events.forEach((type) => player.addEventListener(type, this.setState));
    });
  }

  setState = ({ type, target }) => {
    if (type === "playing") {
      this.current = target;

      this.internals.states.add("playing");
      if (target.id && this.players.length > 1) {
        this.setAttribute("playing", target.id);
      }
    } else if (this.current === target) {
      this.internals.states.delete("playing");
      this.removeAttribute("playing");
    }
  };

  get players() {
    return this.querySelectorAll("audio, video");
  }
}

IsPlaying.register();
