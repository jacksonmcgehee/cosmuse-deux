class Api::PostsController < ApplicationController
  def index
    @posts = Post.all

    render json: @posts
  end

  # def create
  # end

  def show
    @post = Post.find(params[:id])
    @user = User.find(@post.user_id)

    @response = { post: @post, user: @user} 

    render json: @response
  end

  # def update
  # end

  # def destroy
  # end
end
