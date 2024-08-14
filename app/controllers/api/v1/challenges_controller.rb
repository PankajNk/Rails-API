module Api
    module V1
        class ChallengesController < ApplicationController
            def index
                @challenge = Challenge.all
                render json: @challenge
            end 

            def create
            end

            def show
            end

            def update
            end

            def destory
            end

            private

            def challenge_params
            end
        end
    end
end