class Api::QuestionsController < ApplicationController

    def index
        @questions = Question.all
        # render :index
        render json: @questions
    end 

    def show 
        @question = Question.find(params[:id])
        # render :show
        render json: @question
    end

    def create
        @question = Question.new(question_params)
        debugger
        @question.author_id = current_user.id

        if @question.save
            # render :show
            render json: @question
        else
            render @question.errors.full_messages, status: 402
        end
    end 

    def update
        @question = Question.find(params[:id])
        # debugger
        if @question && @question.update(question_params)
            # render :show
            render json: @question
        else
            render @question.errors.full_messages, status: 402
        end
    end

    def destroy
        @question = Question.find(params[:id])
        # debugger
        if @question
            @question.destroy
            render json: @question
        else
            render json: ["Could not find question to delete."]
        end
    end 

    private

    def question_params 
        params.require(:question).permit(:subject, :body)
    end
end
