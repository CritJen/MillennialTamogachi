class MillennialsController < ApplicationController
  before_action : :find_millennial, only: [:update, :destroy]
  def index
    @millennials = Millennial.all
    render json: @millennials
  end

  def create
    @millennial = Millennial.create(millennial_params)
  end

  def update
    @millennial.update(millennial_params)
    render json: @millennial, status: :accepted
  end

  def destroy
    @millennial.delete
  end

  private

  def millennial_params
    params.permit!
  end

  def find_millennial
    @millennial = Millennial.find(params[:id])
  end

end
