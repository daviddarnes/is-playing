class IsPlaying extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "is-playing", IsPlaying);
    }
  }

  connectedCallback() {
    this.players.forEach((player) => {
      player.addEventListener("playing", (event) => this.playing(event.target));
      player.addEventListener("pause", (event) => this.stopped(event.target));
      player.addEventListener("ended", (event) => this.stopped(event.target));
    });
  }

  playing(player) {
    player.setAttribute("playing", "");
    this.setAttribute("playing", player.getAttribute("id") || "");
  }

  stopped(player) {
    player.removeAttribute("playing");
    this.removeAttribute("playing");
  }

  get players() {
    return this.querySelectorAll("audio, video");
  }
}

IsPlaying.register();
