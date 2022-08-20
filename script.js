function done() {
  let name = document.getElementById("Name").value;
  let email = document.getElementById("Email").value;
  let message = document.getElementById("Text").value;

  let data = `**Name**: ${name}, **Email**: ${email}, **Message**: ${message}`;
  DiscordPush(data);
}

function DiscordPush(data) {
  const request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://discord.com/api/webhooks/999856838008909896/_2ToBq6Qa_NAgVZQ0XAU9rAn5YlExmVmAWyWAirvhcpn4wxMG4ON4tES-0W-KS4SxHdm"
  );

  request.setRequestHeader("Content-type", "application/json");

  const params = {
    content: data,
  };

  request.send(JSON.stringify(params));

  document.getElementById("successMsg").style.opacity = "1";
  document.getElementById("Name").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Text").value = "";
}
