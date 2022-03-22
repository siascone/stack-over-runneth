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