// Globally accessable controllers for rServe- websocket and rConsole
var rConsole, rServe;

(function($){ // Begin jQuery wrapper.

	rServe = {
	  /*
	   * Object for encapsulating a websocket connected to Rserve.
	   * Only the connect and evalCommand functions are intended to be used
	   * by other code.
	  */
	  
		connect: function(){
			this._ws=new WebSocket("ws://localhost:8002");
			this._ws.controller = this;
			this._ws.onopen=this._onopen;
			this._ws.onmessage=this._onmessage;
			this._ws.onclose=this._onclose;
		},
		
		evalCommand: function( command, callback ){
		  this._consoleCallback = callback;
		  this._ws.send( command );
		},
	
		_onopen: function(){
		},	
	
		_onmessage: function(m) {
			if (m.data){
				this.controller._consoleCallback(m.data);
      }else{
        this.controller._consoleCallback('');
      }
		},
			
		_onclose: function(m) {
			this._ws=null;	
		}
		
	};

  $(document).ready(function(){  
    
    rServe.connect();
    
    var console = $('.console');
    rConsole = console.console({
      
      
      // Parameters
      promptLabel: '> ',
      autofocus: true,
      promptHistory: true,
      historyPreserveColumn: true,
      welcomeMessage: 'Welcome to R.',
      
      
      // Callbacks
      commandValidate: function(line){
	      if (line == "" || line == null) return false; // Empty line is invalid
	      else return true;
      },
      
      commandHandle: function(line,report){
        rServe.evalCommand( line, report );
      }
    });
    
    
  });
})(jQuery);   // End jQuery wrapper.
