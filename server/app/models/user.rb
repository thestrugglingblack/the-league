class User < ApplicationRecord
  has_secure_token
  has_secure_password

  validates :first_name, :last_name, :password, :email_address, presence: true
end
