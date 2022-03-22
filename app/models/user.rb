class User < ApplicationRecord

    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :username, uniqueness: true
    validates :session_token, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    before_validation :ensure_session_token
    attr_reader :password

    def password=(password) 
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end


end
