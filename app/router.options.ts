import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      // To prevent default behaviour of browser # scrolling
      if (typeof to.hash == "string") {
        to.hash = to.hash.replace("Link", "");
      }

      // Loading of main content takes some time
      const milliSeconds = from.path=='/'? 10: 500;
      return new Promise((resolve) => {
        setTimeout(() => {          
          resolve({
            el: to.hash,
            top: 70, // Approximate height of navbar
            behavior: "smooth",
          });
        }, milliSeconds);
      });
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0 });
        }, 250);
      });
    }
  },
};
