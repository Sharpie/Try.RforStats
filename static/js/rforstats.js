(function($){ // Begin jQuery wrapper.

  var rConsole; // Globally accessable R console controller.

  $(document).ready(function(){
    
    var console = $('#console');
    rConsole = console.console({
      
      
      // Parameters
      promptLabel: '> ',
      autofocus: true,
      promptHistory: true,
      historyPreserveColumn: true,
      welcomeMessage: 'Welcome to R.',
      
      
      // Callbacks
      commandValidate: function(line){
	      if (line == "") return false; // Empty line is invalid
	      else return true;
      },
      
      commandHandle: function(line,report){
        report(line);
      }
      
      
    });
  });
})(jQuery);   // End jQuery wrapper.
