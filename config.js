/* Magic Mirror Config
 *
 * By Kelland Goodn
 * VERDIGRIS TECHNOLOGIES
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
	units: "imperial",
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
			module: "MMM-ImagesPhotos",
			position: "bottom_left",
			config: {
				opacity: 0.9,
				//animationSpeed: 500,
				//updateInterval: 5000,
			}			
		},
		{
			module: 'MMM-AirQuality',
			header: "Air Quality",
			position: 'bottom_right', // you may choose any location
			config: {
			  location: 'california/san-francisco/san-francisco-arkansas-street' // the location to check the index for
			}
		},
		{
			  module: 'MMM-GoogleDocs-Notes',
			  header: "Carbon Emissions Data",
			  position: 'bottom_center',
			  classes: 'default everyone',
			  config: {
				maxNotes: 2,
				pollFrequency: 5 * 60 * 1000, //5 minutes;
				showDatePosted: false,
				dateFormatExact: 'YYYY-MM-DD HH:mm',
				dateFormatShort: 'HH:mm',
				notesPrefix: 'MMM-Chart'
			  }
			},
		{
			 module: "MMM-GoogleSheets",
			 header: "V-Mirror Sustainability Minimalist",
			 position: "middle_center",
			 config: {
				url: "https://script.google.com/macros/s/AKfycbwoImJbWzmTGLuMAP50eXZSwUDl_PrwPqNmDhez409ewiTwE8rUd95sYxd-RwgjiIql/exec",
				sheet: "Sheet1",
				range: "A1:C4",
				updateInterval: 1, // minutes
				requestDelay: 250, // ms
				updateFadeSpeed: 0, // ms
				cellStyle: "mimic",
				border: "3px solid #777",
				stylesFromSheet: ["background-color", "color", "font-weight"],
				customStyles: ["font-size: 38px", "padding: 6px"],
				headerStyles: ["font-weight: bold"],
				//styleFunc: (rowNum, colNum, cellProps) => {if(rowNum%2 == 0){return "background-color:#666;"}} // Colors every other row background
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
