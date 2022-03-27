class Api::AnswersController < ApplicationController

    def index
        @answers = Answer.all
        render json: @answers
    end

    def show
        @answer = Answer.find(params[:id])
        render json: @answer
    end

    def create
        @answer = Answer.new(answer_params)
        @answer.author_id = current_user.id

        if @answer.save
            render json: @answer
        else
            render json: @answer.errors.full_messages, status: 402
        end
    end

    def update
        @answer = Answer.find(params[:id])

        if @answer && @answer.update(answer_params)
            render json: @answer
        else
            render json: @answer.errors.full_messages, status: 402
        end
    end

    def destroy
        @answer = Answer.find(params[:id])

        if @answer.destroy
            render json: @answer
        else
            render json: ["Could not find question to delete."]
        end
    end

    private

    def answer_params
        params.require(:answer).permit(:question_id, :body)
    end
end
