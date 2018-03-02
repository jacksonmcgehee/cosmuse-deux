class Api::PostsController < ApplicationController
  def index
    @posts = Post.all

    render json: @posts
  end

  def create
    @post = Post.create!(post_params)
    @posts = User.find(@post.user_id).posts

    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    @user = User.find(@post.user_id)

    @response = { post: @post, user: @user} 

    render json: @response
  end

  def update
    @post = Post.find(params[:id])
    @post.update!(post_params)
    @posts = User.find(@post.user_id).posts

    @response = { posts: @posts, post: @post }
    render json: @response
  end

  def destroy
    @post = Post.find(params[:id]).destroy
    @posts = User.find(params[:user_id]).posts

    render json: @posts
end

  private
  
  def post_params
      params.require(:post).permit(:title, :author, :user_id, :picture, :body)
  end

end
