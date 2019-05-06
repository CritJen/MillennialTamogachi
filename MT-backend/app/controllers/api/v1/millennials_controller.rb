class Api::V1::MillennialsController < ApplicationController

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
  end

  def destroy
    @millennial = Millennial.find(params[:id])
    @millennial.destroy
    render "Deleted Successfully", status: 204
  end

end
