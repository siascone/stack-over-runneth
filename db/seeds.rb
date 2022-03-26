# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

User.destroy_all

spencer = User.create!(username: 'spennyandthejets', email: 'spencer@email.com', password: 'password')
alice = User.create!(username: 'alpal', email: 'alice@email.com', password: 'password')
nemo = User.create!(username: 'captainNemo', email: 'nemo@email.com', password: 'password')
bill = User.create!(username: 'billyShakes', email: 'william@shakespeare.com', password: 'theTempest')

Question.destroy_all

question_1 = Question.create!(
    subject: 'How do I ask a good question?',
    body: 'Write a subject that summarizes the specific problem. Introduce the 
    problem before you post any code. Help others reproduce the problem. Include 
    all relevant tags. Proof-read before posting! Post the question and respond 
    to feedback. Look for help asking for help.',
    author_id: spencer.id
)

question_2 = Question.create!(
    subject: 'How do I center a p in a div using display flex?',
    body: 'I already have text-align: center; Still it does not work. Any suggestions?',
    author_id: alice.id
)

Answer.destroy_all

answer_1 = Answer.create!(
    body: 'You could add justify-content: center and align-items: center to the style
    of the div. Alternatively you could give the p a margin: 0 auto.',
    author_id: spencer.id,
    question_id: question_2.id
)