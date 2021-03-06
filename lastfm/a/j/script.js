var artists,
	similar,
	events,
	lastFMLoader = new LastFMLoader()
lastFMLoader.getUserTopArtists("RobinNieuwboer", returnedTopArtists, 200)

function returnedTopArtists(data){
	artists = LastFMParser.parseTopArtists(data);

	lastFMLoader.getArtistsSimilar(artists[0]["name"], returnedSimilarArtists, 10);
}
function returnedSimilarArtists(data){
	similar = LastFMParser.parseSimilarArtists(data);

	lastFMLoader.getArtistEvents(artists[4]["name"], returnedArtistEvents, 10);
}
function returnedArtistEvents(data){
	events = LastFMParser.parseArtistEvents(data);
}

/**
 * <b>Concert</b>
 * Dec 1, 2012 Robin
 * 
 * handles Holds all the data for a concert
 * @author Robin
 * 
 * @returns
 */

function Concert(name, artists, venue, artists) {

	// *********************************************************************** 
	// CONSTRUCTOR METHOD WHICH EXECUTTES ITSELF ON CREATION OF THE CLASS
	// *********************************************************************** 
	(function() {

	})();

	// ***********************************************************************
	// PRIVATE VARIABLES  
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 

	var className = Concert,
		self = this;

	// *********************************************************************** 
	// PRIVATE METHODS 
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 
	

	// *********************************************************************** 
	// PRIVILEGED METHODS 
	// MAY BE INVOKED PUBLICLY AND MAY ACCESS PRIVATE ITEMS 
	// MAY NOT BE CHANGED; MAY BE REPLACED WITH PUBLIC FLAVORS 
	// ************************************************************************ 
	this.getBaseClass = function() {
		return className;
	}
	
	this.getGenres = function(){
		artists = self.artists;
		genres = [];
		for(var i =0, l = artists.length; i<l; i++){
			artistGenres = artist[i]["genres"];
			for(var i=0, l = artisGenres.length; i<l; i++){
				if(genres.indexOf(artistGenres[i]) > -1){
					genres.push(artistGenres[i]);
				}
			}
		}
		return genres;
	};

	// ************************************************************************ 
	// PUBLIC PROPERTIES -- ANYONE MAY READ/WRITE 
	// ************************************************************************ 
	
	this.name ="";
	this.venue ="";
	this.city ="";
	this.latLong ="";
	this.artists = [];
}

// ************************************************************************ 
// PUBLIC METHODS -- ANYONE MAY READ/WRITE Classname.prototype.method
// ************************************************************************ 


// ************************************************************************ 
// PROTOTYOPE PROERTIES -- ANYONE MAY READ/WRITE (but may be overridden) 
// ************************************************************************ 


// ************************************************************************ 
// STATIC PROPERTIES -- ANYONE MAY READ/WRITE 
// ************************************************************************ 

/**
 * <b>LatLong</b>
 * Dec 1, 2012 Robin
 * 
 * handles Latitude and longitude
 * @author Robin
 * 
 * @returns
 */

function LatLong(lat, long) {

	// *********************************************************************** 
	// CONSTRUCTOR METHOD WHICH EXECUTTES ITSELF ON CREATION OF THE CLASS
	// *********************************************************************** 
	(function() {

	})();

	// ***********************************************************************
	// PRIVATE VARIABLES  
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 

	var className = LatLong

	// *********************************************************************** 
	// PRIVATE METHODS 
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 
	

	// *********************************************************************** 
	// PRIVILEGED METHODS 
	// MAY BE INVOKED PUBLICLY AND MAY ACCESS PRIVATE ITEMS 
	// MAY NOT BE CHANGED; MAY BE REPLACED WITH PUBLIC FLAVORS 
	// ************************************************************************ 
	this.getBaseClass = function() {
		return className;
	}
	this.update = function(_lat, _long){
		lat = _lat
		long = _long;
	}
	this.setLat = function(_lat){
		lat = _lat
	}
	this.setLong = function(_long){
		long = _long;
	}
	
	this.getLat = function(){
		return lat;
	}
	this.getLong = function(){
		return long;
	}
	this.getLatLong = function(){
		return [lat, long];
	}

	// ************************************************************************ 
	// PUBLIC PROPERTIES -- ANYONE MAY READ/WRITE 
	// ************************************************************************ 
}

// ************************************************************************ 
// PUBLIC METHODS -- ANYONE MAY READ/WRITE Classname.prototype.method
// ************************************************************************ 


// ************************************************************************ 
// PROTOTYOPE PROERTIES -- ANYONE MAY READ/WRITE (but may be overridden) 
// ************************************************************************ 


// ************************************************************************ 
// STATIC PROPERTIES -- ANYONE MAY READ/WRITE 
// ************************************************************************ 

/**
 * <b>Artist</b>
 * Dec 1, 2012 Robin
 * 
 * holds all information related to an artist
 * @author Robin
 * 
 * @returns
 */

function Artist() {

	// *********************************************************************** 
	// CONSTRUCTOR METHOD WHICH EXECUTTES ITSELF ON CREATION OF THE CLASS
	// *********************************************************************** 
	(function() {

	})();

	// ***********************************************************************
	// PRIVATE VARIABLES  
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 

	var className = Artist;

	// *********************************************************************** 
	// PRIVATE METHODS 
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 
	

	// *********************************************************************** 
	// PRIVILEGED METHODS 
	// MAY BE INVOKED PUBLICLY AND MAY ACCESS PRIVATE ITEMS 
	// MAY NOT BE CHANGED; MAY BE REPLACED WITH PUBLIC FLAVORS 
	// ************************************************************************ 
	this.getBaseClass = function() {
		return className;
	}
	

	// ************************************************************************ 
	// PUBLIC PROPERTIES -- ANYONE MAY READ/WRITE 
	// ************************************************************************ 
	this.name ="";
	this.genres = [];
	this.events = [];
	this.fans = [];
	
}

// ************************************************************************ 
// PUBLIC METHODS -- ANYONE MAY READ/WRITE Classname.prototype.method
// ************************************************************************ 


// ************************************************************************ 
// PROTOTYOPE PROERTIES -- ANYONE MAY READ/WRITE (but may be overridden) 
// ************************************************************************ 


// ************************************************************************ 
// STATIC PROPERTIES -- ANYONE MAY READ/WRITE 
// ************************************************************************ 

/**
 * <b>User</b>
 * Dec 1, 2012 Robin
 * 
 Holds the information about a user
 * @author Robin
 * 
 * @returns
 */

function User() {

	// *********************************************************************** 
	// CONSTRUCTOR METHOD WHICH EXECUTTES ITSELF ON CREATION OF THE CLASS
	// *********************************************************************** 
	(function() {

	})();

	// ***********************************************************************
	// PRIVATE VARIABLES  
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 

	var className = User;

	// *********************************************************************** 
	// PRIVATE METHODS 
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 
	

	// *********************************************************************** 
	// PRIVILEGED METHODS 
	// MAY BE INVOKED PUBLICLY AND MAY ACCESS PRIVATE ITEMS 
	// MAY NOT BE CHANGED; MAY BE REPLACED WITH PUBLIC FLAVORS 
	// ************************************************************************ 
	this.getBaseClass = function() {
		return className;
	}

	this.getGenres = function(){
		var artists = self.artists,
			genres = [];
		for(var i =0, l = artists.length; i<l; i++){
			artistGenres = artist[i]["genres"];
			for(var i=0, l = artisGenres.length; i<l; i++){
				if(genres.indexOf(artistGenres[i]) > -1){
					genres.push(artistGenres[i]);
				}
			}
		}
		return genres;
	};

	// ************************************************************************ 
	// PUBLIC PROPERTIES -- ANYONE MAY READ/WRITE 
	// ************************************************************************ 
	this.name ="";
	this.city ="";
	this.artists = [];
	this.csHook ="";
	this.lfmHook ="";
	this.latLong ="";
	
}

// ************************************************************************ 
// PUBLIC METHODS -- ANYONE MAY READ/WRITE Classname.prototype.method
// ************************************************************************ 


// ************************************************************************ 
// PROTOTYOPE PROERTIES -- ANYONE MAY READ/WRITE (but may be overridden) 
// ************************************************************************ 


// ************************************************************************ 
// STATIC PROPERTIES -- ANYONE MAY READ/WRITE 
// ************************************************************************ 

/**
 * <b>LastFMLoader</b>
 * Dec 1, 2012 Robin
 * 
 * handles the loading of data from last.fm
 * @author Robin
 * 
 * @returns
 */

function LastFMLoader() {

	// *********************************************************************** 
	// CONSTRUCTOR METHOD WHICH EXECUTTES ITSELF ON CREATION OF THE CLASS
	// *********************************************************************** 
	(function() {

	})();

	// ***********************************************************************
	// PRIVATE VARIABLES  
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 

	var className = LastFMLoader;
		apiKey = "7f5ff80b980849aa562b58f35d97643b";

	// *********************************************************************** 
	// PRIVATE METHODS 
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 
	

	// *********************************************************************** 
	// PRIVILEGED METHODS 
	// MAY BE INVOKED PUBLICLY AND MAY ACCESS PRIVATE ITEMS 
	// MAY NOT BE CHANGED; MAY BE REPLACED WITH PUBLIC FLAVORS 
	// ************************************************************************ 
	this.getBaseClass = function() {
		return className;
	}
	
	this.getArtistEvents = function(_artistName, handler, _length){
		var method = "artist.getevents",
			artist = _artistName,
			format = "json",
			numResults = _length;
		
		$.ajax({
			url:"http://ws.audioscrobbler.com/2.0/" +
					"?method=" + method +
					"&artist=" + artist +
					"&api_key=" + apiKey +
					"&format=" + format +
					"&limit=" + numResults,
			success: handler,
			dataType: "json"
		})
	};

	this.getUserTopArtists = function(_userName, handler, _length){
		var method = "user.getTopArtists",
			user = _userName,
			format = "json",
			numResults = _length;
		
		$.ajax({
			url:"http://ws.audioscrobbler.com/2.0/" +
					"?method=" + method +
					"&user=" + user +
					"&api_key=" + apiKey +
					"&format=" + format +
					"&limit=" + numResults,
			success: handler,
			dataType: "json"
		})
	};

	this.getArtistsSimilar = function(_artistName, handler, _length){
		var method = "artist.getSimilar",
			artist = _artistName,
			format = "json",
			numResults = _length;
		
		$.ajax({
			url:"http://ws.audioscrobbler.com/2.0/" +
					"?method=" + method +
					"&artist=" + artist +
					"&api_key=" + apiKey +
					"&format=" + format +
					"&limit=" + numResults,
			success: handler,
			dataType: "json"
		})
	};

	// ************************************************************************ 
	// PUBLIC PROPERTIES -- ANYONE MAY READ/WRITE 
	// ************************************************************************ 
	
};

// ************************************************************************ 
// PUBLIC METHODS -- ANYONE MAY READ/WRITE Classname.prototype.method
// ************************************************************************ 


// ************************************************************************ 
// PROTOTYOPE PROERTIES -- ANYONE MAY READ/WRITE (but may be overridden) 
// ************************************************************************ 


// ************************************************************************ 
// STATIC PROPERTIES -- ANYONE MAY READ/WRITE 
// ************************************************************************ 



/**
 * <b>LastFMParser</b>
 * Dec 1, 2012 Robin
 * 
 * handles description
 * @author Robin
 * 
 * @returns
 */

function LastFMParser() {

	// *********************************************************************** 
	// CONSTRUCTOR METHOD WHICH EXECUTTES ITSELF ON CREATION OF THE CLASS
	// *********************************************************************** 
	(function() {

	})();

	// ***********************************************************************
	// PRIVATE VARIABLES  
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 

	var className = LastFMParser;

	// *********************************************************************** 
	// PRIVATE METHODS 
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 
	

	// *********************************************************************** 
	// PRIVILEGED METHODS 
	// MAY BE INVOKED PUBLICLY AND MAY ACCESS PRIVATE ITEMS 
	// MAY NOT BE CHANGED; MAY BE REPLACED WITH PUBLIC FLAVORS 
	// ************************************************************************ 
	this.getBaseClass = function() {
		return className;
	}
	
	// ************************************************************************ 
	// PUBLIC PROPERTIES -- ANYONE MAY READ/WRITE 
	// ************************************************************************ 
	
}

// ************************************************************************ 
// PUBLIC METHODS -- ANYONE MAY READ/WRITE Classname.prototype.method
// ************************************************************************ 


// ************************************************************************ 
// PROTOTYOPE PROERTIES -- ANYONE MAY READ/WRITE (but may be overridden) 
// ************************************************************************ 


// ************************************************************************ 
// STATIC PROPERTIES -- ANYONE MAY READ/WRITE 
// ************************************************************************ 

LastFMParser.parseTopArtists = function(_jsonString) {
	var artists = [];
	var artistJson = _jsonString["topartists"]["artist"];
	if(artistJson.length > 0){
		for(var i = 0, l = artistJson.length; i<l; i++){
			var newArtist = new Artist()
			newArtist.name = artistJson[i]["name"];
			artists.push(newArtist)
		}
	}
	return artists;
}
LastFMParser.parseSimilarArtists = function(_jsonString) {
	var artists = [];
	var artistJson = _jsonString["similarartists"]["artist"];
	if(artistJson.length > 0){
		for(var i = 0, l = artistJson.length; i<l; i++){
			var newArtist = new Artist()
			newArtist.name = artistJson[i]["name"];
			artists.push(newArtist)
		}
	}
	return artists;
}
LastFMParser.parseArtistEvents = function(_jsonString) {
	var concerts = [];
	var concertsJson = _jsonString["events"]["event"];
	if(concertsJson.length > 0){
		console.log(concertsJson.length);
		for(var i = 0, l = concertsJson.length; i<l; i++){
			var newConcert = new Concert()
			newConcert.name = concertsJson[i]["title"];
			newConcert.venue = concertsJson[i]["venue"]["name"];
			newConcert.city = concertsJson[i]["venue"]["location"]["city"];
			newConcert.latLong = new LatLong(concertsJson[i]["venue"]["location"]["geo:point"]["geo:lat"], concertsJson[i]["venue"]["location"]["geo:point"]["geo:long"]);
			console.log(concertsJson[i]["artists"]["artist"].length);
			for(var ii = 0, ll = concertsJson[i]["artists"]["artist"].length; ii<ll; ii++){
				var newArtist = new Artist()
				newArtist.name = concertsJson[i]["artists"]["artist"][ii];
				newConcert.artists.push(newArtist);
			}
			concerts.push(newConcert);
		}
	}
	return concerts;
}


