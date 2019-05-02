class Api::V1::MillennialsController < ApplicationController

  def index
    @millennials = Millennial.all
    render json: @millennials
  end

end
