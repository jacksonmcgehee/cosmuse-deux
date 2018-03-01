class Api::UsersController < ApplicationController

    def index
        @users = User.all

        render json: @users
    end

    def show
        @user = User.find(params[:id])
        @posts = @user.posts

        @response = { user: @user, posts: @posts }

        render json: @response
    end

    def create
        @user = User.create!(user_params)
        @users = User.all

        @response = { users: @users, user: @user }

        render json: @response
    end

    private
  
    def user_params
        params.require(:user).permit(:f_name, :l_name, :email, :profile_pic, :user_name)
    end

end
