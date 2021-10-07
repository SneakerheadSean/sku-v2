class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  # before_action :only_user_crud, only: [:create, :update, :destroy]

  # GET /sneakers/:sneaker_id/comments
  def index
    @sneaker = Sneaker.find(params[:sneaker_id])
    @comments = @sneaker[:comments]

    render json: @comments
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    @sneaker = Sneaker.find(params[:sneaker_id])
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    @comment.sneaker = @sneaker

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if !@correct_user
      render json: "Unauthorized", status: :unauthorized
      return
    end
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    if !@correct_user
      render json: "Unauthorized", status: :unauthorized
      return
    end
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:sneaker_id, :user_id, :description)
    end

    # def only_user_crud
    #   @correct_user = @current_user.id == support_params[:user_id] 
    # end

end
