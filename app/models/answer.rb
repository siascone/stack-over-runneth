# == Schema Information
#
# Table name: answers
#
#  id          :bigint           not null, primary key
#  body        :text             not null
#  question_id :integer          not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Answer < ApplicationRecord
    validates :body, :question_id, :author_id, presence: true

    belongs_to :question, 
        foreign_key: :question_id,
        class_name: :Question

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User
end
