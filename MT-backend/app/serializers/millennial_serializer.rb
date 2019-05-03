class MillennialSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :thirst, :avatar
  belongs_to :user
end
