# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  email              :string           not null
#  zipcode            :string           not null
#  password_digest    :string           not null
#  phone_num          :string           not null
#  session_token      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  fname              :string           not null
#  lname              :string           not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord
  validates :fname, :lname, :email, :zipcode, :password_digest, :phone_num, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}
  validates :email, :fname, :lname, length: { maximum: 17 }
  validates :zipcode, length: 5
  validates :phone_num, length: { minimum: 7, maximum: 15 }

  has_attached_file :image, default_url: ("https://s3.us-east-2.amazonaws.com/app-taskable-pro/default.jpeg")
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :tutors_for_hire,
    foreign_key: "user_id",
    class_name: 'TutorsForHire'

  has_many :reviews
  has_many :hired_tutors
  has_many :available_times
  has_many :times,
    through: :available_times,
    source: :time

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
