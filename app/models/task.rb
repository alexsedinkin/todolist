class Task < ApplicationRecord
    def self.done
        where completed: true
    end

    def self.todo 
        where completed: false
    end
end
