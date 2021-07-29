/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
		   	module: "MMM-Tabulator",
		   	header: "Tabulator Demo",
		   	position: "middle_third",
			config: {
				fileUrl: "/home/pi/MagicMirror/modules/default/MMM-Tabulator/demo.json",     // The local filename or URL to JSON source
				updateInterval: 60,        // [seconds] Read the file every 3 min
				maxItems: 15  // Max table rows shown
			}
		},	
		{
			module: "compliments",
			position: "top_bar"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "San Francisco",
				locationID: "5391959", 
				appid: "6e2c8b9fbdc9c39dc6d5794d13c7351d"
			}
		},  
		{
			module: 'newsfeed',
			position: 'bottom_center',
			config: {
				bgName: "raspberryPi.png",          // "Example.jpg", the file name of your background image (case sensitive)
				//videoName: "",       // "hd0924.mov",         // file name of your local video
				//youTubeID: "GI3rBwqwDbw", // "GI3rBwqwDbw", // ID from any YouTube video. ID comes after the = sign of YouTube url
				height: "1080px",    // your display's resolution in pixels. Enter in config.js
				width: "1920px",     // your display's resolution in pixels. Enter in config.js
    }
}, 
			
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
