class WritingsController < ApplicationController
  def index
     @writings = Writing.all
  end

  def show
     @writing = Writing.find(params[:id])
     puts "show!!!!"
    if request.xhr?
        render :json => @writing
        puts "hello"
    end 
  end

  private 

  def writing_params
    params.require(:writing).permit(:title, :content, :image)
  end

end
