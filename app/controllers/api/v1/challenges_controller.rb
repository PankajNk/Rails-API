module Api
    module V1
        class ChallengesController < ApplicationController
            before_action :authenticate_user!, only: %i[create update destroy]
            before_action :set_challenge , only: %i[update, show, destory]
            before_action :authorize_user, only: %i[create update destory]

            def index
                @challenge = Challenge.all
                render json: @challenge
            end 

            def create
                # @challenge = Challenge.new(challenge_params.merge(user_id: current_user.id))
                @challenge = current_user.challenges.build(challenge_params)
                if @challenge.save
                    render json:{message: 'Challenge added successfully ',data: @challenge}
                else
                    render json:{message: 'Field to add the challenge ',data: @challenge.errors}
                end
            end

            def show
                if challenge
                    render json:{message: 'challenge found ',data: challenge}
                else
                    render json:{message: 'challenge not found  ',data: challenge}
                end
            end

            def update
                if challenge.update(challenge_params)
                    render json:{message: 'challenge updated',data: challenge}
                else
                    render json:{message: 'challenge NOT updated  ',data: challenge}
                end
            end

            def destory
                if challenge.destory
                    render json:{message: 'challenge deleted',data: challenge}
                else
                    render json:{message: 'challenge NOT delete  ',data: challenge}
                end
            end

            private

            def authorize_user
                return render json: {message: 'Forbidden actoin'} unless current_user.email == ENV['ADMIN_EMAIL']       
            end

            def set_challenge
                @challenge = Challenge.find(parmas(:id))
            end

            def challenge_params
                parmas .require(:challenge).permit(:title,:descriptiom,:strat_date,:end_date)
            end
        end
    end
end