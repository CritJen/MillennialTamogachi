class Api::V1::MillennialsController < ApplicationController

  def index
    @millennials = Millennial.all
    render json: @millennials
  end

  def create
    user = User.find_by(name: params[:user])
  end

  def update
  end

  def destroy
  end

end
