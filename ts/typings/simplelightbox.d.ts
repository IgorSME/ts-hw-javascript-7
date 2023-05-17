declare module 'simplelightbox' {
  class SimpleLightbox {
    constructor(selector: string, options?: SimpleLightboxOptions);
  }

  interface SimpleLightboxOptions {
    captionsData: string,
  captionDelay: number
  }

  export default SimpleLightbox;
}
