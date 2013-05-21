require 'bcrypt'

class Player < ActiveRecord::Base
  validates :username, :uniqueness => true
  has_many :rounds
  has_many :games,  :through => :rounds


  attr_accessor :new_password
  before_save :hash_password

  def self.auth_password(password)
    BCrypt::Password.new(password)
  end

  def hash_password
    unless self.new_password.nil?
      self.password = BCrypt::Password.create(new_password)
    end
  end    
end

