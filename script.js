var speech = new SpeechSynthesisUtterance();

function speak() {
  var textToSpeak = document.getElementById("textTospeak").value;
  if (textToSpeak.trim() !== "") {
    speech.text = textToSpeak;
    speech.rate = 1;
    speech.volume = 5;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  } else {
    alert("Please enter some text.");
  }
}
