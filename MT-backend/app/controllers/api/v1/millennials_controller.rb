class Api::V1::MillennialsController < ApplicationController
  before_action :set_millennial, only: [ :update, :destroy]

  def index
    @millennials = Millennial.all
    render json: @millennials
  end

  def create
    name = params[:millennial][:name]
    thirst = params[:millennial][:thirst]
    gender = params[:millennial][:gender]
    user = User.find(params[:user][:id])
    @millennial = Millennial.create({
      name: name,
      thirst: thirst,
      gender: gender,
      user: user
    })
    render json: @millennial, status: 201
  end

  def update
    @millennial.update( millennial_params)

    render json: @millennial, status: 201
  end

  def destroy
  end

  private

  def set_millennial
    @millennial = Millennial.find(params[:id])
  end

  def millennial_params
    params.require(:millennial).permit!
  end

end
