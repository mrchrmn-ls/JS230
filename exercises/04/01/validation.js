/* eslint-disable max-lines-per-function */
document.addEventListener("DOMContentLoaded", () => {

  class Validate {
    static required(input) {
      if (input.required) return !!input.value;
      return true;
    }

    static pattern(input) {
      if (input.pattern && input.value.length > 0) {
        let regexp = new RegExp(input.pattern);
        return input.value.match(regexp);
      }
      return true;
    }

    static minlength(input) {
      let minimum = input.getAttribute("minlength");
      if (minimum) return input.value.length >= Number(minimum);
      return true;
    }

    static fields(inputs) {
      let allValid = true;

      inputs.forEach(input => {
        let valid = true;
        let messageType;

        if (!Validate.required(input)) {
          messageType = "required";
          valid = false;

        } else if (!Validate.minlength(input)) {
          messageType = "minlength";
          valid = false;

        } else if (!Validate.pattern(input)) {
          messageType = "pattern";
          valid = false;
        }

        if (!valid) {
          allValid = false;
          Display.showErrorMessage(input, messageType);
          Display.highlightInput(input);
        }
      });

      return allValid;
    }
  }


  class Display {
    static showErrorMessage(input, type) {
      let inputTitle = input.parentElement
                            .previousElementSibling
                            .textContent;
      let span = input.nextElementSibling;

      switch (type) {
        case "required":
          span.innerHTML = `${inputTitle} is a required field.`;
          break;
        case "pattern":
          span.innerHTML = `Please enter a valid ${inputTitle}.`;
          break;
        case "minlength":
          span.innerHTML = `${inputTitle} must have at least ${input.getAttribute("minlength")} characters.`;
          break;
        case "hide":
          span.innerHTML = "";
      }
    }

    static showFormErrors() {
      let message = "Form cannot be submitted until errors are corrected.";
      document.querySelector("form > span").innerHTML = message;
    }

    static hideFormErrors() {
      document.querySelector("form > span").innerHTML = "";
    }

    static highlightInput(input) {
      input.classList.add("invalid_field");
    }

    static removeHighlight(input) {
      input.classList.remove("invalid_field");
    }

    static updateFormStatus() {
      if (inputs.some(input => input.classList.contains("invalid_field"))) {
        Display.showFormErrors();
      } else {
        Display.hideFormErrors();
      }
    }
  }


  class Handle {
    static focusout(event) {
      Validate.fields([event.target]);
      Display.updateFormStatus();
    }

    static focusin(event) {
      let target = event.target;
      if (target.tagName === "INPUT") {
        Display.showErrorMessage(target, "hide");
        Display.removeHighlight(target);
      }
    }

    static submit(event) {
      event.preventDefault();

      if (!Validate.fields(inputs)) {
        Display.updateFormStatus();
        return null;
      }
    }
  }


  let form = document.querySelector("form");
  let inputs = [...document.querySelectorAll("form input")];

  form.addEventListener("focusin", Handle.focusin);
  form.addEventListener("focusout", Handle.focusout);
  form.addEventListener("submit", Handle.submit);
});