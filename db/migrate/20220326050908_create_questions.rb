class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :subject, null: false
      t.text :body, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
  end
end
