class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.find_by(username: params[:username]) || User.create(username: params[:username])
    render json: @user, status: 201
  end

end
