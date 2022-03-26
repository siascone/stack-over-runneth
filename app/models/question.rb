# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  subject    :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Question < ApplicationRecord
    validates :subject, :body, :author_id, presence: true

    has_many :answers,
        foreign_key: :question_id,
        class_name: :Answer

    belongs_to :user, 
        foreign_key: :author_id,
        class_name: :User

end
