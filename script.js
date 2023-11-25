// For different browsers
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = "en-US";
rec.continuous = true; // True means it will keep listening

// handler that gets speech results
rec.onresult = function (e) {
  const acceptedColors = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "brown",
    "purple",
    "orange",
    "black",
    "white",
  ];

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();
    console.log(script);

    if (acceptedColors.includes(script)) {
      document.body.style.backgroundColor = script;
    } else {
      alert("Please say a color");
    }
  }
};

rec.start();
