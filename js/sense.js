
<script>
  /**
   * Sample JavaScript code for speech.speech.recognize
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */

  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/cloud-platform"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("99f3e588f8282cb6681108924dd97f91398943b0");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/speech/v1p1beta1/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.speech.speech.recognize({
      "resource": {
        "config": {
          "encoding": "LINEAR16",
          "languageCode": "pt-BR",
          "sampleRateHertz": 16000
        },
        "audio": {
          "uri": "https://drive.google.com/open?id=1hDkzDdcA1Br8IjhYznndjxkDW5FZSMes"
        }
      }
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "107816601006709330681"});
  });
</script>


