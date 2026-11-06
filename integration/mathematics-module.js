/**
 * Education Access E-Learning Academy
 * Form One Mathematics Integration Module
 * Module ID: EA-F1-MATH-2023
 * Version: 0.1.0
 */

(function (window, document) {
  "use strict";

  const MathematicsModule = {
    id: "EA-F1-MATH-2023",
    name: "Form One Mathematics",
    version: "0.1.0",
    basePath: "./form-one-mathematics/",

    init: function () {
      console.info(
        "Education Access Academy: Form One Mathematics module loaded."
      );

      this.registerNavigation();
    },

    open: function () {
      window.location.href =
        this.basePath + "index.html";
    },

    registerNavigation: function () {
      document.addEventListener("click", function (event) {
        const link = event.target.closest(
          '[data-academy-module="mathematics"]'
        );

        if (!link) return;

        event.preventDefault();
        MathematicsModule.open();
      });
    }
  };

  window.EAMathematicsModule = MathematicsModule;

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        MathematicsModule.init();
      }
    );
  } else {
    MathematicsModule.init();
  }

})(window, document);
