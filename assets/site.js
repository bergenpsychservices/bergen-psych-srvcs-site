// Native details menus remain usable without JavaScript.
const menu = document.querySelector(".mobile-nav");
if (menu) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary").focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.open = false;
    });
  });
}

// Require a phone number only when the visitor requests a phone response.
const contactMethod = document.querySelector("#contact-method");
const phone = document.querySelector("#phone");
const phoneRequirement = document.querySelector("#phone-requirement");
if (contactMethod && phone && phoneRequirement) {
  const updatePhoneRequirement = () => {
    const phonePreferred = contactMethod.value === "Phone";
    phone.required = phonePreferred;
    phoneRequirement.textContent = phonePreferred ? "(required)" : "(optional)";
  };
  contactMethod.addEventListener("change", updatePhoneRequirement);
  window.addEventListener("pageshow", updatePhoneRequirement);
  updatePhoneRequirement();
}
