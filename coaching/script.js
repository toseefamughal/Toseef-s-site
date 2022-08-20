function done() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("Email").value;
  let phone = document.getElementById("Phone").value;
  let weight = document.getElementById("Weight").value;
  let height = document.getElementById("Height").value;
  let country = document.getElementById("Country").value;
  let training = document.getElementById("field").value;
  let length = document.getElementById("Length").value;

  let data = `
  ------------------------------
  **Name**: ${name}
  **Email**: ${email}
  **Phone**: ${phone}
  **Weight**: ${weight}
  **Height**: ${height}
  **Country**: ${country}
  **Training** ${training}
  **Length**: ${length}
  -----------------------------
  `;

  DiscordPush(data);
}

function DiscordPush(data) {
  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/999856591379628184/7_RWWdzk9veBWH3-KcuyJzgzZ6Ddcbwb69qbtfICZFyAjJVvJLYSpfS1nybwROEtU9Nx");

  request.setRequestHeader("Content-type", "application/json");

  const params = {
    content: data,
  };

  request.send(JSON.stringify(params));
  document.getElementById("successMsg").style.opacity = "1";
  document.getElementById("name").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Phone").value = "";
  document.getElementById("Weight").value = "";
  document.getElementById("Height").value = "";
  document.getElementById("Country").value = "";
}
