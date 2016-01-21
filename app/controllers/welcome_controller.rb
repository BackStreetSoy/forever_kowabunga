class WelcomeController < ApplicationController
  def index
    @writings = Writing.all
  end
end
