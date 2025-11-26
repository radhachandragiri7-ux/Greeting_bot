document.getElementById("send").addEventListener("click", sendMessage);

function sendMessage() {
    let msg = document.getElementById("user-input").value;
    if (!msg.trim()) return;

    showMessage(msg, 'user-msg');
    document.getElementById("user-input").value = "";

    fetch("/get", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "msg=" + encodeURIComponent(msg)
    })
    .then(res => res.json())
    .then(data => showMessage(data.response, 'bot-msg'));
}

function showMessage(message, className) {
    let msgDiv = document.createElement("div");
    msgDiv.className = className;
    msgDiv.textContent = message;
    document.getElementById("messages").appendChild(msgDiv);
}
