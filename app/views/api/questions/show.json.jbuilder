json.question do 
    json.partial! 'question', question: @question
end

json.answers do 
    @question.answers.each do |answer|
        json.set! answer.id do 
            json.id answer.id
            json.author_id answer.author_id
            json.body answer.body
        end
    end
end