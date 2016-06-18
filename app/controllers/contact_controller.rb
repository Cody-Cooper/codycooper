class ContactController < ApplicationController
  def index
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      redirect_to(root_path, :notice => "Thank you for contacting me. I will reply shortly!")
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
  end
end
