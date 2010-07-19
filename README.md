This is the source code for the web site: http://try.rforstats.org/

NOTE:
-----
This project and many associated components is currently somewhere
between a prototype and alpha-quality software.  It works well enough
to be a proof of concept but many many things are currently broken or
unusable.

The idea for this site was inspired by Chris Done's [tryhaskell][1]
which in turn was inspired by _why's [tryruby][2].

The code for this site was forked from tryhaskell and substantially
re-written by Charlie Sharpsteen.  The server-side implementation has
been switched from PHP to [Sinatra][3] and the HTML and CSS have been
re-written in HAML and SASS using the [Compass][4] framework.
Evaluation of R commands is handled by a frontend to Simon Urbanek's
[Rserve][5], [Rserve: Websocket][6], which is written in Erlang and
communicates via a WebSocket connection rather than AJAX.

REQUIREMENTS
----------

To Use:
An internet connection and modern WebKit-based browser.

To Develop:

  - The sinatra, haml and compass ruby gems to serve HTML pages.

  - Erlang R13B03 or later and [Rserve: WebSocket][6] along with
    [Rserve][5] to handle command evaluation.


BROWSER SUPPORT
---------------

This project makes heavy use of HTML5 WebSockets which has
implications for browser support.  As of the time this README was
written (July 2010) the only publically released browsers with the
necessary technology are based on recent versions of WebKit:

  - Safari 5+
  - Chromium/Google Chrome 5+

Firefox 3.7 is currently in development and should support WebSockets
when it ships.

No version of Internet Explorer has the required technology and it is
not one of the HTML5 features included in IE 9, the current
development version.  Therefore, it is unlikely that this site will
work with Internet Explorer in the forseeable future.  And to be
bluntly honest, I'm not all that broken up about it.


LICENSE
-------

Copyright (c) 2010 Charlie Sharpsteen

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


***


Javascript Console Library and CSS Copyright 2010 Chris Done. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

   1. Redistributions of source code must retain the above
      copyright notice, this list of conditions and the following
      disclaimer.

   2. Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials
      provided with the distribution.

THIS SOFTWARE IS PROVIDED BY CHRIS DONE ``AS IS'' AND ANY EXPRESS
OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL CHRIS DONE OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
DAMAGE.

The views and conclusions contained in the software and
documentation are those of the authors and should not be
interpreted as representing official policies, either expressed or
implied, of Chris Done.


  [1]: http://www.tryhaskell.org
  [2]: http://tryruby.org
  [3]: http://www.sinatrarb.com
  [4]: http://www.compass-style.org
  [5]: http://www.rforge.net/Rserve/index.html
  [6]: http://github.com/Sharpie/rserve_websocket 
