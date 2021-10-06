class Comment < ApplicationRecord
  belongs_to :sneaker_id
  belongs_to :user_id
end
