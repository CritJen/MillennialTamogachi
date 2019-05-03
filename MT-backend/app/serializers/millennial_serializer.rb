class MillennialSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :thirst, :gender
  belongs_to :user
end
