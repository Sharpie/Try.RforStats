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
			this._ws=new WebSocket("ws://localhost:8080");
			this._ws.controller = this;
			this._ws.onopen=this._onopen;
			this._ws.onmessage=this._onmessage;
			this._ws.onclose=this._onclose;
		},
		
		evalCommand: function( command ){
		  this._ws.send( command );
		},
		
		bindToConsole: function( console ){
		
		  this.writeToConsole = console.writeToConsole;
		
		},
	
		_onopen: function(){
		},	
	
		_onmessage: function(m) {
			if (m.data){
				this.controller.writeToConsole(m.data);
      }else{
        this.controller.writeToConsole('');
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
      welcomeMessage: 'Welcome to RWebConsole 0.0a running R 2.11.1\n Many things are currently broken, not limited to:\n help/?, plotting, edit()\nIf the console is unresponsive, you probably broke something. Try reloding.',
      
      // Callbacks
      commandValidate: function(line){
	      if (line == "" || line == null) return false; // Empty line is invalid
	      else return true;
      },
      
      commandHandle: function(line,report){
        rServe.evalCommand( line );
      }
    });
    
    rServe.bindToConsole( rConsole );
    
  });
})(jQuery);   // End jQuery wrapper.
