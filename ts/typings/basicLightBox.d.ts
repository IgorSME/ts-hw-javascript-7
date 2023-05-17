declare namespace basicLightbox {
  interface BasicLightBox {
    show: () => void;
    close: () => void;
  }

  function create(content: string, options?: any): BasicLightBox;

  const basicLightbox: {
    create: typeof create;
  };

  
}
export = basicLightbox;
// declare namespace basicLightboxWrapper {
//   interface BasicLightBox {
//     show: () => void;
//     close: () => void;
//   }

//   function create(content: string, options?: any): BasicLightBox;

//   const basicLightbox: {
//     create: typeof create;
//   };
// }

// export = basicLightboxWrapper;
