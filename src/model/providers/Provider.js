export default class Provider {
  constructor(url, offset = 0) {
    this.url = url;
    this.offset = offset;
  }

  get icon() {
    return `${this.url}favicon.ico`;
  }

  // eslint-disable-next-line no-unused-vars
  episodeUrl(anime, episode) {
    return this.url;
  }

  static encode(s) {
    return encodeURIComponent(
      s
        .toLowerCase()
        .replace(/[^-a-z0-9]+/g, '-')
        .replace(/-{2,}/, '-')
    );
  }
}
