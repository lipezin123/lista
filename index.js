if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then(reg => {
        console.log("Worker Registered")
      })
      .catch(err => {
        console.log("Error in service worker registration.")
      })
  })
}
