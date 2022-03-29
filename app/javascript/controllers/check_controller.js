import { Controller } from "@hotwired/stimulus"
import { Turbo } from "@hotwired/turbo-rails";

// Connects to data-controller="check"
export default class extends Controller {
  connect() {
    console.log("Check Controller connected.");
  }

  active(event) {
    console.log("Check Controller active.");
    const id = event.target.dataset.id;
    console.log(id);
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

    fetch(`/tasks/${id}/active`, {
      method: "POST",
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify({completed: event.target.checked})
    })
    .then(response => response.text())
    .then(Turbo.renderStreamMessage) 
  }
}
