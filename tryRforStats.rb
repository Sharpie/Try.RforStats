#!/usr/bin/env ruby

require 'rubygems'
require 'sinatra'
require 'haml'
require 'sass'
require 'compass'

configure do
  Compass.add_project_configuration(File.join(Sinatra::Application.root, 'config.rb'))
  Compass.configuration do |config|
    config.project_path = File.dirname(__FILE__)
  end
    
  set :haml, { :format => :html5 }
  set :sass, Compass.sass_engine_options
end


get '/' do
  redirect '/index.html'
end