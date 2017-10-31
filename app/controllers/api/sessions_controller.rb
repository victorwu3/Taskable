class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

  def fblogin
    @user = User.where(email: params[:email])

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ['No account linked to that Facebook!'], status: 401
    end
  end
end
