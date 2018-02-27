class Api::PostsController < ApplicationController
  def index
    @posts = Post.all

    render json: @posts
  end

  # def create
  # end

  # def show
  # end

  # def update
  # end

  # def destroy
  # end
end
