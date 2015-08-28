class ApiController < ApplicationController
  before_filter :restriction_developer, except: [:create, :update, :destroy]
  before_filter :restriction_admin

  def list
    @place = Restaurant.all
    render json: @place
  end

  def create
    @place = Restaurant.create(restaurant_params)
    render json: @place
  end

  def read
    @place = Restaurant.find(params[:id])
    render json: @place
  end

  def update
    @place = Restaurant.find(params[:id])
    @place.update(restaurant_params)
    render json: @place
  end

  def destroy
    @place = Restaurant.find(params[:id]).destroy
    @message = {:message => 'A restaurant with an id of ' + params[:id] + ' has been destroyed.'}
    render json: @message
  end
end

private

def restaurant_params
  {:title => params[:title],
  :description => params[:description],
  :address => params[:address],
  :city => params[:city],
  :state => params[:state],
  :zip => params[:zip],
  :phone_number => params[:phone_number],
  :notes => params[:notes],
  :date_added => params[:date_added],
  :website => params[:website],
  :lth_review => params[:lth_review]}
end

def authenticate
  authenticate_or_request_with_http_token do |token, options|
    token == TOKEN
  end
end

def headers
   @headers ||= ActionController::Http::Headers.new(@env)
end

def restriction_admin
  authenticate_or_request_with_http_token do |token, options|
  ApiKey.exists?(access_token: token)
  end
end

def restriction_developer
  request.headers["Authorization"]
  authenticate_or_request_with_http_token do |token, options|
  ApiKey.exists?(access_token: token)
  end
end
