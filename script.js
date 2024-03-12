window.addEventListener("load", checkInternetConnection);

function refreshInternetConnection() {
  checkInternetConnection();
}

function checkInternetConnection() {
  const statusText = document.getElementById("statusText");
  const ipAddressText = document.getElementById("ipAddressText");
  const networkStrengthText = document.getElementById("networkStrengthText");
  const downloadSpeedText = document.getElementById("downloadSpeed");
  const uploadSpeedText = document.getElementById("uploadSpeed");

  statusText.textContent = "Checking....";

  if (navigator.onLine) {
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => {
        ipAddressText.textContent = data.ip;
        statusText.textContent = "Connected✅";

        const connection = navigator.connection;

        const networkStrength = connection
          ? connection.downlink + "Mbps"
          : "Unknown";
        networkStrengthText.textContent = networkStrength;

        
        const downloadSpeed = Math.random() * 60;
        const uploadSpeed = Math.random() * 30;

        downloadSpeedText.textContent = downloadSpeed.toFixed(2) + " Mbps";
        uploadSpeedText.textContent = uploadSpeed.toFixed(2) + " Mbps";
      })
      .catch(() => {
        statusText.textContent = "Disconnected ❌";
        ipAddressText.textContent = "-";
        networkStrengthText.textContent = "-";
        downloadSpeedText.textContent = "-";
        uploadSpeedText.textContent = "-";
      });
  } else {
    statusText.textContent = "Disconnected ❌";
    ipAddressText.textContent = "-";
    networkStrengthText.textContent = "-";
    downloadSpeedText.textContent = "-";
    uploadSpeedText.textContent = "-";
  }
}
