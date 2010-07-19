#!/usr/bin/env ruby

require 'rubygems'

require 'sinatra'
require 'sinatra/static_assets'

require 'haml'

set:public, File.dirname(__FILE__) + '/static'

configure do
  set :haml, { :format => :html5 }
end


get '/' do
  haml :index
end
