class Api::V1::UsersController < ApplicationController



  def create
    @user = User.find_by(name: params[:name]) || User.create(name: params[:name])
    render json: @user, status: 201
  end

end
