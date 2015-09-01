class RestaurantsController < ApplicationController

  def home
  end

  def about
  end

  def developer
  end

  def index
      @key = ENV['API_KEY']
  end

end
