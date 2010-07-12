(function($){ // Begin jQuery wrapper.

  var rConsole; // Globally accessable R console controller.

	var rServe = {
	
		connect: function(){
			this._ws=new WebSocket("ws://localhost:8002");
			this._ws.onopen=this._onopen;
			this._ws.onmessage=this._onmessage;
			this._ws.onclose=this._onclose;
		},

		send: function(message){
			if (this._ws )
			this._ws.send(message);
		},
	
		_onopen: function(){
		},	
	
		_onmessage: function(m) {
			if (m.data){
				rServe.response = m.data; 
      }else{
        rServe.response = null;
      }
		},
			
		_onclose: function(m) {
			this._ws=null;	
		},
		
		response: null
		
	};

	function pausecomp(millis)
	 {
	  var date = new Date();
	  var curDate = null;
	  do { curDate = new Date(); }
	  while(curDate-date < millis);
	}

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
          rServe.send( line );
          pausecomp(2000);
          this.commandRetrieve(report)
      },
      
      commandRetrieve: function( report ){      
        if( this.commandValidate( rServe.response) ) report( rServe.response );
        else report('');
      }    
    });
    
    
  });
})(jQuery);   // End jQuery wrapper.
