class LocksController < ApplicationController
    def index
        @locks = Lock.all 
        render json: @locks
    end

    def show 
        @lock = Lock.find(params[:id])
        render json: @lock
    end

    def update
        @lock = Lock.find(params[:id])
        @lock.update(locked: params[:lock][0]["locked"])
        render json: @lock
    end
end
