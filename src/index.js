addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Make a fetch request to the origin server
  const response = await fetch(request);

  // Landing Page
  const body = `
  <!DOCTYPE html>
  <html>
	<head>
	<meta charset="UTF-8" />
    <!-- Canonical -->
    <link rel="canonical" href="https://check.automatic-demo.com/" />
    <!-- HTML Meta Tags -->
    <title>Personal Cybersecurity Check</title>
    <meta name="description" content="Discover how much information can be seen by your ISP, websites you visit, reverse proxies, and more." />
    <meta name="keywords" content="cybersecurity, personal, security, isp, website, proxy" />
	<link rel="icon" type="image/png" href="https://pub-e9bfb4ecfd174ef4aba8c9259a94e8a0.r2.dev/assets/favicon.png"/>
	<link rel='shortcut icon' type='image/x-icon' href='https://pub-e9bfb4ecfd174ef4aba8c9259a94e8a0.r2.dev/assets/favicon.ico' />
    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Personal Cybersecurity Check" />
    <meta property="og:description" content="Discover how much information can be seen by your ISP, websites you visit, reverse proxies, and more." />
    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="/" />
    <meta property="twitter:url" content="/" />
    <meta name="twitter:title" content="Personal Cybersecurity Check" />
    <meta name="twitter:description" content="Discover how much information can be seen by your ISP, websites you visit, reverse proxies, and more." />
    <!-- Viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
	  <style>
		/* Define the overall styles for the webpage */
		body {
		  font-family: Arial, sans-serif;
		  margin: 0;
		  padding: 0;
		  /* Prior design */
		  background-color: #f2f2f2;
		  color: #333;
		}
		.container {
		  max-width: 80vw;
		  width: 70%;
		  margin: 0 auto;
		  padding: 50px;
		  /* Prior design */
		  background-color: #fff;
		  border-radius: 8px;
		  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
		}
		/* Header */
		.title {
		  text-align: center;
		  color: #222;
		  font-size: 36px;
		  font-weight: bold;
		  margin-top: 0;
		}
		.description {
		  font-size: 16px;
		  margin-top: 0;
		  line-height: 1.5;
		  /* Prior design */
		  margin-bottom: 10px;
		  color: #555;
		}
		/* Boxes */
		.row {
		  display: flex;
		  flex-wrap: wrap;
		  margin: 20px 0;
		}
		.box {
		  margin-bottom: 20px;
		  /* boxes next to each other */
		  display: inline-block;
		  width: 48%;
		  margin: 1%;
		  vertical-align: top;
		  box-sizing: border-box;
		  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
		  border-radius: 10px;
		  /* border: 2px solid #b3b3b3; */
		  padding: 16px;
		  overflow: scroll;
		  word-wrap: break-word;
		}
		.box h2 {
		  font-size: 24px;
		  font-weight: bold;
		  margin-top: 0;
		}
		/* Buttons */
		.button {
		  display: inline-block;
		  margin-right: 10px;
		  margin-bottom: 10px;
		  padding: 10px 20px;
		  border: 1px solid #ccc;
		  border-radius: 5px;
		  background-color: #f2f2f2;
		  color: #333;
		  text-decoration: none;
		  font-size: 16px;
		  font-weight: bold;
		}
		.button:hover {
		  background-color: #ddd;
		}
		/* Code */
		.code {
		  font-family: "Courier New", Courier, monospace;
		  background-color: #f8f8f8;
		  padding: 10px;
		  margin: 10px 0;
		  overflow-x: auto;
		}
		/* Footer */
		.footer {
		  background-color: #fff;
		  padding: 20px;
		  margin-top: 20px;
		  /* Prior design */
		  margin: 10 auto;
		  /* Prior design */
		  border-radius: 8px;
		  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
		}
		.footer p {
		  font-size: 16px;
		  margin-top: 0;
		}
		.footer a {
		  display: inline-block;
		  margin-right: 10px;
		  margin-bottom: 10px;
		  padding: 10px 20px;
		  border: 1px solid #ccc;
		  border-radius: 5px;
		  background-color: #f2f2f2;
		  color: #333;
		  text-decoration: none;
		  font-size: 16px;
		  font-weight: bold;
		}
		.footer a:hover {
		  background-color: #ddd;
		}
		/* Tooltip */
		.tooltip {
		  position: relative;
		  border: none;
		  cursor: pointer;
		  background-color: transparent;
		}
		.tooltip .tooltiptext {
		  visibility: hidden;
		  /* position: absolute;
			  top: -40px;
			  left: 150%; */
		  transform: translateX(-50%);
		  padding: 10px;
		  background-color: #555;
		  color: #fff;
		  text-align: center;
		  border-radius: 6px;
		  z-index: 1;
		}
		.tooltip:hover .tooltiptext {
		  visibility: visible;
		}
	  </style>
	  <script>
		// Initialize an empty object to store the collected information
		let collectedInfo = {};
  
		// Collect information from the Hardware Concurrency API
		collectedInfo.hardwareConcurrency = navigator.hardwareConcurrency;
  
		// Collect information from the Device Memory API
		if ("deviceMemory" in navigator) {
		  collectedInfo.deviceMemory = navigator.deviceMemory;
		}
  
		// Collect information about the screen size and viewport
		collectedInfo.screenWidth = screen.width;
		collectedInfo.screenHeight = screen.height;
		collectedInfo.screenOrientation = screen.orientation.type;
		collectedInfo.viewportWidth = window.innerWidth;
		collectedInfo.viewportHeight = window.innerHeight;
  
		// Collect information about installed plugins
		let plugins = [];
		for (let i = 0; i < navigator.plugins.length; i++) {
		  plugins.push(navigator.plugins[i].name);
		}
		collectedInfo.plugins = plugins;
  
		// Collect information about battery
		// async function collectBatteryInfo() {
		//     let battery = [];
		//     let batteryStatus = await navigator.getBattery();
		//     battery.push(batteryStatus.level);
		//     let batteryCharging = batteryStatus.charging ? 'Charging' : 'Not charging';
		//     battery.push(batteryCharging);
		//     console.log(battery)
		//     return battery
		// }
		// collectedInfo.battery = collectBatteryInfo();
  
		// Output the collected information as a JSON object
		//const collectedInfoJSON = JSON.stringify(collectedInfo);
		//document.addEventListener('DOMContentLoaded', function() {
		//document.getElementById('heregoesjson').innerHTML += '<pre>' + collectedInfoJSON + '</pre>';
		//});
		// console.log("FINAL: ", collectedInfoJSON);
  
		// Collect information about keyboard = Keylogger
		document.addEventListener("keydown", function (event) {
		  // Get the name of the pressed key
		  const keyName = event.key;
		  // Display the name of the pressed key in the console
		  console.log(keyName);
		});
		console.log("Keylogger is active...");
  
		// Check if visitor is logged into Social Media
		// Fix Cross-Origin Read Blocking (CORB)
		function checkSocialMedia() {
		  var networks = [
			{
			  url: "https://squareup.com/login?return_to=%2Ffavicon.ico",
			  name: "Square",
			},
			{
			  url: "https://www.instagram.com/accounts/login/?next=%2Ffavicon.ico",
			  name: "Instagram",
			},
			{
			  url: "https://twitter.com/login?redirect_after_login=%2Ffavicon.ico",
			  name: "Twitter",
			},
			{
			  url: "https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
			  name: "Facebook",
			},
			{
			  url: "https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=de&service=youtube",
			  name: "Google",
			},
			{
			  url: "https://login.skype.com/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",
			  name: "Skype",
			},
			{
			  url: "https://www.spotify.com/de/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",
			  name: "Spotify",
			},
			{
			  url: "https://www.reddit.com/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",
			  name: "Reddit",
			},
			{
			  url: "https://www.expedia.de/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",
			  name: "Expedia",
			},
			{
			  url: "https://www.dropbox.com/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Ficons%2Ficon_spacer-vflN3BYt2.gif",
			  name: "Dropbox",
			},
			{
			  url: "https://www.amazon.com/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",
			  name: "Amazon",
			},
			{
			  url: "https://www.pinterest.com/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",
			  name: "Pinterest",
			},
			{
			  url: "https://www.netflix.com/Login?nextpage=%2Ffavicon.ico",
			  name: "Netflix",
			},
			{
			  url: "https://de.foursquare.com/login?continue=%2Ffavicon.ico",
			  name: "Foursquare",
			},
			{
			  url: "https://store.steampowered.com/login/?redir=favicon.ico",
			  name: "Steam",
			},
			{
			  url: "https://www.academia.edu/login?cp=/favicon.ico&cs=www",
			  name: "Academia.edu",
			},
			{
			  url: "https://stackoverflow.com/users/login?ssrc=head&returnurl=http%3a%2f%2fstackoverflow.com%2ffavicon.ico",
			  name: "Stack Overflow",
			},
		  ];
		  //     Do not work because they do not immediately redirect
		  //     {
		  //         url: "https://www.flickr.com/signin/yahoo/?redir=https%3A%2F%2Fwww.flickr.com/favicon.ico",
		  //         name: "Flickr"
		  //     }, {
		  //         url: "https://login.live.com/login.srf?wa=wsignin1.0&wreply=https%3A%2F%2Fprofile.microsoft.com%2FregsysProfilecenter%2FImages%2FLogin.jpg",
		  //         name: "Microsoft"
		  //     }, {
		  //         url: "https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Ffavicon.ico%3Fid%3D1",
		  //         name: "Github"
		  //     }, {
		  //         url: "https://slack.com/signin?redir=%2Ffavicon.ico",
		  //         name: "Slack"
		  //     }, {
		  //         url: "https://tablet.www.linkedin.com/splash?redirect_url=https%3A%2F%2Fwww.linkedin.com%2Ffavicon.ico%3Fgid%3D54384%26trk%3Dfulpro_grplogo",
		  //         name: "Linkedin"
		  //     }
		  function print(msg, color) {
			document.getElementById("socialMedia").innerHTML +=
			  '<div style="color:' + color + ';">' + msg + "</div>";
		  }
		  networks.forEach(function (network) {
			var img = document.createElement("img");
			img.src = network.url;
			img.onload = function () {
			  print(network.name + ": logged in", "green");
			};
			img.onerror = function () {
			  // print(network.name + ': not logged in');
			};
		  });
		}
		checkSocialMedia();
  
		// Copy the code to clipboard
		function copyToClipboard(elementId) {
		  let element = document.getElementById(elementId);
		  let text = element.textContent;
		  navigator.clipboard.writeText(text).then(
			function () {
			  console.log("Text copied to clipboard");
			},
			function (err) {
			  console.error("Error copying text: ", err);
			}
		  );
		}
	  </script>
	</head>
	<body>
	  <div class="container">
		<h1 class="title">Personal Cybersecurity Check</h1>
		<p class="description">
		  Discover how much information can be seen by your ISP, websites you
		  visit, reverse proxies, and more...
		</p>
		<button class="tooltip">
		  ℹ️
		  <span class="tooltiptext">Check your Browser Console Tab.</span>
		</button>
		<div class="row">
		  <div class="box">
			<h2 class="subtitle">Logged in?</h2>
			<div id="socialMedia"></div>
		  </div>
		  <div class="box">
            <h2 class="subtitle">Hello <i>Stranger</i>!</h2>
            <p id="map">You seem to be connecting from ${request.cf.city}, ${request.cf.country}.</p>
          </div>
		</div>
		<div class="row">
		  <div class="box">
			<h2 class="subtitle">Cloudflare Request Object</h2>
			<div class="code">
			  <pre id="cf-object">
						  ${JSON.stringify(request.cf, null, 2)}
						</pre
			  >
			</div>
			<button onclick="copyToClipboard('cf-object')">Copy</button>
		  </div>
		  <div class="box">
			<h2 class="subtitle">HTTP Response Headers</h2>
			<div class="code">
			  <pre id="http-response">
							${JSON.stringify([...response.headers], null, 2)}
						  </pre
			  >
			</div>
			<button onclick="copyToClipboard('http-response')">Copy</button>
		  </div>
		</div>
		<div class="row">
		  <div class="box">
			<h2 class="subtitle">HTTP Request Headers</h2>
			<div class="code">
			  <pre id="http-request">
							${JSON.stringify([...request.headers], null, 2)}
						  </pre
			  >
			</div>
			<button onclick="copyToClipboard('http-request')">Copy</button>
		  </div>
		  <div class="box">
			<h2 class="subtitle">JavaScript Attributes</h2>
			<div class="code">
			  <!-- <div id="heregoesjson"></div> -->
			  <table>
				<thead>
				  <tr>
					<th>Property</th>
					<th>Value</th>
				  </tr>
				</thead>
				<tbody></tbody>
			  </table>
			</div>
		  </div>
		</div>
	  </div>
	  <footer class="footer">
		<div class="row">
		  <p class="description">Some external references:</p>
		</div>
		<div class="row">
		  <a
			href="https://www.cloudflare.com/ssl/encrypted-sni/"
			class="button"
			target="_blank"
			rel="nofollow external noreferrer"
			>Browsing Experience Security Check</a
		  >
		  <a
			href="https://amiunique.org/"
			class="button"
			target="_blank"
			rel="nofollow external noreferrer"
			>AmIUnique</a
		  >
		  <a
			href="https://browserleaks.com/"
			class="button"
			target="_blank"
			rel="nofollow external noreferrer"
			>BrowserLeaks</a
		  >
		  <a
			href="https://ipleak.com/"
			class="button"
			target="_blank"
			rel="nofollow external noreferrer"
			>IP Leak</a
		  >
		  <a
			href="https://webkay.robinlinus.com/"
			class="button"
			target="_blank"
			rel="nofollow external noreferrer"
			>Webkay</a
		  >
		</div>
		<div class="row">
		  <a
			href="https://coveryourtracks.eff.org/"
			class="button"
			target="_blank"
			rel="nofollow external noreferrer"
			>Cover Your Tracks</a
		  >
		  <a
			href="https://www.grc.com/default.htm"
			class="button"
			target="_blank"
			rel="nofollow external noreferrer"
			>ShieldsUp</a
		  >
		  <a
			href="https://routersecurity.org/index.php"
			class="button"
			target="_blank"
			rel="nofollow external noreferrer"
			>Router Security</a
		  >
		  <a
			href="https://browseraudit.com/"
			class="button"
			target="_blank"
			rel="nofollow external noreferrer"
			>Browser Audit</a
		  >
		  <a
			href="https://httpbin.automatic-demo.com/"
			class="button"
			target="_blank"
			rel="nofollow external noreferrer"
			>HTTPbin</a
		  >
		</div>
		<div class="row">
		  <p class="description" style="font-size: small">
			Disclaimer: educational purposes only.
		  </p>
		</div>
	  </footer>
	  <script>
		// Output collected JSON in JSON format to Table
		const tableBody = document.querySelector("table tbody");
		for (const [key, value] of Object.entries(collectedInfo)) {
		  const row = document.createElement("tr");
		  const propertyCell = document.createElement("td");
		  const valueCell = document.createElement("td");
		  propertyCell.textContent = key;
		  valueCell.textContent = JSON.stringify(value);
		  row.appendChild(propertyCell);
		  row.appendChild(valueCell);
		  tableBody.appendChild(row);
		}
	  </script>
	</body>
  </html>  
	`;

  return new Response(body, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
}
